function syncPayload(){return {hp:playerProfile.hp,san:playerProfile.san,level:playerProfile.level,xp:playerProfile.xp,combo:playerProfile.combo,wonRounds:playerProfile.wonRounds,gachaCards:playerProfile.tarotCardsCollected||[],marks,customWords,novelProgress,novelSaves:novelSaveSlots,riskModel:playerProfile.riskModel||null};}

function triggerCloudSync(){
  if(!authToken)return;
  const body=JSON.stringify(syncPayload());
  if(body===syncBaseline)return;
  StoneStorage.setItem('vocab_pending_sync',body);
  clearTimeout(cloudSyncDebounce);cloudSyncDebounce=setTimeout(flushStoneSync,1000);
}

async function flushStoneSync(){
  if(syncBusy||!syncReady||!authToken)return;
  const saved=StoneStorage.getItem('vocab_pending_sync');if(!saved||saved===syncBaseline)return;
  const token=authToken;syncBusy=true;
  try{
    const r=await fetch(`${API_BASE}/api/sync`,{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:JSON.stringify({...JSON.parse(saved),expectedRevision:syncRevision}),signal:AbortSignal.timeout(12000)});
    if(r.status===409){syncReady=false;showToast('另一处更新了存档。本机进度已保留，请刷新后重新同步');return;}
    if(!r.ok)throw new Error('sync failed');
    const result=await r.json();syncRevision=result.revision;syncBaseline=saved;syncRetry=0;
    if(StoneStorage.getItem('vocab_pending_sync')===saved)StoneStorage.removeItem('vocab_pending_sync');
  }catch{if(syncRetry<4){syncRetry++;setTimeout(flushStoneSync,Math.min(30000,2000*2**syncRetry));}}
  finally{syncBusy=false;if(StoneStorage.getItem('vocab_pending_sync')&&syncBaseline!==saved){}else if(StoneStorage.getItem('vocab_pending_sync'))setTimeout(flushStoneSync,1000);}
}

async function initCloudSession() {
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);
  if (!authToken) {
    updateAuthUI();
    return;
  }

  try {
    const resp = await fetch(`${API_BASE}/api/profile`, {
      headers: { 'Authorization': 'Bearer ' + authToken }
    });
    if (resp.ok) {
      const cloud = await resp.json();
      syncRevision=cloud.revision ?? 0;
      const hadPending=!!StoneStorage.getItem("vocab_pending_sync");
      playerProfile.level = Math.max(playerProfile.level || 1, cloud.level || 1);
      playerProfile.xp = Math.max(playerProfile.xp || 0, cloud.xp || 0);
      playerProfile.wonRounds = Math.max(playerProfile.wonRounds || 0, cloud.wonRounds || 0);

      // 云端小说关卡进度合并
      if (cloud.novelProgress && typeof cloud.novelProgress === 'object') {
        const cloudCh = parseInt(cloud.novelProgress.currentChapter, 10) || 1;
        const cloudBeat = parseInt(cloud.novelProgress.currentBeat, 10) || 1;
        if (cloudCh > currentNovelChapter || (cloudCh === currentNovelChapter && cloudBeat >= currentNovelBeat)) {
          currentNovelChapter = cloudCh;
          currentNovelBeat = cloudBeat;
          novelProgress = Object.assign({}, novelProgress, cloud.novelProgress);
          saveToStorage('vocab_novel_progress', novelProgress);
          saveToStorage('vocab_novel_ch', currentNovelChapter);
          saveToStorage('vocab_novel_beat', currentNovelBeat);
        }
      }
      if (!hadPending && Array.isArray(cloud.novelSaves) && cloud.novelSaves.length > 0) {
        novelSaveSlots = cloud.novelSaves;
        saveToStorage('vocab_novel_saves', novelSaveSlots);
      }

      // 合并卡牌
      const mergedCards = [...(playerProfile.tarotCardsCollected || [])];
      (cloud.gachaCards || []).forEach(c => {
        const w = typeof c === 'string' ? c : c.word;
        if (!mergedCards.some(mc => (typeof mc === 'string' ? mc : mc.word) === w)) {
          mergedCards.push(c);
        }
      });
      playerProfile.tarotCardsCollected = mergedCards;

      marks = hadPending ? Object.assign({}, cloud.marks || {}, marks) : (cloud.marks || {});
      customWords = [...new Set([...customWords, ...(cloud.customWords || [])])];
      words = [...new Set([...customWords, ...defaultWords])];

      saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
      saveToStorage(STORAGE_KEYS.MARKS, marks);
      saveToStorage(STORAGE_KEYS.CUSTOM_WORDS, customWords);
      saveToStorage(STORAGE_KEYS.WORDS, words);

      if (cloud.user) {
        authUser = Object.assign({}, authUser || {}, cloud.user);
        if (cloud.user.role === 'admin' || ['林允安', '允安'].includes(cloud.user.username)) {
          authUser.is_admin = true;
          authUser.role = 'admin';
        }
        saveToStorage(STORAGE_KEYS.AUTH, authUser);
      }

      updateBadges();
      updateAuthUI();
      renderWords(document.getElementById('searchInput').value);
      /* initialized when visible */
      /* initialized when visible */
      /* initialized when visible */
      syncReady=true;
      if(hadPending) triggerCloudSync(); else {syncBaseline=JSON.stringify(syncPayload());StoneStorage.removeItem("vocab_pending_sync");}
    } else if (resp.status === 401) {
      StoneStorage.removeItem(STORAGE_KEYS.TOKEN);
      StoneStorage.removeItem(STORAGE_KEYS.AUTH);
      authUser = null;
      authToken = null;
    }
  } catch(e) {
    console.warn("Cloud connection error, using local storage cache:", e);
  }
  updateAuthUI();
}