const arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
// 递归, 纯函数
// 第一步 扁平化，
// 第二步 去除重复数据
// 第三步 升序排列

// 扁平化
function fliterArr(arr) {
  const list = []
  arr.map(v => {
    if (Array.isArray(v)) {
      list.push(...fliterArr(v))
    } else {
      list.push(v)
    }
  })
  return list
}

// 去重
function duplicate(arr) {
  const list = []
  arr.forEach(v => {
    if (!list.includes(v)) list.push(v)
  })
  return list
}

// 排列
function sortArr(arr) {
  const list = [].concat(arr)
  list.sort((a, b) => a - b)
  return list
}

function all(arr) {
  return sortArr(duplicate(fliterArr(arr)))
}

console.log(all(arr))
