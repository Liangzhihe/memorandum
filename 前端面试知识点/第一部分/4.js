// 1. call
// fun.call(thisArg, arg1, arg2, ...)
// call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法
// thisArg 参数可以传 null，当为 null 的时候，视为指向 window
// 函数可能有返回值

Function.prototype.call2 = function(context, ...args) {
  if (context === null) context = window;
  context.fn = this;
  const result = context.fn(...args);
  delete context.fn;
  return result;
}

// const foo = {
//   value: 1
// }

// function bar(name,age) {
//   console.log(name);
//   console.log(age);
//   console.log(this.value);
//   return {
//     name,
//     value: this.value
//   }
// }

// bar.call2(foo, 'Liang',18);
// bar.call2(null, 'L');

// 2. apply
// apply() 方法调用一个具有给定this值的函数，以及作为一个数组（或类似数组对象）提供的参数
Function.prototype.apply2 = function(context, arr) {
  if (context === null) context = window;
  context.fn = this;
  let result;
  if (!arr) {
    result = context.fn();
  } else {
    result = context.fn(...arr);
  }
  delete context.fn;
  return result;
}

// function log(...args) {
//   console.log.apply(console, args);
// }

// log('apply1','345');

// function log2(...args) {
//   console.log.apply2(console, args);
// }

// log2('apply2','345');