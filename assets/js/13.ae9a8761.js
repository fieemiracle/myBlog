(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{417:function(t,a,e){"use strict";e.r(a);var s=e(1),_=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("这是我参与[第四届青训营]笔记创作活动的第1天。")]),t._v(" "),a("h2",{attrs:{id:"一、react的历史与应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、react的历史与应用"}},[t._v("#")]),t._v(" 一、React的历史与应用")]),t._v(" "),a("p",[t._v("1、前端应用开发，如Facebook,Instagram,Netflix网页版")]),t._v(" "),a("p",[t._v("2、移动原生应用开发，如Instagram,Discord,Oculus")]),t._v(" "),a("p",[t._v("3、结合Electron，进行桌面应用开发")]),t._v(" "),a("h2",{attrs:{id:"二、react的设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、react的设计思路"}},[t._v("#")]),t._v(" 二、React的设计思路")]),t._v(" "),a("h3",{attrs:{id:"_1、ui编程的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、ui编程的特点"}},[t._v("#")]),t._v(" 1、UI编程的特点：")]),t._v(" "),a("p",[t._v("前端UI工作原理：事件--\x3e执行既定的回调--\x3e状态变更--\x3eUI更新")]),t._v(" "),a("p",[t._v("(1)状态更新，UI不会自动更新，需要手动地调用DOM进行更新")]),t._v(" "),a("p",[t._v("(2)欠缺基本的代码层面的封装和隔离，代码层面没有组件化")]),t._v(" "),a("p",[t._v("(3)UI之间的数据依赖关系，需要手动维护，如果依赖链路长，则会遇到“Callback Hell”")]),t._v(" "),a("h3",{attrs:{id:"_2、设计思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、设计思路"}},[t._v("#")]),t._v(" 2、设计思路")]),t._v(" "),a("p",[t._v("（1）转换式系统")]),t._v(" "),a("p",[t._v("（2）响应式系统")]),t._v(" "),a("p",[t._v("工作原理：事件--\x3e执行既定的回调--\x3e状态变更")]),t._v(" "),a("p",[t._v("响应式编程：")]),t._v(" "),a("p",[t._v("（1）状态更新，UI自动更新")]),t._v(" "),a("p",[t._v("（2）前端代码组件化，可复用，可封装")]),t._v(" "),a("p",[t._v("（3）状态之间的互相依赖关系，只需要声明既可")]),t._v(" "),a("h3",{attrs:{id:"_3、组件化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、组件化"}},[t._v("#")]),t._v(" 3、组件化")]),t._v(" "),a("p",[t._v("概括：")]),t._v(" "),a("p",[t._v("（1）组件是组件的组合/原子组件")]),t._v(" "),a("p",[t._v("（2）组件内拥有状态，外部不可见")]),t._v(" "),a("p",[t._v("（3）父组件可将状态传入组件内部")]),t._v(" "),a("p",[t._v("组件设计：")]),t._v(" "),a("p",[t._v("（1）组件声明了状态和UI的映射")]),t._v(" "),a("p",[t._v("（2）组件有Props/State两种状态")]),t._v(" "),a("p",[t._v("（3）“组件”可由其他组件拼装而成")]),t._v(" "),a("p",[t._v("组件内部代码样子：")]),t._v(" "),a("p",[t._v("（1）组件内部有用私有状态State")]),t._v(" "),a("p",[t._v("（2）组件接受外部的Props状态提供复用性")]),t._v(" "),a("p",[t._v("（3）根据当前的State/Props,返回一个UI")]),t._v(" "),a("h3",{attrs:{id:"_4、状态归属问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、状态归属问题"}},[t._v("#")]),t._v(" 4、状态归属问题")]),t._v(" "),a("p",[t._v("状态归属于两个节点向上寻找到最近的祖宗节点。")]),t._v(" "),a("p",[t._v("思考：")]),t._v(" "),a("p",[t._v("（1）React是单向数据流还是双向数据流？")]),t._v(" "),a("p",[t._v("（2）如何解决状态不合理上升的问题？")]),t._v(" "),a("p",[t._v("（3）组件的状态改变后，如何更新DOM？")]),t._v(" "),a("h2",{attrs:{id:"三、react-hooks-的写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、react-hooks-的写法"}},[t._v("#")]),t._v(" 三、React（hooks）的写法")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import React, { useState, useEffect } from 'react';\nfunction Example() {\nconst [count, setCount] = useState(0);\n// Similar to componentDidMount and componentDidUpdate: useEffect(() => {\n// Update the document title using the browser api document.title = 'You clicked ${count} times`;\n});\nreturn (<div>\n<p>You clicked {count} times</p >\n<button onClick={() => setCount(count + 1)}>\nClick me</button></div>);\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"四、react的简单实现demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、react的简单实现demo"}},[t._v("#")]),t._v(" 四、React的简单实现demo")]),t._v(" "),a("h3",{attrs:{id:"_1、react的实现主要解决三个问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、react的实现主要解决三个问题"}},[t._v("#")]),t._v(" 1、React的实现主要解决三个问题：")]),t._v(" "),a("p",[t._v("（1）JSX不符合JS标准语法？")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3af8982451ce4b918ed7c02852cd46d7~tplv-k3u1fbpfcp-watermark.image?",alt:"image.png"}}),t._v("\n（2）返回JSX发生改变时，如何更新DOM？")]),t._v(" "),a("p",[t._v("Virtual DOM (虚拟 DOM)")]),t._v(" "),a("p",[t._v("Virtual DOM 是一种用于和真实 DOM 同步，而在JS内存中维护的一个对象，它具有和 DOM 类似的树状结构，并和 DOM 可以建立--对应的关系。 它赋予了 React 声明式的 API:您告诉React 希望让U是什么状态，React 就确保 DOM 匹配该状态。这使您可以从属性操作、事件处理和手动 DOM 更新这些在构建应用程序时必要的操作中解放出来。")]),t._v(" "),a("p",[t._v("（3）State/Props更新时，要重新触发render函数，如何使速度更快？")]),t._v(" "),a("p",[t._v("A.不同类型的元素--\x3e替换")]),t._v(" "),a("p",[t._v("B.同类型的DOM元素，更新")]),t._v(" "),a("p",[t._v("C.同类型的组件元素--\x3e递归")])])}),[],!1,null,null,null);a.default=_.exports}}]);