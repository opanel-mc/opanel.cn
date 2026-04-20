---
layout: home

hero:
  name: "OPanel"
  text: "服务器管理？\n一个插件就够了"
  tagline: 易用、美观的新一代Minecraft服务器管理面板
  image:
    src: /static/logo.svg
    alt: opanel-logo
  actions:
    - theme: brand
      text: 快速开始
      link: /docs/quick-start
    - theme: alt
      text: 下载
      link: https://github.com/opanel-mc/opanel/releases
    - theme: alt
      text: 捐助
      link: https://nocp.space/donate

features:
  - title: 多平台
    details: 作为服务端插件 / 模组，OPanel支持多个主流服务端平台的多个Minecraft版本，包括Bukkit、Fabric、Forge和NeoForge。
    icon: 🌏
    link: /docs/versions
    linkText: 版本列表
  - title: 功能丰富
    details: 与服务端深度融合，支持功能包括存档管理、玩家管理、游戏规则编辑、后台终端、日志管理等等。
    icon: 🛠️
  - title: 社区活跃
    details: 项目组人员长期活跃，用户可以在Github与QQ群中提问或反馈，项目开发组将尽力解答和解决问题。
    icon: 🤗
    link: https://qm.qq.com/q/1t1VHv1eHa
    linkText: 加入QQ群
---

<script setup>
import { useData } from "vitepress";

const { isDark } = useData();
</script>

<ClientOnly>

<div class="preview-container">
  <img v-if="isDark" src="/static/preview-dark.png" alt="preview-image"/>
  <img v-else src="/static/preview-light.png" alt="preview-image"/>
</div>

</ClientOnly>
