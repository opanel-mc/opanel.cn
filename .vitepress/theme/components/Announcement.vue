<template>
  <div class="announcement-container">
    <div class="announcement">
      <h2>OPanel 2.0 即将发布...</h2>
      <span class="announcement-date">预计将于5月1日发布</span>
      <div class="announcement-features">
        <p>插件管理 背包编辑 MCP 服务器重启</p>
        <p>命令快捷方式 定时任务 全新UI界面</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

.announcement-container {
  padding: 0 64px;
}

.announcement-container .announcement {
  position: relative;
  margin: 20px auto;
  max-width: 1152px;
  background-color: var(--opanel-announcement-bg);
  border-radius: 8px;
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

.announcement-container .announcement h2 {
  font-size: 12pt;
  font-weight: bold;
  z-index: 10;
}

.announcement-container .announcement .announcement-date {
  font-size: 10pt;
  z-index: 10;
}

.announcement-container .announcement .announcement-features {
  font-size: 18pt;
  font-weight: bold;
  line-height: 45px;
  position: absolute;
  right: 20%;
}

.announcement-container .announcement .announcement-features p {
  width: fit-content;
  color: transparent;
  background: linear-gradient(90deg, transparent 0%, var(--opanel-announcement-feat) 18%, var(--opanel-announcement-feat) 82%, transparent 100%);
  background-clip: text;
  -webkit-background-clip: text;
  white-space: nowrap;
  user-select: none;
}

.announcement-container .announcement .announcement-features p:nth-child(2) {
  margin-left: 70px;
}

@media screen and (max-width: 520px) {
  .announcement-container .announcement {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 15px 20px;
  }

  .announcement-container .announcement .announcement-features {
    top: 0;
    right: 0;
  }
}

</style>
