# MBTI 静态测评网页

这是一个纯前端静态网页项目，直接双击 `index.html` 就能打开，也可以部署到 GitHub Pages。

## 本项目的石墩子

![Stone Badge](https://stone.professorlee.work/api/stone/mornhussakuyo-hub/MBIT-Test)

## 文件说明

- `index.html`：页面结构
- `style.css`：页面样式
- `script.js`：题目、结果文案、评分逻辑

## 自定义方法

### 1. 修改标题
打开 `script.js`，找到：

```js
const TEST_TITLE = "MBTI 性格测评";
```

改成你想要的标题。

### 2. 修改题目
打开 `script.js`，找到 `QUESTIONS` 数组。

每一道题长这样：

```js
{
  dimension: "EI",
  text: "周末到了，你更倾向于怎样恢复精力？",
  options: [
    { text: "和朋友聚会、聊天、出去玩", type: "E" },
    { text: "一个人安静待着，看书、刷剧或发呆", type: "I" }
  ]
}
```

- `dimension`：这一题属于哪个维度，四种写法分别是：
  - `EI`
  - `SN`
  - `TF`
  - `JP`
- `text`：题目文字
- `options`：两个选项
- `type`：这个选项加给哪个字母

### 3. 修改结果说明
打开 `script.js`，找到 `RESULT_MAP`。

例如：

```js
INTJ: {
  nickname: "建筑师型",
  description: "你通常独立、理性、擅长从长远视角思考问题。"
}
```

你可以改：
- 类型昵称
- 类型介绍
- 甚至改成你自己的世界观设定

### 4. 修改颜色和风格
打开 `style.css`，最上面有：

```css
:root {
  --bg: #0b1020;
  --card: rgba(17, 24, 39, 0.78);
  --text: #f3f4f6;
  --primary: #7c3aed;
}
```

常改的是：
- `--primary`：主按钮颜色
- `--text`：正文颜色
- `body` 的 `background`：页面背景

## 后续可扩展

- 首页欢迎动画
- 每题 5 级选择，而不是二选一
- 答题历史记录
- 结果海报导出
- 分享链接
- 音效和插图
- 登录功能
