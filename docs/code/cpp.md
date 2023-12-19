# CPP
* 出生轨迹 Basic CPL => BCPL => B => C => C++
* C++的4个次语言： C、 OC++、Template C++、STL，C++并不是一个带有一组守则的一体语言，而是由4个次语言组成的联邦语言，每个次语言都有自己的规约。

## c++11
* GCC 4.8.1是第一个全面支持c++11的gcc版本，也就是C++0草案的正式版
* auto类型推导，将原有的auto关键字赋予了新的含义；会在**编译期间**确定类型; 根据变量的初始值来推导出变量类型的，如果不初始化，变量的类型也就无法推导。
* decltype: 使用表达式推断出一个类型
* 返回类型后置（trailing-return-type，又称跟踪返回类型）语法，将 decltype 和 auto 结合起来完成返回值类型的推导
```
int& foo(int& i);
float foo(float& f);
template <typename T>
auto func(T& val) -> decltype(foo(val))
{
    return foo(val);
}
```
* 统一初始化（uniform initialization）
```
int x3 = {27};
int x3{27};
```
* 在C++11中可以取地址的、有名字的就是左值，反之，不能取地址的、没有名字的就是右值（将亡值或纯右值）
* 右值引用，下面的例子中，a+1是一个寄存器中，没有内存地址可以寻址
```
int getdata(int &&num)
{
    cout << num;
    num += 10;
    return num;
}
void main()
{
    int a = 5;
    cout << getdata(a + 1) << endl;
}
```
* 构造析构
```
移动构造

普通函数的问题： std::move 将左值强制转换为右值
模板中的问题: 完美转发, forward 
```
* 为了加强模板的使用，引入了using关键字，但是使用赋值的形式，来替换typedef
* 引入默认模板参数
```
template <typename T = int>  // error in C++98/03: default template arguments
void func()
{
    // ...
}
```
* for
```
for (declaration : expression){
    //循环体
}
---------------------------------------------
for (int num : {1, 2, 3, 4, 5}) {
        cout << num << " ";
    }
---------------------------------------------
  vector<char>myvector(arc, arc + 23);
    //for循环遍历 vector 容器
    for (auto ch : myvector) {
        cout << ch;
    }
---------------------------------------------
    char arc[] = "http://c.biancheng.net/cplus/11/";
    //for循环遍历普通数组
    for (char ch : arc) {
        cout << ch;
    }
```
* constexpr 常量表达式提示编译器在编译期间将值得出结果；这样做的目的就是，尽量多的完成可以在编译期间做的事情。
* long long 龙龙终于可以用了
* nullptr
* shared_ptr，共享模式；unique_ptr，独享模式； weak_ptr观察者模式
* emplace, emplace_back, emplace_front 对应的是  push_front, push, push_back

## 多线程
* 未定义的行为是C++中最黑暗的角落，比如某些多线程的访问结果
* 两种方式： 锁和原子操作
* 引入原子类型和线程类，将线程的操作对象化

## 理解
* auto的优化更多是为了弥补模板带来的冗繁
* 移动构造是为了解决构造的构造、析构，不像脚本语言的有引用技术和COW等
* 整体来看c++11的修改，重点解决了拷贝构造问题，函数的灵活性问题，模板的冗繁问题

## 深深的误解
* lvalue, rvalue，一直认为是左值、右值的意思，应该是最初的翻译者给误导了。 正解是，lvalue = locator value(“l-value” refers to memory location which identifies an object. 指向一个目标的地址);  r-value” refers to data value that is stored at some address in memory(比lvalue缺少了一层，直接就是某个地址)
## roadmap 
* c++ 98(经典版本) -> c++03 -> c++11(颠覆性的版本) -> c++14 -> c++17 -> c++20
* [feature-list-of-different-version](https://github.com/AnthonyCalandra/modern-cpp-features)