## Vue
### introduction
* 


### Usage
* 一个Vue应用与一个DOM通过selector绑定

### directive 
#### 指令
* 指令是带有 v- 前缀的特殊属性
* 指令 attribute 的值预期是单个 JavaScript 表达式(v-for除外)
#### list
* 取值: {{}}，出现即为需要调用js的解释器计算
* v-html: 绑定子标签的值
* v-bind: attr绑定，数组绑定，{}绑定三种形式
* v-model: 实现表单元素和数据的双向绑定，实际是个语法糖，包括两部:
```
通过v-bind绑定一个value属性
通过v-on指令给当前元素绑定input事件
```
* v-on
* component
```
命名问题： 
1. HTML 属性是不区分大小写
2. html 中使用kebab-case（短横线）, 在组件中使用camelCased
```
#### 自定义指令
* bind: 只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个在绑定时执行一次的初始化动作。
* inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。
* update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新（详细的钩子函数参数见下）。
* componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。
* unbind: 只调用一次， 指令与元素解绑时调用。

#### 缩写
* v-bind:href -> :href
* v-on:click -> @click

### 心得
* v-html作为属性使用