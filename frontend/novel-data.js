const NOVEL_METADATA = {
  title: "I Hope This Finds You Well",
  title_cn: "祝你一切安好 · 见信如晤 (职场大逃杀)",
  author: "Natalie Sue",
  totalChapters: 51,
  description: "33岁的职场打工人 Jolene 意外获得了公司所有同事私密邮件与 DMs 聊天记录的超级权限。在这座看似风平浪静实则勾心斗角的办公室里，她将如何化解裁员风暴、周旋于假未婚夫与暖男 HR 之间？"
};

const NOVEL_CHAPTERS = [
  {
    "id": 1,
    "title": "This Could’ve Been an Email",
    "wordCount": 3663,
    "startPage": 8,
    "beats": [
      {
        "beatId": 1,
        "story": "There will be questions. Ones I don't have socially acceptable answers for. I know because today is my birthday, and a last-minute meeting has appeared on my calendar. A poorly disguised office cake party will be my supposed reward for turning thirty-three six and a half hours ago.",
        "story_cn": "会有疑问。对于那些我没有社会可接受的答案的问题。我知道，因为今天是我的生日，我的日历上出现了最后一刻的会议。一个伪装得很差的办公室蛋糕派对将是我对六个半小时前三十三岁的奖励。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "gives. I almost feel that one is pointless when I've got you in my corner. Best regards, Jolene Adding extra sugar to the part that's visible helps make the invisible part so much more satisfying. I change the font to white and type the stuff that's just for me: P.S.",
        "story_cn": "给出。当我有你在我的角落里时，我几乎觉得一切都是毫无意义的。最好的问候，Jolene 在可见的部分添加额外的糖有助于使不可见的部分更加令人满意。我将字体更改为白色，然后输入适合我的内容：P.S.",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "But she doesn't normally come to these gatherings. And at the end of the table is a guy I don't recognize -- a guy who is openly sketching a small doodle onto a faded yellow legal pad. Beneath his trimmed beard I can see the beginning of a smirk. He's wearing a hoodie that says Warhammer, which would not be my weapon of choice in a war.",
        "story_cn": "但她通常不会参加这些聚会。桌子的尽头有一个我不认识的人——他正在一本褪色的黄色便笺簿上公然地画了一个小涂鸦。在他修剪整齐的胡须下面，我看到了一丝傻笑。他穿着一件连帽衫，上面写着“战锤”，这不会是我在战争中选择的武器。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "The gym coach's mouth twitches again before he turns his gaze to the window. I'm here dealing with an actual nightmare, and this guy has the audacity to laugh. \"Maybe I left my computer logged in?\" I mutter. Nobody on the panel will look directly at me.",
        "story_cn": "体育教练的嘴角再次抽动，然后将目光转向了窗户。我在这里面对的是一场真正的噩梦，而这个家伙竟然厚颜无耻地笑。 “也许我的电脑保持登录状态？”我嘀咕道。小组里没有人会直视我。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "title": "Walk of Shame",
    "wordCount": 1619,
    "startPage": 18,
    "beats": [
      {
        "beatId": 1,
        "story": "I follow Gregory like a scorned child. Clifford strolls behind me, whispering chipper hellos to the tilting heads we pass. Eight years of doing everything I could to remain invisible here, and this is what it comes to. There were days when not one person said a word to me.",
        "story_cn": "我像一个被蔑视的孩子一样跟随格雷戈里。克利福德在我身后漫步，低声向我们经过的歪着头的人打招呼。八年来，我竭尽全力在这里保持隐身状态，这就是结果。有几天没有人对我说一句话。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Gregory halts and loudly proclaims, \"Everyone, this is our new HR analyst, Cliff. He'll be shadowing some of our processes to learn more about what we do here.\" Then he nudges Cliff in the side, who doesn't hide his flinch. \"Don't worry. He won't be spying on everyone that much.\" Cliff's eyelids droop to half-mast, which I appreciate, as whispers creep over the cubicle walls.",
        "story_cn": "格雷戈里停了下来，大声宣布：“各位，这是我们新的人力资源分析师克里夫。他将跟踪我们的一些流程，以更多地了解我们在这里所做的事情。”然后他轻轻推了推克里夫的身侧，克里夫毫不掩饰他的退缩。 “别担心。他不会那么监视所有人。”克里夫的眼睑垂下半旗，我很欣赏这一点，因为小隔间的墙壁上传来窃窃私语。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Okay. I feel like I need to warn you that if your emails contain certain words, they'll be flagged and sent to management -- so tread lightly.\" His smile curls up, all cheeky, as he leans in conspiringly. \"Also, your browser will block certain searches and websites.\" His fresh-linen scent lingers past his words. He's speaking in low tones, but still, he needs to keep his voice down.",
        "story_cn": "“好吧。我觉得我需要警告您，如果您的电子邮件包含某些单词，它们将被标记并发送给管理层 - 所以请小心行事。”当他阴谋地倾身时，他的笑容卷起，厚颜无耻。 “此外，您的浏览器将阻止某些搜索和网站。”他的话语中还残留着清新的亚麻香味。他说话的声音很低，但他仍然需要压低声音。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "my complete inability to be a casual person about anything. I failed miserably during my first six months. I had no idea yet about things like: working faster than everyone is bad, actually; not talking about your private life with colleagues is suspicious; and you have to be fake nice to powerful people even when they treat you horribly. When I finally realized that the same situations that caused me so much anxiety in high school had followed me here, I had a panic attack and took four sick days.",
        "story_cn": "我完全无法成为一个对任何事都随心所欲的人。在我的前六个月里，我惨遭失败。我还不知道这样的事情：实际上，比其他人工作得更快是不好的；不与同事谈论你的私生活是可疑的；你必须对有权势的人假装友善，即使他们对待你很糟糕。当我终于意识到高中时让我如此焦虑的同样情况也跟着我来到这里时，我惊恐发作，请了四天病假。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "title": "Birthday Party for One",
    "wordCount": 2843,
    "startPage": 23,
    "beats": [
      {
        "beatId": 1,
        "story": "She wasn't waiting at the bench by the corner when I got off the bus, but I can still sense her. I walk slowly up the pathway, which boasts several cracks and a variety of weeds, to my apartment complex. \"Jolene!\" Miley calls. My stomach drops.",
        "story_cn": "当我下车时，她并没有在街角的长凳上等我，但我仍然能感觉到她。我慢慢地沿着小路走去，小路有几条裂缝，杂草丛生，来到了我的公寓大楼。 “乔琳！”麦莉打来电话。我的胃在下降。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "\"That's not true. My mom's thirtieth birthday was so big that I had to go to my cousin's 'cause they couldn't fit us all in.\" My heart constricts against my will. There's a reason Miley is always in the hallway or sitting on the stoop of the building, much as I try to pretend not to notice. Ever since she was six, her mom would send her outside to play alone.",
        "story_cn": "“那不是真的。我妈妈的三十岁生日太盛大了，我不得不去我表弟那里，因为他们无法容纳我们所有人。”我的心违背我的意愿而收缩。麦莉总是在走廊里或坐在大楼的门廊上是有原因的，尽管我试图假装没有注意到。从她六岁起，妈妈就送她一个人出去玩。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "okay, or they'd suddenly realize they didn't even know where I was from. Rather than letting things get messy, I settled into my Netflix and nothing routine. It meant I had lived through it. Plus, I survived everything before.",
        "story_cn": "好吧，不然他们会突然意识到他们甚至不知道我来自哪里。我没有让事情变得混乱，而是沉迷于Netflix，没有任何例行公事。这意味着我已经经历过它。另外，我之前经历过的一切都幸存下来了。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "for the office. We were both quietly enraged that Gregory lumped us and a few others into a token group for a Q&A session to \"educate the office.\" After the ordeal, Gregory praised himself for personally hiring us both, even though I'm certain during my interview he had no idea I was anything other than white. After that, Armin and I never mentioned anything about our Iranian backgrounds again. And I'm not even sure we should speak about it, or if Armin even believes me.",
        "story_cn": "对于办公室。格雷戈里把我们和其他几个人分成了一个象征性的小组，进行问答环节，以“教育办公室”，这让我们都暗暗感到愤怒。经历了磨难之后，格雷戈里称赞自己亲自雇用了我们俩，尽管我确信在采访中他并不知道我不是白人。从那以后，阿明和我再也没有提到过我们的伊朗背景。我什至不确定我们是否应该谈论这件事，或者阿明是否相信我。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "title": "Hangovers Are a WIP",
    "wordCount": 1876,
    "startPage": 31,
    "beats": [
      {
        "beatId": 1,
        "story": "The day after my thirty-third birthday, I wake up with a stiffness in my limbs so intense I'm certain I actually died and my body has begun rigor mortis. The sun is far too bright, and my brain bangs against my skull. Pain seems to reach into me from another realm. It's like everything -- all the booze, the workdays, and a lifetime of angst -- has taken literal bites out of me.",
        "story_cn": "三十三岁生日的第二天，我醒来时发现四肢严重僵硬，我确信我真的死了，而且我的身体已经开始尸僵。太阳太亮了，我的大脑撞击着我的头骨。痛苦似乎从另一个境界触及我。就好像所有的事情——所有的酒、工作日和一生的焦虑——都让我痛苦不堪。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "If I ignore her, she'll just show up in person. So I hold the phone up to my face and hit accept. Mom's already scowling as the call connects, and in the corner of the screen, I can see why: my eyes are bloodshot and ringed with smudged mascara. I tilt the camera away, but it isn't fast enough.",
        "story_cn": "如果我不理她，她就会亲自出现。于是我把手机举到脸上，然后点击“接受”。当电话接通时，妈妈已经皱起了眉头，在屏幕的一角，我可以看到原因：我的眼睛布满血丝，睫毛膏弄脏了。我将相机倾斜，但速度不够快。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "My gaze drifts to the wall again, thick and milky from several layers of paint meant to wash over each previous tenant's emotional baggage. Maybe it doesn't look that great to an outside observer, but the life I've built here in my apartment is everything compared with what it was when I was living with my parents. Here, I'm free to drink and watch whatever I want and not be perceived with disapproval 24/7. I don't have to feel like a failure all the time, and when I do, it's on my terms.",
        "story_cn": "我的目光再次飘向墙壁，墙壁上涂了几层厚厚的乳白色油漆，目的是为了洗刷每个前房客的情感包袱。也许在外人看来，这并不那么美好，但与我和父母住在一起时相比，我在公寓里建立的生活就是一切。在这里，我可以自由地喝酒、看任何我想看的东西，并且 24/7 都不会被人反对。我不必一直感觉自己是个失败者，当我这样做时，那是我的意愿。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Even though there are quite a few Persian markets in town, Mom gets most of her specialty groceries via a network of dealers sprinkled across the city due to \"better pricing and quality.\" It's all very tough to track. \"I stopped going to Peyman. He's cheapskate and his saffron is no good anymore.\" It's best not to get into it. \"Mom, I'm really not feeling well and won't be good for a visit.",
        "story_cn": "尽管城里有不少波斯市场，但由于“价格和质量更好”，妈妈的大部分特色杂货都是通过遍布城市的经销商网络购买的。这一切都很难追踪。 “我不再去找佩曼了。他是个小气鬼，他的藏红花已经不再好了。”最好不要陷入其中。 “妈，我身体不太舒服，不适合去看望。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 5,
    "title": "Bcc Bcc’ident",
    "wordCount": 2318,
    "startPage": 36,
    "beats": [
      {
        "beatId": 1,
        "story": "The buzz of one forever-dying fluorescent light mixes with the saddest scent in the world: burned hazelnut coffee. And another dreadful week begins. Caitlin eyes me as I approach our pod, and her smirk makes my head pound. Rhonda looks up and then quickly diverts her gaze to mark my arrival.",
        "story_cn": "一盏永远熄灭的荧光灯的嗡嗡声与世界上最悲伤的气味混合在一起：烧焦的榛子咖啡。又一个可怕的一周开始了。当我走近我们的吊舱时，凯特琳看着我，她的傻笑让我头晕目眩。朗达抬起头，然后迅速转移视线，标志着我的到来。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "A rush of pillowy soft sweetness hits. It's the best donut in the world. But I can't enjoy it. Gregory pounds through the office door, all jolty and happy.",
        "story_cn": "一阵枕头般柔软的甜味扑面而来。这是世界上最好吃的甜甜圈。但我无法享受它。格雷戈里冲进办公室门，心情愉悦又兴奋。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Hey, So I got an odd IG message from Jolene on Friday. Did you know it was her birthday? Shouldn't the Morale Boosters have gotten a cake party together? I'm not the best person to point this kind of oversight out to Rhonda, but I think she forgot.",
        "story_cn": "嘿，周五我收到了 Jolene 发来的一条奇怪的 IG 消息。你知道今天是她的生日吗？士气助推者不应该一起举办一个蛋糕派对吗？我不是向朗达指出这种疏忽的最佳人选，但我认为她忘记了。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "She wasn't hitting on me. Anyway, I feel bad for Jolene. Armin I slump so low in my chair the plasticky metallic scent from the wiring under my desk tinges my nostrils. Pity from Armin, a guy who once reheated a day-old hot dog (bun, ketchup, and all) in the toaster oven, is too much to bear.",
        "story_cn": "她没有打我。无论如何，我为乔琳感到难过。阿明，我瘫坐在椅子上，桌子下面的电线散发出的塑料金属气味钻进了我的鼻孔。阿明曾经在烤箱里重新加热了一天的热狗（小圆面包、番茄酱等等），他的怜悯让人难以忍受。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 6,
    "title": "HR Stands for: Helpful Rarely",
    "wordCount": 1116,
    "startPage": 43,
    "beats": [
      {
        "beatId": 1,
        "story": "Cliff's office is located on the fourth floor, down a remote hallway mostly used for storage and utility rooms that remain undisturbed and lifeless as I pass their droning hum. But then I catch the music -- something acoustic and maybe whimsical -- coming from what must be his office. I reach his open doorway and spot his plaid-shirted back first. His arms are stretched behind his head as he leans back in his chair.",
        "story_cn": "克里夫的办公室位于四楼，沿着一条偏远的走廊，走廊主要用作储藏室和杂物间，当我经过它们的嗡嗡声时，这些房间保持不受干扰，毫无生气。但随后我听到了音乐——某种原声的、也许有些异想天开的音乐——一定是从他的办公室里传来的。我到达他敞开的门口，首先看到了他穿着格子衬衫的背影。当他靠在椅子上时，他的手臂伸到脑后。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "'90s movie posters overtake the walls, and there's a sugary scent wafting toward me from an identical donut box to the one he left me. I stop in my tracks and narrow my eyes at him. \"Didn't you just start here?\" \"Been here for six business days. Why?\" But he follows my gaze to the windowsill of framed pictures and bobbleheads.",
        "story_cn": "墙上贴满了 90 年代的电影海报，一股甜甜圈的香味从一个和他留给我的一模一样的甜甜圈盒里向我飘来。我停下脚步，眯起眼睛看着他。 “你不是才刚刚开始吗？” “在这里已经六个工作日了。为什么？”但他随着我的目光望向窗台上的镶框照片和摇头娃娃。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "toys, and nod in understanding. Obviously this Cliff is not a serious person. And obviously, there's been some kind of mistake. It's like instead of having any restrictions added, I've been given some unauthorized top management access to everything on the server.",
        "story_cn": "玩具，并点头表示理解。显然这个克里夫并不是一个正经之人。显然，其中存在某种错误。这就像我没有添加任何限制，而是获得了对服务器上所有内容的未经授权的高层管理访问权限。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 7,
    "title": "Real Talk",
    "wordCount": 2640,
    "startPage": 46,
    "beats": [
      {
        "beatId": 1,
        "story": "Rhonda is picking at Joey Tribbiani, her fern. She named him that a few weeks after she adopted him. And she adopted him from my desk (without my consent) not long after I started here, because \"somebody needed to water him.\" No matter how carefully she tends to him, his leaves continue to yellow and wither. As she crunches off the dead pieces, shaking her head, she announces, \"I think it's the negativity around here.\" She sprays Joey and gently massages the mist into the soil.",
        "story_cn": "朗达正在采摘她的蕨类植物乔伊·崔比亚尼。她在收养他几周后给他起了这个名字。在我开始工作后不久，她就从我的办公桌上收养了他（未经我的同意），因为“有人需要给他浇水”。无论她多么小心地照料他，他的叶子仍然变黄、枯萎。当她嚼碎死去的碎片时，她摇着头宣布，“我认为这是这里的消极情绪。”她向乔伊喷洒喷雾，并轻轻地将雾气按摩到土壤中。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Now I know that, when given the opportunity to read shit that's personal and that I have no business reading, I will absolutely do it. I've spent the past hour digging through all their inboxes. And they're all so much worse than they let on. Every email is either a complaint about another person not doing their job right or a rebuttal to protect their own ass.",
        "story_cn": "现在我知道，当有机会阅读我没有商业读物的私人文章时，我绝对会这么做。我花了一个小时翻遍了他们所有的收件箱。而且他们的情况都比他们表现出来的要糟糕得多。每封电子邮件要么是对他人没有做好工作的抱怨，要么是为了保护自己的反驳。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "there are no pictures of Kyle there. I guess a weird, distant part of me thought her life with him was fictional. Her gaze crawls my way, and I jolt hard enough that my chair squeaks. Damn it, I was staring way too hard.",
        "story_cn": "那里没有凯尔的照片。我想我内心有一个奇怪而遥远的部分认为她和他在一起的生活是虚构的。她的目光朝我这边爬来，我猛地一震，椅子发出吱吱的声音。该死，我看得太仔细了。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "I almost break my neutral expression as I peek at each of my colleagues. Their faces are all tilted toward the light of their screens like tropical plants to sunlight. When I asked Armin about the bike pledge, I simply wanted clarification on what I'd be getting for my dollars. I was broke, late on rent, and confused about how his biking would help anyone.",
        "story_cn": "我几乎打破了中立的表情，偷偷地看向每一位同事。他们的脸都朝向屏幕的光线倾斜，就像热带植物朝向阳光一样。当我向阿明询问自行车承诺时，我只是想弄清楚我花的钱能得到什么。我身无分文，房租迟交，而且很困惑他的自行车对任何人有何帮助。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 8,
    "title": "Aunt: Another Four-Letter Word",
    "wordCount": 2187,
    "startPage": 53,
    "beats": [
      {
        "beatId": 1,
        "story": "Even though the promise of mountains of kabob could normally make me do questionable acts, dread sits heavy in my chest. After I left work, my head was tight and hot. I drafted a cancellation text to Mom, but right before hitting send, an image of her explaining my absence popped in my head, and I couldn't pull the trigger. When I pull open the brass handle of the creaky wooden door of House of Shiraz, I'm greeted by the savory smell of dozens of khoobideh skewers roasting over a flame grill.",
        "story_cn": "尽管山上烤肉串的承诺通常会让我做出可疑的行为，但恐惧却沉重地压在我的胸口。下班后，我的头又闷又热。我起草了一条取消短信给妈妈，但就在点击发送之前，我的脑海中突然出现了她解释我缺席的画面，我无法扣动扳机。当我拉开 House of Shiraz 嘎吱作响的木门的黄铜把手时，迎接我的是数十根 khoobideh 串在火焰烤架上烤的美味。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "wielded as a weapon. She nudges my mom, who is seated beside her, and mutters something -- a lovely comment about me, I'm sure. Mom yells, \"Jolene, come sit,\" as if I were planning on going to the kitchen and showing my nips to the chef if not for her direction. Roya, the one Mom can stand the least, raises her newly threaded eyebrows as she spots me.",
        "story_cn": "作为武器使用。她碰了碰坐在她旁边的妈妈，嘟囔了一些什么——我确信这是对我的可爱评论。妈妈喊道：“乔琳，过来坐下。”如果没有她的指导，我就打算去厨房向厨师展示我的咬痕。罗亚（Roya）是妈妈最受不了的人，当她看到我时，她扬起了新修的眉毛。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "her rice and continues. \"Fereshteh comes to see all of us twice a week, and she's running a big engineering project, and her kids are both in very demanding extracurriculars.\" Damn, Roya, fire right out the gate. I should've expected this. When I lived with my parents during my frozen-in-time years, I did everything my mom told me to do, yet I was still a big disappointment.",
        "story_cn": "她的米饭并继续。 “Fereshteh 每周来看我们两次，她正在管理一个大型工程项目，她的孩子们都参加了非常严格的课外活动。”该死的，罗亚，从大门开火。我早该预料到这一点。当我在时光凝固的岁月里和父母住在一起时，我做了妈妈让我做的一切，但我仍然感到非常失望。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Aunty Miriam lowers her brows as she finishes her bite of joojeh. \"It's not good to only worry about work. You're thirty-three now. Time is running out for kids.",
        "story_cn": "米里亚姆阿姨吃完那口 joojeh 后，低下了眉毛。 “只担心工作是不好的。你现在三十三岁了，留给孩子的时间已经不多了。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 9,
    "title": "Conveyor Belt Artist",
    "wordCount": 2199,
    "startPage": 59,
    "beats": [
      {
        "beatId": 1,
        "story": "The \"grocery shop of shame\" is a form of modern art that peaks in its grandeur at the conveyer belt. My post–aunty dinner angst may have influenced what went into the basket. Plus, the signature sky-blue color painted all over Supershops -- the same shade that brands everything in our office -- triggers something in me that can only be cured by processed foods. All the items that I plan to purchase and consume are splayed out and slowly gliding toward the cashier, a visual representation of the state of my mental health.",
        "story_cn": "“耻辱杂货店”是一种现代艺术形式，在传送带上达到了其宏伟的顶峰。我在阿姨晚餐后的焦虑可能影响了篮子里的东西。另外，超级商店各处都涂满了标志性的天蓝色——与我们办公室里所有东西的颜色相同——触发了我内心的某种只能通过加工食品才能治愈的东西。我计划购买和消费的所有物品都摊开并慢慢滑向收银台，这是我心理健康状态的直观表现。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "gangster in an Adidas sweatsuit, and his basket is filled with puffy bags of chips with reckless flavors made for eating alone: pickled onion, chilly and chive. Solidarity. His gaze shifts from the conveyer belt to me. He jolts in surprise, then a genuine smile overtakes him.",
        "story_cn": "穿着阿迪达斯运动服的歹徒，他的篮子里装满了蓬松的薯片袋，这些薯片的口味非常适合独自食用：腌洋葱、辣椒和细香葱。团结一致。他的目光从传送带转移到我身上。他惊讶地浑身一震，然后脸上露出了真诚的微笑。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"I suppose.\" I nod politely to the cashier as she hands me my receipt. \"Well, bye,\" I mutter as I grab the frayed handles of my Supershops reusable bags and hope for peace. \"See ya,\" he calls, and holds up his keys in a wave. I'm already walking through the automatic doors, too far gone to wave back.",
        "story_cn": "“我想。”当收银员递给我收据时，我礼貌地向她点头。 “好吧，再见。”我一边嘟哝着，一边抓住超级商店可重复使用的袋子磨损的把手，希望能平安归来。 “再见，”他喊道，挥手举起钥匙。我已经走过自动门了，已经走得太远了，无法向他挥手。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "\"Sorry,\" Cliff mutters. \"I don't have too many guests in here. But I think you should know that I realize how bad it is.\" \"It's nice,\" I say. I don't mean it to sound sarcastic.",
        "story_cn": "“抱歉，”克里夫低声说道。 “我这里没有太多客人。但我想你应该知道，我意识到这有多糟糕。” “这很好，”我说。我的意思并不是要听起来讽刺。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 10,
    "title": "Power Move",
    "wordCount": 4291,
    "startPage": 65,
    "beats": [
      {
        "beatId": 1,
        "story": "I flash my badge, and the door to my office floor buzzes open, welcoming me with a charred plastic scent. The big clock in front of my desk tells me that it's not even 8:15, yet some shithead has already burned popcorn and tainted up the office. My feet grow heavier with each step. I just need to make it through another cursed day.",
        "story_cn": "我亮出了我的徽章，办公室楼层的门嗡嗡地打开，带着烧焦的塑料气味欢迎我。我办公桌前的大钟告诉我，现在还不到8点15分，但有些混蛋已经烧了爆米花，弄脏了办公室。我的脚每走一步都变得更重。我只需要度过又一个被诅咒的日子。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "A chuckle bubbles up from my chest, but I catch it before it can find its way out. I thought I was the only one wishing for death during that meeting. GARRET: Greg plans on doing one of those round tables at the end and asking for efficiency strategies. CAITLIN: Okay, that's good to know .",
        "story_cn": "一声笑声从我的胸口涌出，但我在它发泄出来之前接住了它。我以为在那次会议中我是唯一一个想死的人。加莱特：格雷格计划在最后举行一场圆桌会议，并询问效率策略。凯特琳：好的，很高兴知道这一点。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "But next to mine is a note that reads: \"potential for dismissal with cause, should employee not pass course.\" I already knew this, but seeing it written there in Times New Roman sends a sharp bite through my ribs. I try to shake it off and focus on the silver lining this paper reaffirms: my dismissal isn't guaranteed yet. I close the folder and go back to my computer, heading to the Supershops employee portal. I search for the document lead position, and motherfucker, the salary range would be a minimum 15 percent increase in pay.",
        "story_cn": "但我的旁边有一张纸条，上面写着：“如果员工没有通过课程，可能会因故被解雇。”我已经知道这一点，但看到它写在《泰晤士报新罗马体》上，我的肋骨感到一阵刺痛。我试图摆脱它，把注意力集中在这篇论文重申的一线希望上：我的解雇还不确定。我关闭文件夹并返回计算机，前往 Supershops 员工门户。我寻找文件主管职位，天哪，薪资范围至少要加薪 15%。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Gregory nods as he walks off. I watch Caitlin turn to her computer and innocently run her hands across the keyboard. A DM pops up to Garret: WTF, he wants Jolene to pass now? This is mad.",
        "story_cn": "格雷戈里点点头走开。我看着凯特琳转向她的电脑，天真地双手抚过键盘。一个私信突然出现在 Garret 面前：WTF，他现在想让 Jolene 通过吗？这太疯狂了。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 11,
    "title": "But Who Will Watch Me Watch the Movie?",
    "wordCount": 2128,
    "startPage": 77,
    "beats": [
      {
        "beatId": 1,
        "story": "As I make my way down the lone and darker corridor that leads to Cliff's office, my mind races. I have a bit of heavy lifting to do today, since my first few impressions weren't great. Entering Cliff's office is like emerging from a cave. The blinds are pulled back to let in the sun, which twinkles against all his plastic action figures.",
        "story_cn": "当我沿着通向克里夫办公室的孤独而黑暗的走廊走去时，我的思绪飞速运转。今天我有一些繁重的工作要做，因为我最初的印象并不好。进入克里夫的办公室就像从山洞里出来一样。百叶窗被拉开，让阳光照射进来，阳光在他所有的塑料人偶的映衬下闪闪发光。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "\"Probably for the best.\" I smile back and scan for something better, something I actually like, but hardly anything in his office, despite the clutter, is something I recognize. It's like we're from different realities. He's the pampered HR rep with millions' worth of fandom crap, and I'm the admin who loves reality shows and early 2000s repeats where I've memorized all the plotlines. He clears his throat and gestures to a box of Timbits.",
        "story_cn": "“也许是最好的。”我回以微笑，寻找更好的东西，一些我真正喜欢的东西，但他的办公室里几乎没有任何东西，尽管很混乱，是我认识的。就好像我们来自不同的现实。他是一位娇生惯养的人力资源代表，拥有数百万粉丝的废话，而我是一名管理员，喜欢真人秀和 2000 年代初的重复节目，我已经记住了所有情节。他清了清嗓子，指着一盒 Timbits。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "be the Supershops brand colors. My palms start to sweat. \"But who is going to watch you watch me?\" His eyelids droop to half-mast. \"Nobody.\" \"So they're just going to take your word for it then?",
        "story_cn": "是Supershops的品牌颜色。我的手掌开始出汗。 “但是谁会看着你看着我呢？”他的眼睑下垂至半垂。 “没人。” “那么他们就会相信你的话？",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "any form of reservation from you.\" He raises a teasing eyebrow, then becomes more serious. \"But ignoring your colleagues can cause issues too.\" \"Fair.\" I nod and stare straight ahead. \"I'm working on that too.\" He restarts the video. We spend about eight minutes facing the monitor, but all I can hear is the hum of the VCR and the sound of his every breath.",
        "story_cn": "你有任何形式的保留。”他挑衅地扬起了眉毛，然后变得更加严肃。“但是忽视你的同事也会引起问题。”“公平。”我点点头，直视前方。“我也在研究这个。”他重新开始视频。我们对着监视器花了大约八分钟，但我只能听到录像机的嗡嗡声和他的每一次呼吸的声音。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 12,
    "title": "Dos and Donuts",
    "wordCount": 2198,
    "startPage": 83,
    "beats": [
      {
        "beatId": 1,
        "story": "The morning has just settled after the chaos hour of people marching around to caffeinate, put lunch bullshit in the fridge, and pretend to care about Marsha's opinion of the TV show she watched last night with her husband. Armin slipped in about fifteen minutes late, with bloodshot eyes and a pale forehead, all recorded by Rhonda. I take a long swig of coffee and swish it around in my mouth to warm my tongue, still cottony from the wine last night. I tried not to, but it was the meeting with Cliff.",
        "story_cn": "早上刚刚过去，混乱的时刻过后，人们到处喝咖啡，把午餐的废话放进冰箱，假装关心玛莎对昨晚和丈夫一起看的电视节目的看法。阿明迟到了大约十五分钟，眼睛布满血丝，额头苍白，这一切都被朗达记录下来。我喝了一大口咖啡，然后在嘴里漱口，温暖我的舌头，因为昨晚的酒，我的舌头仍然柔软。我试图不这么做，但那是与克里夫的会面。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Understanding dawns on me. No wonder Caitlin's been so fast lately! \"Can you give me the leg up again this month?\" Caitlin had asked Rhonda yesterday. I couldn't figure out how she was managing to complete her spreadsheet only an hour after the data arrived, but holy shit, Rhonda's been giving her a sneak peek.",
        "story_cn": "我渐渐明白了。难怪凯特琳最近动作这么快！ “这个月你能再次支持我吗？”凯特琳昨天问过朗达。我不明白她是如何在数据到达后仅一个小时就完成了电子表格的，但天哪，朗达已经让她先睹为快了。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Beneath her emails is a folder that contains her desk phone's log records. She's on that thing all day long, so I quickly skim through it. Mostly she's talking to other department heads or to Gregory. But one odd pattern draws the eye.",
        "story_cn": "在她的电子邮件下面有一个文件夹，其中包含她桌面电话的日志记录。她整天都在关注那件事，所以我很快就浏览了一遍。她主要是在与其他部门负责人或格雷戈里交谈。但一种奇怪的图案吸引了人们的注意。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Crickets in response. Cliff's smile is hesitant and small. \"Just wanted to say hi again. I'm looking forward to getting to know you all.\" A message flashes on my screen, from Caitlin to Garret: Please lord, let me hold my cringe.",
        "story_cn": "蟋蟀回应。克里夫的笑容有些犹豫，而且很小。 “只是想再次打个招呼。我期待着认识你们大家。”我的屏幕上闪现出一条消息，是凯特琳发给加勒特的：主啊，请让我忍住我的畏缩。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 13,
    "title": "Music Taste Is Raunch Rock",
    "wordCount": 2030,
    "startPage": 89,
    "beats": [
      {
        "beatId": 1,
        "story": "Cliff's already got his coat on when I meet him at his office, and he's shutting his computer down. \"Ready?\" he asks with a strained smile as he marches up to where I'm lingering just outside the threshold. I nod and force a smile back, stiff and unnatural on my lips. We make our way to the parkade wordlessly, our footsteps echoing off the concrete that encompasses the stairwell.",
        "story_cn": "当我在他的办公室见到克里夫时，他已经穿上外套了，他正在关闭电脑。 “准备好？”他一边大步走向我在门槛外徘徊的地方，一边勉强微笑着问道。我点点头，强颜欢笑，嘴唇僵硬而不自然。我们一言不发地走向停车场，脚步声在楼梯间的混凝土上回响。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "I raise a hand to my chest and clutch my fake pearls. \"Are you giving out HR secrets? I'm honored.\" Finally, he flashes the first real grin I've seen since the donut incident. \"Au contraire.",
        "story_cn": "我将一只手举到胸前，抓紧我的假珍珠。 “你泄露了人力资源的秘密吗？我很荣幸。”最后，他露出了自甜甜圈事件以来我所见过的第一个真正的笑容。 “相反。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "ones, let me know now.\" \"Fair enough,\" he smirks. \"Maybe we should make a list?\" I break eye contact as I remember the list I already have stashed in my desk drawer, particularly the last item on it: Get Cliff to like me. My plan seems so obvious now. I clear my throat to stifle down the guilt.",
        "story_cn": "“好吧，”他傻笑着，“也许我们应该列一个清单？” 当我想起我已经藏在办公桌抽屉里的清单，特别是上面的最后一项：让克里夫喜欢我时，我中断了目光接触。我的计划现在看来很明显了。我清了清嗓子，压下愧疚感。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "were sandwiches made to everyone's specifications. Candy in bulk. A makeup counter filled with possibility and reinvention.\" I sigh wistfully, for maximum effect. \"If that little girl had known that one day she'd work in that very place's western regional office, she would've shed tears of joy to fill a river.\" \"Okay.\" Cliff sighs.",
        "story_cn": "是根据每个人的规格制作的三明治。散装糖果。一个充满可能性和革新的化妆柜台。”我若有所思地叹了口气，以达到最大的效果。“如果那个小女孩知道有一天她会在那个地方的西部地区办事处工作，她会流下喜悦的泪水，填满一条河流。” “好吧。”克里夫叹了口气。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 14,
    "title": "Armin & Rhonda EFFs",
    "wordCount": 2333,
    "startPage": 95,
    "beats": [
      {
        "beatId": 1,
        "story": "Before work even starts, the morning is already going decently. I got in early with Cliff, and during the ride I managed to get him to explain the history of Warhammer and how measuring tape is somehow involved. He was focused enough on driving that he didn't even notice my eyes glazing over. In the office I made the coffee without burning it.",
        "story_cn": "还没开始工作，早上就已经过得很顺利了。我很早就和克里夫在一起了，在骑行过程中我设法让他解释了《战锤》的历史以及卷尺是如何参与其中的。他全神贯注地开车，甚至没有注意到我目光呆滞。在办公室里，我煮了咖啡，但没有烧焦。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "I close out immediately upon seeing three of the same type of red-faced man in a too close/low profile. One of them has his knee on a canoe to show he's outdoorsy, but his shorts sit tucked around his junk to show he's violating as well. Enough of that, I tell myself. But I am a masochist, I guess, because less than two seconds later, I head to the website and search for Rhondabear1960.",
        "story_cn": "当我看到三个同类型的红脸男人距离太近/低调时，我立即关闭了。其中一人将膝盖放在独木舟上，以表明他喜欢户外活动，但他的短裤塞在他的垃圾周围，以表明他也违规了。够了，我告诉自己。但我猜我是一个受虐狂，因为不到两秒后，我就前往网站并搜索 Rhondabear1960。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "shut just in time. \"Good morning,\" I say, way too brightly. For a moment she hesitates, odd expression on, before a smile forms on her face and she replies, \"Good morning.\" She takes a folder and heads to the copy room. The manual clock strikes 8:15.",
        "story_cn": "及时关闭。 “早上好，”我说，声音太明亮了。她犹豫了一会儿，脸上露出奇怪的表情，然后脸上露出微笑，回答道：“早上好。”她拿起一个文件夹，走向复印室。手动时钟敲响了 8 点 15 分。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "And we all suffer. I pretend to stare at my screen, stone-faced. Armin grates his bottom lip with his teeth. \"But seriously, why are you printing so much?\" He gestures at the many, many stacks of papers on her desk.",
        "story_cn": "我们都受苦。我假装面无表情地盯着屏幕。阿明用牙齿咬着下唇。 “但是说真的，你为什么要打印这么多？”他指着她桌子上许许多多的文件。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 15,
    "title": "Minor Distractions",
    "wordCount": 1188,
    "startPage": 102,
    "beats": [
      {
        "beatId": 1,
        "story": "After a lunchtime spent eating a ham sammy while solo people-watching at Prince's Island Park, clashing with the crowds of laughing families, ball- busting businessmen, and brightly colored runners, I return and confirm that Rhonda has officially shared my half of the inventory data grid with me, even though Caitlin received her piece yesterday evening. No matter, because I already finished it. Now I just have to wait a believable amount of time to return it. Caitlin is throwing a plastic container, half full of browning Caesar salad, into the waste bin under her desk.",
        "story_cn": "午饭后，我一边在王子岛公园独自观察行人，一边吃着火腿萨米，与一群欢笑的家庭、破坏球的商人和色彩鲜艳的跑步者发生冲突，我回来确认朗达已经正式与我分享了我的一半库存数据网格，尽管凯特琳昨天晚上收到了她的数据。没关系，因为我已经完成了。现在我只需要等待一段可信的时间就可以归还它。凯特琳正在把一个塑料容器扔进她桌子下面的垃圾桶，里面装着半满的棕色凯撒沙拉。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Before any message appears, the accessible door beeps open, followed by a sleek stroller. \"Helloooo!\" calls the stroller pusher, also known as Celeste Laird, who is supposed to be on maternity leave for another six months. And unless that baby knows how to file, she must be bringing it to meet us. Caitlin and Garret both instantly rise from their seats, leaving me in the dark.",
        "story_cn": "在出现任何消​​息之前，无障碍门会发出蜂鸣声打开，后面跟着一辆时尚的婴儿车。 “哈喽！”推婴儿车的人也叫塞莱斯特·莱尔德（Celeste Laird），她本应再休六个月的产假。除非那个婴儿知道如何归档，否则她一定会带着它来见我们。凯特琳和加勒特立刻从座位上站起来，把我留在黑暗中。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Then Thomas begins being passed around like a hot burrito. I curl my hands close against my chest and try to back away. When Caitlin takes said bundle, it stops crying in an instant, and her face softens in a way that makes me realize how hard it's been lately. She inhales the top of the baby's head -- which is a choice -- then smiles and says to Celeste, \"So how is being a mom?\" Celeste starts describing things that sound dire as shit.",
        "story_cn": "然后托马斯开始像热玉米煎饼一样被传递。我双手紧贴胸口，试图后退。当凯特琳接过那包东西时，它立刻停止了哭泣，她的脸变得柔和起来，让我意识到最近有多难受。她吸了吸婴儿的头顶——这是一个选择——然后微笑着对塞莱斯特说，“那么当妈妈感觉怎么样？”塞莱斯特开始描述一些听起来可怕得像狗屎一样的事情。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "But as she passes the baby to Garret, I realize there's no telling what she's going to say to manipulate Cliff tomorrow. And there's no telling what else she's done over the years -- how much my reputation has been messed with in silent conversations and quiet sabotage. This is the only thing I can control. I save the changes and close out.",
        "story_cn": "但当她把孩子交给加勒特时，我意识到不知道她明天会说什么来操纵克里夫。没人知道这些年来她还做了什么——在无声的谈话和无声的破坏中，我的声誉受到了多少损害。这是我唯一能控制的事情。我保存更改并关闭。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 16,
    "title": "Milkshake Brings Nothing to Nobody",
    "wordCount": 2595,
    "startPage": 106,
    "beats": [
      {
        "beatId": 1,
        "story": "As I settle into Cliff's car at the end of the day, I can't help but wonder if we'll be doing this again tomorrow, after Caitlin turns him on me and tells him every horrible thing, real or invented -- it makes no difference sometimes. Cliff shoulder checks me as he turns onto the main road. \"You all right there?\" he asks. I nod.",
        "story_cn": "当我在一天结束时坐进克里夫的车里时，我不禁想知道明天我们是否还会再这样做，在凯特琳向他发起攻击并告诉他所有可怕的事情，无论是真实的还是虚构的——有时这并没有什么区别。当他转向主路时，悬崖肩膀检查了我。 “你在那里还好吗？”他问道。我点点头。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "deep breath and soak in the tree-lined streets and small businesses: little cafés and restaurants, boutiques, and a bookstore. I can sense that Cliff's eyes are still on me, so I think of something to say. \"Oh, that's a cool-looking store.\" I point to a building that's painted bright purple with rainbow accents and an ice-cream-cone-shaped door. It's like a beam of sunshine between the other redbrick storefronts.",
        "story_cn": "深呼吸，沉浸在绿树成荫的街道和小企业中：小咖啡馆和餐馆、精品店和书店。我感觉到克里夫的目光仍在我身上，所以我想到了要说的话。 “哦，这家店看起来很酷。”我指着一座建筑，它被漆成亮紫色，带有彩虹装饰，还有一扇圆锥形的门。就像其他红砖店面之间的一束阳光。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "tables. I try to picture myself sitting at one of those tables with another human, then with Cliff specifically. \"I don't, uh, I don't do . .",
        "story_cn": "表。我试着想象自己和另一个人坐在其中一张桌子旁，然后特别是和克里夫一起坐在一张桌子旁。 “我不，呃，我不这样做……",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "He stands to get me a cup of water, and I use the opportunity to stare at my hands and will myself to hold things together. This is getting old. I should be able to do this. I can be a person.",
        "story_cn": "他站起来给我倒了一杯水，我利用这个机会盯着我的手，并让自己把东西放在一起。这已经老了。我应该能够做到这一点。我可以成为一个人。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 17,
    "title": "Missedcakes",
    "wordCount": 2516,
    "startPage": 113,
    "beats": [
      {
        "beatId": 1,
        "story": "I stare down the scratched-up door to our office floor, willing myself to open it. Each dent tells the story of someone knocking it with the paper cart on a different version of the same old day. My hand is heavy as I pull the handle and drag myself into the sterile air that hasn't seen the light of day. As I make my way to my desk, nobody looks up.",
        "story_cn": "我盯着办公室地板上那扇被划伤的门，希望自己能打开它。每个凹痕都讲述了某人在同一天的不同版本中用纸车敲击它的故事。我的手很重，拉动把手，把自己拖进尚未见天日的无菌空气中。当我走向办公桌时，没有人抬头看我。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "site. I expand my reading into other departments. It's kind of addicting to read work-related emails about tasks I know nothing about. It's like a bizarro- world version of my department, a puzzle made of several different shapes.",
        "story_cn": "地点。我将阅读范围扩展到其他部门。阅读与工作相关的关于我一无所知的任务的电子邮件有点上瘾。这就像我所在部门的奇异世界版本，是由几种不同形状组成的拼图。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "RHONDA: She's helping with that project I'm doing for Gregory. Nothing exciting, dear, mostly account archiving. CAITLIN: If you'd like more help, don't be afraid to ask me. I can even look things over for you -- make sure Jolene's leading you on the right track.",
        "story_cn": "朗达：她正在帮助我为格雷戈里做的那个项目。亲爱的，没什么令人兴奋的，主要是帐户存档。凯特琳：如果您需要更多帮助，请不要害怕来问我。我什至可以为你检查一切——确保乔琳引导你走上正确的道路。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Honey, I know it's not always easy, but could you please reach out here if you can? When you were little, I used to wake up to check on you, just to see if you were still breathing even though I knew you were perfectly safe. I can't do that now. I thought you'd be my baby forever and I can't stop feeling like a mom no matter what.",
        "story_cn": "亲爱的，我知道这并不总是那么容易，但是如果可以的话，可以联系一下这里吗？当你还小的时候，我常常醒来检查你，只是为了看看你是否还在呼吸，尽管我知道你非常安全。我现在不能这么做。我以为你会永远是我的孩子，无论如何我都无法停止感觉自己像个妈妈。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 18,
    "title": "Ungodly Hours",
    "wordCount": 2411,
    "startPage": 120,
    "beats": [
      {
        "beatId": 1,
        "story": "Sunday morning, I'm awoken in the most horrifying way known. It starts with an insistent knock on my apartment door and a screeched, \"Shut up -- is okay.\" The tone of voice my mom uses only when speaking to my dad. What comes next is a yelled, \"Jolene baby! I have brought you some ashe reshteh.\" My heart stops, and I leap out of bed.",
        "story_cn": "周日早上，我以已知的最可怕的方式醒来。首先是有人坚持敲我公寓的门，然后是一声尖叫：“闭嘴——没关系。”我妈妈只在和我爸爸说话时使用的语气。接下来是一声大喊，“乔琳宝贝！我给你带来了一些灰烬。”我的心跳停止了，我从床上跳了起来。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "similar regimen as when I was home, like I pretend to be, but unfortunately for us both, shit has veered incredibly off track. Mom starts toward the kitchen, and I debate following after her to stand in front of the counters and somehow distract from how messy it is, but my dad is hovering awkwardly in the hallway. When we lock eyes, he says, \"Sorry to show up like this. I told her to call, but you know.\" He rocks from foot to foot, as though to demonstrate he's physical standing there against his will.",
        "story_cn": "与我在家时类似的生活方式，就像我假装的那样，但不幸的是，对我们俩来说，狗屎已经偏离了正轨。妈妈朝厨房走去，我犹豫着跟着她站在柜台前，以某种方式分散注意力，让人们忽视厨房的混乱，但我爸爸却尴尬地在走廊里徘徊。当我们四目相对时，他说：“很抱歉这样出现。我让她打电话，但你知道。”他从一只脚摇到另一只脚，仿佛是为了证明他的身体是违背自己的意愿站在那里的。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "She riffles through my other cupboards, shaking her head. \"I made it so you don't have to worry about your lunches this week. You need to focus on your work. Now where is your cleaning supplies?",
        "story_cn": "她翻遍了我的其他橱柜，摇着头。 “我这样做是为了让你不必担心这周的午餐。你需要专注于你的工作。现在你的清洁用品在哪里？",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "be this bad.\" And to prove her point, she wipes the cloth under a windowsill that I'm pretty sure nobody has ever cleaned in the history of this apartment's construction. \"This dust is from long time ago.\" She hardens her gaze accusingly, and I stiffen -- she is not done with me yet. \"How are you going to have a boyfriend over?\" And there it is. She's pushed the exact buttons that set me off.",
        "story_cn": "为了证明她的观点，她擦了擦窗台下的布，我很确定在这间公寓的建造历史上从来没有人清理过这个窗台。“这些灰尘是很久以前的事了。”她指责地凝视着我，我僵住了——她还没对我说完。“你打算怎么找个男朋友过来？”就是这样。她按下了让我生气的按钮。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 19,
    "title": "Bronze Medal Wife",
    "wordCount": 2405,
    "startPage": 127,
    "beats": [
      {
        "beatId": 1,
        "story": "Another minute and forty seconds until the workweek officially begins, but already the cubicles are fully stocked. Everyone hunches over their screens. Everyone, except Caitlin. After a weekend of overthinking everything -- the night with Cliff, Caitlin's HR meeting, Armin's upcoming appointment, my parents, and my life in general, including the hour-long freakout on Saturday night after realizing I hadn't seen my birth certificate in a while -- I should be relieved to be here.",
        "story_cn": "距离工作周正式开始还有一分四十秒，但隔间里已经装满了东西。每个人都弯腰看着屏幕。每个人，除了凯特琳。经过一个周末的过度思考——与克里夫的夜晚、凯特琳的人力资源会议、阿明即将到来的约会、我的父母和我的生活，包括周六晚上意识到我有一段时间没有看到我的出生证明后长达一小时的疯狂——我应该为来到这里感到欣慰。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "actually access Armin's entire calendar. None of his appointments are set to private. Last week's appointment, the one that twisted Rhonda's pantaloons, was simply recorded as: University Location. I scroll back.",
        "story_cn": "实际上访问 Armin 的整个日历。他的所有任命都不是私人的。上周的约会，那个让朗达的裤子扭曲的约会，被简单地记录为：大学地点。我向后滚动。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Lovely.\" I smile and lock eyes with Armin, who is now staring directly at me. I try to look pleasantly unweird, but the guy keeps his expression neutral. He's a tough egg to crack. It's not until Rhonda gets up to head for lunch, once again announcing to nobody in particular that she's going to buy a Greek salad, that I decide to log off and head to the kitchenette in the copy room to grab the Tupperware of ashe reshteh I actually remembered to bring.",
        "story_cn": "“迷人的。”我微笑着，与阿明四目相对，阿明现在正直视着我。我努力让自己看起来不那么奇怪，但那家伙却保持着中立的表情。他是一个很难打破的鸡蛋。直到朗达起身去吃午饭，再次向没有人特别宣布她要买希腊沙拉时，我才决定下线，前往复印室的小厨房，拿我记得带的特百惠灰酱。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "I sneak into the big lunchroom that is for parties only. I use this place only when I need to heat up ashe reshteh or any other food, as it's got the microwave that's far from everyone's desks, and I'm not a menace to society like Caitlin. If she'd just used this microwave like a normal person, all the email/Cliff mess could've been avoided. The card reader for the lunchroom door beeps, and instant dread hits.",
        "story_cn": "我溜进了只适合聚会的大餐厅。我只在需要加热 Ashreshteh 或任何其他食物时才使用这个地方，因为它的微波炉距离每个人的办公桌都很远，而且我不像凯特琳那样对社会构成威胁。如果她像正常人一样使用微波炉，所有的电子邮件/悬崖混乱都可以避免。餐厅门上的读卡器发出嘟嘟声，恐惧立刻袭来。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 20,
    "title": "Meet the Parents",
    "wordCount": 1596,
    "startPage": 134,
    "beats": [
      {
        "beatId": 1,
        "story": "I'm leaned against a brick wall in an alleyway across from Shiraz Bakery -- the front door of the café is perfectly centered in my view. I've stuffed my nest of hair into a messy bun and covered my wrinkled blouse with an oversized hoodie I found in the office. The hoodie smells about as musty as I'd expected; it had been hanging on a random coat rack in the hallway that leads to the copy room for years without anyone putting it out of its misery. Its owner has likely long abandoned Supershops Incorporated.",
        "story_cn": "我靠在设拉子面包店对面小巷的砖墙上——咖啡馆的前门完全在我的视野中央。我把一窝头发塞成一个凌乱的发髻，并用我在办公室找到的一件超大号连帽衫盖住我皱巴巴的衬衫。这件连帽衫闻起来和我想象的一样有股霉味。多年来，它一直挂在通向复印室的走廊上的一个随意的衣帽架上，没有人把它从痛苦中解救出来。它的所有者很可能早已放弃了 Supershops Incorporated。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "The little chime from the bell on the door sends a jolt through me. The place is crowded with mostly Iranian people. Nobody seems to notice me as I take my place in the back of the line, swept up by the hum of conversations and laughter and waving hands. The sweet scent of chai fills my soul with warmth.",
        "story_cn": "门铃发出的轻微铃声让我浑身一震。这个地方挤满了大部分伊朗人。当我站在队伍后面时，似乎没有人注意到我，周围充满了谈话声、笑声和挥手的声音。奶茶的甜香让我的灵魂充满温暖。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "reasonable, if I'm being real. The guy nods, face neutral, as he pulls a sheet of wax paper out to gather my request. When he hands me my box, I thank him as quietly as possible and tap my card, bracing for this financial blow. I'm heading for the door, danmarki box cradled against my chest -- \"Isn't that Jolene?\" a Persian-accented man calls behind me.",
        "story_cn": "如果我说的是实话的话，这是合理的。那家伙点点头，面无表情，同时拿出一张蜡纸来收集我的请求。当他把盒子递给我时，我尽可能安静地感谢他，并点击了我的卡，准备迎接这次财务打击。我朝门口走去，丹麦盒子靠在我的胸前——“那不是乔琳吗？”一个波斯口音的男人在我身后喊道。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "My lips wobble. \"I wanted to meet you. I was starting to think Armin was making you up.\" Armin's temples twitch, his gaze turning manic as it bores into me. But his parents both laugh.",
        "story_cn": "我的嘴唇颤抖着。 “我想见见你。我开始觉得阿明在编造你。”阿明的太阳穴抽动着，目光注视着我，变得狂躁。但他的父母都笑了。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 21,
    "title": "The Prior Engagement",
    "wordCount": 2995,
    "startPage": 138,
    "beats": [
      {
        "beatId": 1,
        "story": "The drive in to work with Cliff the following morning feels like it could be another skit from that HR video about how to be friendly with colleagues. Cliff begins with some light conversation about wildfire smoke starting earlier than usual this year, although he doesn't remember previous years. Then we pass a shuttered storefront, and he gets sad about the record shop he liked closing forever. I ask him when the last time he went was, and he realizes it's been two years.",
        "story_cn": "第二天早上开车去和克里夫一起工作，感觉这可能是人力资源视频中关于如何与同事友好相处的另一个小品。克里夫首先进行了一些关于今年比平常更早开始的野火烟雾的轻松谈话，尽管他不记得前几年了。然后我们经过一家关门的店面，他为他喜欢永远关闭的唱片店感到难过。我问他上次去是什么时候，他意识到已经两年了。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Armin keeps a steady gaze on me for a long moment, and I wonder if he can tell there's more I'm not saying. Finally, he shifts to stare at the overflowing recycling bin and softly mutters, \"It's been tough lately. She's had so much chemo, and it's on me to help, since my dad can't drive anymore . .",
        "story_cn": "阿明盯着我看了很长一段时间，我想知道他是否能看出还有更多我没有说的事情。最后，他转而盯着满溢的回收箱，轻声嘀咕道：“最近过得很艰难。她接受了如此多的化疗，我得帮忙，因为我爸爸不能再开车了……",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "really negative stuff about you at my HR meeting.\" He shakes his head quickly, holding his palms up. \"I wasn't going to. That's just not my style. But I could deny everything, and I could say you're the best colleague to work with -- mention how you've been helping me with stuff.",
        "story_cn": "在我的人力资源会议上，你的言论真的很负面。”他快速摇头，举起手掌。“我不打算这么做。那不是我的风格。但我可以否认一切，我可以说你是最好的同事——提到你是如何帮助我做事的。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Gregory joins the throng and pulls Caitlin in for a non-consensual hug. Stu does the fingers-in-mouth type of whistle, for some reason. \"Who knew, when you started, we'd be celebrating your engagement at this very desk?\" Rhonda squeaks. Caitlin's tinkling laugh pushes through the room.",
        "story_cn": "格雷戈里加入了人群，并拉着凯特琳来了一个未经同意的拥抱。出于某种原因，斯图会吹口哨。 “谁知道，当你开始工作时，我们会在这张桌子上庆祝你的订婚呢？”朗达尖叫起来。凯特琳清脆的笑声传遍整个房间。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 22,
    "title": "Can’t Keep Meetings Like This",
    "wordCount": 2189,
    "startPage": 146,
    "beats": [
      {
        "beatId": 1,
        "story": "We're all piled into the big boardroom on the fifth floor, and we've sat here long enough that the sharp cologne Jean Adler's been dabbing into his neck since, like, 1984 has all but disappeared. All the beady freaking eyes face forward; this room feels more like a stadium. I twist the metal water bottle sitting on my lap in my clammy hands and try to steady my breath. Cliff is sitting at the end of the largest table next to mine.",
        "story_cn": "我们都挤在五楼的大会议室里，我们在这里坐了足够长的时间，以至于自 1984 年以来让·阿德勒（Jean Adler）一直在脖子上抹的浓烈古龙水几乎消失了。所有的眼睛都盯着前方；这个房间感觉更像是一个体育场。我用湿冷的双手扭动放在腿上的金属水瓶，试图稳定呼吸。克里夫坐在我旁边最大的桌子的一端。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "pauses to raise his brows enticingly -- \"But I'd love to hear any thoughts you've all been tinkering with first.\" All the expressions remain neutral and uninspired by this, except for Caitlin, who nods way too hard. We start with two suggestions from supply chain people that have already been suggested a dozen times before. With each passing comment, every tick of the clock, my skin tightens and cools. I look around the table and try to decipher if anyone will be sympathetic should I faint in the middle of the room when my brain snaps from nerves.",
        "story_cn": "停下来，诱人地扬起眉毛——“但我很想先听听你们一直在修改的任何想法。”所有的表情都保持中立，没有受到任何启发，除了凯特琳，她点头得太用力了。我们从供应链人员提出的两条建议开始，这些建议之前已经被提出过十几次了。随着每一条评论，每一个时钟的滴答声，我的皮肤都变得紧绷和凉爽。我环视桌子周围，试图弄清楚如果我在房间中央因神经紧张而晕倒，是否有人会同情我。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "blinks several times. \"That's something I'm working to incorporate as well. Thanks.\" Her voice is meek, her entire aura suddenly smaller as she makes her way back to her mesh boardroom seat. Gregory clears his throat.",
        "story_cn": "闪烁几次。 “这也是我正在努力融入的内容。谢谢。”她的声音很温柔，当她回到网状会议室座位时，她的整个气场突然变小了。格雷戈里清了清喉咙。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "I pick up my folder and take out the papers I'd prepared, handing them around. \"As you can see here, I've created a flow chart for how certain info could be handled.\" Rhonda's cupped her hands together over her chest, proud mama smile on. When I pass Cliff to give him my printout, he meets my gaze and grins. The ground below me seems firmer.",
        "story_cn": "我拿起文件夹，取出准备好的文件，递给大家。 “正如你在这里看到的，我创建了一个流程图来说明如何处理某些信息。”朗达双手合十放在胸前，脸上挂着骄傲的妈妈微笑。当我经过克里夫把我的打印件交给他时，他与我的目光相遇并咧嘴一笑。我脚下的地面似乎更加坚硬。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 23,
    "title": "Kidstreet",
    "wordCount": 2121,
    "startPage": 152,
    "beats": [
      {
        "beatId": 1,
        "story": "Cliff's desk is coated in paperwork and bright morning sunlight. In the middle of the chaos sit two fluffy donuts from the mall bakery. A printer on the side desk chugs out the last of its job as I tentatively take my seat across from him. \"Jolene!\" His grin buzzes through me.",
        "story_cn": "克里夫的桌子上堆满了文书工作和明亮的早晨阳光。在混乱的中间坐着两个来自商场面包店的蓬松甜甜圈。当我试探性地坐在他对面时，旁边桌子上的一台打印机正在完成最后的工作。 “乔琳！”他的笑容在我耳边回响。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "\"I just meant you should present. I feel sort of . . . I don't want to give notes, but where's the showmanship?\" \"You nail one amazing presentation, and now you're the expert, huh?\" He says it teasingly, but the praise makes my heart expand anyway. \"Pretty much.",
        "story_cn": "“我只是想说你应该出席。我觉得有点……我不想做笔记，但是表演技巧在哪里？” “你完成了一场精彩的演讲，现在你就是专家了，对吧？”虽然他说得有些戏谑，但这种赞美无论如何都让我的心扩张了。 “差不多了。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "you're great at this. Your job.\" He actually cares. So much. Did I lose that part of me?",
        "story_cn": "你很擅长这个。你的工作。”他真的很在乎。非常在乎。我是不是失去了我的那一部分？",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "\"What did you pick? For your prize?\" I hold the frame like its solid gold. It's so niche and incredible. It's unbelievable I didn't see it before.",
        "story_cn": "“你选了什么？作为你的奖品？”我握着框架就像握着纯金一样。它是如此的小众和令人难以置信。令人难以置信的是我之前没有看到它。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 24,
    "title": "Phone Plant",
    "wordCount": 1804,
    "startPage": 158,
    "beats": [
      {
        "beatId": 1,
        "story": "There's only half an hour until the meeting starts. Every muscle in my body is tense, my bones so heavy I feel as if I could fall through my chair. I take a deep breath and square my shoulders. If I'm going to do this, I need to get into that meeting room now.",
        "story_cn": "距离会议开始只有半个小时了。我身体的每一块肌肉都很紧张，我的骨头很重，我感觉好像我会从椅子上掉下来。我深吸一口气，挺直肩膀。如果我要这样做，我现在就需要进入那个会议室。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Excel grid I can see open on her computer, mouse hovering on the first row, she's there for the long haul. I need to distract everyone, and fast. And I know only one thing that is guaranteed to get everyone up from their desks in a matter of seconds. Before I can think too hard, I'm out of my chair.",
        "story_cn": "我可以看到她的电脑上打开了 Excel 网格，鼠标悬停在第一行，她​​在那里待了很长时间。我需要分散每个人的注意力，而且要快。我知道只有一件事可以保证让每个人在几秒钟内从办公桌上站起来。在我认真思考之前，我已经从椅子上站了起来。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Dear Supershops employee, To express our appreciation to our most hardworking employees this quarter, we've sent special gifts to lunchroom number 417. Please collect your own gift ASAP. One per person. Regards, Management I hit send, and it's instantaneous.",
        "story_cn": "亲爱的Supershops员工： 为了向本季度最辛勤的员工表示感谢，我们向417号餐厅发送了特别的礼物。请尽快领取您自己的礼物。每人一份。此致， 管理层 我点击了发送，它是即时的。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Larry huffs; it's incredible how quickly the sweat can accumulate on his temples. \"What, from Gregory?\" He wipes his forehead with the sleeve of his shirt. His attention draws to Marla, who's walking from the printer room with a stack of papers in hand. \"Hey, Marla, did you hear?",
        "story_cn": "拉里哼了一声；令人难以置信的是，汗水在他的太阳穴上积聚得如此之快。 “什么，格雷戈里寄来的？”他用衬衫袖子擦了擦额头。他的注意力吸引到了玛拉，她手里拿着一叠文件正从打印室走出来。 “嘿，玛拉，你听到了吗？",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 25,
    "title": "Archives Aren’t My Own",
    "wordCount": 1488,
    "startPage": 163,
    "beats": [
      {
        "beatId": 1,
        "story": "Back at my desk, I unlock my phone and stop the recording. Two new text notifications from my mom are waiting for me. MOM: There's a new cheat where they sneak drugs in your luggage and another guy kidnaps you! Don't travel.",
        "story_cn": "回到办公桌前，我解锁手机并停止录音。我妈妈发来的两条新短信正在等着我。妈妈：有一个新的骗局，他们在你的行李里偷偷毒品，然后另一个人绑架了你！不要旅行。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "archive room at the end of the hall greets me like a dark cloak, the earthy cardboard scent beckoning me inside. The shelves are stacked so tightly with bulky file boxes they basically soundproof the room. I've actually had a few decent cry breaks in here. Turning on the lights will surely draw the attention of a passerby, so I crouch in a corner and fully settle into the sensory deprivation of the dark room as I pop in my headphones and press play.",
        "story_cn": "大厅尽头的档案室像一件深色斗篷一样迎接我，泥土的纸板气味在召唤我进去。架子上堆满了笨重的文件箱，基本上可以隔音。事实上，我在这里哭过几次。打开灯肯定会引起路人的注意，所以我蹲在角落里，戴上耳机，按下播放键，完全融入黑暗房间的感官剥夺中。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"I understand that position,\" Cliff finally says, voice soft as a baby's bum. \"But this is a long-term employee we're talking about. If we ignore systemic issues and simply terminate, it can cause more costly problems. Big picture: I've seen this in many companies I've worked with.",
        "story_cn": "“我理解这个立场，”克里夫最后说道，声音轻柔得像婴儿的屁股。 “但我们谈论的是一名长期员工。如果我们忽视系统性问题并简单地终止合同，可能会导致代价更高的问题。大局观：我在我工作过的许多公司都看到过这种情况。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Then last week there were two. If she makes any more, I might be calling you. These reports are critical.\" Oh my god. Caitlin was making errors before I dicked with her docs?",
        "story_cn": "然后上周有两个。如果她再赚的话，我可能会打电话给你。这些报告至关重要。”天哪。在我和她的医生发生关系之前，凯特琳就犯了错误？",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 26,
    "title": "Gutter Ball",
    "wordCount": 3336,
    "startPage": 168,
    "beats": [
      {
        "beatId": 1,
        "story": "Traffic finally shows an opening after a painful chug of stop and go. We crawl around the pylons and past a guy in yellow coveralls who directs us through the detour. When the light flips to yellow and the guy in front halts, Cliff taps the steering wheel. \"Come on, you could've made it.\" His gaze drifts toward the little clock under the dashboard.",
        "story_cn": "经过痛苦的走走停停之后，交通终于出现了空档。我们绕着铁塔爬行，经过一个穿着黄色工作服的人，他指引我们绕道而行。当灯变成黄色并且前面的人停下来时，克里夫轻拍方向盘。 “来吧，你本来可以做到的。”他的目光飘向仪表板下方的小钟。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "A rush of heat flushes through my cheeks as I take her hand. Cliff looks between his sister and me again. Why am I smiling so hard? \"Nice to meet you.\" My voice is small.",
        "story_cn": "当我握住她的手时，一股热流冲过我的脸颊。克里夫再次在他妹妹和我之间打量。为什么我笑得那么卖力？ “很高兴见到你。”我的声音很小。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Cliff's granny releases him from her death grip. He takes a dramatic gulp of air like he's just been saved from drowning as his granny pinches his cheek. He looks toward me, temples red. \"I'll get you a ball.\" Lisa and I watch as he precariously balances three balls while walking to the seating at the end of our lane.",
        "story_cn": "克里夫的奶奶将他从死亡的手中释放了出来。当他的奶奶捏着他的脸颊时，他猛地吸了一口空气，就像刚刚从溺水中被救出来一样。他看着我，太阳穴泛红。 “我给你拿一个球。”丽莎和我看着他摇摇晃晃地平衡着三个球，同时走向我们球道尽头的座位。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "I make my way to the floor arrows and try my best to look calm. Beside me, a ball flies back up the return machine and crashes into the row, making me jolt. I pick up a ball that feels too big and too heavy. I toss it onto the lane in what I'm sure is abysmal form, but I do manage to get one pin down.",
        "story_cn": "我朝地板箭头走去，并尽力表现得平静。在我旁边，一个球飞回回球机并撞入行列，让我摇晃起来。我拿起一个感觉太大太重的球。我把它扔到了球道上，我确信那是一种糟糕的形式，但我确实成功地抓住了一根钉子。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 27,
    "title": "It’s Her Party, I Can Hide If I Want To",
    "wordCount": 2285,
    "startPage": 177,
    "beats": [
      {
        "beatId": 1,
        "story": "The second Caitlin slinks out with Garret at five p.m., Rhonda marches into my cubicle guns blazing -- and by guns, I mean the two giant Party City bags hanging from her arms. \"You're my only decorator tonight,\" she announces, all business. \"Garret's busy delaying Caitlin, and Marla's out sick with the stomach flu. Who gets the stomach flu this time of year?",
        "story_cn": "下午五点，凯特琳和加勒特第二次偷偷溜出去，朗达拿着枪走进我的小隔间——我所说的枪，是指她怀里挂着的两个巨大的派对城包。 “今晚你是我唯一的装饰师，”她宣布，一切都是公事。 “加勒特忙着耽误凯特琳，而玛拉则因肠胃流感而生病了。每年这个时候谁会得肠胃流感？",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "online archive. I've always suspected that Rhonda was part evil, but maybe that part isn't as big as I thought. I take one of her bags and say, \"Just let me know what you'd like me to do.\" The way she grins makes it feel like an act of mercy. I can be the bigger person here.",
        "story_cn": "在线存档。我一直怀疑朗达有邪恶的一面，但也许那部分并不像我想象的那么大。我接过她的一个包，说道：“请告诉我你想让我做什么。”她微笑的方式让人感觉像是一种仁慈之举。我可以成为这里更大的人。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "drink, but if we order a few bottles of wine to share instead, we can have a drink now.\" She winks at me, all rebellious. \"Actually, I might not stick around too long.\" Her mouth puckers so small that it cracks her lipstick. \"What? The party hasn't even started.",
        "story_cn": "喝点酒，但如果我们点几瓶酒来分享，我们现在就可以喝一杯了。”她对我挤挤眼，一副叛逆的样子。“其实，我可能不会在这儿待太久。”她的嘴抿得太小，嘴唇都裂开了。“什么？聚会还没有开始。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "like to keep to yourself. But I always wondered if you were mad at me for something.\" I shake my head. \"Not at all!\" And maybe that's true, if I can ignore all the times she's annoyed me, all the white-ink emails I've sent her through the years. Her gaze locks on to me, eyes soft and glassy.",
        "story_cn": "喜欢独处。但我总是想知道你是不是因为什么事情生我的气。”我摇了摇头。“一点也不！”也许这就是真的，如果我能忽略她所有惹我生气的时候，忽略这些年来我给她发的所有白墨水电子邮件。她的目光锁定在我身上，眼睛温柔而呆滞。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 28,
    "title": "Curb Appeals",
    "wordCount": 3153,
    "startPage": 183,
    "beats": [
      {
        "beatId": 1,
        "story": "As soon as I'm out of the bar, I take three long strides, and that's when a hand clamps down on my shoulder and forces me to a stop. \"Jo-Jo,\" he says, \"I can't believe it's you.\" His eyes are darting across my face almost manically, like he's taking stock of every detail. I turn my chin to the side and push my shoulder up to try to loosen his grip. \"Every time Caitlin complained about the Jolene at work, I never imagined it was the girl from high school who -- \" \"I have to go.\" My voice sounds an octave higher, not my own.",
        "story_cn": "我一走出酒吧，就大步走了三步，就在这时，一只手按住了我的肩膀，迫使我停了下来。 “乔乔，”他说，“我不敢相信这是你。”他的目光几乎疯狂地扫过我的脸，就像他在评估每一个细节。我把下巴转向一边，抬起肩膀，试图松开他的手。 “每次凯特琳在工作中抱怨乔琳时，我从来没有想到是那个高中的女孩——”“我必须走了。”我的声音听起来高八度，不是我自己的。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "The article says that she wandered off into the woods. It doesn't say that it took me ten minutes before I realized and went searching for her. It doesn't say how raw my throat went as I screamed her name, looking for her, begging her to come back. It doesn't describe the sound of the snap.",
        "story_cn": "文章称她溜进了树林。并没有说我花了十分钟才意识到并去寻找她。当我尖叫着她的名字、寻找她、恳求她回来时，我的喉咙有多么刺痛。它没有描述啪啪的声音。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Yeah, of course,\" he says quickly, pushing himself onto his feet. He holds out a hand and offers it to me. I take it, letting him lift me to my feet. Heat radiates from between our palms, crawling up my neck.",
        "story_cn": "“是的，当然，”他迅速说道，站了起来。他伸出一只手给我。我接过它，让他把我扶起来。热量从我们的手掌之间散发出来，爬上我的脖子。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "fluttering through me, pulsing from where his skin meets mine. It feels so good to be known by someone, to be seen, to be touched. And I want more of it. I lean toward him, and it's so simple.",
        "story_cn": "在我体内飘动，从他的皮肤与我的皮肤接触的地方脉动着。被人认识、被人看见、被人感动的感觉真好。我想要更多。我靠向他，就这么简单。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 29,
    "title": "Getting Mugged",
    "wordCount": 1536,
    "startPage": 191,
    "beats": [
      {
        "beatId": 1,
        "story": "Monday morning wraps up a weekend of spiraling -- just me, my wine, and my ever uniquely anxious thoughts. It's still dark outside when I board the first bus -- the hardest bus ride because my stomach is still churning from my not-so-happy hour last night. I'd texted Cliff that I didn't need a ride. There's no way I'm going back into his car.",
        "story_cn": "周一早上结束了一个螺旋式上升的周末——只有我、我的酒和我独特的焦虑想法。当我登上第一趟公共汽车时，外面天还很黑——这是最艰难的一次公共汽车之旅，因为我的胃仍然因昨晚不那么快乐的时光而翻腾。我给克里夫发短信说我不需要搭车。我不可能再回到他的车里了",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "And I really mean it. I guess it can be a little nice sometimes when she doesn't mind her own business. Sometimes. A little.",
        "story_cn": "我是认真的。我想有时候当她不介意自己的事情时会有点好。有时。一点。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Subject: Re: meeting re: new ideas and info Caitlin, I appreciate that you are eager to workshop new ideas about the office, but there's not much time in my schedule available for this week. Not to worry, there will be other chances to discuss another day, I'm sure. Regards, Gregory I check Caitlin's sent folder. She'd emailed Gregory on a Saturday to request another meeting with him, saying she had \"new information\" to discuss about her project.",
        "story_cn": "主题：回复：会议回复：新想法和信息 凯特琳，我很感激您渴望讨论有关办公室的新想法，但是我本周的日程安排中没有太多时间。不用担心，我相信改天还会有其他机会讨论。问候，格雷戈里，我检查了凯特琳的发送文件夹。她在周六给格雷戈里发了一封电子邮件，请求与他再次会面，称她有“新信息”可以讨论她的项目。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "It's for the best. And when Cliff doesn't reply, it's like a resolution. We can't just be friends. A message pops up from Caitlin to Armin and Rhonda: CAITLIN: Have you guys noticed Jolene is a little different these days?",
        "story_cn": "这是为了最好的。当克里夫没有回复时，这就像是一个决心。我们不能只是朋友。凯特琳向阿明和朗达弹出一条消息： 凯特琳：你们注意到乔琳这些天有点不同了吗？",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 30,
    "title": "How I Always Pictured My Proposal",
    "wordCount": 1084,
    "startPage": 196,
    "beats": [
      {
        "beatId": 1,
        "story": "I wait in the dimly lit archive room behind the same boxes where I listened to Cliff and Greg's recorded convo. My knees are about to buckle, but I can't move. I stare at the door like a caged animal, waiting for my captor to appear. Sweat gathers in my palms and I wipe it onto a box, marking it with my handprint.",
        "story_cn": "我在灯光昏暗的档案室里等待，就在我听克里夫和格雷格录制的对话的同一个包厢后面。我的膝盖快要弯曲了，但我却动不了。我像一只关在笼子里的动物一样盯着门口，等待着我的俘虏出现。汗水聚集在我的手掌上，我将其擦拭到一个盒子上，并在上面留下了我的手印。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "super braggy, but he just looked confused when Caitlin thanked him. I was wiped enough to actually get a coffee from that place later that day, so I asked the barista if anyone had just bought a few plain scones today.\" He shrugs, one side of his mouth curling up. \"Let's just say she described exactly you.\" I pull my chin toward my chest. \"Is there no barista-client privilege anymore?\" Armin chuckles, the sound soothing the knot in my core.",
        "story_cn": "超级吹牛，但当凯特琳感谢他时，他只是显得很困惑。那天晚些时候，我被擦得一干二净，可以从那个地方买一杯咖啡，所以我问咖啡师今天是否有人刚买了几块普通的烤饼。”他耸耸肩，一侧嘴角翘起。“这么说吧，她描述的正是你。”我把下巴拉向胸前。“咖啡师与顾客之间的特权不再存在了吗？”阿明轻笑起来，这声音抚平了我心中的疙瘩。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "It's the same thing, but of course I have to do it now. I have to lie to a sick aunty. \"Fine.\" I nod. His forehead wrinkles.",
        "story_cn": "同样的事情，但我现在当然必须这么做。我不得不对生病的阿姨撒谎。 “美好的。”我点点头。他的额头出现皱纹。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Subject: New Occurrence 9:15 am: Spent fifteen minutes socializing somewhere with a friend That shouldn't make me smile.",
        "story_cn": "主题：新事件 上午 9:15：花了十五分钟与朋友在某个地方社交，这不应该让我微笑。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 31,
    "title": "Somebody Had to Say It",
    "wordCount": 1659,
    "startPage": 200,
    "beats": [
      {
        "beatId": 1,
        "story": "The penultimate hour of work ticks along to the beat of the ancient wall clock. Stu Wilkins has been hunched over the printer in front of his pod for the past fifteen minutes, watching sheets of paper spit out in one-second intervals like some twisted form of corporate meditation. All these people, with their thoughts floating so close, sitting beside one another in complete silence. Nobody ever randomly screams during these moments -- a phenomenon that should be studied.",
        "story_cn": "工作的倒数第二个小时随着古老挂钟的节拍而滴答作响。在过去的十五分钟里，斯图·威尔金斯一直弯着腰坐在他的吊舱前的打印机前，看着一张张纸以一秒的间隔喷出，就像某种扭曲的企业冥想形式。所有这些人，思想飘浮得如此之近，静静地坐在一起。没有人会在这些时刻随意尖叫——这种现象值得研究。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Randal has a sheen of sweat on his forehead; this is the event of his career. Normally this is the type of chaos I have a soft spot for, but after today, I'm just not up for it. So I stay at my desk. Then comes the email.",
        "story_cn": "兰德尔的额头上渗出了一层汗珠。这是他职业生涯中的大事。通常情况下，我对这种混乱情有独钟，但今天之后，我就不再愿意了。所以我留在办公桌前。然后是电子邮件。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"You people manipulate each other all day,\" Larry announces. Everyone looks at one another, each of them innocent in their hearts. \"Is this really the life you want?\" he tries again. Again, blank stares.",
        "story_cn": "“你们这些人整天互相操纵，”拉里宣布。众人面面相觑，每个人的心里都是无辜的。 “这真的是你想要的生活吗？”他再次尝试。又是一片茫然的眼神。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Larry breaks my gaze to stare at my desk. There's nothing here, save for Miley's zebra. The one thing. We both go for it at the same time, but he's faster.",
        "story_cn": "拉里打破我的视线，盯着我的桌子。除了麦莉的斑马之外，这里什么也没有。有一件事。我们同时出手，但他更快。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 32,
    "title": "Cliff Hanger",
    "wordCount": 895,
    "startPage": 205,
    "beats": [
      {
        "beatId": 1,
        "story": "As we drive down Fifth Street, Cliff keeps fiddling with the gears, radio, and AC in complete overkill, like he's operating an airplane. But I can't blame him for being nervous; last time we took this drive, our faces ended up smooshed together. \"So,\" Cliff begins with a huff, breaking the silence, \"the experts claim that letting someone go on a Monday leads to fewer incidents.\" \"It's good you did it today, then.\" A tiny chortle escapes from us both at the same time. Our eyes shift together, our equilibrium teasingly close to returning.",
        "story_cn": "当我们沿着第五街行驶时，克里夫一直在摆弄齿轮、收音机和空调，完全过度了，就像他在操作飞机一样。但我不能责怪他紧张。上次我们开车开车时，我们的脸最终粘在一起了。 “所以，”克里夫开始生气，打破了沉默，“专家声称，周一让某人离开可以减少事故发生。” “那么，你今天做到了，那就太好了。”一声小笑同时从我们俩身边逃脱。我们的目光一起移动，我们的平衡即将恢复。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "\"Yeah. It's all part of the job.\" He tilts his head toward me and smiles wide to show it doesn't hurt. But I can see the face he keeps inside himself. \"I don't think all of that was part of the job.",
        "story_cn": "“是的。这都是工作的一部分。”他向我歪着头，笑得很开心，表示没有受伤。但我能看到他内心深处的那张脸。 “我不认为所有这些都是工作的一部分。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"So be my friend right now.\" My arm is still resting against his. I pull it back into my lap. \"And be HR in there. We can keep things separate.",
        "story_cn": "“所以现在就做我的朋友吧。”我的手臂仍然靠在他的手臂上。我把它拉回到我的腿上。 “人力资源部门也在那里。我们可以把事情分开。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 33,
    "title": "Finger Food",
    "wordCount": 1906,
    "startPage": 208,
    "beats": [
      {
        "beatId": 1,
        "story": "I'm lying on the couch in a T-shirt and panties that are frankly ready for a demotion. The latest conga line of thoughts flash over me: Cliff -- the kiss, the car ride home; Armin -- his mom, the favor I owe him; Larry's face, etc.; the fucking blazer I ordered. As a coping mechanism, I move on to binge-watching some astronomy documentary, learning how big the universe is and how we are all teeny dust. It's right as I'm having an existential crisis about the point of life when my mom's picture takes over my phone screen, the ring vibrations drilling into my stomach.",
        "story_cn": "我穿着 T 恤和内裤躺在沙发上，坦率地说，我已经做好了降级的准备。最新的康加舞思绪在我脑海中闪现：悬崖——亲吻，乘车回家；阿明——他的妈妈，我欠他的人情；拉里的脸等；我订的那件该死的西装外套。作为一种应对机制，我继续狂看一些天文学纪录片，了解宇宙有多大以及我们如何都是微小的尘埃。就在我正面临人生的生存危机时，我妈妈的照片占据了我的手机屏幕，震动声钻进了我的胃。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Babasheh congratulated her for her accounting executive son's engagement to you. She was getting a radiation therapy and told Dr. Nasseri about it.\" Amazing. I can barely follow, yet I know exactly what she's talking about.",
        "story_cn": "巴巴什祝贺她的会计主管儿子与您订婚。她正在接受放射治疗，并告诉纳塞里医生这件事。“太棒了。我几乎听不懂，但我确切地知道她在说什么。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Yes.\" She throws her hand at the screen. \"I never tell anyone anything. I'm very good with this and classy. I'm not Minoo.\" We hang up, and I stare guiltily at the pile of clothes I moved.",
        "story_cn": "“是的。”她把手伸向屏幕。 “我从不告诉任何人任何事情。我很擅长这个，而且很优雅。我不是 Minoo。”我们挂断电话，我内疚地盯着我搬走的那堆衣服。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "CAITLIN: She volunteered to help Rhonda with my party decorations and then took off. Isn't that suspicious? Oh my god. Relief swoops in and floods every part of my being.",
        "story_cn": "凯特琳：她自愿帮朗达装饰我的派对，然后就走了。这不是很可疑吗？我的天啊。解脱突然袭来，淹没了我生命的每一个部分。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 34,
    "title": "Delightful Fashionista",
    "wordCount": 1666,
    "startPage": 214,
    "beats": [
      {
        "beatId": 1,
        "story": "\"You've been pretty quiet over there,\" Cliff says as he twists the steering wheel to make a left, the AC blaring but doing nothing as we turn into our neighborhood. I force a smile. \"You know, just a long day.\" He nods. \"Gotcha.",
        "story_cn": "“你们那边一直很安静，”克里夫一边说，一边扭动方向盘向左转，空调发出刺耳的声音，但当我们拐进邻居家时却什么也没做。我强颜欢笑。 “你知道，这只是漫长的一天。”他点点头。 “明白了。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "without melting down doesn't mean I've accomplished much. Not compared with anyone else. Cliff taps his fingers to the beat, and I catch how close our arms are resting on the console. I try to swallow away the thought that rings through me at the sight: for the first time, I want to share more with someone.",
        "story_cn": "没有崩溃并不意味着我已经取得了很大的成就。没有和其他人比较。克里夫随着节拍敲击手指，我注意到我们的手臂靠在控制台上的距离有多近。我试图咽下眼前的这个想法：我第一次想与某人分享更多。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "I shake my head hard and look pointedly at my mom, hoping to convey \"please shut up.\" Her eyes flash as they shift to Cliff, who is still stiff in his seat. \"Oh no, is Cliff someone from work?\" Then she lowers her voice, but not low enough. \"Is it still a secret at work? He said he was a friend; I didn't think work.\" I shake my head -- where else would he be from?",
        "story_cn": "我用力摇头，目光直视妈妈，希望传达“请闭嘴”的意思。当她转向克里夫时，她的目光闪烁，克里夫仍然僵硬地坐在座位上。 “哦，不，克里夫有人下班吗？”然后她压低了声音，但还不够低。 “这还是工作上的秘密吗？他说是朋友；我没想到工作上的。”我摇摇头——他还会来自哪里？",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "I pull back my hand. \"We're going to pick one together. When the time is right.\" Mom twists the key and the car chugs on. As she focuses on peeling the car away from the road, I text Cliff: I'm sorry about that.",
        "story_cn": "我收回手。 “我们会一起选一个。当时机成熟时。”妈妈转动钥匙，车子嘎嘎地开动了。当她专注于将车从道路上剥离时，我给克里夫发短信：我对此感到抱歉。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 35,
    "title": "Alarming Answers",
    "wordCount": 2402,
    "startPage": 219,
    "beats": [
      {
        "beatId": 1,
        "story": "Cliff's all business, his grin stiff as I enter his office. The sun shines across his trinkets, rendering the whole situation somehow even more vivid. \"How are you doing today, Jolene?\" He faces the stack of paperwork on his desk as he says this, his voice ten miles away. He nods toward the donut box.",
        "story_cn": "当我走进克里夫的办公室时，他的笑容僵硬了。阳光照在他的小饰品上，让整个场景显得更加生动。 “乔琳，你今天过得怎么样？”当他说这句话时，他面对着办公桌上的一叠文件，声音远在十英里之外。他朝甜甜圈盒点点头。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "meaningful again. This place got to me worse than the others. Cliff slides one of the packets on his desk toward me without looking up. \"We're getting close to wrapping up our training.",
        "story_cn": "又有意义了。这个地方对我来说比其他地方更糟糕。克里夫头也不抬地将桌上的一个包裹滑向我。 “我们的训练即将结束。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Cliff, I li -- \" But Cliff shakes his head, his expression almost scared. \"You're my friend, Jolene. Of course I like you.\" His words cut through me like pellets. I'm so stupid.",
        "story_cn": "“克里夫，我——”但是克里夫摇摇头，他的表情几乎是害怕的。 “你是我的朋友，乔琳。我当然喜欢你。”他的话像颗粒一样刺痛了我。我真是太傻了",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "The damn fire alarm -- the anxious person's nemesis -- has become my savior. \"We have to go.\" Cliff actually looks a little panicked. I'd expect no less from an esteemed HR representative. But for three years I've been very much not evacuating for fire alarms.",
        "story_cn": "该死的火警警报器——焦虑者的克星——成了我的救星。 “我们得走了。”克里夫看起来确实有点惊慌。我对一位受人尊敬的人力资源代表的期望也同样如此。但三年来我几乎没有因火警警报而疏散。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 36,
    "title": "Gregory: A Man Named Gregory Who Works Here",
    "wordCount": 1186,
    "startPage": 226,
    "beats": [
      {
        "beatId": 1,
        "story": "It takes sipping a full glass of water and staring at the tiles in the copy room for an unknown amount of time before I'm ready to return to the pods. I'm not quite on solid ground as I make my way to my desk. And when I do, my inbox waits with a formally toned email from Cliff, with attached instructions to close out our session from today and a note that he'll see me next week for the next one and promises that he'll continue to support my successful completion of the course. I type: Sounds good, thanks, hit send, close out, and stare forward, willing my emotions down.",
        "story_cn": "我喝了一整杯水，盯着复印室的瓷砖不知过了多久，才准备好返回吊舱。当我走向办公桌时，我并没有完全踏实。当我这样做时，我的收件箱会收到克里夫发来的一封正式的电子邮件，其中附有从今天开始结束我们课程的说明，并注明他将在下周与我见面，并承诺他将继续支持我成功完成课程。我输入：听起来不错，谢谢，点击发送，结束，凝视前方，让我的情绪平静下来。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Out of nowhere, Rhonda stands up, grabbing her quilted coat and embroidered purse. Armin looks up in surprise. \"Hold up, you're not leaving, are you?\" Rhonda looks at the floor, her chin wobbling. \"I'm needed somewhere.",
        "story_cn": "朗达突然站起来，抓起她的绗缝外套和绣花钱包。阿明惊讶地抬起头。 “等等，你不会走吧？”朗达看着地板，下巴颤抖着。 “某个地方需要我。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "A good way to not be okay is to spend a whole afternoon internet-stalking a man who every time you see his face, a part of you wants to curse your own existence because it means having to witness his. But the faster I finish, the quicker I can go home and drink the horrible new knowledge of Gregory away. The interesting slash depressing thing about working for a corporation that's been around for as long as Supershops has is that a lot of things that are obvious wastes of time and money have most certainly happened. In my deep dive of the company database, I've learned that between the years 2004 and 2013, the office had a \"newspaper.\" It was literally a weekly periodical about the people here and the things they did.",
        "story_cn": "一个好办法就是花一整个下午的时间在网上跟踪一个男人，每次你看到他的脸，你的一部分就会想诅咒自己的存在，因为这意味着必须见证他的存在。但我完成得越快，我就能越快回家，喝掉格雷戈里可怕的新知识。在一家像 Supershops 这样历史悠久的公司工作，一件有趣且令人沮丧的事情是，很多明显浪费时间和金钱的事情肯定已经发生了。在深入研究公司数据库后，我了解到在 2004 年至 2013 年期间，该办公室有一份“报纸”。这实际上是一本关于这里的人和他们所做的事情的周刊。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "picture on his desk. But then it hits, the fastest way to find it: the Papa Bear email. I take some calming breaths before opening the message that knocks exactly six years off my life span every time I view it. Thankfully, Gregory has the email address listed in his contacts.",
        "story_cn": "他办公桌上的照片。但随后它出现了，找到它的最快方法：熊爸爸电子邮件。每次我看到这条信息时，我都会平静地呼吸几口气，然后再打开它，这条信息让我的寿命整整缩短了六年。值得庆幸的是，格雷戈里的联系人中列出了电子邮件地址。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 37,
    "title": "Taarof-Off",
    "wordCount": 1877,
    "startPage": 230,
    "beats": [
      {
        "beatId": 1,
        "story": "The kettle rings, signaling that the noodles I'd picked up from the convenience store near the bus drop-off are ready to be sous-cheffed by me. I'm pouring the steaming water out when my phone lights up, an unknown number ringing. I let it go to voicemail, but when it starts to ring again immediately, I decide to roll the dice by actually answering. \"Hey, Jolene, can you be a dear and get to the bakery right now?\" It's Armin, and it sounds like he's having a nervous breakdown.",
        "story_cn": "水壶响了，这表明我从公交车站附近的便利店买的面条已经准备好由我煮了。我正把热气腾腾的水倒掉，手机亮了，一个陌生的号码响了。我把它转到语音信箱，但当它立即再次响起时，我决定通过实际接听来掷骰子。 “嘿，乔琳，亲爱的，你现在能去面包店吗？”是阿明，听起来他精神崩溃了。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "dear life. I'm backing away slowly, my ribs tightening around my chest, when Armin clocks my arrival and flies out of his seat to pounce on me. \"Oh, hello, my dearest!\" he says loudly. His eyes are wide, sweat glistening on his temples.",
        "story_cn": "亲爱的生活。我慢慢后退，胸口的肋骨收紧，这时阿明看到我的到来，从座位上飞起来扑向我。 “噢，你好，我最亲爱的！”他大声说道。他的眼睛睁得大大的，太阳穴上有汗珠闪闪发光。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Armin's dad tilts his head toward me, curious. Why must people whom you've told lies to meet the people who don't know your other lies? I look at Armin, who is no help. He's like a cartoon character being squeezed until his eyes pop out.",
        "story_cn": "阿明的爸爸好奇地向我歪着头。为什么那些被你说过谎言的人一定要去见那些不知道你谎言的人呢？我看着阿明，他无能为力。他就像一个卡通人物，被挤压得眼睛都瞪出来了。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "of-season fruits that it's obviously not for guests to enjoy as much as it is a status symbol -- the ultimate Persian party grail. Armin's pupils dilate. \"Jolene, my parents can't afford to start putting money down on an extravagant event. Not with everything going on with my mom.\" \"Of course.\" I nod.",
        "story_cn": "反季水果显然不适合客人享用，而是一种身份象征——波斯派对的终极圣杯。阿明的瞳孔放大。 “乔琳，我的父母不能开始在一场奢侈的活动上投入金钱。我妈妈的一切都在发生。” “当然。”我点点头。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 38,
    "title": "Life Rated PG: Pathetic in General",
    "wordCount": 2064,
    "startPage": 235,
    "beats": [
      {
        "beatId": 1,
        "story": "I'm unwinding from my second full Cliff-free day of work by not quite enjoying a burned package of instant popcorn while checking Reddit to figure out who is the asshole, when there's a knock at my door. I run to open it in case it's my mom ready to make another scene, but Miley's eager face is waiting on the other side. Her gaze weaves past me, jumping from the cluttered coffee table to the erratic shoe party below it. \"So, this is your place.",
        "story_cn": "我正在从第二个完整的无悬崖工作中放松下来，不太享受一包烧焦的速溶爆米花，同时查看 Reddit 来找出谁是混蛋，这时有人敲我的门。我跑去打开它，以防我妈妈准备再做一场戏，但麦莉热切的脸在另一边等着。她的目光从我身边掠过，从杂乱的咖啡桌跳到下面不稳定的鞋柜上。 “所以，这是你的地方。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Miley stiffens, her wide puppy eyes turning to maximum strength. \"No, it's not that. I have the money. But it's rated R, so I need someone old to escort me in.\" I scoff.",
        "story_cn": "麦莉全身僵硬，她那双睁得大大的小狗眼睛变得最有力。 “不，不是这样的，我有钱，但它的等级是R级，所以我需要一个老人来护送我进去。”我嗤之以鼻。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Miley, who's busy taking a selfie of herself at the theater, tilts her phone down. \"No way. You can't leave me alone with a bunch of adults.\" She leans closer and whispers, \"What if a child predator comes?\" Then she silently points at what I'm sure is probably a very nice man with a silky scarf sitting in front of us. \"Fine, but I don't like horror movies.\" The whites of her eyes widen and glint in the overhead lighting.",
        "story_cn": "麦莉正忙着在剧院自拍，她把手机倾斜了下来。 “不行，你不能丢下我一个人跟一群大人在一起。”她靠得更近，低声问道：“如果儿童掠食者来了怎么办？”然后她默默地指着我们面前坐着的那个人，我确信他可能是一个戴着丝质围巾的非常好的男人。 “好吧，不过我不喜欢恐怖片。”她的眼白睁大，在头顶的灯光下闪闪发光。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "you, like, allowed to do whatever you want without asking? But you never do. It's like you've grounded yourself.\" I stiffen. She keeps going.",
        "story_cn": "你，就像，被允许做任何你想做的事而无需询问？但你永远不会这样做。就好像你已经把自己禁足了。”我僵住了。她继续说下去。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 39,
    "title": "Please Excuse My Wine",
    "wordCount": 4828,
    "startPage": 241,
    "beats": [
      {
        "beatId": 1,
        "story": "The next week comes and goes, and nothing much happens. I continue replacing my commute with Cliff with shaky bus rides. My evenings are no longer interrupted by bowling, Miley, or anything else. I even stop checking Cliff's icon to see if he's online.",
        "story_cn": "接下来的一周来了又去，什么也没发生。我继续用摇摇晃晃的巴士来代替我的通勤路线。我的夜晚不再被保龄球、麦莉或其他任何事情打扰。我什至不再检查克里夫的图标，看看他是否在线。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "beginning to zone out when suddenly the whole table erupts in laughter -- a joke I've missed. And again, I'm alone. If we were in the office, I would just click on their messages, read them back to figure out what they're all discussing. But I don't have the cheat codes to real life.",
        "story_cn": "当我开始发呆时，突然全桌爆发出笑声——我错过了一个笑话。再说一次，我孤身一人。如果我们在办公室，我只需点击他们的消息，再读一遍以了解他们都在讨论什么。但我没有现实生活中的作弊代码。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "members clearing used plates and glasses from the tables. I rush outside onto the street. The cool air nips at my skin, affording me a second of clarity. But my earlobes feel tingly and numb, and my temples pull tight.",
        "story_cn": "成员们清理桌子上用过的盘子和玻璃杯。我冲到外面的街上。凉爽的空气拂过我的皮肤，让我有一瞬间的清醒。但我的耳垂感觉刺痛和麻木，太阳穴紧绷。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "\"I'm sorry,\" I try to say through the lump in my throat. \"I lied. I didn't tell you -- I didn't tell -- \" I hear his footsteps on the padded carpet. They come to a stop right in front of me.",
        "story_cn": "“对不起，”我试图通过喉咙里的哽咽说出来。 “我撒谎了。我没有告诉你——我没有告诉——”我听到他踩在软垫地毯上的脚步声。他们就在我面前停了下来。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 40,
    "title": "Gold-Plated Dinner",
    "wordCount": 1843,
    "startPage": 253,
    "beats": [
      {
        "beatId": 1,
        "story": "On Saturday, my carefully curated day of nothing is interrupted by heavy pounding on my door. \"Mom, what the hell?\" I say as I open it, taking in her frustrated expression. She's all dolled up with thick eyeliner and glowing pink lipstick. She puts a hand on her hip.",
        "story_cn": "星期六，我精心策划的无所事事的一天被重重的敲门声打断了。 “妈妈，到底怎么了？”我一边说，一边打开它，看着她沮丧的表情。她画着浓密的眼线，涂着闪亮的粉色唇膏。她把手放在臀部上。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "My mom nudges me into the chair opposite Armin and then takes the seat beside him. He's sandwiched between moms. I pull my phone out underneath the tablecloth. Shit.",
        "story_cn": "我妈妈把我推到阿明对面的椅子上，然后坐在他旁边。他夹在妈妈中间。我把手机从桌布下面拿出来。拉屎。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Jolene's always been a very innovative thinker.\" This comment comes from my dad, and it's his proud grin that hits me the hardest. He continues: \"When she was a kid, she helped design the shelves for her mom's spice rack.\" Mom claps. \"And I made so many good meals because of this.\" She pats Armin's hand that's sitting on the table. \"Don't worry, I'll teach Jolene to cook better.",
        "story_cn": "“乔琳一直是一位非常有创新精神的思想家。”这句话来自我父亲，最让我感动的是他骄傲的笑容。他继续说道：“当她还是个孩子的时候，她帮助设计了她妈妈的香料架的架子。”妈妈鼓掌。 “因此我做了很多好吃的饭菜。”她拍拍阿明放在桌子上的手。 “放心吧，我会教乔琳做饭的。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "down her recipe for ashe reshteh and promises to cook it for Armin. \"Of course, I can make you best stuff just like your mom.\" Armin smiles. \"Only if it's not too much trouble.\" \"No trouble. I'll send with Jolene for you at work.\" Armin seems to relax into the idea.",
        "story_cn": "记下她的 ashe reshteh 食谱，并承诺为 Armin 做。 “当然，我可以给你做最好的东西，就像你妈妈一样。”阿明微笑着。 “只要不太麻烦的话。” “没问题。我会派乔琳去接你上班。”阿明似乎对这个想法感到放松。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 41,
    "title": "Extortion Portion",
    "wordCount": 2771,
    "startPage": 258,
    "beats": [
      {
        "beatId": 1,
        "story": "The moment I log in for the day on Monday -- before Caitlin or Armin are in, before I've even poured myself a coffee -- an email from Greg pops up. Come see me now. Shit. I peek toward Gregory's office.",
        "story_cn": "当我周一登录时——在凯特琳或阿明进来之前，甚至在我给自己倒一杯咖啡之前——一封来自格雷格的电子邮件就会弹出。现在就来见我吧。拉屎。我朝格雷戈里的办公室看了一眼。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Gregory's jowls shake unpleasantly. \"Unfortunately, you still have to go through the motions. That HR guy takes his job far too seriously, so you'd be raising an alarm. But I assure you, even if he recommends your dismissal, you no longer have anything to worry about.\" My lips quirk.",
        "story_cn": "格雷戈里的下巴不舒服地颤抖着。 “不幸的是，你还是得走走过场。那个人力资源部的人太认真对待他的工作了，所以你会拉响警报。但我向你保证，即使他建议解雇你，你也不再有什么可担心的。”我的嘴唇翘起。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Rhonda shakes her head and logs his every move. Just after lunch, I'm working through some charting for next month, when Rhonda heads to the boardroom, notepad and water bottle in hand. As soon as she's out of sight, Armin grabs his coat and marches toward the elevators. Shit.",
        "story_cn": "朗达摇摇头，记录下他的一举一动。午饭后，我正在制定下个月的一些图表，此时朗达手里拿着记事本和水瓶前往董事会。她一离开视线，阿明就抓起外套，朝电梯走去。拉屎。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "evenings stacking up against us. \"Maybe we can come up with something to do then? Like I heard you talking about a book club?\" Rhonda's voice is hollow. \"I don't think anyone was interested in that idea.\" Then she tilts her head toward me, curious.",
        "story_cn": "夜晚对我们不利。 “也许我们可以想出一些事情做？就像我听到你谈论读书俱乐部一样？”朗达的声音空洞。 “我认为没有人对这个想法感兴趣。”然后她好奇地将头转向我。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 42,
    "title": "Irregular Business Hours",
    "wordCount": 2955,
    "startPage": 266,
    "beats": [
      {
        "beatId": 1,
        "story": "At the end of the day, I return from a bathroom break to find Gregory, Rhonda, and Garret all standing around Caitlin's monitor. The first thing I hear is Caitlin saying, \"Jolene's job.\" My stomach plummets. This is it. They're going to know I violated them.",
        "story_cn": "一天结束时，我上完厕所回来，发现格雷戈里、朗达和加勒特都站在凯特琳的显示器周围。我听到的第一句话是凯特琳说：“乔琳的工作。”我的胃一落千丈。就是这样。他们会知道我侵犯了他们。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Cliff's little icon switches offline, but I'm still smiling. It's just me and Caitlin, working in the dim lighting since most of the motion sensor lights have gone out. Only she's not working; she's texting on her phone. That's fine.",
        "story_cn": "克里夫的小图标离线了，但我仍在微笑。由于大多数运动传感器灯都熄灭了，只有我和凯特琳在昏暗的灯光下工作。只是她没有工作；她正在用手机发短信。没关系。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Are you -- \" I begin to say, but she drops into her chair and cuts me off. \"Can we not waste time talking? I'd like to get out of here before daybreak.\" It's like a part of me has shut down. I watch as she clicks her screen awake, the glow of her monitor casting a stark white light across her face, highlighting the shadows under her eyes.",
        "story_cn": "“你是——”我刚开始说，但她跌坐在椅子上打断了我的话。 “我们能不能别浪费时间说话了？我想在天亮之前离开这里。”就好像我的一部分已经关闭了。我看着她点击屏幕将她唤醒，显示器的光芒在她的脸上投射出鲜明的白光，突出了她眼睛下方的阴影。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Caitlin's fingers squeeze into little fists at her sides. I wipe my cheeks with the back of my hand. \"Weeks later, he would taunt that we had some squabble and I killed her for fun.\" My throat is raw and broken as I keep going. \"Whatever Kyle says I am, I've thought worse about myself.",
        "story_cn": "凯特琳的手指在身体两侧握成小拳头。我用手背擦脸颊。 “几周后，他会嘲笑我们发生了一些争吵，我为了好玩而杀了她。”当我继续前进时，我的喉咙又痛又破。 “无论凯尔说我是谁，我都对自己有更糟糕的想法。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 43,
    "title": "The Day Is Still Going",
    "wordCount": 2091,
    "startPage": 274,
    "beats": [
      {
        "beatId": 1,
        "story": "My chest swells at the sound of Cliff's voice. The golden wonder that is his car pulls up toward the curb beneath the streetlight. I pull the passenger-side door open and slump inside, grateful for the rush of warmth from his heater. Then something wet pushes into the back of my neck.",
        "story_cn": "听到克利夫的声音，我的胸口起伏不定。金色的奇迹是他的车停在路灯下的路边。我拉开乘客侧的车门，瘫倒在里面，感激他的加热器带来的温暖。然后有什么湿湿的东西推到了我的脖子后面。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "scent pulls toward me. But I think I'm out of tears for this quarter. \"This donut might save my soul.\" He laughs and gazes through his windshield toward the office building. \"Where's Caitlin?\" I swallow the first glorious sweet-and-tart bite.",
        "story_cn": "气味向我靠近。但我想这个季度我已经没有眼泪了。 “这个甜甜圈可能会拯救我的灵魂。”他笑着，透过挡风玻璃凝视着办公楼。 “凯特琳在哪儿？”我吞下了第一口美味的酸甜可口的食物。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "We spend the rest of the drive home in comfortable silence. I stretch my hand into the back seat and let Biscuit lick it, laughing a little because he's really going to town. Finally, we pull up in front of my building. I look out at the darkened street, the flickering flood lights.",
        "story_cn": "回家的路上，我们在舒适的沉默中度过了余下的时光。我把手伸进后座，让小饼干舔了舔，笑了笑，因为他真的要去城里了。最后，我们把车停在了我的大楼前。我望着漆黑的街道，闪烁的泛光灯。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "\"So what? I can eat a Subway sandwich, technically, but I'm never going through that misery again.\" Cliff's lips press together into a thin line. His knuckles tighten on the steering wheel. \"This is part of my job.\" \"Seriously, Cliff.",
        "story_cn": "“那又怎样？从技术上讲，我可以吃赛百味三明治，但我再也不会经历那种痛苦了。”克里夫的嘴唇抿成了一条细线。他的指关节在方向盘上收紧。 “这是我工作的一部分。” “说真的，克里夫。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 44,
    "title": "Party in the Boardroom",
    "wordCount": 2447,
    "startPage": 280,
    "beats": [
      {
        "beatId": 1,
        "story": "It's almost eleven by the time I make it to the office. I pass through the rotating lobby doors and my heart stops. Because standing in front of the security desk is Kyle. He's red-faced, his phone pressed to his ear as he has a heated conversation with the front desk worker.",
        "story_cn": "到办公室的时候已经快十一点了。当我穿过旋转的大厅门时，我的心跳停止了。因为站在保安柜台前的是凯尔。他红着脸，把手机贴在耳边，与前台工作人员激烈交谈。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "And maybe I really have gone feral, because I ignore Garret and zero in on Rhonda next. She's picking at something in her hair. My ribs tighten. It's like I'm not in my body as I make my way closer.",
        "story_cn": "也许我真的变得狂野了，因为我忽略了加勒特，然后把朗达归零。她正在抠头发里的什么东西。我的肋骨收紧。当我靠近时，就好像我不在自己的身体里一样。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "I follow Randal toward the boardroom, a cloak of tension surrounding us. Nobody bothers to even whisper to each other as I pass them by. Entering the boardroom is like delving into a stiff and dry cave. Gregory sits at the end of the table, clearing his throat.",
        "story_cn": "我跟着兰德尔走向董事会会议室，我们周围笼罩着一层紧张的气氛。当我经过他们身边时，没有人愿意互相窃窃私语。进入董事会会议室就像钻进一个僵硬干燥的洞穴。格雷戈里坐在桌子的一端，清了清嗓子。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Her shoulders shake with a silent sob. I may not have spoken to her much over three years, but I've watched her almost every day. The fear in her eyes is real, but when her gaze flashes toward me, it's the remorse that drills into my core. Cliff adjusts the papers in front of him.",
        "story_cn": "她的肩膀因无声的抽泣而颤抖。三年来我可能没有和她说过太多话，但我几乎每天都看着她。她眼中的恐惧是真实的，但当她的目光闪烁到我身上时，却是钻入我内心的悔恨。克里夫整理着面前的文件。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 45,
    "title": "Walk of Shame 2.0",
    "wordCount": 657,
    "startPage": 287,
    "beats": [
      {
        "beatId": 1,
        "story": "Randal, Cliff, and I round the corner. My eyes dart across the office -- everything in the space seems ornamental, surreal, like it's from a dream. A whole room of muffled voices falls silent as we approach. Some stare directly at us.",
        "story_cn": "兰德尔、克里夫和我就在拐角处。我的目光扫过办公室——空间里的一切看起来都是装饰性的、超现实的，就像来自梦中一样。当我们走近时，整个房间里的低沉声音都安静了下来。有些人直视着我们。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "But they hurt me too. I stumble to my desk and grab Miley's zebra. The three pushpins stay in place. Cliff mutters behind me, \"You can go through your drawers and take any material that wasn't confiscated.\" I shake my head.",
        "story_cn": "但他们也伤害了我。我跌跌撞撞地走到办公桌前，抓住了麦莉的斑马。三个图钉保持在原位。克里夫在我身后低声说道：“你可以翻遍你的抽屉，拿走任何没有被没收的材料。”我摇摇头。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "I push past her without saying a word.",
        "story_cn": "我一言不发地推开她。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 46,
    "title": "Important to Keep a Schedule",
    "wordCount": 646,
    "startPage": 290,
    "beats": [
      {
        "beatId": 1,
        "story": "I peel my crusted eyes open, wiping the residual tears away. It's not quite dark in my living room, but the sun has given up for the day. I remember putting on Schitt's Creek, pouring alcohol into me, and letting the bitterness creep in. Bitterness about everything that's ever happened until my brain and body couldn't take anymore.",
        "story_cn": "我睁开结痂的眼睛，擦去残留的泪水。我的客厅里还不算很黑，但太阳已经放弃了这一天。我记得穿上希特溪，把酒精倒进我的身体里，让痛苦蔓延开来。对所发生的一切感到痛苦，直到我的大脑和身体再也无法忍受。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "\"Go inside,\" I say to my closed window. \"Nobody's coming to talk to you.\" My phone chimes several times as I disappear under my covers and drift into another dreamless slumber. Day two, I have instant coffee and search for jobs from bed. There's no market for a socially fucked-up administrator anymore.",
        "story_cn": "“进去吧，”我对关着的窗户说。 “没人会来跟你说话。”当我消失在被子里并进入另一个无梦的睡眠时，我的手机响了好几次。第二天，我喝速溶咖啡，然后在床上找工作。社交混乱的管理员不再有市场了。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "The next days are the exact same. Nothing at all happens, and I am alone. I'm only pretty sure I'm disappearing.",
        "story_cn": "接下来的日子一模一样。什么事也没有发生，只有我一个人。我只是很确定我正在消失。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 47,
    "title": "White-Text Conversations",
    "wordCount": 1471,
    "startPage": 293,
    "beats": [
      {
        "beatId": 1,
        "story": "On day . . . whatever, I wake up and go to pour myself cereal, but the box is empty.",
        "story_cn": "当天。 。 。不管怎样，我醒来去给自己倒麦片，但盒子是空的。",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "\"I'm pretty sure getting fired means I'm not involved in Supershops business anymore,\" I remind him. \"But I'm not here on official Supershops business.\" His gaze shifts down. He lowers his voice. \"Could you let me in?",
        "story_cn": "“我很确定被解雇意味着我不再参与超级商店业务，”我提醒他。 “但我来这里不是为了处理超级商店的官方事务。”他的目光向下移动。他压低了声音。 “你能让我进去吗？",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"What is there to say?\" I almost laugh. \"It's all true. I did what I did. I'm a horrible person.",
        "story_cn": "“有什么好说的？”我差点笑了。 “这都是真的。我做了我所做的事。我是一个可怕的人。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "\"You helped me see what I couldn't about myself,\" he continues. \"I deserve to choose a life that makes me happy. So I'm going back to my old company.\" I was doing a pretty good job at not letting myself hope, but as soon as he says this, I realize I've failed utterly. He's really going.",
        "story_cn": "“你帮助我看到了我自己看不到的东西，”他继续说道。 “我应该选择让自己快乐的生活。所以我要回到原来的公司。”我在不让自己抱有希望方面做得很好，但当他说出这句话时，我意识到我彻底失败了。他真的要去了",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 48,
    "title": "Cleaning Up",
    "wordCount": 1714,
    "startPage": 297,
    "beats": [
      {
        "beatId": 1,
        "story": "After Cliff leaves, it's like a closed chapter: nothing from that job or those people can hurt me again, not if I don't want it to. The last gin bottle, taking a break on the coffee table, stares me down. Is it already time to start drinking again? I've had my coffee.",
        "story_cn": "克里夫离开后，这就像一个封闭的章节：那份工作或那些人不会再伤害我，如果我不想的话。最后一瓶杜松子酒在咖啡桌上休息，凝视着我。是不是已经到了重新开始喝酒的时候了？我已经喝完咖啡了",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Tons of messages plaster my screen, sent days ago. I take a heavy breath -- best not to put it off forever -- and dive in. ARMIN: Okay, so our moms are freaking out. Apparently, your mom's guest list is at 111?",
        "story_cn": "我的屏幕上贴满了几天前发送的大量消息。我重重地吸了一口气——最好不要永远推迟——然后投入其中。 阿明：好吧，所以我们的妈妈们都吓坏了。显然，你妈妈的客人名单是111？",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "pomegranates on hand. \"I just ate a bunch of melon,\" I lie. \"Hopefully I'll feel better soon.\" She nods, satisfied for now. \"Why did you and Armin break up?\" I shake my head, bracing for the terrible Band-Aid I'm about to rip.",
        "story_cn": "手边有石榴。 “我刚刚吃了一堆瓜。”我撒谎道。 “希望我很快就会感觉好起来。”她点点头，目前已经很满意了。 “你和阿明为什么分手？”我摇摇头，做好准备撕掉那张可怕的创可贴。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "And it's that, just her assurance, that feels like enough. I crouch into her. This is the first time something has felt like home with her in forever. She squeezes my hand.",
        "story_cn": "正是这样，只要她的保证，就足够了。我蹲在她身上。这是她有史以来第一次有一种像家一样的感觉。她握紧我的手。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 49,
    "title": "Small Talk",
    "wordCount": 2258,
    "startPage": 302,
    "beats": [
      {
        "beatId": 1,
        "story": "I've compiled an embarrassing amount of recycling after finishing the last of my apartment clear-out. It took me four whole days, but I'll never get off track again, maybe. It's when I'm gathering all the old mail -- some realtor flyers from those delusional enough to send them to us and menus from restaurants that seem heartbreakingly desperate -- that I spot the letters Cliff left, and my stomach flips. I pick the first one up and recognize Rhonda's handwriting immediately.",
        "story_cn": "在完成最后一次公寓清理工作后，我收集了令人尴尬的回收量。我花了整整四天的时间，但也许我再也不会偏离轨道了。当我收集所有旧邮件时——一些房地产经纪人的传单，来自那些妄想寄给我们的人，以及来自看起来令人心碎的绝望的餐馆的菜单——我发现了克里夫留下的信，我的胃翻腾起来。我拿起第一个，立即认出了朗达的笔迹。",
        "targetWord": "extortion",
        "options": [
          {
            "word": "extortion",
            "action": "Take a measured approach to extortion the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [extortion]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to extortion your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "But I can still have a life worth living. I can still hope my son heals. I can accept what has happened, but I don't have to accept what will be. I've included my home phone number.",
        "story_cn": "但我仍然可以过值得的生活。我仍然希望我的儿子能康复。我可以接受已经发生的事情，但我不必接受即将发生的事情。我已经添加了我的家庭电话号码。",
        "targetWord": "sabotage",
        "options": [
          {
            "word": "sabotage",
            "action": "Take a measured approach to sabotage the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [sabotage]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to sabotage your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "office, gotten that document lead promotion, went for eggs with Kyle . . . if she's okay -- any of it will help.",
        "story_cn": "办公室，拿到领导晋升的文件，和凯尔一起去买鸡蛋。 。 。如果她没事的话——任何一个都会有帮助。",
        "targetWord": "empathy",
        "options": [
          {
            "word": "empathy",
            "action": "Take a measured approach to empathy the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [empathy]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to empathy your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "Which is why I'm so confused when I step closer and the words that come out of my mouth are \"How was Miley's birthday?\" She stills as her head turns to me. \"Sorry, what?\" A legitimate question. None of my business. Except I think of Miley's shoulders dropping.",
        "story_cn": "这就是为什么当我走近时我感到如此困惑，从我嘴里说出的话是“麦莉的生日怎么样？”她一动不动，头转向我。 “抱歉，什么？”一个合理的问题。不关我的事。但我想到麦莉的肩膀垂了下来。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 50,
    "title": "No Outside Food Allowed",
    "wordCount": 1808,
    "startPage": 308,
    "beats": [
      {
        "beatId": 1,
        "story": "My mom gave my room a thorough deep cleaning before I arrived, and the chemical fresh scent from the products she'd sprayed over every surface lingers. I threw out most of the stuff from my old apartment. I don't want to surround myself with those things, those memories, again. Everything I was afraid would happen happened.",
        "story_cn": "在我到达之前，我妈妈对我的房间进行了彻底的深度清洁，她喷洒在每个表面上的产品散发出的化学清新气味一直萦绕在我的脑海里。我扔掉了旧公寓里的大部分东西。我不想再让自己被那些东西、那些回忆包围。我担心会发生的一切都发生了。",
        "targetWord": "acceptable",
        "options": [
          {
            "word": "acceptable",
            "action": "Take a measured approach to acceptable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [acceptable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to acceptable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "it, from when we got milkshakes. The receipt from my bowling shoe rental. The ticket stub from the movies. Why was I such a pack rat?",
        "story_cn": "它，从我们喝奶昔的时候开始。我租保龄球鞋的收据。电影票根。为什么我是这样一个包鼠？",
        "targetWord": "persistent",
        "options": [
          {
            "word": "persistent",
            "action": "Take a measured approach to persistent the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [persistent]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to persistent your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "\"Hey, Jolene,\" Cliff says when I reach him and lower myself into the seat across from him. He gives me a tentative stare, like he's not sure what I'll do next. \"Hey, Cliff.\" I return a wobbly grin. There's so much to say.",
        "story_cn": "“嘿，乔琳，”当我走到他身边并坐到他对面的座位上时，克里夫说道。他试探性地看了我一眼，好像不确定我下一步要做什么。 “嘿，克里夫。”我回以一个颤抖的笑容。有很多话要说。",
        "targetWord": "demoralizing",
        "options": [
          {
            "word": "demoralizing",
            "action": "Take a measured approach to demoralizing the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [demoralizing]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to demoralizing your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "the mass layoffs made some people recognize a major need for more employee protections.\" \"Clifford!\" I pull my hand to my chest. \"Are you being a hero?\" His sheepish smile, I missed it -- and I'm going to miss it so much. \"I can't help it,\" he says. \"That job was the wrong fit, but it helped me find the right one.\" He's right, and a deeper part of me is genuinely happy for him.",
        "story_cn": "“大规模裁员让一些人认识到需要更多的员工保护。” “克利福德！”我把手​​放在胸前。“你是英雄吗？”他羞涩的微笑，我想念它——而且我会非常想念它。“我无法控制，”他说。“那份工作不合适，但它帮助我找到了合适的工作。”他是对的，我内心深处真诚地为他感到高兴。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  },
  {
    "id": 51,
    "title": "One Year(ish) Later",
    "wordCount": 3513,
    "startPage": 313,
    "beats": [
      {
        "beatId": 1,
        "story": "I spot the red balloons tied to the pole and yell, \"The party's in that building! Those balloons mean party! Pull over.\" Cliff claps his hands on the steering wheel. \"Thanks for cracking that code there.\" I smile shakily.",
        "story_cn": "我发现绑在杆子上的红色气球就喊道：“派对就在那栋楼里！那些气球意味着派对！靠边停车。”克里夫双手拍在方向盘上。 “谢谢你破解了那里的密码。”我颤抖着微笑。",
        "targetWord": "insufferable",
        "options": [
          {
            "word": "insufferable",
            "action": "Take a measured approach to insufferable the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [insufferable]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to insufferable your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 2,
        "story": "Just as he walks off, I realize I'm doing pretty okay so far, standing right here, alone in a room with people who are looking at me, even though I'm still not sure what to do with my hands. I search for a familiar face and spot Armin talking to a group of people in a corner. I take a step in his direction -- only to realize I recognize the back of the blond head standing to his right. My skin pulls tight.",
        "story_cn": "当他走开时，我意识到到目前为止我做得还不错，独自一人站在一个房间里，周围的人都在看着我，尽管我仍然不知道该怎么处理我的手。我寻找一张熟悉的面孔，发现阿明正在角落里和一群人说话。我朝他的方向迈了一步——却发现我认出了站在他右边的金发后脑勺。我的皮肤绷紧。",
        "targetWord": "interpersonal",
        "options": [
          {
            "word": "interpersonal",
            "action": "Take a measured approach to interpersonal the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [interpersonal]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to interpersonal your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 3,
        "story": "Acknowledgments Getting here took a lot of help, but I'm glad it did, because the real book was the people I met along the way. First, thank you, reader, for spending your time with these pages and for taking a chance on a debut. I appreciate you very much. To my incredible agents, Melanie Figueroa and Taylor Haggerty, for helping make my dream come true.",
        "story_cn": "致谢到达这里需要很多帮助，但我很高兴，因为真正的书是我一路上遇到的人。首先，感谢读者花时间浏览这些页面并有机会首次亮相。我非常感谢你。感谢我出色的经纪人梅兰妮·菲格罗亚和泰勒·哈格蒂，感谢你们帮助我实现了梦想。",
        "targetWord": "retaliate",
        "options": [
          {
            "word": "retaliate",
            "action": "Take a measured approach to retaliate the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [retaliate]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to retaliate your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      },
      {
        "beatId": 4,
        "story": "About the Author NATALIE SUE is a Canadian writer of Iranian and British descent. She spent her formative years moving around western Canada with a brief stint in Scotland, where she discovered her passion for storytelling as a means of connection and reading as a means of comfort. When she's not writing, she enjoys bingeing great and terrible TV, attempting pottery, and procuring houseplants. She lives in Calgary with her husband, daughter, and dog.",
        "story_cn": "关于作者 NATALIE SUE 是一位伊朗和英国血统的加拿大作家。她在加拿大西部度过了她的成长岁月，并在苏格兰短暂停留，在那里她发现了自己对讲故事作为联系方式和阅读作为安慰方式的热情。当她不写作时，她喜欢看精彩又糟糕的电视节目，尝试陶艺，以及购买室内植物。她与丈夫、女儿和狗住在卡尔加里。",
        "targetWord": "confidential",
        "options": [
          {
            "word": "confidential",
            "action": "Take a measured approach to confidential the current office situation.",
            "action_cn": "采取稳健策略，从容应对当前局面（运用核心词 [confidential]）。",
            "isCorrect": true,
            "fullOutcomeStory": "By choosing to confidential your surroundings, you skillfully maintain your composure. The narrative unfolds naturally as Jolene observes the subtle dynamics of her coworkers and secures a tactical advantage.",
            "fullOutcomeStory_cn": "你冷静机智地处理了局面，成功化解尴尬并推进了原著剧情！Jolene 敏锐察觉到了同事间暗流涌动的秘密。"
          },
          {
            "word": "hesitate",
            "action": "Hesitate nervously and second-guess your every instinct.",
            "action_cn": "犹豫迟疑，在同事怀疑的目光中手足无措。",
            "isCorrect": false,
            "fullOutcomeStory": "Hesitating at such a delicate moment causes a ripple of awkward silence across the cubicle pod. Caitlin shoots you a sharp smirk while Rhonda narrows her eyes in suspicion.",
            "fullOutcomeStory_cn": "你在关键时刻的迟疑引发了一阵社死般的尴尬沉默。Caitlin 露出了嘲讽的冷笑，职场理智值 SAN 受到损伤。"
          },
          {
            "word": "panic",
            "action": "Panic abruptly and blurt out an overly defensive remark.",
            "action_cn": "惊慌失措下脱口说出过度防卫的话语。",
            "isCorrect": false,
            "fullOutcomeStory": "In a sudden spike of anxiety, you blurt out something bizarre that draws curious stares from everyone in the hallway. You scramble to recover your poker face before Gregory notices.",
            "fullOutcomeStory_cn": "突如其来的焦虑让你说出了一句极为离谱的怪话，引得走廊里所有人齐刷刷抬头盯着你，HP 体力受损！"
          }
        ]
      }
    ]
  }
];
