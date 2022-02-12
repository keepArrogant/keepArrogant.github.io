(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{489:function(e,r,t){"use strict";t.r(r);var _=t(56),v=Object(_.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"_1-下图代码中promise对象的最终状态是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-下图代码中promise对象的最终状态是-选择一项"}},[e._v("#")]),e._v(" 1.下图代码中Promise对象的最终状态是？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6kNmq",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6kNmq.png",alt:"D6kNmq.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**rejected")]),e._v(" "),t("p",[e._v("**B.**fulfilled")]),e._v(" "),t("p",[e._v("**C.**pending")]),e._v(" "),t("p",[e._v("**D.**resolved")]),e._v(" "),t("p",[t("strong",[e._v("本题主要考查Promise对象的状态。")])]),e._v(" "),t("p",[e._v("1、Promise对象代表一个异步操作，有三种状态：pending（进行中）、fulfilled（已成功）和rejected（已失败）。")]),e._v(" "),t("p",[e._v("2、Promise构造函数接受一个函数作为参数，该函数的两个参数可以任意命名，调用第一个参数时，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为 resolved）")]),e._v(" "),t("p",[e._v("调用第二个参数时，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为 rejected）。")]),e._v(" "),t("p",[e._v("本题代码中先执行r2()， 将Promise对象的状态由pending改变为rejected，由于Promise对象的状态一旦改变了，就不会在发生变化。所以本题答案为A.")]),e._v(" "),t("h3",{attrs:{id:"_2-下图所示代码输出结果是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-下图所示代码输出结果是-选择一项"}},[e._v("#")]),e._v(" 2.下图所示代码输出结果是？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6kR76",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6kR76.png",alt:"D6kR76.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**rejected")]),e._v(" "),t("p",[e._v("**B.**fulfilled")]),e._v(" "),t("p",[e._v("**C.**pending")]),e._v(" "),t("p",[e._v("**D.**resolved")]),e._v(" "),t("p",[e._v("本题主要考查then方法返回的Promise对象的状态改变。")]),e._v(" "),t("p",[e._v("then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数。不管是失败还是成功状态的回调函数，内部默认返回的永远都是成功状态的Promise对象。")]),e._v(" "),t("p",[e._v("本题代码中，p是一个失败状态的Promise对象，第一个then方法中执行失败状态的回调函数，输出1。")]),e._v(" "),t("p",[e._v("由于第一个then方法中的回调函数没有设置返回值，默认返回成功状态的Promise对象，所以第二个then方法中执行成功状态的回调函数，输出a。")]),e._v(" "),t("p",[e._v("第二个then方法的成功回调函数中设置了返回值2，传递给下一个then方法，所以第三个then方法中执行成功回调，输出2。")]),e._v(" "),t("p",[e._v("最终输出结果是1 a 2，所以本题答案为B.")]),e._v(" "),t("h3",{attrs:{id:"_3-下图代码打印结果是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-下图代码打印结果是-选择一项"}},[e._v("#")]),e._v(" 3.下图代码打印结果是？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6AAEV",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6AAEV.png",alt:"D6AAEV.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**2 4 1")]),e._v(" "),t("p",[e._v("**B.**1 2 4")]),e._v(" "),t("p",[e._v("**C.**1 2 3")]),e._v(" "),t("p",[e._v("**D.**2 3 1")]),e._v(" "),t("p",[e._v("本题主要考查catch方法。")]),e._v(" "),t("p",[e._v("catch方法主要是用来捕获它前面的错误，promise抛出一个错误，就被catch()方法指定的回调函数捕获，如果没有错误，就不会执行catch方法。")]),e._v(" "),t("p",[e._v("Promise构造函数是同步执行的，then中的函数才是异步执行的，所以在创建Promise实例时会立即输出1。")]),e._v(" "),t("p",[e._v("Promise实例调用then方法，接收resolve中传入的一个值，所以接着输出2。")]),e._v(" "),t("p",[e._v("由于第一个then返回的promise没有抛出错误，后面的catch不会运行，继续往下链式调用，执行后面的then方法，打印了上一个then返回的值3。")]),e._v(" "),t("p",[e._v("最终打印的结果为1 2 3，所以本题答案为C.")]),e._v(" "),t("h3",{attrs:{id:"_4-下列关于promise-resolve方法说法错误的是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-下列关于promise-resolve方法说法错误的是-选择一项"}},[e._v("#")]),e._v(" 4.下列关于Promise.resolve方法说法错误的是？（选择一项）")]),e._v(" "),t("p",[e._v("**A.**如果参数是 Promise 实例，将不做任何修改、原封不动地返回这个实例")]),e._v(" "),t("p",[e._v("**B.**如果参数是一般参数，返回一个新的 Promise 对象，状态为rejected")]),e._v(" "),t("p",[e._v("**C.**如果参数是一般参数，返回一个新的 Promise 对象，状态为resolved")]),e._v(" "),t("p",[e._v("**D.**如果参数为空，直接返回一个resolved状态的 Promise 对象")]),e._v(" "),t("p",[e._v("本题主要考查Promise.resolve() 方法。")]),e._v(" "),t("p",[e._v("Promise.resolve(value)方法返回一个以给定值解析后的Promise 对象。")]),e._v(" "),t("p",[e._v("如果参数是一个具有then方法的对象，Promise.resolve方法会将这个对象转为 Promise 对象，然后就立即执行thenable对象的then方法。示例：")]),e._v(" "),t("h3",{attrs:{id:"_4-根据下图判断下列说法错误的是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-根据下图判断下列说法错误的是-选择一项"}},[e._v("#")]),e._v(" 4,根据下图判断下列说法错误的是？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6AwDI",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6AwDI.png",alt:"D6AwDI.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**Promise.all()会返回一个实例，状态为成功")]),e._v(" "),t("p",[e._v("**B.**只有p1、p2、p3的状态都为成功，p的状态才会为成功")]),e._v(" "),t("p",[e._v("**C.**只要p1、p2、p3之中有一个是失败状态，p的状态就变成失败")]),e._v(" "),t("p",[e._v("**D.**参数若为空数组的话，会状态为成功")]),e._v(" "),t("p",[e._v("本题主要考察Promise.all方法。")]),e._v(" "),t("p",[e._v("Promise.all()会返回一个Promise实例，这个实例对象的状态，要看Promise.all()的各个参数是否成功，所以A选项描述错误，本题答案为A")]),e._v(" "),t("h3",{attrs:{id:"_5-下列代码中关于类的声明中-正确的是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-下列代码中关于类的声明中-正确的是-选择一项"}},[e._v("#")]),e._v(" 5.下列代码中关于类的声明中，正确的是?（选择一项）")]),e._v(" "),t("p",[t("strong",[e._v("A.")]),t("a",{attrs:{href:"https://imgchr.com/i/D6AIaV",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6AIaV.png",alt:"D6AIaV.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("B.")]),t("a",{attrs:{href:"https://imgchr.com/i/D6AHGF",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6AHGF.png",alt:"D6AHGF.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("C.")]),t("a",{attrs:{href:"https://imgchr.com/i/D6AxVx",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6AxVx.png",alt:"D6AxVx.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[t("strong",[e._v("D.")]),t("a",{attrs:{href:"https://imgchr.com/i/D6Ajq1",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6Ajq1.png",alt:"D6Ajq1.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("本题考察的是class的基础语法。")]),e._v(" "),t("p",[e._v("类的声明是class 关键字+类名{}，A选项正确。")]),e._v(" "),t("p",[e._v("代码中class中c应该是小写，B选项错误。")]),e._v(" "),t("p",[e._v("class关键字后面不可以添加圆括号，C选项错误。")]),e._v(" "),t("p",[e._v("class关键字后面不可以添加function()，D选项错误")]),e._v(" "),t("p",[e._v("所以本题答案为A.")]),e._v(" "),t("h3",{attrs:{id:"_6-观察如下图中的代码-查找下有几处错误-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-观察如下图中的代码-查找下有几处错误-选择一项"}},[e._v("#")]),e._v(" 6.观察如下图中的代码，查找下有几处错误？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6Aza6",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6Aza6.png",alt:"D6Aza6.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**1")]),e._v(" "),t("p",[e._v("**B.**2")]),e._v(" "),t("p",[e._v("**C.**3")]),e._v(" "),t("p",[e._v("**D.**4")]),e._v(" "),t("p",[e._v("本题主要考查class的实例属性和静态属性。")]),e._v(" "),t("p",[e._v("实例属性只能通过实例对象访问，静态属性只能通过类本身访问。")]),e._v(" "),t("p",[e._v("本题代码中run是实例方法，而Person是类，类不可以访问实例方法，会出现报错，所以Person.run()是一处错误。")]),e._v(" "),t("p",[e._v("eat方法是静态方法，而p是实例对象，实例对象无法访问静态方法，会出现报错，所以p.eat()是一处错误。")]),e._v(" "),t("p",[e._v("age是静态属性，可以在实例化对象之前通过类本身访问，所以console.log(Person.age)这代码可以正常输出结果。")]),e._v(" "),t("p",[e._v("实例对象不可以访问静态属性，但是p.age相当于访问对象上一个不存在的属性，默认返回undefined，并不会报错，不能算作一个错误。")]),e._v(" "),t("p",[t("strong",[e._v("所以代码中一共有两处错误，本题答案为B.")])]),e._v(" "),t("h3",{attrs:{id:"_7-关于下图代码运行结果的描述-正确的是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-关于下图代码运行结果的描述-正确的是-选择一项"}},[e._v("#")]),e._v(" 7.关于下图代码运行结果的描述，正确的是？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6EEqI",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6EEqI.png",alt:"D6EEqI.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**第一次弹出c1，第二次报错")]),e._v(" "),t("p",[e._v("**B.**第一弹出c1，第二次弹出p1")]),e._v(" "),t("p",[e._v("**C.**第一次弹出undefined，第二次报错")]),e._v(" "),t("p",[e._v("**D.**第一次弹出undefined，第二次弹出undefined")]),e._v(" "),t("p",[t("strong",[e._v("本题主要考查class的继承。")])]),e._v(" "),t("p",[e._v("1、class 可以通过extends关键字继承父类的所有属性和方法。")]),e._v(" "),t("p",[e._v("2、子类构造函数中使用super关键字调用父类的构造函数。")]),e._v(" "),t("p",[e._v("3、在子类中可以通过设置与父类同名的属性或方法覆盖父类的属性或方法。")]),e._v(" "),t("p",[e._v("本题代码中Child类继承了Parent类，但是调用super方法时没有传递参数，导致Child实例化对象c1调用pSay方法时，访问的this.name属性值默认为undefined，第一次弹出结果为undefined。")]),e._v(" "),t("p",[e._v("Parent是父类，它的实例化对象p1不可以调用子类Child上的方法cChild，第二次出现报错。")]),e._v(" "),t("p",[t("strong",[e._v("所以本题答案为C.")])]),e._v(" "),t("h3",{attrs:{id:"_8-关于super关键字-下列说法正确的是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-关于super关键字-下列说法正确的是-选择一项"}},[e._v("#")]),e._v(" 8.关于super关键字，下列说法正确的是？（选择一项）")]),e._v(" "),t("p",[e._v("**A.**super作为函数调用时，代表父类的构造函数")]),e._v(" "),t("p",[e._v("**B.**super中的this指向的是子类")]),e._v(" "),t("p",[e._v("**C.**在静态方法中访问super，指向父类的原型对象")]),e._v(" "),t("p",[e._v("**D.**在非静态方法中访问super，指向父类")]),e._v(" "),t("p",[t("strong",[e._v("本题主要考察super关键字。")])]),e._v(" "),t("p",[e._v("super作为函数调用时，代表父类的构造函数，A选项正确。")]),e._v(" "),t("p",[e._v("super中的this指向的是子类的this，B选项错误。")]),e._v(" "),t("p",[e._v("非静态方法中，指向父类的原型对象，C选项错误。")]),e._v(" "),t("p",[e._v("在静态方法中，指向父类，D选项错误。")]),e._v(" "),t("p",[t("strong",[e._v("所以本题答案为A.")])]),e._v(" "),t("h3",{attrs:{id:"_9-下图代码运行结果是-选择一项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-下图代码运行结果是-选择一项"}},[e._v("#")]),e._v(" 9.下图代码运行结果是？（选择一项）")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://imgchr.com/i/D6E8Ln",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://s3.ax1x.com/2020/11/28/D6E8Ln.png",alt:"D6E8Ln.png"}}),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("**A.**c1 red red")]),e._v(" "),t("p",[e._v("**B.**c1 red red")]),e._v(" "),t("p",[e._v("**C.**undefined red undefined")]),e._v(" "),t("p",[e._v("**D.**c1 red undefined")]),e._v(" "),t("p",[t("strong",[e._v("本题主要考查super关键字。")])]),e._v(" "),t("p",[e._v("super关键字作为对象使用时，在子类实例方法中，指向父类的原型对象；在子类静态方法中，指向父类。")]),e._v(" "),t("p",[e._v("本题代码中Child类继承了Parent类，具体的解析参考如下：")]),e._v(" "),t("p",[e._v("1、子类静态方法cSay中，super作为对象时，指向父类Parent。")]),e._v(" "),t("p",[e._v("调用父类的方法pSay时，该方法内部的this指向子类Child, 无法访问到实例属性username，结果为undefined。")]),e._v(" "),t("p",[e._v("2、子类实例方法cShow中super作为对象使用，指向父类原型,即：Parent.prototype，")]),e._v(" "),t("p",[e._v("调用父类的方法pShow时，该方法内部的this指向子类实例对象，可以访问实例对象上的color属性，结果为red。")]),e._v(" "),t("p",[e._v("3、super.color这句代码相当于访问父类原型上的color属性，不可以访问实例属性color，由于父类原型上并没有color属性，所以结果为undefined。")]),e._v(" "),t("p",[e._v("代码最终的输出结果为undefined red undefined，所以本题答案为C.")])])}),[],!1,null,null,null);r.default=v.exports}}]);