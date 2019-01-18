var str = 'video0';
var exp = /[0-9]+/;

var result = exp.exec(str);
console.log(typeof result[0]);
