## we mini 
### introduction 
### usage
* [引入vantUI的步骤](https://juejin.cn/post/6968994388189921311)
* [vantUI文档](https://youzan.github.io/vant-weapp/#/home)

### reference
* [weui使用示例](https://wechat-miniprogram.github.io/weui/docs/quickstart.html#%E4%BD%BF%E7%94%A8%E4%B9%8B%E5%89%8D)
* [weui库](https://github.com/wechat-miniprogram/weui-miniprogram)
* [vantUI](https://youzan.github.io/vant-weapp/#/icon)
* [iconfont](https://www.iconfont.cn/manage/index)

### 目录介绍
* node_modules 是npm的安装目录
* miniprogram_npm是npm构建后生成的**小程序使用的组件目录**
* "mp-photo-album": "mp-photo-album/src/index"，这样写默认就是读取miniprogram_npm目录下的组件

### 问题
* package.json会在npm init后出现; node_modules会在npm i @vant/weapp -S --production执行后出现；miniprogram_npm会在【微信开发工具=>工具=>构建npm】后出现
* 编辑器出现的奇怪的npm问题，可以通过删除miniprogram_npm重建，然后重启编辑器来解决
* {{内部只能进行有限种的运算，不支持调用data中的函数}}