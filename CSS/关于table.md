# 关于Table
### Q：td需固定宽度，防止折行，文字过长时截取文字，超出宽度部分显示省略号。
### A:
<style>
    .table {
            width: 20%;
            table-layout: fixed;
        }
    .th-1 {
        width: 60%;
    }
    .table tbody td {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>

<table class="table">
    <thead>
        <tr>
            <th class="th-1">title1</th>
            <th class="th-2">title2</th>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>关某虽一介武夫，亦颇知忠义二字，正所谓择木之禽得其良木</td>
            <td>俺也一样</td>
        </tr>
        <tr>
            <td>某誓与兄患难与共，终身相伴，生死相随</td>
            <td>俺也一样</td>
        </tr>
        <tr>
            <td>有违此言，天人共戮之</td>
            <td>俺也一样</td>
        </tr>
    </tbody>
</table>

```html
<table class="table">
    <thead>
        <tr>
            <th class="th-1">title1</th>
            <th class="th-2">title2</th>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td>关某虽一介武夫，亦颇知忠义二字，正所谓择木之禽得其良木</td>
            <td>俺也一样</td>
        </tr>
        <tr>
            <td>某誓与兄患难与共，终身相伴，生死相随</td>
            <td>俺也一样</td>
        </tr>
        <tr>
            <td>有违此言，天人共戮之</td>
            <td>俺也一样</td>
        </tr>
    </tbody>
</table>
```

#### 首先，需要为table设置 **width** 及 **table-layout** 属性；

```css
.table {
    width: 400px;
    table-layout: fixed;
}
```
设置`table-layout: fixed`后，表格和列的宽度通过表格的宽度来设置，某一列的宽度仅由该列首行的单元格决定。在当前列中，该单元格所在行之后的行并不会影响整个列宽。

#### 其次，此处需要对th设置固定宽度。不设置宽度的首行单元格默认将会平均分配剩余宽度。

```css
.th-1 {
    width: 60%;
}
```
#### 再次，td中文本不换行，这样超出一行的部分被截取，显示...

**overflow** 属性指定当内容溢出其块级容器时,是否剪辑内容，显示滚动条或显示溢出的内容。
`hidden` 表示“内容会被修剪，并且其余内容不可见”。

**text-overflow** 属性确定如何向用户发出未显示的溢出内容信号。
`ellipsis`表示“用一个省略号 ('…', U+2026 HORIZONTAL ELLIPSIS)来表示被截断的文本”。

**white-space** 属性是用来设置如何处理元素中的空白。
`nowrap`表示“连续的空白符会被合并。但文本内的换行无效”。

```css
.table tbody td {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
```    

```js

console.log('fuck')

```
