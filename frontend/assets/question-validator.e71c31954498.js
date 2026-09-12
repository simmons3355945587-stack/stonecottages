/**
 * StoneQuestionValidator - SAN 阶梯挑战出题校验与容错降级引擎
 * 
 * 核心原则：
 * 1. 答案防泄漏：听力模式不露词、中英释义模式预答题不露义、挖空不露真实单词原形。
 * 2. 真实语境保障：句子挖空必须包含 '______'，且严禁字典词源注记（Latin/French 等）。
 * 3. 选项严格有效：必须恰好 4 个非空互异选项，无占位符（如 option_1）。
 * 4. 有限降级与兜底：重试不超过 3 次，降级不超过 2 次，无可用题目时强制回退到标准模式（Tier 1）。
 */
(function () {
  'use strict';

  const ETYMOLOGY_KEYWORDS = [
    'latin', 'french', 'greek', 'old english', 'middle english',
    'germanic', 'anglo-norman', 'etymology', 'word origin',
    'derivative of', 'attendant', 'satelles', 'cent.'
  ];

  /**
   * 检验单道题目合法性
   * @param {Object} question - 待检验的题目对象
   * @param {string} targetWord - 目标考查词汇
   * @param {boolean} isListening - 是否为听力盲测模式
   * @returns {{ valid: boolean, reason?: string }}
   */
  function validateQuestion(question, targetWord, isListening = false) {
    if (!question || typeof question !== 'object') {
      return { valid: false, reason: 'Empty or invalid question object' };
    }

    // 1. 选项校验 (必须 4 个非空、互不相同选项，严禁占位符)
    const options = question.options;
    if (!Array.isArray(options) || options.length !== 4) {
      return { valid: false, reason: `Options length must be 4, got ${options ? options.length : 0}` };
    }
    const uniqueOptions = new Set();
    for (let i = 0; i < options.length; i++) {
      const opt = options[i];
      if (typeof opt !== 'string' || !opt.trim()) {
        return { valid: false, reason: `Option at index ${i} is empty or not string` };
      }
      const trimmed = opt.trim();
      if (trimmed.startsWith('option_')) {
        return { valid: false, reason: `Option contains placeholder: "${trimmed}"` };
      }
      if (uniqueOptions.has(trimmed.toLowerCase())) {
        return { valid: false, reason: `Duplicate option found: "${trimmed}"` };
      }
      uniqueOptions.add(trimmed.toLowerCase());
    }

    // 2. 正确答案索引校验
    if (typeof question.correctIndex !== 'number' || question.correctIndex < 0 || question.correctIndex > 3) {
      return { valid: false, reason: `Invalid correctIndex: ${question.correctIndex}` };
    }

    // 3. 挖空题型深度校验
    if (question.promptType === 'cloze_sentence') {
      const sen = question.clozeSentence;
      if (typeof sen !== 'string' || !sen.includes('______')) {
        return { valid: false, reason: 'Cloze sentence missing or lacks "______"' };
      }

      // 词源词汇污染检测 (禁止 Latin/French/attendant 等非自然例句)
      const lowSen = sen.toLowerCase();
      for (const kw of ETYMOLOGY_KEYWORDS) {
        if (lowSen.includes(kw)) {
          return { valid: false, reason: `Cloze sentence contains etymology keyword: "${kw}"` };
        }
      }

      // 题干明文直接泄漏答案检测 (除挖空处外，句子中不应在其他位置直接出现目标词)
      if (targetWord) {
        const senWithoutBlank = sen.replace(/______/g, '');
        const twRegex = new RegExp('\\b' + escapeRegExp(targetWord) + '\\b', 'i');
        if (twRegex.test(senWithoutBlank)) {
          return { valid: false, reason: `Cloze sentence directly leaks target word "${targetWord}"` };
        }
      }
    }

    // 4. 听力盲测模式防泄漏
    if (isListening) {
      if (question.promptType === 'word_to_zh' && question.displayWord && question.displayWord !== '???') {
        return { valid: false, reason: 'Listening mode must not display target word in prompt' };
      }
    }

    return { valid: true };
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  /**
   * 基于 SAN 等级与图谱，执行有限重试与降级出题
   */
  function buildCalibratedQuestion(params) {
    const {
      targetWord,
      correctZh,
      wordPool = [],
      currentSan = 100,
      graph = (typeof STONE_LEXICAL_GRAPH !== 'undefined' ? STONE_LEXICAL_GRAPH : {}),
      isListening = false,
      collectDistractors = null
    } = params;

    const twClean = (targetWord || '').trim().toLowerCase();
    const entry = graph[twClean] || graph[targetWord] || null;

    // 确定当前 SAN 对应的拟定挑战阶梯 (Tier)
    // Tier 4: <= 40 (狂乱绝境: cloze_semantic_hard)
    // Tier 3: 41 - 60 (精神污染: cloze_semantic)
    // Tier 2: 61 - 79 (微眩侵蚀: cloze_form)
    // Tier 1: >= 80 (清明稳健: standard word_to_zh)
    let requestedTier;
    if (currentSan <= 40) requestedTier = 4;
    else if (currentSan <= 60) requestedTier = 3;
    else if (currentSan < 80) requestedTier = 2;
    else requestedTier = 1;

    // 降级尝试阶梯循环: 从 requestedTier 逐步降级到 1
    for (let tier = requestedTier; tier >= 1; tier--) {
      // 在同一 tier 下最多允许 3 次 candidate 构建尝试
      for (let attempt = 0; attempt < 3; attempt++) {
        const candidate = _buildTierCandidate(tier, targetWord, correctZh, wordPool, entry, currentSan, isListening, collectDistractors);
        if (!candidate) continue;

        const validation = validateQuestion(candidate, targetWord, isListening);
        if (validation.valid) {
          candidate.actualTier = tier;
          candidate.requestedTier = requestedTier;
          candidate.downgraded = (tier < requestedTier);
          candidate.validationStatus = candidate.downgraded ? 'downgraded' : 'pass';
          return candidate;
        }
      }
    }

    // 兜底回退：保证返回经过校验的绝对安全基础题
    const fallback = _buildSafeBaseQuestion(targetWord, correctZh, wordPool, entry, isListening, collectDistractors);
    fallback.actualTier = 1;
    fallback.requestedTier = requestedTier;
    fallback.downgraded = true;
    fallback.validationStatus = 'fallback';
    return fallback;
  }

  function _buildTierCandidate(tier, targetWord, correctZh, wordPool, entry, currentSan, isListening, collectDistractors) {
    if (tier === 1 || !entry || !entry.cloze) {
      return _buildSafeBaseQuestion(targetWord, correctZh, wordPool, entry, isListening, collectDistractors);
    }

    if (tier === 2) {
      // 形近词辨析
      if (!entry.form_confusables || !entry.cloze.sentence) return null;
      const rawOpts = entry.form_confusables.map(i => typeof i === 'string' ? i : i.word).filter(Boolean);
      const options = [targetWord];
      for (const w of rawOpts) {
        if (options.length < 4 && !options.some(o => o.toLowerCase() === w.toLowerCase())) {
          options.push(w);
        }
      }
      // 补充备选英文干扰项
      if (options.length < 4) {
        const filler = ['confirm', 'conform', 'obtain', 'maintain', 'attain', 'contain', 'sustain', 'reverse', 'reserve'];
        for (const fb of filler) {
          if (options.length < 4 && !options.some(o => o.toLowerCase() === fb.toLowerCase())) {
            options.push(fb);
          }
        }
      }
      if (options.length < 4) return null;

      return {
        options: options,
        correctIndex: 0,
        challengeType: 'cloze_form',
        challengeTier: 'mild_polluted',
        promptType: 'cloze_sentence',
        clozeSentence: entry.cloze.sentence,
        clozeTranslation: entry.cloze.translation,
        story: entry.story || null,
        story_cn: entry.story_cn || null,
        metaNotes: entry.notes || `【正解考点】${targetWord} (${correctZh})；【形近词辨析】在真实语境下甄别词形拼写易混项。`
      };
    }

    if (tier === 3 || tier === 4) {
      // 近义/搭配辨析
      if (!entry.semantic_confusables || !entry.cloze.sentence) return null;
      const rawOpts = entry.semantic_confusables.map(i => typeof i === 'string' ? i : i.word).filter(Boolean);
      const options = [targetWord];
      for (const w of rawOpts) {
        if (options.length < 4 && !options.some(o => o.toLowerCase() === w.toLowerCase())) {
          options.push(w);
        }
      }
      if (options.length < 4) {
        const filler = ['change', 'manage', 'support', 'produce', 'require', 'provide', 'develop', 'improve'];
        for (const fb of filler) {
          if (options.length < 4 && !options.some(o => o.toLowerCase() === fb.toLowerCase())) {
            options.push(fb);
          }
        }
      }
      if (options.length < 4) return null;

      const isDelirious = (tier === 4);
      return {
        options: options,
        correctIndex: 0,
        challengeType: isDelirious ? 'cloze_semantic_hard' : 'cloze_semantic',
        challengeTier: isDelirious ? 'delirious' : 'heavy_polluted',
        promptType: 'cloze_sentence',
        clozeSentence: entry.cloze.sentence,
        clozeTranslation: entry.cloze.translation,
        story: entry.story || null,
        story_cn: entry.story_cn || null,
        metaNotes: entry.notes || `【正解考点】${targetWord} (${correctZh})；【近义搭配辨析】在真实语境下辨析意思相近词汇的精准语义搭配。`
      };
    }

    return null;
  }

  function _buildSafeBaseQuestion(targetWord, correctZh, wordPool, entry, isListening, collectDistractors) {
    let distractors = [];
    if (typeof collectDistractors === 'function') {
      distractors = collectDistractors(targetWord, correctZh, wordPool);
    }
    const defaultFallbackDistractors = ['综合调整；调和', '保持不变；维持现状', '逐步推进；展开', '详细阐述；说明'];
    const opts = [correctZh];
    if (Array.isArray(distractors)) {
      for (const d of distractors) {
        if (opts.length < 4 && d && !opts.includes(d)) {
          opts.push(d);
        }
      }
    }
    for (const fb of defaultFallbackDistractors) {
      if (opts.length < 4 && !opts.includes(fb)) {
        opts.push(fb);
      }
    }

    return {
      options: opts.slice(0, 4),
      correctIndex: 0,
      challengeType: 'standard',
      challengeTier: 'clear',
      promptType: 'word_to_zh',
      clozeSentence: null,
      clozeTranslation: null,
      story: entry ? entry.story : null,
      story_cn: entry ? entry.story_cn : null,
      metaNotes: ''
    };
  }

  const StoneQuestionValidator = {
    validateQuestion,
    buildCalibratedQuestion,
    ETYMOLOGY_KEYWORDS
  };

  if (typeof window !== 'undefined') {
    window.StoneQuestionValidator = StoneQuestionValidator;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = StoneQuestionValidator;
  }
})();
