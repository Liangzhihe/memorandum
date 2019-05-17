function formatter(name) {
  var strs = name.split('');
  var str = '';
  for(var i = 0, s; s = strs[i++];) { //遍历字符串数组
  str += s;
  if(!(i % 8)) str += '\n'; //按需要求余
  }
  return str;
}