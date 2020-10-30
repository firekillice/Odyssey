# JavaScript
## 异步
* await 只能出现在 async 函数
* async 告诉程序这是一个异步 
* async 函数会返回一个Promise 对象，那么当 async 函数返回一个值时，Promise 的 resolve 方法会负责传递这个值
* 三者是相辅相成的
```
function delay(argv1, argv2, argv3, argv4) {   
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
        resolve([argv1, argv2, argv3, argv4]);
        }, 1000);
    });
    }
}

delay(arr, first, second, pivotIndex).then(
    function(v) {
        argv1 = v[0];
        argv2 = v[1];
        argv3 = v[2];
        argv4 = v[3];
    }
)
```

## module
* import & module 
```
<script type="module">
  import {addTextToBody} from './utils.js';
  import {foo} from '/utils/bar.js';
</script>
------------------------------------------------------------------------------------------------------------------------------
// utils.js
export function addTextToBody(text) {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
}
------------------------------------------------------------------------------------------------------------------------------
//math.js
let add=(x,y)=>{
    return x+y;
}
let sub=(x,y)=>{
    return x-y;
}

module.exports={
    add:add,
    sub:sub
};
------------------------------------------------------------------------------------------------------------------------------
//调用函数
function World() {
  return "World";
}
function Hello(request, reply) {
  return reply("Hello " + World());
}
module.exports = {
    Hello,
}

```
## class 
* 构造函数模式用于定义实例属性，原型模式则用于定义方法和共享的属性。这种混合模式不仅支持向构造函数传入参数，还最大限度地节约了内存，可谓是集两模式之长。推荐第四种混合方式创建类。
#### 工厂模式
```
function person(name,){
    var obj = {};
    obj.name = name;
    obj.do = function(){
        console.log(this.name)
    };
    return obj;
}
function dog(name){
    var obj = {};
    obj.name = name;
    obj.do = function(){
	console.log('旺旺~~')
    };
    return obj;
}
 
var zhouyu = person('周瑜');
var dog = dog('dog');
zhouyu.do();  // 周瑜
dog.do();     // 旺旺~~
console.log(zhouyu.__proto__.constructor);   // ƒ Object() { [native code] }
console.log(dog.__proto__.constructor); 
```
#### 构造函数模式
```
function Person(name){
    this.name = name;
    this.do = function(){
    	console.log(this.name)
    };
}
function Dog(name){
    this.name = name;
    this.do = function(){
	console.log('旺旺~~')
    };
}
var zhouyu = new Person('周瑜');  
var dog = new Dog('Dog');// 使用new,就代表把Person当作构造函数,并把生成的实例传给Person的this;不使用new,就把Person当作一个普通函数,这是和工厂方式区别的地方
zhouyu.do();  // 周瑜
dog.do();     // 旺旺~~
console.log(zhouyu);  // Person {name: "周瑜", do: ƒ}
console.log(dog);     // Dog 
```
#### 原型模式
```
function Person(){}
Person.prototype.name = '周瑜';
Person.prototype.do = function(){
    console.log(this.name);
};
var zhouyu = new Person();
zhouyu.do(); // 周瑜
console.dir(Person); // 输出Person
console.dir(Person.prototype == zhouyu.__proto__); 
```
#### 组合使用构造函数模式和原型模式
```
function Person(name,job){
    this.name =name;
    this.job = job;
}
Person.prototype = {
    constructor:Person, //指定构造器为Person
    do: function(){
        console.log(this.name);
    }
}
var zhouyu = new Person('周瑜','军师');
zhouyu.do();
console.log(zhouyu);
```
## script
#### deferred
* Inline scripts同样是deferred
* 显式的defer
```
<script defer src="testing.js"></script>

```
* 优先级: 没有defer的文件引入 > inline > defer的文件引入

#### key word 
* let 是声明块级作用域的关键字，是更加限制的var(作用域为函数)

## 理解
* 对于浏览器方式<scritp><script/>的引入js脚本，所有的脚本将进入一个平行的世界，最上层的变量是全局可见的，这点与nodejs的使用不同