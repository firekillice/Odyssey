# 语言的交叉
## 交叉调用
### cgo
* C语言部分和golang部分是分开编译的
* 在调用的时候使用切换栈的方式进行条用
```
Go的代码执行环境就是goroutine以及Go的runtime，而C的执行环境需要一个不使用分段的栈，并且执行C代码的goroutine需要暂时地脱离调度器的管理。要达到这些要求，运行时提供的支持就是切换栈，以及runtime.entersyscall。

在Go中调用C函数时，runtime.cgocall中调用entersyscall脱离调度器管理。runtime.asmcgocall切换到m的g0栈，于是得到C的运行环境。

在C中调用Go函数时，crosscall2解决gcc编译到6c编译之间的调用协议问题。cgocallback切换回goroutine栈。runtime.cgocallbackg中调用exitsyscall恢复Go的运行环境。
```
### php extension
* dlopen就是普通的C的加载动态链接库的方式
* 

### python C extension
* https://thomasnyberg.com/what_are_extension_modules.html
* dlopen的方式实现的

## 脚本语言底层的共性
* Python: PyObject 定义每一个对象的
* PHP: _zval_struct php所有变量都会以zval结构体的形式实现

## 解释型 vs 编译型
* 解释性语言是指需要一个解释器把代码解释给CPU
* 编译型：直接交给CPU可执行的机器代码