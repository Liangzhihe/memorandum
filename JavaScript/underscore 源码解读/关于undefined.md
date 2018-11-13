## Why does void 0 replace undefined ?

1. undefined 并不是保留词（reserved word），它只是全局对象的一个属性，在低版本 IE 中能被重写。  

2. void 运算符能对给定的表达式进行求值，然后返回 undefined。也就是说，void 后面你随便跟上一个表达式，返回的都是 undefined，都能完美代替 undefined！那么，这其中最短的是什么呢？毫无疑问就是 void 0 了  

3. void 是不能被重写的（cannot be overidden）  

4. 用 void 0 代替 undefined 能节省不少字节的大小, 并且更加安全