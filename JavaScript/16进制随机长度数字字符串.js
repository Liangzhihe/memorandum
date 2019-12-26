'use strict'

/**
 * 生成随机长度的16进制数字字符串
 *
 * @param {boolean} isRandom 是否随机长度，若为true，则返回min和max之间随机长度的16进制数字字符串
 * @param {number} min 最短， 若长度不随机，则该项为返回的字符串长度
 * @param {number} max 最长
 * @return {string} str
 */
function getRandomStr(isRandom, min, max) {
  let str = ''
  let len = isRandom ? Math.round(Math.random() * (max - min)) + min : min
  let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

  for (let i = 0; i < len; i++) {
    const n = Math.ceil(Math.random() * arr.length) - 1
    const w = arr[n]
    str += w
  }
  return str
}

console.log(getRandomStr(false, 32))

for (let i = 0; i < 20; i = i + 1) {
  console.log(getRandomStr(true, 3, 6))
}
