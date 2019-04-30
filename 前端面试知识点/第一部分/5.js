// bind
// bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。

// 未完待续

Function.prototype.bind2 = function(context, ...args) {
  var self = this;
  return function(...bindArgs) {
    return self.apply(context, args.concat(bindArgs));
  }
}

var foo = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);

}

var bindFoo = bar.bind2(foo, 'daisy');
bindFoo('18');

