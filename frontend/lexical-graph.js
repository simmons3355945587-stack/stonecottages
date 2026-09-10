// ==============================================================================
// Our Stone Cottages - 核心词库语义与混淆图谱 (lexical-graph.js)
// 试点版本：覆盖核心高频词同义、形近易混、反义及全英测试数据
// 零延迟、纯本地离线驱动，与 SAN 心神清明度联动
// ==============================================================================
window.STONE_LEXICAL_GRAPH = {
  "adapt": {
    "zh": "适应；使适合；改编",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "adjust",
        "zh": "调整；适应",
        "score": 0.92
      },
      {
        "word": "accommodate",
        "zh": "顺应；容纳",
        "score": 0.85
      },
      {
        "word": "conform",
        "zh": "符合；顺应",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "adopt",
        "zh": "收养；采纳；采用",
        "score": 0.96
      },
      {
        "word": "adept",
        "zh": "熟练的；内行的",
        "score": 0.9
      },
      {
        "word": "adaptive",
        "zh": "适应的；适合的",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "resist",
        "zh": "抵制；抵抗",
        "score": 0.85
      }
    ]
  },
  "space": {
    "zh": "空间；太空；空隙",
    "level": "A1/CET-4",
    "synonyms": [
      {
        "word": "universe",
        "zh": "宇宙；万物",
        "score": 0.88
      },
      {
        "word": "room",
        "zh": "余地；空间",
        "score": 0.85
      },
      {
        "word": "cosmos",
        "zh": "广袤宇宙",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "pace",
        "zh": "步调；节奏",
        "score": 0.86
      },
      {
        "word": "spice",
        "zh": "香料；调味品",
        "score": 0.82
      },
      {
        "word": "span",
        "zh": "跨度；跨越",
        "score": 0.8
      }
    ],
    "antonyms": []
  },
  "universe": {
    "zh": "宇宙；万物；全人类",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "cosmos",
        "zh": "宇宙；秩序",
        "score": 0.9
      },
      {
        "word": "world",
        "zh": "世界；万物",
        "score": 0.82
      },
      {
        "word": "space",
        "zh": "太空；广袤空间",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "universal",
        "zh": "普遍的；通用的",
        "score": 0.92
      },
      {
        "word": "university",
        "zh": "综合性大学",
        "score": 0.88
      },
      {
        "word": "reverse",
        "zh": "倒退；反转",
        "score": 0.8
      }
    ],
    "antonyms": []
  },
  "unite": {
    "zh": "联合；团结；统一",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "combine",
        "zh": "结合；联合",
        "score": 0.89
      },
      {
        "word": "merge",
        "zh": "合并；融合",
        "score": 0.86
      },
      {
        "word": "join",
        "zh": "加入；连接",
        "score": 0.85
      }
    ],
    "spelling_confusables": [
      {
        "word": "untie",
        "zh": "解开；松开",
        "score": 0.95
      },
      {
        "word": "unit",
        "zh": "单元；单位",
        "score": 0.9
      },
      {
        "word": "unity",
        "zh": "团结；一致",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "separate",
        "zh": "分离；分开",
        "score": 0.9
      },
      {
        "word": "divide",
        "zh": "分裂；划分",
        "score": 0.88
      }
    ]
  },
  "reunite": {
    "zh": "重聚；重新统一",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "rejoin",
        "zh": "重新加入；重聚",
        "score": 0.88
      },
      {
        "word": "reconcile",
        "zh": "使和解；调解",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "reunion",
        "zh": "重聚；聚会",
        "score": 0.92
      },
      {
        "word": "unite",
        "zh": "联合；团结",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "scatter",
        "zh": "驱散；散开",
        "score": 0.85
      }
    ]
  },
  "union": {
    "zh": "联盟；工会；结合",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "alliance",
        "zh": "同盟；联盟",
        "score": 0.9
      },
      {
        "word": "coalition",
        "zh": "联合政府；同盟",
        "score": 0.85
      },
      {
        "word": "association",
        "zh": "协会；社团",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "onion",
        "zh": "洋葱",
        "score": 0.92
      },
      {
        "word": "uniform",
        "zh": "制服；统一的",
        "score": 0.86
      },
      {
        "word": "unite",
        "zh": "联合；团结",
        "score": 0.82
      }
    ],
    "antonyms": [
      {
        "word": "division",
        "zh": "分歧；分裂",
        "score": 0.88
      }
    ]
  },
  "diverse": {
    "zh": "多样的；形形色色的；不同的",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "varied",
        "zh": "各种各样的",
        "score": 0.92
      },
      {
        "word": "different",
        "zh": "不同的；有差异的",
        "score": 0.88
      },
      {
        "word": "manifold",
        "zh": "繁多的；多样的",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "divert",
        "zh": "转移；使转向",
        "score": 0.9
      },
      {
        "word": "reverse",
        "zh": "反转；彻底倒退",
        "score": 0.85
      },
      {
        "word": "divide",
        "zh": "划分；分开",
        "score": 0.82
      }
    ],
    "antonyms": [
      {
        "word": "identical",
        "zh": "同一的；完全相同的",
        "score": 0.9
      },
      {
        "word": "uniform",
        "zh": "一致的；统一的",
        "score": 0.88
      }
    ]
  },
  "convert": {
    "zh": "转变；变换；换算",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "transform",
        "zh": "彻底改变；转化",
        "score": 0.92
      },
      {
        "word": "alter",
        "zh": "改变；修改",
        "score": 0.86
      },
      {
        "word": "modify",
        "zh": "修饰；微调",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "divert",
        "zh": "转向；转移资金",
        "score": 0.89
      },
      {
        "word": "invert",
        "zh": "使倒转；颠倒",
        "score": 0.88
      },
      {
        "word": "revert",
        "zh": "恢复原状；重蹈覆辙",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "maintain",
        "zh": "保持；维持",
        "score": 0.85
      }
    ]
  },
  "reverse": {
    "zh": "倒退；反转；背面",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "invert",
        "zh": "颠倒；使反向",
        "score": 0.9
      },
      {
        "word": "overturn",
        "zh": "推翻；倾覆",
        "score": 0.85
      },
      {
        "word": "undo",
        "zh": "撤销；解开",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "reserve",
        "zh": "预订；储备；保留",
        "score": 0.96
      },
      {
        "word": "revise",
        "zh": "复习；修订",
        "score": 0.88
      },
      {
        "word": "converse",
        "zh": "交谈；相反的",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "forward",
        "zh": "向前的；进展",
        "score": 0.88
      }
    ]
  },
  "controversy": {
    "zh": "争论；争议；辩驳",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "dispute",
        "zh": "争端；纠纷",
        "score": 0.92
      },
      {
        "word": "debate",
        "zh": "辩论；争辩",
        "score": 0.88
      },
      {
        "word": "conflict",
        "zh": "冲突；分歧",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "contrary",
        "zh": "相反的；对立面",
        "score": 0.92
      },
      {
        "word": "contrast",
        "zh": "对照；鲜明对比",
        "score": 0.88
      },
      {
        "word": "converse",
        "zh": "逆向的；交谈",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "consensus",
        "zh": "共识；一致意见",
        "score": 0.94
      }
    ]
  },
  "contrary": {
    "zh": "相反的；对立的",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "opposite",
        "zh": "对立的；相反的",
        "score": 0.92
      },
      {
        "word": "conflicting",
        "zh": "矛盾的；抵触的",
        "score": 0.85
      },
      {
        "word": "adverse",
        "zh": "不利的；逆向的",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "country",
        "zh": "国家；乡村",
        "score": 0.91
      },
      {
        "word": "contrast",
        "zh": "对比；显出差异",
        "score": 0.88
      },
      {
        "word": "controversy",
        "zh": "争论；争议",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "consistent",
        "zh": "一致的；相符的",
        "score": 0.89
      }
    ]
  },
  "contrast": {
    "zh": "对比；对照；悬殊差距",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "comparison",
        "zh": "比较；比对",
        "score": 0.88
      },
      {
        "word": "difference",
        "zh": "差异；分歧",
        "score": 0.85
      },
      {
        "word": "distinction",
        "zh": "区别；差别",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "contract",
        "zh": "合同；收缩",
        "score": 0.95
      },
      {
        "word": "contact",
        "zh": "接触；联系",
        "score": 0.92
      },
      {
        "word": "contrary",
        "zh": "相反的",
        "score": 0.86
      }
    ],
    "antonyms": [
      {
        "word": "similarity",
        "zh": "相似点；类似",
        "score": 0.9
      }
    ]
  },
  "develop": {
    "zh": "发展；开发；研制",
    "level": "A2/CET-4",
    "synonyms": [
      {
        "word": "evolve",
        "zh": "演化；逐步发展",
        "score": 0.9
      },
      {
        "word": "advance",
        "zh": "推进；促进",
        "score": 0.88
      },
      {
        "word": "expand",
        "zh": "扩张；扩大",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "envelope",
        "zh": "信封；外皮",
        "score": 0.92
      },
      {
        "word": "devote",
        "zh": "奉献；投入",
        "score": 0.85
      },
      {
        "word": "deploy",
        "zh": "部署；调度",
        "score": 0.82
      }
    ],
    "antonyms": [
      {
        "word": "decline",
        "zh": "衰落；衰退",
        "score": 0.88
      }
    ]
  },
  "evolve": {
    "zh": "演变；进化；逐步形成",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "develop",
        "zh": "逐步发展；成长",
        "score": 0.9
      },
      {
        "word": "progress",
        "zh": "进步；推进",
        "score": 0.86
      },
      {
        "word": "transform",
        "zh": "转变；蜕变",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "revolve",
        "zh": "旋转；围绕运转",
        "score": 0.94
      },
      {
        "word": "involve",
        "zh": "包含；牵涉其中",
        "score": 0.92
      },
      {
        "word": "solve",
        "zh": "解决；解答",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "stagnate",
        "zh": "停滞；停止发展",
        "score": 0.9
      }
    ]
  },
  "revolve": {
    "zh": "旋转；环绕；围绕...转动",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "rotate",
        "zh": "自转；轮转",
        "score": 0.92
      },
      {
        "word": "orbit",
        "zh": "环绕轨道运行",
        "score": 0.88
      },
      {
        "word": "spin",
        "zh": "疾速旋转",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "evolve",
        "zh": "演变；进化",
        "score": 0.93
      },
      {
        "word": "involve",
        "zh": "牵连；包含",
        "score": 0.92
      },
      {
        "word": "resolve",
        "zh": "决心；解决争议",
        "score": 0.89
      }
    ],
    "antonyms": []
  },
  "involve": {
    "zh": "包含；牵涉；使卷入",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "include",
        "zh": "包括；涵盖",
        "score": 0.91
      },
      {
        "word": "entail",
        "zh": "必然导致；伴随",
        "score": 0.85
      },
      {
        "word": "engage",
        "zh": "吸引；使参与",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "evolve",
        "zh": "进化；演变",
        "score": 0.92
      },
      {
        "word": "revolve",
        "zh": "围绕转动；旋转",
        "score": 0.91
      },
      {
        "word": "invoke",
        "zh": "援引；祈求；召唤",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "exclude",
        "zh": "排除；不计在内",
        "score": 0.92
      }
    ]
  },
  "improve": {
    "zh": "改进；改善；提高",
    "level": "A2/CET-4",
    "synonyms": [
      {
        "word": "enhance",
        "zh": "增强；提高",
        "score": 0.92
      },
      {
        "word": "upgrade",
        "zh": "升级；晋升",
        "score": 0.86
      },
      {
        "word": "refine",
        "zh": "提炼；精炼",
        "score": 0.84
      }
    ],
    "spelling_confusables": [
      {
        "word": "approve",
        "zh": "批准；赞同",
        "score": 0.95
      },
      {
        "word": "disprove",
        "zh": "反驳；证明...虚假",
        "score": 0.86
      },
      {
        "word": "improvise",
        "zh": "即兴创作；临时凑合",
        "score": 0.82
      }
    ],
    "antonyms": [
      {
        "word": "deteriorate",
        "zh": "恶化；衰退",
        "score": 0.92
      },
      {
        "word": "worsen",
        "zh": "加剧恶化",
        "score": 0.9
      }
    ]
  },
  "approve": {
    "zh": "批准；核准；赞成",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "endorse",
        "zh": "背书；赞同",
        "score": 0.9
      },
      {
        "word": "sanction",
        "zh": "认可；准许",
        "score": 0.85
      },
      {
        "word": "accept",
        "zh": "接纳；同意",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "improve",
        "zh": "改进；提升",
        "score": 0.95
      },
      {
        "word": "prove",
        "zh": "证明；检验",
        "score": 0.9
      },
      {
        "word": "reprove",
        "zh": "责备；斥责",
        "score": 0.82
      }
    ],
    "antonyms": [
      {
        "word": "reject",
        "zh": "拒绝；否决",
        "score": 0.94
      },
      {
        "word": "disapprove",
        "zh": "不赞成；反对",
        "score": 0.92
      }
    ]
  },
  "enhance": {
    "zh": "提高；增加；加强",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "boost",
        "zh": "提振；激增",
        "score": 0.91
      },
      {
        "word": "strengthen",
        "zh": "巩固；强化",
        "score": 0.88
      },
      {
        "word": "improve",
        "zh": "改善；精进",
        "score": 0.86
      }
    ],
    "spelling_confusables": [
      {
        "word": "enchant",
        "zh": "使陶醉；施魔法",
        "score": 0.88
      },
      {
        "word": "chance",
        "zh": "机会；偶然",
        "score": 0.82
      },
      {
        "word": "enable",
        "zh": "使能够；开启",
        "score": 0.8
      }
    ],
    "antonyms": [
      {
        "word": "diminish",
        "zh": "减损；弱化",
        "score": 0.9
      },
      {
        "word": "undermine",
        "zh": "暗中破坏",
        "score": 0.86
      }
    ]
  },
  "fasten": {
    "zh": "系紧；扎牢；固定",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "secure",
        "zh": "固定；使安全",
        "score": 0.9
      },
      {
        "word": "attach",
        "zh": "连接；附上",
        "score": 0.86
      },
      {
        "word": "bind",
        "zh": "捆绑；约束",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "faster",
        "zh": "更快的",
        "score": 0.92
      },
      {
        "word": "fatten",
        "zh": "养肥；喂胖",
        "score": 0.88
      },
      {
        "word": "loosen",
        "zh": "松开；解绑",
        "score": 0.8
      }
    ],
    "antonyms": [
      {
        "word": "unfasten",
        "zh": "解开；松开",
        "score": 0.95
      },
      {
        "word": "loosen",
        "zh": "放松；松脱",
        "score": 0.92
      }
    ]
  },
  "tight": {
    "zh": "紧的；牢固的；严格的",
    "level": "A2/CET-4",
    "synonyms": [
      {
        "word": "firm",
        "zh": "坚定的；牢固的",
        "score": 0.89
      },
      {
        "word": "taut",
        "zh": "绷紧的；紧绷的",
        "score": 0.88
      },
      {
        "word": "secure",
        "zh": "稳固的；安全的",
        "score": 0.84
      }
    ],
    "spelling_confusables": [
      {
        "word": "sight",
        "zh": "视力；景象",
        "score": 0.88
      },
      {
        "word": "slight",
        "zh": "轻微的；纤细的",
        "score": 0.87
      },
      {
        "word": "light",
        "zh": "光亮；轻便的",
        "score": 0.86
      }
    ],
    "antonyms": [
      {
        "word": "loose",
        "zh": "松散的；宽松的",
        "score": 0.96
      },
      {
        "word": "slack",
        "zh": "松弛的；懈怠的",
        "score": 0.88
      }
    ]
  },
  "loose": {
    "zh": "宽松的；松散的；未系牢的",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "slack",
        "zh": "松弛的；疏忽的",
        "score": 0.9
      },
      {
        "word": "relaxed",
        "zh": "放松的；宽松的",
        "score": 0.84
      },
      {
        "word": "free",
        "zh": "自由的；不受束缚",
        "score": 0.8
      }
    ],
    "spelling_confusables": [
      {
        "word": "lose",
        "zh": "遗失；输掉",
        "score": 0.98
      },
      {
        "word": "loss",
        "zh": "亏损；损失",
        "score": 0.92
      },
      {
        "word": "choose",
        "zh": "选择；挑选",
        "score": 0.85
      }
    ],
    "antonyms": [
      {
        "word": "tight",
        "zh": "系紧的；牢靠的",
        "score": 0.96
      },
      {
        "word": "fastened",
        "zh": "固定住的",
        "score": 0.88
      }
    ]
  },
  "form": {
    "zh": "形式；形状；形成；构成",
    "level": "A1/CET-4",
    "synonyms": [
      {
        "word": "shape",
        "zh": "外形；塑造",
        "score": 0.9
      },
      {
        "word": "structure",
        "zh": "构造；组织结构",
        "score": 0.86
      },
      {
        "word": "create",
        "zh": "创建；形成",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "from",
        "zh": "来自；从...",
        "score": 0.96
      },
      {
        "word": "firm",
        "zh": "商行；坚固的",
        "score": 0.92
      },
      {
        "word": "farm",
        "zh": "农场；农庄",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "destroy",
        "zh": "毁灭；拆毁",
        "score": 0.88
      }
    ]
  },
  "formal": {
    "zh": "正式的；正规的；刻板的",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "official",
        "zh": "官方的；正式的",
        "score": 0.92
      },
      {
        "word": "ceremonial",
        "zh": "仪式的；隆重的",
        "score": 0.85
      },
      {
        "word": "conventional",
        "zh": "常规传统的",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "former",
        "zh": "从前的；前者",
        "score": 0.96
      },
      {
        "word": "format",
        "zh": "格式；版式",
        "score": 0.89
      },
      {
        "word": "formula",
        "zh": "公式；准则",
        "score": 0.86
      }
    ],
    "antonyms": [
      {
        "word": "casual",
        "zh": "非正式的；随意的",
        "score": 0.94
      },
      {
        "word": "informal",
        "zh": "非正式的",
        "score": 0.96
      }
    ]
  },
  "reform": {
    "zh": "改革；改造；自新",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "reorganize",
        "zh": "整顿；重新组织",
        "score": 0.9
      },
      {
        "word": "restructure",
        "zh": "调整架构；重塑",
        "score": 0.86
      },
      {
        "word": "amend",
        "zh": "修订；修正",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "perform",
        "zh": "履行；执行；演艺",
        "score": 0.94
      },
      {
        "word": "inform",
        "zh": "通知；通告",
        "score": 0.9
      },
      {
        "word": "deform",
        "zh": "变形；畸形",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "preserve",
        "zh": "维持原状；保留",
        "score": 0.88
      }
    ]
  },
  "conform": {
    "zh": "符合；与...一致；顺应",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "comply",
        "zh": "遵从；顺应规章",
        "score": 0.92
      },
      {
        "word": "adhere",
        "zh": "坚守；依附",
        "score": 0.86
      },
      {
        "word": "adapt",
        "zh": "适应；顺从",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "confirm",
        "zh": "确认；证实",
        "score": 0.98
      },
      {
        "word": "comfort",
        "zh": "安慰；舒适",
        "score": 0.88
      },
      {
        "word": "confront",
        "zh": "迎面遭遇；正视面对",
        "score": 0.89
      }
    ],
    "antonyms": [
      {
        "word": "violate",
        "zh": "违背；违犯",
        "score": 0.92
      },
      {
        "word": "deviate",
        "zh": "偏离；脱轨",
        "score": 0.9
      }
    ]
  },
  "comply": {
    "zh": "遵从；顺从；服从约定",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "obey",
        "zh": "服从；听从",
        "score": 0.92
      },
      {
        "word": "conform",
        "zh": "符合；一致",
        "score": 0.9
      },
      {
        "word": "observe",
        "zh": "遵守；奉行",
        "score": 0.85
      }
    ],
    "spelling_confusables": [
      {
        "word": "apply",
        "zh": "申请；应用",
        "score": 0.92
      },
      {
        "word": "imply",
        "zh": "暗示；意味着",
        "score": 0.91
      },
      {
        "word": "supply",
        "zh": "供应；补给",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "defy",
        "zh": "挑衅；公然反抗",
        "score": 0.94
      },
      {
        "word": "disobey",
        "zh": "不服从；违抗",
        "score": 0.92
      }
    ]
  },
  "vacant": {
    "zh": "空着的；未被占用的；茫然的",
    "level": "B1/CET-4",
    "synonyms": [
      {
        "word": "unoccupied",
        "zh": "空闲的；未占用的",
        "score": 0.92
      },
      {
        "word": "empty",
        "zh": "空空的；空洞的",
        "score": 0.88
      },
      {
        "word": "available",
        "zh": "可利用的；空出的",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "vacation",
        "zh": "假期；休假",
        "score": 0.92
      },
      {
        "word": "vacancy",
        "zh": "空缺；空房",
        "score": 0.9
      },
      {
        "word": "vacate",
        "zh": "腾出；撤离",
        "score": 0.88
      }
    ],
    "antonyms": [
      {
        "word": "occupied",
        "zh": "已占用的；客满的",
        "score": 0.95
      },
      {
        "word": "busy",
        "zh": "繁忙的；忙碌的",
        "score": 0.85
      }
    ]
  },
  "scarce": {
    "zh": "缺乏的；罕见的；不足的",
    "level": "B2/CET-4",
    "synonyms": [
      {
        "word": "rare",
        "zh": "珍罕的；稀有的",
        "score": 0.92
      },
      {
        "word": "sparse",
        "zh": "稀疏的；零落的",
        "score": 0.86
      },
      {
        "word": "insufficient",
        "zh": "不充分的；短缺的",
        "score": 0.82
      }
    ],
    "spelling_confusables": [
      {
        "word": "scare",
        "zh": "惊吓；使恐惧",
        "score": 0.95
      },
      {
        "word": "scale",
        "zh": "规模；天平；刻度",
        "score": 0.88
      },
      {
        "word": "share",
        "zh": "分享；股份",
        "score": 0.82
      }
    ],
    "antonyms": [
      {
        "word": "abundant",
        "zh": "充沛的；丰富的",
        "score": 0.96
      },
      {
        "word": "plentiful",
        "zh": "充足的；大量的",
        "score": 0.92
      }
    ]
  }
};
