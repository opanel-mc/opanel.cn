# 快速开始

OPanel本质上是一个插件 / 模组，因此安装OPanel实际上就是将OPanel的插件 / 模组jar包下载并装入你的服务端。

## 下载

你可以通过下面的几种途径获取OPanel：
- Github Releases：<https://github.com/opanel-mc/opanel/releases>
- OPanel 资源库：<https://dist.opanel.cn>
- 蓝奏云：<https://t-bu.cn/b01397kota> （密码：8888）

由于各个平台与版本特性各不相同，因此在一个OPanel版本的下载列表内通常包含针对不同版本的多个jar包。这些jar包的文件名格式为`opanel-<服务端>-<游戏版本>-build-<OPanel版本>.jar`。

:::info

jar包名称中的“游戏版本”指的是该jar包所支持的**最低版本**

:::

你可以在[平台与版本支持](/docs/versions)查看OPanel目前支持的服务端平台与游戏版本。

## 安装

将下载好的jar包移入对应的插件 / 模组文件夹，启动服务器后即为安装成功。

- Bukkit系服务端：`plugins`文件夹
- Forge系、Fabric系服务端：`mods`文件夹

:::warning 注意

OPanel所支持的Fabric Loader版本最低为`0.16.14`

OPanel的Bukkit 1.16.x版本需要java版本`>=14`方可正常运行

:::

## 使用

在正确安装OPanel后，即可开始在浏览器中使用OPanel。

### 首次启动

首次启动OPanel时，系统会自动随机生成一个访问密钥，并将密钥存入`opanel`文件夹下的`INITIAL_ACCESS_KEY.txt`文件中。访问密钥稍后可以在面板的设置页面中进行更改。

:::warning 注意

使用初始密码登录后，请务必妥善保管密钥，并将系统生成的`INITIAL_ACCESS_KEY.txt`文件删除，以减少安全隐患。

:::

:::tip

如果丢失了初始访问密码，可以通过以下两种方式重新生成初始密码：
- 直接删除配置文件，并重启服务器
- 编辑配置文件，将`accessKey`一项改为空字符串`""`

:::

接下来，就可以打开浏览器，通过`localhost:3000`来访问你的服务器面板。该面板的端口号默认为`3000`，端口可以在OPanel的[配置文件](/docs/configuration)中进行手动修改。
