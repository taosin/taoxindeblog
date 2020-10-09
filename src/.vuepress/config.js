module.exports = {
  title: "码途",
  description: "Stay Hungry, Stay Foolish!",
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
  ],
  theme: "reco",
  themeConfig: {
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      { text: "时光机", link: "/timeline/", icon: "reco-date" },
      { text: "关于", link: "/about/", icon: "reco-other" }, 
      {
        text: "联系",
        icon: "reco-message",
        items: [
          { text: "Github", icon: "reco-message", link: "https://github.com/taosin" },
          { text: "简书", icon: "reco-jianshu", link: "https://www.jianshu.com/u/39ca4625960a" },
          { text: "思否", icon: "reco-sf", link: "https://segmentfault.com/u/coderhusbandman" },
          { text: "知乎", icon: "reco-zhihu", link: "https://www.zhihu.com/people/iamtaoxin" },
          { text: "邮箱", icon: "reco-mail", link: "http://taoxin167@gmail.com" },
        ],
      },
    ],
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
    },
    authorAvatar: "http://images.iamtaoxin.com/IMG_1096.PNG",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    subSidebar: "auto",
    sidebarDepth: 100000,
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "码徒",
    // 项目开始时间
    startYear: "2016",
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [],
    vssueConfig: {
      platform: "github",
      owner: "OWNER_OF_REPO",
      repo: "NAME_OF_REPO",
      clientId: "YOUR_CLIENT_ID",
      clientSecret: "YOUR_CLIENT_SECRET",
    },
  },
};
