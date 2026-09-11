/* Shared UI preferences. Learning state remains owned by existing modules. */
(() => {
  const listening=location.pathname.startsWith('/cet4');
  document.body.classList.add(listening?'stone-listening':'stone-home');
  let preferences={};try{preferences=JSON.parse(localStorage.getItem('stone-ui-v2')||'{}');}catch{}
  const save=()=>{try{localStorage.setItem('stone-ui-v2',JSON.stringify(preferences));}catch{}};
  const apply=()=>{for(const name of ['words','story','listening'])document.documentElement.style.setProperty('--stone-'+name+'-size',Math.max(16,Math.min(24,Number(preferences[name])||18))+'px');};
  window.StoneUI={get spaceSubmit(){return preferences.spaceSubmit===true;}};
  apply();
  const dialog=document.createElement('dialog');dialog.id='stonePreferences';dialog.setAttribute('aria-labelledby','stonePreferencesTitle');
  dialog.innerHTML=`<div class="stone-dialog-heading"><h2 id="stonePreferencesTitle">阅读与学习设置</h2><button type="button" data-close aria-label="关闭设置">×</button></div>
    <p class="stone-muted">按你的习惯调整，关闭后自动保存。</p>
    <section class="stone-preference-section"><h3>阅读字号</h3>${[['words','词库'],['story','小说'],['listening','精听']].map(([key,label])=>`<div class="stone-size-row"><span>${label}</span><button data-size="${key}" data-step="-1" aria-label="缩小${label}字号">A−</button><output id="stoneSize-${key}" aria-live="polite"></output><button data-size="${key}" data-step="1" aria-label="放大${label}字号">A+</button></div>`).join('')}</section>
    <section class="stone-preference-section"><h3>外观与声音</h3><div id="stoneAppearance"></div></section>
    ${!listening?`
    <section class="stone-preference-section">
      <h3>⚔️ 远征与系统偏好</h3>
      <div style="margin-bottom:12px;">
        <label for="stoneExpMarkPref" style="font-size:13px; font-weight:700; color:var(--text-primary); display:block; margin-bottom:5px;">远征答对扣减 Mark</label>
        <select id="stoneExpMarkPref" style="width:100%; padding:8px 10px; font-size:13px; border-radius:var(--radius-sm); border:1.5px solid var(--paper-border); background:var(--paper-surface-sub); color:var(--text-primary); cursor:pointer;">
          <option value="true">★ 答对自动扣减 1 次 Mark（默认 · 熟练出库）</option>
          <option value="false">🔒 答对不减 Mark（生词标记保持不变）</option>
        </select>
        <div class="stone-muted" style="font-size:11px; margin-top:3px;">控制在远征或剧情闯关中答对时，是否自动扣减生词本上的 Mark 标记。</div>
      </div>
      <div style="margin-bottom:4px;">
        <label for="stoneLangModePref" style="font-size:13px; font-weight:700; color:var(--text-primary); display:block; margin-bottom:5px;">词典释义模式</label>
        <select id="stoneLangModePref" style="width:100%; padding:8px 10px; font-size:13px; border-radius:var(--radius-sm); border:1.5px solid var(--paper-border); background:var(--paper-surface-sub); color:var(--text-primary); cursor:pointer;">
          <option value="zh">🇨🇳 中文双语增强模式（呈现释义与例句翻译）</option>
          <option value="en">🇬🇧 纯英沉浸学术模式（仅显示英文释义）</option>
        </select>
      </div>
    </section>
    `:''}
    ${listening?'<section class="stone-preference-section"><label class="stone-check"><input type="checkbox" id="stoneSpaceSubmit">空格提交（极速练习）</label><p class="stone-muted">默认用 Enter 或「验证」。开启后，物理空格键也可提交；输入法自动补空格不会提交。</p></section>':''}
    <details class="stone-shortcut-help"><summary>键盘操作</summary><p>${listening?'Enter：提交当前答案；输入框以外 Space：播放 / 暂停。':'/：搜索；词典中 ← / →：切词，Space：发音，+ / −：标记；小说 A / B / C：答题。'}<br>Esc：关闭当前面板。?：打开本设置。</p></details>
    ${!listening?`
    <div style="margin-top:14px; display:flex; gap:8px; flex-wrap:wrap;">
      <button type="button" id="stoneOpenTutorialBtn" style="flex:1; padding:9px 12px; font-size:12.5px; font-weight:700; border-radius:var(--radius-sm); border:1.5px solid var(--paper-border); background:var(--paper-surface-sub); color:var(--text-primary); cursor:pointer;">📖 新手引导教程</button>
      <button type="button" id="stoneAdvanced" style="flex:1; padding:9px 12px; font-size:12.5px; font-weight:700; border-radius:var(--radius-sm); border:1.5px solid var(--paper-border); background:var(--paper-surface-sub); color:var(--text-primary); cursor:pointer;">🛠️ 更多高级设置 (AI通道/备份)</button>
    </div>
    `:''}`;
  document.body.append(dialog);
  const updateLabels=()=>{
    for(const key of ['words','story','listening']){
      const size=Math.max(16,Math.min(24,Number(preferences[key])||18));
      document.getElementById('stoneSize-'+key).textContent=size+' px';
      dialog.querySelector(`[data-size="${key}"][data-step="-1"]`).disabled=size<=16;
      dialog.querySelector(`[data-size="${key}"][data-step="1"]`).disabled=size>=24;
    }
    const markPrefEl = document.getElementById('stoneExpMarkPref');
    if (markPrefEl && typeof appSettings !== 'undefined' && appSettings) {
      markPrefEl.value = (appSettings.expeditionAutoReduceMark === false) ? 'false' : 'true';
    }
    const langModeEl = document.getElementById('stoneLangModePref');
    if (langModeEl && typeof appSettings !== 'undefined' && appSettings) {
      langModeEl.value = (appSettings.dictLanguageMode === 'zh') ? 'zh' : 'en';
    }
  };
  updateLabels();
  dialog.querySelector('[data-close]').onclick=()=>dialog.close();
  dialog.addEventListener('click',e=>{const b=e.target.closest('[data-size]');if(!b)return;const key=b.dataset.size;preferences[key]=Math.max(16,Math.min(24,(Number(preferences[key])||18)+Number(b.dataset.step)));apply();updateLabels();save();});
  const appearance=document.getElementById('stoneAppearance');
  for(const id of listening?['themeToggleBtn']:['themeBtn','audioBtn']){const button=document.getElementById(id);if(button){appearance.append(button);button.classList.add('stone-setting-icon');button.setAttribute('aria-label',id==='audioBtn'?'切换学习音效':'切换明暗主题');const label=document.createElement('span');label.textContent=id==='audioBtn'?'学习音效':'明暗主题';appearance.append(label);}}
  const space=document.getElementById('stoneSpaceSubmit');if(space){space.checked=preferences.spaceSubmit===true;space.onchange=()=>{preferences.spaceSubmit=space.checked;save();};}

  document.getElementById('stoneExpMarkPref')?.addEventListener('change', (e) => {
    if (typeof appSettings !== 'undefined' && appSettings) {
      appSettings.expeditionAutoReduceMark = (e.target.value !== 'false');
      if (typeof saveToStorage === 'function') saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
      const mainCfgEl = document.getElementById('cfgExpeditionAutoReduceMark');
      if (mainCfgEl) mainCfgEl.value = e.target.value;
      if (typeof showToast === 'function') {
        showToast(appSettings.expeditionAutoReduceMark ? '★ 远征答对将自动扣减 1 次 Mark' : '🔒 远征答对将保持 Mark 锁定不减');
      }
    }
  });

  document.getElementById('stoneLangModePref')?.addEventListener('change', (e) => {
    if (typeof appSettings !== 'undefined' && appSettings) {
      appSettings.dictLanguageMode = e.target.value;
      appSettings.showChinese = (e.target.value === 'zh');
      if (typeof saveToStorage === 'function') saveToStorage(STORAGE_KEYS.SETTINGS, appSettings);
      const mainLangEl = document.getElementById('cfgDictLanguageMode');
      if (mainLangEl) mainLangEl.value = e.target.value;
      if (typeof updateQuickLangBtn === 'function') updateQuickLangBtn();
      if (typeof currentSubTab !== 'undefined' && currentSubTab === 'all') {
        const s = document.getElementById('searchInput');
        if (typeof renderWords === 'function') renderWords(s ? s.value : '');
      } else if (typeof renderMarked === 'function') {
        renderMarked();
      }
      if (typeof showToast === 'function') {
        showToast(appSettings.showChinese ? '🇨🇳 已切换为【中文双语增强模式】' : '🇬🇧 已切换为【纯英沉浸模式】');
      }
    }
  });

  document.getElementById('stoneOpenTutorialBtn')?.addEventListener('click', () => {
    dialog.close();
    if (typeof openOnboardingTutorial === 'function') {
      openOnboardingTutorial(true);
    }
  });

  document.getElementById('stoneAdvanced')?.addEventListener('click',()=>{dialog.close();openSettingsModal();});
  let opener=document.getElementById('settingsBtn');
  if(!opener){opener=document.createElement('button');opener.className='paper-icon-btn';opener.id='stoneSettingsBtn';opener.textContent='⚙';document.querySelector('.header-controls').append(opener);}
  const showStonePreferences = () => {
    updateLabels();
    if (typeof appSettings !== 'undefined' && appSettings) {
      const expPref = document.getElementById('stoneExpeditionAutoReduceMark');
      if (expPref) expPref.value = String(appSettings.expeditionAutoReduceMark !== false);
      const langPref = document.getElementById('stoneLangModePref');
      if (langPref) langPref.value = appSettings.dictLanguageMode || (appSettings.showChinese ? 'zh' : 'en');
    }
    dialog.showModal();
  };
  opener.removeAttribute('onclick');opener.setAttribute('aria-label','阅读与学习设置');opener.title='阅读与学习设置';opener.onclick=showStonePreferences;
  window.openStonePreferences = showStonePreferences;
  window.closeStonePreferences = () => dialog.close();
  window.addEventListener('keydown',e=>{if(e.isComposing||e.ctrlKey||e.metaKey||e.altKey||e.repeat)return;const typing=e.target.closest?.('input,textarea,select,[contenteditable="true"]');if(e.key==='?'&&!typing&&!dialog.open){e.preventDefault();dialog.showModal();}if(listening&&e.code==='Space'&&!typing&&!dialog.open&&!e.target.closest?.('button,a,summary')){e.preventDefault();document.getElementById('mainPlayBtn')?.click();}});
  const keyboardState=()=>{const editing=!!document.activeElement?.matches('input,textarea,[contenteditable="true"]');const compressed=window.visualViewport&&window.innerHeight-window.visualViewport.height>140;document.body.classList.toggle('stone-keyboard-open',!!(editing&&compressed));};
  window.visualViewport?.addEventListener('resize',keyboardState);document.addEventListener('focusin',keyboardState);document.addEventListener('focusout',()=>setTimeout(keyboardState,0));
  const symbols={cottage:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',words:'<path d="M4 4h6a3 3 0 0 1 3 3v14a4 4 0 0 0-4-2H4zM13 7a3 3 0 0 1 3-3h4v15h-3a4 4 0 0 0-4 2"/>',listening:'<path d="M4 14v-3a8 8 0 0 1 16 0v3M4 12H3v7h4v-7zm16 0h1v7h-4v-7z"/>',games:'<path d="M7 7h10a4 4 0 0 1 4 4l1 7-4 1-3-4H9l-3 4-4-1 1-7a4 4 0 0 1 4-4zM6 10v5m-2-2.5h4M16 11h.1M19 14h.1"/>',mine:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a8 8 0 0 1 16 0v3"/>'};
  const icon=name=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${symbols[name]}</svg>`;
  const account=document.createElement('dialog');account.id='stoneAccount';account.setAttribute('aria-labelledby','stoneAccountTitle');account.innerHTML='<div class="stone-dialog-heading"><h2 id="stoneAccountTitle">我的小石屋</h2><button data-account-close aria-label="关闭我的页面">×</button></div><p class="stone-muted" id="stoneAccountStatus"></p><div class="stone-account-links"><button data-account-action="login">账号与同步</button><button data-account-action="settings">阅读与学习设置</button><button data-account-action="marked">重点生词本</button><button data-account-action="cards">我的卡牌</button></div>';
  document.body.append(account);account.querySelector('[data-account-close]').onclick=()=>account.close();
  const openAccount=()=>{document.getElementById('stoneAccountStatus').textContent=!listening&&typeof authUser!=='undefined'&&authUser?authUser.username+' · 学习进度按账号保存':'登录后可在设备之间同步学习进度。';account.showModal();};
  account.addEventListener('click',e=>{const b=e.target.closest('[data-account-action]');if(!b)return;account.close();const action=b.dataset.accountAction;if(action==='settings'){dialog.showModal();return;}if(listening){location.href='/?view='+({login:'mine',marked:'marked',cards:'profile'}[action]);return;}if(action==='login')openAuthModal();else if(action==='cards')switchNavView('profile').then(()=>openCodexModal());else switchNavView('words').then(()=>switchSubTab('marked'));});
  const mobileNav=document.createElement('nav');mobileNav.className='stone-mobile-nav';mobileNav.setAttribute('aria-label','主要功能');mobileNav.innerHTML=`<button data-main-nav="cottage">${icon('cottage')}<span>石屋</span></button><a href="/" data-main-nav="words">${icon('words')}<span>词库</span></a><a href="/cet4/" data-main-nav="listening">${icon('listening')}<span>精听</span></a><button data-main-nav="games">${icon('games')}<span>远征</span></button><button data-main-nav="mine">${icon('mine')}<span>我的</span></button>`;document.body.append(mobileNav);
  mobileNav.querySelector('[data-main-nav="cottage"]').onclick=e=>{e.preventDefault();if(listening)location.href='/?view=cottage';else switchNavView('cottage');};
  mobileNav.querySelector('[data-main-nav="mine"]').onclick=openAccount;
  mobileNav.querySelector('[data-main-nav="games"]').onclick=()=>{const last=['survival','match','profile'].includes(preferences.lastGame)?preferences.lastGame:'survival';if(listening)location.href='/?view='+last;else switchNavView(last);};
  if(listening)mobileNav.querySelector('[data-main-nav="listening"]').setAttribute('aria-current','page');
  if(!listening){
    mobileNav.querySelector('[data-main-nav="words"]').onclick=e=>{e.preventDefault();switchNavView('words');};
    const dock=document.querySelector('.bottom-dock');dock.setAttribute('role','navigation');dock.setAttribute('aria-label','主要功能');
    for(const [id,name,label] of [['navCottage','cottage','石屋大厅'],['navWords','words','词库'],['navSurvival','games','荒原远征'],['navMatch','games','消消乐'],['navProfile','games','塔罗卡牌'],['navCet4','listening','四级精听']]){const b=document.getElementById(id);b.querySelector('.nav-icon').innerHTML=icon(name);b.querySelector('span:last-child').textContent=label;}
    const mine=document.createElement('button');mine.className='nav-item';mine.innerHTML=icon('mine')+'<span>我的</span>';mine.onclick=openAccount;dock.append(mine);
    const gameNav=document.createElement('nav');gameNav.className='stone-game-subnav';gameNav.setAttribute('aria-label','闯关方式');gameNav.innerHTML='<button data-game="survival">荒原远征</button><button data-game="match">消消乐</button><button data-game="profile">塔罗卡牌</button>';document.querySelector('.container').prepend(gameNav);gameNav.onclick=e=>{const b=e.target.closest('[data-game]');if(b)switchNavView(b.dataset.game);};
    const syncNavigation=()=>{const active=document.querySelector('.view-section.active')?.id;const name={viewCottage:'cottage',viewWords:'words',viewSurvival:'survival',viewMatch:'match',viewProfile:'profile',viewExpeditionMap:'expedition_map'}[active]||'cottage';document.body.dataset.activeView=name;if(!['cottage','words'].includes(name)){preferences.lastGame=(name==='expedition_map'?'survival':name);save();}mobileNav.querySelectorAll('[data-main-nav]').forEach(b=>{if(b.dataset.mainNav===(name==='words'?'words':'games'))b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});gameNav.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.game===(name==='expedition_map'?'survival':name))));};
    for(const view of document.querySelectorAll('.view-section'))new MutationObserver(syncNavigation).observe(view,{attributes:true,attributeFilter:['class']});syncNavigation();
    const reading=document.createElement('button');reading.id='stoneReadingToggle';reading.className='stone-reading-toggle';reading.textContent='专注阅读';reading.setAttribute('aria-pressed','false');document.getElementById('viewSurvival').prepend(reading);reading.onclick=()=>{const on=document.body.classList.toggle('stone-reading');reading.setAttribute('aria-pressed',String(on));reading.textContent=on?'退出专注阅读':'专注阅读';};
    const route=new URLSearchParams(location.search).get('view');if(['cottage','survival','match','profile','words','expedition_map'].includes(route))switchNavView(route);else if(route==='mine')openAccount();else if(route==='marked')switchNavView('words').then(()=>switchSubTab('marked'));else switchNavView('cottage');
    document.querySelector('.brand-text h1').textContent='Our Stone Cottages';document.querySelector('.brand-text p').textContent='小石屋 · 在折纸与词汇的废墟中生存';document.querySelector('.brand')?.addEventListener('click',()=>switchNavView('cottage'));if(document.querySelector('.brand'))document.querySelector('.brand').style.cursor='pointer';
    const updateHeroCount=()=>{const c=document.getElementById('filterResultCountChip'),h=document.getElementById('heroStudyCount');if(c&&h)h.textContent=c.textContent.replace(/[^\d]/g,'')||'480';};
    const chipEl=document.getElementById('filterResultCountChip');if(chipEl){new MutationObserver(updateHeroCount).observe(chipEl,{childList:true,characterData:true,subtree:true});updateHeroCount();}
    const view=document.getElementById('viewWords');
    const density=document.createElement('div');density.className='stone-list-tools';density.innerHTML='<span>词库浏览</span><div role="group" aria-label="词卡显示方式"><button data-density="compact">紧凑列表</button><button data-density="cards">卡片学习</button></div>';
    view.insertBefore(density,document.getElementById('wordsListContainer'));
    const setDensity=value=>{document.body.dataset.wordDensity=value;density.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.density===value)));};
    setDensity(preferences.density==='cards'?'cards':'compact');density.onclick=e=>{const b=e.target.closest('[data-density]');if(b){preferences.density=b.dataset.density;save();setDensity(preferences.density);}};
    const drawer=document.getElementById('defDrawer');drawer.setAttribute('aria-label','单词释义');drawer.tabIndex=-1;
    const footer=document.createElement('div');footer.className='stone-dictionary-actions';footer.innerHTML='<button data-adjacent="-1" aria-label="上一个单词" title="[←] 上一个单词">← 上一个</button><button id="stoneDrawerMarkMinus" data-mark-action="reduce" title="[-] 减少标记 (Mark -1)" aria-label="减少标记">★ -1</button><button id="stoneDrawerMarkAdd" data-mark-action="add" title="[+] 增加标记 (Mark +1)" aria-label="增加标记">★ +1 · 0</button><button data-adjacent="1" aria-label="下一个单词" title="[→] 下一个单词">下一个 →</button>';
    drawer.append(footer);
    footer.onclick=e=>{const b=e.target.closest('button');if(!b||typeof currentLookupWord==='undefined'||!currentLookupWord)return;if(b.dataset.adjacent){const w=getAdjacentWord(currentLookupWord,Number(b.dataset.adjacent));if(w)openWordDetails(w);}else if(b.id==='stoneDrawerMarkMinus'||b.dataset.markAction==='reduce'){if(typeof reduceMark==='function')reduceMark(currentLookupWord);refreshMark();}else if(b.id==='stoneDrawerMarkAdd'||b.id==='stoneDrawerMark'||b.dataset.markAction==='add'){if(typeof addMark==='function')addMark(currentLookupWord);refreshMark();}};
    const refreshMark=()=>{if(typeof currentLookupWord==='undefined'||!currentLookupWord)return;const count=typeof getMarkCount==='function'?getMarkCount(currentLookupWord):0;const addBtn=document.getElementById('stoneDrawerMarkAdd')||document.getElementById('stoneDrawerMark');if(addBtn)addBtn.textContent='★ +1 · '+count;const minusBtn=document.getElementById('stoneDrawerMarkMinus');if(minusBtn){minusBtn.disabled=(count<=0);minusBtn.style.opacity=(count<=0)?'0.4':'1';minusBtn.title=(count<=0)?'未标记':'[-] 减少标记 (Mark -1)';}const drawerCount=document.getElementById('drawerMarkCount');if(drawerCount)drawerCount.textContent=count;};
    new MutationObserver(refreshMark).observe(document.getElementById('defDrawerContent'),{childList:true,subtree:true,characterData:true});
    let returnFocus=null,wasOpen=false;
    const syncDrawer=()=>{const open=drawer.classList.contains('open'),docked=matchMedia('(min-width:1100px)').matches&&view.classList.contains('active');drawer.setAttribute('role',docked?'complementary':'dialog');drawer.setAttribute('aria-modal',String(!docked));drawer.setAttribute('aria-hidden',String(!open));drawer.inert=!open;if(open&&!wasOpen){returnFocus=document.activeElement;if(!docked)drawer.focus({preventScroll:true});}if(!open&&wasOpen&&returnFocus?.isConnected)returnFocus.focus({preventScroll:true});wasOpen=open;};
    new MutationObserver(syncDrawer).observe(drawer,{attributes:true,attributeFilter:['class']});new MutationObserver(syncDrawer).observe(view,{attributes:true,attributeFilter:['class']});window.addEventListener('resize',syncDrawer);syncDrawer();
    drawer.addEventListener('keydown',e=>{if(e.key!=='Tab'||drawer.getAttribute('aria-modal')!=='true')return;const items=Array.from(drawer.querySelectorAll('button,a,input,select,[tabindex="0"]')).filter(el=>!el.disabled&&el.getClientRects().length);const first=items[0],last=items.at(-1);if(e.shiftKey&&(document.activeElement===first||document.activeElement===drawer)){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}});
  }else{
    document.querySelector('.brand-title h1').textContent='四级精听';document.querySelector('.brand-title p').textContent='小石屋 · 专注每一句';
    const tools=document.createElement('div');tools.className='stone-listening-tools';tools.innerHTML='<span>专注当前练习</span><div><button data-panel="transcript">原文栏</button><button data-panel="overview">战绩栏</button></div>';
    const workspace=document.querySelector('.workspace-grid');workspace.before(tools);
    const applyPanels=()=>{for(const name of ['transcript','overview']){const visible=preferences['panel-'+name]??(name==='transcript');document.body.classList.toggle('stone-'+name+'-hidden',!visible);tools.querySelector(`[data-panel="${name}"]`).setAttribute('aria-expanded',String(visible));}};
    applyPanels();tools.onclick=e=>{const b=e.target.closest('[data-panel]');if(b){preferences['panel-'+b.dataset.panel]=b.getAttribute('aria-expanded')!=='true';save();applyPanels();}};
    const hero=document.getElementById('startTrainingHero');
    const syncHero=()=>document.body.classList.toggle('stone-training-ready',hero.style.display!=='none');new MutationObserver(syncHero).observe(hero,{attributes:true,attributeFilter:['style']});syncHero();
  }

  // ==========================================
  // 🧭 小石屋新手引导教程 (Onboarding Walkthrough)
  // ==========================================
  let currentOnboardingStep = 1;
  const TOTAL_ONBOARDING_STEPS = 5;

  const ONBOARDING_TITLES = {
    1: '欢迎来到小石屋 · 避难所世界观',
    2: '折纸词库与生词标记 (Mark 记忆阶梯)',
    3: '推门出征 · 两大学习模式与认知复现',
    4: '灰血自愈与塔罗战术神牌',
    5: '偏好设置与启航 · 祝你备考顺利！'
  };

  function openOnboardingTutorial(forceManual = false) {
    if (typeof soundClick === 'function') soundClick();
    const prefs = document.getElementById('stonePreferences');
    if (prefs && prefs.open) prefs.close();
    const modal = document.getElementById('stoneOnboardingModal');
    const overlay = document.getElementById('drawerOverlay');
    if (!modal) return;

    currentOnboardingStep = 1;
    updateOnboardingStepUI();

    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
    if (overlay) overlay.classList.add('open');
  }

  function closeOnboardingTutorial(markSeen = true) {
    if (typeof soundClick === 'function') soundClick();
    const modal = document.getElementById('stoneOnboardingModal');
    const overlay = document.getElementById('drawerOverlay');

    if (markSeen) {
      try {
        if (typeof StoneStorage !== 'undefined' && StoneStorage.setItem) {
          StoneStorage.setItem('stone_tutorial_seen', 'true');
        }
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('stone_tutorial_seen', 'true');
        }
      } catch (e) {}
    }

    if (modal) {
      modal.classList.remove('show');
      setTimeout(() => modal.style.display = 'none', 200);
    }
    if (overlay) overlay.classList.remove('open');
  }

  function nextOnboardingStep() {
    if (currentOnboardingStep < TOTAL_ONBOARDING_STEPS) {
      goToOnboardingStep(currentOnboardingStep + 1);
    }
  }

  function prevOnboardingStep() {
    if (currentOnboardingStep > 1) {
      goToOnboardingStep(currentOnboardingStep - 1);
    }
  }

  function goToOnboardingStep(stepNum) {
    if (typeof soundClick === 'function') soundClick();
    currentOnboardingStep = Math.max(1, Math.min(TOTAL_ONBOARDING_STEPS, stepNum));
    updateOnboardingStepUI();
  }

  function updateOnboardingStepUI() {
    const indicator = document.getElementById('onboardingStepIndicator');
    if (indicator) indicator.textContent = `${currentOnboardingStep} / ${TOTAL_ONBOARDING_STEPS}`;

    const titleEl = document.getElementById('onboardingModalTitle');
    if (titleEl) titleEl.textContent = ONBOARDING_TITLES[currentOnboardingStep] || '小石屋旅者指南';

    const dots = document.querySelectorAll('.onboarding-step-dot');
    dots.forEach(d => {
      const s = parseInt(d.getAttribute('data-step'), 10);
      d.classList.toggle('active', s === currentOnboardingStep);
      d.classList.toggle('completed', s < currentOnboardingStep);
    });

    const slides = document.querySelectorAll('.onboarding-slide');
    slides.forEach(s => {
      const step = parseInt(s.getAttribute('data-step'), 10);
      s.classList.toggle('active', step === currentOnboardingStep);
    });

    const btnPrev = document.getElementById('onboardingBtnPrev');
    const btnNext = document.getElementById('onboardingBtnNext');
    const btnFinish = document.getElementById('onboardingBtnFinish');

    if (btnPrev) btnPrev.style.display = (currentOnboardingStep > 1) ? 'inline-flex' : 'none';
    if (btnNext) btnNext.style.display = (currentOnboardingStep < TOTAL_ONBOARDING_STEPS) ? 'inline-flex' : 'none';
    if (btnFinish) btnFinish.style.display = (currentOnboardingStep === TOTAL_ONBOARDING_STEPS) ? 'inline-flex' : 'none';
  }

  function checkAndTriggerOnboarding() {
    try {
      const seen = (typeof StoneStorage !== 'undefined' && StoneStorage.getItem ? StoneStorage.getItem('stone_tutorial_seen') : null) ||
                   (typeof localStorage !== 'undefined' ? localStorage.getItem('stone_tutorial_seen') : null);
      if (!seen) {
        openOnboardingTutorial(false);
      }
    } catch (e) {}
  }

  window.openOnboardingTutorial = openOnboardingTutorial;
  window.closeOnboardingTutorial = closeOnboardingTutorial;
  window.nextOnboardingStep = nextOnboardingStep;
  window.prevOnboardingStep = prevOnboardingStep;
  window.goToOnboardingStep = goToOnboardingStep;
  window.checkAndTriggerOnboarding = checkAndTriggerOnboarding;

  // Auto trigger check for first-time visitors on load
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => setTimeout(checkAndTriggerOnboarding, 500));
    } else {
      setTimeout(checkAndTriggerOnboarding, 500);
    }
  }
})();

