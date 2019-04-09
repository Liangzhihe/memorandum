// 一般时候枚举会使用 for in语句 ，但实际上如果已经明确这个对象有哪些属性，并且明确我们需要
// 哪些属性，那么完全可以使用for循环的方式来对对象进行枚举。只需要事先把需要的属性放入一个数组中，
// 然后用for循环通过对数组进行操作，来枚举特定对象的属性。

var tempObj = {
  name: 'julia',
  gender: 'famale',
  age: 4396,
  hobby: ['eat', 'drink', 'fuck', 'kill'],
  beauty: false
}

// 方法1
for (const key in tempObj) {
  if (tempObj.hasOwnProperty(key)) {
      const element = tempObj[key];
      console.log('for in:', element);
  }
}

// 方法2
var tempArr = [
  'name',
  'gender',
  'age',
  'beauty'
]

for (var i = 0; i < tempArr.length; i++) {
  var el = tempObj[tempArr[i]];
  console.log('for:', el);
}