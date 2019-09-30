const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
// const list = []
function getArray(array, list) {
  array.forEach(item => {
    // console.log(typeof item)
    if (Array.isArray(item)) {
      getArray(item, list)
    } else {
      if (!list.includes(item)) {
        list.push(item)
      }
    }
  })
}

function fliteArray(array) {
  const list = []
  getArray(array, list)
  list.sort((a,b) => a - b)
  return list
}

const a = fliteArray(arr)
console.log(a)
