# 防抖和节流：简单的例子，详细地讲解（Javascript）

## 一、防抖

### 1.啥是防抖

我们往搜索引擎输入框输入关键词的时候，搜索引擎往往可以随着输入自动弹出相关的词条。

这是怎么做到的？

很简单，我们可以监听输入事件，每当用户更新输入内容时，自动请求服务器得到此内容相关的信息：

```js
const inputEle = document.getElementById("search"); //获取input element

function handler(e){
  //...
  //假设这里有一大坨请求数据的操作...
  console.log(e.target.value);
}

inputEle.addEventListener("input",(e) => {
  handler(e)
}; );
```

显然，这么干会严重浪费网络资源，而且用户词才刚打完一半呢，人家都未必想要这时候的词条。

不如等用户停止输入一段时间后再执行请求？

当有输入事件时，我们可以设一个 500ms 的延时任务，而用户在这 500ms 内触发了新的输入事件，我们就吧之前的延时任务清除，再重新设定一个延时任务。这样，只有当用户最后一次输入过了 500ms 后，我们才会执行网络请求。

```js
let timer = null; //想想为什么要在这里声明timer
inputEle.addEventListener("input", (e) => {
  clearTimeout(timer); //新事件触发了，把之前的任务清除掉
  timer = setTimeout(() => {
    handler(e);
  }, 500);
});
```

这样，我们所说的“防抖”就完成了，是不是 so easy？

等等，就这？

如果我们可以将这个“防抖”功能封装成一个函数`debounce`，写成`inputEle.addEventListener('input',debounce)`的形式，那就直观多了。

### 2.函数封装

为了让变量`timer`在需要重复执行的函数外声明，我们可以先在函数`debounce`内部声明`timer`，然后再返回一个需要重复执行的函数：

```js
// 接受一个要执行的函数和要延迟的时间
function debounce(actionFunc, wait) {
  let timer = null;

  //args是返回的函数接受的参数，在我们的例子中就是 event listener 传过来的 event
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      actionFunc.apply(this, args); //注意这里的apply
    }, wait);
  };
}
```

如果直接写`actionFunc(args)`会报错，因为`actionFunc`在传递过程中已经丢失了上下文，此时当你读取`e.target.value`的时候，它已经不知道自己的`target`是谁了。因此，我们要用`apply`方法将其绑定回当前的上下文中，即`this`，在我们的例子中，这个`this`就是 input 元素。

全部写出来就是这样：

```js
const inputEle = document.getElementById("search");

const handler = (e) => {
  console.log(e.target.value);
};

function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

inputEle.addEventListener("input", debounce(handler, 500));
```

效果杠杠的。

## 二、节流

### 1.啥是节流

很多时候，我们在玩某些射击游戏或打斗游戏（总之需要疯狂输出），激烈关头的时候，都不由自主地狂按技能键。然并卵，~~该输还是会输~~子弹的发射速度并不会变快。

事件触发得很快，但真正执行的任务会有最小的时间间隔，不会跟着变快，这就是“节流”。

我们用表格表示五个点击事件：

| 事件编号 | 发生时刻（第几毫秒） |
| :------: | :------------------: |
|    1     |         100          |
|    2     |         200          |
|    3     |         650          |
|    4     |         900          |
|    5     |         1000         |

开始计时后，用户连续点击了五次。假设我们希望任务最少间隔 500ms 执行，那么执行将只在事件 1 和事件 3 的时候执行。因此，我们的程序可以这样：用户第一次点击的时候，立即执行任务；当用户在疯狂点击的时候，执行防抖，每 500ms 执行一次任务；执行完后超过 500ms 用户再点击，再次立即执行任务。代码实现非常简单：

```js
function throttle(actionFunc, wait) {
  let pre = 0;
  return function (...args) {
    //计算时间间隔，超过设定值就可以立即执行；pre为零，即第一次也执行
    if (new Date() - pre > wait || pre === 0) {
      pre = new Date();
      actionFunc.apply(this, args);
    }
  };
}
```

不过你会发现，这无法执行最后一次事件触发的任务（如果触发事件是某些信息输入，我们当然不希望错过了最新的一次输入），那么就可以在此基础上加上前面的“防抖”就可以了（记得，防抖是延迟执行，所以最后一次会执行）。整体代码如下：

```js
const inputEle = document.getElementById("search");

const handler = (e) => {
  console.log(e.target.value);
};

function throttle(actionFunc, wait) {
  let pre = 0,
    timer = null;
  return function (...args) {
    clearTimeout(timer);

    //在防抖的基础上，计算时间间隔，超过设定值就可以立即执行
    if (new Date() - pre > wait || pre === 0) {
      pre = new Date();
      actionFunc.apply(this, args);
    } else {
      timer = setTimeout(() => {
        actionFunc.apply(this, args);
      }, wait);
    }
  };
}

inputEle.addEventListener("input", throttle(handler, 500));
```

大功告成！
