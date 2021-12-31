## html 



### 标签
* 标签与标签之间还有包含关系,form 与 input button, nav 与a
* ::before 和 ::after。 伪元素可以在所选元素之前或之后添加一些内容。
```
.heart::before {
  content: "";
  background-color: yellow;
  border-radius: 25%;
  position: absolute;
  height: 50px;
  width: 70px;
  top: -50px;
  left: 5px;
}
伪元素用来给 class 为 heart 的元素添加一个正方形
```


#### 表单
* 用于搜集不同类型的用户输入
* 包含表单元素(不同类型的 input 元素、复选框、单选按钮、提交按钮等)
* 


### css
* 直接添加
```
<h2 style="color: red;">CatPhotoApp</h2>
使用这
```
* 通过selector添加
* all HTML elements are essentially little rectangles.
* padding和margin： 四个方向，顺时针，从上而左,clockwise
#### 定义和使用变量
* --penguin-skin: gray; 
* background: var(--penguin-skin);
* background: var(--pengiun-skin, black); //black为变量出现问题的fallback，比如变量不被浏览器识别的时候
* 另一种fallback
```
  .red-box {
    background: red;
    background: var(--red-color);
  }
```
* 注意：变量定义的在css中的位置一定在使用的前面

### color 
* #ff00ff 
* #f0f
* rgb(255,0,255)
* rgba(255,0,255,0.1)
* blue,green 等
* background: hsl(0/*色相*/, 100%/*饱和度*/, 50%/*亮度*/)
* background: linear-gradient(35deg, #CCFFFF, #FFCCCC)
* background: repeating-linear-gradient(
      90deg,
      yellow 0px,
      blue 40px,
      green 40px,
      red 80px
    );
* background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );(斑马线)
* background: url("https://cdn-media-1.freecodecamp.org/imgr/MJAkxbh.png")

### size 
* px, 缩放页面时无法调整
* em, 继承父级元素的字体大小，代表倍数
* rem (root, em), 始终是基于根元素 <html> 的，也代表倍数
* transform: scale(2);   transform: skewX(-32deg)(左右旋转); skewY(32deg)(上下旋转), rotate(30deg)
* 视窗单位
```
vw：如 10vw 的意思是视窗宽度的 10%。
vh： 如 3vh 的意思是视窗高度的 3%。
vmin： 如 70vmin 的意思是视窗的高度和宽度中较小一个的 70%。
vmax： 如 100vmax 的意思是视窗的高度和宽度中较大一个的 100%。
```
* calc(100% - 8.8rem)

### layout
#### position
* relative : 当元素的定位设置为 relative 时，它允许你通过 CSS 指定该元素在当前文档流页面下的相对偏移量。 CSS 里控制各个方向偏移量的属性是 left、right、top 和 bottom。 它们代表从原来位置向远离该方向偏移指定的像素、百分比或者 em。 下面的例子展示了段落向上偏移 10px：
```
  position: relative;
  bottom: 10px;
  https://chinese.freecodecamp.org/learn/responsive-web-design/applied-visual-design/move-a-relatively-positioned-element-with-css-offsets
```
把元素的位置设置成相对，并不会改变该元素在布局中所占的位置，也不会对其它元素的位置产生影响。(因为它只是针对自己在正常文档流中的位置的偏移，是一种自身行为)
* absolute: 将元素从当前的文档流里面移除，周围的元素会忽略它。 绝对定位比较特殊的一点是元素的定位参照于最近的 positioned 祖先元素。 如果它的父元素没有添加定位规则（默认是 position: relative/absolute/fixed，即**找到最近含有定位规则的祖先元素**），浏览器会继续寻找直到默认的 body 标签。所以absolute的时候，四个方向的位置是相对于找到的祖先元素的位置
```
  #searchbar {
      position: absolute;
      top: 50px;
      right:50px;


  }
  section {
    position: relative;
  }
  https://chinese.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-its-parent-with-absolute-positioning
```
* fixed: 它是一种特殊的绝对（absolute）定位，将元素相对于浏览器窗口定位。 类似于绝对位置，它与 CSS 偏移属性一起使用，并且也会将元素从当前的文档流里面移除。fixed 和 absolute 的最明显的区别在于，前者定位的元素不会随着屏幕滚动而移动。
```
将导航栏固定在左上角，并且不随着浏览器滚动条滑动而变化
#navbar {
    position: fixed;
    top: 0;
    left: 0;
  }
  https://chinese.freecodecamp.org/learn/responsive-web-design/applied-visual-design/lock-an-element-to-the-browser-window-with-fixed-positioning
```
* float: 直接从文档流中**移除(相当于将根部剪短，不从属于了父节点，但是还是安静的呆在远处等待漂移的命运)**，就像在海洋球池中放球; 被float的元素仍然在文档流的位置，但是他们是自由身，能够自我漂移，而不是完全从文档流中跑到任何一个位置
```
#left {
      float: left;
      width: 50%;
    }
    #right {
      float:right;
      width: 40%;
    }
    https://www.freecodecamp.org/learn/responsive-web-design/applied-visual-design/push-elements-left-or-right-with-the-float-property
```
* z-index: 当一些元素在位置上重叠时（例如，使用 position: absolute | relative | fixed | sticky 时），在 HTML 里后出现的元素会默认显示在更早出现的元素的上面。 你可以使用 z-index 属性指定元素的堆叠次序。 z-index 的取值是整数，数值大的元素会叠放到数值小的元素上面。
```
<style>
  div {
    width: 60%;
    height: 200px;
    margin-top: 20px;
  }

  .first {
    background-color: red;
    position: absolute;

  }
  .second {
    background-color: blue;
    position: absolute;
    left: 40px;
    top: 50px;
    z-index: 1;
  }
</style>

<div class="first"></div>
<div class="second"></div>
https://chinese.freecodecamp.org/learn/responsive-web-design/applied-visual-design/change-the-position-of-overlapping-elements-with-the-z-index-property
```
* 使用 margin 属性将元素水平居中margin: auto;


### 动画
* animation-name: background-color;
* animation-duration: 500ms;
* animation-fill-mode: forwards;
* 示例
```
 button:hover {
    animation-name: background-color;
    animation-duration: 500ms;
    /* 只修改这一行下面的代码 */
    animation-fill-mode: forwards;
    animation-iteration-count: infinite; /*1-n, infinite*/
    animation-timing-function(定义了不同时间内的动画速度): ease-out;/* ease-out, ease-in, linear, cubic-bezier(0.25, 0.25, 0.75, 0.75)贝塞尔曲线 */
    /* 只修改这一行上面的代码 */
  }
  /*定义关键帧*/
  @keyframes background-color {
    100% {
      background-color: #4791d0;
      left: 0px;
      opacity: 0.1;
      width: 130px;
      height: 70px;
    }
  }
```
* transition:width 2s; (变化：宽度变化2秒)
```
div
{
  width:100px;    //初始化的值
  height:100px;
  background:blue;
  transition:width 2s;
  -moz-transition:width 2s; /* Firefox 4 */
  -webkit-transition:width 2s; /* Safari and Chrome */
  -o-transition:width 2s; /* Opera */
}
div:hover
{
  width:300px;  //鼠标悬浮应该的值
}


```
### 文档流(normal flow)
* 块级元素从上至下、 行内元素在每行中按从左至右的挨次排放元素,即为文档流。
* 块级元素（block）和内联元素（inline）
```
 block: p、h1、div、 ul、ol、li、 table、 form
 inline: input、 a、 img、 span
```

### color
* 三原色
* 二次色, 如果把两种原色相加，就可以产生二次色
* 三次色, 三次色是由原色和二次色相加产生的颜色
* 十二色色环: 
* 分裂补色搭配法: 选定主色之后，在色环上选择与它的补色相邻的两种颜色与之搭配
* 一种颜色做为主要颜色，然后使用其补色用来装点(如将文字背景色和文字颜色设置为互补色，这样文字会很难看清)\

### 解决的问题
* 图片居中，由于img标签默认是inline，所有需要转为block后就可以使用margin：auto居中
```
 margin: auto;
 display: block;
```
* flex: 自动将标记的元素转为block，并将所有的子item进行伸缩布局
* @media 媒体查询是选择性覆盖，并且在css中需要在所覆盖的css后面
* 


### 心得
* 写html的布局就像是垒积木
* 也极像在白纸上谋划天地
* 布局：必然涉及到对齐方式
* flex布局会自动将子元素转为block
* <code>的时候，需要注意换行符问题
* @media的时候，可以将fixed的div换位置
* fixed主要是应对滚动条问题
* margin-left margin-right border-left border-right
* 如果整个组件都需要能点击，则整个组件为<a></a>
* <img>默认显示所有的图片内容，除非使用width和height进行处理
* text-decoration: none;  需要注意：在添加装饰的标签里面去除
* 处理fixed的时候：可以使用relative，或者使用margin-top；如果使用relative，那么它的兄弟节点也需要relative