# QQTI 原生社交人格测试

这是一个纯前端静态网页项目，用来做一套偏 QQ 社交语境的 16 型人格测试。

项目不依赖后端，也没有构建步骤，直接打开 `index.html` 就能运行，也适合部署到 GitHub Pages。

## 当前版本

- `48` 道题
- `4` 个维度：`G/L`、`T/E`、`P/D`、`O/C`
- `16` 种结果类型
- 题型为“五级量表描述题”
- 答题页显示 `维度：隐藏`

五级选项为：

1. `简直就是我`
2. `和我有点像`
3. `不清楚`
4. `和我不太像`
5. `我绝对不这样`

## 项目结构

- `index.html`：页面结构，包含首页、答题页、结果页
- `style.css`：整体视觉样式、布局、按钮与结果卡片样式
- `script.js`：题库、评分逻辑、结果映射、页面交互
- `assets/images/types/`：16 种人格结果图目录
- `assets/images/types/prompt-pack.json`：16 张结果图的统一提示词包

## 运行方式

### 本地直接打开

直接双击 `index.html`，或在浏览器中打开它即可。

### 用本地静态服务预览

如果你更习惯用本地服务，也可以在项目目录运行任意静态服务器，例如：

```powershell
npx serve .
```

然后在浏览器打开终端里显示的地址。

## 测试逻辑

每道题是一句描述，题目会归属于某个维度的一侧字母，例如 `G`、`T`、`P`、`O`。

计分规则：

- 选择 `简直就是我`：该字母 `+2`
- 选择 `和我有点像`：该字母 `+1`
- 选择 `不清楚`：`0`
- 选择 `和我不太像`：对立字母 `+1`
- 选择 `我绝对不这样`：对立字母 `+2`

最终每个维度取分数更高的一侧，拼成 4 字母结果，例如 `GTPO`。

## 结果图片

结果页会按人格类型读取图片：

```text
assets/images/types/{type}.png
```

例如：

- `GTPO` -> `assets/images/types/gtpo.png`
- `LEDC` -> `assets/images/types/ledc.png`

如果对应图片不存在，页面会显示占位提示。

目前项目里已经准备好了 16 张图的提示词文件：

- `assets/images/types/prompt-pack.json`

这个文件用于后续批量生成结果图，要求已经约束为：

- 只有一个人物
- 不能出现任何文字
- 统一为类似 MBTI 的人物插画风格
- 适合结果页 `3:4` 竖图使用

## 自定义内容

### 修改标题

编辑 `script.js` 里的：

```js
const TEST_TITLE = "QQTI 原生社交人格测试";
```

### 修改题库

编辑 `script.js` 中的 `QUESTIONS` 数据。

当前题目结构示例：

```js
{
  dimension: "GL",
  type: "G",
  text: "在群里看到自己熟悉的话题时，我通常会主动接话。"
}
```

字段说明：

- `dimension`：题目所属维度
- `type`：这道题正向对应的字母
- `text`：描述句内容

### 修改五级选项文案

编辑 `script.js` 中的 `RESPONSE_OPTIONS`：

```js
const RESPONSE_OPTIONS = [
  { text: "简直就是我", weight: 2 },
  { text: "和我有点像", weight: 1 },
  { text: "不清楚", weight: 0 },
  { text: "和我不太像", weight: -1 },
  { text: "我绝对不这样", weight: -2 }
];
```

### 修改结果文案

编辑 `script.js` 中的 `RESULT_MAP`。

每种人格都可以自定义：

- `nickname`
- `description`
- `groupStyle`
- `chatStyle`
- `impression`
- `quote`
- `profileStyle`

### 修改视觉风格

主要编辑 `style.css` 中的这些部分：

- `:root`：全局色彩变量和阴影变量
- `.hero`：首页样式
- `.option-btn`：题目按钮样式
- `.trait-card`
- `.score-item`

## 适合继续扩展的方向

- 增加题目随机抽取或题序打乱
- 增加答题进度缓存
- 生成结果分享海报
- 一键复制图片和文案
- 批量接入 16 张结果图
- 补充更完整的移动端细节优化

## 许可

本仓库使用 MIT 协议开源。
