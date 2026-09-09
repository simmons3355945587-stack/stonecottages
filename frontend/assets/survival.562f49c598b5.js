async function callAntigravityAPI(systemPrompt, userPrompt) {
  authToken = loadFromStorage(STORAGE_KEYS.TOKEN, null);

  if (authToken) {
    try {
      const resp = await fetch(`${API_BASE}/api/ai/scenario`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + authToken
        },
        body: JSON.stringify({ system_prompt: systemPrompt, user_prompt: userPrompt })
      });
      if (resp.ok) {
        const data = await resp.json();
        if (data.result) return data.result;
      }
    } catch(e) {
      console.warn("Server AI proxy error, using procedural matrix:", e);
    }
  }

  return generateOfflineScenario(userPrompt);
}

function generateOfflineScenario(userPrompt) {
  const match = userPrompt.match(/\[(.*?)\]/);
  const targetWords = match ? match[1].split(',').map(s => s.trim()) : ["rescue", "hesitate", "abandon"];
  const w1 = targetWords[0] || "rescue";
  const w2 = targetWords[1] || "hesitate";
  const w3 = targetWords[2] || "abandon";

    const PROCEDURAL_THEMES = [
    {
      theme: "🚀 Deep Space Hull Breach",
      story: `A rogue micrometeorite has pierced the outer observatory of the research vessel. Alarms strobe in crimson flashes as atmospheric pressure plummets rapidly across the module. With the automated propulsion thrusters sputtering, the crew faces an imminent orbital decay into the planetary gravity well.`,
      story_cn: `一颗失控的微陨石击穿了科考船的外层观测舱。随着舱内气压急剧骤降，刺眼的猩红警报疯狂闪烁。自动化推进器发生故障，整艘飞船正面临被拉入行星引力深渊的灭顶之灾。`,
      correctWord: w1,
      correctAction: `Take decisive initiative to ${w1} the primary emergency containment protocols.`,
      correctOutcome: `You acted with razor-sharp focus to ${w1} the vital stabilization systems. Thanks to your decisive execution, the automated bulkheads sealed the vacuum breach in the nick of time, preserving vital life support and allowing the vessel to regain safe orbital trajectory.`,
      correctOutcome_cn: `你临危不乱，果断启动核心紧急隔离协议。得益于你雷厉风行的决断，自动隔离舱门在千钧一发之际封死气压缺口，保住了关键生命维持系统，带领全队脱险重返安全轨道。`,
      wrong1Word: w2,
      wrong1Action: `Choose to ${w2} by the airlock threshold and wait for secondary telemetry.`,
      wrong1Outcome: `Your choice to ${w2} cost the squad precious seconds. The pressure differential shattered the inner reinforced glass, forcing an emergency pod ejection and leaving the research module heavily compromised.`,
      wrong1Outcome_cn: `你在气闸舱门前犹豫不决，浪费了宝贵的逃生时间。内外巨大压差瞬间震碎强化玻璃，迫使全队紧急弹射救生舱，科考舱体遭受重创。`,
      wrong2Word: w3,
      wrong2Action: `Panic recklessly and decide to ${w3} standard environmental safety gear.`,
      wrong2Outcome: `In overwhelming distress, you made the catastrophic mistake to ${w3} essential protective gear. The explosive decompression swept through the corridor, triggering severe trauma and an immediate mission failure.`,
      wrong2Outcome_cn: `极度恐慌中，你盲目弃用了标准环境防护装备。爆炸性失压瞬间席卷走廊，导致严重重创，任务彻底失败。`
    },
    {
      theme: "🔬 Biohazard Quarantine Alert",
      story: `An experimental pathogen canister has ruptured on sub-level four of the biotechnology institute. The computerized filtration grid detects hazardous airborne toxins spreading toward the residential quadrant. The heavy hermetic doors are closing rapidly on a sixty-second countdown timer.`,
      story_cn: `生物研究所地下四层的实验病原体储液罐发生破裂。环境过滤中枢检测到高危气溶胶毒素正向生活区蔓延，重型气密隔离门正进入60秒死亡倒计时。`,
      correctWord: w1,
      correctAction: `Swiftly utilize all available equipment to ${w1} the decontamination bypass sequence.`,
      correctOutcome: `You remained calm under extreme pressure to ${w1} the emergency neutralization system. The antimicrobial mist purged the containment zone, halting the contagion instantly and securing safe passage for the science detail.`,
      correctOutcome_cn: `在极端高压下，你沉着启动消杀旁路系统。强力抗菌气雾瞬间净化隔离区，彻底阻断了病毒扩散，为科研小队开辟出生还通道。`,
      wrong1Word: w2,
      wrong1Action: `Hesitate and attempt to ${w2} while re-reading warning manuals.`,
      wrong1Outcome: `Choosing to ${w2} at such a critical juncture allowed the pathogen to saturate the primary ventilation shafts, rendering the entire sub-level inaccessible and contaminating crucial bio-samples.`,
      wrong1Outcome_cn: `你在翻查应急手册时犹豫迟疑，导致高危病原体完全渗入主通风管道，整层地下设施被永久封闭。`,
      wrong2Word: w3,
      wrong2Action: `Flee blindly and ${w3} the automated quarantine controls.`,
      wrong2Outcome: `Fleeing in panic to ${w3} containment protocols triggered a permanent base-wide red lockdown, trapping your squad in the toxic corridor with dwindling oxygen supplies.`,
      wrong2Outcome_cn: `恐慌逃窜中你盲目关闭了隔离控制，触发全基地红色死锁，将小队困在氧气即将耗尽的剧毒走廊中。`
    },
    {
      theme: "🌊 Abyssal Trench Submersible Crisis",
      story: `At nine thousand meters beneath the Pacific, a hydrothermal fissure erupts beneath the exploration submersible. Extreme hydraulic pressure cracks the reinforced acrylic observation dome as the ballast tanks take on silt. External floodlights flicker erratically in the pitch-black abyss.`,
      story_cn: `在太平洋九千米深渊下，科考潜水艇正下方的深海热泉突然剧烈喷发。极端水压压裂了强化树脂观察穹顶，压载水舱被泥沙淤堵，外部探照灯在漆黑深渊中狂乱闪烁。`,
      correctWord: w1,
      correctAction: `Direct full auxiliary power to ${w1} the emergency ballast blowers.`,
      correctOutcome: `Your composed command to ${w1} the emergency blowers purged the flooded ballast tanks immediately. Buoyancy was restored in seconds, allowing the bathysphere to rocket safely away from the boiling hydrothermal vent.`,
      correctOutcome_cn: `你冷静下达指令，将全部备用动力注入紧急排沙吹除系统。浮力在数秒内迅速恢复，深潜器擦着沸腾热泉呼啸冲出深渊险境。`,
      wrong1Word: w2,
      wrong1Action: `Remain passive and ${w2} before checking pressure gauges.`,
      wrong1Outcome: `Allowing uncertainty to ${w2} your judgment caused the hull stress to exceed structural limits. A secondary fracture flooded the battery compartment, plunging the craft into total darkness.`,
      wrong1Outcome_cn: `犹豫不决让潜艇承受了超出极限的结构压力，二次破裂导致电池舱进水，整艘潜艇陷入无尽的深渊黑暗。`,
      wrong2Word: w3,
      wrong2Action: `Desperately ${w3} the primary life-support regulator.`,
      wrong2Outcome: `Tampering recklessly to ${w3} the life-support regulator caused an acute pressure drop inside the cabin, knocking the entire crew unconscious before rescue signals could be transmitted.`,
      wrong2Outcome_cn: `慌乱中盲目调整生命支持阀门，导致舱内气压急剧失衡，在发出求救信号前全员已陷入缺氧窒息。`
    },
    {
      theme: "🏛️ Ancient Desert Catacomb",
      story: `A violent sandstorm has triggered the ancient mechanism of the underground pyramid temple. Massive stone blocks slide into place with deafening grinding noises, blocking the only daylight shaft. As the torches sputter, poisonous desert vipers emerge from fractured wall hieroglyphs.`,
      story_cn: `狂暴沙尘暴触发了金字塔地宫的古老机关。数吨重的巨石伴随轰鸣滑落封死了唯一透光的盗洞。火把摇曳微光中，剧毒的沙漠蝰蛇从裂开的象形文字石壁后蜂拥而出。`,
      correctWord: w1,
      correctAction: `Carefully examine the inscriptions to ${w1} the hidden stone counterweight.`,
      correctOutcome: `Deciphering the glyphs allowed you to ${w1} the ancient counterweight mechanism. A secret archway pivoted open silently, revealing an untouched subterranean escape corridor leading safely outside the pyramid.`,
      correctOutcome_cn: `通过精准破译古文字，你果断按下了隐藏的配重机关。暗门无声滑开，露出一条直通金字塔外的古老逃生密道。`,
      wrong1Word: w2,
      wrong1Action: `Stand motionless to ${w2} amidst the crumbling masonry.`,
      wrong1Outcome: `Choosing to ${w2} proved disastrous as the shifting ceiling blocks crashed down, completely burying your exploration gear and cutting off the return path.`,
      wrong1Outcome_cn: `在滚落的碎石中僵立迟疑，导致头顶崩塌的石梁彻底砸毁了探险装备并封死了退路。`,
      wrong2Word: w3,
      wrong2Action: `Recklessly ${w3} the archaeological map and torchlight.`,
      wrong2Outcome: `Throwing caution aside to ${w3} the map caused you to trigger a hidden dart trap along the perimeter, suffering heavy injury and exhaustion in the dark.`,
      wrong2Outcome_cn: `惊慌失措中丢弃了地图与火把，不慎踩中外围毒箭陷阱，在黑暗中遭受重创。`
    },
    {
      theme: "⚡ Cyberpunk Megacity Infiltration",
      story: `High on the ninety-fifth floor of the Arasaka-style megacorp tower, laser grid alarms scream into the rainy night. Automated combat drones descend from the ceiling catwalks while counter-intrusion ICE viruses lock the terminal you are extracting.`,
      story_cn: `在巨型企业大厦95层的雨夜高空，激光警报刺破夜空。全副武装的战斗无人机从天花板栈道降下，反入侵黑客病毒瞬间锁死了你正在下载数据的核心终端。`,
      correctWord: w1,
      correctAction: `Deploy your neural deck to ${w1} the subverted firewall matrix.`,
      correctOutcome: `Your masterful hack to ${w1} the core mainframe disabled the tracking drones and opened the maintenance elevator, allowing a seamless extraction with all corporate data intact.`,
      correctOutcome_cn: `你熟练运用神经接入舱攻破了企业核心防火墙，瘫痪了追踪无人机并开启检修电梯，带着全部核心机密数据完美撤离。`,
      wrong1Word: w2,
      wrong1Action: `Fail to adapt and ${w2} inside the server closet.`,
      wrong1Outcome: `Pausing to ${w2} allowed security androids to surround the sector, pinpointing your digital signature and inflicting intense neural feedback damage.`,
      wrong1Outcome_cn: `未能及时应对而在机房内僵持迟疑，被防卫机器人精准锁定数字特征，承受了致命的神经逆流电击。`,
      wrong2Word: w3,
      wrong2Action: `Panic and abruptly ${w3} your encrypted neural link.`,
      wrong2Outcome: `Abruptly attempting to ${w3} the connection triggered a catastrophic system surge, wiping the extracted files and leaving you trapped on the rooftop.`,
      wrong2Outcome_cn: `恐慌中强行拔除神经连接引发严重系统过载，不仅损毁了提取的数据，还将自己困在绝境天台。`
    },
    {
      theme: "❄️ Arctic Glacier Blizzard Outpost",
      story: `A category-five polar storm knocks out the transmission tower and heating generator at the remote research outpost. Frost patterns spread rapidly across the double-glazed windows as exterior temperatures plunge below minus fifty degrees Celsius.`,
      story_cn: `五级极地暴风雪摧毁了极地科考站的通讯塔与供暖发电机。双层保温窗迅速蔓延出森冷冰花，室外气温骤降至零下50摄氏度以下。`,
      correctWord: w1,
      correctAction: `Work methodically to ${w1} the auxiliary thermal reactor.`,
      correctOutcome: `You methodically managed to ${w1} the backup power grid, restoring heat and vital satellite uplinks just before the base suffered permanent freeze damage.`,
      correctOutcome_cn: `你有条不紊地重启了备用供热反应堆，在基站遭受永久冻结前抢修好了供暖与卫星信号。`,
      wrong1Word: w2,
      wrong1Action: `Wander into the blizzard to ${w2} without compass guidance.`,
      wrong1Outcome: `Attempting to ${w2} in zero visibility resulted in severe disorientation and mild frostbite, forcing the team to expend precious emergency flares to locate you.`,
      wrong1Outcome_cn: `在能见度为零的暴风雪中失去方向盲目摸索，导致严重冻伤并浪费了宝贵的应急信号弹。`,
      wrong2Word: w3,
      wrong2Action: `Carelessly ${w3} the insulated survival shelter.`,
      wrong2Outcome: `Deciding to ${w3} the insulated bunker exposed your squad to the howling gale, causing immediate hypothermia risks and critical vitality loss.`,
      wrong2Outcome_cn: `草率离开绝热掩体，使小队暴露在狂暴的风雪怒吼中，体温急剧流失陷入重度失温危机。`
    },
    {
      theme: "🌋 Volcanic Island Pyroclastic Surge",
      story: `The island caldera violently erupts, hurling volcanic bombs into the coastal jungle. A towering cloud of hot ash and sulfur dioxide rushes toward the shoreline where the last evacuation ferry is moored. The harbor dock begins splintering under tectonic tremors.`,
      story_cn: `海岛火山口剧烈喷发，熔岩巨石轰然砸向雨林。数百米高的滚烫火山灰与剧毒硫磺气云遮天蔽日扑向码头，最后一艘撤离渡轮的泊位在地震中即将解体。`,
      correctWord: w1,
      correctAction: `Rally the survivors to ${w1} the emergency maritime departure.`,
      correctOutcome: `Your decisive leadership to ${w1} the departure sequence pushed the vessel past the reef breakers moments before the pyroclastic flow engulfed the shoreline, saving every passenger aboard.`,
      correctOutcome_cn: `你果断指挥渡轮强行起航穿越暗礁，在碎屑流吞没海岸线的前一秒脱险冲入公海，拯救了全船幸存者。`,
      wrong1Word: w2,
      wrong1Action: `Stop near the magma flow to ${w2} and salvage baggage.`,
      wrong1Outcome: `Losing critical time to ${w2} resulted in your vehicle being blocked by falling debris, forcing an agonizing and dangerous trek through dense ash clouds.`,
      wrong1Outcome_cn: `在熔岩前停顿犹豫试图抢救辎重，导致车辆被坠石阻断，被迫在窒息尘暴中艰难求生。`,
      wrong2Word: w3,
      wrong2Action: `Blindly ${w3} the established maritime evacuation protocol.`,
      wrong2Outcome: `Deciding to ${w3} standard evacuation rules caused panic on the loading ramp, capsizing an auxiliary lifeboat and leaving your squad in dire peril.`,
      wrong2Outcome_cn: `盲目违背撤离指引引发登船混乱，导致副救生艇倾覆，让全队陷入万劫不复的熔岩险境。`
    },
    {
      theme: "🏰 Medieval Stronghold Siege",
      story: `Flaming catapult projectiles smash through the fortress battlements as enemy scaling ladders latch onto the parapets. With the outer portcullis splintered and command horns sounding retreat, your squad holds the pivotal watchtower staircase.`,
      story_cn: `燃烧的巨石砸穿城堡箭垛，敌军云梯如恶魔巨爪扣死城头。外门已被破城槌撞裂，撤退号角凄厉响起，你的小队镇守在最后的防御塔旋梯关口。`,
      correctWord: w1,
      correctAction: `Mount a fierce counter-defense to ${w1} the inner stronghold gateway.`,
      correctOutcome: `You rallied the garrison to ${w1} the vital stone chokepoint, repelling the enemy assault wave and holding the fortress until allied cavalry crested the horizon.`,
      correctOutcome_cn: `你率领守军誓死坚守石制隘口，顽强击退敌军先锋狂攻，成功支撑到盟军铁骑踏破地平线救援。`,
      wrong1Word: w2,
      wrong1Action: `Waver under pressure and ${w2} on the exposed rampart.`,
      wrong1Outcome: `Your decision to ${w2} left the archers unprotected, allowing hostile vanguard skirmishers to overrun the watchtower and inflict heavy damage on the garrison.`,
      wrong1Outcome_cn: `在城垛上犹豫迟疑，导致弓箭手失去掩护，被敌军先锋斥候攻破防线遭受重创。`,
      wrong2Word: w3,
      wrong2Action: `Break formation and ${w3} your defensive weapons.`,
      wrong2Outcome: `Breaking ranks to ${w3} defensive gear led to immediate chaos, leaving you defenseless against incoming volleys of flaming arrows.`,
      wrong2Outcome_cn: `阵型溃散并抛弃防具，使自己彻底暴露在呼啸而至的火箭火海之中。`
    },
    {
      theme: "🌪️ Steampunk Airship Tempest",
      story: `Navigating an uncharted cloud vortex, the brass-clad dirigible suffers multiple boiler blowouts. High-voltage lightning crackles across the canvas envelope while the altitude gauge spins downward toward jagged mountain crags.`,
      story_cn: `穿行于未知的风暴云涡中，蒸汽飞艇多台锅炉发生严重爆膛。高压闪电在气囊蒙皮上狂暴游走，高度表在剧烈颠簸中失控坠向嶙峋的山峰绝壁。`,
      correctWord: w1,
      correctAction: `Adjust the pressure valves to ${w1} the steam turbine exhaust.`,
      correctOutcome: `Skillfully managing to ${w1} the valve pressure stabilized the lifting gas cells, pulling the great airship out of its steep dive and soaring above the tempest into clear skies.`,
      correctOutcome_cn: `你熟练调整排气阀精准稳定升力气囊，使巨舰从急坠中昂首拉升，冲破风暴云层重见万里晴空。`,
      wrong1Word: w2,
      wrong1Action: `Disregard the altimeter and ${w2} in the control cabin.`,
      wrong1Outcome: `Allowing panic to ${w2} your reflexes caused the airship to clip a sharp pinnacle, shearing the port propeller and causing severe hull structural damage.`,
      wrong1Outcome_cn: `恐慌迟疑导致飞艇擦撞尖锐山峰，撕裂左舷螺旋桨，船体结构发生严重断裂。`,
      wrong2Word: w3,
      wrong2Action: `Prematurely ${w3} the main ballast and cargo anchors.`,
      wrong2Outcome: `Rushing to ${w3} essential rigging destabilized the center of gravity, causing the gondola to tilt violently and throwing vital instruments overboard.`,
      wrong2Outcome_cn: `盲目抛弃核心压舱重物导致重心失衡，吊舱发生剧烈倾斜，核心导航仪表全被甩出舷外。`
    },
    {
      theme: "🔮 Quantum Collider Temporal Rift",
      story: `A magnetic containment failure inside the particle supercollider tears a shimmering temporal rift across the experimental facility. Time dilates unpredictably—falling objects freeze mid-air while chronal shockwaves shatter nearby instrument panels.`,
      story_cn: `对撞机磁约束失效，撕裂出一道泛着诡异微光的时空裂隙。时间陷入混乱——下落的仪器悬停在半空，时间冲击波震碎了周遭所有控制台。`,
      correctWord: w1,
      correctAction: `Synchronize the resonance harmonic to ${w1} the quantum field coil.`,
      correctOutcome: `You calibrated the harmonic pulse to ${w1} the magnetic coil, cleanly collapsing the temporal singularity and restoring standard spacetime metrics without casualties.`,
      correctOutcome_cn: `你精确校准谐波脉冲同步量子线圈，完美闭合了时空奇点，毫发无伤地恢复了正常时空秩序。`,
      wrong1Word: w2,
      wrong1Action: `Fail to comprehend the readings and ${w2} near the epicenter.`,
      wrong1Outcome: `Lingering to ${w2} caught your gear in a local time loop, draining your energy cells and disorienting your squad with severe temporal vertigo.`,
      wrong1Outcome_cn: `在裂隙核心旁驻留迟疑，使装备被困在局部时间死循环中，精神受到强烈的时间眩晕重创。`,
      wrong2Word: w3,
      wrong2Action: `Impulsively ${w3} the shielded safety protocols.`,
      wrong2Outcome: `Deciding to ${w3} safety shields released a blast of chronal radiation that scrambled all electronic navigation and inflicted immediate system shock.`,
      wrong2Outcome_cn: `草率弃用能量防护协议，导致爆发出强烈的时空辐射，摧毁了所有电子导航并造成严重系统震荡。`
    },
    {
      theme: "🌿 Amazonian Forbidden Temple Basin",
      story: `Trekking through the dense, uncharted rainforest, your expedition trips a hidden tripwire mechanism outside a vine-covered golden ziggurat. Stone pendulum blades swing across the muddy ravine as the river beneath swells with carnivorous predators.`,
      story_cn: `在未知的亚马逊密林深处，探险队在黄金神庙前触发了古老绊线机关。巨大的石摆巨斧在泥泞峡谷间呼啸挥舞，脚下奔腾的恶水翻滚着无数食人巨鳄。`,
      correctWord: w1,
      correctAction: `Quickly scale the ancient stonework to ${w1} the release catch.`,
      correctOutcome: `Agilely maneuvering to ${w1} the ancient counter-lever locked the deadly blades in place, clearing an unhindered path to the inner sanctum treasure vault.`,
      correctOutcome_cn: `你灵巧攀上古老石壁按下释放卡扣，锁死了致命摆斧，开辟出通向神庙核心宝库的安全坦途。`,
      wrong1Word: w2,
      wrong1Action: `Freeze in uncertainty and ${w2} on the slippery log bridge.`,
      wrong1Outcome: `Hesitating to ${w2} on the mossy span caused the wood to crack beneath you, dumping emergency rations into the raging torrent below.`,
      wrong1Outcome_cn: `在湿滑的原木桥上迟疑停滞，导致木桥轰然断裂，应急口粮全部沉入险恶湍流。`,
      wrong2Word: w3,
      wrong2Action: `Fling aside caution and ${w3} all climbing ropes.`,
      wrong2Outcome: `Choosing to ${w3} vital climbing ropes left you stranded on a crumbling ledge surrounded by hostile jungle wildlife.`,
      wrong2Outcome_cn: `抛弃攀登绳索冒险前冲，导致自己被困在悬崖绝壁上，四周潜伏着嗜血的热带凶兽。`
    },
    {
      theme: "⚓ Phantom Galleon of Bermuda",
      story: `Exploring the sunken skeletal hull of a seventeenth-century warship, your diving umbilical line snags upon a coral-encrusted bronze cannon. Disturbed ocean undercurrents begin to collapse the rotting oak timbers right above your primary oxygen manifold.`,
      story_cn: `潜入十七世纪沉船残骸深处，你的潜水脐带管被锈蚀的青铜古炮死死卡住。翻涌的深海洋流使头顶腐朽的橡木巨梁摇摇欲坠。`,
      correctWord: w1,
      correctAction: `Use your diver blade calmly to ${w1} the tangled harness line.`,
      correctOutcome: `You steadily managed to ${w1} the tangled gear without damaging your regulator, escaping the falling debris field and surfacing smoothly with valuable oceanic relics.`,
      correctOutcome_cn: `你冷静使用潜水刀割开缠绕的索具而不伤及呼吸管，平稳逃离坍塌废墟，带着稀世古物顺利上浮。`,
      wrong1Word: w2,
      wrong1Action: `Thrash frantically to ${w2} in the confined cargo hold.`,
      wrong1Outcome: `Panicking to ${w2} stirred up thick clouds of silt, blinding your dive buddy and wasting more than half of your remaining breathing gas.`,
      wrong1Outcome_cn: `在狭窄船舱内慌乱挣扎激起浓厚泥沙，完全遮蔽了视线并白白消耗了大半宝贵氧气。`,
      wrong2Word: w3,
      wrong2Action: `Recklessly ${w3} your emergency dive beacon.`,
      wrong2Outcome: `Discarding your gear to ${w3} the beacon caused you to lose contact with the surface vessel, resulting in an emergency deep-sea retrieval operation.`,
      wrong2Outcome_cn: `盲目丢弃应急潜水浮标，导致与水面支援母船彻底失联，陷入深海救援险境。`
    }
  ];

  const scene = PROCEDURAL_THEMES[Math.floor(Math.random() * PROCEDURAL_THEMES.length)];
  
  const optionsRaw = [
    {
      word: scene.correctWord,
      action: scene.correctAction,
      isCorrect: true,
      fullOutcomeStory: scene.correctOutcome,
      fullOutcomeStory_cn: scene.correctOutcome_cn
    },
    {
      word: scene.wrong1Word,
      action: scene.wrong1Action,
      isCorrect: false,
      fullOutcomeStory: scene.wrong1Outcome,
      fullOutcomeStory_cn: scene.wrong1Outcome_cn
    },
    {
      word: scene.wrong2Word,
      action: scene.wrong2Action,
      isCorrect: false,
      fullOutcomeStory: scene.wrong2Outcome,
      fullOutcomeStory_cn: scene.wrong2Outcome_cn
    }
  ];

  // 打乱选项顺序
  const shuffledOptions = optionsRaw.sort(() => 0.5 - Math.random());

  return JSON.stringify({
    story: scene.story,
    story_cn: scene.story_cn,
    options: shuffledOptions
  });
}

function safeJsonParse(str) {
  let cleaned = str.trim().replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim();
  return JSON.parse(cleaned);
}

function initNovelModeUI() {
  const sel = document.getElementById('novelChapterSelect');
  if (!sel || typeof NOVEL_CHAPTERS === 'undefined') return;
  sel.innerHTML = '';
  NOVEL_CHAPTERS.forEach(ch => {
    const opt = document.createElement('option');
    opt.value = ch.id;
    opt.textContent = `第${ch.id}章: ${ch.title}`;
    if (ch.id === currentNovelChapter) opt.selected = true;
    sel.appendChild(opt);
  });
  updateSurvivalModeUI();
}

function updateSurvivalModeUI() {
  const tabNovel = document.getElementById('modeTabNovel');
  const tabClassic = document.getElementById('modeTabClassic');
  const banNovel = document.getElementById('novelBanner');
  const banClassic = document.getElementById('classicBanner');

  if (currentSurvivalGameMode === 'novel') {
    if (tabNovel) tabNovel.classList.add('active');
    if (tabClassic) tabClassic.classList.remove('active');
    if (banNovel) banNovel.style.display = 'flex';
    if (banClassic) banClassic.style.display = 'none';
  } else {
    if (tabClassic) tabClassic.classList.add('active');
    if (tabNovel) tabNovel.classList.remove('active');
    if (banClassic) banClassic.style.display = 'flex';
    if (banNovel) banNovel.style.display = 'none';
  }
}

function switchSurvivalMode(mode) {
  soundClick();
  currentSurvivalGameMode = mode;
  saveToStorage('vocab_survival_mode', mode);
  updateSurvivalModeUI();
  launchSurvivalGame();
  showToast(mode === 'novel' ? '📖 已开启【职场小说大冒险】' : '⚡ 已开启【经典绝境生存战】');
}

function onSelectNovelChapter(chId) {
  soundClick();
  currentNovelChapter = parseInt(chId, 10) || 1;
  currentNovelBeat = 1;
  saveToStorage('vocab_novel_ch', currentNovelChapter);
  autoSaveNovelProgress();
  showToast(`📖 已选择第 ${currentNovelChapter} 章`);
  launchSurvivalGame();
}

function nextNovelBeat() {
  soundClick();
  const ch = (typeof NOVEL_CHAPTERS !== 'undefined') ? NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) : null;
  if (!ch) {
    launchSurvivalGame();
    return;
  }
  if (currentNovelBeat < ch.beats.length) {
    currentNovelBeat++;
    autoSaveNovelProgress();
    launchSurvivalGame();
  } else {
    // Chapter completed! Move to next chapter
    currentNovelChapter = (currentNovelChapter >= NOVEL_CHAPTERS.length) ? 1 : (currentNovelChapter + 1);
    currentNovelBeat = 1;
    saveToStorage('vocab_novel_ch', currentNovelChapter);
    saveToStorage('vocab_novel_beat', currentNovelBeat);
    const sel = document.getElementById('novelChapterSelect');
    if (sel) sel.value = currentNovelChapter;
    soundSuccess();
    showToast(`🎉 恭喜通关本章！开启第 ${currentNovelChapter} 章！`);
    launchSurvivalGame();
  }
}

async function launchSurvivalGame() {
  const seq=++novelLoadSequence;
  if(currentSurvivalGameMode==="novel") {try {const ch=await Stone.chapter(currentNovelChapter);if(seq!==novelLoadSequence)return;currentNovelChapter=ch.id;initNovelModeUI();if(currentNovelBeat>=ch.beats.length-2) Stone.idle(()=>Stone.chapter(ch.id+1));}catch(e){showToast("章节加载失败，请再次点击章节重试");return;}}
  document.getElementById('survivalGameBox').style.display = 'block';
  document.getElementById('gameHp').textContent = playerProfile.hp;
  document.getElementById('gameCombo').textContent = `x${playerProfile.combo}`;
  document.getElementById('gameOutcomeArea').innerHTML = '';
  renderBattleHand();

  // 📖 模式 1：职场大冒险小说闯关模式 (Novel Campaign Mode)
  if (currentSurvivalGameMode === 'novel' && typeof NOVEL_CHAPTERS !== 'undefined' && NOVEL_CHAPTERS.length > 0) {
    const ch = NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) || NOVEL_CHAPTERS[0];
    const beat = ch.beats[currentNovelBeat - 1] || ch.beats[0];
    
    document.getElementById('gameTheme').textContent = `📖 第 ${ch.id} 章 · ${ch.title}`;
    document.getElementById('gameRound').textContent = `切片 ${currentNovelBeat} / ${ch.beats.length}`;
    
    survivalData = {
      story: beat.story,
      story_cn: beat.story_cn || "",
      options: beat.options,
      isNovelMode: true,
      chapterId: ch.id,
      beatId: currentNovelBeat,
      totalBeats: ch.beats.length
    };
    window.survivalData = survivalData;
    renderSurvivalGame(survivalData);
    return;
  }

  // ⚡ 模式 2：经典绝境生存战 (Classic Roguelike Survival Mode)
  const marked = getMarkedWords();
  let targetPool = [];
  if (marked.length >= 3) {
    targetPool = marked.sort(() => 0.5 - Math.random()).slice(0, 3).map(m => m[0]);
  } else {
    targetPool = [...words].sort(() => 0.5 - Math.random()).slice(0, 3);
  }

  document.getElementById('gameTheme').textContent = DUNGEON_THEMES[Math.floor(Math.random() * DUNGEON_THEMES.length)];
  document.getElementById('gameStory').innerHTML = `<em>Generating crisis using your vocabulary: [${targetPool.join(', ')}]...</em>`;
  document.getElementById('gameOptions').innerHTML = '';
  document.getElementById('gameRound').textContent = currentSurvivalRound;

  const sysPrompt = "You are a suspenseful Dungeon Master. Write engaging English crisis scenarios with high-quality bilingual Chinese translations. Output valid JSON only.";
  const usrPrompt = `
    Strictly use these target words from the user's active vocabulary list: [${targetPool.join(', ')}].
    Requirements:
    1. "story": An intense crisis dilemma in English within 3 to 5 sentences (under 50 words).
    2. "story_cn": A fluent, thrilling Chinese translation of the crisis scenario.
    3. "options": Exactly 3 choices corresponding to [${targetPool.join(', ')}]. Exactly ONE option is the correct survival decision.
    4. Each option must have:
       - "word": exact word from target words
       - "action": English action sentence using the word
       - "action_cn": Chinese translation of the action
       - "isCorrect": boolean
       - "fullOutcomeStory": A complete narrative paragraph in English (3-4 sentences) describing the event and consequence.
       - "fullOutcomeStory_cn": Fluent Chinese translation of the full outcome narrative paragraph.
    
    Output JSON format only:
    {
      "story": "A critical emergency occurs in the control room. Power fails and pressure drops rapidly. You must act immediately.",
      "story_cn": "控制室突发重大险情，电力中断且气压骤降，你必须立即采取行动。",
      "options": [
        {
          "word": "${targetPool[0]}",
          "action": "Take prompt measures to ${targetPool[0]} the primary system.",
          "action_cn": "迅速采取措施稳定核心系统。",
          "isCorrect": true,
          "fullOutcomeStory": "You acted with composure to ${targetPool[0]} the vital controls. Thanks to your decisive execution, the emergency containment held firm and the entire squad safely escaped the hazard.",
          "fullOutcomeStory_cn": "你在危急关头沉着稳健地操作关键中枢，得益于你雷厉风行的决断，紧急防护罩成功咬合，带领全队脱离险境。"
        },
        {
          "word": "${targetPool[1]}",
          "action": "Choose to ${targetPool[1]} and wait passively.",
          "action_cn": "选择犹豫迟疑，被动等待。",
          "isCorrect": false,
          "fullOutcomeStory": "You chose to ${targetPool[1]} at the critical junction. The lost time allowed the pressure breach to expand, causing severe damage to the sector before backup arrived.",
          "fullOutcomeStory_cn": "你在生死关头犹豫迟疑，白白浪费了宝贵时间，导致气压缺口进一步扩大造成严重破坏。"
        },
        {
          "word": "${targetPool[2]}",
          "action": "Decide to ${targetPool[2]} all safety equipment.",
          "action_cn": "惊慌失措下弃用所有防护装备。",
          "isCorrect": false,
          "fullOutcomeStory": "In overwhelming panic, you made the fatal mistake to ${targetPool[2]} standard safety gear. The hazardous environment immediately overwhelmed the room, resulting in catastrophe.",
          "fullOutcomeStory_cn": "在极度恐慌中你盲目丢弃了标准防护装备，危险环境瞬间席卷了整个区域造成灾难性后果。"
        }
      ]
    }
  `;

  try {
    const raw = await callAntigravityAPI(sysPrompt, usrPrompt);
    survivalData = safeJsonParse(raw);
    window.survivalData = survivalData;
    renderSurvivalGame(survivalData);
  } catch(e) {
    const fallback = generateOfflineScenario(usrPrompt);
    survivalData = safeJsonParse(fallback);
    window.survivalData = survivalData;
    renderSurvivalGame(survivalData);
  }
}

function renderSurvivalGame(data) {
  const storyText = data.story || "A critical crisis demands your immediate decision!";
  const clickableStory = renderClickableStory(storyText);
  const storyCn = data.story_cn || '';

  document.getElementById('gameStory').innerHTML = `
    <div class="novel-interactive-story-wrapper" style="font-size: 15.5px; line-height: 1.75; color: var(--text-primary);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
        <span style="font-size:12px; font-weight:800; color:var(--brand-accent); display:flex; align-items:center; gap:6px;">
          📖 原著剧情切片 · 单词点查 / 发音 / ★Mark
        </span>
        <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px; height:24px;" onclick="speakSentence('${escapeHtml(storyText.replace(/'/g, "\\'"))}')" title="朗读全段原文">
          🔊 朗读原文
        </button>
      </div>
      <div style="background:var(--paper-surface-sub); padding:16px 18px; border-radius:var(--radius-md); border:1.5px solid var(--paper-border); box-shadow: inset 0 2px 4px rgba(0,0,0,0.03);">
        ${clickableStory}
      </div>
      ${storyCn ? `
        <div style="margin-top: 10px; padding: 12px 14px; background: rgba(245, 158, 11, 0.05); border-left: 3.5px solid var(--brand-accent); border-radius: var(--radius-sm); font-size: 13.5px; color: var(--text-secondary); line-height: 1.6;">
          <div style="font-size: 11px; font-weight: 700; color: var(--brand-accent); margin-bottom: 2px;">🇨🇳 剧情译文提示:</div>
          ${escapeHtml(storyCn)}
        </div>
      ` : ''}
    </div>
  `;

  const optionsGrid = document.getElementById('gameOptions');
  optionsGrid.innerHTML = '';

  const letterLabels = ['A', 'B', 'C'];
  data.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    const optWordClean = opt.word ? opt.word.toLowerCase() : '';
    const optWordZh = (typeof chineseDict !== 'undefined' && chineseDict[optWordClean]) ? chineseDict[optWordClean] : (opt.word_zh || '');
    btn.innerHTML = `
      <div class="choice-letter-badge">${letterLabels[idx] || (idx+1)}</div>
      <div class="choice-content">
        <div class="choice-header-row" style="display:flex; justify-content:space-between; align-items:center;">
          <span class="choice-word-badge" style="cursor:pointer;" onclick="event.stopPropagation(); inspectStoryWord('${escapeHtml(optWordClean)}', event);" title="点击查词 [${escapeHtml(opt.word)}] / 发音 / ★Mark">[ ${escapeHtml(opt.word)} ] 🔍</span>
          ${optWordZh ? `<span style="font-size:12px; color:var(--text-secondary); font-weight:600;">${escapeHtml(optWordZh)}</span>` : ''}
        </div>
        <div class="choice-action-text" style="margin-top:4px;">${escapeHtml(opt.action)}</div>
        ${opt.action_cn ? `<div class="choice-action-cn" style="font-size: 12.5px; color: var(--brand-primary); margin-top: 4px; font-weight: 500;">🇨🇳 ${escapeHtml(opt.action_cn)}</div>` : ''}
      </div>
    `;
    btn.onclick = () => handleSurvivalChoice(opt, idx);
    optionsGrid.appendChild(btn);
  });
}

function handleSurvivalChoice(opt, idx) {
  document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
  const isSuccess = opt.isCorrect;
  const word = opt.word;

  let gainedXp = 0;
  if (isSuccess) {
    soundSuccess();
    gainedXp = (20 * playerProfile.combo) * (battleXPBoostActive ? 2 : 1);
    battleXPBoostActive = false;
    playerProfile.combo++;
    playerProfile.xp += gainedXp;
    playerProfile.wonRounds++;
    reduceMark(word);
    showToast(`🎉 战局生还！XP +${gainedXp}`);
  } else {
    soundFailure();
    if (battleShieldActive) {
      battleShieldActive = false;
      showToast(`🔰 坚韧护盾抵挡了本次选错伤害！HP/SAN 完好无损！`);
    } else {
      playerProfile.combo = 1;
      playerProfile.hp = Math.max(0, playerProfile.hp - 25);
      playerProfile.san = Math.max(0, playerProfile.san - 15);
      addMark(word);
      showToast(`💀 遭遇重创！HP -25, [${word}] Mark +1`);
    }
  }

  if (playerProfile.xp >= playerProfile.level * 100) {
    playerProfile.level++;
    playerProfile.hp = 100;
    showToast(`🌟 Survivor Level Up: LV.${playerProfile.level}! HP Restored`);
  }
  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
  updateBadges();
  triggerCloudSync();

  // 1. 组合危机背景与决断后果的完整英文故事与中文翻译
  const storyText = survivalData.story || '';
  const outcomeStoryText = opt.fullOutcomeStory || `${storyText} ${opt.action}`;
  const clickableHtml = renderClickableStory(outcomeStoryText, word);

  const storyCn = survivalData.story_cn || '';
  const outcomeCn = opt.fullOutcomeStory_cn || opt.action_cn || '';
  const targetZh = (typeof chineseDict !== 'undefined' && chineseDict[word.toLowerCase()]) ? chineseDict[word.toLowerCase()] : '';

  // 2. 清空选择按钮，直接展示沉浸式折纸战役结算卷轴
  const optionsGrid = document.getElementById('gameOptions');
  if (optionsGrid) optionsGrid.innerHTML = '';

  const outcomeCard = document.createElement('div');
  outcomeCard.className = 'settlement-scroll-card';
  outcomeCard.style.cssText = `
    margin-top: 14px; padding: 22px; border-radius: var(--radius-lg); line-height: 1.8;
    background: var(--paper-surface);
    border: 2px solid ${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};
    box-shadow: var(--paper-shadow-lg);
    animation: fadeIn 0.3s ease-out;
  `;
  outcomeCard.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; border-bottom:1.5px solid var(--paper-border); padding-bottom:12px;">
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:26px;">${isSuccess ? '🏆' : '💀'}</span>
        <div>
          <div style="font-weight:900; font-size:18px; color: ${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};">
            ${isSuccess ? 'MISSION ACCOMPLISHED · 战局大捷' : 'CRITICAL RETREAT · 遭遇重创'}
          </div>
          <div style="font-size:12px; color:var(--text-secondary); margin-top:2px;">
            ${isSuccess ? 'Decisive initiative ensured tactical survival!' : 'Fatal miscalculation triggered sector hazard!'}
          </div>
        </div>
      </div>
      <div style="text-align:right;">
        <div style="font-size:14px; font-weight:800; color:var(--brand-primary);">${isSuccess ? `+${gainedXp} XP` : '0 XP'}</div>
        <div style="font-size:11px; color:var(--text-secondary);">COMBO x${playerProfile.combo}</div>
      </div>
    </div>

    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap:10px; margin-bottom:16px;">
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:8px 12px; border-radius:var(--radius-sm); cursor:pointer;" onclick="openWordDetails('${escapeHtml(word)}')">
        <div style="font-size:11px; color:var(--text-secondary);">DECISION WORD · 考点生词</div>
        <div style="font-size:14px; font-weight:800; color:var(--brand-accent);">[ ${escapeHtml(word)} ] 🔍</div>
        ${targetZh ? `<div style="font-size:11.5px; color:var(--text-secondary); margin-top:2px; font-weight:500;">${escapeHtml(targetZh)}</div>` : ''}
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:8px 12px; border-radius:var(--radius-sm);">
        <div style="font-size:11px; color:var(--text-secondary);">MARK STATUS · 生词星标</div>
        <div style="font-size:14px; font-weight:800; color:${isSuccess ? 'var(--brand-success)' : 'var(--brand-danger)'};">★ Mark: ${getMarkCount(word)}</div>
      </div>
      <div style="background:var(--paper-surface-sub); border:1px solid var(--paper-border); padding:8px 12px; border-radius:var(--radius-sm);">
        <div style="font-size:11px; color:var(--text-secondary);">HP / SAN 状态</div>
        <div style="font-size:14px; font-weight:800; color:var(--text-primary);">${playerProfile.hp} / ${playerProfile.san}</div>
      </div>
    </div>

    <!-- 📜 英文原著战报研读 (支持每一个单词点击即查/即发音/即Mark) -->
    <div style="margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
        <span style="font-size:13px; font-weight:800; color:var(--text-primary); display:flex; align-items:center; gap:6px;">
          📖 英文原著战报研读 (Original Narrative · 点词即查)
        </span>
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px; height:24px;" onclick="speakSentence('${escapeHtml(outcomeStoryText.replace(/'/g, "\\'"))}')" title="朗读全段">🔊 朗读全段</button>
          <span style="font-size:11px; color:var(--brand-primary); font-weight:700;">
            💡 任意单词点查 & ★ Mark
          </span>
        </div>
      </div>
      <div style="background:var(--paper-surface-sub); padding:16px 18px; border-radius:var(--radius-md); border:1.5px solid var(--paper-border); font-size:15px; line-height:1.8; color:var(--text-primary); box-shadow: inset 0 2px 4px rgba(0,0,0,0.04);">
        ${clickableHtml}
      </div>
    </div>

    <!-- 🇨🇳 精校文学级中文润色译文 (直接呈现) -->
    ${outcomeCn || storyCn ? `
      <div style="margin-bottom:18px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-size:13px; font-weight:800; color:var(--brand-accent); display:flex; align-items:center; gap:6px;">
            🇨🇳 精校文学级中文润色译文 (Polished Literary Translation)
          </span>
        </div>
        <div style="background: rgba(245, 158, 11, 0.06); padding:16px 18px; border-radius:var(--radius-md); border:1.5px solid rgba(245, 158, 11, 0.25); border-left: 4px solid var(--brand-accent); font-size:14.5px; line-height:1.8; color:var(--text-primary);">
          ${outcomeCn ? `<div style="margin-bottom: ${storyCn ? '8px' : '0'}; font-weight:500;">${escapeHtml(outcomeCn)}</div>` : ''}
          ${storyCn && storyCn !== outcomeCn ? `<div style="font-size:13px; color:var(--text-secondary); border-top:1px dashed rgba(245, 158, 11, 0.2); padding-top:8px; margin-top:8px;">📖 <strong>原著背景</strong>: ${escapeHtml(storyCn)}</div>` : ''}
        </div>
      </div>
    ` : ''}

    <div style="display:flex; gap:10px; flex-wrap:wrap;">
      ${survivalData && survivalData.isNovelMode ? `
        <button class="btn btn-primary" style="flex:2; height:44px; font-size:14px; font-weight:800;" onclick="${isSuccess ? 'nextNovelBeat()' : 'launchSurvivalGame()'}">
          ${isSuccess ? (survivalData.beatId < survivalData.totalBeats ? `⚡ 推进下一幕 (Beat ${survivalData.beatId + 1}/${survivalData.totalBeats})` : `🎉 通关本章！进入第 ${survivalData.chapterId + 1} 章`) : '🔄 重新挑战本幕 (Retry Beat)'}
        </button>
      ` : `
        <button class="btn btn-primary" style="flex:2; height:44px; font-size:14px; font-weight:800;" onclick="nextSurvivalRound()">
          ${playerProfile.hp <= 0 ? '⚰️ 复活并重新挑战 (Respawn)' : '⚡ 开始下一战局 (Next Stage)'}
        </button>
      `}
      <button class="btn btn-secondary" style="flex:1; height:44px; font-size:13px;" onclick="switchNavView('words'); filterByTag('marked')">
        📖 查看生词本
      </button>
    </div>
  `;

  document.getElementById('gameOutcomeArea').innerHTML = '';
  document.getElementById('gameOutcomeArea').appendChild(outcomeCard);
}

function nextSurvivalRound() {
  if (typeof closeDefDrawer === 'function') closeDefDrawer();
  if (playerProfile.hp <= 0) {
    playerProfile.hp = 100;
    playerProfile.san = 100;
    playerProfile.combo = 1;
    saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);
    currentSurvivalRound = 1;
    triggerCloudSync();
  } else {
    currentSurvivalRound++;
  }
  launchSurvivalGame();
}

function useHintBuff() {
  if (!survivalData) return;
  showToast("Hint: Carefully consider the logical action that ensures safe evacuation.");
}

function abortSurvivalGame() {
  document.getElementById('survivalGameBox').style.display = 'none';
}

function toggleSurvivalCnBlock() {
  const block = document.getElementById('survivalCnBlock');
  const btn = document.getElementById('btnToggleSurvivalCn');
  if (!block) return;
  if (block.style.display === 'none') {
    block.style.display = 'block';
    if (btn) btn.textContent = '🇬🇧 隐藏中文译文';
  } else {
    block.style.display = 'none';
    if (btn) btn.textContent = '🇨🇳 显示中文译文';
  }
}

function autoSaveNovelProgress(customToast = null) {
  novelProgress.currentChapter = currentNovelChapter;
  novelProgress.currentBeat = currentNovelBeat;
  novelProgress.maxUnlockedChapter = Math.max(novelProgress.maxUnlockedChapter || 1, currentNovelChapter);
  novelProgress.lastSavedTime = new Date().toLocaleString();

  saveToStorage('vocab_novel_progress', novelProgress);
  saveToStorage('vocab_novel_ch', currentNovelChapter);
  saveToStorage('vocab_novel_beat', currentNovelBeat);
  
  updateSaveIndicatorUI();
  triggerCloudSync();
  if (customToast) showToast(customToast);
}

function updateSaveIndicatorUI() {
  const indText = document.getElementById('autoSaveText');
  const resText = document.getElementById('resumeBadgeText');
  if (indText) {
    indText.textContent = `已自动存档：第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} 幕`;
  }
  if (resText) {
    resText.textContent = `第 ${novelProgress.currentChapter || 1} 章 · 第 ${novelProgress.currentBeat || 1} 幕`;
  }
  const sel = document.getElementById('novelChapterSelect');
  if (sel && sel.value !== String(currentNovelChapter)) {
    sel.value = currentNovelChapter;
  }
}

function manualSaveCurrentProgress() {
  soundClick();
  autoSaveNovelProgress();
  // Automatically store snapshot into slot 1 or open modal for slot selection
  manualSaveToSlot(1, `快照: 第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} 幕`);
}

function resumeFromSavedProgress() {
  soundClick();
  currentNovelChapter = novelProgress.currentChapter || 1;
  currentNovelBeat = novelProgress.currentBeat || 1;
  saveToStorage('vocab_novel_ch', currentNovelChapter);
  saveToStorage('vocab_novel_beat', currentNovelBeat);
  updateSaveIndicatorUI();
  soundSuccess();
  showToast(`⚡ 已回到上次进度：第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} 幕`);
  launchSurvivalGame();
}

function openSaveLoadModal() {
  soundClick();
  const modal = document.getElementById('saveLoadModal');
  const overlay = document.getElementById('drawerOverlay');
  if (modal) {
    renderSaveLoadModal();
    modal.style.display = 'block';
    modal.classList.add('show');
  }
  if (overlay) overlay.classList.add('open');
}

function closeSaveLoadModal() {
  soundClick();
  const modal = document.getElementById('saveLoadModal');
  const overlay = document.getElementById('drawerOverlay');
  if (modal) {
    modal.style.display = 'none';
    modal.classList.remove('show');
  }
  if (overlay) overlay.classList.remove('open');
}

function renderSaveLoadModal() {
  const body = document.getElementById('saveLoadModalBody');
  if (!body) return;

  const chObj = (typeof NOVEL_CHAPTERS !== 'undefined') ? NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) : null;
  const totalBeatsInCurrCh = chObj ? chObj.beats.length : 28;

  let slotsHtml = novelSaveSlots.map((slot, idx) => {
    if (slot.empty) {
      return `
        <div class="save-slot-card empty-slot">
          <div class="save-slot-info">
            <div class="save-slot-title" style="color:var(--text-secondary);">
              <span>💾 存档槽位 ${idx + 1}</span>
              <span style="font-size:11px; background:var(--paper-border); padding:2px 6px; border-radius:4px;">空置</span>
            </div>
            <div class="save-slot-meta">点击右侧按钮将当前进度存入此槽位</div>
          </div>
          <button class="btn btn-primary" style="font-size:12px; padding:6px 14px;" onclick="manualSaveToSlot(${slot.id})">
            📥 存入当前进度
          </button>
        </div>
      `;
    } else {
      return `
        <div class="save-slot-card">
          <div class="save-slot-info">
            <div class="save-slot-title">
              <span>🔖 槽位 ${idx + 1}：第 ${slot.chapter} 章 · 第 ${slot.beat} 幕</span>
              <span style="font-size:11px; background:var(--brand-primary); color:#fff; padding:2px 6px; border-radius:4px;">${escapeHtml(slot.chapterTitle || '')}</span>
            </div>
            <div class="save-slot-meta">
              <span>❤️ HP: ${slot.hp || 100}</span>
              <span>🧠 SAN: ${slot.san || 100}</span>
              <span>🕒 存档时间: ${escapeHtml(slot.time || '')}</span>
            </div>
          </div>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn btn-primary" style="font-size:12px; padding:6px 12px;" onclick="loadFromSlot(${slot.id})">
              ▶️ 载入
            </button>
            <button class="btn btn-secondary" style="font-size:12px; padding:6px 10px;" onclick="manualSaveToSlot(${slot.id})" title="覆盖此存档">
              🔄 覆盖
            </button>
            <button class="btn btn-secondary" style="font-size:12px; padding:6px 8px; color:var(--brand-danger);" onclick="deleteSaveSlot(${slot.id})" title="删除此存档">
              🗑️
            </button>
          </div>
        </div>
      `;
    }
  }).join('');

  // Chapter Footprint & Quick Jump
  let chaptersListHtml = '';
  if (typeof NOVEL_CHAPTERS !== 'undefined') {
    chaptersListHtml = NOVEL_CHAPTERS.map(ch => {
      const isCurrent = ch.id === currentNovelChapter;
      const isUnlocked = ch.id <= (novelProgress.maxUnlockedChapter || 1);
      return `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 12px; border-radius:var(--radius-sm); margin-bottom:6px; background:${isCurrent ? 'rgba(99, 102, 241, 0.1)' : 'var(--paper-surface)'}; border:1px solid ${isCurrent ? 'var(--brand-primary)' : 'var(--paper-border)'};">
          <div>
            <span style="font-weight:800; font-size:13px; color:var(--text-primary);">第 ${ch.id} 章 · ${escapeHtml(ch.title)}</span>
            <span style="font-size:11px; color:var(--text-secondary); margin-left:8px;">共 ${ch.beatCount ?? ch.beats.length} 幕互动</span>
          </div>
          <div>
            ${isCurrent ? `<span style="font-size:11px; font-weight:800; color:var(--brand-primary); margin-right:8px;">🚩 当前位置 (第 ${currentNovelBeat}/${ch.beatCount ?? ch.beats.length} 幕)</span>` : ''}
            <button class="btn btn-secondary" style="font-size:11px; padding:4px 10px; height:28px;" onclick="jumpToChapter(${ch.id})">
              ${isCurrent ? '⚡ 进入本章' : '📖 开启探索'}
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  body.innerHTML = `
    <!-- 当前自动存档 -->
    <div style="background:var(--paper-surface-sub); border:1.5px solid var(--brand-success); border-radius:var(--radius-md); padding:14px 16px; margin-bottom:18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
        <div>
          <div style="font-size:12px; font-weight:800; color:var(--brand-success); display:flex; align-items:center; gap:6px;">
            <span>⚡ 最近实时自动存档 (Auto-Save Snapshot)</span>
          </div>
          <div style="font-size:15px; font-weight:900; color:var(--text-primary); margin-top:4px;">
            第 ${currentNovelChapter} 章 · 第 ${currentNovelBeat} / ${totalBeatsInCurrCh} 幕
          </div>
          <div style="font-size:11px; color:var(--text-secondary); margin-top:2px;">
            自动存档时间: ${novelProgress.lastSavedTime || '刚刚'} · 账号进度已自动同步
          </div>
        </div>
        <button class="btn btn-primary" style="font-size:13px; font-weight:800; padding:6px 18px;" onclick="closeSaveLoadModal(); resumeFromSavedProgress();">
          ▶️ 立即继续冒险
        </button>
      </div>
    </div>

    <!-- 手动存档卡槽列表 -->
    <div style="margin-bottom:18px;">
      <div style="font-size:13px; font-weight:800; color:var(--text-primary); margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
        <span>💾 手动存档卡槽 (5 个独立自定义槽位)</span>
        <button class="btn btn-secondary" style="font-size:11px; padding:2px 8px;" onclick="manualSaveCurrentProgress(); renderSaveLoadModal();">+ 存入当前</button>
      </div>
      ${slotsHtml}
    </div>

    <!-- 51 章节大纲与通关足迹 -->
    <div>
      <div style="font-size:13px; font-weight:800; color:var(--text-primary); margin-bottom:10px;">
        📑 原著 51 章节全目录与快速定位
      </div>
      <div style="max-height:220px; overflow-y:auto; padding-right:4px;">
        ${chaptersListHtml}
      </div>
    </div>
  `;
}

function manualSaveToSlot(slotId, customName = null) {
  soundClick();
  const slotIdx = novelSaveSlots.findIndex(s => s.id === slotId);
  if (slotIdx === -1) return;

  const chObj = (typeof NOVEL_CHAPTERS !== 'undefined') ? NOVEL_CHAPTERS.find(c => c.id === currentNovelChapter) : null;

  novelSaveSlots[slotIdx] = {
    id: slotId,
    name: customName || `存档槽位 ${slotId}`,
    empty: false,
    chapter: currentNovelChapter,
    beat: currentNovelBeat,
    chapterTitle: chObj ? chObj.title : `第 ${currentNovelChapter} 章`,
    hp: playerProfile.hp,
    san: playerProfile.san,
    time: new Date().toLocaleString()
  };

  saveToStorage('vocab_novel_saves', novelSaveSlots);
  triggerCloudSync();
  soundSuccess();
  showToast(`💾 成功保存至【存档槽位 ${slotId}】！`);
  const modal = document.getElementById('saveLoadModal');
  if (modal && modal.style.display === 'block') {
    renderSaveLoadModal();
  }
}

function loadFromSlot(slotId) {
  soundClick();
  const slot = novelSaveSlots.find(s => s.id === slotId);
  if (!slot || slot.empty) return;

  currentNovelChapter = slot.chapter;
  currentNovelBeat = slot.beat;
  if (slot.hp) playerProfile.hp = slot.hp;
  if (slot.san) playerProfile.san = slot.san;
  saveToStorage(STORAGE_KEYS.PROFILE, playerProfile);

  autoSaveNovelProgress();
  closeSaveLoadModal();
  soundSuccess();
  showToast(`📂 读档成功！已回到 第 ${slot.chapter} 章 · 第 ${slot.beat} 幕`);
  launchSurvivalGame();
}

function deleteSaveSlot(slotId) {
  soundClick();
  const slotIdx = novelSaveSlots.findIndex(s => s.id === slotId);
  if (slotIdx === -1) return;

  novelSaveSlots[slotIdx] = { id: slotId, name: `存档槽 ${slotId}`, empty: true };
  saveToStorage('vocab_novel_saves', novelSaveSlots);
  triggerCloudSync();
  showToast(`🗑️ 已清空存档槽位 ${slotId}`);
  renderSaveLoadModal();
}

function jumpToChapter(chId) {
  soundClick();
  currentNovelChapter = parseInt(chId, 10) || 1;
  currentNovelBeat = 1;
  autoSaveNovelProgress();
  closeSaveLoadModal();
  showToast(`📖 已开启第 ${currentNovelChapter} 章！`);
  launchSurvivalGame();
}