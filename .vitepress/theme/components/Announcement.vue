<template>
  <div class="announcement-container">
    <div class="announcement">
      <h2>OPanel 2.2 即将发布</h2>
      <!-- <a href="https://github.com/opanel-mc/opanel/releases/tag/2.1.0" target="_blank">
        了解更多<span class="vpi-arrow-right link-text-icon"></span>
      </a> -->
      <div class="announcement-features">
        <p>监控页面 定时任务脚本</p>
        <p>末影箱编辑 玩家日活</p>
      </div>
    </div>
    <div class="notice">
      <p>
        <b>OPanel将在下一个正式版取消对CraftBukkit与Spigot的支持</b><br>
        原Bukkit端适配全面迁移至Paper端
      </p>
    </div>
  </div>
</template>

<style scoped>

a {
  font-size: 10pt;
  text-underline-offset: 4px;
  z-index: 10;
}

a:hover {
  text-decoration: underline;
}

a .link-text-icon {
  display: inline-block;
  width: 14px;
  height: 14px;
  margin-left: 2px;
  vertical-align: middle;
}

.announcement-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.announcement-container > * {
  position: relative;
  width: 100%;
  border-radius: 8px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.announcement-container .announcement {
  background-color: var(--opanel-announcement-bg);
}

.announcement-container .announcement h2 {
  font-size: 12pt;
  font-weight: bold;
  z-index: 10;
}

.announcement-container .announcement .announcement-features {
  font-size: 18pt;
  font-weight: bold;
  line-height: 45px;
  position: absolute;
  right: 5%;
}

.announcement-container .announcement .announcement-features p {
  width: fit-content;
  color: transparent;
  background: linear-gradient(90deg, transparent 0%, var(--opanel-announcement-feat) 14%, var(--opanel-announcement-feat) 86%, transparent 100%);
  background-clip: text;
  -webkit-background-clip: text;
  white-space: nowrap;
  user-select: none;
}

.announcement-container .announcement .announcement-features p:nth-child(2) {
  margin-left: 50px;
}

@media screen and (max-width: 520px) {
  .announcement-container .announcement {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 15px 20px;
  }

  .announcement-container .announcement h2 {
    font-size: 10pt;
  }

  .announcement-container .announcement .announcement-features {
    display: none;
  }
}

.announcement-container .notice {
  background-color: var(--vp-c-warning-soft);
  font-size: 10pt;
}

</style>
