# MCP 服务器配置

:::warning 注意

出于安全方面的考量，**MCP功能不对非HTTPS/localhost环境开放**。

如果在HTTP环境下使用MCP功能，明文传输可能导致密钥泄露，进而对服务器的安全造成威胁。

:::

## 准备工作

- 部署 OPanel，版本为`2.0.0-pre5`及以上（参见[快速开始](/docs/quick-start.md)文档）
- 安装 [Node.js](https://nodejs.org) 18+ 以及 [npm](https://npmjs.com)
- 可以调用MCP工具的AI智能体，如：Claude Code、OpenClaw（需配置mcporter）

## 开始部署

1. 在OPanel中打开“MCP”配置页面

![mcp-1](/static/docs/mcp-1.png)

2. 生成并复制MCP访问令牌

:::warning 注意

生成令牌的操作将覆盖之前原有的访问令牌。

:::

![mcp-2](/static/docs/mcp-2.png)
![mcp-3](/static/docs/mcp-3.png)

3. 启用MCP

![mcp-4](/static/docs/mcp-4.png)

4. 在AI智能体中配置OPanel的MCP服务器

在`--server`一项中填上服务器的IP地址，在`--token`一项中填上刚刚生成好的访问令牌

![mcp-5](/static/docs/mcp-5.png)

## 使用方法

目前OPanel MCP已经支持绝大部分OPanel面板中的操作，包括：服务器基本信息获取、存档管理、玩家管理、游戏规则修改、服务器后台控制、日志获取。

现在你可以使用自然语言让AI来辅助你管理服务器了！
