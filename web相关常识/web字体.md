

## 添加字体文件

### 示例：  

    @font-face {     //引入字体文件
        font-family: 'Glyphicons Halflings'; // 字体名称
        src: url('../fonts/glyphicons-halflings-regular.eot');
        src: url('../fonts/glyphicons-halflings-regular.eot?#iefix') format('embedded-opentype'), 
             url('../fonts/glyphicons-halflings-regular.woff2') format   ('woff2'),
             url('../fonts/glyphicons-halflings-regular.woff') format('woff'), 
             url('../fonts/glyphicons-halflings-regular.ttf') format('truetype'),
             url('../fonts/glyphicons-halflings-regular.svg#glyphicons_halflingsregular') format('svg');
        font-weight: 600;
        font-style: normal;
    }