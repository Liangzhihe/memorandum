for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i)
  }, 100)

}

for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i)
    }, 100)
  })(i)
}

var data = [1, [2, [
  [3, [7, 8], 4], 5
], 6]]

function flatten(arr) {
  while (arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr);
  }
  return arr;
}
console.log(flatten(data).sort())
