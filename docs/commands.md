# 指令

OPanel在游戏内注册了`/opanel`指令，指令格式如下：

```
/opanel [about|status|start|stop]
```

## `/opanel about`

输入该指令，打印OPanel的关于信息，包括OPanel版本、官网、源码仓库等等。

```
===========================================
 OPanel - A Minecraft server management panel

Version: 1.0.0
Author: NriotHrreion
Website: https://opanel.cn
Source Code: https://github.com/opanel-mc/opanel
License: MPL-2.0
===========================================
```

## `/opanel status`

输入该指令，打印OPanel当前状态。

```
OPanel Status
Version: 1.0.0
Status: Running
Port: 3000
Jetty Version: 11.0.15
```

## `/opanel start`

该指令用于启动OPanel网页面板。

:::info

网页面板在服务器启动时会自动启动，无需手动输入该指令。

:::

## `/opanel stop`

该指令用于关闭OPanel网页面板。
