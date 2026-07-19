# 配置文件

OPanel的配置文件用于管理服务器面板全局的一些设置。

## 文件位置

配置文件的位置因不同服务端而不同，可以参考下面的列表来查找该文件：

- Paper系服务端：`/plugins/OPanel/config.yml`
- Forge系服务端：`/config/opanel-common.toml`
- Fabric服务端：`/config/opanel.json` **(修改配置时一定要先关闭Fabric服务器)**

## 配置选项

|键名|类型|介绍|默认值|必填|
|---|:---:|---|:---:|:---:|
|`accessKey`|`string`|面板访问密钥的哈希值||√（自动生成）|
|`salt`|`string`|生成token时使用的盐||√（自动生成）|
|`webServerHost`|`string`|面板主机|`0.0.0.0`||
|`webServerPort`|`int`|面板端口|`3000`|√|
|`mcdrSocketPort`|`int`|MCDR目标端口|`25576`||
|`mapPrerenderConcurrent`|`int`|地图预渲染线程数|`4`||
|`monitorSnapshotInterval`|`int`|监控快照刷新时间间隔（毫秒）|`1000`||
|`serverRestartDelay`|`int`|服务器重启等待时间（秒）|`10`||
|`cookieSecure`|`boolean`|使用HTTPS加密传输Cookie|`false`||
|`proxyHeaders`|`boolean`|是否使用代理头|`false`||
|`oidcEnabled`|`boolean`|是否启用OIDC登录|`false`||
|`oidcDiscoveryUrl`|`string`|OIDC Provider的服务发现地址|||
|`oidcClientId`|`string`|OIDC客户端ID|||
|`oidcClientSecret`|`string`|OIDC客户端密钥|||
|`oidcDisplayName`|`string`|OIDC登录显示名称|||

:::warning 注意

- `accessKey`存储的是密钥的哈希值，而非密钥本身。若丢失密钥，请参照[快速开始](./quick-start#使用)中的说明进行密钥重置。
- `mcdrSocketPort`的配置请参见[连接到MCDR](./mcdr-bridge)
- `cookieSecure`需要额外配置SSL证书与反向代理才能实现HTTPS加密通信。
- `proxyHeaders`如果您使用了反向代理，请将此选项设置为`true`以便获取正确的IP地址。
- `oidc`相关配置请参照[通过OIDC登录](./oidc#开始配置)

:::
