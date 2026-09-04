// 📻 英文电台精选曲库与毫秒级双语点读歌词数据库 (English Learning Radio)
// 专为 CET-4 / 四六级过渡精听磨耳朵定制：发音纯正、语速适中、词汇高度契合

const RADIO_PLAYLIST = [
  {
    id: "lemon_tree",
    title: "Lemon Tree",
    artist: "Fools Garden",
    album: "Dish of the Day (1995)",
    tag: "🟢 四级听力经典 · 欢快叙事",
    cover: "🍋",
    duration: 198,
    src: "/audio/lemon_tree.mp3",
    lyrics: [
      { time: 0.5, en: "I'm sitting here in the boring room", cn: "我正独自坐在这间无聊的房间里" },
      { time: 4.8, en: "It's just another rainy Sunday afternoon", cn: "这不过是又一个下着雨的周日下午" },
      { time: 9.2, en: "I'm wasting my time, I got nothing to do", cn: "我虚度着大好光阴，无所事事" },
      { time: 13.5, en: "I'm hanging around, I'm waiting for you", cn: "我四处徘徊游荡，静候着你的出现" },
      { time: 18.0, en: "But nothing ever happens, and I wonder", cn: "可什么都没发生，我不知所措" },
      { time: 24.2, en: "I'm driving around in my car", cn: "我开着我的小汽车在街上兜风" },
      { time: 28.5, en: "I'm driving too fast, I'm driving too far", cn: "我开得太快，也不知不觉开得太远" },
      { time: 33.0, en: "I'd like to change my point of view", cn: "我想换个角度看待眼前的一切" },
      { time: 37.2, en: "I feel so lonely, I'm waiting for you", cn: "我感到如此孤单，依然在苦苦等待你" },
      { time: 41.5, en: "But nothing ever happens, and I wonder", cn: "可依然毫无波澜，我陷入迷茫" },
      { time: 48.0, en: "I wonder how, I wonder why", cn: "我好奇究竟怎样，想知道为何如此" },
      { time: 52.5, en: "Yesterday you told me 'bout the blue blue sky", cn: "昨天你还描绘着那片蔚蓝晴空" },
      { time: 57.0, en: "And all that I can see is just a yellow lemon tree", cn: "可如今映入我眼帘的，只是一棵黄色的柠檬树" },
      { time: 64.8, en: "I'm turning my head up and down", cn: "我上下晃动着脑袋" },
      { time: 69.2, en: "I'm turning, turning, turning, turning, turning around", cn: "我不停地转啊转，四处张望" },
      { time: 74.0, en: "And all that I can see is just another lemon tree", cn: "可目之所及，却依然只有另一棵柠檬树" },
      { time: 82.5, en: "Sing, dah, dah-da-da-dah, dee-dirt-dah", cn: "轻轻吟唱：哒，哒哒哒哒，嘀嗒" },
      { time: 90.0, en: "I'm sitting here, I miss the power", cn: "我呆坐在此，浑身没有半点力气" },
      { time: 94.2, en: "I'd like to go out, taking a shower", cn: "我想出去走走，冲个清凉的澡" },
      { time: 98.8, en: "But there's a heavy cloud inside my head", cn: "然而一团沉重的阴云在我脑海中挥之不去" },
      { time: 103.2, en: "I feel so tired, put myself into bed", cn: "我感觉筋疲力尽，倒头倒在床上" },
      { time: 107.5, en: "Well, nothing ever happens, and I wonder", cn: "唉，一切平静如常，我茫然自问" },
      { time: 114.0, en: "Isolation is not good for me", cn: "封闭与孤僻对我而言绝非益事" },
      { time: 122.5, en: "Isolation, I don't want to sit on a lemon tree", cn: "寂寞孤独，我可不想一直困守在柠檬树上" },
      { time: 131.0, en: "I'm steppin' around in a desert of joy", cn: "我在快乐荒芜的沙漠中漫步徘徊" },
      { time: 135.5, en: "Baby, anyhow I'll get another toy", cn: "亲爱的，无论如何我都会找到新的乐趣" },
      { time: 140.0, en: "And everything will happen, and you wonder", cn: "一切奇迹终将降临，轮到你惊叹不已" },
      { time: 146.5, en: "I wonder how, I wonder why", cn: "我好奇究竟怎样，想知道为何如此" },
      { time: 151.0, en: "Yesterday you told me 'bout the blue blue sky", cn: "昨天你还在诉说着那蔚蓝的天空" },
      { time: 155.5, en: "And all that I can see is just another lemon tree", cn: "可我眼前所见，依旧只有那一棵柠檬树" }
    ]
  },
  {
    id: "count_on_me",
    title: "Count on Me",
    artist: "Bruno Mars",
    album: "Doo-Wops & Hooligans (2010)",
    tag: "💖 温暖尤克里里 · 地道高频短语",
    cover: "🎸",
    duration: 197,
    src: "/audio/count_on_me.mp3",
    lyrics: [
      { time: 1.0, en: "If you ever find yourself stuck in the middle of the sea", cn: "若你某天发现自己身陷汪洋大海中央" },
      { time: 7.5, en: "I'll sail the world to find you", cn: "我定会扬帆万里跨越重洋去寻你" },
      { time: 13.5, en: "If you ever find yourself lost in the dark and you can't see", cn: "若你某天发现自己迷失于幽暗之中看不清前方" },
      { time: 20.0, en: "I'll be the light to guide you", cn: "我愿化作一盏明灯引你前行" },
      { time: 26.5, en: "We'll find out what we're made of", cn: "我们终会明白自己由何等坚毅的心所铸" },
      { time: 31.0, en: "When we are called to help our friends in need", cn: "当身处困境的朋友需要我们挺身相助" },
      { time: 38.5, en: "You can count on me like one, two, three", cn: "你可以依靠我，就像数一二三那样简单" },
      { time: 43.5, en: "I'll be there", cn: "我必随叫随到" },
      { time: 47.0, en: "And I know when I need it I can count on you like four, three, two", cn: "我也深知当我需要依靠时，像数四三二一样能信赖你" },
      { time: 54.0, en: "You'll be there", cn: "你也必定守候在我身旁" },
      { time: 57.5, en: "'Cause that's what friends are supposed to do, oh yeah", cn: "因为这正是知心挚友应有的模样，没错" },
      { time: 66.0, en: "If you toss and you turn and you just can't fall asleep", cn: "若你辗转反侧难以安然入睡" },
      { time: 72.5, en: "I'll sing a song beside you", cn: "我会在你耳畔轻唱一首温暖的小夜曲" },
      { time: 78.5, en: "And if you ever forget how much you really mean to me", cn: "若你偶尔淡忘了你在我心中有多么不可替代" },
      { time: 85.0, en: "Every day I will remind you", cn: "每一天我都会轻声向你提醒" },
      { time: 91.5, en: "We'll find out what we're made of", cn: "我们终会明白自己有着怎样坚定的力量" },
      { time: 96.0, en: "When we are called to help our friends in need", cn: "当患难中的朋友向我们伸出求助之手" },
      { time: 103.5, en: "You can count on me like one, two, three", cn: "你可以依赖我，像数一二三那么迅速" },
      { time: 108.5, en: "I'll be there", cn: "我时刻陪伴着你" }
    ]
  },
  {
    id: "try_everything",
    title: "Try Everything",
    artist: "Shakira",
    album: "Zootopia OST (2016)",
    tag: "🐰 疯狂动物城主题曲 · 活力与绝境生存",
    cover: "🥕",
    duration: 196,
    src: "/audio/try_everything.mp3",
    lyrics: [
      { time: 0.5, en: "I messed up tonight, I lost another fight", cn: "今晚我又搞砸了，又输掉了一场较量" },
      { time: 4.8, en: "I still mess up, but I'll just start again", cn: "我依然会犯错，但我会重整旗鼓从头再来" },
      { time: 9.0, en: "I keep falling down, I keep on hitting the ground", cn: "我一次又一次摔倒，重重跌在冰冷的地面" },
      { time: 13.5, en: "I always get up now to see what's next", cn: "但如今我总会迅速爬起，去看看接下来有什么精彩" },
      { time: 18.0, en: "Birds don't just fly, they fall down and get up", cn: "鸟儿从非生来就会飞翔，跌落之后才能振翅高飞" },
      { time: 22.5, en: "Nobody learns without getting it wrong", cn: "没有谁不经历犯错挫败就能学会成长" },
      { time: 27.0, en: "I won't give up, no, I won't give in", cn: "我绝不会轻言放弃，我绝不向困难屈服" },
      { time: 31.5, en: "'Til I reach the end and then I'll start again", cn: "直到我抵达梦想的终点，然后继续踏上新的征途" },
      { time: 36.0, en: "No, I won't leave, I wanna try everything", cn: "不，我绝不退缩，我想尝试世间所有可能" },
      { time: 40.5, en: "I wanna try even though I could fail", cn: "即便可能会面临失败，我也要拼尽全力去试一试" },
      { time: 45.0, en: "I won't give up, no, I won't give in", cn: "我绝不会倒下，我绝不退让分毫" },
      { time: 54.0, en: "Look how far you've come, you filled your heart with love", cn: "看看你一路走来披荆斩棘，心中盈满了无尽热爱" },
      { time: 58.5, en: "Baby, you've done enough, take a deep breath", cn: "亲爱的，你已经竭尽所能，深吸一口气放松片刻" },
      { time: 63.0, en: "Don't beat yourself up, don't need to run so fast", cn: "别对自己太过苛求自责，不必脚步匆匆狂奔不停" },
      { time: 67.5, en: "Sometimes we come last, but we did our best", cn: "有时我们或许落于人后，但我们已拼尽了全部力量" },
      { time: 72.0, en: "I won't give up, no, I won't give in", cn: "我永不放弃，我永不妥协！" }
    ]
  },
  {
    id: "yesterday_once_more",
    title: "Yesterday Once More",
    artist: "The Carpenters",
    album: "Now & Then (1973)",
    tag: "📻 听力发音天花板 · 典雅抒情",
    cover: "🎙️",
    duration: 238,
    src: "/audio/yesterday_once_more.mp3",
    lyrics: [
      { time: 1.0, en: "When I was young I'd listen to the radio", cn: "当我年少稚嫩时，我常常趴在收音机前聆听" },
      { time: 7.2, en: "Waitin' for my favorite songs", cn: "静静期盼着我最心爱的歌曲响起" },
      { time: 12.0, en: "When they played I'd sing along, it made me smile", cn: "旋律响起时我便轻声跟唱，脸上漾起灿烂微笑" },
      { time: 19.5, en: "Those were such happy times and not so long ago", cn: "那是何等快乐无忧的时光，仿佛就在不远的昨天" },
      { time: 26.8, en: "How I wondered where they'd gone", cn: "我多么好奇，那些美好的旧日都飘散去了何方" },
      { time: 33.5, en: "But they're back again just like a long lost friend", cn: "可如今它们宛如久别重逢的故人，悄然重返心头" },
      { time: 40.0, en: "All the songs I loved so well", cn: "那一首首我曾经深爱至极的动人老歌" },
      { time: 46.5, en: "Every Sha-la-la-la, every Wo-o-wo-o still shines", cn: "每一声经典的沙啦啦啦，每一声依稀的欢唱依然闪闪发光" },
      { time: 54.0, en: "Every shing-a-ling-a-ling that they're startin' to sing", cn: "当他们轻柔地唱起动人的旋律" },
      { time: 59.5, en: "So fine", cn: "是如此令人陶醉、如此美妙" }
    ]
  },
  {
    id: "until_i_found_you",
    title: "Until I Found You",
    artist: "Stephen Sanchez",
    album: "Easy on My Eyes (2022)",
    tag: "✨ 50年代复古流行 · 纯正慢摇浪漫",
    cover: "🎷",
    duration: 178,
    src: "/audio/until_i_found_you.mp3",
    lyrics: [
      { time: 1.0, en: "Georgia, wrap me up in all your, I want you in my arms", cn: "乔治亚，用你所有的温存将我拥入怀中" },
      { time: 8.5, en: "Oh, let me hold your heart", cn: "噢，让我细细体会并守护你的心跳" },
      { time: 14.0, en: "I would never let you go again, like I did", cn: "我再也不会像曾经那般，任由你从指尖溜走" },
      { time: 21.0, en: "Oh, I used to say", cn: "噢，我过去常常对自己感叹" },
      { time: 26.5, en: "I would never fall in love until I found her", cn: "在遇见那个真正懂我的女孩前，我绝不会深陷爱河" },
      { time: 34.0, en: "I said, 'I would never fall unless it's you I fall into'", cn: "我说：'除非奔赴的是你，否则我绝不轻易动心'" },
      { time: 42.5, en: "Lost in darkness, but I found her", cn: "曾经在无边黑暗中孤单摸索，但我终于找到了她" },
      { time: 48.0, en: "I found you", cn: "我终于遇见了你" }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RADIO_PLAYLIST };
}
