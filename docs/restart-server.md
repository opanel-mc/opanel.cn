# 服务器重启配置

:::warning 注意

在MCSM、Docker等平台内运行的服务端不建议使用OPanel的重启功能。

:::

## 准备工作

如果你的服务器是Linux系统，请确保服务器上已经安装`bash`：

```bash
sudo apt install bash
```

## 开始配置

1. 使用服务器重启功能前，你需要先找到服务器的启动命令，如：

![restart-server-1](/static/docs/restart-server-1.png)

本例中，服务器的启动命令即为`java -Xms8G -Xmx8G -jar paper-1.21.11.jar nogui`

:::info

服务器启动命令**仅包含启动命令本身**，不包含前面的`cd ~/Desktop/server`等其他命令。

:::

2. 进入面板，设置重启时使用的启动命令

![restart-server-2](/static/docs/restart-server-2.png)

![restart-server-3](/static/docs/restart-server-3.png)

3. 保存启动命令后即可使用OPanel的服务器重启功能

![restart-server-4](/static/docs/restart-server-4.png)

:::info

点击重启后，服务器将会关闭，并在10s后自动重启。

:::
