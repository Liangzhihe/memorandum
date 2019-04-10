// 参考链接 关于new操作符     https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
// 参考链接 关于typeof操作符  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof

// 实现一个new操作符


// 当代码 new Foo(...) 执行时，会发生以下事情：
// 1. 一个继承自 Foo.prototype 的新对象被创建。
// 2. 使用指定的参数调用构造函数 Foo ，并将 this 绑定到新创建的对象。
//    new Foo 等同于 new Foo()，也就是没有指定参数列表，Foo 不带任何参数调用的情况。
// 3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。
//    （一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）

// 它创建了一个全新的对象。
// 它会被执行[[Prototype]]（也就是__proto__）链接。
// 它使this指向新创建的对象。。
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用(res)。
function New(func, ...args) {
  const res = Object.create(func.prototype);
  const ret = func.apply(res, args);
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  } else {
    return res;
  }
}


function A(a, b) {
  this.a = a;
  this.b = b;
}

A.prototype = {
  constructor: A,
  print: function () {
    console.log(this.a,this.b);
  }
}

const obj1 = new A(1,2);
const obj2 = New(A,1,2);
obj1.print();
obj2.print();