## Ubuntu


### apt-get source view
* [软件源服务器查看](https://launchpad.net/ubuntu/+archivemirrors)
* 自己做镜像源的话，只要执行 apt-miiror下载下来，大概150G左右，然后挂个http服务器就可以用了
* deb指明二进制包的位置，deb-src则是源码包,每个档案可以有deb或者deb-src，或者兼而有之，但是两者必须分开声明
* sources.list是debian系统用来指定软件源的文件，它的基本格式为：
  `deb uri distribution [component1] [component2] […]`
  * 组件的类型
    ```
    标准的debian组件包括：main、contrib、non-free、non-us。

    main: Debian 里最基本及主要且符合自由软件规范的软件 ( packages )。
    contrib: 软件本身免费，但依赖的软件包不免费。
    non-free: 非自由软件
    non-us: 非美国地区，可能有加密、专利等

    而ubuntu的组件与之不同：main, restricted, universe, multiverse.

    main： ubuntu支持的免费软件包
    restricted： 不免费，但是正规支持的
    universe：免费，但不是正规支持的
    multiverse：不免费，不支持
    ```