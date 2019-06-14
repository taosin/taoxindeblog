module.exports = {
    // 网站 Title
    title: '风中的Nix_____',
  
    // 网站描述
    description: 'Nix_____- A Web Developer',
  
    // 网站语言
    locales: {
      '/': {
        lang: 'zh-CN',
      },
    },
  
    // 使用的主题
    theme: 'meteorlxy',
  
    // 主题配置
    themeConfig: {
      // 主题语言，参考下方 [主题语言] 章节
      lang: {
        home: '首页',
        posts: '文章',
        category: '分类',
        categories: '分类',
        allCategories: '全部',
        tag: '标签',
        tags: '标签',
        createdAt: '发布时间',
        updatedAt: '最后修改',
        prevPost: '上一篇',
        nextPost: '下一篇',
      },
  
      // 个人信息（没有或不想设置的，删掉对应字段即可）
      personalInfo: {
        // 昵称
        nickname: 'Nix_____',
  
        // 个人简介
        description: 'Stay Hungry<br/>Stay Foolish',
  
        // 电子邮箱
        email: 'taoxin167@gmail.com',
  
        // 所在地
        location: 'ShangHai City, China',
  
        // 组织
        // organization: 'Xi\'an Jiao Tong University',
  
        // 头像
        // 设置为外部链接
        avatar: 'https://www.meteorlxy.cn/assets/img/avatar.jpg',
        // 或者放置在 .vuepress/public 文件夹，例如 .vuepress/public/img/avatar.jpg
        // avatar: '/img/avatar.jpg',
        
  
        // 社交平台帐号信息
        sns: {
          // Github 帐号和链接
          github: {
            account: 'meteorlxy',
            link: 'https://github.com/taosin',
          }
        },
      },
  
      // 上方 header 的相关设置
      header: {
        // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
        background: {
          // 使用图片的 URL，如果设置了图片 URL，则不会生成随机变化的图案，下面的 useGeo 将失效
        //   url: '/assets/img/bg.jpg',
  
          // 使用随机变化的图案，如果设置为 false，且没有设置图片 URL，将显示为空白背景
          useGeo: true,
        },
  
        // 是否在 header 显示标题
        showTitle: true,
      },
  
      // 是否显示文章的最近更新时间
      lastUpdated: true,
  
      // 顶部导航栏内容
      nav: [
        { text: '首页', link: '/', exact: true },
        { text: '博文', link: '/posts/', exact: false },
        { text: '关于', link: '/about/', exact: false },
        { text: 'Github', link: 'https://github.com/taosin', exact: false },
      ],
  
      // 评论配置，参考下方 [页面评论] 章节
      comments: {
        owner: 'meteorlxy',
        repo: 'vuepress-theme-meteorlxy',
        clientId: 'MY_CLIENT_ID',
        clientSecret: 'MY_CLIENT_SECRET',
      },
  
      // 分页配置
      pagination: {
        perPage: 10,
      },
  
      // 默认页面（可选，默认全为 true）
      defaultPages: {
        // 是否允许主题自动添加 Home 页面 (url: /)
        home: true,
        // 是否允许主题自动添加 Posts 页面 (url: /posts/)
        posts: true,
      },
    },
  }