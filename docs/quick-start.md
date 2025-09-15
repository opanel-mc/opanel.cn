# 快速开始

OPanel本质上是一个插件 / 模组，因此安装OPanel实际上就是将OPanel的插件 / 模组jar包下载并装入你的服务端。

## 下载

你可以去OPanel源码仓库的[Github Releases](https://github.com/opanel-mc/opanel/releases)页面内进行下载，也可以选择去我们自己搭建的文件分发站点<https://dist.opanel.cn>进行下载。

由于各个平台与版本特性各不相同，因此在一个OPanel版本的下载列表内通常包含针对不同版本的多个jar包。这些jar包的文件名格式为`opanel-<服务端>-<游戏版本>-build-<OPanel版本>.jar`，其中，“游戏版本”指的是该jar包所支持的**最低版本**。

你可以在[平台与版本支持](/docs/versions)查看OPanel目前支持的服务端平台与游戏版本。

## 安装

将下载好的jar包移入对应的插件 / 模组文件夹，启动服务器后即为安装成功。

- Bukkit系服务端：`plugins`文件夹
- Forge系、Fabric系服务端：`mods`文件夹

## 使用

在正确安装OPanel后，即可开始在浏览器中使用OPanel。

### 首次启动

首次启动OPanel时，系统会自动随机生成一个访问密钥，这个密钥可以在控制台中查看。比如，在下面的示例中，随机生成的访问密钥为`7Q62IhmR41UK`：

```
[OPanel] Web server is ready on port 3000
[OPanel] Initial launching detected, a new access key is generated: 7Q62IhmR41UK
Done preparing level "world1.20" (2.299s)
Running delayed init tasks
Done (10.979s)! For help, type "help"
```

访问密钥稍后可以在面板的设置页面中进行更改。

接下来，就可以打开浏览器，通过`localhost:3000`来访问你的服务器面板。该面板的端口号默认为`3000`，端口可以在OPanel的[配置文件](/docs/configuration)中进行手动修改。
