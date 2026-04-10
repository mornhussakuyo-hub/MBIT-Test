// =========================
// 你最常改的地方：从这里开始
// =========================

const TEST_TITLE = "MBTI 性格测评";

const QUESTIONS = [
  // EI（32题）
  {
    dimension: "EI",
    text: "周末到了，你更倾向于怎样恢复精力？",
    options: [
      { text: "和朋友聚会、聊天、出去玩", type: "E" },
      { text: "一个人安静待着，看书、刷剧或发呆", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "来到一个陌生但热闹的聚会场合，你通常会？",
    options: [
      { text: "主动认识新朋友，很快融入气氛", type: "E" },
      { text: "先观察环境，等熟悉后再慢慢交流", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "当你有一个很兴奋的想法时，你更可能？",
    options: [
      { text: "立刻找人分享，一边说一边整理思路", type: "E" },
      { text: "自己先想清楚，再决定要不要说出来", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "上课或开会时，你通常更像？",
    options: [
      { text: "愿意随时发言、提问、参与讨论的人", type: "E" },
      { text: "更喜欢先听、先想，再谨慎表达的人", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "如果连续几天都没有社交活动，你会觉得？",
    options: [
      { text: "有点闷，想找人聊聊或出去走走", type: "E" },
      { text: "挺舒服的，终于有属于自己的空间", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "和人相处时，你更常见的状态是？",
    options: [
      { text: "边说边想，交流本身会激发灵感", type: "E" },
      { text: "先想后说，表达前最好心里有谱", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "在团队合作中，你更容易承担哪种角色？",
    options: [
      { text: "联络、推动、让大家都参与进来", type: "E" },
      { text: "独立思考、沉稳执行、默默完成关键部分", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你更喜欢哪种旅行方式？",
    options: [
      { text: "和一群人一起，边走边玩边认识人", type: "E" },
      { text: "自己或和少数熟人，节奏安静自由", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "当别人突然来找你聊天时，你通常会？",
    options: [
      { text: "大多愿意接住话题，聊着聊着就热起来", type: "E" },
      { text: "看心情和状态，不一定想立刻进入交流", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你更习惯通过什么方式整理情绪？",
    options: [
      { text: "跟人倾诉、讨论、把感受说出来", type: "E" },
      { text: "自己消化，写下来或静静想一会儿", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "在班级或社团活动中，你通常会？",
    options: [
      { text: "愿意出现在前面，带动气氛", type: "E" },
      { text: "更喜欢在后面支持，不太想被关注", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "如果要认识新同学，你更偏向？",
    options: [
      { text: "主动开口，哪怕只是随便聊两句", type: "E" },
      { text: "等有自然契机时再接触", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你更容易在哪种环境里感到舒服？",
    options: [
      { text: "有互动、有声音、有人来人往的环境", type: "E" },
      { text: "安静、不被打扰、能专注自己的环境", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "面对新的环境，你通常会怎么适应？",
    options: [
      { text: "先和人打成一片，熟悉关系网", type: "E" },
      { text: "先熟悉规则和空间，再逐步建立联系", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你和朋友见面后，常见感受是？",
    options: [
      { text: "聊完会更有精神", type: "E" },
      { text: "聊久了会想一个人静静", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "在多人讨论里，你一般会？",
    options: [
      { text: "自然加入对话，想到什么说什么", type: "E" },
      { text: "更多是听，确认有价值再开口", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "别人说你更像？",
    options: [
      { text: "外向、热络、容易接近", type: "E" },
      { text: "安静、内敛、慢热", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "当你感到无聊时，你更可能？",
    options: [
      { text: "找人聊天、约饭、去外面转转", type: "E" },
      { text: "自己找点事做，比如看视频或研究兴趣", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "在表达观点时，你通常？",
    options: [
      { text: "先说出来，再根据反馈调整", type: "E" },
      { text: "先在脑子里推演完整，再表达", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "如果一整天都在和很多人互动，晚上你会？",
    options: [
      { text: "觉得充实热闹，状态还不错", type: "E" },
      { text: "需要独处一会儿，重新充电", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你更喜欢哪类合作方式？",
    options: [
      { text: "大家边讨论边推进", type: "E" },
      { text: "先各自思考，再集中交流", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你在朋友群里的状态通常是？",
    options: [
      { text: "经常发言、接梗、活跃气氛", type: "E" },
      { text: "更多潜水，想说的时候再说", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "面对临时的社交邀请，你更常？",
    options: [
      { text: "觉得挺有意思，愿意去看看", type: "E" },
      { text: "更想按原计划待着，不太想被打乱", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你更容易从哪里获得能量？",
    options: [
      { text: "外部世界的人和活动", type: "E" },
      { text: "自己的内心世界和个人空间", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "在课堂分组时，你通常会？",
    options: [
      { text: "主动和大家打招呼，迅速开工", type: "E" },
      { text: "先听别人安排，再进入状态", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "当别人误解你时，你更倾向于？",
    options: [
      { text: "当场解释清楚，避免拖着", type: "E" },
      { text: "先整理想法，等合适时机再说明", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你对“热闹”的感觉更接近？",
    options: [
      { text: "热闹会让我兴奋", type: "E" },
      { text: "热闹久了会让我疲惫", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "当你准备做一件新事时，你更可能？",
    options: [
      { text: "先找人一起做，更有动力", type: "E" },
      { text: "自己先试试看，熟了再说", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "在陌生人面前，你通常？",
    options: [
      { text: "不太怕开口，聊几句问题不大", type: "E" },
      { text: "会先有点拘谨，熟了才自然", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你更喜欢哪种工作状态？",
    options: [
      { text: "环境里有人，偶尔还能交流一下", type: "E" },
      { text: "尽量独立安静，不被频繁打断", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "你的朋友通常觉得你？",
    options: [
      { text: "比较主动、能带动别人", type: "E" },
      { text: "比较沉稳、会自己思考很多", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "如果必须在“很多浅社交”和“少数深交流”中选一个，你更偏向？",
    options: [
      { text: "很多浅社交，认识更多人", type: "E" },
      { text: "少数深交流，关系更深入", type: "I" }
    ]
  },

  // SN（32题）
  {
    dimension: "SN",
    text: "你更容易被哪类内容吸引？",
    options: [
      { text: "具体、真实、可直接感知的信息", type: "S" },
      { text: "概念、隐喻、背后的可能性", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "学习一个新知识时，你更偏向？",
    options: [
      { text: "先搞清楚定义、步骤、实际用法", type: "S" },
      { text: "先理解整体框架和它意味着什么", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "看一幅画时，你更先注意到？",
    options: [
      { text: "颜色、构图、人物和具体细节", type: "S" },
      { text: "它想表达的氛围和象征意义", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "别人讲故事时，你更在意？",
    options: [
      { text: "事情到底是怎么发生的", type: "S" },
      { text: "这件事背后暗示了什么", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "面对一个问题，你通常先想？",
    options: [
      { text: "眼前已知的事实和经验", type: "S" },
      { text: "可能的模式和未来的发展", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更喜欢哪种老师？",
    options: [
      { text: "讲得清楚具体，例子很多", type: "S" },
      { text: "能把知识讲出更大的图景和联系", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "当别人说“有点怪”，你更倾向于？",
    options: [
      { text: "追问具体哪里怪", type: "S" },
      { text: "迅速联想到更深层的原因", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "做题或解决任务时，你更信任？",
    options: [
      { text: "已经验证过、稳妥有效的方法", type: "S" },
      { text: "新的思路和未必常规的可能性", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更像哪种人？",
    options: [
      { text: "记得住细节和实际情况", type: "S" },
      { text: "容易想到灵感和抽象联系", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "在讨论未来时，你更关注？",
    options: [
      { text: "现实条件是否支持、步骤是否可行", type: "S" },
      { text: "这个方向的潜力和想象空间", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更喜欢哪类书或影视作品？",
    options: [
      { text: "生活感强、细节真实、容易代入", type: "S" },
      { text: "设定新奇、寓意丰富、引人联想", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "别人交代任务时，你更希望听到？",
    options: [
      { text: "明确的要求、步骤和标准", type: "S" },
      { text: "目标、思路以及为什么要这么做", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "当你回忆一段经历时，你更容易记住？",
    options: [
      { text: "当时看到了什么、做了什么", type: "S" },
      { text: "那段经历带来的感受和启发", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更容易信服哪种说法？",
    options: [
      { text: "有具体数据、案例和事实支撑", type: "S" },
      { text: "能解释本质、逻辑和整体趋势", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "如果去一个新城市，你更感兴趣？",
    options: [
      { text: "当地的街道、美食、建筑和实际体验", type: "S" },
      { text: "这座城市独特的气质和文化意象", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "在做计划时，你通常更依赖？",
    options: [
      { text: "已有信息和可见资源", type: "S" },
      { text: "直觉判断和对趋势的预感", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "面对新点子时，你第一反应更常是？",
    options: [
      { text: "它具体怎么落地？", type: "S" },
      { text: "它还能延伸出什么？", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更擅长哪一种？",
    options: [
      { text: "把细节做好，让事情稳定运行", type: "S" },
      { text: "提出新方向，让事情有突破", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "听别人讲话时，你更常抓住？",
    options: [
      { text: "具体内容和原话", type: "S" },
      { text: "言外之意和核心模式", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "当别人描述一个人时，你更想知道？",
    options: [
      { text: "他平时具体什么样", type: "S" },
      { text: "他是什么类型的人", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更偏爱哪类任务？",
    options: [
      { text: "边界清楚、操作明确的任务", type: "S" },
      { text: "开放性强、可以自由发挥的任务", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "在解决问题时，你更可能？",
    options: [
      { text: "一步一步确认现实情况", type: "S" },
      { text: "先跳到更高层次看整体结构", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你觉得自己更像？",
    options: [
      { text: "务实、踏实、重经验", type: "S" },
      { text: "有想象力、跳跃、重启发", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "读一篇文章时，你更容易注意到？",
    options: [
      { text: "作者列举了哪些事实和例子", type: "S" },
      { text: "作者真正想表达的深层观点", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "别人说“以后也许会这样”，你通常会？",
    options: [
      { text: "先看现在有没有依据", type: "S" },
      { text: "开始想象这个变化会带来什么", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更喜欢哪种创作？",
    options: [
      { text: "贴近现实、细节充足的创作", type: "S" },
      { text: "脑洞大开、富有象征感的创作", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "面对复杂信息时，你倾向于？",
    options: [
      { text: "先拆成一个个具体部分", type: "S" },
      { text: "先找它们之间的隐藏联系", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "如果老师留了一个开放题，你更可能？",
    options: [
      { text: "从已有资料和实例入手", type: "S" },
      { text: "从独特观点和新角度切入", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更容易被什么打动？",
    options: [
      { text: "眼前真实发生的细节", type: "S" },
      { text: "一个更大的意义或愿景", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更习惯怎样理解世界？",
    options: [
      { text: "通过经验、观察和具体事实", type: "S" },
      { text: "通过联想、抽象和模式识别", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更欣赏哪种表达方式？",
    options: [
      { text: "清楚直接、信息明确", type: "S" },
      { text: "有层次、有隐喻、有想象空间", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "当你想到未来时，你更先看到？",
    options: [
      { text: "现实中的资源、限制和路径", type: "S" },
      { text: "尚未成形但值得追逐的可能性", type: "N" }
    ]
  },

  // TF（32题）
  {
    dimension: "TF",
    text: "做决定时，你更看重？",
    options: [
      { text: "是否合理、公平、讲得通", type: "T" },
      { text: "是否照顾到人的感受与关系", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "朋友来向你倾诉烦恼时，你更倾向于？",
    options: [
      { text: "帮他分析问题、提出解决方案", type: "T" },
      { text: "先安慰和理解他的情绪", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你认为一个好规则最重要的是？",
    options: [
      { text: "逻辑一致，对所有人都适用", type: "T" },
      { text: "有人情味，考虑具体处境", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "评价一件事时，你更自然会？",
    options: [
      { text: "判断它对不对、有效不有效", type: "T" },
      { text: "判断它是否合情、会不会伤人", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "如果你要指出别人问题，你更可能？",
    options: [
      { text: "直接说重点，避免绕圈", type: "T" },
      { text: "尽量委婉，顾及对方接受感受", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更容易被哪种人认可？",
    options: [
      { text: "理性、客观、判断清晰的人", type: "T" },
      { text: "温和、体贴、善解人意的人", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "团队里发生分歧时，你更优先？",
    options: [
      { text: "把问题本身理清楚", type: "T" },
      { text: "先避免关系恶化", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更赞同哪句话？",
    options: [
      { text: "对事不对人最重要", type: "T" },
      { text: "再对的事也要考虑怎么说", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "面对一个请求时，你更先想？",
    options: [
      { text: "这件事合理吗、应该吗", type: "T" },
      { text: "拒绝会不会让对方难受", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "如果要选一个领导，你更偏好？",
    options: [
      { text: "标准明确、判断果断、重效率", type: "T" },
      { text: "会照顾团队情绪、让人有归属感", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "当别人做事出错时，你第一反应更常是？",
    options: [
      { text: "分析错在哪、怎样避免再犯", type: "T" },
      { text: "担心他会不会因此自责或难堪", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更难接受哪种情况？",
    options: [
      { text: "逻辑混乱、标准双标", type: "T" },
      { text: "冷漠无情、伤害别人", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "做评价时，你通常更依赖？",
    options: [
      { text: "原则和事实", type: "T" },
      { text: "价值观和共情", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更擅长哪一种？",
    options: [
      { text: "拆解问题、找出关键矛盾", type: "T" },
      { text: "理解人心、调和关系", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "别人通常觉得你更像？",
    options: [
      { text: "理智冷静，讲道理", type: "T" },
      { text: "温柔体贴，懂人情", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "在讨论中，你更在意自己是否？",
    options: [
      { text: "论证充分、推理严密", type: "T" },
      { text: "没有伤害到别人、表达得合适", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "面对“规则”和“例外”，你更偏向？",
    options: [
      { text: "规则应尽量稳定一致", type: "T" },
      { text: "特殊情况可以灵活处理", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "如果一个方案效率很高但会让少数人不舒服，你更倾向？",
    options: [
      { text: "如果整体最优，仍可接受", type: "T" },
      { text: "应优先想办法降低对人的伤害", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更容易被哪类话打动？",
    options: [
      { text: "分析透彻、逻辑强的观点", type: "T" },
      { text: "真诚温暖、能共鸣的话", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "与人争论时，你更关注？",
    options: [
      { text: "谁的观点更站得住脚", type: "T" },
      { text: "争论会不会破坏关系", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更欣赏哪种反馈方式？",
    options: [
      { text: "直接指出问题，便于改进", type: "T" },
      { text: "先肯定再建议，比较照顾感受", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "当你做选择时，哪种后悔更让你难受？",
    options: [
      { text: "选择不够理性，导致结果变差", type: "T" },
      { text: "选择伤害了别人，留下情感遗憾", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更认可哪种“正确”？",
    options: [
      { text: "符合逻辑和原则的正确", type: "T" },
      { text: "兼顾善意与人性的正确", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "面对冲突时，你更可能？",
    options: [
      { text: "抽离情绪，就事论事", type: "T" },
      { text: "体会各方感受，试着缓和", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你觉得评价一个人更该看？",
    options: [
      { text: "能力、原则、判断力", type: "T" },
      { text: "品格、善意、是否会体谅他人", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "如果朋友做了你不认同的事，你更常？",
    options: [
      { text: "直接指出问题所在", type: "T" },
      { text: "先理解他为什么会这么做", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更像哪种安慰方式？",
    options: [
      { text: "“我们来看看问题怎么解决。”", type: "T" },
      { text: "“没关系，我理解你现在很难受。”", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "在合作中，你更看重？",
    options: [
      { text: "分工合理、效率高、标准清晰", type: "T" },
      { text: "气氛和谐、彼此舒服、互相支持", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更容易被批评成？",
    options: [
      { text: "太理性、太直接", type: "T" },
      { text: "太心软、太顾及情面", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你觉得“成熟”更像是？",
    options: [
      { text: "能客观判断，不被情绪带跑", type: "T" },
      { text: "能理解别人，也能善待关系", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "面对公平问题时，你更重视？",
    options: [
      { text: "标准统一，不因人而异", type: "T" },
      { text: "考虑每个人的处境是否真正被看见", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "如果必须二选一，你更希望自己是？",
    options: [
      { text: "判断准确的人", type: "T" },
      { text: "让人安心的人", type: "F" }
    ]
  },

  // JP（32题）
  {
    dimension: "JP",
    text: "你更喜欢哪种生活状态？",
    options: [
      { text: "提前安排好，心里有数", type: "J" },
      { text: "保留弹性，想到哪做到哪", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "面对一项任务，你更倾向于？",
    options: [
      { text: "尽早开始，按计划推进", type: "J" },
      { text: "临近截止时集中冲刺", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "房间或桌面通常更接近？",
    options: [
      { text: "有一定秩序，东西大致各归其位", type: "J" },
      { text: "看起来随意，但自己知道东西在哪", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "出去玩时，你更希望？",
    options: [
      { text: "行程大致定好，心里踏实", type: "J" },
      { text: "边走边看，随时改主意", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你对“待办事项清单”的态度通常是？",
    options: [
      { text: "很有必要，能让我安心", type: "J" },
      { text: "偶尔有用，但不想被它束缚", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "如果计划临时被打乱，你更常感到？",
    options: [
      { text: "不舒服，想尽快重新安排", type: "J" },
      { text: "还好，正好随机应变", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "面对未来安排，你更喜欢？",
    options: [
      { text: "尽早决定，减少不确定感", type: "J" },
      { text: "先不定死，留着以后再说", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你做事时更倾向于？",
    options: [
      { text: "按步骤完成，一项项收尾", type: "J" },
      { text: "多线并行，看状态切换", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更享受哪种感觉？",
    options: [
      { text: "事情被安排妥当、逐步完成", type: "J" },
      { text: "充满变化，随时有新可能", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "对截止日期，你通常？",
    options: [
      { text: "把它当明确节点，提前准备", type: "J" },
      { text: "把它当最后边界，靠近时再发力", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更像哪类人？",
    options: [
      { text: "喜欢收束、定下来、做决定", type: "J" },
      { text: "喜欢开放、探索、保留选择", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "买东西时，你更可能？",
    options: [
      { text: "提前比较后快速决定", type: "J" },
      { text: "边看边挑，可能最后一刻才定", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "当手上有很多事时，你会？",
    options: [
      { text: "先排优先级，逐个解决", type: "J" },
      { text: "凭当下感觉，先做最想做的", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你通常怎样开始一天？",
    options: [
      { text: "大致知道今天要做什么", type: "J" },
      { text: "看情况决定，顺其自然", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "如果别人问你“什么时候有空”，你更习惯？",
    options: [
      { text: "看安排后给出明确时间", type: "J" },
      { text: "先别定太死，到时候再说", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "写作业或做项目时，你更偏向？",
    options: [
      { text: "先搭结构和时间表", type: "J" },
      { text: "先随手开始，边做边成型", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更喜欢哪种工作节奏？",
    options: [
      { text: "稳定、有序、可预期", type: "J" },
      { text: "灵活、多变、有新鲜感", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "面对选择时，你通常？",
    options: [
      { text: "希望尽快定下来，避免拖着", type: "J" },
      { text: "倾向再看看，说不定有更好的", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你的日常更接近？",
    options: [
      { text: "有自己的规律和节奏", type: "J" },
      { text: "经常根据兴趣临时变化", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更难忍受哪种情况？",
    options: [
      { text: "事情悬而未决、没有结论", type: "J" },
      { text: "安排过死、没有自由空间", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "旅行收拾行李时，你通常？",
    options: [
      { text: "提前列清单，基本不会遗漏", type: "J" },
      { text: "差不多就行，缺了再想办法", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更欣赏哪种做事方式？",
    options: [
      { text: "有条理、讲规划、执行稳定", type: "J" },
      { text: "机动灵活、随机应变、创意十足", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "临时出现一个有趣机会时，你更可能？",
    options: [
      { text: "先看会不会打乱原计划", type: "J" },
      { text: "觉得有趣就先试试再说", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "处理邮件、消息或通知时，你更倾向于？",
    options: [
      { text: "尽快清掉，保持整洁", type: "J" },
      { text: "有空再处理，不急于全部归零", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你做完一件事后，更希望？",
    options: [
      { text: "立刻收尾归档，彻底结束", type: "J" },
      { text: "先放着，之后说不定还会改", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你面对任务更常见的状态是？",
    options: [
      { text: "先完成再轻松", type: "J" },
      { text: "先感受自由，再靠灵感推进", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "在学习上，你更喜欢？",
    options: [
      { text: "固定进度，按部就班地推进", type: "J" },
      { text: "根据兴趣和状态灵活安排", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你对“惊喜安排”的反应通常是？",
    options: [
      { text: "如果没提前说，多少会有点不适", type: "J" },
      { text: "挺有意思，意外也可能很好玩", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更喜欢怎样做决定？",
    options: [
      { text: "收集足够信息后尽快拍板", type: "J" },
      { text: "持续观察，等最后再决定", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你更常把自己形容为？",
    options: [
      { text: "规划型，喜欢心里有谱", type: "J" },
      { text: "探索型，喜欢保持弹性", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "当别人催你确定安排时，你更可能？",
    options: [
      { text: "愿意尽快给出确定答复", type: "J" },
      { text: "希望再等等，保留余地", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "如果只能选一种生活方式，你更偏向？",
    options: [
      { text: "有结构、有掌控感的生活", type: "J" },
      { text: "有变化、有自由度的生活", type: "P" }
    ]
  }
];



const RESULT_MAP = {
  INTJ: { nickname: "建筑师型", description: "你通常独立、理性、擅长从长远视角思考问题。你喜欢建立自己的方法体系，也很重视效率与逻辑。" },
  INTP: { nickname: "逻辑学家型", description: "你喜欢思考本质，乐于分析复杂问题。你通常好奇心很强，喜欢自由探索，而不是被固定框架束缚。" },
  ENTJ: { nickname: "指挥官型", description: "你通常果断、有组织能力，喜欢推进事情发生。你擅长从目标出发统筹资源，也有较强的领导倾向。" },
  ENTP: { nickname: "辩论家型", description: "你通常反应快、点子多，喜欢挑战旧观点。你享受脑力碰撞，也经常能看到别人没注意到的新可能。" },
  INFJ: { nickname: "提倡者型", description: "你通常安静但有洞察力，既关注意义，也关注他人感受。你往往有较强的理想感与内在原则。" },
  INFP: { nickname: "调停者型", description: "你通常真诚、敏感、重视价值观。你往往有自己的内心世界，也很在意生活是否和内在认同一致。" },
  ENFJ: { nickname: "主人公型", description: "你通常热情、善于理解他人，也愿意带动群体。你常常希望让周围的人变得更好。" },
  ENFP: { nickname: "竞选者型", description: "你通常活力强、富有想象力，容易被新鲜事物吸引。你很看重表达、自我延展和人与人之间的连接。" },
  ISTJ: { nickname: "物流师型", description: "你通常稳重、务实、可靠，重视秩序和责任。你做事常常很踏实，也比较值得信赖。" },
  ISFJ: { nickname: "守卫者型", description: "你通常细致、体贴、愿意默默支持他人。你很重视稳定、安全感与实际照顾。" },
  ESTJ: { nickname: "总经理型", description: "你通常执行力强、讲原则、擅长组织事务。你倾向于用清晰规则推动集体高效运转。" },
  ESFJ: { nickname: "执政官型", description: "你通常热心、负责、重视群体关系。你善于协调他人，也很关注大家是否都被照顾到。" },
  ISTP: { nickname: "鉴赏家型", description: "你通常冷静、灵活、擅长动手和快速判断。你往往不喜欢被束缚，更愿意通过实践来理解世界。" },
  ISFP: { nickname: "探险家型", description: "你通常温和、审美敏锐、重视个人体验。你倾向于低调地表达自我，同时保持内在自由。" },
  ESTP: { nickname: "企业家型", description: "你通常大胆、直接、行动快，喜欢真实刺激的体验。你常能在变化中迅速抓住机会。" },
  ESFP: { nickname: "表演者型", description: "你通常开朗、热情、感染力强，喜欢让生活有趣起来。你重视当下体验，也很容易带动别人。" }
};

// =========================
// 页面逻辑：一般不用动
// =========================

document.title = TEST_TITLE;
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
const dimensionScores = document.getElementById("dimensionScores");

let currentQuestionIndex = 0;
let scores = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0
};

function startQuiz() {
  currentQuestionIndex = 0;
  scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  heroSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  quizSection.classList.remove("hidden");

  renderQuestion();
}

function renderQuestion() {
  const current = QUESTIONS[currentQuestionIndex];
  const total = QUESTIONS.length;
  const progress = ((currentQuestionIndex) / total) * 100;

  questionCounter.textContent = `第 ${currentQuestionIndex + 1} / ${total} 题`;
  progressFill.style.width = `${progress}%`;
  dimensionTag.textContent = `维度：${current.dimension[0]} / ${current.dimension[1]}`;
  questionText.textContent = current.text;

  optionsBox.innerHTML = "";

  current.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option.text;
    btn.addEventListener("click", () => {
      scores[option.type] += 1;
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
  const ei = scores.E >= scores.I ? "E" : "I";
  const sn = scores.S >= scores.N ? "S" : "N";
  const tf = scores.T >= scores.F ? "T" : "F";
  const jp = scores.J >= scores.P ? "J" : "P";
  return `${ei}${sn}${tf}${jp}`;
}

function percentage(a, b) {
  const total = a + b;
  if (total === 0) return "50%";
  return `${Math.round((a / total) * 100)}%`;
}

function showResult() {
  quizSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
  progressFill.style.width = "100%";

  const type = getFinalType();
  const result = RESULT_MAP[type] || {
    nickname: "自定义类型",
    description: "你可以在 script.js 的 RESULT_MAP 中修改这个类型的文案说明。"
  };

  resultType.textContent = type;
  resultNickname.textContent = result.nickname;
  resultDescription.textContent = result.description;

  dimensionScores.innerHTML = `
    <div class="score-item">
      <strong>E / I</strong>
      E：${scores.E} 分（${percentage(scores.E, scores.I)}）｜I：${scores.I} 分（${percentage(scores.I, scores.E)}）
    </div>
    <div class="score-item">
      <strong>S / N</strong>
      S：${scores.S} 分（${percentage(scores.S, scores.N)}）｜N：${scores.N} 分（${percentage(scores.N, scores.S)}）
    </div>
    <div class="score-item">
      <strong>T / F</strong>
      T：${scores.T} 分（${percentage(scores.T, scores.F)}）｜F：${scores.F} 分（${percentage(scores.F, scores.T)}）
    </div>
    <div class="score-item">
      <strong>J / P</strong>
      J：${scores.J} 分（${percentage(scores.J, scores.P)}）｜P：${scores.P} 分（${percentage(scores.P, scores.J)}）
    </div>
  `;
}

function copyResult() {
  const type = resultType.textContent;
  const nickname = resultNickname.textContent;
  const desc = resultDescription.textContent;
  const text = `我的 MBTI 测评结果：${type}（${nickname}）\n${desc}`;

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

startBtn.addEventListener("click", startQuiz);
restartBtnTop.addEventListener("click", () => {
  quizSection.classList.add("hidden");
  resultSection.classList.add("hidden");
  heroSection.classList.remove("hidden");
});
restartBtnBottom.addEventListener("click", startQuiz);
copyBtn.addEventListener("click", copyResult);
