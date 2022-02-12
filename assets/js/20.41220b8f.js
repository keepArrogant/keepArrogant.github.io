(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{418:function(s,t,a){"use strict";a.r(t);var e=a(56),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"显示类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示类型转换"}},[s._v("#")]),s._v(" 显示类型转换")]),s._v(" "),a("p",[a("strong",[s._v("常见的块级元素")])]),s._v(" "),a("ul",[a("li",[s._v("div/p/dl/form/h1-h6/ol/ul/li")])]),s._v(" "),a("h2",{attrs:{id:"块级元素的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#块级元素的特点"}},[s._v("#")]),s._v(" 块级元素的特点")]),s._v(" "),a("blockquote",[a("p",[s._v("1.独占一行;")]),s._v(" "),a("p",[s._v("2.可以设置宽高;.默认宽度是父元素的100%,高度为0px")]),s._v(" "),a("p",[s._v("3.可以设置正常上下外边距和内边距")]),s._v(" "),a("p",[s._v("4.结构上:内部可以包裹其他任意类型元素")]),s._v(" "),a("p",[s._v("​             但是:p标签里面不能放块级标签")])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("<p>\n\t\t123\n\t\t<div>456</div>\n\t\t<p>789</p>\n\t</p>\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*P标签遇到块级元素会自动的加上结束标签*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("strong",[s._v("常见的行内元素")])]),s._v(" "),a("ul",[a("li",[s._v("a/b/em/i/img/span/strong")])]),s._v(" "),a("h2",{attrs:{id:"行内元素-内联元素-的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内元素-内联元素-的特点"}},[s._v("#")]),s._v(" 行内元素(内联元素)的特点")]),s._v(" "),a("blockquote",[a("p",[s._v("1.不独占一行,")]),s._v(" "),a("p",[s._v("2.行内元素就不能设置宽高.宽高由里面的内容撑开")]),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[s._v("左右外边距内边距边框有效 上下外边距内边距边框无效,   auto水平居中无效.")]),s._v(" "),a("li",[s._v("标签之间解析空格")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("5.结构上:内部不能放块元素\n")])])]),a("p",[s._v("​      \t但是a标签能包裹块级元素(特殊,区域链接).")]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[s._v("\t<a href="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(">\n\t\t123\n\t\t<a href="),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v(">789</a>\n\t</a>\n但是a标签里面不能包裹a标签\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])])]),s._v(" "),a("div",{staticClass:"language-css line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("500px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("500px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/*能够设置宽高,但不独占一行.\n  很多人都把理解为行内块元素.但其实不是的.\n  因为img确实是行内元素,但它也是置换元素\n  置换元素就是浏览器根据元素的标签和属性，来决定元素的具体显示内容。\n  例如浏览器会根据<img>标签的src属性的值来读取图片信息引入图片来进行显示，存储在代码之外的.\n  而如果查看HTML代码，则看不到图片的实际内容；\n  这些元素拥有内在尺寸 内置宽高 他们可以设置width/height属性.\n  他们的性质同设置了display:inline-block的元素一致。*/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"行内块的元素的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内块的元素的特点"}},[s._v("#")]),s._v(" 行内块的元素的特点")]),s._v(" "),a("p",[s._v("inline-block: (input,select)")]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("本质上是行内元素,具有块内元素的性质.")]),s._v(" "),a("li",[s._v("支持宽高,但是宽高都是由里面内容撑开")]),s._v(" "),a("li",[s._v("上下左右外边距内边距有效,不支持auto水平居中")]),s._v(" "),a("li",[s._v("标签之间的空格解析")]),s._v(" "),a("li",[s._v(".结构上:内部可以包裹其他任意类型元素")])])]),s._v(" "),a("p",[s._v("行内块元素的对齐方式")]),s._v(" "),a("blockquote",[a("p",[s._v("基线对齐,盒子在没有内容的时候,最底部就是基线,盒子里面有内容的时候,根据盒子内容最下面一行字的基线为准")])]),s._v(" "),a("p",[s._v("display:none;特点:")]),s._v(" "),a("blockquote",[a("ol",[a("li",[a("p",[s._v("不占据空间（如同消失一般）,无法点击交互")])]),s._v(" "),a("li",[a("p",[s._v("内部后代元素也不会显示")])]),s._v(" "),a("li",[a("p",[s._v("display为none的元素浏览器不会渲染")])])])]),s._v(" "),a("h2",{attrs:{id:"解析空格"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析空格"}},[s._v("#")]),s._v(" 解析空格")]),s._v(" "),a("p",[s._v("​\t\t"),a("strong",[s._v("针对于行内元素或者行内块元素而出现的效果.")])]),s._v(" "),a("blockquote",[a("p",[s._v("html换行被解析为空格也是常说的3像素空隙的问题")]),s._v(" "),a("p",[s._v("解析空格原理:换行,空格或者tab缩进产生的距离也叫作空文本节点，会被保留为一个空格.")])]),s._v(" "),a("p",[a("strong",[s._v("解析空格解决办法")])]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("删除标签之间空格 　缺点：不利于文档格式化，对开发者不友好")]),s._v(" "),a("li",[s._v("设置margin-left为负值  缺点：不同浏览器间隙不同，需要设置多次")]),s._v(" "),a("li",[s._v("给行内块元素父级设置字体大小为零,行内块元素字体大小重新设置  这是目前最通用的做法")])])]),s._v(" "),a("h1",{attrs:{id:"默认样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认样式"}},[s._v("#")]),s._v(" 默认样式")]),s._v(" "),a("blockquote",[a("p",[s._v("通常情况下,游览器会为元素设置一些默认样式,")]),s._v(" "),a("p",[s._v("默认样式的存在会影响到页面的布局,通常情况下写代码前必须要去除游览器的默认样式(pc端的页面)")]),s._v(" "),a("p",[s._v("重置样式表")]),s._v(" "),a("p",[s._v("1.*{}把所有标签")]),s._v(" "),a("p",[s._v("2,把所有需要清除的标签样式清除")]),s._v(" "),a("p",[s._v("reset.css  直接去除了游览器的默认样式. https://meyerweb.com/eric/tools/css/reset/")]),s._v(" "),a("p",[s._v("normalize.css 对默认样式进行了统一    https://necolas.github.io/normalize.css/8.0.1/normalize.css")])]),s._v(" "),a("h1",{attrs:{id:"鼠标样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标样式"}},[s._v("#")]),s._v(" 鼠标样式")]),s._v(" "),a("p",[s._v("使用cursor属性,设置鼠标样式")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("cursor:pointer;     小手掌  ==>  常用")])]),s._v(" "),a("li",[a("p",[s._v("cursor:move;    表示对象可以移动")])]),s._v(" "),a("li",[a("p",[s._v("cursor:wait;    表现正在加载")])]),s._v(" "),a("li",[a("p",[s._v("cursor:help;   表示需要帮助")])]),s._v(" "),a("li",[a("p",[s._v('cursor :url("5.png"),pointer; 自定义鼠标样式')]),s._v(" "),a("p",[s._v("图片格式一般要使用.cur和.ani为后缀图片,如果要使用png和gif大小最好不能超过32*32")])])]),s._v(" "),a("h1",{attrs:{id:"游览器内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#游览器内核"}},[s._v("#")]),s._v(" 游览器内核")]),s._v(" "),a("blockquote",[a("ol",[a("li",[s._v("IE浏览器：Trident内核，也是俗称的IE内核；")]),s._v(" "),a("li",[s._v("Chrome浏览器：以前是Webkit内核，现在是Blink内核；")]),s._v(" "),a("li",[s._v("Firefox浏览器：Gecko内核，俗称Firefox内核；")]),s._v(" "),a("li",[s._v("Opera浏览器：最初是自己的Presto内核  == 》 Webkit --》Blink")]),s._v(" "),a("li",[s._v("Safari浏览器 ：Webkit内核")])])]),s._v(" "),a("ul",[a("li",[a("h3",{attrs:{id:"设计理念-渐进增强和优雅降级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计理念-渐进增强和优雅降级"}},[s._v("#")]),s._v(" 设计理念(渐进增强和优雅降级)")])])]),s._v(" "),a("blockquote",[a("p",[s._v("渐进增强认为应该专注于内容本身。一开始针对低版本的浏览器构建页面，满足最基本的功能，再针对高级浏 览器进行效果，交互，追加各种功能以达到更好用户体验,换句话说，就是以最低要求，实现最基础功能为基本，向上兼容。")]),s._v(" "),a("p",[s._v("优雅降级指的是一开始针对一个高版本的浏览器构建页面，先完善所有的功能。然后针对各个不同的浏览器进行测试，修复，保证低级浏览器也有基本功能 就好，低级浏览器被认为“简陋却无妨 (poor, but passable)” 可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。也就是以高要求，高版本为基准，向下兼容。")])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("二者区别")])])]),s._v(" "),a("blockquote",[a("p",[s._v("采用渐进增强,先做基本功能,再针对各个游览器渐渐增加功能,相对优雅降级,开发周期长,前期投入资金大,你想拿一个基础功能版给客户看,多寒酸.但是也有好处,提供了好的平台稳定性,维护资金少,长期降低成本")]),s._v(" "),a("p",[s._v("优雅降级可以在较短时间,开发出只用于一个游览器的完整功能版,这时候你拿给客户谈底气就会很足,可以进行市场试水,对于功能尚未确定的产品,优雅降级不失为一种节约成本的方法.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);