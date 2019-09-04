let obj1 = { a: 1, b: 2, c: {nickName: 'd'}};
let obj2 = { ...obj1, ...{c: {foo:'c'}}};
// obj2.c.nickName = 'd-edited';
console.log(obj1); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
console.log(obj2); // {a: 1, b: 2, c: {nickName: 'd-edited'}}
