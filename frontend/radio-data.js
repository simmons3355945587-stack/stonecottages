// 📻 英文电台精选曲库与毫秒级双语点读歌词数据库 (English Learning Radio)
// 专为 CET-4 / 四六级过渡精听磨耳朵定制：发音纯正、语速适中、词汇高度契合
// 严密对齐原声音频前奏与句首起唱毫秒时间戳，杜绝字幕音画分离

const RADIO_PLAYLIST = [
  {
    "id": "lemon_tree",
    "title": "Lemon Tree",
    "artist": "Fools Garden",
    "album": "Dish of the Day (1995)",
    "tag": "🟢 四级听力经典 · 欢快叙事",
    "cover": "🍋",
    "duration": 193,
    "introDuration": 13.22,
    "src": "/audio/lemon_tree.mp3",
    "lyrics": [
      {
        "time": 13.22,
        "en": "I'm sitting here in the boring room",
        "cn": "我正独自坐在这间枯燥无聊的房间里"
      },
      {
        "time": 17.32,
        "en": "It's just another rainy Sunday afternoon",
        "cn": "这不过是又一个下着雨的周日下午"
      },
      {
        "time": 20.43,
        "en": "I'm wasting my time, I got nothing to do",
        "cn": "我虚度着大好光阴，无所事事"
      },
      {
        "time": 23.78,
        "en": "I'm hanging around, I'm waiting for you",
        "cn": "我四处徘徊游荡，静候着你的出现"
      },
      {
        "time": 26.73,
        "en": "But nothing ever happens, and I wonder",
        "cn": "可什么都没发生，我不知所措"
      },
      {
        "time": 33.7,
        "en": "I'm driving around in my car",
        "cn": "我开着我的小汽车在街上兜风"
      },
      {
        "time": 37.02,
        "en": "I'm driving too fast, I'm driving too far",
        "cn": "我开得太快，也不知不觉开得太远"
      },
      {
        "time": 40.43,
        "en": "I'd like to change my point of view",
        "cn": "我想换个角度看待眼前的一切"
      },
      {
        "time": 43.78,
        "en": "I feel so lonely, I'm waiting for you",
        "cn": "我感到如此孤单，依然在苦苦等待你"
      },
      {
        "time": 46.87,
        "en": "But nothing ever happens, and I wonder",
        "cn": "可什么都没发生，我不知所措"
      },
      {
        "time": 53.55,
        "en": "I wonder how",
        "cn": "我好奇究竟怎样，想知道为何如此"
      },
      {
        "time": 55.49,
        "en": "I wonder why",
        "cn": "我好奇究竟怎样，想知道为何如此"
      },
      {
        "time": 57.13,
        "en": "Yesterday you told me 'bout the blue, blue sky",
        "cn": "昨天你还描绘着那片蔚蓝晴空"
      },
      {
        "time": 60.27,
        "en": "And all that I can see is just another lemon tree",
        "cn": "可目之所及，却依然只有另一棵柠檬树"
      },
      {
        "time": 67.06,
        "en": "I'm turning my head up and down",
        "cn": "我上下晃动着脑袋"
      },
      {
        "time": 70.65,
        "en": "I'm turning, turning, turning, turning, turning around",
        "cn": "我不停地转啊转，四处张望"
      },
      {
        "time": 73.93,
        "en": "And all that I can see is just another lemon tree",
        "cn": "可目之所及，却依然只有另一棵柠檬树"
      },
      {
        "time": 79.36,
        "en": "Sing!",
        "cn": "唱吧！"
      },
      {
        "time": 80.25,
        "en": "Dap-dadada-dadpm-didap-da",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 85.41,
        "en": "Dadada-dadpm-didap-da",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 88.69,
        "en": "Dap-didili-da",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 93.24,
        "en": "I'm sitting here, I miss the power",
        "cn": "我呆坐在此，浑身没有半点力气"
      },
      {
        "time": 96.79,
        "en": "I'd like to go out, taking a shower",
        "cn": "我想出去走走，冲个清凉的澡"
      },
      {
        "time": 100.03,
        "en": "But there's a heavy cloud inside my head",
        "cn": "然而一团沉重的阴云在我脑海中挥之不去"
      },
      {
        "time": 103.3,
        "en": "I feel so tired, put myself into bed",
        "cn": "我感觉筋疲力尽，倒头倒在床上"
      },
      {
        "time": 106.15,
        "en": "Well, nothing ever happens, and I wonder",
        "cn": "唉，一切平静如常，我茫然自问"
      },
      {
        "time": 113.33,
        "en": "Isolation is not good for me",
        "cn": "封闭与孤僻对我而言绝非益事"
      },
      {
        "time": 120.37,
        "en": "Isolation, well, I don't want to sit on the lemon tree",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 126.32,
        "en": "I'm steppin' around in the desert of joy",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 129.32,
        "en": "Baby, anyhow I'll get another toy",
        "cn": "亲爱的，无论如何我都会找到新的乐趣"
      },
      {
        "time": 132.36,
        "en": "And everything will happen, and you wonder",
        "cn": "一切奇迹终将降临，轮到你惊叹不已"
      },
      {
        "time": 139.4,
        "en": "I wonder how",
        "cn": "我好奇究竟怎样，想知道为何如此"
      },
      {
        "time": 140.63,
        "en": "I wonder why",
        "cn": "我好奇究竟怎样，想知道为何如此"
      },
      {
        "time": 142.56,
        "en": "Yesterday you told me 'bout the blue, blue sky",
        "cn": "昨天你还描绘着那片蔚蓝晴空"
      },
      {
        "time": 145.64,
        "en": "And all that I can see is just another lemon tree",
        "cn": "可目之所及，却依然只有另一棵柠檬树"
      },
      {
        "time": 152.32,
        "en": "I'm turning my head up and down",
        "cn": "我上下晃动着脑袋"
      },
      {
        "time": 155.69,
        "en": "I'm turning, turning, turning, turning, turning around",
        "cn": "我不停地转啊转，四处张望"
      },
      {
        "time": 158.73,
        "en": "And all that I can see is just another lemon tree",
        "cn": "可目之所及，却依然只有另一棵柠檬树"
      },
      {
        "time": 163.64,
        "en": "And I wonder, wonder",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 165.56,
        "en": "I wonder how",
        "cn": "我好奇究竟怎样，想知道为何如此"
      },
      {
        "time": 167.16,
        "en": "I wonder why",
        "cn": "我好奇究竟怎样，想知道为何如此"
      },
      {
        "time": 168.64,
        "en": "Yesterday you told me 'bout the blue, blue sky",
        "cn": "昨天你还描绘着那片蔚蓝晴空"
      },
      {
        "time": 171.92,
        "en": "And all that I can see",
        "cn": "而我眼前所能看见的"
      },
      {
        "time": 175.21,
        "en": "And all that I can see (ah, dip, dip, dip)",
        "cn": "而我目之所及（轻快伴唱）"
      },
      {
        "time": 178.52,
        "en": "And all that I can see",
        "cn": "而我眼前所能看见的"
      },
      {
        "time": 181.16,
        "en": "Is just a yellow lemon tree",
        "cn": "只有那一棵黄色的柠檬树"
      }
    ]
  },
  {
    "id": "count_on_me",
    "title": "Count on Me",
    "artist": "Bruno Mars",
    "album": "Doo-Wops & Hooligans (2010)",
    "tag": "💖 温暖尤克里里 · 地道高频短语",
    "cover": "🎸",
    "duration": 187,
    "introDuration": 5.19,
    "src": "/audio/count_on_me.mp3",
    "lyrics": [
      {
        "time": 2.32,
        "en": "Oh-oh-oh",
        "cn": "噢~噢~噢（尤克里里前奏轻吟）"
      },
      {
        "time": 5.19,
        "en": "If you ever find yourself stuck in the middle of the sea",
        "cn": "若你某天发现自己身陷汪洋大海中央"
      },
      {
        "time": 10.38,
        "en": "I'll sail the world to find you",
        "cn": "我定会扬帆万里跨越重洋去寻你"
      },
      {
        "time": 15.75,
        "en": "If you ever find yourself lost in the dark and you can't see",
        "cn": "若你某天发现自己迷失于幽暗之中看不清前方"
      },
      {
        "time": 21.14,
        "en": "I'll be the light to guide you",
        "cn": "我愿化作一盏明灯引你前行"
      },
      {
        "time": 28.21,
        "en": "We'll find out what we're made of",
        "cn": "我们终会明白自己由何等坚毅的心所铸"
      },
      {
        "time": 32.25,
        "en": "When we are called to help our friends in need",
        "cn": "当身处困境的朋友需要我们挺身相助"
      },
      {
        "time": 37.1,
        "en": "You can count on me like 1, 2, 3, I'll be there",
        "cn": "你可以依靠我，就像数一二三那样简单，我随叫随到"
      },
      {
        "time": 45.76,
        "en": "And I know when I need it",
        "cn": "我也深知当我需要依靠时"
      },
      {
        "time": 48.19,
        "en": "I can count on you like 4, 3, 2, and you'll be there",
        "cn": "像数四三二一样能信赖你，你定会陪伴身旁"
      },
      {
        "time": 56.44,
        "en": "'Cause that's what friends are supposed to do, oh, yeah",
        "cn": "因为这正是知心挚友应有的模样，没错"
      },
      {
        "time": 60.57,
        "en": "Ooh-ooh-ooh-ooh-ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 63.58,
        "en": "Ooh-ooh-ooh-ooh-ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 66.06,
        "en": "Ooh, yeah, yeah",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 70.06,
        "en": "If you tossin' and you're turnin' and you just can't fall asleep",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 75.16,
        "en": "I'll sing a song beside you",
        "cn": "我会在你耳畔轻唱一首温暖的小夜曲"
      },
      {
        "time": 80.61,
        "en": "And if you ever forget how much you really mean to me",
        "cn": "若你偶尔淡忘了你在我心中有多么不可替代"
      },
      {
        "time": 85.65,
        "en": "Every day I will remind you, oh",
        "cn": "每一天我都会轻声向你提醒"
      },
      {
        "time": 93.15,
        "en": "We'll find out what we're made of",
        "cn": "我们终会明白自己由何等坚毅的心所铸"
      },
      {
        "time": 96.83,
        "en": "When we are called to help our friends in need",
        "cn": "当身处困境的朋友需要我们挺身相助"
      },
      {
        "time": 102.08,
        "en": "You can count on me like 1, 2, 3, I'll be there",
        "cn": "你可以依靠我，就像数一二三那样简单，我随叫随到"
      },
      {
        "time": 110.59,
        "en": "And I know when I need it",
        "cn": "我也深知当我需要依靠时"
      },
      {
        "time": 112.99,
        "en": "I can count on you like 4, 3, 2, and you'll be there",
        "cn": "像数四三二一样能信赖你，你定会陪伴身旁"
      },
      {
        "time": 121.14,
        "en": "'Cause that's what friends are supposed to do, oh, yeah",
        "cn": "因为这正是知心挚友应有的模样，没错"
      },
      {
        "time": 125.58,
        "en": "Ooh-ooh-ooh-ooh-ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 128.15,
        "en": "Ooh-ooh-ooh-ooh-ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 130.85,
        "en": "Ooh, yeah, yeah",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 134.53,
        "en": "You'll always have my shoulder when you cry",
        "cn": "每当你落泪时，我随时借出坚实的肩膀"
      },
      {
        "time": 145.23,
        "en": "I'll never let go, never say goodbye",
        "cn": "我绝不放手，永不说再见"
      },
      {
        "time": 153.78,
        "en": "You know you can count on me like 1, 2, 3, I'll be there",
        "cn": "你知道你可以信赖我，如数一二三，我定在身旁"
      },
      {
        "time": 164.37,
        "en": "And I know when I need it",
        "cn": "我也深知当我需要依靠时"
      },
      {
        "time": 166.81,
        "en": "I can count on you like 4, 3, 2, andd you'll be there",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 175.11,
        "en": "'Cause that's what friends are supposed to do, oh, yeah",
        "cn": "因为这正是知心挚友应有的模样，没错"
      },
      {
        "time": 179.61,
        "en": "Ooh-ooh-ooh-ooh-ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 182.24,
        "en": "Ooh-ooh-ooh-ooh-ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 185.04,
        "en": "Ooh",
        "cn": "呜~呜~温暖和声"
      },
      {
        "time": 185.86,
        "en": "You can count on me 'cause I can count on you",
        "cn": "你可以依赖我，正如我时刻信赖着你"
      }
    ]
  },
  {
    "id": "try_everything",
    "title": "Try Everything",
    "artist": "Shakira",
    "album": "Zootopia OST (2016)",
    "tag": "🐰 疯狂动物城主题曲 · 活力与生存",
    "cover": "🥕",
    "duration": 192,
    "introDuration": 14.63,
    "src": "/audio/try_everything.mp3",
    "lyrics": [
      {
        "time": 0.69,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 3.77,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 7.68,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 12.37,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 14.63,
        "en": "I messed up tonight, I lost another fight",
        "cn": "今晚我又搞砸了，又输掉了一场较量"
      },
      {
        "time": 19.43,
        "en": "Lost to myself, but I'll just start again",
        "cn": "败给了软弱的自己，但我会重整旗鼓重新出发"
      },
      {
        "time": 23.87,
        "en": "I keep falling down, I keep on hitting the ground",
        "cn": "我一次又一次摔倒，重重跌在冰冷的地面"
      },
      {
        "time": 27.56,
        "en": "I always get up now, see what's next",
        "cn": "但如今我总会迅速爬起，去看看接下来有什么精彩"
      },
      {
        "time": 31.94,
        "en": "Birds don't just fly, they fall down and get up",
        "cn": "鸟儿从非生来就会飞翔，跌落之后才能振翅高飞"
      },
      {
        "time": 40.67,
        "en": "Nobody learns without gettin' it wrong",
        "cn": "没有谁不经历犯错挫败就能学会成长"
      },
      {
        "time": 48.01,
        "en": "I won't give up, no, I won't give in",
        "cn": "我绝不会轻言放弃，我绝不向困难屈服"
      },
      {
        "time": 51.87,
        "en": "'Til I reach the end, and then I'll start again",
        "cn": "直到我抵达梦想的终点，然后继续踏上新的征途"
      },
      {
        "time": 56.38,
        "en": "No, I won't leave, I wanna try everything",
        "cn": "不，我绝不退缩，我想尝试世间所有可能"
      },
      {
        "time": 60.96,
        "en": "I wanna try even though I could fail",
        "cn": "即便可能会面临失败，我也要拼尽全力去试一试"
      },
      {
        "time": 65.56,
        "en": "I won't give up, no, I won't give in",
        "cn": "我绝不会轻言放弃，我绝不向困难屈服"
      },
      {
        "time": 68.53,
        "en": "'Til I reach the end, and then I'll start again",
        "cn": "直到我抵达梦想的终点，然后继续踏上新的征途"
      },
      {
        "time": 73.55,
        "en": "No, I won't leave, I wanna try everything",
        "cn": "不，我绝不退缩，我想尝试世间所有可能"
      },
      {
        "time": 77.31,
        "en": "I wanna try even though I could fail",
        "cn": "即便可能会面临失败，我也要拼尽全力去试一试"
      },
      {
        "time": 81.39,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 85.55,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      },
      {
        "time": 87.3,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 89.53,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      },
      {
        "time": 91.49,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 93.62,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      },
      {
        "time": 95.76,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 98.25,
        "en": "Look how far you've come, you filled your heart with love",
        "cn": "看看你一路走来披荆斩棘，心中盈满了无尽热爱"
      },
      {
        "time": 102.17,
        "en": "Baby, you've done enough, take a deep breath",
        "cn": "亲爱的，你已经竭尽所能，深吸一口气放松片刻"
      },
      {
        "time": 106.13,
        "en": "Don't beat yourself up, no need to run so fast",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 111.05,
        "en": "Sometimes we come last, but we did our best",
        "cn": "有时我们或许落于人后，但我们已拼尽了全部力量"
      },
      {
        "time": 115.83,
        "en": "I won't give up, no, I won't give in",
        "cn": "我绝不会轻言放弃，我绝不向困难屈服"
      },
      {
        "time": 118.13,
        "en": "'Til I reach the end, and then I'll start again",
        "cn": "直到我抵达梦想的终点，然后继续踏上新的征途"
      },
      {
        "time": 123.34,
        "en": "No, I won't leave, I wanna try everything",
        "cn": "不，我绝不退缩，我想尝试世间所有可能"
      },
      {
        "time": 126.91,
        "en": "I wanna try even though I could fail",
        "cn": "即便可能会面临失败，我也要拼尽全力去试一试"
      },
      {
        "time": 132.11,
        "en": "I won't give up, no, I won't give in",
        "cn": "我绝不会轻言放弃，我绝不向困难屈服"
      },
      {
        "time": 135.71,
        "en": "'Til I reach the end, and then I'll start again",
        "cn": "直到我抵达梦想的终点，然后继续踏上新的征途"
      },
      {
        "time": 140.22,
        "en": "No, I won't leave, I wanna try everything",
        "cn": "不，我绝不退缩，我想尝试世间所有可能"
      },
      {
        "time": 144.13,
        "en": "I wanna try even though I could fail",
        "cn": "即便可能会面临失败，我也要拼尽全力去试一试"
      },
      {
        "time": 149.59,
        "en": "I'll keep on making those new mistakes",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 157.78,
        "en": "I'll keep on making them every day",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 165.17,
        "en": "Those new mistakes",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 169.65,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 172.71,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      },
      {
        "time": 174.54,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 176.54,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      },
      {
        "time": 178.96,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 181.1,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      },
      {
        "time": 183.18,
        "en": "Oh, oh, oh, oh, oh",
        "cn": "噢，噢，噢，噢，噢（活力前奏律动）"
      },
      {
        "time": 186.9,
        "en": "Try everything",
        "cn": "放手一搏，尝试一切！"
      }
    ]
  },
  {
    "id": "yesterday_once_more",
    "title": "Yesterday Once More",
    "artist": "The Carpenters",
    "album": "Now & Then (1973)",
    "tag": "📻 听力发音天花板 · 典雅抒情",
    "cover": "🎙️",
    "duration": 238,
    "introDuration": 2.29,
    "src": "/audio/yesterday_once_more.mp3",
    "lyrics": [
      {
        "time": 2.29,
        "en": "When I was young",
        "cn": "当我年少时"
      },
      {
        "time": 4.24,
        "en": "I'd listen to the radio",
        "cn": "我常常守在收音机旁聆听"
      },
      {
        "time": 8.21,
        "en": "Waitin' for my favorite songs",
        "cn": "静静期盼着我最心爱的歌曲响起"
      },
      {
        "time": 14.29,
        "en": "When they played I'd sing along",
        "cn": "当旋律响起时我便轻声跟唱"
      },
      {
        "time": 18.86,
        "en": "It made me smile",
        "cn": "那些歌声总让我泛起微笑"
      },
      {
        "time": 25.52,
        "en": "Those were such happy times",
        "cn": "那是何等快乐无忧的旧日时光"
      },
      {
        "time": 28.32,
        "en": "And not so long ago",
        "cn": "而且仿佛就在不久之前"
      },
      {
        "time": 32.04,
        "en": "How I wondered where they'd gone",
        "cn": "我多么好奇，那些美好的歌声飘去了何方"
      },
      {
        "time": 37.48,
        "en": "But they're back again",
        "cn": "如今它们却再度回归心间"
      },
      {
        "time": 40.54,
        "en": "Just like a long lost friend",
        "cn": "宛如一位久别重逢的知心挚友"
      },
      {
        "time": 43.58,
        "en": "All the songs I loved so well",
        "cn": "那一首首我曾经深爱至极的老歌"
      },
      {
        "time": 49.04,
        "en": "Every sha-la-la-la",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 52.34,
        "en": "Every whoa-ooh-whoa",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 55.39,
        "en": "Still shines",
        "cn": "依然在记忆深处闪闪发亮"
      },
      {
        "time": 61.09,
        "en": "Every shing-a-ling-a-ling",
        "cn": "每一个动听的节奏节拍"
      },
      {
        "time": 63.85,
        "en": "That they're startin' to sing",
        "cn": "当他们再次唱起，是那样的美妙动人"
      },
      {
        "time": 66.74,
        "en": "So fine",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 72.11,
        "en": "When they get to the part",
        "cn": "当歌曲推进到最动情的高潮"
      },
      {
        "time": 75.23,
        "en": "Where he's breakin' her heart",
        "cn": "唱到他让心爱的女孩心碎的时候"
      },
      {
        "time": 78.16,
        "en": "It can really make me cry",
        "cn": "它依然会让我忍不住潸然泪下"
      },
      {
        "time": 82.75,
        "en": "Just like before",
        "cn": "就像从前的每一次一样"
      },
      {
        "time": 89.25,
        "en": "It's yesterday once more",
        "cn": "昨日重现，重温旧梦"
      },
      {
        "time": 101.4,
        "en": "Lookin' back on",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 104.16,
        "en": "How it was in years gone by",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 107.5,
        "en": "And the good times that I had",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 113.39,
        "en": "Makes today seem rather sad",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 117.86,
        "en": "So much has changed",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 124.78,
        "en": "It was songs of love",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 127.77,
        "en": "That I would sing to them",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 130.82,
        "en": "And I'd memorize each word",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 135.92,
        "en": "Those old melodies",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 139.38,
        "en": "Still sound so good to me",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 142.46,
        "en": "As they melt the years away",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 147.64,
        "en": "Every Sha-la-la-la",
        "cn": "每一声轻快的 Sha-la-la-la"
      },
      {
        "time": 151.06,
        "en": "Every whoa-ooh-whoa",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 153.91,
        "en": "Still shines",
        "cn": "依然在记忆深处闪闪发亮"
      },
      {
        "time": 159.66,
        "en": "Every shing-a-ling-a-ling",
        "cn": "每一个动听的节奏节拍"
      },
      {
        "time": 162.68,
        "en": "That they're startin' to sing",
        "cn": "当他们再次唱起，是那样的美妙动人"
      },
      {
        "time": 165.26,
        "en": "So fine",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 170.75,
        "en": "All my best memories",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 173.53,
        "en": "Come back clearly to me",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 176.44,
        "en": "Some can even make me cry",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 180.9,
        "en": "Just like before",
        "cn": "就像从前的每一次一样"
      },
      {
        "time": 187.28,
        "en": "It's yesterday once more",
        "cn": "昨日重现，重温旧梦"
      },
      {
        "time": 193.44,
        "en": "Every sha-la-la-la",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 197.59,
        "en": "Every whoa-ooh-whoa",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 200.03,
        "en": "Still shines",
        "cn": "依然在记忆深处闪闪发亮"
      },
      {
        "time": 205.68,
        "en": "Every shing-a-ling-a-ling",
        "cn": "每一个动听的节奏节拍"
      },
      {
        "time": 208.51,
        "en": "That they're startin' to sing",
        "cn": "当他们再次唱起，是那样的美妙动人"
      },
      {
        "time": 211.36,
        "en": "So fine",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 216.45,
        "en": "Every Sha-la-la-la",
        "cn": "每一声轻快的 Sha-la-la-la"
      },
      {
        "time": 219.96,
        "en": "Every whoa-ooh whoa",
        "cn": "每一声温润的 whoa-ooh whoa"
      },
      {
        "time": 222.52,
        "en": "Still shines",
        "cn": "依然在记忆深处闪闪发亮"
      }
    ]
  },
  {
    "id": "until_i_found_you",
    "title": "Until I Found You",
    "artist": "Stephen Sanchez",
    "album": "Easy on My Eyes (2022)",
    "tag": "✨ 50年代复古流行 · 纯正慢摇浪漫",
    "cover": "🎷",
    "duration": 178,
    "introDuration": 10.41,
    "src": "/audio/until_i_found_you.mp3",
    "lyrics": [
      {
        "time": 10.41,
        "en": "Georgia, wrap me up in all your-",
        "cn": "乔治亚，用你所有的温存将我紧紧拥裹"
      },
      {
        "time": 16.74,
        "en": "I want you in my arms",
        "cn": "我渴望拥你入怀"
      },
      {
        "time": 22.12,
        "en": "Oh, let me hold you",
        "cn": "噢，让我紧紧拥抱着你"
      },
      {
        "time": 27.63,
        "en": "I'll never let you go again like I did",
        "cn": "我再也不会像曾经那般任你离去"
      },
      {
        "time": 33.31,
        "en": "Oh, I used to say",
        "cn": "噢，我过去常常感叹"
      },
      {
        "time": 37.24,
        "en": "\"I would never fall in love again until I found her\"",
        "cn": "“在遇见那个真正懂我的女孩前，我绝不坠入爱河”"
      },
      {
        "time": 44.28,
        "en": "I said, \"I would never fall unless it's you I fall into\"",
        "cn": "我说：“除非是跌入你的温柔怀抱，否则我绝不动心”"
      },
      {
        "time": 51.1,
        "en": "I was lost within the darkness, but then I found her",
        "cn": "曾经在无边黑夜中迷惘摸索，但我终于找到了她"
      },
      {
        "time": 58.18,
        "en": "I found you",
        "cn": "我终于找到了你"
      },
      {
        "time": 64.94,
        "en": "♪",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 67.79,
        "en": "Georgia, pulled me in",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 71.95,
        "en": "I asked to love her once again",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 79.14,
        "en": "You fell, I caught you",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 84.69,
        "en": "I'll never let you go again like I did",
        "cn": "我再也不会像曾经那般任你离去"
      },
      {
        "time": 90.34,
        "en": "Oh, I used to say",
        "cn": "噢，我过去常常感叹"
      },
      {
        "time": 94.01,
        "en": "\"I would never fall in love again until I found her\"",
        "cn": "“在遇见那个真正懂我的女孩前，我绝不坠入爱河”"
      },
      {
        "time": 101.19,
        "en": "I said, \"I would never fall unless it's you I fall into\"",
        "cn": "我说：“除非是跌入你的温柔怀抱，否则我绝不动心”"
      },
      {
        "time": 108.25,
        "en": "I was lost within the darkness, but then I found her",
        "cn": "曾经在无边黑夜中迷惘摸索，但我终于找到了她"
      },
      {
        "time": 115.02,
        "en": "I found you",
        "cn": "我终于找到了你"
      },
      {
        "time": 123.63,
        "en": "♪",
        "cn": "（原声跟读精听句）"
      },
      {
        "time": 136.82,
        "en": "I would never fall in love again until I found her",
        "cn": "“在遇见那个真正懂我的女孩前，我绝不坠入爱河”"
      },
      {
        "time": 143.94,
        "en": "I said, \"I would never fall unless it's you I fall into\"",
        "cn": "我说：“除非是跌入你的温柔怀抱，否则我绝不动心”"
      },
      {
        "time": 151.08,
        "en": "I was lost within the darkness, but then I found her",
        "cn": "曾经在无边黑夜中迷惘摸索，但我终于找到了她"
      },
      {
        "time": 157.95,
        "en": "I found you",
        "cn": "我终于找到了你"
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RADIO_PLAYLIST };
}
