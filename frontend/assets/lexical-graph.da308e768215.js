/**
 * STONE_LEXICAL_GRAPH (V2: 挖空与英英形近/近义全真阶梯)
 * 本地静态词汇图谱 - 零延时驱动 SAN 阶梯挑战
 */
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
    "notes": "【搭配考点】conform with/to 强调与既定规范或准则一致；【形近辨析】confirm (证实), comfort (安慰), confront (面对)；【近义辨析】comply with 侧重顺从规章，abide by 侧重恪守协议，obey 侧重服从命令。"
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
    "notes": "【搭配考点】vacant position/room 专指职位空缺或房屋空置可入驻；【形近辨析】vague (模糊), vacation (度假), vacuum (真空)；【近义辨析】empty 强调容器或空间内空无一物，available 强调现成可利用，unoccupied 强调未被占用。"
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
    "notes": "【搭配考点】adapt to 强调通过自我调整去适应新环境；【形近辨析】adopt (-opt选择，采纳/收养)，adept (-ept能力，熟练的)，admit (承认)；【近义辨析】adjust 侧重微调位置或心态，accommodate 侧重容纳迁就。"
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
    "notes": "【搭配考点】convert into 强调形态或用途的彻底转变；【形近辨析】divert (转移/改道)，revert (恢复原状)，invert (颠倒/倒置)；【近义辨析】transform 强调结构巨变，alter 侧重局部修改。"
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
    "notes": "【搭配考点】comply with 强调服从规章或法律要求；【形近辨析】complex (复杂的)，complete (完成)，complement (补充/互补)；【近义辨析】conform with 强调一致，abide by 强调恪守。"
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
    "notes": "【搭配考点】scarce resources 专指供不应求的稀缺；【形近辨析】sacred (神圣的)，scare (惊恐)，scar (伤痕)；【近义辨析】rare 强调少见罕见，sparse 强调分布稀落，insufficient 强调数量不足。"
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
    "notes": "【搭配考点】obtain permission/approval 正式用语，通过申请或程序获得；【形近辨析】attain (达到/实现)，maintain (维持)，contain (包含)；【近义辨析】acquire 侧重逐步学到或收购，gain 强调获得利益或优势。"
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
    "notes": "【搭配考点】unite 强调凝聚成统一整体；【形近辨析】untie (解开/松绑)，unique (独一无二)，unit (单位/部件)；【近义辨析】merge 强调机构或实体合并，combine 强调要素结合。"
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
    "notes": "【搭配考点】diverse backgrounds 强调多元性与丰富性；【形近辨析】divert (转向)，reverse (反转)，divorce (离婚)；【近义辨析】various 强调种类繁多，different 强调互不相同。"
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
    "notes": "【搭配考点】abide by 固定搭配，指信守协议或判决；【形近辨析】abandon (遗弃)，abolish (废除)，aboard (在交通工具上)；【近义辨析】comply with 强调合规，obey 强调遵从命令。"
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
    "notes": "【搭配考点】space for 提供空间/余地；【形近辨析】pace (节奏)，spice (香料)，span (跨度)；【近义辨析】room 强调容纳余地，area 强调区域范围。"
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
    "notes": "【搭配考点】universe 专指整个宇宙空间或万物；【形近辨析】universal (普遍的)，university (大学)，reverse (颠倒)；【近义辨析】cosmos 偏向秩序井然的宇宙学体系。"
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
    "notes": "【搭配考点】reverse a decision/policy 彻底改变/推翻决定；【形近辨析】reserve (预订/储备)，revise (修正)，converse (交谈)；【近义辨析】overturn 强调彻底推翻，revoke 强调官方吊销。"
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
    "notes": "【搭配考点】confront challenges/issues 正视并迎面解决挑战；【形近辨析】conform (顺从/一致)，comfort (安慰)，frontier (边境)；【近义辨析】tackle 侧重着手对付，face 较口语化。"
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
    "notes": "【搭配考点】develop technology/skills 研发或逐步培养；【形近辨析】envelop (包围)，devote (奉献)，deploy (部署)；【近义辨析】create 强调从无到有创造，produce 强调生产制造。"
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
    "notes": "【搭配考点】improve productivity/quality 改善提升；【形近辨析】approve (赞成/批准)，prove (证明)，improvise (即兴创作)；【近义辨析】enhance 强调增加价值或美感，boost 强调迅速推动增长。"
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
    "notes": "【搭配考点】achieve goals/profitability 达成目标或成果；【形近辨析】archive (归档)，arrive (到达)，active (积极的)；【近义辨析】accomplish 强调圆满完成任务，attain 强调达到某种高度或境界。"
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
    "notes": "【搭配考点】maintain efficiency/standards 保持维持；【形近辨析】contain (包含)，retain (保留)，obtain (获得)；【近义辨析】preserve 强调保护免受破坏，sustain 强调提供支撑以维持。"
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
    "notes": "【搭配考点】require documents/skills 要求必须具备；【形近辨析】acquire (获得)，inquire (询问)，expire (到期失效)；【近义辨析】demand 语气更强烈的强求，necessitate 强调客观上使之成为必然。"
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
    "notes": "【搭配考点】provide instructions/support 提供支持或信息；【形近辨析】prove (证明)，provoke (挑衅)，prevail (流行/获胜)；【近义辨析】supply 侧重大量物资供应，furnish 较正式。"
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
    "notes": "【搭配考点】supply goods/materials 补给物资；【形近辨析】apply (申请/应用)，comply (遵守)，simply (简单地)；【近义辨析】deliver 侧重送达交付，distribute 侧重分发分配。"
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
    "notes": "【搭配考点】demand changes/answers 强烈要求；【形近辨析】command (命令/统率)，defend (防御)，remand (还押)；【近义辨析】request 侧重客气请求，insist 侧重坚持主张。"
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
    "notes": "【搭配考点】approach to a problem 解决问题的方法/途径；【形近辨析】reproach (责备)，appoint (任命)，approve (赞同)；【近义辨析】method 侧重具体步骤，strategy 侧重宏观长远规划。"
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
    "notes": "【搭配考点】avoid delays/mistakes 避开/防止发生；【形近辨析】void (无效/空虚)，avail (利用)，avid (热切的)；【近义辨析】prevent 强调采取措施使之不发生，evade 强调带有欺骗或逃避责任性质地避开。"
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
    "notes": "【搭配考点】conclude negotiations/agreements 达成/终结正式协议；【形近辨析】include (包含)，exclude (排除)，preclude (阻止)；【近义辨析】finalize 侧重敲定最终细节，settle 侧重平息争议达成一致。"
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
    "notes": "【搭配考点】ensure that 确保某种事实或状态；【形近辨析】insure (投保买保险)，assure (向某人保证使之放心)，endure (忍耐)；【近义辨析】guarantee 强调提供担保或保证品质。"
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
    "notes": "【搭配考点】resolve disputes/conflicts 彻底解决纷争或下定决心；【形近辨析】revolve (旋转)，dissolve (溶解/解散)，evolve (进化)；【近义辨析】solve 侧重解答数学或难题，settle 侧重调解争议。"
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
    "notes": "【搭配考点】amend a law/proposal 正式修订法律、提案或条款；【形近辨析】emend (校订文本文字)，commend (赞赏)，ascend (上升)；【近义辨析】modify 侧重调整使之适合，revise 强调重新审阅修改。"
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
    "notes": "【搭配考点】stipulate terms/conditions 合同或法律明文规定；【形近辨析】stimulate (刺激/激发)，simulate (模拟)，speculate (推测/投机)；【近义辨析】specify 侧重详细指明，prescribe 侧重规定条例或开处方。"
  }
};

  if (typeof window !== 'undefined') {
    window.STONE_LEXICAL_GRAPH = graph;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = graph;
  }
})();
