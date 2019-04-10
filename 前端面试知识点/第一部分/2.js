// 实现一个JSON.stringify

// JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串，
// 如果指定了replacer是一个函数，则可以替换值，或者如果指定了replacer是一个数组，可选的仅包括指定的属性。
// 语法： JSON.stringify(value[, replacer [, space]])

// value : 将要序列化成 一个JSON 字符串的值

// replacer : 
// 如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；
// 如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；
// 如果该参数为null或者未提供，则对象所有的属性都会被序列化

// space : 指定缩进用的空白字符串，用于美化输出（pretty-print）；
// 如果参数是个数字，它代表有多少的空格；上限为10。该值若小于1，则意味着没有空格；
// 如果该参数为字符串(字符串的前十个字母)，该字符串将被作为空格；
// 如果该参数没有提供（或者为null）将没有空格。


// Boolean | Number| String 类型会自动转换成对应的原始值。
// undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
// 不可枚举的属性会被忽略
// 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
function jsonStringify(obj) {
  const type = typeof obj;
  if (type !== 'object') {
    if (/string/.test(type)) {
      obj = '"' + obj + '"';
    } else if (/function|undefined|symbol/.test(type)) {
      return undefined;
    }
    return String(obj);
  } else {
    if (obj === null) {
      return 'null';
    }
    let json = [];
    const isArr = Array.isArray(obj);
    for (const key in obj) {
      let v = obj[key];
      if (isArr) {
        const type = typeof v;
        if (/function|undefined|symbol/.test(type)) {
          v = null;
        } else {
          v = jsonStringify(v);
        }
      } else {
        v = jsonStringify(v);
      }
      json.push((isArr ? "" : '"' + key + '":') + String(v));
    }
    return (isArr ? "[" : "{") + String(json) + (isArr ? "]" : "}");
  }
}



const a = {
  name: 'Bob',
  age: 50,
  parents: ['j', 'k'],
  children: {
    first: 'monika',
    second: 'julia'
  }
}

const result1 = jsonStringify(null);
const result2 = JSON.stringify(null);
console.log(result1);
console.log(result2);

function add(a, b) {
  return a + b;
}

console.log(JSON.stringify(add));
console.log(jsonStringify(add));

console.log(JSON.stringify(true));
console.log(jsonStringify(true));

console.log(JSON.stringify(a));
console.log(jsonStringify(a));

console.log(JSON.stringify({}));
console.log(jsonStringify({}));

console.log(JSON.stringify(8));
console.log(jsonStringify(8));

console.log(JSON.stringify('ll'));
console.log(jsonStringify('ll'));

console.log(JSON.stringify(undefined));
console.log(jsonStringify(undefined));

console.log(JSON.stringify(Symbol(22)));
console.log(jsonStringify(Symbol(22)));

// TODO: 现在就是关于这个new操作符的问题待解决 (如何处理包装对象)
// console.log(JSON.stringify([new Number(1), new String("false"), new Boolean(true)]));
// console.log(jsonStringify([new Number(1), new String("false"), new Boolean(true)]));

// console.log(JSON.stringify(new Number(1)));
// console.log(jsonStringify(new Number(1)));

console.log(JSON.stringify([a, Symbol(22), add, undefined]));
console.log(jsonStringify([a, Symbol(22), add, undefined]));

console.log(JSON.stringify({[Symbol.for("foo")]: "foo"}));
console.log(jsonStringify({[Symbol.for("foo")]: "foo"}));


// console.log(new String('false'));
// console.log( String('false'));

// console.log( new Boolean(true));
// console.log( Boolean(true));

// console.log(typeof new Boolean(true));
// console.log(typeof new String('false'));

// console.log(typeof Symbol(22));
// console.log(typeof Symbol.for("foo"));

