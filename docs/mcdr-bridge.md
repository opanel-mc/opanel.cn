# 连接到MCDR

如果你正在使用MCDR来管理和启动你的服务器，并且希望通过OPanel来执行MCDR相关的操作，可以使用OPanel提供的MCDR插件`opanel_mcdr_bridge`进行连接，以下是配置方法。

## 准备工作

- 在使用MCDR管理的服务器上部署 OPanel，版本为`2.0.1`及以上（参见[快速开始](/docs/quick-start)文档）

## 开始部署

1. 使用MCDR指令快速安装`opanel_mcdr_bridge`插件

```
!!MCDR plugin install opanel_mcdr_bridge
```

2. 重启服务器

```
!!MCDR server restart
```

3. 登录OPanel面板，开始使用

:::warning 注意

默认配置下，**不要开放`25576`端口**，否则可能对服务器造成安全威胁。

:::

![mcdr-bridge-1](/static/docs/mcdr-bridge-1.png)

## 进阶配置

OPanel与MCDR通信的原理是：`opanel_mcdr_bridge`插件在服务器回环地址的`25576`端口上开放一个Socket服务，OPanel检测到MCDR环境后主动连接到该端口。

由于这个Socket服务没有做任何鉴权，因此建议**不要开放这个端口**，仅供内部连接使用。如果需要修改端口，可以参考下面的方法。

### 端口修改

1. 打开MCDR目录下的`config/opanel_mcdr_bridge/config.json`

```json
{
  "socket_host": "127.0.0.1", // Socket服务绑定的主机，默认为回环地址127.0.0.1
  "socket_port": 25576 // Socket服务绑定的端口
}
```

2. 修改`socket_port`为你的新端口，保存这个配置文件并重载`opanel_mcdr_bridge`

```
!!MCDR plugin reload opanel_mcdr_bridge
```

:::warning 注意

不建议修改`socket_host`，否则这个Socket服务可能会暴露在公网，造成安全威胁。

:::

3. 打开OPanel的[配置文件](/docs/configuration)，并将`mcdrSocketPort`一项修改为你刚刚设置的新端口

4. 重启服务器

```
!!MCDR server restart
```
