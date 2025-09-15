import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OPanel",
  description: "OPanel官方网站与文档",
  themeConfig: {
    logo: "/static/logo.svg",

    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/docs' },
      { text: '下载', link: 'https://dist.opanel.cn' },
    ],

    sidebar: [
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opanel-mc/opanel' }
    ],

    footer: {
      copyright: "Copyright © 2025 OPanel Project",
      message: "Released under the MPL-2.0 License"
    }
  }
})
