<script setup>
import PreviewImage from './PreviewImage.vue';
import VPButton from "vitepress/dist/client/theme-default/components/VPButton.vue";
</script>

<template>
  <div class="features-container">
    <section class="feature-multiplatform">
      <div class="platform-bg" aria-hidden="true">
        <img src="/assets/platforms/bukkit.png" class="logo logo-bukkit" alt=""/>
        <img src="/assets/platforms/spigot.png" class="logo logo-spigot" alt=""/>
        <img src="/assets/platforms/paper.svg" class="logo logo-paper" alt=""/>
        <img src="/assets/platforms/leaves.svg" class="logo logo-leaves" alt=""/>
        <img src="/assets/platforms/fabric.svg" class="logo logo-fabric" alt=""/>
        <img src="/assets/platforms/forge.svg" class="logo logo-forge" alt=""/>
        <img src="/assets/platforms/neoforged.png" class="logo logo-neoforge" alt=""/>
      </div>
      <div class="platform-content">
        <h2 class="platform-title">Multi-platform Support</h2>
        <p class="platform-subtitle">
          As a server-side plugin / mod, OPanel supports multiple Minecraft versions on several mainstream server platforms, including Bukkit, Spigot, Paper, Folia, Fabric, Forge and NeoForge.
        </p>
        <p>
          <a href="/en/docs/versions">
            Versions List
            <span class="vpi-arrow-right link-text-icon"></span>
          </a>
        </p>
      </div>
    </section>
    <section class="showcase feature-inventory">
      <div class="section-image">
        <PreviewImage dark="/assets/showcases/inventory-dark.png" light="/assets/showcases/inventory-light.png"/>
      </div>
      <div class="section-content">
        <h2 class="section-title"><span class="title-highlight">Inventory</span> Editor</h2>
        <p class="section-subtitle">Highly restored in-game visual effects and operation logic, with real-time inventory data updates</p>
      </div>
    </section>
    <section class="showcase feature-terminal">
      <div class="section-image">
        <PreviewImage dark="/assets/showcases/terminal-dark.png" light="/assets/showcases/terminal-light.png"/>
      </div>
      <div class="section-content">
        <h2 class="section-title">Server <span class="title-highlight">Terminal</span></h2>
        <p class="section-subtitle">Colorized terminal logs with Tab command completion, shortcuts, and history</p>
      </div>
    </section>
    <section class="showcase feature-mcp">
      <div class="section-image">
        <PreviewImage dark="/assets/showcases/mcp.png" light="/assets/showcases/mcp.png"/>
      </div>
      <div class="section-content">
        <h2 class="section-title"><span class="title-highlight">MCP</span> Support</h2>
        <p class="section-subtitle">Integrate with various AI agents through the MCP tools, such as OpenClaw and Claude Code</p>
        <p>
          <a href="/en/docs/mcp">
            Learn More
            <span class="vpi-arrow-right link-text-icon"></span>
          </a>
        </p>
      </div>
    </section>
    <section class="feature-openapi">
      <div class="openapi-card">
        <div class="api-list">
          <div class="api-entry"><span class="method get">GET</span><span class="api-path">/open-api/info</span></div>
          <div class="api-entry"><span class="method get">GET</span><span class="api-path">/open-api/monitor</span></div>
          <div class="api-entry"><span class="method get">GET</span><span class="api-path">/open-api/plugins</span></div>
          <div class="api-entry"><span class="method get">GET</span><span class="api-path">/open-api/players</span></div>
          <div class="api-entry"><span class="method get">GET</span><span class="api-path">/open-api/players/:uuid</span></div>
          <p class="api-desc">Server websites can easily display real-time data through OPanel's open API</p>
        </div>
        <div class="api-info">
          <h2 class="api-title">Extendable <span class="api-title-highlight">Open API</span></h2>
          <div class="server-stats">
            <div class="mc-header">
              <span class="mc-name">Example Server</span>
              <span class="mc-badge"><span class="mc-dot"></span>Online</span>
            </div>
            <div class="mc-ip">play.example.com</div>
            <div class="mc-footer">
              <div class="mc-stat">
                <span class="mc-stat-label">Online Players</span>
                <span class="mc-stat-val">12 / 20</span>
              </div>
              <div class="mc-stat">
                <span class="mc-stat-label">Version</span>
                <span class="mc-stat-val">Paper 26.1.2</span>
              </div>
              <div class="mc-stat">
                <span class="mc-stat-label">TPS</span>
                <span class="mc-stat-val">19.89</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="features-footer">
      <p class="footer-hint">Discover more...</p>
      <VPButton
        tag="a"
        href="/en/docs/quick-start"
        text="Get Started"/>
    </div>
  </div>
</template>

<style scoped>

.features-container {
  margin-top: 40px;
  padding: 0 64px;
}

.feature-multiplatform {
  position: relative;
  margin: 20px auto;
  max-width: 1152px;
  height: 360px;
  border-radius: 12px;
  overflow: hidden;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.platform-bg {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 56px;
  padding: 0 40px;
  pointer-events: none;
  user-select: none;
  mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 12%,
    #000 88%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent 0%,
    #000 12%,
    #000 88%,
    transparent 100%
  );
}

.platform-bg .logo {
  flex: 0 0 auto;
  width: 110px;
  height: 110px;
  object-fit: contain;
  filter: grayscale(30%);
  opacity: 0.15;
}

.dark .platform-bg .logo {
  opacity: 0.25;
}

.platform-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 24px;
  max-width: 760px;
}

a {
  text-decoration: none;
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

.platform-title {
  font-size: 32pt;
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
  border-top: none;
  padding-top: 0;
}

.platform-subtitle {
  margin: 18px auto 0;
  font-size: 12pt;
  line-height: 1.7;
  color: var(--vp-c-text-2);
}

.showcase {
  display: flex;
  align-items: center;
  gap: 56px;
  max-width: 1152px;
  margin: 150px auto;
  padding: 0 8px;
}

.feature-inventory {
  margin-top: 0;
}

.feature-terminal {
  flex-direction: row-reverse;
}

.feature-terminal .section-content {
  text-align: right;
}

.section-image {
  flex: 0 0 auto;
  width: 480px;
}

.section-image :deep(.preview-container) {
  margin: 0;
}

.section-image :deep(.preview-container img) {
  width: 100%;
  border-radius: 8px;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.section-content {
  flex: 1;
}

.section-title {
  font-size: 48pt;
  font-weight: 900;
  line-height: 1.05;
  margin: 0 0 20px;
  border-top: none;
  padding-top: 0;
  color: var(--vp-c-text-1);
}

.section-title .title-highlight {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-inventory .section-title .title-highlight, .feature-mcp .section-title .title-highlight {
  background-image: linear-gradient(90deg, var(--vp-c-bg) 0%, var(--opanel-theme-1) 50%, var(--opanel-theme-3) 100%);
}

.feature-terminal .section-title .title-highlight {
  background-image: linear-gradient(90deg, var(--opanel-theme-3) 0%, var(--opanel-theme-1) 50%, var(--vp-c-bg) 100%);
}

.section-subtitle {
  font-size: 12pt;
  line-height: 1.8;
  color: var(--vp-c-text-2);
  margin: 0;
}

.feature-openapi {
  max-width: 1152px;
  margin: 150px auto 80px;
  padding: 0 8px;
}

.openapi-card {
  position: relative;
  display: flex;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-alt);
  min-height: 320px;
}

.openapi-card::before {
  content: '{ ... }';
  position: absolute;
  top: -50px;
  left: -25px;
  font-size: 240px;
  font-weight: 900;
  white-space: nowrap;
  line-height: 1;
  color: var(--vp-c-text-1);
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
  z-index: 0;
}

.api-list {
  position: relative;
  z-index: 1;
  flex: 1;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.api-desc {
  margin-top: auto;
  margin-bottom: 0;
  font-size: 11pt;
  color: var(--vp-c-text-2);
  line-height: 1.6;
}

.api-entry {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 14px;
}

.method {
  font-weight: 700;
  margin-right: 4px;
}

.method.get    { color: #2fa94f; }
.method.post   { color: #3b82f6; }
.method.delete { color: #e5484d; }

.api-path {
  color: var(--vp-c-text-2);
}

.api-info {
  position: relative;
  z-index: 1;
  width: 380px;
  flex-shrink: 0;
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.api-title {
  font-size: 32pt;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 24px;
  border-top: none;
  padding-top: 0;
  color: var(--vp-c-text-1);
  text-align: right;
}

.api-title-highlight {
  background-image: linear-gradient(90deg, var(--opanel-theme-3), var(--opanel-theme-1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.server-stats {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-home-preview-border-color);
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mc-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.mc-name {
  font-size: 13pt;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.mc-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: #3fb950;
}

.mc-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #3fb950;
  flex-shrink: 0;
}

.mc-ip {
  font-family: 'Consolas', 'Monaco', monospace;
  font-size: 12px;
  color: var(--vp-c-text-2);
}

.mc-footer {
  display: flex;
  gap: 16px;
  padding-top: 8px;
  border-top: 1px solid var(--vp-home-preview-border-color);
}

.mc-stat {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.mc-stat-label {
  font-size: 10px;
  color: var(--vp-c-text-2);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mc-stat-val {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.features-footer {
  text-align: center;
  padding: 20px 0;
}

.features-footer a {
  text-decoration: none;
}

.footer-hint {
  font-size: 23pt;
  font-weight: bold;
  margin: 0 0 30px;
}

@media screen and (max-width: 768px) {
  .features-container {
    padding: 0 24px;
  }

  /* multiplatform */
  .feature-multiplatform {
    height: 300px;
  }

  .platform-title {
    font-size: 22pt;
  }

  .platform-subtitle {
    font-size: 10.5pt;
  }

  .platform-bg {
    gap: 32px;
  }

  .platform-bg .logo {
    width: 80px;
    height: 80px;
  }

  .showcase {
    flex-direction: column;
    gap: 20px;
    margin: 80px auto;
  }

  .feature-inventory {
    margin-top: 40px;
  }

  .showcase .section-content {
    order: -1;
    text-align: center;
  }

  .feature-terminal .section-content {
    text-align: center;
  }

  .section-image {
    width: 100%;
    order: 0;
  }

  .section-title {
    font-size: 30pt;
  }

  .feature-inventory .section-title .title-highlight,
  .feature-terminal .section-title .title-highlight {
    background-image: linear-gradient(90deg, var(--opanel-theme-1), var(--opanel-theme-3));
  }

  /* openapi */
  .feature-openapi {
    margin: 80px auto 20px;
  }

  .openapi-card {
    flex-direction: column-reverse;
  }

  .openapi-card::before {
    font-size: 160px;
    top: auto;
    bottom: -10px;
    left: -10px;
  }

  .api-info {
    width: 100%;
  }

  .api-title {
    font-size: 24pt;
    text-align: left;
  }

  /* footer */
  .footer-hint {
    font-size: 16pt;
  }
}

@media screen and (max-width: 520px) {
  .feature-multiplatform {
    height: 260px;
  }

  .platform-title {
    font-size: 18pt;
  }

  .platform-bg {
    gap: 20px;
  }

  .platform-bg .logo {
    width: 56px;
    height: 56px;
  }

  .showcase {
    gap: 14px;
    margin: 60px auto;
  }

  .section-title {
    font-size: 24pt;
  }

  .footer-hint {
    font-size: 14pt;
  }
}

</style>
