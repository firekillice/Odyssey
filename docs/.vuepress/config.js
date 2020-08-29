module.exports = {
  title: 'Mrcode 笔记本',
  description: '用来记录工作和学习过程中的笔记，汇总成册方便查阅，类容涵盖各类技术，如：Java、Git、ElasticSearch、MyCat、设计模式、Gradle、Vue - mrcode.cn',
  base: '/Odyssey/',  
  dest: 'build/.vuepress/dist',  // 目录配置在外,纯粹是有代码洁癖和强迫症，并不能规避开发模式下同时构建不报错的问题
  host: 'localhost', // dev 的域名
  port: 8080,
  markdown: {
    lineNumbers: true
  },
  }
