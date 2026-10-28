/**
 * Our Stone Cottages - Cards Module (Tarot Arcana Skills)
 * 从 app.js 中抽离出来的卡牌与塔罗独立定义
 */
(function() {
  'use strict';

  const TAROT_SKILLS = [
  {
    "name": "The Devil",
    "skill": "暗夜贪婪契约",
    "desc": "战斗节点与Boss金币掉落 +40%，Boss击败额外双倍金币。",
    "cost": "⚠️ 代价: 受到伤害 +25%，商人营地物价上浮 20%",
    "category": "被动遗物",
    "categoryType": "passive",
    "focusCost": 0,
    "icon": "🔥",
    "type": "devil",
    "rarity": "SSR"
  },
  {
    "name": "Death",
    "skill": "绝境舍弃追猎",
    "desc": "放弃当前卡壳生词题安全跳过，不扣除生命与理智。",
    "cost": "⚠️ 代价: 消耗 1 专注。该词烙上【死神血印】，下层必定以精英怪再临（双倍血量、双倍赏金）",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "🦅",
    "type": "death",
    "rarity": "SSR"
  },
  {
    "name": "The Chariot",
    "skill": "破釜沉舟冲刺",
    "desc": "开启 3 题极速冲刺，连续答对连击+3且连击金币+50%。",
    "cost": "⚠️ 代价: 消耗 1 专注。冲刺期间只要答错 1 题即承受双倍创伤并中断冲刺",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "⚡",
    "type": "chariot",
    "rarity": "SSR"
  },
  {
    "name": "The Moon",
    "skill": "幻象理智博弈",
    "desc": "全局结算风险倍率 Risk Multiplier +0.5x。",
    "cost": "⚠️ 代价: 初始理智 -20 SAN，且干扰项更具迷惑性",
    "category": "被动遗物",
    "categoryType": "passive",
    "focusCost": 0,
    "icon": "🌙",
    "type": "moon",
    "rarity": "SSR"
  },
  {
    "name": "The Hermit",
    "skill": "语言学微光",
    "desc": "显露目标词词根/前缀线索，并排除 1 个高危形近干扰项（保留 3 选 1）。",
    "cost": "⚠️ 代价: 消耗 1 专注。依靠线索作答本题金币收益 -30%",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "💡",
    "type": "hint",
    "rarity": "SR"
  },
  {
    "name": "The Magician",
    "skill": "专注时流停滞",
    "desc": "认知倒计时冻结 6 秒，并触发清晰原音发音重播，助你稳定心智分析词形。",
    "cost": "消耗: 1 专注",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "⏳",
    "type": "freeze_time",
    "rarity": "SR"
  },
  {
    "name": "Strength",
    "skill": "认知坚韧护甲",
    "desc": "选错时不直接扣减生命，而是将创伤 100% 转化为临时灰血。",
    "cost": "⚠️ 代价: 消耗全部专注。该错词将在 3 题后以强化形态再次复现",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 999,
    "icon": "🔰",
    "type": "shield_gray",
    "rarity": "SR"
  },
  {
    "name": "Temperance",
    "skill": "身心平衡抚慰",
    "desc": "错词回忆灰血恢复量翻倍 (+4 HP)，并抚慰恢复 +10 SAN。",
    "cost": "消耗: 1 专注",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "🕊️",
    "type": "temperance",
    "rarity": "SR"
  },
  {
    "name": "Wheel of Fortune",
    "skill": "顺势逆境轮转",
    "desc": "将当前卡壳难题推后 3 题再答，临时置换为一道考纲标准题。",
    "cost": "消耗: 1 专注",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "🌪️",
    "type": "reroll",
    "rarity": "SR"
  },
  {
    "name": "Judgement",
    "skill": "悬赏赏金清算",
    "desc": "结算时将本次远征最高频错词列为【通缉目标】，下一次出征消灭该词获得双倍经验与金币。",
    "cost": "长效生效",
    "category": "命运长效",
    "categoryType": "destiny",
    "focusCost": 0,
    "icon": "🎺",
    "type": "bounty",
    "rarity": "SR"
  },
  {
    "name": "The Sun",
    "skill": "晨光免罪庇佑",
    "desc": "前 3 题中首次失误免除扣血与掉理智。",
    "cost": "⚠️ 代价: 本局全场金币收益 -15%",
    "category": "被动遗物",
    "categoryType": "passive",
    "focusCost": 0,
    "icon": "☀️",
    "type": "sun_forgive",
    "rarity": "R"
  },
  {
    "name": "Justice",
    "skill": "秩序理智天平",
    "desc": "本题判定生还时立即抚慰恢复 +15 SAN 理智值。",
    "cost": "消耗: 1 专注",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "⚖️",
    "type": "justice",
    "rarity": "R"
  },
  {
    "name": "The Star",
    "skill": "灵感词性回眸",
    "desc": "透视词性与首字母骨架提示 (如 adj. [d...])。",
    "cost": "消耗: 1 专注",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "✨",
    "type": "pos_hint",
    "rarity": "R"
  },
  {
    "name": "The Empress",
    "skill": "生机灰血温存",
    "desc": "立即将当前全部残留灰血转化为永久生命值 HP。",
    "cost": "消耗: 1 专注",
    "category": "主动战术",
    "categoryType": "active",
    "focusCost": 1,
    "icon": "💚",
    "type": "heal_gray",
    "rarity": "R"
  },
  {
    "name": "The Fool",
    "skill": "初生探索漫步",
    "desc": "出征初始专注点 Focus +1。",
    "cost": "⚠️ 代价: 商人营地无法享受折价",
    "category": "被动遗物",
    "categoryType": "passive",
    "focusCost": 0,
    "icon": "🃏",
    "type": "fool_focus",
    "rarity": "R"
  },
  {
    "name": "The World",
    "skill": "万象认知图谱",
    "desc": "出征佩戴被动自动触发：每连续答对 3 题自动抚慰恢复 +15 SAN，并将全部灰血固化愈合为永久生命值，额外回复 1 点专注！",
    "cost": "⚠️ 自动触发: 保持连击认知大圆满",
    "category": "被动遗物",
    "categoryType": "passive",
    "focusCost": 0,
    "icon": "🌍",
    "type": "world_auto",
    "rarity": "R"
  }
];

  window.StoneTarotSkills = TAROT_SKILLS;
  if (typeof window.tarotArcanaSkills === 'undefined') {
    window.tarotArcanaSkills = TAROT_SKILLS;
  }

  console.info('[CardsModule] TarotSkills loaded (' + TAROT_SKILLS.length + ' skills).');
})();
