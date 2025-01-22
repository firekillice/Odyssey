## ASP.Net

### 关于WebHost
```
WebHost 在 ASP.NET Core 2.x 版本之前是一个独立的类，用于构建和运行 Web 应用程序主机。从 ASP.NET Core 3.0 版本开始，官方推荐使用通用的 Host 类，并通过扩展方法来配置 Web 主机，以提供一致的应用程序主机构建和配置体验。这种设计决策使得应用程序主机的构建和配置更加统一和简化。
```


### 设计思想
* context思想： 与pipiline思想配合使用，就是某个context中有一条漂亮的pipeline流过，想想cpu的pipeline，cpu都可以，凭什么普通业务不行
* 所有的值只有在某个上下文中才能凸显出含义



### build
* 将service加入
* 配置文件通过action进行修改