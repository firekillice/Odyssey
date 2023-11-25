## C# adanced

### framework
* C# ===编译器===> CIL(IL) ====JIT===>机器码(native code)
* ![image](./assets/c-sharp-framework.png) <br>
* 
## Garbage collection
* 空间使用，整理，空间内物品的生命周期管理问题
* Phase: mark and sweep algorithm,**tracing**
* c#: Generational collection(分代)，不是基于tri-color
* **STW collectors, foregraound gc ** vs **pauseless collectors, background/concurrent gc, default enabled, multi-thread**
* GCBurn, test tool
* interactive program 产生更多的内存使用
* **lifecircle**
* GC Root, DFS, reachable
* **mutator**

## reference
* [Garbage collection in C#](https://chodounsky.com/2017/05/03/garbage-collection-in-c-sharp/)


### IL 
* **基于栈的虚拟机**
* 例子(https://sharplab.io/)
```
using System;
public static class C {
    public static void M() {
        int a = 128;
        float b = 20.1f;
        int c = 30;
        int d = (int)(a + b + c);
    }
}
```
* 指令
```
ldarg：将参数加载到堆栈上。
ldloc：将本地变量加载到堆栈上。
stloc：将堆栈顶部的值存储到本地变量中。
ldc.i4：将整数常量加载到堆栈上。
ldc.r4：将单精度浮点数常量加载到堆栈上。
ldc.r8：将双精度浮点数常量加载到堆栈上。
ldc.i4.s: s表示目标数的是-127-127范围
```