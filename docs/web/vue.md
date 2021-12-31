## Vue
### introduction
* 


### Usage
* 一个Vue应用与一个DOM通过selector绑定

### directive 
#### 指令
* 指令是带有 v- 前缀的特殊属性
#### list
* 取值: {{}}，出现即为需要调用js的解释器计算
* v-html: 绑定子标签的值
* v-bind: 绑定属性的值
* v-model: 实现表单元素和数据的双向绑定，实际是个语法糖，包括两部:
```
通过v-bind绑定一个value属性
通过v-on指令给当前元素绑定input事件
```
* v-on

### 心得
* v-html作为属性使用