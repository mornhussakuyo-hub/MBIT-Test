// =========================
// QQTI 配置
// =========================

const TEST_TITLE = "QQTI 原生社交人格测试";
const HIDDEN_DIMENSION_LABEL = "维度：隐藏";

const QUESTIONS = [
  // G / L（群聊存在方式）10题
  {
    dimension: "GL",
    text: "一个不太熟的群突然聊到你很懂的话题，你会：",
    options: [
      { text: "直接下场开讲，顺便补充两句", type: "G" },
      { text: "看别人说，必要时补一句", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "你在大群里的常见状态更像：",
    options: [
      { text: "经常发言，大家对我有印象", type: "G" },
      { text: "长期潜水，想说时再说", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "群里突然开始抽象整活，你通常：",
    options: [
      { text: "立刻接梗，甚至加码", type: "G" },
      { text: "默默看完，最多心里笑一下", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "面对 99+ 群消息，你更接近：",
    options: [
      { text: "会翻一翻，看看发生了什么", type: "G" },
      { text: "直接无视，当没看见", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "别人说“你群里怎么不说话”，你的真实情况更像：",
    options: [
      { text: "我其实挺常说的", type: "G" },
      { text: "我确实更喜欢潜水", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "在群里看到有人说错了你熟悉的东西，你通常：",
    options: [
      { text: "会出来纠正或补充", type: "G" },
      { text: "看到了，但未必想出声", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "群里聊到一个你完全能接的话题时，你更可能：",
    options: [
      { text: "立刻加入，顺着聊下去", type: "G" },
      { text: "继续看，但不一定发", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "班群或社团群突然活跃起来时，你通常：",
    options: [
      { text: "会参与几句，至少刷一下存在感", type: "G" },
      { text: "看一眼热闹就好，不太会加入", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "群公告、群通知这种东西，你更像：",
    options: [
      { text: "基本会看，偶尔还会提醒别人", type: "G" },
      { text: "常常后知后觉，靠别人转告", type: "L" }
    ]
  },
  {
    dimension: "GL",
    text: "你对自己在群里的定位更接近：",
    options: [
      { text: "气氛参与者", type: "G" },
      { text: "安静观察者", type: "L" }
    ]
  },

  // T / E（表达介质偏好）10题
  {
    dimension: "TE",
    text: "熟人给你发来一大段吐槽，你更可能：",
    options: [
      { text: "认真打字接住", type: "T" },
      { text: "先丢个精准表情包", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "你和熟人聊天时更常见的是：",
    options: [
      { text: "连续发很多字", type: "T" },
      { text: "表情包和图片占很大比重", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "你收藏表情包的状态更像：",
    options: [
      { text: "不算多，我主要还是打字", type: "T" },
      { text: "表情包就是我的第二语言", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "解释误会时，你倾向于：",
    options: [
      { text: "把话说明白", type: "T" },
      { text: "越严肃越不想打很多字", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "哪种回复更像你：",
    options: [
      { text: "“我认真讲一下这个事”", type: "T" },
      { text: "“[图片]”", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "别人说“你这图哪来的”，你更可能：",
    options: [
      { text: "我其实主要还是文字派", type: "T" },
      { text: "我库存很多，而且分门别类", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "和朋友聊天时，你更喜欢：",
    options: [
      { text: "把意思完整表达出来", type: "T" },
      { text: "一张图解决一切", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "你在聊天里最常见的状态是：",
    options: [
      { text: "靠打字推动对话", type: "T" },
      { text: "靠表情包制造气氛", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "你觉得自己更像：",
    options: [
      { text: "文字表达型", type: "T" },
      { text: "图像表达型", type: "E" }
    ]
  },
  {
    dimension: "TE",
    text: "别人情绪很复杂时，你更容易：",
    options: [
      { text: "用一段话认真回应", type: "T" },
      { text: "先用表情包和气氛把场子接住", type: "E" }
    ]
  },

  // P / D（社交温度）10题
  {
    dimension: "PD",
    text: "你看到很久没联系但关系不错的人上线，你会：",
    options: [
      { text: "主动去打招呼", type: "P" },
      { text: "看到了也未必会开口", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "朋友情绪不对时，你通常：",
    options: [
      { text: "会主动私聊问怎么了", type: "P" },
      { text: "等对方愿意说再说", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "你对“秒回”的态度更像：",
    options: [
      { text: "看见且方便就会回", type: "P" },
      { text: "经常拖一拖或者忘回", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "你更像哪种人：",
    options: [
      { text: "会主动开启对话的人", type: "P" },
      { text: "对方找我我会回，但我很少先开口", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "聊得不错的人几天没找你，你更可能：",
    options: [
      { text: "主动再找一次", type: "P" },
      { text: "如果对方不来，我大概率也不会", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "你在 QQ 上维系关系更像：",
    options: [
      { text: "主动联系、主动分享", type: "P" },
      { text: "随缘，断不断都行", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "别人主动来找你聊天，你通常：",
    options: [
      { text: "会尽量把对话接住", type: "P" },
      { text: "能回，但不太会主动延长话题", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "你更接近哪种社交节奏：",
    options: [
      { text: "愿意维持人与人之间的热度", type: "P" },
      { text: "关系冷一点也没关系", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "你会不会突然想起某个人就去敲他：",
    options: [
      { text: "会，而且不算少", type: "P" },
      { text: "很少，通常想想就算了", type: "D" }
    ]
  },
  {
    dimension: "PD",
    text: "你在聊天关系里更像：",
    options: [
      { text: "维系者", type: "P" },
      { text: "回应者", type: "D" }
    ]
  },

  // O / C（网络气质）10题
  {
    dimension: "OC",
    text: "你的 QQ 头像、昵称、个签通常：",
    options: [
      { text: "经常换，能体现我最近状态", type: "O" },
      { text: "很久不动，像账号注册那天定住了", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "你发空间的状态更接近：",
    options: [
      { text: "想到什么发什么，偶尔经营一下", type: "O" },
      { text: "几乎不发，像空间不存在", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "如果别人点进你的资料卡，你希望对方看到的是：",
    options: [
      { text: "很鲜明、很有我自己的味道", type: "O" },
      { text: "最好普通一点，别看出太多", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "你对“把日常发出来”这件事：",
    options: [
      { text: "挺自然，分享欲不低", type: "O" },
      { text: "更愿意私下说，不想公开摆出来", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "你会不会在头像、个签、空间里埋小心思：",
    options: [
      { text: "会，懂的人会懂", type: "O" },
      { text: "不会，我懒得搞这些", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "哪句话最像你：",
    options: [
      { text: "我的号一看就挺有我味道", type: "O" },
      { text: "我的账号像一座互联网遗址", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "你更在意自己的线上外壳吗：",
    options: [
      { text: "会在意，至少得有点个人风格", type: "O" },
      { text: "不太在意，能用就行", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "别人看你的空间或资料页时，你更希望：",
    options: [
      { text: "能感受到这是我", type: "O" },
      { text: "别看出太多我的近况", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "你对“网络展示自己”的态度更像：",
    options: [
      { text: "适当展示挺正常", type: "O" },
      { text: "能少展示就少展示", type: "C" }
    ]
  },
  {
    dimension: "OC",
    text: "你觉得你的账号更像：",
    options: [
      { text: "一个有装饰、有痕迹的小房间", type: "O" },
      { text: "一个只保留最低功能的壳子", type: "C" }
    ]
  }
];

QUESTIONS.splice(0, QUESTIONS.length, ...[
  { dimension: "GL", type: "G", text: "在群里看到自己熟悉的话题时，我通常会主动接话。" },
  { dimension: "GL", type: "L", text: "除非被点名，不然我在大群里更习惯潜水。" },
  { dimension: "GL", type: "G", text: "群里气氛冷下来时，我会想办法把话题续上。" },
  { dimension: "GL", type: "L", text: "即使群消息很多，我也常常只看不回。" },
  { dimension: "GL", type: "G", text: "看到别人聊到我很懂的内容，我会忍不住补充几句。" },
  { dimension: "GL", type: "L", text: "我更喜欢先观察群里氛围，再决定要不要发言。" },
  { dimension: "GL", type: "G", text: "班群或社团群一热闹起来，我通常会参与进去。" },
  { dimension: "GL", type: "L", text: "大多数时候，我在群里的存在感并不高。" },
  { dimension: "GL", type: "G", text: "我会留意群通知或群公告，必要时还会提醒别人。" },
  { dimension: "GL", type: "L", text: "我在群里更像安静的围观者，而不是推动话题的人。" },
  { dimension: "GL", type: "G", text: "如果有人把我熟悉的事说错了，我一般会出来纠正。" },
  { dimension: "GL", type: "L", text: "就算群里聊到我感兴趣的话题，我也未必会加入。" },

  { dimension: "TE", type: "T", text: "遇到复杂的聊天情境时，我更习惯用文字讲清楚。" },
  { dimension: "TE", type: "E", text: "一张表情包或图片，常常比我打一大段字更有效。" },
  { dimension: "TE", type: "T", text: "和熟人聊天时，我经常会连续发好几句完整的话。" },
  { dimension: "TE", type: "E", text: "我收藏表情包这件事，本身就像一种表达方式。" },
  { dimension: "TE", type: "T", text: "解释误会时，我会尽量把来龙去脉说明白。" },
  { dimension: "TE", type: "E", text: "我在聊天里很依赖表情、截图、梗图这些非文字内容。" },
  { dimension: "TE", type: "T", text: "安慰别人时，我更倾向于认真组织语言回应。" },
  { dimension: "TE", type: "E", text: "很多时候，我发图的速度比打字还快。" },
  { dimension: "TE", type: "T", text: "如果要认真聊一件事，我会希望对方看见完整的文字表达。" },
  { dimension: "TE", type: "E", text: "我聊天时制造气氛，更多靠图和表情而不是长文字。" },
  { dimension: "TE", type: "T", text: "我觉得自己更擅长把意思说清楚，而不是只丢一个梗。" },
  { dimension: "TE", type: "E", text: "对我来说，图像化表达比长篇解释更自然。" },

  { dimension: "PD", type: "P", text: "想到某个朋友时，我会主动去找他聊两句。" },
  { dimension: "PD", type: "D", text: "就算关系不错的人上线了，我也不一定会先打招呼。" },
  { dimension: "PD", type: "P", text: "朋友状态不对时，我通常会主动私聊问问。" },
  { dimension: "PD", type: "D", text: "我经常看见消息后拖一会儿，甚至忘了回。" },
  { dimension: "PD", type: "P", text: "我愿意花心思维持关系里的热度和联系感。" },
  { dimension: "PD", type: "D", text: "如果别人不来找我，我也常常就顺其自然不联系。" },
  { dimension: "PD", type: "P", text: "别人主动来聊天时，我通常会尽量把对话接住。" },
  { dimension: "PD", type: "D", text: "我更像“回应型”社交，而不是“开启型”社交。" },
  { dimension: "PD", type: "P", text: "我会主动分享近况、链接或小事，让联系不断线。" },
  { dimension: "PD", type: "D", text: "我不太会突然想到一个人就去敲他。" },
  { dimension: "PD", type: "P", text: "我会在意别人聊天时有没有被冷到或落下。" },
  { dimension: "PD", type: "D", text: "对我来说，关系稍微冷一点也没什么所谓。" },

  { dimension: "OC", type: "O", text: "我的头像、昵称或签名会随着状态和兴趣变化。" },
  { dimension: "OC", type: "C", text: "我的账号资料很久不动也完全不影响我使用。" },
  { dimension: "OC", type: "O", text: "我希望别人点进我的资料时，能感觉到“这就是我”。" },
  { dimension: "OC", type: "C", text: "我更喜欢把表达留在私下，而不是公开展示在账号上。" },
  { dimension: "OC", type: "O", text: "我会在空间、动态或资料卡里留下自己的风格痕迹。" },
  { dimension: "OC", type: "C", text: "我的线上账号更像工具，而不是自我展示的一部分。" },
  { dimension: "OC", type: "O", text: "我愿意适度公开自己的喜好、审美或最近状态。" },
  { dimension: "OC", type: "C", text: "我不太在意别人看到我账号时会留下什么印象。" },
  { dimension: "OC", type: "O", text: "我会认真挑头像、背景或签名这种小细节。" },
  { dimension: "OC", type: "C", text: "如果能少展示自己，我通常会选择少展示。" },
  { dimension: "OC", type: "O", text: "我的账号页面对我来说像一个有布置感的小空间。" },
  { dimension: "OC", type: "C", text: "我的资料页面越简洁、越低存在感，我越舒服。" }
]);

const RESPONSE_OPTIONS = [
  { text: "简直就是我", weight: 2 },
  { text: "和我有点像", weight: 1 },
  { text: "不清楚", weight: 0 },
  { text: "和我不太像", weight: -1 },
  { text: "我绝对不这样", weight: -2 }
];

const OPPOSITE_TYPES = {
  G: "L",
  L: "G",
  T: "E",
  E: "T",
  P: "D",
  D: "P",
  O: "C",
  C: "O"
};

const RESULT_MAP = {
  GTPO: {
    nickname: "群聊烟花型",
    description: "你在 QQ 生态里存在感很强，能聊、能接梗、能把气氛点起来。你不是单纯话多，而是很懂什么时候该出现、怎样让聊天活起来。",
    groupStyle: "群里几乎常驻，看到有意思的话题很容易加入，属于能把冷场聊热的人。",
    chatStyle: "私聊不怎么拘谨，愿意主动开口，也很少让对话彻底掉地上。",
    impression: "朋友觉得你热闹、好接近、很有网感，跟你聊天不容易无聊。",
    quote: "“我来一句。”",
    profileStyle: "头像、昵称、个签通常都带点你自己的味道，资料卡不太可能完全死气沉沉。"
  },
  GTPC: {
    nickname: "文字话痨型",
    description: "你更像是靠文字存在的人。群里活跃、私下也主动，但你的核心武器不是表情包，而是能把话接住、把意思说清楚。",
    groupStyle: "群里会说话，而且说得成段，属于大家一看就知道你在线的类型。",
    chatStyle: "私聊里表达欲很稳定，愿意认真展开一个话题。",
    impression: "朋友觉得你很能聊，而且不是乱聊，是那种真能把话说明白的人。",
    quote: "“你听我说，这个事是这样的。”",
    profileStyle: "资料卡未必花哨，但会有一点属于你自己的风格，不是纯空白号。"
  },
  GTDO: {
    nickname: "热闹围观指挥官",
    description: "你喜欢出现在热闹里，但并不等于你对所有人都热情。你会在群里发光，却不一定愿意在私下维持高频连接。",
    groupStyle: "群里很容易刷到你，尤其在话题对胃口的时候，存在感相当强。",
    chatStyle: "私聊不一定主动，你更像是把能量放在公共场域的人。",
    impression: "别人会觉得你很会来事，但也有一点不容易真正贴近的距离感。",
    quote: "“这个我必须说一句。”",
    profileStyle: "外在形象通常不差，账号看得出有经营，但不会把私人信息摊得太满。"
  },
  GTDC: {
    nickname: "冷面群聊驻民",
    description: "你不是完全潜水，你只是有自己的上线条件。群里你会说话，但只在自己觉得值得开口的时候出现，平时并不主动贴近别人。",
    groupStyle: "会出现，但不乱出现；会发言，但一般都是自己觉得有必要的时候。",
    chatStyle: "私聊偏克制，对话更多是回应而不是主动发动。",
    impression: "别人觉得你不算难相处，但有自己的边界，不会轻易把热情铺开。",
    quote: "“我觉得可以这样。”",
    profileStyle: "资料卡比较稳，可能不怎么折腾，但也不至于像废弃账号。"
  },
  GEPO: {
    nickname: "表情包气氛核心",
    description: "你靠图、梗和即时反应维持存在感。你很懂互联网表达，也很懂怎么用最少的字打出最大的效果。",
    groupStyle: "一有梗图局你就容易上线，群聊效果往往是你靠几张图打出来的。",
    chatStyle: "私聊也很自然，会主动互动，很多情绪都是靠表情包表达。",
    impression: "朋友觉得你很有节目效果，聊天氛围总能被你提起来。",
    quote: "“[图片]”",
    profileStyle: "头像和空间往往也挺有味道，审美和梗感会体现在账号外壳上。"
  },
  GEPC: {
    nickname: "抽象包收藏家",
    description: "你属于很会互动的人，只不过你表达的主要介质不是长文，而是图、包、梗和各种互联网残片。你看起来轻松，其实很会维持存在感。",
    groupStyle: "群里一旦出现适合接图的时机，你往往能精准命中。",
    chatStyle: "私聊里不一定长篇大论，但会持续给回应，让对方知道你在。",
    impression: "朋友觉得你很会玩梗，也很有陪伴感，不算高压社交型。",
    quote: "“等等，我给你找张图。”",
    profileStyle: "账号整体不一定高调，但细看通常有你自己的趣味。"
  },
  GEDO: {
    nickname: "高冷整活王",
    description: "你会整活，也能制造效果，但你并不想把自己变成过度热络的人。你像是偶尔出手，一出手就很有杀伤力的互联网角色。",
    groupStyle: "群里会突然丢出很准的一句或一张图，把全场节奏带偏。",
    chatStyle: "私聊并不黏人，社交主动度有限，更像选择性连接。",
    impression: "别人会觉得你挺有意思，但也知道你不是谁都亲近。",
    quote: "“行，这个我有图。”",
    profileStyle: "资料卡通常有一点风格，但保留距离，不会把自己完全摊开。"
  },
  GEDC: {
    nickname: "幽灵梗图投放器",
    description: "你平时像失踪人口，偶尔出现时却总能精准投下一张图或一句梗，然后再度消失。你不是没存在感，而是存在感非常集中。",
    groupStyle: "大部分时间潜水，但一出手往往就能被记住。",
    chatStyle: "私聊偏随缘，不算主动，也不太会连续高频输出。",
    impression: "朋友觉得你神出鬼没，但又确实很有个人风格。",
    quote: "“6。”",
    profileStyle: "账号可能略显荒凉，但会在某些地方残留很强的个人痕迹。"
  },
  LTPO: {
    nickname: "私聊小太阳",
    description: "你不一定爱在大群里刷存在，但在熟人私聊里很真诚、很稳定，也愿意主动靠近别人。你更像把温度放在一对一连接里的人。",
    groupStyle: "群里不是绝对活跃型，更倾向于看情况发言。",
    chatStyle: "私聊很认真，也愿意主动发起对话，是那种容易聊出熟感的人。",
    impression: "朋友会觉得你表面没那么闹，但相处下来很暖、很好接近。",
    quote: "“在吗，我突然想到你。”",
    profileStyle: "资料卡会有一定风格，整体给人比较舒服、比较活的感觉。"
  },
  LTPC: {
    nickname: "温和长消息型",
    description: "你更适合深一点、稳一点的连接。你不依赖热闹，也不靠大量图片取胜，而是靠认真、平和、持续的文字交流建立存在感。",
    groupStyle: "群里存在感不算特别高，更多是安静观察，偶尔说几句有内容的话。",
    chatStyle: "私聊时很能聊，而且会认真组织语言，属于适合深聊的类型。",
    impression: "朋友觉得你慢热但真诚，一旦熟起来会发现你很有内容。",
    quote: "“我慢慢跟你说。”",
    profileStyle: "资料卡未必很高调，但会有一点温和、清晰、耐看的个人痕迹。"
  },
  LTDO: {
    nickname: "礼貌已读型",
    description: "你既不爱群里高调出现，也不太会主动扩展社交，但你并不是完全断联的人。你更像在维持一种有边界的、尽量体面的在线状态。",
    groupStyle: "群里更多是旁观者，必要时会说话，但不抢存在感。",
    chatStyle: "私聊里会回，也基本讲理，但主动程度不高。",
    impression: "别人会觉得你不难接触，只是偏冷静、偏克制。",
    quote: "“看到了。”",
    profileStyle: "账号风格偏稳，不怎么折腾，也不太会高频公开展示近况。"
  },
  LTDC: {
    nickname: "深海信件型",
    description: "你像那种不常浮出水面的人。平时安静、克制、不爱展示，但真正说话时通常是有内容、有分量的。",
    groupStyle: "群里潜水偏多，开口频率低，但说的话往往不空。",
    chatStyle: "私聊回复节奏不一定快，不过认真聊起来会很真诚。",
    impression: "朋友觉得你不吵不闹，有距离感，但并不空洞。",
    quote: "“我想了一下。”",
    profileStyle: "资料卡低存在感，像是故意把自己收得很干净。"
  },
  LEPO: {
    nickname: "表情软糖型",
    description: "你不一定是最会说的，但你很会给情绪反馈。你靠轻盈的互动、表情、图片和恰到好处的回应维持人与人之间的温度。",
    groupStyle: "群里不一定高强度发言，但会用轻巧的方式参与进来。",
    chatStyle: "私聊里挺主动，也愿意陪伴，只是表达更偏图像和情绪。",
    impression: "别人会觉得你可爱、轻松、不压迫，跟你聊天没什么负担。",
    quote: "“哈哈哈哈这个好。”",
    profileStyle: "头像、空间、个签可能都有点柔软的趣味，不一定夸张，但挺有感觉。"
  },
  LEPC: {
    nickname: "贴图陪伴型",
    description: "你是那种不需要很多字，也能让人知道你在的人。你擅长用轻量方式维持连接，不高调，但不冷漠。",
    groupStyle: "群里更像轻量参与者，不会抢中心位，但也不是真的完全消失。",
    chatStyle: "私聊会回应，也会发图、发表情，属于陪伴感强于输出欲的人。",
    impression: "朋友觉得你温和、不折腾，虽然不吵，但并不难亲近。",
    quote: "“给你一个表情。”",
    profileStyle: "资料卡整体偏收敛，但会有一些细小的个人趣味藏在里面。"
  },
  LEDO: {
    nickname: "冷淡猫猫型",
    description: "你更像一种有礼貌但不热络的存在。你不是完全不理人，只是社交阈值高，表达也尽量简短，很多时候靠最低限度回应维持联络。",
    groupStyle: "群里偏潜水，偶尔出现时更像扔下一句简短态度。",
    chatStyle: "私聊不太主动，回复也常常偏短，但并不一定是讨厌对方。",
    impression: "别人会觉得你有点冷，但也知道你不是恶意，只是懒得展开。",
    quote: "“嗯。”",
    profileStyle: "账号给人的感觉偏干净、偏克制，不太爱展示自己。"
  },
  LEDC: {
    nickname: "离线幽灵型",
    description: "你像一个长期挂在列表里、但很少真正上线的人。你不爱展示、不爱主动、不爱高频回应，存在感低，但反而带出一种很强的神秘感。",
    groupStyle: "群里几乎像没有你这个人，除非特别必要，否则基本不出声。",
    chatStyle: "私聊回复慢且少字，很多时候像系统通知而不是聊天。",
    impression: "朋友觉得你神秘、难约、难猜你在想什么，但又有点独特吸引力。",
    quote: "“。”",
    profileStyle: "你的账号可能像一座半废弃遗址，头像签名都像多年未动。"
  }
};

// =========================
// 页面逻辑
// =========================

document.title = TEST_TITLE;

const pageTitle = document.getElementById("pageTitle");
const heroSection = document.getElementById("heroSection");
const quizSection = document.getElementById("quizSection");
const resultSection = document.getElementById("resultSection");
const startBtn = document.getElementById("startBtn");
const restartBtnTop = document.getElementById("restartBtnTop");
const restartBtnBottom = document.getElementById("restartBtnBottom");
const copyBtn = document.getElementById("copyBtn");

const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const dimensionTag = document.getElementById("dimensionTag");
const questionText = document.getElementById("questionText");
const optionsBox = document.getElementById("optionsBox");

const resultType = document.getElementById("resultType");
const resultNickname = document.getElementById("resultNickname");
const resultDescription = document.getElementById("resultDescription");
const resultQuote = document.getElementById("resultQuote");
const resultGroupStyle = document.getElementById("resultGroupStyle");
const resultChatStyle = document.getElementById("resultChatStyle");
const resultImpression = document.getElementById("resultImpression");
const resultProfileStyle = document.getElementById("resultProfileStyle");
const dimensionScores = document.getElementById("dimensionScores");
const resultImage = document.getElementById("resultImage");
const resultImagePlaceholder = document.getElementById("resultImagePlaceholder");

if (pageTitle) {
  pageTitle.textContent = TEST_TITLE;
}

let currentQuestionIndex = 0;
let scores = {
  G: 0,
  L: 0,
  T: 0,
  E: 0,
  P: 0,
  D: 0,
  O: 0,
  C: 0
};

function resetScores() {
  scores = {
    G: 0,
    L: 0,
    T: 0,
    E: 0,
    P: 0,
    D: 0,
    O: 0,
    C: 0
  };
}

function startQuiz() {
  currentQuestionIndex = 0;
  resetScores();

  heroSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  renderQuestion();
}

function applyAnswer(type, weight) {
  if (weight > 0) {
    scores[type] += weight;
    return;
  }

  if (weight < 0) {
    scores[OPPOSITE_TYPES[type]] += Math.abs(weight);
  }
}

function renderQuestion() {
  const current = QUESTIONS[currentQuestionIndex];
  const total = QUESTIONS.length;
  const progress = (currentQuestionIndex / total) * 100;

  questionCounter.textContent = `第 ${currentQuestionIndex + 1} / ${total} 题`;
  progressFill.style.width = `${progress}%`;
  dimensionTag.textContent = HIDDEN_DIMENSION_LABEL;
  questionText.textContent = current.text;

  optionsBox.innerHTML = "";

  RESPONSE_OPTIONS.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option.text;

    btn.addEventListener("click", () => {
      applyAnswer(current.type, option.weight);
      currentQuestionIndex += 1;

      if (currentQuestionIndex < QUESTIONS.length) {
        renderQuestion();
      } else {
        showResult();
      }
    });

    optionsBox.appendChild(btn);
  });
}

function getFinalType() {
  const gl = scores.G >= scores.L ? "G" : "L";
  const te = scores.T >= scores.E ? "T" : "E";
  const pd = scores.P >= scores.D ? "P" : "D";
  const oc = scores.O >= scores.C ? "O" : "C";
  return `${gl}${te}${pd}${oc}`;
}

function percentage(a, b) {
  const total = a + b;
  if (total === 0) return "50%";
  return `${Math.round((a / total) * 100)}%`;
}

function getResultImagePath(type) {
  return `assets/images/types/${type.toLowerCase()}.png`;
}

function applyResultImage(type) {
  const imagePath = getResultImagePath(type);

  resultImage.style.display = "none";
  resultImagePlaceholder.style.display = "grid";
  resultImage.src = imagePath;

  resultImage.onload = () => {
    resultImage.style.display = "block";
    resultImagePlaceholder.style.display = "none";
  };

  resultImage.onerror = () => {
    resultImage.style.display = "none";
    resultImagePlaceholder.style.display = "grid";
  };
}

function showResult() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  progressFill.style.width = "100%";

  const type = getFinalType();
  const result = RESULT_MAP[type] || {
    nickname: "未定义人格",
    description: "这个人格的文案还没写好，你可以继续在 RESULT_MAP 里补充。",
    groupStyle: "暂无",
    chatStyle: "暂无",
    impression: "暂无",
    quote: "“...”",
    profileStyle: "暂无"
  };

  resultType.textContent = type;
  resultNickname.textContent = result.nickname;
  resultDescription.textContent = result.description;
  resultQuote.textContent = result.quote;
  resultGroupStyle.textContent = result.groupStyle;
  resultChatStyle.textContent = result.chatStyle;
  resultImpression.textContent = result.impression;
  resultProfileStyle.textContent = result.profileStyle;

  dimensionScores.innerHTML = `
    <div class="score-item">
      <strong>G / L · 群聊存在方式</strong>
      G：${scores.G} 分（${percentage(scores.G, scores.L)}）｜L：${scores.L} 分（${percentage(scores.L, scores.G)}）
    </div>
    <div class="score-item">
      <strong>T / E · 表达介质偏好</strong>
      T：${scores.T} 分（${percentage(scores.T, scores.E)}）｜E：${scores.E} 分（${percentage(scores.E, scores.T)}）
    </div>
    <div class="score-item">
      <strong>P / D · 社交温度</strong>
      P：${scores.P} 分（${percentage(scores.P, scores.D)}）｜D：${scores.D} 分（${percentage(scores.D, scores.P)}）
    </div>
    <div class="score-item">
      <strong>O / C · 网络气质</strong>
      O：${scores.O} 分（${percentage(scores.O, scores.C)}）｜C：${scores.C} 分（${percentage(scores.C, scores.O)}）
    </div>
  `;

  applyResultImage(type);
}

function copyResult() {
  const type = resultType.textContent;
  const nickname = resultNickname.textContent;
  const desc = resultDescription.textContent;
  const groupStyle = resultGroupStyle.textContent;
  const impression = resultImpression.textContent;

  const text = `我的 QQTI 结果：${type}（${nickname}）
${desc}
群聊状态：${groupStyle}
朋友眼中的我：${impression}`;

  navigator.clipboard.writeText(text)
    .then(() => {
      copyBtn.textContent = "已复制";
      setTimeout(() => {
        copyBtn.textContent = "复制结果";
      }, 1400);
    })
    .catch(() => {
      alert("复制失败，请手动复制结果文字。");
    });
}

function backToHome() {
  quizSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  heroSection.classList.remove("hidden");
  progressFill.style.width = "0%";
}

startBtn.addEventListener("click", startQuiz);
restartBtnTop.addEventListener("click", backToHome);
restartBtnBottom.addEventListener("click", startQuiz);
copyBtn.addEventListener("click", copyResult);
