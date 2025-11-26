---
layout: home

hero:
  name: "OPanel"
  text: "One plugin,\nTotal control."
  tagline: A user-friendly and visually appealing next-generation Minecraft server management panel
  image:
    src: /static/logo.svg
    alt: opanel-logo
  actions:
    - theme: brand
      text: Quick Start
      link: /en/docs/quick-start
    - theme: alt
      text: Download
      link: https://dist.opanel.cn
    - theme: alt
      text: Donate
      link: https://nocp.space/donate

features:
  - title: Multi-platform
    details: As a server-side plugin / mod, OPanel supports multiple Minecraft versions on several mainstream server platforms, including Bukkit, Spigot, Paper, Folia, Fabric, Forge and Neoforge.
    icon: 🌏
    link: /en/docs/versions
    linkText: Versions List
  - title: Feature-rich
    details: Deeply integrated with the server, supporting features include save manager, player manager, gamerules editing, terminal, log manager and more.
    icon: 🛠️
  - title: Active Community
    details: The project team members are active in the community. Just feel free to ask questions or give feedback on GitHub or QQ groups, and the dev team will answer and resolve the issues.
    icon: 🤗
    link: https://qm.qq.com/q/1t1VHv1eHa
    linkText: Join the QQ group
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
