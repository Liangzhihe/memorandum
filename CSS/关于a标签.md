# a 标签

### a标签 设置隐藏下划线
    a {
        text-decoration:none;
    }
    
#### 延伸

**text-decoration** 这个 CSS 属性是用于设置文本排版（下划线、顶划线、删除线或者闪烁）。下划线和顶划线修饰于文本的下部，删除线位于文本之上。

文本修饰属性会延伸到后代元素。这意味着如果祖先元素指定了文本修饰属性，后代元素则不能将其删除。


### 表格td中嵌入a标签时，扩大a标签响应区域至整个td (其它元素同理)

首先，通过设置a标签 `display:block`,将a标签变为块级元素

其次，若td有padding值，则将其设为0，同时将a标签的padding属性设置为td原来padding值

例如，原来td的padding值为.75rem（bootstrap表格默认值）
    td {
        padding: 0;
    }

    a {
        display: block;
        padding: .75rem;
    }