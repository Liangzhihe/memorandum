
// 参考链接： https://developer.mozilla.org/zh-CN/docs/Web/API/Location

// Location 接口表示其链接到的对象的位置（URL）。所做的修改反映在与之相关的对象上。 
// Document 和 Window 接口都有这样一个链接的Location，分别通过 Document.location和Window.location 访问。

// Location 接口不继承任何属性，但是实现了那些来自 URLUtils 的属性。
// Location没有继承任何方法，但实现了来自URLUtils的方法。

// Create anchor element and use href property for the purpose of this example
// A more correct alternative is to browse to the URL and use document.location or window.location
var url = document.createElement('a');
url.href = 'https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container';
console.log(url.href);      // https://developer.mozilla.org/en-US/search?q=URL#search-results-close-container
console.log(url.protocol);  // https:
console.log(url.host);      // developer.mozilla.org
console.log(url.hostname);  // developer.mozilla.org
console.log(url.port);      // (blank - https assumes port 443)
console.log(url.pathname);  // /en-US/search
console.log(url.search);    // ?q=URL
console.log(url.hash);      // #search-results-close-container
console.log(url.origin);    // https://developer.mozilla.org




// 1. 重新载入当前文档
// 类似于浏览器上的刷新页面按钮
// 语法：location.reload(forceGet)
// 参数：forceGet 参数类型：Boolean	可选。
// 该方法只有一个参数，当值为 true 时，将强制浏览器从服务器加载页面资源，当值为 false 或者未传参时，浏览器则可能从缓存中读取页面。
window.location.reload();
