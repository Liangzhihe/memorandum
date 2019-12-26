/**
 *
 * 向url中添加字符串
 * @param {String} url
 * @param {Array} paramArr
 * @returns {String} newUrl
 */
function appendUrlParam(url,paramArr) {
  var newUrl = url;
  var andStr;
  
  for (var i = 0; i < paramArr.length; i++) {
    var beforeparam = newUrl.indexOf("?");
    if(beforeparam != -1){
      andStr = "&";
    } else {
      andStr = "?";
    }
    if (paramArr[i].paramVal) {
      newUrl += andStr + paramArr[i].paramKey + "="+ encodeURIComponent(paramArr[i].paramVal)
    }
  }
  // console.log(newUrl);
  return newUrl;
}
