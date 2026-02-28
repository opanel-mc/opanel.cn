# MCP Server Configuration

:::warning Important

For security reasons, **MCP is not available in non-HTTPS/non-localhost environments**.

If you use MCP over HTTP, plaintext transmission may leak keys and create security risks for your server.

:::

## Prerequisites

- Deploy OPanel version `2.0.0-pre5` or later (see the doc [Quick Start](/en/docs/quick-start.md))
- Install [Node.js](https://nodejs.org) 18+ and [npm](https://npmjs.com)
- An AI agent that can call MCP tools, such as Claude Code or OpenClaw (mcporter configuration required)

## Deploy

1. Open the "MCP" configuration page in OPanel

![mcp-1](/static/docs/mcp-1.png)

2. Generate and copy the MCP access token

:::warning Important

Generating a new token will overwrite the existing access token.

:::

![mcp-2](/static/docs/mcp-2.png)
![mcp-3](/static/docs/mcp-3.png)

3. Enable MCP

![mcp-4](/static/docs/mcp-4.png)

4. Configure OPanel's MCP server in your AI agent

Fill in your server IP address for `--server`, and the newly generated access token for `--token`.

![mcp-5](/static/docs/mcp-5.png)

## Usage

OPanel MCP currently supports most operations available in the OPanel panel, including basic server information retrieval, archive management, player management, game rule changes, server console control, and log retrieval.

You can now use natural language to let AI assist with server management!
