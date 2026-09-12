// =========================================================
// STONE_LEXICAL_GRAPH - 全量相似词图谱与 SAN 阶梯题库 (711词 AI 全高标对齐版)
// 每个词均包含真实例句挖空、精选纯英形近/近义四选一与深度语言学辨析锦囊
// =========================================================

(function() {
  'use strict';
  const graph = {
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
  "reunite": {
    "word": "reunite",
    "translation": "重聚；重新统一",
    "cloze": {
      "sentence": "There have been rumours that the band will ______ for a world tour.",
      "translation": "一直有传言称该乐队将重新聚合进行世界巡回演出。",
      "original": "There have been rumours that the band will reunite for a world tour."
    },
    "form_confusables": [
      {
        "word": "reunite",
        "zh": "重聚；重新统一"
      },
      {
        "word": "unite",
        "zh": "联合；团结"
      },
      {
        "word": "require",
        "zh": "需要；要求"
      },
      {
        "word": "retaliate",
        "zh": "报复；反击"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reunite",
        "zh": "重聚；重新统一"
      },
      {
        "word": "assemble",
        "zh": "集合；聚集"
      },
      {
        "word": "gather",
        "zh": "聚集；收集"
      },
      {
        "word": "converge",
        "zh": "汇聚；聚合"
      }
    ],
    "notes": "【搭配考点】reunite for/with 强调分离后的重逢或重新统一（如乐队重组或战后家庭团聚）；【形近辨析】unite (联合/结合)，require (需要)，retaliate (报复)；【近义辨析】reunite 侧重经历分散后再度团聚，assemble 强调依指令组织集合，gather 强调个体聚拢，converge 强调向同一焦点会合。"
  },
  "union": {
    "word": "union",
    "translation": "联盟；工会；结合",
    "cloze": {
      "sentence": "Workers at the plant voted overwhelmingly to join the trade ______.",
      "translation": "该工厂的工人们以压倒性多数投票赞成加入工会。",
      "original": "Workers at the plant voted overwhelmingly to join the trade union."
    },
    "form_confusables": [
      {
        "word": "union",
        "zh": "联盟；工会"
      },
      {
        "word": "uniform",
        "zh": "制服；统一的"
      },
      {
        "word": "unison",
        "zh": "齐声；一致"
      },
      {
        "word": "onion",
        "zh": "洋葱"
      }
    ],
    "semantic_confusables": [
      {
        "word": "union",
        "zh": "联盟；工会"
      },
      {
        "word": "alliance",
        "zh": "同盟；结盟"
      },
      {
        "word": "coalition",
        "zh": "结合体；联合政府"
      },
      {
        "word": "federation",
        "zh": "联邦；同盟"
      }
    ],
    "notes": "【搭配考点】trade union (工会)，in union with (与...结合/一致)；【形近辨析】uniform (制服/一致的)，unison (齐唱/和谐一致)，onion (洋葱)；【近义辨析】union 强调各成员凝聚为一个不可分割的法定或社团整体，alliance 强调独立国家或政党间的战略结盟，coalition 侧重为特定目标组成的临时政治联盟，federation 强调联邦制的多机构联合。"
  },
  "anniversary": {
    "word": "anniversary",
    "translation": "周年纪念日",
    "cloze": {
      "sentence": "He bought her a diamond ring on their tenth wedding ______.",
      "translation": "在他们结婚十周年纪念日那天，他给她买了一枚钻戒。",
      "original": "He bought her a diamond ring on their tenth wedding anniversary."
    },
    "form_confusables": [
      {
        "word": "anniversary",
        "zh": "周年纪念日"
      },
      {
        "word": "adversary",
        "zh": "对手；敌手"
      },
      {
        "word": "universal",
        "zh": "普遍的；宇宙的"
      },
      {
        "word": "diversity",
        "zh": "多样性；差异"
      }
    ],
    "semantic_confusables": [
      {
        "word": "anniversary",
        "zh": "周年纪念日"
      },
      {
        "word": "celebration",
        "zh": "庆典；庆祝"
      },
      {
        "word": "commemoration",
        "zh": "纪念；纪念仪式"
      },
      {
        "word": "jubilee",
        "zh": "大禧年；周年盛典"
      }
    ],
    "notes": "【搭配考点】wedding anniversary (结婚周年日)，celebrate an anniversary (庆祝周年纪念)；【形近辨析】adversary (对手/敌手)，universal (普遍的)，diversity (多样性)；【近义辨析】anniversary 专指按公历年重复回归的特定日期纪念，celebration 侧重庆祝活动本身，commemoration 强调对逝者或历史事件的庄重缅怀，jubilee 专指重要整数年份（如25或50周年）的盛大庆典。"
  },
  "annual": {
    "word": "annual",
    "translation": "每年的；年度的",
    "cloze": {
      "sentence": "The company published its ______ report detailing profits and expenditures for the year.",
      "translation": "该公司发布了年度报告，详细列出了全年的利润和开支。",
      "original": "The company published its annual report detailing profits and expenditures for the year."
    },
    "form_confusables": [
      {
        "word": "annual",
        "zh": "每年的；年度的"
      },
      {
        "word": "annul",
        "zh": "废除；宣布无效"
      },
      {
        "word": "actual",
        "zh": "实际的；真实的"
      },
      {
        "word": "sensual",
        "zh": "肉体的；感官的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "annual",
        "zh": "每年的；年度的"
      },
      {
        "word": "yearly",
        "zh": "每年的；按年计算的"
      },
      {
        "word": "perennial",
        "zh": "长期的；多年生的"
      },
      {
        "word": "periodic",
        "zh": "周期的；定期的"
      }
    ],
    "notes": "【搭配考点】annual report (年度报告)，annual meeting/budget (年会/年度预算)；【形近辨析】annul (宣告无效/废止)，actual (实际的)，sensual (感官的)；【近义辨析】annual 强调每隔一年一度发生一次的正式规程，yearly 偏日常口语表达，perennial 强调持续多年或反复出现，periodic 强调按一定周期循环出现（不限于一年）。"
  },
  "controversy": {
    "word": "controversy",
    "translation": "争论；争议；论战",
    "cloze": {
      "sentence": "The government's new taxation policy has provoked heated ______ across the nation.",
      "translation": "政府的新税收政策在全国范围内引发了激烈的公开争论。",
      "original": "The government's new taxation policy has provoked heated controversy across the nation."
    },
    "form_confusables": [
      {
        "word": "controversy",
        "zh": "争论；论战"
      },
      {
        "word": "contemporary",
        "zh": "当代的；同时代的人"
      },
      {
        "word": "contrary",
        "zh": "相反的；对立的"
      },
      {
        "word": "counterpart",
        "zh": "对应的人或物"
      }
    ],
    "semantic_confusables": [
      {
        "word": "controversy",
        "zh": "争论；论战"
      },
      {
        "word": "dispute",
        "zh": "纷争；争议"
      },
      {
        "word": "argument",
        "zh": "争辩；争吵"
      },
      {
        "word": "debate",
        "zh": "辩论；研讨"
      }
    ],
    "notes": "【搭配考点】heated controversy (激烈的争论)，cause/provoke controversy (引发争议)；【形近辨析】contemporary (当代的)，contrary (相反的)，counterpart (对应方)；【近义辨析】controversy 专指在公众舆论层面长期、广泛存在的原则性分歧与争论，dispute 侧重具体利益、边界或劳动合同的纠纷，argument 侧重人与人之间的争吵辩驳，debate 侧重正式有规则的辩论会。"
  },
  "contrary": {
    "word": "contrary",
    "translation": "相反的；截然不同的",
    "cloze": {
      "sentence": "His reckless behavior is completely ______ to the safety rules of the laboratory.",
      "translation": "他的鲁莽行为完全与实验室的安全规程相违背。",
      "original": "His reckless behavior is completely contrary to the safety rules of the laboratory."
    },
    "form_confusables": [
      {
        "word": "contrary",
        "zh": "相反的；逆向的"
      },
      {
        "word": "contrast",
        "zh": "对比；对照"
      },
      {
        "word": "controversy",
        "zh": "争议；争论"
      },
      {
        "word": "contract",
        "zh": "合同；收缩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contrary",
        "zh": "相反的；对立的"
      },
      {
        "word": "opposite",
        "zh": "对面的；对立的"
      },
      {
        "word": "contradictory",
        "zh": "矛盾的；抵触的"
      },
      {
        "word": "conflicting",
        "zh": "冲突的；相克相悖的"
      }
    ],
    "notes": "【搭配考点】contrary to (与...背道而驰/相反)，on the contrary (恰恰相反)；【形近辨析】contrast (对比/反差)，controversy (争议)，contract (合同/收缩)；【近义辨析】contrary 强调性质、方向或意图与既定标准直接抵触，opposite 强调在空间方位或极端对立面的相对，contradictory 强调逻辑上的互相矛盾不可兼得，conflicting 侧重利益或意见的碰撞冲突。"
  },
  "contrast": {
    "word": "contrast",
    "translation": "对比；对照；悬殊",
    "cloze": {
      "sentence": "Her bright red dress was in sharp ______ to the dark, muted suits around her.",
      "translation": "她鲜红色的连衣裙与周围深色沉闷的西装形成了鲜明的对比。",
      "original": "Her bright red dress was in sharp contrast to the dark, muted suits around her."
    },
    "form_confusables": [
      {
        "word": "contrast",
        "zh": "对比；反差"
      },
      {
        "word": "contract",
        "zh": "合同；收缩"
      },
      {
        "word": "contrary",
        "zh": "相反的"
      },
      {
        "word": "contact",
        "zh": "接触；联系"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contrast",
        "zh": "对比；反差"
      },
      {
        "word": "comparison",
        "zh": "比较；对照"
      },
      {
        "word": "difference",
        "zh": "差异；分歧"
      },
      {
        "word": "distinction",
        "zh": "区别；差别"
      }
    ],
    "notes": "【搭配考点】in sharp contrast to (与...形成鲜明对照)，contrast with (与...形成对比)；【形近辨析】contract (合同/缩小)，contrary (相反的)，contact (联系/接触)；【近义辨析】contrast 专指把两种差异显著的事物放在一起突显出的反差与对比度，comparison 侧重横向综合权衡异同点，difference 仅客观陈述不相同，distinction 侧重细致辨明特征差异。"
  },
  "nasty": {
    "word": "nasty",
    "translation": "恶劣的；令人讨厌的；严重的",
    "cloze": {
      "sentence": "He slipped on the icy pavement and suffered a very ______ injury to his knee.",
      "translation": "他在结冰的人行道上滑倒，膝盖受了非常严重的伤。",
      "original": "He slipped on the icy pavement and suffered a very nasty injury to his knee."
    },
    "form_confusables": [
      {
        "word": "nasty",
        "zh": "恶劣的；讨厌的"
      },
      {
        "word": "tasty",
        "zh": "美味的"
      },
      {
        "word": "pastry",
        "zh": "油酥糕点"
      },
      {
        "word": "hasty",
        "zh": "仓促的；轻率的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "nasty",
        "zh": "恶劣的；严重的"
      },
      {
        "word": "unpleasant",
        "zh": "令人不快的"
      },
      {
        "word": "severe",
        "zh": "严重的；严厉的"
      },
      {
        "word": "foul",
        "zh": "恶臭的；下流的"
      }
    ],
    "notes": "【搭配考点】nasty injury/accident (严重的伤害/事故)，nasty smell/taste (令人作呕的气味/味道)；【形近辨析】tasty (美味的)，pastry (糕点)，hasty (草率的/仓促的)；【近义辨析】nasty 强调令人极度反感、棘手甚至带来身体伤害的恶劣性质，unpleasant 语气较温和仅表示不愉快，severe 强调程度之深重严肃，foul 侧重肮脏污秽或恶臭违规。"
  },
  "astronaut": {
    "word": "astronaut",
    "translation": "宇航员；太空人",
    "cloze": {
      "sentence": "The veteran ______ conducted a three-hour spacewalk outside the international space station.",
      "translation": "这位资深宇航员在国际空间站外进行了长达三个小时的太空行走。",
      "original": "The veteran astronaut conducted a three-hour spacewalk outside the international space station."
    },
    "form_confusables": [
      {
        "word": "astronaut",
        "zh": "宇航员；航天员"
      },
      {
        "word": "astronomer",
        "zh": "天文学家"
      },
      {
        "word": "astrologer",
        "zh": "占星术士"
      },
      {
        "word": "asteroid",
        "zh": "小行星"
      }
    ],
    "semantic_confusables": [
      {
        "word": "astronaut",
        "zh": "宇航员；太空人"
      },
      {
        "word": "spaceman",
        "zh": "太空人；外星人"
      },
      {
        "word": "cosmonaut",
        "zh": "宇航员(苏俄)"
      },
      {
        "word": "pilot",
        "zh": "飞行员；领航员"
      }
    ],
    "notes": "【搭配考点】veteran astronaut (资深宇航员)，astronaut training (航天员训练)；【形近辨析】astronomer (天文学家)，astrologer (占星术士)，asteroid (小行星)；【近义辨析】astronaut 强调接受过严格航天训练的专业宇航员（源自希腊语 astro- 星星 + naut 水手），spaceman 偏口语科幻色彩，cosmonaut 专指苏俄体系宇航员，pilot 泛指常规飞行器驾驶员。"
  },
  "heaven": {
    "word": "heaven",
    "translation": "天堂；天国；天空",
    "cloze": {
      "sentence": "Sitting on the peaceful beach watching the sunset felt like pure ______ to her.",
      "translation": "坐在宁静的海滩上看日落，对她来说简直就像身处纯粹的天堂。",
      "original": "Sitting on the peaceful beach watching the sunset felt like pure heaven to her."
    },
    "form_confusables": [
      {
        "word": "heaven",
        "zh": "天堂；天空"
      },
      {
        "word": "haven",
        "zh": "避风港；庇护所"
      },
      {
        "word": "heavy",
        "zh": "沉重的"
      },
      {
        "word": "heave",
        "zh": "用力举起；起伏"
      }
    ],
    "semantic_confusables": [
      {
        "word": "heaven",
        "zh": "天堂；极乐世界"
      },
      {
        "word": "paradise",
        "zh": "乐园；伊甸园"
      },
      {
        "word": "bliss",
        "zh": "极乐；天赐之福"
      },
      {
        "word": "utopia",
        "zh": "乌托邦；理想国"
      }
    ],
    "notes": "【搭配考点】pure heaven (极致享受/如同天堂)，a match made in heaven (天作之合)；【形近辨析】haven (安全港湾/庇护所)，heavy (沉重的)，heave (用力举起/起伏)；【近义辨析】heaven 具有浓厚宗教天国色彩，日常中比喻至高无上的舒适享受，paradise 侧重如诗如画的花园式乐土，bliss 侧重内心情感的极度幸福，utopia 侧重理想化完美的社会制度。"
  },
  "satellite": {
    "word": "satellite",
    "translation": "人造卫星；卫星",
    "cloze": {
      "sentence": "The television network broadcast the live championship game via communication ______.",
      "translation": "该电视网络通过通信卫星对冠军赛进行了现场直播。",
      "original": "The television network broadcast the live championship game via communication satellite."
    },
    "form_confusables": [
      {
        "word": "satellite",
        "zh": "卫星；人造卫星"
      },
      {
        "word": "settle",
        "zh": "安顿；解决"
      },
      {
        "word": "subtle",
        "zh": "微妙的；隐约的"
      },
      {
        "word": "appetite",
        "zh": "食欲；嗜好"
      }
    ],
    "semantic_confusables": [
      {
        "word": "satellite",
        "zh": "卫星；人造天体"
      },
      {
        "word": "orbiter",
        "zh": "轨道飞行器"
      },
      {
        "word": "spacecraft",
        "zh": "航天器；宇宙飞船"
      },
      {
        "word": "transmitter",
        "zh": "发射机；传送器"
      }
    ],
    "notes": "【搭配考点】communication satellite (通信卫星)，via satellite (通过卫星传输)；【形近辨析】settle (安顿/解决)，subtle (微妙精细的)，appetite (食欲)；【近义辨析】satellite 专指围绕行星轨道运转的天体或人造探测发射装置，orbiter 特指进入轨道执行科学测绘的飞行器，spacecraft 泛指各类载人或无人宇宙飞船，transmitter 侧重信号发射硬件设备。"
  },
  "moon": {
    "word": "moon",
    "translation": "月亮；月球；卫星",
    "cloze": {
      "sentence": "The surface of the ______ is marked by countless craters formed by asteroid impacts.",
      "translation": "月球表面布满了由小行星撞击形成的无数环形山。",
      "original": "The surface of the moon is marked by countless craters formed by asteroid impacts."
    },
    "form_confusables": [
      {
        "word": "moon",
        "zh": "月球；月亮"
      },
      {
        "word": "mood",
        "zh": "情绪；心境"
      },
      {
        "word": "doom",
        "zh": "厄运；毁灭"
      },
      {
        "word": "boom",
        "zh": "繁荣；激增"
      }
    ],
    "semantic_confusables": [
      {
        "word": "moon",
        "zh": "月球；天然卫星"
      },
      {
        "word": "satellite",
        "zh": "天然或人造卫星"
      },
      {
        "word": "celestial",
        "zh": "天体的；天空的"
      },
      {
        "word": "orb",
        "zh": "天体；圆球"
      }
    ],
    "notes": "【搭配考点】surface of the moon (月球表面)，once in a blue moon (千载难逢/罕见)；【形近辨析】mood (心情/情绪)，doom (厄运/毁灭)，boom (繁荣/剧增)；【近义辨析】moon 专指行星的天然卫星（大写特指月球），satellite 涵盖天然天体与人造发射装置，celestial 泛指一切天空天体，orb 偏诗意文学指圆满发光的天体球体。"
  },
  "evolve": {
    "word": "evolve",
    "translation": "演变；进化；逐步发展",
    "cloze": {
      "sentence": "Modern mobile applications continue to ______ rapidly to satisfy users' changing expectations.",
      "translation": "现代移动应用不断迅速演化，以满足用户不断变化的需求期望。",
      "original": "Modern mobile applications continue to evolve rapidly to satisfy users' changing expectations."
    },
    "form_confusables": [
      {
        "word": "evolve",
        "zh": "进化；发展"
      },
      {
        "word": "revolve",
        "zh": "旋转；围绕"
      },
      {
        "word": "involve",
        "zh": "涉及；卷入"
      },
      {
        "word": "dissolve",
        "zh": "溶解；解散"
      }
    ],
    "semantic_confusables": [
      {
        "word": "evolve",
        "zh": "逐步发展；进化"
      },
      {
        "word": "develop",
        "zh": "发展；开发"
      },
      {
        "word": "progress",
        "zh": "前进；进步"
      },
      {
        "word": "mutate",
        "zh": "变异；突变"
      }
    ],
    "notes": "【搭配考点】evolve into/from (从...演变成...)，evolve rapidly (快速演进)；【形近辨析】revolve (绕轴旋转)，involve (牵连包含)，dissolve (溶解/解散)；【近义辨析】evolve 强调经由时间推移从低级到高级的自然演进演变，develop 强调人类主观规划推动的发展完善，progress 强调向着更佳目标前行，mutate 专指基因或形态上的突变。"
  },
  "revolve": {
    "word": "revolve",
    "translation": "旋转；围绕；以...为中心",
    "cloze": {
      "sentence": "Astronomers discovered that all planets in this solar system ______ around a central star.",
      "translation": "天文学家发现该太阳系中的所有行星都围绕一颗中心恒星运转。",
      "original": "Astronomers discovered that all planets in this solar system revolve around a central star."
    },
    "form_confusables": [
      {
        "word": "revolve",
        "zh": "旋转；环绕"
      },
      {
        "word": "evolve",
        "zh": "进化；演化"
      },
      {
        "word": "involve",
        "zh": "包含；牵涉"
      },
      {
        "word": "resolve",
        "zh": "解决；决心"
      }
    ],
    "semantic_confusables": [
      {
        "word": "revolve",
        "zh": "公转；旋转"
      },
      {
        "word": "rotate",
        "zh": "自转；旋转"
      },
      {
        "word": "spin",
        "zh": "快速旋转"
      },
      {
        "word": "orbit",
        "zh": "沿轨道环绕"
      }
    ],
    "notes": "【搭配考点】revolve around (围绕...旋转/以...为核心)；【形近辨析】evolve (逐步演变)，involve (卷入涉及)，resolve (下决心/化解)；【近义辨析】revolve 专指天体围绕某一外部轴心或星体公转，rotate 侧重物体自身绕自转轴旋转，spin 强调高速陀螺式原地打转，orbit 强调严格依物理引力轨道环绕运动。"
  },
  "involve": {
    "word": "involve",
    "translation": "包含；牵涉；使卷入",
    "cloze": {
      "sentence": "The new renewable energy project will ______ significant financial investment from both public and private sectors.",
      "translation": "该新能源项目将需要公共部门和私营部门的大量资金投入。",
      "original": "The new renewable energy project will involve significant financial investment from both public and private sectors."
    },
    "form_confusables": [
      {
        "word": "involve",
        "zh": "包含；牵涉"
      },
      {
        "word": "revolve",
        "zh": "旋转；围绕"
      },
      {
        "word": "evolve",
        "zh": "进化；演变"
      },
      {
        "word": "invoke",
        "zh": "援引；祈求"
      }
    ],
    "semantic_confusables": [
      {
        "word": "involve",
        "zh": "包含；涉及"
      },
      {
        "word": "entail",
        "zh": "势必带来；包含"
      },
      {
        "word": "include",
        "zh": "包含；包括"
      },
      {
        "word": "implicate",
        "zh": "牵涉犯罪；暗示"
      }
    ],
    "notes": "【搭配考点】involve doing sth (必然包含做某事)，be involved in (参与/卷入)；【形近辨析】revolve (旋转环绕)，evolve (演进演化)，invoke (援引法律/祈求保佑)；【近义辨析】involve 强调事物内在必然牵涉或作为必要组成部分，entail 侧重某一决定必然招致的代价或负担，include 侧重罗列所属集合的部分元素，implicate 专指涉嫌卷入违法犯罪案件。"
  },
  "advance": {
    "word": "advance",
    "translation": "前进；推进；提前",
    "cloze": {
      "sentence": "Medical researchers hope to ______ clinical trials into the third phase by the end of this year.",
      "translation": "医学研究人员希望在今年年底前将临床试验推进到第三阶段。",
      "original": "Medical researchers hope to advance clinical trials into the third phase by the end of this year."
    },
    "form_confusables": [
      {
        "word": "advance",
        "zh": "推进；前进"
      },
      {
        "word": "advantage",
        "zh": "优势；有利条件"
      },
      {
        "word": "advice",
        "zh": "建议；劝告"
      },
      {
        "word": "adverse",
        "zh": "不利的；逆向的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "advance",
        "zh": "推进；促进"
      },
      {
        "word": "promote",
        "zh": "促进；提拔"
      },
      {
        "word": "propel",
        "zh": "推进；驱使"
      },
      {
        "word": "forward",
        "zh": "转交；推进"
      }
    ],
    "notes": "【搭配考点】advance to/into (推进到...)，in advance (提前/预先)；【形近辨析】advantage (优势好处)，advice (建议忠告)，adverse (逆境的/有害的)；【近义辨析】advance 侧重按部就班向前迈进推进实质进程，promote 强调提高地位、声誉或宣传推广，propel 侧重施加强大机械力或驱动力向前推动，forward 偏向物流转运或信息转交。"
  },
  "ahead": {
    "word": "ahead",
    "translation": "在前面；提前；领先",
    "cloze": {
      "sentence": "Engineers worked around the clock to finish the highway project three months ______ of schedule.",
      "translation": "工程师们夜以继日地工作，比原定计划提前了三个月完成公路项目。",
      "original": "Engineers worked around the clock to finish the highway project three months ahead of schedule."
    },
    "form_confusables": [
      {
        "word": "ahead",
        "zh": "在前面；提前"
      },
      {
        "word": "head",
        "zh": "头部；率领"
      },
      {
        "word": "overhead",
        "zh": "在头顶上的；管理开支"
      },
      {
        "word": "forehead",
        "zh": "额头"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ahead",
        "zh": "在前面；领先"
      },
      {
        "word": "beforehand",
        "zh": "事先；预先"
      },
      {
        "word": "in front",
        "zh": "在前方"
      },
      {
        "word": "forward",
        "zh": "向前；向未来"
      }
    ],
    "notes": "【搭配考点】ahead of schedule (提前于工期)，go ahead (继续进行/着手推进)；【形近辨析】head (头目/首脑)，overhead (高空的/企业管理费用)，forehead (前额)；【近义辨析】ahead of 突出在时间表或空间序列上的相对领先超前，beforehand 强调在特定事件发生之前做好预备，in front 强调空间物理位置的正前方，forward 侧重运动朝向前方。"
  },
  "ongoing": {
    "word": "ongoing",
    "translation": "进行中的；持续存在的",
    "cloze": {
      "sentence": "The police launched an ______ investigation into the fraudulent financial transactions.",
      "translation": "警方针对这起欺诈性金融交易展开了持续深入的调查。",
      "original": "The police launched an ongoing investigation into the fraudulent financial transactions."
    },
    "form_confusables": [
      {
        "word": "ongoing",
        "zh": "进行中的；持续的"
      },
      {
        "word": "outgoing",
        "zh": "外向的；即将离任的"
      },
      {
        "word": "incoming",
        "zh": "进来的；新当选的"
      },
      {
        "word": "undergoing",
        "zh": "正在经历的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ongoing",
        "zh": "持续进行中的"
      },
      {
        "word": "continuous",
        "zh": "连续不断的"
      },
      {
        "word": "persistent",
        "zh": "持续的；执拗的"
      },
      {
        "word": "perpetual",
        "zh": "永久的；长期的"
      }
    ],
    "notes": "【搭配考点】ongoing investigation/effort (正在持续进行的调查/努力)；【形近辨析】outgoing (外向开朗的/即将离任的)，incoming (新进的/来电的)，undergoing (承受/正在经历)；【近义辨析】ongoing 强调当前正处于推进过程之中且尚未结束，continuous 强调时间空间上无间断紧密连接，persistent 侧重遇到阻碍依然执着坚持，perpetual 强调无休无止直至永恒。"
  },
  "approve": {
    "word": "approve",
    "translation": "批准；赞成；认可",
    "cloze": {
      "sentence": "The board of directors met this morning to ______ the proposed annual budget.",
      "translation": "董事会今天上午开会批准了拟议的年度预算。",
      "original": "The board of directors met this morning to approve the proposed annual budget."
    },
    "form_confusables": [
      {
        "word": "approve",
        "zh": "批准；赞成"
      },
      {
        "word": "prove",
        "zh": "证明；证实"
      },
      {
        "word": "improve",
        "zh": "改善；提高"
      },
      {
        "word": "reprove",
        "zh": "责备；指责"
      }
    ],
    "semantic_confusables": [
      {
        "word": "approve",
        "zh": "批准；赞同"
      },
      {
        "word": "endorse",
        "zh": "背书；认可"
      },
      {
        "word": "sanction",
        "zh": "批准；认可"
      },
      {
        "word": "authorize",
        "zh": "授权；核准"
      }
    ],
    "notes": "【搭配考点】approve of sth (赞同某事)，approve the budget/plan (正式批准预算/方案)；【形近辨析】prove (证明检验)，improve (增进改善)，reprove (训诫谴责)；【近义辨析】approve 强调上级或权力机构通过审核予以认可通过，endorse 侧重名人公众公开背书声援，sanction 正式核准法律规范（亦具制裁义），authorize 强调授予下级行事权力。"
  },
  "proof": {
    "word": "proof",
    "translation": "证据；证明；检验",
    "cloze": {
      "sentence": "Detectives found conclusive ______ at the scene that tied the suspect to the crime.",
      "translation": "侦探们在案发现场找到了将嫌疑人与罪行联系起来的决定性证据。",
      "original": "Detectives found conclusive proof at the scene that tied the suspect to the crime."
    },
    "form_confusables": [
      {
        "word": "proof",
        "zh": "证据；证明"
      },
      {
        "word": "roof",
        "zh": "屋顶"
      },
      {
        "word": "spoof",
        "zh": "恶搞；欺骗"
      },
      {
        "word": "aloof",
        "zh": "冷漠的；疏远的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "proof",
        "zh": "确凿证据；铁证"
      },
      {
        "word": "evidence",
        "zh": "证据；迹象"
      },
      {
        "word": "testimony",
        "zh": "证词；见证"
      },
      {
        "word": "confirmation",
        "zh": "确认；证实"
      }
    ],
    "notes": "【搭配考点】conclusive proof (确凿证据)，proof of purchase/residence (购买凭证/居住证明)；【形近辨析】roof (房顶)，spoof (滑稽戏仿)，aloof (超然冷漠的)；【近义辨析】proof 强调具有无可辩驳决定性说服力的铁证，evidence 泛指司法或科研中支持某假说的各类迹象材料，testimony 专指法庭证人宣誓提供的口供证词，confirmation 强调对已有信息的进一步印证确认。"
  },
  "enhance": {
    "word": "enhance",
    "translation": "提高；增强；增进",
    "cloze": {
      "sentence": "Regular physical exercise can significantly ______ your immune system and overall vitality.",
      "translation": "经常进行体育锻炼可以显著增强你的免疫系统和整体活力。",
      "original": "Regular physical exercise can significantly enhance your immune system and overall vitality."
    },
    "form_confusables": [
      {
        "word": "enhance",
        "zh": "提高；增强"
      },
      {
        "word": "chance",
        "zh": "机会；偶然"
      },
      {
        "word": "enchant",
        "zh": "使陶醉；施魔法"
      },
      {
        "word": "entrance",
        "zh": "入口；使入迷"
      }
    ],
    "semantic_confusables": [
      {
        "word": "enhance",
        "zh": "提高；强化"
      },
      {
        "word": "boost",
        "zh": "促进；使激增"
      },
      {
        "word": "amplify",
        "zh": "放大；增强"
      },
      {
        "word": "heighten",
        "zh": "加剧；提高"
      }
    ],
    "notes": "【搭配考点】enhance quality/performance (提升品质/性能)，enhance reputation (提高声誉)；【形近辨析】chance (机会/偶然)，enchant (使着迷迷醉)，entrance (大门入口/使出神)；【近义辨析】enhance 强调在现有基础上增加价值、吸引力或效率，boost 侧重短时间内从外部给予推动使之剧增，amplify 侧重声音、信号或效果在物理尺度上的扩大放大，heighten 侧重情感、警惕性或紧张局势的加剧升温。"
  },
  "enable": {
    "word": "enable",
    "translation": "使能够；开启；使可行",
    "cloze": {
      "sentence": "The revolutionary software update will ______ doctors to diagnose rare conditions much faster.",
      "translation": "这项突破性的软件更新将使医生能够更快地诊断罕见疾病。",
      "original": "The revolutionary software update will enable doctors to diagnose rare conditions much faster."
    },
    "form_confusables": [
      {
        "word": "enable",
        "zh": "使能够；开启"
      },
      {
        "word": "unable",
        "zh": "不能的；不会的"
      },
      {
        "word": "stable",
        "zh": "稳定的；马厩"
      },
      {
        "word": "noble",
        "zh": "高尚的；贵族的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "enable",
        "zh": "使能够；赋予能力"
      },
      {
        "word": "empower",
        "zh": "授权；使自主"
      },
      {
        "word": "allow",
        "zh": "允许；准许"
      },
      {
        "word": "facilitate",
        "zh": "促进；使便利"
      }
    ],
    "notes": "【搭配考点】enable sb to do sth (使某人能够做某事)；【形近辨析】unable (无法做到的)，stable (稳固安定的)，noble (尊贵崇高的)；【近义辨析】enable 强调提供手段、工具或必要条件使其具备完成某事的能力，empower 侧重赋予法律权利、信心或自主权，allow 强调许可放行不加阻拦，facilitate 强调减少障碍使流程变得容易快捷。"
  },
  "enlarge": {
    "word": "enlarge",
    "translation": "扩大；放大；扩展",
    "cloze": {
      "sentence": "The university library plans to ______ its main reading room to accommodate more students.",
      "translation": "大学图书馆计划扩建主阅览室，以容纳更多的学生。",
      "original": "The university library plans to enlarge its main reading room to accommodate more students."
    },
    "form_confusables": [
      {
        "word": "enlarge",
        "zh": "扩大；放大"
      },
      {
        "word": "engage",
        "zh": "吸引；从事"
      },
      {
        "word": "enforce",
        "zh": "强行实施；执行"
      },
      {
        "word": "engulf",
        "zh": "吞没；淹没"
      }
    ],
    "semantic_confusables": [
      {
        "word": "enlarge",
        "zh": "扩大；放大"
      },
      {
        "word": "expand",
        "zh": "扩展；扩大规模"
      },
      {
        "word": "magnify",
        "zh": "放大；夸大"
      },
      {
        "word": "extend",
        "zh": "延伸；延长"
      }
    ],
    "notes": "【搭配考点】enlarge a photo/room (放大照片/扩建房间)，enlarge on/upon (详述/阐述)；【形近辨析】engage (订婚/吸引)，enforce (强行执行)，engulf (吞没/淹没)；【近义辨析】enlarge 侧重物体体积、尺寸或面积在物理空间上的实质扩增放大，expand 侧重边界向外扩张或业务范围拓展，magnify 专指通过透镜把微观图像光学放大，extend 强调在长度、时间或手臂范围上的拉长延伸。"
  },
  "enrich": {
    "word": "enrich",
    "translation": "使丰富；充实；使富有",
    "cloze": {
      "sentence": "Traveling abroad and experiencing diverse cultures will greatly ______ your personal life.",
      "translation": "出国旅行并体验多元文化将极大地丰富你的个人生活。",
      "original": "Traveling abroad and experiencing diverse cultures will greatly enrich your personal life."
    },
    "form_confusables": [
      {
        "word": "enrich",
        "zh": "使丰富；充实"
      },
      {
        "word": "reach",
        "zh": "到达；伸出"
      },
      {
        "word": "encroach",
        "zh": "侵犯；蚕食"
      },
      {
        "word": "enlist",
        "zh": "招募；谋求帮助"
      }
    ],
    "semantic_confusables": [
      {
        "word": "enrich",
        "zh": "充实；使丰富"
      },
      {
        "word": "enhance",
        "zh": "提升；增强"
      },
      {
        "word": "fortify",
        "zh": "设防保卫；增强"
      },
      {
        "word": "augment",
        "zh": "扩大；提高"
      }
    ],
    "notes": "【搭配考点】enrich the mind/experience (充实头脑/丰富阅历)，enrich soil (肥沃土壤)；【形近辨析】reach (伸手够到/到达)，encroach (逐步侵占侵犯)，enlist (参军/争取赞同)；【近义辨析】enrich 侧重注入深厚营养、内涵或财富使其更为厚重充盈，enhance 侧重增加吸引力或外在性能，fortify 强调加固防御或添加微量营养素增强体质，augment 强调在数量或规模上的渐进追加。"
  },
  "fasten": {
    "word": "fasten",
    "translation": "系牢；扎紧；固定",
    "cloze": {
      "sentence": "Please make sure you ______ your seat belt securely before the car starts moving.",
      "translation": "在车辆启动行驶之前，请务必系好你的安全带。",
      "original": "Please make sure you fasten your seat belt securely before the car starts moving."
    },
    "form_confusables": [
      {
        "word": "fasten",
        "zh": "系紧；固定"
      },
      {
        "word": "faster",
        "zh": "更快的"
      },
      {
        "word": "hasten",
        "zh": "催促；赶快"
      },
      {
        "word": "fatten",
        "zh": "长肥；养肥"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fasten",
        "zh": "系紧；锁牢"
      },
      {
        "word": "secure",
        "zh": "牢固固定；确保安全"
      },
      {
        "word": "tie",
        "zh": "系；绑"
      },
      {
        "word": "attach",
        "zh": "附上；系上"
      }
    ],
    "notes": "【搭配考点】fasten seat belt (系安全带)，fasten the door/gate (把门栓扣紧)；【形近辨析】faster (更快捷)，hasten (加速轻率前行)，fatten (使...变肥发胖)；【近义辨析】fasten 强调使用卡扣、纽扣、钉子或带子把两个物体紧密联结固定锁牢，secure 强调固定使其稳固不脱落且免受破坏，tie 专指用绳索打结绑缚，attach 强调粘贴或附着其上并未必紧扣。"
  },
  "tight": {
    "word": "tight",
    "translation": "牢固的；紧绷的；紧密的",
    "cloze": {
      "sentence": "Make sure you keep a ______ grip on the rope as you descend the cliff.",
      "translation": "沿着悬崖下降时，务必紧紧握住绳索。",
      "original": "Make sure you keep a tight grip on the rope as you descend the cliff."
    },
    "form_confusables": [
      {
        "word": "tight",
        "zh": "紧的；牢固的"
      },
      {
        "word": "sight",
        "zh": "视力；景象"
      },
      {
        "word": "slight",
        "zh": "轻微的；纤细的"
      },
      {
        "word": "night",
        "zh": "夜晚"
      }
    ],
    "semantic_confusables": [
      {
        "word": "tight",
        "zh": "紧固的；紧握的"
      },
      {
        "word": "firm",
        "zh": "稳固的；坚实的"
      },
      {
        "word": "taut",
        "zh": "绷紧的；拉紧的"
      },
      {
        "word": "secure",
        "zh": "牢靠的；固定的"
      }
    ],
    "notes": "【搭配考点】tight grip (紧握)，tight schedule/budget (紧张的时间表/预算)；【形近辨析】sight (视力/景象)，slight (轻微的)，night (夜晚)；【近义辨析】tight 强调紧实、紧扣无缝隙或紧贴无空隙，firm 强调结实坚定不晃动，taut 专指绳索、肌肉或皮肤被两端用力拉扯处于紧绷状态，secure 侧重安全牢靠不易脱落。"
  },
  "buckle": {
    "word": "buckle",
    "translation": "扣紧；弯曲变形；崩溃",
    "cloze": {
      "sentence": "The intense heat from the raging fire caused the steel beams to ______.",
      "translation": "大火产生的剧烈高温导致钢梁发生弯曲变形。",
      "original": "The intense heat from the raging fire caused the steel beams to buckle."
    },
    "form_confusables": [
      {
        "word": "buckle",
        "zh": "扣紧；弯曲变形"
      },
      {
        "word": "bubble",
        "zh": "气泡；冒泡"
      },
      {
        "word": "bundle",
        "zh": "捆；束"
      },
      {
        "word": "chuckle",
        "zh": "轻声笑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "buckle",
        "zh": "受压弯曲；垮掉"
      },
      {
        "word": "warp",
        "zh": "翘曲；变形"
      },
      {
        "word": "collapse",
        "zh": "倒塌；崩溃"
      },
      {
        "word": "yield",
        "zh": "屈服；让步"
      }
    ],
    "notes": "【搭配考点】buckle under pressure (在重压下崩溃/屈服)，buckle up (系好安全带)；【形近辨析】bubble (气泡)，bundle (包裹/一捆)，chuckle (暗自发笑)；【近义辨析】buckle 专指金属结构或长条物在轴向巨大压力或高温下失稳弯曲折曲，warp 强调木材等因受潮受热面产生的翘曲不平，collapse 侧重整体支撑瓦解轰然倒塌，yield 侧重物理抵抗力极限下的屈服让步。"
  },
  "watertight": {
    "word": "watertight",
    "translation": "不透水的；水密的；严密无破绽的",
    "cloze": {
      "sentence": "The defense lawyer presented a ______ alibi proving that the suspect was elsewhere.",
      "translation": "辩护律师提出了一个天衣无缝的不在场证明，证实嫌疑人当时在别处。",
      "original": "The defense lawyer presented a watertight alibi proving that the suspect was elsewhere."
    },
    "form_confusables": [
      {
        "word": "watertight",
        "zh": "防水的；严密的"
      },
      {
        "word": "waterproof",
        "zh": "防水的；防渗的"
      },
      {
        "word": "watershed",
        "zh": "分水岭；转折点"
      },
      {
        "word": "waterline",
        "zh": "吃水线"
      }
    ],
    "semantic_confusables": [
      {
        "word": "watertight",
        "zh": "严密的；无懈可击的"
      },
      {
        "word": "foolproof",
        "zh": "万无一失的；防拙的"
      },
      {
        "word": "airtight",
        "zh": "密封的；滴水不漏的"
      },
      {
        "word": "unassailable",
        "zh": "无可争辩的；攻不破的"
      }
    ],
    "notes": "【搭配考点】watertight alibi/argument (无懈可击的不在场证明/论点)，watertight compartment (水密舱)；【形近辨析】waterproof (防水材料/防雨的)，watershed (分水岭/重大转折)，waterline (水线/吃水标尺)；【近义辨析】watertight 既指物理上的完全防水不漏，更常引申为法律逻辑毫无漏洞破绽，foolproof 侧重设计简单不易因人为疏忽出错，airtight 强调气密性好或无缝隙，unassailable 侧重地位立场坚不可摧无法攻破。"
  },
  "loose": {
    "word": "loose",
    "translation": "松的；宽松的；不受约束的",
    "cloze": {
      "sentence": "One of the front wheels had several ______ bolts that needed immediate tightening.",
      "translation": "其中一个前轮上有几个松动的螺栓，需要立即拧紧。",
      "original": "One of the front wheels had several loose bolts that needed immediate tightening."
    },
    "form_confusables": [
      {
        "word": "loose",
        "zh": "松的；宽松的"
      },
      {
        "word": "lose",
        "zh": "丢失；输掉"
      },
      {
        "word": "loss",
        "zh": "损失；丧失"
      },
      {
        "word": "choose",
        "zh": "选择"
      }
    ],
    "semantic_confusables": [
      {
        "word": "loose",
        "zh": "松散的；未系紧的"
      },
      {
        "word": "slack",
        "zh": "松弛的；萧条的"
      },
      {
        "word": "lax",
        "zh": "马虎的；松懈的"
      },
      {
        "word": "baggy",
        "zh": "宽松下垂的"
      }
    ],
    "notes": "【搭配考点】loose screw/bolt (松动的螺丝/螺栓)，break loose (挣脱束缚)；【形近辨析】lose (丢失/失败)，loss (名词损失)，choose (挑选决定)；【近义辨析】loose 强调未固定紧、未绑紧或具有晃动间隙，slack 专指绳索处于未拉直松弛状态或市场不景气，lax 专指纪律规章执行上的松懈放任，baggy 专指衣物裤子肥大晃荡。"
  },
  "undo": {
    "word": "undo",
    "translation": "解开；撤销；消除...的影响",
    "cloze": {
      "sentence": "It takes decades to build trust, but a single betrayal can ______ it all in seconds.",
      "translation": "建立信任需要数十年，但一次背叛就能在几秒钟内将这一切化为乌有。",
      "original": "It takes decades to build trust, but a single betrayal can undo it all in seconds."
    },
    "form_confusables": [
      {
        "word": "undo",
        "zh": "撤销；解开"
      },
      {
        "word": "under",
        "zh": "在...下面"
      },
      {
        "word": "undue",
        "zh": "过度的；不适当的"
      },
      {
        "word": "redo",
        "zh": "重做"
      }
    ],
    "semantic_confusables": [
      {
        "word": "undo",
        "zh": "消除；撤销破坏"
      },
      {
        "word": "reverse",
        "zh": "反转；彻底推翻"
      },
      {
        "word": "untie",
        "zh": "解开；松绑"
      },
      {
        "word": "revoke",
        "zh": "撤销；废除"
      }
    ],
    "notes": "【搭配考点】undo damage/progress (消除损害/抵消进展)，undo a button/knot (解开纽扣/绳结)；【形近辨析】undue (过分的/不适度的)，under (下方)，redo (重做)；【近义辨析】undo 强调撤销既有成果使事物恢复未完成前状态（亦指解开结扣），reverse 侧重方向或决定颠倒走向相反极，untie 专指解开打结的绳线，revoke 侧重官方机构依法吊销吊销执照。"
  },
  "form": {
    "word": "form",
    "translation": "形式；形状；表格；形成",
    "cloze": {
      "sentence": "Swimming is widely considered an excellent ______ of cardiovascular exercise.",
      "translation": "游泳被公认为一种极佳的有氧心血管锻炼形式。",
      "original": "Swimming is widely considered an excellent form of cardiovascular exercise."
    },
    "form_confusables": [
      {
        "word": "form",
        "zh": "形式；表格"
      },
      {
        "word": "from",
        "zh": "来自；从"
      },
      {
        "word": "firm",
        "zh": "坚固的；商行"
      },
      {
        "word": "farm",
        "zh": "农场"
      }
    ],
    "semantic_confusables": [
      {
        "word": "form",
        "zh": "形式；类型"
      },
      {
        "word": "shape",
        "zh": "形状；形态"
      },
      {
        "word": "type",
        "zh": "种类；类型"
      },
      {
        "word": "structure",
        "zh": "结构；体系"
      }
    ],
    "notes": "【搭配考点】form of exercise/art (运动/艺术形式)，fill in a form (填写表格)；【形近辨析】from (介词来自)，firm (公司/坚挺的)，farm (农田)；【近义辨析】form 侧重事物存在、表现的内在组织模式或类别样式，shape 强调肉眼可见的外在物理轮廓形态，type 强调分类学上的特定品种或类型，structure 侧重内部各构件之间的搭接关系。"
  },
  "formal": {
    "word": "formal",
    "translation": "正式的；正规的；礼节上的",
    "cloze": {
      "sentence": "The ambassador received a ______ invitation to attend the state dinner at the presidential palace.",
      "translation": "大使收到了一份出席总统府国宴的正式邀请函。",
      "original": "The ambassador received a formal invitation to attend the state dinner at the presidential palace."
    },
    "form_confusables": [
      {
        "word": "formal",
        "zh": "正式的；正规的"
      },
      {
        "word": "former",
        "zh": "以前的；前者"
      },
      {
        "word": "format",
        "zh": "格式；版式"
      },
      {
        "word": "formula",
        "zh": "公式；配方"
      }
    ],
    "semantic_confusables": [
      {
        "word": "formal",
        "zh": "正式的；合乎礼仪的"
      },
      {
        "word": "official",
        "zh": "官方的；权威的"
      },
      {
        "word": "ceremonial",
        "zh": "礼仪的；仪式的"
      },
      {
        "word": "conventional",
        "zh": "传统的；常规的"
      }
    ],
    "notes": "【搭配考点】formal invitation/dress (正式邀请/正装)，formal education (正规学校教育)；【形近辨析】former (前任的/前者)，format (版面格式)，formula (配方/化学式)；【近义辨析】formal 强调遵循官方礼仪、严谨标准或社交规矩，official 侧重经过政府或法定权威机构确认发布的，ceremonial 侧重在隆重庆典场合专用的仪仗仪式，conventional 侧重符合社会约定俗成的老规矩。"
  },
  "uniform": {
    "word": "uniform",
    "translation": "制服；相同的；整齐一致的",
    "cloze": {
      "sentence": "Security officers patrolling the airport terminal are required to wear a dark blue ______.",
      "translation": "在机场候机楼巡逻的安保人员必须身穿深蓝色制服。",
      "original": "Security officers patrolling the airport terminal are required to wear a dark blue uniform."
    },
    "form_confusables": [
      {
        "word": "uniform",
        "zh": "制服；一致的"
      },
      {
        "word": "unicorn",
        "zh": "独角兽"
      },
      {
        "word": "unite",
        "zh": "联合；团结"
      },
      {
        "word": "conform",
        "zh": "遵从；顺应"
      }
    ],
    "semantic_confusables": [
      {
        "word": "uniform",
        "zh": "制服；统一样式的"
      },
      {
        "word": "attire",
        "zh": "服装；盛装"
      },
      {
        "word": "outfit",
        "zh": "成套装备；全套装束"
      },
      {
        "word": "consistent",
        "zh": "始终如一的；一致的"
      }
    ],
    "notes": "【搭配考点】wear a uniform (穿制服)，uniform standards/thickness (统一标准/均匀厚度)；【形近辨析】unicorn (传说中的独角兽)，unite (联合团结)，conform (遵照符合)；【近义辨析】uniform 作名词专指某一特定团体或职业统一配备的服装，作形容词强调各部分无差别的整齐划一；attire 泛指正式服装打扮，outfit 侧重个人整套搭配好的装束，consistent 侧重品质前后逻辑始终如一。"
  },
  "formation": {
    "word": "formation",
    "translation": "形成；组成；编队",
    "cloze": {
      "sentence": "Geologists examined the unusual rock ______ created by volcanic eruptions millions of years ago.",
      "translation": "地质学家研究了数百万年前火山喷发形成的奇特岩层构造。",
      "original": "Geologists examined the unusual rock formation created by volcanic eruptions millions of years ago."
    },
    "form_confusables": [
      {
        "word": "formation",
        "zh": "形成；构造"
      },
      {
        "word": "foundation",
        "zh": "基础；地基"
      },
      {
        "word": "information",
        "zh": "信息；资料"
      },
      {
        "word": "animation",
        "zh": "动画；生气"
      }
    ],
    "semantic_confusables": [
      {
        "word": "formation",
        "zh": "岩层地貌；编队结构"
      },
      {
        "word": "structure",
        "zh": "结构；构造物"
      },
      {
        "word": "configuration",
        "zh": "配置；构造"
      },
      {
        "word": "arrangement",
        "zh": "排列；整理"
      }
    ],
    "notes": "【搭配考点】rock formation (岩层地貌)，flight formation (飞行编队)，the formation of clouds (云层的形成)；【形近辨析】foundation (地基基础)，information (情报信息)，animation (生动动画)；【近义辨析】formation 强调经历动态演化过程所形成的稳定结构或特定队形，structure 侧重静态骨架与构成成分，configuration 侧重各组成要素的相对空间布局或参数配置，arrangement 侧重人为的整齐排列摆放。"
  },
  "reform": {
    "word": "reform",
    "translation": "改革；改良；改过自新",
    "cloze": {
      "sentence": "The prime minister pledged to ______ the healthcare system to improve patient care.",
      "translation": "首相承诺改革医疗保健体系以改善患者护理。",
      "original": "The prime minister pledged to reform the healthcare system to improve patient care."
    },
    "form_confusables": [
      {
        "word": "reform",
        "zh": "改革；改良"
      },
      {
        "word": "perform",
        "zh": "表演；执行"
      },
      {
        "word": "inform",
        "zh": "通知；告发"
      },
      {
        "word": "deform",
        "zh": "使变形；畸变"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reform",
        "zh": "革新；体制改革"
      },
      {
        "word": "restructure",
        "zh": "重组；调整结构"
      },
      {
        "word": "revamp",
        "zh": "翻新；修改"
      },
      {
        "word": "transform",
        "zh": "彻底转变；使改观"
      }
    ],
    "notes": "【搭配考点】reform the system/law (改革体制/法律)，economic reform (经济体制改革)；【形近辨析】perform (表演/履行)，inform (通知告诫)，deform (使残缺畸形)；【近义辨析】reform 侧重政治、体制或制度上的改良除弊使之向善，restructure 侧重企业或部门层级组织的重新架构调整，revamp 侧重对陈旧事物进行翻新包装局部修整，transform 侧重外貌或性质的彻底巨大转变。"
  },
  "format": {
    "word": "format",
    "translation": "版式；格式；安排形式",
    "cloze": {
      "sentence": "The organizers decided to alter the ______ of the panel debate to allow more audience questions.",
      "translation": "组织者决定改变专题讨论会的组织形式，以便让观众提出更多问题。",
      "original": "The organizers decided to alter the format of the panel debate to allow more audience questions."
    },
    "form_confusables": [
      {
        "word": "format",
        "zh": "格式；安排形式"
      },
      {
        "word": "former",
        "zh": "从前的"
      },
      {
        "word": "formal",
        "zh": "正式的"
      },
      {
        "word": "forward",
        "zh": "向前"
      }
    ],
    "semantic_confusables": [
      {
        "word": "format",
        "zh": "格式；版面组织"
      },
      {
        "word": "layout",
        "zh": "布局；排版"
      },
      {
        "word": "pattern",
        "zh": "模式；图案"
      },
      {
        "word": "structure",
        "zh": "架构；结构"
      }
    ],
    "notes": "【搭配考点】file format (文件格式)，format of a debate/show (辩论赛/节目的组织形式)；【形近辨析】former (前者/之前的)，formal (正式合规矩的)，forward (向前发件)；【近义辨析】format 强调出版物、广播电视节目或计算机文档的预设安排规格与版式，layout 侧重纸面上文字、图画的具体视觉位置排版，pattern 强调反复出现的规律模型，structure 侧重深层骨架构造。"
  },
  "formulate": {
    "word": "formulate",
    "translation": "构想；制定；系统阐述",
    "cloze": {
      "sentence": "The economic council met to ______ a comprehensive long-term recovery strategy.",
      "translation": "经济委员会举行会议，以制定一项全面的长期复苏战略。",
      "original": "The economic council met to formulate a comprehensive long-term recovery strategy."
    },
    "form_confusables": [
      {
        "word": "formulate",
        "zh": "制定；阐述"
      },
      {
        "word": "emulate",
        "zh": "效仿；模仿"
      },
      {
        "word": "stimulate",
        "zh": "刺激；激发"
      },
      {
        "word": "insulate",
        "zh": "隔离；绝缘"
      }
    ],
    "semantic_confusables": [
      {
        "word": "formulate",
        "zh": "构想并制定"
      },
      {
        "word": "devise",
        "zh": "设计；发明"
      },
      {
        "word": "draft",
        "zh": "起草；草拟"
      },
      {
        "word": "articulate",
        "zh": "清晰阐述；清楚表达"
      }
    ],
    "notes": "【搭配考点】formulate a policy/strategy (制定方针/策略)，formulate an opinion (形成观点)；【形近辨析】emulate (努力赶超/效仿)，stimulate (刺激激励)，insulate (绝缘隔离)；【近义辨析】formulate 强调经过深思熟虑、运用系统逻辑严密地构思并制定成文，devise 侧重发挥聪明才智巧妙设计发明解决之道，draft 侧重动笔起草文本初稿，articulate 侧重用精准语言口头或书面表述清晰。"
  },
  "formula": {
    "word": "formula",
    "translation": "公式；准则；配方",
    "cloze": {
      "sentence": "The mathematician explained the complex ______ used to calculate orbital trajectories.",
      "translation": "数学家解释了用于计算轨道运行轨迹的复杂公式。",
      "original": "The mathematician explained the complex formula used to calculate orbital trajectories."
    },
    "form_confusables": [
      {
        "word": "formula",
        "zh": "公式；配方"
      },
      {
        "word": "form",
        "zh": "形式；表格"
      },
      {
        "word": "formidable",
        "zh": "可怕的；令人敬畏的"
      },
      {
        "word": "formulation",
        "zh": "配方；系统阐述"
      }
    ],
    "semantic_confusables": [
      {
        "word": "formula",
        "zh": "公式；计算准则"
      },
      {
        "word": "equation",
        "zh": "方程式；等式"
      },
      {
        "word": "recipe",
        "zh": "烹饪食谱；诀窍"
      },
      {
        "word": "blueprint",
        "zh": "蓝图；行动规划"
      }
    ],
    "notes": "【搭配考点】mathematical formula (数学公式)，formula for success (成功秘诀)；【形近辨析】formulation (配方/阐述表达)，form (形式)，formidable (令人敬畏强大的)；【近义辨析】formula 专指用符号表示的科学数学法则，或行之有效的定式方法，equation 强调含有等号两边平衡的数学方程式，recipe 侧重烹调食材步骤或隐喻产生某后果的诱因，blueprint 侧重宏观工程建设蓝图。"
  },
  "program": {
    "word": "program",
    "translation": "程序；项目；计划；编制程序",
    "cloze": {
      "sentence": "The ministry launched a nationwide training ______ to help graduates find employment.",
      "translation": "该部门启动了一项全国性培训计划，帮助毕业生寻找就业机会。",
      "original": "The ministry launched a nationwide training program to help graduates find employment."
    },
    "form_confusables": [
      {
        "word": "program",
        "zh": "项目；程序"
      },
      {
        "word": "progress",
        "zh": "前进；进步"
      },
      {
        "word": "prologue",
        "zh": "序言；序幕"
      },
      {
        "word": "pilgrim",
        "zh": "朝圣者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "program",
        "zh": "系统计划；项目"
      },
      {
        "word": "scheme",
        "zh": "方案；策划"
      },
      {
        "word": "project",
        "zh": "工程；课题"
      },
      {
        "word": "curriculum",
        "zh": "课程体系"
      }
    ],
    "notes": "【搭配考点】training program (培训项目)，computer program (计算机程序)；【形近辨析】progress (进步)，prologue (戏剧前言/序幕)，pilgrim (朝圣旅行者)；【近义辨析】program 强调经过系统规划、具有明确时间表和连续步骤的系列项目，scheme 偏向英国政府或机构的宏观方案，project 侧重针对单一具体目标的工程项目，curriculum 专指学校设置的全部学科课程总和。"
  },
  "perform": {
    "word": "perform",
    "translation": "执行；履行；演出",
    "cloze": {
      "sentence": "Surgeons will ______ a delicate operation to repair the damaged tissue.",
      "translation": "外科医生将进行一项精细的手术来修复受损的组织。",
      "original": "Surgeons will perform a delicate operation to repair the damaged tissue."
    },
    "form_confusables": [
      {
        "word": "perform",
        "zh": "履行；表演"
      },
      {
        "word": "reform",
        "zh": "改革；改良"
      },
      {
        "word": "conform",
        "zh": "遵从；顺从"
      },
      {
        "word": "inform",
        "zh": "通知；通告"
      }
    ],
    "semantic_confusables": [
      {
        "word": "perform",
        "zh": "执行任务；施行"
      },
      {
        "word": "execute",
        "zh": "实施；处决"
      },
      {
        "word": "accomplish",
        "zh": "达成；完成"
      },
      {
        "word": "discharge",
        "zh": "履行职责；释放"
      }
    ],
    "notes": "【搭配考点】perform an operation/experiment (实施手术/实验)，perform a duty/role (履行职责/扮演角色)；【形近辨析】reform (改革)，conform (遵从合规)，inform (报告通知)；【近义辨析】perform 强调按照专业规程完成严肃复杂的动作、手术或上台表演，execute 强调严格不走样地将计划、命令予以付诸实施，accomplish 侧重克服艰难困苦圆满实现目标，discharge 专指正式解除、卸除法定职责或义务。"
  },
  "drill": {
    "word": "drill",
    "translation": "钻孔；反复操练；演习；训练",
    "cloze": {
      "sentence": "All staff members participated in an unannounced evacuation ______ to test emergency readiness.",
      "translation": "全体员工参加了一次未预先通知的疏散演习，以检验应急准备状态。",
      "original": "All staff members participated in an unannounced evacuation drill to test emergency readiness."
    },
    "form_confusables": [
      {
        "word": "drill",
        "zh": "钻头；操练演习"
      },
      {
        "word": "thrill",
        "zh": "激动；震颤"
      },
      {
        "word": "grill",
        "zh": "烤架；盘问"
      },
      {
        "word": "spill",
        "zh": "溢出；洒落"
      }
    ],
    "semantic_confusables": [
      {
        "word": "drill",
        "zh": "反复操练；实战演习"
      },
      {
        "word": "exercise",
        "zh": "演练；锻炼"
      },
      {
        "word": "rehearsal",
        "zh": "排练；彩排"
      },
      {
        "word": "practice",
        "zh": "练习；实践"
      }
    ],
    "notes": "【搭配考点】evacuation drill (疏散演习)，fire drill (消防演练)，drill down (深入探究)；【形近辨析】thrill (兴奋激动)，grill (烧烤铁架/严加盘问)，spill (溅出泼洒)；【近义辨析】drill 强调高强度、机械重复性强的军事化严格操练或应急演习，exercise 侧重一般的综合体能锻炼或宏观战术演习，rehearsal 专指戏剧文艺演出正式登台前的反复排练彩排，practice 泛指日常知识技能的学习操练。"
  },
  "inform": {
    "word": "inform",
    "translation": "通知；告知；告发",
    "cloze": {
      "sentence": "We regret to ______ you that your application has not been successful this semester.",
      "translation": "我们遗憾地通知您，您本学期的申请未获通过。",
      "original": "We regret to inform you that your application has not been successful this semester."
    },
    "form_confusables": [
      {
        "word": "inform",
        "zh": "通知；告知"
      },
      {
        "word": "perform",
        "zh": "履行；表演"
      },
      {
        "word": "conform",
        "zh": "遵从；顺从"
      },
      {
        "word": "reform",
        "zh": "改革；改良"
      }
    ],
    "semantic_confusables": [
      {
        "word": "inform",
        "zh": "正式告知；通知"
      },
      {
        "word": "notify",
        "zh": "正式通告；报告"
      },
      {
        "word": "advise",
        "zh": "建议；正式告知"
      },
      {
        "word": "apprise",
        "zh": "使知悉；告知"
      }
    ],
    "notes": "【搭配考点】inform sb of/about sth (通知某人某事)，regret to inform (遗憾通知)；【形近辨析】perform (表演履行)，conform (顺应规则)，reform (除弊改革)；【近义辨析】inform 为最通用、正式的通知交代信息词，notify 强调带有官方公文色彩、需被通知方确认知悉的事务性通告，advise 在商务公文中意为正式告知（如出货通知），apprise 属极其典雅的书面用语指让某人全面掌握事态进展。"
  },
  "notify": {
    "word": "notify",
    "translation": "通告；报告；通知",
    "cloze": {
      "sentence": "Please ______ your bank immediately if you notice any unauthorized withdrawals.",
      "translation": "如果您发现任何未经授权的取款，请立即通知您的银行。",
      "original": "Please notify your bank immediately if you notice any unauthorized withdrawals."
    },
    "form_confusables": [
      {
        "word": "notify",
        "zh": "通知；通报"
      },
      {
        "word": "modify",
        "zh": "修改；修饰"
      },
      {
        "word": "qualify",
        "zh": "使具备资格；限制"
      },
      {
        "word": "certify",
        "zh": "证明；核准"
      }
    ],
    "semantic_confusables": [
      {
        "word": "notify",
        "zh": "官方通报；正式通知"
      },
      {
        "word": "alert",
        "zh": "发出警报；警告"
      },
      {
        "word": "inform",
        "zh": "通知；告诉"
      },
      {
        "word": "report",
        "zh": "汇报；报案"
      }
    ],
    "notes": "【搭配考点】notify the police/bank (向警方/银行报备通知)，notify sb in writing (书面通知某人)；【形近辨析】modify (修改修饰)，qualify (具备资历)，certify (官方核准认证)；【近义辨析】notify 专指按照正规章程向机构或有关当事人发出具备事务效应的正式通告，alert 侧重对突发危机、灾难发出紧急预警，inform 侧重传递事实情报，report 强调下级向上级汇报或向执法机构报案。"
  },
  "noticeable": {
    "word": "noticeable",
    "translation": "显而易见的；显著的；值得注意的",
    "cloze": {
      "sentence": "There has been a ______ improvement in air quality since the coal factory was shut down.",
      "translation": "自燃煤工厂关闭以来，空气质量有了显著的改善。",
      "original": "There has been a noticeable improvement in air quality since the coal factory was shut down."
    },
    "form_confusables": [
      {
        "word": "noticeable",
        "zh": "显著的；引人注目的"
      },
      {
        "word": "notable",
        "zh": "著名的；显要的"
      },
      {
        "word": "negotiable",
        "zh": "可商量的"
      },
      {
        "word": "negligible",
        "zh": "微不足道的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "noticeable",
        "zh": "清晰可见的；显著的"
      },
      {
        "word": "conspicuous",
        "zh": "格外显眼的；招摇的"
      },
      {
        "word": "perceptible",
        "zh": "可察觉到的；微弱可见的"
      },
      {
        "word": "distinct",
        "zh": "截然分明的；清晰的"
      }
    ],
    "notes": "【搭配考点】noticeable difference/improvement (显著的差异/改善)；【形近辨析】notable (著名的/值得记录的)，negotiable (可协商谈判的)，negligible (微不足道可忽略的)；【近义辨析】noticeable 强调某种变化或特征十分明显足以轻易引起感官注意，conspicuous 强调因不同寻常在环境中极为扎眼显眼，perceptible 侧重勉强能被感官察觉捕捉到（门槛更低），distinct 强调轮廓界限清晰分明互不混淆。"
  },
  "coast": {
    "word": "coast",
    "translation": "海岸；沿海地区；滑行",
    "cloze": {
      "sentence": "The tropical storm is expected to make landfall along the southern ______ tomorrow morning.",
      "translation": "预计热带风暴将于明天早晨在南部沿海地区登陆。",
      "original": "The tropical storm is expected to make landfall along the southern coast tomorrow morning."
    },
    "form_confusables": [
      {
        "word": "coast",
        "zh": "海岸；滑行"
      },
      {
        "word": "toast",
        "zh": "敬酒；烤面包"
      },
      {
        "word": "roast",
        "zh": "烘烤；烤肉"
      },
      {
        "word": "boast",
        "zh": "吹嘘；自夸"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coast",
        "zh": "大片海岸地带"
      },
      {
        "word": "shore",
        "zh": "水陆交界之滨"
      },
      {
        "word": "seaside",
        "zh": "海滨度假胜地"
      },
      {
        "word": "coastline",
        "zh": "海岸线"
      }
    ],
    "notes": "【搭配考点】along the coast (沿着海岸线)，off the coast (在离岸海域)，coast along (不费力地顺势滑行)；【形近辨析】toast (敬酒/烤面包)，roast (烤肉烘焙)，boast (夸口自夸)；【近义辨析】coast 专指陆地毗邻大洋大面积的地理沿海区域，shore 指一切大型水体（海、大湖、大河）水陆交界狭窄带，seaside 专指度假休闲的海边胜地，coastline 侧重地图上绵延起伏的几何边界线。"
  },
  "toast": {
    "word": "toast",
    "translation": "烤面包；吐司；祝酒；干杯",
    "cloze": {
      "sentence": "The guests raised their champagne glasses to propose a ______ to the bride and groom.",
      "translation": "宾客们举起香槟酒杯，向新娘新郎祝酒。",
      "original": "The guests raised their champagne glasses to propose a toast to the bride and groom."
    },
    "form_confusables": [
      {
        "word": "toast",
        "zh": "祝酒；烤面包"
      },
      {
        "word": "roast",
        "zh": "烘烤；烤肉"
      },
      {
        "word": "coast",
        "zh": "海岸"
      },
      {
        "word": "boast",
        "zh": "吹嘘"
      }
    ],
    "semantic_confusables": [
      {
        "word": "toast",
        "zh": "举杯祝酒；祝福"
      },
      {
        "word": "salute",
        "zh": "致敬；行礼"
      },
      {
        "word": "tribute",
        "zh": "颂词；敬意"
      },
      {
        "word": "cheers",
        "zh": "干杯；欢呼"
      }
    ],
    "notes": "【搭配考点】propose a toast to sb (向某人提议祝酒)，a slice of toast (一片烤吐司)；【形近辨析】roast (烘烤肉类)，coast (海岸线)，boast (自负吹嘘)；【近义辨析】toast 专指社交宴会中举杯向某人致以美好祝愿的仪式或发言，salute 强调军人举手行礼或对英雄壮举表示崇高敬意，tribute 侧重通过演说、礼物献上长久的敬意与赞誉，cheers 偏口语碰杯时的感叹词。"
  },
  "roast": {
    "word": "roast",
    "translation": "烤；烘烤；严厉批评；烤肉",
    "cloze": {
      "sentence": "Every Sunday afternoon, the family gathered to ______ a chicken in the oven.",
      "translation": "每个星期天下午，一家人都会聚在一起在烤箱里烤鸡。",
      "original": "Every Sunday afternoon, the family gathered to roast a chicken in the oven."
    },
    "form_confusables": [
      {
        "word": "roast",
        "zh": "烘烤；烤肉"
      },
      {
        "word": "toast",
        "zh": "敬酒；烤面包"
      },
      {
        "word": "coast",
        "zh": "海岸"
      },
      {
        "word": "rust",
        "zh": "生锈"
      }
    ],
    "semantic_confusables": [
      {
        "word": "roast",
        "zh": "在烤箱或火上烤肉"
      },
      {
        "word": "bake",
        "zh": "烘焙面包糕点"
      },
      {
        "word": "broil",
        "zh": "用强火炙烤"
      },
      {
        "word": "grill",
        "zh": "在铁栅架上烧烤"
      }
    ],
    "notes": "【搭配考点】roast meat/chicken (烤肉/烤鸡)，roast coffee beans (烘焙咖啡豆)；【形近辨析】toast (烤面包片/祝酒)，coast (沿海)，rust (铁锈生锈)；【近义辨析】roast 专指用烤箱或明火高温烘烤肉类或坚果使表面香脆内部多汁，bake 专指用烤箱烘烤面粉类糕点面包，broil 强调来自上方电热丝的强直火炙烤，grill 专指放在格栅铁网上直接火烤。"
  },
  "sail": {
    "word": "sail",
    "translation": "航行；起航；帆",
    "cloze": {
      "sentence": "The explorers decided to set ______ on an epic voyage across the uncharted ocean.",
      "translation": "探险家们决定扬帆起航，踏上穿越未知大洋的史诗般航程。",
      "original": "The explorers decided to set sail on an epic voyage across the uncharted ocean."
    },
    "form_confusables": [
      {
        "word": "sail",
        "zh": "航行；船帆"
      },
      {
        "word": "rail",
        "zh": "铁轨；扶手"
      },
      {
        "word": "nail",
        "zh": "指甲；钉子"
      },
      {
        "word": "tail",
        "zh": "尾巴；尾随"
      }
    ],
    "semantic_confusables": [
      {
        "word": "sail",
        "zh": "扬帆航行；航游"
      },
      {
        "word": "navigate",
        "zh": "导航；驾驶航行"
      },
      {
        "word": "cruise",
        "zh": "乘船巡游；漫游"
      },
      {
        "word": "voyage",
        "zh": "远航；长途航海"
      }
    ],
    "notes": "【搭配考点】set sail (扬帆启航)，smooth sailing (一帆风顺)；【形近辨析】rail (铁路轨道)，nail (长钉/指甲)，tail (动物尾巴)；【近义辨析】sail 侧重利用风帆驾船在水面上平稳航行行进，navigate 强调根据海图、罗盘或仪器制定并控制航向，cruise 侧重乘坐游轮出于休闲度假目的巡游，voyage 作名词强调漫长壮烈的远洋探险探秘之旅。"
  },
  "shore": {
    "word": "shore",
    "translation": "岸；滨；支柱；支撑",
    "cloze": {
      "sentence": "The storm stranded a magnificent blue whale on the rocky ______ of the island.",
      "translation": "暴风雨使一头巨大的蓝鲸搁浅在该岛多岩石的海岸上。",
      "original": "The storm stranded a magnificent blue whale on the rocky shore of the island."
    },
    "form_confusables": [
      {
        "word": "shore",
        "zh": "岸；滨"
      },
      {
        "word": "share",
        "zh": "分享；股份"
      },
      {
        "word": "chore",
        "zh": "日常琐事；杂务"
      },
      {
        "word": "spore",
        "zh": "孢子"
      }
    ],
    "semantic_confusables": [
      {
        "word": "shore",
        "zh": "水陆相交之岸边"
      },
      {
        "word": "coast",
        "zh": "大片沿海陆地"
      },
      {
        "word": "bank",
        "zh": "河岸；堤岸"
      },
      {
        "word": "beach",
        "zh": "沙滩；砾石滩"
      }
    ],
    "notes": "【搭配考点】rocky/sandy shore (岩石海岸/沙质海滨)，shore up (加固支撑)；【形近辨析】share (分享/股票)，chore (家庭日常繁重杂务)，spore (菌类孢子)；【近义辨析】shore 专指紧靠海水或大湖水面的泥水边缘带，bank 专指河流或运河两侧倾斜抬高的堤岸，beach 特指适合游玩铺满沙子或细卵石的平缓海滩，coast 侧重宏观省份级别的沿海地理区域。"
  },
  "island": {
    "word": "island",
    "translation": "岛屿；海岛；安全岛",
    "cloze": {
      "sentence": "The remote volcanic ______ is home to several bird species found nowhere else on Earth.",
      "translation": "这座偏远的火山岛是几种在地球其他任何地方都找不到的鸟类的家园。",
      "original": "The remote volcanic island is home to several bird species found nowhere else on Earth."
    },
    "form_confusables": [
      {
        "word": "island",
        "zh": "岛屿"
      },
      {
        "word": "inland",
        "zh": "内陆的"
      },
      {
        "word": "highland",
        "zh": "高地；高原"
      },
      {
        "word": "isle",
        "zh": "小岛；群岛"
      }
    ],
    "semantic_confusables": [
      {
        "word": "island",
        "zh": "四面环水的陆地"
      },
      {
        "word": "isle",
        "zh": "小岛；诗意群岛"
      },
      {
        "word": "atoll",
        "zh": "环礁"
      },
      {
        "word": "peninsula",
        "zh": "半岛"
      }
    ],
    "notes": "【搭配考点】tropical/volcanic island (热带/火山岛)，traffic island (交通安全岛)；【形近辨析】inland (内陆地区的)，highland (高山高原)，isle (诗意用法的小岛，如 British Isles)；【近义辨析】island 最通用的标准地理术语，指完全被水包围且面积小于大陆的陆地，isle 偏古雅诗意指较小的海岛，atoll 专指由珊瑚礁围绕潟湖形成的环状珊瑚礁岛，peninsula 专指三面环水一面连陆的半岛。"
  },
  "inland": {
    "word": "inland",
    "translation": "内陆的；国内的；向内陆",
    "cloze": {
      "sentence": "The storm weakened rapidly as it moved away from the coast and pushed further ______.",
      "translation": "随着暴风雨离开海岸并进一步向内陆推进，其威力迅速减弱。",
      "original": "The storm weakened rapidly as it moved away from the coast and pushed further inland."
    },
    "form_confusables": [
      {
        "word": "inland",
        "zh": "内陆的；向内陆"
      },
      {
        "word": "island",
        "zh": "岛屿"
      },
      {
        "word": "highland",
        "zh": "高地；高原"
      },
      {
        "word": "mainland",
        "zh": "大陆；本土"
      }
    ],
    "semantic_confusables": [
      {
        "word": "inland",
        "zh": "内陆的；远离海岸的"
      },
      {
        "word": "interior",
        "zh": "内部的；内陆的"
      },
      {
        "word": "upcountry",
        "zh": "偏僻内地的"
      },
      {
        "word": "continental",
        "zh": "大陆的；大陆性的"
      }
    ],
    "notes": "【搭配考点】travel inland (向内陆旅行)，inland waterways/trade (内陆水道/国内贸易)；【形近辨析】island (岛屿)，highland (高地)，mainland (大陆本土)；【近义辨析】inland 作副词或形容词强调位置远离海岸线深入陆地深处，interior 侧重国家或建筑物内部核心区域，upcountry 指远离沿海大都市的内陆乡村偏远地区，continental 强调整个大洲层面的广袤大陆性特征。"
  },
  "beach": {
    "word": "beach",
    "translation": "海滩；沙滩；使搁浅",
    "cloze": {
      "sentence": "Families spent the sunny weekend building sandcastles along the golden ______.",
      "translation": "各个家庭在阳光明媚的周末沿着金色的海滩堆建沙堡。",
      "original": "Families spent the sunny weekend building sandcastles along the golden beach."
    },
    "form_confusables": [
      {
        "word": "beach",
        "zh": "海滩；沙滩"
      },
      {
        "word": "bench",
        "zh": "长椅；工作台"
      },
      {
        "word": "bleach",
        "zh": "漂白剂；漂白"
      },
      {
        "word": "reach",
        "zh": "到达；伸出"
      }
    ],
    "semantic_confusables": [
      {
        "word": "beach",
        "zh": "沙滩；海滨浴场"
      },
      {
        "word": "seashore",
        "zh": "海岸；海滨"
      },
      {
        "word": "coastline",
        "zh": "海岸线"
      },
      {
        "word": "strand",
        "zh": "海滨；沙滩"
      }
    ],
    "notes": "【搭配考点】sandy beach (沙滩)，pebble beach (卵石滩)，beach umbrella (遮阳伞)；【形近辨析】bench (长凳/法官席)，bleach (漂白剂)，reach (伸手到达)；【近义辨析】beach 专指铺有细沙或鹅卵石、坡度平缓供人游玩休憩的滨水岸边，seashore 泛指大海与陆地交界的广阔自然海岸，coastline 侧重地图上的几何沿海轮廓，strand 偏诗意文学指沙滩海岸。"
  },
  "bench": {
    "word": "bench",
    "translation": "长凳；长椅；工作台；法官席",
    "cloze": {
      "sentence": "An elderly gentleman sat quietly on a wooden park ______ feeding the pigeons.",
      "translation": "一位老绅士静静地坐在公园的木质长椅上喂鸽子。",
      "original": "An elderly gentleman sat quietly on a wooden park bench feeding the pigeons."
    },
    "form_confusables": [
      {
        "word": "bench",
        "zh": "长凳；工作台"
      },
      {
        "word": "beach",
        "zh": "海滩"
      },
      {
        "word": "branch",
        "zh": "树枝；分部"
      },
      {
        "word": "pinch",
        "zh": "捏；捏紧"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bench",
        "zh": "长条凳；工作台"
      },
      {
        "word": "seat",
        "zh": "座位；席位"
      },
      {
        "word": "workstation",
        "zh": "工作站；操作台"
      },
      {
        "word": "pew",
        "zh": "教堂长椅"
      }
    ],
    "notes": "【搭配考点】park bench (公园长椅)，the judicial bench (法官席/司法界)，bench test (台架测试)；【形近辨析】beach (海滩沙滩)，branch (分行/树枝)，pinch (拧掐/匮乏)；【近义辨析】bench 专指可容纳多人并排坐的无靠背或木质硬长凳，或工匠操作的长条工作台；seat 泛指任何供人坐下的设施，workstation 强调配备电脑工具的工作卡位，pew 专指教堂固定排椅。"
  },
  "harbor": {
    "word": "harbor",
    "translation": "港口；海港；窝藏；心怀",
    "cloze": {
      "sentence": "Dozens of fishing vessels returned safely to the sheltered ______ before the gale struck.",
      "translation": "在大风来袭之前，数十艘渔船安全返回了避风的港口。",
      "original": "Dozens of fishing vessels returned safely to the sheltered harbor before the gale struck."
    },
    "form_confusables": [
      {
        "word": "harbor",
        "zh": "港口；庇护"
      },
      {
        "word": "hard",
        "zh": "困难的；硬的"
      },
      {
        "word": "hammer",
        "zh": "锤子"
      },
      {
        "word": "horror",
        "zh": "恐惧；震惊"
      }
    ],
    "semantic_confusables": [
      {
        "word": "harbor",
        "zh": "避风港口；天然港湾"
      },
      {
        "word": "port",
        "zh": "商贸口岸；港市"
      },
      {
        "word": "haven",
        "zh": "避难所；安息港"
      },
      {
        "word": "dock",
        "zh": "码头；船坞"
      }
    ],
    "notes": "【搭配考点】natural harbor (天然海港)，harbor doubts/feelings (心怀疑虑/感情)；【形近辨析】hard (艰难硬朗)，hammer (铁锤)，horror (极度惊恐)；【近义辨析】harbor 侧重提供停泊避风风浪掩护的水域港湾，port 侧重具备海关物流仓储设施的商贸口岸城市，haven 强调免受外界风暴危险侵袭的宁静避难所，dock 专指装卸货物修船的码头泊位。"
  },
  "embrace": {
    "word": "embrace",
    "translation": "拥抱；欣然接受；包容",
    "cloze": {
      "sentence": "Progressive businesses must ______ cutting-edge technology to maintain their competitive advantage.",
      "translation": "具有远见的企业必须欣然接纳尖端科技，以保持其竞争优势。",
      "original": "Progressive businesses must embrace cutting-edge technology to maintain their competitive advantage."
    },
    "form_confusables": [
      {
        "word": "embrace",
        "zh": "拥抱；欣然接受"
      },
      {
        "word": "embarrass",
        "zh": "使尴尬；使难堪"
      },
      {
        "word": "erase",
        "zh": "擦掉；抹去"
      },
      {
        "word": "embark",
        "zh": "着手；登船"
      }
    ],
    "semantic_confusables": [
      {
        "word": "embrace",
        "zh": "欣然接纳；包含"
      },
      {
        "word": "adopt",
        "zh": "采纳；收养"
      },
      {
        "word": "welcome",
        "zh": "欢迎；乐于接受"
      },
      {
        "word": "encompass",
        "zh": "包罗；环绕"
      }
    ],
    "notes": "【搭配考点】embrace new ideas/technology (热情接纳新观念/技术)，warm embrace (热情拥抱)；【形近辨析】embarrass (使难为情)，erase (抹去消除)，embark (着手开展/登机)；【近义辨析】embrace 强调发自内心地热情拥抱、欣然接受新事物，或宏观涵盖多种元素；adopt 侧重正式通过审议后挑选并采纳某种制度方案，welcome 侧重对某提议表示欣然欢迎赞许，encompass 强调外延广泛包罗万象。"
  },
  "bay": {
    "word": "bay",
    "translation": "海湾；港湾；停泊区",
    "cloze": {
      "sentence": "The luxury hotel offers spectacular views overlooking the tranquil blue waters of the ______.",
      "translation": "这家豪华酒店享有俯瞰海湾宁静蔚蓝水域的壮丽景色。",
      "original": "The luxury hotel offers spectacular views overlooking the tranquil blue waters of the bay."
    },
    "form_confusables": [
      {
        "word": "bay",
        "zh": "海湾；港湾"
      },
      {
        "word": "ray",
        "zh": "光线；鳐鱼"
      },
      {
        "word": "bat",
        "zh": "蝙蝠；球棒"
      },
      {
        "word": "boy",
        "zh": "男孩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bay",
        "zh": "海湾；凹入水域"
      },
      {
        "word": "gulf",
        "zh": "大海湾；深渊"
      },
      {
        "word": "cove",
        "zh": "小海湾；山凹"
      },
      {
        "word": "inlet",
        "zh": "水湾；小港湾"
      }
    ],
    "notes": "【搭配考点】keep sb/sth at bay (使...无法靠近/牵制住)，loading bay (装卸货区)；【形近辨析】ray (光芒/光线)，bat (蝙蝠/球棒)，boy (男孩)；【近义辨析】bay 专指陆地向内凹进形成的中等开阔弧形海湾，gulf 专指口窄腹大极其广阔的深大洋湾，cove 专指海岸边隐蔽幽静狭小的小海湾，inlet 强调向陆地深处窄条延伸的小水道港湾。"
  },
  "shelter": {
    "word": "shelter",
    "translation": "避难所；庇护；遮蔽",
    "cloze": {
      "sentence": "The mountain rescue team provided food, blankets, and temporary ______ for the stranded hikers.",
      "translation": "山地救援队为被困的徒步旅行者提供了食物、毯子和临时庇护所。",
      "original": "The mountain rescue team provided food, blankets, and temporary shelter for the stranded hikers."
    },
    "form_confusables": [
      {
        "word": "shelter",
        "zh": "避难所；庇护"
      },
      {
        "word": "shatter",
        "zh": "粉碎；击碎"
      },
      {
        "word": "slender",
        "zh": "修长的；苗条的"
      },
      {
        "word": "shudder",
        "zh": "战栗；发抖"
      }
    ],
    "semantic_confusables": [
      {
        "word": "shelter",
        "zh": "遮风避雨处；避难所"
      },
      {
        "word": "refuge",
        "zh": "庇护所；避难"
      },
      {
        "word": "sanctuary",
        "zh": "避难圣所；保护区"
      },
      {
        "word": "asylum",
        "zh": "政治避难；庇护"
      }
    ],
    "notes": "【搭配考点】take shelter from (躲避风雨)，tax shelter (避税手段)，emergency shelter (应急避难所)；【形近辨析】shatter (摔得粉碎)，slender (纤细苗条的)，shudder (不寒而栗发抖)；【近义辨析】shelter 强调提供抵御暴风雨、烈日或危险的物理掩体建筑物，refuge 侧重逃离险境后获得的安身庇护，sanctuary 强调不可侵犯的宗教圣所或濒危动物保护区，asylum 专指国家法律层面的政治避难。"
  },
  "shade": {
    "word": "shade",
    "translation": "阴凉处；遮光物；色调；细微差别",
    "cloze": {
      "sentence": "During the scorching midday heat, hikers rested under the welcome ______ of a giant oak tree.",
      "translation": "在正午炎炎烈日下，徒步旅行者在一棵巨大的橡树宜人的树荫下休息。",
      "original": "During the scorching midday heat, hikers rested under the welcome shade of a giant oak tree."
    },
    "form_confusables": [
      {
        "word": "shade",
        "zh": "阴凉处；遮光物"
      },
      {
        "word": "shadow",
        "zh": "阴影；影子"
      },
      {
        "word": "blade",
        "zh": "刀刃；叶片"
      },
      {
        "word": "shame",
        "zh": "羞耻；惭愧"
      }
    ],
    "semantic_confusables": [
      {
        "word": "shade",
        "zh": "阴凉庇荫处"
      },
      {
        "word": "shadow",
        "zh": "背光投影；影子"
      },
      {
        "word": "tint",
        "zh": "淡色调；色彩"
      },
      {
        "word": "nuance",
        "zh": "细微差别"
      }
    ],
    "notes": "【搭配考点】in the shade (在阴凉处)，shades of meaning (细微涵义差异)，draw the shades (拉下百叶窗)；【形近辨析】shadow (具体投射的轮廓影子)，blade (刀刃草叶)，shame (羞耻羞愧)；【近义辨析】shade 专指阳光被树木或建筑物遮挡后形成的无直射光的凉爽区域（不可数），shadow 专指光线受阻在地面或墙面投下的黑影轮廓（可数），tint 侧重在基础颜色中掺入的细微淡色，nuance 侧重语言情感或见解上的极其微细层次差异。"
  },
  "shave": {
    "word": "shave",
    "translation": "剃；刮；修剪；刨削",
    "cloze": {
      "sentence": "He likes to lather his face with warm water and foam before he begins to ______.",
      "translation": "在开始刮胡子之前，他喜欢先用温水和泡沫涂抹脸部。",
      "original": "He likes to lather his face with warm water and foam before he begins to shave."
    },
    "form_confusables": [
      {
        "word": "shave",
        "zh": "剃须；刮脸"
      },
      {
        "word": "shame",
        "zh": "羞耻；惭愧"
      },
      {
        "word": "shape",
        "zh": "形状；塑造"
      },
      {
        "word": "save",
        "zh": "拯救；积攒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "shave",
        "zh": "刮去毛发；刨薄"
      },
      {
        "word": "trim",
        "zh": "修剪；整修"
      },
      {
        "word": "pare",
        "zh": "削皮；削减"
      },
      {
        "word": "clip",
        "zh": "夹住；剪下"
      }
    ],
    "notes": "【搭配考点】a clean shave (刮得干净的脸)，a close shave (死里逃生/侥幸脱险)，shave off costs (削减开支)；【形近辨析】shame (羞愧)，shape (形态塑造)，save (挽救保存)；【近义辨析】shave 专指用剃刀贴紧皮肤刮净毛发，或用刨刀薄薄刨去一层表面，trim 强调对树篱、头发边缘进行修葺整理使之整齐齐整，pare 强调水果削皮或层层剥减预算，clip 侧重用剪刀剪断一小截。"
  },
  "belt": {
    "word": "belt",
    "translation": "腰带；皮带；地带；传动带",
    "cloze": {
      "sentence": "The Midwest region is famously known as America's fertile agricultural grain ______.",
      "translation": "中西部地区以美国肥沃的农业粮食带而闻名遐迩。",
      "original": "The Midwest region is famously known as America's fertile agricultural grain belt."
    },
    "form_confusables": [
      {
        "word": "belt",
        "zh": "腰带；地带"
      },
      {
        "word": "bolt",
        "zh": "螺栓；门闩"
      },
      {
        "word": "melt",
        "zh": "融化；熔化"
      },
      {
        "word": "felt",
        "zh": "感觉；毛毡"
      }
    ],
    "semantic_confusables": [
      {
        "word": "belt",
        "zh": "长条地带；皮带"
      },
      {
        "word": "zone",
        "zh": "特定区域；地带"
      },
      {
        "word": "strap",
        "zh": "背带；皮条"
      },
      {
        "word": "strip",
        "zh": "狭长条带"
      }
    ],
    "notes": "【搭配考点】seat belt (安全带)，conveyor belt (传送带)，tighten one's belt (勒紧裤腰带/节衣缩食)；【形近辨析】bolt (螺栓/狂奔)，melt (熔化消融)，felt (feel过去式/毛毡)；【近义辨析】belt 作区域解时专指在地理上呈长条带状分布的特定产业或气候地带，作服饰解指腰带；zone 强调人为依据法规或功能划分的明确行政区划，strap 专指箱包相机上的窄负重背带，strip 强调纯粹狭长的一小块土地或纸条。"
  },
  "bond": {
    "word": "bond",
    "translation": "纽带；联系；债券；结合",
    "cloze": {
      "sentence": "The shared hardship created an unbreakable ______ of friendship between the two soldiers.",
      "translation": "共同经历的苦难在两位士兵之间建立起了牢不可破的深厚友谊纽带。",
      "original": "The shared hardship created an unbreakable bond of friendship between the two soldiers."
    },
    "form_confusables": [
      {
        "word": "bond",
        "zh": "纽带；债券"
      },
      {
        "word": "bind",
        "zh": "捆绑；约束"
      },
      {
        "word": "blond",
        "zh": "金发的"
      },
      {
        "word": "bound",
        "zh": "受约束的；跳跃"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bond",
        "zh": "情感纽带；化学结合"
      },
      {
        "word": "tie",
        "zh": "领带；联系束缚"
      },
      {
        "word": "connection",
        "zh": "关联；连接"
      },
      {
        "word": "link",
        "zh": "链环；纽带"
      }
    ],
    "notes": "【搭配考点】emotional bond (情感纽带)，government bond (政府债券)，chemical bond (化学键)；【形近辨析】bind (捆绑动词)，blond (金发碧眼的)，bound (受约束的/开往)；【近义辨析】bond 强调经历深厚情感经历所锻造出的极为紧密持久的精神连结，或分子间化学键，tie 侧重社会关系、血缘或条约带来的牵连约束，connection 侧重因果逻辑或社交人脉关系，link 强调在链条上连接两个端点的关键节点。"
  },
  "bind": {
    "word": "bind",
    "translation": "捆绑；约束；使凝结；装订",
    "cloze": {
      "sentence": "Cultural traditions and shared civic values help to ______ diverse communities together.",
      "translation": "文化传统和共同的公民价值观有助于将多元化的社区紧密凝聚在一起。",
      "original": "Cultural traditions and shared civic values help to bind diverse communities together."
    },
    "form_confusables": [
      {
        "word": "bind",
        "zh": "捆绑；约束"
      },
      {
        "word": "blind",
        "zh": "失明的"
      },
      {
        "word": "bend",
        "zh": "弯曲"
      },
      {
        "word": "blend",
        "zh": "混合"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bind",
        "zh": "使结合；法律约束"
      },
      {
        "word": "fasten",
        "zh": "固定；系紧"
      },
      {
        "word": "constrain",
        "zh": "强迫；约束"
      },
      {
        "word": "oblige",
        "zh": "迫使；使承担义务"
      }
    ],
    "notes": "【搭配考点】bind together (紧密凝聚在一起)，legally binding (具有法律约束力的)，bind a book (装订书籍)；【形近辨析】blind (盲目的)，bend (弯曲弯折)，blend (融合混合)；【近义辨析】bind 强调通过绳索物理扎牢，或通过道义法律条文施加强有力的不可违背约束力；fasten 侧重机械固定扣紧，constrain 强调受到外界环境条件限制束缚而无法施展，oblige 强调在法律义务或礼貌道义上不得不做。"
  },
  "blind": {
    "word": "blind",
    "translation": "盲目的；失明的；百叶窗",
    "cloze": {
      "sentence": "His intense jealousy made him completely ______ to his partner's genuine devotion.",
      "translation": "强烈的嫉妒心使他对伴侣真挚的付出视而不见、完全盲目。",
      "original": "His intense jealousy made him completely blind to his partner's genuine devotion."
    },
    "form_confusables": [
      {
        "word": "blind",
        "zh": "盲目的；瞎的"
      },
      {
        "word": "blend",
        "zh": "混合；融洽"
      },
      {
        "word": "blond",
        "zh": "金发的"
      },
      {
        "word": "bind",
        "zh": "捆绑；束缚"
      }
    ],
    "semantic_confusables": [
      {
        "word": "blind",
        "zh": "视而不见的；盲目的"
      },
      {
        "word": "sightless",
        "zh": "双目失明的"
      },
      {
        "word": "unseeing",
        "zh": "视而不见的；无察觉的"
      },
      {
        "word": "oblivious",
        "zh": "未察觉的；健忘的"
      }
    ],
    "notes": "【搭配考点】blind to (对...视而不见/视若无睹)，blind trust/faith (盲目的信任/信仰)，turn a blind eye to (对...睁一只眼闭一只眼)；【形近辨析】blend (混合融合)，blond (金发)，bind (捆绑扎紧)；【近义辨析】blind 既指眼部器官失明，更常隐喻因偏见狂热而丧失起码判断力；sightless 偏庄重医学文学指丧失视力，unseeing 侧重两眼睁着但未关注焦点，oblivious 强调沉浸在自己世界中完全未留意周围环境。"
  },
  "deaf": {
    "word": "deaf",
    "translation": "聋的；不愿倾听的",
    "cloze": {
      "sentence": "The corrupt administration turned a ______ ear to the desperate pleas of the citizens.",
      "translation": "腐败的行政当局对市民们绝望的恳求充耳不闻。",
      "original": "The corrupt administration turned a deaf ear to the desperate pleas of the citizens."
    },
    "form_confusables": [
      {
        "word": "deaf",
        "zh": "聋的"
      },
      {
        "word": "dead",
        "zh": "死亡的"
      },
      {
        "word": "deal",
        "zh": "交易；处理"
      },
      {
        "word": "defeat",
        "zh": "击败；战胜"
      }
    ],
    "semantic_confusables": [
      {
        "word": "deaf",
        "zh": "不愿听取的；失聪的"
      },
      {
        "word": "unheeding",
        "zh": "不注意的；置若罔闻的"
      },
      {
        "word": "unresponsive",
        "zh": "无反应的；迟钝的"
      },
      {
        "word": "indifferent",
        "zh": "漠不关心的"
      }
    ],
    "notes": "【搭配考点】turn a deaf ear to (对...置若罔闻/充耳不闻)，fall on deaf ears (未被理睬/被当成耳旁风)；【形近辨析】dead (死去的)，deal (协议交易)，defeat (战败挫败)；【近义辨析】deaf 指生理上丧失听觉，搭配中专指主观上傲慢固执、拒不倾听劝告的顽固态度；unheeding 强调听到但并未听从遵循警示，unresponsive 侧重外界给予刺激但无互动反馈，indifferent 侧重心态上的冷漠无动于衷。"
  },
  "bend": {
    "word": "bend",
    "translation": "弯曲；屈服；弯道",
    "cloze": {
      "sentence": "Strong bamboo can ______ in a violent storm without breaking into pieces.",
      "translation": "坚韧的竹子在暴风雨中能够弯曲而不至于折断。",
      "original": "Strong bamboo can bend in a violent storm without breaking into pieces."
    },
    "form_confusables": [
      {
        "word": "bend",
        "zh": "弯曲；屈服"
      },
      {
        "word": "bind",
        "zh": "捆绑；约束"
      },
      {
        "word": "blend",
        "zh": "混合"
      },
      {
        "word": "tend",
        "zh": "倾向于；照看"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bend",
        "zh": "受力弯折；弯曲"
      },
      {
        "word": "flex",
        "zh": "弯曲活动；展示力量"
      },
      {
        "word": "curve",
        "zh": "沿弧线弯曲"
      },
      {
        "word": "bow",
        "zh": "鞠躬；俯首弯腰"
      }
    ],
    "notes": "【搭配考点】bend the rules (通融/变通规则)，bend over backwards (竭尽全力)，sharp bend (急转弯)；【形近辨析】bind (捆扎)，blend (混合调和)，tend (倾向/照料)；【近义辨析】bend 强调受外力作用从直线状态转变成角度倾斜或弓形弯曲，flex 专指有弹性地弯曲关节肌肉或展示弹性，curve 强调平滑优雅的弧度线条，bow 强调庄重地俯下身体鞠躬屈从。"
  },
  "twist": {
    "word": "twist",
    "translation": "扭曲；转折；拧；盘旋",
    "cloze": {
      "sentence": "The psychological thriller features an unexpected plot ______ in the final chapter.",
      "translation": "这部心理惊悚小说在最后一章中包含了一个出人意料的情节大反转。",
      "original": "The psychological thriller features an unexpected plot twist in the final chapter."
    },
    "form_confusables": [
      {
        "word": "twist",
        "zh": "扭曲；转折"
      },
      {
        "word": "twin",
        "zh": "双胞胎"
      },
      {
        "word": "wrist",
        "zh": "手腕"
      },
      {
        "word": "twine",
        "zh": "麻线；缠绕"
      }
    ],
    "semantic_confusables": [
      {
        "word": "twist",
        "zh": "情节转折；扭转"
      },
      {
        "word": "turn",
        "zh": "转变；旋转"
      },
      {
        "word": "distortion",
        "zh": "失真；扭曲"
      },
      {
        "word": "coil",
        "zh": "盘绕；卷曲"
      }
    ],
    "notes": "【搭配考点】plot twist (情节反转)，twist one's ankle (扭伤脚踝)，twist words (曲解文义)；【形近辨析】wrist (手腕)，twin (孪生双胞)，twine (盘绕编结/细麻线)；【近义辨析】twist 强调旋转缠绕力道造成的扭结变形，或文艺作品中陡然生变的情节大转折；turn 侧重方向的常规改变转折，distortion 强调事实真相声波形态的失真歪曲，coil 强调如同弹簧或蛇般规则地盘圈打卷。"
  },
  "blend": {
    "word": "blend",
    "translation": "混合；融合；协调；混和物",
    "cloze": {
      "sentence": "The chef created a subtle spice sauce that will ______ harmoniously with grilled seafood.",
      "translation": "大厨调制了一种微妙的香料酱汁，能与烤海鲜和谐地融为一体。",
      "original": "The chef created a subtle spice sauce that will blend harmoniously with grilled seafood."
    },
    "form_confusables": [
      {
        "word": "blend",
        "zh": "混合；融洽"
      },
      {
        "word": "bend",
        "zh": "弯曲"
      },
      {
        "word": "blind",
        "zh": "瞎的"
      },
      {
        "word": "bleed",
        "zh": "流血"
      }
    ],
    "semantic_confusables": [
      {
        "word": "blend",
        "zh": "和谐融合；混和"
      },
      {
        "word": "merge",
        "zh": "企业合并；兼并"
      },
      {
        "word": "fuse",
        "zh": "熔合；结合"
      },
      {
        "word": "mingle",
        "zh": "相交融；社交应酬"
      }
    ],
    "notes": "【搭配考点】blend in/with (与...融为一体/和谐共处)，a unique blend of styles (独特交融风格)；【形近辨析】bend (弯曲屈服)，blind (失明的)，bleed (出血流淌)；【近义辨析】blend 强调多种不同性质成分巧妙调和在一起形成天衣无缝、令人愉悦的新整体；merge 侧重两个独立的实体组织合并成一个单一整体，fuse 强调高温高压下物理熔化结合为不可分割体，mingle 强调在社交聚会中穿梭交谈或各要素混合但彼此仍可区分。"
  },
  "mix": {
    "word": "mix",
    "translation": "混合；搅拌；配制；交往",
    "cloze": {
      "sentence": "Oil and water do not naturally ______ because of their contrasting chemical densities.",
      "translation": "油和水由于化学密度迥异而无法自然混合。",
      "original": "Oil and water do not naturally mix because of their contrasting chemical densities."
    },
    "form_confusables": [
      {
        "word": "mix",
        "zh": "混合；搅拌"
      },
      {
        "word": "fix",
        "zh": "固定；修理"
      },
      {
        "word": "six",
        "zh": "数字六"
      },
      {
        "word": "mist",
        "zh": "薄雾"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mix",
        "zh": "物理掺和；调配"
      },
      {
        "word": "combine",
        "zh": "联合；结合"
      },
      {
        "word": "stir",
        "zh": "搅拌；搅动"
      },
      {
        "word": "concoct",
        "zh": "调制；捏造"
      }
    ],
    "notes": "【搭配考点】mix with (与...混合/交往)，mix up (搞混/弄乱)；【形近辨析】fix (修理固定)，mist (薄雾迷雾)，six (数字6)；【近义辨析】mix 是最通用的日常混合词，指将两种或多种物质倒在一起掺杂；combine 强调逻辑力量或功能的联合协作，stir 专指用勺棒在液体中圆周搅动加速溶解，concoct 侧重把多种配料奇特调配在一起或密谋虚构借口。"
  },
  "stir": {
    "word": "stir",
    "translation": "搅动；激起；激发；轰动",
    "cloze": {
      "sentence": "The candidate's fiery campaign speech managed to ______ strong emotions among voters.",
      "translation": "候选人慷慨激昂的竞选演讲激起了选民强烈的内心情感。",
      "original": "The candidate's fiery campaign speech managed to stir strong emotions among voters."
    },
    "form_confusables": [
      {
        "word": "stir",
        "zh": "搅动；激发"
      },
      {
        "word": "sir",
        "zh": "先生；阁下"
      },
      {
        "word": "spur",
        "zh": "鼓舞；靴刺"
      },
      {
        "word": "star",
        "zh": "恒星；明星"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stir",
        "zh": "激起心绪；搅动"
      },
      {
        "word": "provoke",
        "zh": "挑衅；激怒"
      },
      {
        "word": "arouse",
        "zh": "唤醒；唤起"
      },
      {
        "word": "agitate",
        "zh": "煽动；使焦虑不安"
      }
    ],
    "notes": "【搭配考点】stir emotions/interest (激起情感/兴趣)，cause a stir (引起轰动)，stir the soup (搅动汤)；【形近辨析】spur (策马激励)，star (星星)，sir (长官阁下)；【近义辨析】stir 作心理动词强调原本沉寂的情感、记忆或思绪被徐徐唤醒激荡；provoke 强调通过挑衅行为引发强烈愤怒抵触情绪，arouse 侧重唤醒原本沉睡的生理欲望或好奇心，agitate 强调激烈煽动群众情绪使其焦躁不安。"
  },
  "mountain": {
    "word": "mountain",
    "translation": "高山；山岳；堆积如山",
    "cloze": {
      "sentence": "The climbers spent two grueling weeks attempting to conquer the treacherous ______ summit.",
      "translation": "登山者花了艰苦卓绝的两周时间试图征服险象环生的山峰。",
      "original": "The climbers spent two grueling weeks attempting to conquer the treacherous mountain summit."
    },
    "form_confusables": [
      {
        "word": "mountain",
        "zh": "高山；山岳"
      },
      {
        "word": "fountain",
        "zh": "喷泉；源泉"
      },
      {
        "word": "maintain",
        "zh": "维持；保养"
      },
      {
        "word": "mount",
        "zh": "攀爬；安装"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mountain",
        "zh": "巍峨高山"
      },
      {
        "word": "peak",
        "zh": "顶峰；山顶"
      },
      {
        "word": "ridge",
        "zh": "山脊；山脉"
      },
      {
        "word": "cliff",
        "zh": "悬崖；绝壁"
      }
    ],
    "notes": "【搭配考点】mountain range/summit (山脉/山顶)，a mountain of debt/work (堆积如山的债务/工作)；【形近辨析】fountain (喷泉)，maintain (保养维持)，mount (登上底座)；【近义辨析】mountain 强调规模宏大、拔地而起、地形高耸险峻的整个高山山体；peak 专指高山最尖锐顶端或事业顶峰，ridge 强调连绵起伏狭长的山脊分水线，cliff 专指垂直近乎九十度陡峭的悬崖绝壁。"
  },
  "fountain": {
    "word": "fountain",
    "translation": "喷泉；源泉；涌现",
    "cloze": {
      "sentence": "The historic city square features a majestic marble ______ adorned with bronze statues.",
      "translation": "这座历史悠久的城市广场上有一座宏伟的大理石喷泉，饰有青铜雕像。",
      "original": "The historic city square features a majestic marble fountain adorned with bronze statues."
    },
    "form_confusables": [
      {
        "word": "fountain",
        "zh": "喷泉；源泉"
      },
      {
        "word": "mountain",
        "zh": "高山"
      },
      {
        "word": "foundation",
        "zh": "基础；基金会"
      },
      {
        "word": "maintain",
        "zh": "维持"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fountain",
        "zh": "人工喷泉；知识源泉"
      },
      {
        "word": "spring",
        "zh": "自然泉水；弹簧"
      },
      {
        "word": "geyser",
        "zh": "间歇泉"
      },
      {
        "word": "jet",
        "zh": "喷射流；喷嘴"
      }
    ],
    "notes": "【搭配考点】drinking fountain (饮水机喷泉)，fountain of knowledge/youth (知识宝库/青春之泉)；【形近辨析】mountain (山岳)，foundation (地基基石)，maintain (坚守维系)；【近义辨析】fountain 专指城市花园中人工建造供观赏或引水喷射的喷水池喷泉，比喻知识创意的源泉；spring 强调地表下天然涌出甘冽清泉的泉眼，geyser 专指受地热压力周期性喷发的炽热间歇泉，jet 强调高压细口喷射出的强劲液体射流。"
  },
  "profound": {
    "word": "profound",
    "translation": "深刻的；深奥的；巨大的",
    "cloze": {
      "sentence": "The invention of printing had a ______ impact on the spread of literacy across continents.",
      "translation": "印刷术的发明对大洲间读写文化的传播产生了极其深远的影响。",
      "original": "The invention of printing had a profound impact on the spread of literacy across continents."
    },
    "form_confusables": [
      {
        "word": "profound",
        "zh": "深刻的；深奥的"
      },
      {
        "word": "propagate",
        "zh": "传播；繁殖"
      },
      {
        "word": "proud",
        "zh": "骄傲的"
      },
      {
        "word": "found",
        "zh": "建立；发现"
      }
    ],
    "semantic_confusables": [
      {
        "word": "profound",
        "zh": "影响深远的；深奥的"
      },
      {
        "word": "deep",
        "zh": "深入的；深邃的"
      },
      {
        "word": "insightful",
        "zh": "富有洞察力的"
      },
      {
        "word": "radical",
        "zh": "根本的；激进的"
      }
    ],
    "notes": "【搭配考点】profound impact/effect (深远深刻的影响)，profound gratitude (由衷的感激)，profound silence (一片死寂)；【形近辨析】propagate (繁衍宣传)，proud (自豪自负)，found (创立)；【近义辨析】profound 强调思想哲理境界极高极深，或对社会命运带来翻天覆地的历史性深远影响；deep 为基础通用词多指物理深度或感情深厚，insightful 侧重看透事物本质极具敏锐洞察力，radical 侧重从根基处变革或政治激进。"
  },
  "foundation": {
    "word": "foundation",
    "translation": "基础；地基；基金会；创立",
    "cloze": {
      "sentence": "Mutual respect and transparent communication form the solid ______ of a lasting marriage.",
      "translation": "相互尊重和坦诚沟通构成了一段长久婚姻的坚实基石。",
      "original": "Mutual respect and transparent communication form the solid foundation of a lasting marriage."
    },
    "form_confusables": [
      {
        "word": "foundation",
        "zh": "地基；基金会"
      },
      {
        "word": "formation",
        "zh": "形成；编队"
      },
      {
        "word": "fountain",
        "zh": "喷泉"
      },
      {
        "word": "function",
        "zh": "功能；运行"
      }
    ],
    "semantic_confusables": [
      {
        "word": "foundation",
        "zh": "深厚根基；地基"
      },
      {
        "word": "basis",
        "zh": "逻辑依据；基本原则"
      },
      {
        "word": "cornerstone",
        "zh": "基石；最重要部分"
      },
      {
        "word": "base",
        "zh": "底部；基地"
      }
    ],
    "notes": "【搭配考点】lay the foundation for (为...奠定根基)，charitable foundation (慈善基金会)，solid foundation (坚实基础)；【形近辨析】formation (队形构造)，fountain (喷水泉)，function (职能功能)；【近义辨析】foundation 专指承载庞大建筑重量的地下钢筋混凝土基坑地基，或支持宏伟理论体系的深厚理论根基；basis 强调论证推理所依赖的逻辑前提或规章依据，cornerstone 强调建筑物拐角最核心受力的基石，base 侧重几何物体的底座或军事作业基地。"
  },
  "base": {
    "word": "base",
    "translation": "基地；基础；底部；以...为根据",
    "cloze": {
      "sentence": "The international enterprise decided to establish its European logistics ______ in Amsterdam.",
      "translation": "这家跨国企业决定将其欧洲物流基地设立在阿姆斯特丹。",
      "original": "The international enterprise decided to establish its European logistics base in Amsterdam."
    },
    "form_confusables": [
      {
        "word": "base",
        "zh": "基地；底部"
      },
      {
        "word": "bass",
        "zh": "低音；鲈鱼"
      },
      {
        "word": "bare",
        "zh": "赤裸的；光秃的"
      },
      {
        "word": "case",
        "zh": "案例；箱子"
      }
    ],
    "semantic_confusables": [
      {
        "word": "base",
        "zh": "总部基地；支承底座"
      },
      {
        "word": "headquarters",
        "zh": "总部；指挥部"
      },
      {
        "word": "pedestal",
        "zh": "雕像底座；垫脚石"
      },
      {
        "word": "foundation",
        "zh": "根基；地基"
      }
    ],
    "notes": "【搭配考点】military/logistics base (军事/物流基地)，base on/upon (建立在...基础上)，customer base (客户群体)；【形近辨析】bass (低音声部)，bare (光秃秃赤裸的)，case (事实案件)；【近义辨析】base 专指军事行军营地、大型商业活动据点，或承托物体的底脚平面；headquarters 专指最高统帅部或跨国集团总部机关，pedestal 专指承托半身雕像或花瓶的高雅大理石底座，foundation 强调深埋地下的承重地基。"
  },
  "basic": {
    "word": "basic",
    "translation": "基本的；基础的；初级的",
    "cloze": {
      "sentence": "Clean drinking water and proper sanitation are regarded as ______ human necessities.",
      "translation": "洁净的饮用水和完善的卫生设施被视为人类最基本的生活必需品。",
      "original": "Clean drinking water and proper sanitation are regarded as basic human necessities."
    },
    "form_confusables": [
      {
        "word": "basic",
        "zh": "基本的；初级的"
      },
      {
        "word": "basis",
        "zh": "基础；依据"
      },
      {
        "word": "basin",
        "zh": "水盆；流域"
      },
      {
        "word": "logic",
        "zh": "逻辑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "basic",
        "zh": "最基本的；底线的"
      },
      {
        "word": "fundamental",
        "zh": "根本的；基础性的"
      },
      {
        "word": "elementary",
        "zh": "初等的；浅显的"
      },
      {
        "word": "rudimentary",
        "zh": "原始简陋的；未成熟的"
      }
    ],
    "notes": "【搭配考点】basic needs/skills (基本需求/基本技能)，basic salary (基本底薪)；【形近辨析】basis (名词依据)，basin (盆地/脸盆)，logic (逻辑规律)；【近义辨析】basic 强调满足生存、入门或起步的最不可或缺的底层底线要素；fundamental 强调对整个体系架构起决定性支配作用的深层核心原则，elementary 强调教学启蒙阶段的初级简单内容，rudimentary 侧重原始简陋或处于萌芽初级阶段。"
  },
  "basis": {
    "word": "basis",
    "translation": "基础；根据；准则",
    "cloze": {
      "sentence": "Scientific research must be evaluated on the ______ of empirical evidence and peer review.",
      "translation": "科学研究必须以经验证据和同行评审为基础进行评估。",
      "original": "Scientific research must be evaluated on the basis of empirical evidence and peer review."
    },
    "form_confusables": [
      {
        "word": "basis",
        "zh": "基础；根据"
      },
      {
        "word": "basic",
        "zh": "基本的；初级的"
      },
      {
        "word": "basin",
        "zh": "水盆；流域"
      },
      {
        "word": "bias",
        "zh": "偏见；偏袒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "basis",
        "zh": "根据；基准"
      },
      {
        "word": "ground",
        "zh": "根据；理由"
      },
      {
        "word": "premise",
        "zh": "前提；假定"
      },
      {
        "word": "foundation",
        "zh": "根基；地基"
      }
    ],
    "notes": "【搭配考点】on the basis of (在...的基础上/依据)，daily/monthly basis (以按日/月为基准)；【形近辨析】basic (形容词基础的)，basin (盆地水盆)，bias (偏见偏颇)；【近义辨析】basis 强调进行逻辑推理、做出决定或制定行动规则的根本依据与基准；ground 强调采取法律行动或道德谴责的合情合理由，premise 强调逻辑三段论推导所必须设立的前提假设，foundation 侧重宏大体系物理或理论的底层根基。"
  },
  "mount": {
    "word": "mount",
    "translation": "攀登；增加；发起；底座；山峰",
    "cloze": {
      "sentence": "Human rights organizations began to ______ a massive international campaign against child labor.",
      "translation": "人权组织开始发起一场反对童工的大规模国际运动。",
      "original": "Human rights organizations began to mount a massive international campaign against child labor."
    },
    "form_confusables": [
      {
        "word": "mount",
        "zh": "发起；攀登；底座"
      },
      {
        "word": "amount",
        "zh": "数量；总计"
      },
      {
        "word": "mourn",
        "zh": "哀悼；悲痛"
      },
      {
        "word": "count",
        "zh": "计数；重要"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mount",
        "zh": "发起战役；组织"
      },
      {
        "word": "launch",
        "zh": "发起；发动"
      },
      {
        "word": "initiate",
        "zh": "开创；发起"
      },
      {
        "word": "organize",
        "zh": "组织；筹备"
      }
    ],
    "notes": "【搭配考点】mount a campaign/challenge (发起运动/挑战)，mounting pressure/debts (日益增加的压力/债务)；【形近辨析】amount (数量总数)，mourn (哀悼悲恸)，count (计算有价值)；【近义辨析】mount 强调逐步积蓄力量、组织资源发起声势浩大的行动或战役；launch 强调如同火箭点火出膛般全力启动新项目，initiate 侧重由最初一人破冰引头发起，organize 侧重繁琐的人员日程统筹安排。"
  },
  "amount": {
    "word": "amount",
    "translation": "数量；总额；等于；相当于",
    "cloze": {
      "sentence": "A significant ______ of agricultural land has been converted into commercial real estate.",
      "translation": "大量的农业用地已被转变为商业房地产。",
      "original": "A significant amount of agricultural land has been converted into commercial real estate."
    },
    "form_confusables": [
      {
        "word": "amount",
        "zh": "数量；总计"
      },
      {
        "word": "mount",
        "zh": "攀登；发起"
      },
      {
        "word": "account",
        "zh": "账户；解释"
      },
      {
        "word": "amaze",
        "zh": "使吃惊"
      }
    ],
    "semantic_confusables": [
      {
        "word": "amount",
        "zh": "数量；不可数总额"
      },
      {
        "word": "quantity",
        "zh": "量；数量"
      },
      {
        "word": "sum",
        "zh": "总数；金额"
      },
      {
        "word": "volume",
        "zh": "容积；体量"
      }
    ],
    "notes": "【搭配考点】a large amount of (大量的+不可数名词)，amount to (总计达到/相当于)；【形近辨析】mount (登上/组织发起)，account (账户/记账)，amaze (惊叹惊奇)；【近义辨析】amount 专用于不可数名词指不可分割的整体数量或款项，quantity 可修饰可数或不可数偏重客观度量衡测量，sum 专指货币数字总和或数学加法结果，volume 强调液体空间容量、交通车流量或货物交易总体规模。"
  },
  "soar": {
    "word": "soar",
    "translation": "高飞；激增；猛增；高耸",
    "cloze": {
      "sentence": "Due to severe winter cold and fuel shortages, heating costs began to ______ dramatically.",
      "translation": "由于冬季严寒和燃料短缺，取暖费用开始大幅飙升。",
      "original": "Due to severe winter cold and fuel shortages, heating costs began to soar dramatically."
    },
    "form_confusables": [
      {
        "word": "soar",
        "zh": "高飞；激增"
      },
      {
        "word": "sour",
        "zh": "酸的；变坏"
      },
      {
        "word": "roar",
        "zh": "咆哮；轰鸣"
      },
      {
        "word": "sore",
        "zh": "疼痛的；恼火的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "soar",
        "zh": "飞速暴涨；翱翔"
      },
      {
        "word": "surge",
        "zh": "激增；汹涌"
      },
      {
        "word": "skyrocket",
        "zh": "直线上升；暴涨"
      },
      {
        "word": "escalate",
        "zh": "逐步升级；加剧"
      }
    ],
    "notes": "【搭配考点】prices/temperatures soar (物价/气温急剧飙升)，soar into the sky (翱翔天际)；【形近辨析】sour (酸涩腐败)，roar (狮吼轰鸣)，sore (肌肉酸痛)；【近义辨析】soar 强调如同雄鹰展翅般轻盈、极高且极其迅速地攀升到惊人高度；surge 强调如同汹涌浪潮般势不可挡地瞬间涌起猛增，skyrocket 形象比喻如同烟花火箭般垂直笔直蹿升，escalate 强调危机、矛盾或战火由点及面逐步升级加剧。"
  },
  "ascend": {
    "word": "ascend",
    "translation": "上升；攀登；登基",
    "cloze": {
      "sentence": "The hot air balloon began to ______ gracefully into the clear morning sky.",
      "translation": "热气球开始优美地升入晴朗的晨空。",
      "original": "The hot air balloon began to ascend gracefully into the clear morning sky."
    },
    "form_confusables": [
      {
        "word": "ascend",
        "zh": "上升；登基"
      },
      {
        "word": "descend",
        "zh": "下降；遗传"
      },
      {
        "word": "accent",
        "zh": "口音；重音"
      },
      {
        "word": "accept",
        "zh": "接受；认可"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ascend",
        "zh": "上升；攀升"
      },
      {
        "word": "rise",
        "zh": "上升；升起"
      },
      {
        "word": "climb",
        "zh": "攀爬；攀登"
      },
      {
        "word": "scale",
        "zh": "攀登；翻越"
      }
    ],
    "notes": "【搭配考点】ascend the throne (登基为王)，ascend the stairs/mountain (登楼梯/爬山)；【形近辨析】descend (下降跌落)，accent (地方口音)，accept (接纳接受)；【近义辨析】ascend 属极正式文雅的动词，指物体平稳持续垂直向上运动或地位登临至尊；rise 为日常基础词多指自然升起无需借力，climb 强调手脚并用用力克服重力向上爬，scale 专指攀登极其陡峭险峻的垂直崖壁或城墙。"
  },
  "descend": {
    "word": "descend",
    "translation": "下降；遗传；突击；降临",
    "cloze": {
      "sentence": "The passenger aircraft prepared to ______ toward the runway as it approached the airport.",
      "translation": "客机在接近机场时准备向跑道降落。",
      "original": "The passenger aircraft prepared to descend toward the runway as it approached the airport."
    },
    "form_confusables": [
      {
        "word": "descend",
        "zh": "下降；降落"
      },
      {
        "word": "ascend",
        "zh": "上升；登基"
      },
      {
        "word": "descent",
        "zh": "下降；血统"
      },
      {
        "word": "dissent",
        "zh": "异议；不同意"
      }
    ],
    "semantic_confusables": [
      {
        "word": "descend",
        "zh": "向下运行；降临"
      },
      {
        "word": "drop",
        "zh": "掉落；下降"
      },
      {
        "word": "plunge",
        "zh": "骤降；猛跌"
      },
      {
        "word": "sink",
        "zh": "下沉；沉没"
      }
    ],
    "notes": "【搭配考点】descend from (起源于/是...后裔)，descend the stairs (走下楼梯)，darkness descends (夜幕降临)；【形近辨析】ascend (升起攀登)，descent (名词下降/血统)，dissent (持不同政见)；【近义辨析】descend 强调平稳、有控制、平缓地从高处向下运动滑行，drop 侧重失去支撑突然掉落或指标下降，plunge 强调垂直直插深渊般猛烈剧跌骤降，sink 强调在液体中受自身重力缓缓下沉淹没。"
  },
  "decline": {
    "word": "decline",
    "translation": "下降；衰退；婉拒；谢绝",
    "cloze": {
      "sentence": "The former minister decided to ______ the lucrative job offer in the private sector.",
      "translation": "这位前部长决定婉言谢绝私营部门提供的高薪职位。",
      "original": "The former minister decided to decline the lucrative job offer in the private sector."
    },
    "form_confusables": [
      {
        "word": "decline",
        "zh": "婉拒；衰退"
      },
      {
        "word": "incline",
        "zh": "倾斜；倾向于"
      },
      {
        "word": "recline",
        "zh": "斜倚；躺卧"
      },
      {
        "word": "declare",
        "zh": "宣布；声明"
      }
    ],
    "semantic_confusables": [
      {
        "word": "decline",
        "zh": "礼貌婉拒；衰落"
      },
      {
        "word": "refuse",
        "zh": "坚决拒绝"
      },
      {
        "word": "reject",
        "zh": "驳回；排斥"
      },
      {
        "word": "rebuff",
        "zh": "断然拒绝；回绝"
      }
    ],
    "notes": "【搭配考点】decline an invitation/offer (礼貌婉言谢绝)，economic decline (经济衰退)，on the decline (在衰落中)；【形近辨析】incline (倾斜倾向)，recline (靠背斜躺)，declare (正式宣告)；【近义辨析】decline 作拒绝时语气最为委婉客气合乎礼节，作衰退时指长期温和下滑；refuse 语气极其坚定直截了当，reject 侧重公事公办不予采纳驳回提案，rebuff 强调带有冷漠甚至生硬意味的当面回绝。"
  },
  "incline": {
    "word": "incline",
    "translation": "倾斜；倾向于；斜坡",
    "cloze": {
      "sentence": "Faced with conflicting evidence, independent scholars ______ toward the second hypothesis.",
      "translation": "面对相互矛盾的证据，独立学者们更倾向于第二种假说。",
      "original": "Faced with conflicting evidence, independent scholars incline toward the second hypothesis."
    },
    "form_confusables": [
      {
        "word": "incline",
        "zh": "倾向于；倾斜"
      },
      {
        "word": "decline",
        "zh": "衰退；婉拒"
      },
      {
        "word": "include",
        "zh": "包含"
      },
      {
        "word": "outline",
        "zh": "大纲；轮廓"
      }
    ],
    "semantic_confusables": [
      {
        "word": "incline",
        "zh": "思想上倾向于；倾斜"
      },
      {
        "word": "tend",
        "zh": "倾向于；往往会"
      },
      {
        "word": "lean",
        "zh": "身体倾斜；倾向于"
      },
      {
        "word": "slant",
        "zh": "倾斜；带偏向"
      }
    ],
    "notes": "【搭配考点】incline toward/to (倾向于)，be inclined to do sth (倾向于做某事/有意愿做)；【形近辨析】decline (拒绝/衰落)，include (包含)，outline (大纲轮廓)；【近义辨析】incline 强调在权衡判断后内心天平发生轻微倾斜偏向某一方；tend 侧重客观规律上往往呈现某种统计趋势，lean 侧重身体物理靠向或政治观点偏向某派别，slant 强调在叙述中带有主观倾向性地呈现。"
  },
  "ancestor": {
    "word": "ancestor",
    "translation": "祖先；祖宗；原型",
    "cloze": {
      "sentence": "DNA analysis revealed that the modern wolf and the domestic dog share a common ______.",
      "translation": "DNA分析表明，现代狼和家犬拥有共同的祖先。",
      "original": "DNA analysis revealed that the modern wolf and the domestic dog share a common ancestor."
    },
    "form_confusables": [
      {
        "word": "ancestor",
        "zh": "祖先；先人"
      },
      {
        "word": "ancestry",
        "zh": "祖先门第；血统"
      },
      {
        "word": "anchor",
        "zh": "铁锚；锚定"
      },
      {
        "word": "actor",
        "zh": "演员"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ancestor",
        "zh": "生物或家族祖先"
      },
      {
        "word": "forefather",
        "zh": "先父；先贤前辈"
      },
      {
        "word": "predecessor",
        "zh": "前任；前身"
      },
      {
        "word": "forebear",
        "zh": "祖先；宗族"
      }
    ],
    "notes": "【搭配考点】common ancestor (共同祖先)，ancestor worship (祖先崇拜)；【形近辨析】ancestry (集合名词家系血统)，anchor (船锚/主持人)，actor (演员)；【近义辨析】ancestor 专指人类家族世代向上追溯的祖辈或生物演化谱系上的原始始祖，forefather 强调开创民族国家的先贤先驱，predecessor 专指同一职位上的前任人选或某种设备的原型上一代，forebear 属文学庄重用词指世系先人。"
  },
  "ancient": {
    "word": "ancient",
    "translation": "古代的；古老的；年迈的",
    "cloze": {
      "sentence": "Archaeologists uncovered the ruins of an ______ temple buried beneath desert sands.",
      "translation": "考古学家发现了深埋在沙漠黄沙之下的一座古代神庙遗址。",
      "original": "Archaeologists uncovered the ruins of an ancient temple buried beneath desert sands."
    },
    "form_confusables": [
      {
        "word": "ancient",
        "zh": "古代的；古老的"
      },
      {
        "word": "accent",
        "zh": "口音；重音"
      },
      {
        "word": "agent",
        "zh": "代理人；特工"
      },
      {
        "word": "patient",
        "zh": "耐心的；病人"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ancient",
        "zh": "远古时代的；久远的"
      },
      {
        "word": "antique",
        "zh": "古董的；古典风格的"
      },
      {
        "word": "archaic",
        "zh": "古体的；陈旧过时的"
      },
      {
        "word": "primitive",
        "zh": "原始的；粗糙的"
      }
    ],
    "notes": "【搭配考点】ancient civilization/history (古代文明/古代史)，ancient ruins (古代废墟)；【形近辨析】accent (口音腔调)，agent (特工经纪人)，patient (病人有耐心的)；【近义辨析】ancient 专指人类文明发轫至中世纪以前远古时代的悠久历史，antique 侧重具有收藏投资价值的古玩古董家俱，archaic 专指古体词汇语言或落后陈腐的习俗，primitive 强调人类早期茹毛饮血的原始蛮荒状态。"
  },
  "consensus": {
    "word": "consensus",
    "translation": "共识；一致意见",
    "cloze": {
      "sentence": "After weeks of intense negotiation, delegates finally reached a broad ______ on climate targets.",
      "translation": "经过数周的紧张谈判，代表们终于在气候目标上达成了广泛的共识。",
      "original": "After weeks of intense negotiation, delegates finally reached a broad consensus on climate targets."
    },
    "form_confusables": [
      {
        "word": "consensus",
        "zh": "共识；一致"
      },
      {
        "word": "census",
        "zh": "人口普查"
      },
      {
        "word": "consent",
        "zh": "同意；赞同"
      },
      {
        "word": "conscious",
        "zh": "清醒的；有意识的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consensus",
        "zh": "广泛共识；集体意见"
      },
      {
        "word": "agreement",
        "zh": "协议；赞同"
      },
      {
        "word": "accord",
        "zh": "条约；协定"
      },
      {
        "word": "unanimity",
        "zh": "全体一致；无异议"
      }
    ],
    "notes": "【搭配考点】reach a consensus (达成共识)，general/broad consensus (广泛共识)；【形近辨析】census (人口户籍普查)，consent (个人批准同意)，conscious (神志清醒的)；【近义辨析】consensus 专指大型团体、社会或跨国谈判中经反复协商求同存异形成的集体共同决议；agreement 泛指任何双方达成的协议赞同，accord 强调庄严的国家间和平条约或步调一致，unanimity 专指百分之百全票赞成的绝对一致。"
  },
  "proceed": {
    "word": "proceed",
    "translation": "继续进行；前进；起诉",
    "cloze": {
      "sentence": "Once safety checks are completed, technicians may ______ with the reactor launch.",
      "translation": "一旦安全检查完成，技术人员就可以继续进行反应堆的启动工作。",
      "original": "Once safety checks are completed, technicians may proceed with the reactor launch."
    },
    "form_confusables": [
      {
        "word": "proceed",
        "zh": "继续进行；前进"
      },
      {
        "word": "precede",
        "zh": "在...之前发生"
      },
      {
        "word": "exceed",
        "zh": "超过；胜过"
      },
      {
        "word": "concede",
        "zh": "承认；让步"
      }
    ],
    "semantic_confusables": [
      {
        "word": "proceed",
        "zh": "按计划继续推进"
      },
      {
        "word": "continue",
        "zh": "继续；延续"
      },
      {
        "word": "advance",
        "zh": "前进；向前推进"
      },
      {
        "word": "resume",
        "zh": "暂停后重新恢复"
      }
    ],
    "notes": "【搭配考点】proceed with (继续推进某事)，proceed to do sth (接着做某事)，proceeds (复数收益)；【形近辨析】precede (时间空间上先于)，exceed (超出上限)，concede (被迫让步承认)；【近义辨析】proceed 强调在某一阶段工作就绪或指令下达后正式开动、按章办事继续推行；continue 强调动作前后无间断延展，advance 侧重突破阻碍在物理或学术上向前拓展，resume 专指被打断或休会后重新拾起。"
  },
  "procession": {
    "word": "procession",
    "translation": "队伍；行列；列队行进",
    "cloze": {
      "sentence": "A solemn funeral ______ followed the horse-drawn carriage slowly through the cathedral square.",
      "translation": "庄严的送葬队伍跟在马拉灵车后面，缓缓穿过大教堂广场。",
      "original": "A solemn funeral procession followed the horse-drawn carriage slowly through the cathedral square."
    },
    "form_confusables": [
      {
        "word": "procession",
        "zh": "游行队伍；行列"
      },
      {
        "word": "profession",
        "zh": "职业；专业"
      },
      {
        "word": "possession",
        "zh": "拥有；财产"
      },
      {
        "word": "concession",
        "zh": "让步；特许权"
      }
    ],
    "semantic_confusables": [
      {
        "word": "procession",
        "zh": "庄严仪式性队列"
      },
      {
        "word": "parade",
        "zh": "盛大游行检阅"
      },
      {
        "word": "march",
        "zh": "行军；游行示威"
      },
      {
        "word": "cavalcade",
        "zh": "马队；车队"
      }
    ],
    "notes": "【搭配考点】funeral/carnival procession (送葬队伍/狂欢节游行)，in procession (列队前进)；【形近辨析】profession (职业领域)，possession (财产占有)，concession (妥协让步)；【近义辨析】procession 专指宗教仪式、国葬或盛大典礼中井然有序、缓慢前行的列队；parade 侧重节假日供公众围观欢庆的彩色花车军乐队大游行，march 强调步调铿锵整齐的军事行军或政治抗议示威行进，cavalcade 专指长列骑兵或贵宾车队。"
  },
  "troop": {
    "word": "troop",
    "translation": "部队；军队；成群结队前行",
    "cloze": {
      "sentence": "The United Nations deployed a peacekeeping ______ to stabilize the disputed border region.",
      "translation": "联合国部署了一支维和部队以稳定有争议的边界地区。",
      "original": "The United Nations deployed a peacekeeping troop to stabilize the disputed border region."
    },
    "form_confusables": [
      {
        "word": "troop",
        "zh": "部队；成群前行"
      },
      {
        "word": "trap",
        "zh": "陷阱；设圈套"
      },
      {
        "word": "drop",
        "zh": "掉落；水滴"
      },
      {
        "word": "loop",
        "zh": "环；圈"
      }
    ],
    "semantic_confusables": [
      {
        "word": "troop",
        "zh": "军事连队；部队"
      },
      {
        "word": "squad",
        "zh": "班；突击小队"
      },
      {
        "word": "contingent",
        "zh": "代表团；分遣队"
      },
      {
        "word": "legion",
        "zh": "军团；大批"
      }
    ],
    "notes": "【搭配考点】peacekeeping troop/troops (维和部队)，troop withdrawal (军队撤出)；【形近辨析】trap (圈套陷阱)，drop (掉落滴下)，loop (圆环回路)；【近义辨析】troop 单数常指装甲连队或骑兵小队，复数 troops 泛指成建制正规陆军大部队；squad 专指执行特定任务的特警班或战斗小组，contingent 专指某一国家派出参与联合作战的一支分遣部队，legion 专指古罗马军团或庞大志愿者组织。"
  },
  "process": {
    "word": "process",
    "translation": "过程；程序；工序；加工；处理",
    "cloze": {
      "sentence": "Learning a foreign language is a gradual ______ that requires daily persistence.",
      "translation": "学习外语是一个需要日积月累坚持的循序渐进的过程。",
      "original": "Learning a foreign language is a gradual process that requires daily persistence."
    },
    "form_confusables": [
      {
        "word": "process",
        "zh": "过程；处理"
      },
      {
        "word": "proceed",
        "zh": "继续进行"
      },
      {
        "word": "profess",
        "zh": "声称；表明"
      },
      {
        "word": "possess",
        "zh": "拥有；支配"
      }
    ],
    "semantic_confusables": [
      {
        "word": "process",
        "zh": "演变过程；流程"
      },
      {
        "word": "procedure",
        "zh": "正规操作规程"
      },
      {
        "word": "course",
        "zh": "进程；路线"
      },
      {
        "word": "progression",
        "zh": "进阶次序；递进"
      }
    ],
    "notes": "【搭配考点】gradual/natural process (渐进/自然过程)，in the process of (在...过程中)，process data/food (处理数据/加工食品)；【形近辨析】proceed (推进继续)，profess (公开声称)，possess (占有拥有)；【近义辨析】process 强调事物从开端到结局所经历的一系列连续阶段与动态演变，procedure 专指办事时必须严格逐条履行的法定制式办事手续规程，course 侧重历史潮流或航船行进的路线轨迹，progression 强调按部就班有节奏的进阶次序。"
  },
  "procedure": {
    "word": "procedure",
    "translation": "程序；手续；外科手术步骤",
    "cloze": {
      "sentence": "The hospital adheres to a strict sterilization ______ before any surgical operation.",
      "translation": "医院在进行任何外科手术之前都遵循严格的消毒规程。",
      "original": "The hospital adheres to a strict sterilization procedure before any surgical operation."
    },
    "form_confusables": [
      {
        "word": "procedure",
        "zh": "程序；步骤"
      },
      {
        "word": "proceed",
        "zh": "继续进行"
      },
      {
        "word": "precedence",
        "zh": "优先权"
      },
      {
        "word": "posture",
        "zh": "姿势；态度"
      }
    ],
    "semantic_confusables": [
      {
        "word": "procedure",
        "zh": "规范步骤；操作程序"
      },
      {
        "word": "protocol",
        "zh": "外交礼节；科学方案"
      },
      {
        "word": "process",
        "zh": "整体过程；流程"
      },
      {
        "word": "routine",
        "zh": "常规惯例"
      }
    ],
    "notes": "【搭配考点】standard operating procedure (标准作业程序SOP)，surgical procedure (外科手术步骤)；【形近辨析】proceed (继续推进)，precedence (居先优先地位)，posture (姿态姿势)；【近义辨析】procedure 专指行政、医疗或法律上必须按既定顺序一步步履行的规范化办事程序；protocol 侧重国际外交条约礼仪规约或严密的科学实验方案，process 强调从头到尾自然连贯的整个动态过程，routine 强调日常惯常做法。"
  },
  "access": {
    "word": "access",
    "translation": "进入；使用权；通道；存取",
    "cloze": {
      "sentence": "Citizens in rural provinces deserve equal ______ to quality healthcare and education.",
      "translation": "农村省份的公民应享有平等获得优质医疗和教育的机会与权利。",
      "original": "Citizens in rural provinces deserve equal access to quality healthcare and education."
    },
    "form_confusables": [
      {
        "word": "access",
        "zh": "进入；使用权"
      },
      {
        "word": "assess",
        "zh": "评估；估价"
      },
      {
        "word": "accept",
        "zh": "接受"
      },
      {
        "word": "excess",
        "zh": "过量；超过"
      }
    ],
    "semantic_confusables": [
      {
        "word": "access",
        "zh": "获得机会；通道"
      },
      {
        "word": "entry",
        "zh": "进入；入口"
      },
      {
        "word": "admission",
        "zh": "准入；入场费"
      },
      {
        "word": "availability",
        "zh": "可得性；可利用性"
      }
    ],
    "notes": "【搭配考点】gain/have access to (获得接触/使用...的权利)，wheelchair access (轮椅无障碍通道)；【形近辨析】assess (估价评估)，accept (采纳接收)，excess (过度过剩)；【近义辨析】access 强调能够接近、进入某地或获取利用某种资源的权利与通路；entry 侧重跨过门槛物理进入的动作，admission 强调经过资格审核或购票后获得准许入场，availability 强调资源现成摆在那里可供随时取用。"
  },
  "assess": {
    "word": "assess",
    "translation": "评估；评定；估算",
    "cloze": {
      "sentence": "Independent environmentalists were hired to ______ the potential damage of the oil leak.",
      "translation": "受聘的独立环保人士对漏油事件可能造成的损害进行了评估。",
      "original": "Independent environmentalists were hired to assess the potential damage of the oil leak."
    },
    "form_confusables": [
      {
        "word": "assess",
        "zh": "评估；核定"
      },
      {
        "word": "access",
        "zh": "进入；获取"
      },
      {
        "word": "asset",
        "zh": "资产；长处"
      },
      {
        "word": "assert",
        "zh": "断言；主张"
      }
    ],
    "semantic_confusables": [
      {
        "word": "assess",
        "zh": "全面评估考量"
      },
      {
        "word": "evaluate",
        "zh": "评价价值或成果"
      },
      {
        "word": "estimate",
        "zh": "粗略估算数字"
      },
      {
        "word": "appraise",
        "zh": "专业鉴定估价"
      }
    ],
    "notes": "【搭配考点】assess damage/risk (评估损害/风险)，assess property taxes (核定房产税)；【形近辨析】access (使用通路)，asset (财富资产)，assert (强力断言坚持)；【近义辨析】assess 强调综合考察各种事实细节以得出量化或性质上的正式判断；evaluate 侧重依据既定指标对质量、绩效或成果的高低优劣打分评定，estimate 强调在数据不全情况下靠经验粗略估算数字金额，appraise 专指珠宝、艺术品由专家进行官方价值鉴定估价。"
  },
  "exceed": {
    "word": "exceed",
    "translation": "超过；超出；胜过",
    "cloze": {
      "sentence": "Motorists will face heavy fines if they ______ the maximum speed limit on the motorway.",
      "translation": "司机如果在高速公路上超过最高限速，将面临巨额罚款。",
      "original": "Motorists will face heavy fines if they exceed the maximum speed limit on the motorway."
    },
    "form_confusables": [
      {
        "word": "exceed",
        "zh": "超过；胜过"
      },
      {
        "word": "succeed",
        "zh": "成功；继承"
      },
      {
        "word": "excel",
        "zh": "胜过；擅长"
      },
      {
        "word": "accede",
        "zh": "同意；就任"
      }
    ],
    "semantic_confusables": [
      {
        "word": "exceed",
        "zh": "数量限额超越"
      },
      {
        "word": "surpass",
        "zh": "在品质能力上超越"
      },
      {
        "word": "outstrip",
        "zh": "跑过；大幅超越"
      },
      {
        "word": "overtake",
        "zh": "超车；赶超"
      }
    ],
    "notes": "【搭配考点】exceed expectations (超出预期)，exceed the speed limit (超速)；【形近辨析】succeed (继承成功)，excel (擅长卓越)，accede (应允加入)；【近义辨析】exceed 专指在明确数字、法定限额或预期指标上越过规定红线；surpass 强调在智慧、勇气、艺术水准等正面品质上超越前人，outstrip 侧重以更快速度遥遥甩开竞争对手，overtake 强调原本落后于人但后来居上超车赶超。"
  },
  "beyond": {
    "word": "beyond",
    "translation": "超越；在更远处；超出...范围",
    "cloze": {
      "sentence": "The underlying complexity of quantum physics is completely ______ the comprehension of novices.",
      "translation": "量子物理学的深层复杂性完全超出了初学者的理解范围。",
      "original": "The underlying complexity of quantum physics is completely beyond the comprehension of novices."
    },
    "form_confusables": [
      {
        "word": "beyond",
        "zh": "超越；在更远处"
      },
      {
        "word": "behind",
        "zh": "在...后面"
      },
      {
        "word": "bond",
        "zh": "纽带；结合"
      },
      {
        "word": "blond",
        "zh": "金发的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "beyond",
        "zh": "超出范围；在远方"
      },
      {
        "word": "past",
        "zh": "越过；走过"
      },
      {
        "word": "exceeding",
        "zh": "超出；超越"
      },
      {
        "word": "outside",
        "zh": "在...之外"
      }
    ],
    "notes": "【搭配考点】beyond comprehension/doubt (难以理解/无可置疑)，beyond the horizon (在地平线以外)；【形近辨析】behind (在背后)，bond (羁绊纽带)，blond (金发的)；【近义辨析】beyond 强调在空间上跨过了某一界线到达更远处，或在能力、认知上彻底超出了边界掌控；past 侧重物理上从某物身旁走过穿过，exceeding 作分词强调数量超越，outside 强调单纯处于空间或法规边界之外。"
  },
  "surplus": {
    "word": "surplus",
    "translation": "过剩；盈余；剩余的",
    "cloze": {
      "sentence": "Strong exports allowed the manufacturing nation to generate a massive trade ______.",
      "translation": "强劲的出口使这个制造业国家产生了巨额的贸易顺差。",
      "original": "Strong exports allowed the manufacturing nation to generate a massive trade surplus."
    },
    "form_confusables": [
      {
        "word": "surplus",
        "zh": "过剩；盈余"
      },
      {
        "word": "surprise",
        "zh": "惊喜；诧异"
      },
      {
        "word": "surface",
        "zh": "表面；浮现"
      },
      {
        "word": "surpass",
        "zh": "超越；胜过"
      }
    ],
    "semantic_confusables": [
      {
        "word": "surplus",
        "zh": "财政顺差；物资剩余"
      },
      {
        "word": "excess",
        "zh": "过度；多余"
      },
      {
        "word": "remainder",
        "zh": "余数；剩余物"
      },
      {
        "word": "glut",
        "zh": "供应过剩；充塞"
      }
    ],
    "notes": "【搭配考点】trade/budget surplus (贸易顺差/预算盈余)，surplus grain (余粮)；【形近辨析】surprise (惊异吃惊)，surface (地表表面)，surpass (胜过超越)；【近义辨析】surplus 专指在经济贸易结算中收入大于支出的良性资金结余或超出消费额的可用储备；excess 侧重超越正常适度限度的多余滥用，remainder 强调扣除主要部分后留下的零头尾数，glut 强调市场上商品严重滞销积压成灾。"
  },
  "extra": {
    "word": "extra",
    "translation": "额外的；附加的；额外的事物",
    "cloze": {
      "sentence": "The airline charges passengers an ______ fee for luggage that exceeds weight limits.",
      "translation": "航空公司对超出重量限制的行李向乘客收取额外费用。",
      "original": "The airline charges passengers an extra fee for luggage that exceeds weight limits."
    },
    "form_confusables": [
      {
        "word": "extra",
        "zh": "额外的；附加的"
      },
      {
        "word": "extract",
        "zh": "提取；拔出"
      },
      {
        "word": "exact",
        "zh": "准确的"
      },
      {
        "word": "extant",
        "zh": "现存的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "extra",
        "zh": "追加的；另外的"
      },
      {
        "word": "additional",
        "zh": "附加的；追加的"
      },
      {
        "word": "supplemental",
        "zh": "补充性的"
      },
      {
        "word": "spare",
        "zh": "备用的；多余的"
      }
    ],
    "notes": "【搭配考点】extra fee/charge (额外收费)，take extra care (格外留心)，work extra hours (加班)；【形近辨析】extract (提炼拔出)，exact (严谨精确的)，extant (现存尚在的)；【近义辨析】extra 偏口语和日常商业用语，强调在标准基准之外附带追加的内容；additional 属较正式官方书面语强调在已有基础上增补，supplemental 侧重为了弥补不足而特意配齐的辅助补充材料，spare 强调备用不时之需。"
  },
  "excess": {
    "word": "excess",
    "translation": "过量；过度；过多的；无节制",
    "cloze": {
      "sentence": "Doctors warned that an ______ of sugar in the daily diet leads to chronic diseases.",
      "translation": "医生警告说，日常饮食中摄入过量的糖分会导致慢性疾病。",
      "original": "Doctors warned that an excess of sugar in the daily diet leads to chronic diseases."
    },
    "form_confusables": [
      {
        "word": "excess",
        "zh": "过量；过度的"
      },
      {
        "word": "access",
        "zh": "进入；通道"
      },
      {
        "word": "assess",
        "zh": "评估；评价"
      },
      {
        "word": "accept",
        "zh": "接受"
      }
    ],
    "semantic_confusables": [
      {
        "word": "excess",
        "zh": "过量；无节制"
      },
      {
        "word": "surplus",
        "zh": "剩余；盈余"
      },
      {
        "word": "overkill",
        "zh": "过火；过量杀伤"
      },
      {
        "word": "superfluity",
        "zh": "多余；过剩物"
      }
    ],
    "notes": "【搭配考点】in excess of (超过...额度)，excess baggage (超重行李)，to excess (无节制地/过度地)；【形近辨析】access (通路使用权)，assess (评估核算)，accept (接纳认可)；【近义辨析】excess 强调超越了健康、安全或理性的恰当限度而产生负面危害的多余；surplus 强调经管核算后有益的富余结余物资，overkill 侧重小题大做用力过猛导致反效果，superfluity 偏典雅哲理用语指奢侈多余之物。"
  },
  "success": {
    "word": "success",
    "translation": "成功；胜利；发迹",
    "cloze": {
      "sentence": "Hard work, resilience, and good mentors were key factors in her eventual entrepreneurial ______.",
      "translation": "刻苦努力、坚韧不拔以及优秀的导师是她最终创业成功的关键因素。",
      "original": "Hard work, resilience, and good mentors were key factors in her eventual entrepreneurial success."
    },
    "form_confusables": [
      {
        "word": "success",
        "zh": "成功；胜利"
      },
      {
        "word": "succeed",
        "zh": "成功；继承"
      },
      {
        "word": "excess",
        "zh": "过量"
      },
      {
        "word": "access",
        "zh": "进入"
      }
    ],
    "semantic_confusables": [
      {
        "word": "success",
        "zh": "成功；实现抱负"
      },
      {
        "word": "achievement",
        "zh": "成就；造诣"
      },
      {
        "word": "victory",
        "zh": "胜利；战胜"
      },
      {
        "word": "triumph",
        "zh": "非凡胜利；凯旋"
      }
    ],
    "notes": "【搭配考点】key to success (成功的关键)，entrepreneurial success (创业成功)，achieve success (获得成功)；【形近辨析】succeed (动词成功)，excess (过度过量)，access (进入使用)；【近义辨析】success 专指达到预定目标、获得财富地位或事业圆满的总体良好结局；achievement 侧重付出艰苦智力心血所获得的实质性丰硕成果，victory 专指在军事打仗、竞技赛场战胜对手赢得胜局，triumph 强调克服巨大厄运之后迎来的光辉耀眼凯旋。"
  },
  "succeed": {
    "word": "succeed",
    "translation": "成功；继承；继任",
    "cloze": {
      "sentence": "With dedication and rigorous preparation, you will certainly ______ in the entrance examination.",
      "translation": "只要全心投入并做足严谨的准备，你一定能在入学考试中取得成功。",
      "original": "With dedication and rigorous preparation, you will certainly succeed in the entrance examination."
    },
    "form_confusables": [
      {
        "word": "succeed",
        "zh": "成功；继任"
      },
      {
        "word": "success",
        "zh": "成功名词"
      },
      {
        "word": "exceed",
        "zh": "超过"
      },
      {
        "word": "secede",
        "zh": "脱离；退出组织"
      }
    ],
    "semantic_confusables": [
      {
        "word": "succeed",
        "zh": "成功；办成"
      },
      {
        "word": "triumph",
        "zh": "战胜；凯旋"
      },
      {
        "word": "prevail",
        "zh": "战胜；盛行"
      },
      {
        "word": "thrive",
        "zh": "繁荣；茁壮成长"
      }
    ],
    "notes": "【搭配考点】succeed in doing sth (成功做成某事)，succeed to the throne (继承王位)，succeed sb as (接替某人担任...)；【形近辨析】success (名词成功)，exceed (超出突破)，secede (正式退出联邦)；【近义辨析】succeed in 强调经过努力如愿以偿办成预想目标；triumph 强调战胜强敌或艰难险阻后的欢欣胜利，prevail 侧重在激烈辩论或力量角逐中压倒对手最终占据上风，thrive 强调在良好环境下蓬勃发展生机盎然。"
  },
  "successor": {
    "word": "successor",
    "translation": "继任者；继承人；接替者",
    "cloze": {
      "sentence": "The retiring chief executive announced that his chosen ______ would take office next month.",
      "translation": "即将退休的首席执行官宣布，他选定的继任者将于下个月正式就职。",
      "original": "The retiring chief executive announced that his chosen successor would take office next month."
    },
    "form_confusables": [
      {
        "word": "successor",
        "zh": "继任者；接替者"
      },
      {
        "word": "success",
        "zh": "成功；胜利"
      },
      {
        "word": "succession",
        "zh": "连续；继承权"
      },
      {
        "word": "predecessor",
        "zh": "前任；前辈"
      }
    ],
    "semantic_confusables": [
      {
        "word": "successor",
        "zh": "职位继任者"
      },
      {
        "word": "heir",
        "zh": "法定继承人；子嗣"
      },
      {
        "word": "inheritor",
        "zh": "遗产继承者"
      },
      {
        "word": "replacement",
        "zh": "代替者；替换物"
      }
    ],
    "notes": "【搭配考点】appoint a successor (任命继任者)，successor to the post (该职位的接替者)；【形近辨析】success (成功)，succession (连串接替/王位继承权)，predecessor (前任者)；【近义辨析】successor 专指在政治职务、公司岗位或历史使命上按正规程序顺位接替前任的人；heir 专指按血缘或遗嘱继承王位巨额财产的法定继承人，inheritor 侧重承受物质遗产或文化衣钵的接受者，replacement 强调因缺勤、故障找来的替工替代品。"
  },
  "excel": {
    "word": "excel",
    "translation": "擅长；胜过；出类拔萃",
    "cloze": {
      "sentence": "With persistent practice, young athletes can ______ in international sports competitions.",
      "translation": "通过坚持不懈的训练，年轻运动员能够在国际体育比赛中脱颖而出、取得优异成绩。",
      "original": "With persistent practice, young athletes can excel in international sports competitions."
    },
    "form_confusables": [
      {
        "word": "excel",
        "zh": "擅长；胜过"
      },
      {
        "word": "exceed",
        "zh": "超过；超出"
      },
      {
        "word": "except",
        "zh": "除了...之外"
      },
      {
        "word": "excess",
        "zh": "过量；过度"
      }
    ],
    "semantic_confusables": [
      {
        "word": "excel",
        "zh": "出类拔萃；表现卓越"
      },
      {
        "word": "surpass",
        "zh": "超越；胜过"
      },
      {
        "word": "outdo",
        "zh": "胜过；超过"
      },
      {
        "word": "shine",
        "zh": "发光；出众"
      }
    ],
    "notes": "【搭配考点】excel in/at (在...方面出类拔萃/极其擅长)；【形近辨析】exceed (数值上超过)，except (介词除了)，excess (过剩过度)；【近义辨析】excel 强调在某项技艺或学问上表现出异乎寻常的卓越才华高人一等；surpass 侧重在具体品质水准上凌驾超越某特定对手，outdo 强调在竞争打擂中压倒对手，shine 侧重在特定场合或众人面前大放异彩闪光。"
  },
  "stride": {
    "word": "stride",
    "translation": "大步行走；大步；重大进展",
    "cloze": {
      "sentence": "The determined director took a bold ______ toward modernizing the factory's production lines.",
      "translation": "意志坚定的厂长在工厂生产线现代化方面迈出了坚实的大步。",
      "original": "The determined director took a bold stride toward modernizing the factory's production lines."
    },
    "form_confusables": [
      {
        "word": "stride",
        "zh": "大步走；重大进展"
      },
      {
        "word": "strike",
        "zh": "打击；罢工"
      },
      {
        "word": "stripe",
        "zh": "条纹；斑纹"
      },
      {
        "word": "strident",
        "zh": "刺耳的；尖锐的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stride",
        "zh": "跨越式大步；重大突破"
      },
      {
        "word": "pace",
        "zh": "步速；步调"
      },
      {
        "word": "step",
        "zh": "脚步；台阶"
      },
      {
        "word": "breakthrough",
        "zh": "重大突破"
      }
    ],
    "notes": "【搭配考点】make strides in (在...取得长足进展)，take sth in one's stride (从容应对某事)，with long strides (大步流星)；【形近辨析】strike (罢工袭击)，stripe (斑纹条纹)，strident (尖叫刺耳的)；【近义辨析】stride 专指步幅宽阔坚定的大踏步，引申为事业取得实质性跨越式重大进展；pace 强调行走或发展的节奏频率速度，step 侧重细碎普通的日常脚步或具体措施步骤，breakthrough 专指冲破瓶颈障碍的突破性成就。"
  },
  "wander": {
    "word": "wander",
    "translation": "漫游；闲逛；走神；偏离",
    "cloze": {
      "sentence": "Tourists love to ______ through the cobblestone alleys of the historic old town.",
      "translation": "游客们喜欢在历史老城鹅卵石铺就的小巷中漫步闲逛。",
      "original": "Tourists love to wander through the cobblestone alleys of the historic old town."
    },
    "form_confusables": [
      {
        "word": "wander",
        "zh": "漫步；闲逛"
      },
      {
        "word": "wonder",
        "zh": "想知道；惊奇"
      },
      {
        "word": "waiter",
        "zh": "侍应生"
      },
      {
        "word": "warmer",
        "zh": "取暖器；更暖和"
      }
    ],
    "semantic_confusables": [
      {
        "word": "wander",
        "zh": "无目的漫步游荡"
      },
      {
        "word": "roam",
        "zh": "漫步；漫游巡行"
      },
      {
        "word": "stroll",
        "zh": "闲庭信步散步"
      },
      {
        "word": "drift",
        "zh": "漂流；随波逐流"
      }
    ],
    "notes": "【搭配考点】wander off (走失/离题)，mind/thoughts wander (思绪走神)，wander the streets (漫步街头)；【形近辨析】wonder (惊异纳闷)，waiter (服务员)，warmer (加热器)；【近义辨析】wander 强调漫无固定目的地悠闲晃荡漫游，或思绪脱缰走神；roam 侧重在广阔无垠的荒野大自然中长距离跋涉漫步，stroll 侧重为放松身心在公园林荫道慢悠悠散步，drift 强调毫无主见被水流空气随风裹挟漂动。"
  },
  "crawl": {
    "word": "crawl",
    "translation": "爬行；匍匐前进；极其缓慢移动",
    "cloze": {
      "sentence": "During the evening rush hour, highway traffic slowed to an agonizing ______.",
      "translation": "在傍晚的高峰时段，高速公路上的交通慢得像爬行一样令人抓狂。",
      "original": "During the evening rush hour, highway traffic slowed to an agonizing crawl."
    },
    "form_confusables": [
      {
        "word": "crawl",
        "zh": "爬行；极其缓慢移动"
      },
      {
        "word": "brawl",
        "zh": "打架；斗殴"
      },
      {
        "word": "claw",
        "zh": "爪子；抓挠"
      },
      {
        "word": "drawl",
        "zh": "慢吞吞说话"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crawl",
        "zh": "手脚并用爬行；龟速移动"
      },
      {
        "word": "creep",
        "zh": "蹑手蹑脚爬行；潜行"
      },
      {
        "word": "slither",
        "zh": "蜿蜒滑行"
      },
      {
        "word": "inch",
        "zh": "极其缓慢地微动"
      }
    ],
    "notes": "【搭配考点】slow to a crawl (慢如蜗牛爬行)，crawl on all fours (四肢着地爬)，crawl out of bed (挣扎着爬起床)；【形近辨析】brawl (聚众斗殴闹事)，claw (猛兽爪子)，drawl (懒散拖长调说话)；【近义辨析】crawl 强调婴儿或蜥蜴肚皮贴地手脚着地挪动，或车辆极度拥堵以龟速挪移；creep 强调为了不被发现猫着腰蹑手蹑脚鬼祟潜行，slither 专指蛇类无足腹部蛇形滑行，inch 强调一英寸一英寸微弱艰难前挪。"
  },
  "climb": {
    "word": "climb",
    "translation": "攀爬；攀登；上升；攀升",
    "cloze": {
      "sentence": "As midday approached, outdoor temperatures began to ______ steadily above forty degrees.",
      "translation": "随着正午临近，室外气温开始持续攀升至四十度以上。",
      "original": "As midday approached, outdoor temperatures began to climb steadily above forty degrees."
    },
    "form_confusables": [
      {
        "word": "climb",
        "zh": "攀爬；上升"
      },
      {
        "word": "claim",
        "zh": "声称；索赔"
      },
      {
        "word": "limb",
        "zh": "四肢；大树枝"
      },
      {
        "word": "calm",
        "zh": "镇静的；平静"
      }
    ],
    "semantic_confusables": [
      {
        "word": "climb",
        "zh": "手脚攀爬；数值攀升"
      },
      {
        "word": "scale",
        "zh": "攀越险峰"
      },
      {
        "word": "mount",
        "zh": "登上；骑上"
      },
      {
        "word": "soar",
        "zh": "急剧飙升"
      }
    ],
    "notes": "【搭配考点】climb the corporate ladder (在公司节节高升)，temperatures/prices climb (气温/物价稳步攀升)；【形近辨析】claim (声称索赔)，limb (肢体大枝)，calm (从容平静)；【近义辨析】climb 强调克服阻力依靠自身体能向上攀登，或统计曲线平稳有序持续走高；scale 强调借助绳索机械翻越陡峭城墙悬崖，mount 侧重跨上马背或走上讲台底座，soar 强调爆发式暴涨。"
  },
  "progress": {
    "word": "progress",
    "translation": "进步；前进；发展；推移",
    "cloze": {
      "sentence": "The dedicated student showed remarkable ______ in mathematics after receiving private tutoring.",
      "translation": "这位用功的学生在接受个别辅导后，数学成绩取得了显著的进步。",
      "original": "The dedicated student showed remarkable progress in mathematics after receiving private tutoring."
    },
    "form_confusables": [
      {
        "word": "progress",
        "zh": "进步；前进"
      },
      {
        "word": "congress",
        "zh": "国会；大会"
      },
      {
        "word": "process",
        "zh": "过程；加工"
      },
      {
        "word": "program",
        "zh": "项目；程序"
      }
    ],
    "semantic_confusables": [
      {
        "word": "progress",
        "zh": "实质进步；向前发展"
      },
      {
        "word": "advancement",
        "zh": "推进；晋升"
      },
      {
        "word": "development",
        "zh": "发展；发育"
      },
      {
        "word": "headway",
        "zh": "前进进展"
      }
    ],
    "notes": "【搭配考点】make progress (取得进步)，in progress (正在进行中)，economic progress (经济发展)；【形近辨析】congress (国会代表大会)，process (过程程序)，program (规划程序)；【近义辨析】progress 专指在学识、技术或文明道德上朝着更高级完美状态的实质迈进；advancement 侧重职务头衔晋升或技术前沿推进，development 强调规模由小到大结构由简单到复杂的全面发育，headway 强调克服阻碍后艰难取得的前进进展。"
  },
  "congress": {
    "word": "congress",
    "translation": "代表大会；国会；立法机构",
    "cloze": {
      "sentence": "Medical specialists from fifty nations gathered for the annual international ______ on oncology.",
      "translation": "来自五十个国家的医学专家齐聚一堂，参加肿瘤学年度国际代表大会。",
      "original": "Medical specialists from fifty nations gathered for the annual international congress on oncology."
    },
    "form_confusables": [
      {
        "word": "congress",
        "zh": "国会；代表大会"
      },
      {
        "word": "progress",
        "zh": "进步；推进"
      },
      {
        "word": "digress",
        "zh": "离题；岔开话题"
      },
      {
        "word": "ingress",
        "zh": "进入；入口"
      }
    ],
    "semantic_confusables": [
      {
        "word": "congress",
        "zh": "正式代表大会；立法机构"
      },
      {
        "word": "convention",
        "zh": "行业年会；代表大会"
      },
      {
        "word": "parliament",
        "zh": "议会；国会"
      },
      {
        "word": "assembly",
        "zh": "集会；立法议会"
      }
    ],
    "notes": "【搭配考点】international congress (国际学术代表大会)，Library of Congress (美国国会图书馆)，pass through Congress (通过国会审议)；【形近辨析】progress (进步)，digress (偏离主题)，ingress (入场进入权)；【近义辨析】congress 专指美国等总统制国家的最高立法机构（首字母大写），或大型国际专业学术团体的正式代表大会；convention 侧重行业展销年会或政党全国提名大会，parliament 专指英国内阁议会制立法机关，assembly 泛指公民集会或联合国大会。"
  },
  "aggressive": {
    "word": "aggressive",
    "translation": "好斗的；侵略性的；进取的；有闯劲的",
    "cloze": {
      "sentence": "The technology startup launched an ______ marketing campaign to capture market share.",
      "translation": "这家科技初创企业发起了一场极具进取性的营销攻势，以抢占市场份额。",
      "original": "The technology startup launched an aggressive marketing campaign to capture market share."
    },
    "form_confusables": [
      {
        "word": "aggressive",
        "zh": "好斗的；积极进取的"
      },
      {
        "word": "progressive",
        "zh": "进步的；逐步发展的"
      },
      {
        "word": "regressive",
        "zh": "倒退的；退化的"
      },
      {
        "word": "oppressive",
        "zh": "压迫的；沉重的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "aggressive",
        "zh": "咄咄逼人的；敢打敢拼的"
      },
      {
        "word": "assertive",
        "zh": "坚定自信的"
      },
      {
        "word": "belligerent",
        "zh": "交战的好战的"
      },
      {
        "word": "ambitious",
        "zh": "雄心勃勃的"
      }
    ],
    "notes": "【搭配考点】aggressive marketing (激进营销)，aggressive behavior (攻击性行为)；【形近辨析】progressive (进步开明的)，regressive (退步倒退的)，oppressive (暴虐压抑的)；【近义辨析】aggressive 具有双刃剑词义：在军事人际交往中指凶狠好斗、挑衅侵略，在商业和职场中指充满狼性冲劲、敢于进取；assertive 褒义指敢于自信维护自身权益但绝不侵犯他人，belligerent 专指赤裸裸的好战挑衅，ambitious 强调胸怀远大志向抱负。"
  },
  "move": {
    "word": "move",
    "translation": "移动；采取行动；搬家；感动；策略",
    "cloze": {
      "sentence": "The central bank's unexpected interest rate cut was seen as a bold strategic ______.",
      "translation": "央行出人意料的降息被视为一项大胆的战略举措。",
      "original": "The central bank's unexpected interest rate cut was seen as a bold strategic move."
    },
    "form_confusables": [
      {
        "word": "move",
        "zh": "行动；移动"
      },
      {
        "word": "movie",
        "zh": "电影"
      },
      {
        "word": "more",
        "zh": "更多"
      },
      {
        "word": "mode",
        "zh": "模式；方式"
      }
    ],
    "semantic_confusables": [
      {
        "word": "move",
        "zh": "策略举措；行动"
      },
      {
        "word": "action",
        "zh": "行动；行为"
      },
      {
        "word": "step",
        "zh": "步骤；对策"
      },
      {
        "word": "maneuver",
        "zh": "策略计谋；调动"
      }
    ],
    "notes": "【搭配考点】strategic move (战略举措)，make a move (采取行动/动身)，on the move (在行进中/活跃中)；【形近辨析】movie (电影院影片)，more (更多)，mode (运转模式)；【近义辨析】move 强调在棋局博弈、商业竞争或政治斗争中走出的关键一步棋或策略动作；action 泛指落实到身体动作的行动实践，step 侧重流程步骤中的单一措施，maneuver 强调老谋深算、巧妙闪转腾挪的军政战术机动手段。"
  },
  "mobile": {
    "word": "mobile",
    "translation": "可移动的；机动的；流动性的",
    "cloze": {
      "sentence": "The hospital dispatched a ______ medical clinic to provide vaccinations in remote mountain villages.",
      "translation": "医院派遣了一辆流动医疗巡诊车，为偏远山村提供疫苗接种服务。",
      "original": "The hospital dispatched a mobile medical clinic to provide vaccinations in remote mountain villages."
    },
    "form_confusables": [
      {
        "word": "mobile",
        "zh": "可移动的；机动的"
      },
      {
        "word": "mobilize",
        "zh": "动员；调动"
      },
      {
        "word": "noble",
        "zh": "高贵的"
      },
      {
        "word": "automobile",
        "zh": "汽车"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mobile",
        "zh": "随处可移动的；流动的"
      },
      {
        "word": "portable",
        "zh": "轻便可携带的"
      },
      {
        "word": "transportable",
        "zh": "可输送运输的"
      },
      {
        "word": "movable",
        "zh": "可挪动的"
      }
    ],
    "notes": "【搭配考点】mobile phone/app (移动电话/应用)，mobile clinic/unit (流动诊所/机动分队)，socially mobile (阶层流动的)；【形近辨析】mobilize (战备动员)，noble (崇高尊贵的)，automobile (机动小汽车)；【近义辨析】mobile 强调本身具备机动行走能力、或通过车辆巡回作业的流动特性；portable 强调体积小巧轻便、个人单手可随时随身携带，transportable 强调体量虽大但可通过卡车船舶吊装运走，movable 强调非固定死、可搬动挪位。"
  },
  "static": {
    "word": "static",
    "translation": "静态的；静止的；静电；静电噪音",
    "cloze": {
      "sentence": "Economists noted that real wages have remained completely ______ despite soaring inflation.",
      "translation": "经济学家指出，尽管通胀飙升，但实际工资依然完全停滞不前。",
      "original": "Economists noted that real wages have remained completely static despite soaring inflation."
    },
    "form_confusables": [
      {
        "word": "static",
        "zh": "静态的；静止的"
      },
      {
        "word": "statistic",
        "zh": "统计数值"
      },
      {
        "word": "station",
        "zh": "车站；站立"
      },
      {
        "word": "status",
        "zh": "地位；状态"
      }
    ],
    "semantic_confusables": [
      {
        "word": "static",
        "zh": "停滞不动的；静态的"
      },
      {
        "word": "stationary",
        "zh": "静止不动的；固定的"
      },
      {
        "word": "stagnant",
        "zh": "停滞无生气的；发臭的"
      },
      {
        "word": "constant",
        "zh": "恒定不变的"
      }
    ],
    "notes": "【搭配考点】remain static (保持静止/停滞不前)，static electricity (静电)，static friction (静摩擦力)；【形近辨析】statistic (统计数据)，station (岗位车站)，status (社会地位身份)；【近义辨析】static 专指在一段时间内缺乏变化、发展或内部运动停滞的状态；stationary 专指物体在空间物理位置上未在移动行走，stagnant 贬义指水流不畅发臭腐败、经济萎靡死气沉沉，constant 强调数值或伴随状态持之以恒稳定不变。"
  },
  "motive": {
    "word": "motive",
    "translation": "动机；目的；发动的",
    "cloze": {
      "sentence": "Detectives questioned the business partner to establish a possible financial ______ for the murder.",
      "translation": "侦探审问了合伙人，以确定谋杀案背后可能存在的经济动机。",
      "original": "Detectives questioned the business partner to establish a possible financial motive for the murder."
    },
    "form_confusables": [
      {
        "word": "motive",
        "zh": "动机；目的"
      },
      {
        "word": "motor",
        "zh": "发动机；汽车"
      },
      {
        "word": "motivate",
        "zh": "激励；驱使"
      },
      {
        "word": "motion",
        "zh": "运动；动议"
      }
    ],
    "semantic_confusables": [
      {
        "word": "motive",
        "zh": "内心驱动动机"
      },
      {
        "word": "incentive",
        "zh": "外在物质激励"
      },
      {
        "word": "rationale",
        "zh": "根本逻辑依据"
      },
      {
        "word": "intention",
        "zh": "主观意图；打算"
      }
    ],
    "notes": "【搭配考点】financial/ulterior motive (经济/别有用心的动机)，motive power (原动力)；【形近辨析】motor (马达电动机)，motivate (激发促使)，motion (提议手势)；【近义辨析】motive 强调深藏于人内心深处、直接诱发其做出特定行为的心理诱因；incentive 侧重外部设立用来诱惑刺激人努力工作的奖金或税收优惠，rationale 强调行为背后的系统理性解释与理论依据，intention 侧重脑海中既定的主观设想与打算。"
  },
  "motivate": {
    "word": "motivate",
    "translation": "激励；促动；激发；作为...的动机",
    "cloze": {
      "sentence": "A skilled teacher knows how to ______ students to discover answers on their own.",
      "translation": "优秀的教师懂得如何激发学生自主去发现答案。",
      "original": "A skilled teacher knows how to motivate students to discover answers on their own."
    },
    "form_confusables": [
      {
        "word": "motivate",
        "zh": "激励；促发"
      },
      {
        "word": "mutate",
        "zh": "变异；突变"
      },
      {
        "word": "mitigate",
        "zh": "减轻；缓和"
      },
      {
        "word": "mediate",
        "zh": "调停；斡旋"
      }
    ],
    "semantic_confusables": [
      {
        "word": "motivate",
        "zh": "激发内生动力"
      },
      {
        "word": "inspire",
        "zh": "赋予灵感；鼓舞"
      },
      {
        "word": "encourage",
        "zh": "鼓励；支持"
      },
      {
        "word": "stimulate",
        "zh": "刺激；激发活力"
      }
    ],
    "notes": "【搭配考点】motivate sb to do sth (激励某人做某事)，highly motivated (积极性极高的)；【形近辨析】mutate (生物变异)，mitigate (缓解减轻)，mediate (居中调解)；【近义辨析】motivate 强调注入强大内在驱动力使其具有强烈行动渴望；inspire 侧重通过榜样或艺术作品震撼心灵赋予崇高灵感，encourage 侧重给予打气支持消除恐惧心理，stimulate 强调给予外界生理或脑力刺激促其加快反应。"
  },
  "remove": {
    "word": "remove",
    "translation": "移除；消除；免职；脱下",
    "cloze": {
      "sentence": "The surgeon performed a minimally invasive procedure to ______ the benign tumor.",
      "translation": "外科医生进行了一项微创手术以切除良性肿瘤。",
      "original": "The surgeon performed a minimally invasive procedure to remove the benign tumor."
    },
    "form_confusables": [
      {
        "word": "remove",
        "zh": "移除；开除"
      },
      {
        "word": "remote",
        "zh": "遥远的；偏僻的"
      },
      {
        "word": "remake",
        "zh": "重制；重做"
      },
      {
        "word": "resolve",
        "zh": "解决；决心"
      }
    ],
    "semantic_confusables": [
      {
        "word": "remove",
        "zh": "移走；根除"
      },
      {
        "word": "eliminate",
        "zh": "消灭；淘汰"
      },
      {
        "word": "eradicate",
        "zh": "连根拔起；根除"
      },
      {
        "word": "extract",
        "zh": "拔出；提炼"
      }
    ],
    "notes": "【搭配考点】remove from office (免除职务)，remove obstacles/stains (清除障碍/污渍)；【形近辨析】remote (偏远冷漠的)，remake (重新制作翻拍)，resolve (化解纷争)；【近义辨析】remove 为最通用的清除移开动词，指将某物从原所在位置拿走剥离；eliminate 强调彻底剔除不再有残留或在锦标赛中淘汰出局，eradicate 强调像拔除毒草般彻底消灭绝迹，extract 强调克服附着力使劲拔出或用溶剂提取萃取。"
  },
  "emotion": {
    "word": "emotion",
    "translation": "情感；情绪；激情",
    "cloze": {
      "sentence": "His trembling voice was choked with intense ______ as he delivered the farewell address.",
      "translation": "他在致告别辞时，颤抖的声音因内心情感极其激动而哽咽。",
      "original": "His trembling voice was choked with intense emotion as he delivered the farewell address."
    },
    "form_confusables": [
      {
        "word": "emotion",
        "zh": "情感；情绪"
      },
      {
        "word": "motion",
        "zh": "运动；手势"
      },
      {
        "word": "promotion",
        "zh": "提升；促销"
      },
      {
        "word": "emission",
        "zh": "排放；散发"
      }
    ],
    "semantic_confusables": [
      {
        "word": "emotion",
        "zh": "强烈内心情感"
      },
      {
        "word": "feeling",
        "zh": "感觉；直觉"
      },
      {
        "word": "sentiment",
        "zh": "感伤多愁；观点"
      },
      {
        "word": "passion",
        "zh": "炽烈激情；热情"
      }
    ],
    "notes": "【搭配考点】intense/deep emotion (强烈/深厚的情感)，choked with emotion (哽咽激动)；【形近辨析】motion (物理运动/提议)，promotion (职位晋升/推销)，emission (气体排放)；【近义辨析】emotion 强调伴随生理心理强烈激荡的主观情感状态；feeling 范围最广可指触觉冷暖也可指心绪直觉，sentiment 强调伴随浪漫感伤文艺情调的思绪或舆论倾向，passion 专指对某种爱好或爱人炽热狂热的情感火焰。"
  },
  "rational": {
    "word": "rational",
    "translation": "理性的；合理的；清醒的",
    "cloze": {
      "sentence": "Judges are expected to remain completely ______ and disregard sensational media rumors.",
      "translation": "法官应当保持完全理性，不受耸人听闻的媒体谣言影响。",
      "original": "Judges are expected to remain completely rational and disregard sensational media rumors."
    },
    "form_confusables": [
      {
        "word": "rational",
        "zh": "理性的；合理的"
      },
      {
        "word": "ratio",
        "zh": "比率；比例"
      },
      {
        "word": "national",
        "zh": "国家的；全国的"
      },
      {
        "word": "rotational",
        "zh": "旋转的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "rational",
        "zh": "遵循理智逻辑的"
      },
      {
        "word": "logical",
        "zh": "符合逻辑规则的"
      },
      {
        "word": "sensible",
        "zh": "明智讲理的"
      },
      {
        "word": "reasonable",
        "zh": "通情达理的；合乎情理的"
      }
    ],
    "notes": "【搭配考点】rational decision/choice (理性决策/选择)，rational being (具有理性的人类)；【形近辨析】ratio (数学比率)，national (国家民族的)，rotational (轮换旋转的)；【近义辨析】rational 强调能够运用人类理性大脑进行清醒思考、不受盲目情感偏见左右；logical 侧重严密遵循形式逻辑推理的因果链条，sensible 侧重结合实际经验表现出的精明现实明智，reasonable 强调不偏激、公道合情合理不强人所难。"
  },
  "ratio": {
    "word": "ratio",
    "translation": "比率；比例",
    "cloze": {
      "sentence": "The private academy maintains an exceptional ______ of one teacher for every seven students.",
      "translation": "该私立学院保持着每七名学生配备一名教师的优异师生比例。",
      "original": "The private academy maintains an exceptional ratio of one teacher for every seven students."
    },
    "form_confusables": [
      {
        "word": "ratio",
        "zh": "比例；比率"
      },
      {
        "word": "rational",
        "zh": "理性的"
      },
      {
        "word": "radio",
        "zh": "收音机；无线电"
      },
      {
        "word": "rating",
        "zh": "评级；收视率"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ratio",
        "zh": "两组数值之比"
      },
      {
        "word": "proportion",
        "zh": "部分与整体的占比"
      },
      {
        "word": "percentage",
        "zh": "百分比"
      },
      {
        "word": "rate",
        "zh": "比率；速率"
      }
    ],
    "notes": "【搭配考点】ratio of A to B (A与B的比率)，price-earnings ratio (市盈率P/E)；【形近辨析】rational (理性的)，radio (广播无线电)，rating (等级收视率)；【近义辨析】ratio 专指数学上表示两个独立数量相对关系的对比商数；proportion 强调某个局部组成部分在整个总数中所占据的分量份额，percentage 强调按百进制表达的精确比率，rate 侧重一种数量随另一种变量发生变动的关联速度或收费标准。"
  },
  "rate": {
    "word": "rate",
    "translation": "比率；速度；价格；评估；划分等级",
    "cloze": {
      "sentence": "The central bank decided to raise the benchmark interest ______ to combat domestic inflation.",
      "translation": "中央银行决定提高基准利率以遏制国内通货膨胀。",
      "original": "The central bank decided to raise the benchmark interest rate to combat domestic inflation."
    },
    "form_confusables": [
      {
        "word": "rate",
        "zh": "比率；评级"
      },
      {
        "word": "ratio",
        "zh": "比例"
      },
      {
        "word": "date",
        "zh": "日期；约会"
      },
      {
        "word": "fate",
        "zh": "命运"
      }
    ],
    "semantic_confusables": [
      {
        "word": "rate",
        "zh": "利率；速率；费用"
      },
      {
        "word": "speed",
        "zh": "行进速度；速率"
      },
      {
        "word": "pace",
        "zh": "步速；节奏"
      },
      {
        "word": "tariff",
        "zh": "关税；资费表"
      }
    ],
    "notes": "【搭配考点】interest rate (利率)，unemployment rate (失业率)，at any rate (无论如何)；【形近辨析】ratio (A与B数学比例)，date (日期)，fate (宿命命运)；【近义辨析】rate 专指按单位时间、距离计算的指标变动幅度或官方统一规定的服务费率；speed 专指物体物理位移的快慢程度，pace 强调动作迈步的平稳韵律节奏，tariff 专指海关向进出口货品征收的关税税率。"
  },
  "percentage": {
    "word": "percentage",
    "translation": "百分比；百分率；提成",
    "cloze": {
      "sentence": "A high ______ of young graduates choose to pursue advanced academic degrees abroad.",
      "translation": "很大比例的年轻毕业生选择去国外攻读高阶学术学位。",
      "original": "A high percentage of young graduates choose to pursue advanced academic degrees abroad."
    },
    "form_confusables": [
      {
        "word": "percentage",
        "zh": "百分比；提成"
      },
      {
        "word": "heritage",
        "zh": "遗产；传统"
      },
      {
        "word": "patronage",
        "zh": "资助；光顾"
      },
      {
        "word": "peerage",
        "zh": "贵族爵位"
      }
    ],
    "semantic_confusables": [
      {
        "word": "percentage",
        "zh": "按百分比计算的份额"
      },
      {
        "word": "proportion",
        "zh": "占比；比例"
      },
      {
        "word": "fraction",
        "zh": "小部分；微小比例"
      },
      {
        "word": "share",
        "zh": "股份；应得份额"
      }
    ],
    "notes": "【搭配考点】high/small percentage of (高/低百分比的)，percentage points (百分点)；【形近辨析】heritage (历史文化遗产)，patronage (赞助庇护)，peerage (贵族阶层地位)；【近义辨析】percentage 明确指以百分之几为单位表达的数额比例；proportion 强调局部相对于总体的和谐平衡分配，fraction 强调微乎其微的一小点点零头碎屑，share 侧重个人在利润、任务中分得的一份。"
  },
  "remote": {
    "word": "remote",
    "translation": "遥远的；偏僻的；微乎其微的；冷漠的",
    "cloze": {
      "sentence": "Scientists established a weather observation station in a ______ Himalayan valley.",
      "translation": "科学家们在喜马拉雅山脉一个偏僻偏远的山谷中建立了一个气象观测站。",
      "original": "Scientists established a weather observation station in a remote Himalayan valley."
    },
    "form_confusables": [
      {
        "word": "remote",
        "zh": "遥远的；偏僻的"
      },
      {
        "word": "remove",
        "zh": "消除；移走"
      },
      {
        "word": "promote",
        "zh": "提升；促进"
      },
      {
        "word": "devote",
        "zh": "倾注；献身"
      }
    ],
    "semantic_confusables": [
      {
        "word": "remote",
        "zh": "地理隔绝偏僻的；微茫的"
      },
      {
        "word": "distant",
        "zh": "空间时间遥远的"
      },
      {
        "word": "isolated",
        "zh": "孤立隔绝的"
      },
      {
        "word": "secluded",
        "zh": "幽静隐蔽的"
      }
    ],
    "notes": "【搭配考点】remote area/village (偏远地区/村庄)，remote possibility/chance (微茫渺茫的可能)，remote control (遥控器)；【形近辨析】remove (拆除消除)，promote (升职推广)，devote (奉献致力于)；【近义辨析】remote 强调远离人类文明活动中心、交通极其不便的孤立偏僻荒野，或希望极度渺茫；distant 仅客观指空间距离或时间相隔遥远，isolated 强调四面隔绝形单影只，secluded 强调幽静、不受喧嚣打扰的宜人隐蔽环境。"
  },
  "promote": {
    "word": "promote",
    "translation": "促进；推动；晋升；促销",
    "cloze": {
      "sentence": "The government introduced tax credits to ______ private investment in green energy.",
      "translation": "政府出台了税收抵免政策以促进私营部门对绿色能源的投资。",
      "original": "The government introduced tax credits to promote private investment in green energy."
    },
    "form_confusables": [
      {
        "word": "promote",
        "zh": "促进；晋升"
      },
      {
        "word": "remote",
        "zh": "偏远的；遥控"
      },
      {
        "word": "provide",
        "zh": "提供"
      },
      {
        "word": "provoke",
        "zh": "挑衅；激怒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "promote",
        "zh": "推动促进；宣传推销"
      },
      {
        "word": "foster",
        "zh": "培养；促进"
      },
      {
        "word": "boost",
        "zh": "助推；大幅提升"
      },
      {
        "word": "advance",
        "zh": "推进；晋升"
      }
    ],
    "notes": "【搭配考点】promote economic growth (促进经济增长)，promote sb to manager (提拔某人为经理)，promote a product (促销产品)；【形近辨析】remote (偏远冷落)，provide (供给)，provoke (激起愤怒)；【近义辨析】promote 强调从外部积极宣传助推使事物向良性、繁荣方向发展，或提高员工岗位薪资；foster 侧重像抚养婴儿一样悉心培植、培育某种良好风气或技能，boost 侧重在短时间内从外部猛推一把，advance 侧重推进实质业务流程。"
  },
  "action": {
    "word": "action",
    "translation": "行动；动作；诉讼；情节",
    "cloze": {
      "sentence": "The government was urged to take decisive ______ to curb rising inflation.",
      "translation": "政府被敦促采取果断行动以遏制日益加剧的通货膨胀。",
      "original": "The government was urged to take decisive action to curb rising inflation."
    },
    "form_confusables": [
      {
        "word": "action",
        "zh": "行动；诉讼"
      },
      {
        "word": "auction",
        "zh": "拍卖"
      },
      {
        "word": "fraction",
        "zh": "小部分；碎片"
      },
      {
        "word": "active",
        "zh": "积极的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "action",
        "zh": "实质行动；措施"
      },
      {
        "word": "deed",
        "zh": "具体善行恶行"
      },
      {
        "word": "measure",
        "zh": "对策；法律规程"
      },
      {
        "word": "behavior",
        "zh": "日常行为举止"
      }
    ],
    "notes": "【搭配考点】take decisive action (采取果断行动)，course of action (行动方针)，bring an action against (对...提起诉讼)；【形近辨析】auction (拍卖会)，fraction (小分数)，active (活跃的)；【近义辨析】action 强调为了达到某一特定目的而全力调动资源所展开的实质性行动；deed 专指具有显著道德色彩的单个善举恶行事迹，measure 侧重政府或行政机构制定的强制性立法政策措施，behavior 侧重心理学上的日常言行举止表现。"
  },
  "deed": {
    "word": "deed",
    "translation": "行为；事迹；契据；证书",
    "cloze": {
      "sentence": "The generous benefactor was honored by the community for his noble ______ of charity.",
      "translation": "这位慷慨的捐助者因其崇高的慈善善举而受到社区的隆重表彰。",
      "original": "The generous benefactor was honored by the community for his noble deed of charity."
    },
    "form_confusables": [
      {
        "word": "deed",
        "zh": "行为；契约"
      },
      {
        "word": "dead",
        "zh": "死亡的"
      },
      {
        "word": "feed",
        "zh": "喂养；饲料"
      },
      {
        "word": "seed",
        "zh": "种子"
      }
    ],
    "semantic_confusables": [
      {
        "word": "deed",
        "zh": "显著事迹；善行恶行"
      },
      {
        "word": "exploit",
        "zh": "辉煌功勋；英勇业绩"
      },
      {
        "word": "act",
        "zh": "单一行为；法令"
      },
      {
        "word": "feat",
        "zh": "卓越技艺；壮举"
      }
    ],
    "notes": "【搭配考点】good deed (善行好事)，noble deed (崇高事迹)，title deed (产权证书)；【形近辨析】dead (死去的)，feed (喂养)，seed (种子)；【近义辨析】deed 偏文学庄重语体，专指具有道德评价意义的善行、暴行或具有法律效力的房产契约地契；exploit 强调在战场或探险中立下的名垂青史的英雄伟业，act 泛指人类一切瞬时的具体行动行为，feat 侧重克服巨大身体或智力极限完成的高难惊人壮举。"
  },
  "behave": {
    "word": "behave",
    "translation": "表现；举止端正；运转",
    "cloze": {
      "sentence": "Parents instructed their young children to ______ politely during the formal banquet.",
      "translation": "父母嘱咐年幼的孩子们在正式宴会期间举止要礼貌得体。",
      "original": "Parents instructed their young children to behave politely during the formal banquet."
    },
    "form_confusables": [
      {
        "word": "behave",
        "zh": "表现；守规矩"
      },
      {
        "word": "behalf",
        "zh": "代表；利益"
      },
      {
        "word": "believe",
        "zh": "相信"
      },
      {
        "word": "bereave",
        "zh": "使丧亲痛失"
      }
    ],
    "semantic_confusables": [
      {
        "word": "behave",
        "zh": "表现得体；守规矩"
      },
      {
        "word": "conduct",
        "zh": "为人处世；表现"
      },
      {
        "word": "act",
        "zh": "行事；表现"
      },
      {
        "word": "deport",
        "zh": "举止端正；驱逐"
      }
    ],
    "notes": "【搭配考点】behave oneself (守规矩/举止得体)，behave well/badly (表现好/差)；【形近辨析】behalf (在...利益代表下)，believe (笃信)，bereave (剥夺夺走亲人)；【近义辨析】behave 不及物动词单用时专指孩子或当事人懂得规矩礼貌、不做越轨行为；conduct 反身动词兼及物动词侧重成人在严肃社会职业场合的举止风度品行，act 强调在特定瞬间采取的针对性对策举动，deport 作行为解时属典雅古语强调仪态风度。"
  },
  "active": {
    "word": "active",
    "translation": "活跃的；积极的；现役的；起作用的",
    "cloze": {
      "sentence": "Senior citizens are strongly encouraged to stay physically ______ through daily walking.",
      "translation": "强烈鼓励老年人通过日常散步来保持身体活跃。",
      "original": "Senior citizens are strongly encouraged to stay physically active through daily walking."
    },
    "form_confusables": [
      {
        "word": "active",
        "zh": "活跃的；积极的"
      },
      {
        "word": "action",
        "zh": "行动；诉讼"
      },
      {
        "word": "actor",
        "zh": "演员"
      },
      {
        "word": "captive",
        "zh": "被俘虏的；俘虏"
      }
    ],
    "semantic_confusables": [
      {
        "word": "active",
        "zh": "身心活跃的；起作用的"
      },
      {
        "word": "energetic",
        "zh": "精力充沛的"
      },
      {
        "word": "dynamic",
        "zh": "充满活力的；动力的"
      },
      {
        "word": "vigorous",
        "zh": "强有力的；充满生机的"
      }
    ],
    "notes": "【搭配考点】stay active (保持活跃)，take an active part in (积极参加)，active service/duty (现役)；【形近辨析】action (行动行为)，actor (男演员)，captive (战俘被囚禁的)；【近义辨析】active 强调经常处于运动、劳作、参与活动的状态，不懒散闲置；energetic 侧重内生精力极其充沛像有使不完的劲，dynamic 侧重性格或系统充满变革活力与创新精神，vigorous 侧重肌肉力量强劲、生长旺盛茁壮。"
  },
  "react": {
    "word": "react",
    "translation": "反应；做出反应；起化学反应；反抗",
    "cloze": {
      "sentence": "Financial markets tend to ______ volatilely whenever unexpected interest rate hikes occur.",
      "translation": "每当出现意料之外的加息时，金融市场往往会剧烈波动。",
      "original": "Financial markets tend to react volatilely whenever unexpected interest rate hikes occur."
    },
    "form_confusables": [
      {
        "word": "react",
        "zh": "反应；起化学反应"
      },
      {
        "word": "reject",
        "zh": "拒绝；驳回"
      },
      {
        "word": "retract",
        "zh": "收回；缩回"
      },
      {
        "word": "redact",
        "zh": "编辑；隐去保密字句"
      }
    ],
    "semantic_confusables": [
      {
        "word": "react",
        "zh": "受刺激做出反应"
      },
      {
        "word": "respond",
        "zh": "回复；响应对策"
      },
      {
        "word": "reply",
        "zh": "口头或书面答复"
      },
      {
        "word": "counteract",
        "zh": "抵消；中和"
      }
    ],
    "notes": "【搭配考点】react to (对...做出反应)，react with (与...起化学反应)，react against (反抗/反对)；【形近辨析】reject (断然拒绝)，retract (撤回收回声明)，redact (隐去保密字句)；【近义辨析】react 强调在受到外部刺激、事件冲击后不由自主或本能地产生的应激反应；respond 侧重深思熟虑后给出针对性的回应或行动对策，reply 侧重口头或信件上的语言问答回复，counteract 强调施加反向力量以抵消中和某种不良影响。"
  },
  "exact": {
    "word": "exact",
    "translation": "准确的；严谨的；精确的；强求",
    "cloze": {
      "sentence": "Detectives worked painstakingly to establish the ______ timeline of events on the night of the crime.",
      "translation": "侦探们费尽心思地确定案发当晚事件发生的精确时间线。",
      "original": "Detectives worked painstakingly to establish the exact timeline of events on the night of the crime."
    },
    "form_confusables": [
      {
        "word": "exact",
        "zh": "精确的；准确的"
      },
      {
        "word": "expect",
        "zh": "期待；预期"
      },
      {
        "word": "exalt",
        "zh": "提拔；歌颂"
      },
      {
        "word": "enact",
        "zh": "制定法律；通过"
      }
    ],
    "semantic_confusables": [
      {
        "word": "exact",
        "zh": "分毫不差的；严密的"
      },
      {
        "word": "precise",
        "zh": "细致精确的"
      },
      {
        "word": "accurate",
        "zh": "符合事实无差错的"
      },
      {
        "word": "correct",
        "zh": "正确的；无误的"
      }
    ],
    "notes": "【搭配考点】exact words/amount (原话/确切金额)，to be exact (确切地说)，exact a toll on (带来沉重代价)；【形近辨析】expect (期盼预料)，exalt (高度赞扬/拔高)，enact (立法颁布)；【近义辨析】exact 强调在数据、细节、字句上完全契合、分毫不差，排斥任何微小容差；precise 侧重测量或界定边界极其精细工整，accurate 强调与客观真实标准吻合没有差错，correct 侧重符合既定规矩事实或答案无误。"
  },
  "actual": {
    "word": "actual",
    "translation": "实际的；真实的；现实的",
    "cloze": {
      "sentence": "The ______ expenditure on the stadium construction far exceeded the initial budget estimate.",
      "translation": "体育场建设的实际支出远远超出了最初的预算估算。",
      "original": "The actual expenditure on the stadium construction far exceeded the initial budget estimate."
    },
    "form_confusables": [
      {
        "word": "actual",
        "zh": "实际的；真实的"
      },
      {
        "word": "factual",
        "zh": "基于事实的"
      },
      {
        "word": "annual",
        "zh": "年度的"
      },
      {
        "word": "casual",
        "zh": "偶然的；随意的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "actual",
        "zh": "现实中真实存在的"
      },
      {
        "word": "real",
        "zh": "真实的；非人工的"
      },
      {
        "word": "tangible",
        "zh": "有形的；可触摸感知的"
      },
      {
        "word": "genuine",
        "zh": "真诚的；名副其实的"
      }
    ],
    "notes": "【搭配考点】actual cost/fact (实际成本/事实真相)，in actual fact (事实上/实际上)；【形近辨析】factual (基于证据事实的)，annual (每年的)，casual (漫不经心的)；【近义辨析】actual 强调与理论假设、账面数字或想象相对照之下的客观现实存在；real 强调存在性（非虚构、非人工伪造），tangible 侧重具有物理实体可以触摸抓取感知，genuine 专指物品真伪或感情真诚名副其实。"
  },
  "practical": {
    "word": "practical",
    "translation": "实用的；实际的；务实的；实践的",
    "cloze": {
      "sentence": "The vocational college places great emphasis on developing ______ technical skills for real-world employment.",
      "translation": "这所职业学院高度重视培养面向现实就业的实用技术技能。",
      "original": "The vocational college places great emphasis on developing practical technical skills for real-world employment."
    },
    "form_confusables": [
      {
        "word": "practical",
        "zh": "实用的；实际的"
      },
      {
        "word": "practice",
        "zh": "练习；实践"
      },
      {
        "word": "practiced",
        "zh": "熟练的"
      },
      {
        "word": "partial",
        "zh": "部分的；偏袒的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "practical",
        "zh": "面向应用的；务实的"
      },
      {
        "word": "pragmatic",
        "zh": "务实的；重实效的"
      },
      {
        "word": "functional",
        "zh": "功能性的；实用的"
      },
      {
        "word": "realistic",
        "zh": "现实的；脚踏实地的"
      }
    ],
    "notes": "【搭配考点】practical experience/skills (实践经验/实用技能)，for all practical purposes (实际上/事实上)；【形近辨析】practice (名词练习实践)，practiced (熟稔老练的)，partial (局部偏心的)；【近义辨析】practical 侧重能够用于实际生活生产中行之有效、具有实用价值；pragmatic 强调从功利、现实利益出发不拘泥于意识形态的务实态度，functional 侧重满足基本功能使用无需华丽装饰，realistic 强调立足客观现实不抱幻想。"
  },
  "virtual": {
    "word": "virtual",
    "translation": "实质上的；几乎是...的；虚拟的",
    "cloze": {
      "sentence": "The museum created an immersive ______ tour enabling art lovers to explore the galleries from home.",
      "translation": "该博物馆创建了一个沉浸式虚拟导览，使艺术爱好者能够足不出户探索各个展厅。",
      "original": "The museum created an immersive virtual tour enabling art lovers to explore the galleries from home."
    },
    "form_confusables": [
      {
        "word": "virtual",
        "zh": "虚拟的；实质上的"
      },
      {
        "word": "virtue",
        "zh": "美德；德行"
      },
      {
        "word": "visual",
        "zh": "视觉的"
      },
      {
        "word": "vital",
        "zh": "至关重要的；生机勃勃的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "virtual",
        "zh": "计算机虚拟模拟的"
      },
      {
        "word": "simulated",
        "zh": "仿真模拟的"
      },
      {
        "word": "cyber",
        "zh": "网络数字的"
      },
      {
        "word": "implicit",
        "zh": "隐含的；实质上的"
      }
    ],
    "notes": "【搭配考点】virtual reality (虚拟现实VR)，virtual tour/classroom (虚拟游览/在线课堂)，virtual monopoly (实质上的垄断)；【形近辨析】virtue (品德美德)，visual (肉眼视觉的)，vital (生命攸关的)；【近义辨析】virtual 作计算机术语指通过数字算法在屏幕上模拟构建但非物理实体的存在，作引申义指虽无名义但实质上已无异于；simulated 侧重人工模仿制造以用于训练的仿真模拟环境，cyber 专指与互联网电脑网络空间相关，implicit 强调言语中隐含暗示而非表面明示。"
  },
  "fragment": {
    "word": "fragment",
    "translation": "碎片；片段；破裂成碎片",
    "cloze": {
      "sentence": "Archaeologists pieced together every pottery ______ to reconstruct the prehistoric cooking vessel.",
      "translation": "考古学家拼凑起每一个陶器碎片，以复原这件史前炊具。",
      "original": "Archaeologists pieced together every pottery fragment to reconstruct the prehistoric cooking vessel."
    },
    "form_confusables": [
      {
        "word": "fragment",
        "zh": "碎片；破裂"
      },
      {
        "word": "fragrant",
        "zh": "芬芳的；香的"
      },
      {
        "word": "flagrant",
        "zh": "公然的；罪恶昭彰的"
      },
      {
        "word": "pigment",
        "zh": "颜料；色素"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fragment",
        "zh": "破碎碎片；残片"
      },
      {
        "word": "shard",
        "zh": "锐利坚硬碎片"
      },
      {
        "word": "scrap",
        "zh": "碎料；废料"
      },
      {
        "word": "remnant",
        "zh": "残余物；幸存者"
      }
    ],
    "notes": "【搭配考点】pottery/glass fragment (陶器/玻璃碎片)，fragment of conversation (谈话片段)；【形近辨析】fragrant (香气扑鼻的)，flagrant (明目张胆肆无忌惮的)，pigment (颜料色素)；【近义辨析】fragment 强调坚硬物体被打碎、炸裂后脱落的不规则残破小块，或思想记忆残片；shard 专指陶瓷、玻璃等锋利割手的锐利碎片，scrap 强调纸张、布头、金属废料等零碎丢弃物，remnant 强调宏大整体被消耗摧毁后幸存遗留下的残余存留。"
  },
  "somewhat": {
    "word": "somewhat",
    "translation": "稍微；有点；有些",
    "cloze": {
      "sentence": "The final cost of the home renovation turned out to be ______ higher than our original estimate.",
      "translation": "房屋装修的最终费用结果比我们最初的估算稍微高了一些。",
      "original": "The final cost of the home renovation turned out to be somewhat higher than our original estimate."
    },
    "form_confusables": [
      {
        "word": "somewhat",
        "zh": "稍微；有点"
      },
      {
        "word": "somewhere",
        "zh": "某处"
      },
      {
        "word": "somehow",
        "zh": "不知何故；以某种方式"
      },
      {
        "word": "someone",
        "zh": "某人"
      }
    ],
    "semantic_confusables": [
      {
        "word": "somewhat",
        "zh": "稍微；略微"
      },
      {
        "word": "slightly",
        "zh": "轻微地；细微地"
      },
      {
        "word": "rather",
        "zh": "相当；颇为"
      },
      {
        "word": "moderately",
        "zh": "适度地；温和地"
      }
    ],
    "notes": "【搭配考点】somewhat surprised/disappointed (有些吃惊/失望)，somewhat different/higher (稍微不同/高出一些)；【形近辨析】somewhere (在某地点)，somehow (莫名其妙地/设法)，someone (某个人)；【近义辨析】somewhat 正式程度高于 a bit，修饰形容词副词强调程度有限、客观可察觉；slightly 侧重在幅度数值上极其微弱轻细的变动，rather 侧重超越预期的一定程度，moderately 侧重保持在中等适度区间。"
  },
  "fraction": {
    "word": "fraction",
    "translation": "小部分；微量；分数；破片",
    "cloze": {
      "sentence": "Due to high subsidies, commuters pay only a small ______ of the actual transportation cost.",
      "translation": "由于高额补贴，通勤者只需支付实际交通成本的一小部分。",
      "original": "Due to high subsidies, commuters pay only a small fraction of the actual transportation cost."
    },
    "form_confusables": [
      {
        "word": "fraction",
        "zh": "小部分；分数"
      },
      {
        "word": "friction",
        "zh": "摩擦；冲突"
      },
      {
        "word": "faction",
        "zh": "派系；小集团"
      },
      {
        "word": "fracture",
        "zh": "骨折；破裂"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fraction",
        "zh": "微小比例份额；分数"
      },
      {
        "word": "portion",
        "zh": "一份；某一部分"
      },
      {
        "word": "percentage",
        "zh": "百分比"
      },
      {
        "word": "component",
        "zh": "组成成分；部件"
      }
    ],
    "notes": "【搭配考点】a fraction of (仅仅一小部分/极小份额)，fraction of a second (一刹那/一瞬间)；【形近辨析】friction (物理摩擦/人际摩擦)，faction (政治派系斗争)，fracture (骨裂断裂)；【近义辨析】fraction 专指与庞大整体相比微乎其微的极小一部分；portion 强调经过切分分配给特定对象享用的一份，percentage 侧重按百进制量化的比例，component 侧重构成复杂机器或系统的关键功能构件。"
  },
  "portion": {
    "word": "portion",
    "translation": "一部分；一份食物；分配",
    "cloze": {
      "sentence": "The restaurant is famous for serving a generous ______ of pasta with every order.",
      "translation": "这家餐厅以每份订单都提供分量十足的意大利面而闻名。",
      "original": "The restaurant is famous for serving a generous portion of pasta with every order."
    },
    "form_confusables": [
      {
        "word": "portion",
        "zh": "一份；一部分"
      },
      {
        "word": "potion",
        "zh": "魔药；药剂"
      },
      {
        "word": "position",
        "zh": "位置；职位"
      },
      {
        "word": "partition",
        "zh": "隔断；分割"
      }
    ],
    "semantic_confusables": [
      {
        "word": "portion",
        "zh": "一人份食物；所分得部分"
      },
      {
        "word": "serving",
        "zh": "一餐份量；一份饭菜"
      },
      {
        "word": "share",
        "zh": "应得份额；股份"
      },
      {
        "word": "segment",
        "zh": "切片；部分"
      }
    ],
    "notes": "【搭配考点】generous/small portion (大/小份食物)，portion of one's income (收入的一部分)；【形近辨析】potion (毒药水/魔法药剂)，position (社会地位岗位)，partition (室内隔断墙/国土分裂)；【近义辨析】portion 强调从整体中切割划拨出来供一人享用或专门处置的特定份额或食物份量；serving 专指菜单标明的一盘饭菜份量，share 侧重个人在财产、权益中按比例应得的一份，segment 侧重水果橘瓣或圆形图表中的扇形自然切段。"
  },
  "proportion": {
    "word": "proportion",
    "translation": "比例；占比；均衡；面积；部分",
    "cloze": {
      "sentence": "A significant ______ of the municipal budget was allocated to upgrading public schools.",
      "translation": "市政预算中很大一部分被拨用于改善公立学校。",
      "original": "A significant proportion of the municipal budget was allocated to upgrading public schools."
    },
    "form_confusables": [
      {
        "word": "proportion",
        "zh": "比例；均衡"
      },
      {
        "word": "proposition",
        "zh": "提议；命题"
      },
      {
        "word": "preparation",
        "zh": "准备；预备"
      },
      {
        "word": "projection",
        "zh": "投影；预测"
      }
    ],
    "semantic_confusables": [
      {
        "word": "proportion",
        "zh": "局部占比；比例均衡"
      },
      {
        "word": "percentage",
        "zh": "百分比率"
      },
      {
        "word": "ratio",
        "zh": "相对比率"
      },
      {
        "word": "quota",
        "zh": "配额；定额"
      }
    ],
    "notes": "【搭配考点】in proportion to (与...成比例)，out of all proportion (极不成比例/夸大)，sense of proportion (分寸感)；【形近辨析】proposition (商业主张/命题)，preparation (筹备工作)，projection (财务预测/投影)；【近义辨析】proportion 强调某个局部在总体中所占的比重份额，或艺术构图中各部分尺寸协调匀称的美感；percentage 带有百进制计算色彩，ratio 侧重A与B两组数值的除法比值，quota 强调官方分配给企业或港口的强制性上限配额指标。"
  },
  "skeleton": {
    "word": "skeleton",
    "translation": "骨架；骨骼；骨瘦如柴的人；最简骨干",
    "cloze": {
      "sentence": "Anatomy students assembled a full plastic ______ to study human bone structures.",
      "translation": "解剖学专业的学生组装了一副完整的塑料人体骨架，以研究人体骨骼结构。",
      "original": "Anatomy students assembled a full plastic skeleton to study human bone structures."
    },
    "form_confusables": [
      {
        "word": "skeleton",
        "zh": "骨架；骨骼"
      },
      {
        "word": "seldom",
        "zh": "很少；罕见"
      },
      {
        "word": "solemn",
        "zh": "庄严的；严肃的"
      },
      {
        "word": "skillet",
        "zh": "长柄平底煎锅"
      }
    ],
    "semantic_confusables": [
      {
        "word": "skeleton",
        "zh": "生理骨架；最核心纲要"
      },
      {
        "word": "framework",
        "zh": "理论构架；骨架"
      },
      {
        "word": "bone",
        "zh": "单根骨头"
      },
      {
        "word": "armature",
        "zh": "雕塑内胆骨架"
      }
    ],
    "notes": "【搭配考点】skeleton staff/crew (骨干维保人员/最低限度编制人员)，skeleton in the closet (家丑/隐秘)；【形近辨析】seldom (难得很少)，solemn (庄严庄重的)，skillet (煎锅)；【近义辨析】skeleton 专指动物人体的全套骨骼骨架，或引申为剥离了一切修饰皮肉的最简陋骨架、核心梗概；framework 侧重建筑物钢架或法律学术的深层理论架构，bone 仅指单独一块骨质，armature 专指泥塑内部的金属支撑内架。"
  },
  "frame": {
    "word": "frame",
    "translation": "框架；画框；身材；构成；陷害",
    "cloze": {
      "sentence": "She placed the family photograph inside an ornate silver ______ on her bedside table.",
      "translation": "她将全家福照片装在床头柜上一个华丽的银色相框内。",
      "original": "She placed the family photograph inside an ornate silver frame on her bedside table."
    },
    "form_confusables": [
      {
        "word": "frame",
        "zh": "框架；相框"
      },
      {
        "word": "flame",
        "zh": "火焰；光芒"
      },
      {
        "word": "fame",
        "zh": "名声；名望"
      },
      {
        "word": "flare",
        "zh": "闪烁；闪光弹"
      }
    ],
    "semantic_confusables": [
      {
        "word": "frame",
        "zh": "边框；结构构架"
      },
      {
        "word": "border",
        "zh": "边界；边缘镶边"
      },
      {
        "word": "casing",
        "zh": "外壳；套管"
      },
      {
        "word": "chassis",
        "zh": "汽车底盘；机箱底架"
      }
    ],
    "notes": "【搭配考点】frame of mind (心境/心态)，picture/window frame (相框/窗框)，frame an innocent suspect (构陷无辜嫌疑人)；【形近辨析】flame (烈火火焰)，fame (赫赫名声)，flare (照明弹闪烁)；【近义辨析】frame 强调环绕并支撑画作、镜子、门窗四周的硬质外边框结构，或人体骨骼体格；border 侧重平面的色彩花纹镶边或国家地理边界线，casing 强调紧密包裹机械零件的密封防护外壳，chassis 专指承载汽车车身与引擎的底盘总成。"
  },
  "framework": {
    "word": "framework",
    "translation": "框架；体系；体制；构架",
    "cloze": {
      "sentence": "The treaty established a binding regulatory ______ to control cross-border carbon emissions.",
      "translation": "该条约确立了一个具有约束力的监管框架，以控制跨国碳排放。",
      "original": "The treaty established a binding regulatory framework to control cross-border carbon emissions."
    },
    "form_confusables": [
      {
        "word": "framework",
        "zh": "体系；框架"
      },
      {
        "word": "network",
        "zh": "网络；人脉网"
      },
      {
        "word": "patchwork",
        "zh": "拼缝物；拼凑物"
      },
      {
        "word": "fieldwork",
        "zh": "实地考察野外工作"
      }
    ],
    "semantic_confusables": [
      {
        "word": "framework",
        "zh": "制度法律结构；理论体系"
      },
      {
        "word": "structure",
        "zh": "建筑结构；组织构成"
      },
      {
        "word": "scheme",
        "zh": "策划机制；方案"
      },
      {
        "word": "infrastructure",
        "zh": "基础设施；基建"
      }
    ],
    "notes": "【搭配考点】legal/conceptual framework (法律体系/概念框架)，within the framework of (在...体制框架之内)；【形近辨析】network (人际网络/通信网络)，patchwork (拼布百纳被/拼凑体系)，fieldwork (实地田野调查)；【近义辨析】framework 强调由各项法律条文、思想原则或概念搭建起来的宏观支撑架构体系；structure 侧重各构件实体的组织方式，scheme 强调经过规划设计的操作机制方案，infrastructure 强调铁路水利电网等公共物理底座。"
  },
  "flame": {
    "word": "flame",
    "translation": "火焰；火舌；热情；光芒；燃烧",
    "cloze": {
      "sentence": "The Olympic ______ was carried through dozens of cities before reaching the stadium.",
      "translation": "奥运圣火在抵达体育场之前，穿过了数十座城市进行传递。",
      "original": "The Olympic flame was carried through dozens of cities before reaching the stadium."
    },
    "form_confusables": [
      {
        "word": "flame",
        "zh": "火焰；光芒"
      },
      {
        "word": "frame",
        "zh": "框架；身材"
      },
      {
        "word": "blame",
        "zh": "责怪；归咎于"
      },
      {
        "word": "tame",
        "zh": "驯服的；温顺的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "flame",
        "zh": "明火火舌；烈焰"
      },
      {
        "word": "fire",
        "zh": "火灾；炉火"
      },
      {
        "word": "blaze",
        "zh": "熊熊烈火；光芒"
      },
      {
        "word": "flare",
        "zh": "突发强光；耀斑"
      }
    ],
    "notes": "【搭配考点】burst into flame (突然起火/迸发火焰)，Olympic flame (奥运圣火)，fan the flames (煽风点火)；【形近辨析】frame (镜框架构)，blame (责备抱怨)，tame (驯化家养)；【近义辨析】flame 专指由燃烧气体发光显现出的单一、跃动发亮的火舌火焰；fire 泛指一切产生热与灰烬的燃烧现象或火灾，blaze 强调声势浩大光芒万丈的漫天大火，flare 强调突然猛烈爆发后迅速减退的耀眼闪光。"
  },
  "burn": {
    "word": "burn",
    "translation": "燃烧；烧伤；灼热；激怒",
    "cloze": {
      "sentence": "Campers gathered dry pine branches to ______ a welcoming fire in the chilly evening.",
      "translation": "露营者收集干燥的松枝，在寒冷的傍晚生火取暖。",
      "original": "Campers gathered dry pine branches to burn a welcoming fire in the chilly evening."
    },
    "form_confusables": [
      {
        "word": "burn",
        "zh": "燃烧；烧伤"
      },
      {
        "word": "born",
        "zh": "出生的"
      },
      {
        "word": "turn",
        "zh": "转变；旋转"
      },
      {
        "word": "bury",
        "zh": "埋葬；隐藏"
      }
    ],
    "semantic_confusables": [
      {
        "word": "burn",
        "zh": "消耗燃料燃烧；灼伤"
      },
      {
        "word": "ignite",
        "zh": "点燃；引燃"
      },
      {
        "word": "combust",
        "zh": "燃烧；发生燃烧反应"
      },
      {
        "word": "scorch",
        "zh": "烧焦；烤焦表面"
      }
    ],
    "notes": "【搭配考点】burn calories/fuel (消耗卡路里/燃烧燃料)，burn out (筋疲力尽/燃尽)，burn with curiosity (充满好奇心)；【形近辨析】born (bear过去分词出生)，turn (转动扭转)，bury (掩埋掩盖)；【近义辨析】burn 是最广泛使用的动词，指物体被火氧化消耗发光发热，或皮肤遭受热力灼伤；ignite 强调点火引燃的起始瞬间动作，combust 属专业化学科技术语指发生燃烧反应，scorch 强调高温仅将织物纸张表面烤黄烤焦并未彻底化为灰烬。"
  },
  "flash": {
    "word": "flash",
    "translation": "闪光；闪现；手电筒；快速展示",
    "cloze": {
      "sentence": "A sudden ______ of lightning illuminated the dark stormy sky for a split second.",
      "translation": "一道突如其来的闪电瞬间照亮了漆黑风暴的天空。",
      "original": "A sudden flash of lightning illuminated the dark stormy sky for a split second."
    },
    "form_confusables": [
      {
        "word": "flash",
        "zh": "闪光；闪现"
      },
      {
        "word": "flesh",
        "zh": "肉体；果肉"
      },
      {
        "word": "flush",
        "zh": "脸红；冲马桶"
      },
      {
        "word": "flask",
        "zh": "烧瓶；保温壶"
      }
    ],
    "semantic_confusables": [
      {
        "word": "flash",
        "zh": "刹那骤亮闪光"
      },
      {
        "word": "spark",
        "zh": "火花；电火星"
      },
      {
        "word": "gleam",
        "zh": "隐约微光；微露"
      },
      {
        "word": "glitter",
        "zh": "闪烁光斑；灿烂"
      }
    ],
    "notes": "【搭配考点】flash of lightning/inspiration (闪电/灵光一闪)，in a flash (转眼间/一瞬间)，flash a badge (亮出徽章)；【形近辨析】flesh (血肉果肉)，flush (面部潮红/冲水)，flask (化学烧瓶/随身扁酒壶)；【近义辨析】flash 强调骤然出现又刹那消失的极强单次光芒，比喻灵感稍纵即逝；spark 专指两块铁石摩擦击打崩溅出的小火星火花，gleam 侧重在暗处透过微隙隐约透出的柔和光线，glitter 侧重钻石碎片折射出的连续多角度细碎闪烁光芒。"
  },
  "flesh": {
    "word": "flesh",
    "translation": "肉体；肌肉；果肉；血肉之躯",
    "cloze": {
      "sentence": "The juicy sweet ______ of the ripe peach melted deliciously on the tongue.",
      "translation": "成熟桃子多汁甜美的果肉在舌尖美妙地融化。",
      "original": "The juicy sweet flesh of the ripe peach melted deliciously on the tongue."
    },
    "form_confusables": [
      {
        "word": "flesh",
        "zh": "肉体；果肉"
      },
      {
        "word": "flash",
        "zh": "闪光；闪现"
      },
      {
        "word": "fresh",
        "zh": "新鲜的；清新的"
      },
      {
        "word": "flee",
        "zh": "逃跑；逃走"
      }
    ],
    "semantic_confusables": [
      {
        "word": "flesh",
        "zh": "人兽活体之肉；植物果肉"
      },
      {
        "word": "meat",
        "zh": "食用肉类"
      },
      {
        "word": "pulp",
        "zh": "果肉软浆；纸浆"
      },
      {
        "word": "muscle",
        "zh": "肌肉；体能"
      }
    ],
    "notes": "【搭配考点】flesh and blood (血肉之躯/亲骨肉)，in the flesh (本人亲自到场)，flesh out a plan (充实方案细节)；【形近辨析】flash (闪电闪亮)，fresh (新鲜鲜活)，flee (逃亡逃遁)；【近义辨析】flesh 专指活人活兽包裹在骨骼外面的软组织，或水果多汁厚实的果肉层；meat 专指经过宰杀后供烹饪食用的动物肉类，pulp 强调水果被捣烂挤压后的粘稠果泥软浆，muscle 专指具备收缩舒张功能的肌肉组织纤维。"
  },
  "fresh": {
    "word": "fresh",
    "translation": "新鲜的；清新的；刚经历的；淡水的",
    "cloze": {
      "sentence": "Local markets receive daily deliveries of ______ vegetables directly from surrounding organic farms.",
      "translation": "当地市场每天都会收到直接来自周边有机农场的鲜蔬配送。",
      "original": "Local markets receive daily deliveries of fresh vegetables directly from surrounding organic farms."
    },
    "form_confusables": [
      {
        "word": "fresh",
        "zh": "新鲜的；清新的"
      },
      {
        "word": "flesh",
        "zh": "血肉；果肉"
      },
      {
        "word": "free",
        "zh": "自由的；免费的"
      },
      {
        "word": "freeze",
        "zh": "结冰；冷冻"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fresh",
        "zh": "刚采摘未变质的；清新的"
      },
      {
        "word": "crisp",
        "zh": "松脆的；清爽新鲜的"
      },
      {
        "word": "refreshing",
        "zh": "使人爽快的；提神的"
      },
      {
        "word": "novel",
        "zh": "新颖别致的"
      }
    ],
    "notes": "【搭配考点】fresh air/water (新鲜空气/淡水)，fresh start (崭新起点)，fresh in one's mind (记忆犹新)；【形近辨析】flesh (肉体果肉)，free (免费自由)，freeze (冰冻冷藏)；【近义辨析】fresh 强调刚生产制作采摘出来、未经陈放变质处于最佳品质状态，或水流未被盐碱矿化；crisp 强调果蔬多汁脆爽咬下去咔嚓作响，refreshing 侧重使疲惫身心重新恢复活力清爽，novel 强调构思立意别出心裁前所未见。"
  },
  "refresh": {
    "word": "refresh",
    "translation": "使清新；恢复精力；刷新；提神",
    "cloze": {
      "sentence": "A cool splash of water on the face helped to ______ the tired driver during the night journey.",
      "translation": "在夜间行车途中，往脸上泼一些凉水有助于让疲倦的司机恢复清醒。",
      "original": "A cool splash of water on the face helped to refresh the tired driver during the night journey."
    },
    "form_confusables": [
      {
        "word": "refresh",
        "zh": "使清新；刷新"
      },
      {
        "word": "fresh",
        "zh": "新鲜的"
      },
      {
        "word": "reform",
        "zh": "改革；改良"
      },
      {
        "word": "repress",
        "zh": "压制；抑制"
      }
    ],
    "semantic_confusables": [
      {
        "word": "refresh",
        "zh": "恢复活力精神；刷新"
      },
      {
        "word": "revitalize",
        "zh": "使恢复生机活力"
      },
      {
        "word": "rejuvenate",
        "zh": "重现青春；年轻态"
      },
      {
        "word": "renew",
        "zh": "更新；恢复"
      }
    ],
    "notes": "【搭配考点】refresh one's memory (唤醒记忆)，refresh the webpage (刷新网页)，refreshing drink (提神解渴饮料)；【形近辨析】fresh (形容词新鲜)，reform (体制改革)，repress (严酷压制压抑)；【近义辨析】refresh 强调经过休息、冲凉洗脸或饮品让疲倦的身体脑力重新清醒舒适；revitalize 侧重让濒临破产的企业或衰落的社区重新焕发生机与活力，rejuvenate 侧重容颜精神返老还童重现年轻态，renew 强调合同到期续约或对誓言重新确认。"
  },
  "flourish": {
    "word": "flourish",
    "translation": "繁荣；昌盛；茂盛；挥舞",
    "cloze": {
      "sentence": "Indigenous arts and cultural traditions began to ______ under dedicated government sponsorship.",
      "translation": "在政府的专项资助下，本土艺术和文化传统开始蓬勃繁荣发展。",
      "original": "Indigenous arts and cultural traditions began to flourish under dedicated government sponsorship."
    },
    "form_confusables": [
      {
        "word": "flourish",
        "zh": "繁荣；茂盛"
      },
      {
        "word": "polish",
        "zh": "磨光；润色"
      },
      {
        "word": "nourish",
        "zh": "滋养；养育"
      },
      {
        "word": "furnish",
        "zh": "配备家具；提供"
      }
    ],
    "semantic_confusables": [
      {
        "word": "flourish",
        "zh": "蓬勃繁荣；旺盛发展"
      },
      {
        "word": "thrive",
        "zh": "兴旺繁盛；茁壮成长"
      },
      {
        "word": "prosper",
        "zh": "经济繁荣；飞黄腾达"
      },
      {
        "word": "bloom",
        "zh": "开花；大放异彩"
      }
    ],
    "notes": "【搭配考点】arts/economy flourish (艺术/经济繁荣昌盛)，with a flourish (华丽夸张地一挥)；【形近辨析】polish (打磨抛光/波兰的)，nourish (滋润养育)，furnish (布置家具/供应)；【近义辨析】flourish 侧重生命体在最佳生存环境下展现出最健康、繁茂、旺盛、生机盎然的顶峰状态；thrive 强调在严苛竞争考验中依然顽强旺盛生长，prosper 专指商业贸易在金钱物质上赚得盆满钵满飞黄腾达，bloom 侧重植物含苞盛开或少女容颜光彩照人。"
  },
  "flour": {
    "word": "flour",
    "translation": "面粉；谷物磨成的粉",
    "cloze": {
      "sentence": "Bakers sifted whole wheat ______ into a large ceramic mixing bowl.",
      "translation": "面包师将全麦面粉过筛倒入一个大陶瓷搅拌碗中。",
      "original": "Bakers sifted whole wheat flour into a large ceramic mixing bowl."
    },
    "form_confusables": [
      {
        "word": "flour",
        "zh": "面粉；谷物粉"
      },
      {
        "word": "flower",
        "zh": "花朵"
      },
      {
        "word": "floor",
        "zh": "地板；楼层"
      },
      {
        "word": "sour",
        "zh": "酸的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "flour",
        "zh": "谷物碾磨面粉"
      },
      {
        "word": "powder",
        "zh": "通用细粉末"
      },
      {
        "word": "meal",
        "zh": "粗磨谷粉；一餐"
      },
      {
        "word": "dust",
        "zh": "灰尘；尘土"
      }
    ],
    "notes": "【搭配考点】wheat flour (小麦面粉)，sift flour (过筛面粉)，flour and water (面粉和水)；【形近辨析】flower (花卉盛开)，floor (建筑楼层地面)，sour (酸味败坏)；【近义辨析】flour 专指由小麦、黑麦等谷物经石磨或机械研磨而成的烹饪烘焙面粉；powder 泛指任何固体物质被捣碎研磨成的细微干粉末，meal 专指玉米或燕麦粗粗磨出的颗粒较粗的粗粉，dust 专指自然积攒飘浮在空气中的微尘碎屑。"
  },
  "powder": {
    "word": "powder",
    "translation": "粉末；细粉；扑粉；抹粉",
    "cloze": {
      "sentence": "The pharmacist crushed the medicinal tablets into a fine ______ for the young child.",
      "translation": "药剂师将药片捣碎成细腻的粉末供年幼的孩子服用。",
      "original": "The pharmacist crushed the medicinal tablets into a fine powder for the young child."
    },
    "form_confusables": [
      {
        "word": "powder",
        "zh": "粉末；细粉"
      },
      {
        "word": "power",
        "zh": "权力；电能"
      },
      {
        "word": "ponder",
        "zh": "深思；沉思"
      },
      {
        "word": "pounder",
        "zh": "捣碎工具；重击者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "powder",
        "zh": "均匀细微粉末"
      },
      {
        "word": "dust",
        "zh": "浮尘；尘埃"
      },
      {
        "word": "flour",
        "zh": "面粉"
      },
      {
        "word": "grit",
        "zh": "粗砂；砂砾"
      }
    ],
    "notes": "【搭配考点】fine/coarse powder (细/粗粉末)，baking powder (发酵粉)，face powder (定妆粉/散粉)；【形近辨析】power (力量电力)，ponder (凝神深思)，pounder (捣碎工具)；【近义辨析】powder 专指通过机械研磨制成的质地干燥、颗粒微细的均匀固体粉末；dust 强调无需研磨、自然飘落或残留的无价值脏灰尘，flour 专用于谷物烘焙食品面粉，grit 专指坚硬粗糙有磨损性的小石子砂砾。"
  },
  "cure": {
    "word": "cure",
    "translation": "治愈；医治；解决；保存；疗法",
    "cloze": {
      "sentence": "Medical researchers worldwide are racing to find an effective ______ for Alzheimer's disease.",
      "translation": "世界各地的医学研究人员正在竞相寻找治疗阿尔茨海默病的有效疗法。",
      "original": "Medical researchers worldwide are racing to find an effective cure for Alzheimer's disease."
    },
    "form_confusables": [
      {
        "word": "cure",
        "zh": "治愈；疗法"
      },
      {
        "word": "pure",
        "zh": "纯洁的；纯正的"
      },
      {
        "word": "care",
        "zh": "关心；照料"
      },
      {
        "word": "curse",
        "zh": "诅咒；咒骂"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cure",
        "zh": "彻底根治疗法；解决之策"
      },
      {
        "word": "remedy",
        "zh": "补救办法；药物"
      },
      {
        "word": "treatment",
        "zh": "治疗过程；对待"
      },
      {
        "word": "therapy",
        "zh": "专业理疗；心理治疗"
      }
    ],
    "notes": "【搭配考点】cure for a disease (某疾病的根治疗法)，prevention is better than cure (预防胜于治疗)；【形近辨析】pure (纯净纯粹)，care (关怀关照)，curse (降灾诅咒)；【近义辨析】cure 强调彻底消除病因使患者完全康复痊愈的根除手段；remedy 侧重缓解症状的家庭小偏方或解决争端纠纷的补救措施，treatment 强调医生所施行的整个医疗用药过程，therapy 专指不用吃药开刀的长期心理疏导或物理康复理疗。"
  },
  "curious": {
    "word": "curious",
    "translation": "好奇的；求知欲强的；奇特古怪的",
    "cloze": {
      "sentence": "Children are naturally ______ about the animals and plants in the surrounding woods.",
      "translation": "孩子们天生对周围树林里的动植物充满了好奇心。",
      "original": "Children are naturally curious about the animals and plants in the surrounding woods."
    },
    "form_confusables": [
      {
        "word": "curious",
        "zh": "好奇的；奇特的"
      },
      {
        "word": "furious",
        "zh": "狂怒的；猛烈的"
      },
      {
        "word": "various",
        "zh": "多样的；各种各样的"
      },
      {
        "word": "serious",
        "zh": "严肃的；严重的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "curious",
        "zh": "充满探求求知欲的"
      },
      {
        "word": "inquisitive",
        "zh": "好问探究的；爱打听的"
      },
      {
        "word": "nosy",
        "zh": "爱管闲事打探的"
      },
      {
        "word": "intrigued",
        "zh": "深感兴趣被吸引的"
      }
    ],
    "notes": "【搭配考点】curious about (对...充满好奇)，curious coincidence (奇特的巧合)，out of curiosity (出于好奇)；【形近辨析】furious (暴怒盛怒)，various (各种各样的)，serious (严肃认真的)；【近义辨析】curious 强调发自本真、健康旺盛的求知探索欲望；inquisitive 偏向学术探究追根问底，nosy 贬义专指刺探邻里隐私爱管闲事的八卦心理，intrigued 强调被神秘复杂的事物深深吸引勾起极大探知兴趣。"
  },
  "accurate": {
    "word": "accurate",
    "translation": "精确的；准确无误的；正确的",
    "cloze": {
      "sentence": "The weather forecast proved remarkably ______ with rain beginning precisely at three o'clock.",
      "translation": "天气预报证明非常准确，降雨恰好在三点钟开始。",
      "original": "The weather forecast proved remarkably accurate with rain beginning precisely at three o'clock."
    },
    "form_confusables": [
      {
        "word": "accurate",
        "zh": "准确的；精确的"
      },
      {
        "word": "accuse",
        "zh": "指控；指责"
      },
      {
        "word": "acquire",
        "zh": "获得；习得"
      },
      {
        "word": "articulate",
        "zh": "表达清晰的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "accurate",
        "zh": "符合客观事实无误的"
      },
      {
        "word": "precise",
        "zh": "细致精确的"
      },
      {
        "word": "exact",
        "zh": "分毫不差的"
      },
      {
        "word": "factual",
        "zh": "基于事实证据的"
      }
    ],
    "notes": "【搭配考点】accurate description/record (准确的描述/记录)，accurate to within (精确到...以内)；【形近辨析】accuse (控诉指控)，acquire (习得收购)，articulate (口齿清晰表达)；【近义辨析】accurate 强调经得起检验核实、与客观事实完全相符毫无误差差错；precise 强调界限刻度划分极其细致入微，exact 强调分毫不差完全等同排斥任何微小容差，factual 强调句句有据、陈述纯粹基于客观事实。"
  },
  "secure": {
    "word": "secure",
    "translation": "安全的；牢固的；稳妥的；弄到；系紧",
    "cloze": {
      "sentence": "The promising startup managed to ______ five million dollars in venture capital funding.",
      "translation": "这家极具前景的初创企业成功争取到了五百万美元的风险投资资金。",
      "original": "The promising startup managed to secure five million dollars in venture capital funding."
    },
    "form_confusables": [
      {
        "word": "secure",
        "zh": "安全的；牢靠的；弄到"
      },
      {
        "word": "rescue",
        "zh": "救援；营救"
      },
      {
        "word": "secret",
        "zh": "秘密的"
      },
      {
        "word": "seduce",
        "zh": "引诱；勾引"
      }
    ],
    "semantic_confusables": [
      {
        "word": "secure",
        "zh": "设法弄到；使安全稳固"
      },
      {
        "word": "obtain",
        "zh": "正式获得；赢得"
      },
      {
        "word": "acquire",
        "zh": "收购；学到"
      },
      {
        "word": "anchor",
        "zh": "固定；使稳固"
      }
    ],
    "notes": "【搭配考点】secure funding/contracts (设法争取到资金/合同)，feel secure (感到有安全感)，secure a door/rope (把门关严/绳索系牢)；【形近辨析】rescue (援救解救)，secret (隐秘保密)，seduce (引诱诱惑)；【近义辨析】secure 及物动词专指历经艰辛努力或竞争谈判之后成功搞到手、牢牢锁定稀缺资源；obtain 强调通过合法申请、采购获得，acquire 侧重逐步自学掌握或公司巨资并购，anchor 强调如铁锚般牢固固定支撑。"
  },
  "rescue": {
    "word": "rescue",
    "translation": "营救；救援；拯救",
    "cloze": {
      "sentence": "Heroic firefighters rushed into the blazing apartment to ______ the trapped family.",
      "translation": "英勇的消防员冲进熊熊燃烧的公寓大楼，营救被困的一家人。",
      "original": "Heroic firefighters rushed into the blazing apartment to rescue the trapped family."
    },
    "form_confusables": [
      {
        "word": "rescue",
        "zh": "营救；救援"
      },
      {
        "word": "secure",
        "zh": "安全的；固定"
      },
      {
        "word": "residue",
        "zh": "残渣；余数"
      },
      {
        "word": "resume",
        "zh": "恢复；简历"
      }
    ],
    "semantic_confusables": [
      {
        "word": "rescue",
        "zh": "从危险中营救解救"
      },
      {
        "word": "save",
        "zh": "拯救；积攒"
      },
      {
        "word": "salvage",
        "zh": "抢救受损财产"
      },
      {
        "word": "deliver",
        "zh": "解救；交付"
      }
    ],
    "notes": "【搭配考点】rescue team/operation (救援队/救援行动)，come to the rescue (前来解围救助)；【形近辨析】secure (安全稳妥/系牢)，residue (化学残余物)，resume (重新开始/个人履历)；【近义辨析】rescue 强调置身生死悬于一线的绝险关头，采取紧急英勇行动将人抢救生还；save 范围最广可拯救灵魂、生命或积攒金钱，salvage 专指从沉船、火灾废墟中打捞抢救幸免于难的财物零件，deliver 强调从暴政苦难中使之得释放解脱。"
  },
  "injure": {
    "word": "injure",
    "translation": "伤害；损害；使受伤",
    "cloze": {
      "sentence": "The careless workplace accident could seriously ______ the company's hard-earned reputation.",
      "translation": "这起粗心大意导致的安全生产事故可能会严重损害公司好不容易赢得的声誉。",
      "original": "The careless workplace accident could seriously injure the company's hard-earned reputation."
    },
    "form_confusables": [
      {
        "word": "injure",
        "zh": "伤害；损害"
      },
      {
        "word": "endure",
        "zh": "忍耐；持久"
      },
      {
        "word": "ensure",
        "zh": "确保；保证"
      },
      {
        "word": "ignite",
        "zh": "点燃；激起"
      }
    ],
    "semantic_confusables": [
      {
        "word": "injure",
        "zh": "损害声誉；身体致伤"
      },
      {
        "word": "wound",
        "zh": "创伤；伤害"
      },
      {
        "word": "harm",
        "zh": "损害；危害"
      },
      {
        "word": "damage",
        "zh": "损坏物品；损害"
      }
    ],
    "notes": "【搭配考点】injure one's reputation/pride (损害声誉/自尊)，badly/seriously injure (严重受伤)；【形近辨析】endure (坚忍忍受)，ensure (保证确保)，ignite (点火发火)；【近义辨析】injure 专指因意外事故导致身体机能损伤骨折，或在比喻义中指名誉、感情遭到侵犯受损；wound 专指战争枪炮刀剑造成的皮开肉绽的开放性创口，harm 强调行为物质带来隐性或渐进的危害毒害，damage 专指对建筑物、商品或系统的物理破坏损毁。"
  },
  "wound": {
    "word": "wound",
    "translation": "创伤；伤口；伤害；击伤",
    "cloze": {
      "sentence": "Medics applied direct pressure and sterile bandages to clean the deep ______.",
      "translation": "医护人员实施直接按压并使用无菌绷带清理深层伤口。",
      "original": "Medics applied direct pressure and sterile bandages to clean the deep wound."
    },
    "form_confusables": [
      {
        "word": "wound",
        "zh": "伤口；创伤"
      },
      {
        "word": "bound",
        "zh": "有义务的；跳跃"
      },
      {
        "word": "found",
        "zh": "建立；发现"
      },
      {
        "word": "round",
        "zh": "圆的；回合"
      }
    ],
    "semantic_confusables": [
      {
        "word": "wound",
        "zh": "枪刺创口；心灵重创"
      },
      {
        "word": "injury",
        "zh": "意外伤痛；损伤"
      },
      {
        "word": "trauma",
        "zh": "严重外伤；心理创伤"
      },
      {
        "word": "lesion",
        "zh": "病灶；器官损伤"
      }
    ],
    "notes": "【搭配考点】open wound (开放性伤口)，inflict a wound (造成创伤)，heal the wounds of war (抚平战争创伤)；【形近辨析】bound (受缚的/开往)，found (建立创立)，round (圆满回合)；【近义辨析】wound 专指遭受枪弹、刀刃暴力攻击造成的肉体深度破损出血创伤，或心灵遭受刻骨铭心的重创；injury 泛指车祸摔跌造成的骨折肌肉拉伤，trauma 专指重症医学上的严重多发创伤或精神重创应激综合征，lesion 专指病理学上的组织病变病灶。"
  },
  "harm": {
    "word": "harm",
    "translation": "危害；伤害；损害",
    "cloze": {
      "sentence": "Exposing young children to toxic industrial chemicals can cause irreversible ______.",
      "translation": "让年幼儿童接触有毒工业化学品会造成不可逆转的危害。",
      "original": "Exposing young children to toxic industrial chemicals can cause irreversible harm."
    },
    "form_confusables": [
      {
        "word": "harm",
        "zh": "危害；伤害"
      },
      {
        "word": "farm",
        "zh": "农场"
      },
      {
        "word": "charm",
        "zh": "魅力；符咒"
      },
      {
        "word": "warm",
        "zh": "温暖的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "harm",
        "zh": "隐性或长期危害"
      },
      {
        "word": "damage",
        "zh": "物理破损；毁坏"
      },
      {
        "word": "injury",
        "zh": "生理损伤；伤害"
      },
      {
        "word": "detriment",
        "zh": "损害；伤害"
      }
    ],
    "notes": "【搭配考点】cause harm to (对...造成危害)，do more harm than good (弊大于利)，come to no harm (安然无恙)；【形近辨析】farm (农场耕作)，charm (迷人魔力)，warm (温暖热情)；【近义辨析】harm 强调不良因素、毒素或恶习带来的潜移默化、广泛的健康、道德或生态危害损害；damage 强调外力打击造成的物质破损损坏，injury 强调急性身体创伤，detriment 强调对权益利益造成的实质损害削弱。"
  },
  "hazard": {
    "word": "hazard",
    "translation": "危险；隐患；冒险",
    "cloze": {
      "sentence": "Dense fog on the highway represents a severe safety ______ for speeding drivers.",
      "translation": "高速公路上的浓雾对超速驾驶的司机来说构成了严重的安全隐患。",
      "original": "Dense fog on the highway represents a severe safety hazard for speeding drivers."
    },
    "form_confusables": [
      {
        "word": "hazard",
        "zh": "危险；隐患"
      },
      {
        "word": "wizard",
        "zh": "巫师；行家"
      },
      {
        "word": "lizard",
        "zh": "蜥蜴"
      },
      {
        "word": "buzzard",
        "zh": "秃鹰"
      }
    ],
    "semantic_confusables": [
      {
        "word": "hazard",
        "zh": "客观危险源；隐患"
      },
      {
        "word": "risk",
        "zh": "决策风险；承担危险"
      },
      {
        "word": "peril",
        "zh": "迫在眉睫的生死险境"
      },
      {
        "word": "danger",
        "zh": "通用危险状态"
      }
    ],
    "notes": "【搭配考点】safety/health hazard (安全/健康隐患)，occupational hazard (职业风险/职业病)，hazard lights (危险警报闪光灯)；【形近辨析】wizard (魔法巫师)，lizard (蜥蜴爬虫)，buzzard (大鵟秃鹰)；【近义辨析】hazard 强调客观环境中本身潜伏存在、随时可能引发事故的危险源或险情条件；risk 强调主体主动权衡做出的决策冒险概率，peril 强调命悬一线的极其严峻的致命险境，danger 为基础通用词泛指危险威胁。"
  },
  "danger": {
    "word": "danger",
    "translation": "危险；危机；威胁",
    "cloze": {
      "sentence": "Warning signs along the coastal path alerted pedestrians to the ______ of crumbling cliffs.",
      "translation": "沿海步道上的警告标志提醒行人注意悬崖坍塌的危险。",
      "original": "Warning signs along the coastal path alerted pedestrians to the danger of crumbling cliffs."
    },
    "form_confusables": [
      {
        "word": "danger",
        "zh": "危险；威胁"
      },
      {
        "word": "dagger",
        "zh": "短剑；匕首"
      },
      {
        "word": "ranger",
        "zh": "护林员；骑兵"
      },
      {
        "word": "anger",
        "zh": "愤怒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "danger",
        "zh": "危险状态；威胁"
      },
      {
        "word": "threat",
        "zh": "恐吓；潜在威胁"
      },
      {
        "word": "jeopardy",
        "zh": "处于险境；危难"
      },
      {
        "word": "menace",
        "zh": "威胁之物；恐吓"
      }
    ],
    "notes": "【搭配考点】in danger of (处于...危险之中)，out of danger (脱离危险期)，danger zone (危险区域)；【形近辨析】dagger (双刃短剑匕首)，ranger (国家公园巡警)，anger (怒气火气)；【近义辨析】danger 是最核心通用词，指受到伤害、死亡或毁灭的可能性与境遇；threat 侧重他人恶意的恐吓言辞或隐隐显现的威胁征兆，jeopardy 专指命运前途受到严重危害的不测险境，menace 强调让人感到持续受恐吓、令人生畏的危险分子。"
  },
  "stake": {
    "word": "stake",
    "translation": "赌注；桩；利害关系；股份",
    "cloze": {
      "sentence": "Local residents have a vital personal ______ in the preservation of the community hospital.",
      "translation": "当地居民在社区医院的保留问题上有着极其重大的切身利害关系。",
      "original": "Local residents have a vital personal stake in the preservation of the community hospital."
    },
    "form_confusables": [
      {
        "word": "stake",
        "zh": "桩；赌注；利害关系"
      },
      {
        "word": "steak",
        "zh": "牛排"
      },
      {
        "word": "snake",
        "zh": "蛇"
      },
      {
        "word": "stack",
        "zh": "堆；叠"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stake",
        "zh": "利害攸关的股份；赌注"
      },
      {
        "word": "share",
        "zh": "股份；应得部分"
      },
      {
        "word": "interest",
        "zh": "利益；权益"
      },
      {
        "word": "investment",
        "zh": "投资；投入"
      }
    ],
    "notes": "【搭配考点】at stake (处于危险关头/利害攸关)，have a stake in (在...有重大利害关系)，pull up stakes (拔营搬迁)；【形近辨析】steak (煎牛排)，snake (长蛇)，stack (整齐堆叠)；【近义辨析】stake 专指在某项事业或竞赛中押上的真金白银资本、或事关自身切身利益的深层利害关系；share 侧重公司账面量化的普通股股份，interest 泛指法律经济或政治上的正当权益利益，investment 强调注入资本期望未来获取回报的投资动作。"
  },
  "risk": {
    "word": "risk",
    "translation": "风险；危险；冒险做",
    "cloze": {
      "sentence": "Failure to diversify investments will significantly increase the ______ of catastrophic financial loss.",
      "translation": "不进行多元化投资将显著增加发生灾难性财务损失的风险。",
      "original": "Failure to diversify investments will significantly increase the risk of catastrophic financial loss."
    },
    "form_confusables": [
      {
        "word": "risk",
        "zh": "风险；冒险"
      },
      {
        "word": "brisk",
        "zh": "轻快的；活泼的"
      },
      {
        "word": "disk",
        "zh": "圆盘；磁盘"
      },
      {
        "word": "rink",
        "zh": "溜冰场"
      }
    ],
    "semantic_confusables": [
      {
        "word": "risk",
        "zh": "可量化的决策风险"
      },
      {
        "word": "hazard",
        "zh": "客观隐患危险源"
      },
      {
        "word": "gamble",
        "zh": "孤注一掷的赌博"
      },
      {
        "word": "threat",
        "zh": "威胁"
      }
    ],
    "notes": "【搭配考点】at risk (处于危险中)，take a risk (冒风险)，risk one's life (冒着生命危险)；【形近辨析】brisk (轻快矫健的)，disk (计算机磁盘)，rink (旱冰溜冰场)；【近义辨析】risk 强调在行动前可以进行概率估算、权衡后果的主动承担性风险；hazard 侧重外部物理环境中的固有危险隐患，gamble 强调依靠纯粹运气、输赢胜负未卜的豪赌冒险，threat 强调来自敌意实体的潜在攻击威逼。"
  },
  "gamble": {
    "word": "gamble",
    "translation": "赌博；投机；冒险",
    "cloze": {
      "sentence": "Investing all your retirement savings into a single volatile stock is a dangerous ______.",
      "translation": "将所有退休储蓄投入到一只波动剧烈的单只股票中是一场极其危险的豪赌。",
      "original": "Investing all your retirement savings into a single volatile stock is a dangerous gamble."
    },
    "form_confusables": [
      {
        "word": "gamble",
        "zh": "赌博；投机"
      },
      {
        "word": "fumble",
        "zh": "笨拙摸索"
      },
      {
        "word": "humble",
        "zh": "谦虚的；简陋的"
      },
      {
        "word": "stumble",
        "zh": "绊倒；踌躇"
      }
    ],
    "semantic_confusables": [
      {
        "word": "gamble",
        "zh": "赌博冒险；投机"
      },
      {
        "word": "bet",
        "zh": "打赌；下注"
      },
      {
        "word": "wager",
        "zh": "押注；赌注"
      },
      {
        "word": "venture",
        "zh": "商业冒险投机"
      }
    ],
    "notes": "【搭配考点】take a gamble (孤注一掷冒险)，gamble away (赌光输光)，gamble on (在...上押宝赌一把)；【形近辨析】fumble (笨手笨脚乱摸)，humble (谦逊低调的)，stumble (跌跌撞撞绊倒)；【近义辨析】gamble 强调押上身家性命、全凭运气的大胆投机行为，带有严重非理性与潜在灾难性后果；bet 偏口语日常表示对某事结果进行小额打赌押注，wager 属正式法律文雅用语指赌约押金，venture 强调面临市场不确定性的商业风险投资。"
  },
  "bet": {
    "word": "bet",
    "translation": "打赌；下注；确信；赌注",
    "cloze": {
      "sentence": "I wouldn't ______ on him finishing the grueling marathon in this sweltering heat.",
      "translation": "在这酷暑高温之下，我可不敢打赌他能跑完这场艰苦的马拉松。",
      "original": "I wouldn't bet on him finishing the grueling marathon in this sweltering heat."
    },
    "form_confusables": [
      {
        "word": "bet",
        "zh": "打赌；下注"
      },
      {
        "word": "bit",
        "zh": "一点；钻头"
      },
      {
        "word": "bed",
        "zh": "床"
      },
      {
        "word": "beg",
        "zh": "乞求；乞讨"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bet",
        "zh": "日常打赌；确信"
      },
      {
        "word": "wager",
        "zh": "立字打赌；赌金"
      },
      {
        "word": "gamble",
        "zh": "豪赌；投机冒险"
      },
      {
        "word": "stake",
        "zh": "押上赌注"
      }
    ],
    "notes": "【搭配考点】bet on (在...下注/押宝)，one's best bet (最佳选择/最靠谱做法)，you bet (当然/一点没错)；【形近辨析】bit (咬/少许)，bed (床铺)，beg (乞讨恳求)；【近义辨析】bet 为最日常高频词，口语中广泛表示坚信某事一定会发生或在赛马比赛下注；wager 偏书面正式强调立下庄重契约押下赌金，gamble 强调大额高危的投机赌博，stake 侧重把具体的名誉金钱作为赌注压在台面上。"
  },
  "current": {
    "word": "current",
    "translation": "当前的；现行的；水流；电流；潮流",
    "cloze": {
      "sentence": "The company's ______ financial performance indicates strong momentum for future growth.",
      "translation": "该公司目前的财务业绩表明未来增长势头强劲。",
      "original": "The company's current financial performance indicates strong momentum for future growth."
    },
    "form_confusables": [
      {
        "word": "current",
        "zh": "当前的；水流电流"
      },
      {
        "word": "currency",
        "zh": "货币；流通"
      },
      {
        "word": "correct",
        "zh": "正确的"
      },
      {
        "word": "corrupt",
        "zh": "腐败的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "current",
        "zh": "现行当下的；水流"
      },
      {
        "word": "present",
        "zh": "现在的；出席的"
      },
      {
        "word": "contemporary",
        "zh": "当代的"
      },
      {
        "word": "flow",
        "zh": "流动；水流"
      }
    ],
    "notes": "【搭配考点】current events/situation (时事/当前局势)，electric current (电流)，against the current (逆流而上)；【形近辨析】currency (法定货币流通)，correct (正确的)，corrupt (贪污腐化的)；【近义辨析】current 强调此时此刻正在流行、处于行使效力之中的当前现状；present 侧重时间刻度上的“现在”，contemporary 侧重与我们处于同一个现代大时代的，flow 强调流体连续滑动的动态过程。"
  },
  "currency": {
    "word": "currency",
    "translation": "货币；通货；流通；流行",
    "cloze": {
      "sentence": "International travelers exchanged their domestic cash for local ______ at the airport bank.",
      "translation": "国际旅客在机场银行将本国现金兑换成当地货币。",
      "original": "International travelers exchanged their domestic cash for local currency at the airport bank."
    },
    "form_confusables": [
      {
        "word": "currency",
        "zh": "货币；流通"
      },
      {
        "word": "current",
        "zh": "当前的；电流"
      },
      {
        "word": "urgency",
        "zh": "紧急；催迫"
      },
      {
        "word": "fluency",
        "zh": "流利；流畅"
      }
    ],
    "semantic_confusables": [
      {
        "word": "currency",
        "zh": "国家法定货币；通货"
      },
      {
        "word": "money",
        "zh": "金钱；钱财"
      },
      {
        "word": "cash",
        "zh": "现钞；现款"
      },
      {
        "word": "coinage",
        "zh": "造币；硬币体系"
      }
    ],
    "notes": "【搭配考点】foreign currency (外币)，currency exchange/fluctuations (货币兑换/汇率波动)，gain currency (广为流传/被普遍接受)；【形近辨析】current (现行的/潮流)，urgency (紧迫紧要)，fluency (语言流利)；【近义辨析】currency 专指主权国家发行的、作为流通交易媒介的法定通货制度体系；money 泛指一切具有支付能力的财富金钱，cash 专指纸币硬币实物现钞，coinage 侧重金属硬币铸造体系。"
  },
  "rental": {
    "word": "rental",
    "translation": "租金；租赁；供出租的；租赁物",
    "cloze": {
      "sentence": "Tourists booked a compact ______ car at the terminal to explore the scenic coastal route.",
      "translation": "游客在航站楼预订了一辆紧凑型出租车，以游览沿海风景路线。",
      "original": "Tourists booked a compact rental car at the terminal to explore the scenic coastal route."
    },
    "form_confusables": [
      {
        "word": "rental",
        "zh": "租赁；租金"
      },
      {
        "word": "retail",
        "zh": "零售"
      },
      {
        "word": "mental",
        "zh": "精神的；脑力的"
      },
      {
        "word": "denial",
        "zh": "否认；拒绝"
      }
    ],
    "semantic_confusables": [
      {
        "word": "rental",
        "zh": "租赁费；出租的"
      },
      {
        "word": "lease",
        "zh": "正式租约；承租"
      },
      {
        "word": "rent",
        "zh": "日常房租；出租"
      },
      {
        "word": "tenancy",
        "zh": "租用期；租赁物业"
      }
    ],
    "notes": "【搭配考点】rental car/agreement (租用车/租赁协议)，rental property (出租物业)，monthly rental (月租金)；【形近辨析】retail (零售商品)，mental (心理精神上的)，denial (断然否认)；【近义辨析】rental 常作定语形容短期出租的设备车辆，或指租赁业务收入；lease 专指签署严格法律合同的中长期房屋土地租赁合约，rent 侧重定期支付的实际房租款项或日常出租动作，tenancy 侧重租户合法居住占用的法定期限与租权状态。"
  },
  "lease": {
    "word": "lease",
    "translation": "租约；租期；出租；租用",
    "cloze": {
      "sentence": "The commercial enterprise signed a ten-year ______ on the new office building in the downtown core.",
      "translation": "该商业企业签署了市中心核心区新办公大楼为期十年的长期租约。",
      "original": "The commercial enterprise signed a ten-year lease on the new office building in the downtown core."
    },
    "form_confusables": [
      {
        "word": "lease",
        "zh": "租约；出租"
      },
      {
        "word": "release",
        "zh": "释放；发布"
      },
      {
        "word": "please",
        "zh": "使高兴；请"
      },
      {
        "word": "cease",
        "zh": "停止；终止"
      }
    ],
    "semantic_confusables": [
      {
        "word": "lease",
        "zh": "长期法律租赁契约"
      },
      {
        "word": "rent",
        "zh": "日常短期承租"
      },
      {
        "word": "hire",
        "zh": "雇佣；短期租用"
      },
      {
        "word": "charter",
        "zh": "包租飞机船舶"
      }
    ],
    "notes": "【搭配考点】sign a lease (签署租约)，expire of a lease (租约到期)，a new lease of life (焕发新生/重获活力)；【形近辨析】release (释放发行)，please (令人欣悦)，cease (停息停歇)；【近义辨析】lease 专指针对地产、飞机或贵重设备的严格法律中长期租赁契约；rent 侧重民用住房的按月租用，hire 强调支付报酬短租车辆工具或雇佣员工，charter 专指包机、包船作为专属商业出行。"
  },
  "release": {
    "word": "release",
    "translation": "释放；发布；发行；解除；排放",
    "cloze": {
      "sentence": "The record label announced plans to ______ the musician's final studio album next Friday.",
      "translation": "唱片公司宣布计划于下周五发行这位音乐家的最后一张录音室专辑。",
      "original": "The record label announced plans to release the musician's final studio album next Friday."
    },
    "form_confusables": [
      {
        "word": "release",
        "zh": "释放；发布"
      },
      {
        "word": "lease",
        "zh": "租约；租用"
      },
      {
        "word": "relieve",
        "zh": "缓解；减轻"
      },
      {
        "word": "reliant",
        "zh": "依赖的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "release",
        "zh": "官方发布；发行；释放"
      },
      {
        "word": "issue",
        "zh": "发行；配发"
      },
      {
        "word": "publish",
        "zh": "出版书籍；刊登"
      },
      {
        "word": "discharge",
        "zh": "释放出院；排放"
      }
    ],
    "notes": "【搭配考点】press release (新闻通稿)，release an album/movie (发行专辑/上映电影)，release from prison (刑满出狱)；【形近辨析】lease (租借租约)，relieve (缓解疼痛)，reliant (依赖他人的)；【近义辨析】release 强调解除拘束、推向市场公之于众；issue 侧重政府官方发布通告、护照或印钞行发行货币，publish 专指把文字作品在纸质媒介或电子刊物上正式出版印行，discharge 专指病人康复出院或军事人员退伍。"
  },
  "recently": {
    "word": "recently",
    "translation": "最近；新近；近来",
    "cloze": {
      "sentence": "The museum ______ acquired a rare masterpiece by the famous seventeenth-century painter.",
      "translation": "该博物馆最近购得了一幅这位十七世纪著名画家的罕见杰作。",
      "original": "The museum recently acquired a rare masterpiece by the famous seventeenth-century painter."
    },
    "form_confusables": [
      {
        "word": "recently",
        "zh": "最近；新近"
      },
      {
        "word": "decently",
        "zh": "得体地；体面地"
      },
      {
        "word": "presently",
        "zh": "目前；不久"
      },
      {
        "word": "recession",
        "zh": "经济衰退"
      }
    ],
    "semantic_confusables": [
      {
        "word": "recently",
        "zh": "在不久之前"
      },
      {
        "word": "lately",
        "zh": "近来；最近一段时间"
      },
      {
        "word": "newly",
        "zh": "新近；刚刚"
      },
      {
        "word": "afresh",
        "zh": "重新；再次"
      }
    ],
    "notes": "【搭配考点】until recently (直到最近)，recently published (最新出版的)；【形近辨析】decently (大方得体地)，presently (现在/立刻)，recession (经济萧条萧条期)；【近义辨析】recently 既可与过去时连用表示不久前的某一确切时刻发生的单次事件，亦可与完成时连用；lately 侧重与现在完成时连用表示近一段时间持续不断发生的状态，newly 强调刚经历某种状态转变，afresh 强调推倒重来从头开始。"
  },
  "modern": {
    "word": "modern",
    "translation": "现代的；新式的；近代的",
    "cloze": {
      "sentence": "The city hospital is equipped with the most ______ medical technology available today.",
      "translation": "这家市立医院配备了当今最现代化的医疗技术。",
      "original": "The city hospital is equipped with the most modern medical technology available today."
    },
    "form_confusables": [
      {
        "word": "modern",
        "zh": "现代的；新式的"
      },
      {
        "word": "model",
        "zh": "模型；模特"
      },
      {
        "word": "modest",
        "zh": "谦虚的；适度的"
      },
      {
        "word": "mode",
        "zh": "模式；风格"
      }
    ],
    "semantic_confusables": [
      {
        "word": "modern",
        "zh": "当今时代的；新式的"
      },
      {
        "word": "advanced",
        "zh": "高阶的；先进的"
      },
      {
        "word": "contemporary",
        "zh": "当代的；同时代的"
      },
      {
        "word": "progressive",
        "zh": "进步的；革新的"
      }
    ],
    "notes": "【搭配考点】modern technology/architecture (现代技术/现代建筑)，modern times (当今时代)；【形近辨析】model (模型典范)，modest (谦和朴实的)，mode (风尚模式)；【近义辨析】modern 侧重与古代中世纪相对立的近现代、遵循现代科学生活方式的设计风格；advanced 强调经过深厚研发达到的前沿高阶水平，contemporary 侧重当下共处同一时代的，progressive 侧重思想政治制度上的开明进步。"
  },
  "era": {
    "word": "era",
    "translation": "时代；纪元；年代",
    "cloze": {
      "sentence": "The invention of the smartphone heralded a completely new ______ in digital communication.",
      "translation": "智能手机的发明开启了数字通信的全新时代。",
      "original": "The invention of the smartphone heralded a completely new era in digital communication."
    },
    "form_confusables": [
      {
        "word": "era",
        "zh": "时代；纪元"
      },
      {
        "word": "ear",
        "zh": "耳朵；倾听"
      },
      {
        "word": "err",
        "zh": "犯错"
      },
      {
        "word": "area",
        "zh": "区域；面积"
      }
    ],
    "semantic_confusables": [
      {
        "word": "era",
        "zh": "具显著标志的历史时代"
      },
      {
        "word": "epoch",
        "zh": "开创新纪元的大时代"
      },
      {
        "word": "age",
        "zh": "漫长时代；世纪"
      },
      {
        "word": "period",
        "zh": "一段历史时期"
      }
    ],
    "notes": "【搭配考点】new era (新时代)，dawn of an era (时代的拂晓黎明)，end of an era (一个时代的终结)；【形近辨析】ear (耳朵)，err (出差错犯错)，area (地区区域)；【近义辨析】era 专指历史上由某一重大科技变革、政治革命或领袖统治所界定的具有鲜明时代特征的历史纪元；epoch 强调标志人类历史发生划时代翻天覆地重大转折的起点时代，age 偏自然考古历史大跨度，period 泛指任何一段有起止的常规历史阶段。"
  },
  "up-to-date": {
    "word": "up-to-date",
    "translation": "最新的；现代的；跟上时代的",
    "cloze": {
      "sentence": "Financial analysts must keep ______ with shifting international market regulations.",
      "translation": "财务分析师必须与不断变化的国际市场监管规程保持同步、随时跟进最新动态。",
      "original": "Financial analysts must keep up-to-date with shifting international market regulations."
    },
    "form_confusables": [
      {
        "word": "up-to-date",
        "zh": "最新的；跟上时代的"
      },
      {
        "word": "update",
        "zh": "更新"
      },
      {
        "word": "outdated",
        "zh": "过时的"
      },
      {
        "word": "upgrade",
        "zh": "升级；提升"
      }
    ],
    "semantic_confusables": [
      {
        "word": "up-to-date",
        "zh": "紧跟最新动态的"
      },
      {
        "word": "current",
        "zh": "当前的；现行的"
      },
      {
        "word": "cutting-edge",
        "zh": "尖端的；前沿的"
      },
      {
        "word": "fashionable",
        "zh": "时髦的；流行的"
      }
    ],
    "notes": "【搭配考点】keep up-to-date with (与...保持同步更新)，up-to-date information/data (最新信息/数据)；【形近辨析】update (动词更新)，outdated (反义词落伍过时的)，upgrade (装备升级)；【近义辨析】up-to-date 强调信息、软件或思想包含了一直到当下最新发生的修改与进展、绝无落后；current 强调现行正在发生，cutting-edge 侧重在科学工程尖端前沿遥遥领先，fashionable 侧重受到社会流行追捧时髦。"
  },
  "outdated": {
    "word": "outdated",
    "translation": "过时的；陈旧的；落伍的",
    "cloze": {
      "sentence": "The hospital had to replace its ______ computer operating system to improve cybersecurity.",
      "translation": "医院不得不更换其过时的计算机操作系统，以提升网络安全。",
      "original": "The hospital had to replace its outdated computer operating system to improve cybersecurity."
    },
    "form_confusables": [
      {
        "word": "outdated",
        "zh": "过时的；陈旧的"
      },
      {
        "word": "outmoded",
        "zh": "过时的"
      },
      {
        "word": "update",
        "zh": "更新"
      },
      {
        "word": "outright",
        "zh": "完全的；直率的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "outdated",
        "zh": "技术观念过时的"
      },
      {
        "word": "obsolete",
        "zh": "废弃淘汰不用的"
      },
      {
        "word": "antiquated",
        "zh": "老古董般陈腐的"
      },
      {
        "word": "archaic",
        "zh": "古老作废的"
      }
    ],
    "notes": "【搭配考点】outdated technology/methods (过时的技术/方法)，outdated views/ideas (陈旧的思想观念)；【形近辨析】outmoded (同义词过时落伍)，update (更新)，outright (彻底坦白的)；【近义辨析】outdated 强调因为时间推移、新事物诞生而显得跟不上时代、失去效能；obsolete 强调在工业制造中已被全新标准彻底替代而停产淘汰报废，antiquated 带有贬义讽刺如同老古董般迂腐荒谬，archaic 专指古老语言或早已废弛的古代典制。"
  },
  "stale": {
    "word": "stale",
    "translation": "不新鲜的；走味的；陈旧乏味的",
    "cloze": {
      "sentence": "Uncovered bread left on the kitchen counter will quickly become hard and ______.",
      "translation": "厨房台面上未加遮盖的面包很快就会变硬并不新鲜。",
      "original": "Uncovered bread left on the kitchen counter will quickly become hard and stale."
    },
    "form_confusables": [
      {
        "word": "stale",
        "zh": "不新鲜的；陈腐的"
      },
      {
        "word": "scale",
        "zh": "规模；鱼鳞"
      },
      {
        "word": "stole",
        "zh": "披肩；偷窃"
      },
      {
        "word": "state",
        "zh": "状态；国家"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stale",
        "zh": "风干走味的；老掉牙的"
      },
      {
        "word": "expired",
        "zh": "过期的；失效的"
      },
      {
        "word": "decayed",
        "zh": "腐烂变质的"
      },
      {
        "word": "trite",
        "zh": "陈腐平庸的话题"
      }
    ],
    "notes": "【搭配考点】stale bread/air (走味变硬的面包/污浊的空气)，stale jokes/ideas (老掉牙的笑话/陈腐观念)；【形近辨析】scale (测量尺度/鱼鳞)，stole (偷窃过去式)，state (陈述/州)；【近义辨析】stale 专指面包、啤酒等暴露在空气中失去脆嫩芳香变得干硬走味，或比喻论调毫无新意炒冷饭；expired 强调超过了商品法定的保质期限，decayed 侧重细菌真菌分解产生的腐烂发臭，trite 专指文章言论陈词滥调俗不可耐。"
  },
  "fashion": {
    "word": "fashion",
    "translation": "时尚；时装；风尚；方式；制作",
    "cloze": {
      "sentence": "Paris has long been celebrated worldwide as the undisputed capital of haute couture ______.",
      "translation": "长期以来，巴黎一直被全世界誉为无可争议的高级定制时装之都。",
      "original": "Paris has long been celebrated worldwide as the undisputed capital of haute couture fashion."
    },
    "form_confusables": [
      {
        "word": "fashion",
        "zh": "时尚；时装"
      },
      {
        "word": "faction",
        "zh": "派系；小集团"
      },
      {
        "word": "fraction",
        "zh": "碎片；小部分"
      },
      {
        "word": "cushion",
        "zh": "靠垫；缓冲"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fashion",
        "zh": "时代风尚；流行款式"
      },
      {
        "word": "vogue",
        "zh": "盛行时髦"
      },
      {
        "word": "trend",
        "zh": "发展趋势；潮流"
      },
      {
        "word": "mode",
        "zh": "时髦式样；风格"
      }
    ],
    "notes": "【搭配考点】in fashion (流行中/入时)，out of fashion (过时)，in a timely fashion (及时地/以迅速的方式)；【形近辨析】faction (宗派集团)，fraction (小比例分数)，cushion (坐垫减震)；【近义辨析】fashion 专指特定时期在服饰装扮、生活方式上广受社会崇尚风靡的大众流行风气；vogue 强调在某特定短暂时间窗口内的极盛时髦状态，trend 侧重数据科技或社会观念发生宏观位移的发展走向，mode 专指南欧古典高雅的时装式样或运转模式。"
  },
  "contemporary": {
    "word": "contemporary",
    "translation": "当代的；现代的；同代人",
    "cloze": {
      "sentence": "The museum exhibition showcases provocative works of ______ art by living sculptors.",
      "translation": "该博物馆展览展出了由在世雕塑家创作的引人深思的当代艺术作品。",
      "original": "The museum exhibition showcases provocative works of contemporary art by living sculptors."
    },
    "form_confusables": [
      {
        "word": "contemporary",
        "zh": "当代的；同时代人"
      },
      {
        "word": "temporary",
        "zh": "暂时的；临时的"
      },
      {
        "word": "contempt",
        "zh": "轻视；蔑视"
      },
      {
        "word": "contemplate",
        "zh": "深思；盘算"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contemporary",
        "zh": "当代的；同时代的"
      },
      {
        "word": "modern",
        "zh": "现代风格的"
      },
      {
        "word": "present-day",
        "zh": "当今的；现今的"
      },
      {
        "word": "coexisting",
        "zh": "同时共存的"
      }
    ],
    "notes": "【搭配考点】contemporary art/music (当代艺术/音乐)，contemporary with (与...同时代)，one's contemporaries (同龄人/同时代人)；【形近辨析】temporary (短暂临时的)，contempt (鄙视轻蔑)，contemplate (凝视深思熟虑)；【近义辨析】contemporary 核心强调“时间上的并存性”——要么指活在当今眼下的同代在世艺术家作品，要么指与历史上某人同处于同一时代的同代人；modern 侧重打破传统旧规范的现代主义设计哲学，present-day 侧重客观纪年上的当今现下阶段。"
  },
  "temple": {
    "word": "temple",
    "zh": "寺庙；殿堂",
    "translation": "寺庙；殿堂",
    "cloze": {
      "sentence": "These deities prevent evil spirits from entering the ______ precincts.",
      "original": "These deities prevent evil spirits from entering the temple precincts.",
      "translation": "这些神明守护着四周，阻止恶灵侵入寺庙界内。"
    },
    "form_confusables": [
      {
        "word": "temple",
        "zh": "寺庙；殿堂"
      },
      {
        "word": "ample",
        "zh": "充足的；宽敞的"
      },
      {
        "word": "tempo",
        "zh": "节奏；步调"
      },
      {
        "word": "template",
        "zh": "模板；样板"
      }
    ],
    "semantic_confusables": [
      {
        "word": "temple",
        "zh": "寺庙；殿堂"
      },
      {
        "word": "shrine",
        "zh": "神龛；圣地"
      },
      {
        "word": "sanctuary",
        "zh": "圣所；避难所"
      },
      {
        "word": "altar",
        "zh": "祭坛；圣坛"
      }
    ],
    "notes": "【搭配考点】temple precincts 专指寺庙周边界限与庭院区域；【形近辨析】ample (充足的/宽裕的)，tempo (音乐节奏/行进步调)，template (模板/样板)；【近义辨析】shrine 侧重供奉神圣人物或遗物的神龛，sanctuary 侧重神圣不可侵犯的庇护圣所，altar 仅指举行仪式的祭坛，在此处指供奉神明的宗教殿堂建筑整体唯一契合 temple。"
  },
  "temporary": {
    "word": "temporary",
    "zh": "暂时的；临时的",
    "translation": "暂时的；临时的",
    "cloze": {
      "sentence": "I'm afraid using volunteers can only be a ______ solution to the problem.",
      "original": "I'm afraid using volunteers can only be a temporary solution to the problem.",
      "translation": "恐怕依靠志愿者只能作为解决该问题的权宜之计（临时办法）。"
    },
    "form_confusables": [
      {
        "word": "temporary",
        "zh": "暂时的；临时的"
      },
      {
        "word": "contemporary",
        "zh": "当代的；同代人"
      },
      {
        "word": "tempting",
        "zh": "诱人的；吸引人的"
      },
      {
        "word": "temperature",
        "zh": "温度；气温"
      }
    ],
    "semantic_confusables": [
      {
        "word": "temporary",
        "zh": "暂时的；临时的"
      },
      {
        "word": "provisional",
        "zh": "临时的；暂定的"
      },
      {
        "word": "interim",
        "zh": "过渡期的；暂时的"
      },
      {
        "word": "momentary",
        "zh": "片刻的；瞬间的"
      }
    ],
    "notes": "【搭配考点】temporary solution/measure 临时解决方案/权宜之计；【形近辨析】contemporary (同代人/当代的)，tempting (诱人的)，temperature (温度)；【近义辨析】provisional 侧重在正式确定前暂定的，interim 侧重政权或过渡阶段的暂时安排，momentary 仅强调持续一瞬间，在此处指应急性的临时解决手段唯一契合 temporary。"
  },
  "abundant": {
    "word": "abundant",
    "zh": "丰富的；充裕的",
    "translation": "丰富的；充裕的",
    "cloze": {
      "sentence": "The region is blessed with ______ natural resources and fertile farmland.",
      "original": "The region is blessed with abundant natural resources and fertile farmland.",
      "translation": "该地区得天独厚，拥有极其丰富的自然资源与肥沃的农田。"
    },
    "form_confusables": [
      {
        "word": "abundant",
        "zh": "丰富的；充裕的"
      },
      {
        "word": "redundant",
        "zh": "多余的；被解雇的"
      },
      {
        "word": "abandon",
        "zh": "抛弃；遗弃"
      },
      {
        "word": "radiant",
        "zh": "容光焕发的；光芒四射的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "abundant",
        "zh": "丰富的；充裕的"
      },
      {
        "word": "plentiful",
        "zh": "充足的；大量的"
      },
      {
        "word": "ample",
        "zh": "宽裕的；充裕的"
      },
      {
        "word": "copious",
        "zh": "大量的；丰富详尽的"
      }
    ],
    "notes": "【搭配考点】abundant natural resources/supply 强调自然资源或供给极度富足；【形近辨析】redundant (多余的/累赘的/下岗的)，abandon (遗弃/抛弃)，radiant (容光焕发的/光芒四射的)；【近义辨析】plentiful 侧重数量充足满足需求，ample 强调宽裕不显紧凑，copious 强调大量甚至冗余的产出，在此处形容土地与自然恩赐之丰饶富足唯一契合 abundant。"
  },
  "ample": {
    "word": "ample",
    "zh": "充足的；宽敞的",
    "translation": "充足的；宽敞的",
    "cloze": {
      "sentence": "There was ______ time to get to the airport before the flight closed.",
      "original": "There was ample time to get to the airport before the flight closed.",
      "translation": "在航班值机关闭前，去机场的时间绰绰有余。"
    },
    "form_confusables": [
      {
        "word": "ample",
        "zh": "充足的；宽敞的"
      },
      {
        "word": "temple",
        "zh": "寺庙；殿堂"
      },
      {
        "word": "sample",
        "zh": "样品；样本"
      },
      {
        "word": "maple",
        "zh": "枫树；枫木"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ample",
        "zh": "充足的；宽裕的"
      },
      {
        "word": "sufficient",
        "zh": "足够的；充分的"
      },
      {
        "word": "adequate",
        "zh": "能满足要求的；合格的"
      },
      {
        "word": "generous",
        "zh": "丰厚的；慷慨的"
      }
    ],
    "notes": "【搭配考点】ample time/opportunity 强调时间或机会非常充裕、绰绰有余；【形近辨析】temple (寺庙)，sample (样品)，maple (枫树)；【近义辨析】sufficient 侧重客观数量上刚刚够用，adequate 侧重符合最低资质或要求但不出色，generous 侧重给予得极为大方厚实，在此处强调余地很大的充裕唯一契合 ample。"
  },
  "mass": {
    "word": "mass",
    "zh": "质量；大量；群众",
    "translation": "质量；大量；群众",
    "cloze": {
      "sentence": "The sun contains 99.8 percent of the total ______ of the entire solar system.",
      "original": "The sun contains 99.8 percent of the total mass of the entire solar system.",
      "translation": "太阳占据了整个太阳系总质量的99.8%。"
    },
    "form_confusables": [
      {
        "word": "mass",
        "zh": "质量；大量；群众"
      },
      {
        "word": "massive",
        "zh": "巨大的；庞大的"
      },
      {
        "word": "massage",
        "zh": "按摩；推拿"
      },
      {
        "word": "mess",
        "zh": "混乱；脏乱"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mass",
        "zh": "质量；大量；团块"
      },
      {
        "word": "bulk",
        "zh": "主体；大部分；大宗"
      },
      {
        "word": "volume",
        "zh": "体积；容积；音量"
      },
      {
        "word": "quantity",
        "zh": "数量；数额"
      }
    ],
    "notes": "【搭配考点】total mass/mass production 物理学上指物体所含物质总量（质量）或社会层面的大众规模；【形近辨析】massive (巨大的/重大的)，massage (按摩/推拿)，mess (混乱/脏乱)；【近义辨析】bulk 侧重体积庞大或主要大部分，volume 侧重立体空间容积，quantity 侧重抽象数量大小，在此处物理学天体总质量唯一契合 mass。"
  },
  "massive": {
    "word": "massive",
    "zh": "巨大的；庞大的",
    "translation": "巨大的；庞大的",
    "cloze": {
      "sentence": "The company suffered a ______ financial loss following the market collapse.",
      "original": "The company suffered a massive financial loss following the market collapse.",
      "translation": "在市场崩溃之后，该公司遭受了极其沉重的经济损失。"
    },
    "form_confusables": [
      {
        "word": "massive",
        "zh": "巨大的；庞大的"
      },
      {
        "word": "passive",
        "zh": "消极的；被动的"
      },
      {
        "word": "missile",
        "zh": "导弹"
      },
      {
        "word": "mission",
        "zh": "任务；使命"
      }
    ],
    "semantic_confusables": [
      {
        "word": "massive",
        "zh": "巨大的；极其沉重的"
      },
      {
        "word": "colossal",
        "zh": "庞大的；巨大的"
      },
      {
        "word": "gigantic",
        "zh": "巨大的；庞然大物般的"
      },
      {
        "word": "enormous",
        "zh": "巨大的；极大的"
      }
    ],
    "notes": "【搭配考点】massive financial loss/massive scale 强调规模、程度或重量上的极其庞大与沉重；【形近辨析】passive (消极被动的)，missile (导弹)，mission (使命/代表团)；【近义辨析】colossal 侧重体积或耗资极其惊人，gigantic 强调如巨人般的尺寸，enormous 侧重超出常规尺度的巨大，在此处形容财务损失之惨重与规模巨大唯一契合 massive。"
  },
  "massage": {
    "word": "massage",
    "zh": "按摩；推拿",
    "translation": "按摩；推拿",
    "cloze": {
      "sentence": "The physiotherapist gave me a gentle ______ to ease the back pain.",
      "original": "The physiotherapist gave me a gentle massage to ease the back pain.",
      "translation": "物理治疗师给我进行了轻柔的推拿按摩，以缓解背部疼痛。"
    },
    "form_confusables": [
      {
        "word": "massage",
        "zh": "按摩；推拿"
      },
      {
        "word": "message",
        "zh": "信息；留言"
      },
      {
        "word": "passage",
        "zh": "通道；段落"
      },
      {
        "word": "voyage",
        "zh": "航程；航行"
      }
    ],
    "semantic_confusables": [
      {
        "word": "massage",
        "zh": "按摩；推拿"
      },
      {
        "word": "therapy",
        "zh": "治疗；理疗"
      },
      {
        "word": "rubbing",
        "zh": "揉搓；摩擦"
      },
      {
        "word": "manipulation",
        "zh": "手法推拿；操作"
      }
    ],
    "notes": "【搭配考点】gentle massage / heart massage 理疗中的按摩抚摩或心脏复苏按压；【形近辨析】message (信息/短信)，passage (通道/文章段落)，voyage (航海旅程)；【近义辨析】therapy 涵盖所有医疗治疗手段范围极广，rubbing 仅指表面皮肤机械摩擦，manipulation 偏向整骨外科手法，在此处针对肌肉舒缓的专业按摩唯一契合 massage。"
  },
  "vast": {
    "word": "vast",
    "zh": "广大的；广阔的",
    "translation": "广大的；广阔的",
    "cloze": {
      "sentence": "In the ______ majority of cases, this treatment resolves the infection without surgery.",
      "original": "In the vast majority of cases, this treatment resolves the infection without surgery.",
      "translation": "在绝大多数情况下，这种治疗手段无需手术即可消除感染。"
    },
    "form_confusables": [
      {
        "word": "vast",
        "zh": "广大的；广阔的"
      },
      {
        "word": "fast",
        "zh": "快速的；紧固的"
      },
      {
        "word": "cast",
        "zh": "投掷；演员阵容"
      },
      {
        "word": "past",
        "zh": "过去的；往事"
      }
    ],
    "semantic_confusables": [
      {
        "word": "vast",
        "zh": "广大的；绝大部分的"
      },
      {
        "word": "immense",
        "zh": "巨大的；无限的"
      },
      {
        "word": "broad",
        "zh": "宽广的；宽阔的"
      },
      {
        "word": "expansive",
        "zh": "广阔的；扩张性的"
      }
    ],
    "notes": "【搭配考点】the vast majority of 绝大多数（固定高频考点）；【形近辨析】fast (快速的/绝食)，cast (铸造/投射)，past (过去的/经过)；【近义辨析】immense 强调浩瀚无边无法测量，broad 侧重两端距离宽阔，expansive 侧重向外延展扩张，在修饰 majority 表示压倒性多数时固定唯一契合 vast。"
  },
  "scope": {
    "word": "scope",
    "zh": "范围；视野",
    "translation": "范围；视野",
    "cloze": {
      "sentence": "The geographical ______ of modern product markets has widened significantly since the war.",
      "original": "The geographical scope of modern product markets has widened significantly since the war.",
      "translation": "战后以来，现代产品市场的地域范围已显著扩大。"
    },
    "form_confusables": [
      {
        "word": "scope",
        "zh": "范围；视野"
      },
      {
        "word": "score",
        "zh": "得分；二十"
      },
      {
        "word": "scape",
        "zh": "景象；花茎"
      },
      {
        "word": "cope",
        "zh": "对付；应付"
      }
    ],
    "semantic_confusables": [
      {
        "word": "scope",
        "zh": "范围；领域"
      },
      {
        "word": "extent",
        "zh": "程度；范围"
      },
      {
        "word": "range",
        "zh": "范围；区间"
      },
      {
        "word": "compass",
        "zh": "界限；罗盘"
      }
    ],
    "notes": "【搭配考点】geographical/broad scope 强调研究、行动、调查或市场所涵盖的广度与管辖范围；【形近辨析】score (比分/二十)，scape (景观词根，如 landscape)，cope (处理/应对)；【近义辨析】extent 侧重事态蔓延或严重的程度，range 侧重上下限之间的跨度波动，compass 偏文雅指活动界限，在此处指涉足与覆盖的领域范围唯一契合 scope。"
  },
  "scale": {
    "word": "scale",
    "zh": "规模；等级；天平；鳞片",
    "translation": "规模；等级；天平；鳞片",
    "cloze": {
      "sentence": "After ten years of dedicated service, she had worked her way to the top of the pay ______.",
      "original": "After ten years of dedicated service, she had worked her way to the top of the pay scale.",
      "translation": "经过十年的敬业奉献，她已经一步步升到了工资等级表的最高级别。"
    },
    "form_confusables": [
      {
        "word": "scale",
        "zh": "规模；等级；天平"
      },
      {
        "word": "scare",
        "zh": "使惊恐；吓唬"
      },
      {
        "word": "stare",
        "zh": "凝视；盯"
      },
      {
        "word": "stale",
        "zh": "陈腐的；不新鲜的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "scale",
        "zh": "等级；尺度；阶梯"
      },
      {
        "word": "tier",
        "zh": "梯级；层次"
      },
      {
        "word": "grade",
        "zh": "等级；年级"
      },
      {
        "word": "ladder",
        "zh": "阶梯；途径"
      }
    ],
    "notes": "【搭配考点】pay scale (工资级别表) / on a large scale (大规模地)；【形近辨析】scare (使恐惧/惊吓)，stare (凝视/瞪视)，stale (不新鲜的/陈旧的)；【近义辨析】tier 强调多层结构中的分层级，grade 侧重产品品质档次或学业成绩，ladder 强调职场向上攀爬的职业阶梯，在构成既定薪级表固定术语时唯一契合 scale。"
  },
  "sculpture": {
    "word": "sculpture",
    "zh": "雕塑；雕刻品",
    "translation": "雕塑；雕刻品",
    "cloze": {
      "sentence": "The marble ______ was carefully restored by expert conservators at the museum.",
      "original": "The marble sculpture was carefully restored by expert conservators at the museum.",
      "translation": "这座大理石雕塑被博物馆的资深文物修复专家精心修复。"
    },
    "form_confusables": [
      {
        "word": "sculpture",
        "zh": "雕塑；雕刻品"
      },
      {
        "word": "script",
        "zh": "剧本；字迹"
      },
      {
        "word": "structure",
        "zh": "结构；建筑物"
      },
      {
        "word": "rupture",
        "zh": "破裂；断裂"
      }
    ],
    "semantic_confusables": [
      {
        "word": "sculpture",
        "zh": "雕塑；雕像"
      },
      {
        "word": "statue",
        "zh": "雕像；塑像"
      },
      {
        "word": "monument",
        "zh": "纪念碑；遗迹"
      },
      {
        "word": "carving",
        "zh": "雕刻品"
      }
    ],
    "notes": "【搭配考点】marble sculpture / bronze sculpture 强调三维立体雕塑艺术或雕塑作品；【形近辨析】script (剧本/脚本)，structure (建筑/结构)，rupture (决裂/破裂)；【近义辨析】statue 专指人物或动物的全身立像，monument 侧重纪念性建筑或纪念碑，carving 强调木雕或石刻等平面凹凸雕工，在此处泛指立体大理石艺术雕塑整体唯一契合 sculpture。"
  },
  "campaign": {
    "word": "campaign",
    "zh": "运动；竞选活动；战役",
    "translation": "运动；竞选活动；战役",
    "cloze": {
      "sentence": "The charity launched a nationwide ______ to raise awareness of mental health issues.",
      "original": "The charity launched a nationwide campaign to raise awareness of mental health issues.",
      "translation": "该慈善机构发起了一场全国性的宣传运动，以提高公众对心理健康问题的关注。"
    },
    "form_confusables": [
      {
        "word": "campaign",
        "zh": "战役；运动；竞选活动"
      },
      {
        "word": "champion",
        "zh": "冠军；捍卫者"
      },
      {
        "word": "camp",
        "zh": "营地；露营"
      },
      {
        "word": "companion",
        "zh": "同伴；伙伴"
      }
    ],
    "semantic_confusables": [
      {
        "word": "campaign",
        "zh": "运动；宣传活动"
      },
      {
        "word": "drive",
        "zh": "有组织的运动；募捐活动"
      },
      {
        "word": "movement",
        "zh": "政治或社会运动"
      },
      {
        "word": "crusade",
        "zh": "长期的改革斗争；圣战"
      }
    ],
    "notes": "【搭配考点】launch a nationwide campaign 发起全国性活动/宣传运动；【形近辨析】champion (冠军/拥护者)，camp (露营/营地)，companion (伴侣/同伴)；【近义辨析】drive 侧重短期有明确特定目标的动员冲击（如 blood drive），movement 侧重自下而上持久庞大的历史社会思潮运动，crusade 带有强烈的道义与狂热斗争色彩，在此处由机构发起的大型组织宣传活动唯一契合 campaign。"
  },
  "champion": {
    "word": "champion",
    "zh": "冠军；支持者；捍卫者",
    "translation": "冠军；支持者；捍卫者",
    "cloze": {
      "sentence": "The reigning world ______ will defend her title against a formidable challenger tonight.",
      "original": "The reigning world champion will defend her title against a formidable challenger tonight.",
      "translation": "卫冕世界冠军今晚将迎接一位强劲挑战者，为保卫她的冠军头衔而战。"
    },
    "form_confusables": [
      {
        "word": "champion",
        "zh": "冠军；捍卫者"
      },
      {
        "word": "campaign",
        "zh": "战役；竞选运动"
      },
      {
        "word": "champagne",
        "zh": "香槟酒"
      },
      {
        "word": "championship",
        "zh": "锦标赛；冠军称号"
      }
    ],
    "semantic_confusables": [
      {
        "word": "champion",
        "zh": "冠军；优胜者"
      },
      {
        "word": "winner",
        "zh": "获胜者；赢家"
      },
      {
        "word": "victor",
        "zh": "胜利者；战胜者"
      },
      {
        "word": "titleholder",
        "zh": "卫冕者；头衔拥有者"
      }
    ],
    "notes": "【搭配考点】reigning world champion 现役/卫冕世界冠军；【形近辨析】campaign (运动/战役)，champagne (香槟酒)，championship (锦标赛/夺冠状态)；【近义辨析】winner 泛指任何单场或抽奖获胜的人，victor 多用于战争或重大抗争中的胜利方，titleholder 侧重法律或赛事头衔持有者，在体育赛场上代表登顶至高宝座的冠军唯一契合 champion。"
  },
  "chance": {
    "word": "chance",
    "zh": "机会；几率；偶然",
    "translation": "机会；几率；偶然",
    "cloze": {
      "sentence": "After a disappointing start, the team is now in with a good ______ of winning the title.",
      "original": "After a disappointing start, the team is now in with a good chance of winning the title.",
      "translation": "在一场令人失望的开局之后，该队现在重新获得了夺冠的大好机会。"
    },
    "form_confusables": [
      {
        "word": "chance",
        "zh": "机会；几率；偶然"
      },
      {
        "word": "change",
        "zh": "改变；找零"
      },
      {
        "word": "charm",
        "zh": "魅力；护身符"
      },
      {
        "word": "charge",
        "zh": "收费；控告；冲锋"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chance",
        "zh": "机会；可能性"
      },
      {
        "word": "opportunity",
        "zh": "良机；时机"
      },
      {
        "word": "possibility",
        "zh": "可能性"
      },
      {
        "word": "probability",
        "zh": "几率；概率"
      }
    ],
    "notes": "【搭配考点】in with a chance of 有很大希望/有赢得...的机会（高频习语）；【形近辨析】change (改变/零钱)，charm (魅力/吸引力)，charge (收费/指控)；【近义辨析】opportunity 强调主观上可利用的有利良机，possibility 强调理论上的存在可能，probability 侧重数学统计上的概率大小，在 in with a chance of 固定习语搭配中唯一契合 chance。"
  },
  "candidate": {
    "word": "candidate",
    "zh": "候选人；申请人",
    "translation": "候选人；申请人",
    "cloze": {
      "sentence": "She decided to stand as a parliamentary ______ in the upcoming general election.",
      "original": "She decided to stand as a parliamentary candidate in the upcoming general election.",
      "translation": "她决定在即将到来的大选中作为议会候选人参选。"
    },
    "form_confusables": [
      {
        "word": "candidate",
        "zh": "候选人；应试者"
      },
      {
        "word": "calculate",
        "zh": "计算；推测"
      },
      {
        "word": "dedicate",
        "zh": "致力于；献出"
      },
      {
        "word": "candid",
        "zh": "坦诚的；直率的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "candidate",
        "zh": "候选人；竞争者"
      },
      {
        "word": "applicant",
        "zh": "申请人；应征者"
      },
      {
        "word": "nominee",
        "zh": "被提名人"
      },
      {
        "word": "contender",
        "zh": "竞争者；角逐者"
      }
    ],
    "notes": "【搭配考点】stand as a candidate / run as a candidate 竞选候选人；【形近辨析】calculate (计算)，dedicate (奉献/致力于)，candid (率直坦诚的，源于同根 cand-白)；【近义辨析】applicant 侧重递交求职信或申请书的申请者，nominee 侧重已被某机构官方正式提名的代表，contender 强调争夺冠军或职位的竞争对抗者，在政治选举被提名参选的正式身份上唯一契合 candidate。"
  },
  "channel": {
    "word": "channel",
    "zh": "频道；途径；海峡",
    "translation": "频道；途径；海峡",
    "cloze": {
      "sentence": "The local news team decided to broadcast the report on their official YouTube ______.",
      "original": "The local news team decided to broadcast the report on their official YouTube channel.",
      "translation": "当地新闻团队决定在其官方YouTube频道上播出这篇报道。"
    },
    "form_confusables": [
      {
        "word": "channel",
        "zh": "频道；渠道；海峡"
      },
      {
        "word": "chapel",
        "zh": "小礼拜堂"
      },
      {
        "word": "tunnel",
        "zh": "隧道；地下通道"
      },
      {
        "word": "cancel",
        "zh": "取消"
      }
    ],
    "semantic_confusables": [
      {
        "word": "channel",
        "zh": "频道；途径；通道"
      },
      {
        "word": "conduit",
        "zh": "导管；传递渠道"
      },
      {
        "word": "medium",
        "zh": "媒介；手段"
      },
      {
        "word": "route",
        "zh": "路线；途径"
      }
    ],
    "notes": "【搭配考点】TV/YouTube channel 广播电视频道，或渠道途径（channel of communication）；【形近辨析】chapel (小礼拜堂)，tunnel (地道/隧道)，cancel (取消)；【近义辨析】conduit 侧重物理导管或隐蔽的情报资金渠道，medium 侧重传播信息的媒介载体，route 侧重实际行进物理线路，在广播电视与网络专有频道表述上唯一契合 channel。"
  },
  "chapter": {
    "word": "chapter",
    "zh": "章节；篇章；时期",
    "translation": "章节；篇章；时期",
    "cloze": {
      "sentence": "Graduating from college closed one journey and opened a completely new ______ in her life.",
      "original": "Graduating from college closed one journey and opened a completely new chapter in her life.",
      "translation": "大学毕业结束了一段旅程，并开启了她人生中崭新的一章。"
    },
    "form_confusables": [
      {
        "word": "chapter",
        "zh": "章节；篇章；分会"
      },
      {
        "word": "character",
        "zh": "性格；角色；汉字"
      },
      {
        "word": "charter",
        "zh": "宪章；包租"
      },
      {
        "word": "shatter",
        "zh": "粉碎；击碎"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chapter",
        "zh": "篇章；时期；阶段"
      },
      {
        "word": "phase",
        "zh": "阶段；时期"
      },
      {
        "word": "epoch",
        "zh": "新纪元；划时代时期"
      },
      {
        "word": "stage",
        "zh": "舞台；阶段"
      }
    ],
    "notes": "【搭配考点】a new chapter in one's life 开启人生新篇章（高频生动隐喻）；【形近辨析】character (性格/角色)，charter (宪章/特许状)，shatter (粉碎/破灭)；【近义辨析】phase 侧重发展周期中特定的短期阶段，epoch 强调开启历史性新纪元的宏大时代，stage 侧重逐步递进推进的步骤环节，在人生如书的比喻性文学搭配中唯一契合 chapter。"
  },
  "character": {
    "word": "character",
    "zh": "性格；特征；角色；汉字",
    "translation": "性格；特征；角色；汉字",
    "cloze": {
      "sentence": "Adversity does not build ______ so much as it reveals it to the world.",
      "original": "Adversity does not build character so much as it reveals it to the world.",
      "translation": "逆境与其说造就人的性格品质，不如说向世人揭示了其本性。"
    },
    "form_confusables": [
      {
        "word": "character",
        "zh": "性格；角色；文字"
      },
      {
        "word": "characteristic",
        "zh": "特征；特有的"
      },
      {
        "word": "chart",
        "zh": "图表；排行榜"
      },
      {
        "word": "charm",
        "zh": "魅力；吸引力"
      }
    ],
    "semantic_confusables": [
      {
        "word": "character",
        "zh": "品质；性格；品格"
      },
      {
        "word": "personality",
        "zh": "个性；人格"
      },
      {
        "word": "nature",
        "zh": "本性；天性"
      },
      {
        "word": "integrity",
        "zh": "正直；完整品格"
      }
    ],
    "notes": "【搭配考点】build character 磨炼道德品格与坚韧毅力；【形近辨析】characteristic (特征/典型的)，chart (图表/海图)，charm (魅力)；【近义辨析】personality 侧重外在社交表现出来的性格魅力与态度，nature 侧重生来俱有的自然本性，integrity 强调道德操守上的诚实正直，在指经受磨砺体现出的内在道德坚韧品格时唯一契合 character。"
  },
  "characteristic": {
    "word": "characteristic",
    "zh": "特征；特有的",
    "translation": "特征；特有的",
    "cloze": {
      "sentence": "Violent headaches and dizziness are often ______ symptoms of this neurological condition.",
      "original": "Violent headaches and dizziness are often characteristic symptoms of this neurological condition.",
      "translation": "剧烈头痛与眩晕往往是这种神经系统病症的典型症状。"
    },
    "form_confusables": [
      {
        "word": "characteristic",
        "zh": "特有的；特征"
      },
      {
        "word": "characterize",
        "zh": "以...为特征"
      },
      {
        "word": "character",
        "zh": "性格；品格"
      },
      {
        "word": "charisma",
        "zh": "个人魅力；感召力"
      }
    ],
    "semantic_confusables": [
      {
        "word": "characteristic",
        "zh": "典型的；特有的"
      },
      {
        "word": "typical",
        "zh": "典型的；代表性的"
      },
      {
        "word": "distinctive",
        "zh": "与众不同的；独特的"
      },
      {
        "word": "peculiar",
        "zh": "特有的；古怪的"
      }
    ],
    "notes": "【搭配考点】characteristic of / characteristic symptoms 典型的/特有的特征与症状；【形近辨析】characterize (动词：以...为特征/描绘)，character (名词：性格/品格)，charisma (超凡个人魅力)；【近义辨析】typical 侧重符合某一类别的普遍共性常态，distinctive 强调区别于其他事物的一目了然的独特性，peculiar 往往微带奇怪罕见的色彩，在医学与科学上描述某种事物固有的特征性标志时唯一契合 characteristic。"
  },
  "characterize": {
    "word": "characterize",
    "zh": "以...为特征；刻画",
    "translation": "以...为特征；刻画",
    "cloze": {
      "sentence": "Unemployment, rapid inflation, and social unrest began to ______ the economy during that decade.",
      "original": "Unemployment, rapid inflation, and social unrest began to characterize the economy during that decade.",
      "translation": "失业、恶性通货膨胀与社会动荡成为了那个十年间该国经济的显著特征。"
    },
    "form_confusables": [
      {
        "word": "characterize",
        "zh": "以...为特征；描述"
      },
      {
        "word": "criticize",
        "zh": "批评；批判"
      },
      {
        "word": "customize",
        "zh": "定制"
      },
      {
        "word": "centralize",
        "zh": "集中；集权"
      }
    ],
    "semantic_confusables": [
      {
        "word": "characterize",
        "zh": "体现...特征；刻画"
      },
      {
        "word": "define",
        "zh": "定义；界定"
      },
      {
        "word": "distinguish",
        "zh": "区分；使出众"
      },
      {
        "word": "typify",
        "zh": "代表；作为...的典型"
      }
    ],
    "notes": "【搭配考点】be characterized by 以...为显著特征；【形近辨析】criticize (批评/批判)，customize (个性化定制)，centralize (集中/集权)；【近义辨析】define 侧重下定义或划定本质界限，distinguish 侧重通过差异将事物区分开来，typify 侧重作为代表性样本进行体现，在客观描述某一时期或系统最核心的面貌特征时唯一契合 characterize。"
  },
  "chart": {
    "word": "chart",
    "zh": "图表；病历卡；航海图",
    "translation": "图表；病历卡；航海图",
    "cloze": {
      "sentence": "The doctor carefully examined the patient's medical ______ before prescribing antibiotics.",
      "original": "The doctor carefully examined the patient's medical chart before prescribing antibiotics.",
      "translation": "医生在开具抗生素之前，仔细查看了病人的病历记录表。"
    },
    "form_confusables": [
      {
        "word": "chart",
        "zh": "图表；病历卡；海图"
      },
      {
        "word": "chant",
        "zh": "吟唱；圣歌"
      },
      {
        "word": "chat",
        "zh": "聊天"
      },
      {
        "word": "part",
        "zh": "部分；零件"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chart",
        "zh": "病历卡；图表"
      },
      {
        "word": "graph",
        "zh": "坐标图；曲线图"
      },
      {
        "word": "diagram",
        "zh": "示意图；结构图"
      },
      {
        "word": "table",
        "zh": "表格；数据表"
      }
    ],
    "notes": "【搭配考点】medical chart 病历记录表 / sales chart 销售走势图；【形近辨析】chant (吟唱/反复呼喊)，chat (闲聊)，part (部分/角色)；【近义辨析】graph 侧重展现变量函数关系的坐标折线图，diagram 侧重阐释原理运作的结构示意图，table 侧重行列数字的排布清单，而在医疗领域表示综合病历卡档案时固定唯一契合 chart。"
  },
  "chase": {
    "word": "chase",
    "zh": "追捕；追求",
    "translation": "追捕；追求",
    "cloze": {
      "sentence": "The police had to give up the high-speed ______ due to the heavy downpour and poor visibility.",
      "original": "The police had to give up the high-speed chase due to the heavy downpour and poor visibility.",
      "translation": "由于暴雨倾盆且能见度极低，警方不得不放弃了这场高速追捕。"
    },
    "form_confusables": [
      {
        "word": "chase",
        "zh": "追捕；追求"
      },
      {
        "word": "choose",
        "zh": "选择"
      },
      {
        "word": "cease",
        "zh": "停止；终结"
      },
      {
        "word": "phase",
        "zh": "阶段；时期"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chase",
        "zh": "追击；追赶"
      },
      {
        "word": "pursuit",
        "zh": "追踪；追求"
      },
      {
        "word": "hunt",
        "zh": "搜捕；打猎"
      },
      {
        "word": "trace",
        "zh": "追踪；描摹"
      }
    ],
    "notes": "【搭配考点】give up the chase 放弃追捕 / high-speed chase 高速追击；【形近辨析】choose (选择)，cease (终止/停息)，phase (阶段/相位)；【近义辨析】pursuit 较为正式书面，侧重长期的追随或追求（如 the pursuit of happiness），hunt 侧重地毯式搜捕或狩猎猎物，trace 侧重寻找遗留痕迹，在此处强调现场紧张追赶逃犯的动作过程唯一契合 chase。"
  },
  "cheat": {
    "word": "cheat",
    "zh": "欺骗；作弊",
    "translation": "欺骗；作弊",
    "cloze": {
      "sentence": "Anyone caught trying to ______ in the examination will be immediately disqualified.",
      "original": "Anyone caught trying to cheat in the examination will be immediately disqualified.",
      "translation": "任何在考试中被抓到企图作弊的人，将被立即取消考试资格。"
    },
    "form_confusables": [
      {
        "word": "cheat",
        "zh": "作弊；欺骗"
      },
      {
        "word": "cheap",
        "zh": "便宜的；劣质的"
      },
      {
        "word": "treat",
        "zh": "对待；治疗；款待"
      },
      {
        "word": "wheat",
        "zh": "小麦"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cheat",
        "zh": "作弊；欺骗"
      },
      {
        "word": "deceive",
        "zh": "欺骗；蒙蔽"
      },
      {
        "word": "defraud",
        "zh": "诈骗；骗取钱财"
      },
      {
        "word": "swindle",
        "zh": "诈骗；套取"
      }
    ],
    "notes": "【搭配考点】cheat in the exam 考试作弊 / cheat on somebody 背叛伴侣；【形近辨析】cheap (廉价的)，treat (招待/治疗)，wheat (小麦)；【近义辨析】deceive 侧重利用假象隐瞒真相以误导他人，defraud 侧重利用法律或财务漏洞实施金融欺诈，swindle 强调通过巧妙花招骗取金钱财物，而在规则、游戏与考场违规弄虚作假上唯一契合 cheat。"
  },
  "check": {
    "word": "check",
    "zh": "检查；核对；支票；阻碍",
    "translation": "检查；核对；支票；阻碍",
    "cloze": {
      "sentence": "Always ______ that the main power supply is switched off before conducting any repairs.",
      "original": "Always check that the main power supply is switched off before conducting any repairs.",
      "translation": "在进行任何维修操作之前，务必核查总电源是否已经切断。"
    },
    "form_confusables": [
      {
        "word": "check",
        "zh": "核对；检查；抑制"
      },
      {
        "word": "cheek",
        "zh": "脸颊；厚颜"
      },
      {
        "word": "cheer",
        "zh": "欢呼；喝彩"
      },
      {
        "word": "clerk",
        "zh": "职员；店员"
      }
    ],
    "semantic_confusables": [
      {
        "word": "check",
        "zh": "核对；查验"
      },
      {
        "word": "verify",
        "zh": "证实；核实"
      },
      {
        "word": "inspect",
        "zh": "视察；细查"
      },
      {
        "word": "examine",
        "zh": "检查；审视"
      }
    ],
    "notes": "【搭配考点】check that... 核查确保某种事实状态 / double check 复查；【形近辨析】cheek (面颊/厚脸皮)，cheer (欢呼/鼓励)，clerk (办事员/店员)；【近义辨析】verify 强调通过权威证据或步骤证明事实真伪，inspect 侧重带着官方标准实地视察挑刺，examine 强调学术、医学或深入剖析体检，在此处日常安全确认是否关妥操作唯一契合 check。"
  },
  "cheek": {
    "word": "cheek",
    "zh": "脸颊；面颊；厚颜",
    "translation": "脸颊；面颊；厚颜",
    "cloze": {
      "sentence": "Tears rolled down her pale ______ as she listened to the heartbreaking news.",
      "original": "Tears rolled down her pale cheek as she listened to the heartbreaking news.",
      "translation": "当听到这个令人心碎的消息时，泪水顺着她苍白的面颊滑落。"
    },
    "form_confusables": [
      {
        "word": "cheek",
        "zh": "面颊；厚脸皮"
      },
      {
        "word": "check",
        "zh": "检查；支票"
      },
      {
        "word": "cheer",
        "zh": "欢呼；高兴"
      },
      {
        "word": "choke",
        "zh": "窒息；噎住"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cheek",
        "zh": "面颊；面部"
      },
      {
        "word": "face",
        "zh": "脸面"
      },
      {
        "word": "jaw",
        "zh": "下巴；下颌"
      },
      {
        "word": "chin",
        "zh": "下巴；颏"
      }
    ],
    "notes": "【搭配考点】pale cheek 苍白的面颊 / turn the other cheek 逆来顺受/容忍宽恕；【形近辨析】check (核对/检查)，cheer (欢呼/鼓励)，choke (窒息/卡喉)；【近义辨析】face 专指整个面部整体，jaw 指咬合骨骼下颌结构，chin 专指面部最下方的下巴颏尖，在此处眼泪流经的侧脸颊区域唯一契合 cheek。"
  },
  "cheer": {
    "word": "cheer",
    "zh": "欢呼；喝彩；鼓舞",
    "translation": "欢呼；喝彩；鼓舞",
    "cloze": {
      "sentence": "The crowd gave a thunderous ______ as the Olympic athletes entered the stadium.",
      "original": "The crowd gave a thunderous cheer as the Olympic athletes entered the stadium.",
      "translation": "当奥运运动员步入体育场时，全场观众爆发出雷鸣般的欢呼声。"
    },
    "form_confusables": [
      {
        "word": "cheer",
        "zh": "欢呼；喝彩；鼓舞"
      },
      {
        "word": "cheek",
        "zh": "面颊；脸颊"
      },
      {
        "word": "cherry",
        "zh": "樱桃"
      },
      {
        "word": "peer",
        "zh": "同龄人；凝视"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cheer",
        "zh": "欢呼；喝彩"
      },
      {
        "word": "applause",
        "zh": "掌声；喝彩"
      },
      {
        "word": "ovation",
        "zh": "热烈欢呼；鼓掌致敬"
      },
      {
        "word": "shout",
        "zh": "呼喊；喊叫"
      }
    ],
    "notes": "【搭配考点】give a loud/thunderous cheer 发出雷鸣般的欢呼；cheer up 振作起来；【形近辨析】cheek (脸颊)，cherry (樱桃)，peer (同龄人/凝视)；【近义辨析】applause 侧重双手拍打发出的掌声，ovation 强调全场起立致敬的热烈鼓掌欢呼，shout 仅表示大声叫嚷呼喊，在此处指发自肺腑的集体呐喊欢呼唯一契合 cheer。"
  },
  "cheese": {
    "word": "cheese",
    "zh": "奶酪；干酪",
    "translation": "奶酪；干酪",
    "cloze": {
      "sentence": "Sprinkle grated Parmesan ______ over the hot pasta just before serving.",
      "original": "Sprinkle grated Parmesan cheese over the hot pasta just before serving.",
      "translation": "在上桌前，把帕玛森奶酪碎撒在热气腾腾的意面上。"
    },
    "form_confusables": [
      {
        "word": "cheese",
        "zh": "奶酪；干酪"
      },
      {
        "word": "choose",
        "zh": "选择；挑选"
      },
      {
        "word": "chase",
        "zh": "追逐；追赶"
      },
      {
        "word": "cheek",
        "zh": "脸颊；厚颜"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cheese",
        "zh": "奶酪；干酪"
      },
      {
        "word": "butter",
        "zh": "黄油；牛油"
      },
      {
        "word": "dairy",
        "zh": "乳制品"
      },
      {
        "word": "curd",
        "zh": "凝乳；酪蛋白"
      }
    ],
    "notes": "【搭配考点】grated cheese 奶酪碎 / goat's cheese 山羊奶酪；【形近辨析】choose (挑选/选择)，chase (追逐/追捕)，cheek (面颊/厚脸皮)；【近义辨析】butter 专指从牛奶提炼的脂肪黄油，dairy 泛指整个乳制品行业或产品，curd 指牛奶初凝形成的凝乳结块，在此处指经发酵熟化制成的干酪食品唯一契合 cheese。"
  },
  "chef": {
    "word": "chef",
    "zh": "主厨；厨师长",
    "translation": "主厨；厨师长",
    "cloze": {
      "sentence": "The executive ______ at the five-star restaurant designed an exquisite autumn tasting menu.",
      "original": "The executive chef at the five-star restaurant designed an exquisite autumn tasting menu.",
      "translation": "这家五星级餐厅的行政总厨设计了一份精美的秋季品鉴菜单。"
    },
    "form_confusables": [
      {
        "word": "chef",
        "zh": "主厨；厨师长"
      },
      {
        "word": "chief",
        "zh": "首领；主要长官"
      },
      {
        "word": "thief",
        "zh": "小偷；窃贼"
      },
      {
        "word": "brief",
        "zh": "简短的；概要"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chef",
        "zh": "主厨；高级厨师"
      },
      {
        "word": "cook",
        "zh": "厨师；烹调者"
      },
      {
        "word": "baker",
        "zh": "烘焙师；面包师"
      },
      {
        "word": "caterer",
        "zh": "酒席承办商；餐饮供应人"
      }
    ],
    "notes": "【搭配考点】executive chef 行政总厨 / pastry chef 面点厨师长；【形近辨析】chief (主要首脑/长官)，thief (窃贼/小偷)，brief (简短的/摘要)；【近义辨析】cook 泛指在家里或小餐馆做饭的人（注重动作本身），baker 专职制作面包甜点，caterer 侧重大型宴会餐饮配送承包商，在高级餐厅担任专业菜品研发与厨房统领的职业大师唯一契合 chef。"
  },
  "chemical": {
    "word": "chemical",
    "zh": "化学的；化学制品",
    "translation": "化学的；化学制品",
    "cloze": {
      "sentence": "The factory was heavily fined for discharging toxic ______ waste into the local river.",
      "original": "The factory was heavily fined for discharging toxic chemical waste into the local river.",
      "translation": "该工厂因向当地河流排放有毒化学废料而被处以巨额罚款。"
    },
    "form_confusables": [
      {
        "word": "chemical",
        "zh": "化学的；化学品"
      },
      {
        "word": "chemist",
        "zh": "化学家；药剂师"
      },
      {
        "word": "clinical",
        "zh": "临床的；冷漠的"
      },
      {
        "word": "magical",
        "zh": "有魔力的；神奇的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chemical",
        "zh": "化学物质；合成品"
      },
      {
        "word": "compound",
        "zh": "化合物；复合物"
      },
      {
        "word": "substance",
        "zh": "物质；实质"
      },
      {
        "word": "pollutant",
        "zh": "污染物"
      }
    ],
    "notes": "【搭配考点】chemical waste/reaction 化学废料/化学反应；【形近辨析】chemist (化学家/药房)，clinical (临床门诊的/客观冷漠的)，magical (魔术的/极好的)；【近义辨析】compound 侧重多种元素化合而成的特定化合物，substance 泛指一切具有物理属性的物质，pollutant 强调造成污染的结果，在此处修饰人造化学工业产物属性唯一契合 chemical。"
  },
  "chemist": {
    "word": "chemist",
    "zh": "化学家；药剂师；药房",
    "translation": "化学家；药剂师；药房",
    "cloze": {
      "sentence": "You should take this prescription to the local ______ to get your medicine dispensed.",
      "original": "You should take this prescription to the local chemist to get your medicine dispensed.",
      "translation": "你应该把这张处方拿到当地的药房（药剂师处）去配药。"
    },
    "form_confusables": [
      {
        "word": "chemist",
        "zh": "药剂师；化学家；药房"
      },
      {
        "word": "chemical",
        "zh": "化学的；化学品"
      },
      {
        "word": "chemistry",
        "zh": "化学；默契"
      },
      {
        "word": "chest",
        "zh": "胸腔；柜子"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chemist",
        "zh": "药房；药剂师"
      },
      {
        "word": "pharmacist",
        "zh": "药剂师；调剂员"
      },
      {
        "word": "druggist",
        "zh": "药剂师；药商"
      },
      {
        "word": "apothecary",
        "zh": "药房；草药师"
      }
    ],
    "notes": "【搭配考点】go to the chemist's 去药店/药房配药（英式英语高频用法）；【形近辨析】chemical (化学的/化学制品)，chemistry (化学学科/人际吸引力)，chest (胸口/木箱)；【近义辨析】pharmacist 为现代全球通用的药剂师专业职称，druggist 多用于美式英语指药材零售商，apothecary 属于历史古典用词，在英式日常口语中指代街边药店及驻店药剂师最地道且唯一契合 chemist。"
  },
  "chemistry": {
    "word": "chemistry",
    "zh": "化学；化学性质；默契/吸引力",
    "translation": "化学；化学性质；默契/吸引力",
    "cloze": {
      "sentence": "The palpable romantic ______ between the two lead actors made the film an instant hit.",
      "original": "The palpable romantic chemistry between the two lead actors made the film an instant hit.",
      "translation": "两位主角之间显而易见的奇妙默契（化学反应）让这部电影瞬间爆红。"
    },
    "form_confusables": [
      {
        "word": "chemistry",
        "zh": "化学；默契；吸引力"
      },
      {
        "word": "chemical",
        "zh": "化学的；化学品"
      },
      {
        "word": "chemist",
        "zh": "化学家；药剂师"
      },
      {
        "word": "cherry",
        "zh": "樱桃"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chemistry",
        "zh": "化学反应；默契感"
      },
      {
        "word": "rapport",
        "zh": "亲善关系；融洽"
      },
      {
        "word": "attraction",
        "zh": "吸引力；魅力"
      },
      {
        "word": "affinity",
        "zh": "亲近感；密切关系"
      }
    ],
    "notes": "【搭配考点】personal/romantic chemistry 两人之间的默契相投或情感化学反应（高频熟词生义）；【形近辨析】chemical (化学的/化学品)，chemist (药剂师/化学家)，cherry (樱桃)；【近义辨析】rapport 侧重通过沟通建立的良好互信与和谐关系，attraction 强调单向或外貌上的吸引力，affinity 侧重基于相似爱好的亲近感，在此处强调男女演员之间无形而强烈的火花感唯一契合 chemistry。"
  },
  "cherish": {
    "word": "cherish",
    "zh": "珍爱；珍视；怀抱",
    "translation": "珍爱；珍视；怀抱",
    "cloze": {
      "sentence": "I will forever ______ the wonderful memories of our summer journey through the Alps.",
      "original": "I will forever cherish the wonderful memories of our summer journey through the Alps.",
      "translation": "我将永远珍藏并铭记我们阿尔卑斯山夏季之旅的美好回忆。"
    },
    "form_confusables": [
      {
        "word": "cherish",
        "zh": "珍爱；怀念"
      },
      {
        "word": "cheer",
        "zh": "欢呼；高兴"
      },
      {
        "word": "parish",
        "zh": "教区"
      },
      {
        "word": "perish",
        "zh": "丧生；凋谢"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cherish",
        "zh": "珍爱；铭记"
      },
      {
        "word": "treasure",
        "zh": "珍视；珍藏"
      },
      {
        "word": "value",
        "zh": "重视；尊重"
      },
      {
        "word": "appreciate",
        "zh": "感激；欣赏"
      }
    ],
    "notes": "【搭配考点】cherish memories/hopes 珍藏美好回忆或怀抱希望；【形近辨析】cheer (欢呼/喝彩)，parish (教堂教区)，perish (毁灭/死亡，常混考 perish vs cherish)；【近义辨析】treasure 侧重如对待珠宝般万分宝贵地收藏，value 侧重从价值或重要性角度客观评估看重，appreciate 侧重领略美感或表达感谢，在注入深厚温情与眷恋的珍视上唯一契合 cherish。"
  },
  "chest": {
    "word": "chest",
    "zh": "胸部；箱子；柜子",
    "translation": "胸部；箱子；柜子",
    "cloze": {
      "sentence": "He clutched his painful ______ in agony and called an emergency ambulance.",
      "original": "He clutched his painful chest in agony and called an emergency ambulance.",
      "translation": "他痛苦地紧紧捂住疼痛难忍的胸口，拨打了急救救护车电话。"
    },
    "form_confusables": [
      {
        "word": "chest",
        "zh": "胸口；木箱"
      },
      {
        "word": "cheat",
        "zh": "欺骗；作弊"
      },
      {
        "word": "chase",
        "zh": "追逐"
      },
      {
        "word": "crest",
        "zh": "顶峰；浪尖"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chest",
        "zh": "胸口；胸膛"
      },
      {
        "word": "breast",
        "zh": "胸部；胸怀"
      },
      {
        "word": "thorax",
        "zh": "胸腔；胸腹部"
      },
      {
        "word": "torso",
        "zh": "躯干"
      }
    ],
    "notes": "【搭配考点】chest pain 胸痛 / treasure chest 藏宝箱；【形近辨析】cheat (欺骗/作弊)，chase (追逐)，crest (山顶/羽冠)；【近义辨析】breast 偏向女性乳房或诗意象征心扉，thorax 属于生物学与医学解剖专用术语（胸廓），torso 专指除头与四肢之外的整个人体躯干，在此处日常描述身体胸膛部位剧痛唯一契合 chest。"
  },
  "child": {
    "word": "child",
    "zh": "儿童；小孩",
    "translation": "儿童；小孩",
    "cloze": {
      "sentence": "The charity organization works tirelessly to protect every vulnerable ______ from poverty and abuse.",
      "original": "The charity organization works tirelessly to protect every vulnerable child from poverty and abuse.",
      "translation": "该慈善机构不知疲倦地工作，以保护每一个弱势儿童免遭贫困与虐待。"
    },
    "form_confusables": [
      {
        "word": "child",
        "zh": "儿童；小孩"
      },
      {
        "word": "chill",
        "zh": "寒冷；冷却"
      },
      {
        "word": "chin",
        "zh": "下巴"
      },
      {
        "word": "mild",
        "zh": "温和的；轻微的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "child",
        "zh": "儿童；小孩"
      },
      {
        "word": "kid",
        "zh": "小孩；少年"
      },
      {
        "word": "youngster",
        "zh": "少年；幼童"
      },
      {
        "word": "infant",
        "zh": "婴儿；幼儿"
      }
    ],
    "notes": "【搭配考点】vulnerable child 弱势儿童 / child support 抚养费；【形近辨析】chill (寒战/受凉)，chin (下巴)，mild (温和轻微的)；【近义辨析】kid 属于口语和非正式用语，youngster 偏向精力充沛的青少年，infant 严格指刚出生不久的母乳期婴儿，在正式慈善救助与法定未成年人表述上唯一契合 child。"
  },
  "childhood": {
    "word": "childhood",
    "zh": "童年；幼年时代",
    "translation": "童年；幼年时代",
    "cloze": {
      "sentence": "She spent a delightfully happy ______ running freely across the rolling hills of Wales.",
      "original": "She spent a delightfully happy childhood running freely across the rolling hills of Wales.",
      "translation": "她在威尔士连绵起伏的山丘间自由奔跑，度过了一段无比快乐的童年。"
    },
    "form_confusables": [
      {
        "word": "childhood",
        "zh": "童年；幼年"
      },
      {
        "word": "boyhood",
        "zh": "少年时代；男童时期"
      },
      {
        "word": "likelihood",
        "zh": "可能性"
      },
      {
        "word": "neighborhood",
        "zh": "邻里；街坊"
      }
    ],
    "semantic_confusables": [
      {
        "word": "childhood",
        "zh": "童年时期"
      },
      {
        "word": "youth",
        "zh": "青年时期；青春"
      },
      {
        "word": "infancy",
        "zh": "婴儿期；初期"
      },
      {
        "word": "adolescence",
        "zh": "青春期"
      }
    ],
    "notes": "【搭配考点】happy childhood / in early childhood 童年时代/在童年早期；【形近辨析】boyhood (男童时期/少年时代)，likelihood (可能性)，neighborhood (邻里社区)；【近义辨析】youth 涵盖青少年乃至年轻成年时期，infancy 专指婴儿初生阶段或事物萌芽期，adolescence 严格指十三四岁到十八岁的青春发育期，在指人生自幼童到少年的整个成长阶段唯一契合 childhood。"
  },
  "chip": {
    "word": "chip",
    "zh": "芯片；碎片；炸薯条；削下",
    "translation": "芯片；碎片；炸薯条；削下",
    "cloze": {
      "sentence": "A breakthrough in semiconductor design allows billions of transistors on a single silicon ______.",
      "original": "A breakthrough in semiconductor design allows billions of transistors on a single silicon chip.",
      "translation": "半导体设计领域的突破使得在单个硅芯片上集成数十亿个晶体管成为可能。"
    },
    "form_confusables": [
      {
        "word": "chip",
        "zh": "芯片；碎片"
      },
      {
        "word": "chop",
        "zh": "砍；剁碎"
      },
      {
        "word": "chin",
        "zh": "下巴"
      },
      {
        "word": "clip",
        "zh": "回形针；剪辑；夹子"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chip",
        "zh": "芯片；微处理器"
      },
      {
        "word": "semiconductor",
        "zh": "半导体"
      },
      {
        "word": "microchip",
        "zh": "微芯片"
      },
      {
        "word": "wafer",
        "zh": "晶圆；薄片"
      }
    ],
    "notes": "【搭配考点】silicon chip 硅芯片 / microchip 微型芯片；【形近辨析】chop (斩剁/排骨)，chin (下巴)，clip (夹子/剪短/修剪)；【近义辨析】semiconductor 指半导体材料或泛指整个器件类别，microchip 虽近义但在此处 silicon chip 构成了行业内最经典普遍的固定搭配，wafer 专指切削出来尚未封装的裸晶圆盘，在此处唯一契合 chip。"
  },
  "choke": {
    "word": "choke",
    "zh": "窒息；噎住；抑制",
    "translation": "窒息；噎住；抑制",
    "cloze": {
      "sentence": "The thick black smoke from the burning warehouse caused several firefighters to ______ violently.",
      "original": "The thick black smoke from the burning warehouse caused several firefighters to choke violently.",
      "translation": "起火仓库冒出的浓密黑烟导致几名消防员剧烈窒息呛咳。"
    },
    "form_confusables": [
      {
        "word": "choke",
        "zh": "窒息；噎住"
      },
      {
        "word": "cheek",
        "zh": "脸颊"
      },
      {
        "word": "joke",
        "zh": "笑话；玩笑"
      },
      {
        "word": "clock",
        "zh": "时钟"
      }
    ],
    "semantic_confusables": [
      {
        "word": "choke",
        "zh": "窒息；呛住"
      },
      {
        "word": "suffocate",
        "zh": "使窒息死；闷死"
      },
      {
        "word": "smother",
        "zh": "使窒息；抑制"
      },
      {
        "word": "strangle",
        "zh": "勒死；绞死"
      }
    ],
    "notes": "【搭配考点】choke on smoke / choke with emotion 被烟呛住窒息/激动哽咽；【形近辨析】cheek (面部脸颊)，joke (玩笑)，clock (钟表)；【近义辨析】suffocate 强调因缺氧而窒息死亡的结果，smother 侧重用厚物覆盖闷熄火苗或捂死，strangle 强调外力死死卡掐颈部勒毙，在此处形容被烟雾呛得喉咙受阻咳嗽唯一契合 choke。"
  },
  "choose": {
    "word": "choose",
    "zh": "选择；挑选",
    "translation": "选择；挑选",
    "cloze": {
      "sentence": "Consumers should be empowered to ______ freely between competing suppliers in the market.",
      "original": "Consumers should be empowered to choose freely between competing suppliers in the market.",
      "translation": "应当赋予消费者在市场上相互竞争的供应商之间自由选择的权利。"
    },
    "form_confusables": [
      {
        "word": "choose",
        "zh": "挑选；选择"
      },
      {
        "word": "chase",
        "zh": "追逐"
      },
      {
        "word": "cheese",
        "zh": "奶酪"
      },
      {
        "word": "chore",
        "zh": "家务杂事"
      }
    ],
    "semantic_confusables": [
      {
        "word": "choose",
        "zh": "选择；挑选"
      },
      {
        "word": "select",
        "zh": "精选；甄选"
      },
      {
        "word": "elect",
        "zh": "选举；推选"
      },
      {
        "word": "pick",
        "zh": "挑选；采摘"
      }
    ],
    "notes": "【搭配考点】choose freely between... 在两者或多者中自由选择；【形近辨析】chase (追逐/追击)，cheese (奶酪)，chore (日常家务杂活)；【近义辨析】select 侧重带有严格高标准去精心甄选剔除劣质，elect 专指通过投票机制推举政治人选，pick 属于口语日常随手挑选，在强调主观意志与自由决定权时唯一契合 choose。"
  },
  "chop": {
    "word": "chop",
    "zh": "砍；劈；剁碎；排骨",
    "translation": "砍；劈；剁碎；排骨",
    "cloze": {
      "sentence": "Use a sharp knife to ______ the garlic and fresh herbs into tiny pieces.",
      "original": "Use a sharp knife to chop the garlic and fresh herbs into tiny pieces.",
      "translation": "用锋利的刀将大蒜和新鲜香草切剁成细碎小块。"
    },
    "form_confusables": [
      {
        "word": "chop",
        "zh": "剁碎；砍断"
      },
      {
        "word": "chip",
        "zh": "芯片；削成碎片"
      },
      {
        "word": "crop",
        "zh": "庄稼；修剪"
      },
      {
        "word": "drop",
        "zh": "落下；掉落"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chop",
        "zh": "剁碎；切碎"
      },
      {
        "word": "slice",
        "zh": "切成薄片"
      },
      {
        "word": "dice",
        "zh": "切成方块丁"
      },
      {
        "word": "mince",
        "zh": "绞碎；剁成肉糜"
      }
    ],
    "notes": "【搭配考点】chop into tiny pieces 切碎/剁成细块；chop down a tree 砍倒大树；【形近辨析】chip (碎屑/芯片)，crop (农作物/平头)，drop (水滴/跌落)；【近义辨析】slice 专指切成整齐平整的薄片，dice 专指切成规则的小立方体肉丁菜丁，mince 强调极细极烂的绞肉操作，在此处用刀反复下切粗细均匀的切剁唯一契合 chop。"
  },
  "cigarette": {
    "word": "cigarette",
    "zh": "香烟；纸烟",
    "translation": "香烟；纸烟",
    "cloze": {
      "sentence": "Smoking a single ______ delivers thousands of toxic chemical compounds into human lungs.",
      "original": "Smoking a single cigarette delivers thousands of toxic chemical compounds into human lungs.",
      "translation": "仅仅吸一支香烟，就会将数千种有毒化合物送入人体肺部。"
    },
    "form_confusables": [
      {
        "word": "cigarette",
        "zh": "香烟；纸烟"
      },
      {
        "word": "cigar",
        "zh": "雪茄烟"
      },
      {
        "word": "vignette",
        "zh": "花絮；小品"
      },
      {
        "word": "etiquette",
        "zh": "礼仪；规矩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cigarette",
        "zh": "香烟；卷烟"
      },
      {
        "word": "cigar",
        "zh": "雪茄"
      },
      {
        "word": "smoke",
        "zh": "烟；抽烟"
      },
      {
        "word": "tobacco",
        "zh": "烟草；烟叶"
      }
    ],
    "notes": "【搭配考点】light/smoke a cigarette 点燃/抽一支香烟；cigarette pack 烟盒；【形近辨析】cigar (雪茄烟，无纸卷滤嘴纯烟叶)，vignette (插图/生活剪影)，etiquette (社交礼仪)；【近义辨析】cigar 特指粗大的全纯烟叶雪茄，smoke 是不可数烟雾或泛称口语抽烟，tobacco 指作为农产品原料的烟草烟叶，在此处指机卷带过滤嘴的单支纸卷烟唯一契合 cigarette。"
  },
  "cinema": {
    "word": "cinema",
    "zh": "电影院；电影艺术",
    "translation": "电影院；电影艺术",
    "cloze": {
      "sentence": "Classic European ______ has exerted a profound influence on modern American filmmaking.",
      "original": "Classic European cinema has exerted a profound influence on modern American filmmaking.",
      "translation": "经典的欧洲电影艺术对现代美国电影制作产生了极其深远的影响。"
    },
    "form_confusables": [
      {
        "word": "cinema",
        "zh": "电影院；电影艺术"
      },
      {
        "word": "climate",
        "zh": "气候"
      },
      {
        "word": "chrome",
        "zh": "铬；铬合金"
      },
      {
        "word": "scheme",
        "zh": "方案；计谋"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cinema",
        "zh": "电影业；电影艺术；影院"
      },
      {
        "word": "movie",
        "zh": "电影；影片"
      },
      {
        "word": "film",
        "zh": "胶片；电影制作"
      },
      {
        "word": "theater",
        "zh": "剧院；电影院"
      }
    ],
    "notes": "【搭配考点】European/contemporary cinema 泛指特定流派的电影艺术文化与电影工业；【形近辨析】climate (气候/大环境)，chrome (铬金属/谷歌浏览器内核)，scheme (规划/阴谋诡计)；【近义辨析】movie 偏美式口语侧重商业片实体娱乐，film 偏严肃艺术创作拍摄，theater 侧重带舞台的物理放映剧场，在此处作为宏观文化与银幕艺术流派表述唯一契合 cinema。"
  },
  "circle": {
    "word": "circle",
    "zh": "圆形；圈子；盘旋",
    "translation": "圆形；圈子；盘旋",
    "cloze": {
      "sentence": "The reconnaissance aircraft continued to ______ slowly above the contested border region.",
      "original": "The reconnaissance aircraft continued to circle slowly above the contested border region.",
      "translation": "侦察机继续在存在争议的边境地区上空缓慢盘旋。"
    },
    "form_confusables": [
      {
        "word": "circle",
        "zh": "圆圈；盘旋"
      },
      {
        "word": "circuit",
        "zh": "电路；巡回赛"
      },
      {
        "word": "circulate",
        "zh": "循环；流传"
      },
      {
        "word": "circus",
        "zh": "马戏团"
      }
    ],
    "semantic_confusables": [
      {
        "word": "circle",
        "zh": "盘旋；打圈"
      },
      {
        "word": "hover",
        "zh": "盘旋；悬停"
      },
      {
        "word": "orbit",
        "zh": "沿轨道环绕"
      },
      {
        "word": "revolve",
        "zh": "旋转；围绕运转"
      }
    ],
    "notes": "【搭配考点】circle above/over 在某地上空盘旋绕飞；inner circle 核心朋友圈；【形近辨析】circuit (环路/电路)，circulate (动词：流通/传播)，circus (马戏表演团)；【近义辨析】hover 侧重直升机等在固定空中位置静止悬停，orbit 强调人造卫星在外太空沿特定天体引力轨道公转，revolve 强调物体绕轴心旋转自转，飞机沿水平圆形路径飞行盘旋唯一契合 circle。"
  },
  "circuit": {
    "word": "circuit",
    "zh": "电路；巡回；环形路线",
    "translation": "电路；巡回；环形路线",
    "cloze": {
      "sentence": "An electrical short ______ in the basement triggered the building's automated fire alarm.",
      "original": "An electrical short circuit in the basement triggered the building's automated fire alarm.",
      "translation": "地下室的一处电气短路触发了该建筑的自动火灾警报。"
    },
    "form_confusables": [
      {
        "word": "circuit",
        "zh": "电路；回路；巡回"
      },
      {
        "word": "circus",
        "zh": "马戏团"
      },
      {
        "word": "circle",
        "zh": "圆圈；盘旋"
      },
      {
        "word": "biscuit",
        "zh": "饼干"
      }
    ],
    "semantic_confusables": [
      {
        "word": "circuit",
        "zh": "电路；回路"
      },
      {
        "word": "loop",
        "zh": "环路；回路"
      },
      {
        "word": "route",
        "zh": "线路；途径"
      },
      {
        "word": "channel",
        "zh": "通道；频道"
      }
    ],
    "notes": "【搭配考点】short circuit 短路（固定高频电工术语）；racing/lecture circuit 巡回演讲/巡回锦标赛；【形近辨析】circus (马戏团)，circle (圆形/盘旋)，biscuit (饼干)；【近义辨析】loop 强调代码循环或导线物理环状闭环，route 强调旅行通勤线路，channel 侧重流通导管通路，在此处与 short 搭配构成电流非正常闭合故障的专业术语唯一契合 circuit。"
  },
  "circulate": {
    "word": "circulate",
    "zh": "循环；流通；传播",
    "translation": "循环；流通；传播",
    "cloze": {
      "sentence": "The heart pumps oxygenated blood to ______ throughout every vital organ in the body.",
      "original": "The heart pumps oxygenated blood to circulate throughout every vital organ in the body.",
      "translation": "心脏搏动泵出富氧血液，使其在全身各重要器官中顺畅循环。"
    },
    "form_confusables": [
      {
        "word": "circulate",
        "zh": "循环；流通；流传"
      },
      {
        "word": "calculate",
        "zh": "计算；推测"
      },
      {
        "word": "articulate",
        "zh": "清晰表达"
      },
      {
        "word": "stimulate",
        "zh": "刺激；激励"
      }
    ],
    "semantic_confusables": [
      {
        "word": "circulate",
        "zh": "循环；流通"
      },
      {
        "word": "flow",
        "zh": "流动；顺畅流经"
      },
      {
        "word": "distribute",
        "zh": "分发；散布"
      },
      {
        "word": "cycle",
        "zh": "循环往复"
      }
    ],
    "notes": "【搭配考点】blood circulates 血液循环；rumours circulate 谣言流传；【形近辨析】calculate (计算)，articulate (口齿清晰地表达)，stimulate (刺激/激发)；【近义辨析】flow 强调流体单一方向顺势流淌，distribute 侧重从中心节点向外部扩散分发，spread 强调事态或病毒向四周蔓延扩散，在封闭闭环系统中有规律流动循环唯一契合 circulate。"
  },
  "circumstance": {
    "word": "circumstance",
    "zh": "情况；形势；境况",
    "translation": "情况；形势；境况",
    "cloze": {
      "sentence": "Under no ______ should visitors enter the laboratory without proper protective equipment.",
      "original": "Under no circumstance should visitors enter the laboratory without proper protective equipment.",
      "translation": "在任何情况下，参观者绝不应在未佩戴适当防护装备的情况下进入实验室。"
    },
    "form_confusables": [
      {
        "word": "circumstance",
        "zh": "情况；境遇"
      },
      {
        "word": "stance",
        "zh": "立场；姿态"
      },
      {
        "word": "substance",
        "zh": "物质；实质"
      },
      {
        "word": "distance",
        "zh": "距离"
      }
    ],
    "semantic_confusables": [
      {
        "word": "circumstance",
        "zh": "情况；客观条件"
      },
      {
        "word": "condition",
        "zh": "条件；状况"
      },
      {
        "word": "situation",
        "zh": "局势；处境"
      },
      {
        "word": "state",
        "zh": "状态；情况"
      }
    ],
    "notes": "【搭配考点】under no circumstance(s) 绝不/在任何情况下都不（高频倒装句核心考点）；【形近辨析】stance (政治立场/站姿)，substance (实质/物质)，distance (距离)；【近义辨析】condition 强调健康生理状态或合同前提条件，situation 侧重当下所处的动态综合局势，state 强调事物某一瞬间的静止状态，在构成强力否定状语从句“在任何情况下”固定搭配中唯一契合 circumstance。"
  },
  "cite": {
    "word": "cite",
    "zh": "引用；引述；传讯",
    "translation": "引用；引述；传讯",
    "cloze": {
      "sentence": "The researcher had to ______ several peer-reviewed articles to substantiate his bold hypothesis.",
      "original": "The researcher had to cite several peer-reviewed articles to substantiate his bold hypothesis.",
      "translation": "该研究人员不得不引用数篇经同行评审的学术论文来证实他大胆的假说。"
    },
    "form_confusables": [
      {
        "word": "cite",
        "zh": "引用；引证"
      },
      {
        "word": "site",
        "zh": "遗址；地点；网站"
      },
      {
        "word": "sight",
        "zh": "视力；景象"
      },
      {
        "word": "bite",
        "zh": "咬；叮"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cite",
        "zh": "引用；举出"
      },
      {
        "word": "quote",
        "zh": "原话引用；引述"
      },
      {
        "word": "mention",
        "zh": "提及；谈起"
      },
      {
        "word": "reference",
        "zh": "引用参考；提及"
      }
    ],
    "notes": "【搭配考点】cite examples/articles 引用文献论据或援引例证；【形近辨析】site (地点/场所/遗址)，sight (视力/视觉风光)，bite (咬伤/一口)；【近义辨析】quote 严格指一字不差地摘抄原文原话，mention 仅为漫不经心地随口提起，reference 侧重在文末或注释中给出参考出处，在此处作为学术论文举证支持论点的正式学术动作唯一契合 cite。"
  },
  "citizen": {
    "word": "citizen",
    "zh": "公民；市民",
    "translation": "公民；市民",
    "cloze": {
      "sentence": "Every law-abiding ______ is entitled to exercise the constitutional right to vote.",
      "original": "Every law-abiding citizen is entitled to exercise the constitutional right to vote.",
      "translation": "每一位遵纪守法的公民都有权行使其宪法赋予的选举投票权。"
    },
    "form_confusables": [
      {
        "word": "citizen",
        "zh": "公民；国民"
      },
      {
        "word": "civilization",
        "zh": "文明"
      },
      {
        "word": "city",
        "zh": "城市"
      },
      {
        "word": "civil",
        "zh": "民事的；公民的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "citizen",
        "zh": "享有权利的公民"
      },
      {
        "word": "resident",
        "zh": "居民；常住人口"
      },
      {
        "word": "inhabitant",
        "zh": "栖居者；居民"
      },
      {
        "word": "subject",
        "zh": "臣民；国民"
      }
    ],
    "notes": "【搭配考点】law-abiding/ordinary citizen 守法公民/普通市民；dual citizen 双重国籍公民；【形近辨析】civilization (人类文明)，city (城市)，civil (民事的/有礼貌的)；【近义辨析】resident 仅指在某地居住具备居住证的居民并不必然享有政治选票，inhabitant 偏地理学强调某个区域的栖居者或土著，subject 专指君主制国家的封臣百姓，在强调拥有宪法政治投票权利的法律资格上唯一契合 citizen。"
  },
  "city": {
    "word": "city",
    "zh": "城市；都市",
    "translation": "城市；都市",
    "cloze": {
      "sentence": "Rapid urban migration has transformed the coastal town into a bustling global ______.",
      "original": "Rapid urban migration has transformed the coastal town into a bustling global city.",
      "translation": "快速的城镇人口迁徙已将这座海滨小镇蜕变成一座繁华的全球化大都市。"
    },
    "form_confusables": [
      {
        "word": "city",
        "zh": "城市；大都市"
      },
      {
        "word": "pity",
        "zh": "怜悯；遗憾"
      },
      {
        "word": "cite",
        "zh": "引用"
      },
      {
        "word": "citizen",
        "zh": "市民；公民"
      }
    ],
    "semantic_confusables": [
      {
        "word": "city",
        "zh": "大城市；都市"
      },
      {
        "word": "metropolis",
        "zh": "大都会；首邑"
      },
      {
        "word": "municipality",
        "zh": "自治市；市政当局"
      },
      {
        "word": "town",
        "zh": "市镇；集镇"
      }
    ],
    "notes": "【搭配考点】global/capital city 国际化大都市/首都城市；city council 市议会；【形近辨析】pity (同情/令人惋惜之事)，cite (引用/传讯)，citizen (城市公民)；【近义辨析】metropolis 强调区域政治文化与商业核心超级都会，municipality 专指具有独立地方行政管理权的市政建制体，town 规模远小于城市多指小集镇，在此处与 global 搭配构成“全球城市”标准规范术语唯一契合 city。"
  },
  "civil": {
    "word": "civil",
    "zh": "公民的；民事的；彬彬有礼的",
    "translation": "公民的；民事的；彬彬有礼的",
    "cloze": {
      "sentence": "Despite their bitter political rivalry, the opposing debaters remained remarkably ______ toward each other.",
      "original": "Despite their bitter political rivalry, the opposing debaters remained remarkably civil toward each other.",
      "translation": "尽管政治竞争十分激烈，辩论双方依然对彼此保持着令人赞叹的彬彬有礼与克制。"
    },
    "form_confusables": [
      {
        "word": "civil",
        "zh": "公民的；民事的；有礼貌的"
      },
      {
        "word": "civic",
        "zh": "市政的；公民义务的"
      },
      {
        "word": "evil",
        "zh": "邪恶的"
      },
      {
        "word": "rival",
        "zh": "竞争对手；匹敌"
      }
    ],
    "semantic_confusables": [
      {
        "word": "civil",
        "zh": "有礼貌的；客气的"
      },
      {
        "word": "polite",
        "zh": "有礼貌的；客气的"
      },
      {
        "word": "courteous",
        "zh": "彬彬有礼的；谦恭的"
      },
      {
        "word": "respectful",
        "zh": "恭敬的；尊重的"
      }
    ],
    "notes": "【搭配考点】civil rights 公民权利；remain civil 保持表面礼貌与客气；civil case 民事诉讼；【形近辨析】civic (专指属于市民社区职责的，如 civic duty)，evil (邪恶的)，rival (竞争对手)；【近义辨析】polite 属于普遍意义上的知书达理，courteous 带有高雅绅士风度，respectful 强调发自内心的敬重，而在存在敌意或紧张氛围下依然克制脾气、维持最低限度社交礼节的品性唯一契合 civil。"
  },
  "civilian": {
    "word": "civilian",
    "zh": "平民；百姓",
    "translation": "平民；百姓",
    "cloze": {
      "sentence": "The newly signed peace treaty strictly forbids military attacks on innocent ______ targets.",
      "original": "The newly signed peace treaty strictly forbids military attacks on innocent civilian targets.",
      "translation": "新签署的和平条约严禁针对无辜平民目标的任何军事打击。"
    },
    "form_confusables": [
      {
        "word": "civilian",
        "zh": "平民；百姓"
      },
      {
        "word": "civil",
        "zh": "民事的；公民的"
      },
      {
        "word": "silicon",
        "zh": "硅；硅元素"
      },
      {
        "word": "villain",
        "zh": "恶棍；反派"
      }
    ],
    "semantic_confusables": [
      {
        "word": "civilian",
        "zh": "平民；非军职人员"
      },
      {
        "word": "citizen",
        "zh": "公民"
      },
      {
        "word": "noncombatant",
        "zh": "非战斗人员"
      },
      {
        "word": "layman",
        "zh": "外行；门外汉"
      }
    ],
    "notes": "【搭配考点】civilian casualties/targets 平民伤亡/平民目标；return to civilian life 复员回到平民生活；【形近辨析】civil (公民的/民事的)，silicon (硅元素)，villain (坏人/反派角色)；【近义辨析】citizen 强调政治权利与国籍身份，noncombatant 专指战场上的医护、战地记者等非战斗员，layman 侧重某学科或技术专业领域的外行门外汉，在同正规军队军职人员形成严格区分的普通群众概念上唯一契合 civilian。"
  },
  "civilization": {
    "word": "civilization",
    "zh": "文明；文化；开化",
    "translation": "文明；文化；开化",
    "cloze": {
      "sentence": "The invention of written language marked the dawn of human ______.",
      "original": "The invention of written language marked the dawn of human civilization.",
      "translation": "文字的发明标志着人类文明的破晓与开端。"
    },
    "form_confusables": [
      {
        "word": "civilization",
        "zh": "文明；文化"
      },
      {
        "word": "citizen",
        "zh": "公民；市民"
      },
      {
        "word": "civil",
        "zh": "公民的；民事的"
      },
      {
        "word": "civilian",
        "zh": "平民；百姓"
      }
    ],
    "semantic_confusables": [
      {
        "word": "civilization",
        "zh": "文明社会；文化"
      },
      {
        "word": "culture",
        "zh": "文化；习俗"
      },
      {
        "word": "society",
        "zh": "社会；社团"
      },
      {
        "word": "empire",
        "zh": "帝国；大企业"
      }
    ],
    "notes": "【搭配考点】human/ancient civilization 人类文明/古代文明；cradle of civilization 文明摇篮；【形近辨析】citizen (公民)，civil (民事的/有礼的)，civilian (平民)；【近义辨析】culture 侧重精神艺术与生活习俗传统，society 侧重群体人际组织架构，empire 强调政治军事武力征服建立的庞大帝国，在代表人类社会脱离原始蒙昧达到高度组织与技术阶梯的总体文明形态上唯一契合 civilization。"
  },
  "claim": {
    "word": "claim",
    "zh": "声称；主张；索赔；认领",
    "translation": "声称；主张；索赔；认领",
    "cloze": {
      "sentence": "The defendant continued to ______ that he had acted strictly in legitimate self-defence.",
      "original": "The defendant continued to claim that he had acted strictly in legitimate self-defence.",
      "translation": "被告人坚称自己的行为完全属于正当防卫。"
    },
    "form_confusables": [
      {
        "word": "claim",
        "zh": "声称；索赔"
      },
      {
        "word": "climb",
        "zh": "攀登；爬"
      },
      {
        "word": "clam",
        "zh": "蛤蜊"
      },
      {
        "word": "acclaim",
        "zh": "喝彩；称赞"
      }
    ],
    "semantic_confusables": [
      {
        "word": "claim",
        "zh": "声称；自称"
      },
      {
        "word": "assert",
        "zh": "断言；坚定主张"
      },
      {
        "word": "allege",
        "zh": "指控；指称"
      },
      {
        "word": "declare",
        "zh": "宣布；宣称"
      }
    ],
    "notes": "【搭配考点】claim that... 声称/坚称某事；lay claim to 对...提出所有权索求；【形近辨析】climb (攀爬)，clam (蛤蜊/闭口不言)，acclaim (欢呼/喝彩赞誉)；【近义辨析】assert 侧重满怀信心地硬气坚持立场，allege 强调在未经法庭证实前的主张指控，declare 侧重公开正式宣告，在无确凿独立旁证下为自身利益辩护声称时唯一契合 claim。"
  },
  "clap": {
    "word": "clap",
    "zh": "拍手；鼓掌；霹雳声",
    "translation": "拍手；鼓掌；霹雳声",
    "cloze": {
      "sentence": "The delighted audience began to ______ and cheer as the soloist completed her performance.",
      "original": "The delighted audience began to clap and cheer as the soloist completed her performance.",
      "translation": "当独奏家完成演奏时，欣喜的观众开始鼓掌欢呼。"
    },
    "form_confusables": [
      {
        "word": "clap",
        "zh": "拍手；鼓掌"
      },
      {
        "word": "flap",
        "zh": "拍打；飘动"
      },
      {
        "word": "slap",
        "zh": "巴掌抽打；掌掴"
      },
      {
        "word": "clip",
        "zh": "夹子；剪辑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clap",
        "zh": "鼓掌；击掌"
      },
      {
        "word": "applaud",
        "zh": "鼓掌；称赞"
      },
      {
        "word": "cheer",
        "zh": "欢呼；喝彩"
      },
      {
        "word": "praise",
        "zh": "赞扬；称赞"
      }
    ],
    "notes": "【搭配考点】clap and cheer 鼓掌并欢呼；clap one's hands 拍手；a clap of thunder 一声炸雷；【形近辨析】flap (鸟翼拍打/旗帜飘动)，slap (狠狠掌掴/拍击耳光)，clip (回形针/修剪)；【近义辨析】applaud 较为正式，泛指以鼓掌方式表达赞赏，cheer 强调口头呐喊呼号，praise 强调言语上的高度评价夸奖，在此处强调两掌相拍发出清脆物理声响的直接动作唯一契合 clap。"
  },
  "clarify": {
    "word": "clarify",
    "zh": "澄清；阐明；使明朗",
    "translation": "澄清；阐明；使明朗",
    "cloze": {
      "sentence": "The government spokesperson issued a statement to ______ several misleading rumors about the tax policy.",
      "original": "The government spokesperson issued a statement to clarify several misleading rumors about the tax policy.",
      "translation": "政府发言人发表声明，对有关税收政策的数条误导性传言予以澄清。"
    },
    "form_confusables": [
      {
        "word": "clarify",
        "zh": "澄清；阐明"
      },
      {
        "word": "classify",
        "zh": "分类；分级"
      },
      {
        "word": "glorify",
        "zh": "颂扬；美化"
      },
      {
        "word": "verify",
        "zh": "证实；核验"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clarify",
        "zh": "澄清；阐明"
      },
      {
        "word": "elucidate",
        "zh": "阐释；说明"
      },
      {
        "word": "explain",
        "zh": "解释；说明"
      },
      {
        "word": "illuminate",
        "zh": "照亮；阐明"
      }
    ],
    "notes": "【搭配考点】clarify the situation/position 澄清事实真相或表明立场；【形近辨析】classify (分类/分等)，glorify (赞美/光荣化)，verify (核实/证实)；【近义辨析】elucidate 属于高度学术严肃用语深入解析深奥理论，explain 偏通俗日常讲明因果缘由，illuminate 偏文艺修辞用光照亮隐喻启发，在此处针对公众误解或含混不清之处进行梳理说明使之清白分明唯一契合 clarify。"
  },
  "clash": {
    "word": "clash",
    "zh": "冲突；抵触；撞击",
    "translation": "冲突；抵触；撞击",
    "cloze": {
      "sentence": "Protesters and riot police were locked in a violent ______ outside the parliament building.",
      "original": "Protesters and riot police were locked in a violent clash outside the parliament building.",
      "translation": "抗议者与防暴警察在议会大厦外陷入了一场激烈的正面肢体冲突。"
    },
    "form_confusables": [
      {
        "word": "clash",
        "zh": "冲突；撞击"
      },
      {
        "word": "crash",
        "zh": "撞碎；坠毁；暴跌"
      },
      {
        "word": "flash",
        "zh": "闪光；闪现"
      },
      {
        "word": "smash",
        "zh": "粉碎；扣杀"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clash",
        "zh": "冲突；对抗"
      },
      {
        "word": "conflict",
        "zh": "冲突；矛盾"
      },
      {
        "word": "collision",
        "zh": "碰撞；抵触"
      },
      {
        "word": "confrontation",
        "zh": "对抗；对峙"
      }
    ],
    "notes": "【搭配考点】violent clash between... 双方之间的暴力冲突；head-on clash 正面交锋；【形近辨析】crash (车辆失事/电脑崩溃)，flash (闪光/一刹那)，smash (猛砸打碎)；【近义辨析】conflict 侧重长期的利益理念不合或武装战争状态，collision 强调高速运动物体的直接物理碰撞，confrontation 侧重怒目相视剑拔弩张的僵持状态，在此处指街头爆发的短兵相接突发混战唯一契合 clash。"
  },
  "classic": {
    "word": "classic",
    "zh": "经典的；典范的；名著",
    "translation": "经典的；典范的；名著",
    "cloze": {
      "sentence": "The tragic miscommunication between the departments was a ______ example of corporate bureaucracy.",
      "original": "The tragic miscommunication between the departments was a classic example of corporate bureaucracy.",
      "translation": "各部门之间令人啼笑皆非的沟通不畅，正是企业官僚主义的典型范例。"
    },
    "form_confusables": [
      {
        "word": "classic",
        "zh": "经典的；典型的；名著"
      },
      {
        "word": "classical",
        "zh": "古典的；经典传统的"
      },
      {
        "word": "plastic",
        "zh": "塑料的；可塑的"
      },
      {
        "word": "classy",
        "zh": "优美高雅的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "classic",
        "zh": "典型的；典范的"
      },
      {
        "word": "typical",
        "zh": "典型的；代表性的"
      },
      {
        "word": "archetypal",
        "zh": "原型的；典型的"
      },
      {
        "word": "exemplary",
        "zh": "典范的；模范的"
      }
    ],
    "notes": "【搭配考点】a classic example 经典范例/典型写照（高频固定搭配）；classic novel 经典名著；【形近辨析】classical (严谨古典乐、古希腊罗马古典文化的，如 classical music)，plastic (塑料/可塑的)，classy (时髦高级的)；【近义辨析】typical 仅指符合常规平均水准的普通代表，archetypal 侧重心理学或文艺神话中的原始母题，exemplary 侧重道德楷模值得学习表彰，而在讽刺或评点事物最具代表性戏剧特质的“典型范例”搭配中唯一契合 classic。"
  },
  "classify": {
    "word": "classify",
    "zh": "分类；分级；归类",
    "translation": "分类；分级；归类",
    "cloze": {
      "sentence": "Biologists usually ______ living organisms according to their evolutionary lineages.",
      "original": "Biologists usually classify living organisms according to their evolutionary lineages.",
      "translation": "生物学家通常根据生物的进化谱系对其进行科学分类。"
    },
    "form_confusables": [
      {
        "word": "classify",
        "zh": "分类；分等"
      },
      {
        "word": "clarify",
        "zh": "澄清；使明晰"
      },
      {
        "word": "testify",
        "zh": "作证；证明"
      },
      {
        "word": "notify",
        "zh": "通知；告知"
      }
    ],
    "semantic_confusables": [
      {
        "word": "classify",
        "zh": "分类；归类"
      },
      {
        "word": "categorize",
        "zh": "归入类别"
      },
      {
        "word": "sort",
        "zh": "分拣；整理"
      },
      {
        "word": "group",
        "zh": "分组；聚合"
      }
    ],
    "notes": "【搭配考点】classify... according to/into 按照某种科学标准分类；classified information 机密涉密信息；【形近辨析】clarify (澄清/讲清楚)，testify (法庭出庭作证)，notify (正式通知)；【近义辨析】categorize 强调按照属性标签装入各自抽屉类别，sort 偏向日常把杂乱无章的东西按大小颜色物理挑拣分拣，group 侧重把彼此靠近的人或物聚集到一起，在遵循系统严谨的科学谱系与等级定性归类上唯一契合 classify。"
  },
  "clause": {
    "word": "clause",
    "zh": "从句；条款",
    "translation": "从句；条款",
    "cloze": {
      "sentence": "Both parties agreed to insert a strict confidentiality ______ into the employment contract.",
      "original": "Both parties agreed to insert a strict confidentiality clause into the employment contract.",
      "translation": "双方同意在雇佣合同中加入严格的保密条款。"
    },
    "form_confusables": [
      {
        "word": "clause",
        "zh": "条款；从句"
      },
      {
        "word": "pause",
        "zh": "暂停；中止"
      },
      {
        "word": "cause",
        "zh": "原因；导致"
      },
      {
        "word": "applause",
        "zh": "鼓掌；喝彩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clause",
        "zh": "法律条款；分句"
      },
      {
        "word": "provision",
        "zh": "条款；规定；供应"
      },
      {
        "word": "stipulation",
        "zh": "约定；规定"
      },
      {
        "word": "article",
        "zh": "条款；文章；物品"
      }
    ],
    "notes": "【搭配考点】confidentiality/penalty clause 保密条款/违约罚则条款；relative clause 语法定语从句；【形近辨析】pause (停顿)，cause (原因/引发)，applause (掌声)；【近义辨析】provision 侧重合同在宏观上设立的权责安排与法律规定，stipulation 强调谈判中达成的具体苛刻约定，article 侧重宪法或法典中编撰成章的大条款序号，而在商业合同特定短款子项名称上唯一契合 clause。"
  },
  "clay": {
    "word": "clay",
    "zh": "陶土；黏土",
    "translation": "陶土；黏土",
    "cloze": {
      "sentence": "The talented sculptor molded the wet ______ into a lifelike bust of a child.",
      "original": "The talented sculptor molded the wet clay into a lifelike bust of a child.",
      "translation": "这位富有天赋的雕塑家将湿润的陶土塑成了一尊栩栩如生的小孩半身像。"
    },
    "form_confusables": [
      {
        "word": "clay",
        "zh": "陶土；黏土"
      },
      {
        "word": "play",
        "zh": "玩耍；戏剧"
      },
      {
        "word": "slay",
        "zh": "杀戮；残杀"
      },
      {
        "word": "tray",
        "zh": "托盘"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clay",
        "zh": "黏土；陶土"
      },
      {
        "word": "mud",
        "zh": "烂泥；泥浆"
      },
      {
        "word": "silt",
        "zh": "淤泥；残渣"
      },
      {
        "word": "dirt",
        "zh": "尘垢；泥土"
      }
    ],
    "notes": "【搭配考点】wet clay 湿陶土；clay pottery 陶器；feet of clay 致命弱点/人格污点；【形近辨析】play (玩耍/演奏)，slay (斩杀/屠杀)，tray (托盘)；【近义辨析】mud 纯指混杂大量脏水的稀烂稀泥，silt 专指河流冲积沉淀在河床底部的细沙淤泥，dirt 泛指地面的灰尘泥土或污物，而专指具有高可塑性、可烧制陶瓷或塑像的特殊黏性矿物土质唯一契合 clay。"
  },
  "clean": {
    "word": "clean",
    "zh": "打扫；干净的；清洁的",
    "translation": "打扫；干净的；清洁的",
    "cloze": {
      "sentence": "Access to safe, ______ drinking water is recognized as a fundamental human right.",
      "original": "Access to safe, clean drinking water is recognized as a fundamental human right.",
      "translation": "获得安全、清洁的饮用水被公认为一项基本人权。"
    },
    "form_confusables": [
      {
        "word": "clean",
        "zh": "干净的；清洁"
      },
      {
        "word": "clear",
        "zh": "清晰的；明确的"
      },
      {
        "word": "lean",
        "zh": "倾斜；瘦肉"
      },
      {
        "word": "glean",
        "zh": "收集；拾遗"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clean",
        "zh": "洁净的；无污染的"
      },
      {
        "word": "pure",
        "zh": "纯净的；纯正的"
      },
      {
        "word": "sanitary",
        "zh": "卫生的；清洁的"
      },
      {
        "word": "spotless",
        "zh": "一尘不染的"
      }
    ],
    "notes": "【搭配考点】clean drinking water 清洁饮用水；keep clean 保持卫生；clean energy 清洁能源；【形近辨析】clear (明澈的/清晰的)，lean (倚靠/倾斜/无脂肪的)，glean (艰难搜集/拾麦穗)；【近义辨析】pure 强调不含任何杂质的化学或道德纯粹，sanitary 侧重预防疾病的公共卫生条件合格，spotless 强调表面毫无污点纤尘不染，在描述日常水质与能源未被脏污污染的状态上唯一契合 clean。"
  },
  "clear": {
    "word": "clear",
    "zh": "清晰的；明白的；清除",
    "translation": "清晰的；明白的；清除",
    "cloze": {
      "sentence": "The supervisor gave ______ and precise instructions to avoid any further misunderstandings.",
      "original": "The supervisor gave clear and precise instructions to avoid any further misunderstandings.",
      "translation": "主管给出了清晰明了且准确的指令，以避免任何进一步的误解。"
    },
    "form_confusables": [
      {
        "word": "clear",
        "zh": "清晰的；明确的"
      },
      {
        "word": "clean",
        "zh": "干净的；打扫"
      },
      {
        "word": "clerk",
        "zh": "职员"
      },
      {
        "word": "spear",
        "zh": "矛；标枪"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clear",
        "zh": "清晰的；明白的"
      },
      {
        "word": "distinct",
        "zh": "截然不同的；清晰的"
      },
      {
        "word": "explicit",
        "zh": "明确的；直白的"
      },
      {
        "word": "obvious",
        "zh": "显而易见的"
      }
    ],
    "notes": "【搭配考点】clear instructions/evidence 清晰的指令/确凿的证据；make clear 明确阐述；【形近辨析】clean (干净整洁的)，clerk (办事员)，spear (标枪)；【近义辨析】distinct 侧重轮廓边缘分明容易辨识，explicit 强调毫无保留字面直接点透绝无含蓄，obvious 侧重显而易见一目了然不需动脑，在此处修饰言辞通俗透明没有混淆语义唯一契合 clear。"
  },
  "clerk": {
    "word": "clerk",
    "zh": "店员；职员；办事员",
    "translation": "店员；职员；办事员",
    "cloze": {
      "sentence": "He submitted his official application documents directly to the municipal court ______.",
      "original": "He submitted his official application documents directly to the municipal court clerk.",
      "translation": "他将官方申请文件直接提交给了市法院的书记官。"
    },
    "form_confusables": [
      {
        "word": "clerk",
        "zh": "职员；店员；书记官"
      },
      {
        "word": "cloak",
        "zh": "斗篷；掩饰"
      },
      {
        "word": "clock",
        "zh": "钟表"
      },
      {
        "word": "clear",
        "zh": "清晰的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clerk",
        "zh": "办事员；书记员"
      },
      {
        "word": "secretary",
        "zh": "秘书；干事"
      },
      {
        "word": "assistant",
        "zh": "助手；助理"
      },
      {
        "word": "receptionist",
        "zh": "接待员"
      }
    ],
    "notes": "【搭配考点】court clerk 法院书记官；bank/desk clerk 银行职员/前台接待；【形近辨析】cloak (斗篷/遮盖物)，clock (时钟)，clear (清晰明白的)；【近义辨析】secretary 专指辅助高管安排日程处理文书的私人或官方秘书，assistant 强调辅助他人工作的协作者助手，receptionist 专职负责大堂前台迎送接待登记，在此处从事法院登记、归档等文牍文职事务专员唯一契合 clerk。"
  },
  "clever": {
    "word": "clever",
    "zh": "聪明的；机灵的；精巧的",
    "translation": "聪明的；机灵的；精巧的",
    "cloze": {
      "sentence": "The marketing team came up with a ______ advertising campaign that went viral within hours.",
      "original": "The marketing team came up with a clever advertising campaign that went viral within hours.",
      "translation": "营销团队想出了一场极为巧妙机智的广告活动，在几小时内便在网上疯传。"
    },
    "form_confusables": [
      {
        "word": "clever",
        "zh": "聪明的；机灵的"
      },
      {
        "word": "clover",
        "zh": "三叶草"
      },
      {
        "word": "lever",
        "zh": "杠杆；控制杆"
      },
      {
        "word": "fever",
        "zh": "发烧；发热"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clever",
        "zh": "聪明机智的；精巧的"
      },
      {
        "word": "ingenious",
        "zh": "精巧的；别出心裁的"
      },
      {
        "word": "smart",
        "zh": "敏锐聪慧的"
      },
      {
        "word": "shrewd",
        "zh": "精明的；敏锐的"
      }
    ],
    "notes": "【搭配考点】clever idea/device 机巧的点子/巧妙的装置；clever at 擅长...；【形近辨析】clover (三叶草/红花草)，lever (杠杆/操纵杆)，fever (发烧/狂热)；【近义辨析】ingenious 强调结构复杂、设计别出心裁的极致精巧，smart 侧重思维反应敏捷或行事得体，shrewd 侧重涉及商业金钱或政治时的老练精明，在此处修饰点子机灵灵光一闪的巧思唯一契合 clever。"
  },
  "client": {
    "word": "client",
    "zh": "委托人；客户",
    "translation": "委托人；客户",
    "cloze": {
      "sentence": "The defense attorney held a confidential consultation with his ______ before the trial commenced.",
      "original": "The defense attorney held a confidential consultation with his client before the trial commenced.",
      "translation": "辩护律师在庭审开始前与其委托人进行了一次保密磋商。"
    },
    "form_confusables": [
      {
        "word": "client",
        "zh": "客户；委托人"
      },
      {
        "word": "climate",
        "zh": "气候；风气"
      },
      {
        "word": "cliff",
        "zh": "悬崖"
      },
      {
        "word": "silent",
        "zh": "沉默的；安静的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "client",
        "zh": "专业服务客户；委托人"
      },
      {
        "word": "customer",
        "zh": "商铺顾客；买家"
      },
      {
        "word": "patron",
        "zh": "老主顾；赞助人"
      },
      {
        "word": "consumer",
        "zh": "最终消费者"
      }
    ],
    "notes": "【搭配考点】client confidentiality 客户保密原则；attorney-client privilege 律师与当事人保密特权；【形近辨析】climate (气候环境)，cliff (绝壁)，silent (寂静无声的)；【近义辨析】customer 专指在商场超市买东西或饭店消费的普通散客，patron 侧重艺术展馆饭店的资助者或常客老主顾，consumer 是宏观经济学中产品终端消费者，在律师、会计师、咨询公司等高端专业服务领域接受顾问服务的当事人唯一契合 client。"
  },
  "cliff": {
    "word": "cliff",
    "zh": "悬崖；绝壁",
    "translation": "悬崖；绝壁",
    "cloze": {
      "sentence": "The ancient stone lighthouse stood perched high on a steep ______ overlooking the turbulent Atlantic.",
      "original": "The ancient stone lighthouse stood perched high on a steep cliff overlooking the turbulent Atlantic.",
      "translation": "古老的石造灯塔耸立在一座俯瞰汹涌大西洋的陡峭悬崖之上。"
    },
    "form_confusables": [
      {
        "word": "cliff",
        "zh": "悬崖；绝壁"
      },
      {
        "word": "client",
        "zh": "客户；委托人"
      },
      {
        "word": "stiff",
        "zh": "僵硬的；坚硬的"
      },
      {
        "word": "sniff",
        "zh": "闻；抽鼻子"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cliff",
        "zh": "海岸悬崖；绝壁"
      },
      {
        "word": "precipice",
        "zh": "险峻峭壁；悬崖边缘"
      },
      {
        "word": "bluff",
        "zh": "直立悬崖；绝壁"
      },
      {
        "word": "crag",
        "zh": "崎岖岩壁；峭壁"
      }
    ],
    "notes": "【搭配考点】steep/sheer cliff 陡峭的/刀削般的悬崖；cliff-hanger 悬念故事；【形近辨析】client (客户/委托人)，stiff (僵直生硬的)，sniff (吸鼻子/嗅探)；【近义辨析】precipice 文艺色彩浓郁常喻指破产或灾难边缘，bluff 侧重沿河或海边宽阔平坦且垂直的断崖（兼有诈唬之意），crag 特指犬牙交错、怪石突兀的崎岖裸岩，在海滨耸立的大型陡直岩壁地理实体上唯一契合 cliff。"
  },
  "climate": {
    "word": "climate",
    "zh": "气候；风气；局势",
    "translation": "气候；风气；局势",
    "cloze": {
      "sentence": "The rapid pace of global ______ change is causing polar ice sheets to melt at an unprecedented rate.",
      "original": "The rapid pace of global climate change is causing polar ice sheets to melt at an unprecedented rate.",
      "translation": "全球气候变化的飞快速度正导致极地冰盖以前所未有的速度消融。"
    },
    "form_confusables": [
      {
        "word": "climate",
        "zh": "气候；风气"
      },
      {
        "word": "climax",
        "zh": "高潮；顶点"
      },
      {
        "word": "cinema",
        "zh": "电影院"
      },
      {
        "word": "intimate",
        "zh": "亲密的；暗示"
      }
    ],
    "semantic_confusables": [
      {
        "word": "climate",
        "zh": "宏观气候；时代风尚"
      },
      {
        "word": "weather",
        "zh": "即时天气；气象"
      },
      {
        "word": "atmosphere",
        "zh": "大气层；氛围"
      },
      {
        "word": "environment",
        "zh": "自然环境；周边环境"
      }
    ],
    "notes": "【搭配考点】climate change 气候变化（全球核心术语）；political/investment climate 政治风向/投资环境；【形近辨析】climax (小说故事的高潮/顶峰)，cinema (电影院)，intimate (亲密的/宣布)；【近义辨析】weather 专指某一天或某一小时局部的刮风下雨（不可数瞬时状态），atmosphere 侧重某个房间现场的心理氛围或地球大气层，environment 泛指生态大自然周围总条件，指跨越数十年百年漫长时间周期的宏观气候与社会大势唯一契合 climate。"
  },
  "cling": {
    "word": "cling",
    "zh": "紧抓；执着；依附",
    "translation": "紧抓；执着；依附",
    "cloze": {
      "sentence": "The terrified child began to ______ desperately to his mother's coat during the earthquake.",
      "original": "The terrified child began to cling desperately to his mother's coat during the earthquake.",
      "translation": "地震期间，受惊的孩子绝望地紧紧拽着母亲的大衣不放。"
    },
    "form_confusables": [
      {
        "word": "cling",
        "zh": "紧抓；依附"
      },
      {
        "word": "fling",
        "zh": "猛投；扔"
      },
      {
        "word": "sling",
        "zh": "挂绳；吊起"
      },
      {
        "word": "ring",
        "zh": "戒指；铃声"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cling",
        "zh": "紧紧抱住；依附"
      },
      {
        "word": "grasp",
        "zh": "抓住；领会"
      },
      {
        "word": "clutch",
        "zh": "死死抓住；紧握"
      },
      {
        "word": "stick",
        "zh": "黏附；粘贴"
      }
    ],
    "notes": "【搭配考点】cling to/on to 紧紧抓住不放；cling to hope 抱有一线希望；【形近辨析】fling (用力扔甩/纵情跳跃)，sling (吊带/投石器/挂起)，ring (圆环/铃响)；【近义辨析】grasp 侧重有意识伸手握住或理解掌握知识，clutch 强调在极度恐慌急迫中一把死死抠抓，stick 侧重胶水胶带式的物理黏合，在此处因依赖、恐慌而双手长时间死缠不放唯一契合 cling。"
  },
  "clinic": {
    "word": "clinic",
    "zh": "诊所；门诊部",
    "translation": "诊所；门诊部",
    "cloze": {
      "sentence": "She made an appointment at the local dental ______ to have a decayed tooth examined.",
      "original": "She made an appointment at the local dental clinic to have a decayed tooth examined.",
      "translation": "她在当地的牙科诊所预约了看诊，检查一颗蛀牙。"
    },
    "form_confusables": [
      {
        "word": "clinic",
        "zh": "诊所；门诊部"
      },
      {
        "word": "clinical",
        "zh": "临床的；冷漠的"
      },
      {
        "word": "panic",
        "zh": "恐慌"
      },
      {
        "word": "cynic",
        "zh": "愤世嫉俗者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clinic",
        "zh": "专科诊所；门诊部"
      },
      {
        "word": "dispensary",
        "zh": "药房；诊所"
      },
      {
        "word": "surgery",
        "zh": "诊室；门诊所"
      },
      {
        "word": "infirmary",
        "zh": "医务室；疗养院"
      }
    ],
    "notes": "【搭配考点】dental/health clinic 牙科/健康诊所；run a clinic 开设门诊；【形近辨析】clinical (临床的/缺乏感情的)，panic (惊慌失措)，cynic (玩世不恭者)；【近义辨析】dispensary 侧重配药发药的小药局，surgery 在英式英语中兼指全科医生的门诊诊疗室，infirmary 专指学校、监狱或兵营内部设立的小型医务室，而在城镇中专注于特定专科门诊检查治疗的小型独立医疗机构唯一契合 clinic。"
  },
  "clip": {
    "word": "clip",
    "zh": "剪辑；夹子；修剪",
    "translation": "剪辑；夹子；修剪",
    "cloze": {
      "sentence": "The teacher played a brief video ______ to demonstrate how volcanic eruptions occur.",
      "original": "The teacher played a brief video clip to demonstrate how volcanic eruptions occur.",
      "translation": "老师播放了一段简短的视频剪辑片段，以演示火山喷发是如何发生的。"
    },
    "form_confusables": [
      {
        "word": "clip",
        "zh": "剪辑；夹子；削短"
      },
      {
        "word": "chip",
        "zh": "芯片；碎屑"
      },
      {
        "word": "flip",
        "zh": "翻转；掷"
      },
      {
        "word": "slip",
        "zh": "滑倒；纸条"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clip",
        "zh": "视频片段；剪辑"
      },
      {
        "word": "excerpt",
        "zh": "摘录；节选"
      },
      {
        "word": "snippet",
        "zh": "小片段；小道消息"
      },
      {
        "word": "footage",
        "zh": "影像资料；镜头"
      }
    ],
    "notes": "【搭配考点】video/audio clip 视频/音频剪辑片段；paper clip 回形针；【形近辨析】chip (集成电路芯片/土豆片)，flip (快速翻转)，slip (滑跌/纸条便签)；【近义辨析】excerpt 侧重从文学巨著或长篇演说中摘抄的正式引言文字，snippet 强调零星散碎随手截取的小片断语，footage 侧重未经剪辑编辑的原生态新闻拍摄素材胶片，在此处用于多媒体教学演示的独立小段剪辑唯一契合 clip。"
  },
  "clock": {
    "word": "clock",
    "zh": "时钟；钟表",
    "translation": "时钟；钟表",
    "cloze": {
      "sentence": "The antique grandfather ______ in the hallway chimed loudly every hour on the dot.",
      "original": "The antique grandfather clock in the hallway chimed loudly every hour on the dot.",
      "translation": "门厅里那台古老的落地式大座钟每到整点都会发出响亮的报时钟声。"
    },
    "form_confusables": [
      {
        "word": "clock",
        "zh": "时钟；座钟"
      },
      {
        "word": "cloak",
        "zh": "斗篷；遮蔽"
      },
      {
        "word": "block",
        "zh": "街区；阻碍"
      },
      {
        "word": "lock",
        "zh": "锁；锁定"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clock",
        "zh": "时钟；座钟"
      },
      {
        "word": "watch",
        "zh": "手表；腕表"
      },
      {
        "word": "timepiece",
        "zh": "计时器；钟表"
      },
      {
        "word": "chronometer",
        "zh": "精密记时计"
      }
    ],
    "notes": "【搭配考点】grandfather clock 落地长摆大钟；around the clock 昼夜不停地；clock in/out 打卡上下班；【形近辨析】cloak (斗篷/假面具)，block (大楼/障碍物)，lock (门锁)；【近义辨析】watch 专指佩戴在手腕上的随身手表，timepiece 属于典雅书面语涵盖所有计时艺术仪器，chronometer 专指航海或航空极端环境下的精密计时陀飞轮仪表，固定摆放在墙壁或地面的大型鸣钟器具唯一契合 clock。"
  },
  "clone": {
    "word": "clone",
    "zh": "克隆；复制品；无性繁殖",
    "translation": "克隆；复制品；无性繁殖",
    "cloze": {
      "sentence": "In 1996, Scottish researchers made global history by successfully creating Dolly, the first mammal ______.",
      "original": "In 1996, Scottish researchers made global history by successfully creating Dolly, the first mammal clone.",
      "translation": "1996年，苏格兰科研人员成功创造了多莉——世界上第一只克隆哺乳动物，创造了全球历史。"
    },
    "form_confusables": [
      {
        "word": "clone",
        "zh": "克隆；复制品"
      },
      {
        "word": "clown",
        "zh": "小丑"
      },
      {
        "word": "cone",
        "zh": "圆锥体；蛋筒"
      },
      {
        "word": "alone",
        "zh": "单独的；独自"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clone",
        "zh": "克隆体；无性克隆"
      },
      {
        "word": "replica",
        "zh": "精密复制品；仿制品"
      },
      {
        "word": "duplicate",
        "zh": "完全相同的副本"
      },
      {
        "word": "photocopy",
        "zh": "影印件；复印件"
      }
    ],
    "notes": "【搭配考点】first mammal clone 第一只克隆哺乳动物；clone an animal 克隆动物；【形近辨析】clown (马戏团小丑)，cone (圆锥/冰淇淋甜筒)，alone (孤独独自的)；【近义辨析】replica 侧重艺术品、模型按原样手工精确复刻的实体，duplicate 侧重公文钥匙等一式两份的副本，photocopy 专指静电复印纸质复印件，在分子生物学利用体细胞核移植培育无性繁殖生命体上唯一契合 clone。"
  },
  "cloth": {
    "word": "cloth",
    "zh": "布料；织物；抹布",
    "translation": "布料；织物；抹布",
    "cloze": {
      "sentence": "She used a damp microfiber ______ to wipe the sticky coffee stains off the wooden table.",
      "original": "She used a damp microfiber cloth to wipe the sticky coffee stains off the wooden table.",
      "translation": "她用一块湿润的超细纤维抹布擦掉了木桌上黏糊糊的咖啡污渍。"
    },
    "form_confusables": [
      {
        "word": "cloth",
        "zh": "布；织物；抹布"
      },
      {
        "word": "clothe",
        "zh": "给...穿衣"
      },
      {
        "word": "clothes",
        "zh": "衣服；服装"
      },
      {
        "word": "cloud",
        "zh": "云彩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cloth",
        "zh": "布匹；抹布"
      },
      {
        "word": "fabric",
        "zh": "纺织品；面料"
      },
      {
        "word": "rag",
        "zh": "破布；抹布"
      },
      {
        "word": "textile",
        "zh": "纺织品；织物"
      }
    ],
    "notes": "【搭配考点】damp cloth 湿布/抹布；cut one's coat according to one's cloth 量入为出；【形近辨析】clothe (动词：为...提供衣服穿)，clothes (复数名词：成套衣服)，cloud (云朵)；【近义辨析】fabric 侧重作为服装加工原料的面料质感与纤维构造，rag 强调破旧撕碎残缺的破布条，textile 偏工业与商贸术语指大规模纺织工业产物，在此处日常用于擦拭清洁的一块布料抹布唯一契合 cloth。"
  },
  "clothe": {
    "word": "clothe",
    "zh": "给...穿衣；覆盖；供给衣服",
    "translation": "给...穿衣；覆盖；供给衣服",
    "cloze": {
      "sentence": "The single mother worked three jobs just to adequately feed and ______ her growing children.",
      "original": "The single mother worked three jobs just to adequately feed and clothe her growing children.",
      "translation": "这位单亲妈妈打了三份工，只为了让正在长身体的孩子们吃饱穿暖。"
    },
    "form_confusables": [
      {
        "word": "clothe",
        "zh": "给...穿衣；覆盖"
      },
      {
        "word": "cloth",
        "zh": "布料"
      },
      {
        "word": "clothes",
        "zh": "衣服"
      },
      {
        "word": "clone",
        "zh": "克隆"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clothe",
        "zh": "提供衣服穿；给...穿衣"
      },
      {
        "word": "dress",
        "zh": "给...穿衣服"
      },
      {
        "word": "attire",
        "zh": "打扮；盛装"
      },
      {
        "word": "cover",
        "zh": "覆盖；掩盖"
      }
    ],
    "notes": "【搭配考点】feed and clothe 供吃供穿/吃饱穿暖（生活温饱经典核心熟语）；clothe in 赋予.../穿上...；【形近辨析】cloth (不可数布料)，clothes (衣服名词)，clone (克隆体)；【近义辨析】dress 强调每天穿脱打扮的具体动作（如 get dressed），attire 极为典雅正式侧重华丽盛装亮相，cover 强调表面物理覆盖遮蔽，在此处与 feed 并列指履行抚养职责、提供衣服穿戴的温饱义务唯一契合 clothe。"
  },
  "cloud": {
    "word": "cloud",
    "zh": "云；云状物；阴影",
    "translation": "云；云状物；阴影",
    "cloze": {
      "sentence": "Dense gray storm ______ gathered along the mountain ridge, threatening heavy hail and lightning.",
      "original": "Dense gray storm clouds gathered along the mountain ridge, threatening heavy hail and lightning.",
      "translation": "浓密的灰色暴风雨云团在山脊处聚集，预示着强烈的冰雹与闪电即将来临。"
    },
    "form_confusables": [
      {
        "word": "cloud",
        "zh": "云；阴云"
      },
      {
        "word": "cloth",
        "zh": "布料"
      },
      {
        "word": "aloud",
        "zh": "大声地"
      },
      {
        "word": "proud",
        "zh": "自豪的；骄傲的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cloud",
        "zh": "云层；烟云"
      },
      {
        "word": "fog",
        "zh": "雾气"
      },
      {
        "word": "haze",
        "zh": "霾；薄雾"
      },
      {
        "word": "vapor",
        "zh": "水汽；蒸汽"
      }
    ],
    "notes": "【搭配考点】storm/rain cloud 暴风雨云/积雨云；under a cloud 受到怀疑/名誉受损；cloud one's judgement 蒙蔽某人的判断；【形近辨析】cloth (织物/抹布)，aloud (出声地/大声地)，proud (引以为豪的)；【近义辨析】fog 专指接触地表导致能见度骤降的水汽浓雾，haze 强调由悬浮灰尘干烟微粒引起的灰蒙蒙阴霾，vapor 侧重物理形态的气化水蒸气分子，在高空悬浮聚集成团的典型云块唯一契合 cloud。"
  },
  "club": {
    "word": "club",
    "zh": "俱乐部；社团；棍棒",
    "translation": "俱乐部；社团；棍棒",
    "cloze": {
      "sentence": "She decided to join the university debating ______ to hone her public speaking and logical skills.",
      "original": "She decided to join the university debating club to hone her public speaking and logical skills.",
      "translation": "她决定加入大学辩论社团，以磨炼自己的公众演讲与逻辑思辨能力。"
    },
    "form_confusables": [
      {
        "word": "club",
        "zh": "俱乐部；社团；大棒"
      },
      {
        "word": "clue",
        "zh": "线索"
      },
      {
        "word": "curb",
        "zh": "抑制；路缘石"
      },
      {
        "word": "cub",
        "zh": "幼兽；幼崽"
      }
    ],
    "semantic_confusables": [
      {
        "word": "club",
        "zh": "社团；俱乐部；协会"
      },
      {
        "word": "society",
        "zh": "学会；社团"
      },
      {
        "word": "association",
        "zh": "协会；联会"
      },
      {
        "word": "guild",
        "zh": "行会；同业工会"
      }
    ],
    "notes": "【搭配考点】debating/golf club 辩论社团/高尔夫俱乐部；night club 夜总会；【形近辨析】clue (线索/破案提示)，curb (控制/路牙石)，cub (狮虎熊等幼崽)；【近义辨析】society 侧重历史悠久、学术性强的专业学者学会，association 强调正式注册、范围广泛的行业或全权行业联盟，guild 专指中世纪手工业行会或同仁盟会，在校园中基于共同爱好成立的学生社团组织唯一契合 club。"
  },
  "clue": {
    "word": "clue",
    "zh": "线索；提示",
    "translation": "线索；提示",
    "cloze": {
      "sentence": "The detective searched the crime scene thoroughly for any vital ______ that could identify the killer.",
      "original": "The detective searched the crime scene thoroughly for any vital clue that could identify the killer.",
      "translation": "侦探彻底搜查了犯罪现场，以寻找能够指认凶手的任何关键线索。"
    },
    "form_confusables": [
      {
        "word": "clue",
        "zh": "线索；提示"
      },
      {
        "word": "club",
        "zh": "俱乐部；棍棒"
      },
      {
        "word": "cue",
        "zh": "暗示；台球杆"
      },
      {
        "word": "blue",
        "zh": "蓝色的；忧郁的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clue",
        "zh": "线索；蛛丝马迹"
      },
      {
        "word": "hint",
        "zh": "微弱暗示；建议"
      },
      {
        "word": "lead",
        "zh": "重要线索；方向"
      },
      {
        "word": "trace",
        "zh": "痕迹；踪迹"
      }
    ],
    "notes": "【搭配考点】vital/crucial clue 关键线索；not have a clue 一无所知/毫无头绪；【形近辨析】club (俱乐部/棍棒)，cue (剧场提示/台球杆)，blue (蓝色/忧郁)；【近义辨析】hint 侧重说话者隐晦给出的字面或言语提示，lead 侧重指引刑侦或调查向前推进的重大侦查方向，trace 强调现场物理残留的细微痕迹（如指纹毛发），在指解答谜团破案的指示性线索物证上唯一契合 clue。"
  },
  "clumsy": {
    "word": "clumsy",
    "zh": "笨拙的；不得体的；粗劣的",
    "translation": "笨拙的；不得体的；粗劣的",
    "cloze": {
      "sentence": "His ______ attempt to apologize only succeeded in offending her even more deeply.",
      "original": "His clumsy attempt to apologize only succeeded in offending her even more deeply.",
      "translation": "他那拙劣笨拙的道歉尝试，结果只是让她感到更加被冒犯。"
    },
    "form_confusables": [
      {
        "word": "clumsy",
        "zh": "笨拙的；拙劣的"
      },
      {
        "word": "crumb",
        "zh": "碎屑；面包屑"
      },
      {
        "word": "clamp",
        "zh": "夹钳；夹紧"
      },
      {
        "word": "classy",
        "zh": "优美的；高档的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "clumsy",
        "zh": "笨拙的；拙劣的"
      },
      {
        "word": "awkward",
        "zh": "尴尬的；笨拙的"
      },
      {
        "word": "ungraceful",
        "zh": "不优雅的；难看的"
      },
      {
        "word": "tactless",
        "zh": "不圆通的；不得体的"
      }
    ],
    "notes": "【搭配考点】clumsy attempt/fingers 拙劣的企图/笨手笨脚；clumsy of someone 某人行事笨拙；【形近辨析】crumb (面包碎屑)，clamp (夹钳/死死夹紧)，classy (优雅高级的)；【近义辨析】awkward 侧重因不协调引发的社交尴尬或局促不安，ungraceful 侧重动作体态缺乏美感，tactless 强调说话缺乏策略情商伤人，在此处形容言行举止缺乏技巧、弄巧成拙的粗笨拙劣唯一契合 clumsy。"
  },
  "coach": {
    "word": "coach",
    "zh": "教练；长途客车；辅导",
    "translation": "教练；长途客车；辅导",
    "cloze": {
      "sentence": "The head basketball ______ called an immediate timeout to adjust the team's defensive tactics.",
      "original": "The head basketball coach called an immediate timeout to adjust the team's defensive tactics.",
      "translation": "篮球主教练立即叫了暂停，以调整球队的防守战术。"
    },
    "form_confusables": [
      {
        "word": "coach",
        "zh": "教练；长途客车"
      },
      {
        "word": "couch",
        "zh": "沙发；长椅"
      },
      {
        "word": "poach",
        "zh": "水煮；偷猎；挖墙脚"
      },
      {
        "word": "roach",
        "zh": "蟑螂"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coach",
        "zh": "体育教练；培训师"
      },
      {
        "word": "trainer",
        "zh": "体能训练师；训犬员"
      },
      {
        "word": "instructor",
        "zh": "指导讲师；技术教练"
      },
      {
        "word": "tutor",
        "zh": "家庭教师；课业导师"
      }
    ],
    "notes": "【搭配考点】head coach 主教练；travel by coach 乘坐长途大巴；coach someone in 辅导某人某项技能；【形近辨析】couch (长沙发)，poach (偷猎/水煮蛋/非法挖墙脚)，roach (蟑螂)；【近义辨析】trainer 侧重通过反复肢体动作强化体能或训练动物，instructor 侧重传授驾车、滑雪等具体技术规范的教练，tutor 侧重学业辅导家教，在团队体育运动中指挥赛场战术决策的总指挥官唯一契合 coach。"
  },
  "coal": {
    "word": "coal",
    "zh": "煤；煤炭",
    "translation": "煤；煤炭",
    "cloze": {
      "sentence": "Several European nations have pledged to phase out ______ power plants to meet carbon reduction goals.",
      "original": "Several European nations have pledged to phase out coal power plants to meet carbon reduction goals.",
      "translation": "数个欧洲国家已承诺逐步淘汰燃煤电厂，以达成碳减排目标。"
    },
    "form_confusables": [
      {
        "word": "coal",
        "zh": "煤炭；煤"
      },
      {
        "word": "goal",
        "zh": "目标；进球"
      },
      {
        "word": "coat",
        "zh": "外套；涂层"
      },
      {
        "word": "foal",
        "zh": "小马驹"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coal",
        "zh": "煤炭"
      },
      {
        "word": "charcoal",
        "zh": "木炭；炭笔"
      },
      {
        "word": "fuel",
        "zh": "燃料"
      },
      {
        "word": "fossil",
        "zh": "化石"
      }
    ],
    "notes": "【搭配考点】coal power plant 燃煤电厂；burn coal 烧煤；coal mine 煤矿；【形近辨析】goal (目标/球门)，coat (大衣/外层)，foal (幼马驹)；【近义辨析】charcoal 专指木材在隔绝空气条件下炭化烧制而成的木炭，fuel 泛指包括石油、天然气在内的所有能量燃料总称，fossil 强调古代地质生物遗骸化石，专指在地层中开采的传统黑色可燃矿物能源唯一契合 coal。"
  },
  "coalition": {
    "word": "coalition",
    "zh": "联盟；联合政府",
    "translation": "联盟；联合政府",
    "cloze": {
      "sentence": "Neither political party won an outright majority, forcing them to negotiate a governing ______.",
      "original": "Neither political party won an outright majority, forcing them to negotiate a governing coalition.",
      "translation": "没有任何一个政党获得绝对多数席位，迫使他们通过谈判组建联合政府。"
    },
    "form_confusables": [
      {
        "word": "coalition",
        "zh": "同盟；联合政党"
      },
      {
        "word": "collision",
        "zh": "碰撞；冲突"
      },
      {
        "word": "condition",
        "zh": "条件；状态"
      },
      {
        "word": "cognition",
        "zh": "认知；感知"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coalition",
        "zh": "政治联盟；联合阵线"
      },
      {
        "word": "alliance",
        "zh": "同盟；军盟"
      },
      {
        "word": "partnership",
        "zh": "伙伴关系；合伙"
      },
      {
        "word": "union",
        "zh": "工会；联合会"
      }
    ],
    "notes": "【搭配考点】governing coalition 执政联盟/联合政府；form a coalition 组建联合政府；【形近辨析】collision (车辆相撞/物理碰撞，常混考 coalition vs collision)，condition (条件)，cognition (认知)；【近义辨析】alliance 侧重国家间通过正式条约签署的长期军事或外交同盟（如北约），partnership 侧重平等的商业合伙或协作关系，union 强调融为一体不可分割的联邦或工会，在政党间为夺取议会多数而暂时结成妥协执政集团上唯一契合 coalition。"
  },
  "coarse": {
    "word": "coarse",
    "zh": "粗糙的；粗鲁的；粗粒的",
    "translation": "粗糙的；粗鲁的；粗粒的",
    "cloze": {
      "sentence": "The manual laborer's hands were rough and ______, scarred by decades of heavy outdoor work.",
      "original": "The manual laborer's hands were rough and coarse, scarred by decades of heavy outdoor work.",
      "translation": "这位体力劳动者的双手粗糙而布满老茧，留着数十年重体力户外劳作的伤痕。"
    },
    "form_confusables": [
      {
        "word": "coarse",
        "zh": "粗糙的；粗鲁的"
      },
      {
        "word": "course",
        "zh": "课程；过程；航线"
      },
      {
        "word": "cause",
        "zh": "原因；引起"
      },
      {
        "word": "hoarse",
        "zh": "声音沙哑的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coarse",
        "zh": "粗糙的；粗颗粒的"
      },
      {
        "word": "rough",
        "zh": "粗糙不平的"
      },
      {
        "word": "crude",
        "zh": "天然未加工的；粗糙的"
      },
      {
        "word": "harsh",
        "zh": "严酷的；刺耳的"
      }
    ],
    "notes": "【搭配考点】rough and coarse hands 粗糙皲裂的双手；coarse language/manners 粗俗言语/粗鄙举止；coarse salt 粗盐；【形近辨析】course (课程/路线，同音异义词混淆核心)，cause (引起/缘由)，hoarse (喉咙嘶哑的)；【近义辨析】rough 强调表面凹凸不平触摸阻力大，crude 侧重技术原始、粗制滥造或未经提炼（如 crude oil），harsh 侧重气候或批评异常严厉刺耳，在形容纤维、颗粒或皮肤纹理粗厚质感时唯一契合 coarse。"
  },
  "code": {
    "word": "code",
    "zh": "代码；密码；行为准则；法典",
    "translation": "代码；密码；行为准则；法典",
    "cloze": {
      "sentence": "All employees are strictly required to abide by the company's established ethical ______ of conduct.",
      "original": "All employees are strictly required to abide by the company's established ethical code of conduct.",
      "translation": "所有员工都必须严格遵守公司既定的道德行为守则。"
    },
    "form_confusables": [
      {
        "word": "code",
        "zh": "代码；准则；法典"
      },
      {
        "word": "core",
        "zh": "核心；果核"
      },
      {
        "word": "mode",
        "zh": "模式；风尚"
      },
      {
        "word": "node",
        "zh": "节点"
      }
    ],
    "semantic_confusables": [
      {
        "word": "code",
        "zh": "准则；法典；编码"
      },
      {
        "word": "standard",
        "zh": "标准；规范"
      },
      {
        "word": "regulation",
        "zh": "规章制度"
      },
      {
        "word": "rule",
        "zh": "规则；条规"
      }
    ],
    "notes": "【搭配考点】code of conduct 行为守则（高频职场考点）；source code 源代码；area code 电话区号；【形近辨析】core (果核/核心灵魂)，mode (运作模式)，node (网络节点)；【近义辨析】standard 强调衡量高低的客观尺度水平，regulation 强调行政或政府机构颁布的具有强制力的成文法规条例，rule 侧重简单的个别规则条文，由一系列成体系系统化编纂的道德或法律守则集唯一契合 code。"
  },
  "cognitive": {
    "word": "cognitive",
    "zh": "认知的；感知的",
    "translation": "认知的；感知的",
    "cloze": {
      "sentence": "Regular aerobic exercise has been scientifically proven to enhance ______ function in elderly adults.",
      "original": "Regular aerobic exercise has been scientifically proven to enhance cognitive function in elderly adults.",
      "translation": "科学证明，经常进行有氧运动能够显著改善老年人的认知功能。"
    },
    "form_confusables": [
      {
        "word": "cognitive",
        "zh": "认知的；思维的"
      },
      {
        "word": "recognize",
        "zh": "识别；认出"
      },
      {
        "word": "ignite",
        "zh": "点燃；引燃"
      },
      {
        "word": "positive",
        "zh": "积极的；正面的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cognitive",
        "zh": "认知脑力的"
      },
      {
        "word": "intellectual",
        "zh": "智力的；知识分子的"
      },
      {
        "word": "mental",
        "zh": "心理的；精神上的"
      },
      {
        "word": "perceptual",
        "zh": "知觉的；感官的"
      }
    ],
    "notes": "【搭配考点】cognitive function/development 认知功能/认知发育；cognitive psychology 认知心理学；【形近辨析】recognize (认出/认可)，ignite (点燃/引发)，positive (阳性的/正向的)；【近义辨析】intellectual 侧重高层次的理性思辨或学术知识素养，mental 侧重涵盖情绪、心理健康与精神意识的整个心理范畴，perceptual 侧重五官感知外界信号的第一步输入阶段，在指大脑信息加工、记忆、逻辑计算等系统思维机能上唯一契合 cognitive。"
  },
  "coincide": {
    "word": "coincide",
    "zh": "巧合；同时发生；意见一致",
    "translation": "巧合；同时发生；意见一致",
    "cloze": {
      "sentence": "The release of the blockbuster movie was timed to ______ perfectly with the Christmas holiday.",
      "original": "The release of the blockbuster movie was timed to coincide perfectly with the Christmas holiday.",
      "translation": "这部大片的上映时间经过精心安排，恰好与圣诞节假期完全重合。"
    },
    "form_confusables": [
      {
        "word": "coincide",
        "zh": "巧合；同时发生"
      },
      {
        "word": "collide",
        "zh": "碰撞；冲突"
      },
      {
        "word": "confide",
        "zh": "吐露心声；信赖"
      },
      {
        "word": "suicide",
        "zh": "自杀"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coincide",
        "zh": "时间重合；相符"
      },
      {
        "word": "synchronize",
        "zh": "同步发生"
      },
      {
        "word": "concur",
        "zh": "同时发生；赞同"
      },
      {
        "word": "match",
        "zh": "匹配；相吻合"
      }
    ],
    "notes": "【搭配考点】coincide with 时间上重叠巧合，或观点立场高度吻合；【形近辨析】collide (碰撞/相撞)，confide (吐露心事/委托)，suicide (自杀)；【近义辨析】synchronize 强调人为通过技术手段校准钟表节奏使之步调一致，concur 强调多人意见经讨论达成一致或两事凑巧同时出现，match 强调外貌、性质相互匹配对应，在时间自然巧合叠合或立场完全重合上唯一契合 coincide。"
  },
  "coincidence": {
    "word": "coincidence",
    "zh": "巧合；同时发生",
    "translation": "巧合；同时发生",
    "cloze": {
      "sentence": "Meeting my former high school teacher on a train in Tokyo was an incredible ______.",
      "original": "Meeting my former high school teacher on a train in Tokyo was an incredible coincidence.",
      "translation": "在东京的火车上偶遇我高中的老老师，真是一次令人难以置信的巧合。"
    },
    "form_confusables": [
      {
        "word": "coincidence",
        "zh": "巧合；巧事"
      },
      {
        "word": "incidence",
        "zh": "发生率；影响范围"
      },
      {
        "word": "confidence",
        "zh": "信心；信任"
      },
      {
        "word": "evidence",
        "zh": "证据；迹象"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coincidence",
        "zh": "巧合；凑巧"
      },
      {
        "word": "chance",
        "zh": "机缘；偶然性"
      },
      {
        "word": "fluke",
        "zh": "侥幸；偶得"
      },
      {
        "word": "accident",
        "zh": "意外事件"
      }
    ],
    "notes": "【搭配考点】by coincidence 碰巧地/出于巧合；pure/incredible coincidence 纯粹的巧合；【形近辨析】incidence (疾病等发生率)，confidence (自信心)，evidence (客观证据)；【近义辨析】chance 侧重随机概率与不确定性，fluke 强调出乎意料的一鸣惊人侥幸碰上（口语），accident 偏向不测的突发祸事意外，指两件互不相干的事在时间地点上奇迹般撞在了一起的事件唯一契合 coincidence。"
  },
  "collaborate": {
    "word": "collaborate",
    "zh": "合作；协作；通敌",
    "translation": "合作；协作；通敌",
    "cloze": {
      "sentence": "Scientists from twelve different nations agreed to ______ on developing the next-generation fusion reactor.",
      "original": "Scientists from twelve different nations agreed to collaborate on developing the next-generation fusion reactor.",
      "translation": "来自十二个不同国家的科学家同意在研发下一代核聚变反应堆项目上展开通力合作。"
    },
    "form_confusables": [
      {
        "word": "collaborate",
        "zh": "合作；协作"
      },
      {
        "word": "corroborate",
        "zh": "证实；确证"
      },
      {
        "word": "elaborate",
        "zh": "详尽阐述；精心制作"
      },
      {
        "word": "calibrate",
        "zh": "校准；核准"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collaborate",
        "zh": "科研或学术协作"
      },
      {
        "word": "cooperate",
        "zh": "配合；合作"
      },
      {
        "word": "coordinate",
        "zh": "协调；统筹"
      },
      {
        "word": "partner",
        "zh": "结成伙伴"
      }
    ],
    "notes": "【搭配考点】collaborate on a project / with someone 在项目上携手协作；【形近辨析】corroborate (提供证据证实)，elaborate (精心制作/详细说明)，calibrate (校准仪器量程)；【近义辨析】cooperate 侧重顺从配合某人的要求或各干各的共同履约，coordinate 侧重协调调度多方资源使之不冲突，partner 侧重法律商业上的挂牌合伙，在指知识分子、艺术家、科学家共同动脑创造产出的深层协同攻关上唯一契合 collaborate。"
  },
  "collapse": {
    "word": "collapse",
    "zh": "倒塌；崩溃；瓦解",
    "translation": "倒塌；崩溃；瓦解",
    "cloze": {
      "sentence": "The elderly bridge began to ______ under the immense weight of the floodwaters.",
      "original": "The elderly bridge began to collapse under the immense weight of the floodwaters.",
      "translation": "那座老旧的桥梁在汹涌洪水的重压之下开始轰然坍塌。"
    },
    "form_confusables": [
      {
        "word": "collapse",
        "zh": "倒塌；瓦解"
      },
      {
        "word": "elapse",
        "zh": "光阴流逝"
      },
      {
        "word": "relapse",
        "zh": "旧病复发"
      },
      {
        "word": "eclipse",
        "zh": "日食；日落西山"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collapse",
        "zh": "倒塌；散架；暴跌"
      },
      {
        "word": "crumble",
        "zh": "碎裂；崩溃"
      },
      {
        "word": "tumble",
        "zh": "跌倒；翻滚"
      },
      {
        "word": "fail",
        "zh": "失效；衰竭"
      }
    ],
    "notes": "【搭配考点】collapse under pressure/weight 在压力或重压下坍塌崩塌；economic collapse 经济崩溃；【形近辨析】elapse (时间悄然流逝)，relapse (病情复发/倒退)，eclipse (日食月食/使黯然失色)；【近义辨析】crumble 侧重一点点风化剥落瓦解成细碎渣滓，tumble 侧重重心不稳沿斜坡翻滚跌落，fail 强调系统无法运转故障，在结构失去内部支撑瞬间整体垮掉陷落唯一契合 collapse。"
  },
  "collar": {
    "word": "collar",
    "zh": "衣领；项圈；抓住",
    "translation": "衣领；项圈；抓住",
    "cloze": {
      "sentence": "He pulled up his trench coat ______ to shield his freezing neck from the icy winter wind.",
      "original": "He pulled up his trench coat collar to shield his freezing neck from the icy winter wind.",
      "translation": "他竖起风衣的衣领，以保护冻僵的脖子免受刺骨寒风的侵袭。"
    },
    "form_confusables": [
      {
        "word": "collar",
        "zh": "衣领；项圈"
      },
      {
        "word": "dollar",
        "zh": "美元"
      },
      {
        "word": "pillar",
        "zh": "柱子；栋梁"
      },
      {
        "word": "cellar",
        "zh": "地窖；酒窖"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collar",
        "zh": "领子；项圈"
      },
      {
        "word": "neckband",
        "zh": "领圈；领条"
      },
      {
        "word": "choker",
        "zh": "短项圈；颈饰"
      },
      {
        "word": "lapel",
        "zh": "西服翻领"
      }
    ],
    "notes": "【搭配考点】pull up one's collar 竖起衣领；white-collar/blue-collar 白领/蓝领阶层；dog collar 狗项圈；【形近辨析】dollar (美元货币)，pillar (立柱/中流砥柱)，cellar (地下酒窖)；【近义辨析】neckband 仅指缝在衣服领口的那一圈固定布条，choker 专指贴紧喉咙佩戴的女性首饰项圈，lapel 专指西装胸前向下折叠的宽大外翻驳领，在环绕脖颈提供遮风保暖或作为衬衫正装标准的独立翻立领结构上唯一契合 collar。"
  },
  "colleague": {
    "word": "colleague",
    "zh": "同事；同僚",
    "translation": "同事；同僚",
    "cloze": {
      "sentence": "I would like to introduce a distinguished ______ of mine from the overseas branch office.",
      "original": "I would like to introduce a distinguished colleague of mine from the overseas branch office.",
      "translation": "我想向大家介绍一位来自我们海外分公司、备受尊敬的同事。"
    },
    "form_confusables": [
      {
        "word": "colleague",
        "zh": "同事；同僚"
      },
      {
        "word": "college",
        "zh": "大学；学院"
      },
      {
        "word": "league",
        "zh": "联盟；同盟"
      },
      {
        "word": "delegate",
        "zh": "代表；委派"
      }
    ],
    "semantic_confusables": [
      {
        "word": "colleague",
        "zh": "同职级同事；同行"
      },
      {
        "word": "coworker",
        "zh": "工友；同事"
      },
      {
        "word": "associate",
        "zh": "合伙人；业务伙伴"
      },
      {
        "word": "peer",
        "zh": "同行同辈；同龄人"
      }
    ],
    "notes": "【搭配考点】colleague from the office / respected colleague 办公室同事/受尊敬的同僚；【形近辨析】college (大学学院)，league (联赛/联盟)，delegate (代表团代表/授权)；【近义辨析】coworker 属于偏日常口语的美式表达，强调在同一办公室或物理空间共同打工的人，associate 侧重商业合伙人或律师事务所初级合伙律师，peer 强调学术上具有同等资历评议地位的同业学者，在正式职业语境中称呼同在一个组织内从事专业文职工作的同仁唯一契合 colleague。"
  },
  "collect": {
    "word": "collect",
    "zh": "收集；募集；收藏",
    "translation": "收集；募集；收藏",
    "cloze": {
      "sentence": "The environmental volunteer group meets every weekend to ______ plastic litter along the scenic beach.",
      "original": "The environmental volunteer group meets every weekend to collect plastic litter along the scenic beach.",
      "translation": "环保志愿者小组每个周末都会碰头，沿着风景优美的海滩收集清理塑料垃圾。"
    },
    "form_confusables": [
      {
        "word": "collect",
        "zh": "收集；募捐"
      },
      {
        "word": "correct",
        "zh": "正确的；纠正"
      },
      {
        "word": "connect",
        "zh": "连接"
      },
      {
        "word": "elect",
        "zh": "选举"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collect",
        "zh": "收集；采集；聚拢"
      },
      {
        "word": "gather",
        "zh": "聚集；采集"
      },
      {
        "word": "assemble",
        "zh": "组装；召集"
      },
      {
        "word": "accumulate",
        "zh": "逐渐积累；积聚"
      }
    ],
    "notes": "【搭配考点】collect rubbish/data 收集垃圾/汇总数据；collect stamps 集邮；collect oneself 镇定下来；【形近辨析】correct (纠正/正确的)，connect (连接联系)，elect (推举选举)；【近义辨析】gather 侧重人从四面八方聚集或田间采摘水果，assemble 强调将分散的零部件按图纸组装成整体或正式召集集会，accumulate 强调随着时间推移自然增多积少成多，在有意识地逐一拣拾并归拢到一起的动作上唯一契合 collect。"
  },
  "collection": {
    "word": "collection",
    "zh": "收藏品；收集；募集",
    "translation": "收藏品；收集；募集",
    "cloze": {
      "sentence": "The municipal museum houses a world-renowned ______ of ancient Egyptian artifacts.",
      "original": "The municipal museum houses a world-renowned collection of ancient Egyptian artifacts.",
      "translation": "这家市立博物馆收藏了举世闻名的古埃及文物藏品。"
    },
    "form_confusables": [
      {
        "word": "collection",
        "zh": "收藏品；收集"
      },
      {
        "word": "correction",
        "zh": "纠正；批改"
      },
      {
        "word": "connection",
        "zh": "联系；关联"
      },
      {
        "word": "selection",
        "zh": "选择；精选品"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collection",
        "zh": "成套藏品；专辑"
      },
      {
        "word": "assortment",
        "zh": "各类混杂；拼盘"
      },
      {
        "word": "compilation",
        "zh": "合辑；汇编"
      },
      {
        "word": "accumulation",
        "zh": "累积物；堆积"
      }
    ],
    "notes": "【搭配考点】a collection of paintings/artifacts 艺术画作/珍贵文物藏品；autumn/spring collection 换季时装系列；【形近辨析】correction (订正修改)，connection (关系连结)，selection (选品/精选物)；【近义辨析】assortment 强调各色不同种类点心杂物的混合拼盘组合，compilation 专指诗文乐曲汇编成集的文集唱片合辑，accumulation 侧重不自觉堆积起来的一大堆杂乱东西，在经过专业策展、系统归档的成套珍贵文物与艺术品群体上唯一契合 collection。"
  },
  "collective": {
    "word": "collective",
    "zh": "集体的；共同的",
    "translation": "集体的；共同的",
    "cloze": {
      "sentence": "Combating global climate change demands a decisive ______ effort from all industrialized nations.",
      "original": "Combating global climate change demands a decisive collective effort from all industrialized nations.",
      "translation": "应对全球气候变化需要所有工业化国家做出果断的共同努力。"
    },
    "form_confusables": [
      {
        "word": "collective",
        "zh": "集体的；共同的"
      },
      {
        "word": "elective",
        "zh": "选修的；选举的"
      },
      {
        "word": "corrective",
        "zh": "矫正的；校正的"
      },
      {
        "word": "connective",
        "zh": "连接的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collective",
        "zh": "集体的；全员共同的"
      },
      {
        "word": "joint",
        "zh": "联合的；共同拥有的"
      },
      {
        "word": "shared",
        "zh": "共享的；分担的"
      },
      {
        "word": "common",
        "zh": "共同的；普遍的"
      }
    ],
    "notes": "【搭配考点】collective effort/responsibility 集体努力/共同责任；collective memory 集体记忆；【形近辨析】elective (选修课/可选择的)，corrective (纠正性质的)，connective (起连接作用的)；【近义辨析】joint 强调两个或多个独立实体签署联合声明或共建合营（如 joint venture），shared 强调在同伴之间分担痛苦或共享红利，common 强调大家拥有的普遍共性，在强调由所有成员作为不可分割的集体共同行动时唯一契合 collective。"
  },
  "college": {
    "word": "college",
    "zh": "学院；大学；职业学校",
    "translation": "学院；大学；职业学校",
    "cloze": {
      "sentence": "After graduating from high school, she decided to attend a local community ______ to study graphic design.",
      "original": "After graduating from high school, she decided to attend a local community college to study graphic design.",
      "translation": "高中毕业后，她决定进入当地的一所社区学院攻读平面设计专业。"
    },
    "form_confusables": [
      {
        "word": "college",
        "zh": "大学；学院"
      },
      {
        "word": "colleague",
        "zh": "同事"
      },
      {
        "word": "cottage",
        "zh": "乡村小屋"
      },
      {
        "word": "courage",
        "zh": "勇气"
      }
    ],
    "semantic_confusables": [
      {
        "word": "college",
        "zh": "高等院校；学院"
      },
      {
        "word": "university",
        "zh": "综合性大学"
      },
      {
        "word": "academy",
        "zh": "专科学院；研究院"
      },
      {
        "word": "institute",
        "zh": "研究所；专门学院"
      }
    ],
    "notes": "【搭配考点】community college 社区学院；go to college 上大学（美式高频通用）；electoral college 选举人团；【形近辨析】colleague (工作同事)，cottage (乡村农舍别墅)，courage (勇敢无畏)；【近义辨析】university 严格指下辖众多学院、具备本科硕士博士全体系授予权的综合性大学，academy 侧重军事学院、美术学院或国家科学院，institute 侧重理工科研学院或研究机构，在指本科独立学院或大众高等教育阶段通用泛称时唯一契合 college。"
  },
  "collision": {
    "word": "collision",
    "zh": "碰撞；冲突；抵触",
    "translation": "碰撞；冲突；抵触",
    "cloze": {
      "sentence": "The speeding car spun out of control and had a catastrophic ______ with a concrete barrier.",
      "original": "The speeding car spun out of control and had a catastrophic collision with a concrete barrier.",
      "translation": "超速行驶的轿车失控打滑，猛烈撞上了混凝土护栏。"
    },
    "form_confusables": [
      {
        "word": "collision",
        "zh": "碰撞；冲突"
      },
      {
        "word": "coalition",
        "zh": "政党同盟；联合"
      },
      {
        "word": "collusion",
        "zh": "共谋；勾结"
      },
      {
        "word": "illusion",
        "zh": "幻觉；错觉"
      }
    ],
    "semantic_confusables": [
      {
        "word": "collision",
        "zh": "猛烈撞击；相撞"
      },
      {
        "word": "crash",
        "zh": "撞碎；坠毁"
      },
      {
        "word": "impact",
        "zh": "冲击力；撞击"
      },
      {
        "word": "smash",
        "zh": "粉碎性猛撞"
      }
    ],
    "notes": "【搭配考点】collision with a car/barrier 与车辆或障碍物猛烈相撞；on a collision course 走在冲突的轨道上；【形近辨析】coalition (政党联合政府)，collusion (非法勾结共谋)，illusion (虚幻假象)；【近义辨析】crash 侧重伴随着震耳欲聋巨响的破碎损毁灾难，impact 侧重物理学撞击瞬间产生的冲击力和挤压力，smash 侧重撞得四分五裂，在描述两个运动实体之间发生剧烈物理相撞的规范事故术语上唯一契合 collision。"
  },
  "colonial": {
    "word": "colonial",
    "zh": "殖民的；殖民地的",
    "translation": "殖民的；殖民地的",
    "cloze": {
      "sentence": "The grand administrative mansion remains a prominent example of nineteenth-century ______ architecture.",
      "original": "The grand administrative mansion remains a prominent example of nineteenth-century colonial architecture.",
      "translation": "这座宏伟的行政官邸至今仍是19世纪殖民时期建筑的杰出典范。"
    },
    "form_confusables": [
      {
        "word": "colonial",
        "zh": "殖民地的；殖民主义的"
      },
      {
        "word": "colony",
        "zh": "殖民地"
      },
      {
        "word": "colonist",
        "zh": "殖民拓荒者"
      },
      {
        "word": "colossal",
        "zh": "巨大的；庞大的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "colonial",
        "zh": "殖民统治时期的"
      },
      {
        "word": "imperial",
        "zh": "帝国的；至高无上的"
      },
      {
        "word": "provincial",
        "zh": "省级的；狭隘的"
      },
      {
        "word": "dependent",
        "zh": "附庸的；依赖的"
      }
    ],
    "notes": "【搭配考点】colonial rule/architecture/era 殖民统治/殖民地风格建筑/殖民时代；【形近辨析】colony (名词：殖民地)，colonist (名词：殖民拓荒定居者)，colossal (庞大绝伦的)；【近义辨析】imperial 侧重属于宗主国皇帝或中央帝国本身的威严气派，provincial 仅指帝国本土远离首都的偏远外省，dependent 侧重在财政经济上完全依附他国，在此处特指由海外宗主国在占领地推行并带有该历史印记的建筑制度风格唯一契合 colonial。"
  },
  "colony": {
    "word": "colony",
    "zh": "殖民地；群体；聚居区",
    "translation": "殖民地；群体；聚居区",
    "cloze": {
      "sentence": "The European settlers established a flourishing trade ______ along the eastern seaboard of America.",
      "original": "The European settlers established a flourishing trade colony along the eastern seaboard of America.",
      "translation": "欧洲定居者沿着美洲东海岸建立了一处繁荣的贸易殖民地。"
    },
    "form_confusables": [
      {
        "word": "colony",
        "zh": "殖民地；聚居群"
      },
      {
        "word": "colonial",
        "zh": "殖民的"
      },
      {
        "word": "colon",
        "zh": "冒号；结肠"
      },
      {
        "word": "felony",
        "zh": "重罪"
      }
    ],
    "semantic_confusables": [
      {
        "word": "colony",
        "zh": "殖民地；定居点；群落"
      },
      {
        "word": "settlement",
        "zh": "定居点；开拓地"
      },
      {
        "word": "outpost",
        "zh": "前哨基地；远方拓殖点"
      },
      {
        "word": "dependency",
        "zh": "属地；附属国"
      }
    ],
    "notes": "【搭配考点】trade/penal colony 商业殖民地/流放犯殖民地；ant/bee colony 蚂蚁/蜜蜂群落；【形近辨析】colonial (形容词：殖民的)，colon (标点冒号/医学结肠)，felony (法学重罪)；【近义辨析】settlement 侧重拓荒者白手起家搭建的小型定居村落，outpost 强调边陲荒野驻扎的军事或贸易小前哨站，dependency 侧重在外交上由母国代管的现代海外属地，在指宗主国移民族群开拓并在政治上隶属母国的广大拓殖实体上唯一契合 colony。"
  },
  "color": {
    "word": "color",
    "zh": "颜色；色彩；着色",
    "translation": "颜色；色彩；着色",
    "cloze": {
      "sentence": "The vibrant autumn leaves gradually changed ______ from bright emerald green to deep scarlet.",
      "original": "The vibrant autumn leaves gradually changed color from bright emerald green to deep scarlet.",
      "translation": "生机盎然的秋叶逐渐改变颜色，由鲜翠欲滴的绿色变成了深绯红色。"
    },
    "form_confusables": [
      {
        "word": "color",
        "zh": "颜色；色彩"
      },
      {
        "word": "collar",
        "zh": "衣领；项圈"
      },
      {
        "word": "colon",
        "zh": "冒号"
      },
      {
        "word": "valor",
        "zh": "英勇；勇猛"
      }
    ],
    "semantic_confusables": [
      {
        "word": "color",
        "zh": "颜色；色彩"
      },
      {
        "word": "hue",
        "zh": "色调；色相"
      },
      {
        "word": "shade",
        "zh": "色度；深浅；阴凉"
      },
      {
        "word": "tint",
        "zh": "淡色；微光色"
      }
    ],
    "notes": "【搭配考点】change color 变色；bright/vibrant color 鲜艳的色彩；with flying colors 成绩优异出色；【形近辨析】collar (衣领)，colon (冒号)，valor (英雄气概)；【近义辨析】hue 属于美术与物理光学术语指可见光谱中最纯正的色相，shade 专指加入黑色后颜色的深浅明暗层次，tint 强调在原色中加入少许白色调出的淡薄微亮底色，日常生活中概括视觉呈现的客观色彩总概念唯一契合 color。"
  },
  "column": {
    "word": "column",
    "zh": "柱子；专栏；列",
    "translation": "柱子；专栏；列",
    "cloze": {
      "sentence": "The celebrated political journalist writes an insightful weekly ______ for the national Sunday paper.",
      "original": "The celebrated political journalist writes an insightful weekly column for the national Sunday paper.",
      "translation": "这位著名政治记者为全国性周日日报撰写见解深刻的每周专栏文章。"
    },
    "form_confusables": [
      {
        "word": "column",
        "zh": "专栏；圆柱；列"
      },
      {
        "word": "autumn",
        "zh": "秋季"
      },
      {
        "word": "solemn",
        "zh": "庄严的；严肃的"
      },
      {
        "word": "volume",
        "zh": "体积；卷；册"
      }
    ],
    "semantic_confusables": [
      {
        "word": "column",
        "zh": "报刊专栏；支柱"
      },
      {
        "word": "editorial",
        "zh": "社论；专论"
      },
      {
        "word": "section",
        "zh": "版块；分部"
      },
      {
        "word": "feature",
        "zh": "专题特写；报道"
      }
    ],
    "notes": "【搭配考点】weekly/regular column 定期报刊专栏；stone column 支撑石柱；fifth column 第五纵队（潜伏内奸）；【形近辨析】autumn (秋天)，solemn (庄严沉痛的)，volume (音量/容积/书籍卷册)；【近义辨析】editorial 代表报社编辑部官方立场的重磅社论，section 指报纸分成财经、体育等大版面分区，feature 侧重深度挖掘人物故事的图文长篇特写，由特定签约名家定期主持撰稿的固定板块唯一契合 column。"
  },
  "combination": {
    "word": "combination",
    "zh": "结合；联合；密码组合",
    "translation": "结合；联合；密码组合",
    "cloze": {
      "sentence": "High consumer debt coupled with stagnant wage growth proved to be a toxic ______ for retail sales.",
      "original": "High consumer debt coupled with stagnant wage growth proved to be a toxic combination for retail sales.",
      "translation": "高昂的消费债务加上停滞不前的薪资增长，对零售业而言被证明是一种致命的组合打击。"
    },
    "form_confusables": [
      {
        "word": "combination",
        "zh": "结合；联合；密码"
      },
      {
        "word": "communication",
        "zh": "沟通；通讯"
      },
      {
        "word": "compensation",
        "zh": "补偿；薪酬"
      },
      {
        "word": "computation",
        "zh": "计算；估计"
      }
    ],
    "semantic_confusables": [
      {
        "word": "combination",
        "zh": "结合物；综合体"
      },
      {
        "word": "mixture",
        "zh": "混合物；混合配方"
      },
      {
        "word": "blend",
        "zh": "调和；融合"
      },
      {
        "word": "amalgam",
        "zh": "大熔炉；混合体"
      }
    ],
    "notes": "【搭配考点】toxic/winning combination 致命的坏组合/取胜的绝妙组合；safe combination 保险箱密码组合；【形近辨析】communication (信息交流/通讯)，compensation (经济赔偿/薪资)，computation (数据计算)；【近义辨析】mixture 强调多种不同物理成分混在一起各自保留特征（如药水配方），blend 强调咖啡茶香等原料经过调配融为一体难以分割，amalgam 偏书面化学语比喻文化思想大熔炉，在此处指多个不利经济要素汇聚产生的共同综合后果唯一契合 combination。"
  },
  "combine": {
    "word": "combine",
    "zh": "结合；联合；化合",
    "translation": "结合；联合；化合",
    "cloze": {
      "sentence": "The most successful modern leaders know how to ______ firm determination with genuine empathy.",
      "original": "The most successful modern leaders know how to combine firm determination with genuine empathy.",
      "translation": "最成功的现代领导者深谙如何将坚定的决断力与真挚的同理心有机结合起来。"
    },
    "form_confusables": [
      {
        "word": "combine",
        "zh": "结合；化合"
      },
      {
        "word": "confine",
        "zh": "限制；禁闭"
      },
      {
        "word": "comply",
        "zh": "服从；遵守"
      },
      {
        "word": "compile",
        "zh": "汇编；编译"
      }
    ],
    "semantic_confusables": [
      {
        "word": "combine",
        "zh": "有机融合；兼备"
      },
      {
        "word": "merge",
        "zh": "企业合并；融入"
      },
      {
        "word": "integrate",
        "zh": "整合；一体化"
      },
      {
        "word": "fuse",
        "zh": "熔合；熔接"
      }
    ],
    "notes": "【搭配考点】combine A with B 把A与B结合起来；combine forces 协同联手；【形近辨析】confine (限制/禁闭)，comply (服从规章 comply with)，compile (收集编写字典/编译器编译)；【近义辨析】merge 侧重两个公司或政体合并为一个新组织吞并吸收，integrate 强调把零部件嵌入系统使之和谐运转，fuse 强调高温下熔化融为一个金属整体，在此处指在人格品行上兼具两种互补品质并施展运用唯一契合 combine。"
  },
  "come": {
    "word": "come",
    "zh": "来；到来；发生；达到",
    "translation": "来；到来；发生；达到",
    "cloze": {
      "sentence": "When it ______ to personal financial planning, seeking professional advice is invaluable.",
      "original": "When it comes to personal financial planning, seeking professional advice is invaluable.",
      "translation": "当谈到个人财务规划时，寻求专业人士的建议是极其宝贵的。"
    },
    "form_confusables": [
      {
        "word": "come",
        "zh": "来；到达"
      },
      {
        "word": "home",
        "zh": "家；家园"
      },
      {
        "word": "cone",
        "zh": "圆锥；甜筒"
      },
      {
        "word": "dome",
        "zh": "穹顶；圆顶"
      }
    ],
    "semantic_confusables": [
      {
        "word": "come",
        "zh": "到来；来临"
      },
      {
        "word": "arrive",
        "zh": "到达；抵达"
      },
      {
        "word": "approach",
        "zh": "走近；临近"
      },
      {
        "word": "appear",
        "zh": "出现；显现"
      }
    ],
    "notes": "【搭配考点】when it comes to 当谈及/一涉及（高频写作核心搭配）；come true 实现；come across 偶遇；【形近辨析】home (家园)，cone (圆锥体)，dome (半球形穹顶)；【近义辨析】arrive 侧重物理行程到达终点站，approach 强调空间或时间上距离逐渐缩短接近，appear 强调突然从无到有露出水面，在 when it comes to 固定习语转折引出谈论主题时唯一契合 come。"
  },
  "comedy": {
    "word": "comedy",
    "zh": "喜剧；滑稽；幽默",
    "translation": "喜剧；滑稽；幽默",
    "cloze": {
      "sentence": "The chaotic chain of misunderstandings turned the formal dinner into a hilarious ______ of errors.",
      "original": "The chaotic chain of misunderstandings turned the formal dinner into a hilarious comedy of errors.",
      "translation": "一连串混乱的误会使得那场正式晚宴演变成了一出令人捧腹的阴差阳错的闹剧。"
    },
    "form_confusables": [
      {
        "word": "comedy",
        "zh": "喜剧；滑稽"
      },
      {
        "word": "tragedy",
        "zh": "悲剧"
      },
      {
        "word": "remedy",
        "zh": "补救办法；药品"
      },
      {
        "word": "commodity",
        "zh": "商品；日用品"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comedy",
        "zh": "喜剧；滑稽戏剧"
      },
      {
        "word": "farce",
        "zh": "闹剧；滑稽剧"
      },
      {
        "word": "satire",
        "zh": "讽刺作品"
      },
      {
        "word": "humor",
        "zh": "幽默；诙谐"
      }
    ],
    "notes": "【搭配考点】a comedy of errors 一连串阴差阳错的可笑闹剧（源于莎士比亚经典同名戏剧成语）；stand-up comedy 单口喜剧/脱口秀；【形近辨析】tragedy (反义词：悲剧)，remedy (补救措施/治疗方案)，commodity (货物商品)；【近义辨析】farce 侧重情节荒诞不经、人物行为夸张怪诞的闹剧，satire 强调辛辣讽刺现实黑暗与丑态的讽刺剧，humor 侧重抽象的幽默感特质，在指以引人发笑为结构目的的戏剧体裁及成语搭配中唯一契合 comedy。"
  },
  "comfort": {
    "word": "comfort",
    "zh": "安慰；舒适；慰藉",
    "translation": "安慰；舒适；慰藉",
    "cloze": {
      "sentence": "A steaming bowl of chicken noodle soup is classic ______ food during a cold winter evening.",
      "original": "A steaming bowl of chicken noodle soup is classic comfort food during a cold winter evening.",
      "translation": "在寒冷的冬夜，一碗热气腾腾的鸡汤面条是经典的治愈系暖心抚慰美食。"
    },
    "form_confusables": [
      {
        "word": "comfort",
        "zh": "安慰；舒适"
      },
      {
        "word": "conform",
        "zh": "符合；遵从"
      },
      {
        "word": "confront",
        "zh": "面对；对抗"
      },
      {
        "word": "effort",
        "zh": "努力"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comfort",
        "zh": "慰藉；舒适；暖心"
      },
      {
        "word": "solace",
        "zh": "心理慰藉；抚慰"
      },
      {
        "word": "relief",
        "zh": "宽慰；缓解"
      },
      {
        "word": "consolation",
        "zh": "安慰；慰藉"
      }
    ],
    "notes": "【搭配考点】comfort food 治愈系抚慰美食（高频生动词汇）；in comfort 舒适地；words of comfort 抚慰人心的话语；【形近辨析】conform (顺从符合 conform to/with)，confront (迎面遭遇对抗)，effort (付出努力)；【近义辨析】solace 侧重在悲痛逆境中获得的宁静与精神寄托，relief 侧重沉重压力或剧烈痛苦消除后的轻松释怀感，consolation 强调在遭遇失败或失去后给予的补偿性安慰，与 food 搭配构成暖心饮食文化固定术语唯一契合 comfort。"
  },
  "comfortable": {
    "word": "comfortable",
    "zh": "舒适的；舒服的；充裕的",
    "translation": "舒适的；舒服的；充裕的",
    "cloze": {
      "sentence": "The ergonomic office chair provides exceptional lumbar support, keeping employees ______ all day.",
      "original": "The ergonomic office chair provides exceptional lumbar support, keeping employees comfortable all day.",
      "translation": "这款符合人体工学的办公椅提供了出色的腰部支撑，让员工一整天都能保持舒适体感。"
    },
    "form_confusables": [
      {
        "word": "comfortable",
        "zh": "舒适的；舒服的"
      },
      {
        "word": "profitable",
        "zh": "有利可图的"
      },
      {
        "word": "compatible",
        "zh": "兼容的；相合的"
      },
      {
        "word": "acceptable",
        "zh": "可接受的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comfortable",
        "zh": "身体或心理舒适的"
      },
      {
        "word": "cozy",
        "zh": "温暖舒适的；惬意的"
      },
      {
        "word": "snug",
        "zh": "贴身保暖的；舒适的"
      },
      {
        "word": "restful",
        "zh": "宁静宜人的；安歇的"
      }
    ],
    "notes": "【搭配考点】feel comfortable with 感觉舒心踏实/放心；comfortable income 宽裕的收入；【形近辨析】profitable (盈利赚钱的)，compatible (软硬件兼容的)，acceptable (差强人意的)；【近义辨析】cozy 侧重房间炉火等狭小空间带来的温馨暖和氛围，snug 强调衣服鞋子贴身合脚或小木屋遮蔽风雨的安全包裹感，restful 强调环境静谧安宁利于入眠修养，指消除身体酸痛疲劳的生理惬意状态唯一契合 comfortable。"
  },
  "command": {
    "word": "command",
    "zh": "命令；指挥；精通；俯瞰",
    "translation": "命令；指挥；精通；俯瞰",
    "cloze": {
      "sentence": "The seasoned general assumed full ______ of the allied forces during the critical counteroffensive.",
      "original": "The seasoned general assumed full command of the allied forces during the critical counteroffensive.",
      "translation": "这位经验丰富的老将在关键反攻期间接掌了联军的最高指挥权。"
    },
    "form_confusables": [
      {
        "word": "command",
        "zh": "命令；指挥；精通"
      },
      {
        "word": "commend",
        "zh": "表彰；推荐"
      },
      {
        "word": "comment",
        "zh": "评论"
      },
      {
        "word": "demand",
        "zh": "强烈要求"
      }
    ],
    "semantic_confusables": [
      {
        "word": "command",
        "zh": "指挥权；号令"
      },
      {
        "word": "order",
        "zh": "行政命令；嘱托"
      },
      {
        "word": "control",
        "zh": "控制；操纵"
      },
      {
        "word": "authority",
        "zh": "权威；权力"
      }
    ],
    "notes": "【搭配考点】in command of 指挥掌管...；have a good command of English 精通熟练掌握英语（写作高频核心搭配）；command a fine view 俯瞰壮美全景；【形近辨析】commend (高度赞赏/推荐表扬)，comment (发表评论)，demand (苛求/强烈要求)；【近义辨析】order 仅指上级对下级发布的单项具体事务指令，control 侧重技术机械操纵或把控局势，authority 侧重法律条文赋予的法定抽象职权，指军事部队或全局作战统率领导权唯一契合 command。"
  },
  "commander": {
    "word": "commander",
    "zh": "指挥官；司令官",
    "translation": "指挥官；司令官",
    "cloze": {
      "sentence": "The naval ______ ordered the entire fleet to return immediately to port before the typhoon struck.",
      "original": "The naval commander ordered the entire fleet to return immediately to port before the typhoon struck.",
      "translation": "海军指挥官下令整个舰队在台风来袭前立即返回港口。"
    },
    "form_confusables": [
      {
        "word": "commander",
        "zh": "指挥官；司令员"
      },
      {
        "word": "commuter",
        "zh": "通勤者"
      },
      {
        "word": "comment",
        "zh": "评论"
      },
      {
        "word": "commerce",
        "zh": "商业"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commander",
        "zh": "军事指挥官"
      },
      {
        "word": "general",
        "zh": "陆军将军"
      },
      {
        "word": "captain",
        "zh": "船长；机长；上尉"
      },
      {
        "word": "leader",
        "zh": "领袖；领导人"
      }
    ],
    "notes": "【搭配考点】commander-in-chief 陆海空三军总司令；naval/military commander 海军/军事指挥官；【形近辨析】commuter (每日往返通勤的上班族)，comment (评论意见)，commerce (商业经贸)；【近义辨析】general 专指陆军或空军高阶将官军衔，captain 专指轮船船长、客机机长或军队上尉军衔，leader 泛指政界企业等宽泛的带头领袖，在海军及联合作战部队统帅特定军职称号上唯一契合 commander。"
  },
  "comment": {
    "word": "comment",
    "zh": "评论；意见；注释",
    "translation": "评论；意见；注释",
    "cloze": {
      "sentence": "The company's chief executive declined to ______ on ongoing rumors regarding a potential hostile takeover.",
      "original": "The company's chief executive declined to comment on ongoing rumors regarding a potential hostile takeover.",
      "translation": "该公司首席执行官拒绝对有关潜在敌意收购的传闻发表任何评论。"
    },
    "form_confusables": [
      {
        "word": "comment",
        "zh": "评论；发表意见"
      },
      {
        "word": "commit",
        "zh": "承诺；犯罪"
      },
      {
        "word": "command",
        "zh": "指挥；命令"
      },
      {
        "word": "commend",
        "zh": "赞扬；表彰"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comment",
        "zh": "置评；发表评论"
      },
      {
        "word": "remark",
        "zh": "谈及；评论"
      },
      {
        "word": "observe",
        "zh": "观察到；指出"
      },
      {
        "word": "state",
        "zh": "声明；阐述"
      }
    ],
    "notes": "【搭配考点】decline to comment on 拒绝就...置评（新闻发布会高频考点）；make a comment 发表评论；no comment 无可奉告；【形近辨析】commit (托付/承诺/犯下过失)，command (统领命令)，commend (称赞表扬)；【近义辨析】remark 侧重非正式的简短即兴评语，observe 强调基于细致观察后发表的敏锐洞察，state 强调官方正式宣读立场事实，在面对记者采访表达口头意见观点的规范动词上唯一契合 comment。"
  },
  "commerce": {
    "word": "commerce",
    "zh": "商业；贸易",
    "translation": "商业；贸易",
    "cloze": {
      "sentence": "The historic port city flourished as a vibrant center of maritime trade and international ______.",
      "original": "The historic port city flourished as a vibrant center of maritime trade and international commerce.",
      "translation": "这座历史悠久的港口城市作为海上贸易与国际商业的繁荣中心而欣欣向荣。"
    },
    "form_confusables": [
      {
        "word": "commerce",
        "zh": "商业；贸易"
      },
      {
        "word": "commence",
        "zh": "开始；着手"
      },
      {
        "word": "commercial",
        "zh": "商业的；广告"
      },
      {
        "word": "comment",
        "zh": "评论"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commerce",
        "zh": "经贸商业体系"
      },
      {
        "word": "trade",
        "zh": "买卖；国际贸易"
      },
      {
        "word": "business",
        "zh": "企业运营；生意"
      },
      {
        "word": "market",
        "zh": "交易市场"
      }
    ],
    "notes": "【搭配考点】chamber of commerce 商会；electronic commerce (e-commerce) 电子商务；international commerce 国际商贸；【形近辨析】commence (正式开始/启动)，commercial (形容词：商业的；名词：电视广告)，comment (评论)；【近义辨析】trade 侧重具体商品货物或货币在两地两方之间的进出口买卖流转，business 侧重单个企业的日常经营营利活动，market 侧重交易供需场所，泛指宏观社会经济商品交换运行机制的大商业体系唯一契合 commerce。"
  },
  "commercial": {
    "word": "commercial",
    "zh": "商业的；盈利的；商业广告",
    "translation": "商业的；盈利的；商业广告",
    "cloze": {
      "sentence": "Despite receiving rave reviews from critics, the independent film was not a ______ success at the box office.",
      "original": "Despite receiving rave reviews from critics, the independent film was not a commercial success at the box office.",
      "translation": "尽管赢得了影评人的高度赞誉，这部独立电影在票房上并未取得商业成功。"
    },
    "form_confusables": [
      {
        "word": "commercial",
        "zh": "商业的；盈利的；广告"
      },
      {
        "word": "memorial",
        "zh": "纪念馆；纪念的"
      },
      {
        "word": "editorial",
        "zh": "社论；编辑的"
      },
      {
        "word": "torrential",
        "zh": "倾盆的；汹涌的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commercial",
        "zh": "商业盈利性的"
      },
      {
        "word": "business",
        "zh": "业务上的"
      },
      {
        "word": "mercantile",
        "zh": "商业贸易的"
      },
      {
        "word": "financial",
        "zh": "金融财政的"
      }
    ],
    "notes": "【搭配考点】commercial success 商业成功/票房大卖；commercial vehicle 商用车；commercial break 电视插播广告时段；【形近辨析】memorial (纪念馆/纪念性的)，editorial (编辑的/社论)，torrential (倾盆倾泻的)；【近义辨析】business 偏口语作名词定语修饰（如 business trip），mercantile 属于历史经济学术语（如重商主义），financial 专指资金筹措、股市资产等金融账目维度，在强调以大众市场赚钱营利为导向的商业性质属性时唯一契合 commercial。"
  },
  "commission": {
    "word": "commission",
    "zh": "佣金；委员会；委任；委托创作",
    "translation": "佣金；委员会；委任；委托创作",
    "cloze": {
      "sentence": "The renowned architect received a prestigious private ______ to design the city's new opera house.",
      "original": "The renowned architect received a prestigious private commission to design the city's new opera house.",
      "translation": "这位著名建筑师接获了一项极负盛名的私人委托，为该市设计新歌剧院。"
    },
    "form_confusables": [
      {
        "word": "commission",
        "zh": "佣金；委托；委员会"
      },
      {
        "word": "mission",
        "zh": "任务；使命"
      },
      {
        "word": "emission",
        "zh": "排放物；散发"
      },
      {
        "word": "transmission",
        "zh": "传播；变速箱"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commission",
        "zh": "官方委托案；佣金"
      },
      {
        "word": "assignment",
        "zh": "指派任务；作业"
      },
      {
        "word": "errand",
        "zh": "跑腿差事"
      },
      {
        "word": "charge",
        "zh": "掌管职责；收费"
      }
    ],
    "notes": "【搭配考点】receive a commission to do... 获得委托设计/创作...；work on commission 拿销售提成佣金；European Commission 欧盟委员会；【形近辨析】mission (宗教传教使命/航天飞行任务)，emission (温室气体排放)，transmission (疾病传播/汽车变速器)；【近义辨析】assignment 侧重公司或老师派发的常规工作作业，errand 仅指顺路买咖啡寄信等生活跑腿小差事，charge 侧重托管看管的责任，在向专业艺术家、学者出资定制作画设计重大项目时唯一契合 commission。"
  },
  "commit": {
    "word": "commit",
    "zh": "承诺；犯(罪)；投入；致力于",
    "translation": "承诺；犯(罪)；投入；致力于",
    "cloze": {
      "sentence": "The government has pledged to ______ substantial funds to expanding renewable energy infrastructure.",
      "original": "The government has pledged to commit substantial funds to expanding renewable energy infrastructure.",
      "translation": "政府已承诺投入大笔专项资金，用于扩建可再生能源基础设施。"
    },
    "form_confusables": [
      {
        "word": "commit",
        "zh": "投入；承诺；犯罪"
      },
      {
        "word": "admit",
        "zh": "承认；允许进入"
      },
      {
        "word": "submit",
        "zh": "提交；屈服"
      },
      {
        "word": "emit",
        "zh": "排放；发出"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commit",
        "zh": "专项投入；致力于"
      },
      {
        "word": "dedicate",
        "zh": "奉献；投身于"
      },
      {
        "word": "allocate",
        "zh": "拨给；分配"
      },
      {
        "word": "pledge",
        "zh": "保证；发誓"
      }
    ],
    "notes": "【搭配考点】commit funds/resources to 调拨投入资金资源于...；commit a crime 犯罪；commit oneself to 承诺致力于；【形近辨析】admit (承认/准许入场)，submit (提交报告/顺从屈服)，emit (散发气味/放射光线)；【近义辨析】dedicate 强调道德或精神上把一生心血奉献给崇高事业，allocate 侧重财务按比例预算切割分配，pledge 侧重口头或道义上郑重宣誓保证，在将实质人力资金等实体资源长期绑定投入特定方向时唯一契合 commit。"
  },
  "commitment": {
    "word": "commitment",
    "zh": "承诺；献身；投入；职责",
    "translation": "承诺；献身；投入；职责",
    "cloze": {
      "sentence": "Mastering a complex musical instrument requires years of disciplined practice and unwavering ______.",
      "original": "Mastering a complex musical instrument requires years of disciplined practice and unwavering commitment.",
      "translation": "精通一门复杂的乐器需要数年自律的练习与坚定不移的全身心投入。"
    },
    "form_confusables": [
      {
        "word": "commitment",
        "zh": "承诺；奉献投入"
      },
      {
        "word": "committee",
        "zh": "委员会"
      },
      {
        "word": "commission",
        "zh": "委托；佣金"
      },
      {
        "word": "containment",
        "zh": "遏制；控制"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commitment",
        "zh": "奉献专注；恪守承诺"
      },
      {
        "word": "dedication",
        "zh": "专注奉献；题献"
      },
      {
        "word": "devotion",
        "zh": "忠诚热爱；深情"
      },
      {
        "word": "loyalty",
        "zh": "忠心；忠诚度"
      }
    ],
    "notes": "【搭配考点】unwavering commitment 坚定不移的承诺与投入；make a commitment to 许下庄重承诺；financial commitment 财务支出承诺；【形近辨析】committee (委员会机构)，commission (佣金/委员会)，containment (遏制战略/控制)；【近义辨析】dedication 强调出于高度崇敬或职业道德而倾注全部心力，devotion 侧重对宗教上帝、爱人家庭的深深爱意眷恋，loyalty 强调对国家雇员君主的顺从忠心，在强调排除万难长期坚守约定与目标的恒心毅力上唯一契合 commitment。"
  },
  "committee": {
    "word": "committee",
    "zh": "委员会",
    "translation": "委员会",
    "cloze": {
      "sentence": "The parliamentary ethics ______ convened an urgent closed-door hearing to investigate the bribery scandal.",
      "original": "The parliamentary ethics committee convened an urgent closed-door hearing to investigate the bribery scandal.",
      "translation": "议会道德委员会召开紧急闭门听证会，调查这起受贿丑闻。"
    },
    "form_confusables": [
      {
        "word": "committee",
        "zh": "委员会"
      },
      {
        "word": "commitment",
        "zh": "承诺；奉献"
      },
      {
        "word": "commodity",
        "zh": "商品"
      },
      {
        "word": "commute",
        "zh": "通勤；减刑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "committee",
        "zh": "专项委员会；工作组"
      },
      {
        "word": "commission",
        "zh": "特派委员会"
      },
      {
        "word": "board",
        "zh": "董事会；理事会"
      },
      {
        "word": "council",
        "zh": "地方议会；政务会"
      }
    ],
    "notes": "【搭配考点】ethics/steering committee 道德审查委员会/指导筹备委员会；on the committee 担任委员；【形近辨析】commitment (投入与承诺)，commodity (大宗商品)，commute (上下班通勤)；【近义辨析】commission 侧重政府以官方特命授权设立的高规格独立法定调查机构，board 专指公司企业负责战略决策的董事会或考官委员会，council 侧重由选民推选的地方市议会或区域市政机构，在机关内部设立处理具体专业事务的内部工作委员会唯一契合 committee。"
  },
  "commodity": {
    "word": "commodity",
    "zh": "商品；货物；有价值之物",
    "translation": "商品；货物；有价值之物",
    "cloze": {
      "sentence": "In our fast-paced modern society, uninterrupted spare time has become a scarce and valuable ______.",
      "original": "In our fast-paced modern society, uninterrupted spare time has become a scarce and valuable commodity.",
      "translation": "在快节奏的现代社会中，不被打扰的闲暇时光已经成为一种稀缺而宝贵的身外之物。"
    },
    "form_confusables": [
      {
        "word": "commodity",
        "zh": "大宗商品；物品"
      },
      {
        "word": "community",
        "zh": "社区；共同体"
      },
      {
        "word": "committee",
        "zh": "委员会"
      },
      {
        "word": "modesty",
        "zh": "谦逊"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commodity",
        "zh": "初级商品；有用之物"
      },
      {
        "word": "merchandise",
        "zh": "零售商品"
      },
      {
        "word": "goods",
        "zh": "货物；动产"
      },
      {
        "word": "product",
        "zh": "制成品；产物"
      }
    ],
    "notes": "【搭配考点】valuable commodity 宝贵之物；commodity market 大宗商品期货市场（原油黄金农产品等）；【形近辨析】community (社区社群)，committee (委员会)，modesty (谦恭虚心)；【近义辨析】merchandise 专指在商场货架上陈列待售的百货包装零售品，goods 侧重由卡车货船运输的物理货物总称，product 强调由工厂研发流水线加工出来的制成品，在经济学上指未经差异化加工的基础原料货品，或生动比喻抽象具有巨大价值的事物唯一契合 commodity。"
  },
  "common": {
    "word": "common",
    "zh": "常见的；共同的；普通的大众的",
    "translation": "常见的；共同的；普通的大众的",
    "cloze": {
      "sentence": "Respiratory infections and seasonal allergies are especially ______ among children during the winter months.",
      "original": "Respiratory infections and seasonal allergies are especially common among children during the winter months.",
      "translation": "呼吸道感染与季节性过敏在冬季月份的儿童群体中尤为常见。"
    },
    "form_confusables": [
      {
        "word": "common",
        "zh": "普通的；常见的"
      },
      {
        "word": "command",
        "zh": "命令；指挥"
      },
      {
        "word": "comment",
        "zh": "评论"
      },
      {
        "word": "summon",
        "zh": "召唤；传唤"
      }
    ],
    "semantic_confusables": [
      {
        "word": "common",
        "zh": "普遍多见的；大众的"
      },
      {
        "word": "widespread",
        "zh": "广泛蔓延的"
      },
      {
        "word": "prevalent",
        "zh": "盛行的；普遍存在的"
      },
      {
        "word": "ubiquitous",
        "zh": "无所不在的"
      }
    ],
    "notes": "【搭配考点】common knowledge 常识；have something in common 有共同之处；common sense 普遍常理；【形近辨析】command (下达指令/统率)，comment (评论意见)，summon (传唤召集)；【近义辨析】widespread 强调在地理分布上跨越辽阔区域广泛扩散，prevalent 属于正式学学术语强调某种不良风气或疾病在某时期极度流行，ubiquitous 强调无所不在随处可见（如智能手机），在此处表达日常出现频率极高、司空见惯的普遍现象唯一契合 common。"
  },
  "communicate": {
    "word": "communicate",
    "zh": "沟通；传达；交流；传染",
    "translation": "沟通；传达；交流；传染",
    "cloze": {
      "sentence": "Effective leaders must be able to ______ complex strategic visions clearly to every team member.",
      "original": "Effective leaders must be able to communicate complex strategic visions clearly to every team member.",
      "translation": "卓越的领导者必须能够将复杂的战略愿景清晰地传达给每一位团队成员。"
    },
    "form_confusables": [
      {
        "word": "communicate",
        "zh": "沟通；传达"
      },
      {
        "word": "commute",
        "zh": "通勤；减免"
      },
      {
        "word": "complicate",
        "zh": "使复杂化"
      },
      {
        "word": "compute",
        "zh": "计算"
      }
    ],
    "semantic_confusables": [
      {
        "word": "communicate",
        "zh": "交流传达；沟通想法"
      },
      {
        "word": "convey",
        "zh": "传达；转达意思"
      },
      {
        "word": "express",
        "zh": "表达言语态度"
      },
      {
        "word": "articulate",
        "zh": "清晰阐明"
      }
    ],
    "notes": "【搭配考点】communicate clearly with 良好沟通；communicate disease 传染疾病；communicate ideas 交流思想；【形近辨析】commute (往返通勤)，complicate (使事情节外生枝复杂化)，compute (电脑计算运算)；【近义辨析】convey 侧重如运输货物般将无形的情感深意传递给对方领悟，express 侧重用言辞哭笑肢体向外宣泄内心思想，articulate 强调言辞清晰工整、一字一句透彻剖析，在此处指双向信息对齐与理念传达完整过程唯一契合 communicate。"
  },
  "communication": {
    "word": "communication",
    "zh": "沟通；交流；通讯",
    "translation": "沟通；交流；通讯",
    "cloze": {
      "sentence": "The unexpected breakdown in ______ between air traffic control and the pilot nearly caused a disaster.",
      "original": "The unexpected breakdown in communication between air traffic control and the pilot nearly caused a disaster.",
      "translation": "航空管制员与飞行员之间通讯沟通的突发中断险些酿成一场大祸。"
    },
    "form_confusables": [
      {
        "word": "communication",
        "zh": "交流；通讯"
      },
      {
        "word": "combination",
        "zh": "结合；组合"
      },
      {
        "word": "compensation",
        "zh": "补偿金；薪水"
      },
      {
        "word": "computation",
        "zh": "计算"
      }
    ],
    "semantic_confusables": [
      {
        "word": "communication",
        "zh": "通讯联络；人际交流"
      },
      {
        "word": "correspondence",
        "zh": "信函往来；对应"
      },
      {
        "word": "conversation",
        "zh": "交谈；对话"
      },
      {
        "word": "interaction",
        "zh": "相互作用；人际互动"
      }
    ],
    "notes": "【搭配考点】breakdown in communication 沟通中断/脱节；means of communication 通讯工具；non-verbal communication 非语言沟通；【形近辨析】combination (结合组合)，compensation (薪酬待遇/损失补偿)，computation (数据核算)；【近义辨析】correspondence 专指书信电邮等正式书面文本信函往来，conversation 专指两人或多人的口头随性闲聊对话，interaction 侧重彼此之间的物理接触或社交互动反应，在指无线电指挥调度等信息精准交互链条唯一契合 communication。"
  },
  "communist": {
    "word": "communist",
    "zh": "共产主义的；共产党员",
    "translation": "共产主义的；共产党员",
    "cloze": {
      "sentence": "The nation was governed for several decades by the ruling ______ party prior to sweeping democratic reforms.",
      "original": "The nation was governed for several decades by the ruling communist party prior to sweeping democratic reforms.",
      "translation": "在进行全面民主改革之前，该国数十年间一直由执政的共产党治理。"
    },
    "form_confusables": [
      {
        "word": "communist",
        "zh": "共产主义的；党员"
      },
      {
        "word": "community",
        "zh": "社区；团体"
      },
      {
        "word": "columnist",
        "zh": "专栏作家"
      },
      {
        "word": "immunologist",
        "zh": "免疫学家"
      }
    ],
    "semantic_confusables": [
      {
        "word": "communist",
        "zh": "共产主义性质的"
      },
      {
        "word": "socialist",
        "zh": "社会主义的"
      },
      {
        "word": "marxist",
        "zh": "马克思主义的"
      },
      {
        "word": "collectivist",
        "zh": "集体主义的"
      }
    ],
    "notes": "【搭配考点】communist party 共产党；Communist Manifesto 《共产党宣言》；【形近辨析】community (社区大众)，columnist (报刊专栏作者)，immunologist (免疫学医学专家)；【近义辨析】socialist 侧重民主社会主义福利国家制度等更广泛的左翼经济体制，marxist 侧重从马克思阶级斗争与辩证唯物主义历史哲学理论分析，collectivist 侧重反对个人主义提倡集体至上的价值观，在指代具体特定历史政党与无产阶级政权意识形态实体标签上唯一契合 communist。"
  },
  "community": {
    "word": "community",
    "zh": "社区；共同体；界",
    "translation": "社区；共同体；界",
    "cloze": {
      "sentence": "The local volunteer group organized a weekend charity bazaar to foster a stronger sense of ______.",
      "original": "The local volunteer group organized a weekend charity bazaar to foster a stronger sense of community.",
      "translation": "当地志愿者组织了一场周末慈善义卖，以培养更加深厚的社区归属感与凝聚力。"
    },
    "form_confusables": [
      {
        "word": "community",
        "zh": "社区；共同体"
      },
      {
        "word": "commodity",
        "zh": "大宗商品"
      },
      {
        "word": "communist",
        "zh": "共产主义者"
      },
      {
        "word": "immunity",
        "zh": "免疫力；豁免权"
      }
    ],
    "semantic_confusables": [
      {
        "word": "community",
        "zh": "社区社群；共同体"
      },
      {
        "word": "neighborhood",
        "zh": "街坊四邻；地段"
      },
      {
        "word": "public",
        "zh": "大众公众"
      },
      {
        "word": "society",
        "zh": "社会"
      }
    ],
    "notes": "【搭配考点】sense of community 社区归属感/共同体意识；international community 国际社会；scientific community 科学界；【形近辨析】commodity (货物产品)，communist (共产党员)，immunity (人体免疫系统/法律豁免权)；【近义辨析】neighborhood 仅指家门口周围几条街区的狭义物理地理区域，public 泛指作为看客受众的没有亲密纽带的广大公众，society 强调国家制度法律管辖下的宏观人类社会总体，在强调由共同价值观、温情互助纽带连结的社群共同体上唯一契合 community。"
  },
  "compact": {
    "word": "compact",
    "zh": "紧凑的；契约；压实",
    "translation": "紧凑的；契约；压实",
    "cloze": {
      "sentence": "Thanks to microchip miniaturization, modern laptop computers are remarkably sleek and ______.",
      "original": "Thanks to microchip miniaturization, modern laptop computers are remarkably sleek and compact.",
      "translation": "得益于微芯片微型化技术，现代笔记本电脑极其轻薄小巧且布局紧凑。"
    },
    "form_confusables": [
      {
        "word": "compact",
        "zh": "紧凑的；契约"
      },
      {
        "word": "impact",
        "zh": "冲击力；影响"
      },
      {
        "word": "contract",
        "zh": "合同；收缩"
      },
      {
        "word": "contact",
        "zh": "联系；接触"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compact",
        "zh": "紧凑小巧的；密集的"
      },
      {
        "word": "portable",
        "zh": "便携轻便的"
      },
      {
        "word": "miniature",
        "zh": "微型的；缩小的"
      },
      {
        "word": "dense",
        "zh": "高密度的；稠密的"
      }
    ],
    "notes": "【搭配考点】compact design/size 紧凑型设计/小巧尺寸；compact car 紧凑型轿车；Mayflower Compact 《五月花号公约》；【形近辨析】impact (撞击力/重大影响)，contract (商业合同/收缩痉挛)，contact (联络交往)；【近义辨析】portable 侧重便于单手携带或放进背包带走，miniature 强调把庞然大物缩小比例做成微型玩偶模型，dense 侧重分子间隙极小或人口拥挤稠密，在指所有零件精密合理排布、占用极小立体空间的紧凑性上唯一契合 compact。"
  },
  "companion": {
    "word": "companion",
    "zh": "同伴；伴侣；指南",
    "translation": "同伴；伴侣；指南",
    "cloze": {
      "sentence": "Throughout her perilous solo expedition across the Arctic, her faithful dog was her sole constant ______.",
      "original": "Throughout her perilous solo expedition across the Arctic, her faithful dog was her sole constant companion.",
      "translation": "在她危险重重的北极单人探险全程中，那只忠诚的猎犬是她唯一始终相伴的伴侣。"
    },
    "form_confusables": [
      {
        "word": "companion",
        "zh": "同伴；伴侣"
      },
      {
        "word": "company",
        "zh": "公司；陪伴"
      },
      {
        "word": "champion",
        "zh": "冠军"
      },
      {
        "word": "campaign",
        "zh": "战役；运动"
      }
    ],
    "semantic_confusables": [
      {
        "word": "companion",
        "zh": "生活伴侣；同行伙伴"
      },
      {
        "word": "partner",
        "zh": "配偶；搭档；合伙人"
      },
      {
        "word": "comrade",
        "zh": "同志；并肩战友"
      },
      {
        "word": "escort",
        "zh": "护送人员；伴护"
      }
    ],
    "notes": "【搭配考点】constant companion 常伴左右的伴侣；traveling companion 旅伴；Oxford Companion 牛津指南系列；【形近辨析】company (不可数名词陪伴，或企业公司)，champion (优胜冠军)，campaign (宣传竞选战役)；【近义辨析】partner 侧重法律商业上的合伙人或婚姻缔约伴侣，comrade 强调拥有共同政治理想或战壕中同生共死的同志战友，escort 侧重拿报酬提供安保陪护护送人员，指朝夕相伴分享生活孤独体验的忠实伙伴唯一契合 companion。"
  },
  "company": {
    "word": "company",
    "zh": "公司；陪伴；宾客",
    "translation": "公司；陪伴；宾客",
    "cloze": {
      "sentence": "Living alone in the remote mountain cabin, he truly enjoyed the quiet ______ of his pet cat.",
      "original": "Living alone in the remote mountain cabin, he truly enjoyed the quiet company of his pet cat.",
      "translation": "独自居住在偏远的山间木屋里，他由衷享受着宠物猫安静无声的暖心陪伴。"
    },
    "form_confusables": [
      {
        "word": "company",
        "zh": "陪伴；公司"
      },
      {
        "word": "companion",
        "zh": "同伴"
      },
      {
        "word": "compose",
        "zh": "创作；组成"
      },
      {
        "word": "compass",
        "zh": "指南针"
      }
    ],
    "semantic_confusables": [
      {
        "word": "company",
        "zh": "陪伴；相伴状态"
      },
      {
        "word": "companionship",
        "zh": "情义陪伴；交情"
      },
      {
        "word": "presence",
        "zh": "在场；存在"
      },
      {
        "word": "society",
        "zh": "交往社交；社会"
      }
    ],
    "notes": "【搭配考点】keep someone company 陪伴某人（极高频地道短语）；for company 作伴；in good company 有很多人也有同样情况/不乏同道者；【形近辨析】companion (可数名词：具体的旅伴个体积)，compose (编曲写作/平复心情)，compass (罗盘指南针)；【近义辨析】companionship 侧重长年累月培养建立的深厚友情伴侣情谊，presence 仅客观表明某人在场出席并未离开，society 属于古雅英语指与上流社会的社交往来，用于 keep someone company 搭配中指具体有人在旁消除寂寞的陪伴唯一契合 company。"
  },
  "compare": {
    "word": "compare",
    "zh": "比较；对比；比拟",
    "translation": "比较；对比；比拟",
    "cloze": {
      "sentence": "It is unfair to ______ the rookie player's early performance with that of a seasoned veteran.",
      "original": "It is unfair to compare the rookie player's early performance with that of a seasoned veteran.",
      "translation": "将这位新秀球员的早期表现与经验丰富的老将相提并论是不公平的。"
    },
    "form_confusables": [
      {
        "word": "compare",
        "zh": "比较；比作"
      },
      {
        "word": "compete",
        "zh": "竞争"
      },
      {
        "word": "compile",
        "zh": "汇编；收集"
      },
      {
        "word": "compensate",
        "zh": "补偿"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compare",
        "zh": "对比；匹敌"
      },
      {
        "word": "contrast",
        "zh": "对照；形成对比"
      },
      {
        "word": "equate",
        "zh": "等同看待"
      },
      {
        "word": "match",
        "zh": "匹敌；抗衡"
      }
    ],
    "notes": "【搭配考点】compare A with B 将A与B比照异同；compare A to B 把A比作B（打比方）；compare notes 交换看法；【形近辨析】compete (参与竞争比赛)，compile (汇编数据/编译代码)，compensate (经济赔偿/弥补短板)；【近义辨析】contrast 严格侧重只比较两者之间的显著差异与对立反差，equate 强调认为两件事完全画等号等同，match 侧重力量势均力敌能够匹敌，在全面权衡两者的优缺点或比照异同上唯一契合 compare。"
  },
  "comparison": {
    "word": "comparison",
    "zh": "比较；对照；比喻",
    "translation": "比较；对照；比喻",
    "cloze": {
      "sentence": "The rookie's salary seemed modest, but by ______ with average national incomes, it was extraordinary.",
      "original": "The rookie's salary seemed modest, but by comparison with average national incomes, it was extraordinary.",
      "translation": "这位新人的薪水看似不高，但若与全国平均收入相比，就显得格外可观了。"
    },
    "form_confusables": [
      {
        "word": "comparison",
        "zh": "比较；对照"
      },
      {
        "word": "compass",
        "zh": "指南针；罗盘"
      },
      {
        "word": "companion",
        "zh": "同伴"
      },
      {
        "word": "champion",
        "zh": "冠军"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comparison",
        "zh": "对照比较；比照"
      },
      {
        "word": "contrast",
        "zh": "显著反差"
      },
      {
        "word": "analogy",
        "zh": "类比；类推"
      },
      {
        "word": "correlation",
        "zh": "相关性"
      }
    ],
    "notes": "【搭配考点】by comparison with 与...相比（核心连词短语）；stand/bear comparison 经得起比较；draw a comparison 作比较；【形近辨析】compass (罗盘罗网)，companion (同行伴侣)，champion (金牌冠军)；【近义辨析】contrast 强调黑白分明的水火反差，analogy 侧重通过阐述相似点以帮助理解复杂事物的修辞类比，correlation 专指两组变量之间的数学统计关联程度，构成 by comparison 习惯用语唯一契合 comparison。"
  },
  "compete": {
    "word": "compete",
    "zh": "竞争；比赛；对抗",
    "translation": "竞争；比赛；对抗",
    "cloze": {
      "sentence": "Small independent bookstores find it increasingly difficult to ______ against massive online retail giants.",
      "original": "Small independent bookstores find it increasingly difficult to compete against massive online retail giants.",
      "translation": "小型独立书店发现，要想与庞大的线上零售巨头展开竞争变得越来越艰难。"
    },
    "form_confusables": [
      {
        "word": "compete",
        "zh": "竞争；对抗"
      },
      {
        "word": "complete",
        "zh": "完成；完整的"
      },
      {
        "word": "compute",
        "zh": "计算；核算"
      },
      {
        "word": "compile",
        "zh": "编撰；收集"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compete",
        "zh": "角逐较量；竞争"
      },
      {
        "word": "vie",
        "zh": "激烈争夺；竞争"
      },
      {
        "word": "contend",
        "zh": "争辩；搏斗"
      },
      {
        "word": "rival",
        "zh": "比得上；相匹敌"
      }
    ],
    "notes": "【搭配考点】compete with/against 与...相抗衡竞争；compete in a tournament 参加锦标赛；compete for market share 争夺市场份额；【形近辨析】complete (动词完成/形容词完全的)，compute (计算估算)，compile (编辑整理程序)；【近义辨析】vie 侧重两个体为夺取眼球或微小荣耀短时间暗自较劲较量（vie for attention），contend 带有在恶劣困境中奋力抗争搏斗的色彩，rival 作为及物动词侧重在品质水平上足以与某人并驾齐驱，在商业市场与正规体育赛事公开比拼较量上唯一契合 compete。"
  },
  "competent": {
    "word": "competent",
    "zh": "有能力的；能胜任的；称职的",
    "translation": "有能力的；能胜任的；称职的",
    "cloze": {
      "sentence": "Due to her extensive legal experience, she was deemed fully ______ to handle the high-stakes arbitration.",
      "original": "Due to her extensive legal experience, she was deemed fully competent to handle the high-stakes arbitration.",
      "translation": "凭借其深厚的法律从业经验，她被认为完全有能力胜任并妥善处理这场重大仲裁。"
    },
    "form_confusables": [
      {
        "word": "competent",
        "zh": "有胜任能力的；称职的"
      },
      {
        "word": "competition",
        "zh": "比赛；竞争"
      },
      {
        "word": "component",
        "zh": "组件；成分"
      },
      {
        "word": "complacent",
        "zh": "自满的；自鸣得意的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "competent",
        "zh": "能胜任的；称职的"
      },
      {
        "word": "qualified",
        "zh": "具备资质的；合格的"
      },
      {
        "word": "capable",
        "zh": "有才能的；能够的"
      },
      {
        "word": "proficient",
        "zh": "熟练精通的"
      }
    ],
    "notes": "【搭配考点】competent to do sth 能胜任做某事；competent authority 主管机关/有管辖权的当局；【形近辨析】competition (体育竞争比赛)，component (机器零部件/组成要素)，complacent (盲目自满自鸣得意的)；【近义辨析】qualified 侧重持有官方颁发的证书或文凭达到资质门槛，capable 侧重具有潜在的身体智力承受能力（capable of doing），proficient 强调技能操练得极其娴熟熟巧，在指拥有充足的学识能力合格完成特定岗位职责使命上唯一契合 competent。"
  },
  "competition": {
    "word": "competition",
    "zh": "竞争；竞赛；比赛",
    "translation": "竞争；竞赛；比赛",
    "cloze": {
      "sentence": "Fierce market ______ has driven domestic smartphone manufacturers to accelerate technological innovation.",
      "original": "Fierce market competition has driven domestic smartphone manufacturers to accelerate technological innovation.",
      "translation": "激烈的市场竞争促使国内智能手机制造商加快了技术创新的步伐。"
    },
    "form_confusables": [
      {
        "word": "competition",
        "zh": "竞争；竞赛"
      },
      {
        "word": "composition",
        "zh": "构成；作文"
      },
      {
        "word": "compensation",
        "zh": "薪酬；补偿"
      },
      {
        "word": "completion",
        "zh": "完成；结束"
      }
    ],
    "semantic_confusables": [
      {
        "word": "competition",
        "zh": "市场竞争；竞赛"
      },
      {
        "word": "rivalry",
        "zh": "长期较量；对立"
      },
      {
        "word": "contest",
        "zh": "才艺选秀；竞赛"
      },
      {
        "word": "tournament",
        "zh": "淘汰制锦标赛"
      }
    ],
    "notes": "【搭配考点】fierce/intense competition 激烈的市场竞争；enter/win a competition 参加/赢得竞赛；【形近辨析】composition (化学成分/音乐作文创作)，compensation (赔偿金/薪资待遇)，completion (圆满竣工/结束)；【近义辨析】rivalry 强调两大家族、企业或死敌之间长达数年不可调和的争霸对抗，contest 侧重由评委按打分规则评选胜负的选秀或演讲比赛，tournament 专指多轮循环淘汰的多队伍锦标赛，在指经济规律下商家角逐生存空间的市场竞争大环境唯一契合 competition。"
  },
  "competitive": {
    "word": "competitive",
    "zh": "竞争激烈的；有竞争力的；优惠划算的",
    "translation": "竞争激烈的；有竞争力的；优惠划算的",
    "cloze": {
      "sentence": "To thrive in today's globalized economy, businesses must offer superior quality at highly ______ prices.",
      "original": "To thrive in today's globalized economy, businesses must offer superior quality at highly competitive prices.",
      "translation": "为了在当今全球化经济中蓬勃发展，企业必须以极具竞争力的优惠价格提供上乘品质。"
    },
    "form_confusables": [
      {
        "word": "competitive",
        "zh": "有竞争力的；竞争的"
      },
      {
        "word": "comparative",
        "zh": "比较的；相对的"
      },
      {
        "word": "comprehensive",
        "zh": "全面的；综合的"
      },
      {
        "word": "conservative",
        "zh": "保守的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "competitive",
        "zh": "具有竞争优势的；实惠的"
      },
      {
        "word": "aggressive",
        "zh": "咄咄逼人的；进取的"
      },
      {
        "word": "cutthroat",
        "zh": "残酷绞杀的"
      },
      {
        "word": "affordable",
        "zh": "买得起的；实惠的"
      }
    ],
    "notes": "【搭配考点】competitive price/edge 具有竞争力的实惠价格/竞争优势；highly competitive 竞争异常激烈的；【形近辨析】comparative (相对的/比较级)，comprehensive (全面的/综合性的)，conservative (保守守旧的)；【近义辨析】aggressive 侧重攻击性强、狼性十足的争抢，cutthroat 强调同行之间杀红了眼的恶性低价绞杀，affordable 侧重普通工薪家庭勉强能够买得起，在商业上形容价格既划算又比同行更具吸引力唯有与 prices 搭配唯一契合 competitive。"
  },
  "competitor": {
    "word": "competitor",
    "zh": "竞争者；对手；参赛选手",
    "translation": "竞争者；对手；参赛选手",
    "cloze": {
      "sentence": "At seventy-two years of age, he was by far the oldest registered ______ in this year's city marathon.",
      "original": "At seventy-two years of age, he was by far the oldest registered competitor in this year's city marathon.",
      "translation": "在72岁的高龄，他是迄今为止本届城市马拉松赛中登记报名的最年长参赛者。"
    },
    "form_confusables": [
      {
        "word": "competitor",
        "zh": "竞争者；参赛者"
      },
      {
        "word": "compositor",
        "zh": "排字工人"
      },
      {
        "word": "conductor",
        "zh": "指挥家；列车长；导体"
      },
      {
        "word": "collaborator",
        "zh": "合作者；通敌者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "competitor",
        "zh": "比赛选手；商界对手"
      },
      {
        "word": "rival",
        "zh": "竞争对手；宿敌"
      },
      {
        "word": "opponent",
        "zh": "当场对手；反对者"
      },
      {
        "word": "contestant",
        "zh": "选拔赛选手"
      }
    ],
    "notes": "【搭配考点】main/chief competitor 主要竞争对手；registered competitor 注册参赛选手；【形近辨析】compositor (报刊印刷排字员)，conductor (交响乐指挥/列车售票员/物理良导体)，collaborator (合著者/战时通敌叛徒)；【近义辨析】rival 强调势均力敌、怀有敌意的争霸夙敌，opponent 侧重在网球棋盘辩论赛场上站在网对面直接过招的当场对手，contestant 专指电视问答或选美秀等选拔性比赛的选手，在大型体育赛事参赛选手总称上唯一契合 competitor。"
  },
  "complain": {
    "word": "complain",
    "zh": "抱怨；投诉；发牢骚",
    "translation": "抱怨；投诉；发牢骚",
    "cloze": {
      "sentence": "Unhappy customers have every legal right to ______ about defective goods and demand an immediate replacement.",
      "original": "Unhappy customers have every legal right to complain about defective goods and demand an immediate replacement.",
      "translation": "对缺陷商品不满意的消费者完全有合法权利进行投诉，并要求立即换货。"
    },
    "form_confusables": [
      {
        "word": "complain",
        "zh": "抱怨；投诉"
      },
      {
        "word": "compile",
        "zh": "汇编；编译"
      },
      {
        "word": "campaign",
        "zh": "运动；战役"
      },
      {
        "word": "explain",
        "zh": "解释；说明"
      }
    ],
    "semantic_confusables": [
      {
        "word": "complain",
        "zh": "投诉；抱怨不满"
      },
      {
        "word": "grumble",
        "zh": "咕哝；发牢骚"
      },
      {
        "word": "whine",
        "zh": "哭诉；哀鸣"
      },
      {
        "word": "protest",
        "zh": "抗议；提出异议"
      }
    ],
    "notes": "【搭配考点】complain about/of 针对某事进行抱怨或投诉；complain to the manager 向经理投诉；【形近辨析】compile (搜集整理汇编)，campaign (有组织的社会运动)，explain (澄清解释说明)；【近义辨析】grumble 侧重在私底下低声咕哝埋怨不顺从，whine 强调带有孩子气尖叫抽泣、无病呻吟的烦人哭诉，protest 强调在大街上举牌或在法庭上正式提出抗议坚决不服，在指基于自身权益受损向主管方正式提出不满意见诉求时唯一契合 complain。"
  },
  "complaint": {
    "word": "complaint",
    "zh": "抱怨；投诉；诉状；微恙",
    "translation": "抱怨；投诉；诉状；微恙",
    "cloze": {
      "sentence": "The consumer watchdog received a flood of formal ______ regarding the airline's arbitrary flight cancellations.",
      "original": "The consumer watchdog received a flood of formal complaints regarding the airline's arbitrary flight cancellations.",
      "translation": "消费者监督机构接到了铺天盖地的正式投诉，指责该航空公司随意取消航班。"
    },
    "form_confusables": [
      {
        "word": "complaint",
        "zh": "投诉；诉状；抱怨"
      },
      {
        "word": "compliant",
        "zh": "顺从依从的"
      },
      {
        "word": "compliance",
        "zh": "合规；遵从"
      },
      {
        "word": "complement",
        "zh": "补充；互补品"
      }
    ],
    "semantic_confusables": [
      {
        "word": "complaint",
        "zh": "正式投诉信；诉状"
      },
      {
        "word": "grievance",
        "zh": "委屈；不平苦水"
      },
      {
        "word": "objection",
        "zh": "异议；反对理由"
      },
      {
        "word": "accusation",
        "zh": "控告；谴责"
      }
    ],
    "notes": "【搭配考点】lodge/file a formal complaint 提出正式书面投诉/提起诉讼；minor complaint 身体微恙/小毛病；【形近辨析】compliant (顺从听话的)，compliance (法律监管合规性)，complement (互补之物/增光添彩)；【近义辨析】grievance 侧重劳工因遭受不公待遇而积蓄已久、向工会倾诉的委屈苦水，objection 专指在会议或法庭辩护中当场喊出的异议反对意见，accusation 强调指控某人犯有严重罪行，在正式渠道向监管机构呈交的消费者维权投诉案上唯一契合 complaint。"
  },
  "complete": {
    "word": "complete",
    "zh": "完成；完整的；彻底的",
    "translation": "完成；完整的；彻底的",
    "cloze": {
      "sentence": "Students must successfully ______ all core coursework before they are permitted to submit their final dissertations.",
      "original": "Students must successfully complete all core coursework before they are permitted to submit their final dissertations.",
      "translation": "学生必须先顺利修完所有核心课程作业，方可获准提交最终毕业论文。"
    },
    "form_confusables": [
      {
        "word": "complete",
        "zh": "完成；完整的"
      },
      {
        "word": "compete",
        "zh": "竞争；角逐"
      },
      {
        "word": "compute",
        "zh": "计算；运算"
      },
      {
        "word": "complex",
        "zh": "复杂的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "complete",
        "zh": "修完；完成全部环节"
      },
      {
        "word": "finish",
        "zh": "做完；结束尾声"
      },
      {
        "word": "conclude",
        "zh": "终结；推断出"
      },
      {
        "word": "accomplish",
        "zh": "圆满达成目标"
      }
    ],
    "notes": "【搭配考点】complete a degree/course 修完全部学位与课业；complete silence 彻底死一般的寂静；【形近辨析】compete (参与竞争较量)，compute (数学精密计算)，complex (错综复杂的)；【近义辨析】finish 仅强调把手头事情做到了末尾停下来（可能马虎了事），conclude 侧重演讲会议拉下帷幕正式收尾，accomplish 强调克服艰险达成宏伟使命，在将包含多个严密模块的所有环节完整履行完毕上唯一契合 complete。"
  },
  "completely": {
    "word": "completely",
    "zh": "完全地；彻底地",
    "translation": "完全地；彻底地",
    "cloze": {
      "sentence": "The eyewitness's account of the traffic accident was ______ different from what had been originally reported.",
      "original": "The eyewitness's account of the traffic accident was completely different from what had been originally reported.",
      "translation": "目击证人对这起交通事故的描述与最初的报道完全大相径庭。"
    },
    "form_confusables": [
      {
        "word": "completely",
        "zh": "完全地；彻底地"
      },
      {
        "word": "competitively",
        "zh": "竞争性地"
      },
      {
        "word": "complexly",
        "zh": "错综复杂地"
      },
      {
        "word": "quietly",
        "zh": "安静地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "completely",
        "zh": "完全彻底地"
      },
      {
        "word": "entirely",
        "zh": "全部地；完全地"
      },
      {
        "word": "totally",
        "zh": "全然；彻底地"
      },
      {
        "word": "thoroughly",
        "zh": "详尽细致地"
      }
    ],
    "notes": "【搭配考点】completely different 截然不同/天壤之别；completely agree 完全赞同；【形近辨析】competitively (有竞争优势地)，complexly (复杂多变地)，quietly (静悄悄地)；【近义辨析】entirely 侧重在数量或范围整体上无一遗漏百分百覆盖，totally 偏口语强化感情色彩（如 totally wrong），thoroughly 强调工作、清洁或调查做得极为深入细致绝无遗漏，修饰 different 表达事物属性无任何重合交集时最通用且唯一契合 completely。"
  },
  "complex": {
    "word": "complex",
    "zh": "复杂的；综合体；情结",
    "translation": "复杂的；综合体；情结",
    "cloze": {
      "sentence": "The human brain is arguably the most ______ biological structure found in the known universe.",
      "original": "The human brain is arguably the most complex biological structure found in the known universe.",
      "translation": "人类大脑可以说是已知宇宙中所发现的最错综复杂的生物结构。"
    },
    "form_confusables": [
      {
        "word": "complex",
        "zh": "复杂的；综合体"
      },
      {
        "word": "perplex",
        "zh": "使困惑；使茫然"
      },
      {
        "word": "duplex",
        "zh": "复式公寓"
      },
      {
        "word": "simplex",
        "zh": "单项的；单纯的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "complex",
        "zh": "系统繁复交织的"
      },
      {
        "word": "intricate",
        "zh": "错综盘结精细的"
      },
      {
        "word": "convoluted",
        "zh": "回旋曲折晦涩的"
      },
      {
        "word": "sophisticated",
        "zh": "尖端复杂的"
      }
    ],
    "notes": "【搭配考点】complex structure/system 复杂的内部结构或系统；sports complex 大型综合体育中心；inferiority complex 自卑情结；【形近辨析】perplex (使人丈二和尚摸不着头脑/困惑)，duplex (双拼双层跃层公寓)，simplex (单项简单的)；【近义辨析】intricate 强调如蕾丝刺绣或精密钟表机芯般细小齿轮交织缠绕，convoluted 带有贬义侧重文章句子或论述逻辑拐弯抹角晦涩难读，sophisticated 侧重技术成熟老练先进，指由众多功能单元互联交织成复杂机体网络系统唯一契合 complex。"
  },
  "complexity": {
    "word": "complexity",
    "zh": "复杂性；错综复杂之处",
    "translation": "复杂性；错综复杂之处",
    "cloze": {
      "sentence": "Only after years of field study did the marine ecologists begin to comprehend the immense ______ of coral reef ecosystems.",
      "original": "Only after years of field study did the marine ecologists begin to comprehend the immense complexity of coral reef ecosystems.",
      "translation": "直到经过多年的实地考察，海洋生态学家才开始真正理解珊瑚礁生态系统难以估量的复杂性。"
    },
    "form_confusables": [
      {
        "word": "complexity",
        "zh": "复杂性；繁杂"
      },
      {
        "word": "perplexity",
        "zh": "困惑；迷惘"
      },
      {
        "word": "simplicity",
        "zh": "简单；朴素"
      },
      {
        "word": "flexibility",
        "zh": "灵活性；弹性"
      }
    ],
    "semantic_confusables": [
      {
        "word": "complexity",
        "zh": "系统复杂性；深奥"
      },
      {
        "word": "intricacy",
        "zh": "精巧细致之处"
      },
      {
        "word": "complication",
        "zh": "并发症；节外生枝"
      },
      {
        "word": "sophistication",
        "zh": "精密度；老练"
      }
    ],
    "notes": "【搭配考点】immense complexity 难以估量的庞大复杂性；reduce complexity 简化复杂度；【形近辨析】perplexity (丈二摸不着头脑的茫然困惑心境)，simplicity (反义词：纯朴简洁)，flexibility (柔韧度/灵活机动性)；【近义辨析】intricacy 侧重设计、花纹或法律条款的细节环环相扣精巧之处，complication 侧重原有问题之上节外生枝出现的节外问题或医学并发症，sophistication 强调技术或品味的成熟高深，在此处描述由千万物种组成的巨型生态网络系统属性唯一契合 complexity。"
  },
  "complicated": {
    "word": "complicated",
    "zh": "复杂的；难懂的；麻烦的",
    "translation": "复杂的；难懂的；麻烦的",
    "cloze": {
      "sentence": "The new tax reform legislation is so ______ that even seasoned certified accountants struggle to interpret it.",
      "original": "The new tax reform legislation is so complicated that even seasoned certified accountants struggle to interpret it.",
      "translation": "这项新的税改法案极其繁复难懂，以至于连资深的注册会计师都难以准确解读。"
    },
    "form_confusables": [
      {
        "word": "complicated",
        "zh": "复杂的；难懂的"
      },
      {
        "word": "implicated",
        "zh": "卷入牵连的"
      },
      {
        "word": "duplicated",
        "zh": "完全复制的"
      },
      {
        "word": "populated",
        "zh": "有人居住的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "complicated",
        "zh": "繁复难解的；纠结的"
      },
      {
        "word": "tangled",
        "zh": "纠缠混乱的"
      },
      {
        "word": "knotty",
        "zh": "棘手节疤多的"
      },
      {
        "word": "difficult",
        "zh": "困难吃力的"
      }
    ],
    "notes": "【搭配考点】complicated situation/rules 错综复杂的局势/繁琐复杂的规则；make things complicated 节外生枝把事情弄复杂；【形近辨析】implicated (卷入案件被牵连的)，duplicated (被完全翻印重样的)，populated (有人居住生活的)；【近义辨析】tangled 侧重绳索电线真真切切打结缠成一团乱麻，knotty 强调问题充满坚硬节疤极难下刀劈开（knotty problem 棘手难题），difficult 侧重单纯耗费体力智力难度大，而在强调由于条文条款细节过于繁复冗长导致人难以理顺看懂唯一契合 complicated。"
  },
  "component": {
    "word": "component",
    "zh": "成分；组成部分；部件",
    "translation": "成分；组成部分；部件",
    "cloze": {
      "sentence": "High-grade optical lenses form an indispensable core ______ of modern laser surgical equipment.",
      "original": "High-grade optical lenses form an indispensable core component of modern laser surgical equipment.",
      "translation": "高精度光学镜片构成了现代激光手术设备不可或缺的核心部件。"
    },
    "form_confusables": [
      {
        "word": "component",
        "zh": "组件；部件；成分"
      },
      {
        "word": "opponent",
        "zh": "对手；敌手"
      },
      {
        "word": "competent",
        "zh": "胜任的；有能力的"
      },
      {
        "word": "proponent",
        "zh": "支持者；提倡者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "component",
        "zh": "可拆装组件；部件"
      },
      {
        "word": "ingredient",
        "zh": "配料；食材原料"
      },
      {
        "word": "element",
        "zh": "基础要素；元素"
      },
      {
        "word": "constituent",
        "zh": "组成成分；选民"
      }
    ],
    "notes": "【搭配考点】core/key component 核心部件/关键组件；electronic components 电子元器件；【形近辨析】opponent (赛场对立面对手)，competent (有胜任能力的)，proponent (倡议者/支持拥护方)；【近义辨析】ingredient 专指做蛋糕做菜或熬药时按食谱加进去的物理食材调料，element 侧重化学元素或抽象概念中的不可分割的基本组成要素，constituent 侧重选区选民或宪法成分，在现代工业机械装备制造中指物理上可拆装测试的硬件功能元器件唯一契合 component。"
  },
  "compose": {
    "word": "compose",
    "zh": "组成；构成；创作；使平静",
    "translation": "组成；构成；创作；使平静",
    "cloze": {
      "sentence": "Water and protein molecules together ______ the overwhelming majority of human cell tissues.",
      "original": "Water and protein molecules together compose the overwhelming majority of human cell tissues.",
      "translation": "水分子和蛋白质分子共同构成了人体细胞组织的绝大部分。"
    },
    "form_confusables": [
      {
        "word": "compose",
        "zh": "构成；谱曲；镇定"
      },
      {
        "word": "decompose",
        "zh": "腐烂；分解"
      },
      {
        "word": "compile",
        "zh": "编译；编撰"
      },
      {
        "word": "compromise",
        "zh": "妥协；折中"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compose",
        "zh": "构成；拼装成"
      },
      {
        "word": "constitute",
        "zh": "在事实上构成"
      },
      {
        "word": "form",
        "zh": "形成；组成"
      },
      {
        "word": "comprise",
        "zh": "包含；由...组成"
      }
    ],
    "notes": "【搭配考点】be composed of 由...所组成（高频考点）；compose oneself 沉着平复心情；compose music 谱写交响曲；【形近辨析】decompose (有机物腐败腐化分解)，compile (汇总编写字典程序)，compromise (妥协让步)；【近义辨析】constitute 侧重在逻辑法理上相当于、等同于某种性质，form 强调赋予某种形状结构塑造出来，comprise 主动语态通常以整体作主语包含部分，而以所有基础成分作为主语拼装成整体时唯一契合 compose。"
  },
  "composition": {
    "word": "composition",
    "zh": "成分；构成；作文；乐曲",
    "translation": "成分；构成；作文；乐曲",
    "cloze": {
      "sentence": "The geologist carefully analyzed the chemical ______ of the newly discovered meteorite sample.",
      "original": "The geologist carefully analyzed the chemical composition of the newly discovered meteorite sample.",
      "translation": "地质学家仔细分析了这块新发现的陨石样本的化学成分构成。"
    },
    "form_confusables": [
      {
        "word": "composition",
        "zh": "成分；构成；乐曲"
      },
      {
        "word": "competition",
        "zh": "比赛；竞争"
      },
      {
        "word": "compensation",
        "zh": "薪资；赔偿"
      },
      {
        "word": "disposition",
        "zh": "性格；处置"
      }
    ],
    "semantic_confusables": [
      {
        "word": "composition",
        "zh": "化学元素成分；构成"
      },
      {
        "word": "makeup",
        "zh": "内在结构；化妆"
      },
      {
        "word": "structure",
        "zh": "骨架组织构造"
      },
      {
        "word": "configuration",
        "zh": "结构布局；配置"
      }
    ],
    "notes": "【搭配考点】chemical composition 化学成分；English composition 英语命题作文；musical composition 音乐作品；【形近辨析】competition (体育竞争比赛)，compensation (经济补偿金)，disposition (脾气秉性/财产处置)；【近义辨析】makeup 偏通俗口语侧重团队人员配比或心理构造，structure 侧重支撑骨骼各个构件之间的空间框架搭建方式，configuration 强调计算机软硬件参数布局配置，在指矿物岩石在分子元素层面的内在成分配比唯一契合 composition。"
  },
  "comprehensive": {
    "word": "comprehensive",
    "zh": "全面的；综合性的；广泛的",
    "translation": "全面的；综合性的；广泛的",
    "cloze": {
      "sentence": "The university academic committee conducted a ______ review of its entire undergraduate curriculum.",
      "original": "The university academic committee conducted a comprehensive review of its entire undergraduate curriculum.",
      "translation": "大学学术委员会对其整个本科课程体系进行了一次全面而系统的综合审查。"
    },
    "form_confusables": [
      {
        "word": "comprehensive",
        "zh": "全面的；综合的"
      },
      {
        "word": "comprehensible",
        "zh": "能领会的；可理解的"
      },
      {
        "word": "apprehensive",
        "zh": "担忧不安的"
      },
      {
        "word": "extensive",
        "zh": "广阔广泛的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comprehensive",
        "zh": "无死角全面的；综合的"
      },
      {
        "word": "thorough",
        "zh": "彻底详尽的"
      },
      {
        "word": "exhaustive",
        "zh": "穷尽一切的"
      },
      {
        "word": "all-inclusive",
        "zh": "包罗万象的；全包的"
      }
    ],
    "notes": "【搭配考点】comprehensive review/study 全面综合审查/系统研究；comprehensive school 综合中学；【形近辨析】comprehensible (能听懂读懂的，常混考 comprehensive vs comprehensible)，apprehensive (忧心忡忡害怕的)，extensive (面积广大宽泛的)；【近义辨析】thorough 侧重做事情认真细致不留死角，exhaustive 侧重耗尽力气把所有名单可能查了个底朝天令人筋疲力尽，all-inclusive 强调度假酒店把吃住门票费用全打包在一块，在涵盖广泛学科领域所有方面形成的综合全局性上唯一契合 comprehensive。"
  },
  "comprise": {
    "word": "comprise",
    "zh": "包含；由...组成；构成",
    "translation": "包含；由...组成；构成",
    "cloze": {
      "sentence": "The United Kingdom is known to ______ four constituent nations: England, Scotland, Wales, and Northern Ireland.",
      "original": "The United Kingdom is known to comprise four constituent nations: England, Scotland, Wales, and Northern Ireland.",
      "translation": "众所周知，英国由四个组成国构成：英格兰、苏格兰、威尔士和北爱尔兰。"
    },
    "form_confusables": [
      {
        "word": "comprise",
        "zh": "包含；由...组成"
      },
      {
        "word": "compromise",
        "zh": "妥协；危及"
      },
      {
        "word": "promise",
        "zh": "承诺；诺言"
      },
      {
        "word": "surmise",
        "zh": "推测；猜测"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comprise",
        "zh": "宏观包含；组成"
      },
      {
        "word": "encompass",
        "zh": "包罗；覆盖"
      },
      {
        "word": "include",
        "zh": "包括；列举"
      },
      {
        "word": "consist",
        "zh": "由...组成(consist of)"
      }
    ],
    "notes": "【搭配考点】comprise four nations 由四个国家组成（整体作主语 + comprise + 各部分，或各部分 + comprise + 整体）；【形近辨析】compromise (妥协折中/危害安全)，promise (承诺许诺)，surmise (瞎猜推断)；【近义辨析】include 仅指从全部成员中例举出其中一部分并不要求穷尽，encompass 侧重地理边界如同城墙般将周边领土尽收眼底，consist 必须与 of 搭配连用才能接宾语，在由整体直接及物统辖所有全部法定分支实体时唯一契合 comprise。"
  },
  "compromise": {
    "word": "compromise",
    "zh": "妥协；折中；损害；危及",
    "translation": "妥协；折中；损害；危及",
    "cloze": {
      "sentence": "Neither side was initially willing to yield, but they eventually hammered out a pragmatic ______.",
      "original": "Neither side was initially willing to yield, but they eventually hammered out a pragmatic compromise.",
      "translation": "起初双方都不愿退让，但最终他们协商敲定了一项务实可行的折中妥协方案。"
    },
    "form_confusables": [
      {
        "word": "compromise",
        "zh": "妥协；损害"
      },
      {
        "word": "comprise",
        "zh": "包含；由...组成"
      },
      {
        "word": "compose",
        "zh": "谱曲；组成"
      },
      {
        "word": "improvise",
        "zh": "即席创作；凑合"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compromise",
        "zh": "折中妥协；互让"
      },
      {
        "word": "concession",
        "zh": "单方让步"
      },
      {
        "word": "settlement",
        "zh": "和解协议；定居"
      },
      {
        "word": "accommodation",
        "zh": "迁就调和；住所"
      }
    ],
    "notes": "【搭配考点】reach/hammer out a compromise 达成折中妥协；compromise national security 危害国家安全（高频熟词生义）；【形近辨析】comprise (包含由...构成)，compose (组成/写作)，improvise (即席发挥/临时制作)；【近义辨析】concession 侧重其中一方迫于形势做出单方面的利益割舍让步，settlement 侧重法庭平息财产争议纠纷最终敲定官司，accommodation 侧重为了照顾某人特殊需求进行的迁就安排，指谈判双方各自让出一步达成中间平衡唯一契合 compromise。"
  },
  "compute": {
    "word": "compute",
    "zh": "计算；估算；推算",
    "translation": "计算；估算；推算",
    "cloze": {
      "sentence": "Astrophysicists rely on supercomputers to ______ the precise gravitational trajectories of distant asteroids.",
      "original": "Astrophysicists rely on supercomputers to compute the precise gravitational trajectories of distant asteroids.",
      "translation": "天体物理学家依靠超级计算机来精确推算遥远小行星的引力运行轨迹。"
    },
    "form_confusables": [
      {
        "word": "compute",
        "zh": "计算；运算"
      },
      {
        "word": "compete",
        "zh": "竞争"
      },
      {
        "word": "commute",
        "zh": "通勤；减刑"
      },
      {
        "word": "dispute",
        "zh": "纷争；争执"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compute",
        "zh": "机算；推算"
      },
      {
        "word": "calculate",
        "zh": "计算；核算"
      },
      {
        "word": "reckon",
        "zh": "盘算；估计"
      },
      {
        "word": "estimate",
        "zh": "估测；估价"
      }
    ],
    "notes": "【搭配考点】compute trajectories/averages 计算精密轨迹/算平均值；cloud computing 云计算；【形近辨析】compete (竞争比试)，commute (每日坐车上下班)，dispute (民事土地争议)；【近义辨析】calculate 侧重手工或心算解答常规算术题目，reckon 属于口语侧重心中主观盘算估计，estimate 侧重在缺乏精确数据时对工期价格的大致概算估测，在依赖严密数学公式和机器算法处理海量复杂数据时唯一契合 compute。"
  },
  "computer": {
    "word": "computer",
    "zh": "计算机；电脑",
    "translation": "计算机；电脑",
    "cloze": {
      "sentence": "A sophisticated ______ simulation was developed to model the structural integrity of the suspension bridge.",
      "original": "A sophisticated computer simulation was developed to model the structural integrity of the suspension bridge.",
      "translation": "科研人员开发了一套精密的计算机仿真模型，用于模拟该悬索桥的结构完整性。"
    },
    "form_confusables": [
      {
        "word": "computer",
        "zh": "计算机；电脑"
      },
      {
        "word": "commuter",
        "zh": "通勤人员"
      },
      {
        "word": "consumer",
        "zh": "消费者"
      },
      {
        "word": "compiler",
        "zh": "编译器；编撰者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "computer",
        "zh": "计算机；算力终端"
      },
      {
        "word": "processor",
        "zh": "处理器；CPU"
      },
      {
        "word": "mainframe",
        "zh": "大型主机"
      },
      {
        "word": "workstation",
        "zh": "专业工作站"
      }
    ],
    "notes": "【搭配考点】computer simulation/program 计算机仿真模拟/电脑程序；personal computer (PC) 个人电脑；【形近辨析】commuter (每日城际通勤客)，consumer (商品消费者)，compiler (代码编译器/文献编纂者)；【近义辨析】processor 专指负责运算的芯片中央处理器硬件核心，mainframe 专指银行科研所机房占用数个机柜的大型服务器主机，workstation 侧重给工程师专门画图做视频的高性能工作站，作为现代一切通用可编程数字计算设备的标准总称唯一契合 computer。"
  },
  "concentrate": {
    "word": "concentrate",
    "zh": "集中；专心；浓缩",
    "translation": "集中；专心；浓缩",
    "cloze": {
      "sentence": "The relentless construction noise outside made it virtually impossible for students to ______ on their final exam.",
      "original": "The relentless construction noise outside made it virtually impossible for students to concentrate on their final exam.",
      "translation": "室外持续不断的施工噪音让学生们几乎无法集中注意力去应对期末考试。"
    },
    "form_confusables": [
      {
        "word": "concentrate",
        "zh": "集中；专注；浓缩"
      },
      {
        "word": "contemplate",
        "zh": "深思熟虑；凝视"
      },
      {
        "word": "concrete",
        "zh": "具体的；混凝土"
      },
      {
        "word": "consolidate",
        "zh": "巩固；合并"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concentrate",
        "zh": "聚精会神；凝神"
      },
      {
        "word": "focus",
        "zh": "聚焦；对焦"
      },
      {
        "word": "center",
        "zh": "以...为中心"
      },
      {
        "word": "converge",
        "zh": "汇聚于一点"
      }
    ],
    "notes": "【搭配考点】concentrate on (doing) sth 全神贯注于某事（高频必考搭配）；concentrated juice 浓缩果汁；【形近辨析】contemplate (冥想沉思)，concrete (混凝土/具体的实物)，consolidate (巩固权力/重组整合)；【近义辨析】focus 侧重调整镜头或注意力将其对准单一焦点，center 侧重把话题或争论重心放在某人身上（center around），converge 强调物理上多条道路或人流汇合，在强调排除一切外在杂念、汇集全身心智力应对挑战上唯一契合 concentrate。"
  },
  "concentration": {
    "word": "concentration",
    "zh": "专注；专心；浓度；聚集",
    "translation": "专注；专心；浓度；聚集",
    "cloze": {
      "sentence": "The sudden ringing of a mobile phone shattered the surgeon's intense ______ during the delicate operation.",
      "original": "The sudden ringing of a mobile phone shattered the surgeon's intense concentration during the delicate operation.",
      "translation": "突如其来的手机铃声瞬间打破了主刀医生在精密手术期间的高度专注。"
    },
    "form_confusables": [
      {
        "word": "concentration",
        "zh": "专注；浓度"
      },
      {
        "word": "contemplation",
        "zh": "沉思；冥想"
      },
      {
        "word": "consideration",
        "zh": "考虑；体贴"
      },
      {
        "word": "condensation",
        "zh": "冷凝水；凝华"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concentration",
        "zh": "高度专注状态；浓度"
      },
      {
        "word": "attentiveness",
        "zh": "留心；专心致志"
      },
      {
        "word": "density",
        "zh": "密度；密集"
      },
      {
        "word": "absorption",
        "zh": "全神贯注；吸收"
      }
    ],
    "notes": "【搭配考点】intense concentration 高度聚精会神；high concentration of chemicals 化学品高浓度；concentration camp 集中营；【形近辨析】contemplation (静思冥想)，consideration (周密考量/体谅)，condensation (水汽凝结珠滴)；【近义辨析】attentiveness 侧重侍者或学生表现出随叫随到、恭敬倾听的专注态度，density 侧重空间单位体积内物质的密集程度，absorption 侧重被精彩书籍彻底吸引沉浸其中，在此处指主刀医生在手术室凝神屏气的心智高度聚敛状态唯一契合 concentration。"
  },
  "concept": {
    "word": "concept",
    "zh": "概念；观念；设想",
    "translation": "概念；观念；设想",
    "cloze": {
      "sentence": "The groundbreaking theoretical paper introduced a revolutionary new ______ to the field of quantum physics.",
      "original": "The groundbreaking theoretical paper introduced a revolutionary new concept to the field of quantum physics.",
      "translation": "这篇开创性的理论论文为量子物理学领域引入了一个革命性的崭新概念。"
    },
    "form_confusables": [
      {
        "word": "concept",
        "zh": "概念；理念"
      },
      {
        "word": "percept",
        "zh": "感知对象；知觉"
      },
      {
        "word": "precept",
        "zh": "箴言；戒律"
      },
      {
        "word": "concert",
        "zh": "音乐会；齐心"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concept",
        "zh": "抽象概念；思想理念"
      },
      {
        "word": "notion",
        "zh": "模糊观念；设想"
      },
      {
        "word": "idea",
        "zh": "主意；念头"
      },
      {
        "word": "theory",
        "zh": "理论学说"
      }
    ],
    "notes": "【搭配考点】revolutionary/new concept 颠覆性的新概念；concept car 概念车；the basic concepts of economics 经济学基本概念；【形近辨析】percept (知觉感知产物)，precept (行为守则道德戒律)，concert (音乐会/一致行动)；【近义辨析】notion 侧重未经严密论证的模糊主观看法甚或带有偏见的假想，idea 泛指脑海中随想出来的点子念头，theory 强调由众多公理定理构筑的庞大假说体系，在指通过归纳提炼形成的具有学术界定意义的单元理念范畴唯一契合 concept。"
  },
  "concern": {
    "word": "concern",
    "zh": "涉及；使担忧；关切；关心",
    "translation": "涉及；使担忧；关切；关心",
    "cloze": {
      "sentence": "Environmental activists voiced grave ______ over the government's controversial decision to lift the logging ban.",
      "original": "Environmental activists voiced grave concern over the government's controversial decision to lift the logging ban.",
      "translation": "环保人士对政府解除伐木禁令这一备受争议的决定表达了深切的担忧与关切。"
    },
    "form_confusables": [
      {
        "word": "concern",
        "zh": "关切；涉及；担忧"
      },
      {
        "word": "concert",
        "zh": "音乐会"
      },
      {
        "word": "discern",
        "zh": "辨别；看出"
      },
      {
        "word": "confirm",
        "zh": "确认；证实"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concern",
        "zh": "关切心境；担忧"
      },
      {
        "word": "worry",
        "zh": "发愁；焦虑"
      },
      {
        "word": "anxiety",
        "zh": "焦虑不安"
      },
      {
        "word": "apprehension",
        "zh": "忧虑恐惧"
      }
    ],
    "notes": "【搭配考点】voice/express grave concern over 对...表达深切关切/担忧；as far as I am concerned 就我而言；concern oneself with 关心关注；【形近辨析】concert (音乐会/协力)，discern (敏锐察觉)，confirm (核实验证)；【近义辨析】worry 偏通俗口语侧重个人因柴米油盐感到发愁，anxiety 偏病理心理学术语强调伴有心慌的极度焦躁，apprehension 侧重预感灾祸即将来临的不安，而在公共事务社会新闻中针对政策后果表达的正式关切唯一契合 concern。"
  },
  "concerned": {
    "word": "concerned",
    "zh": "关心的；担忧的；有关的",
    "translation": "关心的；担忧的；有关的",
    "cloze": {
      "sentence": "The symposium is primarily ______ with exploring innovative solutions to renewable energy storage.",
      "original": "The symposium is primarily concerned with exploring innovative solutions to renewable energy storage.",
      "translation": "本次专题研讨会的核心议题在于探讨可再生能源储存的创新解决方案。"
    },
    "form_confusables": [
      {
        "word": "concerned",
        "zh": "关切的；有关的"
      },
      {
        "word": "concerted",
        "zh": "协同一致的"
      },
      {
        "word": "discerned",
        "zh": "被识别辨明的"
      },
      {
        "word": "confirmed",
        "zh": "已证实的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concerned",
        "zh": "有关关涉的；聚焦的"
      },
      {
        "word": "involved",
        "zh": "卷入牵扯的"
      },
      {
        "word": "engaged",
        "zh": "投身参与的"
      },
      {
        "word": "focused",
        "zh": "聚焦对准的"
      }
    ],
    "notes": "【搭配考点】be concerned with 关注/事关/旨在探讨（学术高频考点）；be concerned about 对...感到担忧焦虑；to whom it may concern 致相关人士；【形近辨析】concerted (共同协同发起的，如 concerted effort)，discerned (被敏锐识别出的)，confirmed (经过核实的/习惯根深蒂固的)；【近义辨析】involved 侧重参与了具体行动或卷入复杂事件，engaged 强调全身心投入参与某项活动，focused 强调将焦距镜头明确缩紧，在学术议题描述“主要关涉、围绕某主题展开研究”唯有与 with 搭配唯一契合 concerned。"
  },
  "concert": {
    "word": "concert",
    "zh": "音乐会；一致；协同",
    "translation": "音乐会；一致；协同",
    "cloze": {
      "sentence": "The European powers agreed to act in ______ to resolve the burgeoning regional humanitarian crisis.",
      "original": "The European powers agreed to act in concert to resolve the burgeoning regional humanitarian crisis.",
      "translation": "欧洲各大国一致同意采取协同一致的行动，以解决该地区日益加剧的人道主义危机。"
    },
    "form_confusables": [
      {
        "word": "concert",
        "zh": "音乐会；一致"
      },
      {
        "word": "concern",
        "zh": "关心；涉及"
      },
      {
        "word": "concrete",
        "zh": "混凝土；具体的"
      },
      {
        "word": "convert",
        "zh": "转变；皈依"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concert",
        "zh": "齐心协力；步调一致"
      },
      {
        "word": "unison",
        "zh": "齐声；一致配合"
      },
      {
        "word": "harmony",
        "zh": "和谐；协调"
      },
      {
        "word": "coordination",
        "zh": "统筹协调"
      }
    ],
    "notes": "【搭配考点】act in concert (with) 与...齐心协力/协同采取一致行动（高频高级书面搭配）；rock/classical concert 摇滚/古典音乐会；【形近辨析】concern (担忧/关切)，concrete (水泥混凝土/具体的)，convert (皈依/转换格式)；【近义辨析】unison 侧重合唱团齐声歌唱发出同一音高或步调整齐划一，harmony 侧重声部和谐共处融洽无冲突，coordination 强调调度员理顺各个齿轮各司其职，在国际政治大国一致同心携手应对危机时唯有 act in concert 唯一契合 concert。"
  },
  "conclusion": {
    "word": "conclusion",
    "zh": "结论；推论；结局；终结",
    "translation": "结论；推论；结局；终结",
    "cloze": {
      "sentence": "How did the investigators manage to reach such a startling ______ based on so little forensic evidence?",
      "original": "How did the investigators manage to reach such a startling conclusion based on so little forensic evidence?",
      "translation": "调查人员究竟是如何仅凭如此微不足道的法医物证就得出如此惊人的推论的？"
    },
    "form_confusables": [
      {
        "word": "conclusion",
        "zh": "结论；终结"
      },
      {
        "word": "delusion",
        "zh": "错觉；妄想"
      },
      {
        "word": "collusion",
        "zh": "勾结；串通"
      },
      {
        "word": "confusion",
        "zh": "混乱；困惑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conclusion",
        "zh": "结论；推论"
      },
      {
        "word": "inference",
        "zh": "推断；隐申"
      },
      {
        "word": "deduction",
        "zh": "演绎推论"
      },
      {
        "word": "finding",
        "zh": "调查发现"
      }
    ],
    "notes": "【搭配考点】reach/draw a conclusion 得出结论（高频固定动宾）；in conclusion 最后/总而言之；bring to a conclusion 使...圆满终结；【形近辨析】delusion (荒唐错觉/被迫害妄想)，collusion (非法串通共谋)，confusion (思想困惑/局面混乱)；【近义辨析】inference 侧重根据字里行间蛛丝马迹做出的合理推断，deduction 专指从一般规律推导个案的逻辑三段论演绎，finding 强调经过严密实验调查收集到的第一手客观事实数据，在经过全盘论证得出的决定性总判断上唯一契合 conclusion。"
  },
  "concrete": {
    "word": "concrete",
    "zh": "混凝土；具体的；实在的",
    "translation": "混凝土；具体的；实在的",
    "cloze": {
      "sentence": "By the end of the marathon summit, several fairly ______ proposals had been put forward to tackle inflation.",
      "original": "By the end of the marathon summit, several fairly concrete proposals had been put forward to tackle inflation.",
      "translation": "在这场马拉松式峰会结束时，与会各方提出了几项相当具体且切实可行的方案来遏制通胀。"
    },
    "form_confusables": [
      {
        "word": "concrete",
        "zh": "具体的；混凝土"
      },
      {
        "word": "discreet",
        "zh": "谨慎的；慎重的"
      },
      {
        "word": "discrete",
        "zh": "离散的；分立的"
      },
      {
        "word": "recreate",
        "zh": "再现；娱乐"
      }
    ],
    "semantic_confusables": [
      {
        "word": "concrete",
        "zh": "具体落实的；实在的"
      },
      {
        "word": "specific",
        "zh": "明确特定的"
      },
      {
        "word": "tangible",
        "zh": "有形的；触手可及的"
      },
      {
        "word": "solid",
        "zh": "扎实的；结实的"
      }
    ],
    "notes": "【搭配考点】concrete proposal/evidence 具体的切实方案/确凿扎实的证据；reinforced concrete 钢筋混凝土；【形近辨析】discreet (守口如瓶言行谨慎的)，discrete (数学离散孤立的)，recreate (娱乐休闲/使再现)；【近义辨析】specific 强调具有明确指向、排他性的特定细节（如 specific instructions），tangible 侧重真真切切伸手能摸得着的物理实物或清晰可感的红利，solid 侧重论据根基扎实无漏洞，在反驳空洞抽象、强调具有可落地操作细节的“具体方案”时唯一契合 concrete。"
  },
  "condition": {
    "word": "condition",
    "zh": "条件；状况；病症；健康状态",
    "translation": "条件；状况；病症；健康状态",
    "cloze": {
      "sentence": "All three premature infants were born with a rare but treatable congenital heart ______.",
      "original": "All three premature infants were born with a rare but treatable congenital heart condition.",
      "translation": "这三名早产儿出生时都患有一种罕见但可医治的先天性心脏病症。"
    },
    "form_confusables": [
      {
        "word": "condition",
        "zh": "状况；病症；条件"
      },
      {
        "word": "coalition",
        "zh": "政党联盟"
      },
      {
        "word": "collision",
        "zh": "猛烈碰撞"
      },
      {
        "word": "tradition",
        "zh": "传统"
      }
    ],
    "semantic_confusables": [
      {
        "word": "condition",
        "zh": "医学病症；状况"
      },
      {
        "word": "ailment",
        "zh": "慢性小病；微恙"
      },
      {
        "word": "disorder",
        "zh": "功能紊乱；失调"
      },
      {
        "word": "disease",
        "zh": "严重疾病"
      }
    ],
    "notes": "【搭配考点】heart/medical condition 心脏病症/健康状况（医学委婉用语）；working conditions 工作条件；on condition that 在...条件下；【形近辨析】coalition (政治联合政府)，collision (车辆相撞)，tradition (世代相传的传统)；【近义辨析】ailment 侧重头疼脑热等不致命的慢性小病痛，disorder 侧重生理或神经系统内部机制紊乱失衡（如 bipolar disorder），disease 强调具有明确病原体感染或明确病理病变的严重疾病，而在医学诊断中委婉统称身体器官机能长期异常病症时唯一契合 condition。"
  },
  "conduct": {
    "word": "conduct",
    "zh": "实施；指导；举止行为；传导",
    "translation": "实施；指导；举止行为；传导",
    "cloze": {
      "sentence": "Independent laboratory researchers were commissioned to ______ comprehensive clinical trials on the vaccine.",
      "original": "Independent laboratory researchers were commissioned to conduct comprehensive clinical trials on the vaccine.",
      "translation": "独立的实验室科研人员受托对该疫苗进行全面的临床试验。"
    },
    "form_confusables": [
      {
        "word": "conduct",
        "zh": "实施；行为；传导"
      },
      {
        "word": "deduct",
        "zh": "扣除；扣减"
      },
      {
        "word": "induct",
        "zh": "使就任；引导"
      },
      {
        "word": "product",
        "zh": "产品；成果"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conduct",
        "zh": "组织实施；执行"
      },
      {
        "word": "carry out",
        "zh": "执行；贯彻"
      },
      {
        "word": "execute",
        "zh": "实行；签署生效"
      },
      {
        "word": "perform",
        "zh": "履行；表现"
      }
    ],
    "notes": "【搭配考点】conduct an experiment/survey/investigation 开展实验/调查/审查（学术极高频固定动宾）；code of conduct 行为准则；conduct electricity 导电；【形近辨析】deduct (工资等扣减)，induct (正式吸收进入名人堂/征召就任)，product (工业产物)；【近义辨析】carry out 偏向日常短语动词侧重把既定指示落到实处，execute 侧重按严密合同程序正式签字生效或处决死刑，perform 侧重公开在观众面前演奏展示才艺，在指遵循严密科学方法组织开展长周期研究实验时唯一契合 conduct。"
  },
  "conference": {
    "word": "conference",
    "zh": "会议；研讨会；协商会",
    "translation": "会议；研讨会；协商会",
    "cloze": {
      "sentence": "Delegates from over one hundred countries gathered in Geneva for the annual climate ______.",
      "original": "Delegates from over one hundred countries gathered in Geneva for the annual climate conference.",
      "translation": "来自一百多个国家的代表齐聚日内瓦，参加一年一度的国际气候大会。"
    },
    "form_confusables": [
      {
        "word": "conference",
        "zh": "会议；年会"
      },
      {
        "word": "deference",
        "zh": "顺从；尊崇"
      },
      {
        "word": "preference",
        "zh": "偏好；偏爱"
      },
      {
        "word": "reference",
        "zh": "参考；引证"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conference",
        "zh": "正式研讨大会"
      },
      {
        "word": "convention",
        "zh": "行业年会；公约"
      },
      {
        "word": "summit",
        "zh": "首脑峰会"
      },
      {
        "word": "seminar",
        "zh": "学术研讨班"
      }
    ],
    "notes": "【搭配考点】press/annual conference 新闻发布会/年度大会；video conference 视频电话会议；in conference 正在闭门开会；【形近辨析】deference (毕恭毕敬的遵从)，preference (个人偏爱喜好)，reference (参考书目/提及)；【近义辨析】convention 侧重某一政党提名候选人或某一商界行会举办的大型展示大会，summit 专指仅限最高领导人出席的顶级首脑闭门峰会，seminar 专指教授带领十几名研究生围绕单一学术论文讨论的小型研讨课，在指汇聚多方代表就某一全球重大议题深入磋商的多日正式学术政治大会唯一契合 conference。"
  },
  "confess": {
    "word": "confess",
    "zh": "坦白；供认；忏悔；承认",
    "translation": "坦白；供认；忏悔；承认",
    "cloze": {
      "sentence": "After hours of rigorous interrogation by detectives, the prime suspect broke down and decided to ______.",
      "original": "After hours of rigorous interrogation by detectives, the prime suspect broke down and decided to confess.",
      "translation": "经过刑警数小时严密的突审盘问，主要嫌疑人心理防线彻底崩溃，决定招供交代。"
    },
    "form_confusables": [
      {
        "word": "confess",
        "zh": "坦白；供认；忏悔"
      },
      {
        "word": "profess",
        "zh": "自称；公开声称"
      },
      {
        "word": "possess",
        "zh": "占有；拥有"
      },
      {
        "word": "excess",
        "zh": "过度；超过"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confess",
        "zh": "招供；交待罪行"
      },
      {
        "word": "admit",
        "zh": "承认事实；准许"
      },
      {
        "word": "acknowledge",
        "zh": "公开承认"
      },
      {
        "word": "concede",
        "zh": "让步承认"
      }
    ],
    "notes": "【搭配考点】confess to a crime/murder 供认罪行/谋杀；confess one's sins 忏悔罪孽；confess that... 坦白承认某事；【形近辨析】profess (公开大言不惭宣称/信仰)，possess (具有品质/私有财产)，excess (过多过剩)；【近义辨析】admit 侧重很不情愿地承认自己犯了小错或客观事实属实，acknowledge 侧重官方公开面对既成事实（如承认新政权），concede 强调辩论或选举输了之后迫于事实承认落败，在指就自己做过的触犯法律道德的亏心事全盘吐露招供上唯一契合 confess。"
  },
  "confidence": {
    "word": "confidence",
    "zh": "信心；信任；把握；秘密",
    "translation": "信心；信任；把握；秘密",
    "cloze": {
      "sentence": "Public ______ in the financial banking system was severely shaken after two major institutions collapsed.",
      "original": "Public confidence in the financial banking system was severely shaken after two major institutions collapsed.",
      "translation": "在两家大型金融机构倒闭后，公众对整个银行体系的信任与信心受到了极其严重的动摇。"
    },
    "form_confusables": [
      {
        "word": "confidence",
        "zh": "信任；信心；秘密"
      },
      {
        "word": "coincidence",
        "zh": "巧合；同时发生"
      },
      {
        "word": "incidence",
        "zh": "发生率"
      },
      {
        "word": "diffidence",
        "zh": "自卑；羞怯"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confidence",
        "zh": "信任度；确信把握"
      },
      {
        "word": "trust",
        "zh": "信任；托付"
      },
      {
        "word": "faith",
        "zh": "坚信；信念"
      },
      {
        "word": "assurance",
        "zh": "担保；确信"
      }
    ],
    "notes": "【搭配考点】public/consumer confidence 公众/消费者信心（宏观核心经济指标）；gain/lose confidence 获得/丧失自信心；in strict confidence 绝密地；【形近辨析】coincidence (奇妙的巧合)，incidence (发病率/发生范围)，diffidence (反义词：自卑羞怯)；【近义辨析】trust 强调建立在诚实可靠基础上的情感信赖与委托，faith 强调不依赖证据的狂热精神信仰与宗教坚信，assurance 强调他人给出的令人放心的担保表态，在此处指全社会对金融经济体制稳健性抱有的客观信心预期唯一契合 confidence。"
  },
  "confident": {
    "word": "confident",
    "zh": "自信的；确信的；胸有成竹的",
    "translation": "自信的；确信的；胸有成竹的",
    "cloze": {
      "sentence": "Months of rigorous preparation and practice made the young pianist remarkably ______ on stage.",
      "original": "Months of rigorous preparation and practice made the young pianist remarkably confident on stage.",
      "translation": "数月艰苦的准备与练习，让这位年轻钢琴家在舞台上显得从容而充满自信。"
    },
    "form_confusables": [
      {
        "word": "confident",
        "zh": "自信的；确信的"
      },
      {
        "word": "confidant",
        "zh": "知己密友"
      },
      {
        "word": "confidential",
        "zh": "保密的；机密的"
      },
      {
        "word": "convenient",
        "zh": "方便的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confident",
        "zh": "从容自信的；确信的"
      },
      {
        "word": "assured",
        "zh": "自若沉着的"
      },
      {
        "word": "self-reliant",
        "zh": "自立自强的"
      },
      {
        "word": "optimistic",
        "zh": "乐观积极的"
      }
    ],
    "notes": "【搭配考点】confident of/about 对...有充分信心；feel confident 感到胸有成竹；confident smile 自信的微笑；【形近辨析】confidant (名词：能够倾诉绝密的知心好友)，confidential (形容词：绝密的/保密的)，convenient (便利的)；【近义辨析】assured 侧重举止泰然自若、绝不慌乱的风度，self-reliant 侧重不依靠外人施舍独立解决问题，optimistic 侧重对未来事态发展抱有盲目或理性的积极预期，在此处形容因技术纯熟而散发出的内在自信底气唯一契合 confident。"
  },
  "confine": {
    "word": "confine",
    "zh": "限制；禁闭；局限",
    "translation": "限制；禁闭；局限",
    "cloze": {
      "sentence": "To keep the debate productive, the moderator asked speakers to ______ their remarks to economic policy.",
      "original": "To keep the debate productive, the moderator asked speakers to confine their remarks to economic policy.",
      "translation": "为了确保辩论富有成效，主持人要求发言者将言论严格限制在经济政策范畴之内。"
    },
    "form_confusables": [
      {
        "word": "confine",
        "zh": "限制；禁闭"
      },
      {
        "word": "confirm",
        "zh": "证实；确认"
      },
      {
        "word": "conform",
        "zh": "顺应；符合"
      },
      {
        "word": "conflict",
        "zh": "冲突"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confine",
        "zh": "局限于；划定界限"
      },
      {
        "word": "restrict",
        "zh": "限制规制"
      },
      {
        "word": "limit",
        "zh": "限定上限"
      },
      {
        "word": "constrain",
        "zh": "束缚；抑制"
      }
    ],
    "notes": "【搭配考点】confine oneself/remarks to 局限于/将发言限定在...；be confined to bed/wheelchair 卧病在床/被困在轮椅上；【形近辨析】confirm (证实核对)，conform (遵从一致 conform to)，conflict (产生矛盾冲突)；【近义辨析】restrict 侧重法规条例对人流物流施加的限行限购，limit 侧重数字上限（如 speed limit），constrain 强调外界条件不利构成的外部束缚压制，在此处指在空间、论述范围上划定封闭圈子绝不越雷池一步唯一契合 confine。"
  },
  "confirm": {
    "word": "confirm",
    "zh": "证实；确认；批准；认可",
    "translation": "证实；确认；批准；认可",
    "cloze": {
      "sentence": "The laboratory carried out genetic sequencing to definitively ______ the presence of the new virus variant.",
      "original": "The laboratory carried out genetic sequencing to definitively confirm the presence of the new virus variant.",
      "translation": "实验室进行了基因测序，以最终确证新病毒变异株的存在。"
    },
    "form_confusables": [
      {
        "word": "confirm",
        "zh": "确认；证实"
      },
      {
        "word": "conform",
        "zh": "遵从；符合"
      },
      {
        "word": "comfort",
        "zh": "安慰；舒适"
      },
      {
        "word": "confine",
        "zh": "限制；监禁"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confirm",
        "zh": "证实确凿；确认"
      },
      {
        "word": "verify",
        "zh": "核验真实性"
      },
      {
        "word": "corroborate",
        "zh": "提供佐证支持"
      },
      {
        "word": "validate",
        "zh": "使生效；确认有效"
      }
    ],
    "notes": "【搭配考点】confirm a reservation/flight 确认酒店预订/航班行程；confirm a diagnosis 确诊病情；confirm a rumor 证实传言；【形近辨析】conform (符合规范 conform with/to)，comfort (安慰慰藉)，confine (限制束缚)；【近义辨析】verify 侧重比对身份证明或账目单据核查是否属实，corroborate 侧重证人出庭或提供独立物证从旁佐证主证据，validate 强调在法律程序上加盖公章使其产生法定效力，在用决定性事实和科学结果消除疑虑彻底定性上唯一契合 confirm。"
  },
  "conflict": {
    "word": "conflict",
    "zh": "冲突；抵触；争端；矛盾",
    "translation": "冲突；抵触；争端；矛盾",
    "cloze": {
      "sentence": "His unconventional teaching methodology brought him into direct ______ with the conservative school board.",
      "original": "His unconventional teaching methodology brought him into direct conflict with the conservative school board.",
      "translation": "他那打破常规的教学方法使他与保守的学校校董会产生了直接冲突。"
    },
    "form_confusables": [
      {
        "word": "conflict",
        "zh": "冲突；抵触"
      },
      {
        "word": "convict",
        "zh": "宣判有罪；囚犯"
      },
      {
        "word": "inflict",
        "zh": "强加惩罚；予以重击"
      },
      {
        "word": "afflict",
        "zh": "折磨；使苦恼"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conflict",
        "zh": "正面对立；冲突"
      },
      {
        "word": "friction",
        "zh": "摩擦；微小龃龉"
      },
      {
        "word": "dispute",
        "zh": "争论；民事争议"
      },
      {
        "word": "discord",
        "zh": "不和睦；不谐调"
      }
    ],
    "notes": "【搭配考点】in conflict with 与...产生冲突抵触；conflict of interest 利益冲突（职场法律核心术语）；armed conflict 武装冲突；【形近辨析】convict (法庭宣判有罪/服刑犯)，inflict (给他人施加重击惩罚)，afflict (长期疾病折磨)；【近义辨析】friction 侧重日常相处中的磕磕碰碰与微小龃龉，dispute 侧重边界或合同文本上由争吵诉讼体现的民事争执，discord 侧重乐声刺耳或家庭不睦失和，在指根本原则理念势成水火难以相容的直接正面对抗上唯一契合 conflict。"
  },
  "confuse": {
    "word": "confuse",
    "zh": "使困惑；使混淆；搞错",
    "translation": "使困惑；使混淆；搞错",
    "cloze": {
      "sentence": "Because the identical twin brothers dress alike, neighbors frequently ______ one for the other.",
      "original": "Because the identical twin brothers dress alike, neighbors frequently confuse one for the other.",
      "translation": "因为这对同卵双胞胎兄弟穿戴极为相似，邻居们经常把两人互相搞混。"
    },
    "form_confusables": [
      {
        "word": "confuse",
        "zh": "使困惑；混淆"
      },
      {
        "word": "refuse",
        "zh": "拒绝；垃圾"
      },
      {
        "word": "diffuse",
        "zh": "扩散；弥漫"
      },
      {
        "word": "infuse",
        "zh": "灌输；注入"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confuse",
        "zh": "张冠李戴搞混；使糊涂"
      },
      {
        "word": "bewilder",
        "zh": "使不知所措"
      },
      {
        "word": "confound",
        "zh": "使惊愕困惑"
      },
      {
        "word": "muddle",
        "zh": "弄乱；颠倒顺序"
      }
    ],
    "notes": "【搭配考点】confuse A with/for B 把A同B搞混张冠李戴；confused by 对...感到困惑不解；【形近辨析】refuse (断然拒绝/生活废弃垃圾)，diffuse (光线散射/思想弥散)，infuse (注入新鲜血液/泡茶)；【近义辨析】bewilder 强调身处迷宫或大量信息轰炸下大脑一片空白的茫然失措，confound 侧重事态出乎预料彻底推翻专家假设，muddle 侧重把抽屉文件或头脑次序颠三倒四乱放，在因相似性而发生认错、颠倒两者的认知错误上唯一契合 confuse。"
  },
  "confusion": {
    "word": "confusion",
    "zh": "混乱；困惑；混淆",
    "translation": "混乱；困惑；混淆",
    "cloze": {
      "sentence": "The unexpected announcement of flight cancellations caused utter ______ throughout the crowded airport terminal.",
      "original": "The unexpected announcement of flight cancellations caused utter confusion throughout the crowded airport terminal.",
      "translation": "突然宣布取消航班的消息在拥挤的机场候机楼内引发了一片彻底的混乱。"
    },
    "form_confusables": [
      {
        "word": "confusion",
        "zh": "混乱；困惑"
      },
      {
        "word": "conclusion",
        "zh": "结论；终结"
      },
      {
        "word": "infusion",
        "zh": "注入；灌输"
      },
      {
        "word": "diffusion",
        "zh": "扩散；传播"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confusion",
        "zh": "骚动困惑；混乱状态"
      },
      {
        "word": "chaos",
        "zh": "完全失控；大乱"
      },
      {
        "word": "turmoil",
        "zh": "动荡骚乱；风暴"
      },
      {
        "word": "disarray",
        "zh": "杂乱散乱"
      }
    ],
    "notes": "【搭配考点】utter/total confusion 彻底的一团混乱；cause confusion 造成混乱和困惑；clear up the confusion 澄清解开困惑；【形近辨析】conclusion (推断结论)，infusion (资本注入/静脉输液)，diffusion (文化或气味扩散)；【近义辨析】chaos 强调社会秩序完全瓦解失控的恐怖无政府状态，turmoil 侧重政局激烈动荡翻滚的惊涛骇浪，disarray 强调原本整齐摆放的队伍衣物被弄散乱，而在指信息不明导致人们团团转、不知所措的骚动困惑上唯一契合 confusion。"
  },
  "connect": {
    "word": "connect",
    "zh": "连接；联结；联系",
    "translation": "连接；联结；联系",
    "cloze": {
      "sentence": "The modern underground metro line was built to ______ the international airport directly with the city center.",
      "original": "The modern underground metro line was built to connect the international airport directly with the city center.",
      "translation": "修建这条现代化的地下地铁线，旨在将国际机场与市中心直接连通起来。"
    },
    "form_confusables": [
      {
        "word": "connect",
        "zh": "连接；联系"
      },
      {
        "word": "collect",
        "zh": "收集；募捐"
      },
      {
        "word": "correct",
        "zh": "纠正；正确的"
      },
      {
        "word": "infect",
        "zh": "传染；感染"
      }
    ],
    "semantic_confusables": [
      {
        "word": "connect",
        "zh": "物理连通；串联"
      },
      {
        "word": "link",
        "zh": "链接；关联"
      },
      {
        "word": "join",
        "zh": "拼接；结合"
      },
      {
        "word": "attach",
        "zh": "贴上；附着"
      }
    ],
    "notes": "【搭配考点】connect A with/to B 将A与B连接/把...与...联系起来；connect to the internet 连接互联网；connecting flight 中转航班；【形近辨析】collect (收集聚集)，correct (批改改正/正确的)，infect (病毒病菌感染)；【近义辨析】link 侧重通过中间纽带链环建立起两者的间接关联，join 侧重把两根绳子打结或两块木板拼在一处消除缝隙，attach 侧重把小物件通过别针胶水粘在大物体表面，在修建铁路管线贯通两个核心地理枢纽时唯一契合 connect。"
  },
  "connection": {
    "word": "connection",
    "zh": "连接；关系；人脉；转接",
    "translation": "连接；关系；人脉；转接",
    "cloze": {
      "sentence": "Her prestigious family background and extensive industry ______ helped her secure the coveted partnership.",
      "original": "Her prestigious family background and extensive industry connections helped her secure the coveted partnership.",
      "translation": "她显赫的家族背景与广泛的行业人脉关系，助她顺利获得了令人艳羡的合伙人职位。"
    },
    "form_confusables": [
      {
        "word": "connection",
        "zh": "联系；人脉；连接"
      },
      {
        "word": "collection",
        "zh": "收藏品；收集"
      },
      {
        "word": "correction",
        "zh": "订正修改"
      },
      {
        "word": "confection",
        "zh": "甜食糕点"
      }
    ],
    "semantic_confusables": [
      {
        "word": "connection",
        "zh": "社会人脉背景；联系"
      },
      {
        "word": "network",
        "zh": "关系网络"
      },
      {
        "word": "contact",
        "zh": "联络人；熟人"
      },
      {
        "word": "ties",
        "zh": "纽带关系"
      }
    ],
    "notes": "【搭配考点】in connection with 与...有关（高频书面用语）；have connections 有深厚人脉背景关系；miss one's connection 错过了中转联运航班；【形近辨析】collection (艺术珍藏品)，correction (订正批改)，confection (糖果面点点心)；【近义辨析】network 强调结构交织如同渔网般的专业圈层组织架构，contact 强调手机通讯录里能够拨通电话的具体联系人，ties 侧重国家或家族之间血浓于水的深层政治文化纽带，在指职场升迁、政商圈中具有重大影响力的社会关系背景时唯一契合 connection。"
  },
  "conscience": {
    "word": "conscience",
    "zh": "良心；良知；道德心",
    "translation": "良心；良知；道德心",
    "cloze": {
      "sentence": "The corrupt official could not silence his guilty ______ after embezzling the disaster relief funds.",
      "original": "The corrupt official could not silence his guilty conscience after embezzling the disaster relief funds.",
      "translation": "在挪用救灾专款之后，这名贪官始终无法平息自己负罪良心的严厉谴责。"
    },
    "form_confusables": [
      {
        "word": "conscience",
        "zh": "良心；良知"
      },
      {
        "word": "conscious",
        "zh": "清醒的；有意识的"
      },
      {
        "word": "conscientious",
        "zh": "一丝不苟尽责的"
      },
      {
        "word": "consciousness",
        "zh": "知觉；意识"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conscience",
        "zh": "道德良心"
      },
      {
        "word": "morals",
        "zh": "道德准则；品行"
      },
      {
        "word": "scruples",
        "zh": "顾虑；良心不安"
      },
      {
        "word": "integrity",
        "zh": "正直诚实"
      }
    ],
    "notes": "【搭配考点】a guilty/clear conscience 问心有愧/问心无愧；for conscience' sake 为了求得良心平安；prisoner of conscience 良心犯；【形近辨析】conscious (形容词：有知觉的)，conscientious (形容词：极度敬业认真一丝不苟的，极常混考)，consciousness (名词：知觉意识)；【近义辨析】morals 强调社会公认制约行为的道德规范准则，scruples 侧重在动手做坏事前内心产生的犹豫顾忌，integrity 强调经得起任何金钱诱惑的崇高品格，而在内心深处审判善恶、产生内疚自责感的道德心灵器官唯一契合 conscience。"
  },
  "conscious": {
    "word": "conscious",
    "zh": "清醒的；有意识的；刻意的",
    "translation": "清醒的；有意识的；刻意的",
    "cloze": {
      "sentence": "Although severely injured in the car crash, the trapped driver remained fully ______ and responsive.",
      "original": "Although severely injured in the car crash, the trapped driver remained fully conscious and responsive.",
      "translation": "尽管在车祸中受了重伤，这名被困的司机依然保持着完全清醒的神志并能做出应答。"
    },
    "form_confusables": [
      {
        "word": "conscious",
        "zh": "清醒的；有知觉的"
      },
      {
        "word": "conscience",
        "zh": "良心"
      },
      {
        "word": "continuous",
        "zh": "连续不断的"
      },
      {
        "word": "ambitious",
        "zh": "野心勃勃的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conscious",
        "zh": "神志清醒的；有知觉的"
      },
      {
        "word": "awake",
        "zh": "醒着的；未入睡的"
      },
      {
        "word": "alert",
        "zh": "警觉敏锐的"
      },
      {
        "word": "aware",
        "zh": "察觉意识到的"
      }
    ],
    "notes": "【搭配考点】fully conscious 神志完全清醒；make a conscious effort 做出自觉刻意的努力；environmentally conscious 具有环保意识的；【形近辨析】conscience (名词良心)，continuous (时间连续不中断的)，ambitious (有抱负雄心的)；【近义辨析】awake 仅指生理状态没有睡着（睁着眼），alert 强调感官高度敏锐随时防范危险，aware 侧重头脑中知道并掌握了某项事实或潜在风险，在医学与生理上指大脑皮层恢复知觉并具备认知反应的生命状态唯一契合 conscious。"
  },
  "consciousness": {
    "word": "consciousness",
    "zh": "意识；知觉；觉悟",
    "translation": "意识；知觉；觉悟",
    "cloze": {
      "sentence": "The vicious blow to the head caused the boxer to lose ______ and collapse onto the canvas.",
      "original": "The vicious blow to the head caused the boxer to lose consciousness and collapse onto the canvas.",
      "translation": "头部遭受的这记沉重重击导致拳击手瞬间丧失知觉，倒在了拳击台上。"
    },
    "form_confusables": [
      {
        "word": "consciousness",
        "zh": "知觉；意识"
      },
      {
        "word": "conscientiousness",
        "zh": "尽责；细心"
      },
      {
        "word": "unconsciousness",
        "zh": "无意识；昏迷"
      },
      {
        "word": "cautiousness",
        "zh": "谨慎小心"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consciousness",
        "zh": "大脑知觉；意识"
      },
      {
        "word": "awareness",
        "zh": "认知觉察度"
      },
      {
        "word": "mindfulness",
        "zh": "留神；正念"
      },
      {
        "word": "perception",
        "zh": "感官知觉"
      }
    ],
    "notes": "【搭配考点】lose/regain consciousness 失去/恢复知觉（医学急救核心考点）；stream of consciousness 意识流（文学手法）；class consciousness 阶级意识；【形近辨析】conscientiousness (敬业爱岗一丝不苟品质)，unconsciousness (反义词：昏迷不醒状态)，cautiousness (小心翼翼)；【近义辨析】awareness 强调对某一社会问题或周围危险的警觉知晓程度（如 raise environmental awareness），mindfulness 强调禅修正念当下体验，perception 侧重五官感知外界景物的洞察力，在生理学上描述人能否感知自我存在并感知外界的脑电神经状态唯一契合 consciousness。"
  },
  "consequence": {
    "word": "consequence",
    "zh": "后果；结果；深远影响",
    "translation": "后果；结果；深远影响",
    "cloze": {
      "sentence": "Hundreds of long-serving employees lost their livelihoods as a direct ______ of the corporate merger.",
      "original": "Hundreds of long-serving employees lost their livelihoods as a direct consequence of the corporate merger.",
      "translation": "作为那起企业并购的直接恶果，数百名老员工失去了他们的生计。"
    },
    "form_confusables": [
      {
        "word": "consequence",
        "zh": "后果；结果"
      },
      {
        "word": "sequence",
        "zh": "序列；次序"
      },
      {
        "word": "eloquence",
        "zh": "雄辩才华"
      },
      {
        "word": "frequency",
        "zh": "频繁；频率"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consequence",
        "zh": "不良后果；影响"
      },
      {
        "word": "result",
        "zh": "直接结果"
      },
      {
        "word": "outcome",
        "zh": "最终胜负局势"
      },
      {
        "word": "aftermath",
        "zh": "余波；后患"
      }
    ],
    "notes": "【搭配考点】as a consequence of 作为...的必然结果；face the consequences 承担后果；in consequence 因此；a person of consequence 有显赫地位的大人物；【形近辨析】sequence (先后顺序/基因序列)，eloquence (口才好文采好)，frequency (发生频率)；【近义辨析】result 属于中性词指任何算式、行动得出的直接结果，outcome 侧重选举、官司或谈判最终产生的结局输赢，aftermath 专指战争、地震、风暴扫荡后留下的满目疮痍余波，在指由先行动作必然引发的严峻后续影响或负面恶果时唯一契合 consequence。"
  },
  "conservative": {
    "word": "conservative",
    "zh": "保守的；守旧的；稳健的",
    "translation": "保守的；守旧的；稳健的",
    "cloze": {
      "sentence": "Pension fund trustees generally adopt an extremely ______ investment approach to safeguard retirees' savings.",
      "original": "Pension fund trustees generally adopt an extremely conservative investment approach to safeguard retirees' savings.",
      "translation": "养老基金托管人通常采取极其稳健保守的投资方式，以保障退休人员的积蓄安全。"
    },
    "form_confusables": [
      {
        "word": "conservative",
        "zh": "保守的；稳健的"
      },
      {
        "word": "conservation",
        "zh": "生态保护"
      },
      {
        "word": "preservative",
        "zh": "防腐剂"
      },
      {
        "word": "observant",
        "zh": "善观察的；守规矩的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conservative",
        "zh": "守成稳健的；保守的"
      },
      {
        "word": "cautious",
        "zh": "小心翼翼的"
      },
      {
        "word": "traditional",
        "zh": "墨守成规的；传统的"
      },
      {
        "word": "moderate",
        "zh": "温和派的；适度的"
      }
    ],
    "notes": "【搭配考点】conservative estimate/approach 保守估计/稳妥保守的方式；Conservative Party 保守党；【形近辨析】conservation (动植物与生态保护)，preservative (食品化学防腐剂)，observant (观察细致的/遵从教规的)；【近义辨析】cautious 侧重行事时防范意外风险的战战兢兢，traditional 侧重遵循代代相传的风俗习惯模式，moderate 强调政治观点不偏激处在左右中间，在金融估值与政治哲学上强调避免激进冒险、力图维持现状稳妥唯一契合 conservative。"
  },
  "consider": {
    "word": "consider",
    "zh": "考虑；认为；体谅",
    "translation": "考虑；认为；体谅",
    "cloze": {
      "sentence": "The university admissions committee will carefully ______ each applicant's extracurricular achievements and leadership.",
      "original": "The university admissions committee will carefully consider each applicant's extracurricular achievements and leadership.",
      "translation": "大学招生委员会将认真仔细地权衡考虑每位申请人的课外成就与领导潜质。"
    },
    "form_confusables": [
      {
        "word": "consider",
        "zh": "考虑；认为；体谅"
      },
      {
        "word": "considerate",
        "zh": "体贴周到的"
      },
      {
        "word": "considerable",
        "zh": "相当大的；可观的"
      },
      {
        "word": "consist",
        "zh": "由...构成"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consider",
        "zh": "深思熟虑；权衡"
      },
      {
        "word": "contemplate",
        "zh": "凝神盘算；深思"
      },
      {
        "word": "deliberate",
        "zh": "反复商榷；推敲"
      },
      {
        "word": "weigh",
        "zh": "权衡利弊"
      }
    ],
    "notes": "【搭配考点】consider doing sth 考虑做某事（必考动名词作宾语）；consider someone as/to be 认为某人是...；all things considered 综合考虑全盘；【形近辨析】considerate (体贴入微关心人的)，considerable (数量规模可观的，极高频形近混淆对)，consist (在于/由...组成)；【近义辨析】contemplate 侧重在脑海中勾勒未来计划或深沉凝望，deliberate 侧重陪审团在密室中多轮反复辩论推敲，weigh 侧重在天平两端对比得失利弊，在作综合审查评估决定的及物动词上唯一契合 consider。"
  },
  "considerable": {
    "word": "considerable",
    "zh": "相当大的；可观的；值得注意的",
    "translation": "相当大的；可观的；值得注意的",
    "cloze": {
      "sentence": "The deep-sea drilling expedition was completed only after expending a ______ amount of time and capital.",
      "original": "The deep-sea drilling expedition was completed only after expending a considerable amount of time and capital.",
      "translation": "这次深海钻探科考项目是在耗费了相当可观的时间与资本之后才宣告完成的。"
    },
    "form_confusables": [
      {
        "word": "considerable",
        "zh": "相当大的；可观的"
      },
      {
        "word": "considerate",
        "zh": "体贴周到的"
      },
      {
        "word": "considered",
        "zh": "经过深思熟虑的"
      },
      {
        "word": "miserable",
        "zh": "悲惨可怜的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "considerable",
        "zh": "数量可观庞大的"
      },
      {
        "word": "substantial",
        "zh": "大量的；实质的"
      },
      {
        "word": "significant",
        "zh": "显著重大的"
      },
      {
        "word": "sizable",
        "zh": "相当庞大的"
      }
    ],
    "notes": "【搭配考点】a considerable amount/number of 相当大量的（高频修饰不可数与可数名词）；of considerable importance 相当重要的；【形近辨析】considerate (为人处事体谅周到的，核心辨析点)，considered (经过深思熟虑后慎重做出的，如 considered opinion)，miserable (痛苦凄凉的)；【近义辨析】substantial 侧重具有实实在在沉甸甸分量的财富或进展，significant 侧重具有统计学显著性或历史转折意义，sizable 侧重物理体积或金额面积很大，在形容数量、资金规模大到足以引起高度重视时唯一契合 considerable。"
  },
  "consideration": {
    "word": "consideration",
    "zh": "考虑；仔细考量；体贴；报酬",
    "translation": "考虑；仔细考量；体贴；报酬",
    "cloze": {
      "sentence": "After careful and mature ______, the board resolved not to proceed with the proposed hostile acquisition.",
      "original": "After careful and mature consideration, the board resolved not to proceed with the proposed hostile acquisition.",
      "translation": "经过审慎而周详的全盘考量，董事会决定放弃推行那项备受争议的敌意收购提案。"
    },
    "form_confusables": [
      {
        "word": "consideration",
        "zh": "考虑；体贴；报酬"
      },
      {
        "word": "consolidation",
        "zh": "巩固；兼并"
      },
      {
        "word": "concentration",
        "zh": "专注；浓度"
      },
      {
        "word": "continuation",
        "zh": "延续；继续"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consideration",
        "zh": "审慎考量；深思"
      },
      {
        "word": "deliberation",
        "zh": "商讨审议"
      },
      {
        "word": "reflection",
        "zh": "沉思反思"
      },
      {
        "word": "thought",
        "zh": "思想想法"
      }
    ],
    "notes": "【搭配考点】after careful consideration 经过审慎考虑；take into consideration 计入考量/考虑在内（写作必背短语）；show consideration for 体谅关照某人；for a valuable consideration 为获得对价报酬（法律术语）；【形近辨析】consolidation (企业合并重组/地位巩固)，concentration (高度专心致志)，continuation (长篇故事的续集)；【近义辨析】deliberation 侧重委员会针对争议法案进行的漫长讨论审查，reflection 侧重向内审视自己过往得失教训的反思，thought 泛指零散脑海意识，在指对某项重大商业决策展开全面权衡利弊的正式思维过程中唯一契合 consideration。"
  },
  "consist": {
    "word": "consist",
    "zh": "由...组成；在于；符合",
    "translation": "由...组成；在于；符合",
    "cloze": {
      "sentence": "True personal happiness does not ______ in the endless accumulation of material possessions.",
      "original": "True personal happiness does not consist in the endless accumulation of material possessions.",
      "translation": "真正的人生幸福并不在于永无止境地聚敛物质财富。"
    },
    "form_confusables": [
      {
        "word": "consist",
        "zh": "在于；由...组成"
      },
      {
        "word": "persist",
        "zh": "坚持不懈"
      },
      {
        "word": "resist",
        "zh": "抵制；反抗"
      },
      {
        "word": "insist",
        "zh": "坚持要求"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consist",
        "zh": "在于；存在于"
      },
      {
        "word": "reside",
        "zh": "居住；存在于"
      },
      {
        "word": "lie",
        "zh": "在于(lie in)"
      },
      {
        "word": "dwell",
        "zh": "老是想着；居住"
      }
    ],
    "notes": "【搭配考点】consist in 存在于/在于（本质特征定义高频搭配）；consist of 由...所组成（不可用被动语态，不及物）；consist with 与...一致；【形近辨析】persist (坚持不懈持之以恒 persist in)，resist (抵制诱惑/武力抗击)，insist (强硬坚持主张 insist on)，assist (协助支援)；【近义辨析】lie in 偏日常口语亦可表示原因在于，reside in 属于哲学术语强调权力或合法性寄托安放在某机构体内，dwell on 侧重老是放不下某段伤心往事苦苦思索，在阐明某一概念的哲学真谛或本质要素“在于...”时唯一契合 consist。"
  },
  "consistent": {
    "word": "consistent",
    "zh": "始终如一的；一致的；连贯的",
    "translation": "始终如一的；一致的；连贯的",
    "cloze": {
      "sentence": "Her impressive academic achievements throughout the year have been remarkably ______ with her high potential.",
      "original": "Her impressive academic achievements throughout the year have been remarkably consistent with her high potential.",
      "translation": "她贯穿全年的骄人学业成绩，与她卓越的天赋潜能始终保持着高度吻合与连贯一致。"
    },
    "form_confusables": [
      {
        "word": "consistent",
        "zh": "始终如一的；一致的"
      },
      {
        "word": "persistent",
        "zh": "坚持不懈的；顽固的"
      },
      {
        "word": "resistant",
        "zh": "有抵抗力的"
      },
      {
        "word": "assistant",
        "zh": "助理的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consistent",
        "zh": "始终连贯相符的"
      },
      {
        "word": "coherent",
        "zh": "逻辑清晰连贯的"
      },
      {
        "word": "uniform",
        "zh": "统一齐一的"
      },
      {
        "word": "compatible",
        "zh": "相容兼容的"
      }
    ],
    "notes": "【搭配考点】be consistent with 与...相符/与...前后一致（高频高分连词搭配）；consistent effort 坚持不懈持之以恒的努力；【形近辨析】persistent (不依不饶顽固坚持的，如 persistent rain/cough)，resistant (耐腐蚀抗药的，如 water-resistant)，assistant (助理秘书)；【近义辨析】coherent 侧重文章章节或演讲论点条理清晰、合乎逻辑绝无自相矛盾，uniform 侧重外观形态步调整齐划一像穿制服一样，compatible 强调两者共处不打架能融洽共生，在表达多次行为、数据或水平始终如一且与标准高度吻合上唯一契合 consistent。"
  },
  "constant": {
    "word": "constant",
    "zh": "持续的；恒定的",
    "translation": "持续的；恒定的",
    "cloze": {
      "sentence": "In scientific experiments, all variables except the one being tested must be kept ______.",
      "translation": "在科学实验中，除了被测试的变量之外，所有其他变量都必须保持恒定。"
    },
    "form_confusables": [
      {
        "word": "constant",
        "zh": "持续的；恒定的"
      },
      {
        "word": "consistent",
        "zh": "一致的；连贯的"
      },
      {
        "word": "instant",
        "zh": "立即的；即时的"
      },
      {
        "word": "distant",
        "zh": "遥远的；冷淡的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "constant",
        "zh": "持续的；恒定的"
      },
      {
        "word": "continuous",
        "zh": "连续不断的 (无间歇)"
      },
      {
        "word": "continual",
        "zh": "频繁反复的 (时断时续)"
      },
      {
        "word": "persistent",
        "zh": "执着坚持的；难以消除的"
      }
    ],
    "notes": "【搭配考点】remain/keep constant 保持恒定不变；constant stream 连绵不断；【形近辨析】consistent (始终如一的), instant (即刻的), distant (疏远的/遥远的)；【近义辨析】constant 指状态或数值固定不变；continuous 强调在时间和空间上没有丝毫断开；continual 强调反复发生但中间有间歇；persistent 强调不屈不挠或顽固持续。"
  },
  "constantly": {
    "word": "constantly",
    "zh": "不断地；时常",
    "translation": "不断地；时常",
    "cloze": {
      "sentence": "Fashion trends are ______ changing as designers seek new inspiration.",
      "translation": "随着设计师寻找新的灵感，时尚潮流一直在不断变化。"
    },
    "form_confusables": [
      {
        "word": "constantly",
        "zh": "不断地；时常"
      },
      {
        "word": "consistently",
        "zh": "一贯地；始终如一地"
      },
      {
        "word": "instantly",
        "zh": "立即；马上"
      },
      {
        "word": "distantly",
        "zh": "遥远地；冷淡地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "constantly",
        "zh": "不断地；时常"
      },
      {
        "word": "continuously",
        "zh": "连续不断地 (中途无间断)"
      },
      {
        "word": "continually",
        "zh": "频繁反复地 (屡次发生)"
      },
      {
        "word": "permanently",
        "zh": "永久地；长期固定地"
      }
    ],
    "notes": "【搭配考点】constantly changing/evolving 不断变化/演化；constantly remind 屡次提醒；【形近辨析】consistently (一贯地/坚持不懈地), instantly (即刻地), distantly (遥远地)；【近义辨析】constantly 强调发生频率极高且持续不断；continuously 强调中途不休止；continually 侧重多次重复发生；permanently 强调永久状态。"
  },
  "constitute": {
    "word": "constitute",
    "zh": "构成；组成",
    "translation": "构成；组成",
    "cloze": {
      "sentence": "Female students ______ more than sixty percent of the medical school class.",
      "translation": "女生占了医学院该班级人数的百分之六十以上。"
    },
    "form_confusables": [
      {
        "word": "constitute",
        "zh": "构成；组成"
      },
      {
        "word": "substitute",
        "zh": "代替；替换"
      },
      {
        "word": "institute",
        "zh": "建立；创立；学会"
      },
      {
        "word": "prostitute",
        "zh": "糟蹋；滥用；卖淫"
      }
    ],
    "semantic_confusables": [
      {
        "word": "constitute",
        "zh": "构成；组成 (系动词性质)"
      },
      {
        "word": "compose",
        "zh": "组成；构成 (常用于 be composed of)"
      },
      {
        "word": "comprise",
        "zh": "包含；由...组成"
      },
      {
        "word": "represent",
        "zh": "代表；相当于"
      }
    ],
    "notes": "【搭配考点】constitute a threat/crime 构成威胁/犯罪；constitute the majority 占大多数；【形近辨析】substitute (替代), institute (建立/学会), prostitute (滥用)；【近义辨析】constitute 主语通常为组成部分，相当于 form 或 make up；compose 常用被动语态 be composed of；comprise 主语可为整体也可为部分；represent 侧重代表或体现。"
  },
  "constitution": {
    "word": "constitution",
    "zh": "宪法；体质；构造",
    "translation": "宪法；体质；构造",
    "cloze": {
      "sentence": "The supreme court has the authority to declare any law that violates the ______ null and void.",
      "translation": "最高法院有权宣布任何违反宪法的法律无效。"
    },
    "form_confusables": [
      {
        "word": "constitution",
        "zh": "宪法；体质；构造"
      },
      {
        "word": "substitution",
        "zh": "替换；代替品"
      },
      {
        "word": "institution",
        "zh": "机构；制度"
      },
      {
        "word": "prostitution",
        "zh": "卖淫；滥用"
      }
    ],
    "semantic_confusables": [
      {
        "word": "constitution",
        "zh": "宪法；章程；根本大法"
      },
      {
        "word": "charter",
        "zh": "宪章；特许状"
      },
      {
        "word": "legislation",
        "zh": "法规；立法"
      },
      {
        "word": "regulation",
        "zh": "规则；规章"
      }
    ],
    "notes": "【搭配考点】written constitution 成文宪法；have a strong constitution 体质强健；amend the constitution 修改宪法；【形近辨析】substitution (替代), institution (公共机构/社会体制), prostitution (滥用/堕落)；【近义辨析】constitution 特指国家的最高根本大法或有机体的体制；charter 侧重团体/联合国等组织宪章；legislation 泛指制定颁布的法律法规；regulation 侧重行政规章制度。"
  },
  "construct": {
    "word": "construct",
    "zh": "建造；构筑",
    "translation": "建造；构筑",
    "cloze": {
      "sentence": "Engineers used advanced composite materials to ______ the suspension bridge.",
      "translation": "工程师们使用先进复合材料建造了这座悬索桥。"
    },
    "form_confusables": [
      {
        "word": "construct",
        "zh": "建造；构筑"
      },
      {
        "word": "instruct",
        "zh": "指导；传授"
      },
      {
        "word": "obstruct",
        "zh": "阻碍；妨碍"
      },
      {
        "word": "destruct",
        "zh": "摧毁；自毁"
      }
    ],
    "semantic_confusables": [
      {
        "word": "construct",
        "zh": "建造；构筑 (大型工程或复杂体系)"
      },
      {
        "word": "build",
        "zh": "建造；建立 (通用词)"
      },
      {
        "word": "erect",
        "zh": "竖立；建立 (垂直耸立)"
      },
      {
        "word": "fabricate",
        "zh": "制造；组装；虚构"
      }
    ],
    "notes": "【搭配考点】construct a bridge/building 建造桥梁/建筑；construct a theory/argument 构建理论/论据；【形近辨析】instruct (指示/教授), obstruct (阻塞/阻挠), destruct (毁灭)；【近义辨析】construct 侧重按照严密设计图纸装配复杂结构或严密论述；build 为日常通用词；erect 强调垂直竖立或树立高大建筑物；fabricate 强调工厂预制装配或凭空捏造谎言。"
  },
  "construction": {
    "word": "construction",
    "zh": "建设；建筑物；结构",
    "translation": "建设；建筑物；结构",
    "cloze": {
      "sentence": "The new highway is currently under ______ and will be open to traffic next spring.",
      "translation": "新高速公路目前正在施工中，将于明年春天通车。"
    },
    "form_confusables": [
      {
        "word": "construction",
        "zh": "建设；建筑物"
      },
      {
        "word": "instruction",
        "zh": "说明；指示"
      },
      {
        "word": "obstruction",
        "zh": "阻碍；障碍物"
      },
      {
        "word": "destruction",
        "zh": "破坏；毁灭"
      }
    ],
    "semantic_confusables": [
      {
        "word": "construction",
        "zh": "建设；施工；构造"
      },
      {
        "word": "structure",
        "zh": "结构；建筑物"
      },
      {
        "word": "architecture",
        "zh": "建筑学；建筑风格"
      },
      {
        "word": "edifice",
        "zh": "宏伟建筑；体系"
      }
    ],
    "notes": "【搭配考点】under construction 正在施工/建设中；construction site 施工现场；put a construction on 对...做出解释；【形近辨析】instruction (说明书/教学), obstruction (障碍物), destruction (毁灭)；【近义辨析】construction 侧重建造过程或施工工程；structure 侧重各部分的组织框架与形态；architecture 强调建筑的设计艺术与风格；edifice 强调外观壮观宏伟的建筑或庞大体系。"
  },
  "consult": {
    "word": "consult",
    "zh": "咨询；请教",
    "translation": "咨询；请教",
    "cloze": {
      "sentence": "Patients are strongly advised to ______ a qualified physician before taking this medication.",
      "translation": "强烈建议患者在服用该药物前咨询合格的医生。"
    },
    "form_confusables": [
      {
        "word": "consult",
        "zh": "咨询；请教"
      },
      {
        "word": "insult",
        "zh": "侮辱；凌辱"
      },
      {
        "word": "result",
        "zh": "结果；导致"
      },
      {
        "word": "exult",
        "zh": "欢欣鼓舞"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consult",
        "zh": "咨询；请教 (寻求专业意见)"
      },
      {
        "word": "counsel",
        "zh": "提出忠告；心理辅导"
      },
      {
        "word": "confer",
        "zh": "协商；交换意见"
      },
      {
        "word": "advise",
        "zh": "建议；劝告"
      }
    ],
    "notes": "【搭配考点】consult a specialist/doctor 咨询专家/医生；consult a dictionary/manual 查阅词典/手册；consult with 与...商量；【形近辨析】insult (侮辱), result (结果), exult (狂喜)；【近义辨析】consult 强调向专业人士寻求权威建议或查阅参考资料；counsel 侧重针对个人问题给予深入辅导与心理劝导；confer 强调平级之间开会协商；advise 侧重提出具体行动建议。"
  },
  "consume": {
    "word": "consume",
    "zh": "消耗；消费",
    "translation": "消耗；消费",
    "cloze": {
      "sentence": "Modern data centers ______ huge amounts of electrical energy to power artificial intelligence models.",
      "translation": "现代数据中心消耗大量的电能来驱动人工智能模型。"
    },
    "form_confusables": [
      {
        "word": "consume",
        "zh": "消耗；消费"
      },
      {
        "word": "resume",
        "zh": "重新开始；恢复"
      },
      {
        "word": "assume",
        "zh": "假定；承担"
      },
      {
        "word": "presume",
        "zh": "推测；擅自"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consume",
        "zh": "消耗；消费 (资源/能量/食物)"
      },
      {
        "word": "exhaust",
        "zh": "耗尽；用竭"
      },
      {
        "word": "deplete",
        "zh": "大量消耗；使衰竭"
      },
      {
        "word": "spend",
        "zh": "花费；消耗 (金钱或精力)"
      }
    ],
    "notes": "【搭配考点】consume energy/fuel 消耗能源/燃料；be consumed with guilt/rage 被内疚/愤怒吞噬；【形近辨析】resume (恢复/重新开始), assume (假设/担任), presume (推定)；【近义辨析】consume 强调通过使用或吃喝使其耗费或转化；exhaust 强调彻底用光且丝毫不剩；deplete 强调资源储量急剧减少；spend 强调金钱或时间的支出。"
  },
  "consumer": {
    "word": "consumer",
    "zh": "消费者；用户",
    "translation": "消费者；用户",
    "cloze": {
      "sentence": "The introduction of the new regulation aims to safeguard the rights and interests of the ______.",
      "translation": "新规定的出台旨在保障消费者的合法权益。"
    },
    "form_confusables": [
      {
        "word": "consumer",
        "zh": "消费者；用户"
      },
      {
        "word": "customer",
        "zh": "顾客；买主"
      },
      {
        "word": "commissioner",
        "zh": "专员；特派员"
      },
      {
        "word": "container",
        "zh": "容器；集装箱"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consumer",
        "zh": "消费者 (宏观经济层面的终端使用者)"
      },
      {
        "word": "customer",
        "zh": "顾客；客户 (具体商店/服务的购买者)"
      },
      {
        "word": "client",
        "zh": "委托人；专业服务客户"
      },
      {
        "word": "buyer",
        "zh": "买方；采购员"
      }
    ],
    "notes": "【搭配考点】consumer protection/rights 消费者保护/权益；consumer demand 消费需求；consumer goods 消费品；【形近辨析】customer (买家/顾客), commissioner (委员), container (集装箱)；【近义辨析】consumer 是经济学术语，指商品或服务的终端使用者；customer 强调具体买卖关系的买家；client 侧重接受律师、会计等长期专业咨询服务的客户；buyer 强调具体交易环节的购买方。"
  },
  "consumption": {
    "word": "consumption",
    "zh": "消费；消耗",
    "translation": "消费；消耗",
    "cloze": {
      "sentence": "Health authorities recommend reducing the daily ______ of processed sugars and salt.",
      "translation": "卫生管理部门建议减少加工糖和盐的每日摄入量。"
    },
    "form_confusables": [
      {
        "word": "consumption",
        "zh": "消费；消耗"
      },
      {
        "word": "assumption",
        "zh": "假定；设想"
      },
      {
        "word": "resumption",
        "zh": "恢复；重新开始"
      },
      {
        "word": "presumption",
        "zh": "肆无忌惮；推定"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consumption",
        "zh": "消耗；消费；摄入"
      },
      {
        "word": "expenditure",
        "zh": "开支；支出额"
      },
      {
        "word": "intake",
        "zh": "摄取量；摄入"
      },
      {
        "word": "depletion",
        "zh": "耗尽；损耗"
      }
    ],
    "notes": "【搭配考点】fuel/energy consumption 燃料/能源消耗；for personal consumption 供个人消费/食用；domestic consumption 国内消费；【形近辨析】assumption (假设), resumption (恢复), presumption (推定)；【近义辨析】consumption 既可指宏观物质资源的消耗，也可指食品药物的摄入；expenditure 专指金钱、精力的开销；intake 特指饮食营养或空气等的摄入量；depletion 侧重资源被抽空的过程。"
  },
  "contact": {
    "word": "contact",
    "zh": "联系；接触",
    "translation": "联系；接触",
    "cloze": {
      "sentence": "Please do not hesitate to ______ our customer support team if you encounter any difficulties.",
      "translation": "如果您遇到任何困难，请随时联系我们的客户支持团队。"
    },
    "form_confusables": [
      {
        "word": "contact",
        "zh": "联系；接触"
      },
      {
        "word": "contract",
        "zh": "合同；收缩"
      },
      {
        "word": "compact",
        "zh": "紧凑的；契约"
      },
      {
        "word": "connect",
        "zh": "连接；结合"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contact",
        "zh": "取得联系；联络 (通过电话/邮件等)"
      },
      {
        "word": "communicate",
        "zh": "沟通；交流 (双向传递信息)"
      },
      {
        "word": "reach",
        "zh": "联络到；与...取得联系"
      },
      {
        "word": "interact",
        "zh": "相互交流；相互作用"
      }
    ],
    "notes": "【搭配考点】make contact with 与...取得联系；keep/lose contact 保持/失去联络；direct contact 直接接触；【形近辨析】contract (合同/收缩), compact (紧凑的/合约), connect (连接)；【近义辨析】contact 强调通过某种媒介找到对方并搭上线；communicate 侧重思想信息的充分交流；reach 侧重克服距离或障碍成功联系上；interact 侧重多方之间的动态互动。"
  },
  "contain": {
    "word": "contain",
    "zh": "包含；容纳；控制",
    "translation": "包含；容纳；控制",
    "cloze": {
      "sentence": "The emergency brigade worked tirelessly through the night to ______ the raging wildfire.",
      "translation": "应急消防队彻夜不知疲倦地工作，以控制肆虐的山火蔓延。"
    },
    "form_confusables": [
      {
        "word": "contain",
        "zh": "包含；控制"
      },
      {
        "word": "maintain",
        "zh": "维持；保养"
      },
      {
        "word": "retain",
        "zh": "保留；保持"
      },
      {
        "word": "detain",
        "zh": "扣留；拘留"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contain",
        "zh": "控制；抑制 (蔓延/情感)；容纳"
      },
      {
        "word": "restrain",
        "zh": "克制；限制 (行动或力量)"
      },
      {
        "word": "suppress",
        "zh": "镇压；压制"
      },
      {
        "word": "include",
        "zh": "包括；包含 (作为要素之一)"
      }
    ],
    "notes": "【搭配考点】contain the spread/fire 控制蔓延/火势；hardly contain one's excitement 难以抑制激动；contain information 包含信息；【形近辨析】maintain (维护/保养), retain (保留/留存), detain (羁押/扣留)；【近义辨析】contain 作“控制”时强调阻止有害事物向外扩散，作“包含”时侧重实体内装有某物；restrain 侧重对具体行为或冲动施加外部约束；suppress 侧重用强力完全扑灭压制；include 仅表示整体列出部分要素。"
  },
  "container": {
    "word": "container",
    "zh": "容器；集装箱",
    "translation": "容器；集装箱",
    "cloze": {
      "sentence": "The chemicals must be stored in an airtight ______ to prevent toxic vapor leakage.",
      "translation": "这些化学品必须存放在密封容器中，以防有毒气体泄漏。"
    },
    "form_confusables": [
      {
        "word": "container",
        "zh": "容器；集装箱"
      },
      {
        "word": "containment",
        "zh": "控制；遏制；包容"
      },
      {
        "word": "retainer",
        "zh": "定金；固定器；家仆"
      },
      {
        "word": "maintainer",
        "zh": "维护者；保持器"
      }
    ],
    "semantic_confusables": [
      {
        "word": "container",
        "zh": "容器；储藏箱"
      },
      {
        "word": "vessel",
        "zh": "器皿；导管；船只"
      },
      {
        "word": "receptacle",
        "zh": "容器；插座"
      },
      {
        "word": "repository",
        "zh": "储藏室；仓库"
      }
    ],
    "notes": "【搭配考点】airtight/sealed container 密封容器；shipping container 海运集装箱；container port 集装箱码头；【形近辨析】containment (遏制/控制), retainer (定金/保持器), maintainer (维护人)；【近义辨析】container 泛指装任何物品的箱、盒、罐等；vessel 偏正式，指盛液体的容器或血管、大船；receptacle 偏正式书面语，指专门接纳废弃物或物品的插座、容器；repository 指系统存储大量物品或信息的库房。"
  },
  "content": {
    "word": "content",
    "zh": "满足的；内容",
    "translation": "满足的；内容",
    "cloze": {
      "sentence": "While some people strive for endless wealth, he is ______ with a simple rural life.",
      "translation": "虽然有些人追求无尽的财富，但他却满足于简朴的乡村生活。"
    },
    "form_confusables": [
      {
        "word": "content",
        "zh": "满足的；内容"
      },
      {
        "word": "consent",
        "zh": "同意；赞同"
      },
      {
        "word": "context",
        "zh": "语境；上下文"
      },
      {
        "word": "contempt",
        "zh": "蔑视；轻视"
      }
    ],
    "semantic_confusables": [
      {
        "word": "content",
        "zh": "满足的；知足的 (安于现状)"
      },
      {
        "word": "satisfied",
        "zh": "满意的 (需求得到满足)"
      },
      {
        "word": "pleased",
        "zh": "高兴的；欣慰的"
      },
      {
        "word": "complacent",
        "zh": "自满的；沾沾自喜的"
      }
    ],
    "notes": "【搭配考点】be content with 满足于/知足于；table of contents 目录；fat/protein content 脂肪/蛋白质含量；【形近辨析】consent (赞同/准许), context (语境/背景), contempt (轻蔑/鄙视)；【近义辨析】content 作形容词侧重安于现状、不抱过高奢求的心境；satisfied 侧重具体期望或欲望被满足；pleased 强调因某事感到高兴；complacent 带有贬义，指沾沾自喜、不求进取。"
  },
  "contest": {
    "word": "contest",
    "zh": "竞赛；争辩；争夺",
    "translation": "竞赛；争辩；争夺",
    "cloze": {
      "sentence": "Several promising candidates have entered the ______ for the party leadership.",
      "translation": "几位很有希望的候选人参加了争夺该党领导权的竞选。"
    },
    "form_confusables": [
      {
        "word": "contest",
        "zh": "竞赛；争夺"
      },
      {
        "word": "context",
        "zh": "语境；上下文"
      },
      {
        "word": "protest",
        "zh": "抗议；反对"
      },
      {
        "word": "detest",
        "zh": "厌恶；憎恨"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contest",
        "zh": "竞选；争夺；竞赛 (角逐权利/胜负)"
      },
      {
        "word": "competition",
        "zh": "竞争；比赛 (广义商业或体育竞赛)"
      },
      {
        "word": "tournament",
        "zh": "锦标赛；联赛"
      },
      {
        "word": "match",
        "zh": "比赛；对抗赛"
      }
    ],
    "notes": "【搭配考点】contest for power/leadership 权力/领导权争夺；enter/win a contest 参加/赢得竞赛；contest a decision 质疑/抗辩某决定；【形近辨析】context (上下文), protest (抗议), detest (痛恨)；【近义辨析】contest 既可作名词指选拔赛、竞选，也可作动词强调对结果或权利提出抗辩争辩；competition 泛指一切商业或体育领域的竞争；tournament 专指多轮淘汰制的锦标赛；match 侧重两方之间的具体某场球赛对抗。"
  },
  "context": {
    "word": "context",
    "zh": "语境；背景",
    "translation": "语境；背景",
    "cloze": {
      "sentence": "To truly appreciate this ancient poem, you need to understand the historical ______ in which it was written.",
      "translation": "要真正领略这首古诗的魅力，你需要了解其创作的历史背景。"
    },
    "form_confusables": [
      {
        "word": "context",
        "zh": "语境；背景"
      },
      {
        "word": "content",
        "zh": "内容；满足的"
      },
      {
        "word": "contest",
        "zh": "竞赛；争夺"
      },
      {
        "word": "pretext",
        "zh": "借口；托词"
      }
    ],
    "semantic_confusables": [
      {
        "word": "context",
        "zh": "背景；语境 (事件发生所处的环境脉络)"
      },
      {
        "word": "background",
        "zh": "背景 (个人经历或后景)"
      },
      {
        "word": "environment",
        "zh": "环境 (周围生态物理条件)"
      },
      {
        "word": "circumstance",
        "zh": "客观境况；伴随条件"
      }
    ],
    "notes": "【搭配考点】in the context of 在...背景/语境下；historical/social context 历史/社会背景；out of context 断章取义；【形近辨析】content (内容), contest (竞赛), pretext (借口/托词)；【近义辨析】context 强调决定事物意义的上下文脉络与关联情境；background 强调事物的起源、底色或幕后背景；environment 侧重围绕主体的生态或物质空间；circumstance 强调伴随事件发生的外部具体客观条件。"
  },
  "continent": {
    "word": "continent",
    "zh": "大陆；大洲",
    "translation": "大陆；大洲",
    "cloze": {
      "sentence": "Explorers spent years mapping the interior of the vast African ______.",
      "translation": "探险家们耗费数年时间绘制了辽阔的非洲大陆腹地地图。"
    },
    "form_confusables": [
      {
        "word": "continent",
        "zh": "大陆；大洲"
      },
      {
        "word": "contingent",
        "zh": "依情况而定的；代表团"
      },
      {
        "word": "competent",
        "zh": "有能力的；胜任的"
      },
      {
        "word": "content",
        "zh": "满足的；内容"
      }
    ],
    "semantic_confusables": [
      {
        "word": "continent",
        "zh": "大陆；大洲 (世界七大洲板块)"
      },
      {
        "word": "mainland",
        "zh": "大陆；本土 (相对岛屿而言)"
      },
      {
        "word": "landmass",
        "zh": "大陆块；大片陆地"
      },
      {
        "word": "territory",
        "zh": "领土；版图"
      }
    ],
    "notes": "【搭配考点】the African/European continent 非洲/欧洲大陆；the sub-continent 次大陆；on the continent 在欧洲大陆；【形近辨析】contingent (依条件而定的/代表团), competent (胜任的), content (满足的/内容)；【近义辨析】continent 是地理学上指世界七大洲之一的大板块陆地；mainland 指相对离岸岛屿而言的国家主体陆地或大陆本土；landmass 指地质学上的整块连续陆地；territory 侧重政治主权管辖的领土疆域。"
  },
  "continual": {
    "word": "continual",
    "zh": "频繁的；持续不断的",
    "translation": "频繁的；持续不断的",
    "cloze": {
      "sentence": "The project suffered from ______ interruptions caused by unexpected equipment failures.",
      "translation": "该项目因突如其来的设备故障导致的频繁中断而进展受阻。"
    },
    "form_confusables": [
      {
        "word": "continual",
        "zh": "频繁的；时断时续的"
      },
      {
        "word": "continuous",
        "zh": "连续不断的 (无间歇)"
      },
      {
        "word": "continue",
        "zh": "继续；延续"
      },
      {
        "word": "continuity",
        "zh": "连续性；连贯性"
      }
    ],
    "semantic_confusables": [
      {
        "word": "continual",
        "zh": "频繁不断的；断断续续的"
      },
      {
        "word": "continuous",
        "zh": "连续无间的 (时间空间无停顿)"
      },
      {
        "word": "recurrent",
        "zh": "循环往复的；周期性重现的"
      },
      {
        "word": "constant",
        "zh": "持续不变的；恒定的"
      }
    ],
    "notes": "【搭配考点】continual complaints/interruptions 屡屡不断的抱怨/打扰；continual flow 持续反复的流动；【形近辨析】continuous (连续无间隙的), continue (继续动词), continuity (连贯性名词)；【近义辨析】continual 强调动作反复发生、不断重复出现，但每次之间存在短暂间隙；continuous 强调在整个时段内始终不停、无任何中断；recurrent 侧重按规律周期性地反复出现；constant 强调状态或速率平稳恒定。"
  },
  "continue": {
    "word": "continue",
    "zh": "继续；延续",
    "translation": "继续；延续",
    "cloze": {
      "sentence": "Negotiations will ______ tomorrow morning in an effort to reach a final peace treaty.",
      "translation": "谈判将于明早继续进行，以努力达成最终的和平协议。"
    },
    "form_confusables": [
      {
        "word": "continue",
        "zh": "继续；延续"
      },
      {
        "word": "contain",
        "zh": "包含；控制"
      },
      {
        "word": "construe",
        "zh": "解释；理解"
      },
      {
        "word": "combine",
        "zh": "结合；联合"
      }
    ],
    "semantic_confusables": [
      {
        "word": "continue",
        "zh": "继续；延续 (保持进行不终止)"
      },
      {
        "word": "proceed",
        "zh": "继续进行；前进 (有条不紊推进)"
      },
      {
        "word": "resume",
        "zh": "重新开始；恢复 (中断后继续)"
      },
      {
        "word": "persist",
        "zh": "执意坚持；持续存在"
      }
    ],
    "notes": "【搭配考点】continue to do/doing sth 继续做某事；continue with 接着做...；continue uninterrupted 持续不间断；【形近辨析】contain (包含), construe (领会/解释), combine (结合)；【近义辨析】continue 泛指原本进行的动作保持下去；proceed 强调按照既定程序或方向往前推进；resume 专指在暂停、打断之后重新接着做；persist 侧重面临阻碍或困难仍顽固坚持。"
  },
  "continuous": {
    "word": "continuous",
    "zh": "连续的；持续的",
    "translation": "连续的；持续的",
    "cloze": {
      "sentence": "The heart monitor displayed a ______ green line, indicating stable cardiovascular activity.",
      "translation": "心脏监护仪显示出一条连续的绿色线条，表明心血管活动平稳。"
    },
    "form_confusables": [
      {
        "word": "continuous",
        "zh": "连续不断的"
      },
      {
        "word": "continual",
        "zh": "频繁断续的"
      },
      {
        "word": "contiguous",
        "zh": "邻近的；接壤的"
      },
      {
        "word": "contentious",
        "zh": "有争议的；好争吵的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "continuous",
        "zh": "连续不断的 (无间隔/无中断)"
      },
      {
        "word": "uninterrupted",
        "zh": "不受打扰的；未被中断的"
      },
      {
        "word": "non-stop",
        "zh": "直达的；不休止的"
      },
      {
        "word": "constant",
        "zh": "持续的；恒定不变的"
      }
    ],
    "notes": "【搭配考点】continuous assessment 连续性考核/过程性评价；continuous improvement 持续改进；continuous line 连续实线；【形近辨析】continual (时断时续反复发生的), contiguous (接触的/毗邻的), contentious (引起争论的)；【近义辨析】continuous 严格指时间和空间维度上没有任何间断或裂隙；uninterrupted 强调过程没有受到外界干预或打断；non-stop 强调行程或运转中途不停车或不休息；constant 侧重速率和状态保持恒一。"
  },
  "contract": {
    "word": "contract",
    "zh": "合同；收缩",
    "translation": "合同；收缩",
    "cloze": {
      "sentence": "Both parties agreed to sign a legally binding ______ before starting the joint venture.",
      "translation": "双方同意在启动合资企业前签署一份具有法律约束力的合同。"
    },
    "form_confusables": [
      {
        "word": "contract",
        "zh": "合同；收缩"
      },
      {
        "word": "contact",
        "zh": "联系；接触"
      },
      {
        "word": "contrast",
        "zh": "对比；对照"
      },
      {
        "word": "distract",
        "zh": "分散；打扰"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contract",
        "zh": "合同；契约 (受法律强制保护)"
      },
      {
        "word": "agreement",
        "zh": "协议；协定 (广义共识)"
      },
      {
        "word": "pact",
        "zh": "条约；公约 (常用于政治/国际)"
      },
      {
        "word": "covenant",
        "zh": "盟约；严正契约"
      }
    ],
    "notes": "【搭配考点】breach/break a contract 违反合同；sign a binding contract 签署具有约束力的合同；metals contract when cooled 金属受冷收缩；【形近辨析】contact (接触/联络), contrast (对比), distract (转移注意力)；【近义辨析】contract 专指具备法律效力、违约受惩罚的正式商业合同；agreement 泛指任何双方达成的协议或默契；pact 常用于国家间或党派间的政治互不侵犯条约；covenant 带有浓厚历史、宗教或土地法定盟约色彩。"
  },
  "contradiction": {
    "word": "contradiction",
    "zh": "矛盾；抵触",
    "translation": "矛盾；抵触",
    "cloze": {
      "sentence": "There is a glaring ______ between what the government promised and what it actually delivered.",
      "translation": "政府所承诺的与其所实际兑现的之间存在着显而易见的矛盾。"
    },
    "form_confusables": [
      {
        "word": "contradiction",
        "zh": "矛盾；抵触"
      },
      {
        "word": "contribution",
        "zh": "贡献；捐献"
      },
      {
        "word": "constitution",
        "zh": "宪法；体质"
      },
      {
        "word": "contraction",
        "zh": "收缩；缩小"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contradiction",
        "zh": "矛盾；对立 (逻辑上彼此冲突排斥)"
      },
      {
        "word": "paradox",
        "zh": "悖论；自相矛盾的人或事"
      },
      {
        "word": "inconsistency",
        "zh": "不一致；前后矛盾"
      },
      {
        "word": "conflict",
        "zh": "冲突；抵触"
      }
    ],
    "notes": "【搭配考点】in contradiction to/with 与...相抵触；a contradiction in terms 用词自相矛盾；glaring contradiction 显而易见的矛盾；【形近辨析】contribution (贡献), constitution (宪法), contraction (收缩)；【近义辨析】contradiction 强调两件事完全互相对立、无法同时成立的本质逻辑对立；paradox 指表面矛盾但细想含有哲理的悖论；inconsistency 侧重缺乏前后一贯性或细节不吻合；conflict 强调双方利益或观点的正面激烈交锋碰撞。"
  },
  "contribute": {
    "word": "contribute",
    "zh": "贡献；捐助；促成",
    "translation": "贡献；捐助；促成",
    "cloze": {
      "sentence": "Regular exercise and a balanced diet ______ significantly to long-term physical health.",
      "translation": "经常运动和均衡饮食对长期身体健康有着极大的促进作用。"
    },
    "form_confusables": [
      {
        "word": "contribute",
        "zh": "贡献；促成"
      },
      {
        "word": "attribute",
        "zh": "归因于；属性"
      },
      {
        "word": "distribute",
        "zh": "分发；分配"
      },
      {
        "word": "constitute",
        "zh": "构成；设立"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contribute",
        "zh": "促成；贡献 (起到积极推动作用)"
      },
      {
        "word": "donate",
        "zh": "捐献；捐助 (资金/物品)"
      },
      {
        "word": "supply",
        "zh": "供应；供给"
      },
      {
        "word": "provide",
        "zh": "提供；给予"
      }
    ],
    "notes": "【搭配考点】contribute to 促成/导致/有益于；contribute money/time to 为...捐赠金钱/时间；contribute an article 投稿；【形近辨析】attribute (归因于 attribute...to), distribute (分发/散播), constitute (组成/构成)；【近义辨析】contribute 强调作为多种促成因素之一产生共同效果，或出于崇高目的提供资助；donate 专指慈善性质的无偿捐赠；supply 强调定期满足短缺物资的供给；provide 泛指为他人提供所需条件或物品。"
  },
  "contribution": {
    "word": "contribution",
    "zh": "贡献；捐赠",
    "translation": "贡献；捐赠",
    "cloze": {
      "sentence": "The distinguished scientist was awarded the Nobel Prize for his outstanding ______ to physics.",
      "translation": "这位杰出的科学家因其对物理学的卓越贡献而被授予诺贝尔奖。"
    },
    "form_confusables": [
      {
        "word": "contribution",
        "zh": "贡献；捐献"
      },
      {
        "word": "distribution",
        "zh": "分布；分配"
      },
      {
        "word": "attribution",
        "zh": "归因；归属"
      },
      {
        "word": "constitution",
        "zh": "宪法；构成"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contribution",
        "zh": "贡献；奉献；投入"
      },
      {
        "word": "donation",
        "zh": "捐款；捐赠物"
      },
      {
        "word": "offering",
        "zh": "献礼；祭品"
      },
      {
        "word": "input",
        "zh": "投入；输入"
      }
    ],
    "notes": "【搭配考点】make a significant contribution to 对...做出重大贡献；charitable contributions 慈善捐款；pension contributions 养老保险缴费；【形近辨析】distribution (分配/发行), attribution (归属/属性), constitution (宪法/构造)；【近义辨析】contribution 侧重付出智慧、精力或资财产生的长远积极价值；donation 强调纯粹出于善心的款项捐助；offering 带有宗教虔敬或礼品奉送色彩；input 侧重工程或讨论中投入的数据、人力或资源。"
  },
  "control": {
    "word": "control",
    "zh": "控制；支配",
    "translation": "控制；支配",
    "cloze": {
      "sentence": "Central banks implement monetary policies to ______ inflation and stabilize the economy.",
      "translation": "中央银行实施货币政策以控制通货膨胀并稳定经济。"
    },
    "form_confusables": [
      {
        "word": "control",
        "zh": "控制；管理"
      },
      {
        "word": "patrol",
        "zh": "巡逻；巡查"
      },
      {
        "word": "enrol",
        "zh": "注册；招收"
      },
      {
        "word": "scroll",
        "zh": "卷轴；滚动"
      }
    ],
    "semantic_confusables": [
      {
        "word": "control",
        "zh": "控制；操纵 (保持在期望限度内)"
      },
      {
        "word": "regulate",
        "zh": "规范；调节 (依据规章调整)"
      },
      {
        "word": "govern",
        "zh": "统治；支配 (施加政治或规律权威)"
      },
      {
        "word": "command",
        "zh": "指挥；统领 (下达命令)"
      }
    ],
    "notes": "【搭配考点】under control 处于控制之中；lose control of 失去对...的控制；control inflation 控制通胀；beyond one's control 无法控制；【形近辨析】patrol (巡逻), enrol (注册入伍), scroll (电脑滚屏)；【近义辨析】control 强调对事物的走向、力量施加约束并使其完全受制于掌控者；regulate 强调按照规则标准调节使之有序；govern 侧重宏观体制上的治理统治或规律性约束；command 强调上下级军事化权力的指挥号令。"
  },
  "controversial": {
    "word": "controversial",
    "zh": "有争议的；引起争论的",
    "translation": "有争议的；引起争论的",
    "cloze": {
      "sentence": "The mayor's decision to raise local property taxes proved to be highly ______.",
      "translation": "市长提高地方房产税的决定引起了极大争议。"
    },
    "form_confusables": [
      {
        "word": "controversial",
        "zh": "有争议的"
      },
      {
        "word": "conversation",
        "zh": "对话；交谈"
      },
      {
        "word": "convention",
        "zh": "习俗；公约；大会"
      },
      {
        "word": "contradictory",
        "zh": "矛盾的；对立的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "controversial",
        "zh": "引起争议的；争议激烈的"
      },
      {
        "word": "disputed",
        "zh": "受到质疑的；有争议的 (事实/领土)"
      },
      {
        "word": "debatable",
        "zh": "可商榷的；未成定论的"
      },
      {
        "word": "contentious",
        "zh": "容易引起争吵的；好争论的"
      }
    ],
    "notes": "【搭配考点】highly/deeply controversial 极具争议的；controversial issue/policy 争议议题/政策；【形近辨析】conversation (谈话), convention (大会/习俗), contradictory (自相矛盾的)；【近义辨析】controversial 指引发公众截然对立的争论与观点分歧；disputed 强调因所有权或真实性遭到质疑反驳；debatable 强调事情尚无定论、有待商讨；contentious 指极易挑起口角与争执。"
  },
  "convenience": {
    "word": "convenience",
    "zh": "方便；便利；便利设施",
    "translation": "方便；便利；便利设施",
    "cloze": {
      "sentence": "For your ______, customer support representatives are available twenty-four hours a day.",
      "translation": "为方便起见，客户服务代表全天24小时为您服务。"
    },
    "form_confusables": [
      {
        "word": "convenience",
        "zh": "方便；便利设施"
      },
      {
        "word": "conveyance",
        "zh": "运输；转让证书"
      },
      {
        "word": "conscience",
        "zh": "良心；良知"
      },
      {
        "word": "confidence",
        "zh": "信心；信任"
      }
    ],
    "semantic_confusables": [
      {
        "word": "convenience",
        "zh": "方便；便利 (节省力气与时间)"
      },
      {
        "word": "expediency",
        "zh": "权宜之计；方便省事"
      },
      {
        "word": "accessibility",
        "zh": "易接近性；无障碍性"
      },
      {
        "word": "amenity",
        "zh": "便利设施；舒适设施"
      }
    ],
    "notes": "【搭配考点】at your earliest convenience 请在您方便时尽早；for convenience 为了方便起见；convenience store 便利店；modern conveniences 现代便利设施；【形近辨析】conveyance (运输工具/转让证书), conscience (良心), confidence (自信)；【近义辨析】convenience 强调省时省力、安排顺手；expediency 带有功利色彩，指不顾道德原则但行之有效的权宜手段；accessibility 强调易于到达或易于获取使用；amenity 指提供舒适与生活享受的公共设施。"
  },
  "convenient": {
    "word": "convenient",
    "zh": "便利的；方便的",
    "translation": "便利的；方便的",
    "cloze": {
      "sentence": "The apartment is situated in a very ______ location close to subway lines and grocery stores.",
      "translation": "这套公寓地理位置非常便利，临近地铁线和杂货店。"
    },
    "form_confusables": [
      {
        "word": "convenient",
        "zh": "方便的；便利的"
      },
      {
        "word": "conventional",
        "zh": "传统的；常规的"
      },
      {
        "word": "confident",
        "zh": "自信的；确信的"
      },
      {
        "word": "consistent",
        "zh": "一贯的；一致的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "convenient",
        "zh": "便利的；省事的 (在时间地点上适合)"
      },
      {
        "word": "handy",
        "zh": "手头的；灵巧方便的"
      },
      {
        "word": "accessible",
        "zh": "易到达的；可使用的"
      },
      {
        "word": "advantageous",
        "zh": "有利的；有优势的"
      }
    ],
    "notes": "【搭配考点】be convenient for sb 对某人来说方便；a convenient time/place 方便的时间/地点；it is convenient to do 便于做某事；【形近辨析】conventional (传统的/守旧的), confident (有信心的), consistent (前后一致的)；【近义辨析】convenient 强调安排得当、不费周折；handy 侧重手边随手可用或使用轻便小巧；accessible 侧重通道通畅、没有门槛限制；advantageous 侧重带来明显利益或竞争优势。"
  },
  "convention": {
    "word": "convention",
    "zh": "习俗；常规；代表大会；公约",
    "translation": "习俗；常规；代表大会；公约",
    "cloze": {
      "sentence": "Delegates from over fifty nations gathered in Geneva to attend the international ______.",
      "translation": "来自五十多个国家的代表齐聚日内瓦参加国际大会。"
    },
    "form_confusables": [
      {
        "word": "convention",
        "zh": "习俗；大会；公约"
      },
      {
        "word": "conversation",
        "zh": "谈话；对话"
      },
      {
        "word": "conversion",
        "zh": "转换；改变"
      },
      {
        "word": "conviction",
        "zh": "定罪；坚信"
      }
    ],
    "semantic_confusables": [
      {
        "word": "convention",
        "zh": "习俗；公约 (社会惯例或大型正式集会)"
      },
      {
        "word": "custom",
        "zh": "习俗；风俗 (某一民族/地区的传统)"
      },
      {
        "word": "tradition",
        "zh": "传统 (世代相传的思想/做法)"
      },
      {
        "word": "conference",
        "zh": "会议；研讨会 (专门研讨商议)"
      }
    ],
    "notes": "【搭配考点】by convention 按照惯例；defy/break with convention 打破传统惯例；Geneva Convention 日内瓦公约；annual convention 年度大会；【形近辨析】conversation (谈话), conversion (转化/皈依), conviction (定罪/确信)；【近义辨析】convention 侧重社会公认的约定俗成或外交公约、行业大展会；custom 强调某一特定社群的生活风俗；tradition 强调世代沉淀的历史传统；conference 侧重正式学术或商业工作研讨会议。"
  },
  "conventional": {
    "word": "conventional",
    "zh": "传统的；常规的；守旧的",
    "translation": "传统的；常规的；守旧的",
    "cloze": {
      "sentence": "Doctors turned to alternative therapies after ______ medicine failed to cure the chronic illness.",
      "translation": "在传统常规医学未能治愈这种慢性病之后，医生们转向了替代疗法。"
    },
    "form_confusables": [
      {
        "word": "conventional",
        "zh": "传统的；常规的"
      },
      {
        "word": "conversational",
        "zh": "对话的；健谈的"
      },
      {
        "word": "intentional",
        "zh": "故意的；蓄意的"
      },
      {
        "word": "conditional",
        "zh": "有条件的；假定的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conventional",
        "zh": "常规的；传统的 (普遍接受的)"
      },
      {
        "word": "traditional",
        "zh": "传统的 (沿袭历史世代传承的)"
      },
      {
        "word": "orthodox",
        "zh": "正统的；公认的"
      },
      {
        "word": "standard",
        "zh": "标准的；规范的"
      }
    ],
    "notes": "【搭配考点】conventional wisdom 传统观念/普遍看法；conventional weapons 常规武器；conventional medicine 常规医学；【形近辨析】conversational (对话式的), intentional (有意的), conditional (附条件的)；【近义辨析】conventional 强调符合社会多数人接受的现行规矩做法，有时带刻板缺乏创新意味；traditional 强调承接自历史祖辈的文化底蕴；orthodox 侧重宗教、学说理论上的纯正与正统；standard 强调符合严格的技术或质检标准。"
  },
  "conversation": {
    "word": "conversation",
    "zh": "交谈；对话",
    "translation": "交谈；对话",
    "cloze": {
      "sentence": "I had a long and insightful ______ with the professor regarding my research proposal.",
      "translation": "我和教授就我的研究提案进行了一次深入而富有洞见的交谈。"
    },
    "form_confusables": [
      {
        "word": "conversation",
        "zh": "交谈；对话"
      },
      {
        "word": "conservation",
        "zh": "保护；保存"
      },
      {
        "word": "convention",
        "zh": "习俗；大会"
      },
      {
        "word": "conversion",
        "zh": "转变；兑换"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conversation",
        "zh": "交谈；谈话 (日常口头双向交流)"
      },
      {
        "word": "dialogue",
        "zh": "对话 (常用于政治戏剧正式对话)"
      },
      {
        "word": "discussion",
        "zh": "讨论；商讨 (针对特定主题交换意见)"
      },
      {
        "word": "chat",
        "zh": "闲聊；叙旧 (轻松随意的聊天)"
      }
    ],
    "notes": "【搭配考点】have a conversation with 与...交谈；strike up a conversation 搭话/攀谈；in conversation with 正在与...谈话；【形近辨析】conservation (自然环境保护), convention (公约/惯例), conversion (转化/兑换)；【近义辨析】conversation 是最普遍的日常双向语言交流；dialogue 偏向文学作品中的对白或国与国之间的政治谈判对话；discussion 侧重围绕特定论题深入剖析辩论；chat 侧重闲散、轻松的日常碎聊。"
  },
  "conversion": {
    "word": "conversion",
    "zh": "转换；转变；兑换",
    "translation": "转换；转变；兑换",
    "cloze": {
      "sentence": "Solar panels facilitate the direct ______ of sunlight into electrical power.",
      "translation": "太阳能电池板促进了将太阳光直接转换为电能的过程。"
    },
    "form_confusables": [
      {
        "word": "conversion",
        "zh": "转换；改变"
      },
      {
        "word": "conversation",
        "zh": "对话；交谈"
      },
      {
        "word": "conservation",
        "zh": "保护；保存"
      },
      {
        "word": "aversion",
        "zh": "厌恶；反感"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conversion",
        "zh": "形式/用途的转换；货币兑换"
      },
      {
        "word": "transformation",
        "zh": "彻底改头换面；结构巨变"
      },
      {
        "word": "transition",
        "zh": "过渡；转变过程"
      },
      {
        "word": "alteration",
        "zh": "局部修改；微调"
      }
    ],
    "notes": "【搭配考点】conversion rate 转化率/兑换率；currency conversion 货币兑换；conversion to solar energy 转用太阳能；【形近辨析】conversation (谈话), conservation (自然保护), aversion (极度厌恶)；【近义辨析】conversion 强调将某种形态、性质或用途完全变为另一种（如光能转电能、币种兑换或宗教皈依）；transformation 强调外貌、性质或体制发生翻天覆地的彻底重构；transition 侧重从一个阶段平稳移交过渡到下一阶段；alteration 侧重在原有基础上进行局部修正剪裁。"
  },
  "convey": {
    "word": "convey",
    "zh": "传达；表达；运送",
    "translation": "传达；表达；运送",
    "cloze": {
      "sentence": "Words alone cannot adequately ______ the profound gratitude I feel for your selfless help.",
      "translation": "单凭言语无法充分表达我对您无私帮助的深切感激。"
    },
    "form_confusables": [
      {
        "word": "convey",
        "zh": "传达；运送"
      },
      {
        "word": "survey",
        "zh": "调查；测绘"
      },
      {
        "word": "purvey",
        "zh": "供给；推销"
      },
      {
        "word": "convert",
        "zh": "转换；改变"
      }
    ],
    "semantic_confusables": [
      {
        "word": "convey",
        "zh": "传达；传递 (思想/情感/信息)"
      },
      {
        "word": "express",
        "zh": "表达；表露 (思想感受)"
      },
      {
        "word": "communicate",
        "zh": "传达；沟通"
      },
      {
        "word": "transmit",
        "zh": "发射；播送；传递 (信号/疾病)"
      }
    ],
    "notes": "【搭配考点】convey a message/meaning 传达信息/意思；convey one's feelings/gratitude 表达感受/谢意；convey goods 运送货物；【形近辨析】survey (调查/审视), purvey (供应伙食/贩售), convert (转变/皈依)；【近义辨析】convey 侧重把抽象的思想、语气或深层感情间接或含蓄地传达给他人，亦可指物理搬运；express 强调主动把内心情绪或意见清晰陈述出来；communicate 侧重双方的信息通畅互达；transmit 侧重通过无线电、介质机械传递数据、信号或遗传疾病。"
  },
  "convince": {
    "word": "convince",
    "zh": "说服；使确信",
    "translation": "说服；使确信",
    "cloze": {
      "sentence": "The defense attorney presented solid forensic evidence to ______ the jury of the defendant's innocence.",
      "translation": "辩护律师出示了确凿的法医证据，使陪审团确信被告是无辜的。"
    },
    "form_confusables": [
      {
        "word": "convince",
        "zh": "说服；使确信"
      },
      {
        "word": "conceive",
        "zh": "构想；设想；怀孕"
      },
      {
        "word": "consent",
        "zh": "同意；赞许"
      },
      {
        "word": "commence",
        "zh": "开始；着手"
      }
    ],
    "semantic_confusables": [
      {
        "word": "convince",
        "zh": "使确信；使心服口服 (思想观念改变)"
      },
      {
        "word": "persuade",
        "zh": "说服；劝服 (采取实际行动)"
      },
      {
        "word": "assure",
        "zh": "向...保证；使安心"
      },
      {
        "word": "sway",
        "zh": "动摇；使改变立场"
      }
    ],
    "notes": "【搭配考点】convince sb of sth 使某人确信某事；convince sb that 使某人相信...；convince sb to do 劝说某人做某事；【形近辨析】conceive (构思/设想), consent (赞同), commence (开始)；【近义辨析】convince 重在凭借事实或逻辑彻底消除怀疑，使对方在理性思维上“心悦诚服”；persuade 侧重于晓之以理、动之以情，最终目的是推动对方付诸某项“具体行动”；assure 侧重用言语使人消除疑虑安心；sway 侧重通过外界影响动摇对方态度。"
  },
  "cook": {
    "word": "cook",
    "zh": "烹调；厨师",
    "translation": "烹调；厨师",
    "cloze": {
      "sentence": "Chef Marco learned to ______ authentic Italian pasta while apprenticing in Rome.",
      "translation": "马可大厨在罗马当学徒期间学会了烹饪正宗的意大利面。"
    },
    "form_confusables": [
      {
        "word": "cook",
        "zh": "烹调；厨师"
      },
      {
        "word": "book",
        "zh": "书本；预订"
      },
      {
        "word": "look",
        "zh": "看；外观"
      },
      {
        "word": "hook",
        "zh": "钩子；吊钩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cook",
        "zh": "烹饪；烧煮 (日常通用)"
      },
      {
        "word": "bake",
        "zh": "烘烤 (面包糕点等烤箱制作)"
      },
      {
        "word": "roast",
        "zh": "烤；炙 (烤肉/烤坚果)"
      },
      {
        "word": "prepare",
        "zh": "准备；调制 (食物菜肴)"
      }
    ],
    "notes": "【搭配考点】cook a meal 做饭；cook over low heat 低温慢煮；too many cooks spoil the broth 厨多坏汤/人多手杂；【形近辨析】book (书/预定), look (看), hook (挂钩)；【近义辨析】cook 是烹饪加热食物的统称；bake 专指在密闭烤箱中依靠干热烘烤面点；roast 专指在明火或烤箱中高温炙烤肉类、蔬菜；prepare 侧重烹调前的原料加工或冷餐配置。"
  },
  "cool": {
    "word": "cool",
    "zh": "凉爽的；冷静的；使变凉",
    "translation": "凉爽的；冷静的；使变凉",
    "cloze": {
      "sentence": "Take a deep breath and try to keep ______ before answering difficult interview questions.",
      "translation": "在回答有难度的面试问题之前，深呼吸并尽量保持冷静。"
    },
    "form_confusables": [
      {
        "word": "cool",
        "zh": "凉爽的；冷静的"
      },
      {
        "word": "pool",
        "zh": "水池；联营资金"
      },
      {
        "word": "tool",
        "zh": "工具；器具"
      },
      {
        "word": "fool",
        "zh": "傻瓜；愚弄"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cool",
        "zh": "凉爽的；冷静沉着的 (头脑清醒)"
      },
      {
        "word": "calm",
        "zh": "平静的；沉着的 (风平浪静)"
      },
      {
        "word": "chill",
        "zh": "寒冷的；使冰冷"
      },
      {
        "word": "composed",
        "zh": "镇定的；泰然自若的"
      }
    ],
    "notes": "【搭配考点】keep/stay cool 保持冷静；cool down 冷静下来/冷却；a cool reception 冷遇；cool breeze 清凉微风；【形近辨析】pool (水池), tool (工具), fool (愚人)；【近义辨析】cool 指温度适度偏低令人舒适，在心理上强调头脑清醒克制、临危不乱；calm 强调心境平和没有波澜起伏；chill 指冷到令人不适或打哆嗦；composed 强调通过意志力展现出成熟体面的自持。"
  },
  "cooperate": {
    "word": "cooperate",
    "zh": "合作；协作；配合",
    "translation": "合作；协作；配合",
    "cloze": {
      "sentence": "Local law enforcement agencies must ______ with international authorities to combat cybercrime.",
      "translation": "地方执法机构必须与国际主管机构通力合作以打击网络犯罪。"
    },
    "form_confusables": [
      {
        "word": "cooperate",
        "zh": "合作；协作"
      },
      {
        "word": "corporate",
        "zh": "企业的；法人的"
      },
      {
        "word": "operate",
        "zh": "操作；运转；动手术"
      },
      {
        "word": "incorporate",
        "zh": "包含；合并"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cooperate",
        "zh": "合作；配合 (为共同利益携手)"
      },
      {
        "word": "collaborate",
        "zh": "深入协作；共同创作 (科研/艺术联合攻坚)"
      },
      {
        "word": "coordinate",
        "zh": "协调；统筹 (使步调一致)"
      },
      {
        "word": "assist",
        "zh": "协助；辅助"
      }
    ],
    "notes": "【搭配考点】cooperate with sb 与某人合作；cooperate in doing 协作做某事；refuse to cooperate 拒绝配合；【形近辨析】corporate (公司的), operate (操作/手术), incorporate (合并/纳入)；【近义辨析】cooperate 泛指各方为达成互利目标而积极配合行动；collaborate 侧重跨团队或专家在智力、学术或文艺领域的深入联合攻坚；coordinate 侧重调度统筹多方节奏；assist 强调作为副手提供辅助支援。"
  },
  "cooperation": {
    "word": "cooperation",
    "zh": "合作；协作",
    "translation": "合作；协作",
    "cloze": {
      "sentence": "The signing of the cross-border pact marked a new era of economic ______ between the two countries.",
      "translation": "跨境协议的签署标志着两国经济合作进入了一个新纪元。"
    },
    "form_confusables": [
      {
        "word": "cooperation",
        "zh": "合作；协作"
      },
      {
        "word": "corporation",
        "zh": "公司；企业法人"
      },
      {
        "word": "operation",
        "zh": "操作；手术；运转"
      },
      {
        "word": "consideration",
        "zh": "考虑；体贴"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cooperation",
        "zh": "合作；配合 (携手互利)"
      },
      {
        "word": "collaboration",
        "zh": "深入协作；共同研制"
      },
      {
        "word": "coordination",
        "zh": "协调；统筹"
      },
      {
        "word": "alliance",
        "zh": "同盟；联盟"
      }
    ],
    "notes": "【搭配考点】in cooperation with 与...合作；international cooperation 国际合作；close cooperation 紧密协作；【形近辨析】corporation (跨国大公司), operation (运转/手术), consideration (审慎考虑)；【近义辨析】cooperation 强调各方愿意共享资源、互助配合；collaboration 强调高技术含量团队的合著合研；coordination 强调消除内耗、协调步调与分配工序；alliance 强调基于共同防务或战略利益订立的正式同盟关系。"
  },
  "cope": {
    "word": "cope",
    "zh": "应付；处理",
    "translation": "应付；处理",
    "cloze": {
      "sentence": "Hospitals struggled to ______ with the overwhelming influx of patients during the flu outbreak.",
      "translation": "在流感爆发期间，医院难以应对汹涌涌入的病患。"
    },
    "form_confusables": [
      {
        "word": "cope",
        "zh": "应付；处理"
      },
      {
        "word": "hope",
        "zh": "希望；期盼"
      },
      {
        "word": "rope",
        "zh": "绳索"
      },
      {
        "word": "core",
        "zh": "核心；果核"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cope",
        "zh": "应付；应对 (在困难负荷下抗压支撑)"
      },
      {
        "word": "handle",
        "zh": "处理；应对 (具体事务的经办掌管)"
      },
      {
        "word": "tackle",
        "zh": "主动解决；攻克难关"
      },
      {
        "word": "withstand",
        "zh": "经受；顶住 (承受外部巨大冲击)"
      }
    ],
    "notes": "【搭配考点】cope with 应对/应付 (困难、压力、负荷)；cope effectively 有效应对；unable to cope 无法承受应对；【形近辨析】hope (希望), rope (绳索), core (果核/核心)；【近义辨析】cope 必须与 with 连用，强调在面临巨大压力、困难或逆境时竭力抵挡或保持运转；handle 强调日常事物有条不紊的处理或掌管；tackle 强调毫不畏惧地着手直面重大棘手问题；withstand 侧重顶住强烈的外部冲击或恶劣条件而不被压垮。"
  },
  "copy": {
    "word": "copy",
    "zh": "复制；副本",
    "translation": "复制；副本",
    "cloze": {
      "sentence": "Please keep a printed ______ of your signed contract for personal reference.",
      "translation": "请保留一份已签署合同的打印复印件以供个人查阅。"
    },
    "form_confusables": [
      {
        "word": "copy",
        "zh": "复制；副本"
      },
      {
        "word": "coop",
        "zh": "鸡笼；拘禁"
      },
      {
        "word": "cope",
        "zh": "应付；处理"
      },
      {
        "word": "cozy",
        "zh": "舒适温暖的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "copy",
        "zh": "副本；复印件 (泛指复制品)"
      },
      {
        "word": "replica",
        "zh": "复制品；模型 (艺术品/文物一比一高仿)"
      },
      {
        "word": "duplicate",
        "zh": "完全相同的副本 (具有同等法律效力)"
      },
      {
        "word": "imitation",
        "zh": "仿制品；仿冒品"
      }
    ],
    "notes": "【搭配考点】make a copy of 制作...的复印件；hard copy 纸质打印版；certified copy 公证认证的副本；【形近辨析】coop (鸡棚), cope (应付), cozy (温馨舒适的)；【近义辨析】copy 为泛称，指文本、图纸或数据的任何复制品；duplicate 指一模一样、具有完全同等法律效力的双份正本之一；replica 特指对古董、名画、船模等进行严格按比例的原物复刻；imitation 侧重仿照名牌或贵重材料制作的廉价仿品。"
  },
  "core": {
    "word": "core",
    "zh": "核心；要点",
    "translation": "核心；要点",
    "cloze": {
      "sentence": "Critical thinking and analytical reasoning form the ______ of the university curriculum.",
      "translation": "批判性思维和分析推理构成了该大学课程体系的核心。"
    },
    "form_confusables": [
      {
        "word": "core",
        "zh": "核心；要点"
      },
      {
        "word": "cord",
        "zh": "绳索；软线"
      },
      {
        "word": "cork",
        "zh": "软木塞"
      },
      {
        "word": "corn",
        "zh": "玉米；谷物"
      }
    ],
    "semantic_confusables": [
      {
        "word": "core",
        "zh": "核心；精髓 (最本质关键的中枢部分)"
      },
      {
        "word": "heart",
        "zh": "心脏；核心中枢 (最具生机活力处)"
      },
      {
        "word": "nucleus",
        "zh": "原子核；发展核心 (凝聚扩展的微小核心)"
      },
      {
        "word": "essence",
        "zh": "本质；实质"
      }
    ],
    "notes": "【搭配考点】core values 核心价值观；at the core of 在...的核心；core competence 核心竞争力；core subject 必修核心科目；【形近辨析】cord (电线/绳索), cork (软木塞), corn (谷物)；【近义辨析】core 强调结构或体系中最内部、最关键且起支撑作用的部分；heart 形象地指最具活力和灵魂的所在；nucleus 强调作为细胞核、引发周围凝聚扩展的中心微粒；essence 强调抽象事物最根本、最纯粹的本质属性。"
  },
  "corner": {
    "word": "corner",
    "zh": "角落；街角",
    "translation": "角落；街角",
    "cloze": {
      "sentence": "A cozy bakery is conveniently located on the ______ of Fifth Avenue and Main Street.",
      "translation": "一家温馨的面包店正好坐落在第五大道和主街交汇的街角处。"
    },
    "form_confusables": [
      {
        "word": "corner",
        "zh": "角落；街角"
      },
      {
        "word": "coronet",
        "zh": "小冠冕；花冠"
      },
      {
        "word": "cornet",
        "zh": "短号铜管乐器"
      },
      {
        "word": "coroner",
        "zh": "验尸官"
      }
    ],
    "semantic_confusables": [
      {
        "word": "corner",
        "zh": "拐角；角落 (两线相交的角)"
      },
      {
        "word": "angle",
        "zh": "角度；视角 (几何度数或切入点)"
      },
      {
        "word": "nook",
        "zh": "僻静隐蔽的角落"
      },
      {
        "word": "intersection",
        "zh": "十字路口；交叉口"
      }
    ],
    "notes": "【搭配考点】round/around the corner 就在拐角处/即将到来；in the corner 在室内角落；on the corner 在街道拐角处；corner the market 垄断市场；【形近辨析】coronet (王冠/小冕), cornet (短号铜管乐器), coroner (验尸法医)；【近义辨析】corner 强调两面墙壁或街道交汇处形成的尖角或区域；angle 指数学几何的角度或思考审视问题的切入视角；nook 强调小巧温暖、安全幽静的偏僻角落；intersection 专指多条道路平交相汇的整个路口。"
  },
  "corporate": {
    "word": "corporate",
    "zh": "公司的；法人的",
    "translation": "公司的；法人的",
    "cloze": {
      "sentence": "The board announced a comprehensive review of the company's ______ governance policies.",
      "translation": "董事会宣布对公司的法人治理政策进行全面审查。"
    },
    "form_confusables": [
      {
        "word": "corporate",
        "zh": "公司的；法人的"
      },
      {
        "word": "cooperate",
        "zh": "合作；协作"
      },
      {
        "word": "incorporate",
        "zh": "包含；吸收"
      },
      {
        "word": "liberate",
        "zh": "解放；释放"
      }
    ],
    "semantic_confusables": [
      {
        "word": "corporate",
        "zh": "公司的；大企业的 (法人实体的)"
      },
      {
        "word": "commercial",
        "zh": "商业的；营利的 (以盈利为目的)"
      },
      {
        "word": "business",
        "zh": "商务的；业务的 (日常商业经营)"
      },
      {
        "word": "enterprise",
        "zh": "事业；创业公司 (进取型工商企业)"
      }
    ],
    "notes": "【搭配考点】corporate culture 企业文化；corporate governance 公司治理；corporate social responsibility (CSR) 企业社会责任；corporate tax 企业所得税；【形近辨析】cooperate (协作配合), incorporate (吸收合并), liberate (解放)；【近义辨析】corporate 侧重现代大型股份制公司、法人实体所具有的属性或整体行为；commercial 侧重商品交易、广告市场推广和追求利润；business 侧重日常经营买卖事务；enterprise 侧重具有开拓创新精神的企业或大型事业。"
  },
  "corporation": {
    "word": "corporation",
    "zh": "公司；企业法人；集团",
    "translation": "公司；企业法人；集团",
    "cloze": {
      "sentence": "The multinational ______ employs over fifty thousand workers across five continents.",
      "translation": "这家跨国集团在五大洲拥有超过五万名员工。"
    },
    "form_confusables": [
      {
        "word": "corporation",
        "zh": "公司；企业法人"
      },
      {
        "word": "cooperation",
        "zh": "合作；协作"
      },
      {
        "word": "operation",
        "zh": "操作；经营；手术"
      },
      {
        "word": "incorporation",
        "zh": "成立公司；合并"
      }
    ],
    "semantic_confusables": [
      {
        "word": "corporation",
        "zh": "集团；特大公司 (经法定注册的独立法人)"
      },
      {
        "word": "company",
        "zh": "公司 (最广泛泛称)"
      },
      {
        "word": "firm",
        "zh": "商行；事务所 (合伙制专业服务机构)"
      },
      {
        "word": "enterprise",
        "zh": "企业；企事业单位"
      }
    ],
    "notes": "【搭配考点】multinational corporation 跨国公司；public corporation 上市公营公司；corporation tax 公司所得税；【形近辨析】cooperation (合作), operation (手术/运转), incorporation (公司注册成立)；【近义辨析】corporation 通常指规模庞大、组织严密且经法律特许注册的股份制集团大公司；company 是最普遍适用的商业公司通用词；firm 多指合伙人制经营的中小型专业服务公司（如法律或咨询事务所）；enterprise 强调具有风险探索性的企业单位。"
  },
  "correct": {
    "word": "correct",
    "zh": "正确的；恰当的；改正",
    "translation": "正确的；恰当的；改正",
    "cloze": {
      "sentence": "Please verify that you have entered the ______ password before attempting to log in again.",
      "translation": "在尝试重新登录之前，请确认您已输入了正确的密码。"
    },
    "form_confusables": [
      {
        "word": "correct",
        "zh": "正确的；改正"
      },
      {
        "word": "collect",
        "zh": "收集；收取"
      },
      {
        "word": "connect",
        "zh": "连接；结合"
      },
      {
        "word": "convict",
        "zh": "定罪；囚犯"
      }
    ],
    "semantic_confusables": [
      {
        "word": "correct",
        "zh": "正确的 (毫无差错且符合事实标准)"
      },
      {
        "word": "accurate",
        "zh": "精准的；精确的 (数据测量极少误差)"
      },
      {
        "word": "exact",
        "zh": "严密的；确切的 (分毫不差)"
      },
      {
        "word": "right",
        "zh": "对的；合适的 (通用日常词，兼含道义正当)"
      }
    ],
    "notes": "【搭配考点】correct answer/procedure 正确答案/正规程序；correct mistakes 纠正错误；politically correct 政治正确的；【形近辨析】collect (收集), connect (连接), convict (定罪/罪犯)；【近义辨析】correct 强调完全符合客观事实、规范或逻辑，没有谬误；accurate 侧重数据、测量、信息极具精准度、公差极小；exact 强调每个细节毫厘不差、完全吻合；right 日常最通俗，不仅指无误，更常包含道德上的公正合理。"
  },
  "correction": {
    "word": "correction",
    "zh": "改正；纠正；修正",
    "translation": "改正；纠正；修正",
    "cloze": {
      "sentence": "The financial newspaper published an immediate ______ after printing inaccurate revenue figures.",
      "translation": "该财经报纸在登载了不准确的营收数据后立即发表了更正声明。"
    },
    "form_confusables": [
      {
        "word": "correction",
        "zh": "改正；修正"
      },
      {
        "word": "collection",
        "zh": "收集；收藏品"
      },
      {
        "word": "connection",
        "zh": "连接；联系"
      },
      {
        "word": "conviction",
        "zh": "定罪；深信"
      }
    ],
    "semantic_confusables": [
      {
        "word": "correction",
        "zh": "纠正；修正 (指出并消灭错误)"
      },
      {
        "word": "amendment",
        "zh": "修正案；修订条款 (法律正式修改)"
      },
      {
        "word": "revision",
        "zh": "复核修订；修订版"
      },
      {
        "word": "adjustment",
        "zh": "调节；微调"
      }
    ],
    "notes": "【搭配考点】make a correction 做出修正；market correction 市场回调；correction fluid 涂改液；undergo correction 接受纠正；【形近辨析】collection (收藏/募集), connection (网络连接), conviction (深信/判罪)；【近义辨析】correction 侧重改掉错误使之回到正确状态，或金融市场的技术性回调；amendment 专指法案、章程条文的正式修改补充；revision 侧重全面复查并重写更新文稿；adjustment 强调微幅调整参数以达到平衡适应。"
  },
  "correspond": {
    "word": "correspond",
    "zh": "相符；一致；通信",
    "translation": "相符；一致；通信",
    "cloze": {
      "sentence": "The suspect's actual fingerprints did not ______ with those found on the weapon.",
      "translation": "嫌疑人真实的指纹与凶器上提取到的指纹并不相符。"
    },
    "form_confusables": [
      {
        "word": "correspond",
        "zh": "符合；通信"
      },
      {
        "word": "respond",
        "zh": "回答；响应"
      },
      {
        "word": "despond",
        "zh": "丧气；泄气"
      },
      {
        "word": "correlate",
        "zh": "关联；互相关联"
      }
    ],
    "semantic_confusables": [
      {
        "word": "correspond",
        "zh": "相符；相当；通书信 (在特征数量上对齐)"
      },
      {
        "word": "match",
        "zh": "匹配；相称 (外观或属性一致协调)"
      },
      {
        "word": "tally",
        "zh": "吻合；相符 (数据账目核对一致)"
      },
      {
        "word": "coincide",
        "zh": "巧合相遇；完全一致"
      }
    ],
    "notes": "【搭配考点】correspond with sb 与某人通信；correspond to/with 与...相符合/对应；correspond in size/shape 尺寸/形状相仿；【形近辨析】respond (回答/反应), despond (沮丧心灰), correlate (相互关联)；【近义辨析】correspond 强调两件事物在性质、结构或功能上彼此对齐吻合，或指长期的双向书信往来；match 侧重两样东西在色彩、样式或能力上匹配般配；tally 特指两份数字、账目或清单核对后分毫不差；coincide 强调时间上的巧合重叠或意见完全一致。"
  },
  "correspondent": {
    "word": "correspondent",
    "zh": "通讯员；记者；通信者",
    "translation": "通讯员；记者；通信者",
    "cloze": {
      "sentence": "The network sent its senior war ______ to report live from the front lines of the conflict.",
      "translation": "该电视网络派出资深战地记者从冲突前线进行现场直播报道。"
    },
    "form_confusables": [
      {
        "word": "correspondent",
        "zh": "记者；通讯员"
      },
      {
        "word": "correspondence",
        "zh": "通信；一致"
      },
      {
        "word": "respondent",
        "zh": "受访者；被告"
      },
      {
        "word": "descendant",
        "zh": "后代；子孙"
      }
    ],
    "semantic_confusables": [
      {
        "word": "correspondent",
        "zh": "特派记者；驻外通讯员"
      },
      {
        "word": "reporter",
        "zh": "现场记者；新闻采写员"
      },
      {
        "word": "journalist",
        "zh": "新闻工作者 (泛指新闻采编人员)"
      },
      {
        "word": "columnist",
        "zh": "专栏作家"
      }
    ],
    "notes": "【搭配考点】foreign/war correspondent 驻外/战地记者；special correspondent 特约通讯员；correspondent bank 代理行；【形近辨析】correspondence (书信往来), respondent (调查问卷回答者/诉讼被告), descendant (后裔)；【近义辨析】correspondent 专指长驻某地或专门负责某一垂直领域（如财经、战地、外交）的特派高级记者；reporter 泛指奔波在新闻一线采访跑腿的记者；journalist 范围最广，指从事新闻采编、评论的知识分子新闻人；columnist 专指定期撰写个人评论专栏的特约作者。"
  },
  "corridor": {
    "word": "corridor",
    "zh": "走廊；通道",
    "translation": "走廊；通道",
    "cloze": {
      "sentence": "Nurses rushed down the brightly lit hospital ______ pushing an emergency stretcher.",
      "translation": "护士们推着急救担架快速穿过灯火通明的医院走廊。"
    },
    "form_confusables": [
      {
        "word": "corridor",
        "zh": "走廊；过道"
      },
      {
        "word": "spectator",
        "zh": "观众；旁观者"
      },
      {
        "word": "radiator",
        "zh": "散热器；暖气片"
      },
      {
        "word": "escalator",
        "zh": "自动扶梯"
      }
    ],
    "semantic_confusables": [
      {
        "word": "corridor",
        "zh": "走廊；通道 (建筑内部两旁有房间的长廊)"
      },
      {
        "word": "hallway",
        "zh": "门厅；过道走廊"
      },
      {
        "word": "aisle",
        "zh": "通道；过道 (排椅货架之间)"
      },
      {
        "word": "passage",
        "zh": "通道；走廊；通路"
      }
    ],
    "notes": "【搭配考点】humanitarian corridor 人道主义走廊；economic corridor 经济走廊；along the corridor 沿着走廊；walk down the corridor 穿过走廊；【形近辨析】spectator (现场观众), radiator (暖气散热片), escalator (自动滚梯)；【近义辨析】corridor 专指建筑内部两侧连接各个房间的狭长通道，亦引申为地缘政治中的交通狭长地带；hallway 美语常用，兼指入户门厅或连接居室的走廊；aisle 专指飞机、火车、教堂排椅或超市货架之间的过道；passage 泛指任何穿行通道、地道或书面文章段落。"
  },
  "corrupt": {
    "word": "corrupt",
    "zh": "腐败的；贪污的；堕落的",
    "translation": "腐败的；贪污的；堕落的",
    "cloze": {
      "sentence": "Investigative journalists exposed the ______ government officials who accepted multimillion-dollar bribes.",
      "translation": "调查记者揭露了那些收受数百万美元贿赂的腐败政府官员。"
    },
    "form_confusables": [
      {
        "word": "corrupt",
        "zh": "腐败的；贪污的"
      },
      {
        "word": "correct",
        "zh": "正确的；改正"
      },
      {
        "word": "abrupt",
        "zh": "突然的；唐突的"
      },
      {
        "word": "bankrupt",
        "zh": "破产的；枯竭的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "corrupt",
        "zh": "贪腐的；堕落变质的 (滥权受贿)"
      },
      {
        "word": "dishonest",
        "zh": "不诚实的；欺骗的"
      },
      {
        "word": "fraudulent",
        "zh": "欺诈性的；不老实的"
      },
      {
        "word": "venal",
        "zh": "唯利是图的；贪赃枉法的"
      }
    ],
    "notes": "【搭配考点】corrupt officials 腐败官员；corrupt practices 腐败行为/舞弊；corrupt the youth 腐蚀年轻人；corrupted data 损坏的数据；【形近辨析】correct (正确的), abrupt (突然粗鲁的), bankrupt (破产的)；【近义辨析】corrupt 强调职权滥用、受贿或纯洁性彻底丧失堕落，电脑中指文件数据毁损；dishonest 泛指言行不诚实、爱说谎；fraudulent 侧重在商业和法律上实施诈骗手段；venal 专指利欲熏心、给钱就卖官鬻爵的贪腐恶行。"
  },
  "corruption": {
    "word": "corruption",
    "zh": "腐败；贪污",
    "translation": "腐败；贪污",
    "cloze": {
      "sentence": "The newly formed independent commission was mandated to root out political ______.",
      "translation": "新成立的独立委员会被授权彻底铲除政治腐败。"
    },
    "form_confusables": [
      {
        "word": "corruption",
        "zh": "腐败；贪污"
      },
      {
        "word": "eruption",
        "zh": "爆发；喷发"
      },
      {
        "word": "disruption",
        "zh": "中断；扰乱"
      },
      {
        "word": "interruption",
        "zh": "打断；插话"
      }
    ],
    "semantic_confusables": [
      {
        "word": "corruption",
        "zh": "腐败；贪腐 (公职滥用/道德堕落)"
      },
      {
        "word": "bribery",
        "zh": "行贿受贿；贿赂"
      },
      {
        "word": "graft",
        "zh": "贪污受贿；利用公职牟利"
      },
      {
        "word": "misconduct",
        "zh": "不当行为；渎职"
      }
    ],
    "notes": "【搭配考点】fight/stamp out corruption 打击/铲除腐败；widespread corruption 普遍腐败；anti-corruption campaign 反腐败运动；【形近辨析】eruption (火山喷发/爆发), disruption (混乱/中断), interruption (打扰/暂停)；【近义辨析】corruption 侧重体制、道德或官员整体的腐化堕落和违法乱纪；bribery 特指以金钱行贿受贿的具体犯罪；graft 专指利用政治权力和公款非法捞取私利；misconduct 指违背职业道德或法规的滥用职权行为。"
  },
  "cost": {
    "word": "cost",
    "zh": "成本；花费；代价",
    "translation": "成本；花费；代价",
    "cloze": {
      "sentence": "Rising raw material prices will inevitably increase the total ______ of production.",
      "translation": "原材料价格上涨将不可避免地增加总生产成本。"
    },
    "form_confusables": [
      {
        "word": "cost",
        "zh": "成本；花费"
      },
      {
        "word": "host",
        "zh": "东道主；主持"
      },
      {
        "word": "post",
        "zh": "岗位；张贴；邮政"
      },
      {
        "word": "most",
        "zh": "最多；大多数"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cost",
        "zh": "成本；花费 (资源代价)"
      },
      {
        "word": "price",
        "zh": "价格；标价"
      },
      {
        "word": "expense",
        "zh": "开销；已付费用"
      },
      {
        "word": "expenditure",
        "zh": "支出；总花费"
      }
    ],
    "notes": "【搭配考点】at all costs 不惜任何代价；living costs 生活成本；production costs 生产成本；cost a fortune 价值不菲/耗费巨资；【形近辨析】host (东道主), post (职位/张贴), most (最多)；【近义辨析】cost 强调制造产品或完成事业所耗费的资源、金钱或沉痛代价；price 专指买家需要支付的商品购买价格；expense 侧重日常经营报销或生活产生的实际花销；expenditure 偏正式，指政府或大机构的财政预算总支出。"
  },
  "cotton": {
    "word": "cotton",
    "zh": "棉花；棉布",
    "translation": "棉花；棉布",
    "cloze": {
      "sentence": "Breathable clothing made from pure ______ is ideal for hot and humid summer climates.",
      "translation": "纯棉制成的透气服装非常适合炎热潮湿的夏季气候。"
    },
    "form_confusables": [
      {
        "word": "cotton",
        "zh": "棉花；棉布"
      },
      {
        "word": "button",
        "zh": "纽扣；按钮"
      },
      {
        "word": "mutton",
        "zh": "羊肉"
      },
      {
        "word": "bottom",
        "zh": "底部；末尾"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cotton",
        "zh": "棉花；棉布"
      },
      {
        "word": "wool",
        "zh": "羊毛；毛织品"
      },
      {
        "word": "linen",
        "zh": "亚麻布；亚麻织物"
      },
      {
        "word": "silk",
        "zh": "丝绸；蚕丝"
      }
    ],
    "notes": "【搭配考点】pure cotton 纯棉；cotton spinning/mill 纺棉/棉纺厂；cotton on to 渐渐明白/发觉；【形近辨析】button (纽扣), mutton (羊肉), bottom (底部)；【近义辨析】cotton 专指锦葵科棉属植物纤维或棉布；wool 指绵羊等动物的毛织物；linen 专指由亚麻植物韧皮纤维纺制而成的吸汗凉爽面料；silk 特指蚕丝纺织而成的高光泽轻柔面料。"
  },
  "couch": {
    "word": "couch",
    "zh": "沙发；表达",
    "translation": "沙发；表达",
    "cloze": {
      "sentence": "The exhausted traveler collapsed onto the comfortable living room ______ and fell asleep instantly.",
      "translation": "疲惫不堪的旅客倒在舒适的客厅沙发上，瞬间睡着了。"
    },
    "form_confusables": [
      {
        "word": "couch",
        "zh": "沙发；表达"
      },
      {
        "word": "coach",
        "zh": "教练；长途车"
      },
      {
        "word": "pouch",
        "zh": "小袋；育儿袋"
      },
      {
        "word": "crouch",
        "zh": "蹲下；蜷缩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "couch",
        "zh": "长沙发；睡椅 (供坐卧休息)"
      },
      {
        "word": "sofa",
        "zh": "沙发 (通用软垫长椅)"
      },
      {
        "word": "settee",
        "zh": "中型沙发 (木框靠垫椅)"
      },
      {
        "word": "divan",
        "zh": "矮长沙发 (无扶手靠背矮榻)"
      }
    ],
    "notes": "【搭配考点】couch potato 终日泡在电视前的懒汉；couch in diplomatic terms 用外交辞令措辞表达；lie on the couch 躺在沙发上；【形近辨析】coach (长途客车/教练), pouch (皮袋/育儿袋), crouch (蹲伏蜷缩)；【近义辨析】couch 强调供坐卧休息的舒适长沙发，医学上特指心理诊所的诊疗卧榻；sofa 是最常用的软包沙发泛称；settee 指尺寸适中的双人或三人木质框架沙发；divan 指贴墙摆放、无靠背扶手的矮床垫沙发。"
  },
  "cough": {
    "word": "cough",
    "zh": "咳嗽",
    "translation": "咳嗽",
    "cloze": {
      "sentence": "Dry winter air and sudden drafts can trigger a persistent, irritating ______.",
      "translation": "干燥的冬季空气和突如其来的穿堂风会引发持续刺激的咳嗽。"
    },
    "form_confusables": [
      {
        "word": "cough",
        "zh": "咳嗽"
      },
      {
        "word": "rough",
        "zh": "粗糙的；狂暴的"
      },
      {
        "word": "tough",
        "zh": "坚韧的；棘手的"
      },
      {
        "word": "dough",
        "zh": "生面团"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cough",
        "zh": "咳嗽 (呼吸道反射喷气)"
      },
      {
        "word": "sneeze",
        "zh": "打喷嚏 (鼻腔刺激喷气)"
      },
      {
        "word": "wheeze",
        "zh": "喘息；哮鸣 (呼吸有杂音)"
      },
      {
        "word": "choke",
        "zh": "窒息；哽噎 (气道受阻)"
      }
    ],
    "notes": "【搭配考点】cough up 咳出/被迫掏出钱财；persistent/hacking cough 顽固的/剧烈的咳嗽；cough mixture/syrup 止咳糖浆；【形近辨析】rough (粗糙的), tough (坚韧棘手的), dough (生面团)；【近义辨析】cough 指由于咽喉肺部受刺激引起的反射性气流冲出；sneeze 是因鼻粘膜受刺激引起的鼻腔喷气；wheeze 强调因哮喘等引起的气道狭窄哮鸣音；choke 强调异物堵塞或液体呛入导致呼吸完全受阻。"
  },
  "could": {
    "word": "could",
    "zh": "能；可能",
    "translation": "能；可能",
    "cloze": {
      "sentence": "In retrospect, we ______ have handled the sensitive situation with far greater diplomacy.",
      "translation": "回想起来，我们本可以用更具外交智慧的方式来处理这一敏感局势。"
    },
    "form_confusables": [
      {
        "word": "could",
        "zh": "能；可能"
      },
      {
        "word": "would",
        "zh": "将要；愿意"
      },
      {
        "word": "should",
        "zh": "应当；应该"
      },
      {
        "word": "cold",
        "zh": "寒冷的；感冒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "could",
        "zh": "本可以；可能 (过去能力或虚拟假设)"
      },
      {
        "word": "might",
        "zh": "或许；可能 (较低可能性推测)"
      },
      {
        "word": "may",
        "zh": "可以；可能 (许可或可能性)"
      },
      {
        "word": "would",
        "zh": "愿意；大概会 (虚拟结果/意愿)"
      }
    ],
    "notes": "【搭配考点】could have done 本可以做却未做 (虚拟语气)；could not agree more 完全赞同；as fast as one could 竭尽全力；【形近辨析】would (意愿/过去将来), should (理应/义务), cold (寒冷的)；【近义辨析】could 表过去具备的能力，或在虚拟语气中表示本具备可能性；might 表达把握更小的温和推测；may 表达现实客观可能或正式请求许可；would 侧重主体主观意向或在虚拟主句中陈述假设后果。"
  },
  "council": {
    "word": "council",
    "zh": "理事会；委员会；议会",
    "translation": "理事会；委员会；议会",
    "cloze": {
      "sentence": "The local city ______ approved the zoning plan to build a new public park downtown.",
      "translation": "当地市议会批准了在市中心兴建一座新公园的规划方案。"
    },
    "form_confusables": [
      {
        "word": "council",
        "zh": "理事会；市议会"
      },
      {
        "word": "counsel",
        "zh": "忠告；法律顾问"
      },
      {
        "word": "consul",
        "zh": "领事 (外交官)"
      },
      {
        "word": "cancel",
        "zh": "取消；撤销"
      }
    ],
    "semantic_confusables": [
      {
        "word": "council",
        "zh": "市议会；理事会 (行政审议团体)"
      },
      {
        "word": "committee",
        "zh": "委员会 (专项事务工作小组)"
      },
      {
        "word": "board",
        "zh": "董事会；理事会 (高层治理机构)"
      },
      {
        "word": "commission",
        "zh": "独立委员会；特派团"
      }
    ],
    "notes": "【搭配考点】city/town council 市/镇政委员会；Security Council 安全理事会；councillor 市议员；student council 学生会；【形近辨析】counsel (法律顾问/劝告), consul (领事), cancel (作废/取消)；【近义辨析】council 指经过选举或由法定代表组成的地方立法行政或咨询最高代表团体；committee 侧重大机构下属负责某一专题审核的小型专门小组；board 特指法人治理中的董事会或管理委员会；commission 侧重国家授权处理特定任务的专门独立调查或监管机构。"
  },
  "counsel": {
    "word": "counsel",
    "zh": "劝告；忠告；法律顾问",
    "translation": "劝告；忠告；法律顾问",
    "cloze": {
      "sentence": "During moments of severe crisis, leaders often seek the wise ______ of experienced elders.",
      "translation": "在严峻危机时刻，领导人往往寻求经验丰富的长者的明智劝告。"
    },
    "form_confusables": [
      {
        "word": "counsel",
        "zh": "劝告；法律顾问"
      },
      {
        "word": "council",
        "zh": "理事会；议会"
      },
      {
        "word": "causal",
        "zh": "因果关系的"
      },
      {
        "word": "conceal",
        "zh": "隐藏；隐瞒"
      }
    ],
    "semantic_confusables": [
      {
        "word": "counsel",
        "zh": "忠告；辅导；法律顾问 (深度指导)"
      },
      {
        "word": "advice",
        "zh": "建议；劝告 (日常意见)"
      },
      {
        "word": "guidance",
        "zh": "指引；指导 (路线方向启发)"
      },
      {
        "word": "consultation",
        "zh": "咨询；商讨"
      }
    ],
    "notes": "【搭配考点】seek/take counsel 寻求/采纳忠告；keep one's own counsel 保持沉默/不露声色；defense counsel 辩护律师；counseling session 心理辅导课程；【形近辨析】council (市议会/政务会), causal (因果的), conceal (遮盖掩饰)；【近义辨析】counsel 语气比 advice 更庄重，多指长者、智者或专业律师/心理学家针对重大问题给出的深刻引导；advice 是日常通用词；guidance 侧重长期的路线指引和启发；consultation 强调双方坐下来深入诊断商榷的流程。"
  },
  "count": {
    "word": "count",
    "zh": "计算；起决定作用；伯爵",
    "translation": "计算；起决定作用；伯爵",
    "cloze": {
      "sentence": "When evaluating long-term business performance, it is the bottom line results that really ______.",
      "translation": "在评估长期商业业绩时，真正重要的是最终的净利润结果。"
    },
    "form_confusables": [
      {
        "word": "count",
        "zh": "计算；重要；伯爵"
      },
      {
        "word": "mount",
        "zh": "登上；山峰；底座"
      },
      {
        "word": "court",
        "zh": "法庭；球场"
      },
      {
        "word": "account",
        "zh": "账户；描述"
      }
    ],
    "semantic_confusables": [
      {
        "word": "count",
        "zh": "重要；起决定作用 (算数/有分量)"
      },
      {
        "word": "matter",
        "zh": "要紧；有重大影响"
      },
      {
        "word": "signify",
        "zh": "预示；具有重要性"
      },
      {
        "word": "calculate",
        "zh": "计算；核算"
      }
    ],
    "notes": "【搭配考点】every second counts 分秒必争；count on sb 指望/依靠某人；count towards 算入/计入；keep count of 记录...的数目；【形近辨析】mount (爬上/安装底座), court (法院/球场), account (账目/叙述)；【近义辨析】count 作不及物动词表“有价值/重要”时侧重被纳入考量、具备分量；matter 泛指某事是否紧要、是否引起关注；signify 侧重具有某种深远含义或象征意义；calculate 专指数字或风险的推导运算。"
  },
  "counter": {
    "word": "counter",
    "zh": "柜台；反驳；抵消",
    "translation": "柜台；反驳；抵消",
    "cloze": {
      "sentence": "The tech giant launched a bold marketing campaign to ______ aggressive competition from overseas rivals.",
      "translation": "这家科技巨头展开了大胆的营销攻势，以抵消来自海外对手的激进竞争。"
    },
    "form_confusables": [
      {
        "word": "counter",
        "zh": "柜台；反击"
      },
      {
        "word": "country",
        "zh": "国家；乡村"
      },
      {
        "word": "county",
        "zh": "县；郡"
      },
      {
        "word": "encounter",
        "zh": "偶遇；遭遇"
      }
    ],
    "semantic_confusables": [
      {
        "word": "counter",
        "zh": "对抗；反驳；抵消 (针锋相对反制)"
      },
      {
        "word": "oppose",
        "zh": "反对；对抗 (持对立立场)"
      },
      {
        "word": "resist",
        "zh": "抵抗；抵制 (抗拒外部压力)"
      },
      {
        "word": "neutralize",
        "zh": "使无效；抵消 (中和冲击)"
      }
    ],
    "notes": "【搭配考点】counter an argument/threat 驳斥论点/抵御威胁；under the counter 台面下/秘密交易；over the counter (OTC) 柜台交易/非处方药；checkout counter 结账收银台；【形近辨析】country (国家), county (郡县), encounter (邂逅/遭遇)；【近义辨析】counter 作动词强调针锋相对地做出反应以反制或抵消对方力量；oppose 强调站在对立面发声或投票反对；resist 强调坚守阵地拒绝服从屈服；neutralize 强调使有害影响归零或无效化。"
  },
  "country": {
    "word": "country",
    "zh": "国家；乡村",
    "translation": "国家；乡村",
    "cloze": {
      "sentence": "After retiring from the hectic corporate world, they bought a charming cottage in the ______.",
      "translation": "从繁忙的企业界退休后，他们在乡下买了一栋迷人的小屋。"
    },
    "form_confusables": [
      {
        "word": "country",
        "zh": "国家；乡下"
      },
      {
        "word": "counter",
        "zh": "柜台；反驳"
      },
      {
        "word": "county",
        "zh": "县；郡"
      },
      {
        "word": "entry",
        "zh": "进入；入口"
      }
    ],
    "semantic_confusables": [
      {
        "word": "country",
        "zh": "乡下；国家 (自然田园或主权领土)"
      },
      {
        "word": "nation",
        "zh": "民族；国家 (国民共同体)"
      },
      {
        "word": "state",
        "zh": "政权；国家 (政治法律实体)"
      },
      {
        "word": "countryside",
        "zh": "农村；田野 (侧重自然风光)"
      }
    ],
    "notes": "【搭配考点】in the country 在乡下；across the country 全国各地；developing country 发展中国家；country music 乡村音乐；【形近辨析】counter (柜台), county (郡县), entry (入口条目)；【近义辨析】country 侧重地理版图疆域或远离城市的乡村田园；nation 强调由共同文化、历史联系在一起的国民或民族；state 侧重拥有主权机关与法律统治的政权实体；countryside 专指大自然田野绿地与乡村风景。"
  },
  "countryside": {
    "word": "countryside",
    "zh": "农村；田野；乡村",
    "translation": "农村；田野；乡村",
    "cloze": {
      "sentence": "High-speed rail projects must minimize their impact on the surrounding natural ______.",
      "translation": "高铁项目必须尽量减少对周边自然乡村环境的影响。"
    },
    "form_confusables": [
      {
        "word": "countryside",
        "zh": "农村；乡下"
      },
      {
        "word": "hillside",
        "zh": "山坡；山腰"
      },
      {
        "word": "seaside",
        "zh": "海滨；海边"
      },
      {
        "word": "alongside",
        "zh": "在旁边；沿着"
      }
    ],
    "semantic_confusables": [
      {
        "word": "countryside",
        "zh": "乡村；田野 (开阔自然乡村景色)"
      },
      {
        "word": "landscape",
        "zh": "地貌；风景 (开阔画卷感)"
      },
      {
        "word": "village",
        "zh": "村庄；聚落 (具体居住区)"
      },
      {
        "word": "rurality",
        "zh": "田园特征；乡村风味"
      }
    ],
    "notes": "【搭配考点】the surrounding countryside 周边乡村；protect the countryside 保护农村生态；open countryside 开阔田野；【形近辨析】hillside (山腰), seaside (海边), alongside (与...并排)；【近义辨析】countryside 强调城市之外由农田、绿树、山峦组成的广袤自然风光；landscape 侧重放眼望去整个地貌的全景视觉感官；village 专指建有农舍建筑的具体村落居住地；rurality 侧重田园生活的质朴特征。"
  },
  "county": {
    "word": "county",
    "zh": "县；郡",
    "translation": "县；郡",
    "cloze": {
      "sentence": "The sheriff has legal jurisdiction over all unincorporated areas within the ______.",
      "translation": "警长对本郡所有未建制区域拥有法律管辖权。"
    },
    "form_confusables": [
      {
        "word": "county",
        "zh": "县；郡"
      },
      {
        "word": "country",
        "zh": "国家；乡下"
      },
      {
        "word": "bounty",
        "zh": "赏金；慷慨赐予"
      },
      {
        "word": "court",
        "zh": "法院；球场"
      }
    ],
    "semantic_confusables": [
      {
        "word": "county",
        "zh": "郡；县 (二级行政区划单位)"
      },
      {
        "word": "district",
        "zh": "行政区；管区 (特定功能区)"
      },
      {
        "word": "province",
        "zh": "省；省份 (一级大型地方区划)"
      },
      {
        "word": "municipality",
        "zh": "直辖市；自治市 (城市行政区)"
      }
    ],
    "notes": "【搭配考点】county court 郡法院；county council 县议会；county seat 县治/郡首府；【形近辨析】country (国家), bounty (赏金/宽厚), court (法庭)；【近义辨析】county 是英美等国位于州或国家之下的基本地方行政管辖单位（相当于国内的县/地级区划）；district 泛指按照行政、司法或选区划定的功能分区；province 特指幅员辽阔的国家一级行政省区；municipality 专指由单一城市市政当局管辖的市区自治体。"
  },
  "couple": {
    "word": "couple",
    "zh": "一对；夫妇；结合",
    "translation": "一对；夫妇；结合",
    "cloze": {
      "sentence": "The newly married ______ decided to spend their honeymoon travelling across Europe.",
      "translation": "这对新婚夫妇决定通过周游欧洲来度过他们的蜜月。"
    },
    "form_confusables": [
      {
        "word": "couple",
        "zh": "夫妇；一对；结合"
      },
      {
        "word": "ripple",
        "zh": "涟漪；微波"
      },
      {
        "word": "sample",
        "zh": "样本；样品"
      },
      {
        "word": "supple",
        "zh": "柔软的；灵活的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "couple",
        "zh": "夫妇；情侣 (紧密情感伴侣)"
      },
      {
        "word": "pair",
        "zh": "一对；一双 (配对成套物品)"
      },
      {
        "word": "duo",
        "zh": "二重唱；双人组 (工作表演搭档)"
      },
      {
        "word": "partner",
        "zh": "伴侣；合伙人"
      }
    ],
    "notes": "【搭配考点】a couple of 两个/几个；married couple 已婚夫妇；couple with 与...相结合；power couple 强强联合的精英夫妻；【形近辨析】ripple (微波涟漪), sample (样品), supple (柔顺灵巧的)；【近义辨析】couple 专指恋爱婚姻关系中的二人，或泛指数量少数的两三个；pair 强调必须配合成对使用的成套器物（如 a pair of shoes/glasses）；duo 侧重艺术表演中或公开活动上的二人黄金搭档；partner 强调平等合作的商业伙伴或生活伴侣。"
  },
  "courage": {
    "word": "courage",
    "zh": "勇气；胆量",
    "translation": "勇气；胆量",
    "cloze": {
      "sentence": "The firefighters demonstrated incredible ______ when they entered the burning building to save lives.",
      "translation": "消防员们冲进燃烧的大楼抢救生命时，展现出了令人难以置信的勇气。"
    },
    "form_confusables": [
      {
        "word": "courage",
        "zh": "勇气；胆量"
      },
      {
        "word": "encourage",
        "zh": "鼓励；鼓舞"
      },
      {
        "word": "discourage",
        "zh": "使气馁；打消念头"
      },
      {
        "word": "outrage",
        "zh": "愤怒；暴行"
      }
    ],
    "semantic_confusables": [
      {
        "word": "courage",
        "zh": "勇气；无畏 (直面恐惧的内心力量)"
      },
      {
        "word": "bravery",
        "zh": "勇敢；英勇 (临场不惧的行为表现)"
      },
      {
        "word": "valor",
        "zh": "刚勇；英勇 (生死关头的英雄气概)"
      },
      {
        "word": "boldness",
        "zh": "大胆；魄力 (敢想敢干)"
      }
    ],
    "notes": "【搭配考点】have the courage to do 有勇气做某事；summon up courage 鼓起勇气；take courage 振作起来；moral courage 道德勇气；【形近辨析】encourage (鼓励), discourage (打消念头), outrage (义愤/暴行)；【近义辨析】courage 强调内心深处克服恐惧、坚持原则的高尚意志品质；bravery 侧重不畏强暴危险、临场表现出的勇敢行动；valor 具有崇高文学色彩，特指在战争或生死关头的英勇献身；boldness 侧重敢冒风险甚至带点鲁莽的大胆。"
  },
  "course": {
    "word": "course",
    "zh": "课程；过程；航向",
    "translation": "课程；过程；航向",
    "cloze": {
      "sentence": "Over the ______ of the next decade, renewable energy is expected to replace fossil fuels.",
      "translation": "在接下来的十年历程中，可再生能源预计将取代化石燃料。"
    },
    "form_confusables": [
      {
        "word": "course",
        "zh": "课程；过程；航向"
      },
      {
        "word": "coarse",
        "zh": "粗糙的；粗鄙的"
      },
      {
        "word": "corpse",
        "zh": "尸体"
      },
      {
        "word": "source",
        "zh": "来源；源头"
      }
    ],
    "semantic_confusables": [
      {
        "word": "course",
        "zh": "过程；进程；发展路线"
      },
      {
        "word": "path",
        "zh": "小路；道路；途径"
      },
      {
        "word": "route",
        "zh": "航线；既定交通路线"
      },
      {
        "word": "track",
        "zh": "轨道；跑道；足迹"
      }
    ],
    "notes": "【搭配考点】in the course of 在...过程中；of course 当然；take/enroll in a course 选修课程；change course 改变路线/方针；golf course 高尔夫球场；【形近辨析】coarse (粗糙粗鲁的), corpse (死尸), source (来源/源泉)；【近义辨析】course 强调随时间向前推移的自然进程，或预先规划的系列课程、航行轨迹；path 侧重人踩出的小径或通向目标的抽象道路；route 专指公路、航海或飞机往返的既定固定路线；track 侧重火车铁轨、田径跑道或足迹痕迹。"
  },
  "court": {
    "word": "court",
    "zh": "法院；法庭；球场",
    "translation": "法院；法庭；球场",
    "cloze": {
      "sentence": "The defendant entered a plea of not guilty when appearing before the supreme ______.",
      "translation": "被告在最高法院出庭时作出了无罪抗辩。"
    },
    "form_confusables": [
      {
        "word": "court",
        "zh": "法院；球场"
      },
      {
        "word": "count",
        "zh": "计算；伯爵"
      },
      {
        "word": "cart",
        "zh": "手推车"
      },
      {
        "word": "chart",
        "zh": "图表；海图"
      }
    ],
    "semantic_confusables": [
      {
        "word": "court",
        "zh": "法庭；法院 (司法审判机关)"
      },
      {
        "word": "tribunal",
        "zh": "仲裁庭；特别法庭"
      },
      {
        "word": "bench",
        "zh": "法官席；司法审判团体"
      },
      {
        "word": "arena",
        "zh": "竞技场；竞技舞台"
      }
    ],
    "notes": "【搭配考点】take sb to court 把某人告上法庭；in court 在法庭上；tennis/basketball court 网球/篮球场；supreme court 最高法院；court disaster 自招灾祸；【形近辨析】count (点数/重要), cart (板车), chart (图表)；【近义辨析】court 专指国家常设的各级审判司法机关，亦指网球羽毛球等划线场地；tribunal 侧重针对军事、劳动、仲裁等专项设立的仲裁法庭；bench 借指法官席位或司法界的法官群体；arena 指大型室内体育竞技场或政治角逐的大舞台。"
  },
  "cousin": {
    "word": "cousin",
    "zh": "堂兄弟姐妹；表兄弟姐妹",
    "translation": "堂兄弟姐妹；表兄弟姐妹",
    "cloze": {
      "sentence": "During Thanksgiving, my aunt arrived with my favorite ______ from Chicago.",
      "translation": "在感恩节期间，我姑姑带着我最喜欢的来自芝加哥的堂表兄妹到达了。"
    },
    "form_confusables": [
      {
        "word": "cousin",
        "zh": "堂/表兄弟姐妹"
      },
      {
        "word": "cushion",
        "zh": "垫子；坐垫"
      },
      {
        "word": "basin",
        "zh": "水盆；流域"
      },
      {
        "word": "raisin",
        "zh": "葡萄干"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cousin",
        "zh": "堂/表兄弟姐妹 (同祖父母外祖父母)"
      },
      {
        "word": "nephew",
        "zh": "侄子；外甥 (同胞之子)"
      },
      {
        "word": "niece",
        "zh": "侄女；外甥女 (同胞之女)"
      },
      {
        "word": "sibling",
        "zh": "亲同胞兄弟姐妹"
      }
    ],
    "notes": "【搭配考点】first cousin 亲堂表兄弟姐妹；second cousin 远房堂表兄弟姐妹；country cousin 乡巴佬/老土亲戚；【形近辨析】cushion (靠垫/缓冲), basin (脸盆/盆地), raisin (葡萄干)；【近义辨析】cousin 是平辈亲属，指叔伯舅姑姨的子女；nephew 和 niece 是晚辈亲属，分别专指侄子/外甥与侄女/外甥女；sibling 专指由同一对父母所生的亲生同胞兄弟姐妹。"
  },
  "cover": {
    "word": "cover",
    "zh": "覆盖；涵盖；报道",
    "translation": "覆盖；涵盖；报道",
    "cloze": {
      "sentence": "The insurance policy does not ______ damages caused by flooding or earthquakes.",
      "translation": "该保险单不涵盖由洪水或地震造成的损失。"
    },
    "form_confusables": [
      {
        "word": "cover",
        "zh": "覆盖；涵盖"
      },
      {
        "word": "hover",
        "zh": "盘旋；徘徊"
      },
      {
        "word": "lover",
        "zh": "恋人；爱好者"
      },
      {
        "word": "rover",
        "zh": "漫游者；巡航探测车"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cover",
        "zh": "涵盖；保障；覆盖 (范围包含)"
      },
      {
        "word": "include",
        "zh": "包含；列入 (算作整体的一部分)"
      },
      {
        "word": "encompass",
        "zh": "囊括；包罗万象 (全方位涉及)"
      },
      {
        "word": "blanket",
        "zh": "全面笼罩；全覆盖"
      }
    ],
    "notes": "【搭配考点】cover the cost 支付/负担费用；cover news 采访报道新闻；under cover of 在...的掩护下；cover a wide range 涵盖广泛范围；【形近辨析】hover (悬停/盘旋), lover (爱人), rover (漫游探测器)；【近义辨析】cover 含义极丰，在保险业务中指提供保障理赔，在新闻中指深入采访报道，在物理上指盖住；include 侧重简单列出属于整体的分支要素；encompass 侧重广度，指宏大体系将多种学科领域包揽其中；blanket 强调厚实密闭的全面覆盖。"
  },
  "coverage": {
    "word": "coverage",
    "zh": "覆盖面；新闻报道；保险范围",
    "translation": "覆盖面；新闻报道；保险范围",
    "cloze": {
      "sentence": "The historic space mission received worldwide television ______ across every major network.",
      "translation": "这次历史性的太空飞行任务受到了全球各大电视网络的全面报道。"
    },
    "form_confusables": [
      {
        "word": "coverage",
        "zh": "覆盖面；新闻报道"
      },
      {
        "word": "leverage",
        "zh": "杠杆作用；影响力"
      },
      {
        "word": "courage",
        "zh": "勇气；胆识"
      },
      {
        "word": "average",
        "zh": "平均；普通的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "coverage",
        "zh": "报道；覆盖范围 (媒体报道或信号范围)"
      },
      {
        "word": "reportage",
        "zh": "特写报道；纪实文学"
      },
      {
        "word": "broadcasting",
        "zh": "广播；播送"
      },
      {
        "word": "scope",
        "zh": "范围；学术业务涵盖面"
      }
    ],
    "notes": "【搭配考点】media/press coverage 媒体/新闻报道；insurance coverage 保险保障范围；network/signal coverage 网络/信号覆盖率；live coverage 现场直播报道；【形近辨析】leverage (杠杆手段/借力), courage (勇气), average (平均数)；【近义辨析】coverage 指新闻媒体对特定事件给予的时间版面与深度，亦指信号或保险条款所能惠及的半径范围；reportage 特指带有浓厚纪实色彩的特写新闻采写；broadcasting 侧重广电信号发射与节目播出；scope 侧重学术课题或事业的广度与探索空间。"
  },
  "crack": {
    "word": "crack",
    "zh": "裂纹；破裂；爆裂声",
    "translation": "裂纹；破裂；爆裂声",
    "cloze": {
      "sentence": "Geologists discovered a widening ______ in the foundation of the concrete dam.",
      "translation": "地质学家在混凝土大坝的地基中发现了一条正在扩大的裂缝。"
    },
    "form_confusables": [
      {
        "word": "crack",
        "zh": "裂纹；破裂"
      },
      {
        "word": "track",
        "zh": "轨道；痕迹"
      },
      {
        "word": "smack",
        "zh": "拍击；咂嘴"
      },
      {
        "word": "stack",
        "zh": "堆叠；堆放"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crack",
        "zh": "裂纹；缝隙 (表面细小破损)"
      },
      {
        "word": "fracture",
        "zh": "断裂；骨折 (受力脆断)"
      },
      {
        "word": "fissure",
        "zh": "裂隙；深层分歧 (地质裂缝)"
      },
      {
        "word": "split",
        "zh": "分裂；劈开 (彻底裂成两半)"
      }
    ],
    "notes": "【搭配考点】at the crack of dawn 破晓时分；crack down on 严厉打击/镇压；crack a code 破译密码；crack a joke 开玩笑；【形近辨析】track (轨迹/跑道), smack (用力拍打), stack (整齐堆放)；【近义辨析】crack 指坚硬物体由于受力或温差表面出现的微细裂痕，亦指尖锐的爆裂声或破译难题；fracture 专指医学上的骨折或工业材料的脆断；fissure 侧重地质断层形成的极深裂缝，或党派内部不可弥合的深层分歧；split 强调物体顺势彻底分裂为两半。"
  },
  "craft": {
    "word": "craft",
    "zh": "工艺；手艺；航空器",
    "translation": "工艺；手艺；航空器",
    "cloze": {
      "sentence": "Master artisans spent months polishing their traditional woodcarving ______ to perfection.",
      "translation": "手工艺大师们花了数月时间将他们传统的木雕手艺打磨得炉火纯青。"
    },
    "form_confusables": [
      {
        "word": "craft",
        "zh": "手艺；航行器"
      },
      {
        "word": "draft",
        "zh": "草稿；起草；汇票"
      },
      {
        "word": "graft",
        "zh": "嫁接；贪污"
      },
      {
        "word": "shaft",
        "zh": "轴；矿井；光束"
      }
    ],
    "semantic_confusables": [
      {
        "word": "craft",
        "zh": "手艺；技艺 (需要特殊工巧)"
      },
      {
        "word": "trade",
        "zh": "行业手艺；职业工种"
      },
      {
        "word": "skill",
        "zh": "技能；熟练本领"
      },
      {
        "word": "workmanship",
        "zh": "工艺；制作手艺水平"
      }
    ],
    "notes": "【搭配考点】arts and crafts 工艺美术；traditional craft 传统手工艺；spacecraft/aircraft 航天器/航空器；learn a craft 学习一门手艺；【形近辨析】draft (草案/汇票), graft (植物嫁接/受贿), shaft (轴杆/矿井)；【近义辨析】craft 强调依靠双手与创造力精雕细琢的手工技艺，亦可指航行器；trade 侧重木匠、电工等从事买卖生计的技术行当；skill 是广义的后天习得的任何熟练技能；workmanship 特指一件手工艺品所体现的做工水准与精湛程度。"
  },
  "crash": {
    "word": "crash",
    "zh": "碰撞；坠毁；暴跌",
    "translation": "碰撞；坠毁；暴跌",
    "cloze": {
      "sentence": "The global stock market suffered a devastating ______ that wiped out billions in equity value.",
      "translation": "全球股市遭遇了毁灭性的暴跌崩盘，蒸发了数十亿美元的股权价值。"
    },
    "form_confusables": [
      {
        "word": "crash",
        "zh": "碰撞；暴跌；坠毁"
      },
      {
        "word": "crush",
        "zh": "压碎；迷恋"
      },
      {
        "word": "clash",
        "zh": "冲突；交锋"
      },
      {
        "word": "trash",
        "zh": "垃圾；废弃物"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crash",
        "zh": "暴跌；崩盘；坠毁 (猛烈碰撞崩解)"
      },
      {
        "word": "collision",
        "zh": "物理碰撞；对撞"
      },
      {
        "word": "collapse",
        "zh": "坍塌；彻底倒闭"
      },
      {
        "word": "plunge",
        "zh": "骤降；暴跌"
      }
    ],
    "notes": "【搭配考点】car/plane crash 车祸/空难；stock market crash 股市暴跌崩盘；crash course 速成班；crash diet 快速节食法；computer crash 电脑死机；【形近辨析】crush (压扁/暗恋), clash (打斗/色彩冲突), trash (废物垃圾)；【近义辨析】crash 侧重伴随着震耳欲聋撞击声的猛烈砸毁，或金融市场/计算机系统的猝然崩盘；collision 专指运动物体之间发生的物理对撞；collapse 强调因缺乏支撑导致的整栋建筑倒塌或身体虚脱；plunge 强调垂直直线下跌的急迫动态。"
  },
  "crazy": {
    "word": "crazy",
    "zh": "疯狂的；狂热的",
    "translation": "疯狂的；狂热的",
    "cloze": {
      "sentence": "He must be absolutely ______ to attempt climbing that icy mountain without proper safety gear.",
      "translation": "在没有适当安全装备的情况下尝试攀登那座冰山，他肯定是彻底疯了。"
    },
    "form_confusables": [
      {
        "word": "crazy",
        "zh": "疯狂的；狂热的"
      },
      {
        "word": "lazy",
        "zh": "懒惰的"
      },
      {
        "word": "cozy",
        "zh": "舒适温馨的"
      },
      {
        "word": "hazy",
        "zh": "朦胧的；模糊的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crazy",
        "zh": "发疯的；荒谬的 (口语化失常/痴迷)"
      },
      {
        "word": "mad",
        "zh": "疯狂的；发疯生气的"
      },
      {
        "word": "insane",
        "zh": "精神失常的；不可理喻的"
      },
      {
        "word": "absurd",
        "zh": "荒谬的；荒诞不经的"
      }
    ],
    "notes": "【搭配考点】be crazy about 狂热喜爱...；drive sb crazy 把某人逼疯；like crazy 拼命地/发狂似地；crazy idea 疯狂的想法；【形近辨析】lazy (懒散的), cozy (温馨舒服的), hazy (薄雾弥漫的)；【近义辨析】crazy 最通俗活跃，指行为古怪不可思议，亦指对某事物狂热痴迷；mad 在英式英语中极常表示气愤抓狂，亦可指发狂；insane 是医学和司法用语，特指因严重精神疾患丧失行为能力；absurd 侧重荒唐可笑、完全不符合逻辑事实。"
  },
  "cream": {
    "word": "cream",
    "zh": "奶油；乳霜；精华",
    "translation": "奶油；乳霜；精华",
    "cloze": {
      "sentence": "Top universities attract the ______ of the nation's young scholars and researchers.",
      "translation": "顶尖大学吸引了全国最优秀的青年学者与科研精英。"
    },
    "form_confusables": [
      {
        "word": "cream",
        "zh": "奶油；乳霜；精华"
      },
      {
        "word": "dream",
        "zh": "梦想；做梦"
      },
      {
        "word": "stream",
        "zh": "小溪；溪流"
      },
      {
        "word": "scream",
        "zh": "尖叫；喊叫"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cream",
        "zh": "精英；精华 (顶尖部分)"
      },
      {
        "word": "elite",
        "zh": "精英阶层；核心中坚"
      },
      {
        "word": "best",
        "zh": "最优秀者；最佳"
      },
      {
        "word": "lotion",
        "zh": "乳液；护肤液"
      }
    ],
    "notes": "【搭配考点】the cream of the crop 百里挑一的精英/精华；face/shaving cream 面霜/剃须膏；ice cream 冰淇淋；whipped cream 鲜奶油；【形近辨析】dream (梦想), stream (小溪/串流), scream (尖声尖叫)；【近义辨析】cream 借比牛奶上浮起的浓郁精华，形象喻指某一领域最顶尖优秀的人群或事物；elite 强调在财富、地位、知识上掌握主导权的社会精英群体；best 是普通最高级；lotion 专指质地较稀薄的护肤乳液。"
  },
  "create": {
    "word": "create",
    "zh": "创造；创作；创立",
    "translation": "创造；创作；创立",
    "cloze": {
      "sentence": "The government announced a stimulus package designed to ______ thousands of new jobs.",
      "translation": "政府宣布了一项旨在创造数千个新就业岗位的经济刺激计划。"
    },
    "form_confusables": [
      {
        "word": "create",
        "zh": "创造；创作"
      },
      {
        "word": "equate",
        "zh": "使等同；等同于"
      },
      {
        "word": "rebate",
        "zh": "退税；回扣"
      },
      {
        "word": "debate",
        "zh": "辩论；争论"
      }
    ],
    "semantic_confusables": [
      {
        "word": "create",
        "zh": "创造；创立 (使新事物产生)"
      },
      {
        "word": "generate",
        "zh": "生成；产生 (能源/收益/数据)"
      },
      {
        "word": "establish",
        "zh": "建立；创立 (机构/体制/秩序)"
      },
      {
        "word": "invent",
        "zh": "发明；独创 (发明全新装置)"
      }
    ],
    "notes": "【搭配考点】create jobs/opportunities 创造就业/机会；create wealth 创造财富；create problems 带来麻烦；【形近辨析】equate (使相等), rebate (退税/回扣), debate (争论)；【近义辨析】create 强调从无到有、运用想象力或规划使新事物诞生；generate 侧重通过物理机制或业务运营持续生发产出；establish 侧重正式确立机构、法规或长远业务联系；invent 专指首创前所未有的机械、装置或理论。"
  },
  "creation": {
    "word": "creation",
    "zh": "创造；创作；产物",
    "translation": "创造；创作；产物",
    "cloze": {
      "sentence": "The museum hosted an exhibition celebrating the ______ of modern computational science.",
      "translation": "该博物馆举办了一场展览，庆祝现代计算科学的创立与诞生。"
    },
    "form_confusables": [
      {
        "word": "creation",
        "zh": "创造；产物"
      },
      {
        "word": "duration",
        "zh": "持续时间"
      },
      {
        "word": "vibration",
        "zh": "振动；摇摆"
      },
      {
        "word": "relation",
        "zh": "关系；亲属"
      }
    ],
    "semantic_confusables": [
      {
        "word": "creation",
        "zh": "创造；创作物 (创造过程或杰作)"
      },
      {
        "word": "invention",
        "zh": "发明；发明物 (全新技术装置)"
      },
      {
        "word": "innovation",
        "zh": "创新；革新 (对现有事物的改进)"
      },
      {
        "word": "formation",
        "zh": "形成；编制 (聚集形成结构)"
      }
    ],
    "notes": "【搭配考点】job creation 创造就业；the creation of the universe 宇宙的诞生；artistic creation 艺术创作；【形近辨析】duration (持续时间), vibration (振动), relation (关系)；【近义辨析】creation 强调从无到有的创生过程或凝结心血的艺术结晶；invention 侧重实用新型科技装置的发明；innovation 侧重在旧有基础上推陈出新、引入新方法；formation 强调自然演化形成或军队团队的排布阵型。"
  },
  "creative": {
    "word": "creative",
    "zh": "有创造力的；创造性的",
    "translation": "有创造力的；创造性的",
    "cloze": {
      "sentence": "Advertising agencies rely heavily on ______ thinking to develop memorable brand campaigns.",
      "translation": "广告公司高度依赖创造性思维来策划令人难忘的品牌营销活动。"
    },
    "form_confusables": [
      {
        "word": "creative",
        "zh": "有创造力的"
      },
      {
        "word": "secretive",
        "zh": "守口如瓶的；秘密的"
      },
      {
        "word": "curative",
        "zh": "有疗效的；治病的"
      },
      {
        "word": "primitive",
        "zh": "原始的；简单的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "creative",
        "zh": "创新的；有创造力的 (富有灵感与原创力)"
      },
      {
        "word": "innovative",
        "zh": "革新的；突破性的 (引入前沿新理念)"
      },
      {
        "word": "inventive",
        "zh": "善于发明的；独出心裁的 (善于巧解难题)"
      },
      {
        "word": "imaginative",
        "zh": "富有想象力的；虚构的 (脑海构想丰富)"
      }
    ],
    "notes": "【搭配考点】creative thinking/writing 创造性思维/写作；creative industry 创意产业；creative accounting 掩盖真相的做假账；【形近辨析】secretive (遮遮掩掩的), curative (治愈的), primitive (原始的)；【近义辨析】creative 侧重能够打破常规、产出具有艺术或实践价值的原创新想法；innovative 侧重在商业和工程技术上实现突破性革新；inventive 强调头脑机敏、擅长发明小装置解决实际麻烦；imaginative 侧重内心幻想生动丰富。"
  },
  "creature": {
    "word": "creature",
    "zh": "生物；动物；生灵",
    "translation": "生物；动物；生灵",
    "cloze": {
      "sentence": "Deep-sea submersibles discovered an extraordinary glowing ______ living near thermal vents.",
      "translation": "深海潜水器在热液喷口附近发现了一种生活在深处的非凡发光生物。"
    },
    "form_confusables": [
      {
        "word": "creature",
        "zh": "生物；生灵"
      },
      {
        "word": "feature",
        "zh": "特征；特写"
      },
      {
        "word": "fracture",
        "zh": "破裂；骨折"
      },
      {
        "word": "moisture",
        "zh": "湿气；水分"
      }
    ],
    "semantic_confusables": [
      {
        "word": "creature",
        "zh": "生物；生灵 (一切有生命的存在)"
      },
      {
        "word": "organism",
        "zh": "有机体；生物体 (科学术语)"
      },
      {
        "word": "animal",
        "zh": "动物 (区别于人类植物)"
      },
      {
        "word": "beast",
        "zh": "野兽；牲畜 (凶猛无理性动物)"
      }
    ],
    "notes": "【搭配考点】living creature 活的生物；creature of habit 墨守成规的人；mythical creature 神话生物；creature comforts 物质享受；【形近辨析】feature (特征/特色), fracture (骨折/断裂), moisture (潮湿/水分)；【近义辨析】creature 带有情感色彩，泛指上帝造化的一切生灵、动物，亦引申指受人控制的小角色；organism 是现代生物学科学统称，指具有生命机能的有机体；animal 专指生物界中的动物类群；beast 指凶残的大型野兽或牲口。"
  },
  "credit": {
    "word": "credit",
    "zh": "信用；信贷；赞誉；学分",
    "translation": "信用；信贷；赞誉；学分",
    "cloze": {
      "sentence": "She deserves full ______ for turning around the company's failing fortunes.",
      "translation": "她为扭转公司濒临破产的命运付出了努力，理应获得全部赞誉。"
    },
    "form_confusables": [
      {
        "word": "credit",
        "zh": "信用；赞誉；学分"
      },
      {
        "word": "debit",
        "zh": "借方；借记"
      },
      {
        "word": "audit",
        "zh": "审计；查账"
      },
      {
        "word": "admit",
        "zh": "承认；准许进入"
      }
    ],
    "semantic_confusables": [
      {
        "word": "credit",
        "zh": "赞扬；功劳 (对成果的肯定)"
      },
      {
        "word": "praise",
        "zh": "赞美；称赞 (口头/书面表扬)"
      },
      {
        "word": "acclaim",
        "zh": "欢呼；喝彩 (公众热烈赞扬)"
      },
      {
        "word": "recognition",
        "zh": "认可；赏识 (正式荣誉嘉奖)"
      }
    ],
    "notes": "【搭配考点】give credit to 归功于/赞赏；on credit 赊购/赊账；letter of credit 信用证；academic credit 大学学分；do credit to 为...增光；【形近辨析】debit (借记/借方), audit (审计), admit (承认)；【近义辨析】credit 强调对于某项成就的功劳归属或金融信用；praise 是普遍口头或书面上的表扬称赞；acclaim 侧重公众、评论界的轰动性喝彩；recognition 侧重官方或机构给予的正式承认与荣誉地位。"
  },
  "crew": {
    "word": "crew",
    "zh": "全体船员；机组人员；作业组",
    "translation": "全体船员；机组人员；作业组",
    "cloze": {
      "sentence": "The experienced flight ______ guided passengers safely through severe mid-air turbulence.",
      "translation": "经验丰富的机组人员引导乘客安全度过了严重的空中颠簸。"
    },
    "form_confusables": [
      {
        "word": "crew",
        "zh": "全体船员；机组人员"
      },
      {
        "word": "brew",
        "zh": "酿造；酝酿"
      },
      {
        "word": "drew",
        "zh": "画 (过去式)"
      },
      {
        "word": "crow",
        "zh": "乌鸦；啼叫"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crew",
        "zh": "机组人员；船员；施工特勤组"
      },
      {
        "word": "team",
        "zh": "团队；运动队 (协同完成任务)"
      },
      {
        "word": "squad",
        "zh": "小队；行动班组 (军警班组)"
      },
      {
        "word": "staff",
        "zh": "全体员工；职员 (被雇佣全体人员)"
      }
    ],
    "notes": "【搭配考点】flight/cabin crew 飞行/客舱乘务组；film crew 摄制组；ground crew 地勤人员；rowing crew 赛艇队；【形近辨析】brew (酿酒/酝酿), drew (画), crow (乌鸦)；【近义辨析】crew 专指飞机、轮船、列车上的操作保障人员，或电影、抢修等特种作业小组；team 强调通力合作的体育比赛队伍或项目组；squad 强调具备军事化执行力的小分队；staff 强调企事业单位被雇佣的全体办公员工。"
  },
  "crime": {
    "word": "crime",
    "zh": "罪行；犯罪",
    "translation": "罪行；犯罪",
    "cloze": {
      "sentence": "Local authorities introduced youth community programs to prevent urban ______.",
      "translation": "地方当局推出了青年社区项目以预防城市犯罪。"
    },
    "form_confusables": [
      {
        "word": "crime",
        "zh": "罪行；犯罪"
      },
      {
        "word": "prime",
        "zh": "首要的；全盛期"
      },
      {
        "word": "grime",
        "zh": "污垢；尘垢"
      },
      {
        "word": "chime",
        "zh": "钟声；报时"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crime",
        "zh": "犯罪；罪行 (触犯刑法法律行为)"
      },
      {
        "word": "offense",
        "zh": "违法行为；过错 (轻微违规)"
      },
      {
        "word": "felony",
        "zh": "重罪 (严重刑事犯罪)"
      },
      {
        "word": "violation",
        "zh": "侵犯；违背 (违背法规协议)"
      }
    ],
    "notes": "【搭配考点】commit a crime 犯罪；fight/combat crime 打击犯罪；organized crime 有组织犯罪；crime scene 犯罪现场；【形近辨析】prime (主要的/盛年), grime (深层油垢), chime (钟鸣)；【近义辨析】crime 是触犯刑法法律的刑事罪行总称；offense 涵盖范围广，常指违反行政法规的轻微违法；felony 是严格法律术语，专指谋杀、纵火等严重刑事重罪；violation 侧重对条约、规则、隐私或交通信号的违反。"
  },
  "criminal": {
    "word": "criminal",
    "zh": "罪犯；刑事的",
    "translation": "罪犯；刑事的",
    "cloze": {
      "sentence": "The suspect has an extensive ______ record spanning more than two decades.",
      "translation": "该嫌疑人拥有跨越二十多年的厚重犯罪前科记录。"
    },
    "form_confusables": [
      {
        "word": "criminal",
        "zh": "罪犯；刑事的"
      },
      {
        "word": "terminal",
        "zh": "终点站；晚期的"
      },
      {
        "word": "marginal",
        "zh": "边缘的；微小的"
      },
      {
        "word": "original",
        "zh": "最初的；原版的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "criminal",
        "zh": "罪犯；刑事犯 (触犯刑事法规者)"
      },
      {
        "word": "offender",
        "zh": "违规者；违法分子 (法律违规人)"
      },
      {
        "word": "culprit",
        "zh": "罪魁祸首；犯罪者 (造成问题元凶)"
      },
      {
        "word": "convict",
        "zh": "服刑犯人 (已定罪服刑囚徒)"
      }
    ],
    "notes": "【搭配考点】criminal law/justice 刑法/刑事司法；criminal record 犯罪记录；criminal offense 刑事犯罪；war criminal 战犯；【形近辨析】terminal (终点/末期的), marginal (边缘微末的), original (起初的)；【近义辨析】criminal 指实施严重危害社会行为并构成犯罪的人；offender 指一切违法者或初犯轻犯；culprit 侧重指造成某种恶劣后果的“祸首元凶”；convict 专指已被宣判有罪并正在监狱服刑的囚徒。"
  },
  "crisis": {
    "word": "crisis",
    "zh": "危机；紧要关头",
    "translation": "危机；紧要关头",
    "cloze": {
      "sentence": "World leaders assembled for an emergency summit to address the deepening humanitarian ______.",
      "translation": "世界各国领导人齐聚紧急峰会，以应对不断加深的人道主义危机。"
    },
    "form_confusables": [
      {
        "word": "crisis",
        "zh": "危机；紧要关头"
      },
      {
        "word": "critic",
        "zh": "评论家；挑剔者"
      },
      {
        "word": "basis",
        "zh": "基础；根据"
      },
      {
        "word": "oasis",
        "zh": "绿洲"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crisis",
        "zh": "危机；危急关头 (决定生死转折期)"
      },
      {
        "word": "catastrophe",
        "zh": "大灾难；灭顶之灾"
      },
      {
        "word": "emergency",
        "zh": "紧急情况；突发事态"
      },
      {
        "word": "predicament",
        "zh": "困境；进退维谷的窘境"
      }
    ],
    "notes": "【搭配考点】economic/financial crisis 经济/金融危机；energy crisis 能源危机；identity crisis 认同危机；resolve/manage a crisis 解决/化解危机；【形近辨析】critic (评论家), basis (基础依据), oasis (沙漠绿洲)；【近义辨析】crisis 指局势达到极度紧张、面临破局或转机的关键危险阶段；catastrophe 侧重带来灾难性破坏与生灵涂炭的巨灾；emergency 强调突发性和需要立刻实施医疗或抢险行动；predicament 侧重使人左右为难、不知所措的尴尬困境。"
  },
  "critic": {
    "word": "critic",
    "zh": "批评家；评论员",
    "translation": "批评家；评论员",
    "cloze": {
      "sentence": "The theater ______ wrote a glowing review of the new Broadway musical.",
      "translation": "这位戏剧评论家为这部新上演的百老汇音乐剧写了一篇赞不绝口的评论。"
    },
    "form_confusables": [
      {
        "word": "critic",
        "zh": "评论家；批评者"
      },
      {
        "word": "critical",
        "zh": "批判的；关键的"
      },
      {
        "word": "static",
        "zh": "静止的；静态的"
      },
      {
        "word": "rustic",
        "zh": "乡村的；淳朴的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "critic",
        "zh": "评论家；批评家 (具备专业鉴赏素养)"
      },
      {
        "word": "reviewer",
        "zh": "书评/影评人 (测评写作者)"
      },
      {
        "word": "commentator",
        "zh": "解说员；实事评论员 (随堂点评者)"
      },
      {
        "word": "evaluator",
        "zh": "评估员；考评者"
      }
    ],
    "notes": "【搭配考点】literary/film critic 文学/电影评论家；fierce critic 激烈的批评者；harsh critic 苛刻的挑剔者；【形近辨析】critical (关键的/批判的), static (静电/静态的), rustic (淳朴乡村的)；【近义辨析】critic 强调具有深厚艺术或学术鉴赏理论素养的专业批判家，亦指经常挑刺的人；reviewer 侧重面向大众提供新书、电影、电子产品评测的测评记者；commentator 专指在电视、电台直播中随事实播报分析的解说评论嘉宾；evaluator 侧重按指标进行体系化绩效打分审核。"
  },
  "critical": {
    "word": "critical",
    "zh": "决定性的；至关重要的；批判的",
    "translation": "决定性的；至关重要的；批判的",
    "cloze": {
      "sentence": "Securing adequate venture capital was ______ to the long-term survival of the startup.",
      "translation": "获得充足的风险投资对于该初创企业的长期生存至关重要。"
    },
    "form_confusables": [
      {
        "word": "critical",
        "zh": "关键的；批判性的"
      },
      {
        "word": "clinical",
        "zh": "临床的；客观冷漠的"
      },
      {
        "word": "clerical",
        "zh": "文职的；神职的"
      },
      {
        "word": "cynical",
        "zh": "愤世嫉俗的；冷嘲热讽的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "critical",
        "zh": "至关重要的；决定性的 (攸关存亡)"
      },
      {
        "word": "crucial",
        "zh": "关键性的；重大的 (枢纽转折点)"
      },
      {
        "word": "essential",
        "zh": "必不可少的；本质的"
      },
      {
        "word": "decisive",
        "zh": "决定性的；果断的 (一举定乾坤)"
      }
    ],
    "notes": "【搭配考点】critical thinking 批判性思维；play a critical role 起决定性作用；in critical condition 病情危殆；critical moment 关键时刻；【形近辨析】clinical (临床的/冷酷的), clerical (办公室文员的), cynical (怀疑一切的/愤世嫉俗的)；【近义辨析】critical 兼指学术上的客观挑剔审视，以及危机临界点上的生死攸关；crucial 形象源自拉丁语十字架，指决定最后成败的命脉环节；essential 强调事物自身内在固有、缺之则不成立的要素；decisive 侧重行动或战役能一举定乾坤、锁定胜局。"
  },
  "criticism": {
    "word": "criticism",
    "zh": "批评；评论",
    "translation": "批评；评论",
    "cloze": {
      "sentence": "The proposed highway expansion drew widespread ______ from local environmental groups.",
      "translation": "拟议中的高速公路扩建计划招致了当地环保团体的广泛批评。"
    },
    "form_confusables": [
      {
        "word": "criticism",
        "zh": "批评；评论"
      },
      {
        "word": "skepticism",
        "zh": "怀疑态度"
      },
      {
        "word": "optimism",
        "zh": "乐观主义"
      },
      {
        "word": "pessimism",
        "zh": "悲观主义"
      }
    ],
    "semantic_confusables": [
      {
        "word": "criticism",
        "zh": "批评；责难；文艺评论"
      },
      {
        "word": "censure",
        "zh": "严厉谴责；正式申诫 (官方斥责)"
      },
      {
        "word": "condemnation",
        "zh": "谴责；声讨 (道德彻底否定)"
      },
      {
        "word": "reproach",
        "zh": "责备；指责 (因失望而责怪)"
      }
    ],
    "notes": "【搭配考点】face/draw criticism 面临/引来批评；constructive criticism 建设性批评；literary criticism 文学评论；harsh criticism 严厉指责；【形近辨析】skepticism (怀疑论), optimism (乐观), pessimism (悲观)；【近义辨析】criticism 既可指指出缺点漏洞的日常指责，也可指理性的学术文艺鉴赏评论；censure 指议会或行业协会对违纪者做出的正式公开谴责；condemnation 强调站在道德正义制高点对罪恶行径的彻底声讨；reproach 侧重因信任破裂而表现出的失望与抱怨责备。"
  },
  "criticize": {
    "word": "criticize",
    "zh": "批评；指责",
    "translation": "批评；指责",
    "cloze": {
      "sentence": "It is unfair to ______ his handling of the situation without knowing all the underlying facts.",
      "translation": "在不了解所有潜在事实的情况下批评他对局势的处理是不公平的。"
    },
    "form_confusables": [
      {
        "word": "criticize",
        "zh": "批评；指责"
      },
      {
        "word": "prioritize",
        "zh": "优先考虑"
      },
      {
        "word": "privatize",
        "zh": "私有化"
      },
      {
        "word": "dramatize",
        "zh": "戏剧化；夸大"
      }
    ],
    "semantic_confusables": [
      {
        "word": "criticize",
        "zh": "批评；挑剔 (指出过失与不足)"
      },
      {
        "word": "blame",
        "zh": "归咎；责怪 (把责任归到某人)"
      },
      {
        "word": "reproach",
        "zh": "责备；指责 (因失望而抱怨)"
      },
      {
        "word": "condemn",
        "zh": "谴责；声讨 (道义严厉定罪)"
      }
    ],
    "notes": "【搭配考点】criticize sb for doing 因做某事而批评某人；sharply/harshly criticize 严厉抨击；be widely criticized 受到广泛抨击；【形近辨析】prioritize (确定优先次序), privatize (私有化改制), dramatize (改编为戏剧/夸大渲染)；【近义辨析】criticize 侧重对人或作品的优缺点做出客观剖析或表达不认可；blame 强调把过错、损失的责任推给某人承担；reproach 包含情感上的委屈与失望斥责；condemn 语气最强烈，表示在道义法律上宣布其不可饶恕。"
  },
  "crop": {
    "word": "crop",
    "zh": "庄稼；农作物；平头",
    "translation": "庄稼；农作物；平头",
    "cloze": {
      "sentence": "Favorable weather conditions contributed to a record harvest of the wheat ______.",
      "translation": "良好的天气条件促成了小麦作物的历史最高收成。"
    },
    "form_confusables": [
      {
        "word": "crop",
        "zh": "庄稼；农作物"
      },
      {
        "word": "drop",
        "zh": "落下；水滴"
      },
      {
        "word": "prop",
        "zh": "支柱；道具"
      },
      {
        "word": "chop",
        "zh": "砍；剁"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crop",
        "zh": "农作物；庄稼 (大田播种植物)"
      },
      {
        "word": "harvest",
        "zh": "收成；收获期 (产出与农事)"
      },
      {
        "word": "yield",
        "zh": "产量；收益 (单产出产率)"
      },
      {
        "word": "grain",
        "zh": "谷物；粮食作物"
      }
    ],
    "notes": "【搭配考点】bumper crop 大丰收；cash crop 经济作物；crop up 意外出现；crop photos 裁剪照片；【形近辨析】drop (跌落/水滴), prop (道具/支撑), chop (劈砍/切碎)；【近义辨析】crop 专指田地中整批种植的大田作物庄稼；harvest 侧重农作物成熟收割的农事活动或总收获量；yield 指单位农田或投资所产出的数量比率；grain 专指谷物颗粒粮食作物（如稻、麦、玉米）。"
  },
  "cross": {
    "word": "cross",
    "zh": "穿过；交叉；生气的",
    "translation": "穿过；交叉；生气的",
    "cloze": {
      "sentence": "Pedestrians should always use designated intersections when attempting to ______ the busy avenue.",
      "translation": "行人在试图穿过繁忙的大道时，应始终走指定的十字路口。"
    },
    "form_confusables": [
      {
        "word": "cross",
        "zh": "穿过；交叉；生气"
      },
      {
        "word": "across",
        "zh": "横过 (介词)"
      },
      {
        "word": "gloss",
        "zh": "光泽；虚饰"
      },
      {
        "word": "gross",
        "zh": "总共的；粗鲁的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cross",
        "zh": "越过；横穿 (从一边到另一边)"
      },
      {
        "word": "traverse",
        "zh": "横贯；横越 (艰难穿越广阔险阻)"
      },
      {
        "word": "span",
        "zh": "跨越；横跨 (空间或时间跨越)"
      },
      {
        "word": "intersect",
        "zh": "相交；交叉 (路线几何相切)"
      }
    ],
    "notes": "【搭配考点】cross the street 穿过马路；cross one's fingers 祈求好运；cross one's mind 掠过心头；Red Cross 红十字会；get cross with sb 对某人生气；【形近辨析】across (横过介词), gloss (光泽), gross (总共的/恶心的)；【近义辨析】cross 是最通俗动词，指穿过河流街道或划十字；traverse 偏正式书面语，特指旅人穿越整个大洲、山脉或荒漠；span 强调两头固定并从上方横跨整个空间跨度或历史时期；intersect 强调多条路线纵横相交点。"
  },
  "crowd": {
    "word": "crowd",
    "zh": "人群；拥挤",
    "translation": "人群；拥挤",
    "cloze": {
      "sentence": "An enthusiastic ______ cheered wildly as the victorious team stepped onto the stadium field.",
      "translation": "当获胜球队踏入体育场时，热情的人群爆发出狂热的欢呼。"
    },
    "form_confusables": [
      {
        "word": "crowd",
        "zh": "人群；拥挤"
      },
      {
        "word": "crown",
        "zh": "王冠；加冕"
      },
      {
        "word": "drown",
        "zh": "溺水；淹没"
      },
      {
        "word": "frown",
        "zh": "皱眉"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crowd",
        "zh": "人群；群众 (自发聚集的大量民众)"
      },
      {
        "word": "gathering",
        "zh": "聚会；集会 (有特定目的的聚拢)"
      },
      {
        "word": "mob",
        "zh": "暴民；乌合之众 (暴乱失去理智群体)"
      },
      {
        "word": "throng",
        "zh": "拥挤的人群；人山人海"
      }
    ],
    "notes": "【搭配考点】stand out from the crowd 脱颖而出；crowd into 涌入；crowd around 围拢过来；two's company, three's a crowd 两人成伴，三人不欢；【形近辨析】crown (王冠), drown (淹没溺死), frown (皱眉头)；【近义辨析】crowd 泛指聚集在公共场合的大量互不相识的人；gathering 强调有目的、较小规模的亲友或行业集会；mob 带有强烈贬义，专指失去理性、诉诸暴力哄闹的暴徒乱民；throng 强调肩摩毂击、如潮水般涌动的庞大密集人流。"
  },
  "crucial": {
    "word": "crucial",
    "zh": "至关重要的；决定性的",
    "translation": "至关重要的；决定性的",
    "cloze": {
      "sentence": "Early childhood education plays a ______ role in developing cognitive and social abilities.",
      "translation": "早期幼儿教育在培养认知和社交能力方面起着至关重要的作用。"
    },
    "form_confusables": [
      {
        "word": "crucial",
        "zh": "关键的；至关重要的"
      },
      {
        "word": "critical",
        "zh": "批判的；紧要的"
      },
      {
        "word": "trivial",
        "zh": "琐碎的；微不足道的"
      },
      {
        "word": "spatial",
        "zh": "空间的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crucial",
        "zh": "关键性的；极其重要的 (攸关全局)"
      },
      {
        "word": "pivotal",
        "zh": "枢轴式的；核心转折的"
      },
      {
        "word": "monumental",
        "zh": "丰碑式的；极其重大的"
      },
      {
        "word": "vital",
        "zh": "极其重要的；生死攸关的"
      }
    ],
    "notes": "【搭配考点】play a crucial role 起到决定性作用；a crucial factor 关键因素；crucial to/for 对...至关重要；crucial decision 关键抉择；【形近辨析】critical (紧要的/挑剔的), trivial (微不足道的), spatial (空间的)；【近义辨析】crucial 强调关乎整个事件走向的最核心环节；pivotal 形象比喻如同门轴一般带动整个大局转折；monumental 侧重规模历史意义的深远宏大；vital 侧重如同生命机能不可或缺，无其则无法存活。"
  },
  "cruel": {
    "word": "cruel",
    "zh": "残忍的；残酷的",
    "translation": "残忍的；残酷的",
    "cloze": {
      "sentence": "Animal welfare groups strongly oppose ______ treatment of livestock on industrial farms.",
      "translation": "动物保护团体强烈反对工业化养殖场中对待牲畜的残忍行为。"
    },
    "form_confusables": [
      {
        "word": "cruel",
        "zh": "残忍的；残酷的"
      },
      {
        "word": "fuel",
        "zh": "燃料；助长"
      },
      {
        "word": "jewel",
        "zh": "宝石；珠宝"
      },
      {
        "word": "gruel",
        "zh": "稀粥；折磨"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cruel",
        "zh": "残酷的；残忍的 (缺乏同情并施加痛苦)"
      },
      {
        "word": "ruthless",
        "zh": "无情的；冷酷的 (为达目的绝不手软)"
      },
      {
        "word": "brutal",
        "zh": "野蛮的；残暴的 (野兽般的血腥暴力)"
      },
      {
        "word": "callous",
        "zh": "麻木不仁的；心如铁石的"
      }
    ],
    "notes": "【搭配考点】cruel to 对...残忍；cruel irony 残酷的讽刺；cruel punishment 残酷的刑罚；cruel reality 残酷的现实；【形近辨析】fuel (燃料), jewel (珠宝), gruel (稀糊/折磨)；【近义辨析】cruel 强调故意给弱者带来痛苦并毫无恻隐之心；ruthless 侧重为了达成自私野心而冷酷抹杀一切障碍；brutal 侧重野蛮凶暴、动用血腥肉体暴力的原始残酷；callous 侧重心肠坚硬如老茧，对悲惨视若无睹。"
  },
  "crush": {
    "word": "crush",
    "zh": "压碎；镇压；迷恋",
    "translation": "压碎；镇压；迷恋",
    "cloze": {
      "sentence": "The heavily armed military regime moved quickly to ______ the student-led rebellion.",
      "translation": "全副武装的军政权迅速采取行动镇压了学生领导的起义。"
    },
    "form_confusables": [
      {
        "word": "crush",
        "zh": "压碎；镇压；迷恋"
      },
      {
        "word": "crash",
        "zh": "碰撞；暴跌"
      },
      {
        "word": "brush",
        "zh": "刷子；轻触"
      },
      {
        "word": "rush",
        "zh": "冲；仓促"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crush",
        "zh": "碾碎；彻底镇压 (用重力粉碎摧毁)"
      },
      {
        "word": "smash",
        "zh": "打碎；砸烂 (猛烈撞击砸烂)"
      },
      {
        "word": "squash",
        "zh": "压扁；平息 (挤压变形/平息反抗)"
      },
      {
        "word": "shatter",
        "zh": "使粉碎；破灭 (碎成碎片)"
      }
    ],
    "notes": "【搭配考点】crush a rebellion/protest 镇压叛乱/抗议；have a crush on 暗恋...；crush grapes 压榨葡萄；crushing defeat 惨败；【形近辨析】crash (坠毁/撞击), brush (刷子/拂拭), rush (奔流/急促)；【近义辨析】crush 强调通过施加持续的重压使其变形化为粉末，政治上指铁腕摧毁反抗势力；smash 强调外力猛击导致物件瞬间破碎；squash 侧重把柔软物体压成扁平，或扼杀某苗头；shatter 专指玻璃、瓷器或信念被震碎为无数残片。"
  },
  "cry": {
    "word": "cry",
    "zh": "哭泣；喊叫",
    "translation": "哭泣；喊叫",
    "cloze": {
      "sentence": "The newborn baby began to ______ loudly the moment the nurse carried him into the room.",
      "translation": "护士把新生婴儿抱进房间的那一刻，他开始大声啼哭起来。"
    },
    "form_confusables": [
      {
        "word": "cry",
        "zh": "哭泣；喊叫"
      },
      {
        "word": "dry",
        "zh": "干的；弄干"
      },
      {
        "word": "fry",
        "zh": "油炸"
      },
      {
        "word": "spy",
        "zh": "间谍；窥探"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cry",
        "zh": "哭泣；叫喊 (流泪或呼叫)"
      },
      {
        "word": "weep",
        "zh": "抽泣；流泪 (深沉潸然泪下)"
      },
      {
        "word": "sob",
        "zh": "啜泣；呜咽 (哽咽抽搐大哭)"
      },
      {
        "word": "shout",
        "zh": "呼喊；大叫 (纯声音高呼)"
      }
    ],
    "notes": "【搭配考点】cry for help 呼救；cry one's eyes out 痛哭流涕；a far cry from 与...相去甚远；for crying out loud 哎呀/天哪(表烦躁)；【形近辨析】dry (干燥的), fry (油煎), spy (间谍)；【近义辨析】cry 最常用，既可伴随泪水抽泣，亦可指因惊恐疼痛大声叫唤；weep 带有浓厚文学色彩，专指无声或深沉的潸然泪下；sob 侧重伤心过度引起的呼吸急促、胸膛起伏抽噎；shout 仅指高分贝大声喊叫，不涉及哭泣情感。"
  },
  "crystal": {
    "word": "crystal",
    "zh": "水晶；结晶体；清澈的",
    "translation": "水晶；结晶体；清澈的",
    "cloze": {
      "sentence": "The mountain spring was so ______ clear that you could see every pebble resting on the lakebed.",
      "translation": "山间泉水清澈见底，湖底的每一颗鹅卵石都清晰可见。"
    },
    "form_confusables": [
      {
        "word": "crystal",
        "zh": "水晶；晶体"
      },
      {
        "word": "crucial",
        "zh": "关键的；决定性的"
      },
      {
        "word": "crust",
        "zh": "面包皮；地壳"
      },
      {
        "word": "crypt",
        "zh": "地下墓穴；地窖"
      }
    ],
    "semantic_confusables": [
      {
        "word": "crystal",
        "zh": "晶体；水晶 (规则几何结构矿物)"
      },
      {
        "word": "quartz",
        "zh": "石英 (二氧化硅结晶)"
      },
      {
        "word": "glass",
        "zh": "玻璃 (非晶态透明材料)"
      },
      {
        "word": "mineral",
        "zh": "矿物；矿石"
      }
    ],
    "notes": "【搭配考点】crystal clear 清澈透明的/显而易见的；crystal ball 水晶球 (预测未来)；liquid crystal display (LCD) 液晶显示屏；ice crystals 冰晶；【形近辨析】crucial (决定性的), crust (地壳/脆皮), crypt (地下墓穴)；【近义辨析】crystal 指由原子规则排列形成的自然结晶矿石，亦借喻水体或逻辑极其清澈透明；quartz 专指矿物学中的石英结晶；glass 专指非晶体、透明易碎的硅酸盐玻璃；mineral 泛指地下蕴藏的一切天然无机矿物质。"
  },
  "culture": {
    "word": "culture",
    "zh": "文化；文明；培养菌",
    "translation": "文化；文明；培养菌",
    "cloze": {
      "sentence": "Living abroad provides students with a rare chance to immerse themselves in a different ______.",
      "translation": "在国外生活为学生们提供了一个沉浸于异国文化的难得机会。"
    },
    "form_confusables": [
      {
        "word": "culture",
        "zh": "文化；文明"
      },
      {
        "word": "vulture",
        "zh": "秃鹰；贪婪者"
      },
      {
        "word": "capture",
        "zh": "俘获；捕获"
      },
      {
        "word": "torture",
        "zh": "折磨；酷刑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "culture",
        "zh": "文化；修养 (生活方式与艺术体系)"
      },
      {
        "word": "civilization",
        "zh": "文明 (高度发展的社会体制)"
      },
      {
        "word": "heritage",
        "zh": "遗产；文化传承 (世代沉淀瑰宝)"
      },
      {
        "word": "custom",
        "zh": "习俗；风俗惯例"
      }
    ],
    "notes": "【搭配考点】corporate/pop culture 企业/流行文化；culture shock 文化冲击；bacterial culture 细菌培养物；physical culture 体育运动；【形近辨析】vulture (秃鹫), capture (俘虏), torture (折磨酷刑)；【近义辨析】culture 强调特定民族或群体的生活方式、艺术形态和精神认同，生物学指微生物培养；civilization 强调社会进入城市化、法制化和文字发达的宏观文明阶段；heritage 侧重由祖辈传承保留下来的历史物质或非遗文化；custom 指代代相传的具体行为习惯。"
  },
  "cup": {
    "word": "cup",
    "zh": "杯子；奖杯",
    "translation": "杯子；奖杯",
    "cloze": {
      "sentence": "The national soccer team triumphantly lifted the championship ______ before cheering fans.",
      "translation": "国家足球队在欢呼的球迷面前得意洋洋地举起了冠军奖杯。"
    },
    "form_confusables": [
      {
        "word": "cup",
        "zh": "杯子；奖杯"
      },
      {
        "word": "cap",
        "zh": "帽子；上限"
      },
      {
        "word": "cut",
        "zh": "切割；伤口"
      },
      {
        "word": "cop",
        "zh": "警察"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cup",
        "zh": "奖杯；茶杯 (带把手饮具或优胜杯)"
      },
      {
        "word": "mug",
        "zh": "马克杯；大杯 (直筒厚壁带柄杯)"
      },
      {
        "word": "trophy",
        "zh": "奖杯；战利品 (优胜者纪念物)"
      },
      {
        "word": "glass",
        "zh": "玻璃杯；高脚杯"
      }
    ],
    "notes": "【搭配考点】a cup of tea 一杯茶/合心意的事物 (not my cup of tea)；World Cup 世界杯；in one's cups 喝醉酒；cup one's hands 双手围成杯状；【形近辨析】cap (帽子/限额), cut (剪切), cop (警察)；【近义辨析】cup 专指带把手喝茶咖啡的小杯，或体育竞技中杯状的流动锦标奖杯；mug 指容量更大、杯壁更厚的直筒马克杯；trophy 是各类体育艺术锦标奖杯、奖盘、盾牌的正式总称；glass 专指透明玻璃材质的饮水酒杯。"
  },
  "curiosity": {
    "word": "curiosity",
    "zh": "好奇心；求知欲；奇品",
    "translation": "好奇心；求知欲；奇品",
    "cloze": {
      "sentence": "Scientific breakthroughs are frequently driven by boundless human ______ about the natural world.",
      "translation": "科学突破往往由人类对自然界无止境的好奇心所驱动。"
    },
    "form_confusables": [
      {
        "word": "curiosity",
        "zh": "好奇心；奇品"
      },
      {
        "word": "furious",
        "zh": "暴怒的；狂暴的"
      },
      {
        "word": "security",
        "zh": "安全；保证"
      },
      {
        "word": "priority",
        "zh": "优先权；重点"
      }
    ],
    "semantic_confusables": [
      {
        "word": "curiosity",
        "zh": "好奇心；求知欲 (探究未知的本能)"
      },
      {
        "word": "inquisitiveness",
        "zh": "好打听；追根究底"
      },
      {
        "word": "wonder",
        "zh": "惊奇；敬畏赞叹"
      },
      {
        "word": "interest",
        "zh": "兴趣；关注"
      }
    ],
    "notes": "【搭配考点】curiosity killed the cat 好奇害死猫；out of curiosity 出于好奇；satisfy/arouse curiosity 满足/唤起好奇心；an antique curiosity 古玩珍品；【形近辨析】furious (愤怒的), security (安全防卫), priority (优先事项)；【近义辨析】curiosity 指想弄明白新奇事物的求知本能，有时指罕见古董小玩物；inquisitiveness 侧重喜欢追问细节甚至爱管闲事打探他人私事；wonder 强调面对未知壮景时由衷生出的赞叹与惊异；interest 泛指注意力被吸引的普遍兴趣。"
  },
  "currently": {
    "word": "currently",
    "zh": "当前；目前",
    "translation": "当前；目前",
    "cloze": {
      "sentence": "Engineers are ______ upgrading the operating system to patch severe security vulnerabilities.",
      "translation": "工程师们目前正在升级操作系统，以修补严重的底层安全漏洞。"
    },
    "form_confusables": [
      {
        "word": "currently",
        "zh": "当前；目前"
      },
      {
        "word": "currency",
        "zh": "货币；流传"
      },
      {
        "word": "correctly",
        "zh": "正确地"
      },
      {
        "word": "curiously",
        "zh": "好奇地；奇怪地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "currently",
        "zh": "目前；现阶段 (着眼眼下进展)"
      },
      {
        "word": "presently",
        "zh": "目前；不久；即将"
      },
      {
        "word": "nowadays",
        "zh": "现如今；当下 (与往昔对照)"
      },
      {
        "word": "at present",
        "zh": "目前；现在 (此刻具体时间点)"
      }
    ],
    "notes": "【搭配考点】currently available 当前可用的；currently under review 目前正在审查中；currently held 当前持有的；【形近辨析】currency (法定货币), correctly (正确地), curiously (好奇地/奇怪的是)；【近义辨析】currently 最标准，强调某动作或状态在此时此刻正在进行或维持；presently 亦可表示目前，但亦常指“不久/很快”；nowadays 侧重时代变迁，与过去几十年前的传统做法作对照；at present 与 currently 语义接近，侧重此刻当下的暂时状态。"
  },
  "curriculum": {
    "word": "curriculum",
    "zh": "课程体系；全部课程",
    "translation": "课程体系；全部课程",
    "cloze": {
      "sentence": "The ministry of education introduced coding and data literacy into the national school ______.",
      "translation": "教育部将编程和数据素养纳入了国家学校课程体系。"
    },
    "form_confusables": [
      {
        "word": "curriculum",
        "zh": "全部课程体系"
      },
      {
        "word": "circular",
        "zh": "圆形的；通函"
      },
      {
        "word": "circulation",
        "zh": "发行量；血液循环"
      },
      {
        "word": "circumstance",
        "zh": "客观环境；情况"
      }
    ],
    "semantic_confusables": [
      {
        "word": "curriculum",
        "zh": "课程体系；总课程 (全部科目总和)"
      },
      {
        "word": "syllabus",
        "zh": "教学大纲；课程提纲 (单科进度大纲)"
      },
      {
        "word": "course",
        "zh": "具体专题课程"
      },
      {
        "word": "program",
        "zh": "培养方案；培养规划"
      }
    ],
    "notes": "【搭配考点】school/national curriculum 学校/国家课程；core curriculum 核心必修课程；curriculum vitae (CV) 个人履历表；extra-curricular activities 课外活动；【形近辨析】circular (圆形的/通知), circulation (循环/发行量), circumstance (境遇/环境)；【近义辨析】curriculum 指学校或教育系统全部课程设置的宏观总称；syllabus 专指某位任课教师分发给学生的某门课具体进度与评分大纲；course 指单门具体的独立课程；program 侧重学位授予的整体培养方案。"
  },
  "curve": {
    "word": "curve",
    "zh": "曲线；弯道；弯曲",
    "translation": "曲线；弯道；弯曲",
    "cloze": {
      "sentence": "Drivers must reduce their speed before navigating the treacherous mountain ______.",
      "translation": "司机在驶过危险的山路急弯之前必须减速。"
    },
    "form_confusables": [
      {
        "word": "curve",
        "zh": "曲线；弯道"
      },
      {
        "word": "carve",
        "zh": "雕刻；切肉"
      },
      {
        "word": "cure",
        "zh": "治愈；疗法"
      },
      {
        "word": "curb",
        "zh": "控制；路缘石"
      }
    ],
    "semantic_confusables": [
      {
        "word": "curve",
        "zh": "弯曲；弯道；曲线 (平滑渐进弧度)"
      },
      {
        "word": "bend",
        "zh": "弯曲处；拐弯 (明显转角急弯)"
      },
      {
        "word": "arc",
        "zh": "圆弧；弧光 (圆周的一段)"
      },
      {
        "word": "loop",
        "zh": "环形；环路 (闭合圈)"
      }
    ],
    "notes": "【搭配考点】learning curve 学习曲线；ahead of the curve 领跑潮流/占得先机；growth curve 增长曲线；sharp curve 急转弯；【形近辨析】carve (雕琢), cure (治疗), curb (抑制/路边镶边石)；【近义辨析】curve 侧重平滑流畅的圆润弧线或数学图表曲线；bend 侧重公路、河流明显的转向拐角；arc 专指几何学中的圆弧线或空中飞行的抛物轨迹；loop 强调弯成闭环或绳套圈。"
  },
  "custom": {
    "word": "custom",
    "zh": "风俗；习俗；海关",
    "translation": "风俗；习俗；海关",
    "cloze": {
      "sentence": "It is an ancient local ______ to exchange gifts and red envelopes on New Year's Day.",
      "translation": "在元旦互赠礼物和红包是当地古老的风俗习惯。"
    },
    "form_confusables": [
      {
        "word": "custom",
        "zh": "习俗；海关"
      },
      {
        "word": "costume",
        "zh": "戏服；服装"
      },
      {
        "word": "customer",
        "zh": "顾客；买主"
      },
      {
        "word": "custody",
        "zh": "监护权；拘留"
      }
    ],
    "semantic_confusables": [
      {
        "word": "custom",
        "zh": "习俗；风俗习惯 (社会遵从做法)"
      },
      {
        "word": "tradition",
        "zh": "传统；传统观念 (历史传承)"
      },
      {
        "word": "habit",
        "zh": "习惯 (个人经常行为)"
      },
      {
        "word": "practice",
        "zh": "常规做法；惯例"
      }
    ],
    "notes": "【搭配考点】local/ancient custom 地方/古老风俗；customs clearance 海关清关；custom-made 定制的；break with custom 打破习俗；【形近辨析】costume (戏服/化装服), customer (客户), custody (监护/羁押)；【近义辨析】custom 侧重特定社会群体公认的风俗礼仪习惯，复数 customs 为海关；tradition 强调经年累月代代相承的思想或文化遗风；habit 专指个人养成的生活行为习惯；practice 强调专业领域行之有效的实务操练与惯例。"
  },
  "customer": {
    "word": "customer",
    "zh": "顾客；客户；买家",
    "translation": "顾客；客户；买家",
    "cloze": {
      "sentence": "Our dedicated support team strives to ensure complete ______ satisfaction with every purchase.",
      "translation": "我们热忱的支持团队努力确保顾客对每次购买都感到完全满意。"
    },
    "form_confusables": [
      {
        "word": "customer",
        "zh": "顾客；买主"
      },
      {
        "word": "custom",
        "zh": "习俗；海关"
      },
      {
        "word": "costume",
        "zh": "服装；服饰"
      },
      {
        "word": "consumer",
        "zh": "消费者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "customer",
        "zh": "顾客；买家 (购买商品服务的具体对象)"
      },
      {
        "word": "client",
        "zh": "委托人；客户 (长期专业咨询委托人)"
      },
      {
        "word": "patron",
        "zh": "老主顾；赞助人 (经常光顾常客)"
      },
      {
        "word": "shopper",
        "zh": "购物者；逛街者"
      }
    ],
    "notes": "【搭配考点】customer satisfaction/service 客户满意度/服务；loyal customer 忠诚老顾客；customer base 客户群体；potential customer 潜在买家；【形近辨析】custom (习俗/海关), costume (剧场服装), consumer (经济学终端消费者)；【近义辨析】customer 指商场、超市、网店具体掏钱购买物品的购买者；client 侧重指长期聘请专业律师、会计师、咨询机构的托办业务客户；patron 偏正式高雅，指剧院、画廊、餐厅的资助人或座上宾常客；shopper 专指在商场货架前流连挑选的实际购物者。"
  },
  "cut": {
    "word": "cut",
    "zh": "削减；剪切；伤口",
    "translation": "削减；剪切；伤口",
    "cloze": {
      "sentence": "The enterprise had to ______ operating costs drastically to remain competitive during the downturn.",
      "translation": "该企业不得不大幅削减运营成本，以在经济低迷期保持竞争力。"
    },
    "form_confusables": [
      {
        "word": "cut",
        "zh": "切；削减"
      },
      {
        "word": "cub",
        "zh": "幼兽"
      },
      {
        "word": "cup",
        "zh": "杯子；奖杯"
      },
      {
        "word": "cute",
        "zh": "可爱的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cut",
        "zh": "削减；裁剪；切除 (果断降低指标)"
      },
      {
        "word": "reduce",
        "zh": "减少；降低 (使数量程度变小)"
      },
      {
        "word": "trim",
        "zh": "修剪；削减 (剔除赘余使其精干)"
      },
      {
        "word": "slash",
        "zh": "猛砍；大幅削减 (大刀阔斧削减)"
      }
    ],
    "notes": "【搭配考点】cut costs/taxes 削减成本/减税；cut down on 减少摄入/消耗；cut corners 走捷径/偷工减料；a deep cut 严重伤口；short cut 捷径；【形近辨析】cub (熊虎幼崽), cup (茶杯), cute (可爱的)；【近义辨析】cut 日常通用，作削减时强调动作果断砍掉部分指标；reduce 侧重渐进或由大到小使指标下降；trim 强调像修剪树枝一般剪掉边角赘肉使机构精简；slash 形象鲜明，指以极大幅度剧烈猛砍价格或预算。"
  },
  "cycle": {
    "word": "cycle",
    "zh": "循环；周期；自行车",
    "translation": "循环；周期；自行车",
    "cloze": {
      "sentence": "Meteorologists studied the recurring ______ of droughts and floods in the river basin.",
      "translation": "气象学家研究了该流域旱涝灾害周而复始的发生周期。"
    },
    "form_confusables": [
      {
        "word": "cycle",
        "zh": "循环；周期；自行车"
      },
      {
        "word": "circle",
        "zh": "圆圈；圆周；圈子"
      },
      {
        "word": "recycle",
        "zh": "回收利用"
      },
      {
        "word": "cyclone",
        "zh": "旋风；气旋"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cycle",
        "zh": "循环周期；循环过程 (周而复始完整循环)"
      },
      {
        "word": "round",
        "zh": "一轮；回合 (单次重复进行的轮次)"
      },
      {
        "word": "phase",
        "zh": "阶段；时期 (发展特定片段)"
      },
      {
        "word": "period",
        "zh": "时代；时期；学时"
      }
    ],
    "notes": "【搭配考点】business/economic cycle 商业/经济周期；life cycle 生命史/生命周期；vicious cycle 恶性循环；water cycle 水循环；【形近辨析】circle (圆形/社交圈), recycle (循环再生), cyclone (气旋风暴)；【近义辨析】cycle 强调从起点出发经过系列阶段最终又回到起点的循环往复过程；round 指一系列动作、谈判或比赛中的单一一轮；phase 指事物整体发展流程中的某一个形态或过渡阶段；period 强调有明确起止时间的一段较长时期。"
  },
  "insufferable": {
    "word": "insufferable",
    "zh": "难以忍受的；难耐的",
    "translation": "难以忍受的；难耐的",
    "cloze": {
      "sentence": "His arrogant demeanor and endless bragging made him completely ______ to his coworkers.",
      "translation": "他傲慢的举止和无休止的吹嘘让他所有的同事完全无法容忍。"
    },
    "form_confusables": [
      {
        "word": "insufferable",
        "zh": "难以忍受的"
      },
      {
        "word": "intolerable",
        "zh": "无法容忍的"
      },
      {
        "word": "insuperable",
        "zh": "难以克服的"
      },
      {
        "word": "inseparable",
        "zh": "密不可分的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "insufferable",
        "zh": "难以忍受的；令人厌恶的 (言行自负傲慢)"
      },
      {
        "word": "unbearable",
        "zh": "难以承受的 (肉体痛苦负担)"
      },
      {
        "word": "intolerable",
        "zh": "不可容忍的 (违背原则底线)"
      },
      {
        "word": "obnoxious",
        "zh": "极可憎的；令人反感的"
      }
    ],
    "notes": "【搭配考点】insufferable arrogance/pride 令人难以忍受的傲慢/自大；find sb insufferable 觉得某人受不了；insufferable heat 难以忍耐的高热；【形近辨析】insuperable (无法逾越克服的困难), inseparable (形影不离的), intolerable (不可容忍的)；【近义辨析】insufferable 常带强烈的鄙视与厌烦情绪，多形容某人的性格、举止傲慢令人无法与其共处；unbearable 侧重于感官或肉体上的剧烈疼痛、沉重负担；intolerable 强调政治苛政、道德侮辱突破底线；obnoxious 侧重让人感到恶心、讨厌的反感举动。"
  },
  "hesitate": {
    "word": "hesitate",
    "zh": "犹豫；踌躇",
    "translation": "犹豫；踌躇",
    "cloze": {
      "sentence": "Please do not ______ to reach out if you require additional guidance on this project.",
      "translation": "如果您对该项目需要进一步的指导，请随时与我们联系，不要犹豫。"
    },
    "form_confusables": [
      {
        "word": "hesitate",
        "zh": "犹豫；踌躇"
      },
      {
        "word": "meditate",
        "zh": "冥想；沉思"
      },
      {
        "word": "irritate",
        "zh": "激怒；刺激"
      },
      {
        "word": "gravitate",
        "zh": "倾向于；被吸引"
      }
    ],
    "semantic_confusables": [
      {
        "word": "hesitate",
        "zh": "犹豫；踌躇 (行动前停顿迟疑)"
      },
      {
        "word": "falter",
        "zh": "犹豫动摇；踉跄 (信心受挫动摇)"
      },
      {
        "word": "vacillate",
        "zh": "举棋不定；摇摆 (对立选择中拉锯)"
      },
      {
        "word": "pause",
        "zh": "暂停；中止 (暂时中顿)"
      }
    ],
    "notes": "【搭配考点】hesitate to do sth 迟疑做某事；without hesitation 毫不犹豫地；hesitate about/over 对...拿不定主意；【形近辨析】meditate (冥想冥思), irritate (激怒/引起发炎), gravitate (向心力吸引/倾向)；【近义辨析】hesitate 强调因怀疑、担忧或害怕而在片刻间停滞不前、不敢下手；falter 强调意志动摇、言语结巴或力量衰退步伐蹒跚；vacillate 指心意游移不定、在两种选项间来回拉锯；pause 侧重为了思考、换气或休整而暂时客观中顿。"
  },
  "overreact": {
    "word": "overreact",
    "zh": "反应过激；反应过度",
    "translation": "反应过激；反应过度",
    "cloze": {
      "sentence": "It is vital to remain objective and not ______ to short-term market fluctuations.",
      "translation": "保持客观且不对短期的市场波动做出过度反应是至关重要的。"
    },
    "form_confusables": [
      {
        "word": "overreact",
        "zh": "反应过激"
      },
      {
        "word": "interact",
        "zh": "互动；相互作用"
      },
      {
        "word": "counteract",
        "zh": "抵消；抵抗"
      },
      {
        "word": "retroactive",
        "zh": "追溯的；有追溯效力的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "overreact",
        "zh": "反应过火；大惊小怪 (剧烈程度过高)"
      },
      {
        "word": "exaggerate",
        "zh": "夸大；夸张 (言语渲染过甚)"
      },
      {
        "word": "overstate",
        "zh": "夸大陈述 (陈述超出事实)"
      },
      {
        "word": "panic",
        "zh": "恐慌；惊慌失措 (恐惧慌乱)"
      }
    ],
    "notes": "【搭配考点】overreact to 对...反应过度；tend to overreact 往往容易小题大做；do not overreact 别大惊小怪；【形近辨析】interact (互动交流), counteract (中和抵消), retroactive (有追溯力的)；【近义辨析】overreact 强调在心理情绪或实际行动上过度小题大做、反应过于激烈；exaggerate 侧重言辞讲述、宣传上添枝加叶夸张渲染；overstate 强调书面或正式报表中把事实陈述过高；panic 强调由于突如其来的恐惧陷入慌乱无序的状态。"
  },
  "interpersonal": {
    "word": "interpersonal",
    "zh": "人际的；人与人之间的",
    "translation": "人际的；人与人之间的",
    "cloze": {
      "sentence": "Successful diplomats possess exceptional ______ skills and emotional intelligence.",
      "translation": "成功的外交官拥有卓越的人际沟通技巧和极高的情商。"
    },
    "form_confusables": [
      {
        "word": "interpersonal",
        "zh": "人际的"
      },
      {
        "word": "impersonal",
        "zh": "不讲人情的；冷淡的"
      },
      {
        "word": "personal",
        "zh": "个人的；私人的"
      },
      {
        "word": "personality",
        "zh": "个性；人格"
      }
    ],
    "semantic_confusables": [
      {
        "word": "interpersonal",
        "zh": "人际关系的 (处世相处交往能力)"
      },
      {
        "word": "social",
        "zh": "社会的；社交的 (关乎群体活动)"
      },
      {
        "word": "communicative",
        "zh": "善于交际的；沟通的"
      },
      {
        "word": "relational",
        "zh": "关系的；相关的"
      }
    ],
    "notes": "【搭配考点】interpersonal skills 人际交往能力；interpersonal relationships 人际关系；interpersonal communication 人际沟通；interpersonal conflict 人际冲突；【形近辨析】impersonal (冷若冰霜的/非个人的), personal (私密的/个人的), personality (性格特征)；【近义辨析】interpersonal 专指个人在社交、职场中与他人相处共事的双向人际交往能力；social 侧重整个社会的宏观社群结构或社交派对；communicative 强调通过口头语言准确传情达意的沟通才干；relational 偏向逻辑、哲学或数据库上的关系建构。"
  },
  "retaliate": {
    "word": "retaliate",
    "zh": "报复；反击",
    "translation": "报复；反击",
    "cloze": {
      "sentence": "The military warned that any unprovoked border aggression would be met with swift and decisive efforts to ______.",
      "translation": "军方警告称，任何毫无道理的边境侵略都将遭到迅速果断的反击。"
    },
    "form_confusables": [
      {
        "word": "retaliate",
        "zh": "报复；反击"
      },
      {
        "word": "replicate",
        "zh": "复制；重复"
      },
      {
        "word": "rehabilitate",
        "zh": "康复；平反"
      },
      {
        "word": "calculate",
        "zh": "计算；演算"
      }
    ],
    "semantic_confusables": [
      {
        "word": "retaliate",
        "zh": "报复；回击 (对所受损害发起对等还击)"
      },
      {
        "word": "revenge",
        "zh": "报仇；雪恨 (个人怨恨私愤)"
      },
      {
        "word": "avenge",
        "zh": "雪耻；替天行道 (为正义受害人报仇)"
      },
      {
        "word": "strike back",
        "zh": "予以反击；还手"
      }
    ],
    "notes": "【搭配考点】retaliate against 对...进行报复；retaliate by doing 以做某事作为反击；threaten to retaliate 威胁实施报复；retaliatory tariffs 报复性关税；【形近辨析】replicate (复制复印), rehabilitate (戒瘾康复/恢复名誉), calculate (计算)；【近义辨析】retaliate 偏向政治军事与商业领域的以牙还牙、对等反击措施；revenge 带有浓厚的个人复仇心与泄愤私怨；avenge 带有崇高的正义色彩，指为受到冤屈侵害的弱者洗雪耻辱；strike back 是行动上的快速还击。"
  },
  "confidential": {
    "word": "confidential",
    "zh": "机密的；秘密的",
    "translation": "机密的；秘密的",
    "cloze": {
      "sentence": "The whistleblower leaked thousands of pages of strictly ______ diplomatic cables.",
      "translation": "该告密者泄露了数千页属于绝密的机密外交电报。"
    },
    "form_confusables": [
      {
        "word": "confidential",
        "zh": "机密的；秘密的"
      },
      {
        "word": "confident",
        "zh": "自信的；确信的"
      },
      {
        "word": "presidential",
        "zh": "总统的；首脑的"
      },
      {
        "word": "residential",
        "zh": "住宅的；居住的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "confidential",
        "zh": "机密的；受保密约束的 (不公开资料)"
      },
      {
        "word": "secret",
        "zh": "秘密的；暗中的 (刻意隐匿不公开)"
      },
      {
        "word": "classified",
        "zh": "涉密的；定级的 (国家安全部门定密)"
      },
      {
        "word": "private",
        "zh": "私人的；隐秘的"
      }
    ],
    "notes": "【搭配考点】strictly confidential 绝密/严格保密；confidential information/document 机密信息/文件；confidential clerk 亲信秘书；in strict confidence 极度保密地；【形近辨析】confident (充满信心的), presidential (总统首脑的), residential (居民小区的)；【近义辨析】confidential 强调具有信托责任或受保密协议 NDA 保护的商业或个人档案；secret 泛指隐藏不让人见闻的秘密；classified 专指国防与情报部门盖有“机密/绝密”红色印章的国家安全档案；private 强调纯属私生活隐私、与公共无关。"
  },
  "extortion": {
    "word": "extortion",
    "zh": "敲诈；勒索",
    "translation": "敲诈；勒索",
    "cloze": {
      "sentence": "The crime syndicate operated a lucrative ______ racket targeting small business owners.",
      "translation": "该犯罪集团经营着专门针对小企业主的敲诈勒索勾当，牟取暴利。"
    },
    "form_confusables": [
      {
        "word": "extortion",
        "zh": "敲诈；勒索"
      },
      {
        "word": "distortion",
        "zh": "扭曲；曲解"
      },
      {
        "word": "execution",
        "zh": "执行；处决"
      },
      {
        "word": "excretion",
        "zh": "排泄；分泌物"
      }
    ],
    "semantic_confusables": [
      {
        "word": "extortion",
        "zh": "敲诈；勒索 (暴力威胁敲取财物)"
      },
      {
        "word": "blackmail",
        "zh": "敲诈；要挟 (利用丑闻隐私敲诈)"
      },
      {
        "word": "ransom",
        "zh": "赎金；赎回 (绑架人质索款)"
      },
      {
        "word": "robbery",
        "zh": "抢劫；暴力强夺"
      }
    ],
    "notes": "【搭配考点】extortion scheme/racket 敲诈勒索阴谋/犯罪网络；guilty of extortion 犯有勒索罪；extort money from 从...敲诈金钱；【形近辨析】distortion (声音失真/观点扭曲), execution (贯彻执行/死刑), excretion (生理排泄)；【近义辨析】extortion 指依靠权势、暴力恐吓或黑帮保护费强迫对方交钱的重罪；blackmail 侧重拿捏对方不可告人的隐私黑料进行要挟索财；ransom 特指绑架撕票案中所索要的释放人质赎金；robbery 强调当面动用刀枪器械硬抢现钱财物。"
  },
  "sabotage": {
    "word": "sabotage",
    "zh": "蓄意破坏；暗中破坏",
    "translation": "蓄意破坏；暗中破坏",
    "cloze": {
      "sentence": "Rebel operatives managed to ______ the enemy's ammunition depot deep behind lines.",
      "translation": "叛军特工成功潜入敌后深处，暗中破坏了敌方的弹药库。"
    },
    "form_confusables": [
      {
        "word": "sabotage",
        "zh": "暗中破坏；蓄意摧毁"
      },
      {
        "word": "salvage",
        "zh": "打捞；挽救"
      },
      {
        "word": "bondage",
        "zh": "奴役；束缚"
      },
      {
        "word": "advantage",
        "zh": "优势；有利条件"
      }
    ],
    "semantic_confusables": [
      {
        "word": "sabotage",
        "zh": "蓄意破坏 (暗中破坏妨碍运转)"
      },
      {
        "word": "undermine",
        "zh": "暗中削弱；暗中动摇 (从基底掏空)"
      },
      {
        "word": "vandalize",
        "zh": "恶意毁坏 (涂鸦损毁公共设施)"
      },
      {
        "word": "demolish",
        "zh": "拆除；推毁 (工程大拆大卸)"
      }
    ],
    "notes": "【搭配考点】sabotage peace talks 破坏和谈；act of sabotage 蓄意破坏行径；economic sabotage 经济破坏；sabotage equipment 破坏设备；【形近辨析】salvage (沉船打捞/挽回损失), bondage (束缚奴役), advantage (优势好处)；【近义辨析】sabotage 特指工人在工厂故意毁坏机器以示抗议，或特工在敌后实施的战术爆破阻挠；undermine 侧重潜移默化地动摇威信或健康根基；vandalize 专指地痞流氓在街头公物上涂鸦砸烂玻璃；demolish 强调工程上的大拆大卸或辩论中将论点驳得体无完肤。"
  },
  "empathy": {
    "word": "empathy",
    "zh": "同理心；神入；共情",
    "translation": "同理心；神入；共情",
    "cloze": {
      "sentence": "Skilled psychologists must develop deep ______ to connect meaningfully with troubled patients.",
      "translation": "成熟的心理学家必须建立深厚的同理心，以与受困扰的患者产生有意义的情感共鸣。"
    },
    "form_confusables": [
      {
        "word": "empathy",
        "zh": "同理心；共鸣"
      },
      {
        "word": "sympathy",
        "zh": "同情；怜悯"
      },
      {
        "word": "apathy",
        "zh": "冷漠；漠然"
      },
      {
        "word": "antipathy",
        "zh": "反感；厌恶"
      }
    ],
    "semantic_confusables": [
      {
        "word": "empathy",
        "zh": "同理心；共情 (设身处地感同身受)"
      },
      {
        "word": "sympathy",
        "zh": "同情心 (对不幸者的怜悯哀叹)"
      },
      {
        "word": "compassion",
        "zh": "同情怜悯；慈悲心 (渴望予以救助)"
      },
      {
        "word": "understanding",
        "zh": "理解；包容明白"
      }
    ],
    "notes": "【搭配考点】feel/show empathy for 对...展现共情；develop empathy 培养同理心；lack empathy 缺乏共情能力；empathy gap 同理心鸿沟；【形近辨析】sympathy (同情怜惜), apathy (麻木漠然), antipathy (根深蒂固的反感)；【近义辨析】empathy 强调能够完全感同身受地体察他人喜怒哀乐并感其所感；sympathy 侧重因他人遭受不幸而发出的慰问哀悯；compassion 强调兼具慈悲悲悯心并切实渴望采取救助行动；understanding 侧重在逻辑和认知层面体谅他人的难处。"
  },
  "conspire": {
    "word": "conspire",
    "zh": "密谋；共谋",
    "translation": "密谋；共谋",
    "cloze": {
      "sentence": "A small faction of disaffected officers met secretly to ______ against the general.",
      "translation": "一小撮心怀不满的军官秘密集会，密谋反抗该将军。"
    },
    "form_confusables": [
      {
        "word": "conspire",
        "zh": "密谋；图谋"
      },
      {
        "word": "inspire",
        "zh": "激发；启迪"
      },
      {
        "word": "expire",
        "zh": "到期；断气"
      },
      {
        "word": "perspire",
        "zh": "出汗；流汗"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conspire",
        "zh": "密谋；共谋 (秘密图谋反叛或不利)"
      },
      {
        "word": "plot",
        "zh": "暗中策划；密谋方案"
      },
      {
        "word": "collude",
        "zh": "串通；勾结 (商业操纵舞弊)"
      },
      {
        "word": "scheme",
        "zh": "搞阴谋；耍手腕算计"
      }
    ],
    "notes": "【搭配考点】conspire against sb 图谋陷害某人；conspire to do 密谋做某事；events conspired to defeat us 天意弄人/诸事共同致败；conspiracy theory 阴谋论；【形近辨析】inspire (鼓舞灵感), expire (护照到期/呼出气), perspire (流汗)；【近义辨析】conspire 既可指人搞秘密政治暗杀阴谋，亦极常用指多种不良客观因素巧合叠加致祸；plot 强调对阴谋方案的细致谋划构思；collude 专指两家企业串通操纵价格或商业舞弊；scheme 侧重为牟取不正当好处动用心机算计。"
  },
  "compounded": {
    "word": "compounded",
    "zh": "加重的；复合的",
    "translation": "加重的；复合的",
    "cloze": {
      "sentence": "Her mounting financial distress was ______ by sudden unexpected medical emergencies.",
      "translation": "突如其来的意外医疗紧急状况使她日益加重的财务困境雪上加霜。"
    },
    "form_confusables": [
      {
        "word": "compounded",
        "zh": "加重的；混合的"
      },
      {
        "word": "confounded",
        "zh": "困惑的；被弄糊涂的"
      },
      {
        "word": "bounded",
        "zh": "有界的；受限制的"
      },
      {
        "word": "sounded",
        "zh": "听起来的；测深的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compounded",
        "zh": "加剧恶化的；复合构成的 (痛苦成倍叠加)"
      },
      {
        "word": "aggravated",
        "zh": "被激化的；加重的 (外界刺激加重)"
      },
      {
        "word": "exacerbated",
        "zh": "恶化的；加剧的 (问题更尖锐)"
      },
      {
        "word": "worsened",
        "zh": "走向更糟的"
      }
    ],
    "notes": "【搭配考点】compounded by 受...加剧/雪上加霜；compounded interest 复利；compounded medication 配制复合药剂；【形近辨析】confounded (困惑惊愕的), bounded (有边界的), sounded (发出声音的)；【近义辨析】compounded 强调在原有困境上像加法叠加一样加入新要素使痛苦翻倍，金融上指利滚利计算；aggravated 侧重外界刺激使法律罪责或疾病症状激化；exacerbated 侧重问题、危机变得更加尖锐难解；worsened 强调状态单纯走向更糟。"
  },
  "incognito": {
    "word": "incognito",
    "zh": "隐姓埋名的；改名的",
    "translation": "隐姓埋名的；改名的",
    "cloze": {
      "sentence": "The famous movie star traveled through the crowded European city entirely ______ wearing dark sunglasses.",
      "translation": "这位著名影星戴着深色太阳镜，完全隐姓埋名地穿行在拥挤的欧洲城市中。"
    },
    "form_confusables": [
      {
        "word": "incognito",
        "zh": "隐瞒身份的；微服出访的"
      },
      {
        "word": "cognitive",
        "zh": "认知的；感知的"
      },
      {
        "word": "recognition",
        "zh": "认出；识别"
      },
      {
        "word": "agnostic",
        "zh": "不可知论者"
      }
    ],
    "semantic_confusables": [
      {
        "word": "incognito",
        "zh": "隐姓埋名的；微服出访的 (掩饰名号轻装)"
      },
      {
        "word": "disguised",
        "zh": "伪装改扮的 (改变外貌容颜)"
      },
      {
        "word": "anonymous",
        "zh": "匿名的 (不署名发表)"
      },
      {
        "word": "undercover",
        "zh": "便衣卧底的 (秘密潜伏破案)"
      }
    ],
    "notes": "【搭配考点】travel/live incognito 隐姓埋名出行/隐居；preserve one's incognito 保持身份保密；go incognito 微服私访；【形近辨析】cognitive (认知思维的), recognition (承认识别), agnostic (不可知论者)；【近义辨析】incognito 源自意大利语，特指名人、皇室为图清静掩饰名号轻装出游；disguised 侧重物理上化装戴面具改头换面；anonymous 侧重未署名、匿名捐款或发帖；undercover 专指警察或侦探伪装身份深入虎穴执行卧底破案。"
  },
  "consolidation": {
    "word": "consolidation",
    "zh": "巩固；合并；盘整",
    "translation": "巩固；合并；盘整",
    "cloze": {
      "sentence": "The merger will lead to significant industrial ______ across the domestic aviation sector.",
      "translation": "此次兼并将在国内航空领域引发重大的产业整合与集中。"
    },
    "form_confusables": [
      {
        "word": "consolidation",
        "zh": "巩固；整合"
      },
      {
        "word": "consideration",
        "zh": "考虑；体谅"
      },
      {
        "word": "constellation",
        "zh": "星座；星群"
      },
      {
        "word": "consultation",
        "zh": "咨询；商议"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consolidation",
        "zh": "整合；盘整巩固 (收拢分散要素强化)"
      },
      {
        "word": "integration",
        "zh": "一体化；融合 (协同融为一体)"
      },
      {
        "word": "unification",
        "zh": "统一；归一 (体制疆域归并)"
      },
      {
        "word": "merger",
        "zh": "兼并；企业合并"
      }
    ],
    "notes": "【搭配考点】debt consolidation 债务合并重组；consolidation of power 巩固政权；market consolidation 市场整合/行情盘整；fiscal consolidation 财政整顿；【形近辨析】consideration (考虑), constellation (星座星盘), consultation (专家会诊/磋商)；【近义辨析】consolidation 强调把松散的多家分支兼并集中为更强大精简的实体，或把原有成果夯实加固；integration 侧重各系统之间互联互通、融为一体；unification 侧重政治或法典的统合一体；merger 特指两家平级公司合法合规地合二为一。"
  },
  "unprecedented": {
    "word": "unprecedented",
    "zh": "前所未有的；史无前例的",
    "translation": "前所未有的；史无前例的",
    "cloze": {
      "sentence": "The global pandemic triggered an ______ disruption to international trade and travel.",
      "translation": "这场全球疫情对国际贸易和旅行造成了前所未有的巨大冲击。"
    },
    "form_confusables": [
      {
        "word": "unprecedented",
        "zh": "史无前例的"
      },
      {
        "word": "unpretentious",
        "zh": "谦逊朴实的"
      },
      {
        "word": "unprotected",
        "zh": "未受保护的"
      },
      {
        "word": "unpreventable",
        "zh": "无法预防的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "unprecedented",
        "zh": "史无前例的；空前的 (无先例可考)"
      },
      {
        "word": "unparalleled",
        "zh": "无与伦比的 (绝无仅有无匹敌)"
      },
      {
        "word": "matchless",
        "zh": "举世无双的 (卓越至极)"
      },
      {
        "word": "novel",
        "zh": "新奇前所未有的 (构思形式新颖)"
      }
    ],
    "notes": "【搭配考点】at an unprecedented rate 以空前的速度；unprecedented challenge 前所未有的挑战；unprecedented scale 史无前例的规模；set an unprecedented precedent 开创前所未有的先例；【形近辨析】unpretentious (低调不自夸的), unprotected (没有保护屏障的), unpreventable (不可防范的)；【近义辨析】unprecedented 严格指以往没有任何过往判例、历史记录可供参考比对；unparalleled 强调高度、技艺或成就达到登峰造极、无同伴可并驾齐驱；matchless 侧重独一无二无双匹配；novel 侧重构思方式的新奇独到。"
  },
  "acceptable": {
    "word": "acceptable",
    "zh": "可接受的；合意的",
    "translation": "可接受的；合意的",
    "cloze": {
      "sentence": "Both labor unions and management found the revised wage proposal to be ______.",
      "translation": "工会和管理层都认为修改后的薪资提案是可以接受的。"
    },
    "form_confusables": [
      {
        "word": "acceptable",
        "zh": "可接受的"
      },
      {
        "word": "accessible",
        "zh": "易接近的；易懂的"
      },
      {
        "word": "susceptible",
        "zh": "易受影响的；敏感的"
      },
      {
        "word": "receptive",
        "zh": "乐于接纳的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "acceptable",
        "zh": "尚可接受的 (达标或基本认同)"
      },
      {
        "word": "satisfactory",
        "zh": "令人满意的 (完全符合指标)"
      },
      {
        "word": "tolerable",
        "zh": "差强人意的；可忍受的"
      },
      {
        "word": "adequate",
        "zh": "足够的；胜任的 (满足硬性需求)"
      }
    ],
    "notes": "【搭配考点】socially acceptable 社会可接受的/符合公德的；acceptable standard 合格标准；acceptable risk 可承受的风险；barely acceptable 勉强合格；【形近辨析】accessible (易进入的/平易近人的), susceptible (易感染的/过敏的), receptive (虚心纳谏的)；【近义辨析】acceptable 侧重符合起码的规范、不会引起强烈反对因而各方愿意签字接受；satisfactory 强调完全符合预期质量标准；tolerable 偏向忍耐，指虽不理想但还在忍受限度之内；adequate 侧重资源或能力在数量上足够应急。"
  },
  "persistent": {
    "word": "persistent",
    "zh": "坚持不懈的；执着的；持续的",
    "translation": "坚持不懈的；执着的；持续的",
    "cloze": {
      "sentence": "Despite multiple initial rejections, her ______ efforts eventually led to a breakthrough.",
      "translation": "尽管最初屡遭拒绝，但她坚持不懈的努力最终带来了突破。"
    },
    "form_confusables": [
      {
        "word": "persistent",
        "zh": "坚韧执着的；持续的"
      },
      {
        "word": "consistent",
        "zh": "前后一致的；连贯的"
      },
      {
        "word": "assistant",
        "zh": "助手；辅助的"
      },
      {
        "word": "resistant",
        "zh": "抵抗的；抗拒的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "persistent",
        "zh": "坚持不懈的；反复持续的 (不顾困难纠缠坚持)"
      },
      {
        "word": "persevering",
        "zh": "锲而不舍的 (饱含美德面对逆境)"
      },
      {
        "word": "tenacious",
        "zh": "顽强咬紧牙关的 (韧劲十足不松口)"
      },
      {
        "word": "relentless",
        "zh": "持续不歇的；不依不饶的"
      }
    ],
    "notes": "【搭配考点】persistent cough 顽固的咳嗽；persistent rumors 持续流言；persistent effort 坚持不懈的努力；persistent organic pollutants (POPs) 持久性有机污染物；【形近辨析】consistent (前后一致的), assistant (助手), resistant (耐...的/抗拒的)；【近义辨析】persistent 既可褒义指人在被拒后依然坚韧执着，亦可中性贬义指疾病恶疾流言久久挥之不去；persevering 纯属道德褒义，指在艰难坎坷中坚持初心；tenacious 形象突出如鹰爪抓附，强调咬紧牙关绝不松懈；relentless 侧重冷酷无情、丝毫不留喘息余地的持续推进。"
  },
  "demoralizing": {
    "word": "demoralizing",
    "zh": "令人士气低落的；令人沮丧的",
    "translation": "令人士气低落的；令人沮丧的",
    "cloze": {
      "sentence": "Suffering three consecutive defeats at home was deeply ______ for the young squad.",
      "translation": "在主场连续遭遇三场惨败，对这支年轻球队来说是极其打击士气的。"
    },
    "form_confusables": [
      {
        "word": "demoralizing",
        "zh": "令人泄气的；瓦解士气的"
      },
      {
        "word": "moralizing",
        "zh": "好说教的；讲大道理的"
      },
      {
        "word": "modernizing",
        "zh": "推行现代化的"
      },
      {
        "word": "polarizing",
        "zh": "促使两极分化的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "demoralizing",
        "zh": "瓦解斗志的；挫败士气的 (击溃军心自信)"
      },
      {
        "word": "discouraging",
        "zh": "令人气馁的 (劝退退缩)"
      },
      {
        "word": "disheartening",
        "zh": "令人心灰意冷的 (沮丧失落)"
      },
      {
        "word": "debilitating",
        "zh": "使虚弱衰竭的 (抽干精气神)"
      }
    ],
    "notes": "【搭配考点】demoralizing experience 令人丧失信心的经历；deeply demoralizing 极度挫败斗志；demoralizing effect 瓦解士气的效应；【形近辨析】moralizing (好为人师说教的), modernizing (推行现代化的), polarizing (促使两极对立的)；【近义辨析】demoralizing 专指摧毁个人或集体的战斗意志、自信心与军心士气；discouraging 侧重在具体项目推进中被重重关卡劝退；disheartening 强调在情感上感到心酸冰凉与绝望；debilitating 侧重使身体、机构机能被严重拖垮衰竭。"
  },
  "colleagues": {
    "word": "colleagues",
    "zh": "同事；同僚；同仁",
    "translation": "同事；同僚；同仁",
    "cloze": {
      "sentence": "She discussed the intriguing research findings with her university ______ at the seminar.",
      "translation": "她在研讨会上与她的大学同行同事们探讨了这些引人入胜的科研发现。"
    },
    "form_confusables": [
      {
        "word": "colleagues",
        "zh": "同事；同僚"
      },
      {
        "word": "colleges",
        "zh": "学院；大学"
      },
      {
        "word": "dialogues",
        "zh": "对话；对白"
      },
      {
        "word": "catalogues",
        "zh": "产品目录"
      }
    ],
    "semantic_confusables": [
      {
        "word": "colleagues",
        "zh": "同行同仁；同事 (专业人士/部门共事)"
      },
      {
        "word": "coworkers",
        "zh": "工友；同僚 (日常办公共事者)"
      },
      {
        "word": "associates",
        "zh": "商业伙伴；合伙人同仁"
      },
      {
        "word": "peers",
        "zh": "同侪；同行地位相当者"
      }
    ],
    "notes": "【搭配考点】former/senior colleagues 前任/资深同事；esteemed colleagues 尊敬的各位同仁；colleagues in the department 部门同事；【形近辨析】colleges (学院/专科学校), dialogues (戏剧对话), catalogues (商品目录册)；【近义辨析】colleagues 偏正式体面，常用于大学教授、医生、律师、官员等专业群体或跨机构同行之间的称谓；coworkers 最通俗，指在同一个公司办公室一起干活的工友；associates 侧重在商业运作中密切相关的合伙人或律所初级律师；peers 强调在年龄、地位、学识水平上不相上下的平级同侪。"
  },
  "cubicle": {
    "word": "cubicle",
    "zh": "小隔间；工位隔间",
    "translation": "小隔间；工位隔间",
    "cloze": {
      "sentence": "Many office workers spent decades working inside a cramped, beige corporate ______.",
      "translation": "许多上班族在狭小而米黄色的公司办公室隔间里度过了数十年光阴。"
    },
    "form_confusables": [
      {
        "word": "cubicle",
        "zh": "小隔间；办公室工位"
      },
      {
        "word": "cubic",
        "zh": "立方的；立方体的"
      },
      {
        "word": "cuticle",
        "zh": "指甲根部表皮"
      },
      {
        "word": "vehicle",
        "zh": "机动车；传播媒介"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cubicle",
        "zh": "办公隔间；淋浴小间 (矮隔板小间)"
      },
      {
        "word": "booth",
        "zh": "摊位；电话亭；展位 (半封闭小棚)"
      },
      {
        "word": "compartment",
        "zh": "车厢隔间；储物分格"
      },
      {
        "word": "workstation",
        "zh": "工位；个人工作台 (配备电脑设备)"
      }
    ],
    "notes": "【搭配考点】office cubicle 办公室隔间工位；shower cubicle 淋浴间；cubicle dweller 隔间打工人；cramped cubicle 狭窄的小隔间；【形近辨析】cubic (立方形的), cuticle (指甲根部表皮), vehicle (机动交通工具)；【近义辨析】cubicle 专指写字楼里由矮屏风隔出的开放式标准打工工位，亦指公共浴室淋浴小间；booth 指展销会展位、餐厅卡座或街头封闭电话亭；compartment 指火车软卧包厢或收纳箱内部被隔开的独立暗格；workstation 强调带有电脑显示器、接口等完整技术装备的工作台。"
  },
  "boardroom": {
    "word": "boardroom",
    "zh": "董事会会议室；高管层",
    "translation": "董事会会议室；高管层",
    "cloze": {
      "sentence": "Heated debates erupted inside the corporate ______ regarding the hostile takeover bid.",
      "translation": "在公司董事会议室内部，就敌意收购要约爆发了激烈的辩论。"
    },
    "form_confusables": [
      {
        "word": "boardroom",
        "zh": "董事会会议室"
      },
      {
        "word": "bedroom",
        "zh": "卧室"
      },
      {
        "word": "showroom",
        "zh": "展厅；陈列室"
      },
      {
        "word": "courtroom",
        "zh": "法庭审判室"
      }
    ],
    "semantic_confusables": [
      {
        "word": "boardroom",
        "zh": "董事会议室 (高层闭门决策室)"
      },
      {
        "word": "conference room",
        "zh": "大型会议厅 (举办研讨大房间)"
      },
      {
        "word": "meeting room",
        "zh": "会议室 (普通员工开会室)"
      },
      {
        "word": "council chamber",
        "zh": "议事大厅 (市政议会审议堂)"
      }
    ],
    "notes": "【搭配考点】boardroom battle 董事会斗争；boardroom politics 董事会政治；enter the boardroom 进入董事会；boardroom table 董事会议长桌；【形近辨析】bedroom (卧房), showroom (陈列展厅), courtroom (法庭审判室)；【近义辨析】boardroom 专指供公司董事会董事及高管举行高规格战略决策会议的专用会议室，常借喻商界最高决策层；conference room 指可容纳较多人员举办研讨会的正式大会议室；meeting room 是普通办公室内供日常小组开会的普通房间；council chamber 特指政府市政议会的审议大堂。"
  },
  "inventory": {
    "word": "inventory",
    "zh": "库存；存货清单；盘存",
    "translation": "库存；存货清单；盘存",
    "cloze": {
      "sentence": "Retail stores conduct an annual audit to check physical goods against their digital ______.",
      "translation": "零售店进行年度审计，以根据数字库存清单盘点实物商品。"
    },
    "form_confusables": [
      {
        "word": "inventory",
        "zh": "库存；清单"
      },
      {
        "word": "invention",
        "zh": "发明；创造"
      },
      {
        "word": "investor",
        "zh": "投资者"
      },
      {
        "word": "mandatory",
        "zh": "强制的；法定的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "inventory",
        "zh": "库存；存货清单 (商业持有储备目录)"
      },
      {
        "word": "stock",
        "zh": "现货储备；库存量 (仓库已备货)"
      },
      {
        "word": "stockpile",
        "zh": "战略储备物资 (防短缺囤积品)"
      },
      {
        "word": "catalogue",
        "zh": "商品目录册 (供订购查阅图册)"
      }
    ],
    "notes": "【搭配考点】take inventory 盘点库存；inventory control/management 库存控制/管理；excess/surplus inventory 过剩库存；inventory turnover 库存周转率；【形近辨析】invention (科技发明), investor (投资人), mandatory (强制的)；【近义辨析】inventory 侧重商品或资产的详尽清单目录与账面记录，或仓库现有存货总值；stock 强调在架或在库可供随时销售交付的现成货物；stockpile 侧重国家或企业为防范战乱断供而特别囤积的战略物资；catalogue 侧重印刷或网页展示供订购查阅的品类图册。"
  },
  "engagement": {
    "word": "engagement",
    "zh": "参与；订婚；约定",
    "translation": "参与；订婚；约定",
    "cloze": {
      "sentence": "The university introduced interactive digital seminars to boost student ______ in remote courses.",
      "translation": "该大学引入了互动式数字研讨课，以提高学生在远程课程中的参与度。"
    },
    "form_confusables": [
      {
        "word": "engagement",
        "zh": "参与；订婚；约定"
      },
      {
        "word": "arrangement",
        "zh": "安排；整理"
      },
      {
        "word": "encouragement",
        "zh": "鼓励；鼓舞"
      },
      {
        "word": "estrangement",
        "zh": "疏远；反目"
      }
    ],
    "semantic_confusables": [
      {
        "word": "engagement",
        "zh": "深度参与；投入度 (全神贯注的主动投入)"
      },
      {
        "word": "participation",
        "zh": "参与；出席 (形式上在场参加)"
      },
      {
        "word": "involvement",
        "zh": "卷入；介入 (情感事务牵连)"
      },
      {
        "word": "commitment",
        "zh": "投入；奉献承诺 (长期忠诚投身)"
      }
    ],
    "notes": "【搭配考点】student/employee engagement 学习/员工敬业参与度；rules of engagement 交战交火规则；announcement of engagement 订婚公告；prior engagement 预先约定；【形近辨析】arrangement (日程安排/编排), encouragement (激励), estrangement (夫妻/朋友反目疏远)；【近义辨析】engagement 强调精神层面的深度共鸣、主动投入与积极互动，亦指正式婚约或商务约会；participation 侧重客观形式上的出席与参与；involvement 强调与某事产生关联或身陷其中；commitment 强调出于责任感做出长期奉献承诺。"
  },
  "mandatory": {
    "word": "mandatory",
    "zh": "强制的；法定的；义务的",
    "translation": "强制的；法定的；义务的",
    "cloze": {
      "sentence": "Wearing safety helmets and high-visibility vests is strictly ______ on all construction sites.",
      "translation": "在所有建筑工地上佩戴安全头盔和反光背心都是严格强制执行的。"
    },
    "form_confusables": [
      {
        "word": "mandatory",
        "zh": "强制的；法定的"
      },
      {
        "word": "predatory",
        "zh": "捕食性的；掠夺的"
      },
      {
        "word": "sensory",
        "zh": "感觉的；感官的"
      },
      {
        "word": "salutary",
        "zh": "有益的；磨炼人的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mandatory",
        "zh": "法定强制的 (依据法规必须履行)"
      },
      {
        "word": "compulsory",
        "zh": "义务的；必修的 (制度规定必须参加)"
      },
      {
        "word": "obligatory",
        "zh": "义务性的 (出于道德责任惯例)"
      },
      {
        "word": "required",
        "zh": "要求的；必备的 (符合标准必需)"
      }
    ],
    "notes": "【搭配考点】mandatory sentence 强制法定判决；mandatory testing/quarantine 强制检测/隔离；mandatory retirement age 法定退休年龄；mandatory requirement 强制性要求；【形近辨析】predatory (掠夺性的/食肉的), sensory (感官知觉的), salutary (虽苦但有益的)；【近义辨析】mandatory 法律色彩最浓，指依据上级法令或管理条例强行规定，不服从即受处罚；compulsory 常见于教育、兵役等社会制度性规定（如 compulsory education 义务教育）；obligatory 侧重社交礼节或道德义务所约束；required 泛指满足某条件所必需的资格或材料。"
  },
  "unfortunate": {
    "word": "unfortunate",
    "zh": "不幸的；令人遗憾的",
    "translation": "不幸的；令人遗憾的",
    "cloze": {
      "sentence": "It was an extremely ______ misunderstanding that severely damaged their longstanding friendship.",
      "translation": "这是一个极其令人遗憾的误会，严重损害了他们长达多年的友谊。"
    },
    "form_confusables": [
      {
        "word": "unfortunate",
        "zh": "不幸的；令人遗憾的"
      },
      {
        "word": "fortunate",
        "zh": "幸运的；侥幸的"
      },
      {
        "word": "subordinate",
        "zh": "从属的；下级的"
      },
      {
        "word": "coordinate",
        "zh": "协调的；平等的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "unfortunate",
        "zh": "遗憾的；倒霉的 (令人惋惜的事态)"
      },
      {
        "word": "unlucky",
        "zh": "运气差的；不吉利的 (偶然运气不济)"
      },
      {
        "word": "regrettable",
        "zh": "令人悔恨的；令人遗憾的 (失误导致痛心)"
      },
      {
        "word": "disastrous",
        "zh": "灾难性的；极其惨重的"
      }
    ],
    "notes": "【搭配考点】unfortunate incident/event 令人遗憾的事件；unfortunate coincidence 不巧的巧合；it is unfortunate that 令人遗憾的是...；unfortunate choice of words 用词不当；【形近辨析】fortunate (幸运的), subordinate (下属从属的), coordinate (协调的)；【近义辨析】unfortunate 语气得体，既可指时运不济，更常用于外交公文委婉表达对某种不快事态的“深感遗憾”；unlucky 强调纯粹随机运气差掷骰子点数不好；regrettable 强调由于失误、判断不当导致使人产生悔意；disastrous 强调造成了毁灭性惨烈损失。"
  },
  "realization": {
    "word": "realization",
    "zh": "领悟；认识；实现",
    "translation": "领悟；认识；实现",
    "cloze": {
      "sentence": "He woke in the middle of the night with the sudden ______ that he had left the stove on.",
      "translation": "他在半夜猛然醒来，骤然意识到自己还开着炉子。"
    },
    "form_confusables": [
      {
        "word": "realization",
        "zh": "领悟；实现"
      },
      {
        "word": "idealization",
        "zh": "理想化"
      },
      {
        "word": "legalization",
        "zh": "合法化"
      },
      {
        "word": "civilization",
        "zh": "文明"
      }
    ],
    "semantic_confusables": [
      {
        "word": "realization",
        "zh": "幡然顿悟；彻底意识到 (在脑海突然清晰)"
      },
      {
        "word": "awareness",
        "zh": "觉察；认知意识 (知情警醒状态)"
      },
      {
        "word": "actualization",
        "zh": "具象化；自我实现 (潜能转化为实际)"
      },
      {
        "word": "fulfillment",
        "zh": "实现；履行；满足感 (愿望誓言兑现)"
      }
    ],
    "notes": "【搭配考点】come to the realization that 逐渐意识到...；the realization of one's dreams 梦想的成真；full realization 彻底领会；asset realization 资产变现；【形近辨析】idealization (过度理想化), legalization (法律合法化), civilization (社会文明)；【近义辨析】realization 侧重脑海中犹如闪电击中般突然看清真相，亦可指宏伟蓝图最终具象落地变成现实；awareness 侧重对客观危险或情况时刻保持知情警醒；actualization 心理学指潜能被充分释放的自我实现；fulfillment 强调诺言达成后内心获得的充实成就感。"
  },
  "professional": {
    "word": "professional",
    "zh": "专业的；职业的；内行",
    "translation": "专业的；职业的；内行",
    "cloze": {
      "sentence": "Doctors and attorneys are held to the highest standards of ______ ethics.",
      "translation": "医生和律师被要求恪守最高标准的职业道德规范。"
    },
    "form_confusables": [
      {
        "word": "professional",
        "zh": "专业的；职业的"
      },
      {
        "word": "provisional",
        "zh": "临时的；暂定的"
      },
      {
        "word": "processional",
        "zh": "队伍行进的"
      },
      {
        "word": "promotional",
        "zh": "促销的；推广的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "professional",
        "zh": "专业的；内行的 (受过训练高水准)"
      },
      {
        "word": "expert",
        "zh": "专家级的；熟练的 (狭窄领域造诣深)"
      },
      {
        "word": "specialized",
        "zh": "专门的；特化的 (定制专门领域)"
      },
      {
        "word": "qualified",
        "zh": "有资质的；合格的 (考取执照合格)"
      }
    ],
    "notes": "【搭配考点】professional ethics 职业道德；professional development 职业进修/素养提升；professional athlete 职业运动员；seek professional advice 寻求专业建议；【形近辨析】provisional (暂时的/临时过渡的), processional (游行行列的), promotional (广告促销的)；【近义辨析】professional 强调受过严格高等学术和实务技能训练、以其为终身正职并遵循行业规范；expert 侧重在具体技术或知识细节上无可挑剔、无所不知；specialized 侧重分工细化或专用定制；qualified 强调拿到上岗资格执照、符合法定门槛。"
  },
  "casual": {
    "word": "casual",
    "zh": "随意的；非正式的；便装",
    "translation": "随意的；非正式的；便装",
    "cloze": {
      "sentence": "Tech startups often encourage employees to wear ______ attire in the office on Fridays.",
      "translation": "科技初创企业通常鼓励员工在周五上班时穿着休闲便装。"
    },
    "form_confusables": [
      {
        "word": "casual",
        "zh": "随意的；休闲的"
      },
      {
        "word": "causal",
        "zh": "因果关系的"
      },
      {
        "word": "visual",
        "zh": "视觉的"
      },
      {
        "word": "sensual",
        "zh": "肉体感官的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "casual",
        "zh": "随意的；非正式的 (无拘无束不讲究繁文缛节)"
      },
      {
        "word": "informal",
        "zh": "非正式的 (无官僚套路程序)"
      },
      {
        "word": "relaxed",
        "zh": "放松轻松的 (心态惬意不紧张)"
      },
      {
        "word": "accidental",
        "zh": "偶然发生的；意外的"
      }
    ],
    "notes": "【搭配考点】casual clothes/wear 便装/休闲服；casual remark 随口一说的话；casual worker 临时散工；casual observer 漫不经心的旁观者；【形近辨析】causal (因果关系的 - 注意拼写字母顺序), visual (肉眼可见的), sensual (感官肉体的)；【近义辨析】casual 侧重态度随意不严肃、衣着生活方式舒适轻松，亦指漫不经心的举动；informal 侧重制度或外交场合没有严格礼仪套路；relaxed 强调肌肉紧绷感消除、心情放松惬意；accidental 强调完全出于客观偶然机缘而非预谋。"
  },
  "executive": {
    "word": "executive",
    "zh": "执行的；高级管理人员",
    "translation": "执行的；高级管理人员",
    "cloze": {
      "sentence": "The chief ______ officer presented the annual financial report to global shareholders.",
      "translation": "首席执行官向全球股东作了年度财务报告。"
    },
    "form_confusables": [
      {
        "word": "executive",
        "zh": "执行官；执行的"
      },
      {
        "word": "exclusive",
        "zh": "独家的；排他的"
      },
      {
        "word": "elusive",
        "zh": "难以捉摸的"
      },
      {
        "word": "excessive",
        "zh": "过度的；过分的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "executive",
        "zh": "高管；执行管理者 (具备拍板实权长官)"
      },
      {
        "word": "director",
        "zh": "董事；署长；总监"
      },
      {
        "word": "manager",
        "zh": "经理 (日常调度管理者)"
      },
      {
        "word": "administrator",
        "zh": "行政主管；管理员"
      }
    ],
    "notes": "【搭配考点】Chief Executive Officer (CEO) 首席执行官；executive board 执委会；executive order 总统行政令；executive suite 高管套房/高管层；【形近辨析】exclusive (独占专有的), elusive (难以捕获理解的), excessive (过度的)；【近义辨析】executive 强调具有企业或政府最高管理、签署决策执行权的高层长官；director 侧重法定董事会董事或某一职能局的局长；manager 侧重中层负责把控团队日常进度的经理；administrator 侧重按章程行使行政管理权与资源分配的官员。"
  },
  "awkward": {
    "word": "awkward",
    "zh": "尴尬的；笨拙的；棘手的",
    "translation": "尴尬的；笨拙的；棘手的",
    "cloze": {
      "sentence": "An ______ silence descended upon the dining table after the controversial topic was raised.",
      "translation": "当这个有争议的话题被提出来后，餐桌上陷入了一阵尴尬的沉默。"
    },
    "form_confusables": [
      {
        "word": "awkward",
        "zh": "尴尬的；笨拙的"
      },
      {
        "word": "backward",
        "zh": "向后的；落后的"
      },
      {
        "word": "upward",
        "zh": "向上的"
      },
      {
        "word": "inward",
        "zh": "向内的；心里的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "awkward",
        "zh": "尴尬难堪的；手足无措的 (气氛局促别扭)"
      },
      {
        "word": "embarrassing",
        "zh": "令人难堪丢脸的 (面红耳赤)"
      },
      {
        "word": "clumsy",
        "zh": "笨手笨脚的 (动作粗笨不灵)"
      },
      {
        "word": "unwieldy",
        "zh": "笨重庞大难以操纵的"
      }
    ],
    "notes": "【搭配考点】awkward silence 尴尬的沉默；feel awkward 感到局促不安；awkward question 棘手刁钻的问题；in an awkward position 处于进退两难的尴尬境地；【形近辨析】backward (倒退落后的), upward (蒸蒸日上的), inward (向内的)；【近义辨析】awkward 侧重社交场合让人感到拘谨、不自然、不知如何应对的气氛，亦指工具不合手；embarrassing 侧重因丢丑、失态让人脸红心跳的羞愧；clumsy 专指人手脚协调性差、动作笨拙滑稽；unwieldy 专指机械物体由于过大过重而难以搬动驾驭。"
  },
  "uncomfortable": {
    "word": "uncomfortable",
    "zh": "不舒服的；局促不安的",
    "translation": "不舒服的；局促不安的",
    "cloze": {
      "sentence": "The witness looked visibly ______ while enduring aggressive cross-examination from the defense attorney.",
      "translation": "证人在承受辩护律师咄咄逼人的盘问时，显得明显局促不安。"
    },
    "form_confusables": [
      {
        "word": "uncomfortable",
        "zh": "不舒服的；不安的"
      },
      {
        "word": "discomforted",
        "zh": "感到不安的"
      },
      {
        "word": "unforgettable",
        "zh": "难以忘怀的"
      },
      {
        "word": "unmanageable",
        "zh": "无法驾驭的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "uncomfortable",
        "zh": "局促不安的；身体不适的 (身心别扭难受)"
      },
      {
        "word": "uneasy",
        "zh": "心神不宁的；忐忑不安的 (担心潜在风险)"
      },
      {
        "word": "anxious",
        "zh": "焦虑紧绷的 (神经紧绷恐慌)"
      },
      {
        "word": "awkward",
        "zh": "尴尬别扭的"
      }
    ],
    "notes": "【搭配考点】make sb uncomfortable 让某人感到不舒服/难堪；an uncomfortable truth 令人难以接受的残酷真相；feel uncomfortable with 对...感到心里不踏实；uncomfortable silence 令人难受的沉默；【形近辨析】unforgettable (铭心刻骨难忘的), unmanageable (难以治理掌控的), discomforted (感到尴尬不安的)；【近义辨析】uncomfortable 兼指硬板凳等物理上的肉体难受，以及社交环境中的局促别扭；uneasy 强调内心直觉的不踏实、担心潜在风险；anxious 强调神经紧绷、甚至心跳加速的焦虑恐慌；awkward 强调举止进退失据的尴尬。"
  },
  "specific": {
    "word": "specific",
    "zh": "具体的；明确的；特有的",
    "translation": "具体的；明确的；特有的",
    "cloze": {
      "sentence": "Please provide ______ examples from your past work experience to demonstrate your leadership.",
      "translation": "请提供过往工作经历中的具体事例来展示您的领导才能。"
    },
    "form_confusables": [
      {
        "word": "specific",
        "zh": "具体的；明确的"
      },
      {
        "word": "pacific",
        "zh": "太平洋的；和平的"
      },
      {
        "word": "scientific",
        "zh": "科学的"
      },
      {
        "word": "terrific",
        "zh": "极好的；了不起的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "specific",
        "zh": "明确具体的 (指名道姓不含糊的细节)"
      },
      {
        "word": "concrete",
        "zh": "实实在在的；具象的 (区别于空谈)"
      },
      {
        "word": "explicit",
        "zh": "明确清晰的 (言辞直白无隐语)"
      },
      {
        "word": "precise",
        "zh": "精确精准的 (度量严丝合缝)"
      }
    ],
    "notes": "【搭配考点】specific reasons/examples 具体原因/事例；for a specific purpose 出于特定目的；be specific to 专属于.../特有的；be more specific 说得更具体点；【形近辨析】pacific (和平安宁的/太平洋的), scientific (符合科学的), terrific (极棒的/巨大的)；【近义辨析】specific 强调锁定某一个明确无误的目标或具体细节，反对泛泛而谈；concrete 侧重事实实打实、具有现实可摸性而非空谈空想；explicit 强调把话在明面上挑明说透、不留玄机暗语；precise 强调数据、时间上的精密准度。"
  },
  "morale": {
    "word": "morale",
    "zh": "士气；斗志",
    "translation": "士气；斗志",
    "cloze": {
      "sentence": "A surprise bonus before the holidays did wonders to lift workplace ______ across the factory.",
      "translation": "节日前发放的惊喜奖金对提振全厂的工作士气起到了立竿见影的奇效。"
    },
    "form_confusables": [
      {
        "word": "morale",
        "zh": "士气；斗志"
      },
      {
        "word": "moral",
        "zh": "道德的；寓意"
      },
      {
        "word": "mortal",
        "zh": "终有一死的；致命的"
      },
      {
        "word": "mural",
        "zh": "壁画"
      }
    ],
    "semantic_confusables": [
      {
        "word": "morale",
        "zh": "士气；斗志 (团队精神面貌与凝聚力)"
      },
      {
        "word": "spirit",
        "zh": "精神面貌；团队活力"
      },
      {
        "word": "confidence",
        "zh": "信心；必胜信念"
      },
      {
        "word": "enthusiasm",
        "zh": "热忱；积极性"
      }
    ],
    "notes": "【搭配考点】boost/raise morale 鼓舞/提振士气；low/poor morale 士气低落；troop/staff morale 军队/员工士气；morale boost 强心针/士气提振；【形近辨析】moral (道德的/寓意 - 重音在前), mortal (凡人凡胎/致命的), mural (墙体壁画)；【近义辨析】morale 专指群体或军队在艰难困苦面前表现出来的斗志、纪律与乐观拼搏心态；spirit 泛指个人的心境情绪或宏观团队活力；confidence 侧重对自身实力掌控局面的坚信；enthusiasm 侧重做某事时的狂热与自发积极性。"
  },
  "promotion": {
    "word": "promotion",
    "zh": "晋升；升职；促销",
    "translation": "晋升；升职；促销",
    "cloze": {
      "sentence": "After consistently exceeding his quarterly sales targets, he earned a well-deserved ______.",
      "translation": "在连续超额完成季度销售目标后，他获得了当之无愧的晋升。"
    },
    "form_confusables": [
      {
        "word": "promotion",
        "zh": "晋升；推广"
      },
      {
        "word": "motion",
        "zh": "运动；动议"
      },
      {
        "word": "emotion",
        "zh": "情感；情绪"
      },
      {
        "word": "commotion",
        "zh": "骚动；喧闹"
      }
    ],
    "semantic_confusables": [
      {
        "word": "promotion",
        "zh": "职场晋升；商业促销 (职级提升或促销大卖)"
      },
      {
        "word": "advancement",
        "zh": "进阶提升；前进 (事业长足迈进)"
      },
      {
        "word": "elevation",
        "zh": "提拔；升高 (拔擢至高位)"
      },
      {
        "word": "marketing",
        "zh": "市场营销；推广策划"
      }
    ],
    "notes": "【搭配考点】win/get a promotion 获得升职；sales promotion 促销活动；health promotion 健康促进；deserve a promotion 应得升迁；【形近辨析】motion (物理运动/法庭动议), emotion (内心情感), commotion (暴动骚乱)；【近义辨析】promotion 强调在企业官场中职权薪资的逐级上升，或商品降价广告打折大促销；advancement 侧重人生事业阶梯或人类科技文明的深度前行；elevation 带有登上崇高尊贵宝座的仪式感，或测绘学海拔高度；marketing 泛指围绕商品品牌展开的整个市场调研推广体系。"
  },
  "layoffs": {
    "word": "layoffs",
    "zh": "裁员；解雇",
    "translation": "裁员；解雇",
    "cloze": {
      "sentence": "Economic recession forced the automotive manufacturer to announce sweeping ______ across three factories.",
      "translation": "经济衰退迫使这家汽车制造商宣布在三家工厂展开大规模裁员。"
    },
    "form_confusables": [
      {
        "word": "layoffs",
        "zh": "裁员；下岗"
      },
      {
        "word": "payoffs",
        "zh": "报酬；贿金"
      },
      {
        "word": "takeoffs",
        "zh": "起飞；模仿嘲弄"
      },
      {
        "word": "playoffs",
        "zh": "决胜赛；季后赛"
      }
    ],
    "semantic_confusables": [
      {
        "word": "layoffs",
        "zh": "裁员；下岗 (因经营恶化无过失解聘)"
      },
      {
        "word": "downsizing",
        "zh": "瘦身裁员；规模精简 (压缩编制)"
      },
      {
        "word": "dismissals",
        "zh": "解雇；开除 (因过失渎职炒鱿鱼)"
      },
      {
        "word": "redundancies",
        "zh": "冗员裁减 (岗位撤销过剩人员)"
      }
    ],
    "notes": "【搭配考点】massive/sweeping layoffs 大规模裁员；face layoffs 面临下岗裁员；announce layoffs 宣布裁员；temporary layoffs 临时停工待岗；【形近辨析】payoffs (结算利益/贿金), takeoffs (飞机起飞/小品模仿), playoffs (淘汰赛/季后赛)；【近义辨析】layoffs 强调非因员工个人过失、纯粹由于企业资金短缺业务下滑实施的遣散；downsizing 侧重企业进行战略瘦身和架构精简；dismissals 强调因员工违纪渎职被老板炒鱿鱼开除；redundancies 英式英语专指由于岗位合并或自动化撤岗导致的多余人员裁减。"
  },
  "threshold": {
    "word": "threshold",
    "zh": "门槛；界限；起始点",
    "translation": "门槛；界限；起始点",
    "cloze": {
      "sentence": "Applicants must meet a minimum income ______ to qualify for the low-interest mortgage loan.",
      "translation": "申请人必须达到最低收入门槛，才有资格获得低息抵押贷款。"
    },
    "form_confusables": [
      {
        "word": "threshold",
        "zh": "门槛；界限"
      },
      {
        "word": "hold",
        "zh": "握住；容纳"
      },
      {
        "word": "withhold",
        "zh": "扣留；保留"
      },
      {
        "word": "freehold",
        "zh": "永久产权"
      }
    ],
    "semantic_confusables": [
      {
        "word": "threshold",
        "zh": "门槛；临界值 (产生效应或获资格的起点)"
      },
      {
        "word": "limit",
        "zh": "限度；极限 (允许达到的最高警戒线)"
      },
      {
        "word": "boundary",
        "zh": "边界；分界线 (物理或心理疆界)"
      },
      {
        "word": "verge",
        "zh": "边缘；临界边沿 (滑向剧变悬崖边)"
      }
    ],
    "notes": "【搭配考点】on the threshold of 即将进入...的门槛/在...的开端；pain threshold 痛阈/疼痛耐受门槛；income threshold 收入门槛；cross the threshold 跨进门槛；【形近辨析】withhold (扣留不给), freehold (自由保有的永久不动产), hold (握持)；【近义辨析】threshold 强调物理入户门槛，引申为使某种物理反应发生或进入下一门槛所必需的最低起点；limit 强调最高上限警戒红线，超过则违章或有危险；boundary 侧重划分内外主权与归属的地理或心理界线；verge 专指处于滑向某种剧变悬崖的边缘 (on the verge of)。"
  },
  "scrutiny": {
    "word": "scrutiny",
    "zh": "仔细审查；注视",
    "translation": "仔细审查；注视",
    "cloze": {
      "sentence": "The proposed banking merger will face intense regulatory ______ from antitrust authorities.",
      "translation": "拟议中的银行兼并案将面临反垄断主管机构极其严密的监管审查。"
    },
    "form_confusables": [
      {
        "word": "scrutiny",
        "zh": "仔细审查；注视"
      },
      {
        "word": "mutiny",
        "zh": "兵变；叛乱"
      },
      {
        "word": "destiny",
        "zh": "命运"
      },
      {
        "word": "routine",
        "zh": "常规；惯例"
      }
    ],
    "semantic_confusables": [
      {
        "word": "scrutiny",
        "zh": "严密审查；细看推敲 (放大镜般无死角)"
      },
      {
        "word": "inspection",
        "zh": "检查；巡检 (按规程现场视察)"
      },
      {
        "word": "examination",
        "zh": "考查；检查 (书面或体检测试评估)"
      },
      {
        "word": "investigation",
        "zh": "调查；侦查 (查明真相破案调查)"
      }
    ],
    "notes": "【搭配考点】under close/intense scrutiny 受到严密审视/审查；withstand scrutiny 经受住推敲审查；public scrutiny 公众监督；come under scrutiny 成为审视焦点；【形近辨析】mutiny (水兵兵变叛乱), destiny (既定命运), routine (日常例行公事)；【近义辨析】scrutiny 强调像拿放大镜一样对每一笔账目、每个字眼进行无死角的严苛推敲；inspection 侧重官员下车间、工地按照质检清单逐项打勾验收；examination 侧重医学体检或考试考查；investigation 专指警方、调查记者对犯罪事实或违规丑闻顺藤摸瓜的调查。"
  },
  "initiative": {
    "word": "initiative",
    "zh": "倡议；主动性；新举措",
    "translation": "倡议；主动性；新举措",
    "cloze": {
      "sentence": "The governor unveiled a green energy ______ aimed at reducing greenhouse carbon emissions.",
      "translation": "州长公布了一项旨在减少温室气体碳排放的绿色能源倡议计划。"
    },
    "form_confusables": [
      {
        "word": "initiative",
        "zh": "倡议；主动性"
      },
      {
        "word": "initiate",
        "zh": "发起；使入门"
      },
      {
        "word": "initial",
        "zh": "最初的；首字母"
      },
      {
        "word": "intuitive",
        "zh": "直觉的；直观的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "initiative",
        "zh": "倡议；新举措 (主动行动计划；自觉主动性)"
      },
      {
        "word": "plan",
        "zh": "计划；规划 (具体实施步骤)"
      },
      {
        "word": "proposal",
        "zh": "提案；建议 (书面报批建议)"
      },
      {
        "word": "scheme",
        "zh": "方案；宏大系统安排"
      }
    ],
    "notes": "【搭配考点】take the initiative 采取主动/掌握主动权；peace initiative 和平倡议；use one's initiative 发挥主观能动性；government initiative 政府新举措；【形近辨析】initial (起初的), initiate (发起动词), intuitive (靠直觉感受的)；【近义辨析】initiative 作名词时可指重大的创新改革项目工程，亦指不靠别人催促就自觉干活的主动进取精神；plan 侧重为完成目标拟定的日常具体步骤时间表；proposal 侧重书面提交给别人考虑认可的建议案；scheme 强调大规模的政府系统性工程安排。"
  },
  "composure": {
    "word": "composure",
    "zh": "镇静；沉着；自若",
    "translation": "镇静；沉着；自若",
    "cloze": {
      "sentence": "Despite the hostile barrage of questions from reporters, the diplomat maintained his ______.",
      "translation": "尽管面对记者们充满敌意的连珠炮式提问，这位外交官依然保持着沉着镇定。"
    },
    "form_confusables": [
      {
        "word": "composure",
        "zh": "镇定；沉着"
      },
      {
        "word": "exposure",
        "zh": "暴露；曝光"
      },
      {
        "word": "enclosure",
        "zh": "围栏；随函附件"
      },
      {
        "word": "closure",
        "zh": "关闭；终结感"
      }
    ],
    "semantic_confusables": [
      {
        "word": "composure",
        "zh": "泰然沉着；镇静 (在挑衅危难中保持自制)"
      },
      {
        "word": "poise",
        "zh": "优雅镇定；泰然自若 (体态与心理稳健)"
      },
      {
        "word": "calmness",
        "zh": "平静；从容 (平心静气无波澜)"
      },
      {
        "word": "serenity",
        "zh": "宁静；安详 (恬淡超脱的心境)"
      }
    ],
    "notes": "【搭配考点】maintain/keep one's composure 保持镇定；lose one's composure 失去冷静/慌了手脚；regain composure 恢复平静；with great composure 极其镇定自若地；【形近辨析】exposure (暴露/曝光度), enclosure (围场/附件), closure (企业倒闭/心灵释怀结案)；【近义辨析】composure 强调通过强大的情绪意志力，在混乱、挑衅或危难中不失自制与尊严；poise 侧重在公开社交场合优雅得体的身姿与稳重自持；calmness 泛指没有风浪或急躁的平静心态；serenity 带有宗教或大自然般超脱圣洁的恬淡详和。"
  },
  "maneuver": {
    "word": "maneuver",
    "zh": "策略；操纵；演习",
    "translation": "策略；操纵；演习",
    "cloze": {
      "sentence": "The skilled driver had to ______ quickly to avoid hitting a stray deer on the icy road.",
      "translation": "这位技术娴熟的司机不得不迅速操纵车辆变道，以避开结冰路面上的流浪鹿。"
    },
    "form_confusables": [
      {
        "word": "maneuver",
        "zh": "操纵；谋略；演习"
      },
      {
        "word": "manual",
        "zh": "手册；手工的"
      },
      {
        "word": "manure",
        "zh": "肥料；施肥"
      },
      {
        "word": "manner",
        "zh": "方式；举止礼貌"
      }
    ],
    "semantic_confusables": [
      {
        "word": "maneuver",
        "zh": "操纵；敏捷调动 (灵活操纵避险或运筹策略)"
      },
      {
        "word": "manipulate",
        "zh": "操纵；摆布 (耍手段操纵人心/市场)"
      },
      {
        "word": "navigate",
        "zh": "导航；穿行 (在复杂水域寻找航路)"
      },
      {
        "word": "steer",
        "zh": "驾驶；掌控方向 (把握方向盘)"
      }
    ],
    "notes": "【搭配考点】military maneuvers 军事演习；tactical maneuver 战术调动；room for maneuver 斡旋回旋余地；political maneuvering 政治手腕权谋；【形近辨析】manual (指南/人工的), manure (粪肥), manner (举止风度)；【近义辨析】maneuver 兼指对车辆飞机进行精准高难度的避险机动操作，以及在政治商业中运筹帷幄的策略演练；manipulate 带有操纵市场、玩弄控制他人的贬义手段；navigate 强调在险象环生中找准航向顺利穿越；steer 侧重握住物理舵轮控制前进轨迹。"
  },
  "defiance": {
    "word": "defiance",
    "zh": "违抗；蔑视；挑衅",
    "translation": "违抗；蔑视；挑衅",
    "cloze": {
      "sentence": "The protesters raised their fists in open ______ of the newly imposed military curfew.",
      "translation": "抗议者们高举拳头，公开蔑视对抗新强加的宵禁法令。"
    },
    "form_confusables": [
      {
        "word": "defiance",
        "zh": "违抗；挑衅蔑视"
      },
      {
        "word": "reliance",
        "zh": "依靠；信赖"
      },
      {
        "word": "appliance",
        "zh": "家用电器"
      },
      {
        "word": "compliance",
        "zh": "顺从；法规合规"
      }
    ],
    "semantic_confusables": [
      {
        "word": "defiance",
        "zh": "公然违抗；挑衅蔑视 (公然不服从对抗权威)"
      },
      {
        "word": "rebellion",
        "zh": "叛乱；反抗反叛 (起义推翻统治)"
      },
      {
        "word": "resistance",
        "zh": "抵抗；反抗 (抵制压迫阻力)"
      },
      {
        "word": "disobedience",
        "zh": "不服从；违抗命令 (拒绝执行条令)"
      }
    ],
    "notes": "【搭配考点】in defiance of 公然蔑视/无视...；an act of defiance 挑衅违抗之举；glare in defiance 怒目对抗；defiance of authority 蔑视权威；【形近辨析】reliance (依赖靠山), appliance (家用器具), compliance (顺从/法规合规)；【近义辨析】defiance 强调不惧惩罚威胁、昂首挺胸公然挑衅并拒绝屈服的气概态度；rebellion 侧重发起成规模的推翻政权或体制的反叛行动；resistance 侧重受压迫时的暗中或公开抵制；disobedience 侧重民事或军队条令上的消极或主动不遵从 (如 civil disobedience)。"
  },
  "apprehensive": {
    "word": "apprehensive",
    "zh": "忧虑的；担心的",
    "translation": "忧虑的；担心的",
    "cloze": {
      "sentence": "Students felt extremely ______ about the upcoming national licensing examination results.",
      "translation": "学生们对即将公布的国家执业资格考试成绩感到极其忐忑忧虑。"
    },
    "form_confusables": [
      {
        "word": "apprehensive",
        "zh": "忧虑的；担心的"
      },
      {
        "word": "comprehensive",
        "zh": "全面的；综合的"
      },
      {
        "word": "appreciative",
        "zh": "感激的；欣赏的"
      },
      {
        "word": "reprehensive",
        "zh": "应受谴责的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "apprehensive",
        "zh": "忐忑不安的；忧心忡忡的 (预料不良后果)"
      },
      {
        "word": "fearful",
        "zh": "害怕的；提心吊胆的 (内心被恐惧笼罩)"
      },
      {
        "word": "uneasy",
        "zh": "不自在的；心神不宁的 (感到异样不踏实)"
      },
      {
        "word": "worried",
        "zh": "担心的；发愁的"
      }
    ],
    "notes": "【搭配考点】apprehensive about/of 对...忧心忡忡；feel apprehensive 感到忐忑；apprehensive look 忧虑的眼神；【形近辨析】comprehensive (综合全面的), appreciative (感激的/有鉴赏力的), reprehensive (应予斥责的)；【近义辨析】apprehensive 强调思维敏锐地意识到潜在危险或糟糕结果、因而心头笼罩阴云；fearful 侧重被恐惧感直接笼罩；uneasy 侧重心神不宁、缺乏安宁；worried 是日常通用词，侧重反复思虑发愁。"
  },
  "reluctant": {
    "word": "reluctant",
    "zh": "不情愿的；勉强的",
    "translation": "不情愿的；勉强的",
    "cloze": {
      "sentence": "The witness was ______ to testify in court due to genuine fears of criminal retribution.",
      "translation": "出于对犯罪报复的切实恐惧，该证人不情愿出庭作证。"
    },
    "form_confusables": [
      {
        "word": "reluctant",
        "zh": "不情愿的；勉强的"
      },
      {
        "word": "redundant",
        "zh": "多余的；被裁员的"
      },
      {
        "word": "repellent",
        "zh": "令人厌恶的；驱虫剂"
      },
      {
        "word": "reliant",
        "zh": "依赖的；信赖的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reluctant",
        "zh": "不情愿的；勉强的 (内心抵触勉为其难做)"
      },
      {
        "word": "unwilling",
        "zh": "不愿意的；坚决不肯的 (意志直接拒绝)"
      },
      {
        "word": "hesitant",
        "zh": "迟疑犹豫的 (拿不定主意停顿)"
      },
      {
        "word": "loath",
        "zh": "极不情愿的 (深恶痛绝不肯做)"
      }
    ],
    "notes": "【搭配考点】be reluctant to do sth 不情愿做某事；reluctant agreement/smile 勉强的同意/苦笑；reluctant hero 勉为其难的英雄；【形近辨析】redundant (多余赘余的), repellent (令人憎恶的/驱虫剂), reliant (依附信赖的)；【近义辨析】reluctant 侧重内心非常别扭抗拒、但在催促或现实压力下最终还是勉强做了；unwilling 是直白坚定的意志拒绝；hesitant 侧重犹豫不决、尚未下定决心；loath 语气更强，表示在情感上极其厌恶因而宁死不从。"
  },
  "contingency": {
    "word": "contingency",
    "zh": "意外事件；应急预案",
    "translation": "意外事件；应急预案",
    "cloze": {
      "sentence": "The project manager developed a robust ______ plan to address possible supply shortages.",
      "translation": "项目经理制定了强有力的应急预案，以应对可能出现的供应短缺。"
    },
    "form_confusables": [
      {
        "word": "contingency",
        "zh": "意外事件；应急措施"
      },
      {
        "word": "continuous",
        "zh": "连续不断的"
      },
      {
        "word": "consistency",
        "zh": "一致性；连贯度"
      },
      {
        "word": "complacency",
        "zh": "自满；盲目乐观"
      }
    ],
    "semantic_confusables": [
      {
        "word": "contingency",
        "zh": "偶发意外变故；应急预备 (需预留冗余的变数)"
      },
      {
        "word": "emergency",
        "zh": "紧急事态 (已然爆发需火速抢险)"
      },
      {
        "word": "casualty",
        "zh": "伤亡事故；伤亡人员"
      },
      {
        "word": "eventuality",
        "zh": "可能发生的结局事态"
      }
    ],
    "notes": "【搭配考点】contingency plan 应急预案；contingency fund 应急基金/备用金；prepare for every contingency 为一切突发意外做好准备；contingency fee 风险代理费；【形近辨析】continuous (连续的), consistency (一贯性/浓度), complacency (自满盲目)；【近义辨析】contingency 专指管理学上可能发生、需要预先留足安全冗余的偶发变故，其派生形容词常作“应急备用”之意；emergency 强调事故已然爆发、必须火速抢险的生死关头；casualty 专指战争或灾难造成的伤亡；eventuality 指长远将来各种不可预测的结局可能。"
  },
  "surveillance": {
    "word": "surveillance",
    "zh": "监视；监控",
    "translation": "监视；监控",
    "cloze": {
      "sentence": "High-definition security cameras maintain twenty-four-hour ______ over the casino vault.",
      "translation": "高清监控摄像头对赌场金库保持着二十四小时严密监视。"
    },
    "form_confusables": [
      {
        "word": "surveillance",
        "zh": "监视；监控"
      },
      {
        "word": "conveyance",
        "zh": "运输；运输工具"
      },
      {
        "word": "surveyor",
        "zh": "测量员；勘测员"
      },
      {
        "word": "renaissance",
        "zh": "复兴；新生"
      }
    ],
    "semantic_confusables": [
      {
        "word": "surveillance",
        "zh": "监视；监控 (针对嫌疑或高危目标的严密盯梢)"
      },
      {
        "word": "monitoring",
        "zh": "监测；跟踪 (仪器对数据指标定期跟踪)"
      },
      {
        "word": "supervision",
        "zh": "监督；指导管理 (行政督导现场把关)"
      },
      {
        "word": "observation",
        "zh": "科学观察；注视 (客观记录数据)"
      }
    ],
    "notes": "【搭配考点】under constant surveillance 受到持续监视；surveillance camera 监控摄像头；electronic surveillance 电子监听监控；disease surveillance 疫情监测；【形近辨析】conveyance (运输工具/转让契约), surveyor (测量员), renaissance (文艺复兴)；【近义辨析】surveillance 强调情报、警务或安保针对潜在罪犯或高危目标的严密盯梢看守；monitoring 侧重仪器传感器对心跳、水质、金融指数的周期性指标跟踪；supervision 强调上级对下级工作进度、学生考场行为的行政督导；observation 侧重科学实验室客观记录数据。"
  },
  "allegation": {
    "word": "allegation",
    "zh": "指控；申述；指责",
    "translation": "指控；申述；指责",
    "cloze": {
      "sentence": "The senior executive vehemently denied every ______ of financial wrongdoing made by the audit.",
      "translation": "这位高级主管极力否认审计报告中提出的所有财务不当行为指控。"
    },
    "form_confusables": [
      {
        "word": "allegation",
        "zh": "指控；申述"
      },
      {
        "word": "delegation",
        "zh": "代表团；授权"
      },
      {
        "word": "obligation",
        "zh": "义务；责任"
      },
      {
        "word": "navigation",
        "zh": "航行；导航"
      }
    ],
    "semantic_confusables": [
      {
        "word": "allegation",
        "zh": "指控；主张 (尚未证实的断言指控)"
      },
      {
        "word": "accusation",
        "zh": "控告；指责 (直接公开斥责有罪)"
      },
      {
        "word": "charge",
        "zh": "刑事控告；控罪 (司法机关正式公诉)"
      },
      {
        "word": "claim",
        "zh": "声称；主张 (单方面主张或索赔)"
      }
    ],
    "notes": "【搭配考点】deny/investigate an allegation 否认/调查指控；serious/unfounded allegations 严重/毫无根据的指控；allegations of corruption 贪腐指控；【形近辨析】delegation (代表团/委派授权), obligation (法定道德义务), navigation (航行导航)；【近义辨析】allegation 专指在法庭尚未定罪或未获铁证之前，原告或媒体提出的“指称指控”；accusation 强调当面厉声斥责指控某人干了坏事；charge 特指检方或警方提起的具有法律约束力的正式刑事诉讼；claim 侧重主观上自称拥有某种权利或陈述事实。"
  },
  "discretion": {
    "word": "discretion",
    "zh": "谨慎；审慎；自由裁量权",
    "translation": "谨慎；审慎；自由裁量权",
    "cloze": {
      "sentence": "Hotel staff are trained to treat all private matters regarding celebrity guests with strict ______.",
      "translation": "酒店员工接受过专门培训，以极度审慎保密的态度处理有关名人宾客的所有私密事务。"
    },
    "form_confusables": [
      {
        "word": "discretion",
        "zh": "谨慎；自由裁量权"
      },
      {
        "word": "digestion",
        "zh": "消化；领悟"
      },
      {
        "word": "dissection",
        "zh": "解剖；剖析"
      },
      {
        "word": "dispersion",
        "zh": "散布；分散"
      }
    ],
    "semantic_confusables": [
      {
        "word": "discretion",
        "zh": "审慎周密；斟酌决定权 (做事谨慎守密；自由决断)"
      },
      {
        "word": "prudence",
        "zh": "审慎；精明避险 (精打细算规避损失)"
      },
      {
        "word": "caution",
        "zh": "小心；警惕 (提防眼前现实风险)"
      },
      {
        "word": "judgment",
        "zh": "判断力；裁决 (基于证据的决断)"
      }
    ],
    "notes": "【搭配考点】at one's discretion 由某人斟酌决定/自行裁夺；exercise discretion 行使自由裁量权；with discretion 谨慎地/审慎从事；absolute discretion 绝对自由决定权；【形近辨析】digestion (胃肠消化), dissection (尸体解剖/深入剖析), dispersion (光色散/人群驱散)；【近义辨析】discretion 强调守口如瓶的极高职场操守，或法律赋予长官在权限内的自主自由裁量决断权；prudence 侧重在财务投资上步步为营、精明规避亏损；caution 侧重如履薄冰、提防现实陷阱危险；judgment 侧重基于经验推理判断是非曲直的能力。"
  },
  "leverage": {
    "word": "leverage",
    "zh": "杠杆作用；影响力；借力",
    "translation": "杠杆作用；影响力；借力",
    "cloze": {
      "sentence": "The private equity firm sought to ______ its international network to expand overseas market share.",
      "translation": "该私募股权投资公司试图利用其国际化网络来扩大海外市场份额。"
    },
    "form_confusables": [
      {
        "word": "leverage",
        "zh": "杠杆作用；影响力"
      },
      {
        "word": "coverage",
        "zh": "覆盖范围；报道"
      },
      {
        "word": "beverage",
        "zh": "饮料"
      },
      {
        "word": "average",
        "zh": "平均的；普通的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "leverage",
        "zh": "借力发挥；杠杆撬动 (以小支点撬动大资源)"
      },
      {
        "word": "utilize",
        "zh": "充分利用；使用 (使发挥出实用价值)"
      },
      {
        "word": "exploit",
        "zh": "深度开发；利用；开采"
      },
      {
        "word": "capitalize",
        "zh": "充分利用；借机获利 (转化为自身优势)"
      }
    ],
    "notes": "【搭配考点】financial leverage 财务杠杆；gain/use leverage 获得/利用筹码影响力；leverage assets/strengths 撬动资产/发挥优势；high leverage 高杠杆率；【形近辨析】coverage (媒体报道/信号覆盖), beverage (饮料酒水), average (平均水准)；【近义辨析】leverage 源自阿基米德杠杆原理，商业中特指以少量自有资本或关键筹码撬动撬起巨大成果；utilize 偏学术正式，强调物尽其用不浪费；exploit 侧重开发矿藏资源或深入挖掘潜力；capitalize on 强调敏锐捕捉市场破绽趁势得利。"
  },
  "culprit": {
    "word": "culprit",
    "zh": "罪魁祸首；犯人；元凶",
    "translation": "罪魁祸首；犯人；元凶",
    "cloze": {
      "sentence": "Scientists identified uninspected carbon emissions from old coal plants as the primary ______ behind smog.",
      "translation": "科学家们确定，老旧燃煤电厂未经检测的碳排放是雾霾背后的罪魁祸首。"
    },
    "form_confusables": [
      {
        "word": "culprit",
        "zh": "罪魁祸首；犯人"
      },
      {
        "word": "pulpit",
        "zh": "讲经台；布道坛"
      },
      {
        "word": "spirit",
        "zh": "精神；灵魂"
      },
      {
        "word": "circuit",
        "zh": "电路；巡回赛"
      }
    ],
    "semantic_confusables": [
      {
        "word": "culprit",
        "zh": "罪魁祸首；元凶 (引起事故问题的祸根)"
      },
      {
        "word": "offender",
        "zh": "违规者；违法分子 (违反规章法律者)"
      },
      {
        "word": "perpetrator",
        "zh": "行凶者；作案人 (亲手施加暴行者)"
      },
      {
        "word": "villain",
        "zh": "反派人物；罪恶根源"
      }
    ],
    "notes": "【搭配考点】the main/chief culprit 主要罪魁祸首；identify the culprit 找出罪魁祸首；catch the culprit 缉拿凶手；the biggest culprit 最主要的祸根；【形近辨析】pulpit (教堂讲坛/布道台), spirit (精神灵魂), circuit (电路/巡回赛)；【近义辨析】culprit 形象丰富，既可指法律案件中的罪犯，更常引申指导致机械故障、环境污染或疾病暴发的幕后祸根；offender 指违法规章的肇事者；perpetrator 是警方和法医学术语，专指具体实施暴行的行凶者；villain 带有文艺戏剧色彩，指阴险狠毒的头号大反派。"
  },
  "establish business relations": {
    "word": "establish business relations",
    "zh": "建立业务关系",
    "translation": "建立业务关系",
    "cloze": {
      "sentence": "Our export division is writing with an earnest desire to ______ with prominent overseas distributors.",
      "translation": "我方出口部门致信，热忱渴望与海外知名分销商建立业务关系。"
    },
    "form_confusables": [
      {
        "word": "establish business relations",
        "zh": "建立业务关系"
      },
      {
        "word": "maintain business relations",
        "zh": "维持业务关系"
      },
      {
        "word": "suspend business relations",
        "zh": "暂停业务关系"
      },
      {
        "word": "sever business relations",
        "zh": "断绝业务关系"
      }
    ],
    "semantic_confusables": [
      {
        "word": "establish business relations",
        "zh": "建立业务关系 (外贸函电经典首倡合作套语)"
      },
      {
        "word": "build trade ties",
        "zh": "建立贸易联系 (构建双边经贸纽带)"
      },
      {
        "word": "forge partnerships",
        "zh": "缔结伙伴关系 (强强联合深度协作)"
      },
      {
        "word": "set up commercial links",
        "zh": "设立商业联络 (打通商务沟通渠道)"
      }
    ],
    "notes": "【搭配考点】establish business relations with 与...建立业务往来；with a view to establishing business relations 旨在建立商业联系；enter into business relations 步入业务合作；【形近辨析】maintain business relations (维护维系业务关系), suspend business relations (暂缓/中止商业往来), sever business relations (决裂/彻底切断业务交往)；【近义辨析】establish business relations 是国际贸易商务信函（Business English Correspondence）的标准开篇套语，特指双方尚未有业务往来时首次提议开启供求合作；build trade ties 强调宏观经贸纽带；forge partnerships 强调深度战略同盟协作；set up commercial links 偏向设立初期通讯渠道。"
  },
  "quotation": {
    "word": "quotation",
    "zh": "报价单；行情；引语",
    "translation": "报价单；行情；引语",
    "cloze": {
      "sentence": "Please send us your most competitive price ______ for twenty metric tons of grade-A steel.",
      "translation": "请向我们提供二十公吨A级钢材的最优惠价格报价单。"
    },
    "form_confusables": [
      {
        "word": "quotation",
        "zh": "报价单；引语"
      },
      {
        "word": "foundation",
        "zh": "基础；基金会"
      },
      {
        "word": "reputation",
        "zh": "声誉；名气"
      },
      {
        "word": "station",
        "zh": "车站；驻地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "quotation",
        "zh": "报价单；开价 (外贸依询盘开出的明细报价)"
      },
      {
        "word": "quote",
        "zh": "商业报价 (口语及非正式商务报价)"
      },
      {
        "word": "estimate",
        "zh": "估价单；工程预算 (未开工前测算)"
      },
      {
        "word": "price list",
        "zh": "产品价目表 (全套标准价目单)"
      }
    ],
    "notes": "【搭配考点】request a quotation 索取报价单；competitive quotation 有竞争力的报价；stock quotation 股票行情；quotation marks 引号；【形近辨析】foundation (基石/基金会), reputation (名誉名望), station (车站/电台)；【近义辨析】quotation 是正式外贸商业文件，指卖方根据买方具体规格订货要求所核算的详尽书面报价方案单，亦指名人语录名言；quote 为口语形式或动词；estimate 侧重在装修、维修等复杂工程前给出的非约束性初步预算估值；price list 则是固定公开的标准价目册。"
  },
  "quote": {
    "word": "quote",
    "zh": "报价；开价；引用",
    "translation": "报价；开价；引用",
    "cloze": {
      "sentence": "Can your factory ______ us a firm CIF price for the initial trial shipment?",
      "translation": "贵厂能否为首批试运货物向我们报一个确定的到岸价格（CIF价格）？"
    },
    "form_confusables": [
      {
        "word": "quote",
        "zh": "报价；引用"
      },
      {
        "word": "quite",
        "zh": "相当；完全"
      },
      {
        "word": "quiet",
        "zh": "安静的"
      },
      {
        "word": "quilt",
        "zh": "被子；羽绒被"
      }
    ],
    "semantic_confusables": [
      {
        "word": "quote",
        "zh": "报价；开盘价 (商业谈判中正式开价)"
      },
      {
        "word": "price",
        "zh": "给...定价；标价 (核定售卖价格)"
      },
      {
        "word": "cite",
        "zh": "引用；引证 (学术论著援引文献)"
      },
      {
        "word": "tender",
        "zh": "投标报价 (呈递正式竞标标书)"
      }
    ],
    "notes": "【搭配考点】quote sb a price 给某人报价；quote firm CIF 报CIF实盘价；quote Shakespeare 引用莎士比亚；out of quote 停止报价；【形近辨析】quite (相当/颇为), quiet (宁静无声的), quilt (厚棉被)；【近义辨析】quote 作商业动词时专指卖方在谈判中针对买方询价报出具体的供货单价；price 作动词强调计算成本并核定售卖标价；cite 专指学术论文中规范标注文献引用与判例；tender 侧重在重大工程招标投标中呈交具有法律效力的正式密封标书。"
  },
  "latest": {
    "word": "latest",
    "zh": "最新的；最近的",
    "translation": "最新的；最近的",
    "cloze": {
      "sentence": "The tech company unveiled its ______ flagship smartphone featuring advanced camera sensors.",
      "translation": "这家科技公司发布了配备先进相机传感器的最新款旗舰智能手机。"
    },
    "form_confusables": [
      {
        "word": "latest",
        "zh": "最新的；最近的"
      },
      {
        "word": "latter",
        "zh": "后者的；后期的"
      },
      {
        "word": "late",
        "zh": "晚的；迟到的"
      },
      {
        "word": "latent",
        "zh": "潜在的；潜伏的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "latest",
        "zh": "最新尖端的 (时间最靠近当下的前沿成果)"
      },
      {
        "word": "newest",
        "zh": "崭新的；最新制作的 (刚出炉未磨损)"
      },
      {
        "word": "current",
        "zh": "当前的；现行的 (现阶段正在使用)"
      },
      {
        "word": "up-to-date",
        "zh": "最新的；跟上时代的 (更新到最新版)"
      }
    ],
    "notes": "【搭配考点】the latest fashion/news 最新的时尚/新闻；latest developments 最新进展；at the latest 最迟/至迟；the latest model 最新型号；【形近辨析】latter (两者中后者的), late (迟到的/已故的), latent (潜伏未发的)；【近义辨析】latest 强调紧跟时代脉搏、代表截至目前最新出炉的消息、科技成果或潮流；newest 侧重刚刚下线、全新未经岁月磨损；current 侧重此时此刻处于现行生效状态；up-to-date 侧重已完成最新版本更新对齐、跟得上当下现实要求。"
  },
  "catalogue": {
    "word": "catalogue",
    "zh": "产品目录；样本；编目",
    "translation": "产品目录；样本；编目",
    "cloze": {
      "sentence": "Please browse our online product ______ to view comprehensive technical specifications.",
      "translation": "请浏览我们的在线产品目录，以查看全面的技术规格参数。"
    },
    "form_confusables": [
      {
        "word": "catalogue",
        "zh": "目录；编目"
      },
      {
        "word": "dialogue",
        "zh": "对话；对白"
      },
      {
        "word": "prologue",
        "zh": "序言；开场白"
      },
      {
        "word": "monologue",
        "zh": "独白"
      }
    ],
    "semantic_confusables": [
      {
        "word": "catalogue",
        "zh": "产品目录；图册 (带有照片参数的订货图册)"
      },
      {
        "word": "brochure",
        "zh": "宣传手册 (彩色折页小薄本)"
      },
      {
        "word": "directory",
        "zh": "名录；通讯录 (企业电话地址名册)"
      },
      {
        "word": "inventory",
        "zh": "库存账目清册"
      }
    ],
    "notes": "【搭配考点】mail-order catalogue 邮购商品目录；exhibition catalogue 展览图录；online catalogue 在线目录；catalogue of errors 一连串错误；【形近辨析】dialogue (戏剧对话), prologue (戏剧序幕/序言), monologue (戏剧独白)；【近义辨析】catalogue 专指厂家按系统分类编印的全部商品订货图册，含有详尽型号与参数；brochure 强调印刷精美的彩色折页宣传册，侧重旅游、楼盘宣传；directory 侧重按行业或地区整理的工商企业通讯电话名录；inventory 专指内部账务审计使用的库存货物清册。"
  },
  "export": {
    "word": "export",
    "zh": "出口；外销；出口商品",
    "translation": "出口；外销；出口商品",
    "cloze": {
      "sentence": "The coastal country relies heavily on agricultural products as its primary ______.",
      "translation": "这个沿海国家高度依赖农产品作为其主要的出口商品。"
    },
    "form_confusables": [
      {
        "word": "export",
        "zh": "出口；输出"
      },
      {
        "word": "import",
        "zh": "进口；输入"
      },
      {
        "word": "expert",
        "zh": "专家；熟练的"
      },
      {
        "word": "report",
        "zh": "报告；报道"
      }
    ],
    "semantic_confusables": [
      {
        "word": "export",
        "zh": "出口商品；向外运销 (将本国制造销往海外)"
      },
      {
        "word": "output",
        "zh": "产出；产量 (加工制造总数量)"
      },
      {
        "word": "shipment",
        "zh": "装运批次；发运货物 (水陆发货货量)"
      },
      {
        "word": "outward",
        "zh": "外运的外向货物"
      }
    ],
    "notes": "【搭配考点】export market 出口市场；export licence 出口许可证；export earnings 出口创汇；net exports 净出口；【形近辨析】import (进口输入), expert (行家里手/专家), report (调研报告)；【近义辨析】export 严格限定在跨国贸易范畴，指将本国物资销售出海并换取外汇；output 泛指车间、农田加工制造出来的物质产品总和；shipment 强调具体装船装车发货的一单实际物流货量；outward 侧重物流方向从中心向外围扩展延伸。"
  },
  "import": {
    "word": "import",
    "zh": "进口；输入；重要性",
    "translation": "进口；输入；重要性",
    "cloze": {
      "sentence": "Strict customs inspections were introduced on all food products destined for ______.",
      "translation": "所有用于进口的食品都将接受严格的海关检验检疫。"
    },
    "form_confusables": [
      {
        "word": "import",
        "zh": "进口；重要性"
      },
      {
        "word": "export",
        "zh": "出口；输出"
      },
      {
        "word": "impart",
        "zh": "传授；赋予"
      },
      {
        "word": "impact",
        "zh": "冲击；重大影响"
      }
    ],
    "semantic_confusables": [
      {
        "word": "import",
        "zh": "进口；输入品 (从海外采购入关的物资)"
      },
      {
        "word": "influx",
        "zh": "涌入；汇集 (资金人员大规模涌入)"
      },
      {
        "word": "intake",
        "zh": "摄入；吸纳量 (系统吸收量)"
      },
      {
        "word": "introduction",
        "zh": "引进；推行 (首次引入新技术)"
      }
    ],
    "notes": "【搭配考点】import quota 进口配额；import duties/tariffs 进口关税；matters of great import 具有重大意义的事件；food imports 进口食品；【形近辨析】export (出口外销), impart (传授知识技能), impact (撞击冲撞/深远影响)；【近义辨析】import 是国际经济术语，专指从外国采购货物报关进入国内市场，偏正式时亦作“重大深远意义”；influx 侧重如潮水般涌入境内的资本或难民浪潮；intake 侧重内部系统对营养或新学员的日常吸纳吞吐；introduction 侧重首次把外来品种或前沿软件引进本土。"
  },
  "appreciate": {
    "word": "appreciate",
    "zh": "感激；赏识；升值",
    "translation": "感激；赏识；升值",
    "cloze": {
      "sentence": "We would greatly ______ it if you could confirm receipt of our updated consignment invoice.",
      "translation": "如果您能确认收到我们更新的发货发票，我们将不胜感激。"
    },
    "form_confusables": [
      {
        "word": "appreciate",
        "zh": "感激；升值"
      },
      {
        "word": "depreciate",
        "zh": "贬值；折旧"
      },
      {
        "word": "appropriate",
        "zh": "适当的；拨款挪用"
      },
      {
        "word": "approximate",
        "zh": "近似的；大约"
      }
    ],
    "semantic_confusables": [
      {
        "word": "appreciate",
        "zh": "深表感激；赏识 (商务信函表达诚挚谢意；增值)"
      },
      {
        "word": "acknowledge",
        "zh": "确认收到；致谢 (公文正式回复确认并致意)"
      },
      {
        "word": "value",
        "zh": "珍视；视...为宝贵"
      },
      {
        "word": "welcome",
        "zh": "欣然欢迎；乐见"
      }
    ],
    "notes": "【搭配考点】greatly appreciate 不胜感激；appreciate in value 资产升值增值；appreciate the importance of 充分认识到...的重要性；appreciate fine art 鉴赏高雅艺术；【形近辨析】depreciate (固定资产折旧/汇率贬值), appropriate (恰当的/挪用侵吞公款), approximate (大致近似的)；【近义辨析】appreciate 是商务公文最客气高雅的谢辞（常用于 We would appreciate it if...），金融中指汇率或不动产升值；acknowledge 侧重正式出具收据回函确认收到邮件货物；value 侧重从内心深处将其奉为珍宝看待；welcome 强调以开放热情的态度接纳建议或访客。"
  },
  "as requested": {
    "word": "as requested",
    "zh": "按照要求；照办",
    "translation": "按照要求；照办",
    "cloze": {
      "sentence": "Enclosed please find three duplicate copies of our audited balance sheet ______.",
      "translation": "随函附上经审计的我方资产负债表一式三份，均已按要求备妥。"
    },
    "form_confusables": [
      {
        "word": "as requested",
        "zh": "按照要求；照办"
      },
      {
        "word": "as required",
        "zh": "按照规定；按需"
      },
      {
        "word": "as expected",
        "zh": "如期所料；不出所料"
      },
      {
        "word": "as suggested",
        "zh": "按照建议"
      }
    ],
    "semantic_confusables": [
      {
        "word": "as requested",
        "zh": "按要求 (商务信函中表明遵照对方吩咐备妥)"
      },
      {
        "word": "in accordance with",
        "zh": "依据；遵循 (严格符合法律规章条款)"
      },
      {
        "word": "per your request",
        "zh": "依照您的吩咐 (美式常用商务简述)"
      },
      {
        "word": "as instructed",
        "zh": "依照指示 (遵照上级长官命令)"
      }
    ],
    "notes": "【搭配考点】send samples as requested 按要求寄送样品；complete the form as requested 按要求填妥表格；as requested by the buyer 依照买方要求；【形近辨析】as required (依照法规规章所硬性要求的), as expected (正如所有人所预料的那样), as suggested (按照专家给出的中肯建议行事)；【近义辨析】as requested 是涉外商业函电中履行对方指示、寄送随附凭证时的最标准得体短语；in accordance with 偏向法律合同条文的严肃对照执行；per your request 意思相同但在语风上更为简练干练；as instructed 带有浓厚的上下级军令或主从雇佣色彩。"
  },
  "under separate cover": {
    "word": "under separate cover",
    "zh": "另函寄送；另封邮寄",
    "translation": "另函寄送；另封邮寄",
    "cloze": {
      "sentence": "Our illustrated autumn catalogue and price lists are being dispatched to you ______.",
      "translation": "我方的秋季图文产品目录和价格单正另封单独寄送给您。"
    },
    "form_confusables": [
      {
        "word": "under separate cover",
        "zh": "另函寄送"
      },
      {
        "word": "under special cover",
        "zh": "在特殊掩护下"
      },
      {
        "word": "under secret cover",
        "zh": "在秘密掩盖下"
      },
      {
        "word": "under cover of",
        "zh": "在...的掩蔽下"
      }
    ],
    "semantic_confusables": [
      {
        "word": "under separate cover",
        "zh": "另封邮寄；另函寄发 (不在主信封单独寄送大件)"
      },
      {
        "word": "by separate mail",
        "zh": "另邮寄送 (分不同的邮包寄送)"
      },
      {
        "word": "in a separate parcel",
        "zh": "装在单独包裹中分发"
      },
      {
        "word": "separately dispatched",
        "zh": "分别派发出货"
      }
    ],
    "notes": "【搭配考点】send samples under separate cover 另函寄送样品；sent under separate cover 已经另封寄出；forwarded under separate cover 另函转递；【形近辨析】under special cover (在特殊保护遮盖之下), under cover of (借助夜色或烟雾的掩护之下 - 战术军事语境)；【近义辨析】under separate cover 是商业英语信函中最为经典的传统程式套语，专指由于样品体积厚重或图册页码过大，不便夹在商务薄信封内，而选择另立包裹分开发出；by separate mail 属于现代平实口吻表达；in a separate parcel 侧重实体物流纸箱包装的物理区分。"
  },
  "interest": {
    "word": "interest",
    "zh": "利息；兴趣；利益；股权",
    "translation": "利息；兴趣；利益；股权",
    "cloze": {
      "sentence": "The central bank decided to lower its benchmark ______ rate to stimulate economic expansion.",
      "translation": "中央银行决定降低基准利率以刺激经济增长。"
    },
    "form_confusables": [
      {
        "word": "interest",
        "zh": "兴趣；利息；利益"
      },
      {
        "word": "contrast",
        "zh": "对比；对照"
      },
      {
        "word": "contest",
        "zh": "竞赛；争夺"
      },
      {
        "word": "integrate",
        "zh": "结合；整合"
      }
    ],
    "semantic_confusables": [
      {
        "word": "interest",
        "zh": "利息；股权利益 (资金借贷成本或投资权益)"
      },
      {
        "word": "stake",
        "zh": "股份；重大利益关系 (投资筹码股比)"
      },
      {
        "word": "yield",
        "zh": "投资回报收益率 (债券股息实际回报)"
      },
      {
        "word": "benefit",
        "zh": "实惠好处；福利救济金"
      }
    ],
    "notes": "【搭配考点】interest rate 利率；in the public interest 符合公众利益；conflict of interest 利益冲突；controlling interest 控股权；show a keen interest in 对...展现浓厚兴趣；【形近辨析】contrast (明暗对照/对比), contest (选拔竞赛/抗辩争夺), integrate (融为一体)；【近义辨析】interest 词义极丰，在金融中专指借贷资金所支付的孳息费用，亦指在某公司持有的表决权股份；stake 侧重在某场赌局或重大收购中所下注的真金白银投资本钱；yield 专指债券投资每年给付的实际净收益百分比率；benefit 强调生活或健康层面的实惠好处。"
  },
  "item": {
    "word": "item",
    "zh": "条款；货品；项目",
    "translation": "条款；货品；项目",
    "cloze": {
      "sentence": "The committee spent an hour discussing the final ______ on the morning meeting agenda.",
      "translation": "委员会花了一个小时讨论早间会议议程上的最后一项议题。"
    },
    "form_confusables": [
      {
        "word": "item",
        "zh": "条目；物品；项目"
      },
      {
        "word": "atom",
        "zh": "原子；微粒"
      },
      {
        "word": "stem",
        "zh": "茎干；阻止"
      },
      {
        "word": "idiom",
        "zh": "习语；成语"
      }
    ],
    "semantic_confusables": [
      {
        "word": "item",
        "zh": "议程单项；货品明细条目 (清单表格中的独立行)"
      },
      {
        "word": "article",
        "zh": "条款；物品 (法律条文第几条或独立货物)"
      },
      {
        "word": "clause",
        "zh": "合同条款；从句 (具法律约束力条款)"
      },
      {
        "word": "object",
        "zh": "物体；客体；宗旨"
      }
    ],
    "notes": "【搭配考点】agenda item 议程项目；collector's item 珍藏品；news item 新闻条目；itemized bill 费用明细清单；【形近辨析】atom (物理原子), stem (植物花茎/起源于), idiom (习惯用语/方言)；【近义辨析】item 专指清单、菜单、议程表中独立列举出的某一项，或商场货架上一件单独的商品货物；article 偏向法律宪法合同中的条文（如 Article 5），或散文期刊文章；clause 专指商业合同中具有法律约束力的具体款项；object 强调肉眼可见的物理三维实物。"
  },
  "various kinds of": {
    "word": "various kinds of",
    "zh": "各种各样的；各类",
    "translation": "各种各样的；各类",
    "cloze": {
      "sentence": "The global trading company specializes in exporting ______ industrial processing machinery.",
      "translation": "这家全球贸易公司专门出口各类工业加工机械设备。"
    },
    "form_confusables": [
      {
        "word": "various kinds of",
        "zh": "各种各样的"
      },
      {
        "word": "several kinds of",
        "zh": "几种不同类型的"
      },
      {
        "word": "all kinds of",
        "zh": "形形色色的；所有种类的"
      },
      {
        "word": "different types of",
        "zh": "不同型号/类型的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "various kinds of",
        "zh": "各类；各种各样的 (品类繁多各具特色)"
      },
      {
        "word": "a wide range of",
        "zh": "广泛多样的 (覆盖面广阔的谱系)"
      },
      {
        "word": "a diverse assortment of",
        "zh": "琳琅满目的；五花八门的 (多样组合)"
      },
      {
        "word": "an array of",
        "zh": "令人眼花缭乱的一整排陈列"
      }
    ],
    "notes": "【搭配考点】various kinds of goods 各类货物；supply various kinds of 供应各种各样的...；deal in various kinds of 经营各类...；【形近辨析】several kinds of (强调只有少数三四种不同类型), all kinds of (强调涵盖全部包罗万象的大杂烩), different types of (强调在工业规格型号上的不同)；【近义辨析】various kinds of 属于商务进出口介绍中极其地道纯正的品类修饰短语，强调商品品类丰富、满足多元挑选；a wide range of 侧重产品谱系的宽度；a diverse assortment of 强调色彩各异、错落有致的集合；an array of 侧重整齐阵列展示的视觉感。"
  },
  "look forward to": {
    "word": "look forward to",
    "zh": "盼望；期待",
    "translation": "盼望；期待",
    "cloze": {
      "sentence": "We ______ receiving your favorable response and working closely together in the future.",
      "translation": "我们期待收到您的积极答复，并在未来展开紧密合作。"
    },
    "form_confusables": [
      {
        "word": "look forward to",
        "zh": "盼望；期待"
      },
      {
        "word": "look out for",
        "zh": "当心；留神"
      },
      {
        "word": "look down upon",
        "zh": "蔑视；轻视"
      },
      {
        "word": "look back on",
        "zh": "回顾；回想"
      }
    ],
    "semantic_confusables": [
      {
        "word": "look forward to",
        "zh": "殷切期待；盼望 (外贸函电结尾经典友好客套)"
      },
      {
        "word": "anticipate",
        "zh": "预见；期望 (脑海预想做好准备)"
      },
      {
        "word": "await",
        "zh": "恭候；静候 (严肃庄重等待结果)"
      },
      {
        "word": "expect",
        "zh": "预期；料想 (理所当然认为会发生)"
      }
    ],
    "notes": "【搭配考点】look forward to hearing from you 期待收到您的回信 (注意 to 为介词后接 V-ing)；look forward to your cooperation 期待与您合作；eagerly look forward to 翘首以盼；【形近辨析】look out for (警惕留神危险), look down upon (瞧不起/俯视轻蔑), look back on (追溯回味往事)；【近义辨析】look forward to 带有浓厚亲切期待的感情色彩，是商务函电末尾必不可少的友好落款祝词；anticipate 侧重理性预测并提前针对事件做好防范预案；await 是及物动词，语气严肃庄重地静观其变；expect 侧重根据客观规律推断某事应该且必定会发生。"
  },
  "owe": {
    "word": "owe",
    "zh": "欠；归功于；感激",
    "translation": "欠；归功于；感激",
    "cloze": {
      "sentence": "The young entrepreneur acknowledged that he would always ______ his early success to his mentor's guidance.",
      "translation": "这位年轻创业家承认，他将永远把早期的成功归功于导师的指引。"
    },
    "form_confusables": [
      {
        "word": "owe",
        "zh": "欠；归功于"
      },
      {
        "word": "own",
        "zh": "拥有；自己的"
      },
      {
        "word": "awe",
        "zh": "敬畏；钦佩"
      },
      {
        "word": "owl",
        "zh": "猫头鹰"
      }
    ],
    "semantic_confusables": [
      {
        "word": "owe",
        "zh": "归功于 (owe...to)；欠债负债 (深怀恩惠)"
      },
      {
        "word": "attribute",
        "zh": "归因于；归功于 (客观归结于前因)"
      },
      {
        "word": "ascribe",
        "zh": "归因于；归属于 (文学哲学判定归属)"
      },
      {
        "word": "indebted",
        "zh": "感激不尽的；蒙恩欠债的"
      }
    ],
    "notes": "【搭配考点】owe A to B 把A归功于B/欠B人情债；owe sb an apology 欠某人一个道歉；owe money to the bank 欠银行钱；owing to 由于/因为；【形近辨析】own (拥有), awe (惊叹敬畏), owl (夜行猫头鹰)；【近义辨析】owe...to 侧重饱含感恩知遇之情，承认若无对方帮扶自己绝不可能有今日成就，经济上指欠钱款债务；attribute 偏向客观冷静的科学或因果分析推导；ascribe 偏正式书面，指将无名古画判定归于某位大师手笔；indebted 强调内心承蒙厚爱深表歉疚感佩。"
  },
  "profit": {
    "word": "profit",
    "zh": "利润；收益；获利",
    "translation": "利润；收益；获利",
    "cloze": {
      "sentence": "The company reported a substantial increase in net ______ after expanding into foreign markets.",
      "translation": "在拓展进入海外市场后，该公司的净利润实现了大幅增长。"
    },
    "form_confusables": [
      {
        "word": "profit",
        "zh": "利润；获益"
      },
      {
        "word": "prophet",
        "zh": "先知；预言家"
      },
      {
        "word": "forfeit",
        "zh": "没收；丧失"
      },
      {
        "word": "prompt",
        "zh": "促使；敏捷的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "profit",
        "zh": "净利润；纯利润 (扣除全部成本后的留存)"
      },
      {
        "word": "revenue",
        "zh": "营业额；总营收 (未扣除成本的毛进账)"
      },
      {
        "word": "margin",
        "zh": "毛利差价；利润率 (售价与成本差额比例)"
      },
      {
        "word": "gain",
        "zh": "收益；资本利得 (交易中斩获利得)"
      }
    ],
    "notes": "【搭配考点】make/turn a profit 盈利/赚钱；net/gross profit 净/毛利润；profit margin 利润率；profit-sharing 利润分红计划；profit from 从...中获利；【形近辨析】prophet (宗教先知/预言者 - 读音完全同音异形词), forfeit (因违规被剥夺罚款), prompt (迅速的/提示词)；【近义辨析】profit 是财务报表核心，指总收入扣减掉税金、进货、人力租金等全部成本后的净结余所得；revenue 专指流水总进账（销售总额）；margin 侧重每一件商品售价中蕴含的毛利空间；gain 强调通过转手交易或买卖股票斩获的资本利得。"
  },
  "in the market for": {
    "word": "in the market for",
    "zh": "想要购买；有意求购",
    "translation": "想要购买；有意求购",
    "cloze": {
      "sentence": "Our international purchasing department is currently ______ energy-efficient commercial baking ovens.",
      "translation": "我方国际采购部门目前正有意求购节能型商用烘焙烤箱。"
    },
    "form_confusables": [
      {
        "word": "in the market for",
        "zh": "想要采购；有意购买"
      },
      {
        "word": "on the market for",
        "zh": "在市场上销售期间"
      },
      {
        "word": "off the market",
        "zh": "停止销售；下架"
      },
      {
        "word": "up to the mark",
        "zh": "符合标准；达标"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in the market for",
        "zh": "有意购买；正物色求购 (外贸谈判表明采购意愿)"
      },
      {
        "word": "shopping around for",
        "zh": "货比三家求购 (在各供应商间比价挑选)"
      },
      {
        "word": "interested in buying",
        "zh": "对购买某物抱有浓厚意向"
      },
      {
        "word": "seeking to procure",
        "zh": "谋求采购 (正规大型物资采购)"
      }
    ],
    "notes": "【搭配考点】be in the market for sth 想要采购某物/有意求购；be actively in the market for 正在积极求购；in the market for new equipment 正打算添置新设备；【形近辨析】on the market (在市场上公开发售/上市), off the market (已被抢购一空/退出市场), up to the mark (达到质量合格标杆)；【近义辨析】in the market for 是外贸买家向潜在供应商发出的经典行业询盘用语，表明买家手里握有预算、当下正处于实际寻盘购买状态；shopping around for 强调买家在不同摊位比价格比货期；interested in buying 偏直白表述；seeking to procure 偏政企大型招投标严肃用语。"
  },
  "enquiry": {
    "word": "enquiry",
    "zh": "询盘；询价；调查",
    "translation": "询盘；询价；调查",
    "cloze": {
      "sentence": "We are pleased to acknowledge receipt of your trade ______ dated September fifth regarding solar cells.",
      "translation": "我们很高兴确认收到贵方九月五日关于太阳能电池的商业询盘。"
    },
    "form_confusables": [
      {
        "word": "enquiry",
        "zh": "询价；询盘；调查"
      },
      {
        "word": "inquiry",
        "zh": "调查；询问 (美式拼写)"
      },
      {
        "word": "ensure",
        "zh": "确保；保证"
      },
      {
        "word": "require",
        "zh": "需要；要求"
      }
    ],
    "semantic_confusables": [
      {
        "word": "enquiry",
        "zh": "询盘；询价函 (买方打探价格货期的正式信函)"
      },
      {
        "word": "query",
        "zh": "疑问；质询 (存疑提出的核实查询)"
      },
      {
        "word": "question",
        "zh": "疑问；提问 (通用解答疑问)"
      },
      {
        "word": "probe",
        "zh": "深入探查；彻查"
      }
    ],
    "notes": "【搭配考点】trade/business enquiry 贸易询盘；enquiry about prices 询价；make an enquiry 咨询/提出询盘；enquiry office 问讯处；hold an enquiry 举行调查听证；【形近辨析】inquiry (美式等同拼法，但在英式中 enquiry 偏日常询问商业询盘，inquiry 偏官方正式法律调查), ensure (确保安全), require (规定要求)；【近义辨析】enquiry 在国际贸易函电中是整个外贸流程的绝对第一步（询盘 → 发盘 → 还盘 → 接受），指买方索取规格单价；query 侧重因为怀疑账目有错或电脑数据库调取信息发起的查询；question 泛指一切疑问；probe 专指官方针对腐败或技术灾难发起的严厉彻查。"
  },
  "opportunity": {
    "word": "opportunity",
    "zh": "商业良机；契机；机会",
    "translation": "商业良机；契机；机会",
    "cloze": {
      "sentence": "The booming green technology transition presents an unprecedented ______ for forward-thinking investors.",
      "translation": "蓬勃发展的绿色技术转型为具有远见卓识的投资者带来了前所未有的商业良机。"
    },
    "form_confusables": [
      {
        "word": "opportunity",
        "zh": "机会；良机"
      },
      {
        "word": "importunity",
        "zh": "纠缠不休；强求"
      },
      {
        "word": "immunity",
        "zh": "免疫力；豁免"
      },
      {
        "word": "community",
        "zh": "社区；共同体"
      }
    ],
    "semantic_confusables": [
      {
        "word": "opportunity",
        "zh": "良机；契机 (客观天时地利构成的获利时机)"
      },
      {
        "word": "chance",
        "zh": "机会；可能性 (偏口语，带运气偶然性)"
      },
      {
        "word": "opening",
        "zh": "岗位空缺；市场空白机遇"
      },
      {
        "word": "occasion",
        "zh": "场合；特定重大时节"
      }
    ],
    "notes": "【搭配考点】business/job opportunity 商业良机/就业机会；seize/grasp an opportunity 抓住机会；miss/lose an opportunity 错失良机；equal opportunities 平等机会；window of opportunity 绝佳时机窗口；【形近辨析】importunity (强行纠缠讨要), immunity (免除罪责/生物免疫力), community (社会社群)；【近义辨析】opportunity 强调由外部天时地利构成的绝佳客观利好条件，只要付出努力便能获得丰厚回报；chance 侧重随机概率与运气的成分；opening 专指企业招聘中出现的空缺岗位或市场蓝海空白；occasion 强调历史性的庄重纪念时刻或节日场合。"
  },
  "desire": {
    "word": "desire",
    "zh": "愿望；渴望",
    "translation": "愿望；渴望",
    "cloze": {
      "sentence": "The two trading partners expressed a strong mutual ______ to expand future bilateral commerce.",
      "translation": "双方贸易伙伴表达了进一步扩大未来双边贸易的强烈共同愿望。"
    },
    "form_confusables": [
      {
        "word": "desire",
        "zh": "愿望；渴望"
      },
      {
        "word": "admire",
        "zh": "钦佩；赞赏"
      },
      {
        "word": "expire",
        "zh": "到期；失效"
      },
      {
        "word": "require",
        "zh": "要求；需要"
      }
    ],
    "semantic_confusables": [
      {
        "word": "desire",
        "zh": "愿望；诉求意向 (内心深处持久坚定的渴求)"
      },
      {
        "word": "wish",
        "zh": "祝愿；心愿 (带虚幻浪漫色彩的期盼)"
      },
      {
        "word": "aspiration",
        "zh": "抱负；雄心宏愿 (崇高理想追求)"
      },
      {
        "word": "longing",
        "zh": "刻骨相思；长久渴望"
      }
    ],
    "notes": "【搭配考点】express a desire to do 表达做某事的愿望；have no desire to do 毫无意愿做某事；burning desire 强烈的欲望/炽热的愿望；satisfy one's desire 满足某人的愿望；【形近辨析】admire (钦佩慕名), expire (证件失效到期), require (强制规章要求)；【近义辨析】desire 语气庄重且意愿坚定，商务外贸公文中常指双方极具诚意的合作意向与诉求；wish 往往带有一丝空想幻想色彩（如生日许愿）；aspiration 强调青年立志成才、兼济天下的崇高抱负；longing 带有背井离乡对故土亲人刻骨铭心的长久思念。"
  },
  "handle": {
    "word": "handle",
    "zh": "处理；经手；操作",
    "translation": "处理；经手；操作",
    "cloze": {
      "sentence": "Our logistics team is fully certified and equipped to safely ______ hazardous chemical consignments.",
      "translation": "我们的物流团队完全具备专业资质和设备，能够安全操作与经运危险化学品批次。"
    },
    "form_confusables": [
      {
        "word": "handle",
        "zh": "处理；把手"
      },
      {
        "word": "bundle",
        "zh": "捆；包裹"
      },
      {
        "word": "candle",
        "zh": "蜡烛"
      },
      {
        "word": "spindle",
        "zh": "轴心；心轴"
      }
    ],
    "semantic_confusables": [
      {
        "word": "handle",
        "zh": "妥善处理；经办装运 (事务安排有条不紊操办)"
      },
      {
        "word": "process",
        "zh": "加工审批；处理 (按系统规程流转处理)"
      },
      {
        "word": "deal with",
        "zh": "打交道；应对处理"
      },
      {
        "word": "tackle",
        "zh": "直面攻克；解决棘手问题"
      }
    ],
    "notes": "【搭配考点】handle with care 小心轻放 (箱体物流标识)；handle complaints 处理客户投诉；handle cargo/goods 装卸经运货物；handle a crisis 应对危机；fly off the handle 勃然大怒；【形近辨析】bundle (大捆包裹/捆绑销售), candle (蜡烛), spindle (纺锤主轴)；【近义辨析】handle 强调亲力亲为地动手操作、装卸运输或熟练平息棘手纠纷；process 专指在流水线上对肉眼可见的原材料进行物理深加工，或在办公室内按部就班审核签证发票等文书；deal with 是最广泛的日常打交道用语；tackle 强调毫不退缩地撸起袖子直面核心硬骨头问题。"
  },
  "attach": {
    "word": "attach",
    "translation": "附上; 附带; 贴上",
    "cloze": {
      "sentence": "Please find the revised quotation that we ______ to this email.",
      "translation": "请查阅我们随此邮件附上的修订版报价单。"
    },
    "form_confusables": [
      {
        "word": "attach",
        "zh": "附上；依附"
      },
      {
        "word": "attack",
        "zh": "攻击；抨击"
      },
      {
        "word": "attain",
        "zh": "达到；获得"
      },
      {
        "word": "detach",
        "zh": "拆卸；分离"
      }
    ],
    "semantic_confusables": [
      {
        "word": "attach",
        "zh": "随信附上 (邮件/信件附件)"
      },
      {
        "word": "enclose",
        "zh": "封入信封；装入随函"
      },
      {
        "word": "append",
        "zh": "追加附录；增补于末尾"
      },
      {
        "word": "affix",
        "zh": "贴上 (邮票/印章等)"
      }
    ],
    "notes": "【搭配考点】attach...to... 随函/随邮件附上；【形近辨析】attack (攻击/抨击)，attain (达到/获得)，detach (de-离开，拆下/分离)；【近义辨析】attach 专用于邮件附件或粘附，enclose 侧重将实物或纸质单据装入信封随信寄出，append 侧重在文末追加附录，affix 侧重张贴印章或标签。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'tætʃ/",
    "zh": "附上; 附带; 贴上"
  },
  "regarding": {
    "word": "regarding",
    "translation": "关于; 至于",
    "cloze": {
      "sentence": "I am writing to inquire ______ the status of our shipment under Contract No. 804.",
      "translation": "我致信旨在垂询第804号合同项下货物的运输进展情况。"
    },
    "form_confusables": [
      {
        "word": "regarding",
        "zh": "关于；至于"
      },
      {
        "word": "rewarding",
        "zh": "有回报的；值得的"
      },
      {
        "word": "retarding",
        "zh": "阻碍；推迟"
      },
      {
        "word": "recording",
        "zh": "记录；录音"
      }
    ],
    "semantic_confusables": [
      {
        "word": "regarding",
        "zh": "关于；鉴于 (正式商务引出议题)"
      },
      {
        "word": "concerning",
        "zh": "关于；涉及 (带有轻微关切语气)"
      },
      {
        "word": "respecting",
        "zh": "关于；鉴于 (法律/公文书面用语)"
      },
      {
        "word": "touching",
        "zh": "提及；关于 (文学/旧式用法)"
      }
    ],
    "notes": "【搭配考点】regarding 介词引出询问或商务主题，常置于信函开头；【形近辨析】rewarding (有回报的)，retarding (阻碍迟滞)，recording (记录录像)；【近义辨析】regarding 商业信函标准引题介词（= with regard to），concerning 稍含牵连关涉之意，respecting 属古旧法律公文用语，touching 多为文学提及。",
    "level": "CET-4/BEC",
    "phonetic": "/ri'ɡɑ:diŋ; ri:-/",
    "zh": "关于; 至于"
  },
  "for one's reference": {
    "word": "for one's reference",
    "translation": "供某方参考",
    "cloze": {
      "sentence": "We enclose a copy of our latest price list for your ______.",
      "translation": "我们附上最新价目表一份，供贵方参考。"
    },
    "form_confusables": [
      {
        "word": "for one's reference",
        "zh": "供某方参考"
      },
      {
        "word": "for one's preference",
        "zh": "按某人偏好"
      },
      {
        "word": "for one's convenience",
        "zh": "为某人方便起见"
      },
      {
        "word": "for one's deference",
        "zh": "出于对某人的遵从"
      }
    ],
    "semantic_confusables": [
      {
        "word": "for one's reference",
        "zh": "供某方查阅参考"
      },
      {
        "word": "for your information",
        "zh": "供参考；谨此知会 (无需回复)"
      },
      {
        "word": "for your perusal",
        "zh": "供贵方细阅研读 (更庄重)"
      },
      {
        "word": "for your guidance",
        "zh": "供贵方指引/遵循"
      }
    ],
    "notes": "【搭配考点】for one's reference (供某人/贵方参考)，商务信函寄送样本、价目表时的经典结语；【形近辨析】preference (偏好)，convenience (方便)，deference (顺从/敬重)；【近义辨析】for your reference 强调提供资料以资佐证和查考，for your information (FYI) 侧重告知事实知会无需回复，for your perusal 强调恭请对方细致审阅，for your guidance 侧重作为操作准绳。",
    "level": "CET-4/BEC",
    "phonetic": "/for one's reference/",
    "zh": "供某方参考"
  },
  "rough": {
    "word": "rough",
    "translation": "大致的; 粗略的",
    "cloze": {
      "sentence": "Can you give us a ______ estimate of the total shipping cost?",
      "translation": "您能否给我们一个海运总成本的大致估算？"
    },
    "form_confusables": [
      {
        "word": "rough",
        "zh": "大致的；粗糙的"
      },
      {
        "word": "tough",
        "zh": "坚硬的；棘手的"
      },
      {
        "word": "cough",
        "zh": "咳嗽"
      },
      {
        "word": "dough",
        "zh": "生面团；现款"
      }
    ],
    "semantic_confusables": [
      {
        "word": "rough",
        "zh": "粗略的；概括的 (非精细的)"
      },
      {
        "word": "approximate",
        "zh": "近似的；接近精确的"
      },
      {
        "word": "crude",
        "zh": "粗制的；天然未加工的"
      },
      {
        "word": "coarse",
        "zh": "质地粗糙的 (颗粒大)"
      }
    ],
    "notes": "【搭配考点】rough estimate / rough idea 粗略估算/大致概念；【形近辨析】-ough尾缀混淆：tough (坚韧/棘手)，cough (咳嗽)，dough (生面团)；【近义辨析】rough 强调未经过精细加工的初步数字，approximate 强调在数学上极为接近真实值，crude 强调处于原始粗制滥造状态，coarse 强调材质或织物颗粒粗糙。",
    "level": "CET-4/BEC",
    "phonetic": "/rʌf/",
    "zh": "大致的; 粗略的"
  },
  "chamber of commerce": {
    "word": "chamber of commerce",
    "translation": "总商会; 商会",
    "cloze": {
      "sentence": "The certificate of origin must be authenticated by the local ______ of commerce.",
      "translation": "产地来源证必须由当地商会加签认证。"
    },
    "form_confusables": [
      {
        "word": "chamber of commerce",
        "zh": "商会；总商会"
      },
      {
        "word": "board of directors",
        "zh": "董事会"
      },
      {
        "word": "court of justice",
        "zh": "法院；法庭"
      },
      {
        "word": "hall of residence",
        "zh": "学生公寓宿舍"
      }
    ],
    "semantic_confusables": [
      {
        "word": "chamber of commerce",
        "zh": "商会 (商界自治公会)"
      },
      {
        "word": "trade association",
        "zh": "行业协会 (同业公会)"
      },
      {
        "word": "business council",
        "zh": "商业委员会"
      },
      {
        "word": "mercantile agency",
        "zh": "商业信用调查所"
      }
    ],
    "notes": "【搭配考点】chamber of commerce (商会)，外贸中常与 legalise / authenticate a document (认证单据) 连用；【形近辨析】board of directors (公司董事会)，court of justice (法院)，hall of residence (宿舍)；【近义辨析】chamber of commerce 是跨行业的地区性商会组织，trade association 专指特定行业的同业公会，business council 侧重政商协商委员会。",
    "level": "CET-4/BEC",
    "phonetic": "/略作 C of C/",
    "zh": "总商会; 商会"
  },
  "requirement": {
    "word": "requirement",
    "translation": "规格要求; 必备条件",
    "cloze": {
      "sentence": "The finished products must meet the strict quality ______ specified in the purchase order.",
      "translation": "成品质检必须符合采购订单中规定的严格质量要求。"
    },
    "form_confusables": [
      {
        "word": "requirement",
        "zh": "必备条件；规格要求"
      },
      {
        "word": "acquisition",
        "zh": "收购；获得"
      },
      {
        "word": "requisition",
        "zh": "正式征用；申请调拨"
      },
      {
        "word": "relinquishment",
        "zh": "放弃；让渡"
      }
    ],
    "semantic_confusables": [
      {
        "word": "requirement",
        "zh": "规格要求；必备条件"
      },
      {
        "word": "specification",
        "zh": "工程规格；技术明细"
      },
      {
        "word": "criterion",
        "zh": "评估准则；裁判标准"
      },
      {
        "word": "prerequisite",
        "zh": "先决条件；前提"
      }
    ],
    "notes": "【搭配考点】meet/satisfy requirements 满足规定要求；【形近辨析】requisition (正规申领调拨)，acquisition (收购买并)，relinquishment (放弃)；【近义辨析】requirement 侧重泛指客户或规定必须满足的条件，specification 侧重工业/工程技术层面的具体参数明细，criterion 侧重评判打分的标准，prerequisite 侧重先于行动前必须达到的前提。",
    "level": "CET-4/BEC",
    "phonetic": "/ri'kwaiəmənt/",
    "zh": "规格要求; 必备条件"
  },
  "recommend": {
    "word": "recommend",
    "translation": "推荐; 介绍",
    "cloze": {
      "sentence": "We strongly ______ that you insure the consignment against all marine risks.",
      "translation": "我们强烈建议贵方为该批托运货物投保一切海运险。"
    },
    "form_confusables": [
      {
        "word": "recommend",
        "zh": "建议；推荐"
      },
      {
        "word": "recompense",
        "zh": "赔偿；酬报"
      },
      {
        "word": "reconcile",
        "zh": "使和解；调和"
      },
      {
        "word": "recommence",
        "zh": "重新开始"
      }
    ],
    "semantic_confusables": [
      {
        "word": "recommend",
        "zh": "建议；推荐 (基于经验)"
      },
      {
        "word": "advise",
        "zh": "忠告；正式建议"
      },
      {
        "word": "propose",
        "zh": "提议；提出方案"
      },
      {
        "word": "urge",
        "zh": "敦促；极力催促"
      }
    ],
    "notes": "【搭配考点】recommend that sb (should) do 虚拟语气，或 recommend doing sth；【形近辨析】recompense (补偿/酬报)，reconcile (调解和解)，recommence (重新开始)；【近义辨析】recommend 侧重基于良性经验向对方推荐最佳做法，advise 偏向专家给出正式建议，propose 侧重提出具体方案以待审议，urge 强调情势急迫敦促行动。",
    "level": "CET-4/BEC",
    "phonetic": "/,rekə'mend/",
    "zh": "推荐; 介绍"
  },
  "be in a position to": {
    "word": "be in a position to",
    "translation": "有能力做; 能够",
    "cloze": {
      "sentence": "Having secured the raw materials, we are now in a ______ to accept your trial order.",
      "translation": "在锁定原材料供应后，我们如今完全有能力接受贵方的试订单。"
    },
    "form_confusables": [
      {
        "word": "be in a position to",
        "zh": "有能力做；处于能...的地位"
      },
      {
        "word": "be in a condition to",
        "zh": "身体处于适宜状态"
      },
      {
        "word": "be in a relation to",
        "zh": "与...发生关联"
      },
      {
        "word": "be in a situation to",
        "zh": "置身于某种境地中"
      }
    ],
    "semantic_confusables": [
      {
        "word": "be in a position to",
        "zh": "有能力/有条件做 (商务委婉)"
      },
      {
        "word": "be capable of",
        "zh": "具备做某事的物理能力"
      },
      {
        "word": "be able to",
        "zh": "能够 (普通用语)"
      },
      {
        "word": "be eligible to",
        "zh": "有资格/符合资质做"
      }
    ],
    "notes": "【搭配考点】be in a position to do sth 外贸经典句式，表示“有条件/有能力履约”；【形近辨析】in a condition to (指健康/物理完好度)，in a situation (多指不利困境)；【近义辨析】be in a position to 是商务公函中表达“有财力/货源/权限履约”的高度得体用语，be capable of 侧重生理或技术能力，be eligible to 侧重制度性资格合规。",
    "level": "CET-4/BEC",
    "phonetic": "/be in a position to/",
    "zh": "有能力做; 能够"
  },
  "captioned goods": {
    "word": "captioned goods",
    "translation": "标题所示货物; 该货物",
    "cloze": {
      "sentence": "Please inspect the ______ goods immediately upon their discharge at the container terminal.",
      "translation": "货物在集装箱码头卸船后，请立即查验上述标题所示货物。"
    },
    "form_confusables": [
      {
        "word": "captioned goods",
        "zh": "标题所示货物；抬头所列货物"
      },
      {
        "word": "captured goods",
        "zh": "被捕获/查扣的货物"
      },
      {
        "word": "rationed goods",
        "zh": "配给供应物资"
      },
      {
        "word": "stationed goods",
        "zh": "驻留货品"
      }
    ],
    "semantic_confusables": [
      {
        "word": "captioned goods",
        "zh": "信函标题所指货物 (标的物)"
      },
      {
        "word": "subject merchandise",
        "zh": "合同标的物/商品"
      },
      {
        "word": "consignment",
        "zh": "托运货物"
      },
      {
        "word": "shipment",
        "zh": "装运货物"
      }
    ],
    "notes": "【搭配考点】captioned goods 商务公文中常用于信函开篇 Re: 标题下指代该宗货物；【形近辨析】captured (战时捕获/海关查缴)，rationed (配给物资)，stationed (驻防的)；【近义辨析】captioned goods 专用于公文回溯“上方标题所列货物”，subject merchandise 是法律合同用语“标的商品”，consignment 侧重交付给承运人的一整批货物，shipment 侧重船运轮次批次。",
    "level": "CET-4/BEC",
    "phonetic": "/captioned goods/",
    "zh": "标题所示货物; 该货物"
  },
  "domestic": {
    "word": "domestic",
    "translation": "国内的; 本地的",
    "cloze": {
      "sentence": "Due to soaring ______ demand, local suppliers have temporarily suspended export shipments.",
      "translation": "由于国内需求激增，本土供应商已暂时中止出口发货。"
    },
    "form_confusables": [
      {
        "word": "domestic",
        "zh": "本国的；家庭的"
      },
      {
        "word": "dramatic",
        "zh": "戏剧性的；引人注目的"
      },
      {
        "word": "drastic",
        "zh": "激烈的；严厉的"
      },
      {
        "word": "dogmatic",
        "zh": "教条主义的；武断的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "domestic",
        "zh": "国内的 (相对于外贸/国际)"
      },
      {
        "word": "internal",
        "zh": "内部的 (系统/组织之内)"
      },
      {
        "word": "national",
        "zh": "全国性的；国家的"
      },
      {
        "word": "indigenous",
        "zh": "本土原产的；土著的"
      }
    ],
    "notes": "【搭配考点】domestic market/demand 本国内需/本国市场，与 export (出口) 形成鲜明对照；【形近辨析】dramatic (引人瞩目的)，drastic (急剧严厉的)，dogmatic (死板教条的)；【近义辨析】domestic 专指国界之内（相对跨国海外），internal 侧重公司或系统结构内部，national 强调国家主权或全国通行的，indigenous 强调动植物或原住民土生土长。",
    "level": "CET-4/BEC",
    "phonetic": "/dəu'mestik/",
    "zh": "国内的; 本地的"
  },
  "reputation": {
    "word": "reputation",
    "translation": "商誉; 名声; 声望",
    "cloze": {
      "sentence": "Our company enjoys an excellent ______ for prompt delivery and integrity across Southeast Asia.",
      "translation": "我们公司在东南亚享有交货迅捷、信守合同的极佳商誉。"
    },
    "form_confusables": [
      {
        "word": "reputation",
        "zh": "商誉；声誉"
      },
      {
        "word": "refutation",
        "zh": "反驳；驳斥"
      },
      {
        "word": "repetition",
        "zh": "重复；反复"
      },
      {
        "word": "deputation",
        "zh": "代表团；委任"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reputation",
        "zh": "商誉；公众声誉"
      },
      {
        "word": "prestige",
        "zh": "显赫威望；声望"
      },
      {
        "word": "goodwill",
        "zh": "商业商誉 (财务无形资产)"
      },
      {
        "word": "fame",
        "zh": "名气；知名度"
      }
    ],
    "notes": "【搭配考点】enjoy/earn a good reputation for... 因...享有盛誉；【形近辨析】refutation (驳斥)，repetition (重复)，deputation (代表团)；【近义辨析】reputation 侧重公众基于历史履约形成的信用口碑，prestige 强调令人敬畏崇拜的崇高声望，goodwill 财务上专指并购计价的商誉资产，fame 仅强调知名度高低而不必然含商业诚信。",
    "level": "CET-4/BEC",
    "phonetic": "/,repju'teiʃən/",
    "zh": "商誉; 名声; 声望"
  },
  "browse": {
    "word": "browse",
    "translation": "浏览; 查阅",
    "cloze": {
      "sentence": "Prospective buyers can ______ our online product directory to inspect the latest hardware models.",
      "translation": "潜在买家可以浏览我们的在线产品目录，查看最新的五金款式。"
    },
    "form_confusables": [
      {
        "word": "browse",
        "zh": "浏览；翻阅"
      },
      {
        "word": "bruise",
        "zh": "青肿；挫伤"
      },
      {
        "word": "breeze",
        "zh": "微风；轻而易举的事"
      },
      {
        "word": "bronze",
        "zh": "青铜；古铜色"
      }
    ],
    "semantic_confusables": [
      {
        "word": "browse",
        "zh": "浏览；漫不经心地翻阅"
      },
      {
        "word": "scan",
        "zh": "快速扫视；浏览抓重点"
      },
      {
        "word": "skim",
        "zh": "略读；跳读大意"
      },
      {
        "word": "peruse",
        "zh": "详读；审慎研读"
      }
    ],
    "notes": "【搭配考点】browse a website / catalogue 翻阅产品名录或浏览网页；【形近辨析】bruise (挫伤青斑)，breeze (微风)，bronze (青铜)；【近义辨析】browse 强调随心漫步般地浏览选货，scan 强调带着明确搜寻目的快速扫瞄，skim 侧重一目十行提取大意，peruse 则是细嚼慢咽的严密精读。",
    "level": "CET-4/BEC",
    "phonetic": "/brauz/",
    "zh": "浏览; 查阅"
  },
  "a large quantity of": {
    "word": "a large quantity of",
    "translation": "大量的; 大批",
    "cloze": {
      "sentence": "If you place an order for a large ______ of textiles, we can grant you a 5% discount.",
      "translation": "若贵方订购大批纺织品，我们可以给予5%的折扣优惠。"
    },
    "form_confusables": [
      {
        "word": "a large quantity of",
        "zh": "大量的；大批"
      },
      {
        "word": "a large capacity of",
        "zh": "大容量的"
      },
      {
        "word": "a large priority of",
        "zh": "优先权极高的"
      },
      {
        "word": "a large velocity of",
        "zh": "高速度的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "a large quantity of",
        "zh": "大批量的 (可数/不可数物资)"
      },
      {
        "word": "a great deal of",
        "zh": "大量的 (只修饰不可数名词)"
      },
      {
        "word": "a multitude of",
        "zh": "形形色色的；极大量的"
      },
      {
        "word": "a bulk of",
        "zh": "大部分；主体货物"
      }
    ],
    "notes": "【搭配考点】a large quantity of + 名词，商务谈判中批量采购订货的固定表达；【形近辨析】capacity (容积容量)，priority (优先级)，velocity (物理速度)；【近义辨析】a large quantity of 既可接可数也可接不可数实体货物，a great deal of 只能修饰不可数抽象概念，a multitude of 强调人数或种类繁多，bulk 侧重大宗散装或主体。",
    "level": "CET-4/BEC",
    "phonetic": "/a large quantity of/",
    "zh": "大量的; 大批"
  },
  "cif": {
    "word": "cif",
    "translation": "到岸价(成本加运保费)",
    "cloze": {
      "sentence": "The supplier quoted a price of $450 per metric ton ______ Rotterdam.",
      "translation": "供应商报出了每公吨450美元鹿特丹到岸价（成本加运费、保险费）。"
    },
    "form_confusables": [
      {
        "word": "cif",
        "zh": "成本、运费加保险费到岸价 (CIF)"
      },
      {
        "word": "fob",
        "zh": "离岸价 (船上交货价)"
      },
      {
        "word": "cfr",
        "zh": "成本加运费价 (CFR)"
      },
      {
        "word": "cip",
        "zh": "运费和保险费付至 (CIP)"
      }
    ],
    "semantic_confusables": [
      {
        "word": "cif",
        "zh": "CIF到岸价 (海运水运专用)"
      },
      {
        "word": "fob",
        "zh": "FOB离岸价 (买方自付运保费)"
      },
      {
        "word": "exw",
        "zh": "EXW工厂交货价 (买方自提)"
      },
      {
        "word": "dap",
        "zh": "DAP目的地交货价 (卖方承担全部运输)"
      }
    ],
    "notes": "【搭配考点】CIF (Cost, Insurance and Freight) 国际贸易术语，后接目的港（如 CIF London）；【形近辨析】CIF（含运保费）、FOB（装运港船上交货，不含海运及保险）、CFR（不含保险费）、CIP（多式联运运保费付至）；【近义辨析】CIF 专用于海运和内河运输且卖方负责货运险，FOB 买方自行安排租船订舱并投保，EXW 则是买方在卖方仓库自行提货并承担全部责任。",
    "level": "CET-4/BEC",
    "phonetic": "/cif/",
    "zh": "到岸价(成本加运保费)"
  },
  "illustrated catalogue": {
    "word": "illustrated catalogue",
    "translation": "附图产品目录; 图解样本",
    "cloze": {
      "sentence": "We are mailing you our latest ______ catalogue which contains photos and specifications of all products.",
      "translation": "我们正给贵方寄送最新的附图产品目录，内含全部产品的照片及技术规格。"
    },
    "form_confusables": [
      {
        "word": "illustrated catalogue",
        "zh": "附图产品目录；图解样本"
      },
      {
        "word": "illuminated brochure",
        "zh": "发光照明的宣传手册"
      },
      {
        "word": "illusionary handbook",
        "zh": "虚幻错觉的指南"
      },
      {
        "word": "illustrious monograph",
        "zh": "著名的学术专著"
      }
    ],
    "semantic_confusables": [
      {
        "word": "illustrated catalogue",
        "zh": "附图产品样本名录"
      },
      {
        "word": "product brochure",
        "zh": "单页/折页产品宣传册"
      },
      {
        "word": "sales manual",
        "zh": "销售人员业务手册"
      },
      {
        "word": "specification sheet",
        "zh": "纯技术规格单 (无插图)"
      }
    ],
    "notes": "【搭配考点】send/enclose an illustrated catalogue 随函寄送图解产品样本；【形近辨析】illuminated (发光的/彩绘的)，illusionary (虚幻的)，illustrious (著名的/辉煌的)；【近义辨析】illustrated catalogue 侧重图文并茂的成册完整货品样本名录，brochure 多为折叠式轻量宣传小册子，sales manual 是供内部业务员使用的作业指导手册，spec sheet 仅为单张黑白技术数据表。",
    "level": "CET-4/BEC",
    "phonetic": "/illustrated catalogue/",
    "zh": "附图产品目录; 图解样本"
  },
  "acquaint": {
    "word": "acquaint",
    "translation": "使熟悉; 使了解",
    "cloze": {
      "sentence": "Sales representatives must carefully ______ themselves with the terms of the new trade agreement.",
      "translation": "销售代表们必须认真熟悉新贸易协定的各项条款。"
    },
    "form_confusables": [
      {
        "word": "acquaint",
        "zh": "使熟悉；使了解"
      },
      {
        "word": "acquire",
        "zh": "获得；购得"
      },
      {
        "word": "acquit",
        "zh": "宣判无罪；表现"
      },
      {
        "word": "adequate",
        "zh": "充足的；胜任的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "acquaint",
        "zh": "使熟悉；使知晓 (acquaint sb with)"
      },
      {
        "word": "familiarize",
        "zh": "使通晓；使驾轻就熟"
      },
      {
        "word": "inform",
        "zh": "正式通知；告知"
      },
      {
        "word": "apprise",
        "zh": "使了解情况；告知"
      }
    ],
    "notes": "【搭配考点】acquaint oneself with sth 使自己熟悉某事物；【形近辨析】acquire (获得/习得)，acquit (宣判无罪/表现)，adequate (足够的)；【近义辨析】acquaint oneself with 侧重使自己对某事有初步但系统性的了解，familiarize 侧重通过实践达到熟练运用的程度，inform 侧重自上而下单向灌输事实，apprise 为高端公文通知告知。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'kweint/",
    "zh": "使熟悉; 使了解"
  },
  "discount": {
    "word": "discount",
    "translation": "折扣; 贴现",
    "cloze": {
      "sentence": "We are prepared to offer a 10% trade ______ for prompt cash settlement.",
      "translation": "若即期现金结算，我们愿意提供10%的商业折扣。"
    },
    "form_confusables": [
      {
        "word": "discount",
        "zh": "折扣；贴现"
      },
      {
        "word": "discountenance",
        "zh": "不赞成；使难堪"
      },
      {
        "word": "discourse",
        "zh": "演讲；话语讨论"
      },
      {
        "word": "discomfort",
        "zh": "不安；不适"
      }
    ],
    "semantic_confusables": [
      {
        "word": "discount",
        "zh": "折扣 (价格直接扣减)"
      },
      {
        "word": "rebate",
        "zh": "事后回扣；退税补贴"
      },
      {
        "word": "concession",
        "zh": "价格让步；优惠"
      },
      {
        "word": "allowance",
        "zh": "津贴；折价补偿"
      }
    ],
    "notes": "【搭配考点】grant/allow a discount of... 提供...百分比的折扣；【形近辨析】discourse (语篇论述)，discomfort (身体不适)，discountenance (不赞同)；【近义辨析】discount 是明码标价上的即时折减，rebate 侧重买方完成特定销量或购后由厂家退还的部分金额（返利），concession 侧重商务谈判博弈中的妥协让步，allowance 侧重因货品瑕疵给予的折价补贴或运费津贴。",
    "level": "CET-4/BEC",
    "phonetic": "/'diskaunt; dis'k-/",
    "zh": "折扣; 贴现"
  },
  "delivery date": {
    "word": "delivery date",
    "translation": "交货日期; 交期",
    "cloze": {
      "sentence": "The buyer emphasized that strict adherence to the agreed ______ date is crucial to the contract.",
      "translation": "买方强调，严格恪守约定的交货日期对履行合同至关重要。"
    },
    "form_confusables": [
      {
        "word": "delivery date",
        "zh": "交货日期；交付时间"
      },
      {
        "word": "discovery date",
        "zh": "发现日期"
      },
      {
        "word": "departure date",
        "zh": "启程离港日期"
      },
      {
        "word": "expiry date",
        "zh": "有效截止日期"
      }
    ],
    "semantic_confusables": [
      {
        "word": "delivery date",
        "zh": "交货期 (货物移交买方之时)"
      },
      {
        "word": "shipment date",
        "zh": "装运期 (货物装船启运之时)"
      },
      {
        "word": "lead time",
        "zh": "交货周期 (从下单到收货总耗时)"
      },
      {
        "word": "due date",
        "zh": "应付款日；到期日"
      }
    ],
    "notes": "【搭配考点】meet/postpone the delivery date 赶上/推迟交货日期；【形近辨析】departure date (开航日)，expiry date (凭证失效日)，discovery date (发现日)；【近义辨析】delivery date 强调货物最终交付买方掌控的时刻，shipment date 专指在装运港装船起运的日期，lead time 是供应链从接单到出厂的周期天数，due date 专指票据或账单的付款截止日。",
    "level": "CET-4/BEC",
    "phonetic": "/delivery date/",
    "zh": "交货日期; 交期"
  },
  "workable": {
    "word": "workable",
    "translation": "可行的; 行得通的",
    "cloze": {
      "sentence": "Your proposed price is too low; we hope you will adjust it to a ______ level.",
      "translation": "贵方出价过低；我们希望贵方能将其调整至切实可行的水平。"
    },
    "form_confusables": [
      {
        "word": "workable",
        "zh": "切实可行的；可操作的"
      },
      {
        "word": "wearable",
        "zh": "耐穿的；可穿戴的"
      },
      {
        "word": "washable",
        "zh": "耐洗的"
      },
      {
        "word": "workaday",
        "zh": "平凡的；日常的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "workable",
        "zh": "行得通的；双方可接受的"
      },
      {
        "word": "feasible",
        "zh": "技术/经济上可行的"
      },
      {
        "word": "viable",
        "zh": "具备长期存活商业价值的"
      },
      {
        "word": "practicable",
        "zh": "切实可行的 (侧重实际可做)"
      }
    ],
    "notes": "【搭配考点】a workable price / solution 行得通的价格/可行的方案；【形近辨析】wearable (可穿戴的)，washable (可水洗的)，workaday (平淡无奇的)；【近义辨析】workable 在外贸中常指报价处于双方都能促成交易的“可行成交区间”，feasible 侧重经过调研论证技术路线上可实现，viable 强调商业模式具备自我造血存活能力，practicable 侧重在现有客观条件下能够付诸实践。",
    "level": "CET-4/BEC",
    "phonetic": "/'wə:kəbl/",
    "zh": "可行的; 行得通的"
  },
  "in reply to": {
    "word": "in reply to",
    "translation": "答复; 回函",
    "cloze": {
      "sentence": "In ______ to your telex of yesterday, we are pleased to inform you that the order is ready.",
      "translation": "答复贵方昨天的电传，我们高兴地通知贵方该批货物已备妥。"
    },
    "form_confusables": [
      {
        "word": "in reply to",
        "zh": "答复；回函"
      },
      {
        "word": "in apply to",
        "zh": "错误搭配（应为apply to）"
      },
      {
        "word": "in supply to",
        "zh": "作为对...的供应"
      },
      {
        "word": "in rely to",
        "zh": "错误搭配（应为rely on）"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in reply to",
        "zh": "答复；回函 (引出对来函的响应)"
      },
      {
        "word": "in response to",
        "zh": "响应；回应 (针对诉求/市场)"
      },
      {
        "word": "in answer to",
        "zh": "回答；应答"
      },
      {
        "word": "in return for",
        "zh": "作为对...的回报"
      }
    ],
    "notes": "【搭配考点】in reply to your letter/inquiry of (date) 回复贵方某日的来信/询价；【形近辨析】in reply to（答复），apply to（应用于），supply to（提供给），rely on（依赖）；【近义辨析】in reply to 专用于书面信函引出来函进行正式答复，in response to 侧重针对市场行情、倡议或投诉做出行动响应，in answer to 侧重正面解答提出的质询疑问，in return for 侧重给予经济对价或人情回报。",
    "level": "CET-4/BEC",
    "phonetic": "/in reply to/",
    "zh": "答复; 回函"
  },
  "leading": {
    "word": "leading",
    "translation": "主要的; 行业领先的",
    "cloze": {
      "sentence": "They are one of the ______ manufacturers of solar photovoltaic panels in the country.",
      "translation": "他们是本国领先的太阳能光伏电池板制造商之一。"
    },
    "form_confusables": [
      {
        "word": "leading",
        "zh": "主要的；行业领先的"
      },
      {
        "word": "leaning",
        "zh": "倾斜；偏向"
      },
      {
        "word": "leasing",
        "zh": "租赁；租借"
      },
      {
        "word": "leaving",
        "zh": "离开；遗留"
      }
    ],
    "semantic_confusables": [
      {
        "word": "leading",
        "zh": "行业龙头的；首屈一指的"
      },
      {
        "word": "foremost",
        "zh": "最首要的；最重要的"
      },
      {
        "word": "dominant",
        "zh": "占绝对主导支配地位的"
      },
      {
        "word": "prominent",
        "zh": "著名的；引人注目的"
      }
    ],
    "notes": "【搭配考点】leading manufacturer / company 行业领先的制造商/龙头企业；【形近辨析】leaning (倾斜/倾向)，leasing (租赁融资)，leaving (离开)；【近义辨析】leading 强调在市场份额或研发技术走在最前端，foremost 强调在重要性或声望上排名第一，dominant 强调凭借垄断优势支配市场，prominent 侧重社会知名度高、显赫招摇。",
    "level": "CET-4/BEC",
    "phonetic": "/span>ing</",
    "zh": "主要的; 行业领先的"
  },
  "manufacturer": {
    "word": "manufacturer",
    "translation": "生产厂家; 制造商",
    "cloze": {
      "sentence": "Buying direct from the ______ eliminates unnecessary middlemen markups.",
      "translation": "直接向生产厂家采购可以免除不必要的中间商层层加价。"
    },
    "form_confusables": [
      {
        "word": "manufacturer",
        "zh": "生产厂家；制造商"
      },
      {
        "word": "manipulator",
        "zh": "操纵者；操控人员"
      },
      {
        "word": "malefactor",
        "zh": "作恶者；犯罪分子"
      },
      {
        "word": "benefactor",
        "zh": "捐助人；恩人"
      }
    ],
    "semantic_confusables": [
      {
        "word": "manufacturer",
        "zh": "制造厂 (侧重大规模工业机器生产)"
      },
      {
        "word": "producer",
        "zh": "生产商 (涵盖农林牧副渔矿产)"
      },
      {
        "word": "maker",
        "zh": "制作者；制造者 (手工或品牌)"
      },
      {
        "word": "fabricator",
        "zh": "预制装配构件厂；捏造者"
      }
    ],
    "notes": "【搭配考点】direct from the manufacturer 直接从原厂采购；【形近辨析】词根-fact-（做/造）：manipulator (操纵者)，malefactor (作恶者)，benefactor (行善行捐助者)；【近义辨析】manufacturer 专指利用大型机械设备进行标准化批量生产的实体工厂，producer 外延更广包含农业石油农作物出品人，maker 多用于复合词指特定品牌或手工制作者（如 watchmaker），fabricator 侧重对钢构材进行切割组装的装配厂家。",
    "level": "CET-4/BEC",
    "phonetic": "/,mænju'fæktʃərə/",
    "zh": "生产厂家; 制造商"
  },
  "minimum order quantity": {
    "word": "minimum order quantity",
    "translation": "最小起订量(MOQ)",
    "cloze": {
      "sentence": "Due to high setup costs, our factory maintains a ______ order quantity of 2,000 pieces per color.",
      "translation": "由于换模调机成本高昂，我们工厂对每个颜色设定了2000件的最小起订量。"
    },
    "form_confusables": [
      {
        "word": "minimum order quantity",
        "zh": "最小起订量 (MOQ)"
      },
      {
        "word": "maximum order quota",
        "zh": "最大订购配额"
      },
      {
        "word": "medium output quantity",
        "zh": "中等产量"
      },
      {
        "word": "minimal operational quality",
        "zh": "最低作业品质"
      }
    ],
    "semantic_confusables": [
      {
        "word": "minimum order quantity",
        "zh": "最小起订量 (MOQ)"
      },
      {
        "word": "order batch size",
        "zh": "批次订货批量"
      },
      {
        "word": "lot size",
        "zh": "经济生产/订货批量"
      },
      {
        "word": "procurement threshold",
        "zh": "采购起订门槛"
      }
    ],
    "notes": "【搭配考点】minimum order quantity (MOQ) 国际采购中的核心议题，常与 setup cost (开模成本) 挂钩；【形近辨析】quota (配额)，output (产出量)，operational quality (运行质量)；【近义辨析】minimum order quantity 商业谈判指明接单的最低数量底线，order batch size 侧重流水线按批次打包生产的数量，lot size 是物流仓储经济批量计算单位，procurement threshold 侧重金额门槛。",
    "level": "CET-4/BEC",
    "phonetic": "/minimum order quantity/",
    "zh": "最小起订量(MOQ)"
  },
  "payment terms": {
    "word": "payment terms",
    "translation": "付款条件; 支付方式",
    "cloze": {
      "sentence": "Our standard ______ terms require a 30% advance deposit with the remainder payable against bill of lading copies.",
      "translation": "我们的标准付款条件要求预付30%定金，余款凭提单副本支付。"
    },
    "form_confusables": [
      {
        "word": "payment terms",
        "zh": "付款条件；支付方式"
      },
      {
        "word": "patent terms",
        "zh": "专利条款/有效期"
      },
      {
        "word": "placement terms",
        "zh": "配置条款；安置条件"
      },
      {
        "word": "pavement terms",
        "zh": "铺路工程条款"
      }
    ],
    "semantic_confusables": [
      {
        "word": "payment terms",
        "zh": "付款条件 (涵盖账期/方式/定金比例)"
      },
      {
        "word": "terms of credit",
        "zh": "信贷条件；赊销条款"
      },
      {
        "word": "method of payment",
        "zh": "付款方式 (如T/T、L/C)"
      },
      {
        "word": "settlement conditions",
        "zh": "清算结算条件"
      }
    ],
    "notes": "【搭配考点】payment terms (付款条件)，外贸成交核心要素（如 T/T 30% deposit, 70% against B/L）；【形近辨析】patent (专利)，placement (安置/投放)，pavement (人行道/路面)；【近义辨析】payment terms 是统领性概念涵盖付款方式、期限与折扣条件，method of payment 仅单指结算工具（如电汇或信用证），terms of credit 侧重给予客户的赊账周期与额度，settlement conditions 偏向金融机构账目清算。",
    "level": "CET-4/BEC",
    "phonetic": "/payment terms/",
    "zh": "付款条件; 支付方式"
  },
  "irrevocable": {
    "word": "irrevocable",
    "translation": "不可撤销的(信用证)",
    "cloze": {
      "sentence": "Payment must be made by an ______ letter of credit opened through a first-class international bank.",
      "translation": "货款必须通过一家一流国际银行开立的不可撤销信用证进行支付。"
    },
    "form_confusables": [
      {
        "word": "irrevocable",
        "zh": "不可撤销的；不能取消的"
      },
      {
        "word": "irreproachable",
        "zh": "无可指责的；无瑕疵的"
      },
      {
        "word": "irrevocably",
        "zh": "不可撤回地 (副词)"
      },
      {
        "word": "irrevocability",
        "zh": "不可撤销性 (名词)"
      }
    ],
    "semantic_confusables": [
      {
        "word": "irrevocable",
        "zh": "不可撤销的 (未经各方同意不得单方推翻)"
      },
      {
        "word": "unalterable",
        "zh": "不可更改的；不可变更的"
      },
      {
        "word": "irreversible",
        "zh": "不可逆转的；不可倒退的"
      },
      {
        "word": "unrepealable",
        "zh": "不可废止的 (法令法规)"
      }
    ],
    "notes": "【搭配考点】irrevocable letter of credit (不可撤销信用证)，国际跟单信用证统一惯例 (UCP600) 核心术语；【形近辨析】前缀 ir- 否定：irreproachable (无可指摘的，reproach)，irrevocable (不可撤销，revoke)；【近义辨析】irrevocable 在外贸与法律中专指协议一经开出单方无权废止，unalterable 强调内容字句无法做任何修改，irreversible 强调物理或历史进程无法回头，unrepealable 专指法律条文不可废除。",
    "level": "CET-4/BEC",
    "phonetic": "/i'revəkəbl; iri'vəukəbl/",
    "zh": "不可撤销的(信用证)"
  },
  "reasonable": {
    "word": "reasonable",
    "translation": "合情理的; 公道的; 适度的",
    "cloze": {
      "sentence": "Considering the superior quality of the goods, we believe our price is very ______.",
      "translation": "鉴于货物质量上乘，我们认为我方的报价十分合理公道。"
    },
    "form_confusables": [
      {
        "word": "reasonable",
        "zh": "合情理的；公道的"
      },
      {
        "word": "seasonal",
        "zh": "季节性的"
      },
      {
        "word": "treasonable",
        "zh": "叛逆的；叛国的"
      },
      {
        "word": "actionable",
        "zh": "可依法提起诉讼的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reasonable",
        "zh": "公道合理的 (价格适中得当)"
      },
      {
        "word": "affordable",
        "zh": "负担得起的；平价的"
      },
      {
        "word": "moderate",
        "zh": "温和适度的"
      },
      {
        "word": "rational",
        "zh": "合乎逻辑理性的"
      }
    ],
    "notes": "【搭配考点】reasonable price / terms 公道合理的价格/条款；【形近辨析】season (季节) -> seasonal (季节性的)，treason (叛国) -> treasonable (叛逆叛国的)，actionable (可起诉的)；【近义辨析】reasonable 侧重定价符合商业惯例与货品价值因此公平合情理，affordable 侧重买方预算能够承担，moderate 强调幅度不高不低，rational 强调思维符合严密逻辑。",
    "level": "CET-4/BEC",
    "phonetic": "/'ri:zənəbl/",
    "zh": "合情理的; 公道的; 适度的"
  },
  "trial order": {
    "word": "trial order",
    "translation": "试订单",
    "cloze": {
      "sentence": "To test the market response, we would like to place a small ______ order for 500 units.",
      "translation": "为测试市场反响，我们希望先试订500件。"
    },
    "form_confusables": [
      {
        "word": "trial order",
        "zh": "试订单"
      },
      {
        "word": "prior order",
        "zh": "在先的订单"
      },
      {
        "word": "trivial order",
        "zh": "琐碎微小的订单"
      },
      {
        "word": "trailing order",
        "zh": "追踪订单"
      }
    ],
    "semantic_confusables": [
      {
        "word": "trial order",
        "zh": "试订单 (测试性采购)"
      },
      {
        "word": "test purchase",
        "zh": "抽样测试采购"
      },
      {
        "word": "sample order",
        "zh": "样品订单"
      },
      {
        "word": "initial order",
        "zh": "首批订单"
      }
    ],
    "notes": "【搭配考点】place a trial order 下试订单以验证市场；【形近辨析】trial (试验审判)，prior (在先的)，trivial (琐碎无足轻重的)，trailing (拖尾追踪的)；【近义辨析】trial order 强调买卖双方首次建立合作时为测试货品销路或品质试水下单，sample order 仅为少量样品索验，test purchase 多为监管机构暗访试购，initial order 侧重第一批正式大货订单。",
    "level": "CET-4/BEC",
    "phonetic": "/trial order/",
    "zh": "试订单"
  },
  "inclusive": {
    "word": "inclusive",
    "translation": "包含的; 包括的",
    "cloze": {
      "sentence": "The quoted price is ______ of all packing and freight charges.",
      "translation": "所报价格已包含所有包装费与海运费在内。"
    },
    "form_confusables": [
      {
        "word": "inclusive",
        "zh": "包含在内的；兼收并蓄的"
      },
      {
        "word": "exclusive",
        "zh": "排他的；独家的"
      },
      {
        "word": "elusive",
        "zh": "难以捉摸的；易逃脱的"
      },
      {
        "word": "conclusive",
        "zh": "决定性的；确凿的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "inclusive",
        "zh": "包含在内的 (总括各项费用)"
      },
      {
        "word": "comprehensive",
        "zh": "综合全面的"
      },
      {
        "word": "all-embracing",
        "zh": "包罗万象的"
      },
      {
        "word": "overall",
        "zh": "总体的；总括的"
      }
    ],
    "notes": "【搭配考点】inclusive of sth 包含某物在内（如 inclusive of freight）；【形近辨析】exclusive (排他的/专属独家的)，elusive (难以捉摸逃脱的)，conclusive (终局确凿的)；【近义辨析】inclusive of 强调把某项单独收费项目计入总价之内，comprehensive 强调覆盖范围广泛全面，all-embracing 侧重无所不包的广度，overall 强调各要素合计汇总后的总览。",
    "level": "CET-4/BEC",
    "phonetic": "/in'klu:siv/",
    "zh": "包含的; 包括的"
  },
  "superior": {
    "word": "superior",
    "translation": "优良的; 卓越的; 上级的",
    "cloze": {
      "sentence": "Their new composite fiber is far ______ to traditional nylon in tensile strength.",
      "translation": "他们的新型复合纤维在拉伸强度上远优于传统尼龙。"
    },
    "form_confusables": [
      {
        "word": "superior",
        "zh": "优于...的；上级的"
      },
      {
        "word": "interior",
        "zh": "内部的；内地的"
      },
      {
        "word": "inferior",
        "zh": "次等的；劣于...的"
      },
      {
        "word": "ulterior",
        "zh": "隐秘的；别有用心的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "superior",
        "zh": "品质优越的 (远胜于对手)"
      },
      {
        "word": "exceptional",
        "zh": "出类拔萃的"
      },
      {
        "word": "premium",
        "zh": "优质高端的"
      },
      {
        "word": "dominant",
        "zh": "居支配地位的"
      }
    ],
    "notes": "【搭配考点】be superior to 比...更优越（拉丁比较级，后接 to 而非 than）；【形近辨析】superior (优于) 对应反义词 inferior (次于/较差)，interior (内部)，ulterior (隐秘别有用心的)；【近义辨析】superior to 强调两相对比下在质量或性能上占据显著优势，exceptional 侧重万里挑一的卓越，premium 侧重作为高端货品享受溢价，dominant 侧重力量统治市场。",
    "level": "CET-4/BEC",
    "phonetic": "/sju:'piriə; sju:pə-/",
    "zh": "优良的; 卓越的; 上级的"
  },
  "be in line with": {
    "word": "be in line with",
    "translation": "与...一致; 符合",
    "cloze": {
      "sentence": "Our prevailing export prices are strictly in ______ with current world market levels.",
      "translation": "我们目前的出口报价与当前国际市场行情水平完全吻合。"
    },
    "form_confusables": [
      {
        "word": "be in line with",
        "zh": "与...保持一致；符合"
      },
      {
        "word": "be in time with",
        "zh": "合着...的节拍"
      },
      {
        "word": "be in sight of",
        "zh": "在...看得见的范围内"
      },
      {
        "word": "be in debt with",
        "zh": "负债欠款于..."
      }
    ],
    "semantic_confusables": [
      {
        "word": "be in line with",
        "zh": "与...保持一致 (符合市场水平)"
      },
      {
        "word": "conform to",
        "zh": "遵从；顺应规程"
      },
      {
        "word": "accord with",
        "zh": "与...完全相符"
      },
      {
        "word": "coincide with",
        "zh": "与...巧合重合"
      }
    ],
    "notes": "【搭配考点】be in line with market levels 与市场行情保持一致；【形近辨析】in line with (一致)，in time with (节奏一致)，in sight of (在视野内)；【近义辨析】be in line with 商务中多指价格或政策与主流市场水平相符不脱节，conform to 侧重强制顺从法规条例，accord with 侧重观点事实互相吻合，coincide with 侧重时间或空间巧合。",
    "level": "CET-4/BEC",
    "phonetic": "/be in line with/",
    "zh": "与...一致; 符合"
  },
  "state": {
    "word": "state",
    "translation": "陈述; 声明; 阐明",
    "cloze": {
      "sentence": "Please ______ your lowest price and earliest shipping date in your formal reply.",
      "translation": "请在贵方的正式答复中明确陈述最低报价与最早装船期。"
    },
    "form_confusables": [
      {
        "word": "state",
        "zh": "陈述；声明；国家"
      },
      {
        "word": "stale",
        "zh": "不新鲜的；陈旧的"
      },
      {
        "word": "stake",
        "zh": "赌注；股份；桩"
      },
      {
        "word": "slate",
        "zh": "石板；板岩；预定"
      }
    ],
    "semantic_confusables": [
      {
        "word": "state",
        "zh": "陈述；阐明 (正式书面)"
      },
      {
        "word": "specify",
        "zh": "具体指明；列明规格"
      },
      {
        "word": "declare",
        "zh": "向海关申报；宣称"
      },
      {
        "word": "articulate",
        "zh": "清晰准确地表述"
      }
    ],
    "notes": "【搭配考点】state terms/reasons 正式陈述条款或缘由；【形近辨析】stale (不新鲜的面包/陈腐观念)，stake (赌注/股份)，slate (石板/预定安排)；【近义辨析】state 侧重在书面公文中严肃清晰地陈述事实或立场，specify 强调逐一列出具体的参数细节，declare 专用于官方海关报关申报或政府宣示，articulate 强调言语表达流畅精准。",
    "level": "CET-4/BEC",
    "phonetic": "/steit/",
    "zh": "陈述; 声明; 阐明"
  },
  "be prepared to": {
    "word": "be prepared to",
    "translation": "准备好; 愿意",
    "cloze": {
      "sentence": "If you double the order quantity, we are ______ to offer a further 3% concession.",
      "translation": "若贵方将订货量增加一倍，我们愿意进一步作出3%的价格让步。"
    },
    "form_confusables": [
      {
        "word": "be prepared to",
        "zh": "愿意做；准备好做"
      },
      {
        "word": "be compared to",
        "zh": "被比作..."
      },
      {
        "word": "be declared to",
        "zh": "被宣布为..."
      },
      {
        "word": "be repaired to",
        "zh": "被修复至..."
      }
    ],
    "semantic_confusables": [
      {
        "word": "be prepared to",
        "zh": "愿意/准备好去做 (审慎让步)"
      },
      {
        "word": "be willing to",
        "zh": "乐意去做"
      },
      {
        "word": "be ready to",
        "zh": "随时准备就绪"
      },
      {
        "word": "be disposed to",
        "zh": "倾向于；有意愿"
      }
    ],
    "notes": "【搭配考点】be prepared to do sth 商务谈判中表示“在满足特定条件下的意愿与让步”；【形近辨析】compare (比较)，declare (声明)，repair (修补)；【近义辨析】be prepared to 在谈判中带有经过审慎权衡后“愿意作出对等交换”的专业克制感，be willing to 偏向主观上的乐意，be ready to 侧重动作上万事俱备随时触发，be disposed to 偏向心理性格倾向。",
    "level": "CET-4/BEC",
    "phonetic": "/be prepared to/",
    "zh": "准备好; 愿意"
  },
  "shipment": {
    "word": "shipment",
    "translation": "装运; 运输; 货物",
    "cloze": {
      "sentence": "The seller guarantees that the first ______ of machine parts will be dispatched by month end.",
      "translation": "卖方保证第一批机器零部件将于月底前发运装船。"
    },
    "form_confusables": [
      {
        "word": "shipment",
        "zh": "装运；货物"
      },
      {
        "word": "shipmate",
        "zh": "同船水手；船友"
      },
      {
        "word": "parchment",
        "zh": "羊皮纸"
      },
      {
        "word": "shifting",
        "zh": "移位；转移"
      }
    ],
    "semantic_confusables": [
      {
        "word": "shipment",
        "zh": "装船出运；批次装运货物"
      },
      {
        "word": "consignment",
        "zh": "托运货物"
      },
      {
        "word": "cargo",
        "zh": "船运/空运大宗货物"
      },
      {
        "word": "freight",
        "zh": "收费货载；货运"
      }
    ],
    "notes": "【搭配考点】effect shipment (履行装运)，prompt shipment (即期装运)；【形近辨析】shipmate (同船船友)，parchment (羊皮纸)，shifting (移位漂移)；【近义辨析】shipment 强调把货物装上运输工具运出的行为及装运批次，consignment 侧重受托运送或代销的整笔货品，cargo 专指船只或飞机装载的大宗货物，freight 侧重收费运载的客运/散货。",
    "level": "CET-4/BEC",
    "phonetic": "/'ʃipmənt/",
    "zh": "装运; 运输; 货物"
  },
  "conclude business": {
    "word": "conclude business",
    "translation": "达成交易; 缔结业务",
    "cloze": {
      "sentence": "After prolonged negotiations, both parties managed to ______ business on mutually beneficial terms.",
      "translation": "经过长时间磋商，双方终于在互惠互利的条款上达成了交易。"
    },
    "form_confusables": [
      {
        "word": "conclude business",
        "zh": "达成交易；订立业务"
      },
      {
        "word": "exclude business",
        "zh": "排除业务"
      },
      {
        "word": "include business",
        "zh": "包含业务"
      },
      {
        "word": "preclude business",
        "zh": "妨碍/阻止业务"
      }
    ],
    "semantic_confusables": [
      {
        "word": "conclude business",
        "zh": "敲定交易 (正式订立商业契约)"
      },
      {
        "word": "close a deal",
        "zh": "搞定交易；成交"
      },
      {
        "word": "finalize an agreement",
        "zh": "敲定最终协议"
      },
      {
        "word": "transact business",
        "zh": "开展日常交易"
      }
    ],
    "notes": "【搭配考点】conclude business with sb 与某方敲定成交；【形近辨析】前缀词根 -clude (关闭/终结)：conclude (闭合/终结敲定)，exclude (排除)，preclude (预先阻止妨碍)；【近义辨析】conclude business 属高规格书面语强调磋商终结并正式立约，close a deal 是商业口语中“拿下大单”，finalize an agreement 强调走完协议最终条文签署流程，transact business 侧重具体的日常业务交易运作。",
    "level": "CET-4/BEC",
    "phonetic": "/conclude business/",
    "zh": "达成交易; 缔结业务"
  },
  "available": {
    "word": "available",
    "translation": "可获得的; 可利用的; 有空的",
    "cloze": {
      "sentence": "We regret to inform you that the requested model is not ______ for immediate delivery.",
      "translation": "我们遗憾地通知贵方，贵方所需的款式目前无现货可供即期交付。"
    },
    "form_confusables": [
      {
        "word": "available",
        "zh": "现成可用的；有空的"
      },
      {
        "word": "avoidable",
        "zh": "可避免的"
      },
      {
        "word": "advisable",
        "zh": "明智可取的"
      },
      {
        "word": "assaultable",
        "zh": "易受攻击的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "available",
        "zh": "有现货的 (可立即调配取用)"
      },
      {
        "word": "accessible",
        "zh": "易于获取或接近的"
      },
      {
        "word": "obtainable",
        "zh": "可设法买到或弄到的"
      },
      {
        "word": "in stock",
        "zh": "有库存现货的"
      }
    ],
    "notes": "【搭配考点】available for immediate delivery 现成可供即时交货；【形近辨析】avoidable (可避开的)，advisable (明智妥当的)，assaultable (可攻打的)；【近义辨析】available 在商业中专指货品有库存可随时调拨取用，accessible 侧重通道畅通易于接触，obtainable 强调通过申请或花费努力可以获得，in stock 明确限定为货架/仓库内有实体存货。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'veiləbl/",
    "zh": "可获得的; 可利用的; 有空的"
  },
  "substantial": {
    "word": "substantial",
    "translation": "大量的; 坚固的; 实质的",
    "cloze": {
      "sentence": "The sudden drop in ocean freight rates brought a ______ reduction in our import costs.",
      "translation": "海运运价的突降使我们的进口成本获得了大幅度的实质性削减。"
    },
    "form_confusables": [
      {
        "word": "substantial",
        "zh": "大量的；实质性的"
      },
      {
        "word": "circumstantial",
        "zh": "依情况而定的；详尽的"
      },
      {
        "word": "preferential",
        "zh": "优先优惠的"
      },
      {
        "word": "residential",
        "zh": "居住住宅的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "substantial",
        "zh": "体量庞大的 (实质丰厚可观)"
      },
      {
        "word": "considerable",
        "zh": "相当大的；引人注目的"
      },
      {
        "word": "significant",
        "zh": "显著意义重大的"
      },
      {
        "word": "massive",
        "zh": "极其巨大的"
      }
    ],
    "notes": "【搭配考点】substantial increase / order 大幅增长/大批订单；【形近辨析】substance (物质实体) -> substantial (实质丰厚的)，circumstance -> circumstantial (佐证的/间接证据的)，preferential (优惠特惠的)；【近义辨析】substantial 强调规模体量巨大且有真凭实据的坚实厚重感，considerable 强调数量多到不可忽视，significant 强调具有统计学或深远战略意义的显著性，massive 侧重体积质量无比沉重。",
    "level": "CET-4/BEC",
    "phonetic": "/səb'stænʃəl/",
    "zh": "大量的; 坚固的; 实质的"
  },
  "in receipt of": {
    "word": "in receipt of",
    "translation": "收到; 收到某物",
    "cloze": {
      "sentence": "We acknowledge that we are now in ______ of your remittance covering Invoice No. 620.",
      "translation": "我们确认已收到贵方支付第620号发票的汇款。"
    },
    "form_confusables": [
      {
        "word": "in receipt of",
        "zh": "收到；接到"
      },
      {
        "word": "in deceit of",
        "zh": "欺骗；虚伪"
      },
      {
        "word": "in respect of",
        "zh": "关于；就...而言"
      },
      {
        "word": "in conceit of",
        "zh": "自负自大"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in receipt of",
        "zh": "已收到 (标准公函确认收悉)"
      },
      {
        "word": "in possession of",
        "zh": "占有；持有财产"
      },
      {
        "word": "recipient of",
        "zh": "作为...的接受者"
      },
      {
        "word": "beneficiary of",
        "zh": "作为...的受益人"
      }
    ],
    "notes": "【搭配考点】be in receipt of your letter/remittance 商务正式语体“已收到贵方信函/汇款”；【形近辨析】receipt (收据/收到)，respect (尊敬/关于)，deceit (欺诈骗术)，conceit (自命不凡)；【近义辨析】in receipt of 是书面确认货物、票据或款项妥投到手的标准措辞，in possession of 侧重对某项财产拥有事实上的掌控权，recipient of 表明客观角色身份，beneficiary of 专指享受利益红利的信托受益人。",
    "level": "CET-4/BEC",
    "phonetic": "/in receipt of/",
    "zh": "收到; 收到某物"
  },
  "firm": {
    "word": "firm",
    "translation": "坚定的; 结实的; 实盘; 商行",
    "cloze": {
      "sentence": "This special price is a ______ offer open for your acceptance until Friday noon.",
      "translation": "此特惠价格为实盘（不可撤销要约），有效期至周五中午供贵方接受。"
    },
    "form_confusables": [
      {
        "word": "firm",
        "zh": "实盘；坚定的；商行"
      },
      {
        "word": "farm",
        "zh": "农场；养殖场"
      },
      {
        "word": "form",
        "zh": "形式；表格"
      },
      {
        "word": "affirm",
        "zh": "断言；确认"
      }
    ],
    "semantic_confusables": [
      {
        "word": "firm",
        "zh": "实盘的 (要约人受约束不可单方撤回)"
      },
      {
        "word": "binding",
        "zh": "具有法定约束力的"
      },
      {
        "word": "definitive",
        "zh": "确定终局的"
      },
      {
        "word": "irrevocable",
        "zh": "不可撤销的"
      }
    ],
    "notes": "【搭配考点】make a firm offer 报实盘（报价人在规定期限内受要约约束）；【形近辨析】firm (坚定/实盘)，affirm (断言确认)，farm (农场)，form (表格表单)；【近义辨析】firm offer 在国际贸易法中专指一旦买方在有效期内承诺即合同成立的约束性实盘，binding 强调具有法定执行力违约受罚，definitive 强调不可再讨价还价的终局性，irrevocable 强调出具后不得单方撤回。",
    "level": "CET-4/BEC",
    "phonetic": "/'fə:m/",
    "zh": "坚定的; 结实的; 实盘; 商行"
  },
  "comply with": {
    "word": "comply with",
    "translation": "顺从; 答应; 遵从",
    "cloze": {
      "sentence": "All exported electrical appliances must strictly ______ with the safety regulations of the European Union.",
      "translation": "所有出口家用电器必须严格符合欧盟的安全法规。"
    },
    "form_confusables": [
      {
        "word": "comply with",
        "zh": "遵从；顺从"
      },
      {
        "word": "apply with",
        "zh": "错误搭配（应为apply to）"
      },
      {
        "word": "supply with",
        "zh": "向...供给"
      },
      {
        "word": "reply with",
        "zh": "以...作答"
      }
    ],
    "semantic_confusables": [
      {
        "word": "comply with",
        "zh": "顺从遵从 (法律法规与行业标准)"
      },
      {
        "word": "conform to",
        "zh": "与规范准则一致"
      },
      {
        "word": "abide by",
        "zh": "信守契约裁决"
      },
      {
        "word": "adhere to",
        "zh": "坚持原则信仰"
      }
    ],
    "notes": "【搭配考点】comply with regulations/standards 遵守合规章程；【形近辨析】comply with (遵守)，apply to (应用于)，supply sb with (供应某人)，reply with (以...回复)；【近义辨析】comply with 专指在外部监管或法律法规强制下履行合规，conform to 侧重在形态或行为上与既定规范高度一致，abide by 强调恪守契约裁决即使不利也接受，adhere to 侧重坚定不移地坚持原则。",
    "level": "CET-4/BEC",
    "phonetic": "/comply with/",
    "zh": "顺从; 答应; 遵从"
  },
  "await": {
    "word": "await",
    "translation": "等候; 等待; 期待",
    "cloze": {
      "sentence": "We look forward to hearing from you and eagerly ______ your early confirmation.",
      "translation": "我们期待收到贵方的消息，并热切盼望着贵方的早日确认。"
    },
    "form_confusables": [
      {
        "word": "await",
        "zh": "等待；期盼"
      },
      {
        "word": "admit",
        "zh": "准许进入；承认"
      },
      {
        "word": "avoid",
        "zh": "避开；避免"
      },
      {
        "word": "awake",
        "zh": "唤醒；警惕的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "await",
        "zh": "等候；期盼 (正式及物动词)"
      },
      {
        "word": "expect",
        "zh": "预期；指望"
      },
      {
        "word": "anticipate",
        "zh": "预先料到并做好准备"
      },
      {
        "word": "look forward to",
        "zh": "热切期待"
      }
    ],
    "notes": "【搭配考点】await your early reply 及物动词直接接宾语（等同于 wait for）；【形近辨析】await (及物动词：等候)，awake (形容词/动词：清醒)，avoid (避免)，admit (准入承认)；【近义辨析】await 属于高雅及物动词（直接接宾语且主语常为商业主体等待单证），expect 侧重主观上理所当然的期许或按常理发生，anticipate 侧重预知未来事件并提前防备，look forward to 侧重充满喜悦渴望的心情。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'weit/",
    "zh": "等候; 等待; 期待"
  },
  "following": {
    "word": "following",
    "translation": "下列的; 接着的",
    "cloze": {
      "sentence": "The ______ items have already been packed and cleared through customs.",
      "translation": "下列各项物品均已打包包装完毕并完成海关清关。"
    },
    "form_confusables": [
      {
        "word": "following",
        "zh": "下列的；接下来的"
      },
      {
        "word": "fellow",
        "zh": "同仁；伙伴"
      },
      {
        "word": "follower",
        "zh": "追随者；侍从"
      },
      {
        "word": "flowing",
        "zh": "流动的；平稳流畅的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "following",
        "zh": "下列的 (引出下文清单)"
      },
      {
        "word": "subsequent",
        "zh": "随后的 (时间上在后的)"
      },
      {
        "word": "succeeding",
        "zh": "接续而来的 (王位/权位承袭)"
      },
      {
        "word": "underneath",
        "zh": "在...下方的"
      }
    ],
    "notes": "【搭配考点】the following items/conditions 下列项目/条款；【形近辨析】following (下列接着的)，fellow (同伴同事)，flowing (流动流畅的)；【近义辨析】the following 专用于文书引出接下来要逐项陈列的清单或事实，subsequent 强调在某一特定时间节点之后发生的事件，succeeding 侧重王位或职权前仆后继的承袭，underneath 专指空间物理上的正下方。",
    "level": "CET-4/BEC",
    "phonetic": "/'fɔləuiŋ/",
    "zh": "下列的; 接着的"
  },
  "anxious": {
    "word": "anxious",
    "translation": "焦虑的; 急切的; 渴望的",
    "cloze": {
      "sentence": "The buyer is extremely ______ to expand their market presence in the region.",
      "translation": "买方极其渴望扩大其在该地区的市场份额。"
    },
    "form_confusables": [
      {
        "word": "anxious",
        "zh": "急切的；忧虑焦急的"
      },
      {
        "word": "noxious",
        "zh": "有毒有害的"
      },
      {
        "word": "arduous",
        "zh": "艰巨费力的"
      },
      {
        "word": "obnoxious",
        "zh": "令人极度讨厌的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "anxious",
        "zh": "急切渴望的 (含忧惧错失良机之情)"
      },
      {
        "word": "eager",
        "zh": "热切渴望的 (昂扬积极)"
      },
      {
        "word": "keen",
        "zh": "热心的；敏锐的"
      },
      {
        "word": "worried",
        "zh": "发愁担心的"
      }
    ],
    "notes": "【搭配考点】be anxious to do sth 急切想做某事（表积极渴望）或 be anxious about（表焦虑）；【形近辨析】noxious (有害有毒的)，obnoxious (惹人讨厌的)，arduous (艰难劳累的)；【近义辨析】be anxious to do 结合了迫不及待的渴望与深怕失掉良机的隐隐担忧感，eager to 纯粹表达昂扬向上的热切劲头，keen on 强调个人兴趣浓厚，worried 纯粹表达焦虑发愁。",
    "level": "CET-4/BEC",
    "phonetic": "/'ænkʃəs/",
    "zh": "焦虑的; 急切的; 渴望的"
  },
  "out of line with": {
    "word": "out of line with",
    "translation": "与...不一致; 脱节",
    "cloze": {
      "sentence": "We cannot accept your quotation because your price is completely ______ of line with current market trends.",
      "translation": "我们无法接受贵方报价，因为该价格完全背离了当前的市场行情。"
    },
    "form_confusables": [
      {
        "word": "out of line with",
        "zh": "与...不一致；脱节"
      },
      {
        "word": "out of date with",
        "zh": "与...过时脱节"
      },
      {
        "word": "out of tune with",
        "zh": "与...不协调合调"
      },
      {
        "word": "out of step with",
        "zh": "与...步调不一致"
      }
    ],
    "semantic_confusables": [
      {
        "word": "out of line with",
        "zh": "与...脱节不符 (超出公差范围)"
      },
      {
        "word": "inconsistent with",
        "zh": "与...不一致；矛盾"
      },
      {
        "word": "at odds with",
        "zh": "与...意见相左冲突"
      },
      {
        "word": "incompatible with",
        "zh": "与...不兼容互斥"
      }
    ],
    "notes": "【搭配考点】be out of line with market price 与市场行情脱节不相称；【形近辨析】out of tune with (音调不合)，out of step with (步伐不一)，out of date (过时陈旧)；【近义辨析】out of line with 在商贸中专门指涉价格、待遇或言行超出公认的合理浮动公差范围，inconsistent with 侧重在逻辑或证据上自相矛盾，at odds with 强调存在敌对意见冲突，incompatible with 强调物理或化学上水火不容。",
    "level": "CET-4/BEC",
    "phonetic": "/out of line with/",
    "zh": "与...不一致; 脱节"
  },
  "pack": {
    "word": "pack",
    "translation": "包装; 打包; 装箱",
    "cloze": {
      "sentence": "Please ensure that the workers ______ the fragile porcelain in double-corrugated cartons with shockproof padding.",
      "translation": "请确保工人们用双层瓦楞纸箱加防震衬垫来包装易碎瓷器。"
    },
    "form_confusables": [
      {
        "word": "pack",
        "zh": "包装打包；成群"
      },
      {
        "word": "peck",
        "zh": "啄食；轻吻"
      },
      {
        "word": "park",
        "zh": "停车；园区"
      },
      {
        "word": "peak",
        "zh": "高峰；顶点"
      }
    ],
    "semantic_confusables": [
      {
        "word": "pack",
        "zh": "装箱打包 (放入容器规整打包)"
      },
      {
        "word": "wrap",
        "zh": "缠绕包裹 (用纸张薄膜包覆)"
      },
      {
        "word": "crate",
        "zh": "装入木板箱加固"
      },
      {
        "word": "bundle",
        "zh": "捆扎成束"
      }
    ],
    "notes": "【搭配考点】pack goods in cartons/cases 将货物装箱包装；【形近辨析】peck (鸟喙啄)，park (停车公园)，peak (山峰顶点)；【近义辨析】pack 侧重将商品整齐装入箱、袋等容器以便长途运输，wrap 侧重在物品表面包覆塑料薄膜或彩纸，crate 专指打造厚实木板箱进行重型加固装运，bundle 强调将零散线缆或木料捆扎成束。",
    "level": "CET-4/BEC",
    "phonetic": "/pæk/",
    "zh": "包装; 打包; 装箱"
  },
  "ruling": {
    "word": "ruling",
    "translation": "现行的; 普遍的; 裁决",
    "cloze": {
      "sentence": "Due to the sharp rise in bunker surcharges, our ______ price has been adjusted upwards by 3%.",
      "translation": "由于燃油附加费大幅上涨，我们当前执行的现行价格已上调3%。"
    },
    "form_confusables": [
      {
        "word": "ruling",
        "zh": "现行的；统治的；裁决"
      },
      {
        "word": "rolling",
        "zh": "滚动的；起伏的"
      },
      {
        "word": "railing",
        "zh": "栏杆；扶手"
      },
      {
        "word": "rustic",
        "zh": "乡村质朴的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "ruling",
        "zh": "现行执行的 (当前商业实盘市价)"
      },
      {
        "word": "prevailing",
        "zh": "普遍盛行的；通行的"
      },
      {
        "word": "current",
        "zh": "当前的；流通的"
      },
      {
        "word": "reigning",
        "zh": "在位的；称霸称王的"
      }
    ],
    "notes": "【搭配考点】ruling price / market 现行价格/当前行情（等同于 prevailing price）；【形近辨析】rolling (滚动的/平缓起伏的)，railing (铁艺围栏扶手)，rustic (质朴田园的)；【近义辨析】ruling price 是商业贸易专有词汇指此刻实际生效执行的牌价或裁定市价，prevailing 侧重在整个市场上普遍被大家默认采纳的常态，current 泛指当前阶段的时效性，reigning 专指卫冕冠军或现任君主。",
    "level": "CET-4/BEC",
    "phonetic": "/span>ing</",
    "zh": "现行的; 普遍的; 裁决"
  },
  "minimum": {
    "word": "minimum",
    "translation": "最低限度; 最小量",
    "cloze": {
      "sentence": "The bank requires a ______ balance of $10,000 to maintain a corporate foreign exchange account.",
      "translation": "银行要求开立企业外汇账户须保持最低1万美元的结存余额。"
    },
    "form_confusables": [
      {
        "word": "minimum",
        "zh": "最低限度的；最低额"
      },
      {
        "word": "miniature",
        "zh": "微缩模型；袖珍的"
      },
      {
        "word": "minimize",
        "zh": "使减到最小；轻视"
      },
      {
        "word": "premium",
        "zh": "保险费；溢价高档的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "minimum",
        "zh": "最低限额 (法定/契约绝对下限)"
      },
      {
        "word": "minimal",
        "zh": "极微小的；微不足道的"
      },
      {
        "word": "lowest",
        "zh": "最下层的；最低的"
      },
      {
        "word": "nominal",
        "zh": "名义上的；微不足道的"
      }
    ],
    "notes": "【搭配考点】minimum requirement / balance 最低要求/最低额度；【形近辨析】miniature (微型缩影)，minimize (动词：最小化贬低)，premium (加价/高档优质)；【近义辨析】minimum 强调法定或规则设定的绝对下限基准线，minimal 侧重事物程度轻微到几乎可以忽略不计，lowest 强调在纵向序列排在最底端，nominal 强调挂名存在其实微乎其微。",
    "level": "CET-4/BEC",
    "phonetic": "/'miniməm/",
    "zh": "最低限度; 最小量"
  },
  "validity": {
    "word": "validity",
    "translation": "有效性; 合法性; 有效期",
    "cloze": {
      "sentence": "The ______ of this quotation will remain in force for seven banking days from today.",
      "translation": "本报价的有效期自即日起在七个银行工作日内保持有效。"
    },
    "form_confusables": [
      {
        "word": "validity",
        "zh": "有效性；合法性；有效期"
      },
      {
        "word": "vanity",
        "zh": "虚荣心；浮华"
      },
      {
        "word": "vitality",
        "zh": "生命力；活力"
      },
      {
        "word": "avidity",
        "zh": "热望；贪婪"
      }
    ],
    "semantic_confusables": [
      {
        "word": "validity",
        "zh": "有效期限 (契约合法存续状态)"
      },
      {
        "word": "expiry",
        "zh": "期满失效 (效力终止节点)"
      },
      {
        "word": "duration",
        "zh": "存续持续期间"
      },
      {
        "word": "efficacy",
        "zh": "药效；功效"
      }
    ],
    "notes": "【搭配考点】validity of an offer / L/C 报盘或信用证的有效期限；【形近辨析】vanity (虚荣心)，vitality (勃勃生机)，avidity (贪婪热切)；【近义辨析】validity 指法律、要约或凭证在法律上合法有效的状态及有效期限，duration 强调从始至终持续经历的时间长短，expiry 专指大限已至效力终止的那个节点，efficacy 专指药品或策略的实际生效效果。",
    "level": "CET-4/BEC",
    "phonetic": "/və'lidəti/",
    "zh": "有效性; 合法性; 有效期"
  },
  "deal": {
    "word": "deal",
    "translation": "交易; 买卖; 处理",
    "cloze": {
      "sentence": "If you can match our target price, we are confident of closing the ______ today.",
      "translation": "若贵方能满足我方目标价，我们有信心今天就敲定这笔交易。"
    },
    "form_confusables": [
      {
        "word": "deal",
        "zh": "交易；协议；处理"
      },
      {
        "word": "deaf",
        "zh": "耳聋的；不愿听的"
      },
      {
        "word": "dell",
        "zh": "小山谷"
      },
      {
        "word": "dial",
        "zh": "表盘；拨号"
      }
    ],
    "semantic_confusables": [
      {
        "word": "deal",
        "zh": "商业买卖交易 (口头/书面拍板成交)"
      },
      {
        "word": "transaction",
        "zh": "业务往来；资金交易划转"
      },
      {
        "word": "bargain",
        "zh": "廉价交易；特价货品"
      },
      {
        "word": "contract",
        "zh": "正规法律合同"
      }
    ],
    "notes": "【搭配考点】close / clinch a deal 拍板成交敲定大单；【形近辨析】deaf (耳聋失聪)，dial (表盘/拨号)，dell (小树谷)；【近义辨析】deal 广泛用于商业实战指经协商达成的买卖协议，transaction 侧重在系统记录上发生的资金与货品划转账务，bargain 侧重买方占到便宜的物美价廉好交易，contract 专指具有严密法律条文的正式纸质契约。",
    "level": "CET-4/BEC",
    "phonetic": "/di:l/",
    "zh": "交易; 买卖; 处理"
  },
  "reduction": {
    "word": "reduction",
    "translation": "减少; 缩小; 降价",
    "cloze": {
      "sentence": "We can only place an order if you grant us a 5% ______ on the invoice price.",
      "translation": "只有在贵方给予发票价5%的折让降价时，我们方可下达订单。"
    },
    "form_confusables": [
      {
        "word": "reduction",
        "zh": "减少；削减；降价"
      },
      {
        "word": "deduction",
        "zh": "扣除；逻辑演绎推理"
      },
      {
        "word": "seduction",
        "zh": "诱惑；引诱"
      },
      {
        "word": "production",
        "zh": "生产；产出"
      }
    ],
    "semantic_confusables": [
      {
        "word": "reduction",
        "zh": "降价削减 (基准数值拉低)"
      },
      {
        "word": "cut",
        "zh": "大幅削减"
      },
      {
        "word": "markdown",
        "zh": "商品打折降价标签"
      },
      {
        "word": "concession",
        "zh": "谈判价格让步"
      }
    ],
    "notes": "【搭配考点】price reduction 削价降价；【形近辨析】词根-duct-（引导）：reduction (推回削减)，deduction (向下扣除/演绎推理)，seduction (引向歧途诱惑)，production (向前引出生产)；【近义辨析】reduction 侧重在基准数值上拉低数额或比例，deduction 侧重从总收入中剔除税金或成本等明细，cut 口语简洁有力指大幅裁撤，markdown 专指零售店直接在货签上划改打折。",
    "level": "CET-4/BEC",
    "phonetic": "/ri'dʌkʃən/",
    "zh": "减少; 缩小; 降价"
  },
  "proforma invoice": {
    "word": "proforma invoice",
    "translation": "形式发票; 估价发票",
    "cloze": {
      "sentence": "Please airmail us a ______ invoice so that our import bank can apply for the foreign exchange allocation.",
      "translation": "请向我们航空寄送一份形式发票，以便我们的进口银行申请外汇配额。"
    },
    "form_confusables": [
      {
        "word": "proforma invoice",
        "zh": "形式发票；估价发票"
      },
      {
        "word": "preliminary advice",
        "zh": "初步预告单"
      },
      {
        "word": "certified invoice",
        "zh": "公证/证实发票"
      },
      {
        "word": "commercial invoice",
        "zh": "正规商业发票"
      }
    ],
    "semantic_confusables": [
      {
        "word": "proforma invoice",
        "zh": "形式发票 (预开给海关/银行审核用)"
      },
      {
        "word": "quotation",
        "zh": "书面报价单"
      },
      {
        "word": "commercial invoice",
        "zh": "正式商业发票 (索款凭单)"
      },
      {
        "word": "cost estimate",
        "zh": "成本估算书"
      }
    ],
    "notes": "【搭配考点】issue/request a proforma invoice 开具/索取形式发票；【形近辨析】proforma invoice (估价预开形式发票)，commercial invoice (正式商业清关发票)，certified invoice (签证发票)；【近义辨析】proforma invoice (P/I) 并非结算发票而是供进口商申请进口许可证或开立信用证的预开参考发票，commercial invoice 是货物装运后用于结账索款和海关计税的正式发票，quotation 仅为卖方单向报价函件。",
    "level": "CET-4/BEC",
    "phonetic": "/proforma invoice/",
    "zh": "形式发票; 估价发票"
  },
  "authority": {
    "word": "authority",
    "translation": "权力; 当权; 官方权威机构",
    "cloze": {
      "sentence": "The customs ______ refused to release the cargo until the import duties were settled.",
      "translation": "在关税结清之前，海关当局拒绝放行货物。"
    },
    "form_confusables": [
      {
        "word": "authority",
        "zh": "权威当局；法定权力"
      },
      {
        "word": "authenticity",
        "zh": "真实性；可靠性"
      },
      {
        "word": "austerity",
        "zh": "紧缩财政；严峻"
      },
      {
        "word": "audacity",
        "zh": "大胆妄为；鲁莽"
      }
    ],
    "semantic_confusables": [
      {
        "word": "authority",
        "zh": "权威当局 (行政法定管理机构)"
      },
      {
        "word": "jurisdiction",
        "zh": "司法管辖权；管辖区域"
      },
      {
        "word": "supremacy",
        "zh": "最高权力；霸权"
      },
      {
        "word": "empowerment",
        "zh": "授权；赋能"
      }
    ],
    "notes": "【搭配考点】customs/port authority 海关当局/港务局；【形近辨析】authenticity (真实纯正)，austerity (紧缩财政/严苛)，audacity (胆大妄为)；【近义辨析】authority 专指法律或体制赋予的行政管理机构或行使权力的机构，jurisdiction 强调管辖范围边界，supremacy 侧重超越一切的至高霸权，empowerment 强调赋能授权。",
    "level": "CET-4/BEC",
    "phonetic": "/ɔ:'θɔrəti/",
    "zh": "权力; 当权; 官方权威机构"
  },
  "commercial invoice": {
    "word": "commercial invoice",
    "translation": "商业发票",
    "cloze": {
      "sentence": "The bank requires one original and two copies of the signed ______ invoice for customs clearance and negotiation.",
      "translation": "银行要求提供经签署的正规商业发票正本一份及副本两份，用于报关清关和议付。"
    },
    "form_confusables": [
      {
        "word": "commercial invoice",
        "zh": "商业发票"
      },
      {
        "word": "customs declaration",
        "zh": "报关单"
      },
      {
        "word": "consular invoice",
        "zh": "领事发票"
      },
      {
        "word": "certified invoice",
        "zh": "公证/证实发票"
      }
    ],
    "semantic_confusables": [
      {
        "word": "commercial invoice",
        "zh": "正式商业发票 (索款与结汇核心凭单)"
      },
      {
        "word": "proforma invoice",
        "zh": "形式发票 (预开估价单)"
      },
      {
        "word": "billing statement",
        "zh": "账单明细；对账单"
      },
      {
        "word": "receipt",
        "zh": "付款收据凭条"
      }
    ],
    "notes": "【搭配考点】sign/present the commercial invoice 签署/提交商业发票（结汇核心单据）；【形近辨析】consular invoice (领事发票，由领事馆签发)，certified invoice (海关证实发票)；【近义辨析】commercial invoice 是国际货运索款的核心单据，详细列明货物单价、总价、包装与品名，proforma invoice 仅用于前期进口审批与申办信用证，billing statement 多为周期性对账单，receipt 仅是付款后的收条。",
    "level": "CET-4/BEC",
    "phonetic": "/commercial invoice/",
    "zh": "商业发票"
  },
  "for your information": {
    "word": "for your information",
    "translation": "供参考; 供你参考",
    "cloze": {
      "sentence": "We enclose the latest sailing schedule for your ______, though booking has not yet opened.",
      "translation": "我们附上最新的船期表供贵方知悉，不过订舱尚未正式开启。"
    },
    "form_confusables": [
      {
        "word": "for your information",
        "zh": "供参考知会 (FYI)"
      },
      {
        "word": "for your consideration",
        "zh": "供贵方考量审议"
      },
      {
        "word": "for your appreciation",
        "zh": "为感谢起见"
      },
      {
        "word": "for your confirmation",
        "zh": "供贵方确认核实"
      }
    ],
    "semantic_confusables": [
      {
        "word": "for your information",
        "zh": "供贵方知会参考 (纯告知无需回复)"
      },
      {
        "word": "for your guidance",
        "zh": "供贵方操作指引遵照"
      },
      {
        "word": "for your records",
        "zh": "供贵方存档备查"
      },
      {
        "word": "for your perusal",
        "zh": "恭请贵方细阅研读"
      }
    ],
    "notes": "【搭配考点】for your information (FYI) 商业公函常用语，意为提供信息已知会对方且不要求直接回复；【形近辨析】consideration (考量/考虑)，appreciation (感激/升值)，confirmation (确认)；【近义辨析】for your information 纯粹告知背景事实不施加行动义务，for your guidance 强调供对方在具体业务操作中作为遵循标杆，for your records 明确要求归档入卷备查，for your perusal 带有请上级或重要客户过目的敬意。",
    "level": "CET-4/BEC",
    "phonetic": "/for your information/",
    "zh": "供参考; 供你参考"
  },
  "in triplicate": {
    "word": "in triplicate",
    "translation": "一式三份地",
    "cloze": {
      "sentence": "All shipping documents, including the certificate of origin, must be prepared in ______.",
      "translation": "包括原产地证在内的所有装船单据，均必须一式三份缮制备妥。"
    },
    "form_confusables": [
      {
        "word": "in triplicate",
        "zh": "一式三份地"
      },
      {
        "word": "in duplicate",
        "zh": "一式两份地"
      },
      {
        "word": "in replicate",
        "zh": "重复复制地"
      },
      {
        "word": "in quadruplicate",
        "zh": "一式四份地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in triplicate",
        "zh": "一式三份 (三套等效法定文本)"
      },
      {
        "word": "in three copies",
        "zh": "复印三份"
      },
      {
        "word": "threefold",
        "zh": "三倍的；三重维度的"
      },
      {
        "word": "triad",
        "zh": "三位一体；三人组"
      }
    ],
    "notes": "【搭配考点】prepare / issue documents in triplicate 一式三份出具单据；【形近辨析】in duplicate (一式两份)，in triplicate (一式三份)，in quadruplicate (一式四份)；【近义辨析】in triplicate 是涉外法律与公文规范术语指拥有同等法定效力的三套完备文本（通常一正二副），in three copies 可能仅是主件附带两张复印件，threefold 侧重倍数增长（增加到三倍）。",
    "level": "CET-4/BEC",
    "phonetic": "/in triplicate/",
    "zh": "一式三份地"
  },
  "take action": {
    "word": "take action",
    "translation": "采取行动; 采取措施",
    "cloze": {
      "sentence": "The shipping line promised to take immediate ______ to resolve the container congestion problem.",
      "translation": "轮船公司承诺立即采取行动解决集装箱压港拥堵问题。"
    },
    "form_confusables": [
      {
        "word": "take action",
        "zh": "采取行动；采取措施"
      },
      {
        "word": "take notice",
        "zh": "引起注意；理会"
      },
      {
        "word": "take effect",
        "zh": "生效见效"
      },
      {
        "word": "take charge",
        "zh": "接管负责"
      }
    ],
    "semantic_confusables": [
      {
        "word": "take action",
        "zh": "采取行动 (付诸执行对策)"
      },
      {
        "word": "adopt measures",
        "zh": "采纳施行措施"
      },
      {
        "word": "implement steps",
        "zh": "贯彻落实具体步骤"
      },
      {
        "word": "intervene",
        "zh": "强势介入干预"
      }
    ],
    "notes": "【搭配考点】take immediate action to do sth 立即采取措施解决问题；【形近辨析】take effect (药物或法令生效)，take charge of (接管负责)，take notice of (留意注意到)；【近义辨析】take action 是最强有力的执行动词强调打破停滞付诸实际动作，adopt measures 侧重从若干方案中审议通过特定规范措施，implement steps 侧重有章法地落地具体实施环节，intervene 强调作为第三方强行介入调停。",
    "level": "CET-4/BEC",
    "phonetic": "/take action/",
    "zh": "采取行动; 采取措施"
  },
  "import license": {
    "word": "import license",
    "translation": "进口许可证",
    "cloze": {
      "sentence": "The shipment cannot clear customs until the buyer secures a valid ______ license from the ministry.",
      "translation": "在买方向有关部委取得有效的进口许可证前，该批货物无法清关。"
    },
    "form_confusables": [
      {
        "word": "import license",
        "zh": "进口许可证"
      },
      {
        "word": "export allowance",
        "zh": "出口补贴津贴"
      },
      {
        "word": "import duty",
        "zh": "进口关税"
      },
      {
        "word": "business patent",
        "zh": "商业专利"
      }
    ],
    "semantic_confusables": [
      {
        "word": "import license",
        "zh": "进口许可证 (官方特许批文)"
      },
      {
        "word": "import permit",
        "zh": "进口准运证 (检疫/通关准许)"
      },
      {
        "word": "customs clearance voucher",
        "zh": "结关放行凭单"
      },
      {
        "word": "letter of authority",
        "zh": "正式授权书"
      }
    ],
    "notes": "【搭配考点】grant/obtain an import license 颁发/获批进口许可证；【形近辨析】import duty (进口关税)，import quota (进口配额)，export allowance (出口津贴)；【近义辨析】import license 专指政府外贸管理机构正式颁布的准许进口特定品类及配额的特许批文，import permit 侧重口岸针对某批动植物检疫签发的技术性放行许可证，customs clearance voucher 仅是口岸结关凭条。",
    "level": "CET-4/BEC",
    "phonetic": "/import license/",
    "zh": "进口许可证"
  },
  "counter offer": {
    "word": "counter offer",
    "translation": "还盘; 还价; 反要约",
    "cloze": {
      "sentence": "Our buyer refused the original quotation and submitted a ______ offer with a 4% discount.",
      "translation": "我们的买方拒绝了最初的报价，并提出了一份要求给予4%折扣的反要约（还盘）。"
    },
    "form_confusables": [
      {
        "word": "counter offer",
        "zh": "还盘；反要约"
      },
      {
        "word": "counter measure",
        "zh": "反制措施"
      },
      {
        "word": "encounter offer",
        "zh": "遭遇要约 (非规范用法)"
      },
      {
        "word": "counterfeit offer",
        "zh": "伪造虚假要约"
      }
    ],
    "semantic_confusables": [
      {
        "word": "counter offer",
        "zh": "反要约/还盘 (使原要约失效的新报价)"
      },
      {
        "word": "bargaining proposal",
        "zh": "讨价还价方案"
      },
      {
        "word": "bid",
        "zh": "买方出价；竞标报价"
      },
      {
        "word": "compromise",
        "zh": "折中妥协方案"
      }
    ],
    "notes": "【搭配考点】make/submit a counter offer 提出还盘（原要约随之法律失效）；【形近辨析】countermeasure (对抗反制措施)，counterfeit (伪造仿冒品)；【近义辨析】counter offer 是合同法核心术语，受要约人对原要约内容作实质性变更即构成新还盘使原要约彻底失效，bargaining proposal 泛指谈判协商提议，bid 专指拍卖或竞标中买方的单向出价。",
    "level": "CET-4/BEC",
    "phonetic": "/counter offer/",
    "zh": "还盘; 还价; 反要约"
  },
  "installment": {
    "word": "installment",
    "translation": "分期付款; 分期付款的每一期",
    "cloze": {
      "sentence": "The contract allows the buyer to pay for the heavy machinery in four equal ______.",
      "translation": "合同允许买方分四期等额分期付款购买该重型机械设备。"
    },
    "form_confusables": [
      {
        "word": "installment",
        "zh": "分期付款；每期付款额"
      },
      {
        "word": "installation",
        "zh": "设备安装；设施装置"
      },
      {
        "word": "instilment",
        "zh": "慢慢灌输；滴注"
      },
      {
        "word": "indictment",
        "zh": "控告；起诉书"
      }
    ],
    "semantic_confusables": [
      {
        "word": "installment",
        "zh": "分期付款的每一期"
      },
      {
        "word": "annuity",
        "zh": "年金；按年给付额"
      },
      {
        "word": "tranche",
        "zh": "分批划拨的款项 (金融大额)"
      },
      {
        "word": "amortisation",
        "zh": "分期摊销本息"
      }
    ],
    "notes": "【搭配考点】pay in monthly/quarterly installments 按月/季度分期付款；【形近辨析】installation (设备安装/基地设施)，instilment (思想灌输)，indictment (大陪审团起诉)；【近义辨析】installment 侧重将一笔总债务切割为若干定期还款期数（每期金额），tranche 专指国际金融或银团贷款中按项目节点划拨的一期大额款项，annuity 专指退休年金按年给付，amortisation 侧重无形资产或贷款本金的会计摊销。",
    "level": "CET-4/BEC",
    "phonetic": "/installment/",
    "zh": "分期付款; 分期付款的每一期"
  },
  "payment by installments": {
    "word": "payment by installments",
    "translation": "分期付款",
    "cloze": {
      "sentence": "To ease cash flow pressure, the machinery manufacturer agreed to accept ______ by installments.",
      "translation": "为缓解现金流压力，机械设备制造商同意接受分期付款。"
    },
    "form_confusables": [
      {
        "word": "payment by installments",
        "zh": "分期付款"
      },
      {
        "word": "payment on delivery",
        "zh": "货到付款 (COD)"
      },
      {
        "word": "payment in advance",
        "zh": "预先付款"
      },
      {
        "word": "payment under protest",
        "zh": "保留异议付款"
      }
    ],
    "semantic_confusables": [
      {
        "word": "payment by installments",
        "zh": "分期付款方式 (按约定时间表分批)"
      },
      {
        "word": "deferred payment",
        "zh": "延期付款 (整体推迟结算)"
      },
      {
        "word": "hire-purchase",
        "zh": "分期付款租购"
      },
      {
        "word": "credit sale",
        "zh": "赊销交易"
      }
    ],
    "notes": "【搭配考点】agree to payment by installments 同意分期付款；【形近辨析】payment on delivery (COD货到付款)，payment in advance (前T/T定金预付款)；【近义辨析】payment by installments 明确指约定按固定时间表分多期付清本息，deferred payment 强调将付款时间整体推迟至未来某日（如远期信用证），hire purchase 强调付清全部款项前所有权仍归卖方所有，credit sale 侧重商业信用赊账。",
    "level": "CET-4/BEC",
    "phonetic": "/payment by installments/",
    "zh": "分期付款"
  },
  "provided": {
    "word": "provided",
    "translation": "只要; 倘若; 以...为条件",
    "cloze": {
      "sentence": "We can grant you an extra 2% commission ______ that your total annual turnover exceeds $1 million.",
      "translation": "只要贵方年营业总额突破100万美元，我们就可以额外给予贵方2%的佣金。"
    },
    "form_confusables": [
      {
        "word": "provided",
        "zh": "只要；以...为条件"
      },
      {
        "word": "provoked",
        "zh": "被激怒挑衅的"
      },
      {
        "word": "prolonged",
        "zh": "延长的；拖延的"
      },
      {
        "word": "promoted",
        "zh": "升职晋升的；促销的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "provided",
        "zh": "只要 (法律商务合同严格条件引导词)"
      },
      {
        "word": "on condition that",
        "zh": "在...条件限制下"
      },
      {
        "word": "assuming",
        "zh": "假定...的推演"
      },
      {
        "word": "unless",
        "zh": "除非...否则不"
      }
    ],
    "notes": "【搭配考点】provided that... 引导条件状语从句，法律与商务合同标准条件引导词（= only if）；【形近辨析】provoke (激怒)，prolong (拉长推迟)，promote (提拔促销)；【近义辨析】provided that 属于庄重法律及商业条款专用连词强调“以达成某项明确先决条件为限”，on condition that 语气更严肃突出制约性，assuming 侧重逻辑推演假设，unless 表示否定条件（除非...否则不）。",
    "level": "CET-4/BEC",
    "phonetic": "/symbols/",
    "zh": "只要; 倘若; 以...为条件"
  },
  "terms and conditions": {
    "word": "terms and conditions",
    "translation": "条款和条件; 交易条款",
    "cloze": {
      "sentence": "Before signing the sales agreement, both sides must carefully review all ______ and conditions.",
      "translation": "在签署销售协议前，双方必须认真审查所有条款及细则。"
    },
    "form_confusables": [
      {
        "word": "terms and conditions",
        "zh": "条款及细则"
      },
      {
        "word": "teams and champions",
        "zh": "团队与冠军"
      },
      {
        "word": "trends and connections",
        "zh": "趋势与关联"
      },
      {
        "word": "trusts and conventions",
        "zh": "信托与公约"
      }
    ],
    "semantic_confusables": [
      {
        "word": "terms and conditions",
        "zh": "条款及细则 (合同总揽性交易条件)"
      },
      {
        "word": "contractual clauses",
        "zh": "特定合同条款"
      },
      {
        "word": "provisions",
        "zh": "法律法规规定条文"
      },
      {
        "word": "articles",
        "zh": "章程条文"
      }
    ],
    "notes": "【搭配考点】terms and conditions of sale / contract 买卖交易条款与细则（涵盖价格、装运、检验、不可抗力）；【形近辨析】trust (信托/信任)，convention (国际公约/惯例)；【近义辨析】terms and conditions 是商业合同统揽全局的复合表达（terms 偏重价格交期等核心要素，conditions 偏重履行前提与免责规则），clauses 强调单独的段落条款，provisions 侧重法律条文规定，articles 侧重成文章程条目。",
    "level": "CET-4/BEC",
    "phonetic": "/terms and conditions/",
    "zh": "条款和条件; 交易条款"
  },
  "make clear": {
    "word": "make clear",
    "translation": "解释清楚; 阐明",
    "cloze": {
      "sentence": "We must ______ clear to the customer that customized orders cannot be cancelled once production begins.",
      "translation": "我们必须向客户明确阐明，定制订单一旦开工投产便概不接受取消。"
    },
    "form_confusables": [
      {
        "word": "make clear",
        "zh": "阐明；明确表明"
      },
      {
        "word": "make clean",
        "zh": "打扫干净"
      },
      {
        "word": "make close",
        "zh": "靠近；关闭"
      },
      {
        "word": "make clue",
        "zh": "制造线索 (非标准搭配)"
      }
    ],
    "semantic_confusables": [
      {
        "word": "make clear",
        "zh": "明确阐明 (申明原则立场)"
      },
      {
        "word": "clarify",
        "zh": "澄清；化解歧义"
      },
      {
        "word": "elucidate",
        "zh": "深入剖析阐明"
      },
      {
        "word": "illuminate",
        "zh": "照亮；启发启示"
      }
    ],
    "notes": "【搭配考点】make it clear that... 阐明...（it 为形式宾语）；【形近辨析】make clean (清洁打扫)，make close (封口靠近)；【近义辨析】make clear 是商务交涉中坚决表明原则界限的直接表达，clarify 侧重化解双方此前存在的歧义与误会，elucidate 带有学者剖析深奥理论的严肃书面色彩，illuminate 侧重启发心智使事物豁然开朗。",
    "level": "CET-4/BEC",
    "phonetic": "/make clear/",
    "zh": "解释清楚; 阐明"
  },
  "accommodation": {
    "word": "accommodation",
    "translation": "住处; 调解; 通融",
    "cloze": {
      "sentence": "As a special ______ to help you weather the cash crisis, the supplier agreed to extend the credit period.",
      "translation": "作为帮助贵方度过现金危机的一项特殊通融，供应商同意延长赊销期限。"
    },
    "form_confusables": [
      {
        "word": "accommodation",
        "zh": "通融融通；膳宿"
      },
      {
        "word": "accumulation",
        "zh": "累积；积聚"
      },
      {
        "word": "acclimatization",
        "zh": "水土适应；适应新环境"
      },
      {
        "word": "commemoration",
        "zh": "纪念；纪念庆典"
      }
    ],
    "semantic_confusables": [
      {
        "word": "accommodation",
        "zh": "商业通融 (维系关系的灵活性让步)"
      },
      {
        "word": "concession",
        "zh": "实质性价格让步"
      },
      {
        "word": "compromise",
        "zh": "折中妥协"
      },
      {
        "word": "indulgence",
        "zh": "宽容迁就"
      }
    ],
    "notes": "【搭配考点】as an accommodation to sb 作为对某人的特殊通融照顾；【形近辨析】accumulation (财富积累)，acclimatization (水土气候适应)，commemoration (纪念)；【近义辨析】accommodation 在商贸金融中特指出于维系合作关系在原则外给予对方的灵活性融通照顾（如延长票期），concession 强调在谈判要价上的实质性降价让步，compromise 侧重双方各退一步，indulgence 带有放纵溺爱色彩。",
    "level": "CET-4/BEC",
    "phonetic": "/ə,kɔmə'deiʃən/",
    "zh": "住处; 调解; 通融"
  },
  "give consideration to": {
    "word": "give consideration to",
    "translation": "考虑; 顾及",
    "cloze": {
      "sentence": "The executive board will give favorable ______ to your proposal to open a regional branch in Dubai.",
      "translation": "执行董事会将对贵方在迪拜设立区域分公司的提案予以积极考量。"
    },
    "form_confusables": [
      {
        "word": "give consideration to",
        "zh": "考虑；斟酌"
      },
      {
        "word": "give compensation to",
        "zh": "对...予以经济补偿"
      },
      {
        "word": "give consolidation to",
        "zh": "对...予以整合巩固"
      },
      {
        "word": "give commemoration to",
        "zh": "对...予以纪念"
      }
    ],
    "semantic_confusables": [
      {
        "word": "give consideration to",
        "zh": "考虑斟酌 (进入高层审议程序)"
      },
      {
        "word": "take into account",
        "zh": "将...因素纳入考量"
      },
      {
        "word": "ponder over",
        "zh": "沉思苦想"
      },
      {
        "word": "contemplate",
        "zh": "盘算筹划"
      }
    ],
    "notes": "【搭配考点】give careful/favorable consideration to 对...予以审慎/积极考量；【形近辨析】compensation (经济赔偿)，consolidation (合并整合)，commemoration (纪念)；【近义辨析】give consideration to 是公函中庄重大气表示“进入决策审议流程”的规范用语，take into account 侧重把某变量作为输入因子计入考量，ponder over 偏向个人苦思冥想，contemplate 侧重在心中权衡盘算未来规划。",
    "level": "CET-4/BEC",
    "phonetic": "/give consideration to/",
    "zh": "考虑; 顾及"
  },
  "lead to": {
    "word": "lead to",
    "translation": "导致; 引向; 通向",
    "cloze": {
      "sentence": "Any delay in opening the letter of credit may ______ to a postponement of the shipment date.",
      "translation": "开立信用证的任何延误都可能导致装船日期的顺延。"
    },
    "form_confusables": [
      {
        "word": "lead to",
        "zh": "导致；引向"
      },
      {
        "word": "load to",
        "zh": "装载至"
      },
      {
        "word": "leap to",
        "zh": "跃向；仓促跳至"
      },
      {
        "word": "lean to",
        "zh": "倾向于"
      }
    ],
    "semantic_confusables": [
      {
        "word": "lead to",
        "zh": "导致引向 (因果逻辑链条)"
      },
      {
        "word": "result in",
        "zh": "终局性造成"
      },
      {
        "word": "trigger",
        "zh": "诱发；扣动扳机"
      },
      {
        "word": "bring about",
        "zh": "促成；引起局面"
      }
    ],
    "notes": "【搭配考点】lead to consequences/delays 导致不良后果或延期；【形近辨析】load to (装载)，leap to conclusions (仓促下结论)，lean to (偏向于)；【近义辨析】lead to 强调前因后果的演化发展链条，result in 强调最终落地的终局性结果，trigger 侧重像扣动扳机一样迅速诱发剧烈反应，bring about 强调施加主动努力促成了特定局面的出现。",
    "level": "CET-4/BEC",
    "phonetic": "/lead to/",
    "zh": "导致; 引向; 通向"
  },
  "current market": {
    "word": "current market",
    "translation": "目前市场; 现行市场",
    "cloze": {
      "sentence": "Your quoted price is substantially above the ______ market level for similar grade cotton.",
      "translation": "贵方报价大幅高于同等级棉花目前的市场行情水平。"
    },
    "form_confusables": [
      {
        "word": "current market",
        "zh": "当前市价；现行市场"
      },
      {
        "word": "currant market",
        "zh": "葡萄干市场"
      },
      {
        "word": "currency market",
        "zh": "外汇市场"
      },
      {
        "word": "current margin",
        "zh": "当前保证金/利润率"
      }
    ],
    "semantic_confusables": [
      {
        "word": "current market",
        "zh": "当前市况水平 (此时此刻市场公允价)"
      },
      {
        "word": "prevailing market",
        "zh": "普遍通行的主流行情"
      },
      {
        "word": "ruling rate",
        "zh": "现行牌价"
      },
      {
        "word": "spot price",
        "zh": "即期现货价格"
      }
    ],
    "notes": "【搭配考点】current market price / condition 当前市场价/市况；【形近辨析】currant (无核小葡萄干)，currency (货币通货)，margin (利润率/保证金)；【近义辨析】current market 侧重此时此刻市场交易的综合基准价，prevailing market 侧重被大众普遍认同的主流常态行情，spot price 专指一手交钱一手交货的即期现货价格，ruling rate 侧重官方或公会核定的现行执行牌价。",
    "level": "CET-4/BEC",
    "phonetic": "/current market/",
    "zh": "目前市场; 现行市场"
  },
  "indicate": {
    "word": "indicate",
    "translation": "表明; 指出; 预示",
    "cloze": {
      "sentence": "Preliminary sales figures ______ that consumers strongly favor the eco-friendly packaging.",
      "translation": "初期的销售数据表明，消费者十分青睐该款环保包装。"
    },
    "form_confusables": [
      {
        "word": "indicate",
        "zh": "表明；指示；显示"
      },
      {
        "word": "vindicate",
        "zh": "证明清白；辩白"
      },
      {
        "word": "abdicate",
        "zh": "退位逊位；放弃职责"
      },
      {
        "word": "dedicate",
        "zh": "献身；题献"
      }
    ],
    "semantic_confusables": [
      {
        "word": "indicate",
        "zh": "客观数据表明 (显示出明显趋势)"
      },
      {
        "word": "suggest",
        "zh": "含蓄暗示；启发"
      },
      {
        "word": "denote",
        "zh": "字面客观指代"
      },
      {
        "word": "manifest",
        "zh": "显露展现"
      }
    ],
    "notes": "【搭配考点】indicators / indicate that... 数据表明...；【形近辨析】词根-dic-（说/宣布）：vindicate (洗清罪名证实清白)，abdicate (宣布退位)，dedicate (题献奉献)；【近义辨析】indicate 侧重客观指标或数据显示出的明确趋势与事实走向，suggest 强调委婉含蓄地暗示可能，denote 专指词汇在字典上的字面客观外延定义，manifest 强调隐藏的特征以显性形式流露爆发。",
    "level": "CET-4/BEC",
    "phonetic": "/'indikeit/",
    "zh": "表明; 指出; 预示"
  },
  "similar": {
    "word": "similar",
    "translation": "相似的; 类似",
    "cloze": {
      "sentence": "The two models are very ______ in exterior appearance, but differ widely in processing power.",
      "translation": "这两款机型在外观上极其相似，但在运算性能上却有云泥之别。"
    },
    "form_confusables": [
      {
        "word": "similar",
        "zh": "相似的；相近的"
      },
      {
        "word": "secular",
        "zh": "世俗的；非宗教的"
      },
      {
        "word": "singular",
        "zh": "非凡卓越的；单数的"
      },
      {
        "word": "circular",
        "zh": "圆形的；通知通报"
      }
    ],
    "semantic_confusables": [
      {
        "word": "similar",
        "zh": "相似的 (主要特征相仿允许细部差异)"
      },
      {
        "word": "comparable",
        "zh": "可比拟的；处于同层级的"
      },
      {
        "word": "analogous",
        "zh": "结构机制类比相似的"
      },
      {
        "word": "identical",
        "zh": "完全一模一样的"
      }
    ],
    "notes": "【搭配考点】be similar to 与...相似；【形近辨析】secular (世俗非宗教的)，singular (非凡单一的)，circular (圆形的/通知通报)；【近义辨析】similar 强调主要特征大体相仿但允许细部差异，identical 强调分毫不差完全一致，comparable 强调两者处于同一数量级具备横向可比性，analogous 侧重内在机制或功能在逻辑上可以类推。",
    "level": "CET-4/BEC",
    "phonetic": "/'similə/",
    "zh": "相似的; 类似"
  },
  "invite one's attention to": {
    "word": "invite one's attention to",
    "translation": "提请注意; 请关注",
    "cloze": {
      "sentence": "We would like to ______ your attention to Clause 7 regarding penalty charges for late delivery.",
      "translation": "我们特此提请贵方关注关于迟交违约金的第七条约定。"
    },
    "form_confusables": [
      {
        "word": "invite one's attention to",
        "zh": "提请某方注意"
      },
      {
        "word": "invade one's privacy",
        "zh": "侵犯某人隐私"
      },
      {
        "word": "invert one's position",
        "zh": "颠倒某人立场"
      },
      {
        "word": "invite one's attendance",
        "zh": "邀请某人出席"
      }
    ],
    "semantic_confusables": [
      {
        "word": "invite one's attention to",
        "zh": "提请垂注 (极客气商务敬语)"
      },
      {
        "word": "call one's attention to",
        "zh": "唤起某人注意"
      },
      {
        "word": "draw one's attention to",
        "zh": "吸引视线注意"
      },
      {
        "word": "direct one's attention to",
        "zh": "引导目光聚焦"
      }
    ],
    "notes": "【搭配考点】invite your attention to the fact/clause 提请贵方关注合同条款（外贸极具礼节的公函句式）；【形近辨析】invade (侵入)，invert (颠倒翻转)，attendance (出席)；【近义辨析】invite one's attention to 带有“恭请阁下屈尊垂注”的高度商业礼貌色彩，call one's attention to 偏向工作指令式提醒，draw one's attention to 侧重客观上通过警示手段吸引目光，direct one's attention to 侧重引导视线对焦特定图表。",
    "level": "CET-4/BEC",
    "phonetic": "/invite one's attention to/",
    "zh": "提请注意; 请关注"
  },
  "opinion": {
    "word": "opinion",
    "translation": "意见; 看法; 估评",
    "cloze": {
      "sentence": "In our ______, locking in commodity contracts ahead of the election would hedge against currency volatility.",
      "translation": "在我们看来，在大选前锁定大宗商品远期合约能够有效对冲汇率波动风险。"
    },
    "form_confusables": [
      {
        "word": "opinion",
        "zh": "意见；看法；见解"
      },
      {
        "word": "onion",
        "zh": "洋葱"
      },
      {
        "word": "option",
        "zh": "期权；选择权"
      },
      {
        "word": "oblivion",
        "zh": "湮没；被遗忘"
      }
    ],
    "semantic_confusables": [
      {
        "word": "opinion",
        "zh": "专业判断见解"
      },
      {
        "word": "perspective",
        "zh": "全局视角"
      },
      {
        "word": "sentiment",
        "zh": "市场心理情绪倾向"
      },
      {
        "word": "viewpoint",
        "zh": "立足点；观察点"
      }
    ],
    "notes": "【搭配考点】in our opinion / express an opinion 根据我们的看法/表达意见；【形近辨析】option (选择期权)，oblivion (湮没遗忘)，onion (洋葱)；【近义辨析】opinion 侧重基于经验或分析作出的判断性见解，perspective 侧重站在宏观大局审视问题的视角，sentiment 侧重市场上投资者受情绪驱动形成的整体心理氛围，viewpoint 强调观察者所立足的地理或利益观察点。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'pinjən/",
    "zh": "意见; 看法; 估评"
  },
  "measure up to": {
    "word": "measure up to",
    "translation": "符合; 达到标准; 够得上",
    "cloze": {
      "sentence": "The imported batch failed to ______ up to our stringent hygiene and safety criteria.",
      "translation": "该批进口产品未能达到我们严苛的卫生与安全标准。"
    },
    "form_confusables": [
      {
        "word": "measure up to",
        "zh": "符合；达到标准"
      },
      {
        "word": "make up to",
        "zh": "巴结讨好"
      },
      {
        "word": "mess up to",
        "zh": "搞乱；弄糟"
      },
      {
        "word": "match up to",
        "zh": "匹敌；比得上"
      }
    ],
    "semantic_confusables": [
      {
        "word": "measure up to",
        "zh": "达到检验标准 (质检比对达标)"
      },
      {
        "word": "meet expectations",
        "zh": "满足心中期望"
      },
      {
        "word": "comply with",
        "zh": "顺从规章"
      },
      {
        "word": "live up to",
        "zh": "不负盛名/期待"
      }
    ],
    "notes": "【搭配考点】measure up to standards/expectations 达到既定标准或期望；【形近辨析】make up to sb (讨好谄媚某人)，match up to (比得上/匹敌)；【近义辨析】measure up to 含有用量尺测量后发现完全达标合格的质检比对感，meet expectations 强调满足了客户心中期待，live up to 侧重在道德或声誉上不辜负某种名声，comply with 强调服从规章制度。",
    "level": "CET-4/BEC",
    "phonetic": "/measure up to/",
    "zh": "符合; 达到标准; 够得上"
  },
  "bring down": {
    "word": "bring down",
    "translation": "击败; 降低; 压低价格",
    "cloze": {
      "sentence": "Increased automated production will help us ______ down unit manufacturing costs by 15%.",
      "translation": "提高自动化生产水平将帮助我们把单位制造成本降低15%。"
    },
    "form_confusables": [
      {
        "word": "bring down",
        "zh": "降低；压低价格"
      },
      {
        "word": "break down",
        "zh": "分解；故障抛锚"
      },
      {
        "word": "build down",
        "zh": "缩减规模"
      },
      {
        "word": "brush down",
        "zh": "刷去尘土"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bring down",
        "zh": "压低拉低 (强力拉低偏高价格成本)"
      },
      {
        "word": "lower",
        "zh": "调低降低"
      },
      {
        "word": "reduce",
        "zh": "削减减少"
      },
      {
        "word": "suppress",
        "zh": "强行打压抑制"
      }
    ],
    "notes": "【搭配考点】bring down prices/costs 降低物价/压缩生产成本；【形近辨析】break down (机器抛锚故障/分解数据)，brush down (刷去灰尘)；【近义辨析】bring down 是形象有力的动词短语，指通过技术改造或竞争强力将偏高的数值强行拉低至合理区间，lower 强调在高度或级别上向下移动，reduce 泛指减少体积或金额，suppress 专指官方用行政暴力手段压制暴乱或通胀。",
    "level": "CET-4/BEC",
    "phonetic": "/口语/",
    "zh": "击败; 降低; 压低价格"
  },
  "at your end": {
    "word": "at your end",
    "translation": "在贵方处; 你方当地",
    "cloze": {
      "sentence": "Please verify whether the customs clearance procedures have been completed at your ______.",
      "translation": "请核实贵方当地是否已经办妥了海关清关手续。"
    },
    "form_confusables": [
      {
        "word": "at your end",
        "zh": "在贵方处；贵方当地"
      },
      {
        "word": "at your hand",
        "zh": "在你手头"
      },
      {
        "word": "at your will",
        "zh": "随你的意愿"
      },
      {
        "word": "at your ease",
        "zh": "自在地；安闲地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "at your end",
        "zh": "在贵方那端 (国际通讯对端所在地)"
      },
      {
        "word": "on your side",
        "zh": "在贵方阵营立场"
      },
      {
        "word": "in your territory",
        "zh": "在贵方所辖辖区内"
      },
      {
        "word": "locally",
        "zh": "在本地"
      }
    ],
    "notes": "【搭配考点】at your end (在贵方所在地/贵方那端)，国际越洋通讯、邮件往来中的高频词；【形近辨析】at your hand (由你亲手交付)，at your will (随心所欲)，at ease (安闲舒适)；【近义辨析】at your end 形象指涉跨国通信网络另一终端的所在地点与业务范围，on your side 侧重在合同争议或博弈中的阵营立场，in your territory 强调具有排他性的地理行政管辖疆域，locally 侧重就地本地化。",
    "level": "CET-4/BEC",
    "phonetic": "/at your end/",
    "zh": "在贵方处; 你方当地"
  },
  "deny": {
    "word": "deny",
    "translation": "否定; 否认; 拒绝给予",
    "cloze": {
      "sentence": "The insurance carrier may ______ compensation if the loss was caused by inherent vice of the cargo.",
      "translation": "若损失是由货物自身的固有瑕疵所致，保险理赔公司可以拒绝赔付。"
    },
    "form_confusables": [
      {
        "word": "deny",
        "zh": "拒绝给予；否认"
      },
      {
        "word": "defy",
        "zh": "公然违抗；藐视"
      },
      {
        "word": "deity",
        "zh": "神灵；神性"
      },
      {
        "word": "decay",
        "zh": "腐烂；衰败"
      }
    ],
    "semantic_confusables": [
      {
        "word": "deny",
        "zh": "拒赔；驳回权利主张"
      },
      {
        "word": "refuse",
        "zh": "坚决拒绝请求"
      },
      {
        "word": "reject",
        "zh": "因瑕疵驳回退件"
      },
      {
        "word": "disclaim",
        "zh": "免责声明放弃"
      }
    ],
    "notes": "【搭配考点】deny an application / compensation 驳回申请/拒赔；【形近辨析】defy (公然藐视反抗)，deity (神祗神性)，decay (腐朽衰败)；【近义辨析】deny 在法律与保险理赔中专指认定对方无权利主张而拒绝给予赔付或正式否定指控，refuse 侧重面对请求时态度坚决地说“不”，reject 侧重因单据瑕疵将申请退回不予受理，disclaim 专指免责声明不承担连带责任。",
    "level": "CET-4/BEC",
    "phonetic": "/di'nai/",
    "zh": "否定; 否认; 拒绝给予"
  },
  "in your interest": {
    "word": "in your interest",
    "translation": "符合贵方利益; 对你有利",
    "cloze": {
      "sentence": "It would be in your ______ to secure ocean shipping space early, as freight rates are rising fast.",
      "translation": "鉴于海运运费正在飞涨，及早锁定海运舱位将符合贵方的切身利益。"
    },
    "form_confusables": [
      {
        "word": "in your interest",
        "zh": "符合贵方利益"
      },
      {
        "word": "in your intent",
        "zh": "在你的意图之内"
      },
      {
        "word": "in your instant",
        "zh": "在你立即的..."
      },
      {
        "word": "in your insight",
        "zh": "在你的洞察下"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in your interest",
        "zh": "符合贵方切身利益 (长远大局)"
      },
      {
        "word": "to your advantage",
        "zh": "对贵方有利 (占得先机)"
      },
      {
        "word": "for your benefit",
        "zh": "为了贵方的福祉"
      },
      {
        "word": "profitable for you",
        "zh": "对贵方有利可图"
      }
    ],
    "notes": "【搭配考点】be in your (best) interest to do sth 做某事最符合贵方利益（委婉说服买方决断的经典句式）；【形近辨析】intent (意图企图)，instant (瞬间立即)，insight (洞见洞察力)；【近义辨析】in your interest 侧重从长远大局出发真正有利于维护对方合法权益，to your advantage 强调在当前商业竞争对比中让对方占得先机，for your benefit 强调给予对方福祉与利益，profitable 侧重实打实的金钱利润入账。",
    "level": "CET-4/BEC",
    "phonetic": "/in your interest/",
    "zh": "符合贵方利益; 对你有利"
  },
  "on the low side": {
    "word": "on the low side",
    "translation": "偏低; 处于较低水平",
    "cloze": {
      "sentence": "Our profit margin for this quarter is rather on the ______ side due to soaring utility costs.",
      "translation": "由于公用事业成本飙升，我们本季度的利润率明显偏低。"
    },
    "form_confusables": [
      {
        "word": "on the low side",
        "zh": "偏低；处于较低区间"
      },
      {
        "word": "on the slow side",
        "zh": "偏慢"
      },
      {
        "word": "on the dark side",
        "zh": "在阴暗面"
      },
      {
        "word": "on the safe side",
        "zh": "为安全起见"
      }
    ],
    "semantic_confusables": [
      {
        "word": "on the low side",
        "zh": "偏低 (委婉商业修辞)"
      },
      {
        "word": "below average",
        "zh": "低于平均水平"
      },
      {
        "word": "depressed",
        "zh": "低迷萧条的"
      },
      {
        "word": "modest",
        "zh": "温和适度的；微小的"
      }
    ],
    "notes": "【搭配考点】be on the low/high side 偏低/偏高（描述价格、利润、库存水平的得体口吻）；【形近辨析】on the safe side (稳妥起见)，on the slow side (行动偏慢)；【近义辨析】on the low side 属于英国商业委婉修辞，避免直接指责“too low”引起尴尬，below average 侧重在统计学均值线之下，depressed 侧重整个宏观行业陷入大萧条低迷。",
    "level": "CET-4/BEC",
    "phonetic": "/on the low side/",
    "zh": "偏低; 处于较低水平"
  },
  "see one's way clear to": {
    "word": "see one's way clear to",
    "translation": "考虑做; 设法做到",
    "cloze": {
      "sentence": "We hope you can see your way ______ to reducing your quote by 3% to clinch the deal.",
      "translation": "我们希望贵方能够设法通融将报价调低3%，以便敲定这笔交易。"
    },
    "form_confusables": [
      {
        "word": "see one's way clear to",
        "zh": "设法做到；通融办理"
      },
      {
        "word": "see one's way near to",
        "zh": "错误搭配"
      },
      {
        "word": "make one's way out of",
        "zh": "摆脱困境；离开"
      },
      {
        "word": "find one's way into",
        "zh": "流入；渗透进"
      }
    ],
    "semantic_confusables": [
      {
        "word": "see one's way clear to",
        "zh": "设法通融应允 (顶级商务委婉)"
      },
      {
        "word": "manage to agree",
        "zh": "设法达成一致"
      },
      {
        "word": "be persuaded to",
        "zh": "被说服而同意"
      },
      {
        "word": "accommodate",
        "zh": "予以通融照顾"
      }
    ],
    "notes": "【搭配考点】see one's way clear to doing sth 商业交涉顶级委婉句型，恳请对方设法排除困难通融应允（后接动名词）；【形近辨析】make one's way (前往/发迹)，find one's way (找到门路)；【近义辨析】see one's way clear to 表达“在审视权衡后发现自己有条件破例通融办理”，manage to 强调克服艰难险阻办成了某事，accommodate 是动词直接通融。",
    "level": "CET-4/BEC",
    "phonetic": "/see one's way clear to/",
    "zh": "考虑做; 设法做到"
  },
  "satisfy": {
    "word": "satisfy",
    "translation": "满足; 使满意; 偿付",
    "cloze": {
      "sentence": "The proposed compensation was sufficient to ______ all claims filed by the consignee.",
      "translation": "所提议的赔偿额足以偿付收货人提出的所有索赔主张。"
    },
    "form_confusables": [
      {
        "word": "satisfy",
        "zh": "满足；偿付；使满意"
      },
      {
        "word": "simplify",
        "zh": "使简单化"
      },
      {
        "word": "sanctify",
        "zh": "使神圣化"
      },
      {
        "word": "stratify",
        "zh": "使分层化"
      }
    ],
    "semantic_confusables": [
      {
        "word": "satisfy",
        "zh": "清偿债务/满足索赔 (商法专用)"
      },
      {
        "word": "settle",
        "zh": "调解平息纠纷结账"
      },
      {
        "word": "fulfill",
        "zh": "履行承诺指标"
      },
      {
        "word": "discharge",
        "zh": "免除解除责任"
      }
    ],
    "notes": "【搭配考点】satisfy a claim/debt 满足要求/清偿赔偿与债务；【形近辨析】simplify (简化)，sanctify (使神圣)，stratify (分层化)；【近义辨析】satisfy a claim 在商法中专指全额给付达到索赔人的合法要求使债权债务消灭，settle 侧重双方达成折中协议平息争议，fulfill 侧重履行契约责任，discharge 强调法律责任从肩头卸除。",
    "level": "CET-4/BEC",
    "phonetic": "/'sætisfai/",
    "zh": "满足; 使满意; 偿付"
  },
  "order": {
    "word": "order",
    "translation": "订单; 订购; 命令",
    "cloze": {
      "sentence": "We are pleased to place a formal ______ with you for 10,000 sets of ceramic tableware.",
      "translation": "我们很高兴向贵方正式下达一份订购1万套陶瓷餐具的订单。"
    },
    "form_confusables": [
      {
        "word": "order",
        "zh": "订单；订购；秩序"
      },
      {
        "word": "odour",
        "zh": "气味；臭味"
      },
      {
        "word": "otter",
        "zh": "水獭"
      },
      {
        "word": "offer",
        "zh": "报盘；出价"
      }
    ],
    "semantic_confusables": [
      {
        "word": "order",
        "zh": "采购订单 (买方正式采购指令)"
      },
      {
        "word": "booking",
        "zh": "预订订舱"
      },
      {
        "word": "requisition",
        "zh": "内部请购申请调拨单"
      },
      {
        "word": "contract",
        "zh": "正式买卖契约"
      }
    ],
    "notes": "【搭配考点】place an order with sb for sth 向某人订购某物；【形近辨析】offer (报盘要约)，odour (气味)，otter (水獭)；【近义辨析】order 是买卖流程中买方向卖方发出的确定采购指令（以采购订单 P/O 为准），booking 专指船位、机票或仓储的预约订舱，requisition 专指企业内部部门向采购部提交的采购申请，contract 是双方权利义务完备的法律契约。",
    "level": "CET-4/BEC",
    "phonetic": "/'ɔ:də/",
    "zh": "订单; 订购; 命令"
  },
  "for one's account": {
    "word": "for one's account",
    "translation": "由某方负担; 计入某方账户",
    "cloze": {
      "sentence": "All port handling charges and lighterage expenses at destination shall be for the buyer's ______.",
      "translation": "目的港的所有码头搬运费和驳运费均应由买方账户承担。"
    },
    "form_confusables": [
      {
        "word": "for one's account",
        "zh": "由某方负担费用"
      },
      {
        "word": "for one's amount",
        "zh": "按某人金额 (非规范搭配)"
      },
      {
        "word": "for one's count",
        "zh": "按某人计数"
      },
      {
        "word": "for one's discount",
        "zh": "供某人折扣"
      }
    ],
    "semantic_confusables": [
      {
        "word": "for one's account",
        "zh": "由某方账户承担 (外贸财务专用)"
      },
      {
        "word": "at one's expense",
        "zh": "由某人自费承担"
      },
      {
        "word": "borne by",
        "zh": "由...承担责任"
      },
      {
        "word": "chargeable to",
        "zh": "计入...借方"
      }
    ],
    "notes": "【搭配考点】be for one's account 国际贸易术语，意为“费用由某方负担（直接记入某方借方账户）”；【形近辨析】account (账目/说明)，amount (金额总额)，discount (折扣)；【近义辨析】for one's account 是记账与结算标准行业用语强调费用最终归属在谁的借贷科目下，at one's expense 强调物理出资掏腰包，borne by 侧重法律或道义上谁来承担责任。",
    "level": "CET-4/BEC",
    "phonetic": "/for one's account/",
    "zh": "由某方负担; 计入某方账户"
  },
  "in urgent need of": {
    "word": "in urgent need of",
    "translation": "急需; 迫切需要",
    "cloze": {
      "sentence": "The overseas assembly plant is in ______ need of electronic microchips to prevent a production halt.",
      "translation": "海外组装厂急需微型电子芯片，以防止整条生产线停产停工。"
    },
    "form_confusables": [
      {
        "word": "in urgent need of",
        "zh": "急需；迫切需要"
      },
      {
        "word": "in silent need of",
        "zh": "默默需要"
      },
      {
        "word": "in violent mood of",
        "zh": "处于狂暴情绪中"
      },
      {
        "word": "in ardent deed of",
        "zh": "在热切行动中"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in urgent need of",
        "zh": "迫切急需 (时间刻不容缓)"
      },
      {
        "word": "in dire need of",
        "zh": "处于极度绝境匮乏中"
      },
      {
        "word": "sorely lacking",
        "zh": "极其欠缺匮乏"
      },
      {
        "word": "short of",
        "zh": "缺少短缺"
      }
    ],
    "notes": "【搭配考点】in urgent need of materials/funds 急需生产物资或资金周转；【形近辨析】urgent (急迫紧迫)，silent (无声沉默)，ardent (热烈热切)；【近义辨析】in urgent need of 强调时间节点迫在眉睫刻不容缓，in dire need of 侧重形势极其险恶到了生死存亡关头，short of 强调数量不足有缺口，sorely lacking 带有深深感到匮乏遗憾的感情色彩。",
    "level": "CET-4/BEC",
    "phonetic": "/in urgent need of/",
    "zh": "急需; 迫切需要"
  },
  "in one's favor": {
    "word": "in one's favor",
    "translation": "以某人为受益人; 对某人有利",
    "cloze": {
      "sentence": "The buyer instructed their bank to open an irrevocable letter of credit in the seller's ______.",
      "translation": "买方指示其开户行开立一份以卖方为受益人的不可撤销信用证。"
    },
    "form_confusables": [
      {
        "word": "in one's favor",
        "zh": "以某人为受益人；对某人有利"
      },
      {
        "word": "in one's flavor",
        "zh": "在某人风味中"
      },
      {
        "word": "in one's fervor",
        "zh": "在某人热忱中"
      },
      {
        "word": "in one's fever",
        "zh": "在某人发烧时"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in one's favor",
        "zh": "以某人为款项受益人 (信用证法定术语)"
      },
      {
        "word": "to one's benefit",
        "zh": "对某人有综合益处"
      },
      {
        "word": "for one's credit",
        "zh": "贷记某人账户"
      },
      {
        "word": "on one's behalf",
        "zh": "代表某人行事"
      }
    ],
    "notes": "【搭配考点】open an L/C in sb's favor 开立以某人为受益人的信用证；【形近辨析】favor (好感/恩惠/受票受益)，flavor (风味调味)，fervor (狂热热诚)，fever (发热发烧)；【近义辨析】in one's favor 在银行信用证与票据业务中具有严格法定含义即“指定某人为款项收取受益人”，to one's benefit 泛指带来综合利益，for one's credit 是银行将款项存入某人户头，on one's behalf 强调作为代理人行事。",
    "level": "CET-4/BEC",
    "phonetic": "/in one's favor/",
    "zh": "以某人为受益人; 对某人有利"
  },
  "make delivery": {
    "word": "make delivery",
    "translation": "交货; 履行交货",
    "cloze": {
      "sentence": "The supplier pledged to make ______ within thirty days after receiving the advance payment.",
      "translation": "供应商郑重承诺将在收到预付款后的30天内履行交货。"
    },
    "form_confusables": [
      {
        "word": "make delivery",
        "zh": "履行交货；交付"
      },
      {
        "word": "make discovery",
        "zh": "做出发现"
      },
      {
        "word": "make recovery",
        "zh": "复苏；康复"
      },
      {
        "word": "make inquiry",
        "zh": "发起垂询"
      }
    ],
    "semantic_confusables": [
      {
        "word": "make delivery",
        "zh": "履行交付 (将控制权移交买方)"
      },
      {
        "word": "hand over goods",
        "zh": "现场实物交接"
      },
      {
        "word": "effect shipment",
        "zh": "装船发运"
      },
      {
        "word": "dispatch",
        "zh": "迅速派出运送"
      }
    ],
    "notes": "【搭配考点】make delivery of goods 交付货物（移交占有权）；【形近辨析】delivery (交付/递送)，discovery (发现)，recovery (经济复苏/康复)，inquiry (垂询)；【近义辨析】make delivery 强调将买卖标的物实际送达买方控制之下完成履约移交，hand over 侧重现场物理交接，effect shipment 仅指在装运港装船启运（在到岸前交货尚未完成），dispatch 强调由发货地发出。",
    "level": "CET-4/BEC",
    "phonetic": "/make delivery/",
    "zh": "交货; 履行交货"
  },
  "on or about": {
    "word": "on or about",
    "translation": "大约在某日; 前后数日",
    "cloze": {
      "sentence": "According to UCP 600, a shipment dated 'on or ______ May 15' permits loading from May 10 to May 20.",
      "translation": "根据《跟单信用证统一惯例》UCP 600，装运期标为“在5月15日左右”允许在5月10日至20日之间装船。"
    },
    "form_confusables": [
      {
        "word": "on or about",
        "zh": "大约在某日；前后数日"
      },
      {
        "word": "in or out",
        "zh": "进或出"
      },
      {
        "word": "up or down",
        "zh": "上或下"
      },
      {
        "word": "to and fro",
        "zh": "来回往复"
      }
    ],
    "semantic_confusables": [
      {
        "word": "on or about",
        "zh": "浮动公差期 (UCP600前后各5天)"
      },
      {
        "word": "approximately on",
        "zh": "大约在某日 (无确定公差)"
      },
      {
        "word": "round about",
        "zh": "大约大体"
      },
      {
        "word": "tentatively on",
        "zh": "暂定于某日"
      }
    ],
    "notes": "【搭配考点】on or about + 日期，信用证权威规则约定（包括起止当天在内的前后各5天宽限期）；【形近辨析】on or about (在某日左右)，round about (周围/大约)；【近义辨析】on or about 在国际贸易跟单信用证统一惯例中具有精准的法律浮动窗口定义（前后各5天共11天），approximately on 属于日常口语估算无确定法律公差，tentatively on 强调方案本身处于未定草案阶段。",
    "level": "CET-4/BEC",
    "phonetic": "/on or about/",
    "zh": "大约在某日; 前后数日"
  },
  "sales confirmation": {
    "word": "sales confirmation",
    "translation": "销售确认书",
    "cloze": {
      "sentence": "Please sign and return the attached ______ confirmation so that we can proceed with fabrication.",
      "translation": "请将会签盖章的附函销售确认书寄回，以便我们投入加工生产。"
    },
    "form_confusables": [
      {
        "word": "sales confirmation",
        "zh": "销售确认书"
      },
      {
        "word": "status confirmation",
        "zh": "身份确认"
      },
      {
        "word": "stock consolidation",
        "zh": "库存整合"
      },
      {
        "word": "sample classification",
        "zh": "样品分类"
      }
    ],
    "semantic_confusables": [
      {
        "word": "sales confirmation",
        "zh": "销售确认书 (简式正式买卖契约)"
      },
      {
        "word": "purchase contract",
        "zh": "详式正式采购合同"
      },
      {
        "word": "order acknowledgement",
        "zh": "接单通知书回执"
      },
      {
        "word": "memo of sale",
        "zh": "买卖备忘录"
      }
    ],
    "notes": "【搭配考点】sign and return the duplicate sales confirmation 签署并寄回销售确认书副本；【形近辨析】confirmation (确认)，consolidation (整合盘点)，classification (分类)；【近义辨析】sales confirmation (S/C) 是进出口贸易中常用的简化买卖契约文本，通常一式两份由卖方拟定买方会签生效，purchase contract 是条款更为详尽冗长的正式大型合同，order acknowledgement 仅是供货商告知“收到你方订单”的单向回执。",
    "level": "CET-4/BEC",
    "phonetic": "/sales confirmation/",
    "zh": "销售确认书"
  },
  "assure": {
    "word": "assure",
    "translation": "向某人保证; 使确信",
    "cloze": {
      "sentence": "We ______ you that utmost care will be taken in packing the precision medical instruments.",
      "translation": "我们向贵方保证，在包装这批精密医疗仪器时必将给予最严密的关照。"
    },
    "form_confusables": [
      {
        "word": "assure",
        "zh": "向某人保证；使确信"
      },
      {
        "word": "ensure",
        "zh": "确保发生；保证"
      },
      {
        "word": "insure",
        "zh": "给...投保买保险"
      },
      {
        "word": "reassure",
        "zh": "使安心；打消疑虑"
      }
    ],
    "semantic_confusables": [
      {
        "word": "assure",
        "zh": "向某人打包票 (消除对方顾虑)"
      },
      {
        "word": "promise",
        "zh": "做出诺言许诺"
      },
      {
        "word": "guarantee",
        "zh": "提供法律品质担保"
      },
      {
        "word": "warrant",
        "zh": "立据担保无瑕疵"
      }
    ],
    "notes": "【搭配考点】assure sb that... 向某人保证...（必须接人作宾语）；【形近辨析】assure (向某人保证)，ensure (确保某事发生)，insure (购买保险)，reassure (安抚打消疑虑)；【近义辨析】assure 语法上必须跟“人”作宾语（assure sb of sth / that），重在主观上给对方吃定心丸，ensure 后面直接跟“事”（ensure safety），guarantee 侧重承担退换换货的法律兜底，warrant 侧重卖方在合同中就货品无瑕疵立下字据。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'ʃuə/",
    "zh": "向某人保证; 使确信"
  },
  "duplicate": {
    "word": "duplicate",
    "translation": "副本; 复制品; 两倍",
    "cloze": {
      "sentence": "The applicant must submit the original import certificate together with one ______.",
      "translation": "申请人必须提交原产地进口证明正本一份及副本一份。"
    },
    "form_confusables": [
      {
        "word": "duplicate",
        "zh": "副本；复制品"
      },
      {
        "word": "complicate",
        "zh": "使变复杂"
      },
      {
        "word": "implicate",
        "zh": "牵涉卷入"
      },
      {
        "word": "supplicate",
        "zh": "哀求恳请"
      }
    ],
    "semantic_confusables": [
      {
        "word": "duplicate",
        "zh": "具有同等效力的副本"
      },
      {
        "word": "carbon copy",
        "zh": "复写纸底单"
      },
      {
        "word": "replica",
        "zh": "高精复刻工艺品"
      },
      {
        "word": "counterpart",
        "zh": "对应对等签署文本"
      }
    ],
    "notes": "【搭配考点】in duplicate 一式两份；original and duplicate 正本与副本；【形近辨析】词根-plic-（折叠）：duplicate (双重折叠/副本)，complicate (纠缠复杂)，implicate (卷入牵扯)，supplicate (屈膝恳求)；【近义辨析】duplicate 专指与原件具有相同内容和效力的复本副本，replica 侧重对雕塑模型或名表的仿真复刻实物，carbon copy 仅指印蓝纸复写的底单，counterpart 专指双边合同中双方各自持有的对等签署文本。",
    "level": "CET-4/BEC",
    "phonetic": "/'dju:plikət; 'dju:plikeit/",
    "zh": "副本; 复制品; 两倍"
  },
  "effect": {
    "word": "effect",
    "translation": "履行; 实行; 产生效果",
    "cloze": {
      "sentence": "The seller must ______ shipment on board the designated vessel before the letter of credit expires.",
      "translation": "卖方必须在信用证期满失效前，在指定轮船上履行装运出单。"
    },
    "form_confusables": [
      {
        "word": "effect",
        "zh": "履行实行；效果"
      },
      {
        "word": "affect",
        "zh": "影响；感动"
      },
      {
        "word": "defect",
        "zh": "缺陷瑕疵；叛逃"
      },
      {
        "word": "infect",
        "zh": "传染感染"
      }
    ],
    "semantic_confusables": [
      {
        "word": "effect",
        "zh": "履行促成 (公文固定搭配)"
      },
      {
        "word": "execute",
        "zh": "走完法律程序执行"
      },
      {
        "word": "implement",
        "zh": "贯彻实施政策"
      },
      {
        "word": "perform",
        "zh": "履约践行义务"
      }
    ],
    "notes": "【搭配考点】effect shipment / insurance / payment 履行装运/投保/付款（高规格书面商务动词）；【形近辨析】effect (动词：促成达成；名词：效果)，affect (动词：侵袭影响)，defect (瑕疵缺陷/变节)，infect (细菌感染)；【近义辨析】effect 作为动词专用于公文固定搭配（如 effect payment / shipment），强调以法定动作实际促使该项事务落地达成，execute 侧重走完法律程序签字盖章或实施，perform 强调履行合同义务全过程。",
    "level": "CET-4/BEC",
    "phonetic": "/i'fekt/",
    "zh": "履行; 实行; 产生效果"
  },
  "book": {
    "word": "book",
    "translation": "预订; 订舱; 记账",
    "cloze": {
      "sentence": "The freight forwarding agency managed to ______ twenty twenty-foot shipping containers on the next sailing.",
      "translation": "货运代理公司成功在下一班轮上预订到了20个20英尺集装箱舱位。"
    },
    "form_confusables": [
      {
        "word": "book",
        "zh": "预订订舱；书籍"
      },
      {
        "word": "brook",
        "zh": "容忍容受；小溪"
      },
      {
        "word": "boom",
        "zh": "暴涨繁荣"
      },
      {
        "word": "hook",
        "zh": "钩住；挂钩"
      }
    ],
    "semantic_confusables": [
      {
        "word": "book",
        "zh": "预订锁定运输配额 (订舱)"
      },
      {
        "word": "reserve",
        "zh": "保留预留席位"
      },
      {
        "word": "secure",
        "zh": "抢先争得锁定"
      },
      {
        "word": "register",
        "zh": "注册登记备案"
      }
    ],
    "notes": "【搭配考点】book shipping space / cargo 预订货运舱位（订舱）；【形近辨析】brook (容忍经受)，boom (商业暴涨繁荣)，hook (勾住)；【近义辨析】book 国际物流与客运行业专有词汇指买卖双方正式预约运力排期并锁定配额，reserve 强调让对方特意留出空位或席位以待确认，secure 强调在激烈的争夺中抢先锁定资源，register 侧重在册簿上记录备案登记。",
    "level": "CET-4/BEC",
    "phonetic": "/buk/",
    "zh": "预订; 订舱; 记账"
  },
  "upon receipt of": {
    "word": "upon receipt of",
    "translation": "一经收到; 在收到...之时",
    "cloze": {
      "sentence": "We will release the original bill of lading immediately ______ receipt of your bank telegraphic transfer.",
      "translation": "一经收到贵方的银行电汇凭证，我们将立即放行正本海运提单。"
    },
    "form_confusables": [
      {
        "word": "upon receipt of",
        "zh": "一经收到某物之时"
      },
      {
        "word": "upon deceit of",
        "zh": "受欺骗"
      },
      {
        "word": "upon conceit of",
        "zh": "出于自负"
      },
      {
        "word": "upon regret of",
        "zh": "出于懊悔"
      }
    ],
    "semantic_confusables": [
      {
        "word": "upon receipt of",
        "zh": "一俟收到即刻 (触发后续动作的节点)"
      },
      {
        "word": "upon arrival of",
        "zh": "一经到达"
      },
      {
        "word": "immediately after receiving",
        "zh": "刚一收到之后"
      },
      {
        "word": "subject to receiving",
        "zh": "以收到为前提"
      }
    ],
    "notes": "【搭配考点】upon receipt of the L/C / documents / remittance 一俟收到信用证/单据/汇款即...（外贸极具时效性的承兑表达）；【形近辨析】receipt (收到/收据)，deceit (欺诈)，conceit (骄傲自大)；【近义辨析】upon receipt of 是书面公文表达“在收到某文件的那个确切物理时间节点触发下一步动作”的标准规范，immediately after 偏向口语，subject to receiving 侧重将收到作为前提条件约束。",
    "level": "CET-4/BEC",
    "phonetic": "/书信用语/",
    "zh": "一经收到; 在收到...之时"
  },
  "herewith": {
    "word": "herewith",
    "translation": "随函; 特此; 随此",
    "cloze": {
      "sentence": "We hand you ______ our invoice in duplicate, together with the clean shipping order.",
      "translation": "随此公函，我们将发票一式两份及清洁装运单据一并奉上。"
    },
    "form_confusables": [
      {
        "word": "herewith",
        "zh": "随函；特此"
      },
      {
        "word": "therewith",
        "zh": "随之；与此相伴"
      },
      {
        "word": "wherewith",
        "zh": "以此；用以"
      },
      {
        "word": "forthwith",
        "zh": "立刻；即刻"
      }
    ],
    "semantic_confusables": [
      {
        "word": "herewith",
        "zh": "随本信函附上 (公函雅语)"
      },
      {
        "word": "enclosed",
        "zh": "装入信封随附的"
      },
      {
        "word": "attached",
        "zh": "随邮件附上的"
      },
      {
        "word": "herein",
        "zh": "在本文条款之内"
      }
    ],
    "notes": "【搭配考点】enclose/hand you herewith 随函奉上（古典庄重商务用语）；【形近辨析】herewith (随函特此)，therewith (随其后)，wherewith (凭以)，forthwith (立刻即刻)；【近义辨析】herewith 是传统英伦商业公函及外交文书中表达“伴随本纸信函附带递交”的正式副词，enclosed 偏向装入同一信封的物理状态，attached 偏向现代电子邮件电子附件，herein 侧重指涉本合同正文字句之内。",
    "level": "CET-4/BEC",
    "phonetic": "/,hiə'wið/",
    "zh": "随函; 特此; 随此"
  },
  "turn out": {
    "word": "turn out",
    "translation": "结果证明是; 生产出; 制造",
    "cloze": {
      "sentence": "If the first production run does not ______ out as expected, the factory must retool at its own expense.",
      "translation": "如果首批试生产的结果未能如预期那样合格，工厂必须自费重新改装模具。"
    },
    "form_confusables": [
      {
        "word": "turn out",
        "zh": "结果证明是；生产制造"
      },
      {
        "word": "turn in",
        "zh": "上交归还"
      },
      {
        "word": "turn down",
        "zh": "拒绝；调小"
      },
      {
        "word": "turn off",
        "zh": "关停关闭"
      }
    ],
    "semantic_confusables": [
      {
        "word": "turn out",
        "zh": "最终结果显现为"
      },
      {
        "word": "prove to be",
        "zh": "确凿被证实是"
      },
      {
        "word": "yield",
        "zh": "物理产出产品/效益"
      },
      {
        "word": "culminate",
        "zh": "最终演变达到顶点"
      }
    ],
    "notes": "【搭配考点】turn out to be / turn out well 结果证明是/进展顺利；【形近辨析】turn down (拒绝要约/关小)，turn in (上缴)，turn up (出现调大)；【近义辨析】turn out 带有悬念揭晓后“事实最终显露为某种状态”的动态演变感，prove to be 强调通过严谨的证据检验推翻了怀疑证实了真实性，yield 侧重物理上生产出农作物或产生利润率。",
    "level": "CET-4/BEC",
    "phonetic": "/口语/",
    "zh": "结果证明是; 生产出; 制造"
  },
  "countersign": {
    "word": "countersign",
    "translation": "副署; 会签; 连署",
    "cloze": {
      "sentence": "Please ______ the sales contract and airmail one copy back to our headquarters.",
      "translation": "请在销售合同上副署会签，并将其中一份航空邮寄回我方总部。"
    },
    "form_confusables": [
      {
        "word": "countersign",
        "zh": "副署；会签"
      },
      {
        "word": "counterfeit",
        "zh": "伪造仿冒"
      },
      {
        "word": "counterbalance",
        "zh": "抗衡抵消"
      },
      {
        "word": "countermand",
        "zh": "撤回取消命令"
      }
    ],
    "semantic_confusables": [
      {
        "word": "countersign",
        "zh": "会签副署 (并列签名使之生效)"
      },
      {
        "word": "endorse",
        "zh": "票据背面背书转让"
      },
      {
        "word": "sign jointly",
        "zh": "共同联名签署"
      },
      {
        "word": "ratify",
        "zh": "批准追认条约"
      }
    ],
    "notes": "【搭配考点】countersign the contract / agreement 双方会签副署（单方签字不足以产生完整合同拘束力）；【形近辨析】counterfeit (假冒伪造)，counterbalance (平衡抗衡)，countermand (撤回取消指令)；【近义辨析】countersign 专指在已有第一签署人签字的基础上，由法定第二方或上级官员在旁并列签名以使其正式生效（副署），endorse 专指在票据背面背书转让，ratify 专指最高国家权力机关对条约进行法律追认。",
    "level": "CET-4/BEC",
    "phonetic": "/'kauntə,sain/",
    "zh": "副署; 会签; 连署"
  },
  "find a good market": {
    "word": "find a good market",
    "translation": "畅销; 销路好",
    "cloze": {
      "sentence": "Given the superior craftsmanship, we are certain these wool rugs will ______ a good market in Scandinavia.",
      "translation": "鉴于精湛的工艺，我们确信这些羊毛地毯在斯堪的纳维亚半岛定能打开大好销路。"
    },
    "form_confusables": [
      {
        "word": "find a good market",
        "zh": "销路好；很有市场"
      },
      {
        "word": "find a good partner",
        "zh": "找到好伙伴"
      },
      {
        "word": "find a good method",
        "zh": "找到好方法"
      },
      {
        "word": "fix a good price",
        "zh": "确定好价格"
      }
    ],
    "semantic_confusables": [
      {
        "word": "find a good market",
        "zh": "极具市场潜力销路广阔"
      },
      {
        "word": "sell briskly",
        "zh": "销售极为旺盛火爆"
      },
      {
        "word": "enjoy good sales",
        "zh": "销量喜人"
      },
      {
        "word": "be in high demand",
        "zh": "市场需求极高供不应求"
      }
    ],
    "notes": "【搭配考点】find a ready/good market for goods 为货物找到顺畅/极佳的销路；【形近辨析】market (市场)，partner (伙伴)，method (方法)；【近义辨析】find a good market 从产品匹配市场供求角度表达“该产品在此地区极具市场潜力与畅销前景”，sell briskly 侧重在收银柜台上商品流转如飞的快销状态，be in high demand 侧重买方争先恐后求购供不应求。",
    "level": "CET-4/BEC",
    "phonetic": "/find a good market/",
    "zh": "畅销; 销路好"
  },
  "stock": {
    "word": "stock",
    "translation": "现货库存; 备货; 股票",
    "cloze": {
      "sentence": "Our warehouse currently holds adequate ______ to fulfill your orders for the entire upcoming season.",
      "translation": "我们的物流仓库目前备有充足的现货库存，足以满足贵方整个下一季度的订单需求。"
    },
    "form_confusables": [
      {
        "word": "stock",
        "zh": "现货库存；股票"
      },
      {
        "word": "stack",
        "zh": "堆叠；堆垛"
      },
      {
        "word": "stuck",
        "zh": "卡住的；动弹不得的"
      },
      {
        "word": "stalk",
        "zh": "潜行追踪；茎秆"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stock",
        "zh": "实体可调拨现货"
      },
      {
        "word": "inventory",
        "zh": "会计盘点存货总额"
      },
      {
        "word": "reserve",
        "zh": "战略储备物资"
      },
      {
        "word": "supply",
        "zh": "供给物资储备"
      }
    ],
    "notes": "【搭配考点】in stock / out of stock 有现货/断货售罄；take stock 盘点库存；【形近辨析】stack (整齐码放的堆垛)，stuck (动词 stick 过去式，被困卡死)，stalk (跟踪尾随)；【近义辨析】stock 强调随时可以拿来发货交付的实体库存现货，inventory 会计上专指全部原材料、在制品和产成品的资产存货总值，reserve 专指未雨绸缪应对紧急危机的战略储备粮油，supply 泛指各类日用供应品。",
    "level": "CET-4/BEC",
    "phonetic": "/stɔk/",
    "zh": "现货库存; 备货; 股票"
  },
  "see to": {
    "word": "see to",
    "translation": "负责照料; 确保办理",
    "cloze": {
      "sentence": "Rest assured that our logistics team will ______ to it that the containers are loaded with extreme care.",
      "translation": "请贵方放心，我们的物流团队一定会亲自督办，确保集装箱以极高标准细致装载。"
    },
    "form_confusables": [
      {
        "word": "see to",
        "zh": "负责照料；确保办理"
      },
      {
        "word": "set to",
        "zh": "着手开干"
      },
      {
        "word": "sit to",
        "zh": "坐下"
      },
      {
        "word": "sew to",
        "zh": "缝合于"
      }
    ],
    "semantic_confusables": [
      {
        "word": "see to",
        "zh": "亲自督办把关 (极具担当)"
      },
      {
        "word": "ensure",
        "zh": "客观确保发生"
      },
      {
        "word": "take care of",
        "zh": "照顾料理事务"
      },
      {
        "word": "attend to",
        "zh": "专心处理日常琐事"
      }
    ],
    "notes": "【搭配考点】see to it that... 确保/负责办理（it 为形式宾语，后接 that 从句）；【形近辨析】set to (劲头十足地着手开干)，sew to (针线缝合)；【近义辨析】see to it that 是商务口语和书面中极具担当力的承诺短语，指说话人亲自盯紧把关绝不出纰漏，ensure 侧重客观规律上保证发生，attend to 侧重在日常工作中接待客户或处置零散事务。",
    "level": "CET-4/BEC",
    "phonetic": "/see to/",
    "zh": "负责照料; 确保办理"
  },
  "dispatch": {
    "word": "dispatch",
    "translation": "分派; 发送; 迅捷发运",
    "cloze": {
      "sentence": "Our plant is working overtime to ______ the emergency replacement units within 24 hours.",
      "translation": "我们工厂正在加班加点作业，力争在24小时之内将应急替换配件发运发出。"
    },
    "form_confusables": [
      {
        "word": "dispatch",
        "zh": "迅速发运；派遣；急件"
      },
      {
        "word": "attach",
        "zh": "附上；贴上"
      },
      {
        "word": "detach",
        "zh": "分离；拆卸"
      },
      {
        "word": "patch",
        "zh": "打补丁；修补"
      }
    ],
    "semantic_confusables": [
      {
        "word": "dispatch",
        "zh": "迅捷发运特遣 (强调极速使命)"
      },
      {
        "word": "ship",
        "zh": "装船海运"
      },
      {
        "word": "send off",
        "zh": "寄出发出"
      },
      {
        "word": "forward",
        "zh": "转寄转交"
      }
    ],
    "notes": "【搭配考点】dispatch goods / an urgent message 快速发运货物/发送急件公文；【形近辨析】attach (附上)，detach (分离拆卸)，patch (打补丁)；【近义辨析】dispatch 强调以极高的速度和明确的特定使命将人、信件或货物迅速派送发出，ship 专指装上船运工具海运，forward 侧重将别人寄来的邮件或过境货物转交至下一站。",
    "level": "CET-4/BEC",
    "phonetic": "/dis'pætʃ/",
    "zh": "分派; 发送; 迅捷发运"
  },
  "stipulation": {
    "word": "stipulation",
    "translation": "契约条款; 规定",
    "cloze": {
      "sentence": "The delivery deadline is an essential ______ of the contract, and any delay will result in liquidation damages.",
      "translation": "交货截止期是合同中一项不可或缺的核心约定条款，任何迟延都将招致违约金索赔。"
    },
    "form_confusables": [
      {
        "word": "stipulation",
        "zh": "契约条款；明文规定"
      },
      {
        "word": "stimulation",
        "zh": "刺激；激励"
      },
      {
        "word": "simulation",
        "zh": "模拟；仿真"
      },
      {
        "word": "speculation",
        "zh": "投机；推测"
      }
    ],
    "semantic_confusables": [
      {
        "word": "stipulation",
        "zh": "合同硬性约定条款"
      },
      {
        "word": "clause",
        "zh": "合同条目款项"
      },
      {
        "word": "provision",
        "zh": "法律法规规定准则"
      },
      {
        "word": "term",
        "zh": "交易权利义务条件"
      }
    ],
    "notes": "【搭配考点】as per the stipulation in the agreement 遵照协议中的明文规定；【形近辨析】stimulation (外界刺激激励)，simulation (虚拟仿真)，speculation (投机倒把/主观推测)；【近义辨析】stipulation 强调谈判双方在合同中经过字斟句酌写下的硬性约束条件，clause 侧重构成合同文本的某一条目段落，provision 偏向法规制定的规范准则，term 侧重双方商业交换的核心权利义务。",
    "level": "CET-4/BEC",
    "phonetic": "/,stipju'leiʃən/",
    "zh": "契约条款; 规定"
  },
  "have the pleasure of": {
    "word": "have the pleasure of",
    "translation": "荣幸地做某事",
    "cloze": {
      "sentence": "We ______ the pleasure of presenting our latest line of sports footwear for your appraisal.",
      "translation": "我们极感荣幸地呈上我们最新款的运动鞋系列产品供贵方评鉴。"
    },
    "form_confusables": [
      {
        "word": "have the pleasure of",
        "zh": "荣幸地做某事"
      },
      {
        "word": "have the pressure of",
        "zh": "承担...的压力"
      },
      {
        "word": "have the leisure of",
        "zh": "享有...的闲暇"
      },
      {
        "word": "have the measure of",
        "zh": "摸清某人底细"
      }
    ],
    "semantic_confusables": [
      {
        "word": "have the pleasure of",
        "zh": "极感荣幸欢欣 (传统商业礼节)"
      },
      {
        "word": "be honored to",
        "zh": "深感莫大荣耀"
      },
      {
        "word": "be delighted to",
        "zh": "非常高兴乐意"
      },
      {
        "word": "take pride in",
        "zh": "以...为骄傲自豪"
      }
    ],
    "notes": "【搭配考点】have the pleasure of doing sth 传统正式商业书信中的典雅敬语，引出向对方送呈样本或好消息；【形近辨析】pressure (压力)，leisure (闲暇游憩)，measure (度量措施)；【近义辨析】have the pleasure of 融合了“商业上的喜悦与彬彬有礼的荣幸感”，be honored to 更加突出对方地位崇高带来的莫大荣耀，be delighted to 偏向个人私交欢欣，take pride in 侧重对自己取得的成就感到自豪骄傲。",
    "level": "CET-4/BEC",
    "phonetic": "/have the pleasure of/",
    "zh": "荣幸地做某事"
  },
  "duplicate order": {
    "word": "duplicate order",
    "translation": "翻单; 重复订购",
    "cloze": {
      "sentence": "Satisfied with the rapid sale of the trial shipment, the importer placed a ______ order for 3,000 units.",
      "translation": "因对试销货物的迅速售罄感到满意，进口商又追加了一份3000件的翻单（重复订购）。"
    },
    "form_confusables": [
      {
        "word": "duplicate order",
        "zh": "翻单；重复订购"
      },
      {
        "word": "deliberate order",
        "zh": "审慎周密的订单"
      },
      {
        "word": "delicate order",
        "zh": "微妙精巧的订单"
      },
      {
        "word": "desolate order",
        "zh": "凄凉荒芜的订单"
      }
    ],
    "semantic_confusables": [
      {
        "word": "duplicate order",
        "zh": "原样重复采购 (翻单)"
      },
      {
        "word": "repeat order",
        "zh": "追单/再订购"
      },
      {
        "word": "reorder",
        "zh": "缺货补充重订"
      },
      {
        "word": "follow-up order",
        "zh": "后续追加订单"
      }
    ],
    "notes": "【搭配考点】place a duplicate/repeat order 下翻单（按原样重复订货）；【形近辨析】deliberate (深思熟虑的/故意的)，delicate (精细易碎的)，desolate (荒凉凄清的)；【近义辨析】duplicate order 与 repeat order 是商业翻单核心术语，专指买方对之前采购的规格完全满意因而在不改动任何工艺细节的前提下原样再次下达相同订单，reorder 偏向零售商因货架缺货发起的库存补货流程，follow-up order 泛指后续跟进的相关采购。",
    "level": "CET-4/BEC",
    "phonetic": "/duplicate order/",
    "zh": "翻单; 重复订购"
  },
  "duly": {
    "word": "duly",
    "translation": "及时地; 适当地; 按时",
    "cloze": {
      "sentence": "We confirm that the signed contract and remittance advice have been ______ received and registered.",
      "translation": "我们确认，经签署的合同及汇款通知书均已如期妥收并登记入册。"
    },
    "form_confusables": [
      {
        "word": "duly",
        "zh": "如期地；正式妥善地"
      },
      {
        "word": "dully",
        "zh": "迟钝地；呆滞乏味地"
      },
      {
        "word": "duty",
        "zh": "责任；关税"
      },
      {
        "word": "daily",
        "zh": "每日的；日常地"
      }
    ],
    "semantic_confusables": [
      {
        "word": "duly",
        "zh": "正式如期妥善地 (法律公文专用)"
      },
      {
        "word": "properly",
        "zh": "合乎规范标准地"
      },
      {
        "word": "punctually",
        "zh": "分秒不差准时地"
      },
      {
        "word": "formally",
        "zh": "正式合乎仪式规程地"
      }
    ],
    "notes": "【搭配考点】duly signed / received 正式签署/如期妥收（公文与契约标准副词）；【形近辨析】duly (正式如期地)，dully (迟钝呆滞地)，duty (职责税收)；【近义辨析】duly 专用于商业法律语体指在适当的时间按照法定形式正规完成（duly executed），properly 侧重在技术或规范上准确无误，punctually 强调钟表时间分秒不差，formally 侧重仪式感。",
    "level": "CET-4/BEC",
    "phonetic": "/dju:li; 'du:li/",
    "zh": "及时地; 适当地; 按时"
  },
  "at one's earliest convenience": {
    "word": "at one's earliest convenience",
    "translation": "尽早; 在方便时尽早",
    "cloze": {
      "sentence": "Please examine the enclosed sample and let us know your decision at your earliest ______.",
      "translation": "请查验随附样品，并在贵方方便时尽早告知决定。"
    },
    "form_confusables": [
      {
        "word": "at one's earliest convenience",
        "zh": "在某人方便时尽早"
      },
      {
        "word": "at one's earliest confidence",
        "zh": "在早期信任中"
      },
      {
        "word": "at one's earliest conveyance",
        "zh": "在最早运送时"
      },
      {
        "word": "at one's earliest conscience",
        "zh": "出于良心"
      }
    ],
    "semantic_confusables": [
      {
        "word": "at one's earliest convenience",
        "zh": "在贵方方便时尽速 (典雅商务催请)"
      },
      {
        "word": "as soon as possible",
        "zh": "尽快 (直白平实急切)"
      },
      {
        "word": "at the earliest date",
        "zh": "在最早的日期"
      },
      {
        "word": "promptly",
        "zh": "迅速立即无停顿"
      }
    ],
    "notes": "【搭配考点】reply at your earliest convenience 在贵方方便时尽早回复（比 ASAP 优雅得多的传统商务催促）；【形近辨析】convenience (方便便利)，confidence (信心机密)，conveyance (运输转让)，conscience (良心良知)；【近义辨析】at one's earliest convenience 是兼顾催促紧迫感与给予对方充足尊重的典范措辞，as soon as possible (ASAP) 语气更生硬急迫，promptly 强调没有丝毫停顿的即刻动作。",
    "level": "CET-4/BEC",
    "phonetic": "/at one's earliest convenience/",
    "zh": "尽早; 在方便时尽早"
  },
  "available steamer": {
    "word": "available steamer",
    "translation": "适航船只; 有空舱位的轮船",
    "cloze": {
      "sentence": "The exporter promised to book shipping space on the first ______ steamer bound for Hamburg.",
      "translation": "出口商承诺将在开往汉堡的第一班有空舱位的轮船上预订舱位。"
    },
    "form_confusables": [
      {
        "word": "available steamer",
        "zh": "有空舱位的适航轮船"
      },
      {
        "word": "adaptable stroller",
        "zh": "折叠婴儿车"
      },
      {
        "word": "agreeable settler",
        "zh": "随和定居者"
      },
      {
        "word": "avoidable stammer",
        "zh": "可避免的口吃"
      }
    ],
    "semantic_confusables": [
      {
        "word": "available steamer",
        "zh": "有空舱位的适航货轮"
      },
      {
        "word": "first vessel",
        "zh": "首航轮船"
      },
      {
        "word": "carrier",
        "zh": "运输承运人船舶"
      },
      {
        "word": "liner",
        "zh": "定期班轮"
      }
    ],
    "notes": "【搭配考点】by the first available steamer 搭乘第一班有舱位的适航轮船（老派外贸海运经典句式）；【形近辨析】steamer (轮船)，stroller (婴儿车)，settler (移民)，stammer (口吃)；【近义辨析】available steamer 强调物理上有开往目的港的适航船期且尚有剩余装载舱位，first vessel 泛指第一艘出现的船只无论有无舱位，liner 专指按固定船期表挂港运行的定期班轮。",
    "level": "CET-4/BEC",
    "phonetic": "/available steamer/",
    "zh": "适航船只; 有空舱位的轮船"
  },
  "instruct": {
    "word": "instruct",
    "translation": "通知; 命令; 指示",
    "cloze": {
      "sentence": "We have ______ our forwarding agents to arrange immediate customs inspection at the wharf.",
      "translation": "我们已指示货运代理人在码头立即安排海关验货查验。"
    },
    "form_confusables": [
      {
        "word": "instruct",
        "zh": "指示；命令；讲授"
      },
      {
        "word": "construct",
        "zh": "建造；构建"
      },
      {
        "word": "obstruct",
        "zh": "阻塞；阻碍"
      },
      {
        "word": "destruct",
        "zh": "自毁；毁灭破坏"
      }
    ],
    "semantic_confusables": [
      {
        "word": "instruct",
        "zh": "正式下达业务指示"
      },
      {
        "word": "order",
        "zh": "强制命令；下单采购"
      },
      {
        "word": "direct",
        "zh": "指导大方向引领"
      },
      {
        "word": "mandate",
        "zh": "官方授权强制命令"
      }
    ],
    "notes": "【搭配考点】instruct sb to do sth 正式指示某人做某事；【形近辨析】词根-struct-（建造/结构）：instruct (向内传授/指示)，construct (一起建造)，obstruct (横向阻碍)，destruct (拆毁破坏)；【近义辨析】instruct 侧重上级对下级或委托人对代理人发出明确具体的业务办理指令，order 带有生硬的强制命令感，direct 侧重指引大方向或指导行动，mandate 专指宪法、法律或选民赋予的强制法定授权。",
    "level": "CET-4/BEC",
    "phonetic": "/in'strʌkt/",
    "zh": "通知; 命令; 指示"
  },
  "lot": {
    "word": "lot",
    "translation": "一批; 货批; 地块",
    "cloze": {
      "sentence": "The quality inspector rejected the entire ______ because moisture levels exceeded contractual limits.",
      "translation": "由于含水率超出合同约定上限，质检员拒收了整批货物。"
    },
    "form_confusables": [
      {
        "word": "lot",
        "zh": "货批；批次；地块"
      },
      {
        "word": "loot",
        "zh": "掠夺；赃物"
      },
      {
        "word": "rot",
        "zh": "腐烂；腐朽"
      },
      {
        "word": "blot",
        "zh": "墨水污迹；污点"
      }
    ],
    "semantic_confusables": [
      {
        "word": "lot",
        "zh": "检验/拍卖划分的一整批货"
      },
      {
        "word": "batch",
        "zh": "同炉生产批次"
      },
      {
        "word": "consignment",
        "zh": "托运交割批次"
      },
      {
        "word": "cargo",
        "zh": "船运大宗散装货"
      }
    ],
    "notes": "【搭配考点】in one lot 一次性整批发运；lot number 货批号/批次号；【形近辨析】loot (掠夺赃物)，blot (墨水污迹)，rot (腐烂衰败)；【近义辨析】lot 专指在拍卖、采购或质量检验中划定为同一单元的整批货物（强调交易或抽样单元），batch 侧重在同一反应釜或生产周期中一炉产出的批次，consignment 侧重受委托承运交割的一宗货，cargo 专指船运大宗散货。",
    "level": "CET-4/BEC",
    "phonetic": "/lɔt/",
    "zh": "一批; 货批; 地块"
  },
  "payment": {
    "word": "payment",
    "translation": "支付; 付款",
    "cloze": {
      "sentence": "The seller requires ______ by confirmed, irrevocable letter of credit payable at sight.",
      "translation": "卖方要求以不可撤销即期保兑信用证进行货款支付。"
    },
    "form_confusables": [
      {
        "word": "payment",
        "zh": "付款；支付"
      },
      {
        "word": "pigment",
        "zh": "色素；颜料"
      },
      {
        "word": "pavement",
        "zh": "路面；人行道"
      },
      {
        "word": "parliament",
        "zh": "国会；议会"
      }
    ],
    "semantic_confusables": [
      {
        "word": "payment",
        "zh": "履行价款支付 (总称)"
      },
      {
        "word": "settlement",
        "zh": "清账结算对账"
      },
      {
        "word": "remittance",
        "zh": "银行跨境汇款"
      },
      {
        "word": "reimbursement",
        "zh": "垫付资金实报实销"
      }
    ],
    "notes": "【搭配考点】terms of payment / make payment 付款方式/履行付款；【形近辨析】pigment (颜料)，pavement (铺路/人行道)，parliament (议会)；【近义辨析】payment 是履约交付对价金钱的总称，settlement 侧重双方对账完毕消灭债权债务的账目清算，remittance 侧重通过银行网络将资金汇出，reimbursement 专指对先行垫付资金的事后报销。",
    "level": "CET-4/BEC",
    "phonetic": "/'peimənt/",
    "zh": "支付; 付款"
  },
  "letter of credit": {
    "word": "letter of credit",
    "translation": "信用证(L/C)",
    "cloze": {
      "sentence": "To safeguard payment, the manufacturer insists on receiving an irrevocable ______ of credit before starting production.",
      "translation": "为保障回款安全，制造商坚持在收到不可撤销信用证后方才开工投产。"
    },
    "form_confusables": [
      {
        "word": "letter of credit",
        "zh": "信用证 (L/C)"
      },
      {
        "word": "letter of intent",
        "zh": "意向书 (LOI)"
      },
      {
        "word": "letter of attorney",
        "zh": "委托授权书"
      },
      {
        "word": "letter of indemnity",
        "zh": "赔偿保证书/保函"
      }
    ],
    "semantic_confusables": [
      {
        "word": "letter of credit",
        "zh": "银行跟单信用证 (银行第一性信用)"
      },
      {
        "word": "bank guarantee",
        "zh": "银行保函 (担保连带责任)"
      },
      {
        "word": "documentary collection",
        "zh": "商业托收 (D/P, D/A)"
      },
      {
        "word": "telegraphic transfer",
        "zh": "电汇 (T/T 商业信用)"
      }
    ],
    "notes": "【搭配考点】open/issue an irrevocable letter of credit 开立不可撤销信用证（银行信用取代商业信用）；【形近辨析】letter of credit (L/C信用证)，letter of intent (LOI意向书)，letter of indemnity (LOI保函)，letter of attorney (委托书)；【近义辨析】letter of credit 是开证行以自身银行信用向受益人承担第一付款责任的法律凭证，bank guarantee 偏向第三方连带担保责任，collection 属于商业信用托收，T/T 纯属顺汇汇款。",
    "level": "CET-4/BEC",
    "phonetic": "/略作 L／C/",
    "zh": "信用证(L/C)"
  },
  "apply for": {
    "word": "apply for",
    "translation": "申请; 申办",
    "cloze": {
      "sentence": "The importer must ______ for a foreign exchange quota before opening the commercial letter of credit.",
      "translation": "进口商在开立商业信用证之前，必须先申请外汇调剂配额。"
    },
    "form_confusables": [
      {
        "word": "apply for",
        "zh": "申请；申办"
      },
      {
        "word": "supply for",
        "zh": "向...供给"
      },
      {
        "word": "reply for",
        "zh": "代表...答复"
      },
      {
        "word": "comply for",
        "zh": "错误搭配"
      }
    ],
    "semantic_confusables": [
      {
        "word": "apply for",
        "zh": "按章程向官方正规申请"
      },
      {
        "word": "petition for",
        "zh": "向政府请愿诉求"
      },
      {
        "word": "request",
        "zh": "商务对等恳请"
      },
      {
        "word": "solicit",
        "zh": "主动上门拉拢征求"
      }
    ],
    "notes": "【搭配考点】apply for an import license / a loan 申请进口许可证/申请贷款；【形近辨析】apply for (申请)，supply for (供给)，reply for (代表...答复)；【近义辨析】apply for 强调按照规章制度走正规流程填表向行政机构提交申请，petition for 侧重公众向政府递交联名请愿书，request 侧重日常人际或商业对等请求，solicit 强调主动上门游说拉业务或募捐。",
    "level": "CET-4/BEC",
    "phonetic": "/apply for/",
    "zh": "申请; 申办"
  },
  "issuance": {
    "word": "issuance",
    "translation": "签发; 发行; 开立",
    "cloze": {
      "sentence": "The opening bank charged a 0.15% commission for the ______ of the commercial letter of credit.",
      "translation": "开证行对开立该笔商业信用证收取了0.15%的手续费。"
    },
    "form_confusables": [
      {
        "word": "issuance",
        "zh": "签发；开立；发行"
      },
      {
        "word": "endurance",
        "zh": "忍耐力；持久力"
      },
      {
        "word": "insurance",
        "zh": "保险；保费"
      },
      {
        "word": "ignorance",
        "zh": "无知；忽视"
      }
    ],
    "semantic_confusables": [
      {
        "word": "issuance",
        "zh": "官方出具有效证件票据"
      },
      {
        "word": "opening",
        "zh": "信用证立户开立"
      },
      {
        "word": "release",
        "zh": "公开发布放行"
      },
      {
        "word": "dispensation",
        "zh": "特权豁免分配"
      }
    ],
    "notes": "【搭配考点】issuance of an L/C / certificate / shares 签发信用证/出具证书/发行股票；【形近辨析】endurance (坚韧耐力)，insurance (保险)，issuance (签发出具)；【近义辨析】issuance 强调官方权威机构出具有法律效力的正式证券、单据或指令（如股票、信用证），opening 商业上多口语化用于信用证开户立户（opening of L/C），release 侧重公开发布新闻或放行扣押货物，dispensation 侧重宗教或特权豁免。",
    "level": "CET-4/BEC",
    "phonetic": "/'iʃju:əns; 'isju:-/",
    "zh": "签发; 发行; 开立"
  },
  "deposit": {
    "word": "deposit",
    "translation": "保证金; 定金; 存款",
    "cloze": {
      "sentence": "A 30% advance ______ must be wired to our account before manufacturing commences.",
      "translation": "在启动制造投产之前，必须将30%的预付定金电汇至我方账户。"
    },
    "form_confusables": [
      {
        "word": "deposit",
        "zh": "定金；保证金；存款"
      },
      {
        "word": "deficit",
        "zh": "赤字；亏损"
      },
      {
        "word": "deplete",
        "zh": "耗尽；枯竭"
      },
      {
        "word": "deploy",
        "zh": "部署；调动"
      }
    ],
    "semantic_confusables": [
      {
        "word": "deposit",
        "zh": "履约锁定预付定金"
      },
      {
        "word": "down payment",
        "zh": "大额采购按揭首付款"
      },
      {
        "word": "retainer",
        "zh": "聘请顾问预付金"
      },
      {
        "word": "collateral",
        "zh": "银行借贷抵押品"
      }
    ],
    "notes": "【搭配考点】pay a 30% deposit / bank deposit 支付30%定金/银行存款；【形近辨析】deficit (预算财政赤字)，deplete (耗尽资源)，deploy (调兵部署)；【近义辨析】deposit 在买卖合同中特指为锁定供货优先支付的担保定金或押金，down payment 专指大额分期采购中的“首期款（首付款）”，retainer 专指预先支付给律师或顾问团队的聘金，collateral 侧重向银行借款时质押的房产股票等实物抵押品。",
    "level": "CET-4/BEC",
    "phonetic": "/di'pɔzit/",
    "zh": "保证金; 定金; 存款"
  },
  "tie up": {
    "word": "tie up",
    "translation": "束缚占用; 冻结资金",
    "cloze": {
      "sentence": "Holding excessive levels of finished inventory will ______ up valuable working capital.",
      "translation": "持有过量的产成品库存将会占用并冻结宝贵的营运流动资金。"
    },
    "form_confusables": [
      {
        "word": "tie up",
        "zh": "冻结占用资金"
      },
      {
        "word": "take up",
        "zh": "占据时间空间"
      },
      {
        "word": "tune up",
        "zh": "调音；调试检修"
      },
      {
        "word": "tear up",
        "zh": "撕毁条约合同"
      }
    ],
    "semantic_confusables": [
      {
        "word": "tie up",
        "zh": "锁死占用流动资金 (失去周转自由)"
      },
      {
        "word": "lock up",
        "zh": "锁死在固定资产中"
      },
      {
        "word": "freeze",
        "zh": "官方司法强制冻结"
      },
      {
        "word": "absorb",
        "zh": "海绵般持续吸纳吸收"
      }
    ],
    "notes": "【搭配考点】tie up capital / funds 占用锁死资金无法自由周转；【形近辨析】take up (占据空间时间)，tune up (引擎调校)，tear up (撕毁条约)；【近义辨析】tie up 形象生动指资产如同被绳索捆绑住动弹不得无法用于日常生产经营，freeze 专指银行或法院依据法律指令强制冻结账户不得取现，lock up 强调投向了长周期固定资产无法随时变现，absorb 侧重像海绵一样源源不断吸纳资金投入。",
    "level": "CET-4/BEC",
    "phonetic": "/美国英语/",
    "zh": "束缚占用; 冻结资金"
  },
  "banking charges": {
    "word": "banking charges",
    "translation": "银行手续费; 银行杂费",
    "cloze": {
      "sentence": "Unless stipulated otherwise, all ______ charges outside the issuing country are for the beneficiary's account.",
      "translation": "除非合同另有明确约定，开证国以外发生的所有银行手续费均由受益人承担。"
    },
    "form_confusables": [
      {
        "word": "banking charges",
        "zh": "银行手续费及杂费"
      },
      {
        "word": "booking charges",
        "zh": "海运订舱杂费"
      },
      {
        "word": "barking challenges",
        "zh": "无意义混淆搭配"
      },
      {
        "word": "ranking charges",
        "zh": "评级费用"
      }
    ],
    "semantic_confusables": [
      {
        "word": "banking charges",
        "zh": "全流程银行综合杂费"
      },
      {
        "word": "bank commission",
        "zh": "银行提成佣金经手费"
      },
      {
        "word": "transaction fee",
        "zh": "单笔交易转账服务费"
      },
      {
        "word": "collection charges",
        "zh": "托收承兑手续费"
      }
    ],
    "notes": "【搭配考点】banking charges outside/inside 开证行境内/境外的银行手续杂费（外贸经常争议由谁买单）；【形近辨析】booking charges (订舱费)，ranking charges (排名评级费)；【近义辨析】banking charges 统括电汇、审单、议付、开证等全流程银行扣减的各项综合杂费，bank commission 专指银行按金额百分比计提的代办佣金，transaction fee 偏向电子支付网络收取的单笔结算费，collection charges 专指委托托收行收取的劳务费。",
    "level": "CET-4/BEC",
    "phonetic": "/banking charges/",
    "zh": "银行手续费; 银行杂费"
  },
  "monetary policy": {
    "word": "monetary policy",
    "translation": "货币政策",
    "cloze": {
      "sentence": "The central bank tightened its ______ policy by raising interest rates to curb runaway inflation.",
      "translation": "中央银行通过加息收紧货币政策，以遏制失控的通胀。"
    },
    "form_confusables": [
      {
        "word": "monetary policy",
        "zh": "货币政策"
      },
      {
        "word": "military policy",
        "zh": "军事政策"
      },
      {
        "word": "momentary policy",
        "zh": "短暂一时的政策"
      },
      {
        "word": "monetary police",
        "zh": "货币警察 (伪混淆项)"
      }
    ],
    "semantic_confusables": [
      {
        "word": "monetary policy",
        "zh": "央行货币调节政策 (利率/存准)"
      },
      {
        "word": "fiscal policy",
        "zh": "政府财政税收国债政策"
      },
      {
        "word": "macroeconomic regulation",
        "zh": "宏观经济调控"
      },
      {
        "word": "credit control",
        "zh": "商业银行信贷额度管控"
      }
    ],
    "notes": "【搭配考点】tighten / ease monetary policy 紧缩/宽松货币政策（利率与法定存款准备金率）；【形近辨析】monetary (货币金融的)，momentary (瞬间暂时的)，military (军队军事的)；【近义辨析】monetary policy 是中央银行运用利率、公开市场操作等金融手段调节货币供给量的宏观政策，fiscal policy 是财政部通过征税与发债进行国家预算支出的财政政策，credit control 侧重微观层面对商业银行信贷额度的额度窗口指导。",
    "level": "CET-4/BEC",
    "phonetic": "/monetary policy/",
    "zh": "货币政策"
  },
  "documents against acceptance": {
    "word": "documents against acceptance",
    "translation": "承兑交单(D/A)",
    "cloze": {
      "sentence": "Under the ______ against acceptance arrangement, the buyer obtains the title documents by accepting the time bill.",
      "translation": "在承兑交单（D/A）方式下，买方通过承兑远期汇票即可获得物权单据。"
    },
    "form_confusables": [
      {
        "word": "documents against acceptance",
        "zh": "承兑交单 (D/A)"
      },
      {
        "word": "documents against payment",
        "zh": "付款交单 (D/P)"
      },
      {
        "word": "documents against receipt",
        "zh": "非标准贸易术语"
      },
      {
        "word": "agreements against acceptance",
        "zh": "伪混淆搭配"
      }
    ],
    "semantic_confusables": [
      {
        "word": "documents against acceptance",
        "zh": "承兑交单 (凭汇票承兑即放提单)"
      },
      {
        "word": "documents against payment",
        "zh": "付款交单 (见全款方可放提单)"
      },
      {
        "word": "open account",
        "zh": "赊销交易 (O/A 先货后款)"
      },
      {
        "word": "cash against documents",
        "zh": "凭单付现 (CAD)"
      }
    ],
    "notes": "【搭配考点】D/A (Documents against Acceptance) 国际托收核心方式，买方只需在远期汇票上承兑签名即可提走货物（卖方风险极高）；【形近辨析】D/A (承兑交单，凭承兑放单)，D/P (付款交单，凭全款付清放单)；【近义辨析】D/A 属于纯粹依靠买方商业信用的赊销性质托收，买方无需付现仅凭承兑签字即可提走正本提单清关，D/P 则是代收行必须收到真金白银全额款项后方能交单给买方，CAD 侧重货抵目的港凭单付款。",
    "level": "CET-4/BEC",
    "phonetic": "/复数/",
    "zh": "承兑交单(D/A)"
  },
  "involved": {
    "word": "involved",
    "translation": "涉及的; 复杂的; 卷入的",
    "cloze": {
      "sentence": "Due to the complex supply chains ______, cross-border customs audits often take several weeks.",
      "translation": "鉴于所涉及的供应链极其错综复杂，跨境海关稽查往往耗时数周之久。"
    },
    "form_confusables": [
      {
        "word": "involved",
        "zh": "涉及的；卷入的；复杂的"
      },
      {
        "word": "evolved",
        "zh": "进化演变而来的"
      },
      {
        "word": "resolved",
        "zh": "下定决心的；已解决的"
      },
      {
        "word": "dissolved",
        "zh": "溶解的；解体的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "involved",
        "zh": "所涉及包含的 (事物牵涉其中)"
      },
      {
        "word": "implicated",
        "zh": "涉嫌卷入违法丑闻的"
      },
      {
        "word": "intricate",
        "zh": "错综复杂迷宫般的"
      },
      {
        "word": "engaged",
        "zh": "全情从事投身其中的"
      }
    ],
    "notes": "【搭配考点】parties/procedures involved 所涉及的各方/程序（后置定语常见）；【形近辨析】词根-volv-（卷/转）：involved (卷入涉及的)，evolved (演化进化的)，resolved (下决心的/解决的)，dissolved (融化的/解体)；【近义辨析】involved 置于名词后表示“该事项中牵扯或包含在内的”，置于名词前可表示“情节极其繁琐复杂的”，implicated 专指涉嫌贪腐犯罪被牵扯出水面，intricate 强调内部构造像迷宫般精细复杂。",
    "level": "CET-4/BEC",
    "phonetic": "/symbols/",
    "zh": "涉及的; 复杂的; 卷入的"
  },
  "unaccommodating": {
    "word": "unaccommodating",
    "translation": "不通融的; 不协作的; 难通融的",
    "cloze": {
      "sentence": "The customs officer was unusually ______, refusing to allow any amendment to the clerical error on the manifest.",
      "translation": "这位海关官员出奇地难通融，拒绝为舱单上的笔误做任何修改通融。"
    },
    "form_confusables": [
      {
        "word": "unaccommodating",
        "zh": "难通融的；不讲情面的"
      },
      {
        "word": "accommodating",
        "zh": "肯通融的；乐于助人的"
      },
      {
        "word": "accumulating",
        "zh": "不断累积聚积的"
      },
      {
        "word": "uncompromising",
        "zh": "不妥协不让步的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "unaccommodating",
        "zh": "拒绝提供方便变通的"
      },
      {
        "word": "rigid",
        "zh": "死板僵化像铁一样的"
      },
      {
        "word": "inflexible",
        "zh": "缺乏伸缩弹性的"
      },
      {
        "word": "uncooperative",
        "zh": "不予配合协作的"
      }
    ],
    "notes": "【搭配考点】an unaccommodating attitude 不愿通融协作的僵硬态度；【形近辨析】accommodating (和蔼通融随和的)，unaccommodating (否定前缀 un-，死板不讲情面不通融)，accumulate (积累)；【近义辨析】unaccommodating 侧重在人际交往与办事中冷冰冰拒绝行任何举手之劳的方便与变通，rigid 强调制度或规章像钢铁般僵硬不可弯折，inflexible 强调缺乏应对突发变故的弹性伸缩余地，uncooperative 强调消极怠工拒绝协作。",
    "level": "CET-4/BEC",
    "phonetic": "/unaccommodating/",
    "zh": "不通融的; 不协作的; 难通融的"
  },
  "prospect": {
    "word": "prospect",
    "translation": "前景; 期望; 潜在客户",
    "cloze": {
      "sentence": "There is every ______ that Asian textile demand will rebound strongly in the second half of the year.",
      "translation": "亚洲纺织品需求在今年下半年极具强劲反弹的大好前景。"
    },
    "form_confusables": [
      {
        "word": "prospect",
        "zh": "前景；展望；潜在主顾"
      },
      {
        "word": "retrospect",
        "zh": "回顾；回溯"
      },
      {
        "word": "respect",
        "zh": "尊敬；方面"
      },
      {
        "word": "inspect",
        "zh": "视察；检验"
      }
    ],
    "semantic_confusables": [
      {
        "word": "prospect",
        "zh": "未来成功的大好前景希望"
      },
      {
        "word": "outlook",
        "zh": "宏观经济趋势走势展望"
      },
      {
        "word": "forecast",
        "zh": "模型运算数据预测"
      },
      {
        "word": "potential",
        "zh": "潜能潜质"
      }
    ],
    "notes": "【搭配考点】market prospects / good prospects 市场前景/良好期望；【形近辨析】词根-spect-（看）：prospect (向前看/前景期望)，retrospect (向后看/回溯回顾)，inspect (向内看/视察检验)；【近义辨析】prospect 侧重令人振奋期待的未来成功机遇或前景可能性（亦可指有望成交的潜在目标大客户），outlook 偏向宏观经济学家对未来数季度景气度的中性走势展望，forecast 侧重包含模型运算的具体预测数据。",
    "level": "CET-4/BEC",
    "phonetic": "/'prɔspekt/",
    "zh": "前景; 期望; 潜在客户"
  },
  "much as": {
    "word": "much as",
    "translation": "虽然; 尽管",
    "cloze": {
      "sentence": "Much ______ we appreciate your offer, we must decline because the delivery time is far too distant.",
      "translation": "尽管我们非常感激贵方的报盘，但由于交货期实在过于遥远，我们不得不予以婉拒。"
    },
    "form_confusables": [
      {
        "word": "much as",
        "zh": "虽然很想；尽管"
      },
      {
        "word": "much more",
        "zh": "更加；愈发"
      },
      {
        "word": "much less",
        "zh": "更不用说；何况"
      },
      {
        "word": "much so",
        "zh": "正是如此"
      }
    ],
    "semantic_confusables": [
      {
        "word": "much as",
        "zh": "尽管极其 (让步婉拒高级修辞)"
      },
      {
        "word": "although",
        "zh": "平铺直叙虽然尽管"
      },
      {
        "word": "even though",
        "zh": "哪怕即便"
      },
      {
        "word": "however much",
        "zh": "不论多么"
      }
    ],
    "notes": "【搭配考点】much as sb would like to / appreciate... 尽管某人非常想/十分赞赏...（外贸拒盘经典典雅句式，表示婉拒前的极力抚慰）；【形近辨析】much less (更不必提/何谈)，much more (愈加)；【近义辨析】much as 是书面语中自带极强让步意味的高雅连词，后常接 appreciate, admire, regret 等动词表达“主观情感上虽然极度认可但客观理性不得不拒绝”，although 属于平铺直叙通用连词，even though 侧重让步假设事实更严峻。",
    "level": "CET-4/BEC",
    "phonetic": "/much as/",
    "zh": "虽然; 尽管"
  },
  "on one's own account": {
    "word": "on one's own account",
    "translation": "由某人自负盈亏; 自担风险",
    "cloze": {
      "sentence": "The overseas sales agent decided to purchase the container of goods on his ______ account.",
      "translation": "这位海外销售代理人决定自负盈亏，自己垫款全权买下这整柜货物。"
    },
    "form_confusables": [
      {
        "word": "on one's own account",
        "zh": "自负盈亏；由某人自理"
      },
      {
        "word": "on one's own accord",
        "zh": "出于自愿；主动地"
      },
      {
        "word": "on one's own amount",
        "zh": "按某人金额 (非规范搭配)"
      },
      {
        "word": "on one's own advice",
        "zh": "按某人自己的主意"
      }
    ],
    "semantic_confusables": [
      {
        "word": "on one's own account",
        "zh": "自营交易自担盈亏 (商贸专有)"
      },
      {
        "word": "at one's own risk",
        "zh": "安全风险自负"
      },
      {
        "word": "independently",
        "zh": "独立自主行动"
      },
      {
        "word": "for oneself",
        "zh": "为个人自身利益"
      }
    ],
    "notes": "【搭配考点】trade / act on one's own account 自营交易/自负盈亏（区分于佣金代理行）；【形近辨析】on one's own accord (出于自愿/主动自发)，on one's own account (自负盈亏/以自身名义记账)；【近义辨析】on one's own account 商业与金融法核心术语，专指中间商不再代表委托人代销而是作为当事人自出资金自担市场价格涨跌盈亏（自营），at one's own risk 偏向人身或货物安全免责，independently 仅强调行动不依赖外界。",
    "level": "CET-4/BEC",
    "phonetic": "/on one's own account/",
    "zh": "由某人自负盈亏; 自担风险"
  },
  "fluctuation": {
    "word": "fluctuation",
    "translation": "波动; 起伏",
    "cloze": {
      "sentence": "The dramatic ______ in international ocean freight has disrupted standard export price calculations.",
      "translation": "国际海运运价的剧烈起伏波动，彻底打乱了常规的出口价格核算体系。"
    },
    "form_confusables": [
      {
        "word": "fluctuation",
        "zh": "行情波动；起伏"
      },
      {
        "word": "frustration",
        "zh": "受挫；沮丧"
      },
      {
        "word": "punctuation",
        "zh": "标点符号"
      },
      {
        "word": "friction",
        "zh": "摩擦冲突"
      }
    ],
    "semantic_confusables": [
      {
        "word": "fluctuation",
        "zh": "围绕基准线上下起伏波动"
      },
      {
        "word": "volatility",
        "zh": "金融市场剧烈动荡不确定性"
      },
      {
        "word": "oscillation",
        "zh": "物理钟摆规则往复振荡"
      },
      {
        "word": "swing",
        "zh": "幅度极大的大起大落"
      }
    ],
    "notes": "【搭配考点】currency/price fluctuation 汇率/价格波动；【形近辨析】fluctuate (波动起伏)，frustration (受挫沮丧)，friction (物理摩擦)，punctuation (标点符号)；【近义辨析】fluctuation 强调围绕一个基准中枢周期性或随机性上下拉锯起伏，volatility 强调资产价格波动剧烈且不可预测的金融风险度，oscillation 专指物理学钟摆或电磁波规则往复震荡，swing 侧重幅度极大的选票或价格摇摆。",
    "level": "CET-4/BEC",
    "phonetic": "/,flʌktju'eiʃən/",
    "zh": "波动; 起伏"
  },
  "set up": {
    "word": "set up",
    "translation": "设立; 建立; 成立",
    "cloze": {
      "sentence": "The multinational conglomerate plans to ______ up a joint-venture manufacturing plant in Vietnam.",
      "translation": "该跨国大型集团计划在越南设立一家合资制造工厂。"
    },
    "form_confusables": [
      {
        "word": "set up",
        "zh": "设立；建立；装置"
      },
      {
        "word": "sit up",
        "zh": "坐直；熬夜"
      },
      {
        "word": "stand up",
        "zh": "站立；经受住"
      },
      {
        "word": "shut up",
        "zh": "关停；闭嘴"
      }
    ],
    "semantic_confusables": [
      {
        "word": "set up",
        "zh": "配置创立实体机构/生产线"
      },
      {
        "word": "establish",
        "zh": "牢固奠定建立体制根基"
      },
      {
        "word": "found",
        "zh": "奠基开创创办"
      },
      {
        "word": "incorporate",
        "zh": "依法注册成立独立法人公司"
      }
    ],
    "notes": "【搭配考点】set up a factory / committee / branch 创办工厂/设立委员会/建立分公司；【形近辨析】sit up (熬夜/坐直)，stand up (经受得住)，shut up (闭嘴关门)；【近义辨析】set up 广泛指涉搭设装置、创办实体或配置工作班子，establish 侧重在声誉、学术或法律制度上牢固确立起不可动摇的地位，found 强调历史性的开宗明义创办（奠基），incorporate 专指在工商局依法注册成立独立法人股份有限公司。",
    "level": "CET-4/BEC",
    "phonetic": "/常用被动语态/",
    "zh": "设立; 建立; 成立"
  },
  "in consideration of": {
    "word": "in consideration of",
    "translation": "鉴于; 考虑到; 作为对价报酬",
    "cloze": {
      "sentence": "The seller agreed to a 2% price cut in ______ of the buyer's promise of large repeat orders.",
      "translation": "鉴于买方承诺后续追加大宗翻单，卖方同意作为报偿降价2%。"
    },
    "form_confusables": [
      {
        "word": "in consideration of",
        "zh": "考虑到；作为...的对价报酬"
      },
      {
        "word": "in consolation of",
        "zh": "作为对...的安慰"
      },
      {
        "word": "in conversation of",
        "zh": "在交谈中"
      },
      {
        "word": "in consecration of",
        "zh": "作为对...的祝圣献祭"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in consideration of",
        "zh": "作为合同有效对价/报酬 (契约法专用)"
      },
      {
        "word": "in exchange for",
        "zh": "作为...的对等交换"
      },
      {
        "word": "on account of",
        "zh": "纯粹因果关系因为"
      },
      {
        "word": "as compensation for",
        "zh": "作为对损害的经济填补"
      }
    ],
    "notes": "【搭配考点】in consideration of (英美合同法经典术语，意为“作为促成合同成立的对价报酬/考虑到”)；【形近辨析】consolation (安慰慰藉)，consecration (祝圣奉献)，conversation (对话)；【近义辨析】in consideration of 在普通法中具有神圣含义，合同若无对价（consideration）则不具法定执行力，在此专指以某项让步换取对方对等对价，on account of 纯粹表达因果关系“由于”，as compensation for 侧重给受害方填补损失。",
    "level": "CET-4/BEC",
    "phonetic": "/in consideration of/",
    "zh": "鉴于; 考虑到; 作为对价报酬"
  },
  "mutual benefit": {
    "word": "mutual benefit",
    "translation": "互利互惠; 双赢",
    "cloze": {
      "sentence": "We hope our current talks will pave the way for long-term cooperation on the basis of ______ benefit.",
      "translation": "我们希望当前洽谈能为我们在互利互惠的基础上展开长期合作铺平道路。"
    },
    "form_confusables": [
      {
        "word": "mutual benefit",
        "zh": "互利互惠"
      },
      {
        "word": "mental balance",
        "zh": "心理平衡"
      },
      {
        "word": "material deficit",
        "zh": "物资赤字缺口"
      },
      {
        "word": "natural credit",
        "zh": "自然信用"
      }
    ],
    "semantic_confusables": [
      {
        "word": "mutual benefit",
        "zh": "互利互惠 (双方共享商业红利)"
      },
      {
        "word": "win-win scenario",
        "zh": "双赢共赢局面"
      },
      {
        "word": "reciprocity",
        "zh": "外交对等互惠原则"
      },
      {
        "word": "bilateral gain",
        "zh": "双边实质增益"
      }
    ],
    "notes": "【搭配考点】equality and mutual benefit 平等互利（涉外经贸五项原则核心）；【形近辨析】mental (心理的)，material (物质的)，natural (自然的)；【近义辨析】mutual benefit 强调合作机制对参与双方均能带来实实在在的商业红利，reciprocity 侧重外交或关税政策上的对等对等礼遇（你降我也降），win-win scenario 是现代商业管理中形象宣导的共赢理念。",
    "level": "CET-4/BEC",
    "phonetic": "/mutual benefit/",
    "zh": "互利互惠; 双赢"
  },
  "exception": {
    "word": "exception",
    "translation": "例外; 除外责任条款",
    "cloze": {
      "sentence": "Marine insurance policies standardly make an ______ for damage resulting from nuclear accidents or war.",
      "translation": "海运货物保单常规都会将由核事故或战争导致的损失列为除外责任。"
    },
    "form_confusables": [
      {
        "word": "exception",
        "zh": "例外；除外责任"
      },
      {
        "word": "reception",
        "zh": "招待会；接待"
      },
      {
        "word": "deception",
        "zh": "欺诈；瞒骗"
      },
      {
        "word": "perception",
        "zh": "感知洞察力"
      }
    ],
    "semantic_confusables": [
      {
        "word": "exception",
        "zh": "规则之外的除外项"
      },
      {
        "word": "exclusion",
        "zh": "保险免赔除外责任范围"
      },
      {
        "word": "exemption",
        "zh": "法定免税免除义务"
      },
      {
        "word": "waiver",
        "zh": "签字声明放弃权利"
      }
    ],
    "notes": "【搭配考点】with the exception of... 除了...之外；make an exception 作出除外约定；【形近辨析】reception (接待招待会)，deception (欺瞒欺诈)，perception (感官知觉)；【近义辨析】exception 强调在普遍适用的通用规则下特批的“不纳入范围”，exclusion 在海运保险中是法定专用术语（除外责任险，如保单不赔的战争兵变条款），exemption 专指政府通过税法对特定群体予以免税豁免，waiver 专指当事人主动签字声明放弃追责权利。",
    "level": "CET-4/BEC",
    "phonetic": "/ik'sepʃən/",
    "zh": "例外; 除外责任条款"
  },
  "financial credit": {
    "word": "financial credit",
    "translation": "金融资信; 商业信贷",
    "cloze": {
      "sentence": "Before granting a thirty-day open account, the supplier verified the buyer's ______ credit with Dun & Bradstreet.",
      "translation": "在批准30天赊账结算之前，供应商通过邓白氏公司严格核实了买方的商业资信状况。"
    },
    "form_confusables": [
      {
        "word": "financial credit",
        "zh": "金融信用；商业资信"
      },
      {
        "word": "fiscal deficit",
        "zh": "财政赤字"
      },
      {
        "word": "fraction crisis",
        "zh": "非标准搭配"
      },
      {
        "word": "frictional friction",
        "zh": "摩擦力 (伪混淆项)"
      }
    ],
    "semantic_confusables": [
      {
        "word": "financial credit",
        "zh": "金融商业资信履约实力"
      },
      {
        "word": "creditworthiness",
        "zh": "企业资信可靠程度"
      },
      {
        "word": "credit rating",
        "zh": "信用评级资质"
      },
      {
        "word": "solvency",
        "zh": "长期偿债本息清偿能力"
      }
    ],
    "notes": "【搭配考点】financial credit standing / rating 金融资信状况/信用评级；【形近辨析】financial (金融财务的)，fiscal (国库财政税收的)，fraction (分数碎片)；【近义辨析】financial credit 侧重金融机构或商业征信机构对企业按期还本付息履约能力的综合信用评定，creditworthiness 侧重站在银行放贷角度考量的“资信可靠度”，solvency 专指企业资产大于负债能够偿付一切到期债务的清偿能力。",
    "level": "CET-4/BEC",
    "phonetic": "/financial credit/",
    "zh": "金融资信; 商业信贷"
  },
  "precedent": {
    "word": "precedent",
    "translation": "先例; 前例",
    "cloze": {
      "sentence": "Allowing a discount without a minimum quantity would set an undesirable ______ for future negotiations.",
      "translation": "在未达起订量的情况下给予折扣，将为未来的谈判开创不良先例。"
    },
    "form_confusables": [
      {
        "word": "precedent",
        "zh": "先例；前例"
      },
      {
        "word": "president",
        "zh": "总统；总裁"
      },
      {
        "word": "precedence",
        "zh": "优先权；居先地位"
      },
      {
        "word": "decadent",
        "zh": "堕落颓废的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "precedent",
        "zh": "具有示范先导作用的先例"
      },
      {
        "word": "convention",
        "zh": "相沿成习的行业惯例"
      },
      {
        "word": "benchmark",
        "zh": "绩效比对基准标杆"
      },
      {
        "word": "antecedent",
        "zh": "前情先例；祖先"
      }
    ],
    "notes": "【搭配考点】set / create a precedent 树立/创下先例；without precedent 史无前例；【形近辨析】president (总统/总裁)，precedence (优先居先地位)，precedent (先例判例)；【近义辨析】precedent 强调由于历史首次裁定或破例行事而成为后续类似争议效仿引用的标杆，convention 侧重行业内部自发形成相沿成习的惯例，benchmark 专指用来衡量绩效水平的客观标杆。",
    "level": "CET-4/BEC",
    "phonetic": "/pri'si:dənt; 'presi-/",
    "zh": "先例; 前例"
  },
  "delay": {
    "word": "delay",
    "translation": "延期; 延误; 耽搁",
    "cloze": {
      "sentence": "The carrier is not liable for cargo damage caused by unavoidable weather ______ in transit.",
      "translation": "承运人对运输途中因不可抗力天气延误所造成的货物损坏不承担赔偿责任。"
    },
    "form_confusables": [
      {
        "word": "delay",
        "zh": "延误；延期；耽搁"
      },
      {
        "word": "decay",
        "zh": "腐败；衰退"
      },
      {
        "word": "relay",
        "zh": "转播；接力"
      },
      {
        "word": "defray",
        "zh": "支付；结清费用"
      }
    ],
    "semantic_confusables": [
      {
        "word": "delay",
        "zh": "客观阻碍造成的延误"
      },
      {
        "word": "postponement",
        "zh": "主观推迟顺延至新日期"
      },
      {
        "word": "deferral",
        "zh": "会计税款递延暂缓"
      },
      {
        "word": "moratorium",
        "zh": "官方宣布债务偿还中止期"
      }
    ],
    "notes": "【搭配考点】delay in shipment / without delay 船期延误/毫不延误；【形近辨析】decay (衰败腐朽)，relay (接力/转播)，defray (支付结清费用)；【近义辨析】delay 侧重由于外界阻碍或拖延导致事物超出预定时刻未完成，postponement 侧重经主观商议主动将活动延后到未来新日期，deferral 财务上专指将税款或收入计入后续期间递延，moratorium 专指主权国家宣布暂时中止偿付债务。",
    "level": "CET-4/BEC",
    "phonetic": "/di'lei/",
    "zh": "延期; 延误; 耽搁"
  },
  "execution": {
    "word": "execution",
    "translation": "合同履行; 执行; 实行",
    "cloze": {
      "sentence": "The prompt ______ of the sales contract is essential to maintain our mutual supply chain stability.",
      "translation": "买卖合同的迅速履行与执行，对维护我们双方供应链的稳定至关重要。"
    },
    "form_confusables": [
      {
        "word": "execution",
        "zh": "合同履行；执行；处决"
      },
      {
        "word": "persecution",
        "zh": "迫害；残害"
      },
      {
        "word": "prosecution",
        "zh": "起诉；公诉检控"
      },
      {
        "word": "excursion",
        "zh": "远足；短途旅行"
      }
    ],
    "semantic_confusables": [
      {
        "word": "execution",
        "zh": "严格履行合同/签字生效"
      },
      {
        "word": "implementation",
        "zh": "政策方案贯彻实施"
      },
      {
        "word": "enforcement",
        "zh": "司法行政强制执行"
      },
      {
        "word": "fulfillment",
        "zh": "圆满践行诺言指标"
      }
    ],
    "notes": "【搭配考点】execution of a contract 合同履行/合同正式签字盖章生效；【形近辨析】persecution (残酷迫害)，prosecution (公诉检举)，excursion (短途郊游)；【近义辨析】execution of a contract 在商法中具有双重内涵：一指走完签字盖章法律手续使合同成立生效，二指在实际履约中付诸执行，implementation 侧重政策路线的逐步推行，enforcement 强调公安法院动用国家暴力强制执行，fulfillment 侧重圆满达成誓言指标。",
    "level": "CET-4/BEC",
    "phonetic": "/,eksi'kju:ʃən/",
    "zh": "合同履行; 执行; 实行"
  },
  "make execution of contract": {
    "word": "make execution of contract",
    "translation": "履行合同; 执行合同",
    "cloze": {
      "sentence": "Both trading partners agreed to make ______ of the bilateral contract within thirty days.",
      "translation": "贸易双方均同意在30天之内正式履行并执行双边买卖合同。"
    },
    "form_confusables": [
      {
        "word": "make execution of contract",
        "zh": "履行执行合同"
      },
      {
        "word": "make extension of contract",
        "zh": "办理合同延期展期"
      },
      {
        "word": "make excursion of contract",
        "zh": "伪混淆搭配"
      },
      {
        "word": "make exhaustion of contract",
        "zh": "非规范搭配"
      }
    ],
    "semantic_confusables": [
      {
        "word": "make execution of contract",
        "zh": "将合同条款付诸事实履行"
      },
      {
        "word": "implement the agreement",
        "zh": "贯彻实施协议"
      },
      {
        "word": "carry out the contract",
        "zh": "落实执行合同"
      },
      {
        "word": "honor the agreement",
        "zh": "恪守信义履行契约"
      }
    ],
    "notes": "【搭配考点】make execution of contract 商务与法律庄重表述，指双方切实推动合同进入履行执行阶段；【形近辨析】extension (延期展期)，excursion (短途旅行)，exhaustion (耗尽精疲力竭)；【近义辨析】make execution of contract 是典雅的法言法语强调将纸面合同条文付诸事实履行，implement 侧重管理学层面的逐步实施，honor the agreement 侧重信守商业契约精神与商业诚信。",
    "level": "CET-4/BEC",
    "phonetic": "/make execution of contract/",
    "zh": "履行合同; 执行合同"
  },
  "balance": {
    "word": "balance",
    "translation": "尾款; 结欠余额; 平衡",
    "cloze": {
      "sentence": "Please remit the remaining ______ of the invoice upon receipt of the shipping documents.",
      "translation": "请在收到装船单据后立即汇付发票所余尾款。"
    },
    "form_confusables": [
      {
        "word": "balance",
        "zh": "结欠尾款；余额；平衡"
      },
      {
        "word": "ballast",
        "zh": "压舱水；压载物"
      },
      {
        "word": "bounce",
        "zh": "支票跳票退票；弹跳"
      },
      {
        "word": "ballot",
        "zh": "投票选票"
      }
    ],
    "semantic_confusables": [
      {
        "word": "balance",
        "zh": "账目结欠尾款 (冲抵定金后余款)"
      },
      {
        "word": "remainder",
        "zh": "泛指数学剩余部分"
      },
      {
        "word": "surplus",
        "zh": "财政盈余顺差"
      },
      {
        "word": "deficit",
        "zh": "入不敷出赤字"
      }
    ],
    "notes": "【搭配考点】outstanding balance / balance sheet 结欠尾款/资产负债表；【形近辨析】ballast (船只压舱物)，bounce (支票空头跳票)，ballot (不记名投票)；【近义辨析】balance 在商务结算中特指扣除预付定金后尚待结清的账面尾款（结余金额），remainder 泛指减法运算后剩下的剩余物，surplus 专指收入大于支出的富余资金，deficit 专指入不敷出的差额赤字。",
    "level": "CET-4/BEC",
    "phonetic": "/'bæləns/",
    "zh": "尾款; 结欠余额; 平衡"
  },
  "bill of lading": {
    "word": "bill of lading",
    "translation": "海运提单(B/L)",
    "cloze": {
      "sentence": "A clean on-board ______ of lading is required for presentation under the letter of credit.",
      "translation": "在信用证项下提交议付时，必须提供清洁已装船海运提单。"
    },
    "form_confusables": [
      {
        "word": "bill of lading",
        "zh": "海运提单 (B/L)"
      },
      {
        "word": "bill of exchange",
        "zh": "汇票"
      },
      {
        "word": "bill of entry",
        "zh": "海关报关单"
      },
      {
        "word": "bill of sale",
        "zh": "动产转让契约/销货清单"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bill of lading",
        "zh": "海运提单 (背书流通物权凭证)"
      },
      {
        "word": "air waybill",
        "zh": "航空运单 (非物权货物收条)"
      },
      {
        "word": "delivery order",
        "zh": "提货单 (码头换取的小提单)"
      },
      {
        "word": "mate's receipt",
        "zh": "大副收据"
      }
    ],
    "notes": "【搭配考点】clean on-board bill of lading 清洁已装船提单（代表货权且承运人批注货物外表完好）；【形近辨析】bill of lading (B/L海运提单)，bill of exchange (汇票)，bill of sale (绝卖契/动产转让契约)；【近义辨析】bill of lading 是海运特有的物权凭证（背书即可转让货权），air waybill 航空运单仅是承运收据不可流通转让货权，delivery order 是凭提单在目的港换取的提货凭单，mate's receipt 是码头装船后大副签发给托运人的初始收条。",
    "level": "CET-4/BEC",
    "phonetic": "/略作 b.l.， B.L.， b／l， B／L/",
    "zh": "海运提单(B/L)"
  },
  "in regard to": {
    "word": "in regard to",
    "translation": "关于; 谈及; 至于",
    "cloze": {
      "sentence": "We are writing in ______ to your cable of June 8 inquiring about the supply of zinc ingots.",
      "translation": "我们特此致函，就贵方6月8日关于锌锭货源供应的来电予以答复。"
    },
    "form_confusables": [
      {
        "word": "in regard to",
        "zh": "关于；谈及"
      },
      {
        "word": "in reward to",
        "zh": "作为对...的回报"
      },
      {
        "word": "in retard to",
        "zh": "错误搭配"
      },
      {
        "word": "in record to",
        "zh": "错误搭配"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in regard to",
        "zh": "关于/就...而言 (商务引题)"
      },
      {
        "word": "with respect to",
        "zh": "在...特定方面而论"
      },
      {
        "word": "as regards",
        "zh": "至于... (段首引出新话题)"
      },
      {
        "word": "vis-a-vis",
        "zh": "在与...双边对比中"
      }
    ],
    "notes": "【搭配考点】in regard to your letter/cable 关于贵方来函/电传（外贸书信引题黄金句式）；【形近辨析】reward (酬谢奖励)，retard (阻碍妨碍)，record (记录)；【近义辨析】in regard to 是书面文书引出对方此前议题的最高频介词短语，with respect to 侧重在具体某个特定方面展开剖析，as regards 语气更轻快用于段首转折引入新话题，vis-a-vis 侧重在双边对比关系中审视。",
    "level": "CET-4/BEC",
    "phonetic": "/in regard to/",
    "zh": "关于; 谈及; 至于"
  },
  "under the subject contract": {
    "word": "under the subject contract",
    "translation": "在标的合同项下",
    "cloze": {
      "sentence": "All goods shipped under the ______ contract must conform strictly to the approved counter-samples.",
      "translation": "在标的合同项下装运的所有货物，均必须与双方核准的对等样品严格一致。"
    },
    "form_confusables": [
      {
        "word": "under the subject contract",
        "zh": "在标的合同项下"
      },
      {
        "word": "under the sudden contract",
        "zh": "伪混淆搭配"
      },
      {
        "word": "under the supple contract",
        "zh": "伪混淆搭配"
      },
      {
        "word": "under the subtle contract",
        "zh": "伪混淆搭配"
      }
    ],
    "semantic_confusables": [
      {
        "word": "under the subject contract",
        "zh": "在当前所指标的合同下"
      },
      {
        "word": "under the contract in question",
        "zh": "在处于争议中的合同下"
      },
      {
        "word": "pursuant to the contract",
        "zh": "依据遵照合同"
      },
      {
        "word": "thereunder",
        "zh": "在其项下"
      }
    ],
    "notes": "【搭配考点】under the subject contract 在本合同/标的合同项下（限定法律责任归属）；【形近辨析】subject (标的主题)，subtle (微妙的)，supple (柔软灵活的)；【近义辨析】under the subject contract 专指当前信函正在针对审查的那一份特定买卖合同法律框架之内，pursuant to the contract 强调按照合同条款的指令行动，thereunder 是法律简写词代指在该文件项下。",
    "level": "CET-4/BEC",
    "phonetic": "/under the subject contract/",
    "zh": "在标的合同项下"
  },
  "call one's attention to": {
    "word": "call one's attention to",
    "translation": "提醒注意; 提请注意",
    "cloze": {
      "sentence": "We must ______ your attention to the fact that the validity of the import permit expires next Monday.",
      "translation": "我们必须提醒贵方注意，该进口许可证的有效期将于下周一期满失效。"
    },
    "form_confusables": [
      {
        "word": "call one's attention to",
        "zh": "提醒某人注意"
      },
      {
        "word": "cure one's addiction to",
        "zh": "戒除对...的成瘾"
      },
      {
        "word": "cast one's aspiration to",
        "zh": "树立对...的志向"
      },
      {
        "word": "curb one's appetite to",
        "zh": "抑制食欲胃口"
      }
    ],
    "semantic_confusables": [
      {
        "word": "call one's attention to",
        "zh": "严肃提请对方关注隐患"
      },
      {
        "word": "draw one's attention to",
        "zh": "客观吸引目光注意"
      },
      {
        "word": "alert sb to",
        "zh": "拉响警报防范险情"
      },
      {
        "word": "remind sb of",
        "zh": "温和提醒防止遗忘"
      }
    ],
    "notes": "【搭配考点】call one's attention to the fact/discrepancy 提请某人注意某事实或不符点；【形近辨析】addiction (上瘾)，aspiration (志向)，appetite (食欲)；【近义辨析】call one's attention to 带有公事公办严肃提请对方正视隐患的公文色彩，draw one's attention to 侧重客观上以某种显著特征吸引了目光，alert sb to 强调局势危急拉响警报防范风险，remind 强调防止对方遗忘。",
    "level": "CET-4/BEC",
    "phonetic": "/call one's attention to/",
    "zh": "提醒注意; 提请注意"
  },
  "draw near": {
    "word": "draw near",
    "translation": "临近; 迫近",
    "cloze": {
      "sentence": "As the contractual shipment deadline is drawing ______, we urge you to expedite the manufacturing process.",
      "translation": "鉴于合同约定的装运截止期已日益临近，我们敦促贵方务必加快生产进度。"
    },
    "form_confusables": [
      {
        "word": "draw near",
        "zh": "临近；迫近"
      },
      {
        "word": "draw back",
        "zh": "退缩；后退"
      },
      {
        "word": "draw on",
        "zh": "凭借；利用资金"
      },
      {
        "word": "draw up",
        "zh": "起草拟定"
      }
    ],
    "semantic_confusables": [
      {
        "word": "draw near",
        "zh": "时间节点分秒逼近"
      },
      {
        "word": "approach",
        "zh": "空间或时间接近"
      },
      {
        "word": "be around the corner",
        "zh": "转角即至近在眼前"
      },
      {
        "word": "loom",
        "zh": "阴森逼近笼罩"
      }
    ],
    "notes": "【搭配考点】as the deadline / expiration date draws near 随着截止期/失效期日益临近；【形近辨析】draw up (起草文件)，draw back (后退怯缩)，draw on (凭借利用资金经验)；【近义辨析】draw near 强调时间指针一分一秒向关键节点不断逼近催人紧迫，approach 泛指空间或时间上的接近，be around the corner 口语生动指即将来临，loom 侧重危机如乌云般阴森笼罩逼近。",
    "level": "CET-4/BEC",
    "phonetic": "/draw near/",
    "zh": "临近; 迫近"
  },
  "expire": {
    "word": "expire",
    "translation": "期满失效; 到期",
    "cloze": {
      "sentence": "Please arrange to extend the letter of credit immediately, as it is due to ______ on the 25th of this month.",
      "translation": "请立即安排修改展延信用证，因其将于本月25日到期失效。"
    },
    "form_confusables": [
      {
        "word": "expire",
        "zh": "期满失效；到期断气"
      },
      {
        "word": "inspire",
        "zh": "鼓舞；启发灵感"
      },
      {
        "word": "aspire",
        "zh": "渴望；立志抱负"
      },
      {
        "word": "conspire",
        "zh": "密谋；同谋"
      }
    ],
    "semantic_confusables": [
      {
        "word": "expire",
        "zh": "法定证件/信用证期满失效"
      },
      {
        "word": "lapse",
        "zh": "未按期行使权利而失效"
      },
      {
        "word": "terminate",
        "zh": "人为终止合同"
      },
      {
        "word": "mature",
        "zh": "债券票据到期应兑付"
      }
    ],
    "notes": "【搭配考点】the L/C expires on (date) 信用证于某日到期失效；【形近辨析】词根-spir-（呼吸）：expire (出气/断气/失效)，inspire (吸气/赋予灵感)，aspire (向上呼气/抱负)，conspire (共同呼吸/密谋)；【近义辨析】expire 在外贸与法务中专指凭证、合同或护照有效期的法定截止终结，lapse 专指因未在规定期限内行使权利导致权益自动丧失，mature 专指债券或汇票到期应付款，terminate 侧重人为主动终止合同。",
    "level": "CET-4/BEC",
    "phonetic": "/ik'spaiə; ek-/",
    "zh": "期满失效; 到期"
  },
  "in accordance with": {
    "word": "in accordance with",
    "translation": "依据; 按照",
    "cloze": {
      "sentence": "The goods must be inspected and certified in ______ with the terms stipulated in the sales contract.",
      "translation": "货物必须严格按照买卖合同约定的条款进行检验并出具证书。"
    },
    "form_confusables": [
      {
        "word": "in accordance with",
        "zh": "依据；按照"
      },
      {
        "word": "in discordance with",
        "zh": "与...不调和不一致"
      },
      {
        "word": "in acceptance with",
        "zh": "错误搭配"
      },
      {
        "word": "in attendance with",
        "zh": "在...陪伴下"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in accordance with",
        "zh": "遵照依据 (合同权威准绳)"
      },
      {
        "word": "pursuant to",
        "zh": "依照法规条文办理"
      },
      {
        "word": "complying with",
        "zh": "主观服从规章"
      },
      {
        "word": "consistent with",
        "zh": "前后一致吻合"
      }
    ],
    "notes": "【搭配考点】in accordance with contract terms / international rules 遵照合同条款/国际惯例规则；【形近辨析】discordance (不调和不一致)，attendance (出席)，acceptance (接受承兑)；【近义辨析】in accordance with 是涉外法律合同中使用频率最高的最高规格准绳介词短语，pursuant to 语气更显庄严宏大常用于法条引据，complying with 强调行为人主观服从规管，consistent with 侧重状态前后吻合不自相矛盾。",
    "level": "CET-4/BEC",
    "phonetic": "/in accordance with/",
    "zh": "依据; 按照"
  },
  "arise from": {
    "word": "arise from",
    "translation": "由...产生; 起因于",
    "cloze": {
      "sentence": "The insurance underwriter will not compensate for losses that ______ from inadequate export packing.",
      "translation": "保险承保人对由于出口包装不当而引起的损失不承担赔付责任。"
    },
    "form_confusables": [
      {
        "word": "arise from",
        "zh": "由...产生；起因于"
      },
      {
        "word": "arouse from",
        "zh": "从...中唤醒"
      },
      {
        "word": "raise from",
        "zh": "从...中筹集提升"
      },
      {
        "word": "rise from",
        "zh": "从...中升起站立"
      }
    ],
    "semantic_confusables": [
      {
        "word": "arise from",
        "zh": "特定诱因滋生出风险损失"
      },
      {
        "word": "stem from",
        "zh": "深层根源源自"
      },
      {
        "word": "result from",
        "zh": "因果逻辑果由因生"
      },
      {
        "word": "originate from",
        "zh": "地理历史源头发源"
      }
    ],
    "notes": "【搭配考点】disputes/claims arise from... 纷争/索赔起因于...；【形近辨析】arise (产生发生，不及物)，arouse (唤起激起，及物)，raise (举起筹集，及物)，rise (上升升起，不及物)；【近义辨析】arise from 在商业保险与免责条款中专指某种风险或损失是从特定的诱发事实中滋生演化出来的，stem from 侧重像树干生于树根般根深蒂固，result from 强调纯因果逻辑中“果由因生”，originate from 侧重地理或历史源头。",
    "level": "CET-4/BEC",
    "phonetic": "/arise from/",
    "zh": "由...产生; 起因于"
  },
  "bear": {
    "word": "bear",
    "translation": "承担(费用/责任); 承受",
    "cloze": {
      "sentence": "Under standard FOB terms, the buyer must ______ all marine freight and transit insurance expenses.",
      "translation": "在标准FOB（船上交货）条款下，买方必须自行承担所有海运运费与运输保险费用。"
    },
    "form_confusables": [
      {
        "word": "bear",
        "zh": "承担责任费用；承受"
      },
      {
        "word": "bare",
        "zh": "赤裸的；仅仅"
      },
      {
        "word": "beard",
        "zh": "胡须"
      },
      {
        "word": "beam",
        "zh": "梁柱；光束"
      }
    ],
    "semantic_confusables": [
      {
        "word": "bear",
        "zh": "经济上最终承担费用风险"
      },
      {
        "word": "shoulder",
        "zh": "双肩扛起如山重任"
      },
      {
        "word": "absorb",
        "zh": "企业自身消化吸收成本"
      },
      {
        "word": "incur",
        "zh": "招致产生罚款费用"
      }
    ],
    "notes": "【搭配考点】bear costs/risks/responsibility 承担费用/风险/法律责任；【形近辨析】bare (赤裸无遮拦的)，beard (胡子)，beam (房梁横梁/光芒)；【近义辨析】bear expenses 在国际贸易术语解释通则中专指由谁在经济上最终买单承担全部开销与风险责任，shoulder 形象强调以肩膀扛起如山的重托与社会道义，absorb 专指企业通过提高效率自行消化原材料涨价成本而不转嫁给买方，incur 强调由于自身操作不当招致额外罚款或费用。",
    "level": "CET-4/BEC",
    "phonetic": "/bεə/",
    "zh": "承担(费用/责任); 承受"
  },
  "discrepancy": {
    "word": "discrepancy",
    "translation": "单证不符点; 差异; 不符",
    "cloze": {
      "sentence": "The negotiating bank refused payment because of a serious ______ between the commercial invoice and the bill of lading.",
      "translation": "议付行拒绝付款，因为商业发票与海运提单之间存在严重的不符点。"
    },
    "form_confusables": [
      {
        "word": "discrepancy",
        "zh": "单证不符点；差异出入"
      },
      {
        "word": "deficiency",
        "zh": "匮乏不足；营养缺乏"
      },
      {
        "word": "delinquency",
        "zh": "过失失职；拖欠"
      },
      {
        "word": "decency",
        "zh": "正派体面"
      }
    ],
    "semantic_confusables": [
      {
        "word": "discrepancy",
        "zh": "单证细部出入不符 (拒付根源)"
      },
      {
        "word": "inconsistency",
        "zh": "前后矛盾不连贯"
      },
      {
        "word": "deviation",
        "zh": "偏离工程公差指标"
      },
      {
        "word": "divergence",
        "zh": "分歧背道而驰"
      }
    ],
    "notes": "【搭配考点】discrepancy in documents 单证不符点（跟单信用证被拒付的最核心病灶）；【形近辨析】deficiency (营养或资金匮乏)，delinquency (青少年犯罪/逾期欠费)，decency (体面得体)；【近义辨析】discrepancy 在国际贸易银行跟单结算中专指提交的单据与信用证条款要求存在文字、金额或日期上的任何细微出入（单证不符），inconsistency 侧重逻辑上自相矛盾，deviation 侧重工程指标偏离允许公差，divergence 强调两条发展道路分道扬镳。",
    "level": "CET-4/BEC",
    "phonetic": "/dis'krepənsi/",
    "zh": "单证不符点; 差异; 不符"
  },
  "examination": {
    "word": "examination",
    "translation": "验货; 检验证书; 审核",
    "cloze": {
      "sentence": "Upon physical ______ of the containers, customs agents discovered that the actual weights did not match the manifest.",
      "translation": "在对集装箱进行实物查验开箱后，海关查验人员发现实际重量与舱单完全不符。"
    },
    "form_confusables": [
      {
        "word": "examination",
        "zh": "验货查验；审查；考试"
      },
      {
        "word": "excavation",
        "zh": "考古发掘；挖掘工程"
      },
      {
        "word": "exaltation",
        "zh": "提拔晋升；狂喜"
      },
      {
        "word": "exasperation",
        "zh": "极度恼火；恶化"
      }
    ],
    "semantic_confusables": [
      {
        "word": "examination",
        "zh": "开箱实物查验/单证细审"
      },
      {
        "word": "inspection",
        "zh": "技术参数质检验收"
      },
      {
        "word": "scrutiny",
        "zh": "显微镜下严密审视"
      },
      {
        "word": "audit",
        "zh": "法定财务账目审计"
      }
    ],
    "notes": "【搭配考点】customs examination / visual examination 海关验货查验/外观目视检验；【形近辨析】excavation (考古发掘)，exaltation (晋升狂喜)，exasperation (极度恼怒)；【近义辨析】examination 强调为了核实合规性或查找隐患而进行的多维度仔细拆检与审视，inspection 强调按照技术参数或流水线规程进行标准质检把关，scrutiny 强调在公众舆论或高倍显微镜下无死角审视，audit 专指对账目资产进行具有法定效力的账务审计。",
    "level": "CET-4/BEC",
    "phonetic": "/iɡ,zæmi'neiʃən/",
    "zh": "验货; 检验证书; 审核"
  },
  "freight": {
    "word": "freight",
    "translation": "国际海运运费; 货物",
    "cloze": {
      "sentence": "The buyer is responsible for settling the ocean ______ from Shanghai to the port of destination.",
      "translation": "买方负责结清从上海至目的港的海运运费。"
    },
    "form_confusables": [
      {
        "word": "freight",
        "zh": "海运运费；货运货物"
      },
      {
        "word": "fright",
        "zh": "惊恐；害怕"
      },
      {
        "word": "fight",
        "zh": "博弈战斗"
      },
      {
        "word": "plight",
        "zh": "困境险境"
      }
    ],
    "semantic_confusables": [
      {
        "word": "freight",
        "zh": "海空大宗长途运费 (CFR/CIF核心)"
      },
      {
        "word": "carriage",
        "zh": "陆运内陆运杂费"
      },
      {
        "word": "tariff",
        "zh": "海关进口关税税率"
      },
      {
        "word": "shipping charges",
        "zh": "港口物流综合杂费"
      }
    ],
    "notes": "【搭配考点】ocean freight / freight prepaid 海运费/运费已预付（CFR/CIF 条款必备）；【形近辨析】fright (惊恐害怕)，fight (打架博弈)，plight (险境苦境)；【近义辨析】freight 在对外贸易中专指远洋船舶或货运包机收取的运费总额（或指运载的大宗商品本身），carriage 侧重国内铁路或公路卡车收取的运杂费，tariff 专指海关向进出口货品征收的关税税率，shipping charges 泛指各类港口仓储物流包装杂费。",
    "level": "CET-4/BEC",
    "phonetic": "/freit/",
    "zh": "国际海运运费; 货物"
  },
  "negotiation": {
    "word": "negotiation",
    "translation": "议付; 商业谈判",
    "cloze": {
      "sentence": "The beneficiary submitted the full set of clean shipping documents to the bank for ______.",
      "translation": "受益人将全套清洁装运单据提交给银行进行议付（贴现收汇）。"
    },
    "form_confusables": [
      {
        "word": "negotiation",
        "zh": "银行议付；商业谈判"
      },
      {
        "word": "negation",
        "zh": "否定；否决"
      },
      {
        "word": "navigation",
        "zh": "航行；导航"
      },
      {
        "word": "renovation",
        "zh": "翻新；翻修"
      }
    ],
    "semantic_confusables": [
      {
        "word": "negotiation",
        "zh": "银行买单议付 (跟单结算核心)"
      },
      {
        "word": "bargaining",
        "zh": "买卖讨价还价"
      },
      {
        "word": "parley",
        "zh": "交战双方停火谈判"
      },
      {
        "word": "deliberation",
        "zh": "商议审慎权衡"
      }
    ],
    "notes": "【搭配考点】negotiation of documents 单据议付（银行审查单据合规后买入汇票并扣除贴息向受益人垫付货款）；【形近辨析】negation (彻底否定)，navigation (航海导航)，renovation (旧房翻修)；【近义辨析】negotiation 在国际贸易信用证业务中专指“议付行购买合规单据对受益人贴现放款”，在普通商务中指“双方坐下来就条款展开商业谈判”，bargaining 偏向街头或初级层面的讨价还价，parley 专指战场上敌对双方休战谈判。",
    "level": "CET-4/BEC",
    "phonetic": "/ni,ɡəuʃi'eiʃən; -si-/",
    "zh": "议付; 商业谈判"
  },
  "accordingly": {
    "word": "accordingly",
    "translation": "相应地; 因此; 照办",
    "cloze": {
      "sentence": "We have noted the changes in your specifications and will revise our production schedule ______.",
      "translation": "我们已获悉贵方技术规格的改动，并将相应地调整我们的生产排期计划。"
    },
    "form_confusables": [
      {
        "word": "accordingly",
        "zh": "相应地；因此照办"
      },
      {
        "word": "accordant",
        "zh": "一致的和顺的"
      },
      {
        "word": "according",
        "zh": "相符的；依照"
      },
      {
        "word": "accosting",
        "zh": "上前搭讪走近"
      }
    ],
    "semantic_confusables": [
      {
        "word": "accordingly",
        "zh": "做相对称的反应 (照章办理)"
      },
      {
        "word": "correspondingly",
        "zh": "在比例幅度上对应地"
      },
      {
        "word": "consequently",
        "zh": "终局因果必然结果"
      },
      {
        "word": "suitably",
        "zh": "适宜得体地"
      }
    ],
    "notes": "【搭配考点】act accordingly / revise prices accordingly 照章办理/相应地调整价格；【形近辨析】accordant (与...一致的)，accost (走上前搭讪)；【近义辨析】accordingly 侧重根据前文发生的变化或对方的具体要求，“做出完全契合对称的后续举措或反应”，correspondingly 强调在比例和函数关系上对应增减，consequently 强调由于前因而不可避免产生的终局后果，suitably 侧重举止体面得体。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'kɔ:diŋli/",
    "zh": "相应地; 因此; 照办"
  },
  "amendment": {
    "word": "amendment",
    "translation": "修改书; 修正; 修正案",
    "cloze": {
      "sentence": "We kindly request an immediate ______ to the letter of credit extending the shipment date by fifteen days.",
      "translation": "我们恳请贵方立即办理信用证修改书，将装船日期展延15天。"
    },
    "form_confusables": [
      {
        "word": "amendment",
        "zh": "修改书；修正案"
      },
      {
        "word": "atonement",
        "zh": "赎罪；补偿"
      },
      {
        "word": "amazement",
        "zh": "惊愕；惊叹"
      },
      {
        "word": "adornment",
        "zh": "装饰；佩饰"
      }
    ],
    "semantic_confusables": [
      {
        "word": "amendment",
        "zh": "法定修改通知书 (需各方受约认可)"
      },
      {
        "word": "revision",
        "zh": "通篇复核修订"
      },
      {
        "word": "alteration",
        "zh": "局部字句变动"
      },
      {
        "word": "modification",
        "zh": "工程微调适配"
      }
    ],
    "notes": "【搭配考点】L/C amendment / amendment advice 信用证修改书/修改通知书（需各方完全同意方能生效）；【形近辨析】atonement (宗教赎罪)，amazement (惊异震撼)，adornment (装饰珠宝)；【近义辨析】amendment 在国际结算与法务中专指具有约束力的“正式修改书/修正案”（必须由开证行出具并经受益人接受），revision 侧重对文稿或规程进行通篇复查重写，alteration 强调对尺寸或局部细节的改动，modification 强调为了适配新场景做出的工程微调。",
    "level": "CET-4/BEC",
    "phonetic": "/ə'mendmənt/",
    "zh": "修改书; 修正; 修正案"
  },
  "under the clauses": {
    "word": "under the clauses",
    "translation": "根据合同条款规定",
    "cloze": {
      "sentence": "The claim for compensation was fully justified under the ______ of the marine cargo policy.",
      "translation": "根据海运货物保险单各项条款规定，此项索赔诉求完全正当合规。"
    },
    "form_confusables": [
      {
        "word": "under the clauses",
        "zh": "根据合同条款规定"
      },
      {
        "word": "under the causes",
        "zh": "在各种原因下"
      },
      {
        "word": "under the pauses",
        "zh": "在停顿间隙"
      },
      {
        "word": "under the claws",
        "zh": "在利爪之下"
      }
    ],
    "semantic_confusables": [
      {
        "word": "under the clauses",
        "zh": "在合同段落白纸黑字约束下"
      },
      {
        "word": "under the terms",
        "zh": "在宏观交易条件框架内"
      },
      {
        "word": "under the provisions",
        "zh": "依照法规法定规定"
      },
      {
        "word": "pursuant to articles",
        "zh": "遵照章程条文条目"
      }
    ],
    "notes": "【搭配考点】under the clauses of the agreement 根据协议特定条款规定；【形近辨析】clause (条款条文)，pause (停顿)，cause (原因)，claw (动物爪子)；【近义辨析】under the clauses 侧重在具体合同段落条款的字面白纸黑字约束之下，under the terms 侧重在宏观的交易合作条件框架内，under the provisions 侧重法定法规的硬性规定，pursuant to articles 专指按照成文法律或公司章程条目。",
    "level": "CET-4/BEC",
    "phonetic": "/under the clauses/",
    "zh": "根据合同条款规定"
  },
  "as stipulated": {
    "word": "as stipulated",
    "translation": "按照合同约定; 如所规定",
    "cloze": {
      "sentence": "The supplier delivered the machinery within sixty days as ______ in Section 4 of the contract.",
      "translation": "供应商按照合同第四条中的明确约定，在60天之内交付了机械设备。"
    },
    "form_confusables": [
      {
        "word": "as stipulated",
        "zh": "按照约定；如所规定"
      },
      {
        "word": "as stimulated",
        "zh": "在受激发下"
      },
      {
        "word": "as simulated",
        "zh": "在模拟仿真下"
      },
      {
        "word": "as speculated",
        "zh": "如所投机推测"
      }
    ],
    "semantic_confusables": [
      {
        "word": "as stipulated",
        "zh": "白纸黑字严格契约明文约定"
      },
      {
        "word": "as agreed",
        "zh": "如双方所达成合意"
      },
      {
        "word": "as specified",
        "zh": "按照技术规格明确指定"
      },
      {
        "word": "as prescribed",
        "zh": "依权威法规模范规定"
      }
    ],
    "notes": "【搭配考点】as stipulated in the contract / as stipulated above 正如合同中所明确约定的那样；【形近辨析】stimulate (激发刺激)，simulate (仿真模拟)，speculate (投机猜测)；【近义辨析】as stipulated 专指依据双方签字画押白纸黑字严格约定的条款行事不可更改，as agreed 强调双方达成合意（可能包括口头约定），as specified 侧重在技术规格尺寸上指明，as prescribed 侧重权威部门颁布的法令或医生处方。",
    "level": "CET-4/BEC",
    "phonetic": "/as stipulated/",
    "zh": "按照合同约定; 如所规定"
  },
  "extension": {
    "word": "extension",
    "translation": "展期; 延期; 电话分机",
    "cloze": {
      "sentence": "The buyer agreed to grant an ______ of the shipment deadline by thirty days.",
      "translation": "买方同意将装船截止日期顺延宽展30天。"
    },
    "form_confusables": [
      {
        "word": "extension",
        "zh": "展期；延期；分机"
      },
      {
        "word": "expansion",
        "zh": "扩张；膨胀"
      },
      {
        "word": "explosion",
        "zh": "爆炸；爆发"
      },
      {
        "word": "exertion",
        "zh": "发挥；竭力努力"
      }
    ],
    "semantic_confusables": [
      {
        "word": "extension",
        "zh": "法定原期限后追加宽展 (展期)"
      },
      {
        "word": "renewal",
        "zh": "老合同期满续约重签"
      },
      {
        "word": "prolongation",
        "zh": "人为拉长周期拖长"
      },
      {
        "word": "postponement",
        "zh": "改期推后举行"
      }
    ],
    "notes": "【搭配考点】extension of the L/C / delivery date 信用证展期/交期顺延；【形近辨析】expansion (企业业务扩张/体积膨胀)，explosion (剧烈爆炸)，exertion (竭力尽力)；【近义辨析】extension 在商贸金融中专指在原有效期限的基础上合法批准追加额外天数（展期），renewal 专指老合同到期后重新签定一份相同的新合同续约，prolongation 带有违背初衷人为拖长战线的意思，postponement 侧重将原定活动重新改期至未来某日。",
    "level": "CET-4/BEC",
    "phonetic": "/ik'stenʃən/",
    "zh": "展期; 延期; 电话分机"
  },
  "refer to": {
    "word": "refer to",
    "translation": "查阅; 提及; 参照",
    "cloze": {
      "sentence": "For detailed breakdowns of ocean freight and insurance costs, please ______ to Appendix B.",
      "translation": "关于海运运费与保险费用的详细细目，请参阅附录B。"
    },
    "form_confusables": [
      {
        "word": "refer to",
        "zh": "参阅；提及；参照"
      },
      {
        "word": "prefer to",
        "zh": "更偏向偏爱"
      },
      {
        "word": "defer to",
        "zh": "听从顺从尊从"
      },
      {
        "word": "infer to",
        "zh": "错误搭配（应为infer from）"
      }
    ],
    "semantic_confusables": [
      {
        "word": "refer to",
        "zh": "参阅附录文献佐证"
      },
      {
        "word": "consult",
        "zh": "请教专家顾问/查字典"
      },
      {
        "word": "cite",
        "zh": "引用法条判例"
      },
      {
        "word": "mention",
        "zh": "口头顺带提及"
      }
    ],
    "notes": "【搭配考点】refer to the terms / refer to Appendix 请参阅条款/参阅附录；【形近辨析】前缀辨析：refer (re-回，查阅提及)，prefer (pre-先，更喜欢)，defer (de-下，遵从推迟)，infer (in-内，推断)；【近义辨析】refer to 广泛用于指示读者去特定文献、附录或规范中寻找佐证细节，consult 侧重带着复杂疑难向权威专家或大部头专著请教，cite 专指在论文或法庭上精准指名道姓援引出处，mention 仅在谈话中轻描淡写带过一句。",
    "level": "CET-4/BEC",
    "phonetic": "/refer to/",
    "zh": "查阅; 提及; 参照"
  },
  "remind": {
    "word": "remind",
    "translation": "催促; 提醒",
    "cloze": {
      "sentence": "We wish to ______ you that the remaining balance of $40,000 falls due at the end of this week.",
      "translation": "我们谨此提醒贵方，发票所余4万美元尾款将于本周末到期应付。"
    },
    "form_confusables": [
      {
        "word": "remind",
        "zh": "提醒；催促"
      },
      {
        "word": "remain",
        "zh": "停留保持；依然"
      },
      {
        "word": "remand",
        "zh": "还押候审"
      },
      {
        "word": "refined",
        "zh": "精炼的；文雅的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "remind",
        "zh": "委婉提示交期到期 (留足面子)"
      },
      {
        "word": "notify",
        "zh": "正式下达公文通知"
      },
      {
        "word": "alert",
        "zh": "突发风险警报告知"
      },
      {
        "word": "nudge",
        "zh": "轻微点拨推动"
      }
    ],
    "notes": "【搭配考点】remind sb that / remind sb of 向某人提醒某事/催讨账款（商务催款委婉措辞）；【形近辨析】remain (停留保持)，remand (司法还押)，refined (精炼的)；【近义辨析】remind 在商务信函中专门用于礼貌客气地提请客户注意交期已近或账单到期（给客户留足面子），notify 侧重公对公下达正式公文通报，alert 侧重对突发金融风险发出紧急警报，nudge 侧重软性政策轻推促成决策。",
    "level": "CET-4/BEC",
    "phonetic": "/ri'maind/",
    "zh": "催促; 提醒"
  },
  "compel": {
    "word": "compel",
    "translation": "迫使; 强迫",
    "cloze": {
      "sentence": "Severe harbor congestion may ______ the carrier to divert the vessel to an alternate port.",
      "translation": "严重的港口拥堵可能会迫使承运人将船舶改道驶往备用港口。"
    },
    "form_confusables": [
      {
        "word": "compel",
        "zh": "迫使；强迫"
      },
      {
        "word": "dispel",
        "zh": "驱散；消除"
      },
      {
        "word": "impel",
        "zh": "驱策；推进"
      },
      {
        "word": "repel",
        "zh": "击退；排斥"
      }
    ],
    "semantic_confusables": [
      {
        "word": "compel",
        "zh": "客观情势逼迫别无选择"
      },
      {
        "word": "force",
        "zh": "施加强大外力强迫"
      },
      {
        "word": "coerce",
        "zh": "暴力威胁强行胁迫"
      },
      {
        "word": "oblige",
        "zh": "契约道义约束不得不做"
      }
    ],
    "notes": "【搭配考点】compel sb to do sth 迫使某人做某事（客观情势或法律重压）；【形近辨析】词根-pel-（推/驱使）：compel (强力推/强迫)，dispel (推开驱散)，impel (向内推进驱策)，repel (向后推排斥)；【近义辨析】compel 强调面对无法抗拒的客观事实、自然法则或法律铁律使当事人别无选择，force 侧重使用外在直接蛮力强压，coerce 专指使用人身威胁、敲诈或暴力手段胁迫，oblige 侧重出于道义人情或合约规定使人感到不得不做。",
    "level": "CET-4/BEC",
    "phonetic": "/kəm'pel/",
    "zh": "迫使; 强迫"
  },
  "shipping advice": {
    "word": "shipping advice",
    "translation": "装运通知; 装船通知",
    "cloze": {
      "sentence": "Upon loading the cargo on board, the exporter cabled a ______ advice to the buyer for insurance purposes.",
      "translation": "货物装船完毕后，出口商立即向买方拍发电报发出装运通知，以便买方及时办理投保。"
    },
    "form_confusables": [
      {
        "word": "shipping advice",
        "zh": "装运通知；装船通知"
      },
      {
        "word": "shopping advice",
        "zh": "购物指南建议"
      },
      {
        "word": "shipping invoice",
        "zh": "装运发票"
      },
      {
        "word": "settlement advice",
        "zh": "结算通知书"
      }
    ],
    "semantic_confusables": [
      {
        "word": "shipping advice",
        "zh": "装船通知 (用于买方投保接货)"
      },
      {
        "word": "shipping notice",
        "zh": "装运通知书"
      },
      {
        "word": "dispatch note",
        "zh": "出库发货单"
      },
      {
        "word": "shipment particulars",
        "zh": "船运装载细节数据"
      }
    ],
    "notes": "【搭配考点】send a shipping advice 发出装船通知（外贸核心单据环节，FOB买方据此投保）；【形近辨析】shipping advice (装船通知)，shipping invoice (发货发票)，settlement advice (结算凭单)；【近义辨析】shipping advice (亦称 shipping notice) 是国际贸易专用公文，卖方在货物装船后必须立即向买方发送载明船名、提单号、件数与开航日期的通知，以便买方接单并投保，dispatch note 侧重仓储物流的出库发货凭单，shipment particulars 仅为装船技术细节数据。",
    "level": "CET-4/BEC",
    "phonetic": "/shipping advice/",
    "zh": "装运通知; 装船通知"
  },
  "delay in shipment": {
    "word": "delay in shipment",
    "translation": "船期延误; 迟发货",
    "cloze": {
      "sentence": "The prolonged dock strike caused a serious ______ in shipment of the seasonal merchandise.",
      "translation": "旷日持久的码头工人罢工导致了该批应季货物的严重船期延误。"
    },
    "form_confusables": [
      {
        "word": "delay in shipment",
        "zh": "船期延误；迟发货"
      },
      {
        "word": "decay in shipment",
        "zh": "运输途中腐坏"
      },
      {
        "word": "defect in shipment",
        "zh": "批次到货瑕疵"
      },
      {
        "word": "delta in shipment",
        "zh": "出货变动增量"
      }
    ],
    "semantic_confusables": [
      {
        "word": "delay in shipment",
        "zh": "装运港起运船期耽搁"
      },
      {
        "word": "late delivery",
        "zh": "目的港最终交付逾期"
      },
      {
        "word": "shipping postponement",
        "zh": "主动推迟船期"
      },
      {
        "word": "transit stoppage",
        "zh": "公海航行途中停滞"
      }
    ],
    "notes": "【搭配考点】apologize for the delay in shipment 对装运船期延误致歉；【形近辨析】delay (延误)，decay (腐坏变质)，defect (瑕疵缺陷)；【近义辨析】delay in shipment 严格限定在装运港装船起运环节被不可抗力或工厂排期耽搁，late delivery 侧重货物抵达目的港最终交给买方的交货逾期，transit stoppage 侧重在公海航行途中因海难或封锁被迫停航。",
    "level": "CET-4/BEC",
    "phonetic": "/delay in shipment/",
    "zh": "船期延误; 迟发货"
  },
  "seek": {
    "word": "seek",
    "translation": "寻求; 谋求(货源)",
    "cloze": {
      "sentence": "Due to rising tariffs, multinational corporations are actively ______ new alternative manufacturing hubs.",
      "translation": "鉴于关税上涨，跨国公司正在积极寻找和物色新的替代制造枢纽。"
    },
    "form_confusables": [
      {
        "word": "seek",
        "zh": "寻求；谋求；物色"
      },
      {
        "word": "seep",
        "zh": "渗漏；渗出"
      },
      {
        "word": "seem",
        "zh": "似乎；像是"
      },
      {
        "word": "sleek",
        "zh": "光滑发亮的"
      }
    ],
    "semantic_confusables": [
      {
        "word": "seek",
        "zh": "为战略目标审慎物色寻求"
      },
      {
        "word": "search for",
        "zh": "在物理空间搜寻寻觅"
      },
      {
        "word": "pursue",
        "zh": "追求追赶事业目标"
      },
      {
        "word": "explore",
        "zh": "勘探考察新领域"
      }
    ],
    "notes": "【搭配考点】seek alternative suppliers / seek a solution 物色替代供应商/谋求解决方案；【形近辨析】seek (寻求)，seep (渗出液体)，seem (似乎)，sleek (光滑的)；【近义辨析】seek 属于高规格书面动词，专指为了实现崇高或战略性商业目标进行审慎规划并付出持久努力去寻求物色，search for 侧重在具体空间里四处翻箱倒柜找寻某件隐匿或丢失的实体物品，pursue 侧重紧随其后追赶猎物或事业，explore 强调深入未知领域调研勘探。",
    "level": "CET-4/BEC",
    "phonetic": "/si:k/",
    "zh": "寻求; 谋求(货源)"
  },
  "source of supply": {
    "word": "source of supply",
    "translation": "货源供给地; 供应渠道",
    "cloze": {
      "sentence": "To avoid disruptions, the procurement director decided to diversify their ______ of supply across multiple continents.",
      "translation": "为避免供应中断，采购总监决定将货源供应渠道分散至多个大洲。"
    },
    "form_confusables": [
      {
        "word": "source of supply",
        "zh": "货源供给渠道；供应源"
      },
      {
        "word": "course of study",
        "zh": "研修课程"
      },
      {
        "word": "force of supply",
        "zh": "供给势力力量"
      },
      {
        "word": "cause of sorrow",
        "zh": "悲痛的起因"
      }
    ],
    "semantic_confusables": [
      {
        "word": "source of supply",
        "zh": "稳定的原材料供应源头"
      },
      {
        "word": "supply chain",
        "zh": "纵向全产业链条"
      },
      {
        "word": "procurement channel",
        "zh": "商务采购渠道"
      },
      {
        "word": "supplier base",
        "zh": "在册供应商资源库"
      }
    ],
    "notes": "【搭配考点】reliable / alternative source of supply 可靠的/替代性货源供应渠道；【形近辨析】source (源头来源)，course (课程航线)，force (力量暴力)，cause (原因起因)；【近义辨析】source of supply 专指能够稳定输出特定原材料或零部件的货源产地或供应源头，supply chain 强调从原料提炼到终端配送的整个纵向长链条，procurement channel 侧重采购走账的商务通道，supplier base 专指企业入围备案的合格供应商群。",
    "level": "CET-4/BEC",
    "phonetic": "/source of supply/",
    "zh": "货源供给地; 供应渠道"
  },
  "consignment": {
    "word": "consignment",
    "translation": "寄售; 托运货物",
    "cloze": {
      "sentence": "A large ______ of pharmaceutical vaccines arrived at the airport under refrigerated conditions.",
      "translation": "一大批医药疫苗在冷链冷藏条件下运抵机场。"
    },
    "form_confusables": [
      {
        "word": "consignment",
        "zh": "托运货物；寄售"
      },
      {
        "word": "assignment",
        "zh": "分派的任务；作业"
      },
      {
        "word": "alignment",
        "zh": "对齐；一致"
      },
      {
        "word": "consignor",
        "zh": "托运人；寄售人"
      }
    ],
    "semantic_confusables": [
      {
        "word": "consignment",
        "zh": "托运的一整批货物/代销寄售"
      },
      {
        "word": "shipment",
        "zh": "船运批次"
      },
      {
        "word": "cargo",
        "zh": "交通工具装载的大宗散装货"
      },
      {
        "word": "parcel",
        "zh": "邮政小包裹"
      }
    ],
    "notes": "【搭配考点】goods on consignment 寄售商品（货款售出后结算）；a consignment of goods 一批托运的货物；【形近辨析】assignment (指派任务作业)，alignment (对齐校准)，consignor (发货人)，consignee (收货人)；【近义辨析】consignment 具有两层核心法意：一指经由承运人托运运送的一整单打包货物，二指在寄售贸易中“将货物交给海外代理代为销售、所有权仍归发货人”的寄售方式，shipment 侧重船运轮次，cargo 强调运输工具装载的重型大宗散货，parcel 仅指邮政包裹。",
    "level": "CET-4/BEC",
    "phonetic": "/kən'sainmənt/",
    "zh": "寄售; 托运货物"
  },
  "in good time": {
    "word": "in good time",
    "translation": "适时地; 及时地",
    "cloze": {
      "sentence": "Please dispatch the containers early so that the seasonal stock will arrive in ______ time for Christmas shopping.",
      "translation": "请尽早发运集装箱，以便这批应季存货能适时赶上圣诞购物旺季。"
    },
    "form_confusables": [
      {
        "word": "in good time",
        "zh": "留有充足富余地及时到达"
      },
      {
        "word": "in no time",
        "zh": "立刻马上"
      },
      {
        "word": "in due time",
        "zh": "在适当时机自会..."
      },
      {
        "word": "at that time",
        "zh": "在那个时候"
      }
    ],
    "semantic_confusables": [
      {
        "word": "in good time",
        "zh": "留有从容提前量适时赶上"
      },
      {
        "word": "punctually",
        "zh": "分秒不差踩点准时地"
      },
      {
        "word": "timely",
        "zh": "及时的；适逢其时地"
      },
      {
        "word": "ahead of schedule",
        "zh": "比进度表提前"
      }
    ],
    "notes": "【搭配考点】arrive in good time for... 留有充足富余时间适时赶上...；【形近辨析】in no time (瞬间立马)，in due time (时机成熟时自然会)，in good time (留有充裕提前量适时赶上)；【近义辨析】in good time 强调不仅没有迟到，而且留出了非常从容宽裕的提前量以从容应对后续陈列与销售，punctually 强调分毫不差踩在钟表点上，timely 是形容词侧重“雨来得正合时宜（及时的）”，ahead of schedule 强调比原定甘特图排期进度有所提前。",
    "level": "CET-4/BEC",
    "phonetic": "/in good time/",
    "zh": "适时地; 及时地"
  }
};

  if (typeof window !== 'undefined') {
    window.STONE_LEXICAL_GRAPH = graph;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = graph;
  }
})();
