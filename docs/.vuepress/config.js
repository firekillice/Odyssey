  const readingConfig = require('../reading')
  const cacheConfig = require('../cache')
  const dbConfig = require('../db')
  const distConfig = require('../distribution')
  const insightConfig = require('../insight')
  const codeConfig = require('../code')
  const structConfig = require('../struct')
  const stgConfig = require('../storage')
  const osConfig = require('../os')
  const proConfig = require('../protocol')
  const nwConfig = require('../network')
  const ucConfig = require('../unclassified')
  const algConfig = require('../algorithm')
  const designConfig = require('../design')
  const webConfig = require('../web')
  const cncfConfig = require('../cncf')


  module.exports = {
    title: 'Hungry&Eating',
    description: '',
    base: '/Odyssey/',  
    dest: 'build/.vuepress/dist',  // 目录配置在外,纯粹是有代码洁癖和强迫症，并不能规避开发模式下同时构建不报错的问题
    host: 'localhost', // dev 的域名
    port: 8080,
    markdown: {
      lineNumbers: true
    },
   // theme: 'vue',
   themeConfig: {
    docsDir: 'docs',
    sidebar: 'auto',
      sidebarDepth: 3, // 嵌套标题侧边栏提取深度，最大为 2，会提取到 h3
      lastUpdated: '上次更新: ', // string | boolean
      // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
      repo: 'https://github.com/firekillice/Odyssey',
      // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
      // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
      repoLabel: 'GitHub',
      // 以下为可选的编辑链接选项
      // 假如你的文档仓库和项目本身不在一个仓库：
      // docsRepo: 'vuejs/vuepress',
      // 假如文档不是放在仓库的根目录下：
      docsDir: 'docs',
      // 假如文档放在一个特定的分支下：
      docsBranch: 'master',
      // 默认是 false, 设置为 true 来启用
      editLinks: true,
      // 默认为 "Edit this page"
      editLinkText: '帮助我们改善此页面！',
      // 主题级别的配置
      serviceWorker: {
        updatePopup: true // Boolean | Object, 默认值是 undefined.
        // 如果设置为 true, 默认的文本配置将是:
        // updatePopup: {
        //    message: "New content is available.",
        //    buttonText: "Refresh"
        // }
      },

      nav: [
      { text: '阅读', link: '/reading/' },
      {
        text: '学习',
        ariaLabel: '计算机综合',

        items: [

        ///////////////////////////////////////////////////
        { text: '缓存', link: '/cache/' },
        { text: 'coding', link: '/code/' },
        { text: '数据结构', link: '/struct/' },
        { text: '算法', link: '/algorithm/' },
        { text: '数据库', link: '/db/' },
        { text: '存储', link: '/storage/' },
        { text: '操作系统', link: '/os/' },
        { text: '协议', link: '/protocol/' },
        { text: '网络', link: '/network/' },
        { text: '设计', link: '/design/' },
        { text: '分布式', link: '/distribution/' },
        { text: 'www', link: '/web/' },
        { text: '云原生', link: '/cncf/' },
        ///////////////////////////////////////////////////
        
        { text: '理解', link: '/insight/' },
        { text: '未分类', link: '/unclassified/' }
        ]
      },
      ],

      sidebar: {
        '/reading/': readingConfig(),

        ///////////////////////////////////////////////////
        '/cache/': cacheConfig(),
        '/code/': codeConfig(),
        '/struct/': structConfig(),
        '/algrithm/': algConfig(),
        '/db/': dbConfig(),
        '/storage/': stgConfig(),
        '/os/': osConfig(),
        '/protocol/': proConfig(),
        '/network/': nwConfig(),
        '/design/': designConfig(),
        '/distribution/': distConfig(),
        '/web/': webConfig(),
        '/algorithm/': algConfig(),
        '/cncf/': cncfConfig(),
        ///////////////////////////////////////////////////

        '/insight/': insightConfig(),
        '/unclassified/': ucConfig(),
      }
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
