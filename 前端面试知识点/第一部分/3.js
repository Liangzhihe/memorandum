var jsonStr = '[{"name":"Bob","age":50,"parents":["j","k"],"children":{"first":"monika","second":"julia"}},null,null,null]';

function jsonParse(str) {
  return (new Function('return ' + str))();
}
console.log(jsonParse(jsonStr));

// 还有用递归和状态机实现的，代码较复杂，暂时不记录