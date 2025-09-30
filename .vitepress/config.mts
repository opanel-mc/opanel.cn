import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OPanel",
  description: "OPanel官方网站与文档",
  head: [
    ["link", { rel: "icon", href: "/static/favicon.png" }]
  ],
  themeConfig: {
    logo: "/static/logo.svg",

    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs/quick-start' },
      { text: '友链', link: '/links' },
      { text: '下载', link: 'https://github.com/opanel-mc/opanel/releases' },
      { text: '捐助', link: 'https://afdian.com/a/opanel' },
    ],

    sidebar: {
      "/docs/": {
        base: "/docs/",
        items: [
          {
            text: "快速开始",
            link: "quick-start"
          },
          {
            text: "配置文件",
            link: "configuration"
          },
          {
            text: "指令",
            link: "commands"
          },
          {
            text: "平台与版本支持",
            link: "versions"
          },
          {
            text: "开发组成员名单",
            link: "dev-group"
          },
          {
            text: "开发指南",
            base: "/docs/dev-guide/",
            items: [
              { text: "贡献指南", link: "contributing" },
              { text: "适配指南", link: "adaptation" },
            ]
          },
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opanel-mc/opanel' }
    ],

    footer: {
      copyright: "Copyright © 2025 OPanel Project",
      message: "Released under the MPL-2.0 License"
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '找不到相关内容',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
