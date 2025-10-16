# 配置文件

OPanel的配置文件用于管理服务器面板全局的一些设置。

## 文件位置

配置文件的位置因不同服务端而不同，可以参考下面的列表来查找该文件：

- Bukkit系服务端：`/plugins/OPanel/config.yml`
- Forge系服务端：`/config/opanel-common.toml`
- Fabric服务端：`/config/opanel.json`

## 配置选项

|键名|类型|介绍|默认值|
|---|:---:|---|:---:|
|`accessKey`|`string`|面板访问密钥的哈希值||
|`salt`|`string`|生成token时使用的盐|`"opanel"`|
|`webServerPort`|`int`|面板端口|`3000`|

:::warning 注意

`accessKey`存储的是密钥的哈希值，而非密钥本身。若丢失密钥，请参照[快速开始](./quick-start.html#使用)中的说明进行密钥重置。

:::
