    
1. 给-webkit-谷歌前缀;

2. transform:scale()这个属性只可以缩放能够定义宽高的元素，若是行内元素；需要定义display:block
    
    span { font-size:10px;
           -webkit-transform:scale(0.8);
           display:block;
         }