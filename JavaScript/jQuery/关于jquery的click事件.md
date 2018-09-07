# jQuery的click事件

### $().click(function(){}) 与 $().on('click', function(){}) 的区别

前者，不能用于页面动态创建的元素事件绑定 而采用on方法，则支持动态绑定元素，即页面上元素有添加或变化后仍可绑定。

但由于 **on方法有个前提，即动态绑定时，‘选择器’须是目标绑定元素的父元素**

    <body>
        <div class="bar">
            <div class="foo">foo</div>
        </div>
    </body>


因此，以上代码中，如果`$('.foo')`是动态生成的，那么无论是`$('.foo').click()`还是`$('.foo').on('click', function(){})`均无效。

而应该采用事件委托的方式，即`$('.bar').on('click', '.bar', function(){})`，将点击事件委托到其父元素。

考虑到页面元素的父元素可能因为各种原因而变化，因此更好的方式是直接将事件委托至body或document上，即
`$('body').on('click', '.bar', function(){})`。

