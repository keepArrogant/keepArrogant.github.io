(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{477:function(t,s,n){"use strict";n.r(s);var a=n(56),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"响应式和自适应"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式和自适应"}},[t._v("#")]),t._v(" 响应式和自适应")]),t._v(" "),n("p",[n("strong",[t._v("不同的设备展示效果不一致 ,为了方便用户的使用游览")])]),t._v(" "),n("p",[n("strong",[t._v("怎么针对不同设置?让显示效果不一致?")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("自适应(通过js来识别 )")])])]),t._v(" "),n("blockquote",[n("p",[t._v("为一个网站开发多个不同的页面,针对不同的设备用户返回不同的页面")])]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("响应式")])])]),t._v(" "),n("blockquote",[n("p",[t._v("做一个网站,能够自动的响应不同设备的变化,出现不同的效果")])]),t._v(" "),n("hr"),t._v(" "),n("p",[n("strong",[t._v("响应式本质是根据设备(游览器的宽度)展示不同的页面效果(修改样式去进行样式覆盖),这里用到的核心就是媒体查询.")])]),t._v(" "),n("p",[n("strong",[t._v("媒体查询")])]),t._v(" "),n("p",[t._v("基本概念")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("不同的设备有不同的尺寸 ,使用一套可能不适用所有的情况。")])]),t._v(" "),n("li",[t._v("简单来说就是针对不同的媒体类型（比如屏幕、打印机或者屏幕阅读器）定义不同的样式，可以针对不同的屏幕尺寸设置不同的样式（比如手机iphone6和iPhone6plus它们两尺寸是不一样的、笔记本电脑和电脑屏幕也是不一样的大小).")]),t._v(" "),n("li",[t._v("应用了响应式布局我们就可以实现在小尺寸的屏幕上或者大尺寸的台式机的屏幕上显示的效果是接近的，或者说不至于出现样式的错乱。")])]),t._v(" "),n("p",[n("strong",[t._v("媒体:设备信息(查询设备的显示宽度),根据不同的条件应用不同的CSS")])]),t._v(" "),n("p",[n("strong",[t._v("@media 定义媒体查询 查询设备宽度")])]),t._v(" "),n("p",[n("strong",[t._v("当设备的宽度满足一定条件的时候,样式会生效")])]),t._v(" "),n("ul",[n("li",[n("h3",{attrs:{id:"媒体类型-分为四种"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#媒体类型-分为四种"}},[t._v("#")]),t._v(" 媒体类型（分为四种）")]),t._v(" "),n("ol",[n("li",[n("strong",[t._v("all")]),t._v("（所有设备）")]),t._v(" "),n("li",[n("strong",[t._v("screen")]),t._v("（电脑屏幕，平板电脑，智能手机）")]),t._v(" "),n("li",[n("strong",[t._v("print")]),t._v("（打印机和打印预览）")]),t._v(" "),n("li",[n("strong",[t._v("speech")]),t._v("（屏幕阅读器等发声设备，一般是供盲人浏览网页使用）")])])]),t._v(" "),n("li",[n("p",[n("strong",[t._v("条件")])])])]),t._v(" "),n("p",[t._v(":"),n("strong",[t._v("max-width 最大宽度")])]),t._v(" "),n("p",[n("strong",[t._v("min=width   最小宽度")])]),t._v(" "),n("p",[n("strong",[t._v("大于使用min-width  媒体类型大于或等于指定宽度时，样式生效")])]),t._v(" "),n("p",[n("strong",[t._v("小于使用max-width   媒体类型小于或等于指定的宽度时，样式生效")])]),t._v(" "),n("p",[n("strong",[t._v("小于max-width-------并且大于*min-width  媒体类型小于并且大于指定宽度时,样式生效,中间用and连接")])]),t._v(" "),n("p",[t._v("给一个范围 而不是固定的值")]),t._v(" "),n("p",[n("strong",[t._v("媒体特性")])]),t._v(" "),n("blockquote",[n("p",[t._v("​    1）(width:700px)")]),t._v(" "),n("p",[t._v("​    2）(max-width:700px) 最大值的700 (x<=700)")]),t._v(" "),n("p",[t._v("​    3)(min-width:700px) 最小值的700 (x>=700)")]),t._v(" "),n("p",[t._v("​    4)(min-width:200px) and (max-width:600px) (200<=x<=600)")]),t._v(" "),n("p",[t._v("​    5)(orientation:portrait) 竖屏")]),t._v(" "),n("p",[t._v("​    6)(orientation:landscape) 横屏")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" all "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("800px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".info")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t<p>现在页面宽度大于800px</p>\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*显示将不显示的样式覆盖了*/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t\t "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" skyblue"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" all "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1000px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("p")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t<p>现在页面宽度大于1000px</p>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br")])]),n("ul",[n("li",[t._v("小于等于1000px,大于等于800px生效  用and连接")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("ul>li")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-grow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("400px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 300px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 0 20px purple inset"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" all "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1000px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("800px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t<ul>\n\t\t\t<li>1</li>\n\t\t\t<li>2</li>\n\t\t\t<li>3</li>\n\t\t</ul>\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br")])]),n("ul",[n("li",[n("strong",[t._v(", 表示或的意思")])])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" all "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 600px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 800px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".list")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("flex-direction")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" column"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*多列布局*/")]),t._v(" \n\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<ul class="wrap">\n        <li>1</li>\n        <li>2</li>\n        <li>3</li>\n        <li>4</li>\n        <li>5</li>\n        <li>6</li>\n    </ul>\n\n\t.wrap>li')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid red"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n   "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("924px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrap>li")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n       "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("768px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("992px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrap>li")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n       "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("768px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrap>li")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("float")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" left"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30%"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])]),n("ul",[n("li",[n("strong",[t._v("写很多分界点:你的开发成本也很高.")])])]),t._v(" "),n("p",[n("strong",[t._v("了解常见的网站宽度几个分界点")])]),t._v(" "),n("ul",[n("li",[n("p",[t._v("超小屏幕(移动设备) 768px 以下")])]),t._v(" "),n("li",[n("p",[t._v("小屏设备 768px-992px")])]),t._v(" "),n("li",[n("p",[t._v("中等屏幕 992px-1200px")])]),t._v(" "),n("li",[n("p",[t._v("宽屏设备 1200px 以上")])]),t._v(" "),n("li",[n("p",[t._v("由于响应式开发显得繁琐些，一般使用第三方响应式框架来完成，比如 bootstrap 来完成一部分工作，当然也 可以自己写响应式。")])]),t._v(" "),n("li",[n("p",[t._v("断点什么合适 没有标准答案")])]),t._v(" "),n("li",[n("p",[t._v("一般"),n("strong",[t._v("1440 1366 1024 768px")])]),t._v(" "),n("p",[t._v("更详细 市场调研")])])]),t._v(" "),n("p",[n("strong",[t._v("怎么引入响应式")])]),t._v(" "),n("p",[t._v("​    1.内联样式")]),t._v(" "),n("p",[t._v("​    2.外部样式引入")]),t._v(" "),n("p",[t._v("​    1）link  "),n("link",{attrs:{rel:"stylesheet",type:"text/css",href:"1.css",media:"screen and (max-width:600px)"}})]),t._v(" "),n("p",[t._v('​    2)@import  @import url("1.css") screen and (max-width:600px);')]),t._v(" "),n("p",[t._v("​    写style标签里面的第一排")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("总结一句")])]),t._v(" "),n("li",[n("strong",[t._v("优点：")])])]),t._v(" "),n("p",[t._v("​    1.面对不同分辨率设备 灵活性强 能够快捷适应问题")]),t._v(" "),n("p",[t._v("​    "),n("strong",[t._v("缺点")])]),t._v(" "),n("p",[t._v("​    1.工作量很大 代码累赘")]),t._v(" "),n("p",[t._v("​    2.使加载时间延长")]),t._v(" "),n("p",[t._v("媒体查询好用,但不是万能,并且现在开发也不是纯响应式")]),t._v(" "),n("p",[t._v("自适应+响应式")]),t._v(" "),n("p",[t._v("判断设备:发给你不同的页面,页面具体响应式的能力.")]),t._v(" "),n("h2",{attrs:{id:"viewport"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#viewport"}},[t._v("#")]),t._v(" viewport")]),t._v(" "),n("p",[t._v("移动端适配 viewport 元标签,可以结合比例控制大小来完成移动端适配")]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("<meta name="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"viewport"')]),t._v(" content="),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"')]),t._v(">\n统一手机端设备的分辨率比例"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("不允许缩放.\n\nwidth=device-width ：表示宽度是设备屏幕的宽度\ninitial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。\nmaximum-scale：允许用户缩放到的最大比例。\nminimum-scale：允许用户缩放到的最小比例。禁止缩放 因为缩放 页面布局会乱\nuser-scalable：用户是否可以手动缩放 yes /no\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("hr"),t._v(" "),n("p",[n("strong",[t._v("rem :布局思想")])]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("rem单位:字体大小单位")])]),t._v(" "),n("blockquote",[n("p",[t._v("和我们的em单位很像"),n("strong",[t._v("1em =16px")])]),t._v(" "),n("p",[t._v("假如给一个div标签设置字体大小为20px,里面的子元素字体大小就是20px,里面的1em也就是20px;")]),t._v(" "),n("p",[t._v("rem（root elemnet em根元素）是相对于根元素")]),n("html",[t._v(",如果html元素没有设置font-size,则默认1rem=16px."),n("p")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v('<section class="wrap">\n\t\t我要忘了你的样子1\n\t\t<div>\n\t\t\t\t我要忘了你的样子2\n\t\t\t<div>\n\t\t\t\t我要忘了你的样子3\n\t\t\t</div>\n\t\t</div>\n\t</section>\n\t\t.wrap')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 30px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(".8em"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*字体大小会依次减小*/")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" .8rem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*字体大小完全统一*/")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br")])]),n("p",[n("strong",[t._v("rem:html根标签的字体大小的倍数,值是完全统一的,标准的衡量单位,通常用于移动端开发")])]),t._v(" "),n("p",[n("strong",[t._v("不同设备中默认字体大小不一致,但是,看上去是一样大的,和页面成比例.")])]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("根据不同设备设计的字体大小,来统一页面的大小")])]),t._v(" "),n("p",[t._v("​\t\t"),n("strong",[t._v("html标签的字体大小可以关联当前的设备大小")])]),t._v(" "),n("p",[t._v("​\t\t"),n("strong",[t._v("html字体大小,就可以用来进行页面开发布局")])]),t._v(" "),n("blockquote",[n("p",[t._v("同样的内容,使用rem进行布局,如果我在一个较小的设备A上显示为宽度的一半,那换到较大的设备B之后同样也会是宽度的一半.")])]),t._v(" "),n("p",[t._v("​\t\t"),n("strong",[t._v("rem统一了不同设备的分辨率,使得同一个rem在不同设备占比一致")])]),t._v(" "),n("ul",[n("li",[t._v("上面说HTML标签大小可以关联到当前设备大小,"),n("strong",[t._v("怎么关联的呢?")])])]),t._v(" "),n("p",[t._v("​\tJs控制查询设备宽度,提供js获取的屏幕宽度,")]),t._v(" "),n("p",[t._v("​\t设置html标签的字体大小,让页面效果统一.")]),t._v(" "),n("p",[t._v("​\t"),n("strong",[t._v("学会获取屏幕宽度")]),t._v(",就可以设置Html的字体大小了.")]),t._v(" "),n("p",[n("strong",[t._v("rem适配")])]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeRem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getBoundingClientRect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("width"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fontSize "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" width "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"px"')]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeRem")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resize'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" changeRem"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("hr"),t._v(" "),n("h2",{attrs:{id:"css新增单位"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#css新增单位"}},[t._v("#")]),t._v(" css新增单位")]),t._v(" "),n("ul",[n("li",[n("strong",[t._v("VW/VH")])])]),t._v(" "),n("blockquote",[n("p",[n("strong",[t._v("1VW = 设备视口1%宽度")])]),t._v(" "),n("p",[n("strong",[t._v("1VH = 设备视口1%高度")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vw"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t<div></div>\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*相对于视口的50%宽高,视口也就是游览器你能够看到的区域*/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br")])]),n("p",[n("strong",[t._v("1vmin  视口宽度和高度之间的最小值的1/100")])]),t._v(" "),n("p",[n("strong",[t._v("1vmax 视口高度和宽度之间最大值的1/100")])]),t._v(" "),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vmin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vmin"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*视口宽度和视口高度相比较,视口宽度少于高度,相对于视口宽度的50%,谁小跟谁*/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("div",{staticClass:"language-css line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-css"}},[n("code",[t._v("\t"),n("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vmax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50vmax"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("green"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*视口宽度和视口高度谁大相对于谁*/")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br")])]),n("p",[n("strong",[t._v("和百分比的区别")])]),t._v(" "),n("p",[t._v("​    百分比会受父级元素的限制")]),t._v(" "),n("p",[t._v("​\tvw和vh不会受到父级元素的限制")])])])}),[],!1,null,null,null);s.default=e.exports}}]);