  module.exports = {
    title: '吹风的坚果',
    description: '',
    //base: './',  
    dest: 'build/.vuepress/dist',  
    host: 'localhost', 
    port: 8080,
    markdown: {
      lineNumbers: true
    },
   themeConfig: {
    docsDir: 'docs',
    sidebar: 'auto',
      sidebarDepth: 3, 
      repoLabel: 'GitHub',
      docsDir: 'docs',
      docsBranch: 'master',
      nav: require("./navigator.js"),
      sidebar: require("./sidebar.js"),
   },

    plugins: [
      ['@vuepress/back-to-top', true],
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
          message: '有新内容更新啦~',
          buttonText: '立即获取新内容，确定后稍后自动刷新'
        }
      }],
      ['@vuepress/medium-zoom', {
        selector: '.theme-default-content img'
      }],
      ['@vuepress/search', {
        searchMaxSuggestions: 10
      }],
      ['vuepress-plugin-code-copy', true],
      ['vuepress-plugin-baidu-tongji-analytics', {
        key: '63b757e8938717e95e7218e8e1341393'
      }],
      ['vuepress-plugin-baidu-autopush', true],
      [
        "md-enhance",
        {
          mermaid: true,
        },
      ],
    ]
  }
