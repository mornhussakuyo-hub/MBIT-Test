// =========================
// 你最常改的地方：从这里开始
// =========================

const TEST_TITLE = "MBTI 性格测评";

const QUESTIONS = [
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
    text: "在陌生环境里，你通常会：",
    options: [
      { text: "主动和别人搭话，先热起来", type: "E" },
      { text: "先观察氛围，熟了再慢慢参与", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "遇到开心或烦恼的事时，你更习惯：",
    options: [
      { text: "马上说出来，边说边理清思路", type: "E" },
      { text: "先自己消化，想明白了再说", type: "I" }
    ]
  },
  {
    dimension: "EI",
    text: "团队活动中，你往往是：",
    options: [
      { text: "带动气氛的人", type: "E" },
      { text: "比较沉稳但很有想法的人", type: "I" }
    ]
  },
  {
    dimension: "SN",
    text: "学习新知识时，你更喜欢：",
    options: [
      { text: "先看具体例子，知道它怎么用", type: "S" },
      { text: "先理解整体概念，知道它为什么这样", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "你更容易被哪类内容吸引？",
    options: [
      { text: "现实、明确、看得见摸得着的内容", type: "S" },
      { text: "抽象、未来感、带想象空间的内容", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "做事时你通常更在意：",
    options: [
      { text: "细节是否准确、过程是否稳妥", type: "S" },
      { text: "方向是否新颖、想法是否有潜力", type: "N" }
    ]
  },
  {
    dimension: "SN",
    text: "当别人讲一件事时，你更关注：",
    options: [
      { text: "实际发生了什么", type: "S" },
      { text: "这背后意味着什么", type: "N" }
    ]
  },
  {
    dimension: "TF",
    text: "做决定时，你通常更依赖：",
    options: [
      { text: "逻辑、规则和客观标准", type: "T" },
      { text: "感受、关系和人的处境", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "当朋友来倾诉时，你更可能先：",
    options: [
      { text: "帮他分析问题该怎么解决", type: "T" },
      { text: "先安慰他，让他觉得被理解", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "面对争论时，你更看重：",
    options: [
      { text: "谁更有道理", type: "T" },
      { text: "大家是否都能接受", type: "F" }
    ]
  },
  {
    dimension: "TF",
    text: "你更容易被评价为：",
    options: [
      { text: "理性、清醒、会权衡", type: "T" },
      { text: "温和、共情、会照顾别人", type: "F" }
    ]
  },
  {
    dimension: "JP",
    text: "做计划时，你更喜欢：",
    options: [
      { text: "先安排清楚，再一步步完成", type: "J" },
      { text: "先大致有方向，过程中灵活调整", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "面对截止日期，你通常会：",
    options: [
      { text: "提前推进，避免最后手忙脚乱", type: "J" },
      { text: "临近时爆发，高效冲刺完成", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "你的桌面、文件夹或生活习惯更接近：",
    options: [
      { text: "有秩序、分类明确", type: "J" },
      { text: "看起来随意，但自己知道东西在哪", type: "P" }
    ]
  },
  {
    dimension: "JP",
    text: "旅行时，你更偏向：",
    options: [
      { text: "提前做好攻略、预订和路线安排", type: "J" },
      { text: "到了再看，跟着感觉走", type: "P" }
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
