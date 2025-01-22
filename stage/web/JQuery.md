## JQuery
### introduction
* 所有的 jQuery 函数都以 $ 开头，这个符号通常被称为美元符号（dollar sign operator）或 bling
* jQuery 通常选取并操作带有选择器（selector）的 HTML 标签。
* .html() 函数，能用其在标签里添加 HTML 标签和文本， 函数提供的内容将完全替换之前标签的内容。
* .text()，可以在不添加标签的前提下改变标签内的文本。 换句话说，这个函数不会评估传递给它的任何 HTML 标记，而是将其视为要替换现有内容的文本。
* css(): 能改变标签的 CSS
* prop(): 可以用其调整标签的属性
* appendTo(): 可以选取 HTML 标签并将其添加到另一个标签里面
* clone(): 复制标签
* parent(): 可以访问被选取标签的父标签
* children(): 可以访问被选取标签的子标签
* target:nth-child(n):  CSS 选择器可以选取指定 class 或者元素类型的的第 n 个标签，比如
```
    $(".target:nth-child(3)").addClass("animated bounce");
    选择所有具有类target的第三个元素增加动画
```
* .target:odd, .target:even