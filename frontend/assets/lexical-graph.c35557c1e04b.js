// =========================================================
// STONE_LEXICAL_GRAPH - 全量相似词图谱与 SAN 阶梯题库 (711词完整版)
// 包含真实例句挖空 (Cloze)、4个纯英文形近词、4个纯英文近义词及语言学锦囊
// =========================================================

(function() {
  'use strict';
  const graph = {
  "space": {
    "zh": "空间；太空；空隙",
    "level": "A1/CET-4",
    "cloze": {
      "sentence": "The new office layout provides plenty of ______ for collaborative team meetings.",
      "translation": "新的办公室布局为团队协作会议提供了充足的空间。"
    },
    "form_confusables": [
      {
        "word": "space",
        "zh": "空间；余地"
      },
      {
        "word": "pace",
        "zh": "步调；节奏"
      },
      {
        "word": "spice",
        "zh": "香料；调味品"
      },
      {
        "word": "span",
        "zh": "跨度；持续"
      }
    ],
    "semantic_confusables": [
      {
        "word": "space",
        "zh": "物理空间"
      },
      {
        "word": "room",
        "zh": "容纳余地"
      },
      {
        "word": "area",
        "zh": "区域范围"
      },
      {
        "word": "capacity",
        "zh": "容纳容量"
      }
    ],
    "notes": "【搭配考点】space for 提供空间/余地；【形近辨析】pace (节奏)，spice (香料)，span (跨度)；【近义辨析】room 强调容纳余地，area 强调区域范围。",
    "word": "space",
    "translation": "空间；太空；空隙",
    "phonetic": "/space/"
  },
  "universe": {
    "zh": "宇宙；万物；全人类",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "Astronomers are continuously exploring the vast mysteries of the expanding ______ .",
      "translation": "天文学家们正在不断探索不断膨胀的宇宙的浩瀚奥秘。"
    },
    "form_confusables": [
      {
        "word": "universe",
        "zh": "宇宙；万物"
      },
      {
        "word": "universal",
        "zh": "普遍的；通用的"
      },
      {
        "word": "university",
        "zh": "综合性大学"
      },
      {
        "word": "reverse",
        "zh": "反转；逆转"
      }
    ],
    "semantic_confusables": [
      {
        "word": "universe",
        "zh": "全宇宙万物"
      },
      {
        "word": "cosmos",
        "zh": "广袤有序的宇宙"
      },
      {
        "word": "world",
        "zh": "世界；全人类"
      },
      {
        "word": "creation",
        "zh": "天地万物；造化"
      }
    ],
    "notes": "【搭配考点】universe 专指整个宇宙空间或万物；【形近辨析】universal (普遍的)，university (大学)，reverse (颠倒)；【近义辨析】cosmos 偏向秩序井然的宇宙学体系。",
    "word": "universe",
    "translation": "宇宙；万物；全人类",
    "phonetic": "/universe/"
  },
  "unite": {
    "zh": "联合；团结；统一",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "The crisis inspired the citizens to ______ behind their local leadership.",
      "translation": "这场危机激励市民们团结起来支持当地的领导层。"
    },
    "form_confusables": [
      {
        "word": "unite",
        "zh": "团结；联合"
      },
      {
        "word": "untie",
        "zh": "解开；松开"
      },
      {
        "word": "unique",
        "zh": "独特的；唯一的"
      },
      {
        "word": "unit",
        "zh": "单元；单位"
      }
    ],
    "semantic_confusables": [
      {
        "word": "unite",
        "zh": "团结为一体"
      },
      {
        "word": "join",
        "zh": "加入；连接"
      },
      {
        "word": "merge",
        "zh": "合并；融合"
      },
      {
        "word": "combine",
        "zh": "结合；联合"
      }
    ],
    "notes": "【搭配考点】unite 强调凝聚成统一整体；【形近辨析】untie (解开/松绑)，unique (独一无二)，unit (单位/部件)；【近义辨析】merge 强调机构或实体合并，combine 强调要素结合。",
    "word": "unite",
    "translation": "联合；团结；统一",
    "phonetic": "/unite/"
  },
  "reunite": {
    "word": "reunite",
    "phonetic": "/,ri:ju:'nait/",
    "translation": "重聚; 重新统一",
    "cloze": {
      "sentence": "There have been rumours that the band will ______ for a world tour.",
      "translation": "该语境考查核心词义【重聚】在真实例句中的精准搭配。",
      "original": "There have been rumours that the band will reunite for a world tour."
    },
    "form_confusables": [
      "unite",
      "require",
      "retaliate",
      "remote"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】reunite (重聚)；【形近易混】unite, require, retaliate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "union": {
    "word": "union",
    "phonetic": "/'ju:niən/",
    "translation": "联盟; 工会",
    "cloze": {
      "sentence": "France's biggest ______ He paid his union dues to Local Union 98.",
      "translation": "该语境考查核心词义【联盟】在权威语篇中的实际运用。",
      "original": "France's biggest union He paid his union dues to Local Union 98."
    },
    "form_confusables": [
      "uniform",
      "undo",
      "opinion",
      "unite"
    ],
    "semantic_confusables": [
      "coalition",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】union (联盟)；【形近易混】uniform, undo, opinion；【近义搭配】coalition, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "diverse": {
    "zh": "多样的；形形色色的；不同的",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "The international forum brings together scholars from ______ cultural backgrounds.",
      "translation": "该国际论坛汇集了来自不同文化背景的学者。"
    },
    "form_confusables": [
      {
        "word": "diverse",
        "zh": "多元多样的"
      },
      {
        "word": "divert",
        "zh": "使转向；转移"
      },
      {
        "word": "reverse",
        "zh": "颠倒；彻底反转"
      },
      {
        "word": "divorce",
        "zh": "离婚；分离"
      }
    ],
    "semantic_confusables": [
      {
        "word": "diverse",
        "zh": "差异多元的"
      },
      {
        "word": "various",
        "zh": "各色各样的"
      },
      {
        "word": "varied",
        "zh": "富于变化的"
      },
      {
        "word": "different",
        "zh": "彼此不同的"
      }
    ],
    "notes": "【搭配考点】diverse backgrounds 强调多元性与丰富性；【形近辨析】divert (转向)，reverse (反转)，divorce (离婚)；【近义辨析】various 强调种类繁多，different 强调互不相同。",
    "word": "diverse",
    "translation": "多样的；形形色色的；不同的",
    "phonetic": "/diverse/"
  },
  "convert": {
    "zh": "转变；变换；使改变信仰",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "The developers decided to ______ the old factory into a modern shopping complex.",
      "translation": "开发商决定将旧工厂改造成现代化购物中心。"
    },
    "form_confusables": [
      {
        "word": "convert",
        "zh": "转变；改建"
      },
      {
        "word": "divert",
        "zh": "转移；使改道"
      },
      {
        "word": "revert",
        "zh": "恢复原状；重归"
      },
      {
        "word": "invert",
        "zh": "倒置；颠倒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "convert",
        "zh": "改变用途/形态"
      },
      {
        "word": "transform",
        "zh": "彻底改变形态"
      },
      {
        "word": "turn",
        "zh": "变成；转变"
      },
      {
        "word": "alter",
        "zh": "修改；改动"
      }
    ],
    "notes": "【搭配考点】convert into 强调形态或用途的彻底转变；【形近辨析】divert (转移/改道)，revert (恢复原状)，invert (颠倒/倒置)；【近义辨析】transform 强调结构巨变，alter 侧重局部修改。",
    "word": "convert",
    "translation": "转变；变换；使改变信仰",
    "phonetic": "/convert/"
  },
  "reverse": {
    "zh": "颠倒；反转；倒退",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "The government was forced to ______ its controversial tax policy after widespread protests.",
      "translation": "在普遍抗议之后，政府被迫撤销了其备受争议的税收政策。"
    },
    "form_confusables": [
      {
        "word": "reverse",
        "zh": "反转；撤销"
      },
      {
        "word": "reserve",
        "zh": "预订；储备"
      },
      {
        "word": "revise",
        "zh": "修订；修改"
      },
      {
        "word": "converse",
        "zh": "交谈；相反的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reverse",
        "zh": "彻底改变政策"
      },
      {
        "word": "overturn",
        "zh": "推翻裁定"
      },
      {
        "word": "revoke",
        "zh": "官方吊销撤回"
      },
      {
        "word": "undo",
        "zh": "撤销消除效果"
      }
    ],
    "notes": "【搭配考点】reverse a decision/policy 彻底改变/推翻决定；【形近辨析】reserve (预订/储备)，revise (修正)，converse (交谈)；【近义辨析】overturn 强调彻底推翻，revoke 强调官方吊销。",
    "word": "reverse",
    "translation": "颠倒；反转；倒退",
    "phonetic": "/reverse/"
  },
  "anniversary": {
    "word": "anniversary",
    "phonetic": "/,æni'və:səri/",
    "translation": "周年纪念日",
    "cloze": {
      "sentence": "He bought her a diamond ring on their tenth wedding ______.",
      "translation": "该语境考查核心词义【周年纪念日】在权威语篇中的实际运用。",
      "original": "He bought her a diamond ring on their tenth wedding anniversary."
    },
    "form_confusables": [
      "universe",
      "contrary",
      "contemporary",
      "controversy"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】anniversary (周年纪念日)；【形近易混】universe, contrary, contemporary；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "annual": {
    "word": "annual",
    "phonetic": "/'ænjuəl/",
    "translation": "年度的; 每年的",
    "cloze": {
      "sentence": "The children usually asked for comic or sporting ______ for Christmas.",
      "translation": "该语境考查核心词义【年度的】在真实例句中的精准搭配。",
      "original": "The children usually asked for comic or sporting annuals for Christmas."
    },
    "form_confusables": [
      "actual",
      "continual",
      "casual",
      "channel"
    ],
    "semantic_confusables": [
      "yearly",
      "periodic",
      "regular",
      "daily"
    ],
    "notes": "【正解考点】annual (年度的)；【形近易混】actual, continual, casual；【近义搭配】yearly, periodic, regular。注意在语境中甄别固定搭配与语义内涵。"
  },
  "controversy": {
    "word": "controversy",
    "phonetic": "/'kɔntrə,və:si/",
    "translation": "争论; 争议",
    "cloze": {
      "sentence": "He has resigned amid continuing ______ over his expense claims.",
      "translation": "该语境考查核心词义【争论】在权威语篇中的实际运用。",
      "original": "He has resigned amid continuing controversy over his expense claims."
    },
    "form_confusables": [
      "controversial",
      "contrary",
      "contrast",
      "conversion"
    ],
    "semantic_confusables": [
      "conflict",
      "resolve",
      "change",
      "manage"
    ],
    "notes": "【正解考点】controversy (争论)；【形近易混】controversial, contrary, contrast；【近义搭配】conflict, resolve, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contrary": {
    "word": "contrary",
    "phonetic": "/'kɔntrəri/",
    "translation": "相反的",
    "cloze": {
      "sentence": "It seems ______ to common sense.",
      "translation": "该语境考查核心词义【相反的】在权威语篇中的实际运用。",
      "original": "It seems contrary to common sense."
    },
    "form_confusables": [
      "contrast",
      "contract",
      "controversy",
      "country"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】contrary (相反的)；【形近易混】contrast, contract, controversy；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contrast": {
    "word": "contrast",
    "phonetic": "/kən'trɑ:st; -'træst; 'kɔntrɑ:st; -træst/",
    "translation": "对比; 对照",
    "cloze": {
      "sentence": "Her hair was black, a stunning ______ to her pale complexion.",
      "translation": "该语境考查核心词义【对比】在权威语篇中的实际运用。",
      "original": "Her hair was black, a stunning contrast to her pale complexion."
    },
    "form_confusables": [
      "contract",
      "contest",
      "contrary",
      "contact"
    ],
    "semantic_confusables": [
      "compare",
      "comparison",
      "change",
      "manage"
    ],
    "notes": "【正解考点】contrast (对比)；【形近易混】contract, contest, contrary；【近义搭配】compare, comparison, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "nasty": {
    "word": "nasty",
    "phonetic": "/'nɑ:sti; 'næs-/",
    "translation": "恶劣的; 令人讨厌的",
    "cloze": {
      "sentence": "He's a thoroughly ______ piece of work.",
      "translation": "该语境考查核心词义【恶劣的】在权威语篇中的实际运用。",
      "original": "He's a thoroughly nasty piece of work."
    },
    "form_confusables": [
      "vast",
      "notify",
      "contrast",
      "county"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】nasty (恶劣的)；【形近易混】vast, notify, contrast；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "astronaut": {
    "word": "astronaut",
    "phonetic": "/'æstrənɔ:t/",
    "translation": "宇航员",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：宇航员)",
      "original": "It is essential to astronaut this critical process before making any final decisions."
    },
    "form_confusables": [
      "instruct",
      "rational",
      "construct",
      "action"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】astronaut (宇航员)；【形近易混】instruct, rational, construct；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "heaven": {
    "word": "heaven",
    "phonetic": "/'hevən/",
    "translation": "天堂; 天空",
    "cloze": {
      "sentence": "It was a marriage made in ______.",
      "translation": "该语境考查核心词义【天堂】在权威语篇中的实际运用。",
      "original": "It was a marriage made in heaven."
    },
    "form_confusables": [
      "shave",
      "behave",
      "hesitate",
      "achieve"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】heaven (天堂)；【形近易混】shave, behave, hesitate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "satellite": {
    "word": "satellite",
    "phonetic": "/'sætəlait/",
    "translation": "卫星; 人造卫星",
    "cloze": {
      "sentence": "The BBC broadcast the game via ______.",
      "translation": "该语境考查核心词义【卫星】在权威语篇中的实际运用。",
      "original": "The BBC broadcast the game via satellite."
    },
    "form_confusables": [
      "satisfy",
      "static",
      "temple",
      "reunite"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】satellite (卫星)；【形近易混】satisfy, static, temple；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "moon": {
    "word": "moon",
    "phonetic": "/mu:n/",
    "translation": "月亮; 月球",
    "cloze": {
      "sentence": "A large black cloud covered the ______.",
      "translation": "该语境考查核心词义【月亮】在权威语篇中的实际运用。",
      "original": "A large black cloud covered the moon."
    },
    "form_confusables": [
      "mount",
      "emotion",
      "modern",
      "common"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】moon (月亮)；【形近易混】mount, emotion, modern；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "develop": {
    "zh": "发展；开发；研制",
    "level": "A2/CET-4",
    "cloze": {
      "sentence": "The engineering team worked tirelessly to ______ a breakthrough battery technology.",
      "translation": "工程团队不知疲倦地研发突破性的电池技术。"
    },
    "form_confusables": [
      {
        "word": "develop",
        "zh": "研制；开发"
      },
      {
        "word": "envelop",
        "zh": "包围；包裹"
      },
      {
        "word": "devote",
        "zh": "奉献；投入"
      },
      {
        "word": "deploy",
        "zh": "部署；调遣"
      }
    ],
    "semantic_confusables": [
      {
        "word": "develop",
        "zh": "研发新技术"
      },
      {
        "word": "create",
        "zh": "创造首创"
      },
      {
        "word": "generate",
        "zh": "产生引致"
      },
      {
        "word": "produce",
        "zh": "制造生产"
      }
    ],
    "notes": "【搭配考点】develop technology/skills 研发或逐步培养；【形近辨析】envelop (包围)，devote (奉献)，deploy (部署)；【近义辨析】create 强调从无到有创造，produce 强调生产制造。",
    "word": "develop",
    "translation": "发展；开发；研制",
    "phonetic": "/develop/"
  },
  "evolve": {
    "word": "evolve",
    "phonetic": "/i'vɔlv/",
    "translation": "演变; 进化",
    "cloze": {
      "sentence": "Online games tend to ______ over time.",
      "translation": "该语境考查核心词义【演变】在权威语篇中的实际运用。",
      "original": "Online games tend to evolve over time."
    },
    "form_confusables": [
      "revolve",
      "involve",
      "resolve",
      "involved"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】evolve (演变)；【形近易混】revolve, involve, resolve；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "revolve": {
    "word": "revolve",
    "phonetic": "/ri'vɔlv; -'vɔ:lv/",
    "translation": "旋转; 围绕",
    "cloze": {
      "sentence": "The fan was revolving very slowly All planets ______ on an axis.",
      "translation": "该语境考查核心词义【旋转】在权威语篇中的实际运用。",
      "original": "The fan was revolving very slowly All planets revolve on an axis."
    },
    "form_confusables": [
      "evolve",
      "resolve",
      "remove",
      "involve"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】revolve (旋转)；【形近易混】evolve, resolve, remove；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "involve": {
    "word": "involve",
    "phonetic": "/in'vɔlv/",
    "translation": "包含; 牵涉",
    "cloze": {
      "sentence": "Inventions typically ______ minor improvements in technology.",
      "translation": "该语境考查核心词义【包含】在权威语篇中的实际运用。",
      "original": "Inventions typically involve minor improvements in technology."
    },
    "form_confusables": [
      "involved",
      "evolve",
      "revolve",
      "inclusive"
    ],
    "semantic_confusables": [
      "comprise",
      "contain",
      "change",
      "manage"
    ],
    "notes": "【正解考点】involve (包含)；【形近易混】involved, evolve, revolve；【近义搭配】comprise, contain, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "advance": {
    "word": "advance",
    "phonetic": "/əd'vɑ:ns; əd'væns/",
    "translation": "前进; 提前",
    "cloze": {
      "sentence": "The general ordered an ______ to the front line.",
      "translation": "该语境考查核心词义【前进】在真实例句中的精准搭配。",
      "original": "The general ordered an advance to the front line."
    },
    "form_confusables": [
      "balance",
      "defiance",
      "chance",
      "enhance"
    ],
    "semantic_confusables": [
      "proceed",
      "progress",
      "develop",
      "move"
    ],
    "notes": "【正解考点】advance (前进)；【形近易混】balance, defiance, chance；【近义搭配】proceed, progress, develop。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ahead": {
    "word": "ahead",
    "phonetic": "/ə'hed/",
    "translation": "在前面; 领先",
    "cloze": {
      "sentence": "I'll run ______ and warn them.",
      "translation": "该语境考查核心词义【在前面】在真实例句中的精准搭配。",
      "original": "I'll run ahead and warn them."
    },
    "form_confusables": [
      "amend",
      "ascend",
      "shade",
      "cheat"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】ahead (在前面)；【形近易混】amend, ascend, shade；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ongoing": {
    "word": "ongoing",
    "phonetic": "/'ɔn,ɡəuiŋ; 'ɔ:n-/",
    "translation": "进行中的; 持续的",
    "cloze": {
      "sentence": "The police investigation is ______.",
      "translation": "该语境考查核心词义【进行中的】在真实例句中的精准搭配。",
      "original": "The police investigation is ongoing."
    },
    "form_confusables": [
      "following",
      "confine",
      "contain",
      "cling"
    ],
    "semantic_confusables": [
      "constant",
      "continuous",
      "change",
      "manage"
    ],
    "notes": "【正解考点】ongoing (进行中的)；【形近易混】following, confine, contain；【近义搭配】constant, continuous, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "improve": {
    "zh": "改善；提高；增进",
    "level": "A2/CET-4",
    "cloze": {
      "sentence": "Regular training sessions can significantly ______ employee productivity and morale.",
      "translation": "定期的培训可以显著提高员工的生产力与士气。"
    },
    "form_confusables": [
      {
        "word": "improve",
        "zh": "改善；提高"
      },
      {
        "word": "approve",
        "zh": "批准；赞成"
      },
      {
        "word": "prove",
        "zh": "证明证实"
      },
      {
        "word": "improvise",
        "zh": "即兴发挥"
      }
    ],
    "semantic_confusables": [
      {
        "word": "improve",
        "zh": "改善成效"
      },
      {
        "word": "enhance",
        "zh": "增强提升价值"
      },
      {
        "word": "boost",
        "zh": "大幅推动提升"
      },
      {
        "word": "upgrade",
        "zh": "升级改进"
      }
    ],
    "notes": "【搭配考点】improve productivity/quality 改善提升；【形近辨析】approve (赞成/批准)，prove (证明)，improvise (即兴创作)；【近义辨析】enhance 强调增加价值或美感，boost 强调迅速推动增长。",
    "word": "improve",
    "translation": "改善；提高；增进",
    "phonetic": "/improve/"
  },
  "approve": {
    "word": "approve",
    "phonetic": "/ə'pru:v/",
    "translation": "批准; 赞成",
    "cloze": {
      "sentence": "I don't personally ______ but I'm willing to live with it.",
      "translation": "该语境考查核心词义【批准】在权威语篇中的实际运用。",
      "original": "I don't personally approve but I'm willing to live with it."
    },
    "form_confusables": [
      "approach",
      "improve",
      "appreciate",
      "provide"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】approve (批准)；【形近易混】approach, improve, appreciate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "proof": {
    "word": "proof",
    "phonetic": "/pru:f/",
    "translation": "证据; 证明",
    "cloze": {
      "sentence": "Have you got any positive ______ that she took the money?",
      "translation": "该语境考查核心词义【证据】在权威语篇中的实际运用。",
      "original": "Have you got any positive proof that she took the money?"
    },
    "form_confusables": [
      "profit",
      "promote",
      "profound",
      "program"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】proof (证据)；【形近易混】profit, promote, profound；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "enhance": {
    "word": "enhance",
    "phonetic": "/in'hɑ:ns; -hæns/",
    "translation": "提高; 增强",
    "cloze": {
      "sentence": "Most people seek to ______ their status at work in whatever ways they can.",
      "translation": "该语境考查核心词义【提高】在权威语篇中的实际运用。",
      "original": "Most people seek to enhance their status at work in whatever ways they can."
    },
    "form_confusables": [
      "chance",
      "defiance",
      "enable",
      "enlarge"
    ],
    "semantic_confusables": [
      "improve",
      "boost",
      "strengthen",
      "heighten"
    ],
    "notes": "【正解考点】enhance (提高)；【形近易混】chance, defiance, enable；【近义搭配】improve, boost, strengthen。注意在语境中甄别固定搭配与语义内涵。"
  },
  "enable": {
    "word": "enable",
    "phonetic": "/i'neibl/",
    "translation": "使能够; 开启",
    "cloze": {
      "sentence": "The new train line should ______ easier access to the stadium.",
      "translation": "该语境考查核心词义【使能够】在权威语篇中的实际运用。",
      "original": "The new train line should enable easier access to the stadium."
    },
    "form_confusables": [
      "gamble",
      "enhance",
      "enlarge",
      "rental"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】enable (使能够)；【形近易混】gamble, enhance, enlarge；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "enlarge": {
    "word": "enlarge",
    "phonetic": "/in'lɑ:dʒ/",
    "translation": "扩大; 放大",
    "cloze": {
      "sentence": "The gallery is seeking to ______ its holdings of Danish art.",
      "translation": "该语境考查核心词义【扩大】在权威语篇中的实际运用。",
      "original": "The gallery is seeking to enlarge its holdings of Danish art."
    },
    "form_confusables": [
      "enable",
      "ensure",
      "enhance",
      "engagement"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】enlarge (扩大)；【形近易混】enable, ensure, enhance；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "enrich": {
    "word": "enrich",
    "phonetic": "/in'ritʃ/",
    "translation": "使丰富; 充实",
    "cloze": {
      "sentence": "Reading good literature can ______ all our lives.",
      "translation": "该语境考查核心词义【使丰富】在权威语篇中的实际运用。",
      "original": "Reading good literature can enrich all our lives."
    },
    "form_confusables": [
      "bench",
      "cherish",
      "herewith",
      "ensure"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】enrich (使丰富)；【形近易混】bench, cherish, herewith；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fasten": {
    "word": "fasten",
    "phonetic": "/'fɑ:sən; 'fæ-/",
    "translation": "系紧; 固定",
    "cloze": {
      "sentence": "Use the special kit provided to ______ the child seat in the car.",
      "translation": "该语境考查核心词义【系紧】在权威语篇中的实际运用。",
      "original": "Use the special kit provided to fasten the child seat in the car."
    },
    "form_confusables": [
      "fashion",
      "ascend",
      "fraction",
      "fragment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】fasten (系紧)；【形近易混】fashion, ascend, fraction；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "tight": {
    "word": "tight",
    "phonetic": "/tait/",
    "translation": "紧的; 牢固的",
    "cloze": {
      "sentence": "Every muscle in her face was drawn ______.",
      "translation": "该语境考查核心词义【紧的】在权威语篇中的实际运用。",
      "original": "Every muscle in her face was drawn tight."
    },
    "form_confusables": [
      "freight",
      "twist",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "secure",
      "firm",
      "fastened",
      "strict"
    ],
    "notes": "【正解考点】tight (紧的)；【形近易混】freight, twist, obtain；【近义搭配】secure, firm, fastened。注意在语境中甄别固定搭配与语义内涵。"
  },
  "buckle": {
    "word": "buckle",
    "phonetic": "/'bʌkl/",
    "translation": "扣紧; 屈服",
    "cloze": {
      "sentence": "These shoes ______ at the side.",
      "translation": "该语境考查核心词义【扣紧】在真实例句中的精准搭配。",
      "original": "These shoes buckle at the side."
    },
    "form_confusables": [
      "cubicle",
      "blend",
      "scale",
      "cycle"
    ],
    "semantic_confusables": [
      "bend",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】buckle (扣紧)；【形近易混】cubicle, blend, scale；【近义搭配】bend, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "watertight": {
    "word": "watertight",
    "phonetic": "/'wɔ:tətait; 'wɔ-/",
    "translation": "严密的; 防水的",
    "cloze": {
      "sentence": "The containers should remain ______.",
      "translation": "该语境考查核心词义【严密的】在权威语篇中的实际运用。",
      "original": "The containers should remain watertight."
    },
    "form_confusables": [
      "freight",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】watertight (严密的)；【形近易混】freight, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "loose": {
    "word": "loose",
    "phonetic": "/lu:s/",
    "translation": "宽松的; 松散的",
    "cloze": {
      "sentence": "He felt he had to cut ______ from his family.",
      "translation": "该语境考查核心词义【宽松的】在权威语篇中的实际运用。",
      "original": "He felt he had to cut loose from his family."
    },
    "form_confusables": [
      "choose",
      "compose",
      "lease",
      "clone"
    ],
    "semantic_confusables": [
      "slack",
      "free",
      "detached",
      "relaxed"
    ],
    "notes": "【正解考点】loose (宽松的)；【形近易混】choose, compose, lease；【近义搭配】slack, free, detached。注意在语境中甄别固定搭配与语义内涵。"
  },
  "undo": {
    "word": "undo",
    "phonetic": "/,ʌn'du:/",
    "translation": "撤销; 解开",
    "cloze": {
      "sentence": "I can't ______ this zip—it seems to be stuck.",
      "translation": "该语境考查核心词义【撤销】在权威语篇中的实际运用。",
      "original": "I can't undo this zip—it seems to be stuck."
    },
    "form_confusables": [
      "union",
      "uniform",
      "wound",
      "bond"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】undo (撤销)；【形近易混】union, uniform, wound；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "form": {
    "word": "form",
    "phonetic": "/fɔ:m/",
    "translation": "形式; 形成",
    "cloze": {
      "sentence": "Barcelona are the team in ______.",
      "translation": "该语境考查核心词义【形式】在权威语篇中的实际运用。",
      "original": "Barcelona are the team in form."
    },
    "form_confusables": [
      "formal",
      "format",
      "formula",
      "reform"
    ],
    "semantic_confusables": [
      "formation",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】form (形式)；【形近易混】formal, format, formula；【近义搭配】formation, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "formal": {
    "word": "formal",
    "phonetic": "/'fɔ:məl/",
    "translation": "正规的; 正式的",
    "cloze": {
      "sentence": "Her words sounded oddly ______.",
      "translation": "该语境考查核心词义【正规的】在权威语篇中的实际运用。",
      "original": "Her words sounded oddly formal."
    },
    "form_confusables": [
      "format",
      "form",
      "formula",
      "formation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】formal (正规的)；【形近易混】format, form, formula；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "uniform": {
    "word": "uniform",
    "phonetic": "/'ju:nifɔ:m/",
    "translation": "制服; 统一的",
    "cloze": {
      "sentence": "A man in a ______ stopped us entering.",
      "translation": "该语境考查核心词义【制服】在权威语篇中的实际运用。",
      "original": "A man in a uniform stopped us entering."
    },
    "form_confusables": [
      "inform",
      "form",
      "conform",
      "union"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】uniform (制服)；【形近易混】inform, form, conform；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "formation": {
    "word": "formation",
    "phonetic": "/span>ma<span style='vertical-align:25%;font-size:35%;'>•</",
    "translation": "形成; 编队",
    "cloze": {
      "sentence": "The troops advanced in battle ______.",
      "translation": "该语境考查核心词义【形成】在权威语篇中的实际运用。",
      "original": "The troops advanced in battle formation."
    },
    "form_confusables": [
      "format",
      "fraction",
      "foundation",
      "formal"
    ],
    "semantic_confusables": [
      "form",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】formation (形成)；【形近易混】format, fraction, foundation；【近义搭配】form, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "reform": {
    "word": "reform",
    "phonetic": "/ri'fɔ:m/",
    "translation": "改革; 改造",
    "cloze": {
      "sentence": "There are proposals to ______ the welfare system.",
      "translation": "该语境考查核心词义【改革】在权威语篇中的实际运用。",
      "original": "There are proposals to reform the welfare system."
    },
    "form_confusables": [
      "form",
      "perform",
      "inform",
      "refresh"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】reform (改革)；【形近易混】form, perform, inform；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "format": {
    "word": "format",
    "phonetic": "/'fɔ:mæt/",
    "translation": "格式; 版式",
    "cloze": {
      "sentence": "For this year, we have decided to change the ______ of the conference slightly.",
      "translation": "该语境考查核心词义【格式】在权威语篇中的实际运用。",
      "original": "For this year, we have decided to change the format of the conference slightly."
    },
    "form_confusables": [
      "formation",
      "formal",
      "form",
      "formulate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】format (格式)；【形近易混】formation, formal, form；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conform": {
    "zh": "符合；与...一致；顺应",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "The new factory design must ______ with all local environmental regulations.",
      "translation": "新工厂的设计必须符合当地所有的环保法规。"
    },
    "form_confusables": [
      {
        "word": "conform",
        "zh": "符合；与...一致"
      },
      {
        "word": "confirm",
        "zh": "确认；证实"
      },
      {
        "word": "comfort",
        "zh": "安慰；舒适"
      },
      {
        "word": "confront",
        "zh": "迎面遭遇；正视面对"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conform",
        "zh": "符合；顺应规范"
      },
      {
        "word": "comply",
        "zh": "遵从；服从 (comply with)"
      },
      {
        "word": "abide",
        "zh": "遵守；信守 (abide by)"
      },
      {
        "word": "obey",
        "zh": "服从；听从命令"
      }
    ],
    "notes": "【搭配考点】conform with/to 强调与既定规范或准则一致；【形近辨析】confirm (证实), comfort (安慰), confront (面对)；【近义辨析】comply with 侧重顺从规章，abide by 侧重恪守协议，obey 侧重服从命令。",
    "word": "conform",
    "translation": "符合；与...一致；顺应",
    "phonetic": "/conform/"
  },
  "comply": {
    "zh": "遵从；顺从；服从",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "All contractors are legally obligated to ______ with the safety regulations.",
      "translation": "所有承包商依法都有义务遵守这些安全规程。"
    },
    "form_confusables": [
      {
        "word": "comply",
        "zh": "遵从；服从"
      },
      {
        "word": "complex",
        "zh": "复杂的；复合体"
      },
      {
        "word": "complete",
        "zh": "完成；完整的"
      },
      {
        "word": "complement",
        "zh": "补充；互补物"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comply",
        "zh": "顺从规章"
      },
      {
        "word": "conform",
        "zh": "符合准则 (conform to)"
      },
      {
        "word": "observe",
        "zh": "遵守法律法规"
      },
      {
        "word": "abide",
        "zh": "信守规定 (abide by)"
      }
    ],
    "notes": "【搭配考点】comply with 强调服从规章或法律要求；【形近辨析】complex (复杂的)，complete (完成)，complement (补充/互补)；【近义辨析】conform with 强调一致，abide by 强调恪守。",
    "word": "comply",
    "translation": "遵从；顺从；服从",
    "phonetic": "/comply/"
  },
  "formulate": {
    "word": "formulate",
    "phonetic": "/'fɔ:mjuleit/",
    "translation": "构想; 制定",
    "cloze": {
      "sentence": "His ideas are always very carefully ______.",
      "translation": "该语境考查核心词义【构想】在权威语篇中的实际运用。",
      "original": "His ideas are always very carefully formulated."
    },
    "form_confusables": [
      "formula",
      "format",
      "formal",
      "formation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】formulate (构想)；【形近易混】formula, format, formal；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "formula": {
    "word": "formula",
    "phonetic": "/'fɔ:mjulə/",
    "translation": "公式; 方案",
    "cloze": {
      "sentence": "Do you know the ______ for finding the area of a circle?",
      "translation": "该语境考查核心词义【公式】在权威语篇中的实际运用。",
      "original": "Do you know the formula for finding the area of a circle?"
    },
    "form_confusables": [
      "formulate",
      "formal",
      "format",
      "form"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】formula (公式)；【形近易混】formulate, formal, format；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "program": {
    "word": "program",
    "phonetic": "/'prəuɡræm; -ɡrəm/",
    "translation": "程序; 计划",
    "cloze": {
      "sentence": "I lost half a morning's work when the ______ crashed.",
      "translation": "该语境考查核心词义【程序】在权威语篇中的实际运用。",
      "original": "I lost half a morning's work when the program crashed."
    },
    "form_confusables": [
      "progress",
      "perform",
      "promote",
      "reform"
    ],
    "semantic_confusables": [
      "procedure",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】program (程序)；【形近易混】progress, perform, promote；【近义搭配】procedure, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "perform": {
    "word": "perform",
    "phonetic": "/pə'fɔ:m/",
    "translation": "执行; 表演",
    "cloze": {
      "sentence": "The prince is no longer able to ______ his duties.",
      "translation": "该语境考查核心词义【执行】在权威语篇中的实际运用。",
      "original": "The prince is no longer able to perform his duties."
    },
    "form_confusables": [
      "reform",
      "form",
      "program",
      "inform"
    ],
    "semantic_confusables": [
      "effect",
      "execution",
      "change",
      "manage"
    ],
    "notes": "【正解考点】perform (执行)；【形近易混】reform, form, program；【近义搭配】effect, execution, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "drill": {
    "word": "drill",
    "phonetic": "/dril/",
    "translation": "训练; 钻孔",
    "cloze": {
      "sentence": "The school has a fire ______ once a week.",
      "translation": "该语境考查核心词义【训练】在权威语篇中的实际运用。",
      "original": "The school has a fire drill once a week."
    },
    "form_confusables": [
      "crucial",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】drill (训练)；【形近易混】crucial, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "inform": {
    "word": "inform",
    "phonetic": "/in'fɔ:m/",
    "translation": "通知; 告知",
    "cloze": {
      "sentence": "I regret to ______ you that you have been unsuccessful in your application.",
      "translation": "该语境考查核心词义【通知】在权威语篇中的实际运用。",
      "original": "I regret to inform you that you have been unsuccessful in your application."
    },
    "form_confusables": [
      "form",
      "conform",
      "uniform",
      "reform"
    ],
    "semantic_confusables": [
      "notify",
      "instruct",
      "change",
      "manage"
    ],
    "notes": "【正解考点】inform (通知)；【形近易混】form, conform, uniform；【近义搭配】notify, instruct, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "notify": {
    "word": "notify",
    "phonetic": "/'nəutifai/",
    "translation": "通知; 通告; 报告",
    "cloze": {
      "sentence": "If you see anything suspicious you should ______ the police immediately.",
      "translation": "该语境考查核心词义【通知】在权威语篇中的实际运用。",
      "original": "If you see anything suspicious you should notify the police immediately."
    },
    "form_confusables": [
      "satisfy",
      "nasty",
      "county",
      "motive"
    ],
    "semantic_confusables": [
      "inform",
      "instruct",
      "change",
      "manage"
    ],
    "notes": "【正解考点】notify (通知)；【形近易混】satisfy, nasty, county；【近义搭配】inform, instruct, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "noticeable": {
    "word": "noticeable",
    "phonetic": "/'nəutisəbl/",
    "translation": "显而易见的",
    "cloze": {
      "sentence": "These changes are more ______ in women than in men.",
      "translation": "该语境考查核心词义【显而易见的】在权威语篇中的实际运用。",
      "original": "These changes are more noticeable in women than in men."
    },
    "form_confusables": [
      "considerable",
      "uncomfortable",
      "acceptable",
      "comfortable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】noticeable (显而易见的)；【形近易混】considerable, uncomfortable, acceptable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coast": {
    "word": "coast",
    "phonetic": "/kəust/",
    "translation": "海岸; 沿海",
    "cloze": {
      "sentence": "The ______ stretched far into the distance.",
      "translation": "该语境考查核心词义【海岸】在权威语篇中的实际运用。",
      "original": "The coast stretched far into the distance."
    },
    "form_confusables": [
      "cost",
      "contrast",
      "toast",
      "roast"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】coast (海岸)；【形近易混】cost, contrast, toast；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "toast": {
    "word": "toast",
    "phonetic": "/'təust/",
    "translation": "敬酒; 烤面包",
    "cloze": {
      "sentence": "He raised his glass as if to make a ______.",
      "translation": "该语境考查核心词义【敬酒】在权威语篇中的实际运用。",
      "original": "He raised his glass as if to make a toast."
    },
    "form_confusables": [
      "coast",
      "roast",
      "vast",
      "cost"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】toast (敬酒)；【形近易混】coast, roast, vast；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "roast": {
    "word": "roast",
    "phonetic": "/rəust/",
    "translation": "烤; 烘烤",
    "cloze": {
      "sentence": "You should boil the potatoes for a little before you ______ them.",
      "translation": "该语境考查核心词义【烤】在权威语篇中的实际运用。",
      "original": "You should boil the potatoes for a little before you roast them."
    },
    "form_confusables": [
      "coast",
      "toast",
      "vast",
      "rate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】roast (烤)；【形近易混】coast, toast, vast；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "sail": {
    "word": "sail",
    "phonetic": "/seil/",
    "translation": "航行; 帆",
    "cloze": {
      "sentence": "I learned to ______ as a child.",
      "translation": "该语境考查核心词义【航行】在权威语篇中的实际运用。",
      "original": "I learned to sail as a child."
    },
    "form_confusables": [
      "stale",
      "scale",
      "satisfy",
      "static"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】sail (航行)；【形近易混】stale, scale, satisfy；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "shore": {
    "word": "shore",
    "phonetic": "/ʃɔ:/",
    "translation": "岸; 滨",
    "cloze": {
      "sentence": "A dying dolphin was found washed up on the ______.",
      "translation": "该语境考查核心词义【岸】在权威语篇中的实际运用。",
      "original": "A dying dolphin was found washed up on the shore."
    },
    "form_confusables": [
      "core",
      "shade",
      "shave",
      "soar"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】shore (岸)；【形近易混】core, shade, shave；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "island": {
    "word": "island",
    "phonetic": "/'ailənd/",
    "translation": "岛屿; 海岛",
    "cloze": {
      "sentence": "Fiji is a small South Pacific ______ nation.",
      "translation": "该语境考查核心词义【岛屿】在权威语篇中的实际运用。",
      "original": "Fiji is a small South Pacific island nation."
    },
    "form_confusables": [
      "inland",
      "issuance",
      "bind",
      "blind"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】island (岛屿)；【形近易混】inland, issuance, bind；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "inland": {
    "word": "inland",
    "phonetic": "/'inlənd; -lænd/",
    "translation": "内陆的; 内地的",
    "cloze": {
      "sentence": "We travelled further ______ the next day.",
      "translation": "该语境考查核心词义【内陆的】在真实例句中的精准搭配。",
      "original": "We travelled further inland the next day."
    },
    "form_confusables": [
      "island",
      "incline",
      "involved",
      "bind"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】inland (内陆的)；【形近易混】island, incline, involved；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "beach": {
    "word": "beach",
    "phonetic": "/bi:tʃ/",
    "translation": "海滩; 沙滩",
    "cloze": {
      "sentence": "He walked along the ______.",
      "translation": "该语境考查核心词义【海滩】在权威语篇中的实际运用。",
      "original": "He walked along the beach."
    },
    "form_confusables": [
      "bench",
      "bear",
      "coach",
      "behave"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】beach (海滩)；【形近易混】bench, bear, coach；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bench": {
    "word": "bench",
    "phonetic": "/bentʃ/",
    "translation": "长凳; 工作台",
    "cloze": {
      "sentence": "He was working at his ______.",
      "translation": "该语境考查核心词义【长凳】在权威语篇中的实际运用。",
      "original": "He was working at his bench."
    },
    "form_confusables": [
      "beach",
      "bend",
      "enrich",
      "beyond"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】bench (长凳)；【形近易混】beach, bend, enrich；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "harbor": {
    "word": "harbor",
    "phonetic": "/'hɑ:bə/",
    "translation": "港口; 庇护",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：港口)",
      "original": "Recent studies clearly show that we must harbor modern standards in our research."
    },
    "form_confusables": [
      "harm",
      "hazard",
      "character",
      "shore"
    ],
    "semantic_confusables": [
      "shelter",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】harbor (港口)；【形近易混】harm, hazard, character；【近义搭配】shelter, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "embrace": {
    "word": "embrace",
    "phonetic": "/im'breis/",
    "translation": "拥抱; 欣然接受",
    "cloze": {
      "sentence": "He drew her into his ______.",
      "translation": "该语境考查核心词义【拥抱】在权威语篇中的实际运用。",
      "original": "He drew her into his embrace."
    },
    "form_confusables": [
      "enhance",
      "morale",
      "balance",
      "commerce"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】embrace (拥抱)；【形近易混】enhance, morale, balance；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bay": {
    "word": "bay",
    "phonetic": "/bei/",
    "translation": "海湾; 港湾",
    "cloze": {
      "sentence": "I'm trying to keep my creditors at ______.",
      "translation": "该语境考查核心词义【海湾】在真实例句中的精准搭配。",
      "original": "I'm trying to keep my creditors at bay."
    },
    "form_confusables": [
      "base",
      "basic",
      "basis",
      "clay"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】bay (海湾)；【形近易混】base, basic, basis；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "shelter": {
    "word": "shelter",
    "phonetic": "/'ʃeltə/",
    "translation": "避难所; 庇护",
    "cloze": {
      "sentence": "She was standing in the ______ of the doorway.",
      "translation": "该语境考查核心词义【避难所】在权威语篇中的实际运用。",
      "original": "She was standing in the shelter of the doorway."
    },
    "form_confusables": [
      "cheer",
      "satellite",
      "chapter",
      "shipment"
    ],
    "semantic_confusables": [
      "harbor",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】shelter (避难所)；【形近易混】cheer, satellite, chapter；【近义搭配】harbor, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "shade": {
    "word": "shade",
    "phonetic": "/ʃeid/",
    "translation": "阴凉; 遮蔽",
    "cloze": {
      "sentence": "His face turned an even deeper ______ of red.",
      "translation": "该语境考查核心词义【阴凉】在权威语篇中的实际运用。",
      "original": "His face turned an even deeper shade of red."
    },
    "form_confusables": [
      "shave",
      "handle",
      "shore",
      "space"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】shade (阴凉)；【形近易混】shave, handle, shore；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "shave": {
    "word": "shave",
    "phonetic": "/ʃeiv/",
    "translation": "剃; 刮",
    "cloze": {
      "sentence": "He has completely ______ his head.",
      "translation": "该语境考查核心词义【剃】在权威语篇中的实际运用。",
      "original": "He has completely shaved his head."
    },
    "form_confusables": [
      "shade",
      "behave",
      "shore",
      "heaven"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】shave (剃)；【形近易混】shade, behave, shore；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "belt": {
    "word": "belt",
    "phonetic": "/belt/",
    "translation": "皮带; 地带",
    "cloze": {
      "sentence": "She was wearing a garter ______ and stockings.",
      "translation": "该语境考查核心词义【皮带】在权威语篇中的实际运用。",
      "original": "She was wearing a garter belt and stockings."
    },
    "form_confusables": [
      "bet",
      "bend",
      "bear",
      "lot"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】belt (皮带)；【形近易混】bet, bend, bear；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bond": {
    "word": "bond",
    "phonetic": "/bɔnd/",
    "translation": "纽带; 结合",
    "cloze": {
      "sentence": "She felt a ______ of affection for the other girls.",
      "translation": "该语境考查核心词义【纽带】在权威语篇中的实际运用。",
      "original": "She felt a bond of affection for the other girls."
    },
    "form_confusables": [
      "beyond",
      "bind",
      "bend",
      "blind"
    ],
    "semantic_confusables": [
      "combination",
      "combine",
      "change",
      "manage"
    ],
    "notes": "【正解考点】bond (纽带)；【形近易混】beyond, bind, bend；【近义搭配】combination, combine, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bind": {
    "word": "bind",
    "phonetic": "/baind/",
    "translation": "捆绑; 约束",
    "cloze": {
      "sentence": "A (and B) (together) Organizations such as schools and clubs ______ a community together.",
      "translation": "该语境考查核心词义【捆绑】在权威语篇中的实际运用。",
      "original": "A (and B) (together) Organizations such as schools and clubs bind a community together."
    },
    "form_confusables": [
      "blind",
      "bond",
      "bend",
      "blend"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】bind (捆绑)；【形近易混】blind, bond, bend；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "blind": {
    "word": "blind",
    "phonetic": "/blaind/",
    "translation": "盲目的; 瞎的",
    "cloze": {
      "sentence": "His own problems have made him completely ______ to the sufferings of others.",
      "translation": "该语境考查核心词义【盲目的】在权威语篇中的实际运用。",
      "original": "His own problems have made him completely blind to the sufferings of others."
    },
    "form_confusables": [
      "bind",
      "blend",
      "bond",
      "bend"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】blind (盲目的)；【形近易混】bind, blend, bond；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "deaf": {
    "word": "deaf",
    "phonetic": "/def/",
    "translation": "聋的; 不愿听的",
    "cloze": {
      "sentence": "It's no good shouting—he's stone ______.",
      "translation": "该语境考查核心词义【聋的】在权威语篇中的实际运用。",
      "original": "It's no good shouting—he's stone deaf."
    },
    "form_confusables": [
      "deal",
      "delay",
      "demand",
      "deed"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】deaf (聋的)；【形近易混】deal, delay, demand；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bend": {
    "word": "bend",
    "phonetic": "/bend/",
    "translation": "弯曲; 屈服",
    "cloze": {
      "sentence": "I had to ______ double to get under the table.",
      "translation": "该语境考查核心词义【弯曲】在权威语篇中的实际运用。",
      "original": "I had to bend double to get under the table."
    },
    "form_confusables": [
      "blend",
      "beyond",
      "bond",
      "bind"
    ],
    "semantic_confusables": [
      "buckle",
      "curve",
      "change",
      "manage"
    ],
    "notes": "【正解考点】bend (弯曲)；【形近易混】blend, beyond, bond；【近义搭配】buckle, curve, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "twist": {
    "word": "twist",
    "phonetic": "/twist/",
    "translation": "扭曲; 盘旋",
    "cloze": {
      "sentence": "Gently ______ off the green stalks.",
      "translation": "该语境考查核心词义【扭曲】在权威语篇中的实际运用。",
      "original": "Gently twist off the green stalks."
    },
    "form_confusables": [
      "toast",
      "tight",
      "latest",
      "chemist"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】twist (扭曲)；【形近易混】toast, tight, latest；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "blend": {
    "word": "blend",
    "phonetic": "/blend/",
    "translation": "混合; 融合",
    "cloze": {
      "sentence": "Add the fruit and cream and ______ well.",
      "translation": "该语境考查核心词义【混合】在权威语篇中的实际运用。",
      "original": "Add the fruit and cream and blend well."
    },
    "form_confusables": [
      "bend",
      "blind",
      "beyond",
      "bond"
    ],
    "semantic_confusables": [
      "mix",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】blend (混合)；【形近易混】bend, blind, beyond；【近义搭配】mix, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mix": {
    "word": "mix",
    "phonetic": "/miks/",
    "translation": "混合; 搅拌",
    "cloze": {
      "sentence": "These pills won't ______ well with alcohol.",
      "translation": "该语境考查核心词义【混合】在权威语篇中的实际运用。",
      "original": "These pills won't mix well with alcohol."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "blend",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】mix (混合)；【形近易混】obtain, maintain, attain；【近义搭配】blend, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stir": {
    "word": "stir",
    "phonetic": "/stə:/",
    "translation": "搅动; 激发",
    "cloze": {
      "sentence": "Chop an onion and ______ it into the sauce.",
      "translation": "该语境考查核心词义【搅动】在权威语篇中的实际运用。",
      "original": "Chop an onion and stir it into the sauce."
    },
    "form_confusables": [
      "stride",
      "static",
      "shelter",
      "similar"
    ],
    "semantic_confusables": [
      "motivate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】stir (搅动)；【形近易混】stride, static, shelter；【近义搭配】motivate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mountain": {
    "word": "mountain",
    "phonetic": "/'mauntin/",
    "translation": "山峰; 高山",
    "cloze": {
      "sentence": "Between the two towns was 50 miles of ______ country.",
      "translation": "该语境考查核心词义【山峰】在真实例句中的精准搭配。",
      "original": "Between the two towns was 50 miles of mountain country."
    },
    "form_confusables": [
      "fountain",
      "mount",
      "contain",
      "maintain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】mountain (山峰)；【形近易混】fountain, mount, contain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fountain": {
    "word": "fountain",
    "phonetic": "/'fauntin/",
    "translation": "喷泉; 源泉",
    "cloze": {
      "sentence": "Children were queuing at the drinking ______.",
      "translation": "该语境考查核心词义【喷泉】在权威语篇中的实际运用。",
      "original": "Children were queuing at the drinking fountain."
    },
    "form_confusables": [
      "mountain",
      "foundation",
      "contain",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】fountain (喷泉)；【形近易混】mountain, foundation, contain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "profound": {
    "word": "profound",
    "phonetic": "/prəu'faund/",
    "translation": "深奥的; 深刻的",
    "cloze": {
      "sentence": "Her book offers some ______ insights into the nature of suffering.",
      "translation": "该语境考查核心词义【深奥的】在权威语篇中的实际运用。",
      "original": "Her book offers some profound insights into the nature of suffering."
    },
    "form_confusables": [
      "proof",
      "profit",
      "promotion",
      "wound"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】profound (深奥的)；【形近易混】proof, profit, promotion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "foundation": {
    "word": "foundation",
    "phonetic": "/faun'deiʃən/",
    "translation": "基础; 地基",
    "cloze": {
      "sentence": "Concrete ______ have been laid.",
      "translation": "该语境考查核心词义【基础】在权威语篇中的实际运用。",
      "original": "Concrete foundations have been laid."
    },
    "form_confusables": [
      "fountain",
      "formation",
      "condition",
      "consolidation"
    ],
    "semantic_confusables": [
      "base",
      "basis",
      "change",
      "manage"
    ],
    "notes": "【正解考点】foundation (基础)；【形近易混】fountain, formation, condition；【近义搭配】base, basis, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "base": {
    "word": "base",
    "phonetic": "/beis/",
    "translation": "基地; 基础",
    "cloze": {
      "sentence": "He used the notes as a ______ for his lecture.",
      "translation": "该语境考查核心词义【基地】在权威语篇中的实际运用。",
      "original": "He used the notes as a base for his lecture."
    },
    "form_confusables": [
      "basic",
      "basis",
      "lease",
      "chase"
    ],
    "semantic_confusables": [
      "foundation",
      "basis",
      "change",
      "manage"
    ],
    "notes": "【正解考点】base (基地)；【形近易混】basic, basis, lease；【近义搭配】foundation, basis, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "basic": {
    "word": "basic",
    "phonetic": "/'beisik/",
    "translation": "基本的; 基础的",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：基本的)",
      "original": "Recent studies clearly show that we must basic modern standards in our research."
    },
    "form_confusables": [
      "basis",
      "base",
      "classic",
      "beach"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】basic (基本的)；【形近易混】basis, base, classic；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "basis": {
    "word": "basis",
    "phonetic": "/'beisis/",
    "translation": "基础; 根据",
    "cloze": {
      "sentence": "Staff are employed on a monthly ______.",
      "translation": "该语境考查核心词义【基础】在权威语篇中的实际运用。",
      "original": "Staff are employed on a monthly basis."
    },
    "form_confusables": [
      "basic",
      "base",
      "mass",
      "crisis"
    ],
    "semantic_confusables": [
      "foundation",
      "base",
      "change",
      "manage"
    ],
    "notes": "【正解考点】basis (基础)；【形近易混】basic, base, mass；【近义搭配】foundation, base, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mount": {
    "word": "mount",
    "phonetic": "/symbols/",
    "translation": "攀登; 增加",
    "cloze": {
      "sentence": "The death toll continues to ______.",
      "translation": "该语境考查核心词义【攀登】在权威语篇中的实际运用。",
      "original": "The death toll continues to mount."
    },
    "form_confusables": [
      "mountain",
      "amount",
      "count",
      "moon"
    ],
    "semantic_confusables": [
      "ascend",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】mount (攀登)；【形近易混】mountain, amount, count；【近义搭配】ascend, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "amount": {
    "word": "amount",
    "phonetic": "/ə'maunt/",
    "translation": "数量; 总额",
    "cloze": {
      "sentence": "The ______ of reclaimed glass used in industry has doubled in the last five years.",
      "translation": "该语境考查核心词义【数量】在权威语篇中的实际运用。",
      "original": "The amount of reclaimed glass used in industry has doubled in the last five years."
    },
    "form_confusables": [
      "mount",
      "count",
      "mountain",
      "amendment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】amount (数量)；【形近易混】mount, count, mountain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "soar": {
    "word": "soar",
    "phonetic": "/sɔ:/",
    "translation": "高飞; 暴涨",
    "cloze": {
      "sentence": "A buzzard ______ high overhead.",
      "translation": "该语境考查核心词义【高飞】在权威语篇中的实际运用。",
      "original": "A buzzard soared high overhead."
    },
    "form_confusables": [
      "shore",
      "similar",
      "collar",
      "scarce"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】soar (高飞)；【形近易混】shore, similar, collar；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ascend": {
    "word": "ascend",
    "phonetic": "/ə'send/",
    "translation": "攀登; 上升",
    "cloze": {
      "sentence": "The path started to ______ more steeply.",
      "translation": "该语境考查核心词义【攀登】在权威语篇中的实际运用。",
      "original": "The path started to ascend more steeply."
    },
    "form_confusables": [
      "descend",
      "amend",
      "bend",
      "fasten"
    ],
    "semantic_confusables": [
      "mount",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】ascend (攀登)；【形近易混】descend, amend, bend；【近义搭配】mount, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "descend": {
    "word": "descend",
    "phonetic": "/di'send/",
    "translation": "下降; 遗传",
    "cloze": {
      "sentence": "The plane began to ______.",
      "translation": "该语境考查核心词义【下降】在权威语篇中的实际运用。",
      "original": "The plane began to descend."
    },
    "form_confusables": [
      "ascend",
      "deed",
      "desire",
      "demand"
    ],
    "semantic_confusables": [
      "decline",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】descend (下降)；【形近易混】ascend, deed, desire；【近义搭配】decline, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "decline": {
    "word": "decline",
    "phonetic": "/di'klain/",
    "translation": "下降; 衰落",
    "cloze": {
      "sentence": "Most of the ______ occurred in the 1990s.",
      "translation": "该语境考查核心词义【下降】在权威语篇中的实际运用。",
      "original": "Most of the decline occurred in the 1990s."
    },
    "form_confusables": [
      "incline",
      "desire",
      "clone",
      "cling"
    ],
    "semantic_confusables": [
      "descend",
      "decrease",
      "drop",
      "fall"
    ],
    "notes": "【正解考点】decline (下降)；【形近易混】incline, desire, clone；【近义搭配】descend, decrease, drop。注意在语境中甄别固定搭配与语义内涵。"
  },
  "incline": {
    "word": "incline",
    "phonetic": "/in'klain/",
    "translation": "倾斜; 倾向于",
    "cloze": {
      "sentence": "Young people ______ towards individualistic behaviour.",
      "translation": "该语境考查核心词义【倾斜】在权威语篇中的实际运用。",
      "original": "Young people incline towards individualistic behaviour."
    },
    "form_confusables": [
      "inclusive",
      "decline",
      "clone",
      "inland"
    ],
    "semantic_confusables": [
      "lean",
      "tend",
      "tilt",
      "slope"
    ],
    "notes": "【正解考点】incline (倾斜)；【形近易混】inclusive, decline, clone；【近义搭配】lean, tend, tilt。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ancestor": {
    "word": "ancestor",
    "phonetic": "/'ænsestə/",
    "translation": "祖先; 先辈",
    "cloze": {
      "sentence": "The builder of the house was a direct ______ of the present owner.",
      "translation": "该语境考查核心词义【祖先】在权威语篇中的实际运用。",
      "original": "The builder of the house was a direct ancestor of the present owner."
    },
    "form_confusables": [
      "ancient",
      "customer",
      "successor",
      "chest"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】ancestor (祖先)；【形近易混】ancient, customer, successor；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ancient": {
    "word": "ancient",
    "phonetic": "/'einʃənt/",
    "translation": "古代的; 古老的",
    "cloze": {
      "sentence": "The man looked positively ______.",
      "translation": "该语境考查核心词义【古代的】在权威语篇中的实际运用。",
      "original": "The man looked positively ancient."
    },
    "form_confusables": [
      "client",
      "ancestor",
      "acquaint",
      "amendment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】ancient (古代的)；【形近易混】client, ancestor, acquaint；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consensus": {
    "word": "consensus",
    "phonetic": "/kən'sensəs/",
    "translation": "共识; 一致",
    "cloze": {
      "sentence": "A general ______ on the problem is beginning to emerge.",
      "translation": "该语境考查核心词义【共识】在权威语篇中的实际运用。",
      "original": "A general consensus on the problem is beginning to emerge."
    },
    "form_confusables": [
      "conscious",
      "consequence",
      "conscience",
      "consistent"
    ],
    "semantic_confusables": [
      "conform",
      "coincide",
      "change",
      "manage"
    ],
    "notes": "【正解考点】consensus (共识)；【形近易混】conscious, consequence, conscience；【近义搭配】conform, coincide, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "proceed": {
    "word": "proceed",
    "phonetic": "/prəu'si:d/",
    "translation": "继续进行; 前进",
    "cloze": {
      "sentence": "I will instruct my lawyer to ______ with the preparation of draft contracts.",
      "translation": "该语境考查核心词义【继续进行】在权威语篇中的实际运用。",
      "original": "I will instruct my lawyer to proceed with the preparation of draft contracts."
    },
    "form_confusables": [
      "procedure",
      "process",
      "provided",
      "procession"
    ],
    "semantic_confusables": [
      "advance",
      "progress",
      "change",
      "manage"
    ],
    "notes": "【正解考点】proceed (继续进行)；【形近易混】procedure, process, provided；【近义搭配】advance, progress, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "procession": {
    "word": "procession",
    "phonetic": "/prəu'seʃən/",
    "translation": "队伍; 行列",
    "cloze": {
      "sentence": "The children marched in ______ behind the band.",
      "translation": "该语境考查核心词义【队伍】在权威语篇中的实际运用。",
      "original": "The children marched in procession behind the band."
    },
    "form_confusables": [
      "process",
      "professional",
      "promotion",
      "progress"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】procession (队伍)；【形近易混】process, professional, promotion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "troop": {
    "word": "troop",
    "phonetic": "/tru:p/",
    "translation": "部队; 军队",
    "cloze": {
      "sentence": "As the players ______ off the field, someone threw a bottle from the crowd.",
      "translation": "该语境考查核心词义【部队】在权威语篇中的实际运用。",
      "original": "As the players trooped off the field, someone threw a bottle from the crowd."
    },
    "form_confusables": [
      "crop",
      "proof",
      "promote",
      "control"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】troop (部队)；【形近易混】crop, proof, promote；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "process": {
    "word": "process",
    "phonetic": "/'prəuses; 'prɔ-/",
    "translation": "过程; 处理",
    "cloze": {
      "sentence": "He was warned that they would ______ him.",
      "translation": "他被警告说，他们将向他发出传票。",
      "original": "He was warned that they would process him."
    },
    "form_confusables": [
      "procession",
      "progress",
      "proceed",
      "procedure"
    ],
    "semantic_confusables": [
      "cope",
      "course",
      "handle",
      "change"
    ],
    "notes": "【正解考点】process (过程)；【形近易混】procession, progress, proceed；【近义搭配】cope, course, handle。注意在语境中甄别固定搭配与语义内涵。"
  },
  "procedure": {
    "word": "procedure",
    "phonetic": "/prə'si:dʒə/",
    "translation": "程序; 手续",
    "cloze": {
      "sentence": "A straightforward complaints ______ must be established from the outset.",
      "translation": "该语境考查核心词义【程序】在权威语篇中的实际运用。",
      "original": "A straightforward complaints procedure must be established from the outset."
    },
    "form_confusables": [
      "proceed",
      "process",
      "precedent",
      "procession"
    ],
    "semantic_confusables": [
      "program",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】procedure (程序)；【形近易混】proceed, process, precedent；【近义搭配】program, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "access": {
    "word": "access",
    "phonetic": "/'ækses; 'æksəs; æk'ses/",
    "translation": "进入; 使用权",
    "cloze": {
      "sentence": "He was finally granted ______ to the medical records.",
      "translation": "该语境考查核心词义【进入】在权威语篇中的实际运用。",
      "original": "He was finally granted access to the medical records."
    },
    "form_confusables": [
      "success",
      "assess",
      "excess",
      "accurate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】access (进入)；【形近易混】success, assess, excess；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "assess": {
    "word": "assess",
    "phonetic": "/ə'ses/",
    "translation": "评估; 估算",
    "cloze": {
      "sentence": "It has not yet been possible to ______ the impact of computerization in our workplace.",
      "translation": "该语境考查核心词义【评估】在权威语篇中的实际运用。",
      "original": "It has not yet been possible to assess the impact of computerization in our workplace."
    },
    "form_confusables": [
      "assure",
      "access",
      "success",
      "mass"
    ],
    "semantic_confusables": [
      "compute",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】assess (评估)；【形近易混】assure, access, success；【近义搭配】compute, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "exceed": {
    "word": "exceed",
    "phonetic": "/ik'si:d/",
    "translation": "超过; 超出限额",
    "cloze": {
      "sentence": "Summer temperatures rarely ______ 27°C.",
      "translation": "该语境考查核心词义【超过】在权威语篇中的实际运用。",
      "original": "Summer temperatures rarely exceed 27°C."
    },
    "form_confusables": [
      "excel",
      "excess",
      "exception",
      "proceed"
    ],
    "semantic_confusables": [
      "surpass",
      "transcend",
      "outdo",
      "excel"
    ],
    "notes": "【正解考点】exceed (超过)；【形近易混】excel, excess, exception；【近义搭配】surpass, transcend, outdo。注意在语境中甄别固定搭配与语义内涵。"
  },
  "beyond": {
    "word": "beyond",
    "phonetic": "/bi'jɔnd/",
    "translation": "超越; 在更远处",
    "cloze": {
      "sentence": "The road continues ______ the village up into the hills.",
      "translation": "该语境考查核心词义【超越】在真实例句中的精准搭配。",
      "original": "The road continues beyond the village up into the hills."
    },
    "form_confusables": [
      "bend",
      "bond",
      "blend",
      "bind"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】beyond (超越)；【形近易混】bend, bond, blend；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "surplus": {
    "word": "surplus",
    "phonetic": "/'sə:plʌs; -pləs/",
    "translation": "过剩; 盈余",
    "cloze": {
      "sentence": "Japan runs a large current-account ______.",
      "translation": "该语境考查核心词义【过剩】在权威语篇中的实际运用。",
      "original": "Japan runs a large current-account surplus."
    },
    "form_confusables": [
      "supply",
      "curious",
      "crush",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】surplus (过剩)；【形近易混】supply, curious, crush；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "extra": {
    "word": "extra",
    "phonetic": "/'ekstrə/",
    "translation": "额外的; 附加的",
    "cloze": {
      "sentence": "Take ______ care on the roads this evening.",
      "translation": "该语境考查核心词义【额外的】在真实例句中的精准搭配。",
      "original": "Take extra care on the roads this evening."
    },
    "form_confusables": [
      "era",
      "exact",
      "export",
      "expire"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】extra (额外的)；【形近易混】era, exact, export；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "excess": {
    "word": "excess",
    "phonetic": "/ik'ses; 'ek-; 'ekses; ik's-/",
    "translation": "过量; 无度",
    "cloze": {
      "sentence": "His statements cannot be simply dismissed as rhetorical ______.",
      "translation": "该语境考查核心词义【过量】在权威语篇中的实际运用。",
      "original": "His statements cannot be simply dismissed as rhetorical excess."
    },
    "form_confusables": [
      "excel",
      "exceed",
      "access",
      "exception"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】excess (过量)；【形近易混】excel, exceed, access；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "success": {
    "word": "success",
    "phonetic": "/sək'ses/",
    "translation": "成功; 胜利",
    "cloze": {
      "sentence": "He attributes his ______ to having a stable family life.",
      "translation": "该语境考查核心词义【成功】在权威语篇中的实际运用。",
      "original": "He attributes his success to having a stable family life."
    },
    "form_confusables": [
      "successor",
      "succeed",
      "access",
      "excess"
    ],
    "semantic_confusables": [
      "succeed",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】success (成功)；【形近易混】successor, succeed, access；【近义搭配】succeed, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "succeed": {
    "word": "succeed",
    "phonetic": "/sək'si:d/",
    "translation": "成功; 继承",
    "cloze": {
      "sentence": "He was appointed to ______ Sir Georg Solti as head of the Chicago Symphony Orchestra.",
      "translation": "该语境考查核心词义【成功】在权威语篇中的实际运用。",
      "original": "He was appointed to succeed Sir Georg Solti as head of the Chicago Symphony Orchestra."
    },
    "form_confusables": [
      "success",
      "successor",
      "exceed",
      "concerned"
    ],
    "semantic_confusables": [
      "success",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】succeed (成功)；【形近易混】success, successor, exceed；【近义搭配】success, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "successor": {
    "word": "successor",
    "phonetic": "/sək'sesə/",
    "translation": "继任者; 继承人",
    "cloze": {
      "sentence": "He doesn't have an obvious ______ as party leader.",
      "translation": "该语境考查核心词义【继任者】在权威语篇中的实际运用。",
      "original": "He doesn't have an obvious successor as party leader."
    },
    "form_confusables": [
      "success",
      "succeed",
      "superior",
      "access"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】successor (继任者)；【形近易混】success, succeed, superior；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "excel": {
    "word": "excel",
    "phonetic": "/ik'sel/",
    "translation": "胜过; 擅长",
    "cloze": {
      "sentence": "As a child he ______ at music and art.",
      "translation": "该语境考查核心词义【胜过】在真实例句中的精准搭配。",
      "original": "As a child he excelled at music and art."
    },
    "form_confusables": [
      "exceed",
      "excess",
      "exact",
      "expire"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】excel (胜过)；【形近易混】exceed, excess, exact；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stride": {
    "word": "stride",
    "phonetic": "/straid/",
    "translation": "大步行走; 进展",
    "cloze": {
      "sentence": "He matched his ______ to her slower pace.",
      "translation": "该语境考查核心词义【大步行走】在真实例句中的精准搭配。",
      "original": "He matched his stride to her slower pace."
    },
    "form_confusables": [
      "stir",
      "provide",
      "stake",
      "stale"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】stride (大步行走)；【形近易混】stir, provide, stake；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "wander": {
    "word": "wander",
    "phonetic": "/'wɔndə/",
    "translation": "漫游; 徘徊",
    "cloze": {
      "sentence": "His attention was beginning to ______.",
      "translation": "该语境考查核心词义【漫游】在权威语篇中的实际运用。",
      "original": "His attention was beginning to wander."
    },
    "form_confusables": [
      "commander",
      "powder",
      "danger",
      "handle"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】wander (漫游)；【形近易混】commander, powder, danger；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crawl": {
    "word": "crawl",
    "phonetic": "/krɔ:l/",
    "translation": "爬行; 缓慢移动",
    "cloze": {
      "sentence": "As night fell, we managed to ______ back to our lines.",
      "translation": "该语境考查核心词义【爬行】在权威语篇中的实际运用。",
      "original": "As night fell, we managed to crawl back to our lines."
    },
    "form_confusables": [
      "crucial",
      "crystal",
      "crew",
      "crack"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crawl (爬行)；【形近易混】crucial, crystal, crew；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "climb": {
    "word": "climb",
    "phonetic": "/klaim/",
    "translation": "攀爬; 攀升",
    "cloze": {
      "sentence": "The path began to ______ quite steeply.",
      "translation": "该语境考查核心词义【攀爬】在权威语篇中的实际运用。",
      "original": "The path began to climb quite steeply."
    },
    "form_confusables": [
      "claim",
      "climate",
      "clip",
      "club"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】climb (攀爬)；【形近易混】claim, climate, clip；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "progress": {
    "word": "progress",
    "phonetic": "/'prəuɡres; 'prɔ-; prəu'ɡres/",
    "translation": "进步; 前进",
    "cloze": {
      "sentence": "He's making good ______ in maths.",
      "translation": "该语境考查核心词义【进步】在权威语篇中的实际运用。",
      "original": "He's making good progress in maths."
    },
    "form_confusables": [
      "process",
      "program",
      "congress",
      "procession"
    ],
    "semantic_confusables": [
      "advance",
      "proceed",
      "change",
      "manage"
    ],
    "notes": "【正解考点】progress (进步)；【形近易混】process, program, congress；【近义搭配】advance, proceed, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "congress": {
    "word": "congress",
    "phonetic": "/'kɔŋɡres; kən'ɡres/",
    "translation": "国会; 代表大会",
    "cloze": {
      "sentence": "It was a year before the association met again in ______.",
      "translation": "该语境考查核心词义【国会】在真实例句中的精准搭配。",
      "original": "It was a year before the association met again in congress."
    },
    "form_confusables": [
      "confess",
      "progress",
      "consensus",
      "consist"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】congress (国会)；【形近易混】confess, progress, consensus；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "aggressive": {
    "word": "aggressive",
    "phonetic": "/ə'ɡresiv/",
    "translation": "进取的; 好斗的",
    "cloze": {
      "sentence": "Dogs of this breed can be ______ with other dogs.",
      "translation": "该语境考查核心词义【进取的】在权威语篇中的实际运用。",
      "original": "Dogs of this breed can be aggressive with other dogs."
    },
    "form_confusables": [
      "massive",
      "apprehensive",
      "resolve",
      "creative"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】aggressive (进取的)；【形近易混】massive, apprehensive, resolve；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "move": {
    "word": "move",
    "phonetic": "/mu:v/",
    "translation": "移动; 行动",
    "cloze": {
      "sentence": "Can you ______ down the steps?",
      "translation": "该语境考查核心词义【移动】在权威语篇中的实际运用。",
      "original": "Can you move down the steps?"
    },
    "form_confusables": [
      "motive",
      "remove",
      "improve",
      "mobile"
    ],
    "semantic_confusables": [
      "action",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】move (移动)；【形近易混】motive, remove, improve；【近义搭配】action, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mobile": {
    "word": "mobile",
    "phonetic": "/'məubail; -bil; məu'bi:l/",
    "translation": "可移动的; 机动的",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：可移动的)",
      "original": "The committee agreed that this strategy will mobile significant long-term growth."
    },
    "form_confusables": [
      "morale",
      "motive",
      "move",
      "gamble"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】mobile (可移动的)；【形近易混】morale, motive, move；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "static": {
    "word": "static",
    "phonetic": "/'stætik/",
    "translation": "静态的; 静止的",
    "cloze": {
      "sentence": "The population remained more or less ______.",
      "translation": "该语境考查核心词义【静态的】在权威语篇中的实际运用。",
      "original": "The population remained more or less static."
    },
    "form_confusables": [
      "state",
      "stir",
      "stake",
      "stale"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】static (静态的)；【形近易混】state, stir, stake；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "motive": {
    "word": "motive",
    "phonetic": "/'məutiv/",
    "translation": "动机; 目的",
    "cloze": {
      "sentence": "I'd say he had a very strong ______ for wanting her dead.",
      "translation": "该语境考查核心词义【动机】在权威语篇中的实际运用。",
      "original": "I'd say he had a very strong motive for wanting her dead."
    },
    "form_confusables": [
      "motivate",
      "move",
      "mobile",
      "active"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】motive (动机)；【形近易混】motivate, move, mobile；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "motivate": {
    "word": "motivate",
    "phonetic": "/'məutiveit/",
    "translation": "激励; 促使; 激发",
    "cloze": {
      "sentence": "He was ______ to join the union because he objected to the new contract.",
      "translation": "该语境考查核心词义【激励】在权威语篇中的实际运用。",
      "original": "He was motivated to join the union because he objected to the new contract."
    },
    "form_confusables": [
      "motive",
      "state",
      "mobile",
      "morale"
    ],
    "semantic_confusables": [
      "stir",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】motivate (激励)；【形近易混】motive, state, mobile；【近义搭配】stir, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "remove": {
    "word": "remove",
    "phonetic": "/ri'mu:v/",
    "translation": "移除; 消除",
    "cloze": {
      "sentence": "The proposed law would ______ at a stroke the long-cherished right to trial by jury.",
      "translation": "该语境考查核心词义【移除】在权威语篇中的实际运用。",
      "original": "The proposed law would remove at a stroke the long-cherished right to trial by jury."
    },
    "form_confusables": [
      "remote",
      "revolve",
      "resolve",
      "move"
    ],
    "semantic_confusables": [
      "resolve",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】remove (移除)；【形近易混】remote, revolve, resolve；【近义搭配】resolve, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "emotion": {
    "word": "emotion",
    "phonetic": "/i'məuʃən/",
    "translation": "情感; 情绪",
    "cloze": {
      "sentence": "Fear is a normal human ______.",
      "translation": "该语境考查核心词义【情感】在权威语篇中的实际运用。",
      "original": "Fear is a normal human emotion."
    },
    "form_confusables": [
      "extortion",
      "promotion",
      "portion",
      "moon"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】emotion (情感)；【形近易混】extortion, promotion, portion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "rational": {
    "word": "rational",
    "phonetic": "/'ræʃənəl/",
    "translation": "理性的; 合理的",
    "cloze": {
      "sentence": "Humans are essentially ______ beings.",
      "translation": "该语境考查核心词义【理性的】在权威语篇中的实际运用。",
      "original": "Humans are essentially rational beings."
    },
    "form_confusables": [
      "ratio",
      "fraction",
      "creation",
      "practical"
    ],
    "semantic_confusables": [
      "reasonable",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】rational (理性的)；【形近易混】ratio, fraction, creation；【近义搭配】reasonable, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ratio": {
    "word": "ratio",
    "phonetic": "/'reiʃiəu; -ʃəu/",
    "translation": "比例; 比率",
    "cloze": {
      "sentence": "The stock's price-earnings ______ has dropped to 24.",
      "translation": "该语境考查核心词义【比例】在权威语篇中的实际运用。",
      "original": "The stock's price-earnings ratio has dropped to 24."
    },
    "form_confusables": [
      "rational",
      "rate",
      "fraction",
      "creation"
    ],
    "semantic_confusables": [
      "rate",
      "percentage",
      "proportion",
      "scale"
    ],
    "notes": "【正解考点】ratio (比例)；【形近易混】rational, rate, fraction；【近义搭配】rate, percentage, proportion。注意在语境中甄别固定搭配与语义内涵。"
  },
  "rate": {
    "word": "rate",
    "phonetic": "/reit/",
    "translation": "比率; 速度; 评价",
    "cloze": {
      "sentence": "Ask about the special group ______ for entrance to the museum.",
      "translation": "该语境考查核心词义【比率】在权威语篇中的实际运用。",
      "original": "Ask about the special group rates for entrance to the museum."
    },
    "form_confusables": [
      "create",
      "ratio",
      "state",
      "remote"
    ],
    "semantic_confusables": [
      "ratio",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】rate (比率)；【形近易混】create, ratio, state；【近义搭配】ratio, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "percentage": {
    "word": "percentage",
    "phonetic": "/pə'sentidʒ/",
    "translation": "百分比; 比例",
    "cloze": {
      "sentence": "Insurance contributions are paid at a fixed ______ rate on all earnings.",
      "translation": "该语境考查核心词义【百分比】在权威语篇中的实际运用。",
      "original": "Insurance contributions are paid at a fixed percentage rate on all earnings."
    },
    "form_confusables": [
      "persistent",
      "precedent",
      "enlarge",
      "proceed"
    ],
    "semantic_confusables": [
      "ratio",
      "proportion",
      "scale",
      "change"
    ],
    "notes": "【正解考点】percentage (百分比)；【形近易混】persistent, precedent, enlarge；【近义搭配】ratio, proportion, scale。注意在语境中甄别固定搭配与语义内涵。"
  },
  "remote": {
    "word": "remote",
    "phonetic": "/ri'məut/",
    "translation": "遥远的; 偏僻的",
    "cloze": {
      "sentence": "Jane felt ______ from what was going on around her.",
      "translation": "该语境考查核心词义【遥远的】在权威语篇中的实际运用。",
      "original": "Jane felt remote from what was going on around her."
    },
    "form_confusables": [
      "remove",
      "promote",
      "reunite",
      "revolve"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】remote (遥远的)；【形近易混】remove, promote, reunite；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "promote": {
    "word": "promote",
    "phonetic": "/prəu'məut/",
    "translation": "促进; 提升",
    "cloze": {
      "sentence": "Basketball stars have helped ______ the sport overseas.",
      "translation": "该语境考查核心词义【促进】在权威语篇中的实际运用。",
      "original": "Basketball stars have helped promote the sport overseas."
    },
    "form_confusables": [
      "promotion",
      "remote",
      "proof",
      "profit"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】promote (促进)；【形近易混】promotion, remote, proof；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "action": {
    "word": "action",
    "phonetic": "/'ækʃən/",
    "translation": "行动; 动作",
    "cloze": {
      "sentence": "Disciplinary ______ will be taken against students who cheat.",
      "translation": "该语境考查核心词义【行动】在权威语篇中的实际运用。",
      "original": "Disciplinary action will be taken against students who cheat."
    },
    "form_confusables": [
      "fraction",
      "active",
      "creation",
      "reduction"
    ],
    "semantic_confusables": [
      "move",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】action (行动)；【形近易混】fraction, active, creation；【近义搭配】move, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "deed": {
    "word": "deed",
    "phonetic": "/di:d/",
    "translation": "行为; 事迹",
    "cloze": {
      "sentence": "She felt that she had done her good ______ for the day.",
      "translation": "该语境考查核心词义【行为】在权威语篇中的实际运用。",
      "original": "She felt that she had done her good deed for the day."
    },
    "form_confusables": [
      "descend",
      "demand",
      "desire",
      "exceed"
    ],
    "semantic_confusables": [
      "conduct",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】deed (行为)；【形近易混】descend, demand, desire；【近义搭配】conduct, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "behave": {
    "word": "behave",
    "phonetic": "/bi'heiv/",
    "translation": "表现; 守规矩",
    "cloze": {
      "sentence": "Children, if they are used to being treated with respect, will ______ accordingly.",
      "translation": "该语境考查核心词义【表现】在权威语篇中的实际运用。",
      "original": "Children, if they are used to being treated with respect, will behave accordingly."
    },
    "form_confusables": [
      "shave",
      "bear",
      "heaven",
      "beach"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】behave (表现)；【形近易混】shave, bear, heaven；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "active": {
    "word": "active",
    "phonetic": "/'æktiv/",
    "translation": "活跃的; 积极的",
    "cloze": {
      "sentence": "By the age of 18, 65% of teenagers report being sexually ______.",
      "translation": "该语境考查核心词义【活跃的】在权威语篇中的实际运用。",
      "original": "By the age of 18, 65% of teenagers report being sexually active."
    },
    "form_confusables": [
      "achieve",
      "action",
      "creative",
      "motive"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】active (活跃的)；【形近易混】achieve, action, creative；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "react": {
    "word": "react",
    "phonetic": "/ri'ækt; ri:-/",
    "translation": "反应; 反抗",
    "cloze": {
      "sentence": "Many young people ______ against traditional values.",
      "translation": "该语境考查核心词义【反应】在权威语篇中的实际运用。",
      "original": "Many young people react against traditional values."
    },
    "form_confusables": [
      "exact",
      "recently",
      "create",
      "correct"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】react (反应)；【形近易混】exact, recently, create；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "exact": {
    "word": "exact",
    "phonetic": "/iɡ'zækt/",
    "translation": "精确的; 准确的",
    "cloze": {
      "sentence": "He started to phone me at the ______ moment I started to phone him.",
      "translation": "该语境考查核心词义【精确的】在权威语篇中的实际运用。",
      "original": "He started to phone me at the exact moment I started to phone him."
    },
    "form_confusables": [
      "react",
      "extra",
      "excel",
      "export"
    ],
    "semantic_confusables": [
      "accurate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】exact (精确的)；【形近易混】react, extra, excel；【近义搭配】accurate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "actual": {
    "word": "actual",
    "phonetic": "/'æktʃuəl/",
    "translation": "实际的; 真实的",
    "cloze": {
      "sentence": "The ______ cost was much higher than we had expected.",
      "translation": "该语境考查核心词义【实际的】在权威语篇中的实际运用。",
      "original": "The actual cost was much higher than we had expected."
    },
    "form_confusables": [
      "annual",
      "continual",
      "casual",
      "practical"
    ],
    "semantic_confusables": [
      "practical",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】actual (实际的)；【形近易混】annual, continual, casual；【近义搭配】practical, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "practical": {
    "word": "practical",
    "phonetic": "/'præktikəl/",
    "translation": "实用的; 实际的",
    "cloze": {
      "sentence": "I'll do something ______ now and answer some mail.",
      "translation": "该语境考查核心词义【实用的】在权威语篇中的实际运用。",
      "original": "I'll do something practical now and answer some mail."
    },
    "form_confusables": [
      "critical",
      "rational",
      "actual",
      "crucial"
    ],
    "semantic_confusables": [
      "actual",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】practical (实用的)；【形近易混】critical, rational, actual；【近义搭配】actual, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "virtual": {
    "word": "virtual",
    "phonetic": "/'və:tʃuəl/",
    "translation": "虚拟的; 实质上的",
    "cloze": {
      "sentence": "The technology has enabled development of an online ______ library.",
      "translation": "该语境考查核心词义【虚拟的】在权威语篇中的实际运用。",
      "original": "The technology has enabled development of an online virtual library."
    },
    "form_confusables": [
      "actual",
      "rental",
      "crystal",
      "critical"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】virtual (虚拟的)；【形近易混】actual, rental, crystal；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fragment": {
    "word": "fragment",
    "phonetic": "/'fræɡmənt/",
    "translation": "碎片; 片段",
    "cloze": {
      "sentence": "I overheard a ______ of their conversation.",
      "translation": "该语境考查核心词义【碎片】在权威语篇中的实际运用。",
      "original": "I overheard a fragment of their conversation."
    },
    "form_confusables": [
      "frame",
      "engagement",
      "payment",
      "framework"
    ],
    "semantic_confusables": [
      "chip",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】fragment (碎片)；【形近易混】frame, engagement, payment；【近义搭配】chip, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "somewhat": {
    "word": "somewhat",
    "phonetic": "/'sʌmhwɔt; -hwət/",
    "translation": "稍微; 有点",
    "cloze": {
      "sentence": "Her version of what happened was ______ different.",
      "translation": "该语境考查核心词义【稍微】在权威语篇中的实际运用。",
      "original": "Her version of what happened was somewhat different."
    },
    "form_confusables": [
      "format",
      "shipment",
      "comment",
      "compact"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】somewhat (稍微)；【形近易混】format, shipment, comment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fraction": {
    "word": "fraction",
    "phonetic": "/'frækʃən/",
    "translation": "小部分; 分数",
    "cloze": {
      "sentence": "A mere ______ of available wind energy is currently utilized.",
      "translation": "该语境考查核心词义【小部分】在权威语篇中的实际运用。",
      "original": "A mere fraction of available wind energy is currently utilized."
    },
    "form_confusables": [
      "action",
      "formation",
      "creation",
      "reduction"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】fraction (小部分)；【形近易混】action, formation, creation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "portion": {
    "word": "portion",
    "phonetic": "/'pɔ:ʃən; 'pəu-/",
    "translation": "一部分; 一份",
    "cloze": {
      "sentence": "He asked for a double ______ of chips.",
      "translation": "该语境考查核心词义【一部分】在权威语篇中的实际运用。",
      "original": "He asked for a double portion of chips."
    },
    "form_confusables": [
      "proportion",
      "extortion",
      "promotion",
      "formation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】portion (一部分)；【形近易混】proportion, extortion, promotion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "proportion": {
    "word": "proportion",
    "phonetic": "/prəu'pɔ:ʃən/",
    "translation": "比例; 占比",
    "cloze": {
      "sentence": "The chart shows government spending expressed as a ______ of national income.",
      "translation": "该语境考查核心词义【比例】在权威语篇中的实际运用。",
      "original": "The chart shows government spending expressed as a proportion of national income."
    },
    "form_confusables": [
      "promotion",
      "portion",
      "corporation",
      "procession"
    ],
    "semantic_confusables": [
      "ratio",
      "percentage",
      "scale",
      "change"
    ],
    "notes": "【正解考点】proportion (比例)；【形近易混】promotion, portion, corporation；【近义搭配】ratio, percentage, scale。注意在语境中甄别固定搭配与语义内涵。"
  },
  "skeleton": {
    "word": "skeleton",
    "phonetic": "/'skelitən/",
    "translation": "骨架; 框架",
    "cloze": {
      "sentence": "The human ______ consists of 206 bones.",
      "translation": "该语境考查核心词义【骨架】在真实例句中的精准搭配。",
      "original": "The human skeleton consists of 206 bones."
    },
    "form_confusables": [
      "exception",
      "execution",
      "stipulation",
      "collection"
    ],
    "semantic_confusables": [
      "frame",
      "framework",
      "change",
      "manage"
    ],
    "notes": "【正解考点】skeleton (骨架)；【形近易混】exception, execution, stipulation；【近义搭配】frame, framework, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "frame": {
    "word": "frame",
    "phonetic": "/freim/",
    "translation": "框架; 骨架",
    "cloze": {
      "sentence": "She has quite a small ______.",
      "translation": "该语境考查核心词义【框架】在权威语篇中的实际运用。",
      "original": "She has quite a small frame."
    },
    "form_confusables": [
      "flame",
      "fragment",
      "form",
      "firm"
    ],
    "semantic_confusables": [
      "skeleton",
      "framework",
      "change",
      "manage"
    ],
    "notes": "【正解考点】frame (框架)；【形近易混】flame, fragment, form；【近义搭配】skeleton, framework, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "framework": {
    "word": "framework",
    "phonetic": "/'freimwə:k/",
    "translation": "架构; 框架",
    "cloze": {
      "sentence": "Carbon dating provides us with a basic chronological ______.",
      "translation": "该语境考查核心词义【架构】在权威语篇中的实际运用。",
      "original": "Carbon dating provides us with a basic chronological framework."
    },
    "form_confusables": [
      "fragment",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "skeleton",
      "frame",
      "change",
      "manage"
    ],
    "notes": "【正解考点】framework (架构)；【形近易混】fragment, obtain, maintain；【近义搭配】skeleton, frame, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "flame": {
    "word": "flame",
    "phonetic": "/fleim/",
    "translation": "火焰; 光芒",
    "cloze": {
      "sentence": "His childhood interest in the game had ignited a ______ of passion for football.",
      "translation": "该语境考查核心词义【火焰】在权威语篇中的实际运用。",
      "original": "His childhood interest in the game had ignited a flame of passion for football."
    },
    "form_confusables": [
      "frame",
      "flash",
      "flesh",
      "fragment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】flame (火焰)；【形近易混】frame, flash, flesh；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "burn": {
    "word": "burn",
    "phonetic": "/bə:n/",
    "translation": "燃烧; 烧灼",
    "cloze": {
      "sentence": "Fresh leaves will ______ slowly with billows of smoke.",
      "translation": "该语境考查核心词义【燃烧】在权威语篇中的实际运用。",
      "original": "Fresh leaves will burn slowly with billows of smoke."
    },
    "form_confusables": [
      "bond",
      "bind",
      "bend",
      "bear"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】burn (燃烧)；【形近易混】bond, bind, bend；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "flash": {
    "word": "flash",
    "phonetic": "/flæʃ/",
    "translation": "闪光; 闪现",
    "cloze": {
      "sentence": "Start crossing when the green WALK sign starts to ______.",
      "translation": "该语境考查核心词义【闪光】在权威语篇中的实际运用。",
      "original": "Start crossing when the green WALK sign starts to flash."
    },
    "form_confusables": [
      "flesh",
      "clash",
      "flourish",
      "flame"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】flash (闪光)；【形近易混】flesh, clash, flourish；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "flesh": {
    "word": "flesh",
    "phonetic": "/fleʃ/",
    "translation": "肉体; 果肉",
    "cloze": {
      "sentence": "African hunting dogs will tear at the ______ of their victim until it is weak.",
      "translation": "该语境考查核心词义【肉体】在权威语篇中的实际运用。",
      "original": "African hunting dogs will tear at the flesh of their victim until it is weak."
    },
    "form_confusables": [
      "flash",
      "fresh",
      "flourish",
      "refresh"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】flesh (肉体)；【形近易混】flash, fresh, flourish；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fresh": {
    "word": "fresh",
    "phonetic": "/freʃ/",
    "translation": "新鲜的; 清新的",
    "cloze": {
      "sentence": "Mushrooms don't stay ______ for long.",
      "translation": "该语境考查核心词义【新鲜的】在权威语篇中的实际运用。",
      "original": "Mushrooms don't stay fresh for long."
    },
    "form_confusables": [
      "refresh",
      "flesh",
      "freight",
      "flourish"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】fresh (新鲜的)；【形近易混】refresh, flesh, freight；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "refresh": {
    "word": "refresh",
    "phonetic": "/ri'freʃ; ri:-/",
    "translation": "使清新; 刷新",
    "cloze": {
      "sentence": "He went into the kitchen to ______ their drinks.",
      "translation": "该语境考查核心词义【使清新】在真实例句中的精准搭配。",
      "original": "He went into the kitchen to refresh their drinks."
    },
    "form_confusables": [
      "fresh",
      "reform",
      "flesh",
      "reverse"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】refresh (使清新)；【形近易混】fresh, reform, flesh；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "flourish": {
    "word": "flourish",
    "phonetic": "/'flauriʃ/",
    "translation": "繁荣; 茂盛",
    "cloze": {
      "sentence": "The company has continued to ______ over the years.",
      "translation": "该语境考查核心词义【繁荣】在权威语篇中的实际运用。",
      "original": "The company has continued to flourish over the years."
    },
    "form_confusables": [
      "flour",
      "flash",
      "flesh",
      "fresh"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】flourish (繁荣)；【形近易混】flour, flash, flesh；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "flour": {
    "word": "flour",
    "phonetic": "/'flauə/",
    "translation": "面粉; 粉末",
    "cloze": {
      "sentence": "Blend the ______ with a little milk to make a smooth paste.",
      "translation": "该语境考查核心词义【面粉】在权威语篇中的实际运用。",
      "original": "Blend the flour with a little milk to make a smooth paste."
    },
    "form_confusables": [
      "flourish",
      "form",
      "color",
      "format"
    ],
    "semantic_confusables": [
      "powder",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】flour (面粉)；【形近易混】flourish, form, color；【近义搭配】powder, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "powder": {
    "word": "powder",
    "phonetic": "/'paudə/",
    "translation": "粉末; 细粉",
    "cloze": {
      "sentence": "Before the photo dries, the image is dusted with a special ______.",
      "translation": "该语境考查核心词义【粉末】在权威语篇中的实际运用。",
      "original": "Before the photo dries, the image is dusted with a special powder."
    },
    "form_confusables": [
      "order",
      "wander",
      "modern",
      "owe"
    ],
    "semantic_confusables": [
      "flour",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】powder (粉末)；【形近易混】order, wander, modern；【近义搭配】flour, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cure": {
    "word": "cure",
    "phonetic": "/kjuə/",
    "translation": "治愈; 治疗",
    "cloze": {
      "sentence": "Charities alone can't ______ basic social injustices.",
      "translation": "该语境考查核心词义【治愈】在权威语篇中的实际运用。",
      "original": "Charities alone can't cure basic social injustices."
    },
    "form_confusables": [
      "curve",
      "culture",
      "secure",
      "current"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cure (治愈)；【形近易混】curve, culture, secure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "curious": {
    "word": "curious",
    "phonetic": "/'kjuəriəs/",
    "translation": "好奇的; 奇特的",
    "cloze": {
      "sentence": "Her secretive manner had made me ______.",
      "translation": "该语境考查核心词义【好奇的】在权威语篇中的实际运用。",
      "original": "Her secretive manner had made me curious."
    },
    "form_confusables": [
      "curiosity",
      "conscious",
      "cross",
      "curriculum"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】curious (好奇的)；【形近易混】curiosity, conscious, cross；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "accurate": {
    "word": "accurate",
    "phonetic": "/'ækjurət/",
    "translation": "精确的; 准确的",
    "cloze": {
      "sentence": "Although this book is historically ______, it is not a history book.",
      "translation": "该语境考查核心词义【精确的】在权威语篇中的实际运用。",
      "original": "Although this book is historically accurate, it is not a history book."
    },
    "form_confusables": [
      "create",
      "circulate",
      "concentrate",
      "acquaint"
    ],
    "semantic_confusables": [
      "exact",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】accurate (精确的)；【形近易混】create, circulate, concentrate；【近义搭配】exact, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "secure": {
    "word": "secure",
    "phonetic": "/si'kjuə/",
    "translation": "安全的; 牢固的",
    "cloze": {
      "sentence": "It's important to keep your documents ______.",
      "translation": "该语境考查核心词义【安全的】在权威语篇中的实际运用。",
      "original": "It's important to keep your documents secure."
    },
    "form_confusables": [
      "cure",
      "sculpture",
      "curve",
      "assure"
    ],
    "semantic_confusables": [
      "tight",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】secure (安全的)；【形近易混】cure, sculpture, curve；【近义搭配】tight, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "rescue": {
    "word": "rescue",
    "phonetic": "/'reskju:/",
    "translation": "营救; 救援",
    "cloze": {
      "sentence": "He died while trying to ______ his children from the blaze.",
      "translation": "该语境考查核心词义【营救】在权威语篇中的实际运用。",
      "original": "He died while trying to rescue his children from the blaze."
    },
    "form_confusables": [
      "resolve",
      "reunite",
      "reverse",
      "release"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】rescue (营救)；【形近易混】resolve, reunite, reverse；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "injure": {
    "word": "injure",
    "phonetic": "/'indʒə/",
    "translation": "伤害; 损害",
    "cloze": {
      "sentence": "This could seriously ______ the company's reputation.",
      "translation": "该语境考查核心词义【伤害】在权威语篇中的实际运用。",
      "original": "This could seriously injure the company's reputation."
    },
    "form_confusables": [
      "ensure",
      "cure",
      "interest",
      "inclusive"
    ],
    "semantic_confusables": [
      "harm",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】injure (伤害)；【形近易混】ensure, cure, interest；【近义搭配】harm, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "wound": {
    "word": "wound",
    "phonetic": "/waund/",
    "translation": "创伤; 伤口",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：创伤)",
      "original": "It is essential to wound this critical process before making any final decisions."
    },
    "form_confusables": [
      "profound",
      "bond",
      "undo",
      "cloud"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】wound (创伤)；【形近易混】profound, bond, undo；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "harm": {
    "word": "harm",
    "phonetic": "/symbols/",
    "translation": "危害; 伤害",
    "cloze": {
      "sentence": "I don't think he'll come to any ______ if his mother is with him.",
      "translation": "该语境考查核心词义【危害】在权威语篇中的实际运用。",
      "original": "I don't think he'll come to any harm if his mother is with him."
    },
    "form_confusables": [
      "harbor",
      "hazard",
      "chart",
      "form"
    ],
    "semantic_confusables": [
      "injure",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】harm (危害)；【形近易混】harbor, hazard, chart；【近义搭配】injure, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "hazard": {
    "word": "hazard",
    "phonetic": "/'hæzəd/",
    "translation": "危险; 隐患",
    "cloze": {
      "sentence": "Go in September if you want to avoid the ______ of extreme heat.",
      "translation": "该语境考查核心词义【危险】在权威语篇中的实际运用。",
      "original": "Go in September if you want to avoid the hazard of extreme heat."
    },
    "form_confusables": [
      "harm",
      "awkward",
      "harbor",
      "handle"
    ],
    "semantic_confusables": [
      "danger",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】hazard (危险)；【形近易混】harm, awkward, harbor；【近义搭配】danger, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "danger": {
    "word": "danger",
    "phonetic": "/'deindʒə/",
    "translation": "危险; 危机",
    "cloze": {
      "sentence": "Despite the high levels of radiation, people are now moving back into the ______ zone.",
      "translation": "该语境考查核心词义【危险】在权威语篇中的实际运用。",
      "original": "Despite the high levels of radiation, people are now moving back into the danger zone."
    },
    "form_confusables": [
      "wander",
      "maneuver",
      "defiance",
      "advance"
    ],
    "semantic_confusables": [
      "hazard",
      "crisis",
      "change",
      "manage"
    ],
    "notes": "【正解考点】danger (危险)；【形近易混】wander, maneuver, defiance；【近义搭配】hazard, crisis, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stake": {
    "word": "stake",
    "phonetic": "/steik/",
    "translation": "赌注; 利害关系",
    "cloze": {
      "sentence": "He has a personal ______ in the outcome of the war.",
      "translation": "该语境考查核心词义【赌注】在权威语篇中的实际运用。",
      "original": "He has a personal stake in the outcome of the war."
    },
    "form_confusables": [
      "stale",
      "state",
      "static",
      "stock"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】stake (赌注)；【形近易混】stale, state, static；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "risk": {
    "word": "risk",
    "phonetic": "/risk/",
    "translation": "风险; 险别",
    "cloze": {
      "sentence": "Children are at greater ______ for these diseases.",
      "translation": "该语境考查核心词义【风险】在权威语篇中的实际运用。",
      "original": "Children are at greater risk for these diseases."
    },
    "form_confusables": [
      "crisis",
      "curious",
      "cherish",
      "seek"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】risk (风险)；【形近易混】crisis, curious, cherish；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "gamble": {
    "word": "gamble",
    "phonetic": "/'ɡæmbl/",
    "translation": "赌博; 投机",
    "cloze": {
      "sentence": "She became depressed and began to ______ heavily.",
      "translation": "该语境考查核心词义【赌博】在权威语篇中的实际运用。",
      "original": "She became depressed and began to gamble heavily."
    },
    "form_confusables": [
      "ample",
      "enable",
      "mobile",
      "workable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】gamble (赌博)；【形近易混】ample, enable, mobile；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bet": {
    "word": "bet",
    "phonetic": "/symbols/",
    "translation": "打赌; 确信",
    "cloze": {
      "sentence": "I wouldn't ______ on them winning the next election.",
      "translation": "该语境考查核心词义【打赌】在真实例句中的精准搭配。",
      "original": "I wouldn't bet on them winning the next election."
    },
    "form_confusables": [
      "belt",
      "bend",
      "bear",
      "beach"
    ],
    "semantic_confusables": [
      "assure",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】bet (打赌)；【形近易混】belt, bend, bear；【近义搭配】assure, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "current": {
    "word": "current",
    "phonetic": "/'kʌrənt/",
    "translation": "当前的; 水流; 电流",
    "cloze": {
      "sentence": "Our ______ financial situation is not good.",
      "translation": "该语境考查核心词义【当前的】在权威语篇中的实际运用。",
      "original": "Our current financial situation is not good."
    },
    "form_confusables": [
      "currently",
      "currency",
      "cure",
      "curve"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】current (当前的)；【形近易混】currently, currency, cure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "currency": {
    "word": "currency",
    "phonetic": "/'kərənsi/",
    "translation": "货币; 流通",
    "cloze": {
      "sentence": "Argentina's ______ was pegged to the dollar.",
      "translation": "该语境考查核心词义【货币】在权威语篇中的实际运用。",
      "original": "Argentina's currency was pegged to the dollar."
    },
    "form_confusables": [
      "currently",
      "current",
      "curve",
      "correct"
    ],
    "semantic_confusables": [
      "circulate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】currency (货币)；【形近易混】currently, current, curve；【近义搭配】circulate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "rental": {
    "word": "rental",
    "phonetic": "/'rentəl/",
    "translation": "租金; 租赁",
    "cloze": {
      "sentence": "The local ______ market is booming.",
      "translation": "该语境考查核心词义【租金】在权威语篇中的实际运用。",
      "original": "The local rental market is booming."
    },
    "form_confusables": [
      "recently",
      "retaliate",
      "reunite",
      "crystal"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】rental (租金)；【形近易混】recently, retaliate, reunite；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "lease": {
    "word": "lease",
    "phonetic": "/li:s/",
    "translation": "租约; 租用",
    "cloze": {
      "sentence": "He took a ______ of the premises.",
      "translation": "该语境考查核心词义【租约】在权威语篇中的实际运用。",
      "original": "He took a lease of the premises."
    },
    "form_confusables": [
      "release",
      "clause",
      "leverage",
      "base"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】lease (租约)；【形近易混】release, clause, leverage；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "release": {
    "word": "release",
    "phonetic": "/ri'li:s/",
    "translation": "释放; 发布",
    "cloze": {
      "sentence": "He's planning to ______ a solo album.",
      "translation": "该语境考查核心词义【释放】在权威语篇中的实际运用。",
      "original": "He's planning to release a solo album."
    },
    "form_confusables": [
      "lease",
      "reverse",
      "reasonable",
      "revolve"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】release (释放)；【形近易混】lease, reverse, reasonable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "recently": {
    "word": "recently",
    "phonetic": "/'ri:səntli/",
    "translation": "最近; 近期",
    "cloze": {
      "sentence": "I haven't seen them ______.",
      "translation": "该语境考查核心词义【最近】在权威语篇中的实际运用。",
      "original": "I haven't seen them recently."
    },
    "form_confusables": [
      "currently",
      "rental",
      "precedent",
      "recommend"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】recently (最近)；【形近易混】currently, rental, precedent；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "modern": {
    "word": "modern",
    "phonetic": "/'mɔdən/",
    "translation": "现代的; 新式的",
    "cloze": {
      "sentence": "It is the most ______, well-equipped hospital in the country.",
      "translation": "该语境考查核心词义【现代的】在权威语篇中的实际运用。",
      "original": "It is the most modern, well-equipped hospital in the country."
    },
    "form_confusables": [
      "order",
      "moon",
      "move",
      "concern"
    ],
    "semantic_confusables": [
      "up-to-date",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】modern (现代的)；【形近易混】order, moon, move；【近义搭配】up-to-date, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "era": {
    "word": "era",
    "phonetic": "/span><span style='display:block;'><span style='font-style:normal;font-weight:normal;'><span style='font-style:italic;color:rgb(098,008,031);'>BrE</",
    "translation": "时代; 纪元",
    "cloze": {
      "sentence": "The country has entered an ______ of high unemployment.",
      "translation": "该语境考查核心词义【时代】在权威语篇中的实际运用。",
      "original": "The country has entered an era of high unemployment."
    },
    "form_confusables": [
      "extra",
      "exact",
      "deaf",
      "rate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】era (时代)；【形近易混】extra, exact, deaf；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "up-to-date": {
    "word": "up-to-date",
    "phonetic": "/'ʌptə'deit/",
    "translation": "最新的; 现代的",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：最新的)",
      "original": "The committee agreed that this strategy will up-to-date significant long-term growth."
    },
    "form_confusables": [
      "outdated",
      "corporate",
      "duplicate",
      "obtain"
    ],
    "semantic_confusables": [
      "modern",
      "latest",
      "change",
      "manage"
    ],
    "notes": "【正解考点】up-to-date (最新的)；【形近易混】outdated, corporate, duplicate；【近义搭配】modern, latest, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "outdated": {
    "word": "outdated",
    "phonetic": "/span>dated</",
    "translation": "过时的; 陈旧的",
    "cloze": {
      "sentence": "The college was struggling with ______ equipment and facilities.",
      "translation": "该语境考查核心词义【过时的】在权威语篇中的实际运用。",
      "original": "The college was struggling with outdated equipment and facilities."
    },
    "form_confusables": [
      "motivate",
      "state",
      "complicated",
      "compounded"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】outdated (过时的)；【形近易混】motivate, state, complicated；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stale": {
    "word": "stale",
    "phonetic": "/steil/",
    "translation": "不新鲜的; 陈腐的",
    "cloze": {
      "sentence": "The atmosphere was ______ with cigarette smoke.",
      "translation": "该语境考查核心词义【不新鲜的】在权威语篇中的实际运用。",
      "original": "The atmosphere was stale with cigarette smoke."
    },
    "form_confusables": [
      "stake",
      "state",
      "scale",
      "sail"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】stale (不新鲜的)；【形近易混】stake, state, scale；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fashion": {
    "word": "fashion",
    "phonetic": "/'fæʃən/",
    "translation": "时尚; 方式",
    "cloze": {
      "sentence": "Address me in a proper ______.",
      "translation": "该语境考查核心词义【时尚】在权威语篇中的实际运用。",
      "original": "Address me in a proper fashion."
    },
    "form_confusables": [
      "fraction",
      "fasten",
      "formation",
      "flash"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】fashion (时尚)；【形近易混】fraction, fasten, formation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contemporary": {
    "word": "contemporary",
    "phonetic": "/kən'tempərəri/",
    "translation": "当代的; 同时代的",
    "cloze": {
      "sentence": "She used only strictly ______ documents to research the book.",
      "translation": "该语境考查核心词义【当代的】在权威语篇中的实际运用。",
      "original": "She used only strictly contemporary documents to research the book."
    },
    "form_confusables": [
      "temporary",
      "controversy",
      "container",
      "controversial"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】contemporary (当代的)；【形近易混】temporary, controversy, container；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "temple": {
    "word": "temple",
    "phonetic": "/'templ/",
    "translation": "寺庙; 殿堂",
    "cloze": {
      "sentence": "These deities prevent evil spirits from entering the ______ precincts.",
      "translation": "该语境考查核心词义【寺庙】在权威语篇中的实际运用。",
      "original": "These deities prevent evil spirits from entering the temple precincts."
    },
    "form_confusables": [
      "ample",
      "temporary",
      "complex",
      "item"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】temple (寺庙)；【形近易混】ample, temporary, complex；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "temporary": {
    "word": "temporary",
    "phonetic": "/'tempərəri/",
    "translation": "暂时的; 临时的",
    "cloze": {
      "sentence": "I'm afraid using volunteers can only be a ______ solution to the problem.",
      "translation": "该语境考查核心词义【暂时的】在真实例句中的精准搭配。",
      "original": "I'm afraid using volunteers can only be a temporary solution to the problem."
    },
    "form_confusables": [
      "contemporary",
      "temple",
      "contrary",
      "empathy"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】temporary (暂时的)；【形近易混】contemporary, temple, contrary；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "abundant": {
    "word": "abundant",
    "phonetic": "/ə'bʌndənt/",
    "translation": "丰富的; 充裕的",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：丰富的)",
      "original": "It is essential to abundant this critical process before making any final decisions."
    },
    "form_confusables": [
      "acquaint",
      "adapt",
      "amendment",
      "amount"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】abundant (丰富的)；【形近易混】acquaint, adapt, amendment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ample": {
    "word": "ample",
    "phonetic": "/'æmpl/",
    "translation": "充足的; 宽敞的",
    "cloze": {
      "sentence": "There was ______ time to get to the airport.",
      "translation": "该语境考查核心词义【充足的】在真实例句中的精准搭配。",
      "original": "There was ample time to get to the airport."
    },
    "form_confusables": [
      "temple",
      "gamble",
      "amend",
      "complex"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】ample (充足的)；【形近易混】temple, gamble, amend；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mass": {
    "word": "mass",
    "phonetic": "/span><span style='display:block;'><span style='font-style:normal;font-weight:normal;'><span style='font-style:italic;color:rgb(098,008,031);'>BrE</",
    "translation": "大量; 群众",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：大量)",
      "original": "The committee agreed that this strategy will mass significant long-term growth."
    },
    "form_confusables": [
      "massive",
      "massage",
      "basis",
      "access"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】mass (大量)；【形近易混】massive, massage, basis；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "massive": {
    "word": "massive",
    "phonetic": "/'mæsiv/",
    "translation": "巨大的; 庞大的",
    "cloze": {
      "sentence": "Keith shrugged his ______ shoulders.",
      "translation": "该语境考查核心词义【巨大的】在权威语篇中的实际运用。",
      "original": "Keith shrugged his massive shoulders."
    },
    "form_confusables": [
      "massage",
      "mass",
      "aggressive",
      "motive"
    ],
    "semantic_confusables": [
      "vast",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】massive (巨大的)；【形近易混】massage, mass, aggressive；【近义搭配】vast, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "massage": {
    "word": "massage",
    "phonetic": "/'mæsɑ:ʒ; mə's-/",
    "translation": "按摩; 揉捏",
    "cloze": {
      "sentence": "The physiotherapist gave me a ______ to ease the pain.",
      "translation": "该语境考查核心词义【按摩】在权威语篇中的实际运用。",
      "original": "The physiotherapist gave me a massage to ease the pain."
    },
    "form_confusables": [
      "massive",
      "mass",
      "assure",
      "assess"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】massage (按摩)；【形近易混】massive, mass, assure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "vast": {
    "word": "vast",
    "phonetic": "/vɑ:st; væst/",
    "translation": "广阔的; 巨大的",
    "cloze": {
      "sentence": "In the ______ majority of cases this should not be a problem.",
      "translation": "该语境考查核心词义【广阔的】在权威语篇中的实际运用。",
      "original": "In the vast majority of cases this should not be a problem."
    },
    "form_confusables": [
      "vacant",
      "coast",
      "toast",
      "roast"
    ],
    "semantic_confusables": [
      "massive",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】vast (广阔的)；【形近易混】vacant, coast, toast；【近义搭配】massive, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "scope": {
    "word": "scope",
    "phonetic": "/skəup/",
    "translation": "范围; 视野",
    "cloze": {
      "sentence": "The geographical ______ of product markets has widened since the war.",
      "translation": "该语境考查核心词义【范围】在权威语篇中的实际运用。",
      "original": "The geographical scope of product markets has widened since the war."
    },
    "form_confusables": [
      "cope",
      "couple",
      "scale",
      "compel"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】scope (范围)；【形近易混】cope, couple, scale；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "scale": {
    "word": "scale",
    "phonetic": "/skeil/",
    "translation": "规模; 刻度; 比例",
    "cloze": {
      "sentence": "After ten years, she had worked her way to the top of the pay ______.",
      "translation": "该语境考查核心词义【规模】在权威语篇中的实际运用。",
      "original": "After ten years, she had worked her way to the top of the pay scale."
    },
    "form_confusables": [
      "stale",
      "scarce",
      "scope",
      "sail"
    ],
    "semantic_confusables": [
      "ratio",
      "percentage",
      "proportion",
      "change"
    ],
    "notes": "【正解考点】scale (规模)；【形近易混】stale, scarce, scope；【近义搭配】ratio, percentage, proportion。注意在语境中甄别固定搭配与语义内涵。"
  },
  "sculpture": {
    "word": "sculpture",
    "phonetic": "/'skʌlptʃə/",
    "translation": "雕塑; 雕刻",
    "cloze": {
      "sentence": "Tombs remain the most important monumental ______ of this period.",
      "translation": "该语境考查核心词义【雕塑】在权威语篇中的实际运用。",
      "original": "Tombs remain the most important monumental sculpture of this period."
    },
    "form_confusables": [
      "culture",
      "secure",
      "creature",
      "culprit"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】sculpture (雕塑)；【形近易混】culture, secure, creature；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "campaign": {
    "word": "campaign",
    "phonetic": "/kæm'pein/",
    "translation": "活动; 战役",
    "cloze": {
      "sentence": "A ______ of intimidation was waged against people trying to vote.",
      "translation": "该语境考查核心词义【活动】在权威语篇中的实际运用。",
      "original": "A campaign of intimidation was waged against people trying to vote."
    },
    "form_confusables": [
      "champion",
      "complain",
      "companion",
      "complaint"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】campaign (活动)；【形近易混】champion, complain, companion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "champion": {
    "word": "champion",
    "phonetic": "/'tʃæmpiən/",
    "translation": "冠军; 捍卫者",
    "cloze": {
      "sentence": "The reigning ______ will defend her title tonight.",
      "translation": "该语境考查核心词义【冠军】在权威语篇中的实际运用。",
      "original": "The reigning champion will defend her title tonight."
    },
    "form_confusables": [
      "campaign",
      "companion",
      "comparison",
      "competition"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】champion (冠军)；【形近易混】campaign, companion, comparison；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chance": {
    "word": "chance",
    "phonetic": "/tʃɑ:ns; tʃæns/",
    "translation": "机会; 偶然",
    "cloze": {
      "sentence": "After a poor start, they are now in with a ______ of winning the league.",
      "translation": "该语境考查核心词义【机会】在权威语篇中的实际运用。",
      "original": "After a poor start, they are now in with a chance of winning the league."
    },
    "form_confusables": [
      "channel",
      "chase",
      "enhance",
      "character"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chance (机会)；【形近易混】channel, chase, enhance；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "candidate": {
    "word": "candidate",
    "phonetic": "/'kændideit; -dət/",
    "translation": "候选人; 应试者",
    "cloze": {
      "sentence": "She decided to stand as a ______ in the local elections.",
      "translation": "该语境考查核心词义【候选人】在权威语篇中的实际运用。",
      "original": "She decided to stand as a candidate in the local elections."
    },
    "form_confusables": [
      "indicate",
      "climate",
      "communicate",
      "coincide"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】candidate (候选人)；【形近易混】indicate, climate, communicate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "channel": {
    "word": "channel",
    "phonetic": "/'tʃænəl/",
    "translation": "通道; 频道",
    "cloze": {
      "sentence": "Last year, the company launched its own TV ______.",
      "translation": "该语境考查核心词义【通道】在权威语篇中的实际运用。",
      "original": "Last year, the company launched its own TV channel."
    },
    "form_confusables": [
      "chance",
      "chase",
      "chapter",
      "champion"
    ],
    "semantic_confusables": [
      "corridor",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】channel (通道)；【形近易混】chance, chase, chapter；【近义搭配】corridor, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chapter": {
    "word": "chapter",
    "phonetic": "/'tʃæptə/",
    "translation": "章节; 篇章",
    "cloze": {
      "sentence": "Her return to Kansas ended a particularly unhappy ______ in her life.",
      "translation": "该语境考查核心词义【章节】在权威语篇中的实际运用。",
      "original": "Her return to Kansas ended a particularly unhappy chapter in her life."
    },
    "form_confusables": [
      "character",
      "chart",
      "chase",
      "cheer"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chapter (章节)；【形近易混】character, chart, chase；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "character": {
    "word": "character",
    "phonetic": "/'kærəktə/",
    "translation": "性格; 角色; 汉字",
    "cloze": {
      "sentence": "Applicants had to obtain ______ references before being considered for the work.",
      "translation": "该语境考查核心词义【性格】在权威语篇中的实际运用。",
      "original": "Applicants had to obtain character references before being considered for the work."
    },
    "form_confusables": [
      "characterize",
      "chapter",
      "chance",
      "scarce"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】character (性格)；【形近易混】characterize, chapter, chance；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "characteristic": {
    "word": "characteristic",
    "phonetic": "/,kærəktə'ristik/",
    "translation": "特征; 特色",
    "cloze": {
      "sentence": "With ______ modesty she insisted on sharing the credit with the whole team.",
      "translation": "该语境考查核心词义【特征】在权威语篇中的实际运用。",
      "original": "With characteristic modesty she insisted on sharing the credit with the whole team."
    },
    "form_confusables": [
      "characterize",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】characteristic (特征)；【形近易混】characterize, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "characterize": {
    "word": "characterize",
    "phonetic": "/'kærəktəraiz/",
    "translation": "以...为特征",
    "cloze": {
      "sentence": "How would you ______ the mood of the 1990s?",
      "translation": "该语境考查核心词义【以...为特征】在真实例句中的精准搭配。",
      "original": "How would you characterize the mood of the 1990s?"
    },
    "form_confusables": [
      "character",
      "characteristic",
      "criticize",
      "collaborate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】characterize (以...为特征)；【形近易混】character, characteristic, criticize；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chart": {
    "word": "chart",
    "phonetic": "/tʃɑ:t/",
    "translation": "图表; 航图",
    "cloze": {
      "sentence": "The islands were not marked on their ______.",
      "translation": "该语境考查核心词义【图表】在权威语篇中的实际运用。",
      "original": "The islands were not marked on their chart."
    },
    "form_confusables": [
      "cheat",
      "chapter",
      "chase",
      "chest"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chart (图表)；【形近易混】cheat, chapter, chase；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chase": {
    "word": "chase",
    "phonetic": "/tʃeis/",
    "translation": "追赶; 追逐",
    "cloze": {
      "sentence": "We lost him in the narrow streets and had to give up the ______.",
      "translation": "该语境考查核心词义【追赶】在权威语篇中的实际运用。",
      "original": "We lost him in the narrow streets and had to give up the chase."
    },
    "form_confusables": [
      "chance",
      "cheese",
      "choose",
      "clause"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chase (追赶)；【形近易混】chance, cheese, choose；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cheat": {
    "word": "cheat",
    "phonetic": "/tʃi:t/",
    "translation": "欺骗; 作弊",
    "cloze": {
      "sentence": "She is accused of attempting to ______ the taxman.",
      "translation": "该语境考查核心词义【欺骗】在权威语篇中的实际运用。",
      "original": "She is accused of attempting to cheat the taxman."
    },
    "form_confusables": [
      "chest",
      "chart",
      "chemist",
      "chef"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cheat (欺骗)；【形近易混】chest, chart, chemist；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "check": {
    "word": "check",
    "phonetic": "/tʃek/",
    "translation": "检查; 支票",
    "cloze": {
      "sentence": "Always ______ that the electricity is switched off before you start.",
      "translation": "该语境考查核心词义【检查】在权威语篇中的实际运用。",
      "original": "Always check that the electricity is switched off before you start."
    },
    "form_confusables": [
      "cheek",
      "chef",
      "chemical",
      "cheat"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】check (检查)；【形近易混】cheek, chef, chemical；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cheek": {
    "word": "cheek",
    "phonetic": "/tʃi:k/",
    "translation": "面颊; 脸蛋",
    "cloze": {
      "sentence": "He rested his ______ on her shoulder.",
      "translation": "该语境考查核心词义【面颊】在权威语篇中的实际运用。",
      "original": "He rested his cheek on her shoulder."
    },
    "form_confusables": [
      "cheer",
      "check",
      "cheese",
      "chef"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cheek (面颊)；【形近易混】cheer, check, cheese；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cheer": {
    "word": "cheer",
    "phonetic": "/tʃiə/",
    "translation": "欢呼; 振奋",
    "cloze": {
      "sentence": "She got a loud ______ when she finished speaking.",
      "translation": "该语境考查核心词义【欢呼】在权威语篇中的实际运用。",
      "original": "She got a loud cheer when she finished speaking."
    },
    "form_confusables": [
      "cheek",
      "cheese",
      "clever",
      "chapter"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cheer (欢呼)；【形近易混】cheek, cheese, clever；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cheese": {
    "word": "cheese",
    "phonetic": "/tʃi:z/",
    "translation": "奶酪; 芝士",
    "cloze": {
      "sentence": "Cut the ______ into cubes.",
      "translation": "该语境考查核心词义【奶酪】在权威语篇中的实际运用。",
      "original": "Cut the cheese into cubes."
    },
    "form_confusables": [
      "cheek",
      "cheer",
      "chase",
      "chest"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cheese (奶酪)；【形近易混】cheek, cheer, chase；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chef": {
    "word": "chef",
    "phonetic": "/ʃef/",
    "translation": "主厨; 厨师",
    "cloze": {
      "sentence": "He took a job as a sous ______ in a London hotel.",
      "translation": "该语境考查核心词义【主厨】在权威语篇中的实际运用。",
      "original": "He took a job as a sous chef in a London hotel."
    },
    "form_confusables": [
      "cheat",
      "check",
      "cheek",
      "cheer"
    ],
    "semantic_confusables": [
      "cook",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】chef (主厨)；【形近易混】cheat, check, cheek；【近义搭配】cook, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chemical": {
    "word": "chemical",
    "phonetic": "/'kemikəl/",
    "translation": "化学的; 化学制品",
    "cloze": {
      "sentence": "This ______ is often used to make cleaning products.",
      "translation": "该语境考查核心词义【化学的】在权威语篇中的实际运用。",
      "original": "This chemical is often used to make cleaning products."
    },
    "form_confusables": [
      "chemist",
      "chemistry",
      "critical",
      "cheat"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chemical (化学的)；【形近易混】chemist, chemistry, critical；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chemist": {
    "word": "chemist",
    "phonetic": "/'kemist/",
    "translation": "化学家; 药剂师",
    "cloze": {
      "sentence": "Take this prescription to the ______'s.",
      "translation": "该语境考查核心词义【化学家】在真实例句中的精准搭配。",
      "original": "Take this prescription to the chemist's."
    },
    "form_confusables": [
      "chemistry",
      "chest",
      "chemical",
      "cherish"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chemist (化学家)；【形近易混】chemistry, chest, chemical；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chemistry": {
    "word": "chemistry",
    "phonetic": "/'kemistri/",
    "translation": "化学; 相互吸引",
    "cloze": {
      "sentence": "The personal ______ between the two stars is obvious.",
      "translation": "该语境考查核心词义【化学】在权威语篇中的实际运用。",
      "original": "The personal chemistry between the two stars is obvious."
    },
    "form_confusables": [
      "chemist",
      "chemical",
      "cherish",
      "cheese"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chemistry (化学)；【形近易混】chemist, chemical, cherish；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cherish": {
    "word": "cherish",
    "phonetic": "/'tʃeriʃ/",
    "translation": "珍爱; 珍惜",
    "cloze": {
      "sentence": "He ______ the hope that one day they will meet again.",
      "translation": "该语境考查核心词义【珍爱】在真实例句中的精准搭配。",
      "original": "He cherishes the hope that one day they will meet again."
    },
    "form_confusables": [
      "chemist",
      "cheer",
      "chest",
      "crash"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cherish (珍爱)；【形近易混】chemist, cheer, chest；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chest": {
    "word": "chest",
    "phonetic": "/tʃest/",
    "translation": "胸部; 箱子",
    "cloze": {
      "sentence": "Clutching his ______ in agony, he fell to the ground.",
      "translation": "该语境考查核心词义【胸部】在权威语篇中的实际运用。",
      "original": "Clutching his chest in agony, he fell to the ground."
    },
    "form_confusables": [
      "chemist",
      "cheat",
      "cheese",
      "chef"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chest (胸部)；【形近易混】chemist, cheat, cheese；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "child": {
    "word": "child",
    "phonetic": "/tʃaild/",
    "translation": "儿童; 孩子",
    "cloze": {
      "sentence": "After they divorced, he refused to pay ______ support.",
      "translation": "该语境考查核心词义【儿童】在权威语篇中的实际运用。",
      "original": "After they divorced, he refused to pay child support."
    },
    "form_confusables": [
      "chip",
      "chemical",
      "could",
      "cloud"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】child (儿童)；【形近易混】chip, chemical, could；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "childhood": {
    "word": "childhood",
    "phonetic": "/'tʃaildhud/",
    "translation": "童年; 幼年",
    "cloze": {
      "sentence": "From earliest ______ she'd had a love of dancing.",
      "translation": "该语境考查核心词义【童年】在权威语篇中的实际运用。",
      "original": "From earliest childhood she'd had a love of dancing."
    },
    "form_confusables": [
      "choose",
      "cherish",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】childhood (童年)；【形近易混】choose, cherish, obtain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chip": {
    "word": "chip",
    "phonetic": "/tʃip/",
    "translation": "芯片; 碎片",
    "cloze": {
      "sentence": "Advances in technology have made it possible to pack even more circuits on a ______.",
      "translation": "该语境考查核心词义【芯片】在权威语篇中的实际运用。",
      "original": "Advances in technology have made it possible to pack even more circuits on a chip."
    },
    "form_confusables": [
      "chop",
      "clip",
      "child",
      "chapter"
    ],
    "semantic_confusables": [
      "fragment",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】chip (芯片)；【形近易混】chop, clip, child；【近义搭配】fragment, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "choke": {
    "word": "choke",
    "phonetic": "/tʃəuk/",
    "translation": "窒息; 哽咽",
    "cloze": {
      "sentence": "The fumes from the burning tyres made her ______.",
      "translation": "该语境考查核心词义【窒息】在权威语篇中的实际运用。",
      "original": "The fumes from the burning tyres made her choke."
    },
    "form_confusables": [
      "choose",
      "chop",
      "chef",
      "code"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】choke (窒息)；【形近易混】choose, chop, chef；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "choose": {
    "word": "choose",
    "phonetic": "/tʃu:z/",
    "translation": "选择; 挑选",
    "cloze": {
      "sentence": "She had to ______ between giving up her job or hiring a nanny.",
      "translation": "该语境考查核心词义【选择】在权威语篇中的实际运用。",
      "original": "She had to choose between giving up her job or hiring a nanny."
    },
    "form_confusables": [
      "choke",
      "compose",
      "chase",
      "loose"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】choose (选择)；【形近易混】choke, compose, chase；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chop": {
    "word": "chop",
    "phonetic": "/tʃɔp/",
    "translation": "砍; 剁碎",
    "cloze": {
      "sentence": "He ______ off the small branches before cutting down the tree.",
      "translation": "该语境考查核心词义【砍】在权威语篇中的实际运用。",
      "original": "He chopped off the small branches before cutting down the tree."
    },
    "form_confusables": [
      "chip",
      "crop",
      "choke",
      "cope"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chop (砍)；【形近易混】chip, crop, choke；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cigarette": {
    "word": "cigarette",
    "phonetic": "/,siɡə'ret; 'siɡ-/",
    "translation": "香烟; 纸烟",
    "cloze": {
      "sentence": "A ______ dangled from his lips.",
      "translation": "该语境考查核心词义【香烟】在权威语篇中的实际运用。",
      "original": "A cigarette dangled from his lips."
    },
    "form_confusables": [
      "create",
      "climate",
      "concrete",
      "circulate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cigarette (香烟)；【形近易混】create, climate, concrete；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cinema": {
    "word": "cinema",
    "phonetic": "/'sinəmə/",
    "translation": "电影院; 电影",
    "cloze": {
      "sentence": "How often do you go to the ______?",
      "translation": "该语境考查核心词义【电影院】在权威语篇中的实际运用。",
      "original": "How often do you go to the cinema?"
    },
    "form_confusables": [
      "cite",
      "climate",
      "combine",
      "confine"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cinema (电影院)；【形近易混】cite, climate, combine；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "circle": {
    "word": "circle",
    "phonetic": "/'sə:kl/",
    "translation": "圆圈; 循环",
    "cloze": {
      "sentence": "He turned the car in a tight ______.",
      "translation": "该语境考查核心词义【圆圈】在权威语篇中的实际运用。",
      "original": "He turned the car in a tight circle."
    },
    "form_confusables": [
      "circulate",
      "cubicle",
      "cycle",
      "circuit"
    ],
    "semantic_confusables": [
      "circulate",
      "cycle",
      "change",
      "manage"
    ],
    "notes": "【正解考点】circle (圆圈)；【形近易混】circulate, cubicle, cycle；【近义搭配】circulate, cycle, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "circuit": {
    "word": "circuit",
    "phonetic": "/'sə:kit/",
    "translation": "电路; 巡回",
    "cloze": {
      "sentence": "She's a well-known figure on the international lecture ______.",
      "translation": "该语境考查核心词义【电路】在权威语篇中的实际运用。",
      "original": "She's a well-known figure on the international lecture circuit."
    },
    "form_confusables": [
      "circulate",
      "circle",
      "credit",
      "critic"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】circuit (电路)；【形近易混】circulate, circle, credit；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "circulate": {
    "word": "circulate",
    "phonetic": "/'sə:kjuleit/",
    "translation": "循环; 流通",
    "cloze": {
      "sentence": "Rumours began to ______ about his financial problems.",
      "translation": "该语境考查核心词义【循环】在权威语篇中的实际运用。",
      "original": "Rumours began to circulate about his financial problems."
    },
    "form_confusables": [
      "circle",
      "circuit",
      "circumstance",
      "accurate"
    ],
    "semantic_confusables": [
      "currency",
      "circle",
      "cycle",
      "change"
    ],
    "notes": "【正解考点】circulate (循环)；【形近易混】circle, circuit, circumstance；【近义搭配】currency, circle, cycle。注意在语境中甄别固定搭配与语义内涵。"
  },
  "circumstance": {
    "word": "circumstance",
    "phonetic": "/'sə:kəmstəns/",
    "translation": "情况; 环境",
    "cloze": {
      "sentence": "He was simply a victim of ______.",
      "translation": "该语境考查核心词义【情况】在权威语篇中的实际运用。",
      "original": "He was simply a victim of circumstance."
    },
    "form_confusables": [
      "circulate",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】circumstance (情况)；【形近易混】circulate, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cite": {
    "word": "cite",
    "phonetic": "/sait/",
    "translation": "引用; 引述",
    "cloze": {
      "sentence": "The most commonly ______ reasons for stopping the treatment were side effects.",
      "translation": "该语境考查核心词义【引用】在权威语篇中的实际运用。",
      "original": "The most commonly cited reasons for stopping the treatment were side effects."
    },
    "form_confusables": [
      "city",
      "citizen",
      "climate",
      "circle"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cite (引用)；【形近易混】city, citizen, climate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "citizen": {
    "word": "citizen",
    "phonetic": "/'sitizən/",
    "translation": "公民; 市民",
    "cloze": {
      "sentence": "It's not clear how the new law will affect the ordinary ______.",
      "translation": "该语境考查核心词义【公民】在权威语篇中的实际运用。",
      "original": "It's not clear how the new law will affect the ordinary citizen."
    },
    "form_confusables": [
      "cite",
      "criticize",
      "coalition",
      "condition"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】citizen (公民)；【形近易混】cite, criticize, coalition；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "city": {
    "word": "city",
    "phonetic": "/'siti/",
    "translation": "城市; 都市",
    "cloze": {
      "sentence": "Bonn is Oxford's twin ______.",
      "translation": "该语境考查核心词义【城市】在权威语篇中的实际运用。",
      "original": "Bonn is Oxford's twin city."
    },
    "form_confusables": [
      "cite",
      "citizen",
      "county",
      "cif"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】city (城市)；【形近易混】cite, citizen, county；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "civil": {
    "word": "civil",
    "phonetic": "/'sivəl/",
    "translation": "公民的; 文明的",
    "cloze": {
      "sentence": "The teachers were all perfectly ______ to me.",
      "translation": "该语境考查核心词义【公民的】在权威语篇中的实际运用。",
      "original": "The teachers were all perfectly civil to me."
    },
    "form_confusables": [
      "civilian",
      "criminal",
      "critical",
      "circle"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】civil (公民的)；【形近易混】civilian, criminal, critical；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "civilian": {
    "word": "civilian",
    "phonetic": "/si'viljən/",
    "translation": "平民; 百姓",
    "cloze": {
      "sentence": "He left the army and returned to ______ life.",
      "translation": "该语境考查核心词义【平民】在真实例句中的精准搭配。",
      "original": "He left the army and returned to civilian life."
    },
    "form_confusables": [
      "civil",
      "clean",
      "cling",
      "citizen"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】civilian (平民)；【形近易混】civil, clean, cling；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "civilization": {
    "word": "civilization",
    "phonetic": "/,sivilai'zeiʃən; -li'z-/",
    "translation": "文明; 文化",
    "cloze": {
      "sentence": "Could this be the end of ______ as we know it?",
      "translation": "该语境考查核心词义【文明】在权威语篇中的实际运用。",
      "original": "Could this be the end of civilization as we know it?"
    },
    "form_confusables": [
      "realization",
      "coalition",
      "consolidation",
      "combination"
    ],
    "semantic_confusables": [
      "culture",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】civilization (文明)；【形近易混】realization, coalition, consolidation；【近义搭配】culture, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "claim": {
    "word": "claim",
    "phonetic": "/kleim/",
    "translation": "声称; 索赔",
    "cloze": {
      "sentence": "He tried to ______ that he had acted in self-defence.",
      "translation": "该语境考查核心词义【声称】在权威语篇中的实际运用。",
      "original": "He tried to claim that he had acted in self-defence."
    },
    "form_confusables": [
      "climb",
      "clap",
      "clarify",
      "classic"
    ],
    "semantic_confusables": [
      "state",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】claim (声称)；【形近易混】climb, clap, clarify；【近义搭配】state, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clap": {
    "word": "clap",
    "phonetic": "/klæp/",
    "translation": "鼓掌; 拍手",
    "cloze": {
      "sentence": "The audience cheered and ______.",
      "translation": "该语境考查核心词义【鼓掌】在权威语篇中的实际运用。",
      "original": "The audience cheered and clapped."
    },
    "form_confusables": [
      "clay",
      "clip",
      "claim",
      "clash"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clap (鼓掌)；【形近易混】clay, clip, claim；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clarify": {
    "word": "clarify",
    "phonetic": "/'klærifai/",
    "translation": "澄清; 阐明",
    "cloze": {
      "sentence": "I am happy to ______ any points that are still unclear.",
      "translation": "该语境考查核心词义【澄清】在权威语篇中的实际运用。",
      "original": "I am happy to clarify any points that are still unclear."
    },
    "form_confusables": [
      "classify",
      "clay",
      "claim",
      "clear"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clarify (澄清)；【形近易混】classify, clay, claim；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clash": {
    "word": "clash",
    "phonetic": "/klæʃ/",
    "translation": "冲突; 碰撞",
    "cloze": {
      "sentence": "The leaders are preparing for a head-on ______ at the summit.",
      "translation": "该语境考查核心词义【冲突】在权威语篇中的实际运用。",
      "original": "The leaders are preparing for a head-on clash at the summit."
    },
    "form_confusables": [
      "crash",
      "flash",
      "clause",
      "classic"
    ],
    "semantic_confusables": [
      "collision",
      "conflict",
      "crash",
      "change"
    ],
    "notes": "【正解考点】clash (冲突)；【形近易混】crash, flash, clause；【近义搭配】collision, conflict, crash。注意在语境中甄别固定搭配与语义内涵。"
  },
  "classic": {
    "word": "classic",
    "phonetic": "/'klæsik/",
    "translation": "经典的; 典范",
    "cloze": {
      "sentence": "It was a ______ example of poor communication.",
      "translation": "该语境考查核心词义【经典的】在权威语篇中的实际运用。",
      "original": "It was a classic example of poor communication."
    },
    "form_confusables": [
      "classify",
      "clash",
      "claim",
      "clause"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】classic (经典的)；【形近易混】classify, clash, claim；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "classify": {
    "word": "classify",
    "phonetic": "//'klæsifai//",
    "translation": "分类; 归类",
    "cloze": {
      "sentence": "We can ______ machines in terms of their function.",
      "translation": "该语境考查核心词义【分类】在权威语篇中的实际运用。",
      "original": "We can classify machines in terms of their function."
    },
    "form_confusables": [
      "classic",
      "clarify",
      "clash",
      "claim"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】classify (分类)；【形近易混】classic, clarify, clash；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clause": {
    "word": "clause",
    "phonetic": "/klɔ:z/",
    "translation": "条款; 从句",
    "cloze": {
      "sentence": "The contract contains a confidentiality ______.",
      "translation": "该语境考查核心词义【条款】在权威语篇中的实际运用。",
      "original": "The contract contains a confidentiality clause."
    },
    "form_confusables": [
      "clue",
      "clash",
      "chase",
      "collapse"
    ],
    "semantic_confusables": [
      "item",
      "amend",
      "change",
      "manage"
    ],
    "notes": "【正解考点】clause (条款)；【形近易混】clue, clash, chase；【近义搭配】item, amend, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clay": {
    "word": "clay",
    "phonetic": "/klei/",
    "translation": "粘土; 泥土",
    "cloze": {
      "sentence": "She moulded the ______ into the shape of a head.",
      "translation": "该语境考查核心词义【粘土】在权威语篇中的实际运用。",
      "original": "She moulded the clay into the shape of a head."
    },
    "form_confusables": [
      "clarify",
      "clap",
      "claim",
      "clash"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clay (粘土)；【形近易混】clarify, clap, claim；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clean": {
    "word": "clean",
    "phonetic": "/kli:n/",
    "translation": "干净的; 清洁",
    "cloze": {
      "sentence": "I scrubbed the floor to get it ______.",
      "translation": "该语境考查核心词义【干净的】在权威语篇中的实际运用。",
      "original": "I scrubbed the floor to get it clean."
    },
    "form_confusables": [
      "clear",
      "client",
      "clap",
      "clay"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clean (干净的)；【形近易混】clear, client, clap；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clear": {
    "word": "clear",
    "phonetic": "/kliə/",
    "translation": "清晰的; 清除",
    "cloze": {
      "sentence": "It was ______ to us that there was a problem.",
      "translation": "该语境考查核心词义【清晰的】在权威语篇中的实际运用。",
      "original": "It was clear to us that there was a problem."
    },
    "form_confusables": [
      "clean",
      "clerk",
      "clever",
      "collar"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clear (清晰的)；【形近易混】clean, clerk, clever；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clerk": {
    "word": "clerk",
    "phonetic": "/klɑ:k; klə:k/",
    "translation": "店员; 职员",
    "cloze": {
      "sentence": "He started work as a railway booking ______.",
      "translation": "该语境考查核心词义【店员】在权威语篇中的实际运用。",
      "original": "He started work as a railway booking clerk."
    },
    "form_confusables": [
      "clear",
      "clever",
      "clue",
      "clean"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clerk (店员)；【形近易混】clear, clever, clue；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clever": {
    "word": "clever",
    "phonetic": "/'klevə/",
    "translation": "聪明的; 机灵的",
    "cloze": {
      "sentence": "I became quite ______ at making tasty meals out of nothing.",
      "translation": "该语境考查核心词义【聪明的】在权威语篇中的实际运用。",
      "original": "I became quite clever at making tasty meals out of nothing."
    },
    "form_confusables": [
      "clear",
      "clerk",
      "cover",
      "cheer"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clever (聪明的)；【形近易混】clear, clerk, cover；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "client": {
    "word": "client",
    "phonetic": "/'klaiənt/",
    "translation": "客户; 委托人",
    "cloze": {
      "sentence": "On behalf of my ______, I would like to remind you of your obligations in this matter.",
      "translation": "该语境考查核心词义【客户】在权威语篇中的实际运用。",
      "original": "On behalf of my client, I would like to remind you of your obligations in this matter."
    },
    "form_confusables": [
      "cling",
      "ancient",
      "clean",
      "clinic"
    ],
    "semantic_confusables": [
      "customer",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】client (客户)；【形近易混】cling, ancient, clean；【近义搭配】customer, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cliff": {
    "word": "cliff",
    "phonetic": "/klif/",
    "translation": "悬崖; 峭壁",
    "cloze": {
      "sentence": "The hotel was perched high on a ______ overlooking the ocean.",
      "translation": "该语境考查核心词义【悬崖】在权威语篇中的实际运用。",
      "original": "The hotel was perched high on a cliff overlooking the ocean."
    },
    "form_confusables": [
      "clip",
      "cif",
      "clarify",
      "climb"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cliff (悬崖)；【形近易混】clip, cif, clarify；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "climate": {
    "word": "climate",
    "phonetic": "/'klaimit/",
    "translation": "气候; 风气",
    "cloze": {
      "sentence": "His ideas on equality are viewed as utopian in the current political ______.",
      "translation": "该语境考查核心词义【气候】在权威语篇中的实际运用。",
      "original": "His ideas on equality are viewed as utopian in the current political climate."
    },
    "form_confusables": [
      "climb",
      "cite",
      "claim",
      "client"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】climate (气候)；【形近易混】climb, cite, claim；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cling": {
    "word": "cling",
    "phonetic": "/kliŋ/",
    "translation": "紧贴; 坚持",
    "cloze": {
      "sentence": "He had one last hope to ______ on to.",
      "translation": "该语境考查核心词义【紧贴】在权威语篇中的实际运用。",
      "original": "He had one last hope to cling on to."
    },
    "form_confusables": [
      "clinic",
      "client",
      "ruling",
      "clip"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cling (紧贴)；【形近易混】clinic, client, ruling；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clinic": {
    "word": "clinic",
    "phonetic": "/'klinik/",
    "translation": "诊所; 门诊部",
    "cloze": {
      "sentence": "He was treated at the hospital's eye ______.",
      "translation": "该语境考查核心词义【诊所】在权威语篇中的实际运用。",
      "original": "He was treated at the hospital's eye clinic."
    },
    "form_confusables": [
      "cling",
      "client",
      "critic",
      "classic"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clinic (诊所)；【形近易混】cling, client, critic；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clip": {
    "word": "clip",
    "phonetic": "/span><span style='font-style:normal;font-weight:normal;'> </",
    "translation": "回形针; 剪辑",
    "cloze": {
      "sentence": "She put a ______ in her hair.",
      "translation": "该语境考查核心词义【回形针】在权威语篇中的实际运用。",
      "original": "She put a clip in her hair."
    },
    "form_confusables": [
      "clap",
      "chip",
      "climb",
      "cliff"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clip (回形针)；【形近易混】clap, chip, climb；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clock": {
    "word": "clock",
    "phonetic": "/klɔk/",
    "translation": "钟表; 时钟",
    "cloze": {
      "sentence": "Her ______ told her it was time to get up.",
      "translation": "该语境考查核心词义【钟表】在权威语篇中的实际运用。",
      "original": "Her clock told her it was time to get up."
    },
    "form_confusables": [
      "clone",
      "cloth",
      "cloud",
      "cook"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clock (钟表)；【形近易混】clone, cloth, cloud；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clone": {
    "word": "clone",
    "phonetic": "/kləun/",
    "translation": "克隆; 复制",
    "cloze": {
      "sentence": "A team from the UK were the first to successfully ______ an animal.",
      "translation": "该语境考查核心词义【克隆】在权威语篇中的实际运用。",
      "original": "A team from the UK were the first to successfully clone an animal."
    },
    "form_confusables": [
      "clothe",
      "clue",
      "colony",
      "convey"
    ],
    "semantic_confusables": [
      "copy",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】clone (克隆)；【形近易混】clothe, clue, colony；【近义搭配】copy, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cloth": {
    "word": "cloth",
    "phonetic": "/klɔθ; klɔ:θ/",
    "translation": "布料; 织物",
    "cloze": {
      "sentence": "Wipe the table with a damp ______.",
      "translation": "该语境考查核心词义【布料】在权威语篇中的实际运用。",
      "original": "Wipe the table with a damp cloth."
    },
    "form_confusables": [
      "clothe",
      "clock",
      "clone",
      "cloud"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cloth (布料)；【形近易混】clothe, clock, clone；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clothe": {
    "word": "clothe",
    "phonetic": "/kləuð/",
    "translation": "给...穿衣",
    "cloze": {
      "sentence": "Climbing plants ______ the courtyard walls.",
      "translation": "该语境考查核心词义【给...穿衣】在真实例句中的精准搭配。",
      "original": "Climbing plants clothed the courtyard walls."
    },
    "form_confusables": [
      "cloth",
      "clone",
      "climate",
      "clue"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clothe (给...穿衣)；【形近易混】cloth, clone, climate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cloud": {
    "word": "cloud",
    "phonetic": "/klaud/",
    "translation": "云朵; 阴云",
    "cloze": {
      "sentence": "The ______ cover is quite dense today.",
      "translation": "该语境考查核心词义【云朵】在权威语篇中的实际运用。",
      "original": "The cloud cover is quite dense today."
    },
    "form_confusables": [
      "could",
      "club",
      "clue",
      "clock"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cloud (云朵)；【形近易混】could, club, clue；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "club": {
    "word": "club",
    "phonetic": "/klʌb/",
    "translation": "俱乐部; 社团",
    "cloze": {
      "sentence": "She belongs to a book ______.",
      "translation": "该语境考查核心词义【俱乐部】在权威语篇中的实际运用。",
      "original": "She belongs to a book club."
    },
    "form_confusables": [
      "clue",
      "climb",
      "clumsy",
      "cloud"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】club (俱乐部)；【形近易混】clue, climb, clumsy；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clue": {
    "word": "clue",
    "phonetic": "/klu:/",
    "translation": "线索; 提示",
    "cloze": {
      "sentence": "Nobody ______ us to this mystery.",
      "translation": "没有人向我们提供解开这个奥秘的线索。",
      "original": "Nobody clued us to this mystery."
    },
    "form_confusables": [
      "clause",
      "club",
      "cure",
      "clone"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】clue (线索)；【形近易混】clause, club, cure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "clumsy": {
    "word": "clumsy",
    "phonetic": "/'klʌmzi/",
    "translation": "笨拙的; 笨拙",
    "cloze": {
      "sentence": "Sorry—that was ______ of me.",
      "translation": "该语境考查核心词义【笨拙的】在真实例句中的精准搭配。",
      "original": "Sorry—that was clumsy of me."
    },
    "form_confusables": [
      "clause",
      "club",
      "clue",
      "clay"
    ],
    "semantic_confusables": [
      "awkward",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】clumsy (笨拙的)；【形近易混】clause, club, clue；【近义搭配】awkward, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coach": {
    "word": "coach",
    "phonetic": "/kəutʃ/",
    "translation": "教练; 长途车",
    "cloze": {
      "sentence": "They are planning to tour the United States by ______.",
      "translation": "该语境考查核心词义【教练】在权威语篇中的实际运用。",
      "original": "They are planning to tour the United States by coach."
    },
    "form_confusables": [
      "couch",
      "coal",
      "compact",
      "contact"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】coach (教练)；【形近易混】couch, coal, compact；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coal": {
    "word": "coal",
    "phonetic": "/kəul/",
    "translation": "煤炭; 煤块",
    "cloze": {
      "sentence": "My grandfather worked in ______ mines in England and Wales.",
      "translation": "该语境考查核心词义【煤炭】在权威语篇中的实际运用。",
      "original": "My grandfather worked in coal mines in England and Wales."
    },
    "form_confusables": [
      "cool",
      "coast",
      "coach",
      "coarse"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】coal (煤炭)；【形近易混】cool, coast, coach；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coalition": {
    "word": "coalition",
    "phonetic": "/,kəuə'liʃən/",
    "translation": "联盟; 联合政府",
    "cloze": {
      "sentence": "The two parties governed in ______ for four years.",
      "translation": "该语境考查核心词义【联盟】在权威语篇中的实际运用。",
      "original": "The two parties governed in coalition for four years."
    },
    "form_confusables": [
      "condition",
      "collision",
      "collection",
      "competition"
    ],
    "semantic_confusables": [
      "union",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】coalition (联盟)；【形近易混】condition, collision, collection；【近义搭配】union, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coarse": {
    "word": "coarse",
    "phonetic": "/kɔ:s/",
    "translation": "粗糙的; 粗俗的",
    "cloze": {
      "sentence": "She looked at the boy's ______ hands and heavy boots.",
      "translation": "该语境考查核心词义【粗糙的】在权威语篇中的实际运用。",
      "original": "She looked at the boy's coarse hands and heavy boots."
    },
    "form_confusables": [
      "course",
      "core",
      "compare",
      "coast"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】coarse (粗糙的)；【形近易混】course, core, compare；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "code": {
    "word": "code",
    "phonetic": "/symbols/",
    "translation": "代码; 准则",
    "cloze": {
      "sentence": "He was thrown out for infringing the club's strict dress ______.",
      "translation": "该语境考查核心词义【代码】在权威语篇中的实际运用。",
      "original": "He was thrown out for infringing the club's strict dress code."
    },
    "form_confusables": [
      "come",
      "cope",
      "core",
      "could"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】code (代码)；【形近易混】come, cope, core；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cognitive": {
    "word": "cognitive",
    "phonetic": "/'kɔɡnitiv/",
    "translation": "认知的; 感知的",
    "cloze": {
      "sentence": "This is both a ______ and an emotional process.",
      "translation": "该语境考查核心词义【认知的】在权威语篇中的实际运用。",
      "original": "This is both a cognitive and an emotional process."
    },
    "form_confusables": [
      "competitive",
      "conservative",
      "continue",
      "collective"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cognitive (认知的)；【形近易混】competitive, conservative, continue；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coincide": {
    "word": "coincide",
    "phonetic": "/,kəuin'said/",
    "translation": "巧合; 一致",
    "cloze": {
      "sentence": "Our views on this issue ______ closely with yours.",
      "translation": "该语境考查核心词义【巧合】在权威语篇中的实际运用。",
      "original": "Our views on this issue coincide closely with yours."
    },
    "form_confusables": [
      "coincidence",
      "conclude",
      "convince",
      "consider"
    ],
    "semantic_confusables": [
      "conform",
      "consensus",
      "coincidence",
      "change"
    ],
    "notes": "【正解考点】coincide (巧合)；【形近易混】coincidence, conclude, convince；【近义搭配】conform, consensus, coincidence。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coincidence": {
    "word": "coincidence",
    "phonetic": "/kəu'insidəns/",
    "translation": "巧合; 同时发生",
    "cloze": {
      "sentence": "By an unfortunate ______, their house was burgled on the day he lost his job.",
      "translation": "该语境考查核心词义【巧合】在权威语篇中的实际运用。",
      "original": "By an unfortunate coincidence, their house was burgled on the day he lost his job."
    },
    "form_confusables": [
      "coincide",
      "confidence",
      "conscience",
      "conference"
    ],
    "semantic_confusables": [
      "coincide",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】coincidence (巧合)；【形近易混】coincide, confidence, conscience；【近义搭配】coincide, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collaborate": {
    "word": "collaborate",
    "phonetic": "/kə'læbəreit/",
    "translation": "合作; 协作",
    "cloze": {
      "sentence": "She agreed to ______ with him in writing her biography.",
      "translation": "该语境考查核心词义【合作】在真实例句中的精准搭配。",
      "original": "She agreed to collaborate with him in writing her biography."
    },
    "form_confusables": [
      "corporate",
      "cooperate",
      "collapse",
      "colleague"
    ],
    "semantic_confusables": [
      "cooperation",
      "cooperate",
      "change",
      "manage"
    ],
    "notes": "【正解考点】collaborate (合作)；【形近易混】corporate, cooperate, collapse；【近义搭配】cooperation, cooperate, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collapse": {
    "word": "collapse",
    "phonetic": "/kə'læps/",
    "translation": "倒塌; 崩溃",
    "cloze": {
      "sentence": "Timber buildings may simply rot and ______.",
      "translation": "该语境考查核心词义【倒塌】在权威语篇中的实际运用。",
      "original": "Timber buildings may simply rot and collapse."
    },
    "form_confusables": [
      "collar",
      "colleague",
      "collaborate",
      "college"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】collapse (倒塌)；【形近易混】collar, colleague, collaborate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collar": {
    "word": "collar",
    "phonetic": "/'kɔlə/",
    "translation": "衣领; 颈圈",
    "cloze": {
      "sentence": "He wore a ______ and tie for the occasion.",
      "translation": "该语境考查核心词义【衣领】在权威语篇中的实际运用。",
      "original": "He wore a collar and tie for the occasion."
    },
    "form_confusables": [
      "collapse",
      "color",
      "colleague",
      "clear"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】collar (衣领)；【形近易混】collapse, color, colleague；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "colleague": {
    "word": "colleague",
    "phonetic": "/'kɔli:ɡ/",
    "translation": "同事; 同僚",
    "cloze": {
      "sentence": "I'd like you to meet a ______ of mine from the office.",
      "translation": "该语境考查核心词义【同事】在权威语篇中的实际运用。",
      "original": "I'd like you to meet a colleague of mine from the office."
    },
    "form_confusables": [
      "colleagues",
      "college",
      "collective",
      "collar"
    ],
    "semantic_confusables": [
      "colleagues",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】colleague (同事)；【形近易混】colleagues, college, collective；【近义搭配】colleagues, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collect": {
    "word": "collect",
    "phonetic": "/kə'lekt/",
    "translation": "收集; 搜集",
    "cloze": {
      "sentence": "He went to the casino most nights, but usually failed to ______.",
      "translation": "该语境考查核心词义【收集】在权威语篇中的实际运用。",
      "original": "He went to the casino most nights, but usually failed to collect."
    },
    "form_confusables": [
      "collection",
      "collective",
      "college",
      "connect"
    ],
    "semantic_confusables": [
      "collection",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】collect (收集)；【形近易混】collection, collective, college；【近义搭配】collection, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collection": {
    "word": "collection",
    "phonetic": "/kə'lekʃən/",
    "translation": "收藏品; 收集",
    "cloze": {
      "sentence": "A ______ will be taken at the end of the service.",
      "translation": "该语境考查核心词义【收藏品】在权威语篇中的实际运用。",
      "original": "A collection will be taken at the end of the service."
    },
    "form_confusables": [
      "collective",
      "collect",
      "connection",
      "correction"
    ],
    "semantic_confusables": [
      "collect",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】collection (收藏品)；【形近易混】collective, collect, connection；【近义搭配】collect, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collective": {
    "word": "collective",
    "phonetic": "/kə'lektiv/",
    "translation": "集体的; 共同的",
    "cloze": {
      "sentence": "MPs heaved a ______ sigh of relief when the news was announced last night.",
      "translation": "该语境考查核心词义【集体的】在权威语篇中的实际运用。",
      "original": "MPs heaved a collective sigh of relief when the news was announced last night."
    },
    "form_confusables": [
      "collection",
      "collect",
      "college",
      "colleague"
    ],
    "semantic_confusables": [
      "common",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】collective (集体的)；【形近易混】collection, collect, college；【近义搭配】common, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "college": {
    "word": "college",
    "phonetic": "/'kɔlidʒ/",
    "translation": "大学; 学院",
    "cloze": {
      "sentence": "I got interested in politics when I was at ______.",
      "translation": "该语境考查核心词义【大学】在权威语篇中的实际运用。",
      "original": "I got interested in politics when I was at college."
    },
    "form_confusables": [
      "colleague",
      "colleagues",
      "collective",
      "collect"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】college (大学)；【形近易混】colleague, colleagues, collective；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "collision": {
    "word": "collision",
    "phonetic": "/kə'liʒən/",
    "translation": "碰撞; 冲突",
    "cloze": {
      "sentence": "I had a ______ with a bus.",
      "translation": "该语境考查核心词义【碰撞】在权威语篇中的实际运用。",
      "original": "I had a collision with a bus."
    },
    "form_confusables": [
      "collection",
      "coalition",
      "commission",
      "conclusion"
    ],
    "semantic_confusables": [
      "clash",
      "conflict",
      "crash",
      "change"
    ],
    "notes": "【正解考点】collision (碰撞)；【形近易混】collection, coalition, commission；【近义搭配】clash, conflict, crash。注意在语境中甄别固定搭配与语义内涵。"
  },
  "colonial": {
    "word": "colonial",
    "phonetic": "/kə'ləunjəl/",
    "translation": "殖民的; 殖民地",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：殖民的)",
      "original": "It is essential to colonial this critical process before making any final decisions."
    },
    "form_confusables": [
      "colony",
      "continual",
      "color",
      "collision"
    ],
    "semantic_confusables": [
      "colony",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】colonial (殖民的)；【形近易混】colony, continual, color；【近义搭配】colony, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "colony": {
    "word": "colony",
    "phonetic": "/'kɔləni/",
    "translation": "殖民地; 群体",
    "cloze": {
      "sentence": "Britain's overseas colonies Settlers established a new ______ in the early 18th century.",
      "translation": "该语境考查核心词义【殖民地】在权威语篇中的实际运用。",
      "original": "Britain's overseas colonies Settlers established a new colony in the early 18th century."
    },
    "form_confusables": [
      "colonial",
      "color",
      "collision",
      "column"
    ],
    "semantic_confusables": [
      "colonial",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】colony (殖民地)；【形近易混】colonial, color, collision；【近义搭配】colonial, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "color": {
    "word": "color",
    "phonetic": "/'kʌlə/",
    "translation": "颜色; 色彩",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：颜色)",
      "original": "The manager asked the entire team to carefully color the operational requirements."
    },
    "form_confusables": [
      "colony",
      "collar",
      "colonial",
      "corridor"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】color (颜色)；【形近易混】colony, collar, colonial；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "column": {
    "word": "column",
    "phonetic": "/'kɔləm/",
    "translation": "专栏; 圆柱",
    "cloze": {
      "sentence": "He has a regular ______ in a weekly newspaper.",
      "translation": "该语境考查核心词义【专栏】在权威语篇中的实际运用。",
      "original": "He has a regular column in a weekly newspaper."
    },
    "form_confusables": [
      "count",
      "colony",
      "common",
      "cousin"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】column (专栏)；【形近易混】count, colony, common；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "combination": {
    "word": "combination",
    "phonetic": "/,kɔmbi'neiʃən/",
    "translation": "结合; 组合",
    "cloze": {
      "sentence": "High debt and low earnings are a lethal ______.",
      "translation": "该语境考查核心词义【结合】在权威语篇中的实际运用。",
      "original": "High debt and low earnings are a lethal combination."
    },
    "form_confusables": [
      "communication",
      "competition",
      "composition",
      "examination"
    ],
    "semantic_confusables": [
      "bond",
      "combine",
      "change",
      "manage"
    ],
    "notes": "【正解考点】combination (结合)；【形近易混】communication, competition, composition；【近义搭配】bond, combine, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "combine": {
    "word": "combine",
    "phonetic": "/kəm'bain/",
    "translation": "结合; 联合",
    "cloze": {
      "sentence": "The illustrations ______ well with the text.",
      "translation": "该语境考查核心词义【结合】在权威语篇中的实际运用。",
      "original": "The illustrations combine well with the text."
    },
    "form_confusables": [
      "come",
      "confine",
      "comprise",
      "complain"
    ],
    "semantic_confusables": [
      "unite",
      "bond",
      "combination",
      "change"
    ],
    "notes": "【正解考点】combine (结合)；【形近易混】come, confine, comprise；【近义搭配】unite, bond, combination。注意在语境中甄别固定搭配与语义内涵。"
  },
  "come": {
    "word": "come",
    "phonetic": "/kʌm/",
    "translation": "来到; 产生",
    "cloze": {
      "sentence": "I've ______ to expect this kind of behaviour from him.",
      "translation": "该语境考查核心词义【来到】在权威语篇中的实际运用。",
      "original": "I've come to expect this kind of behaviour from him."
    },
    "form_confusables": [
      "comedy",
      "compel",
      "combine",
      "compare"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】come (来到)；【形近易混】comedy, compel, combine；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comedy": {
    "word": "comedy",
    "phonetic": "/'kɔmidi/",
    "translation": "喜剧; 搞笑",
    "cloze": {
      "sentence": "The case quickly became a ______ of errors.",
      "translation": "该语境考查核心词义【喜剧】在权威语篇中的实际运用。",
      "original": "The case quickly became a comedy of errors."
    },
    "form_confusables": [
      "come",
      "comply",
      "commodity",
      "compel"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】comedy (喜剧)；【形近易混】come, comply, commodity；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comfort": {
    "word": "comfort",
    "phonetic": "/'kʌmfət/",
    "translation": "安慰; 舒适",
    "cloze": {
      "sentence": "Chocolate is a great ______ food.",
      "translation": "该语境考查核心词义【安慰】在权威语篇中的实际运用。",
      "original": "Chocolate is a great comfort food."
    },
    "form_confusables": [
      "conform",
      "court",
      "confront",
      "component"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】comfort (安慰)；【形近易混】conform, court, confront；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comfortable": {
    "word": "comfortable",
    "phonetic": "/'kʌmfətəbl/",
    "translation": "舒适的; 宽裕的",
    "cloze": {
      "sentence": "I don't feel ______ with him.",
      "translation": "该语境考查核心词义【舒适的】在权威语篇中的实际运用。",
      "original": "I don't feel comfortable with him."
    },
    "form_confusables": [
      "uncomfortable",
      "considerable",
      "composure",
      "workable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】comfortable (舒适的)；【形近易混】uncomfortable, considerable, composure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "command": {
    "word": "command",
    "phonetic": "/kə'mɑ:nd/",
    "translation": "命令; 指挥",
    "cloze": {
      "sentence": "He had ______ of 3 000 soldiers.",
      "translation": "该语境考查核心词义【命令】在真实例句中的精准搭配。",
      "original": "He had command of 3 000 soldiers."
    },
    "form_confusables": [
      "commander",
      "common",
      "comment",
      "company"
    ],
    "semantic_confusables": [
      "instruct",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】command (命令)；【形近易混】commander, common, comment；【近义搭配】instruct, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commander": {
    "word": "commander",
    "phonetic": "/kə'mɑ:ndə/",
    "translation": "指挥官; 司令官",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：指挥官)",
      "original": "Recent studies clearly show that we must commander modern standards in our research."
    },
    "form_confusables": [
      "command",
      "commerce",
      "consider",
      "common"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】commander (指挥官)；【形近易混】command, commerce, consider；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comment": {
    "word": "comment",
    "phonetic": "/'kɔment/",
    "translation": "评论; 意见",
    "cloze": {
      "sentence": "Editorial ______ in the press tended to support the government in this matter.",
      "translation": "该语境考查核心词义【评论】在权威语篇中的实际运用。",
      "original": "Editorial comment in the press tended to support the government in this matter."
    },
    "form_confusables": [
      "commitment",
      "commit",
      "communist",
      "competent"
    ],
    "semantic_confusables": [
      "opinion",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】comment (评论)；【形近易混】commitment, commit, communist；【近义搭配】opinion, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commerce": {
    "word": "commerce",
    "phonetic": "/'kɔmə:s/",
    "translation": "商业; 贸易",
    "cloze": {
      "sentence": "She has little experience of the world of ______.",
      "translation": "该语境考查核心词义【商业】在权威语篇中的实际运用。",
      "original": "She has little experience of the world of commerce."
    },
    "form_confusables": [
      "commercial",
      "committee",
      "commander",
      "comment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】commerce (商业)；【形近易混】commercial, committee, commander；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commercial": {
    "word": "commercial",
    "phonetic": "/kə'mə:ʃəl/",
    "translation": "商业的; 广告",
    "cloze": {
      "sentence": "The movie was not a ______ success.",
      "translation": "该语境考查核心词义【商业的】在权威语篇中的实际运用。",
      "original": "The movie was not a commercial success."
    },
    "form_confusables": [
      "commerce",
      "crucial",
      "commander",
      "comment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】commercial (商业的)；【形近易混】commerce, crucial, commander；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commission": {
    "word": "commission",
    "phonetic": "/kə'miʃən/",
    "translation": "佣金; 提成; 委员会",
    "cloze": {
      "sentence": "I have received a private ______ to paint the prince's family.",
      "translation": "该语境考查核心词义【佣金】在权威语篇中的实际运用。",
      "original": "I have received a private commission to paint the prince's family."
    },
    "form_confusables": [
      "communication",
      "collision",
      "comparison",
      "combination"
    ],
    "semantic_confusables": [
      "committee",
      "council",
      "change",
      "manage"
    ],
    "notes": "【正解考点】commission (佣金)；【形近易混】communication, collision, comparison；【近义搭配】committee, council, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commit": {
    "word": "commit",
    "phonetic": "/kə'mit/",
    "translation": "承诺; 犯(错)",
    "cloze": {
      "sentence": "He denied conspiring to ______ robberies in April last year.",
      "translation": "该语境考查核心词义【承诺】在权威语篇中的实际运用。",
      "original": "He denied conspiring to commit robberies in April last year."
    },
    "form_confusables": [
      "committee",
      "communist",
      "commodity",
      "community"
    ],
    "semantic_confusables": [
      "commitment",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】commit (承诺)；【形近易混】committee, communist, commodity；【近义搭配】commitment, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commitment": {
    "word": "commitment",
    "phonetic": "/kə'mitmənt/",
    "translation": "承诺; 奉献",
    "cloze": {
      "sentence": "Learning to play the violin requires strong ______.",
      "translation": "该语境考查核心词义【承诺】在权威语篇中的实际运用。",
      "original": "Learning to play the violin requires strong commitment."
    },
    "form_confusables": [
      "comment",
      "committee",
      "competent",
      "content"
    ],
    "semantic_confusables": [
      "commit",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】commitment (承诺)；【形近易混】comment, committee, competent；【近义搭配】commit, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "committee": {
    "word": "committee",
    "phonetic": "/kə'miti/",
    "translation": "委员会",
    "cloze": {
      "sentence": "I talked to some of the people on the ______.",
      "translation": "该语境考查核心词义【委员会】在权威语篇中的实际运用。",
      "original": "I talked to some of the people on the committee."
    },
    "form_confusables": [
      "commit",
      "commitment",
      "commerce",
      "communicate"
    ],
    "semantic_confusables": [
      "commission",
      "council",
      "change",
      "manage"
    ],
    "notes": "【正解考点】committee (委员会)；【形近易混】commit, commitment, commerce；【近义搭配】commission, council, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commodity": {
    "word": "commodity",
    "phonetic": "/kə'mɔditi/",
    "translation": "商品; 货物",
    "cloze": {
      "sentence": "Time is a very valuable ______.",
      "translation": "该语境考查核心词义【商品】在权威语篇中的实际运用。",
      "original": "Time is a very valuable commodity."
    },
    "form_confusables": [
      "community",
      "commit",
      "common",
      "committee"
    ],
    "semantic_confusables": [
      "freight",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】commodity (商品)；【形近易混】community, commit, common；【近义搭配】freight, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "common": {
    "word": "common",
    "phonetic": "/'kɔmən/",
    "translation": "常见的; 共同的",
    "cloze": {
      "sentence": "She seems a bit ______ to me.",
      "translation": "该语境考查核心词义【常见的】在权威语篇中的实际运用。",
      "original": "She seems a bit common to me."
    },
    "form_confusables": [
      "command",
      "comment",
      "commodity",
      "commander"
    ],
    "semantic_confusables": [
      "collective",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】common (常见的)；【形近易混】command, comment, commodity；【近义搭配】collective, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "communicate": {
    "word": "communicate",
    "phonetic": "/kə'mju:nikeit/",
    "translation": "沟通; 传达",
    "cloze": {
      "sentence": "By this age most children have begun to ______ verbally.",
      "translation": "该语境考查核心词义【沟通】在权威语篇中的实际运用。",
      "original": "By this age most children have begun to communicate verbally."
    },
    "form_confusables": [
      "communication",
      "communist",
      "community",
      "committee"
    ],
    "semantic_confusables": [
      "convey",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】communicate (沟通)；【形近易混】communication, communist, community；【近义搭配】convey, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "communication": {
    "word": "communication",
    "phonetic": "/kə,mju:ni'keiʃən/",
    "translation": "交流; 通讯",
    "cloze": {
      "sentence": "Good ______ is important for business.",
      "translation": "该语境考查核心词义【交流】在权威语篇中的实际运用。",
      "original": "Good communication is important for business."
    },
    "form_confusables": [
      "communicate",
      "combination",
      "commission",
      "concentration"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】communication (交流)；【形近易混】communicate, combination, commission；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "communist": {
    "word": "communist",
    "phonetic": "/'kɔmjunist/",
    "translation": "共产主义者",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：共产主义者)",
      "original": "The manager asked the entire team to carefully communist the operational requirements."
    },
    "form_confusables": [
      "community",
      "communicate",
      "commit",
      "comment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】communist (共产主义者)；【形近易混】community, communicate, commit；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "community": {
    "word": "community",
    "phonetic": "/kə'mju:niti/",
    "translation": "社区; 共同体",
    "cloze": {
      "sentence": "The town has a strong ______ spirit.",
      "translation": "该语境考查核心词义【社区】在权威语篇中的实际运用。",
      "original": "The town has a strong community spirit."
    },
    "form_confusables": [
      "communist",
      "communicate",
      "commodity",
      "commit"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】community (社区)；【形近易混】communist, communicate, commodity；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compact": {
    "word": "compact",
    "phonetic": "/kəm'pækt; 'kɔmpækt/",
    "translation": "紧凑的; 契约",
    "cloze": {
      "sentence": "Computers have become much more ______ over the last 15 years.",
      "translation": "该语境考查核心词义【紧凑的】在真实例句中的精准搭配。",
      "original": "Computers have become much more compact over the last 15 years."
    },
    "form_confusables": [
      "complaint",
      "company",
      "compare",
      "compete"
    ],
    "semantic_confusables": [
      "contract",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】compact (紧凑的)；【形近易混】complaint, company, compare；【近义搭配】contract, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "companion": {
    "word": "companion",
    "phonetic": "/kəm'pænjən/",
    "translation": "同伴; 伴侣",
    "cloze": {
      "sentence": "Fear was her constant ______.",
      "translation": "该语境考查核心词义【同伴】在权威语篇中的实际运用。",
      "original": "Fear was her constant companion."
    },
    "form_confusables": [
      "comparison",
      "company",
      "competition",
      "composition"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】companion (同伴)；【形近易混】comparison, company, competition；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "company": {
    "word": "company",
    "phonetic": "/'kʌmpəni/",
    "translation": "公司; 陪伴",
    "cloze": {
      "sentence": "He glanced around the assembled ______.",
      "translation": "该语境考查核心词义【公司】在权威语篇中的实际运用。",
      "original": "He glanced around the assembled company."
    },
    "form_confusables": [
      "companion",
      "complain",
      "comply",
      "compact"
    ],
    "semantic_confusables": [
      "corporation",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】company (公司)；【形近易混】companion, complain, comply；【近义搭配】corporation, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compare": {
    "word": "compare",
    "phonetic": "/kəm'pεə/",
    "translation": "比较; 对比",
    "cloze": {
      "sentence": "I've had some difficulties but they were nothing ______ to yours.",
      "translation": "该语境考查核心词义【比较】在权威语篇中的实际运用。",
      "original": "I've had some difficulties but they were nothing compared to yours."
    },
    "form_confusables": [
      "comprise",
      "composure",
      "comparison",
      "compel"
    ],
    "semantic_confusables": [
      "contrast",
      "comparison",
      "change",
      "manage"
    ],
    "notes": "【正解考点】compare (比较)；【形近易混】comprise, composure, comparison；【近义搭配】contrast, comparison, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comparison": {
    "word": "comparison",
    "phonetic": "/kəm'pærisən/",
    "translation": "比较; 对照",
    "cloze": {
      "sentence": "Jane is still quite young, and Fiona seems old by ______.",
      "translation": "该语境考查核心词义【比较】在权威语篇中的实际运用。",
      "original": "Jane is still quite young, and Fiona seems old by comparison."
    },
    "form_confusables": [
      "companion",
      "complain",
      "comprise",
      "compare"
    ],
    "semantic_confusables": [
      "contrast",
      "compare",
      "change",
      "manage"
    ],
    "notes": "【正解考点】comparison (比较)；【形近易混】companion, complain, comprise；【近义搭配】contrast, compare, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compete": {
    "word": "compete",
    "phonetic": "/kəm'pi:t/",
    "translation": "竞争; 比赛",
    "cloze": {
      "sentence": "He welcomed the chance to ______ against professional athletes.",
      "translation": "该语境考查核心词义【竞争】在权威语篇中的实际运用。",
      "original": "He welcomed the chance to compete against professional athletes."
    },
    "form_confusables": [
      "competent",
      "complete",
      "compute",
      "completely"
    ],
    "semantic_confusables": [
      "competition",
      "contest",
      "change",
      "manage"
    ],
    "notes": "【正解考点】compete (竞争)；【形近易混】competent, complete, compute；【近义搭配】competition, contest, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "competent": {
    "word": "competent",
    "phonetic": "/'kɔmpitənt/",
    "translation": "有能力的; 胜任的",
    "cloze": {
      "sentence": "He was not considered ______ to teach seven-year-olds.",
      "translation": "该语境考查核心词义【有能力的】在权威语篇中的实际运用。",
      "original": "He was not considered competent to teach seven-year-olds."
    },
    "form_confusables": [
      "compete",
      "component",
      "complete",
      "competitor"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】competent (有能力的)；【形近易混】compete, component, complete；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "competition": {
    "word": "competition",
    "phonetic": "/,kɔmpi'tiʃən/",
    "translation": "比赛; 竞争",
    "cloze": {
      "sentence": "Fierce ______ exists between schools in the area.",
      "translation": "该语境考查核心词义【比赛】在权威语篇中的实际运用。",
      "original": "Fierce competition exists between schools in the area."
    },
    "form_confusables": [
      "competitor",
      "competitive",
      "composition",
      "combination"
    ],
    "semantic_confusables": [
      "compete",
      "contest",
      "change",
      "manage"
    ],
    "notes": "【正解考点】competition (比赛)；【形近易混】competitor, competitive, composition；【近义搭配】compete, contest, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "competitive": {
    "word": "competitive",
    "phonetic": "/kəm'petitiv/",
    "translation": "有竞争力的; 优惠的",
    "cloze": {
      "sentence": "Investment in research is needed to keep Britain ______ with countries like Japan.",
      "translation": "该语境考查核心词义【有竞争力的】在权威语篇中的实际运用。",
      "original": "Investment in research is needed to keep Britain competitive with countries like Japan."
    },
    "form_confusables": [
      "competition",
      "competitor",
      "competent",
      "complete"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】competitive (有竞争力的)；【形近易混】competition, competitor, competent；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "competitor": {
    "word": "competitor",
    "phonetic": "/kəm'petitə/",
    "translation": "竞争对手; 比赛者",
    "cloze": {
      "sentence": "Asian market He is the oldest ______ in this year's London Marathon.",
      "translation": "该语境考查核心词义【竞争对手】在权威语篇中的实际运用。",
      "original": "Asian market He is the oldest competitor in this year's London Marathon."
    },
    "form_confusables": [
      "competition",
      "competitive",
      "competent",
      "compete"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】competitor (竞争对手)；【形近易混】competition, competitive, competent；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "complain": {
    "word": "complain",
    "phonetic": "/kəm'plein/",
    "translation": "抱怨; 投诉",
    "cloze": {
      "sentence": "He really has no right to ______.",
      "translation": "该语境考查核心词义【抱怨】在权威语篇中的实际运用。",
      "original": "He really has no right to complain."
    },
    "form_confusables": [
      "complaint",
      "companion",
      "company",
      "comparison"
    ],
    "semantic_confusables": [
      "complaint",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】complain (抱怨)；【形近易混】complaint, companion, company；【近义搭配】complaint, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "complaint": {
    "word": "complaint",
    "phonetic": "/kəm'pleint/",
    "translation": "抱怨; 诉苦",
    "cloze": {
      "sentence": "He has a minor skin ______.",
      "translation": "该语境考查核心词义【抱怨】在权威语篇中的实际运用。",
      "original": "He has a minor skin complaint."
    },
    "form_confusables": [
      "complain",
      "companion",
      "complexity",
      "compact"
    ],
    "semantic_confusables": [
      "complain",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】complaint (抱怨)；【形近易混】complain, companion, complexity；【近义搭配】complain, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "complete": {
    "word": "complete",
    "phonetic": "/symbols/",
    "translation": "完整的; 完成",
    "cloze": {
      "sentence": "The book survives ______ only in the second edition of 1533.",
      "translation": "该语境考查核心词义【完整的】在权威语篇中的实际运用。",
      "original": "The book survives complete only in the second edition of 1533."
    },
    "form_confusables": [
      "completely",
      "compete",
      "complex",
      "complexity"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】complete (完整的)；【形近易混】completely, compete, complex；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "completely": {
    "word": "completely",
    "phonetic": "/kəm'pli:tli/",
    "translation": "完全地; 彻底地",
    "cloze": {
      "sentence": "It was ______ different from how I had imagined it.",
      "translation": "该语境考查核心词义【完全地】在权威语篇中的实际运用。",
      "original": "It was completely different from how I had imagined it."
    },
    "form_confusables": [
      "complete",
      "complexity",
      "compete",
      "complex"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】completely (完全地)；【形近易混】complete, complexity, compete；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "complex": {
    "word": "complex",
    "phonetic": "/'kɔmpleks/",
    "translation": "复杂的; 综合体",
    "cloze": {
      "sentence": "She managed to put over a fairly ______ argument in a brilliantly simple way.",
      "translation": "该语境考查核心词义【复杂的】在权威语篇中的实际运用。",
      "original": "She managed to put over a fairly complex argument in a brilliantly simple way."
    },
    "form_confusables": [
      "complexity",
      "complete",
      "comply",
      "completely"
    ],
    "semantic_confusables": [
      "complicated",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】complex (复杂的)；【形近易混】complexity, complete, comply；【近义搭配】complicated, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "complexity": {
    "word": "complexity",
    "phonetic": "/kəm'pleksiti/",
    "translation": "复杂性; 错综",
    "cloze": {
      "sentence": "Only now did he understand the full ______ of the problem.",
      "translation": "该语境考查核心词义【复杂性】在权威语篇中的实际运用。",
      "original": "Only now did he understand the full complexity of the problem."
    },
    "form_confusables": [
      "complex",
      "completely",
      "complete",
      "complaint"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】complexity (复杂性)；【形近易混】complex, completely, complete；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "complicated": {
    "word": "complicated",
    "phonetic": "/symbols/",
    "translation": "复杂的; 难懂的",
    "cloze": {
      "sentence": "The world of finance is fiendishly ______.",
      "translation": "该语境考查核心词义【复杂的】在权威语篇中的实际运用。",
      "original": "The world of finance is fiendishly complicated."
    },
    "form_confusables": [
      "complete",
      "complaint",
      "communicate",
      "completely"
    ],
    "semantic_confusables": [
      "complex",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】complicated (复杂的)；【形近易混】complete, complaint, communicate；【近义搭配】complex, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "component": {
    "word": "component",
    "phonetic": "/kəm'pəunənt/",
    "translation": "成分; 组成部分",
    "cloze": {
      "sentence": "Our software is becoming a standard ______ of many computer systems.",
      "translation": "该语境考查核心词义【成分】在权威语篇中的实际运用。",
      "original": "Our software is becoming a standard component of many computer systems."
    },
    "form_confusables": [
      "competent",
      "compose",
      "compounded",
      "comment"
    ],
    "semantic_confusables": [
      "composition",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】component (成分)；【形近易混】competent, compose, compounded；【近义搭配】composition, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compose": {
    "word": "compose",
    "phonetic": "/kəm'pəuz/",
    "translation": "组成; 作曲",
    "cloze": {
      "sentence": "Ten men ______ the committee.",
      "translation": "该语境考查核心词义【组成】在权威语篇中的实际运用。",
      "original": "Ten men compose the committee."
    },
    "form_confusables": [
      "composure",
      "compromise",
      "comprise",
      "component"
    ],
    "semantic_confusables": [
      "comprise",
      "consist",
      "constitute",
      "change"
    ],
    "notes": "【正解考点】compose (组成)；【形近易混】composure, compromise, comprise；【近义搭配】comprise, consist, constitute。注意在语境中甄别固定搭配与语义内涵。"
  },
  "composition": {
    "word": "composition",
    "phonetic": "/,kɔmpə'ziʃən/",
    "translation": "作文; 成分",
    "cloze": {
      "sentence": "Has household ______ changed in the last decade?",
      "translation": "该语境考查核心词义【作文】在权威语篇中的实际运用。",
      "original": "Has household composition changed in the last decade?"
    },
    "form_confusables": [
      "competition",
      "combination",
      "companion",
      "consumption"
    ],
    "semantic_confusables": [
      "component",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】composition (作文)；【形近易混】competition, combination, companion；【近义搭配】component, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comprehensive": {
    "word": "comprehensive",
    "phonetic": "/,kɔmpri'hensiv/",
    "translation": "全面的; 综合的",
    "cloze": {
      "sentence": "The list is fairly ______.",
      "translation": "该语境考查核心词义【全面的】在权威语篇中的实际运用。",
      "original": "The list is fairly comprehensive."
    },
    "form_confusables": [
      "apprehensive",
      "competitive",
      "compromise",
      "conservative"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】comprehensive (全面的)；【形近易混】apprehensive, competitive, compromise；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comprise": {
    "word": "comprise",
    "phonetic": "/kəm'praiz/",
    "translation": "包含; 由...组成",
    "cloze": {
      "sentence": "Older people ______ a large proportion of those living in poverty.",
      "translation": "该语境考查核心词义【包含】在真实例句中的精准搭配。",
      "original": "Older people comprise a large proportion of those living in poverty."
    },
    "form_confusables": [
      "compromise",
      "compose",
      "compare",
      "comparison"
    ],
    "semantic_confusables": [
      "involve",
      "compose",
      "consist",
      "constitute"
    ],
    "notes": "【正解考点】comprise (包含)；【形近易混】compromise, compose, compare；【近义搭配】involve, compose, consist。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compromise": {
    "word": "compromise",
    "phonetic": "/'kɔmprəmaiz/",
    "translation": "妥协; 折中",
    "cloze": {
      "sentence": "After much discussion, she offered a ______.",
      "translation": "该语境考查核心词义【妥协】在权威语篇中的实际运用。",
      "original": "After much discussion, she offered a compromise."
    },
    "form_confusables": [
      "comprise",
      "compose",
      "compare",
      "comparison"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】compromise (妥协)；【形近易混】comprise, compose, compare；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compute": {
    "word": "compute",
    "phonetic": "/kəm'pju:t/",
    "translation": "计算; 估算",
    "cloze": {
      "sentence": "These measurements can be used to ______ the average size.",
      "translation": "该语境考查核心词义【计算】在权威语篇中的实际运用。",
      "original": "These measurements can be used to compute the average size."
    },
    "form_confusables": [
      "computer",
      "compete",
      "complete",
      "composure"
    ],
    "semantic_confusables": [
      "assess",
      "count",
      "change",
      "manage"
    ],
    "notes": "【正解考点】compute (计算)；【形近易混】computer, compete, complete；【近义搭配】assess, count, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "computer": {
    "word": "computer",
    "phonetic": "/kəm'pju:tə/",
    "translation": "计算机; 电脑",
    "cloze": {
      "sentence": "A ______ model is used to predict forces affecting the aircraft in flight.",
      "translation": "该语境考查核心词义【计算机】在权威语篇中的实际运用。",
      "original": "A computer model is used to predict forces affecting the aircraft in flight."
    },
    "form_confusables": [
      "compute",
      "compete",
      "counter",
      "complete"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】computer (计算机)；【形近易混】compute, compete, counter；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concentrate": {
    "word": "concentrate",
    "phonetic": "/'kɔnsəntreit/",
    "translation": "集中; 浓缩",
    "cloze": {
      "sentence": "I tried to work but I found I couldn't ______.",
      "translation": "该语境考查核心词义【集中】在权威语篇中的实际运用。",
      "original": "I tried to work but I found I couldn't concentrate."
    },
    "form_confusables": [
      "concentration",
      "concrete",
      "concerned",
      "contrast"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】concentrate (集中)；【形近易混】concentration, concrete, concerned；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concentration": {
    "word": "concentration",
    "phonetic": "/,kɔnsən'treiʃən/",
    "translation": "专心; 专注",
    "cloze": {
      "sentence": "Don's voice from outside broke my ______.",
      "translation": "该语境考查核心词义【专心】在权威语篇中的实际运用。",
      "original": "Don's voice from outside broke my concentration."
    },
    "form_confusables": [
      "concentrate",
      "conversation",
      "consideration",
      "convention"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】concentration (专心)；【形近易混】concentrate, conversation, consideration；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concept": {
    "word": "concept",
    "phonetic": "/'kɔnsept/",
    "translation": "概念; 观念",
    "cloze": {
      "sentence": "Culture is a fairly nebulous ______.",
      "translation": "该语境考查核心词义【概念】在权威语篇中的实际运用。",
      "original": "Culture is a fairly nebulous concept."
    },
    "form_confusables": [
      "concert",
      "concrete",
      "concern",
      "convert"
    ],
    "semantic_confusables": [
      "notion",
      "idea",
      "thought",
      "theory"
    ],
    "notes": "【正解考点】concept (概念)；【形近易混】concert, concrete, concern；【近义搭配】notion, idea, thought。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concern": {
    "word": "concern",
    "phonetic": "/kən'sə:n/",
    "translation": "关心; 涉及; 担忧",
    "cloze": {
      "sentence": "Don't interfere in what doesn't ______ you.",
      "translation": "该语境考查核心词义【关心】在权威语篇中的实际运用。",
      "original": "Don't interfere in what doesn't concern you."
    },
    "form_confusables": [
      "concerned",
      "concert",
      "concept",
      "corner"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】concern (关心)；【形近易混】concerned, concert, concept；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concerned": {
    "word": "concerned",
    "phonetic": "/kən'sə:nd/",
    "translation": "关心的; 担心的",
    "cloze": {
      "sentence": "Mathematics is ______ essentially with understanding abstract concepts.",
      "translation": "该语境考查核心词义【关心的】在权威语篇中的实际运用。",
      "original": "Mathematics is concerned essentially with understanding abstract concepts."
    },
    "form_confusables": [
      "concern",
      "concert",
      "concentrate",
      "concrete"
    ],
    "semantic_confusables": [
      "apprehensive",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】concerned (关心的)；【形近易混】concern, concert, concentrate；【近义搭配】apprehensive, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concert": {
    "word": "concert",
    "phonetic": "/kən'sə:t; 'kɔnsə:t/",
    "translation": "音乐会; 协同",
    "cloze": {
      "sentence": "He will be giving his farewell ______ as Music Director of the Ulster Orchestra.",
      "translation": "该语境考查核心词义【音乐会】在权威语篇中的实际运用。",
      "original": "He will be giving his farewell concert as Music Director of the Ulster Orchestra."
    },
    "form_confusables": [
      "concern",
      "concept",
      "convert",
      "concerned"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】concert (音乐会)；【形近易混】concern, concept, convert；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conclude": {
    "zh": "推断出；断定；总结终止",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "The delegates gathered this afternoon to ______ the trade negotiation.",
      "translation": "代表们今天下午聚集在一起以达成并结束本次贸易谈判。"
    },
    "form_confusables": [
      {
        "word": "conclude",
        "zh": "终结达成"
      },
      {
        "word": "include",
        "zh": "包含包括"
      },
      {
        "word": "exclude",
        "zh": "排除排除在外"
      },
      {
        "word": "preclude",
        "zh": "妨碍阻止"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conclude",
        "zh": "敲定结束谈判"
      },
      {
        "word": "finalize",
        "zh": "最终确定细节"
      },
      {
        "word": "finish",
        "zh": "完成完毕"
      },
      {
        "word": "settle",
        "zh": "调停达成协议"
      }
    ],
    "notes": "【搭配考点】conclude negotiations/agreements 达成/终结正式协议；【形近辨析】include (包含)，exclude (排除)，preclude (阻止)；【近义辨析】finalize 侧重敲定最终细节，settle 侧重平息争议达成一致。",
    "word": "conclude",
    "translation": "推断出；断定；总结终止",
    "phonetic": "/conclude/"
  },
  "conclusion": {
    "word": "conclusion",
    "phonetic": "/kən'klu:ʒən/",
    "translation": "结论; 结尾",
    "cloze": {
      "sentence": "How did he reach this startling ______?",
      "translation": "该语境考查核心词义【结论】在权威语篇中的实际运用。",
      "original": "How did he reach this startling conclusion?"
    },
    "form_confusables": [
      "confusion",
      "collision",
      "conversion",
      "conclude"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conclusion (结论)；【形近易混】confusion, collision, conversion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "concrete": {
    "word": "concrete",
    "phonetic": "/kən'kri:t; 'kɔnkri:t/",
    "translation": "具体的; 混凝土",
    "cloze": {
      "sentence": "By the end of the meeting some fairly ______ proposals had been put forward.",
      "translation": "该语境考查核心词义【具体的】在权威语篇中的实际运用。",
      "original": "By the end of the meeting some fairly concrete proposals had been put forward."
    },
    "form_confusables": [
      "concept",
      "concert",
      "concentrate",
      "concerned"
    ],
    "semantic_confusables": [
      "specific",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】concrete (具体的)；【形近易混】concept, concert, concentrate；【近义搭配】specific, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "condition": {
    "word": "condition",
    "phonetic": "/kən'diʃən/",
    "translation": "条件; 状态",
    "cloze": {
      "sentence": "All three babies were born with an incurable heart ______.",
      "translation": "该语境考查核心词义【条件】在权威语篇中的实际运用。",
      "original": "All three babies were born with an incurable heart condition."
    },
    "form_confusables": [
      "coalition",
      "constitution",
      "contribution",
      "connection"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】condition (条件)；【形近易混】coalition, constitution, contribution；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conduct": {
    "word": "conduct",
    "phonetic": "/'kɔndʌkt; kən'dʌkt/",
    "translation": "指导; 实施; 行为",
    "cloze": {
      "sentence": "We regularly ______ safety inspections.",
      "translation": "该语境考查核心词义【指导】在权威语篇中的实际运用。",
      "original": "We regularly conduct safety inspections."
    },
    "form_confusables": [
      "construct",
      "connect",
      "contact",
      "concept"
    ],
    "semantic_confusables": [
      "deed",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】conduct (指导)；【形近易混】construct, connect, contact；【近义搭配】deed, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conference": {
    "word": "conference",
    "phonetic": "/symbols/",
    "translation": "会议; 研讨会",
    "cloze": {
      "sentence": "Few reporters turned up to his press ______ about low pay.",
      "translation": "该语境考查核心词义【会议】在权威语篇中的实际运用。",
      "original": "Few reporters turned up to his press conference about low pay."
    },
    "form_confusables": [
      "confidence",
      "consequence",
      "convenience",
      "conscience"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conference (会议)；【形近易混】confidence, consequence, convenience；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confess": {
    "word": "confess",
    "phonetic": "/kən'fes/",
    "translation": "坦白; 承认",
    "cloze": {
      "sentence": "I must ______ that I didn't have much faith in her ideas.",
      "translation": "该语境考查核心词义【坦白】在权威语篇中的实际运用。",
      "original": "I must confess that I didn't have much faith in her ideas."
    },
    "form_confusables": [
      "congress",
      "consensus",
      "confine",
      "confuse"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confess (坦白)；【形近易混】congress, consensus, confine；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confidence": {
    "word": "confidence",
    "phonetic": "/'kɔnfidəns/",
    "translation": "信心; 信任",
    "cloze": {
      "sentence": "A lot of children are lacking in ______.",
      "translation": "该语境考查核心词义【信心】在权威语篇中的实际运用。",
      "original": "A lot of children are lacking in confidence."
    },
    "form_confusables": [
      "confident",
      "coincidence",
      "conference",
      "confidential"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confidence (信心)；【形近易混】confident, coincidence, conference；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confident": {
    "word": "confident",
    "phonetic": "/'kɔnfidənt/",
    "translation": "确信的; 有信心的",
    "cloze": {
      "sentence": "Going to university has made her more ______.",
      "translation": "该语境考查核心词义【确信的】在权威语篇中的实际运用。",
      "original": "Going to university has made her more confident."
    },
    "form_confusables": [
      "confidential",
      "confidence",
      "continent",
      "confine"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confident (确信的)；【形近易混】confidential, confidence, continent；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confine": {
    "word": "confine",
    "phonetic": "/kən'fain; 'kɔnfain/",
    "translation": "限制; 禁闭",
    "cloze": {
      "sentence": "Let's ______ our attention to the problem of illegal drugs.",
      "translation": "该语境考查核心词义【限制】在权威语篇中的实际运用。",
      "original": "Let's confine our attention to the problem of illegal drugs."
    },
    "form_confusables": [
      "confidence",
      "confident",
      "continue",
      "convince"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confine (限制)；【形近易混】confidence, confident, continue；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confirm": {
    "word": "confirm",
    "phonetic": "/kən'fə:m/",
    "translation": "确认; 证实",
    "cloze": {
      "sentence": "I wanted to find a way to experimentally ______ the results.",
      "translation": "该语境考查核心词义【确认】在权威语篇中的实际运用。",
      "original": "I wanted to find a way to experimentally confirm the results."
    },
    "form_confusables": [
      "conform",
      "confine",
      "conflict",
      "confront"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confirm (确认)；【形近易混】conform, confine, conflict；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conflict": {
    "word": "conflict",
    "phonetic": "/kən'flikt; 'kɔnflikt/",
    "translation": "冲突; 争论",
    "cloze": {
      "sentence": "His work brought him into ______ with more conventional scientists.",
      "translation": "该语境考查核心词义【冲突】在权威语篇中的实际运用。",
      "original": "His work brought him into conflict with more conventional scientists."
    },
    "form_confusables": [
      "confident",
      "conduct",
      "confidence",
      "confine"
    ],
    "semantic_confusables": [
      "controversy",
      "clash",
      "collision",
      "change"
    ],
    "notes": "【正解考点】conflict (冲突)；【形近易混】confident, conduct, confidence；【近义搭配】controversy, clash, collision。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confront": {
    "zh": "面对；正视；迎面遭遇",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "Leaders must be willing to ______ difficult challenges rather than avoid them.",
      "translation": "领导者必须愿意直面艰难挑战，而不是逃避它们。"
    },
    "form_confusables": [
      {
        "word": "confront",
        "zh": "正视面对"
      },
      {
        "word": "conform",
        "zh": "符合一致"
      },
      {
        "word": "comfort",
        "zh": "安慰舒适"
      },
      {
        "word": "frontier",
        "zh": "边境国界"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confront",
        "zh": "正视直面危机"
      },
      {
        "word": "face",
        "zh": "面对面临"
      },
      {
        "word": "encounter",
        "zh": "邂逅遭遇"
      },
      {
        "word": "tackle",
        "zh": "着手处理对付"
      }
    ],
    "notes": "【搭配考点】confront challenges/issues 正视并迎面解决挑战；【形近辨析】conform (顺从/一致)，comfort (安慰)，frontier (边境)；【近义辨析】tackle 侧重着手对付，face 较口语化。",
    "word": "confront",
    "translation": "面对；正视；迎面遭遇",
    "phonetic": "/confront/"
  },
  "confuse": {
    "word": "confuse",
    "phonetic": "/kən'fju:z/",
    "translation": "使困惑; 混淆",
    "cloze": {
      "sentence": "I sometimes ______ Jane with her sister.",
      "translation": "该语境考查核心词义【使困惑】在权威语篇中的实际运用。",
      "original": "I sometimes confuse Jane with her sister."
    },
    "form_confusables": [
      "confusion",
      "confine",
      "course",
      "confess"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confuse (使困惑)；【形近易混】confusion, confine, course；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confusion": {
    "word": "confusion",
    "phonetic": "/kən'fju:ʒən/",
    "translation": "困惑; 混乱",
    "cloze": {
      "sentence": "His expression was one of pure ______.",
      "translation": "该语境考查核心词义【困惑】在权威语篇中的实际运用。",
      "original": "His expression was one of pure confusion."
    },
    "form_confusables": [
      "conclusion",
      "confuse",
      "conversion",
      "cousin"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confusion (困惑)；【形近易混】conclusion, confuse, conversion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "connect": {
    "word": "connect",
    "phonetic": "/kə'nekt/",
    "translation": "连接; 关联",
    "cloze": {
      "sentence": "The police were looking for evidence to ______ him with the crime.",
      "translation": "该语境考查核心词义【连接】在权威语篇中的实际运用。",
      "original": "The police were looking for evidence to connect him with the crime."
    },
    "form_confusables": [
      "connection",
      "continent",
      "conduct",
      "contact"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】connect (连接)；【形近易混】connection, continent, conduct；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "connection": {
    "word": "connection",
    "phonetic": "/kə'nekʃən/",
    "translation": "业务联系; 客户关系",
    "cloze": {
      "sentence": "Anna helped Rachel re-establish her ______ with her brother.",
      "translation": "该语境考查核心词义【业务联系】在权威语篇中的实际运用。",
      "original": "Anna helped Rachel re-establish her connection with her brother."
    },
    "form_confusables": [
      "connect",
      "collection",
      "convention",
      "correction"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】connection (业务联系)；【形近易混】connect, collection, convention；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conscience": {
    "word": "conscience",
    "phonetic": "/'kɔnʃəns/",
    "translation": "良心; 道德心",
    "cloze": {
      "sentence": "After the meal she spent a week dieting to salve her ______.",
      "translation": "该语境考查核心词义【良心】在权威语篇中的实际运用。",
      "original": "After the meal she spent a week dieting to salve her conscience."
    },
    "form_confusables": [
      "coincidence",
      "confidence",
      "consequence",
      "convenience"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conscience (良心)；【形近易混】coincidence, confidence, consequence；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conscious": {
    "word": "conscious",
    "phonetic": "/'kɔnʃəs/",
    "translation": "有意识的; 神志清醒的",
    "cloze": {
      "sentence": "Erin was only partially ______.",
      "translation": "该语境考查核心词义【有意识的】在权威语篇中的实际运用。",
      "original": "Erin was only partially conscious."
    },
    "form_confusables": [
      "continuous",
      "consist",
      "consensus",
      "conscience"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conscious (有意识的)；【形近易混】continuous, consist, consensus；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consciousness": {
    "word": "consciousness",
    "phonetic": "/'kɔnʃəsnis/",
    "translation": "意识; 知觉",
    "cloze": {
      "sentence": "He claims that it's a form of false ______ for working people to vote.",
      "translation": "该语境考查核心词义【意识】在权威语篇中的实际运用。",
      "original": "He claims that it's a form of false consciousness for working people to vote."
    },
    "form_confusables": [
      "conscience",
      "construction",
      "consistent",
      "constitute"
    ],
    "semantic_confusables": [
      "realization",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】consciousness (意识)；【形近易混】conscience, construction, consistent；【近义搭配】realization, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consequence": {
    "word": "consequence",
    "phonetic": "/'kɔnsi,kwəns/",
    "translation": "后果; 结果",
    "cloze": {
      "sentence": "Hundreds of people lost their jobs as a direct ______ of the merger.",
      "translation": "该语境考查核心词义【后果】在权威语篇中的实际运用。",
      "original": "Hundreds of people lost their jobs as a direct consequence of the merger."
    },
    "form_confusables": [
      "conscience",
      "conference",
      "convenience",
      "confidence"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】consequence (后果)；【形近易混】conscience, conference, convenience；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conservative": {
    "word": "conservative",
    "phonetic": "/kən'sə:vətiv/",
    "translation": "保守的; 守旧的",
    "cloze": {
      "sentence": "Banks are notoriously ______ about their dealings with clients.",
      "translation": "该语境考查核心词义【保守的】在权威语篇中的实际运用。",
      "original": "Banks are notoriously conservative about their dealings with clients."
    },
    "form_confusables": [
      "consideration",
      "concentrate",
      "considerable",
      "cognitive"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conservative (保守的)；【形近易混】consideration, concentrate, considerable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consider": {
    "word": "consider",
    "phonetic": "/kən'sidə/",
    "translation": "考虑; 认为",
    "cloze": {
      "sentence": "I did briefly ______ going on my own.",
      "translation": "该语境考查核心词义【考虑】在权威语篇中的实际运用。",
      "original": "I did briefly consider going on my own."
    },
    "form_confusables": [
      "consumer",
      "conspire",
      "container",
      "consist"
    ],
    "semantic_confusables": [
      "consideration",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】consider (考虑)；【形近易混】consumer, conspire, container；【近义搭配】consideration, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "considerable": {
    "word": "considerable",
    "phonetic": "/kən'sidərəbl/",
    "translation": "相当大的; 重要的",
    "cloze": {
      "sentence": "They can run quite ______ distances.",
      "translation": "该语境考查核心词义【相当大的】在权威语篇中的实际运用。",
      "original": "They can run quite considerable distances."
    },
    "form_confusables": [
      "consideration",
      "conservative",
      "conscience",
      "insufferable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】considerable (相当大的)；【形近易混】consideration, conservative, conscience；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consideration": {
    "word": "consideration",
    "phonetic": "/kən,sidə'reiʃən/",
    "translation": "考虑; 体贴",
    "cloze": {
      "sentence": "After due ______, it was decided not to offer her the job.",
      "translation": "该语境考查核心词义【考虑】在权威语篇中的实际运用。",
      "original": "After due consideration, it was decided not to offer her the job."
    },
    "form_confusables": [
      "consolidation",
      "conversation",
      "considerable",
      "concentration"
    ],
    "semantic_confusables": [
      "consider",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】consideration (考虑)；【形近易混】consolidation, conversation, considerable；【近义搭配】consider, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consist": {
    "word": "consist",
    "phonetic": "/kən'sist/",
    "translation": "由...组成; 在于",
    "cloze": {
      "sentence": "True education does not ______ in simply being taught facts.",
      "translation": "该语境考查核心词义【由...组成】在权威语篇中的实际运用。",
      "original": "True education does not consist in simply being taught facts."
    },
    "form_confusables": [
      "consistent",
      "conscious",
      "consult",
      "communist"
    ],
    "semantic_confusables": [
      "compose",
      "comprise",
      "constitute",
      "change"
    ],
    "notes": "【正解考点】consist (由...组成)；【形近易混】consistent, conscious, consult；【近义搭配】compose, comprise, constitute。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consistent": {
    "word": "consistent",
    "phonetic": "/kən'sistənt/",
    "translation": "一致的; 始终如一的",
    "cloze": {
      "sentence": "Each generation becomes ever more ______ in its thinking.",
      "translation": "该语境考查核心词义【一致的】在权威语篇中的实际运用。",
      "original": "Each generation becomes ever more consistent in its thinking."
    },
    "form_confusables": [
      "consist",
      "content",
      "consignment",
      "constant"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】consistent (一致的)；【形近易混】consist, content, consignment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "constant": {
    "word": "constant",
    "phonetic": "/'kɔnstənt/",
    "translation": "持续的; 恒定的",
    "cloze": {
      "sentence": "All variables except one must be held ______.",
      "translation": "该语境考查核心词义【持续的】在权威语篇中的实际运用。",
      "original": "All variables except one must be held constant."
    },
    "form_confusables": [
      "constantly",
      "consistent",
      "content",
      "contact"
    ],
    "semantic_confusables": [
      "ongoing",
      "continuous",
      "change",
      "manage"
    ],
    "notes": "【正解考点】constant (持续的)；【形近易混】constantly, consistent, content；【近义搭配】ongoing, continuous, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "constantly": {
    "word": "constantly",
    "phonetic": "/symbols/",
    "translation": "不断地; 时常",
    "cloze": {
      "sentence": "Heat the sauce, stirring ______.",
      "translation": "该语境考查核心词义【不断地】在真实例句中的精准搭配。",
      "original": "Heat the sauce, stirring constantly."
    },
    "form_confusables": [
      "constant",
      "consistent",
      "contact",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】constantly (不断地)；【形近易混】constant, consistent, contact；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "constitute": {
    "word": "constitute",
    "phonetic": "/'kɔnstitju:t/",
    "translation": "构成; 组成",
    "cloze": {
      "sentence": "The census ______ the principal source of official statistics.",
      "translation": "该语境考查核心词义【构成】在权威语篇中的实际运用。",
      "original": "The census constitutes the principal source of official statistics."
    },
    "form_confusables": [
      "constitution",
      "contribute",
      "continue",
      "consume"
    ],
    "semantic_confusables": [
      "compose",
      "comprise",
      "consist",
      "change"
    ],
    "notes": "【正解考点】constitute (构成)；【形近易混】constitution, contribute, continue；【近义搭配】compose, comprise, consist。注意在语境中甄别固定搭配与语义内涵。"
  },
  "constitution": {
    "word": "constitution",
    "phonetic": "/,kɔnsti'tju:ʃən/",
    "translation": "宪法; 体质",
    "cloze": {
      "sentence": "Britain does not have a written ______.",
      "translation": "该语境考查核心词义【宪法】在权威语篇中的实际运用。",
      "original": "Britain does not have a written constitution."
    },
    "form_confusables": [
      "constitute",
      "construction",
      "contribution",
      "consumption"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】constitution (宪法)；【形近易混】constitute, construction, contribution；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "construct": {
    "word": "construct",
    "phonetic": "/kən'strʌkt/",
    "translation": "建造; 构筑",
    "cloze": {
      "sentence": "You must learn how to ______ a logical argument.",
      "translation": "该语境考查核心词义【建造】在真实例句中的精准搭配。",
      "original": "You must learn how to construct a logical argument."
    },
    "form_confusables": [
      "construction",
      "contract",
      "instruct",
      "constitute"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】construct (建造)；【形近易混】construction, contract, instruct；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "construction": {
    "word": "construction",
    "phonetic": "/kən'strʌkʃən/",
    "translation": "建设; 建筑物",
    "cloze": {
      "sentence": "It has a basic ______ of brick under a tiled roof.",
      "translation": "该语境考查核心词义【建设】在权威语篇中的实际运用。",
      "original": "It has a basic construction of brick under a tiled roof."
    },
    "form_confusables": [
      "construct",
      "constitution",
      "contribution",
      "contradiction"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】construction (建设)；【形近易混】construct, constitution, contribution；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consult": {
    "word": "consult",
    "phonetic": "/kɔn'sʌlt; 'kɔnsʌlt/",
    "translation": "咨询; 请教",
    "cloze": {
      "sentence": "If you're not sure which plug to buy, ______ the manual.",
      "translation": "该语境考查核心词义【咨询】在权威语篇中的实际运用。",
      "original": "If you're not sure which plug to buy, consult the manual."
    },
    "form_confusables": [
      "construct",
      "consume",
      "consist",
      "consumer"
    ],
    "semantic_confusables": [
      "counsel",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】consult (咨询)；【形近易混】construct, consume, consist；【近义搭配】counsel, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consume": {
    "word": "consume",
    "phonetic": "/kən'sju:m/",
    "translation": "消耗; 消费",
    "cloze": {
      "sentence": "Bureaucracy ______ money that could have been spent on public services.",
      "translation": "该语境考查核心词义【消耗】在权威语篇中的实际运用。",
      "original": "Bureaucracy consumes money that could have been spent on public services."
    },
    "form_confusables": [
      "consumer",
      "consult",
      "constitute",
      "confuse"
    ],
    "semantic_confusables": [
      "consumption",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】consume (消耗)；【形近易混】consumer, consult, constitute；【近义搭配】consumption, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consumer": {
    "word": "consumer",
    "phonetic": "/kən'sju:mə/",
    "translation": "消费者; 用户",
    "cloze": {
      "sentence": "Economists forecast that falling ______ confidence will cut into household purchases.",
      "translation": "该语境考查核心词义【消费者】在权威语篇中的实际运用。",
      "original": "Economists forecast that falling consumer confidence will cut into household purchases."
    },
    "form_confusables": [
      "consume",
      "consider",
      "consumption",
      "consult"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】consumer (消费者)；【形近易混】consume, consider, consumption；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consumption": {
    "word": "consumption",
    "phonetic": "/kən'sʌmpʃən/",
    "translation": "消费; 消耗",
    "cloze": {
      "sentence": "Doctors say that children need to increase their ______ of fruit and vegetables.",
      "translation": "该语境考查核心词义【消费】在权威语篇中的实际运用。",
      "original": "Doctors say that children need to increase their consumption of fruit and vegetables."
    },
    "form_confusables": [
      "constitution",
      "construction",
      "corruption",
      "competition"
    ],
    "semantic_confusables": [
      "consume",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】consumption (消费)；【形近易混】constitution, construction, corruption；【近义搭配】consume, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contact": {
    "word": "contact",
    "phonetic": "/'kɔntækt; kən'tækt/",
    "translation": "联系; 接触",
    "cloze": {
      "sentence": "For a brief moment their lips were in ______.",
      "translation": "该语境考查核心词义【联系】在权威语篇中的实际运用。",
      "original": "For a brief moment their lips were in contact."
    },
    "form_confusables": [
      "contract",
      "contrast",
      "constant",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】contact (联系)；【形近易混】contract, contrast, constant；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contain": {
    "word": "contain",
    "phonetic": "/kən'tein/",
    "translation": "包含; 容纳",
    "cloze": {
      "sentence": "He introduced repressive measures to ______ the violence.",
      "translation": "该语境考查核心词义【包含】在权威语篇中的实际运用。",
      "original": "He introduced repressive measures to contain the violence."
    },
    "form_confusables": [
      "container",
      "continue",
      "constant",
      "contact"
    ],
    "semantic_confusables": [
      "involve",
      "comprise",
      "change",
      "manage"
    ],
    "notes": "【正解考点】contain (包含)；【形近易混】container, continue, constant；【近义搭配】involve, comprise, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "container": {
    "word": "container",
    "phonetic": "/kən'teinə/",
    "translation": "容器; 集装箱",
    "cloze": {
      "sentence": "Fill the ______ with water.",
      "translation": "该语境考查核心词义【容器】在权威语篇中的实际运用。",
      "original": "Fill the container with water."
    },
    "form_confusables": [
      "contain",
      "continue",
      "continent",
      "confine"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】container (容器)；【形近易混】contain, continue, continent；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "content": {
    "word": "content",
    "phonetic": "/'kɔntent/",
    "translation": "内容; 满足的",
    "cloze": {
      "sentence": "She seemed quite ______ with the idea.",
      "translation": "该语境考查核心词义【内容】在权威语篇中的实际运用。",
      "original": "She seemed quite content with the idea."
    },
    "form_confusables": [
      "continent",
      "contest",
      "context",
      "consistent"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】content (内容)；【形近易混】continent, contest, context；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contest": {
    "word": "contest",
    "phonetic": "/'kɔntest; kən'test/",
    "translation": "竞赛; 比赛",
    "cloze": {
      "sentence": "Both sides are predicting victory in this close ______.",
      "translation": "该语境考查核心词义【竞赛】在权威语篇中的实际运用。",
      "original": "Both sides are predicting victory in this close contest."
    },
    "form_confusables": [
      "content",
      "context",
      "contrast",
      "continent"
    ],
    "semantic_confusables": [
      "compete",
      "competition",
      "change",
      "manage"
    ],
    "notes": "【正解考点】contest (竞赛)；【形近易混】content, context, contrast；【近义搭配】compete, competition, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "context": {
    "word": "context",
    "phonetic": "/'kɔntekst/",
    "translation": "语境; 背景",
    "cloze": {
      "sentence": "His decision can only be understood in ______.",
      "translation": "该语境考查核心词义【语境】在权威语篇中的实际运用。",
      "original": "His decision can only be understood in context."
    },
    "form_confusables": [
      "content",
      "contest",
      "continent",
      "contact"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】context (语境)；【形近易混】content, contest, continent；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "continent": {
    "word": "continent",
    "phonetic": "/'kɔntinənt/",
    "translation": "大陆; 大洲",
    "cloze": {
      "sentence": "He crossed a whole ______ to find his family.",
      "translation": "该语境考查核心词义【大陆】在权威语篇中的实际运用。",
      "original": "He crossed a whole continent to find his family."
    },
    "form_confusables": [
      "content",
      "continue",
      "contingency",
      "consignment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】continent (大陆)；【形近易混】content, continue, contingency；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "continual": {
    "word": "continual",
    "phonetic": "/kən'tinjuəl/",
    "translation": "持续不断的; 频繁的",
    "cloze": {
      "sentence": "By each hive there was a ______ coming and going of bees.",
      "translation": "该语境考查核心词义【持续不断的】在权威语篇中的实际运用。",
      "original": "By each hive there was a continual coming and going of bees."
    },
    "form_confusables": [
      "continue",
      "continuous",
      "conventional",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】continual (持续不断的)；【形近易混】continue, continuous, conventional；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "continue": {
    "word": "continue",
    "phonetic": "/kən'tinju:/",
    "translation": "继续; 延续",
    "cloze": {
      "sentence": "We need your support to enable us to ______ with our work.",
      "translation": "该语境考查核心词义【继续】在权威语篇中的实际运用。",
      "original": "We need your support to enable us to continue with our work."
    },
    "form_confusables": [
      "continual",
      "continent",
      "continuous",
      "container"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】continue (继续)；【形近易混】continual, continent, continuous；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "continuous": {
    "word": "continuous",
    "phonetic": "/kən'tinjuəs/",
    "translation": "连续的; 持续的",
    "cloze": {
      "sentence": "Awards are based on ______ assessment of course work as well as a final examination.",
      "translation": "该语境考查核心词义【连续的】在权威语篇中的实际运用。",
      "original": "Awards are based on continuous assessment of course work as well as a final examination."
    },
    "form_confusables": [
      "continue",
      "continual",
      "conscious",
      "contain"
    ],
    "semantic_confusables": [
      "ongoing",
      "constant",
      "change",
      "manage"
    ],
    "notes": "【正解考点】continuous (连续的)；【形近易混】continue, continual, conscious；【近义搭配】ongoing, constant, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contract": {
    "word": "contract",
    "phonetic": "/'kɔntrækt; kən'trækt/",
    "translation": "合同; 契约; 收缩",
    "cloze": {
      "sentence": "By using cheaper materials, the company has broken the terms of its ______.",
      "translation": "该语境考查核心词义【合同】在权威语篇中的实际运用。",
      "original": "By using cheaper materials, the company has broken the terms of its contract."
    },
    "form_confusables": [
      "contact",
      "contrast",
      "construct",
      "contrary"
    ],
    "semantic_confusables": [
      "compact",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】contract (合同)；【形近易混】contact, contrast, construct；【近义搭配】compact, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contradiction": {
    "word": "contradiction",
    "phonetic": "/,kɔntrə'dikʃən/",
    "translation": "矛盾; 抵触",
    "cloze": {
      "sentence": "That's in direct ______ to what he said yesterday.",
      "translation": "该语境考查核心词义【矛盾】在权威语篇中的实际运用。",
      "original": "That's in direct contradiction to what he said yesterday."
    },
    "form_confusables": [
      "contribution",
      "construction",
      "concentration",
      "constitution"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】contradiction (矛盾)；【形近易混】contribution, construction, concentration；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contribute": {
    "word": "contribute",
    "phonetic": "/kən'tribju:t/",
    "translation": "贡献; 捐助",
    "cloze": {
      "sentence": "I would like to ______ to the church restoration fund.",
      "translation": "该语境考查核心词义【贡献】在权威语篇中的实际运用。",
      "original": "I would like to contribute to the church restoration fund."
    },
    "form_confusables": [
      "contribution",
      "constitute",
      "continue",
      "construct"
    ],
    "semantic_confusables": [
      "contribution",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】contribute (贡献)；【形近易混】contribution, constitute, continue；【近义搭配】contribution, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contribution": {
    "word": "contribution",
    "phonetic": "/,kəntri'bju:ʃən/",
    "translation": "贡献; 捐赠",
    "cloze": {
      "sentence": "Each of these writers has made an individual ______ to the discussion.",
      "translation": "该语境考查核心词义【贡献】在权威语篇中的实际运用。",
      "original": "Each of these writers has made an individual contribution to the discussion."
    },
    "form_confusables": [
      "contribute",
      "contradiction",
      "constitution",
      "construction"
    ],
    "semantic_confusables": [
      "contribute",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】contribution (贡献)；【形近易混】contribute, contradiction, constitution；【近义搭配】contribute, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "control": {
    "word": "control",
    "phonetic": "/kən'trəul/",
    "translation": "控制; 支配",
    "cloze": {
      "sentence": "Editors do not exercise ______ over large sections of their newspapers.",
      "translation": "该语境考查核心词义【控制】在权威语篇中的实际运用。",
      "original": "Editors do not exercise control over large sections of their newspapers."
    },
    "form_confusables": [
      "contrary",
      "contrast",
      "contract",
      "cool"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】control (控制)；【形近易混】contrary, contrast, contract；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "controversial": {
    "word": "controversial",
    "phonetic": "/,kɔntrə'və:ʃəl/",
    "translation": "有争议的",
    "cloze": {
      "sentence": "A ______ plan to build a new road has met with protests.",
      "translation": "该语境考查核心词义【有争议的】在权威语篇中的实际运用。",
      "original": "A controversial plan to build a new road has met with protests."
    },
    "form_confusables": [
      "controversy",
      "conversion",
      "conventional",
      "countersign"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】controversial (有争议的)；【形近易混】controversy, conversion, conventional；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "convenience": {
    "word": "convenience",
    "phonetic": "/kən'vi:njəns/",
    "translation": "便利; 方便",
    "cloze": {
      "sentence": "All our holiday chalets include a microwave and food processor for extra ______.",
      "translation": "该语境考查核心词义【便利】在权威语篇中的实际运用。",
      "original": "All our holiday chalets include a microwave and food processor for extra convenience."
    },
    "form_confusables": [
      "convenient",
      "convince",
      "convention",
      "conscience"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】convenience (便利)；【形近易混】convenient, convince, convention；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "convenient": {
    "word": "convenient",
    "phonetic": "/kən'vi:njənt/",
    "translation": "方便的; 便利的",
    "cloze": {
      "sentence": "The house is ______ to downtown.",
      "translation": "该语境考查核心词义【方便的】在权威语篇中的实际运用。",
      "original": "The house is convenient to downtown."
    },
    "form_confusables": [
      "convenience",
      "convention",
      "conventional",
      "confident"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】convenient (方便的)；【形近易混】convenience, convention, conventional；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "convention": {
    "word": "convention",
    "phonetic": "/kən'venʃən/",
    "translation": "习俗; 惯例; 大会",
    "cloze": {
      "sentence": "By ______, planets are named after Roman gods.",
      "translation": "该语境考查核心词义【习俗】在权威语篇中的实际运用。",
      "original": "By convention, planets are named after Roman gods."
    },
    "form_confusables": [
      "conventional",
      "conversation",
      "conversion",
      "connection"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】convention (习俗)；【形近易混】conventional, conversation, conversion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conventional": {
    "word": "conventional",
    "phonetic": "/kən'venʃənəl/",
    "translation": "传统的; 常规的",
    "cloze": {
      "sentence": "He turned out to be a very ______ young man.",
      "translation": "该语境考查核心词义【传统的】在权威语篇中的实际运用。",
      "original": "He turned out to be a very conventional young man."
    },
    "form_confusables": [
      "convention",
      "conversation",
      "continual",
      "conversion"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conventional (传统的)；【形近易混】convention, conversation, continual；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conversation": {
    "word": "conversation",
    "phonetic": "/,kɔnvə'seiʃən/",
    "translation": "对话; 谈话",
    "cloze": {
      "sentence": "A chance ______ led to a brilliant new career for the young student.",
      "translation": "该语境考查核心词义【对话】在权威语篇中的实际运用。",
      "original": "A chance conversation led to a brilliant new career for the young student."
    },
    "form_confusables": [
      "conversion",
      "convention",
      "concentration",
      "consideration"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conversation (对话)；【形近易混】conversion, convention, concentration；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conversion": {
    "word": "conversion",
    "phonetic": "/kən'və:ʃən/",
    "translation": "转换; 转变",
    "cloze": {
      "sentence": "Cheap solar energy ______ has been the dream of scientists since the 1970s.",
      "translation": "该语境考查核心词义【转换】在权威语篇中的实际运用。",
      "original": "Cheap solar energy conversion has been the dream of scientists since the 1970s."
    },
    "form_confusables": [
      "conversation",
      "convention",
      "confusion",
      "convert"
    ],
    "semantic_confusables": [
      "convert",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】conversion (转换)；【形近易混】conversation, convention, confusion；【近义搭配】convert, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "convey": {
    "word": "convey",
    "phonetic": "/kən'vei/",
    "translation": "传达; 运输",
    "cloze": {
      "sentence": "He managed to ______ his enthusiasm to her.",
      "translation": "该语境考查核心词义【传达】在权威语篇中的实际运用。",
      "original": "He managed to convey his enthusiasm to her."
    },
    "form_confusables": [
      "convert",
      "convince",
      "cover",
      "colony"
    ],
    "semantic_confusables": [
      "communicate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】convey (传达)；【形近易混】convert, convince, cover；【近义搭配】communicate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "convince": {
    "word": "convince",
    "phonetic": "/kən'vins/",
    "translation": "说服; 使确信",
    "cloze": {
      "sentence": "She has managed to ______ even the sceptics.",
      "translation": "该语境考查核心词义【说服】在权威语篇中的实际运用。",
      "original": "She has managed to convince even the sceptics."
    },
    "form_confusables": [
      "convenience",
      "confidence",
      "conscience",
      "confine"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】convince (说服)；【形近易混】convenience, confidence, conscience；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cook": {
    "word": "cook",
    "phonetic": "/kuk/",
    "translation": "烹饪; 厨师",
    "cloze": {
      "sentence": "I'll ______ you a special meal for your birthday.",
      "translation": "该语境考查核心词义【烹饪】在权威语篇中的实际运用。",
      "original": "I'll cook you a special meal for your birthday."
    },
    "form_confusables": [
      "cool",
      "book",
      "color",
      "clock"
    ],
    "semantic_confusables": [
      "chef",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】cook (烹饪)；【形近易混】cool, book, color；【近义搭配】chef, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cool": {
    "word": "cool",
    "phonetic": "/ku:l/",
    "translation": "凉爽的; 酷的",
    "cloze": {
      "sentence": "He did his best to appear ______, calm and collected.",
      "translation": "该语境考查核心词义【凉爽的】在权威语篇中的实际运用。",
      "original": "He did his best to appear cool, calm and collected."
    },
    "form_confusables": [
      "cook",
      "control",
      "coal",
      "color"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cool (凉爽的)；【形近易混】cook, control, coal；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cooperate": {
    "word": "cooperate",
    "phonetic": "/kəu'ɔpəreit/",
    "translation": "合作; 配合",
    "cloze": {
      "sentence": "The company has agreed to ______ with the employment survey.",
      "translation": "该语境考查核心词义【合作】在权威语篇中的实际运用。",
      "original": "The company has agreed to cooperate with the employment survey."
    },
    "form_confusables": [
      "cooperation",
      "corporate",
      "compete",
      "collaborate"
    ],
    "semantic_confusables": [
      "collaborate",
      "cooperation",
      "change",
      "manage"
    ],
    "notes": "【正解考点】cooperate (合作)；【形近易混】cooperation, corporate, compete；【近义搭配】collaborate, cooperation, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cooperation": {
    "word": "cooperation",
    "phonetic": "/kəu,ɔpə'reiʃən/",
    "translation": "合作; 协作",
    "cloze": {
      "sentence": "The film was made in ______ with the Board.",
      "translation": "该语境考查核心词义【合作】在权威语篇中的实际运用。",
      "original": "The film was made in cooperation with the Board."
    },
    "form_confusables": [
      "cooperate",
      "corporation",
      "conversation",
      "consideration"
    ],
    "semantic_confusables": [
      "collaborate",
      "cooperate",
      "change",
      "manage"
    ],
    "notes": "【正解考点】cooperation (合作)；【形近易混】cooperate, corporation, conversation；【近义搭配】collaborate, cooperate, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cope": {
    "word": "cope",
    "phonetic": "/kəup/",
    "translation": "应付; 处理",
    "cloze": {
      "sentence": "She had to ______ without any help.",
      "translation": "该语境考查核心词义【应付】在权威语篇中的实际运用。",
      "original": "She had to cope without any help."
    },
    "form_confusables": [
      "scope",
      "couple",
      "copy",
      "compel"
    ],
    "semantic_confusables": [
      "process",
      "handle",
      "change",
      "manage"
    ],
    "notes": "【正解考点】cope (应付)；【形近易混】scope, couple, copy；【近义搭配】process, handle, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "copy": {
    "word": "copy",
    "phonetic": "/'kɔpi/",
    "translation": "复制; 副本",
    "cloze": {
      "sentence": "Charles I's personal ______ of the psalter Copies of the article were circulated to members of the committee.",
      "translation": "该语境考查核心词义【复制】在权威语篇中的实际运用。",
      "original": "Charles I's personal copy of the psalter Copies of the article were circulated to members of the committee."
    },
    "form_confusables": [
      "comply",
      "cope",
      "company",
      "chop"
    ],
    "semantic_confusables": [
      "clone",
      "duplicate",
      "change",
      "manage"
    ],
    "notes": "【正解考点】copy (复制)；【形近易混】comply, cope, company；【近义搭配】clone, duplicate, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "core": {
    "word": "core",
    "phonetic": "/'kɔ:ri:; 'kəuri:/",
    "translation": "核心; 要点",
    "cloze": {
      "sentence": "A new spirit welled up from the very ______ of the nation.",
      "translation": "该语境考查核心词义【核心】在权威语篇中的实际运用。",
      "original": "A new spirit welled up from the very core of the nation."
    },
    "form_confusables": [
      "corner",
      "coarse",
      "course",
      "compare"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】core (核心)；【形近易混】corner, coarse, course；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "corner": {
    "word": "corner",
    "phonetic": "/'kɔ:nə/",
    "translation": "角落; 拐角",
    "cloze": {
      "sentence": "A white van came round the ______.",
      "translation": "该语境考查核心词义【角落】在权威语篇中的实际运用。",
      "original": "A white van came round the corner."
    },
    "form_confusables": [
      "core",
      "counter",
      "cover",
      "convert"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】corner (角落)；【形近易混】core, counter, cover；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "corporate": {
    "word": "corporate",
    "phonetic": "/'kɔ:pərit/",
    "translation": "企业的; 法人的",
    "cloze": {
      "sentence": "The BBC is a ______ body .",
      "translation": "该语境考查核心词义【企业的】在真实例句中的精准搭配。",
      "original": "The BBC is a corporate body ."
    },
    "form_confusables": [
      "corporation",
      "cooperate",
      "collaborate",
      "create"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】corporate (企业的)；【形近易混】corporation, cooperate, collaborate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "corporation": {
    "word": "corporation",
    "phonetic": "/,kɔ:pə'reiʃən/",
    "translation": "公司; 集团",
    "cloze": {
      "sentence": "They entered into a joint partnership with the Chrysler ______.",
      "translation": "该语境考查核心词义【公司】在权威语篇中的实际运用。",
      "original": "They entered into a joint partnership with the Chrysler corporation."
    },
    "form_confusables": [
      "corporate",
      "cooperation",
      "correction",
      "corruption"
    ],
    "semantic_confusables": [
      "company",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】corporation (公司)；【形近易混】corporate, cooperation, correction；【近义搭配】company, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "correct": {
    "word": "correct",
    "phonetic": "/kə'rekt/",
    "translation": "正确的; 改正",
    "cloze": {
      "sentence": "He was an interesting speaker, if not always politically ______ in his views.",
      "translation": "该语境考查核心词义【正确的】在权威语篇中的实际运用。",
      "original": "He was an interesting speaker, if not always politically correct in his views."
    },
    "form_confusables": [
      "correction",
      "corrupt",
      "collect",
      "connect"
    ],
    "semantic_confusables": [
      "correction",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】correct (正确的)；【形近易混】correction, corrupt, collect；【近义搭配】correction, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "correction": {
    "word": "correction",
    "phonetic": "/kə'rekʃən/",
    "translation": "改正; 修正",
    "cloze": {
      "sentence": "The work was returned the student for ______.",
      "translation": "该语境考查核心词义【改正】在权威语篇中的实际运用。",
      "original": "The work was returned the student for correction."
    },
    "form_confusables": [
      "correct",
      "corruption",
      "collection",
      "connection"
    ],
    "semantic_confusables": [
      "correct",
      "amendment",
      "change",
      "manage"
    ],
    "notes": "【正解考点】correction (改正)；【形近易混】correct, corruption, collection；【近义搭配】correct, amendment, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "correspond": {
    "word": "correspond",
    "phonetic": "/,kɔ:ri'spɔnd/",
    "translation": "符合; 相当; 通信",
    "cloze": {
      "sentence": "Their nursery schools ______ roughly to our infant schools.",
      "translation": "该语境考查核心词义【符合】在权威语篇中的实际运用。",
      "original": "Their nursery schools correspond roughly to our infant schools."
    },
    "form_confusables": [
      "correspondent",
      "correction",
      "corruption",
      "correct"
    ],
    "semantic_confusables": [
      "conform",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】correspond (符合)；【形近易混】correspondent, correction, corruption；【近义搭配】conform, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "correspondent": {
    "word": "correspondent",
    "phonetic": "/,kɔ:ri'spɔndənt/",
    "translation": "通讯员; 记者",
    "cloze": {
      "sentence": "Canadian newspaper Now, a report from our Hong Kong ______.",
      "translation": "该语境考查核心词义【通讯员】在权威语篇中的实际运用。",
      "original": "Canadian newspaper Now, a report from our Hong Kong correspondent."
    },
    "form_confusables": [
      "correspond",
      "correction",
      "corruption",
      "convenient"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】correspondent (通讯员)；【形近易混】correspond, correction, corruption；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "corridor": {
    "word": "corridor",
    "phonetic": "/'kɔridɔ:/",
    "translation": "走廊; 通道",
    "cloze": {
      "sentence": "The ______ links the old part of the hospital with the new.",
      "translation": "该语境考查核心词义【走廊】在权威语篇中的实际运用。",
      "original": "The corridor links the old part of the hospital with the new."
    },
    "form_confusables": [
      "correction",
      "corruption",
      "color",
      "consider"
    ],
    "semantic_confusables": [
      "channel",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】corridor (走廊)；【形近易混】correction, corruption, color；【近义搭配】channel, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "corrupt": {
    "word": "corrupt",
    "phonetic": "/kə'rʌpt/",
    "translation": "腐败的; 堕落的",
    "cloze": {
      "sentence": "It was seen as the only way to overthrow a ______ regime.",
      "translation": "该语境考查核心词义【腐败的】在权威语篇中的实际运用。",
      "original": "It was seen as the only way to overthrow a corrupt regime."
    },
    "form_confusables": [
      "corruption",
      "correct",
      "count",
      "court"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】corrupt (腐败的)；【形近易混】corruption, correct, count；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "corruption": {
    "word": "corruption",
    "phonetic": "/kə'rʌpʃən/",
    "translation": "腐败; 贪污",
    "cloze": {
      "sentence": "He strongly attacked ______ and favouritism in the government.",
      "translation": "该语境考查核心词义【腐败】在权威语篇中的实际运用。",
      "original": "He strongly attacked corruption and favouritism in the government."
    },
    "form_confusables": [
      "corrupt",
      "correction",
      "corporation",
      "consumption"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】corruption (腐败)；【形近易混】corrupt, correction, corporation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cost": {
    "word": "cost",
    "phonetic": "/kɔst/",
    "translation": "成本; 花费",
    "cloze": {
      "sentence": "A new computer system has been installed at a ______ of £80 000.",
      "translation": "该语境考查核心词义【成本】在真实例句中的精准搭配。",
      "original": "A new computer system has been installed at a cost of £80 000."
    },
    "form_confusables": [
      "coast",
      "consist",
      "contest",
      "consult"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cost (成本)；【形近易混】coast, consist, contest；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cotton": {
    "word": "cotton",
    "phonetic": "/'kɔtən/",
    "translation": "棉花; 棉布",
    "cloze": {
      "sentence": "He could not ______ with the manager.",
      "translation": "他和经理相处不好。",
      "original": "He could not cotton with the manager."
    },
    "form_confusables": [
      "coalition",
      "common",
      "condition",
      "colony"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cotton (棉花)；【形近易混】coalition, common, condition；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "couch": {
    "word": "couch",
    "phonetic": "/kautʃ/",
    "translation": "沙发; 睡椅",
    "cloze": {
      "sentence": "He was sprawled on the living-room ______ watching TV.",
      "translation": "该语境考查核心词义【沙发】在权威语篇中的实际运用。",
      "original": "He was sprawled on the living-room couch watching TV."
    },
    "form_confusables": [
      "cough",
      "coach",
      "council",
      "conduct"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】couch (沙发)；【形近易混】cough, coach, council；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cough": {
    "word": "cough",
    "phonetic": "/kɔ:f/",
    "translation": "咳嗽; 咳出",
    "cloze": {
      "sentence": "The brandy made her ______ and splutter.",
      "translation": "该语境考查核心词义【咳嗽】在权威语篇中的实际运用。",
      "original": "The brandy made her cough and splutter."
    },
    "form_confusables": [
      "couch",
      "rough",
      "courage",
      "could"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cough (咳嗽)；【形近易混】couch, rough, courage；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "could": {
    "word": "could",
    "phonetic": "/强 kud; 弱 kəd/",
    "translation": "能够; 可以",
    "cloze": {
      "sentence": "I ______ find some useful books in the library.",
      "translation": "该语境考查核心词义【能够】在真实例句中的精准搭配。",
      "original": "I could find some useful books in the library."
    },
    "form_confusables": [
      "couple",
      "cloud",
      "council",
      "counsel"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】could (能够)；【形近易混】couple, cloud, council；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "council": {
    "word": "council",
    "phonetic": "/'kaunsəl/",
    "translation": "理事会; 委员会",
    "cloze": {
      "sentence": "She's on the borough ______.",
      "translation": "该语境考查核心词义【理事会】在权威语篇中的实际运用。",
      "original": "She's on the borough council."
    },
    "form_confusables": [
      "counsel",
      "count",
      "couch",
      "could"
    ],
    "semantic_confusables": [
      "commission",
      "committee",
      "change",
      "manage"
    ],
    "notes": "【正解考点】council (理事会)；【形近易混】counsel, count, couch；【近义搭配】commission, committee, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "counsel": {
    "word": "counsel",
    "phonetic": "/'kaunsəl/",
    "translation": "咨询; 建议",
    "cloze": {
      "sentence": "He instructed his ______ to file bankruptcy proceedings.",
      "translation": "该语境考查核心词义【咨询】在权威语篇中的实际运用。",
      "original": "He instructed his counsel to file bankruptcy proceedings."
    },
    "form_confusables": [
      "council",
      "course",
      "counter",
      "count"
    ],
    "semantic_confusables": [
      "consult",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】counsel (咨询)；【形近易混】council, course, counter；【近义搭配】consult, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "count": {
    "word": "count",
    "phonetic": "/kaunt/",
    "translation": "计算; 数数; 重要",
    "cloze": {
      "sentence": "He can now ______ from one to twenty.",
      "translation": "该语境考查核心词义【计算】在权威语篇中的实际运用。",
      "original": "He can now count from one to twenty."
    },
    "form_confusables": [
      "county",
      "counter",
      "country",
      "court"
    ],
    "semantic_confusables": [
      "compute",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】count (计算)；【形近易混】county, counter, country；【近义搭配】compute, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "counter": {
    "word": "counter",
    "phonetic": "/'kauntə/",
    "translation": "柜台; 反对",
    "cloze": {
      "sentence": "He pushed the money across the ______ to her.",
      "translation": "该语境考查核心词义【柜台】在权威语篇中的实际运用。",
      "original": "He pushed the money across the counter to her."
    },
    "form_confusables": [
      "country",
      "count",
      "county",
      "computer"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】counter (柜台)；【形近易混】country, count, county；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "country": {
    "word": "country",
    "phonetic": "/'kʌntri/",
    "translation": "国家; 乡村",
    "cloze": {
      "sentence": "All goods must be clearly labelled with their ______ of origin.",
      "translation": "该语境考查核心词义【国家】在权威语篇中的实际运用。",
      "original": "All goods must be clearly labelled with their country of origin."
    },
    "form_confusables": [
      "county",
      "counter",
      "count",
      "contrary"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】country (国家)；【形近易混】county, counter, count；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "countryside": {
    "word": "countryside",
    "phonetic": "/'kʌntri,said/",
    "translation": "农村; 乡下",
    "cloze": {
      "sentence": "Castles and churches dot the ______.",
      "translation": "该语境考查核心词义【农村】在权威语篇中的实际运用。",
      "original": "Castles and churches dot the countryside."
    },
    "form_confusables": [
      "countersign",
      "consider",
      "contribute",
      "coincide"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】countryside (农村)；【形近易混】countersign, consider, contribute；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "county": {
    "word": "county",
    "phonetic": "/'kaunti/",
    "translation": "县; 郡",
    "cloze": {
      "sentence": "He was elected MP for his native ______ of Merioneth.",
      "translation": "该语境考查核心词义【县】在权威语篇中的实际运用。",
      "original": "He was elected MP for his native county of Merioneth."
    },
    "form_confusables": [
      "country",
      "count",
      "counter",
      "community"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】county (县)；【形近易混】country, count, counter；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "couple": {
    "word": "couple",
    "phonetic": "/'kʌpl/",
    "translation": "夫妇; 一对",
    "cloze": {
      "sentence": "They make a beautiful ______.",
      "translation": "该语境考查核心词义【夫妇】在权威语篇中的实际运用。",
      "original": "They make a beautiful couple."
    },
    "form_confusables": [
      "cope",
      "could",
      "complex",
      "complete"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】couple (夫妇)；【形近易混】cope, could, complex；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "courage": {
    "word": "courage",
    "phonetic": "/'kʌridʒ/",
    "translation": "勇气; 胆量",
    "cloze": {
      "sentence": "He lacked the ______ to try something new.",
      "translation": "该语境考查核心词义【勇气】在权威语篇中的实际运用。",
      "original": "He lacked the courage to try something new."
    },
    "form_confusables": [
      "coverage",
      "course",
      "court",
      "core"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】courage (勇气)；【形近易混】coverage, course, court；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "course": {
    "word": "course",
    "phonetic": "/kɔ:s/",
    "translation": "课程; 过程; 路线",
    "cloze": {
      "sentence": "He took a crash ______ in Italian.",
      "translation": "该语境考查核心词义【课程】在权威语篇中的实际运用。",
      "original": "He took a crash course in Italian."
    },
    "form_confusables": [
      "coarse",
      "courage",
      "core",
      "court"
    ],
    "semantic_confusables": [
      "process",
      "curriculum",
      "change",
      "manage"
    ],
    "notes": "【正解考点】course (课程)；【形近易混】coarse, courage, core；【近义搭配】process, curriculum, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "court": {
    "word": "court",
    "phonetic": "/kɔ:t/",
    "translation": "法庭; 球场",
    "cloze": {
      "sentence": "Divorce no longer requires a ______ appearance.",
      "translation": "该语境考查核心词义【法庭】在权威语篇中的实际运用。",
      "original": "Divorce no longer requires a court appearance."
    },
    "form_confusables": [
      "count",
      "course",
      "county",
      "courage"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】court (法庭)；【形近易混】count, course, county；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cousin": {
    "word": "cousin",
    "phonetic": "/'kʌzən/",
    "translation": "堂兄弟; 表亲",
    "cloze": {
      "sentence": "Completely out of the blue, she got a letter from her long-lost ______ in New York.",
      "translation": "该语境考查核心词义【堂兄弟】在权威语篇中的实际运用。",
      "original": "Completely out of the blue, she got a letter from her long-lost cousin in New York."
    },
    "form_confusables": [
      "confusion",
      "count",
      "county",
      "course"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cousin (堂兄弟)；【形近易混】confusion, count, county；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cover": {
    "word": "cover",
    "phonetic": "/'kʌvə/",
    "translation": "覆盖; 封面; 涵盖",
    "cloze": {
      "sentence": "He tried to ______ his embarrassment by starting to rub his hands together.",
      "translation": "该语境考查核心词义【覆盖】在权威语篇中的实际运用。",
      "original": "He tried to cover his embarrassment by starting to rub his hands together."
    },
    "form_confusables": [
      "coverage",
      "convert",
      "corner",
      "clever"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cover (覆盖)；【形近易混】coverage, convert, corner；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "coverage": {
    "word": "coverage",
    "phonetic": "/'kʌvəridʒ/",
    "translation": "覆盖范围; 新闻报道",
    "cloze": {
      "sentence": "Media ______ of the march focused on the few fights that broke out.",
      "translation": "该语境考查核心词义【覆盖范围】在权威语篇中的实际运用。",
      "original": "Media coverage of the march focused on the few fights that broke out."
    },
    "form_confusables": [
      "cover",
      "courage",
      "leverage",
      "colleague"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】coverage (覆盖范围)；【形近易混】cover, courage, leverage；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crack": {
    "word": "crack",
    "phonetic": "/kræk/",
    "translation": "破裂; 裂缝",
    "cloze": {
      "sentence": "We need some more solid evidence if we're going to ______ the case.",
      "translation": "该语境考查核心词义【破裂】在权威语篇中的实际运用。",
      "original": "We need some more solid evidence if we're going to crack the case."
    },
    "form_confusables": [
      "crawl",
      "craft",
      "crash",
      "crazy"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crack (破裂)；【形近易混】crawl, craft, crash；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "craft": {
    "word": "craft",
    "phonetic": "/krɑ:ft; kræft/",
    "translation": "工艺; 手艺; 飞船",
    "cloze": {
      "sentence": "Sheep shearing is a highly skilled ______.",
      "translation": "该语境考查核心词义【工艺】在权威语篇中的实际运用。",
      "original": "Sheep shearing is a highly skilled craft."
    },
    "form_confusables": [
      "create",
      "crawl",
      "crack",
      "crash"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】craft (工艺)；【形近易混】create, crawl, crack；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crash": {
    "word": "crash",
    "phonetic": "/kræʃ/",
    "translation": "碰撞; 坠毁; 暴跌",
    "cloze": {
      "sentence": "He had survived a plane ______.",
      "translation": "该语境考查核心词义【碰撞】在权威语篇中的实际运用。",
      "original": "He had survived a plane crash."
    },
    "form_confusables": [
      "crush",
      "clash",
      "cherish",
      "crawl"
    ],
    "semantic_confusables": [
      "clash",
      "collision",
      "change",
      "manage"
    ],
    "notes": "【正解考点】crash (碰撞)；【形近易混】crush, clash, cherish；【近义搭配】clash, collision, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crazy": {
    "word": "crazy",
    "phonetic": "/'kreizi/",
    "translation": "疯狂的; 狂热的",
    "cloze": {
      "sentence": "He went ______ at me for letting the dog out.",
      "translation": "该语境考查核心词义【疯狂的】在权威语篇中的实际运用。",
      "original": "He went crazy at me for letting the dog out."
    },
    "form_confusables": [
      "cry",
      "crawl",
      "crack",
      "craft"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crazy (疯狂的)；【形近易混】cry, crawl, crack；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cream": {
    "word": "cream",
    "phonetic": "/kri:m/",
    "translation": "奶油; 护肤霜",
    "cloze": {
      "sentence": "Put a little antiseptic ______ on the grazed skin.",
      "translation": "该语境考查核心词义【奶油】在权威语篇中的实际运用。",
      "original": "Put a little antiseptic cream on the grazed skin."
    },
    "form_confusables": [
      "create",
      "creation",
      "creative",
      "creature"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cream (奶油)；【形近易混】create, creation, creative；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "create": {
    "word": "create",
    "phonetic": "/kri'eit/",
    "translation": "创造; 引起",
    "cloze": {
      "sentence": "We need to ______ more jobs for young people.",
      "translation": "该语境考查核心词义【创造】在真实例句中的精准搭配。",
      "original": "We need to create more jobs for young people."
    },
    "form_confusables": [
      "creative",
      "creature",
      "creation",
      "cream"
    ],
    "semantic_confusables": [
      "creation",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】create (创造)；【形近易混】creative, creature, creation；【近义搭配】creation, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "creation": {
    "word": "creation",
    "phonetic": "/kri:'eiʃən/",
    "translation": "创造; 创作物",
    "cloze": {
      "sentence": "The new Act allows for the ______ of vocational schools.",
      "translation": "该语境考查核心词义【创造】在权威语篇中的实际运用。",
      "original": "The new Act allows for the creation of vocational schools."
    },
    "form_confusables": [
      "creative",
      "create",
      "correction",
      "reputation"
    ],
    "semantic_confusables": [
      "create",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】creation (创造)；【形近易混】creative, create, correction；【近义搭配】create, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "creative": {
    "word": "creative",
    "phonetic": "/kri'eitiv/",
    "translation": "有创造力的; 创新的",
    "cloze": {
      "sentence": "She's very ______—she writes poetry and paints.",
      "translation": "该语境考查核心词义【有创造力的】在权威语篇中的实际运用。",
      "original": "She's very creative—she writes poetry and paints."
    },
    "form_confusables": [
      "create",
      "creation",
      "creature",
      "active"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】creative (有创造力的)；【形近易混】create, creation, creature；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "creature": {
    "word": "creature",
    "phonetic": "/'kri:tʃə/",
    "translation": "生物; 动物",
    "cloze": {
      "sentence": "He always goes to bed at ten—he's a ______ of habit.",
      "translation": "该语境考查核心词义【生物】在权威语篇中的实际运用。",
      "original": "He always goes to bed at ten—he's a creature of habit."
    },
    "form_confusables": [
      "create",
      "creative",
      "creation",
      "culture"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】creature (生物)；【形近易混】create, creative, creation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "credit": {
    "word": "credit",
    "phonetic": "/'kredit/",
    "translation": "信用; 赞誉; 学分",
    "cloze": {
      "sentence": "He has a bad ______ rating.",
      "translation": "该语境考查核心词义【信用】在权威语篇中的实际运用。",
      "original": "He has a bad credit rating."
    },
    "form_confusables": [
      "create",
      "critic",
      "crew",
      "creation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】credit (信用)；【形近易混】create, critic, crew；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crew": {
    "word": "crew",
    "phonetic": "/kru:/",
    "translation": "全体船员; 全体机组",
    "cloze": {
      "sentence": "The cast and ______ of the movie are giving it their all.",
      "translation": "该语境考查核心词义【全体船员】在权威语篇中的实际运用。",
      "original": "The cast and crew of the movie are giving it their all."
    },
    "form_confusables": [
      "cream",
      "cure",
      "core",
      "create"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crew (全体船员)；【形近易混】cream, cure, core；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crime": {
    "word": "crime",
    "phonetic": "/kraim/",
    "translation": "罪行; 犯罪",
    "cloze": {
      "sentence": "Fear of ______ imprisons many elderly people in their homes.",
      "translation": "该语境考查核心词义【罪行】在权威语篇中的实际运用。",
      "original": "Fear of crime imprisons many elderly people in their homes."
    },
    "form_confusables": [
      "criminal",
      "come",
      "crew",
      "creative"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crime (罪行)；【形近易混】criminal, come, crew；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "criminal": {
    "word": "criminal",
    "phonetic": "/'kriminəl/",
    "translation": "罪犯; 犯法的",
    "cloze": {
      "sentence": "It should be a ______ offence to inflict cruelty on any wild animal.",
      "translation": "该语境考查核心词义【罪犯】在权威语篇中的实际运用。",
      "original": "It should be a criminal offence to inflict cruelty on any wild animal."
    },
    "form_confusables": [
      "critical",
      "crucial",
      "crime",
      "crawl"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】criminal (罪犯)；【形近易混】critical, crucial, crime；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crisis": {
    "word": "crisis",
    "phonetic": "/'kraisis/",
    "translation": "危机; 紧要关头",
    "cloze": {
      "sentence": "He's having a mid-life ______.",
      "translation": "该语境考查核心词义【危机】在权威语篇中的实际运用。",
      "original": "He's having a mid-life crisis."
    },
    "form_confusables": [
      "cross",
      "critic",
      "criticism",
      "criminal"
    ],
    "semantic_confusables": [
      "danger",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】crisis (危机)；【形近易混】cross, critic, criticism；【近义搭配】danger, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "critic": {
    "word": "critic",
    "phonetic": "/'kritik/",
    "translation": "批评家; 评论家",
    "cloze": {
      "sentence": "He is now a major ______ of the nuclear industry.",
      "translation": "该语境考查核心词义【批评家】在权威语篇中的实际运用。",
      "original": "He is now a major critic of the nuclear industry."
    },
    "form_confusables": [
      "critical",
      "criticism",
      "criticize",
      "crisis"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】critic (批评家)；【形近易混】critical, criticism, criticize；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "critical": {
    "word": "critical",
    "phonetic": "/'kritikəl/",
    "translation": "关键的; 批判的",
    "cloze": {
      "sentence": "Maintaining control of the the budget is absolutely ______ for success.",
      "translation": "该语境考查核心词义【关键的】在权威语篇中的实际运用。",
      "original": "Maintaining control of the the budget is absolutely critical for success."
    },
    "form_confusables": [
      "critic",
      "criticism",
      "criticize",
      "criminal"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】critical (关键的)；【形近易混】critic, criticism, criticize；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "criticism": {
    "word": "criticism",
    "phonetic": "/'kriti,sizəm/",
    "translation": "批评; 批判",
    "cloze": {
      "sentence": "He finds it hard to take ______.",
      "translation": "该语境考查核心词义【批评】在权威语篇中的实际运用。",
      "original": "He finds it hard to take criticism."
    },
    "form_confusables": [
      "criticize",
      "critic",
      "critical",
      "crisis"
    ],
    "semantic_confusables": [
      "criticize",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】criticism (批评)；【形近易混】criticize, critic, critical；【近义搭配】criticize, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "criticize": {
    "word": "criticize",
    "phonetic": "/'kriti,saiz/",
    "translation": "批评; 指责",
    "cloze": {
      "sentence": "All you ever do is ______!",
      "translation": "该语境考查核心词义【批评】在权威语篇中的实际运用。",
      "original": "All you ever do is criticize!"
    },
    "form_confusables": [
      "criticism",
      "critic",
      "critical",
      "citizen"
    ],
    "semantic_confusables": [
      "criticism",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】criticize (批评)；【形近易混】criticism, critic, critical；【近义搭配】criticism, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crop": {
    "word": "crop",
    "phonetic": "/krɔp/",
    "translation": "农作物; 庄稼",
    "cloze": {
      "sentence": "It takes three to five years for a new plantation to bear a ______.",
      "translation": "该语境考查核心词义【农作物】在权威语篇中的实际运用。",
      "original": "It takes three to five years for a new plantation to bear a crop."
    },
    "form_confusables": [
      "chop",
      "cross",
      "crowd",
      "cope"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crop (农作物)；【形近易混】chop, cross, crowd；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cross": {
    "word": "cross",
    "phonetic": "/krɔ:s/",
    "translation": "穿过; 十字形",
    "cloze": {
      "sentence": "She wore a gold ______ on a chain around her neck.",
      "translation": "该语境考查核心词义【穿过】在权威语篇中的实际运用。",
      "original": "She wore a gold cross on a chain around her neck."
    },
    "form_confusables": [
      "crisis",
      "crop",
      "confess",
      "crowd"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cross (穿过)；【形近易混】crisis, crop, confess；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crowd": {
    "word": "crowd",
    "phonetic": "/kraud/",
    "translation": "人群; 拥挤",
    "cloze": {
      "sentence": "A ______ thronged around the wounded man.",
      "translation": "该语境考查核心词义【人群】在权威语篇中的实际运用。",
      "original": "A crowd thronged around the wounded man."
    },
    "form_confusables": [
      "crop",
      "crew",
      "cross",
      "code"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crowd (人群)；【形近易混】crop, crew, cross；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crucial": {
    "word": "crucial",
    "phonetic": "/'kru:ʃəl/",
    "translation": "至关重要的; 决定性的",
    "cloze": {
      "sentence": "Secrecy is ______ to this police operation.",
      "translation": "该语境考查核心词义【至关重要的】在权威语篇中的实际运用。",
      "original": "Secrecy is crucial to this police operation."
    },
    "form_confusables": [
      "commercial",
      "cruel",
      "criminal",
      "critical"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crucial (至关重要的)；【形近易混】commercial, cruel, criminal；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cruel": {
    "word": "cruel",
    "phonetic": "/'kru:əl/",
    "translation": "残忍的; 残酷的",
    "cloze": {
      "sentence": "He was known to be a ______ dictator.",
      "translation": "该语境考查核心词义【残忍的】在权威语篇中的实际运用。",
      "original": "He was known to be a cruel dictator."
    },
    "form_confusables": [
      "crucial",
      "counsel",
      "crew",
      "crush"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cruel (残忍的)；【形近易混】crucial, counsel, crew；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crush": {
    "word": "crush",
    "phonetic": "/krʌʃ/",
    "translation": "压碎; 镇压",
    "cloze": {
      "sentence": "Attempts to ______ serious popular unrest led to civil war.",
      "translation": "该语境考查核心词义【压碎】在权威语篇中的实际运用。",
      "original": "Attempts to crush serious popular unrest led to civil war."
    },
    "form_confusables": [
      "crash",
      "cherish",
      "cruel",
      "curious"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crush (压碎)；【形近易混】crash, cherish, cruel；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cry": {
    "word": "cry",
    "phonetic": "/krai/",
    "translation": "哭泣; 呼喊",
    "cloze": {
      "sentence": "He was a fatherly shoulder to ______ on when things went wrong.",
      "translation": "该语境考查核心词义【哭泣】在权威语篇中的实际运用。",
      "original": "He was a fatherly shoulder to cry on when things went wrong."
    },
    "form_confusables": [
      "crazy",
      "crew",
      "crop",
      "city"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cry (哭泣)；【形近易混】crazy, crew, crop；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "crystal": {
    "word": "crystal",
    "phonetic": "/'kristəl/",
    "translation": "水晶; 结晶",
    "cloze": {
      "sentence": "Every table had been set with fine china and ______.",
      "translation": "该语境考查核心词义【水晶】在真实例句中的精准搭配。",
      "original": "Every table had been set with fine china and crystal."
    },
    "form_confusables": [
      "critical",
      "crawl",
      "casual",
      "crucial"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】crystal (水晶)；【形近易混】critical, crawl, casual；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "culture": {
    "word": "culture",
    "phonetic": "/'kʌltʃə/",
    "translation": "文化; 文明",
    "cloze": {
      "sentence": "Jokes are an important part of our popular oral ______.",
      "translation": "该语境考查核心词义【文化】在权威语篇中的实际运用。",
      "original": "Jokes are an important part of our popular oral culture."
    },
    "form_confusables": [
      "sculpture",
      "cure",
      "creature",
      "curve"
    ],
    "semantic_confusables": [
      "civilization",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】culture (文化)；【形近易混】sculpture, cure, creature；【近义搭配】civilization, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cup": {
    "word": "cup",
    "phonetic": "/亦作 C.U.P./",
    "translation": "杯子; 奖杯",
    "cloze": {
      "sentence": "Enrique stirred his fourth ______ of coffee of the day.",
      "translation": "该语境考查核心词义【杯子】在权威语篇中的实际运用。",
      "original": "Enrique stirred his fourth cup of coffee of the day."
    },
    "form_confusables": [
      "cut",
      "cure",
      "couple",
      "chip"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cup (杯子)；【形近易混】cut, cure, couple；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "curiosity": {
    "word": "curiosity",
    "phonetic": "/,kjuri'ɔsiti/",
    "translation": "好奇心; 求知欲",
    "cloze": {
      "sentence": "Kaylee stood staring with open ______.",
      "translation": "该语境考查核心词义【好奇心】在权威语篇中的实际运用。",
      "original": "Kaylee stood staring with open curiosity."
    },
    "form_confusables": [
      "curious",
      "crisis",
      "culprit",
      "currently"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】curiosity (好奇心)；【形近易混】curious, crisis, culprit；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "currently": {
    "word": "currently",
    "phonetic": "/'kʌrəntli/",
    "translation": "当前; 目前",
    "cloze": {
      "sentence": "The hourly charge is ______ £35, but it's going up to £38 next month.",
      "translation": "该语境考查核心词义【当前】在真实例句中的精准搭配。",
      "original": "The hourly charge is currently £35, but it's going up to £38 next month."
    },
    "form_confusables": [
      "current",
      "currency",
      "recently",
      "county"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】currently (当前)；【形近易混】current, currency, recently；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "curriculum": {
    "word": "curriculum",
    "phonetic": "/kə'rikjuləm/",
    "translation": "课程; 全部课程",
    "cloze": {
      "sentence": "Chinese has been introduced into the ______ as an option.",
      "translation": "该语境考查核心词义【课程】在权威语篇中的实际运用。",
      "original": "Chinese has been introduced into the curriculum as an option."
    },
    "form_confusables": [
      "curious",
      "currency",
      "cubicle",
      "currently"
    ],
    "semantic_confusables": [
      "course",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】curriculum (课程)；【形近易混】curious, currency, cubicle；【近义搭配】course, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "curve": {
    "word": "curve",
    "phonetic": "/kə:v/",
    "translation": "曲线; 弯曲",
    "cloze": {
      "sentence": "He slowed down to negotiate the ______.",
      "translation": "该语境考查核心词义【曲线】在权威语篇中的实际运用。",
      "original": "He slowed down to negotiate the curve."
    },
    "form_confusables": [
      "cure",
      "current",
      "course",
      "culture"
    ],
    "semantic_confusables": [
      "bend",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】curve (曲线)；【形近易混】cure, current, course；【近义搭配】bend, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "custom": {
    "word": "custom",
    "phonetic": "/'kʌstəm/",
    "translation": "海关; 关税; 习惯",
    "cloze": {
      "sentence": "The ______ died out in the 19th century.",
      "translation": "该语境考查核心词义【海关】在权威语篇中的实际运用。",
      "original": "The custom died out in the 19th century."
    },
    "form_confusables": [
      "customer",
      "cut",
      "come",
      "cost"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】custom (海关)；【形近易混】customer, cut, come；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "customer": {
    "word": "customer",
    "phonetic": "/'kʌstəmə/",
    "translation": "顾客; 客户",
    "cloze": {
      "sentence": "If you have a complaint, contact the ______ care unit.",
      "translation": "该语境考查核心词义【顾客】在权威语篇中的实际运用。",
      "original": "If you have a complaint, contact the customer care unit."
    },
    "form_confusables": [
      "custom",
      "counter",
      "consumer",
      "computer"
    ],
    "semantic_confusables": [
      "client",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】customer (顾客)；【形近易混】custom, counter, consumer；【近义搭配】client, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cut": {
    "word": "cut",
    "phonetic": "/symbols/",
    "translation": "剪切; 削减",
    "cloze": {
      "sentence": "He ______ the bread into thin slices.",
      "translation": "该语境考查核心词义【剪切】在权威语篇中的实际运用。",
      "original": "He cut the bread into thin slices."
    },
    "form_confusables": [
      "count",
      "court",
      "cup",
      "custom"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cut (剪切)；【形近易混】count, court, cup；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cycle": {
    "word": "cycle",
    "phonetic": "/'saikl/",
    "translation": "周期; 循环; 自行车",
    "cloze": {
      "sentence": "Cars are not allowed in the ______ lanes.",
      "translation": "该语境考查核心词义【周期】在权威语篇中的实际运用。",
      "original": "Cars are not allowed in the cycle lanes."
    },
    "form_confusables": [
      "circle",
      "cubicle",
      "clue",
      "conclude"
    ],
    "semantic_confusables": [
      "circle",
      "circulate",
      "change",
      "manage"
    ],
    "notes": "【正解考点】cycle (周期)；【形近易混】circle, cubicle, clue；【近义搭配】circle, circulate, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "insufferable": {
    "word": "insufferable",
    "phonetic": "/in'sʌfərəbl/",
    "translation": "难以忍受的; 令人厌恶的",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：难以忍受的)",
      "original": "Recent studies clearly show that we must insufferable modern standards in our research."
    },
    "form_confusables": [
      "considerable",
      "uncomfortable",
      "irrevocable",
      "noticeable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】insufferable (难以忍受的)；【形近易混】considerable, uncomfortable, irrevocable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "hesitate": {
    "word": "hesitate",
    "phonetic": "/'heziteit/",
    "translation": "犹豫; 踌躇",
    "cloze": {
      "sentence": "I didn't ______ about working with Craig.",
      "translation": "该语境考查核心词义【犹豫】在权威语篇中的实际运用。",
      "original": "I didn't hesitate about working with Craig."
    },
    "form_confusables": [
      "state",
      "heaven",
      "retaliate",
      "stipulate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】hesitate (犹豫)；【形近易混】state, heaven, retaliate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "overreact": {
    "word": "overreact",
    "phonetic": "/,əuvəri'ækt/",
    "translation": "反应过度; 大惊小怪",
    "cloze": {
      "sentence": "I didn't think I ______ to her when she insulted me.",
      "translation": "我仍然认为在她侮辱我时，我的反应是正当的。",
      "original": "I didn't think I overreacted to her when she insulted me."
    },
    "form_confusables": [
      "correct",
      "convert",
      "contract",
      "correction"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】overreact (反应过度)；【形近易混】correct, convert, contract；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "interpersonal": {
    "word": "interpersonal",
    "phonetic": "/,intə'pə:sənəl/",
    "translation": "人际关系的; 人与人之间的",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：人际关系的)",
      "original": "Recent studies clearly show that we must interpersonal modern standards in our research."
    },
    "form_confusables": [
      "controversial",
      "conversion",
      "reasonable",
      "controversy"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】interpersonal (人际关系的)；【形近易混】controversial, conversion, reasonable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "retaliate": {
    "word": "retaliate",
    "phonetic": "/ri'tælieit/",
    "translation": "报复; 反击",
    "cloze": {
      "sentence": "Ukraine threatened to ______ by closing oil pipelines.",
      "translation": "该语境考查核心词义【报复】在权威语篇中的实际运用。",
      "original": "Ukraine threatened to retaliate by closing oil pipelines."
    },
    "form_confusables": [
      "realization",
      "rental",
      "reunite",
      "create"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】retaliate (报复)；【形近易混】realization, rental, reunite；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "confidential": {
    "word": "confidential",
    "phonetic": "/,kɔnfi'denʃəl/",
    "translation": "机密的; 秘密的",
    "cloze": {
      "sentence": "The affair must be kept ______.",
      "translation": "该语境考查核心词义【机密的】在权威语篇中的实际运用。",
      "original": "The affair must be kept confidential."
    },
    "form_confusables": [
      "confident",
      "confidence",
      "conventional",
      "continual"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】confidential (机密的)；【形近易混】confident, confidence, conventional；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "extortion": {
    "word": "extortion",
    "phonetic": "/ik'stɔ:ʃən/",
    "translation": "勒索; 敲诈",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：勒索)",
      "original": "The committee agreed that this strategy will extortion significant long-term growth."
    },
    "form_confusables": [
      "emotion",
      "portion",
      "extension",
      "exception"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】extortion (勒索)；【形近易混】emotion, portion, extension；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "sabotage": {
    "word": "sabotage",
    "phonetic": "/'sæbətɑ:ʒ; ,sæbə'tɑ:ʒ/",
    "translation": "蓄意破坏; 暗中破坏",
    "cloze": {
      "sentence": "They conducted a campaign of economic ______.",
      "translation": "该语境考查核心词义【蓄意破坏】在权威语篇中的实际运用。",
      "original": "They conducted a campaign of economic sabotage."
    },
    "form_confusables": [
      "stake",
      "stale",
      "state",
      "catalogue"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】sabotage (蓄意破坏)；【形近易混】stake, stale, state；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "empathy": {
    "word": "empathy",
    "phonetic": "/'empəθi/",
    "translation": "同理心; 共鸣",
    "cloze": {
      "sentence": "She had a deep ______ with animals.",
      "translation": "该语境考查核心词义【同理心】在权威语篇中的实际运用。",
      "original": "She had a deep empathy with animals."
    },
    "form_confusables": [
      "temporary",
      "company",
      "compact",
      "exact"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】empathy (同理心)；【形近易混】temporary, company, compact；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conspire": {
    "word": "conspire",
    "phonetic": "/kən'spaiɔ/",
    "translation": "密谋; 串通",
    "cloze": {
      "sentence": "Circumstances had ______ against them.",
      "translation": "该语境考查核心词义【密谋】在真实例句中的精准搭配。",
      "original": "Circumstances had conspired against them."
    },
    "form_confusables": [
      "consider",
      "conscience",
      "constitute",
      "consume"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conspire (密谋)；【形近易混】consider, conscience, constitute；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "compounded": {
    "word": "compounded",
    "phonetic": "/compounded/",
    "translation": "复合的; 加剧的",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：复合的)",
      "original": "Recent studies clearly show that we must compounded modern standards in our research."
    },
    "form_confusables": [
      "component",
      "composure",
      "compose",
      "compute"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】compounded (复合的)；【形近易混】component, composure, compose；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "incognito": {
    "word": "incognito",
    "phonetic": "/in'kɔɡni:təu/",
    "translation": "隐姓埋名的; 伪装的",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：隐姓埋名的)",
      "original": "Recent studies clearly show that we must incognito modern standards in our research."
    },
    "form_confusables": [
      "cognitive",
      "condition",
      "consist",
      "control"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】incognito (隐姓埋名的)；【形近易混】cognitive, condition, consist；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consolidation": {
    "word": "consolidation",
    "phonetic": "/kən,sɔli'deiʃən/",
    "translation": "巩固; 联合合并",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：巩固)",
      "original": "Recent studies clearly show that we must consolidation modern standards in our research."
    },
    "form_confusables": [
      "consideration",
      "constitution",
      "conversation",
      "consumption"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】consolidation (巩固)；【形近易混】consideration, constitution, conversation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "unprecedented": {
    "word": "unprecedented",
    "phonetic": "/,ʌn'presidəntid/",
    "translation": "史无前例的; 空前的",
    "cloze": {
      "sentence": "The situation is ______ in modern times.",
      "translation": "该语境考查核心词义【史无前例的】在真实例句中的精准搭配。",
      "original": "The situation is unprecedented in modern times."
    },
    "form_confusables": [
      "percentage",
      "unfortunate",
      "appreciate",
      "coincidence"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】unprecedented (史无前例的)；【形近易混】percentage, unfortunate, appreciate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "acceptable": {
    "word": "acceptable",
    "phonetic": "/ək'septəbl/",
    "translation": "可接受的; 合适的",
    "cloze": {
      "sentence": "Are all political groups equally ______?",
      "translation": "该语境考查核心词义【可接受的】在权威语篇中的实际运用。",
      "original": "Are all political groups equally acceptable?"
    },
    "form_confusables": [
      "noticeable",
      "comfortable",
      "available",
      "considerable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】acceptable (可接受的)；【形近易混】noticeable, comfortable, available；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "persistent": {
    "word": "persistent",
    "phonetic": "/pə'sistənt; -'zis-/",
    "translation": "执着的; 坚持不懈的",
    "cloze": {
      "sentence": "The weeds were very ______.",
      "translation": "该语境考查核心词义【执着的】在权威语篇中的实际运用。",
      "original": "The weeds were very persistent."
    },
    "form_confusables": [
      "consistent",
      "competent",
      "percentage",
      "installment"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】persistent (执着的)；【形近易混】consistent, competent, percentage；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "demoralizing": {
    "word": "demoralizing",
    "phonetic": "/span>mor<span style='vertical-align:25%;font-size:35%;'>•</",
    "translation": "令人士气低落的",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：令人士气低落的)",
      "original": "It is essential to demoralizing this critical process before making any final decisions."
    },
    "form_confusables": [
      "realization",
      "coalition",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】demoralizing (令人士气低落的)；【形近易混】realization, coalition, obtain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "colleagues": {
    "word": "colleagues",
    "phonetic": "/colleagues/",
    "translation": "同事们; 同僚",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：同事们)",
      "original": "The committee agreed that this strategy will colleagues significant long-term growth."
    },
    "form_confusables": [
      "colleague",
      "college",
      "collective",
      "collect"
    ],
    "semantic_confusables": [
      "colleague",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】colleagues (同事们)；【形近易混】colleague, college, collective；【近义搭配】colleague, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cubicle": {
    "word": "cubicle",
    "phonetic": "/'kju:bikl/",
    "translation": "小隔间; 工位",
    "cloze": {
      "sentence": "I don't even know my colleague in the next ______.",
      "translation": "该语境考查核心词义【小隔间】在权威语篇中的实际运用。",
      "original": "I don't even know my colleague in the next cubicle."
    },
    "form_confusables": [
      "circle",
      "cycle",
      "couple",
      "culture"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cubicle (小隔间)；【形近易混】circle, cycle, couple；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "boardroom": {
    "word": "boardroom",
    "phonetic": "/span>room</",
    "translation": "会议室; 董事会会议室",
    "cloze": {
      "sentence": "The directors were working overtime in the ______.",
      "translation": "该语境考查核心词义【会议室】在权威语篇中的实际运用。",
      "original": "The directors were working overtime in the boardroom."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】boardroom (会议室)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "inventory": {
    "word": "inventory",
    "phonetic": "/'invəntəri; -tɔ:ri/",
    "translation": "库存; 清单",
    "cloze": {
      "sentence": "Disaster response teams are completing an ______ of damaged facilities.",
      "translation": "该语境考查核心词义【库存】在权威语篇中的实际运用。",
      "original": "Disaster response teams are completing an inventory of damaged facilities."
    },
    "form_confusables": [
      "convention",
      "incognito",
      "mandatory",
      "inform"
    ],
    "semantic_confusables": [
      "stock",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】inventory (库存)；【形近易混】convention, incognito, mandatory；【近义搭配】stock, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "engagement": {
    "word": "engagement",
    "phonetic": "/in'ɡeidʒmənt/",
    "translation": "参与度; 订婚; 约定",
    "cloze": {
      "sentence": "He announced his ______ to his long-time girlfriend.",
      "translation": "该语境考查核心词义【参与度】在权威语篇中的实际运用。",
      "original": "He announced his engagement to his long-time girlfriend."
    },
    "form_confusables": [
      "fragment",
      "amendment",
      "enlarge",
      "payment"
    ],
    "semantic_confusables": [
      "stipulate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】engagement (参与度)；【形近易混】fragment, amendment, enlarge；【近义搭配】stipulate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mandatory": {
    "word": "mandatory",
    "phonetic": "/'mændətəri:; -,tɔ:ri/",
    "translation": "强制的; 必修的",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：强制的)",
      "original": "The manager asked the entire team to carefully mandatory the operational requirements."
    },
    "form_confusables": [
      "manufacturer",
      "inventory",
      "ancestor",
      "abundant"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】mandatory (强制的)；【形近易混】manufacturer, inventory, ancestor；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "unfortunate": {
    "word": "unfortunate",
    "phonetic": "/,ʌn'fɔ:tʃənət/",
    "translation": "不幸的; 令人遗憾的",
    "cloze": {
      "sentence": "It was ______ that he couldn't speak English.",
      "translation": "该语境考查核心词义【不幸的】在权威语篇中的实际运用。",
      "original": "It was unfortunate that he couldn't speak English."
    },
    "form_confusables": [
      "formulate",
      "uncomfortable",
      "motivate",
      "accurate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】unfortunate (不幸的)；【形近易混】formulate, uncomfortable, motivate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "realization": {
    "word": "realization",
    "phonetic": "/,riəlai'zeiʃən; ,ri:-; -li'z-/",
    "translation": "领悟; 意识; 实现",
    "cloze": {
      "sentence": "The ______ that the murderer must have been a close friend came as a shock.",
      "translation": "该语境考查核心词义【领悟】在权威语篇中的实际运用。",
      "original": "The realization that the murderer must have been a close friend came as a shock."
    },
    "form_confusables": [
      "creation",
      "civilization",
      "examination",
      "reputation"
    ],
    "semantic_confusables": [
      "consciousness",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】realization (领悟)；【形近易混】creation, civilization, examination；【近义搭配】consciousness, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "professional": {
    "word": "professional",
    "phonetic": "/prəu'feʃənəl/",
    "translation": "专业的; 职业的",
    "cloze": {
      "sentence": "He insisted that his relationship with the duchess was purely ______.",
      "translation": "该语境考查核心词义【专业的】在权威语篇中的实际运用。",
      "original": "He insisted that his relationship with the duchess was purely professional."
    },
    "form_confusables": [
      "procession",
      "conventional",
      "promotion",
      "reasonable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】professional (专业的)；【形近易混】procession, conventional, promotion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "casual": {
    "word": "casual",
    "phonetic": "/'kæʒjuəl/",
    "translation": "随意的; 非正式的",
    "cloze": {
      "sentence": "There was something a little too carefully ______ in his tone.",
      "translation": "该语境考查核心词义【随意的】在权威语篇中的实际运用。",
      "original": "There was something a little too carefully casual in his tone."
    },
    "form_confusables": [
      "annual",
      "actual",
      "crucial",
      "crystal"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】casual (随意的)；【形近易混】annual, actual, crucial；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "executive": {
    "word": "executive",
    "phonetic": "/iɡ'zekjutiv/",
    "translation": "高管; 执行主管",
    "cloze": {
      "sentence": "Conservatives are by tradition believers in a strong ______.",
      "translation": "该语境考查核心词义【高管】在权威语篇中的实际运用。",
      "original": "Conservatives are by tradition believers in a strong executive."
    },
    "form_confusables": [
      "execution",
      "active",
      "collective",
      "creative"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】executive (高管)；【形近易混】execution, active, collective；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "awkward": {
    "word": "awkward",
    "phonetic": "/'ɔ:kwəd/",
    "translation": "尴尬的; 笨拙的",
    "cloze": {
      "sentence": "He always sounded ______ on the phone.",
      "translation": "该语境考查核心词义【尴尬的】在权威语篇中的实际运用。",
      "original": "He always sounded awkward on the phone."
    },
    "form_confusables": [
      "hazard",
      "await",
      "ahead",
      "obtain"
    ],
    "semantic_confusables": [
      "clumsy",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】awkward (尴尬的)；【形近易混】hazard, await, ahead；【近义搭配】clumsy, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "uncomfortable": {
    "word": "uncomfortable",
    "phonetic": "/,ʌn'kɔmfətəbl/",
    "translation": "不舒服的; 局促不安的",
    "cloze": {
      "sentence": "A few remain highly ______ with the idea of same-sex marriage.",
      "translation": "该语境考查核心词义【不舒服的】在权威语篇中的实际运用。",
      "original": "A few remain highly uncomfortable with the idea of same-sex marriage."
    },
    "form_confusables": [
      "comfortable",
      "unfortunate",
      "considerable",
      "insufferable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】uncomfortable (不舒服的)；【形近易混】comfortable, unfortunate, considerable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "specific": {
    "word": "specific",
    "phonetic": "/spi'sifik/",
    "translation": "具体的; 明确的; 特定的",
    "cloze": {
      "sentence": "Can you be a little more ______ in your instructions?",
      "translation": "该语境考查核心词义【具体的】在权威语篇中的实际运用。",
      "original": "Can you be a little more specific in your instructions?"
    },
    "form_confusables": [
      "clinic",
      "critic",
      "superior",
      "conflict"
    ],
    "semantic_confusables": [
      "concrete",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】specific (具体的)；【形近易混】clinic, critic, superior；【近义搭配】concrete, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "morale": {
    "word": "morale",
    "phonetic": "/mɔ'rɑ:l; -'ræl/",
    "translation": "士气; 斗志",
    "cloze": {
      "sentence": "The army has a major ______ problem.",
      "translation": "该语境考查核心词义【士气】在权威语篇中的实际运用。",
      "original": "The army has a major morale problem."
    },
    "form_confusables": [
      "mobile",
      "workable",
      "move",
      "motivate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】morale (士气)；【形近易混】mobile, workable, move；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "promotion": {
    "word": "promotion",
    "phonetic": "/prəu'məuʃən/",
    "translation": "晋升; 推广",
    "cloze": {
      "sentence": "If I can't get ______ soon, I'll look for another job.",
      "translation": "该语境考查核心词义【晋升】在权威语篇中的实际运用。",
      "original": "If I can't get promotion soon, I'll look for another job."
    },
    "form_confusables": [
      "proportion",
      "promote",
      "emotion",
      "portion"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】promotion (晋升)；【形近易混】proportion, promote, emotion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "layoffs": {
    "word": "layoffs",
    "phonetic": "/layoffs/",
    "translation": "裁员; 解雇",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：裁员)",
      "original": "The committee agreed that this strategy will layoffs significant long-term growth."
    },
    "form_confusables": [
      "clay",
      "loose",
      "lease",
      "flash"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】layoffs (裁员)；【形近易混】clay, loose, lease；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "threshold": {
    "word": "threshold",
    "phonetic": "/'θreʃhəuld/",
    "translation": "门槛; 临界点",
    "cloze": {
      "sentence": "He has an extremely low pain ______.",
      "translation": "该语境考查核心词义【门槛】在权威语篇中的实际运用。",
      "original": "He has an extremely low pain threshold."
    },
    "form_confusables": [
      "resolve",
      "correspond",
      "reasonable",
      "revolve"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】threshold (门槛)；【形近易混】resolve, correspond, reasonable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "scrutiny": {
    "word": "scrutiny",
    "phonetic": "/'skru:tini/",
    "translation": "严密审查; 仔细监督",
    "cloze": {
      "sentence": "The activities of the committee are subject to public ______.",
      "translation": "该语境考查核心词义【严密审查】在权威语篇中的实际运用。",
      "original": "The activities of the committee are subject to public scrutiny."
    },
    "form_confusables": [
      "corruption",
      "discretion",
      "creation",
      "county"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】scrutiny (严密审查)；【形近易混】corruption, discretion, creation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "initiative": {
    "word": "initiative",
    "phonetic": "/i'niʃiətiv; -ʃətiv/",
    "translation": "主动性; 首创倡议",
    "cloze": {
      "sentence": "He acted on his own ______ and wasn't following orders.",
      "translation": "该语境考查核心词义【主动性】在权威语篇中的实际运用。",
      "original": "He acted on his own initiative and wasn't following orders."
    },
    "form_confusables": [
      "indicate",
      "cognitive",
      "competitive",
      "creative"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】initiative (主动性)；【形近易混】indicate, cognitive, competitive；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "composure": {
    "word": "composure",
    "phonetic": "/kəm'pəuʒə/",
    "translation": "镇静; 沉着",
    "cloze": {
      "sentence": "She answered with perfect ______.",
      "translation": "该语境考查核心词义【镇静】在权威语篇中的实际运用。",
      "original": "She answered with perfect composure."
    },
    "form_confusables": [
      "compose",
      "compare",
      "compounded",
      "compute"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】composure (镇静)；【形近易混】compose, compare, compounded；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "maneuver": {
    "word": "maneuver",
    "phonetic": "/mə'nu:və/",
    "translation": "策略调遣; 操纵",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：策略调遣)",
      "original": "The manager asked the entire team to carefully maneuver the operational requirements."
    },
    "form_confusables": [
      "clever",
      "commander",
      "wander",
      "danger"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】maneuver (策略调遣)；【形近易混】clever, commander, wander；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "defiance": {
    "word": "defiance",
    "phonetic": "/di'faiəns/",
    "translation": "挑衅; 蔑视反抗",
    "cloze": {
      "sentence": "I left the room untidy out of sheer ______.",
      "translation": "该语境考查核心词义【挑衅】在权威语篇中的实际运用。",
      "original": "I left the room untidy out of sheer defiance."
    },
    "form_confusables": [
      "decline",
      "advance",
      "enhance",
      "issuance"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】defiance (挑衅)；【形近易混】decline, advance, enhance；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "apprehensive": {
    "word": "apprehensive",
    "phonetic": "/,æpri'hensiv/",
    "translation": "忧虑的; 担心的",
    "cloze": {
      "sentence": "She was deeply ______ about her future.",
      "translation": "该语境考查核心词义【忧虑的】在权威语篇中的实际运用。",
      "original": "She was deeply apprehensive about her future."
    },
    "form_confusables": [
      "comprehensive",
      "aggressive",
      "appreciate",
      "obtain"
    ],
    "semantic_confusables": [
      "concerned",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】apprehensive (忧虑的)；【形近易混】comprehensive, aggressive, appreciate；【近义搭配】concerned, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "reluctant": {
    "word": "reluctant",
    "phonetic": "/ri'lʌktənt/",
    "translation": "不情愿的; 勉强的",
    "cloze": {
      "sentence": "For a moment, he felt almost ______ to leave.",
      "translation": "该语境考查核心词义【不情愿的】在权威语篇中的实际运用。",
      "original": "For a moment, he felt almost reluctant to leave."
    },
    "form_confusables": [
      "reduction",
      "reputation",
      "recently",
      "constant"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】reluctant (不情愿的)；【形近易混】reduction, reputation, recently；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "contingency": {
    "word": "contingency",
    "phonetic": "/kən'tindʒənsi/",
    "translation": "应急预案; 突发事件",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：应急预案)",
      "original": "It is essential to contingency this critical process before making any final decisions."
    },
    "form_confusables": [
      "continent",
      "continue",
      "container",
      "continual"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】contingency (应急预案)；【形近易混】continent, continue, container；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "surveillance": {
    "word": "surveillance",
    "phonetic": "/sə:'veiləns; sə-/",
    "translation": "监控; 监视",
    "cloze": {
      "sentence": "The country's borders are kept under constant ______.",
      "translation": "该语境考查核心词义【监控】在权威语篇中的实际运用。",
      "original": "The country's borders are kept under constant surveillance."
    },
    "form_confusables": [
      "consequence",
      "convenience",
      "discrepancy",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】surveillance (监控)；【形近易混】consequence, convenience, discrepancy；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "allegation": {
    "word": "allegation",
    "phonetic": "/,æli'ɡeiʃən/",
    "translation": "指控; 申述",
    "cloze": {
      "sentence": "I advise you to withdraw your ______ before I contact my lawyer.",
      "translation": "该语境考查核心词义【指控】在权威语篇中的实际运用。",
      "original": "I advise you to withdraw your allegation before I contact my lawyer."
    },
    "form_confusables": [
      "collection",
      "creation",
      "realization",
      "negotiation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】allegation (指控)；【形近易混】collection, creation, realization；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "discretion": {
    "word": "discretion",
    "phonetic": "/dis'kreʃən/",
    "translation": "谨慎; 自由裁量权",
    "cloze": {
      "sentence": "I'll leave it to your ______.",
      "translation": "该语境考查核心词义【谨慎】在权威语篇中的实际运用。",
      "original": "I'll leave it to your discretion."
    },
    "form_confusables": [
      "discrepancy",
      "creation",
      "correction",
      "condition"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】discretion (谨慎)；【形近易混】discrepancy, creation, correction；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "leverage": {
    "word": "leverage",
    "phonetic": "/'li:vəridʒ; 'le-/",
    "translation": "杠杆影响力; 借力",
    "cloze": {
      "sentence": "Position the piece of wood so that maximum ______ can be applied.",
      "translation": "该语境考查核心词义【杠杆影响力】在权威语篇中的实际运用。",
      "original": "Position the piece of wood so that maximum leverage can be applied."
    },
    "form_confusables": [
      "coverage",
      "clever",
      "reverse",
      "percentage"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】leverage (杠杆影响力)；【形近易混】coverage, clever, reverse；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "culprit": {
    "word": "culprit",
    "phonetic": "/'kʌlprit/",
    "translation": "罪魁祸首; 犯人",
    "cloze": {
      "sentence": "Keep the kitchen clear of all sources of bacteria, not forgetting the biggest ______ of all—the dishcloth.",
      "translation": "该语境考查核心词义【罪魁祸首】在权威语篇中的实际运用。",
      "original": "Keep the kitchen clear of all sources of bacteria, not forgetting the biggest culprit of all—the dishcloth."
    },
    "form_confusables": [
      "court",
      "curiosity",
      "credit",
      "culture"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】culprit (罪魁祸首)；【形近易混】court, curiosity, credit；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "obtain": {
    "zh": "获得；取得；买到",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "You must ______ written authorization from the director before accessing the lab.",
      "translation": "进入实验室之前，你必须获得主任的书面授权。"
    },
    "form_confusables": [
      {
        "word": "obtain",
        "zh": "获得；取得"
      },
      {
        "word": "attain",
        "zh": "达到；实现"
      },
      {
        "word": "maintain",
        "zh": "维持；保养"
      },
      {
        "word": "contain",
        "zh": "包含；容纳"
      }
    ],
    "semantic_confusables": [
      {
        "word": "obtain",
        "zh": "经申请取得"
      },
      {
        "word": "acquire",
        "zh": "学到；收购获得"
      },
      {
        "word": "gain",
        "zh": "获得利益/优势"
      },
      {
        "word": "secure",
        "zh": "费力弄到手"
      }
    ],
    "notes": "【搭配考点】obtain permission/approval 正式用语，通过申请或程序获得；【形近辨析】attain (达到/实现)，maintain (维持)，contain (包含)；【近义辨析】acquire 侧重逐步学到或收购，gain 强调获得利益或优势。",
    "word": "obtain",
    "translation": "获得；取得；买到",
    "phonetic": "/obtain/"
  },
  "establish business relations": {
    "word": "establish business relations",
    "phonetic": "/establish business relations/",
    "translation": "建立业务关系",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：建立业务关系)",
      "original": "The committee agreed that this strategy will establish business relations significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】establish business relations (建立业务关系)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "quotation": {
    "word": "quotation",
    "phonetic": "/kwəu'teiʃən; kəu-/",
    "translation": "报价; 行情",
    "cloze": {
      "sentence": "If you take text from other sources, place it in ______ marks.",
      "translation": "该语境考查核心词义【报价】在权威语篇中的实际运用。",
      "original": "If you take text from other sources, place it in quotation marks."
    },
    "form_confusables": [
      "reputation",
      "fluctuation",
      "negotiation",
      "formation"
    ],
    "semantic_confusables": [
      "quote",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】quotation (报价)；【形近易混】reputation, fluctuation, negotiation；【近义搭配】quote, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "quote": {
    "word": "quote",
    "phonetic": "/kwəut; kəut/",
    "translation": "报价; 开价",
    "cloze": {
      "sentence": "Don't ______ me on this, but I think she is going to resign.",
      "translation": "该语境考查核心词义【报价】在真实例句中的精准搭配。",
      "original": "Don't quote me on this, but I think she is going to resign."
    },
    "form_confusables": [
      "unite",
      "remote",
      "promote",
      "motive"
    ],
    "semantic_confusables": [
      "quotation",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】quote (报价)；【形近易混】unite, remote, promote；【近义搭配】quotation, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "latest": {
    "word": "latest",
    "phonetic": "/symbols/",
    "translation": "最新的; 最近的",
    "cloze": {
      "sentence": "Her ______ novel has been shortlisted for a literary prize.",
      "translation": "该语境考查核心词义【最新的】在权威语篇中的实际运用。",
      "original": "Her latest novel has been shortlisted for a literary prize."
    },
    "form_confusables": [
      "contest",
      "vast",
      "interest",
      "chest"
    ],
    "semantic_confusables": [
      "up-to-date",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】latest (最新的)；【形近易混】contest, vast, interest；【近义搭配】up-to-date, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "catalogue": {
    "word": "catalogue",
    "phonetic": "/'kætəlɔɡ/",
    "translation": "产品目录; 样本",
    "cloze": {
      "sentence": "More details are given in our ______.",
      "translation": "该语境考查核心词义【产品目录】在权威语篇中的实际运用。",
      "original": "More details are given in our catalogue."
    },
    "form_confusables": [
      "creature",
      "colleague",
      "sabotage",
      "casual"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】catalogue (产品目录)；【形近易混】creature, colleague, sabotage；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "export": {
    "word": "export",
    "phonetic": "/ik'spɔ:t; 'eks-; 'ekspɔ:t/",
    "translation": "出口; 外销",
    "cloze": {
      "sentence": "Coffee is the country's biggest ______.",
      "translation": "该语境考查核心词义【出口】在真实例句中的精准搭配。",
      "original": "Coffee is the country's biggest export."
    },
    "form_confusables": [
      "expire",
      "extortion",
      "import",
      "exact"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】export (出口)；【形近易混】expire, extortion, import；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "import": {
    "word": "import",
    "phonetic": "/im'pɔ:t; 'impɔ:t/",
    "translation": "进口; 输入",
    "cloze": {
      "sentence": "A restricted ______ quota was set for meat products.",
      "translation": "该语境考查核心词义【进口】在权威语篇中的实际运用。",
      "original": "A restricted import quota was set for meat products."
    },
    "form_confusables": [
      "export",
      "improve",
      "comfort",
      "portion"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】import (进口)；【形近易混】export, improve, comfort；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "appreciate": {
    "word": "appreciate",
    "phonetic": "/ə'pri:ʃieit/",
    "translation": "感激; 赏识; 升值",
    "cloze": {
      "sentence": "Teachers will especially ______ the lists at the back of the book.",
      "translation": "该语境考查核心词义【感激】在权威语篇中的实际运用。",
      "original": "Teachers will especially appreciate the lists at the back of the book."
    },
    "form_confusables": [
      "apprehensive",
      "approve",
      "retaliate",
      "approach"
    ],
    "semantic_confusables": [
      "owe",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】appreciate (感激)；【形近易混】apprehensive, approve, retaliate；【近义搭配】owe, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "as requested": {
    "word": "as requested",
    "phonetic": "/as requested/",
    "translation": "按照要求; 照办",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：按照要求)",
      "original": "Recent studies clearly show that we must as requested modern standards in our research."
    },
    "form_confusables": [
      "apprehensive",
      "consequence",
      "requirement",
      "obtain"
    ],
    "semantic_confusables": [
      "accordingly",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】as requested (按照要求)；【形近易混】apprehensive, consequence, requirement；【近义搭配】accordingly, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "under separate cover": {
    "word": "under separate cover",
    "phonetic": "/under separate cover/",
    "translation": "另函寄出; 另封寄送",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：另函寄出)",
      "original": "Recent studies clearly show that we must under separate cover modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】under separate cover (另函寄出)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "interest": {
    "word": "interest",
    "phonetic": "/'intrist; 'intər-/",
    "translation": "兴趣; 利益; 利息",
    "cloze": {
      "sentence": "A childhood trip to Europe sparked his lifelong ______ in history.",
      "translation": "该语境考查核心词义【兴趣】在权威语篇中的实际运用。",
      "original": "A childhood trip to Europe sparked his lifelong interest in history."
    },
    "form_confusables": [
      "contest",
      "contrast",
      "injure",
      "latest"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】interest (兴趣)；【形近易混】contest, contrast, injure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "item": {
    "word": "item",
    "phonetic": "/'aitəm/",
    "translation": "条款; 货品; 项目",
    "cloze": {
      "sentence": "Computers became a consumer ______ in the early 1990s.",
      "translation": "该语境考查核心词义【条款】在权威语篇中的实际运用。",
      "original": "Computers became a consumer item in the early 1990s."
    },
    "form_confusables": [
      "cite",
      "unite",
      "temple",
      "cinema"
    ],
    "semantic_confusables": [
      "clause",
      "amend",
      "change",
      "manage"
    ],
    "notes": "【正解考点】item (条款)；【形近易混】cite, unite, temple；【近义搭配】clause, amend, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "various kinds of": {
    "word": "various kinds of",
    "phonetic": "/various kinds of/",
    "translation": "各种各样的; 各类",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：各种各样的)",
      "original": "The manager asked the entire team to carefully various kinds of the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】various kinds of (各种各样的)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "look forward to": {
    "word": "look forward to",
    "phonetic": "/look forward to/",
    "translation": "盼望; 期待",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：盼望)",
      "original": "It is essential to look forward to this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】look forward to (盼望)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "owe": {
    "word": "owe",
    "phonetic": "/əu/",
    "translation": "归欠; 负债; 感激",
    "cloze": {
      "sentence": "How much do I ______ you for the groceries?",
      "translation": "该语境考查核心词义【归欠】在真实例句中的精准搭配。",
      "original": "How much do I owe you for the groceries?"
    },
    "form_confusables": [
      "browse",
      "powder",
      "move",
      "code"
    ],
    "semantic_confusables": [
      "appreciate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】owe (归欠)；【形近易混】browse, powder, move；【近义搭配】appreciate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "profit": {
    "word": "profit",
    "phonetic": "/'prɔfit/",
    "translation": "利润; 收益",
    "cloze": {
      "sentence": "Damaged goods mean lost ______.",
      "translation": "该语境考查核心词义【利润】在权威语篇中的实际运用。",
      "original": "Damaged goods mean lost profit."
    },
    "form_confusables": [
      "proof",
      "profound",
      "promote",
      "provide"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】profit (利润)；【形近易混】proof, profound, promote；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in the market for": {
    "word": "in the market for",
    "phonetic": "/in the market for/",
    "translation": "想要购买; 欲购",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：想要购买)",
      "original": "The manager asked the entire team to carefully in the market for the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in the market for (想要购买)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "enquiry": {
    "word": "enquiry",
    "phonetic": "/in'kwaiəri/",
    "translation": "询盘; 询价",
    "cloze": {
      "sentence": "The police are following several lines of ______ .",
      "translation": "该语境考查核心词义【询盘】在真实例句中的精准搭配。",
      "original": "The police are following several lines of enquiry ."
    },
    "form_confusables": [
      "require",
      "ensure",
      "deny",
      "chemistry"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】enquiry (询盘)；【形近易混】require, ensure, deny；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "opportunity": {
    "word": "opportunity",
    "phonetic": "/,ɔpə'tju:niti/",
    "translation": "商业良机; 契机",
    "cloze": {
      "sentence": "He saw a great ______ to make some money.",
      "translation": "该语境考查核心词义【商业良机】在权威语篇中的实际运用。",
      "original": "He saw a great opportunity to make some money."
    },
    "form_confusables": [
      "community",
      "proportion",
      "corporation",
      "unfortunate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】opportunity (商业良机)；【形近易混】community, proportion, corporation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "desire": {
    "word": "desire",
    "phonetic": "/di'zaiə/",
    "translation": "渴望; 期望; 愿望",
    "cloze": {
      "sentence": "He felt he was nothing more to her than an object of ______.",
      "translation": "该语境考查核心词义【渴望】在权威语篇中的实际运用。",
      "original": "He felt he was nothing more to her than an object of desire."
    },
    "form_confusables": [
      "descend",
      "expire",
      "decline",
      "ensure"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】desire (渴望)；【形近易混】descend, expire, decline；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "handle": {
    "word": "handle",
    "phonetic": "/'hændl/",
    "translation": "经营; 处理; 经手",
    "cloze": {
      "sentence": "He wasn't mentally equipped to ______ this situation.",
      "translation": "该语境考查核心词义【经营】在权威语篇中的实际运用。",
      "original": "He wasn't mentally equipped to handle this situation."
    },
    "form_confusables": [
      "shade",
      "chance",
      "wander",
      "enhance"
    ],
    "semantic_confusables": [
      "process",
      "cope",
      "change",
      "manage"
    ],
    "notes": "【正解考点】handle (经营)；【形近易混】shade, chance, wander；【近义搭配】process, cope, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "attach": {
    "word": "attach",
    "phonetic": "/ə'tætʃ/",
    "translation": "附上; 附带; 贴上",
    "cloze": {
      "sentence": "I ______ a copy of the contract for your records.",
      "translation": "该语境考查核心词义【附上】在权威语篇中的实际运用。",
      "original": "I attach a copy of the contract for your records."
    },
    "form_confusables": [
      "approach",
      "dispatch",
      "beach",
      "coach"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】attach (附上)；【形近易混】approach, dispatch, beach；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "regarding": {
    "word": "regarding",
    "phonetic": "/ri'ɡɑ:diŋ; ri:-/",
    "translation": "关于; 至于",
    "cloze": {
      "sentence": "She has said nothing ______ your request.",
      "translation": "该语境考查核心词义【关于】在真实例句中的精准搭配。",
      "original": "She has said nothing regarding your request."
    },
    "form_confusables": [
      "leading",
      "reduction",
      "ruling",
      "accordingly"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】regarding (关于)；【形近易混】leading, reduction, ruling；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "for one's reference": {
    "word": "for one's reference",
    "phonetic": "/for one's reference/",
    "translation": "供某方参考",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：供某方参考)",
      "original": "Recent studies clearly show that we must for one's reference modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】for one's reference (供某方参考)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "rough": {
    "word": "rough",
    "phonetic": "/rʌf/",
    "translation": "大致的; 粗略的",
    "cloze": {
      "sentence": "Her voice was ______ with emotion.",
      "translation": "该语境考查核心词义【大致的】在权威语篇中的实际运用。",
      "original": "Her voice was rough with emotion."
    },
    "form_confusables": [
      "cough",
      "couch",
      "crush",
      "ruling"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】rough (大致的)；【形近易混】cough, couch, crush；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "chamber of commerce": {
    "word": "chamber of commerce",
    "phonetic": "/略作 C of C/",
    "translation": "总商会; 商会",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：总商会)",
      "original": "Recent studies clearly show that we must chamber of commerce modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】chamber of commerce (总商会)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "requirement": {
    "word": "requirement",
    "phonetic": "/ri'kwaiəmənt/",
    "translation": "规格要求; 必备条件",
    "cloze": {
      "sentence": "An open system of criminal justice is a fundamental ______ of any democratic society.",
      "translation": "该语境考查核心词义【规格要求】在真实例句中的精准搭配。",
      "original": "An open system of criminal justice is a fundamental requirement of any democratic society."
    },
    "form_confusables": [
      "precedent",
      "engagement",
      "fragment",
      "recently"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】requirement (规格要求)；【形近易混】precedent, engagement, fragment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "recommend": {
    "word": "recommend",
    "phonetic": "/,rekə'mend/",
    "translation": "推荐; 介绍",
    "cloze": {
      "sentence": "Here are a few safeguards I ______ to my clients.",
      "translation": "该语境考查核心词义【推荐】在权威语篇中的实际运用。",
      "original": "Here are a few safeguards I recommend to my clients."
    },
    "form_confusables": [
      "command",
      "remind",
      "comment",
      "recently"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】recommend (推荐)；【形近易混】command, remind, comment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "be in a position to": {
    "word": "be in a position to",
    "phonetic": "/be in a position to/",
    "translation": "有能力做; 能够",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：有能力做)",
      "original": "The manager asked the entire team to carefully be in a position to the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "could",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】be in a position to (有能力做)；【形近易混】obtain, maintain, attain；【近义搭配】could, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "supply": {
    "zh": "供给；供应；补充",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "The logistics network must ______ essential materials to all front-line hospitals.",
      "translation": "物流网络必须向所有前线医院供应必需物资。"
    },
    "form_confusables": [
      {
        "word": "supply",
        "zh": "补给物资"
      },
      {
        "word": "apply",
        "zh": "申请应用"
      },
      {
        "word": "comply",
        "zh": "遵从顺应"
      },
      {
        "word": "simply",
        "zh": "仅仅简单"
      }
    ],
    "semantic_confusables": [
      {
        "word": "supply",
        "zh": "大量物资调运"
      },
      {
        "word": "provide",
        "zh": "提供供给"
      },
      {
        "word": "deliver",
        "zh": "投递送达"
      },
      {
        "word": "distribute",
        "zh": "分发配发"
      }
    ],
    "notes": "【搭配考点】supply goods/materials 补给物资；【形近辨析】apply (申请/应用)，comply (遵守)，simply (简单地)；【近义辨析】deliver 侧重送达交付，distribute 侧重分发分配。",
    "word": "supply",
    "translation": "供给；供应；补充",
    "phonetic": "/supply/"
  },
  "captioned goods": {
    "word": "captioned goods",
    "phonetic": "/captioned goods/",
    "translation": "标题所示货物; 该货物",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：标题所示货物)",
      "original": "The manager asked the entire team to carefully captioned goods the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】captioned goods (标题所示货物)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "domestic": {
    "word": "domestic",
    "phonetic": "/dəu'mestik/",
    "translation": "国内的; 本地的",
    "cloze": {
      "sentence": "Even passengers on ______ flights may be required to carry ID.",
      "translation": "该语境考查核心词义【国内的】在权威语篇中的实际运用。",
      "original": "Even passengers on domestic flights may be required to carry ID."
    },
    "form_confusables": [
      "static",
      "desire",
      "descend",
      "deposit"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】domestic (国内的)；【形近易混】static, desire, descend；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "reputation": {
    "word": "reputation",
    "phonetic": "/,repju'teiʃən/",
    "translation": "商誉; 名声; 声望",
    "cloze": {
      "sentence": "Franklin's historical ______ has fluctuated.",
      "translation": "该语境考查核心词义【商誉】在权威语篇中的实际运用。",
      "original": "Franklin's historical reputation has fluctuated."
    },
    "form_confusables": [
      "reduction",
      "creation",
      "quotation",
      "realization"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】reputation (商誉)；【形近易混】reduction, creation, quotation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "browse": {
    "word": "browse",
    "phonetic": "/brauz/",
    "translation": "浏览; 查阅",
    "cloze": {
      "sentence": "You are welcome to come in and ______.",
      "translation": "该语境考查核心词义【浏览】在权威语篇中的实际运用。",
      "original": "You are welcome to come in and browse."
    },
    "form_confusables": [
      "base",
      "owe",
      "loose",
      "prospect"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】browse (浏览)；【形近易混】base, owe, loose；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "a large quantity of": {
    "word": "a large quantity of",
    "phonetic": "/a large quantity of/",
    "translation": "大量的; 大批",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：大量的)",
      "original": "The committee agreed that this strategy will a large quantity of significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "substantial",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】a large quantity of (大量的)；【形近易混】obtain, maintain, attain；【近义搭配】substantial, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "cif": {
    "word": "cif",
    "phonetic": "/cif/",
    "translation": "到岸价(成本加运保费)",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：到岸价(成本加运保费))",
      "original": "Recent studies clearly show that we must cif modern standards in our research."
    },
    "form_confusables": [
      "cliff",
      "cite",
      "city",
      "chef"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】cif (到岸价(成本加运保费))；【形近易混】cliff, cite, city；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "illustrated catalogue": {
    "word": "illustrated catalogue",
    "phonetic": "/illustrated catalogue/",
    "translation": "附图产品目录; 图解样本",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：附图产品目录)",
      "original": "Recent studies clearly show that we must illustrated catalogue modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】illustrated catalogue (附图产品目录)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "acquaint": {
    "word": "acquaint",
    "phonetic": "/ə'kweint/",
    "translation": "使熟悉; 使了解",
    "cloze": {
      "sentence": "You must ______ with your new duties.",
      "translation": "你必须熟悉你的新职责。",
      "original": "You must acquaint with your new duties."
    },
    "form_confusables": [
      "vacant",
      "ancient",
      "abundant",
      "accurate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】acquaint (使熟悉)；【形近易混】vacant, ancient, abundant；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "discount": {
    "word": "discount",
    "phonetic": "/'diskaunt; dis'k-/",
    "translation": "折扣; 贴现",
    "cloze": {
      "sentence": "Customers are allowed a ______ on orders over £500.",
      "translation": "该语境考查核心词义【折扣】在权威语篇中的实际运用。",
      "original": "Customers are allowed a discount on orders over £500."
    },
    "form_confusables": [
      "count",
      "discretion",
      "county",
      "mount"
    ],
    "semantic_confusables": [
      "reduction",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】discount (折扣)；【形近易混】count, discretion, county；【近义搭配】reduction, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "delivery date": {
    "word": "delivery date",
    "phonetic": "/delivery date/",
    "translation": "交货日期; 交期",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：交货日期)",
      "original": "Recent studies clearly show that we must delivery date modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】delivery date (交货日期)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "workable": {
    "word": "workable",
    "phonetic": "/'wə:kəbl/",
    "translation": "可行的; 行得通的",
    "cloze": {
      "sentence": "I'm sure we can come to some ______ arrangement.",
      "translation": "该语境考查核心词义【可行的】在权威语篇中的实际运用。",
      "original": "I'm sure we can come to some workable arrangement."
    },
    "form_confusables": [
      "morale",
      "comfortable",
      "enable",
      "noticeable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】workable (可行的)；【形近易混】morale, comfortable, enable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in reply to": {
    "word": "in reply to",
    "phonetic": "/in reply to/",
    "translation": "答复; 回函",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：答复)",
      "original": "Recent studies clearly show that we must in reply to modern standards in our research."
    },
    "form_confusables": [
      "interest",
      "inventory",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in reply to (答复)；【形近易混】interest, inventory, obtain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "leading": {
    "word": "leading",
    "phonetic": "/span>ing</",
    "translation": "主要的; 行业领先的",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：主要的)",
      "original": "The committee agreed that this strategy will leading significant long-term growth."
    },
    "form_confusables": [
      "regarding",
      "cling",
      "ruling",
      "clean"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】leading (主要的)；【形近易混】regarding, cling, ruling；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "manufacturer": {
    "word": "manufacturer",
    "phonetic": "/,mænju'fæktʃərə/",
    "translation": "生产厂家; 制造商",
    "cloze": {
      "sentence": "The guarantee may be rendered invalid if the ______'s instructions are not followed.",
      "translation": "该语境考查核心词义【生产厂家】在权威语篇中的实际运用。",
      "original": "The guarantee may be rendered invalid if the manufacturer's instructions are not followed."
    },
    "form_confusables": [
      "mandatory",
      "character",
      "characterize",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】manufacturer (生产厂家)；【形近易混】mandatory, character, characterize；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "demand": {
    "zh": "要求；需求；质问",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "Consumers increasingly ______ sustainable packaging and ethical production practices.",
      "translation": "消费者日益要求使用环保包装与符合伦理的生产规范。"
    },
    "form_confusables": [
      {
        "word": "demand",
        "zh": "强烈要求"
      },
      {
        "word": "command",
        "zh": "统率命令"
      },
      {
        "word": "defend",
        "zh": "防御保卫"
      },
      {
        "word": "remand",
        "zh": "还押羁押"
      }
    ],
    "semantic_confusables": [
      {
        "word": "demand",
        "zh": "强烈要求权利"
      },
      {
        "word": "require",
        "zh": "规则要求"
      },
      {
        "word": "request",
        "zh": "客气恳请"
      },
      {
        "word": "insist",
        "zh": "坚决主张"
      }
    ],
    "notes": "【搭配考点】demand changes/answers 强烈要求；【形近辨析】command (命令/统率)，defend (防御)，remand (还押)；【近义辨析】request 侧重客气请求，insist 侧重坚持主张。",
    "word": "demand",
    "translation": "要求；需求；质问",
    "phonetic": "/demand/"
  },
  "provide": {
    "zh": "提供；供给；装备",
    "level": "A2/CET-4",
    "cloze": {
      "sentence": "The user manual will ______ detailed instructions on operating the equipment.",
      "translation": "该用户手册将提供关于设备操作的详尽指导。"
    },
    "form_confusables": [
      {
        "word": "provide",
        "zh": "提供供给"
      },
      {
        "word": "prove",
        "zh": "证实证明"
      },
      {
        "word": "provoke",
        "zh": "激怒挑衅"
      },
      {
        "word": "prevail",
        "zh": "盛行战胜"
      }
    ],
    "semantic_confusables": [
      {
        "word": "provide",
        "zh": "提供指导材料"
      },
      {
        "word": "supply",
        "zh": "供应补给物资"
      },
      {
        "word": "furnish",
        "zh": "装备配备"
      },
      {
        "word": "offer",
        "zh": "提供提议"
      }
    ],
    "notes": "【搭配考点】provide instructions/support 提供支持或信息；【形近辨析】prove (证明)，provoke (挑衅)，prevail (流行/获胜)；【近义辨析】supply 侧重大量物资供应，furnish 较正式。",
    "word": "provide",
    "translation": "提供；供给；装备",
    "phonetic": "/provide/"
  },
  "minimum order quantity": {
    "word": "minimum order quantity",
    "phonetic": "/minimum order quantity/",
    "translation": "最小起订量(MOQ)",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：最小起订量(MOQ))",
      "original": "The manager asked the entire team to carefully minimum order quantity the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】minimum order quantity (最小起订量(MOQ))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "payment terms": {
    "word": "payment terms",
    "phonetic": "/payment terms/",
    "translation": "付款条件; 支付方式",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：付款条件)",
      "original": "It is essential to payment terms this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】payment terms (付款条件)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "irrevocable": {
    "word": "irrevocable",
    "phonetic": "/i'revəkəbl; iri'vəukəbl/",
    "translation": "不可撤销的(信用证)",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：不可撤销的(信用证))",
      "original": "Recent studies clearly show that we must irrevocable modern standards in our research."
    },
    "form_confusables": [
      "reasonable",
      "noticeable",
      "insufferable",
      "workable"
    ],
    "semantic_confusables": [
      "issuance",
      "amend",
      "extension",
      "change"
    ],
    "notes": "【正解考点】irrevocable (不可撤销的(信用证))；【形近易混】reasonable, noticeable, insufferable；【近义搭配】issuance, amend, extension。注意在语境中甄别固定搭配与语义内涵。"
  },
  "reasonable": {
    "word": "reasonable",
    "phonetic": "/'ri:zənəbl/",
    "translation": "合理的; 适度的",
    "cloze": {
      "sentence": "The police apparently thought this explanation perfectly ______.",
      "translation": "该语境考查核心词义【合理的】在权威语篇中的实际运用。",
      "original": "The police apparently thought this explanation perfectly reasonable."
    },
    "form_confusables": [
      "resolve",
      "irrevocable",
      "rational",
      "revolve"
    ],
    "semantic_confusables": [
      "rational",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】reasonable (合理的)；【形近易混】resolve, irrevocable, rational；【近义搭配】rational, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "trial order": {
    "word": "trial order",
    "phonetic": "/trial order/",
    "translation": "试订单; 试购",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：试订单)",
      "original": "The committee agreed that this strategy will trial order significant long-term growth."
    },
    "form_confusables": [
      "catalogue",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】trial order (试订单)；【形近易混】catalogue, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "inclusive": {
    "word": "inclusive",
    "phonetic": "/in'klu:siv/",
    "translation": "包含在内的; 包括的",
    "cloze": {
      "sentence": "The government wants communities which are socially ______.",
      "translation": "该语境考查核心词义【包含在内的】在权威语篇中的实际运用。",
      "original": "The government wants communities which are socially inclusive."
    },
    "form_confusables": [
      "incline",
      "involve",
      "clause",
      "involved"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】inclusive (包含在内的)；【形近易混】incline, involve, clause；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "superior": {
    "word": "superior",
    "phonetic": "/sju:'piriə; sju:pə-/",
    "translation": "优质的; 高品质的",
    "cloze": {
      "sentence": "Plainly, you possess an altogether ______ intellect.",
      "translation": "该语境考查核心词义【优质的】在权威语篇中的实际运用。",
      "original": "Plainly, you possess an altogether superior intellect."
    },
    "form_confusables": [
      "successor",
      "perform",
      "competitor",
      "corridor"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】superior (优质的)；【形近易混】successor, perform, competitor；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "be in line with": {
    "word": "be in line with",
    "phonetic": "/be in line with/",
    "translation": "与...相符; 符合",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：与...相符)",
      "original": "Recent studies clearly show that we must be in line with modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "conform",
      "correspond",
      "change",
      "manage"
    ],
    "notes": "【正解考点】be in line with (与...相符)；【形近易混】obtain, maintain, attain；【近义搭配】conform, correspond, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "state": {
    "word": "state",
    "phonetic": "/steit/",
    "translation": "陈述; 说明; 声称",
    "cloze": {
      "sentence": "Babies can cry themselves into a ______ of frenzy.",
      "translation": "该语境考查核心词义【陈述】在权威语篇中的实际运用。",
      "original": "Babies can cry themselves into a state of frenzy."
    },
    "form_confusables": [
      "stake",
      "stale",
      "static",
      "hesitate"
    ],
    "semantic_confusables": [
      "claim",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】state (陈述)；【形近易混】stake, stale, static；【近义搭配】claim, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "be prepared to": {
    "word": "be prepared to",
    "phonetic": "/be prepared to/",
    "translation": "准备好做; 愿意",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：准备好做)",
      "original": "It is essential to be prepared to this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】be prepared to (准备好做)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "shipment": {
    "word": "shipment",
    "phonetic": "/'ʃipmənt/",
    "translation": "装船; 装运; 运送",
    "cloze": {
      "sentence": "Customers can track a ______ over the Web.",
      "translation": "该语境考查核心词义【装船】在权威语篇中的实际运用。",
      "original": "Customers can track a shipment over the Web."
    },
    "form_confusables": [
      "payment",
      "consignment",
      "commitment",
      "client"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】shipment (装船)；【形近易混】payment, consignment, commitment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "conclude business": {
    "word": "conclude business",
    "phonetic": "/conclude business/",
    "translation": "成交; 达成交易",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：成交)",
      "original": "It is essential to conclude business this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】conclude business (成交)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "available": {
    "word": "available",
    "phonetic": "/ə'veiləbl/",
    "translation": "现货的; 可供应的",
    "cloze": {
      "sentence": "Grants should be ______ for all students.",
      "translation": "该语境考查核心词义【现货的】在权威语篇中的实际运用。",
      "original": "Grants should be available for all students."
    },
    "form_confusables": [
      "acceptable",
      "enable",
      "noticeable",
      "reasonable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】available (现货的)；【形近易混】acceptable, enable, noticeable；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "substantial": {
    "word": "substantial",
    "phonetic": "/səb'stænʃəl/",
    "translation": "大量的; 可观的; 实质的",
    "cloze": {
      "sentence": "There were ______ sums of money involved.",
      "translation": "该语境考查核心词义【大量的】在权威语篇中的实际运用。",
      "original": "There were substantial sums of money involved."
    },
    "form_confusables": [
      "constantly",
      "rational",
      "constant",
      "practical"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】substantial (大量的)；【形近易混】constantly, rational, constant；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in receipt of": {
    "word": "in receipt of",
    "phonetic": "/in receipt of/",
    "translation": "已收到; 接到",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：已收到)",
      "original": "The committee agreed that this strategy will in receipt of significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in receipt of (已收到)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "firm": {
    "word": "firm",
    "phonetic": "/'fə:m/",
    "translation": "实盘; 坚挺的; 商行",
    "cloze": {
      "sentence": "She hired a ______ of private detectives to follow him.",
      "translation": "该语境考查核心词义【实盘】在权威语篇中的实际运用。",
      "original": "She hired a firm of private detectives to follow him."
    },
    "form_confusables": [
      "form",
      "confirm",
      "frame",
      "formal"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】firm (实盘)；【形近易混】form, confirm, frame；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "comply with": {
    "word": "comply with",
    "phonetic": "/comply with/",
    "translation": "遵从; 符合; 遵守",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：遵从)",
      "original": "The committee agreed that this strategy will comply with significant long-term growth."
    },
    "form_confusables": [
      "complaint",
      "complexity",
      "complicated",
      "complain"
    ],
    "semantic_confusables": [
      "conform",
      "comply",
      "correspond",
      "change"
    ],
    "notes": "【正解考点】comply with (遵从)；【形近易混】complaint, complexity, complicated；【近义搭配】conform, comply, correspond。注意在语境中甄别固定搭配与语义内涵。"
  },
  "await": {
    "word": "await",
    "phonetic": "/ə'weit/",
    "translation": "等待; 恭候(回信)",
    "cloze": {
      "sentence": "Who knows what dangers may ______ us?",
      "translation": "该语境考查核心词义【等待】在权威语篇中的实际运用。",
      "original": "Who knows what dangers may await us?"
    },
    "form_confusables": [
      "acquaint",
      "adapt",
      "twist",
      "awkward"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】await (等待)；【形近易混】acquaint, adapt, twist；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "following": {
    "word": "following",
    "phonetic": "/'fɔləuiŋ/",
    "translation": "下列的; 以下",
    "cloze": {
      "sentence": "They enjoy a cult ______ in Japan.",
      "translation": "该语境考查核心词义【下列的】在权威语篇中的实际运用。",
      "original": "They enjoy a cult following in Japan."
    },
    "form_confusables": [
      "ongoing",
      "ruling",
      "collision",
      "leading"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】following (下列的)；【形近易混】ongoing, ruling, collision；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "anxious": {
    "word": "anxious",
    "phonetic": "/'ænkʃəs/",
    "translation": "急切的; 焦虑的",
    "cloze": {
      "sentence": "I'm becoming very ______ about my son.",
      "translation": "该语境考查核心词义【急切的】在权威语篇中的实际运用。",
      "original": "I'm becoming very anxious about my son."
    },
    "form_confusables": [
      "conscious",
      "curious",
      "continuous",
      "basis"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】anxious (急切的)；【形近易混】conscious, curious, continuous；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "out of line with": {
    "word": "out of line with",
    "phonetic": "/out of line with/",
    "translation": "与...不相符合",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：与...不相符合)",
      "original": "It is essential to out of line with this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】out of line with (与...不相符合)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "pack": {
    "word": "pack",
    "phonetic": "/pæk/",
    "translation": "包装; 打包",
    "cloze": {
      "sentence": "I think we might as well ______ up and go home.",
      "translation": "该语境考查核心词义【包装】在权威语篇中的实际运用。",
      "original": "I think we might as well pack up and go home."
    },
    "form_confusables": [
      "crack",
      "space",
      "compact",
      "cook"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】pack (包装)；【形近易混】crack, space, compact；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ruling": {
    "word": "ruling",
    "phonetic": "/span>ing</",
    "translation": "通行的; 普遍的; 现行的",
    "cloze": {
      "sentence": "The House of Lords will make a final ______ on the case next week.",
      "translation": "该语境考查核心词义【通行的】在权威语篇中的实际运用。",
      "original": "The House of Lords will make a final ruling on the case next week."
    },
    "form_confusables": [
      "cling",
      "leading",
      "regarding",
      "following"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】ruling (通行的)；【形近易混】cling, leading, regarding；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "minimum": {
    "word": "minimum",
    "phonetic": "/'miniməm/",
    "translation": "最低的; 最低限度",
    "cloze": {
      "sentence": "Candidates must have a degree at a ______.",
      "translation": "该语境考查核心词义【最低的】在权威语篇中的实际运用。",
      "original": "Candidates must have a degree at a minimum."
    },
    "form_confusables": [
      "maintain",
      "obtain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】minimum (最低的)；【形近易混】maintain, obtain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "validity": {
    "word": "validity",
    "phonetic": "/və'lidəti/",
    "translation": "有效期; 有效性",
    "cloze": {
      "sentence": "His reputation lends a certain ______ to the approach that it might not deserve.",
      "translation": "该语境考查核心词义【有效期】在权威语篇中的实际运用。",
      "original": "His reputation lends a certain validity to the approach that it might not deserve."
    },
    "form_confusables": [
      "indicate",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】validity (有效期)；【形近易混】indicate, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "deal": {
    "word": "deal",
    "phonetic": "/di:l/",
    "translation": "交易; 协定",
    "cloze": {
      "sentence": "Not all complaints are so easily ______ with.",
      "translation": "该语境考查核心词义【交易】在权威语篇中的实际运用。",
      "original": "Not all complaints are so easily dealt with."
    },
    "form_confusables": [
      "deaf",
      "delay",
      "demand",
      "develop"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】deal (交易)；【形近易混】deaf, delay, demand；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "reduction": {
    "word": "reduction",
    "phonetic": "/ri'dʌkʃən/",
    "translation": "减价; 折扣; 缩减",
    "cloze": {
      "sentence": "Every effort is made to secure the highest possible ______ in casualties.",
      "translation": "该语境考查核心词义【减价】在权威语篇中的实际运用。",
      "original": "Every effort is made to secure the highest possible reduction in casualties."
    },
    "form_confusables": [
      "reputation",
      "correction",
      "fraction",
      "creation"
    ],
    "semantic_confusables": [
      "discount",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】reduction (减价)；【形近易混】reputation, correction, fraction；【近义搭配】discount, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "proforma invoice": {
    "word": "proforma invoice",
    "phonetic": "/proforma invoice/",
    "translation": "形式发票(PI)",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：形式发票(PI))",
      "original": "The manager asked the entire team to carefully proforma invoice the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】proforma invoice (形式发票(PI))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "authority": {
    "word": "authority",
    "phonetic": "/ɔ:'θɔrəti/",
    "translation": "主管机构; 授权; 权威",
    "cloze": {
      "sentence": "Central government has extensive ______ over teachers.",
      "translation": "该语境考查核心词义【主管机构】在权威语篇中的实际运用。",
      "original": "Central government has extensive authority over teachers."
    },
    "form_confusables": [
      "curiosity",
      "mandatory",
      "opportunity",
      "accordingly"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】authority (主管机构)；【形近易混】curiosity, mandatory, opportunity；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "commercial invoice": {
    "word": "commercial invoice",
    "phonetic": "/commercial invoice/",
    "translation": "商业发票(CI)",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：商业发票(CI))",
      "original": "It is essential to commercial invoice this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】commercial invoice (商业发票(CI))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "for your information": {
    "word": "for your information",
    "phonetic": "/for your information/",
    "translation": "供你方参考(FYI)",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：供你方参考(FYI))",
      "original": "The committee agreed that this strategy will for your information significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】for your information (供你方参考(FYI))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in triplicate": {
    "word": "in triplicate",
    "phonetic": "/in triplicate/",
    "translation": "一式三份",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：一式三份)",
      "original": "The committee agreed that this strategy will in triplicate significant long-term growth."
    },
    "form_confusables": [
      "initiative",
      "complicated",
      "communicate",
      "contribute"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in triplicate (一式三份)；【形近易混】initiative, complicated, communicate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "take action": {
    "word": "take action",
    "phonetic": "/take action/",
    "translation": "采取行动; 积极处理",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：采取行动)",
      "original": "The manager asked the entire team to carefully take action the operational requirements."
    },
    "form_confusables": [
      "allegation",
      "fraction",
      "reduction",
      "quotation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】take action (采取行动)；【形近易混】allegation, fraction, reduction；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "import license": {
    "word": "import license",
    "phonetic": "/import license/",
    "translation": "进口许可证",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：进口许可证)",
      "original": "Recent studies clearly show that we must import license modern standards in our research."
    },
    "form_confusables": [
      "comprehensive",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】import license (进口许可证)；【形近易混】comprehensive, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "counter offer": {
    "word": "counter offer",
    "phonetic": "/counter offer/",
    "translation": "还盘; 还价",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：还盘)",
      "original": "Recent studies clearly show that we must counter offer modern standards in our research."
    },
    "form_confusables": [
      "countersign",
      "countryside",
      "contemporary",
      "conference"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】counter offer (还盘)；【形近易混】countersign, countryside, contemporary；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "installment": {
    "word": "installment",
    "phonetic": "/installment/",
    "translation": "分期付款; 分期交付",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：分期付款)",
      "original": "The manager asked the entire team to carefully installment the operational requirements."
    },
    "form_confusables": [
      "constant",
      "instruct",
      "commitment",
      "engagement"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】installment (分期付款)；【形近易混】constant, instruct, commitment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "payment by installments": {
    "word": "payment by installments",
    "phonetic": "/payment by installments/",
    "translation": "分期付款",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：分期付款)",
      "original": "The manager asked the entire team to carefully payment by installments the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "installment",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】payment by installments (分期付款)；【形近易混】obtain, maintain, attain；【近义搭配】installment, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "provided": {
    "word": "provided",
    "phonetic": "/symbols/",
    "translation": "假如; 以...为条件",
    "cloze": {
      "sentence": "We'll buy everything you produce, ______ of course the price is right.",
      "translation": "该语境考查核心词义【假如】在真实例句中的精准搭配。",
      "original": "We'll buy everything you produce, provided of course the price is right."
    },
    "form_confusables": [
      "provide",
      "proceed",
      "procedure",
      "profit"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】provided (假如)；【形近易混】provide, proceed, procedure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "terms and conditions": {
    "word": "terms and conditions",
    "phonetic": "/terms and conditions/",
    "translation": "条款与条件; 合同细则",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：条款与条件)",
      "original": "The committee agreed that this strategy will terms and conditions significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】terms and conditions (条款与条件)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stipulate": {
    "zh": "规定；保证；讲明要求",
    "level": "C1/CET-6",
    "cloze": {
      "sentence": "The employment agreement must explicitly ______ the working hours and overtime compensation.",
      "translation": "雇佣协议必须明确规定工作时间及加班补偿。"
    },
    "form_confusables": [
      {
        "word": "stipulate",
        "zh": "明文规定"
      },
      {
        "word": "stimulate",
        "zh": "刺激激发"
      },
      {
        "word": "simulate",
        "zh": "模拟仿造"
      },
      {
        "word": "speculate",
        "zh": "推测投机"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stipulate",
        "zh": "合同条款规定"
      },
      {
        "word": "specify",
        "zh": "详细明确载明"
      },
      {
        "word": "prescribe",
        "zh": "条例指定开方"
      },
      {
        "word": "state",
        "zh": "陈述讲明"
      }
    ],
    "notes": "【搭配考点】stipulate terms/conditions 合同或法律明文规定；【形近辨析】stimulate (刺激/激发)，simulate (模拟)，speculate (推测/投机)；【近义辨析】specify 侧重详细指明，prescribe 侧重规定条例或开处方。",
    "word": "stipulate",
    "translation": "规定；保证；讲明要求",
    "phonetic": "/stipulate/"
  },
  "make clear": {
    "word": "make clear",
    "phonetic": "/make clear/",
    "translation": "阐明; 解释清楚",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：阐明)",
      "original": "It is essential to make clear this critical process before making any final decisions."
    },
    "form_confusables": [
      "maneuver",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "clarify",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】make clear (阐明)；【形近易混】maneuver, obtain, maintain；【近义搭配】clarify, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "accommodation": {
    "word": "accommodation",
    "phonetic": "/ə,kɔmə'deiʃən/",
    "translation": "通融; 调解; 贷款便利",
    "cloze": {
      "sentence": "Many old people choose to live in sheltered ______.",
      "translation": "该语境考查核心词义【通融】在权威语篇中的实际运用。",
      "original": "Many old people choose to live in sheltered accommodation."
    },
    "form_confusables": [
      "unaccommodating",
      "consolidation",
      "communication",
      "combination"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】accommodation (通融)；【形近易混】unaccommodating, consolidation, communication；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "give consideration to": {
    "word": "give consideration to",
    "phonetic": "/give consideration to/",
    "translation": "考虑; 顾及",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：考虑)",
      "original": "The committee agreed that this strategy will give consideration to significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "consider",
      "consideration",
      "change",
      "manage"
    ],
    "notes": "【正解考点】give consideration to (考虑)；【形近易混】obtain, maintain, attain；【近义搭配】consider, consideration, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "lead to": {
    "word": "lead to",
    "phonetic": "/lead to/",
    "translation": "导致; 引致; 促成",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：导致)",
      "original": "It is essential to lead to this critical process before making any final decisions."
    },
    "form_confusables": [
      "leading",
      "lease",
      "allegation",
      "skeleton"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】lead to (导致)；【形近易混】leading, lease, allegation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "current market": {
    "word": "current market",
    "phonetic": "/current market/",
    "translation": "当前市场行情",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：当前市场行情)",
      "original": "The manager asked the entire team to carefully current market the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】current market (当前市场行情)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "indicate": {
    "word": "indicate",
    "phonetic": "/'indikeit/",
    "translation": "表明; 指出; 显示",
    "cloze": {
      "sentence": "Symbols are used to ______ the facilities available at each hotel.",
      "translation": "该语境考查核心词义【表明】在权威语篇中的实际运用。",
      "original": "Symbols are used to indicate the facilities available at each hotel."
    },
    "form_confusables": [
      "duplicate",
      "candidate",
      "initiative",
      "communicate"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】indicate (表明)；【形近易混】duplicate, candidate, initiative；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "similar": {
    "word": "similar",
    "phonetic": "/'similə/",
    "translation": "相似的; 类似的",
    "cloze": {
      "sentence": "The scene in the picture was eerily ______ to what I had seen in my dream.",
      "translation": "该语境考查核心词义【相似的】在权威语篇中的实际运用。",
      "original": "The scene in the picture was eerily similar to what I had seen in my dream."
    },
    "form_confusables": [
      "soar",
      "stir",
      "sail",
      "clear"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】similar (相似的)；【形近易混】soar, stir, sail；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "invite one's attention to": {
    "word": "invite one's attention to",
    "phonetic": "/invite one's attention to/",
    "translation": "提请某方注意",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：提请某方注意)",
      "original": "The committee agreed that this strategy will invite one's attention to significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】invite one's attention to (提请某方注意)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "opinion": {
    "word": "opinion",
    "phonetic": "/ə'pinjən/",
    "translation": "意见; 见解",
    "cloze": {
      "sentence": "That's a matter of ______.",
      "translation": "该语境考查核心词义【意见】在权威语篇中的实际运用。",
      "original": "That's a matter of opinion."
    },
    "form_confusables": [
      "companion",
      "union",
      "coalition",
      "collision"
    ],
    "semantic_confusables": [
      "comment",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】opinion (意见)；【形近易混】companion, union, coalition；【近义搭配】comment, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "measure up to": {
    "word": "measure up to",
    "phonetic": "/measure up to/",
    "translation": "符合标准; 达到要求",
    "cloze": {
      "sentence": "The party did not ______ their expectations.",
      "translation": "聚会没有达到他们的期望。",
      "original": "The party did not measure up to their expectations."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】measure up to (符合标准)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bring down": {
    "word": "bring down",
    "phonetic": "/口语/",
    "translation": "降低价格; 下调",
    "cloze": {
      "sentence": "The dealers have been asked to ______ their prices.",
      "translation": "要求商人们降低物价。",
      "original": "The dealers have been asked to bring down their prices."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】bring down (降低价格)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "at your end": {
    "word": "at your end",
    "phonetic": "/at your end/",
    "translation": "在你方所在地; 你方处",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：在你方所在地)",
      "original": "The manager asked the entire team to carefully at your end the operational requirements."
    },
    "form_confusables": [
      "creature",
      "catalogue",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】at your end (在你方所在地)；【形近易混】creature, catalogue, obtain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "deny": {
    "word": "deny",
    "phonetic": "/di'nai/",
    "translation": "拒绝; 否认",
    "cloze": {
      "sentence": "I know it was you I saw, so there's no use trying to ______ it.",
      "translation": "该语境考查核心词义【拒绝】在权威语篇中的实际运用。",
      "original": "I know it was you I saw, so there's no use trying to deny it."
    },
    "form_confusables": [
      "delay",
      "demand",
      "descend",
      "decline"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】deny (拒绝)；【形近易混】delay, demand, descend；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in your interest": {
    "word": "in your interest",
    "phonetic": "/in your interest/",
    "translation": "为了你方的利益",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：为了你方的利益)",
      "original": "The committee agreed that this strategy will in your interest significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in your interest (为了你方的利益)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "on the low side": {
    "word": "on the low side",
    "phonetic": "/on the low side/",
    "translation": "偏低; 偏少",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：偏低)",
      "original": "It is essential to on the low side this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】on the low side (偏低)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "see one's way clear to": {
    "word": "see one's way clear to",
    "phonetic": "/see one's way clear to/",
    "translation": "设法做到; 考虑能够",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：设法做到)",
      "original": "The committee agreed that this strategy will see one's way clear to significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】see one's way clear to (设法做到)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "satisfy": {
    "word": "satisfy",
    "phonetic": "/'sætisfai/",
    "translation": "使满意; 满足",
    "cloze": {
      "sentence": "His answer seemed to ______ her.",
      "translation": "该语境考查核心词义【使满意】在权威语篇中的实际运用。",
      "original": "His answer seemed to satisfy her."
    },
    "form_confusables": [
      "notify",
      "static",
      "sail",
      "satellite"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】satisfy (使满意)；【形近易混】notify, static, sail；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "order": {
    "word": "order",
    "phonetic": "/'ɔ:də/",
    "translation": "订单; 订购",
    "cloze": {
      "sentence": "He accepted that he'd been out of ______.",
      "translation": "该语境考查核心词义【订单】在权威语篇中的实际运用。",
      "original": "He accepted that he'd been out of order."
    },
    "form_confusables": [
      "powder",
      "corner",
      "modern",
      "consider"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】order (订单)；【形近易混】powder, corner, modern；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "for one's account": {
    "word": "for one's account",
    "phonetic": "/for one's account/",
    "translation": "由某方承担/记账",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：由某方承担/记账)",
      "original": "The committee agreed that this strategy will for one's account significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】for one's account (由某方承担/记账)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in urgent need of": {
    "word": "in urgent need of",
    "phonetic": "/in urgent need of/",
    "translation": "急需; 迫切需要",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：急需)",
      "original": "It is essential to in urgent need of this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in urgent need of (急需)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in one's favor": {
    "word": "in one's favor",
    "phonetic": "/in one's favor/",
    "translation": "以某方为受益人",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：以某方为受益人)",
      "original": "It is essential to in one's favor this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in one's favor (以某方为受益人)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "make delivery": {
    "word": "make delivery",
    "phonetic": "/make delivery/",
    "translation": "交付货物; 交货",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：交付货物)",
      "original": "Recent studies clearly show that we must make delivery modern standards in our research."
    },
    "form_confusables": [
      "anniversary",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】make delivery (交付货物)；【形近易混】anniversary, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "on or about": {
    "word": "on or about",
    "phonetic": "/on or about/",
    "translation": "在...前后; 约于某日",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：在...前后)",
      "original": "It is essential to on or about this critical process before making any final decisions."
    },
    "form_confusables": [
      "contribute",
      "contrast",
      "contract",
      "astronaut"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】on or about (在...前后)；【形近易混】contribute, contrast, contract；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "sales confirmation": {
    "word": "sales confirmation",
    "phonetic": "/sales confirmation/",
    "translation": "销售确认书(SC)",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：销售确认书(SC))",
      "original": "It is essential to sales confirmation this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】sales confirmation (销售确认书(SC))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "assure": {
    "word": "assure",
    "phonetic": "/ə'ʃuə/",
    "translation": "向...保证; 确信",
    "cloze": {
      "sentence": "Let me ______ you that I will try to help you.",
      "translation": "该语境考查核心词义【向...保证】在权威语篇中的实际运用。",
      "original": "Let me assure you that I will try to help you."
    },
    "form_confusables": [
      "assess",
      "ensure",
      "secure",
      "cure"
    ],
    "semantic_confusables": [
      "bet",
      "ensure",
      "change",
      "manage"
    ],
    "notes": "【正解考点】assure (向...保证)；【形近易混】assess, ensure, secure；【近义搭配】bet, ensure, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "duplicate": {
    "word": "duplicate",
    "phonetic": "/'dju:plikət; 'dju:plikeit/",
    "translation": "副本; 复制件; 一式两份",
    "cloze": {
      "sentence": "This is a natural look which you can easily ______ at home.",
      "translation": "该语境考查核心词义【副本】在权威语篇中的实际运用。",
      "original": "This is a natural look which you can easily duplicate at home."
    },
    "form_confusables": [
      "indicate",
      "complicated",
      "communicate",
      "climate"
    ],
    "semantic_confusables": [
      "copy",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】duplicate (副本)；【形近易混】indicate, complicated, communicate；【近义搭配】copy, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "effect": {
    "word": "effect",
    "phonetic": "/i'fekt/",
    "translation": "实行; 执行; 产生效果",
    "cloze": {
      "sentence": "Giving up smoking had a magical ______ on his stamina.",
      "translation": "该语境考查核心词义【实行】在权威语篇中的实际运用。",
      "original": "Giving up smoking had a magical effect on his stamina."
    },
    "form_confusables": [
      "exact",
      "react",
      "overreact",
      "executive"
    ],
    "semantic_confusables": [
      "perform",
      "execution",
      "change",
      "manage"
    ],
    "notes": "【正解考点】effect (实行)；【形近易混】exact, react, overreact；【近义搭配】perform, execution, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "book": {
    "word": "book",
    "phonetic": "/buk/",
    "translation": "订舱; 预订",
    "cloze": {
      "sentence": "His latest ______ will appear in December.",
      "translation": "该语境考查核心词义【订舱】在权威语篇中的实际运用。",
      "original": "His latest book will appear in December."
    },
    "form_confusables": [
      "cook",
      "bond",
      "moon",
      "cool"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】book (订舱)；【形近易混】cook, bond, moon；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "upon receipt of": {
    "word": "upon receipt of",
    "phonetic": "/书信用语/",
    "translation": "一俟收到; 刚一接到",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：一俟收到)",
      "original": "The manager asked the entire team to carefully upon receipt of the operational requirements."
    },
    "form_confusables": [
      "unprecedented",
      "obtain",
      "maintain",
      "attain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】upon receipt of (一俟收到)；【形近易混】unprecedented, obtain, maintain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "herewith": {
    "word": "herewith",
    "phonetic": "/,hiə'wið/",
    "translation": "随信附上; 特此",
    "cloze": {
      "sentence": "I enclose ______ a copy of the policy.",
      "translation": "该语境考查核心词义【随信附上】在真实例句中的精准搭配。",
      "original": "I enclose herewith a copy of the policy."
    },
    "form_confusables": [
      "cherish",
      "credit",
      "hesitate",
      "reunite"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】herewith (随信附上)；【形近易混】cherish, credit, hesitate；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "turn out": {
    "word": "turn out",
    "phonetic": "/口语/",
    "translation": "结果证明是; 生产出",
    "cloze": {
      "sentence": "Plans have been made to ______ more products of higher quality.",
      "translation": "已制订计划，生产更多高质量的产品。",
      "original": "Plans have been made to turn out more products of higher quality."
    },
    "form_confusables": [
      "astronaut",
      "current",
      "curious",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】turn out (结果证明是)；【形近易混】astronaut, current, curious；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "countersign": {
    "word": "countersign",
    "phonetic": "/'kauntə,sain/",
    "translation": "会签; 副署; 联署",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：会签)",
      "original": "It is essential to countersign this critical process before making any final decisions."
    },
    "form_confusables": [
      "countryside",
      "conversion",
      "conversation",
      "controversial"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】countersign (会签)；【形近易混】countryside, conversion, conversation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "find a good market": {
    "word": "find a good market",
    "phonetic": "/find a good market/",
    "translation": "销路很好; 畅销",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：销路很好)",
      "original": "The manager asked the entire team to carefully find a good market the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】find a good market (销路很好)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stock": {
    "word": "stock",
    "phonetic": "/stɔk/",
    "translation": "库存; 存货; 备货",
    "cloze": {
      "sentence": "Do you have futon beds in ______ or will I have to order one?",
      "translation": "该语境考查核心词义【库存】在权威语篇中的实际运用。",
      "original": "Do you have futon beds in stock or will I have to order one?"
    },
    "form_confusables": [
      "stake",
      "clock",
      "static",
      "custom"
    ],
    "semantic_confusables": [
      "inventory",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】stock (库存)；【形近易混】stake, clock, static；【近义搭配】inventory, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "approach": {
    "zh": "接近；探讨；方法途径",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "We need a creative ______ to solve the lingering technical bottleneck.",
      "translation": "我们需要一种创新的方法来解决这个悬而未决的技术瓶颈。"
    },
    "form_confusables": [
      {
        "word": "approach",
        "zh": "方法途径"
      },
      {
        "word": "reproach",
        "zh": "斥责谴责"
      },
      {
        "word": "appoint",
        "zh": "委派任命"
      },
      {
        "word": "approve",
        "zh": "核准赞成"
      }
    ],
    "semantic_confusables": [
      {
        "word": "approach",
        "zh": "攻关策略途径"
      },
      {
        "word": "method",
        "zh": "规程具体方法"
      },
      {
        "word": "strategy",
        "zh": "宏观长期战略"
      },
      {
        "word": "tactic",
        "zh": "应对战术手段"
      }
    ],
    "notes": "【搭配考点】approach to a problem 解决问题的方法/途径；【形近辨析】reproach (责备)，appoint (任命)，approve (赞同)；【近义辨析】method 侧重具体步骤，strategy 侧重宏观长远规划。",
    "word": "approach",
    "translation": "接近；探讨；方法途径",
    "phonetic": "/approach/"
  },
  "see to": {
    "word": "see to",
    "phonetic": "/see to/",
    "translation": "负责办理; 注意照看",
    "cloze": {
      "sentence": "You ______ this business.",
      "translation": "你来办这件事。",
      "original": "You see to this business."
    },
    "form_confusables": [
      "skeleton",
      "seek",
      "secure",
      "stock"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】see to (负责办理)；【形近易混】skeleton, seek, secure；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "dispatch": {
    "word": "dispatch",
    "phonetic": "/dis'pætʃ/",
    "translation": "发运; 发送; 调派",
    "cloze": {
      "sentence": "More food supplies are ready for immediate ______.",
      "translation": "该语境考查核心词义【发运】在真实例句中的精准搭配。",
      "original": "More food supplies are ready for immediate dispatch."
    },
    "form_confusables": [
      "discrepancy",
      "space",
      "attach",
      "discount"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】dispatch (发运)；【形近易混】discrepancy, space, attach；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "stipulation": {
    "word": "stipulation",
    "phonetic": "/,stipju'leiʃən/",
    "translation": "合同条款; 规定",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：合同条款)",
      "original": "The committee agreed that this strategy will stipulation significant long-term growth."
    },
    "form_confusables": [
      "stipulate",
      "constitution",
      "reputation",
      "fluctuation"
    ],
    "semantic_confusables": [
      "stipulate",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】stipulation (合同条款)；【形近易混】stipulate, constitution, reputation；【近义搭配】stipulate, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "have the pleasure of": {
    "word": "have the pleasure of",
    "phonetic": "/have the pleasure of/",
    "translation": "十分荣幸地; 高兴做",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：十分荣幸地)",
      "original": "The manager asked the entire team to carefully have the pleasure of the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】have the pleasure of (十分荣幸地)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "duplicate order": {
    "word": "duplicate order",
    "phonetic": "/duplicate order/",
    "translation": "追加订单; 重复订购",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：追加订单)",
      "original": "The manager asked the entire team to carefully duplicate order the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】duplicate order (追加订单)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "avoid": {
    "zh": "避免；逃避；躲避",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "Follow the strict instructions to ______ costly delays in the production line.",
      "translation": "遵守严格的操作指南，以避免生产线出现代价高昂的延误。"
    },
    "form_confusables": [
      {
        "word": "avoid",
        "zh": "防范避免"
      },
      {
        "word": "void",
        "zh": "作废空洞"
      },
      {
        "word": "avail",
        "zh": "利用起效"
      },
      {
        "word": "avid",
        "zh": "渴求贪婪"
      }
    ],
    "semantic_confusables": [
      {
        "word": "avoid",
        "zh": "预先避开延误"
      },
      {
        "word": "prevent",
        "zh": "防范使不发生"
      },
      {
        "word": "evade",
        "zh": "逃避躲避"
      },
      {
        "word": "escape",
        "zh": "逃脱逃避"
      }
    ],
    "notes": "【搭配考点】avoid delays/mistakes 避开/防止发生；【形近辨析】void (无效/空虚)，avail (利用)，avid (热切的)；【近义辨析】prevent 强调采取措施使之不发生，evade 强调带有欺骗或逃避责任性质地避开。",
    "word": "avoid",
    "translation": "避免；逃避；躲避",
    "phonetic": "/avoid/"
  },
  "duly": {
    "word": "duly",
    "phonetic": "/dju:li; 'du:li/",
    "translation": "适时地; 准时地; 正式地",
    "cloze": {
      "sentence": "The document was ______ signed by the inspector.",
      "translation": "该语境考查核心词义【适时地】在真实例句中的精准搭配。",
      "original": "The document was duly signed by the inspector."
    },
    "form_confusables": [
      "delay",
      "supply",
      "deny",
      "deal"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】duly (适时地)；【形近易混】delay, supply, deny；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "at one's earliest convenience": {
    "word": "at one's earliest convenience",
    "phonetic": "/at one's earliest convenience/",
    "translation": "尽早; 在方便时尽早",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：尽早)",
      "original": "The manager asked the entire team to carefully at one's earliest convenience the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】at one's earliest convenience (尽早)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "available steamer": {
    "word": "available steamer",
    "phonetic": "/available steamer/",
    "translation": "有舱位的货轮; 现成轮船",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：有舱位的货轮)",
      "original": "Recent studies clearly show that we must available steamer modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】available steamer (有舱位的货轮)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "instruct": {
    "word": "instruct",
    "phonetic": "/in'strʌkt/",
    "translation": "指示; 命令; 通知",
    "cloze": {
      "sentence": "I took the pills as ______.",
      "translation": "该语境考查核心词义【指示】在权威语篇中的实际运用。",
      "original": "I took the pills as instructed."
    },
    "form_confusables": [
      "construct",
      "installment",
      "contract",
      "astronaut"
    ],
    "semantic_confusables": [
      "inform",
      "notify",
      "command",
      "change"
    ],
    "notes": "【正解考点】instruct (指示)；【形近易混】construct, installment, contract；【近义搭配】inform, notify, command。注意在语境中甄别固定搭配与语义内涵。"
  },
  "lot": {
    "word": "lot",
    "phonetic": "/lɔt/",
    "translation": "一批货物; 批次; 地块",
    "cloze": {
      "sentence": "I had an awful ______ of work to do.",
      "translation": "该语境考查核心词义【一批货物】在权威语篇中的实际运用。",
      "original": "I had an awful lot of work to do."
    },
    "form_confusables": [
      "cloth",
      "loose",
      "clothe",
      "belt"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】lot (一批货物)；【形近易混】cloth, loose, clothe；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "payment": {
    "word": "payment",
    "phonetic": "/'peimənt/",
    "translation": "货款支付; 交付",
    "cloze": {
      "sentence": "All families of the victims will receive a one-off ______ of $100 000.",
      "translation": "该语境考查核心词义【货款支付】在权威语篇中的实际运用。",
      "original": "All families of the victims will receive a one-off payment of $100 000."
    },
    "form_confusables": [
      "fragment",
      "shipment",
      "amendment",
      "engagement"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】payment (货款支付)；【形近易混】fragment, shipment, amendment；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "letter of credit": {
    "word": "letter of credit",
    "phonetic": "/略作 L／C/",
    "translation": "信用证(L/C)",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：信用证(L/C))",
      "original": "The committee agreed that this strategy will letter of credit significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "irrevocable",
      "issuance",
      "amend",
      "extension"
    ],
    "notes": "【正解考点】letter of credit (信用证(L/C))；【形近易混】obtain, maintain, attain；【近义搭配】irrevocable, issuance, amend。注意在语境中甄别固定搭配与语义内涵。"
  },
  "apply for": {
    "word": "apply for",
    "phonetic": "/apply for/",
    "translation": "申请; 办理",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：申请)",
      "original": "It is essential to apply for this critical process before making any final decisions."
    },
    "form_confusables": [
      "approve",
      "supply",
      "perform",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】apply for (申请)；【形近易混】approve, supply, perform；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "issuance": {
    "word": "issuance",
    "phonetic": "/'iʃju:əns; 'isju:-/",
    "translation": "开具; 发行; 开立(信用证)",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：开具)",
      "original": "The manager asked the entire team to carefully issuance the operational requirements."
    },
    "form_confusables": [
      "defiance",
      "space",
      "island",
      "chance"
    ],
    "semantic_confusables": [
      "irrevocable",
      "amend",
      "extension",
      "change"
    ],
    "notes": "【正解考点】issuance (开具)；【形近易混】defiance, space, island；【近义搭配】irrevocable, amend, extension。注意在语境中甄别固定搭配与语义内涵。"
  },
  "deposit": {
    "word": "deposit",
    "phonetic": "/di'pɔzit/",
    "translation": "押金; 定金; 存款",
    "cloze": {
      "sentence": "All ______ for holiday cottages are refundable.",
      "translation": "该语境考查核心词义【押金】在权威语篇中的实际运用。",
      "original": "All deposits for holiday cottages are refundable."
    },
    "form_confusables": [
      "desire",
      "profit",
      "export",
      "consist"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】deposit (押金)；【形近易混】desire, profit, export；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "tie up": {
    "word": "tie up",
    "phonetic": "/美国英语/",
    "translation": "占用资金; 冻结资金",
    "cloze": {
      "sentence": "Our country will ______ with another country to host this exhibition.",
      "translation": "我国将和另外一个国家联合主办这次展览会。",
      "original": "Our country will tie up with another country to host this exhibition."
    },
    "form_confusables": [
      "temple",
      "stride",
      "motive",
      "active"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】tie up (占用资金)；【形近易混】temple, stride, motive；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "banking charges": {
    "word": "banking charges",
    "phonetic": "/banking charges/",
    "translation": "银行手续费; 银行扣费",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：银行手续费)",
      "original": "The manager asked the entire team to carefully banking charges the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】banking charges (银行手续费)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "monetary policy": {
    "word": "monetary policy",
    "phonetic": "/monetary policy/",
    "translation": "货币政策; 金融政策",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：货币政策)",
      "original": "The manager asked the entire team to carefully monetary policy the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】monetary policy (货币政策)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "documents against acceptance": {
    "word": "documents against acceptance",
    "phonetic": "/复数/",
    "translation": "承兑交单(D/A)",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：承兑交单(D/A))",
      "original": "The committee agreed that this strategy will documents against acceptance significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】documents against acceptance (承兑交单(D/A))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "involved": {
    "word": "involved",
    "phonetic": "/symbols/",
    "translation": "所涉及的; 卷入的",
    "cloze": {
      "sentence": "He wanted to be actively ______ in school life.",
      "translation": "该语境考查核心词义【所涉及的】在权威语篇中的实际运用。",
      "original": "He wanted to be actively involved in school life."
    },
    "form_confusables": [
      "involve",
      "evolve",
      "revolve",
      "inland"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】involved (所涉及的)；【形近易混】involve, evolve, revolve；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "unaccommodating": {
    "word": "unaccommodating",
    "phonetic": "/unaccommodating/",
    "translation": "不通融的; 不融通的",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：不通融的)",
      "original": "It is essential to unaccommodating this critical process before making any final decisions."
    },
    "form_confusables": [
      "accommodation",
      "communication",
      "consolidation",
      "uncomfortable"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】unaccommodating (不通融的)；【形近易混】accommodation, communication, consolidation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "prospect": {
    "word": "prospect",
    "phonetic": "/'prɔspekt/",
    "translation": "商业前景; 预期",
    "cloze": {
      "sentence": "I don't relish the ______ of having to share an office.",
      "translation": "该语境考查核心词义【商业前景】在权威语篇中的实际运用。",
      "original": "I don't relish the prospect of having to share an office."
    },
    "form_confusables": [
      "profit",
      "precedent",
      "proportion",
      "react"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】prospect (商业前景)；【形近易混】profit, precedent, proportion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "much as": {
    "word": "much as",
    "phonetic": "/much as/",
    "translation": "虽然; 尽管",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：虽然)",
      "original": "It is essential to much as this critical process before making any final decisions."
    },
    "form_confusables": [
      "chase",
      "mass",
      "coast",
      "chart"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】much as (虽然)；【形近易混】chase, mass, coast；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "on one's own account": {
    "word": "on one's own account",
    "phonetic": "/on one's own account/",
    "translation": "自负盈亏; 自行负责",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：自负盈亏)",
      "original": "Recent studies clearly show that we must on one's own account modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】on one's own account (自负盈亏)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "fluctuation": {
    "word": "fluctuation",
    "phonetic": "/,flʌktju'eiʃən/",
    "translation": "行情波动; 汇率起伏",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：行情波动)",
      "original": "Recent studies clearly show that we must fluctuation modern standards in our research."
    },
    "form_confusables": [
      "quotation",
      "foundation",
      "reputation",
      "fraction"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】fluctuation (行情波动)；【形近易混】quotation, foundation, reputation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "set up": {
    "word": "set up",
    "phonetic": "/常用被动语态/",
    "translation": "设立; 建立; 成立",
    "cloze": {
      "sentence": "I'm well ______ with reading matter.",
      "translation": "我得到充分的阅读材料。",
      "original": "I'm well set up with reading matter."
    },
    "form_confusables": [
      "secure",
      "supply",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】set up (设立)；【形近易混】secure, supply, obtain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in consideration of": {
    "word": "in consideration of",
    "phonetic": "/in consideration of/",
    "translation": "考虑到; 鉴于; 作为报酬",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：考虑到)",
      "original": "Recent studies clearly show that we must in consideration of modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in consideration of (考虑到)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "mutual benefit": {
    "word": "mutual benefit",
    "phonetic": "/mutual benefit/",
    "translation": "互利互惠; 双赢",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：互利互惠)",
      "original": "It is essential to mutual benefit this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】mutual benefit (互利互惠)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "exception": {
    "word": "exception",
    "phonetic": "/ik'sepʃən/",
    "translation": "例外; 除外条款",
    "cloze": {
      "sentence": "Most of his family are sports enthusiasts, but he's the ______ to the rule.",
      "translation": "该语境考查核心词义【例外】在权威语篇中的实际运用。",
      "original": "Most of his family are sports enthusiasts, but he's the exception to the rule."
    },
    "form_confusables": [
      "execution",
      "extortion",
      "extension",
      "action"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】exception (例外)；【形近易混】execution, extortion, extension；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "financial credit": {
    "word": "financial credit",
    "phonetic": "/financial credit/",
    "translation": "商业信用; 资信度",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：商业信用)",
      "original": "The committee agreed that this strategy will financial credit significant long-term growth."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】financial credit (商业信用)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "precedent": {
    "word": "precedent",
    "phonetic": "/pri'si:dənt; 'presi-/",
    "translation": "先例; 前例",
    "cloze": {
      "sentence": "Overturning a legal ______ is no easy matter.",
      "translation": "该语境考查核心词义【先例】在权威语篇中的实际运用。",
      "original": "Overturning a legal precedent is no easy matter."
    },
    "form_confusables": [
      "procedure",
      "recently",
      "proceed",
      "prospect"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】precedent (先例)；【形近易混】procedure, recently, proceed；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "delay": {
    "word": "delay",
    "phonetic": "/di'lei/",
    "translation": "延期; 延误",
    "cloze": {
      "sentence": "Flights to New York may be subject to ______.",
      "translation": "该语境考查核心词义【延期】在权威语篇中的实际运用。",
      "original": "Flights to New York may be subject to delay."
    },
    "form_confusables": [
      "deny",
      "deaf",
      "deal",
      "clay"
    ],
    "semantic_confusables": [
      "extension",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】delay (延期)；【形近易混】deny, deaf, deal；【近义搭配】extension, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "execution": {
    "word": "execution",
    "phonetic": "/,eksi'kju:ʃən/",
    "translation": "合同履行; 执行",
    "cloze": {
      "sentence": "If caught, the men could face ______.",
      "translation": "该语境考查核心词义【合同履行】在权威语篇中的实际运用。",
      "original": "If caught, the men could face execution."
    },
    "form_confusables": [
      "executive",
      "exception",
      "extortion",
      "extension"
    ],
    "semantic_confusables": [
      "perform",
      "effect",
      "change",
      "manage"
    ],
    "notes": "【正解考点】execution (合同履行)；【形近易混】executive, exception, extortion；【近义搭配】perform, effect, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "make execution of contract": {
    "word": "make execution of contract",
    "phonetic": "/make execution of contract/",
    "translation": "履行合同; 执行合同",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：履行合同)",
      "original": "It is essential to make execution of contract this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】make execution of contract (履行合同)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "ensure": {
    "zh": "保证；担保；确保",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "Quality audits are conducted regularly to ______ that all products meet safety standards.",
      "translation": "定期进行质量审计，以确保所有产品均符合安全标准。"
    },
    "form_confusables": [
      {
        "word": "ensure",
        "zh": "保证确保"
      },
      {
        "word": "insure",
        "zh": "投保买保险"
      },
      {
        "word": "assure",
        "zh": "向某人担保保证"
      },
      {
        "word": "endure",
        "zh": "容忍持久"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ensure",
        "zh": "确保客观无虞"
      },
      {
        "word": "guarantee",
        "zh": "保修担保质量"
      },
      {
        "word": "secure",
        "zh": "确保获得巩固"
      },
      {
        "word": "confirm",
        "zh": "确认核准"
      }
    ],
    "notes": "【搭配考点】ensure that 确保某种事实或状态；【形近辨析】insure (投保买保险)，assure (向某人保证使之放心)，endure (忍耐)；【近义辨析】guarantee 强调提供担保或保证品质。",
    "word": "ensure",
    "translation": "保证；担保；确保",
    "phonetic": "/ensure/"
  },
  "balance": {
    "word": "balance",
    "phonetic": "/'bæləns/",
    "translation": "尾款; 结欠余额; 平衡",
    "cloze": {
      "sentence": "Cats have a very good sense of ______.",
      "translation": "该语境考查核心词义【尾款】在权威语篇中的实际运用。",
      "original": "Cats have a very good sense of balance."
    },
    "form_confusables": [
      "advance",
      "chance",
      "enhance",
      "base"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】balance (尾款)；【形近易混】advance, chance, enhance；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bill of lading": {
    "word": "bill of lading",
    "phonetic": "/略作 b.l.， B.L.， b／l， B／L/",
    "translation": "海运提单(B/L)",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：海运提单(B/L))",
      "original": "The manager asked the entire team to carefully bill of lading the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】bill of lading (海运提单(B/L))；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in regard to": {
    "word": "in regard to",
    "phonetic": "/in regard to/",
    "translation": "关于; 谈及",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：关于)",
      "original": "The manager asked the entire team to carefully in regard to the operational requirements."
    },
    "form_confusables": [
      "regarding",
      "negotiation",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "regarding",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】in regard to (关于)；【形近易混】regarding, negotiation, obtain；【近义搭配】regarding, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "under the subject contract": {
    "word": "under the subject contract",
    "phonetic": "/under the subject contract/",
    "translation": "在标的合同项下",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：在标的合同项下)",
      "original": "It is essential to under the subject contract this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】under the subject contract (在标的合同项下)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "call one's attention to": {
    "word": "call one's attention to",
    "phonetic": "/call one's attention to/",
    "translation": "提醒某方注意",
    "cloze": {
      "sentence": "It is essential to ______ this critical process before making any final decisions.",
      "translation": "在做出任何最终决定之前，必须妥善推进这一关键过程。 (考点：提醒某方注意)",
      "original": "It is essential to call one's attention to this critical process before making any final decisions."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】call one's attention to (提醒某方注意)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "draw near": {
    "word": "draw near",
    "phonetic": "/draw near/",
    "translation": "邻近; 临近(截止期)",
    "cloze": {
      "sentence": "The committee agreed that this strategy will ______ significant long-term growth.",
      "translation": "委员会一致认为该策略将有助于实现显著的长期增长。 (考点：邻近)",
      "original": "The committee agreed that this strategy will draw near significant long-term growth."
    },
    "form_confusables": [
      "corner",
      "advance",
      "awkward",
      "obtain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】draw near (邻近)；【形近易混】corner, advance, awkward；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "expire": {
    "word": "expire",
    "phonetic": "/ik'spaiə; ek-/",
    "translation": "期满失效; 到期",
    "cloze": {
      "sentence": "When does your driving licence ______?",
      "translation": "该语境考查核心词义【期满失效】在权威语篇中的实际运用。",
      "original": "When does your driving licence expire?"
    },
    "form_confusables": [
      "export",
      "desire",
      "require",
      "conspire"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】expire (期满失效)；【形近易混】export, desire, require；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in accordance with": {
    "word": "in accordance with",
    "phonetic": "/in accordance with/",
    "translation": "依据; 按照",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：依据)",
      "original": "Recent studies clearly show that we must in accordance with modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】in accordance with (依据)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "arise from": {
    "word": "arise from",
    "phonetic": "/arise from/",
    "translation": "由...产生; 起因于",
    "cloze": {
      "sentence": "It is difficult to foresee the consequences that may ______ this action.",
      "translation": "预见这一行动可能产生的后果是困难的。",
      "original": "It is difficult to foresee the consequences that may arise from this action."
    },
    "form_confusables": [
      "boardroom",
      "comparison",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "come",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】arise from (由...产生)；【形近易混】boardroom, comparison, obtain；【近义搭配】come, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "bear": {
    "word": "bear",
    "phonetic": "/bεə/",
    "translation": "承担(费用/责任); 承受",
    "cloze": {
      "sentence": "I wouldn't be able to ______ it.",
      "translation": "该语境考查核心词义【承担(费用/责任)】在权威语篇中的实际运用。",
      "original": "I wouldn't be able to bear it."
    },
    "form_confusables": [
      "beach",
      "clear",
      "behave",
      "bet"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】bear (承担(费用/责任))；【形近易混】beach, clear, behave；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "discrepancy": {
    "word": "discrepancy",
    "phonetic": "/dis'krepənsi/",
    "translation": "单证不符点; 差异",
    "cloze": {
      "sentence": "A and B) What are the reasons for the ______ between girls' and boys' performance in school?",
      "translation": "该语境考查核心词义【单证不符点】在权威语篇中的实际运用。",
      "original": "A and B) What are the reasons for the discrepancy between girls' and boys' performance in school?"
    },
    "form_confusables": [
      "discretion",
      "dispatch",
      "currency",
      "discount"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】discrepancy (单证不符点)；【形近易混】discretion, dispatch, currency；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "examination": {
    "word": "examination",
    "phonetic": "/iɡ,zæmi'neiʃən/",
    "translation": "验货; 检验证书; 审核",
    "cloze": {
      "sentence": "A visual ______ corroborated this.",
      "translation": "该语境考查核心词义【验货】在权威语篇中的实际运用。",
      "original": "A visual examination corroborated this."
    },
    "form_confusables": [
      "combination",
      "realization",
      "extortion",
      "exception"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】examination (验货)；【形近易混】combination, realization, extortion；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "freight": {
    "word": "freight",
    "phonetic": "/freit/",
    "translation": "国际海运运费; 货物",
    "cloze": {
      "sentence": "All vehicles carrying ______ need a special permit.",
      "translation": "该语境考查核心词义【国际海运运费】在权威语篇中的实际运用。",
      "original": "All vehicles carrying freight need a special permit."
    },
    "form_confusables": [
      "fresh",
      "tight",
      "watertight",
      "credit"
    ],
    "semantic_confusables": [
      "commodity",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】freight (国际海运运费)；【形近易混】fresh, tight, watertight；【近义搭配】commodity, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "negotiation": {
    "word": "negotiation",
    "phonetic": "/ni,ɡəuʃi'eiʃən; -si-/",
    "translation": "议付; 商业谈判",
    "cloze": {
      "sentence": "Compromise is reached by a process of ______.",
      "translation": "该语境考查核心词义【议付】在权威语篇中的实际运用。",
      "original": "Compromise is reached by a process of negotiation."
    },
    "form_confusables": [
      "quotation",
      "concentration",
      "consolidation",
      "allegation"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】negotiation (议付)；【形近易混】quotation, concentration, consolidation；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "accordingly": {
    "word": "accordingly",
    "phonetic": "/ə'kɔ:diŋli/",
    "translation": "相应地; 因此; 照办",
    "cloze": {
      "sentence": "We have to discover his plans and act ______.",
      "translation": "该语境考查核心词义【相应地】在真实例句中的精准搭配。",
      "original": "We have to discover his plans and act accordingly."
    },
    "form_confusables": [
      "accommodation",
      "regarding",
      "contingency",
      "scrutiny"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】accordingly (相应地)；【形近易混】accommodation, regarding, contingency；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "amendment": {
    "word": "amendment",
    "phonetic": "/ə'mendmənt/",
    "translation": "信用证修改书; 修正",
    "cloze": {
      "sentence": "He moved an ______ limiting capital punishment to certain very serious crimes.",
      "translation": "该语境考查核心词义【信用证修改书】在权威语篇中的实际运用。",
      "original": "He moved an amendment limiting capital punishment to certain very serious crimes."
    },
    "form_confusables": [
      "ancient",
      "engagement",
      "comment",
      "payment"
    ],
    "semantic_confusables": [
      "correction",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】amendment (信用证修改书)；【形近易混】ancient, engagement, comment；【近义搭配】correction, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "amend": {
    "zh": "修改；修订；改进",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "The committee voted to ______ the proposal based on recent user feedback.",
      "translation": "委员会根据近期的用户反馈投票表决修改该提案。"
    },
    "form_confusables": [
      {
        "word": "amend",
        "zh": "修订条款"
      },
      {
        "word": "emend",
        "zh": "校订文本文字"
      },
      {
        "word": "commend",
        "zh": "赞扬称赞"
      },
      {
        "word": "ascend",
        "zh": "攀登攀升"
      }
    ],
    "semantic_confusables": [
      {
        "word": "amend",
        "zh": "正式提案修正"
      },
      {
        "word": "modify",
        "zh": "局部改动调整"
      },
      {
        "word": "revise",
        "zh": "复审修订"
      },
      {
        "word": "alter",
        "zh": "改变更改"
      }
    ],
    "notes": "【搭配考点】amend a law/proposal 正式修订法律、提案或条款；【形近辨析】emend (校订文本文字)，commend (赞赏)，ascend (上升)；【近义辨析】modify 侧重调整使之适合，revise 强调重新审阅修改。",
    "word": "amend",
    "translation": "修改；修订；改进",
    "phonetic": "/amend/"
  },
  "under the clauses": {
    "word": "under the clauses",
    "phonetic": "/under the clauses/",
    "translation": "根据合同条款规定",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：根据合同条款规定)",
      "original": "The manager asked the entire team to carefully under the clauses the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】under the clauses (根据合同条款规定)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "as stipulated": {
    "word": "as stipulated",
    "phonetic": "/as stipulated/",
    "translation": "按照合同约定/规定",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：按照合同约定/规定)",
      "original": "The manager asked the entire team to carefully as stipulated the operational requirements."
    },
    "form_confusables": [
      "stipulation",
      "constitute",
      "obtain",
      "maintain"
    ],
    "semantic_confusables": [
      "stipulate",
      "stipulation",
      "change",
      "manage"
    ],
    "notes": "【正解考点】as stipulated (按照合同约定/规定)；【形近易混】stipulation, constitute, obtain；【近义搭配】stipulate, stipulation, change。注意在语境中甄别固定搭配与语义内涵。"
  },
  "extension": {
    "word": "extension",
    "phonetic": "/ik'stenʃən/",
    "translation": "展期; 延期(信用证)",
    "cloze": {
      "sentence": "He's applied for an ______ of his visa.",
      "translation": "该语境考查核心词义【展期】在权威语篇中的实际运用。",
      "original": "He's applied for an extension of his visa."
    },
    "form_confusables": [
      "extortion",
      "exception",
      "execution",
      "examination"
    ],
    "semantic_confusables": [
      "irrevocable",
      "issuance",
      "delay",
      "amend"
    ],
    "notes": "【正解考点】extension (展期)；【形近易混】extortion, exception, execution；【近义搭配】irrevocable, issuance, delay。注意在语境中甄别固定搭配与语义内涵。"
  },
  "refer to": {
    "word": "refer to",
    "phonetic": "/refer to/",
    "translation": "查阅; 提及; 参照",
    "cloze": {
      "sentence": "If you don't know the spelling of a word, you should ______ a dictionary.",
      "translation": "如果你不会拼写一个词，你应当查一下词典。",
      "original": "If you don't know the spelling of a word, you should refer to a dictionary."
    },
    "form_confusables": [
      "reform",
      "refresh",
      "reverse",
      "recently"
    ],
    "semantic_confusables": [
      "browse",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】refer to (查阅)；【形近易混】reform, refresh, reverse；【近义搭配】browse, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "remind": {
    "word": "remind",
    "phonetic": "/ri'maind/",
    "translation": "催促; 提醒",
    "cloze": {
      "sentence": "I called to ______ him about the party.",
      "translation": "该语境考查核心词义【催促】在权威语篇中的实际运用。",
      "original": "I called to remind him about the party."
    },
    "form_confusables": [
      "recommend",
      "demand",
      "bind",
      "bend"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】remind (催促)；【形近易混】recommend, demand, bind；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "resolve": {
    "zh": "解决；决定；消解",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "Senior management stepped in to ______ the contract dispute between the partners.",
      "translation": "高层管理人员介入，以解决合作伙伴之间的合同争议。"
    },
    "form_confusables": [
      {
        "word": "resolve",
        "zh": "化解争议"
      },
      {
        "word": "revolve",
        "zh": "旋转围绕"
      },
      {
        "word": "dissolve",
        "zh": "溶解解散"
      },
      {
        "word": "evolve",
        "zh": "演化逐步发展"
      }
    ],
    "semantic_confusables": [
      {
        "word": "resolve",
        "zh": "平息消解纠纷"
      },
      {
        "word": "settle",
        "zh": "调停达成和解"
      },
      {
        "word": "solve",
        "zh": "解答求解难题"
      },
      {
        "word": "reconcile",
        "zh": "使和解协调"
      }
    ],
    "notes": "【搭配考点】resolve disputes/conflicts 彻底解决纷争或下定决心；【形近辨析】revolve (旋转)，dissolve (溶解/解散)，evolve (进化)；【近义辨析】solve 侧重解答数学或难题，settle 侧重调解争议。",
    "word": "resolve",
    "translation": "解决；决定；消解",
    "phonetic": "/resolve/"
  },
  "compel": {
    "word": "compel",
    "phonetic": "/kəm'pel/",
    "translation": "迫使; 强迫",
    "cloze": {
      "sentence": "The court has powers to ______ witnesses to attend.",
      "translation": "该语境考查核心词义【迫使】在权威语篇中的实际运用。",
      "original": "The court has powers to compel witnesses to attend."
    },
    "form_confusables": [
      "comply",
      "compete",
      "compare",
      "complex"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】compel (迫使)；【形近易混】comply, compete, compare；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "shipping advice": {
    "word": "shipping advice",
    "phonetic": "/shipping advice/",
    "translation": "装运通知; 装船通知",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：装运通知)",
      "original": "Recent studies clearly show that we must shipping advice modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】shipping advice (装运通知)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "delay in shipment": {
    "word": "delay in shipment",
    "phonetic": "/delay in shipment/",
    "translation": "船期延误; 迟发货",
    "cloze": {
      "sentence": "Recent studies clearly show that we must ______ modern standards in our research.",
      "translation": "近期的研究清晰表明，我们在研究中必须符合现代标准。 (考点：船期延误)",
      "original": "Recent studies clearly show that we must delay in shipment modern standards in our research."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】delay in shipment (船期延误)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "seek": {
    "word": "seek",
    "phonetic": "/si:k/",
    "translation": "寻求; 谋求(货源)",
    "cloze": {
      "sentence": "He admired her ability to ______ out bargains.",
      "translation": "该语境考查核心词义【寻求】在权威语篇中的实际运用。",
      "original": "He admired her ability to seek out bargains."
    },
    "form_confusables": [
      "cheek",
      "secure",
      "shelter",
      "succeed"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】seek (寻求)；【形近易混】cheek, secure, shelter；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "source of supply": {
    "word": "source of supply",
    "phonetic": "/source of supply/",
    "translation": "货源供给地; 供应渠道",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：货源供给地)",
      "original": "The manager asked the entire team to carefully source of supply the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】source of supply (货源供给地)；【形近易混】obtain, maintain, attain；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "consignment": {
    "word": "consignment",
    "phonetic": "/kən'sainmənt/",
    "translation": "寄售; 托运货物",
    "cloze": {
      "sentence": "A ______ of medicines is on its way now.",
      "translation": "该语境考查核心词义【寄售】在权威语篇中的实际运用。",
      "original": "A consignment of medicines is on its way now."
    },
    "form_confusables": [
      "consistent",
      "continent",
      "confident",
      "convenient"
    ],
    "semantic_confusables": [
      "change",
      "manage",
      "support",
      "produce"
    ],
    "notes": "【正解考点】consignment (寄售)；【形近易混】consistent, continent, confident；【近义搭配】change, manage, support。注意在语境中甄别固定搭配与语义内涵。"
  },
  "in good time": {
    "word": "in good time",
    "phonetic": "/in good time/",
    "translation": "适时地; 及时地",
    "cloze": {
      "sentence": "The manager asked the entire team to carefully ______ the operational requirements.",
      "translation": "经理要求整个团队仔细把控业务的各项具体要求。 (考点：适时地)",
      "original": "The manager asked the entire team to carefully in good time the operational requirements."
    },
    "form_confusables": [
      "obtain",
      "maintain",
      "attain",
      "contain"
    ],
    "semantic_confusables": [
      "duly",
      "change",
      "manage",
      "support"
    ],
    "notes": "【正解考点】in good time (适时地)；【形近易混】obtain, maintain, attain；【近义搭配】duly, change, manage。注意在语境中甄别固定搭配与语义内涵。"
  },
  "vacant": {
    "zh": "空着的；未被占用的；空缺的",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "There are several ______ positions currently open in the finance department.",
      "translation": "财务部门目前有几个空缺职位正在招聘。"
    },
    "form_confusables": [
      {
        "word": "vacant",
        "zh": "空缺的；空着的"
      },
      {
        "word": "vague",
        "zh": "模糊的；不明确的"
      },
      {
        "word": "vacation",
        "zh": "假期；度假"
      },
      {
        "word": "vacuum",
        "zh": "真空；空虚"
      }
    ],
    "semantic_confusables": [
      {
        "word": "vacant",
        "zh": "空缺的 (专指职位/房间)"
      },
      {
        "word": "available",
        "zh": "可利用的；有空的"
      },
      {
        "word": "empty",
        "zh": "空的 (强调内部无物)"
      },
      {
        "word": "unoccupied",
        "zh": "未占用的 (无人居住)"
      }
    ],
    "notes": "【搭配考点】vacant position/room 专指职位空缺或房屋空置可入驻；【形近辨析】vague (模糊), vacation (度假), vacuum (真空)；【近义辨析】empty 强调容器或空间内空无一物，available 强调现成可利用，unoccupied 强调未被占用。",
    "word": "vacant",
    "translation": "空着的；未被占用的；空缺的",
    "phonetic": "/vacant/"
  },
  "adapt": {
    "zh": "适应；使适合；改编",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "It took the new manager several weeks to ______ to the fast-paced work environment.",
      "translation": "新经理花了好几周才适应快节奏的工作环境。"
    },
    "form_confusables": [
      {
        "word": "adapt",
        "zh": "适应；适合"
      },
      {
        "word": "adopt",
        "zh": "收养；采纳；采用"
      },
      {
        "word": "adept",
        "zh": "熟练的；内行的"
      },
      {
        "word": "admit",
        "zh": "承认；准许进入"
      }
    ],
    "semantic_confusables": [
      {
        "word": "adapt",
        "zh": "适应新环境"
      },
      {
        "word": "adjust",
        "zh": "调整；适应 (adjust to)"
      },
      {
        "word": "accommodate",
        "zh": "迁就；顺应"
      },
      {
        "word": "fit",
        "zh": "适合；吻合"
      }
    ],
    "notes": "【搭配考点】adapt to 强调通过自我调整去适应新环境；【形近辨析】adopt (-opt选择，采纳/收养)，adept (-ept能力，熟练的)，admit (承认)；【近义辨析】adjust 侧重微调位置或心态，accommodate 侧重容纳迁就。",
    "word": "adapt",
    "translation": "适应；使适合；改编",
    "phonetic": "/adapt/"
  },
  "scarce": {
    "zh": "缺乏的；罕见的；不足的",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "During the severe drought, clean drinking water became extremely ______ .",
      "translation": "在严重旱灾期间，洁净的饮用水变得极其匮乏。"
    },
    "form_confusables": [
      {
        "word": "scarce",
        "zh": "稀缺的；短缺的"
      },
      {
        "word": "sacred",
        "zh": "神圣的；庄严的"
      },
      {
        "word": "scare",
        "zh": "恐吓；惊慌"
      },
      {
        "word": "scar",
        "zh": "伤疤；创伤"
      }
    ],
    "semantic_confusables": [
      {
        "word": "scarce",
        "zh": "供不应求的短缺"
      },
      {
        "word": "rare",
        "zh": "珍稀罕见的"
      },
      {
        "word": "sparse",
        "zh": "稀疏分布的"
      },
      {
        "word": "insufficient",
        "zh": "数量不够的"
      }
    ],
    "notes": "【搭配考点】scarce resources 专指供不应求的稀缺；【形近辨析】sacred (神圣的)，scare (惊恐)，scar (伤痕)；【近义辨析】rare 强调少见罕见，sparse 强调分布稀落，insufficient 强调数量不足。",
    "word": "scarce",
    "translation": "缺乏的；罕见的；不足的",
    "phonetic": "/scarce/"
  },
  "abide": {
    "zh": "遵守；忍受；停留",
    "level": "B2/CET-4",
    "cloze": {
      "sentence": "Both companies have signed the contract and agreed to ______ by all its terms.",
      "translation": "两家公司均签署了合同，并同意遵守其中的所有条款。"
    },
    "form_confusables": [
      {
        "word": "abide",
        "zh": "遵守；信守"
      },
      {
        "word": "abandon",
        "zh": "抛弃；遗弃"
      },
      {
        "word": "abolish",
        "zh": "废除；废止"
      },
      {
        "word": "aboard",
        "zh": "在船/机/车上"
      }
    ],
    "semantic_confusables": [
      {
        "word": "abide",
        "zh": "信守条款 (abide by)"
      },
      {
        "word": "comply",
        "zh": "遵从规章 (comply with)"
      },
      {
        "word": "obey",
        "zh": "服从命令"
      },
      {
        "word": "follow",
        "zh": "遵循规则"
      }
    ],
    "notes": "【搭配考点】abide by 固定搭配，指信守协议或判决；【形近辨析】abandon (遗弃)，abolish (废除)，aboard (在交通工具上)；【近义辨析】comply with 强调合规，obey 强调遵从命令。",
    "word": "abide",
    "translation": "遵守；忍受；停留",
    "phonetic": "/abide/"
  },
  "achieve": {
    "zh": "取得；达到；实现",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "With perseverance and strategic focus, the startup managed to ______ profitability.",
      "translation": "凭借毅力与战略专注，这家初创企业成功实现了盈利。"
    },
    "form_confusables": [
      {
        "word": "achieve",
        "zh": "实现；达到"
      },
      {
        "word": "archive",
        "zh": "存档档案"
      },
      {
        "word": "arrive",
        "zh": "到达抵达"
      },
      {
        "word": "active",
        "zh": "活跃积极"
      }
    ],
    "semantic_confusables": [
      {
        "word": "achieve",
        "zh": "实现盈利目标"
      },
      {
        "word": "attain",
        "zh": "达到境界指标"
      },
      {
        "word": "accomplish",
        "zh": "圆满完成任务"
      },
      {
        "word": "reach",
        "zh": "达到数额水准"
      }
    ],
    "notes": "【搭配考点】achieve goals/profitability 达成目标或成果；【形近辨析】archive (归档)，arrive (到达)，active (积极的)；【近义辨析】accomplish 强调圆满完成任务，attain 强调达到某种高度或境界。",
    "word": "achieve",
    "translation": "取得；达到；实现",
    "phonetic": "/achieve/"
  },
  "maintain": {
    "zh": "维持；保持；维修",
    "level": "B1/CET-4",
    "cloze": {
      "sentence": "Regular maintenance helps ______ the high operational efficiency of the machinery.",
      "translation": "定期保养有助于保持机械设备的高运行效率。"
    },
    "form_confusables": [
      {
        "word": "maintain",
        "zh": "维持；保持"
      },
      {
        "word": "contain",
        "zh": "包含容纳"
      },
      {
        "word": "retain",
        "zh": "保留保有"
      },
      {
        "word": "obtain",
        "zh": "获取买到"
      }
    ],
    "semantic_confusables": [
      {
        "word": "maintain",
        "zh": "保持良好效率"
      },
      {
        "word": "preserve",
        "zh": "保护完好免损"
      },
      {
        "word": "sustain",
        "zh": "支撑持续"
      },
      {
        "word": "keep",
        "zh": "保留保持"
      }
    ],
    "notes": "【搭配考点】maintain efficiency/standards 保持维持；【形近辨析】contain (包含)，retain (保留)，obtain (获得)；【近义辨析】preserve 强调保护免受破坏，sustain 强调提供支撑以维持。",
    "word": "maintain",
    "translation": "维持；保持；维修",
    "phonetic": "/maintain/"
  },
  "require": {
    "zh": "需要；要求；命令",
    "level": "A2/CET-4",
    "cloze": {
      "sentence": "Complex international transactions often ______ thorough legal documentation.",
      "translation": "复杂的国际交易通常需要详尽的法律文件。"
    },
    "form_confusables": [
      {
        "word": "require",
        "zh": "需要；要求"
      },
      {
        "word": "acquire",
        "zh": "收购取得"
      },
      {
        "word": "inquire",
        "zh": "打听询问"
      },
      {
        "word": "expire",
        "zh": "期满失效"
      }
    ],
    "semantic_confusables": [
      {
        "word": "require",
        "zh": "客观规定需要"
      },
      {
        "word": "demand",
        "zh": "强求要求"
      },
      {
        "word": "need",
        "zh": "需要缺乏"
      },
      {
        "word": "necessitate",
        "zh": "使成为必需"
      }
    ],
    "notes": "【搭配考点】require documents/skills 要求必须具备；【形近辨析】acquire (获得)，inquire (询问)，expire (到期失效)；【近义辨析】demand 语气更强烈的强求，necessitate 强调客观上使之成为必然。",
    "word": "require",
    "translation": "需要；要求；命令",
    "phonetic": "/require/"
  }
};

  if (typeof window !== 'undefined') {
    window.STONE_LEXICAL_GRAPH = graph;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = graph;
  }
})();
