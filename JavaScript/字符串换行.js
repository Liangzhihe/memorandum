function formatter(name) {
  var strs = name.split('');
  var str = '';
  for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
    str += s;
    if(!(i % 8)) str += '\n'; //按需要求余
  }
  return str;
}

/**
 * 字符串换行
 * @param {String} str
 * @param {Number} num
 * @returns {String} newStr
 */
function newLine(str, num) {
  const strArr = [...str]
  let temp = ''
  strArr.forEach((v, i) => {
    temp += v
    if ((i + 1) % num === 0) temp += '\n'
  })
  return temp
}