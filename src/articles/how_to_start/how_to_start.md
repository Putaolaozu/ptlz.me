# 如何开始学习 web 前端开发? 我的学习方法和路线分享

## 一、前言：为啥要写本文？

本文主要是写给想入坑 _（或是想了解了解）_ 前端开发的朋友，因为俺作为一个非计算机出身的孩子，在自学 web 前端开发的过程中，遇到了不少瓶颈，也踩了一些坑。

其中，最大的问题莫过于在“纷繁复杂”的技术里，自己不知道该往哪个方向学习，因为 web 前端的知识非常多，从最基础的**HTML**，**CSS**和**Javascript** _（及此基础上的**Typescript**）_，到各种各样的**CSS**、**Javascript**框架 _（例如从**React**和**Vue**，到**Next**和**Nuxt**，还有诸如**ELectron**和**React Flutter**等等，多得让人脑阔疼 🫠）_ ，再到层出不穷的一些工具 _（例如用于登录验证的**Auth.js**，用来方便添加动画效果的**Anime.js**......）_，都让人应接不暇。

而且往往这些技术更新换代很快 _（连最基础的 Javascript 两三年就已经多了很多新特性，更别说层出不穷的框架和工具了）_，而人的时间又往往很有限，所以如何在爆炸性的信息洪流中站稳脚跟，把时间“花在刀刃上”，就显得尤为重要 _（当然，平时生活里的信息获取也该如此。挖个坑，有空再谈谈这个哈哈）_。

所以我就来谈谈应该怎么学前端，或者说，我建议怎么入门前端，聊聊哪些值得花时间，分享一下作为一个初学者，哪些渠道获取知识比较好 _（书？文章？视频？官方文档？chatGPT？）_，怎么学习比较有效率 _（按知识点看书然后敲代码？做网页？刷题？）_，遇到问题怎么办，以及如何循序渐进深入前端开发。

## 二、学习之前的一点建议

### 1. 初来乍到，无需贪多务得

想起以前自学 python 的时候，就在某站上搜“python 入门教程“，跟着一个播放量奇高的”花了两万买的 python 教程“学了半天，都是一头雾水，怀疑人生，学不下去。直到后来知道了[checkio](https://py.checkio.org)这个网站，才知道原来这才是学习 python 的正确打开方式！而且十分有趣！_（当然，那个所谓“花两万买”大概率是骗流量，后来我看到过很多好得多的教学视频）_

所以说，学习前端甚至是一门编程语言，千万不要一上来就埋头苦干，尤其是对着一个个“知识点”，用做题家思维从头撸到尾。

> #### 一个著名的前端学习路线图
>
> - [Frontend Developer Roadmap](https://roadmap.sh/frontend)：作者按由浅入深的顺序列出了需要用到的技术，你可以按照他的顺序学习，但我个人会把它当成是自己技术掌握程度反思的参照表，毕竟有许多技术在做项目用到的过程中学习反而更高效

千万不要把学习路线当成过关斩将，一定要达到 100%，才开启下一关，而应该“循环往复，学而时习”。学习路线图要时常回头看，也要时常跳过，往下走。

我 CSS flexbox 没有很搞懂，不代表就不能先看看 git 和 npm 怎么用，我在 prototype 上徘徊了很久，也不影响我先看看 React 的 JSX 呀。很多时候，可以先抄抄别人的答案，把一个完整的小 project 先做出来，多试几个小 project，说不定就理解了。

### 2. 学会检索比记住知识更重要

无论你是想不出如何实现想要的功能，遇到了不知道怎么解决的 bug，还是想学什么新东西，直接 Google 就好了，不过请务必使用**英文**去 Google，再说一次，请使用**英文**！因为中和英之间的资料数量和质量真的差太多了。 _（什么？英语不好？多看，多查，少用全文翻译，慢慢就习惯了。加油 💪，你可以的！）_

> #### 检索方式
>
> - [MDN 开发者文档](https://developer.mozilla.org)： HTML，CSS 和 Javascript 最优秀的技术文档，没有之一，里面有每一项技术的详细说明。尽量看英文版，因为中文版有时来不及更新或有翻译问题
> - [Stack Overflow](https://stackoverflow.com/)：全球最大的程序员问答网站，可信度很高，你遇到的大部分问题都可以在这里找到，也可以自己提问
> - [Claude](https://www.anthropic.com/claude-in-slack) (通过[Slack](https://slack.com)使用)：Claude 和 chatGPT 一样都是都是 AI 聊天机器人，亲测其编程能力要强于 chatGPT3.5，完全免费且不限制 IP 地址比较方便。但千万要记住，所有 AI chatbot 给出的方案并不一定是正确的，自己一定要学会 fact check
> - [chatGPT-4](https://chat.openai.com): 不差钱的可以使用，比 Claude 更准确，不建议用免费的 chatGPT-3.5

## 三、怎么学？

### 第一种：系列课程学习法

初学者通常对前端的知识结构还不太了解，如果有一整套的课程可以有序地跟进，那就可以更有体系、更全面地掌握所需的知识。而且，一些好的教程往往还会全程贯彻一些良好的开发习惯（例如[MDN](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)），这些习惯是受益终身的。

不过，系列教程由于开发时间很长，所以很难做到涵盖当下最流行的技术（例如 [Next.js 13](https://nextjs.org)或[Nuxt](https://nuxt.com/)等）。

如果学习中途在某些点卡住了，不用头铁或怀疑人生，或许是它本身讲得不好，换不同的教程看就可以了。

> #### 一些系列课程
>
> - [MDN 前端开发系列教程](https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer)：由 Mozilla 开发的一套前端开发者教程，值得一看，里面例如网页的 accessibility（无障碍化）思想，一些编程习惯等等，都从头到尾贯彻其中，这些思想和习惯对你的职业生涯都是非常有帮助的
> - [Codecademy](https://codecademy.com)：网站十分精美，每个知识点都有练习，每个章节都有 project 或 portfolio。有免费的知识点课程，更建议可以买个会员，直接用它 IT 行业的 career path 系列课程，例如前端、后端、数据分析师等等
> - [Free Code Camp](https://www.freecodecamp.org)：一个免费的从 HTML、CSS、Javascript 到 React、数据分析等等的系列课程网站，但里面有些技术已经相对落后了，而 HTML 和 CSS 的部分稍显啰嗦
> -

### 第二种：视频教程+项目搭建学习法

一些与时俱进的技术就非常适合视频学习，比如 Next.js，作为小白，与其直接看冗长的官网的文档，我更建议搜索一个最近更新的“Next.js crash course“来入门，自己动手做项目的时候，再去查阅官方文档。

此外，只有自己上手做一个项目，才会真正知道自己到底懂得多少，无论是从最简单的纯 HTML 网页，再到一个复杂的交互性网页应用，动手去实操都比单纯看有用多了。

如果不知道要做什么项目好的话，YouTube 上有琳琅满目的 web project 教程。切记在跟着别人做的时候，多停下想想，这个功能如果换成自己会怎么去实现，做后可以尝试不看教程自己重新把它做出来。

> #### 一些 Youtuber 推荐
>
> - [CodingStartup 起码课](https://www.youtube.com/@CodingStartup)：也有[bilibili 频道](https://space.bilibili.com/451368848)，一个粤语频道，频道主 Steven 是澳门的全栈开发大佬，发过很多惊艳的 CSS 效果教程。
> - [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)：一个帅小伙，他的“learn X in Y minutes”系列挺不错的
> - [Bitfumes](https://www.youtube.com/@Bitfumes)：印度老哥，热情澎湃，看他的视频会跟着亢奋起来
> - [Javascript Mastery](https://www.youtube.com/@javascriptmastery)：产出奇高，有很多完整的 web app 教程。不过要注意，真正开发一个 web app 的流程并不是其教程那样，绝对不是像他一上来就把 Navbar 做好的。

## 四、建议与更多分享

### 我的学习路线

#### 入门阶段

利用系列课程，先学好基础的 HTML 和 CSS，然后就可以入手[Tailwind CSS](https://tailwindcss.com)，大大提高写 CSS 的速度。这时候已经可以尝试模仿复刻一些网页，例如[Apple 官网](https://apple.com)。

#### 初级阶段

接下来学好基本的 Javascript，从编程语言基础到 DOM 操作 和浏览器 API。尝试去做一些小项目，开发或复刻一些小组件（如待办清单，计时器），或者做一个小游戏（如贪吃蛇，数独），多去实战。

#### 中级阶段

选一套 Javascript 框架（主流的有[React](https://react.dev)，[Vue](https://vuejs.org)，[Angular](https://angular.io)和[Svelte](https://svelte.dev)）去学习，多去动手实践，过程中会顺带学习到很多 Javascript 套件。学习跨浏览器开发，部署你的项目。

#### 高级阶段

到了这个阶段，就应该去了解一点后端了。[Next.js](https://nextjs.org)（对应 React）和 [Nuxt](https://nuxt.com/)（对应 Vue）是目前流行的 server-side rendering 框架。有了这些服务器端框架，你就可以学着搭建自己的 API 了（当然如果你想深入后端，还可以根据需要学习其他的框架）。

现在，你已经可以完整地开发一个 web app 了 👏👏，根据项目需要学习其他技术就可以了。

#### 更进阶

除了网页端应用，还可以学习桌面端（[Electron](https://www.electronjs.org)）或移动端应用（[React Native](https://reactnative.dev)），小程序等开发。重要的是要持之以恒。

### 想对以前的自己说的话

1. 开始了一个 project，再烂也要把它**做完**
2. 学会做减法，先考虑**必须的**功能，再考虑"**锦上添花**"的功能
3. 先考虑**易读性**和**易用性**，再考虑美观
4. 要用到一个新技术时，暂时学习**要用到**的部分就可以了

### 更多小分享

> #### 一些网站
>
> - [现代 Javascript 教程中文版](https://zh.javascript.info)：从基础到高阶的 JavaScript 相关知识，深入浅出，值得一看，但不需要一次性看完。
> - [TypeScript 教程](https://wangdoc.com/typescript)：阮一峰大佬写的，学 typescript 看这个加上实战基本就可以了
> - [Codepen](https://codepen.io)：一个在线编写 HTML，CSS 和 Javascript 的网站，最重要的是各路大神会在上面分享许多 amazing 的效果实现，建议可以常来看看，想想别人是怎么实现的，会大大提高自己的 UI 设计水平
> - [CSSBattle](https://cssbattle.dev)：

> #### 一些书
>
> - [Refactoring UI](https://www.refactoringui.com)，Adam Wathan 等 著：五星推荐！会让人重新思考一下 UI 设计，为啥别人的 UI 那么好看（题外话，apple 的 UI 和 UX 设计值得）
> - Javascript 高级程序设计（第四版），Matt Frisbie 著：八百多页的一本大部头，十分细致！有空可以多翻翻，许多 Javascript 的细节是网上的教程不会提到的

## 五、结语

学习前端乃至许多计算机技术都是一个持续的过程，保持热情和好奇心十分重要。

经常调侃说程序员“35 岁失业”，我倒觉得更大的可能是因为很多人到了 35 岁已经学不动了，然而技术一定是不断发展的，尤其前端技术更是日新月异。

加油!相信你一定能成为一个出色的前端开发者！🤓🤓
