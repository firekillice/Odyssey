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