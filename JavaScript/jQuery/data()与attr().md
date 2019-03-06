大坑

在获取自定义属性为数字时，$.attr()获取string，$.data()获取number

$.attr()和$.data()本质上属于DOM属性和Jquery对象属性的区别

建议不要混用，$.attr()使用时注意数据类型就好。