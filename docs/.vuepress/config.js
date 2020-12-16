module.exports = {
  base: '/<REPO>/',
  title: 'Kite hsd的博客',
  description: '专注于记录技术点滴',
  themeConfig: {
    logo: '/img/DTM.jpg',
    sidebarDepth: 3,
    displayAllHeaders: true,
    smoothScroll: true,
    nav: [
      { text: 'Vue', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'JS', link: '/js/' },
      { text: 'CSS', link: '/css/' },
      { text: 'GIT', link: '/git/' },
      { text: '其他', link: '/other/' },
      // { text: 'Github', link: 'https://github.com/huangsenda0317' }
    ],
    sidebar: {
      '/vue/': ['', 'communication', 'vue-style-cover', 'vue3', 'vue-all'],
      '/react/': ['', 'react'],
      '/js/': [''],
      '/git/': [''],
      '/css/': ['', 'scroll'],
      '/other/': [
        '',
        'prettier',
        'mock',
        'stylelint',
        'nginx',
        'protocol',
        'ci',
        'dotenv'
      ]
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    '@vssue/vuepress-plugin-vssue': {
      locale: 'zh',
      platform: 'github',
      owner: 'Kite hsd',
      repo: 'vuepress-blog',
      clientId: 'e2c6e1286a945e9a232c',
      clientSecret: '6b55f148e3d92989d70b6b3cc6faebdecab6ba6a'
    }
  }
}
