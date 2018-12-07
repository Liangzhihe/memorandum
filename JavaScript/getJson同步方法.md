### 同时执行多个$.getJSON() 数据混乱的问题的解决

    在执行之前加$.ajaxSettings.async = false;    (同步执行)
    执行你的代码之后及时恢复为$.ajaxSettings.async = true； （异步执行）
    不然影响别的地方的需要异步执行的代码。
