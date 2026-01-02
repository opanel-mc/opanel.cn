# 快速开始

OPanel本质上是一个插件 / 模组，因此安装OPanel实际上就是将OPanel的插件 / 模组jar包下载并装入你的服务端。

## 下载

你可以通过下面的几种途径获取OPanel：
- Github Releases：<https://github.com/opanel-mc/opanel/releases>
- OPanel 资源库：<https://dist.opanel.cn>
- Curseforge：<https://curseforge.com/minecraft/bukkit-plugins/opanel>

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

OPanel所支持的Fabric Loader版本最低为`0.16.14`，Neoforge版本最低为`21.1.217`

OPanel的Bukkit 1.16.x版本需要java版本`>=14`方可正常运行

:::

## 使用

在正确安装OPanel后，即可开始在浏览器中使用OPanel。

### 首次启动

首次启动OPanel时，OPanel会在控制台中打印：

```
===========================OPanel===========================
Initial launching detected,
Check opanel/INITIAL_ACCESS_KEY.txt for the initial access key.
Remember to delete the file for your server security.
============================================================
```

此时，系统自动随机生成了一个访问密钥，你可以在`opanel`文件夹中的`INITIAL_ACCESS_KEY.txt`文件找到这个访问密钥。

![quick-start-1](/static/docs/quick-start-1.png)

![quick-start-2](/static/docs/quick-start-2.png)

![quick-start-3](/static/docs/quick-start-3.png)

:::info

使用初始密码登录后，请务必妥善保管密钥，并将系统生成的`INITIAL_ACCESS_KEY.txt`文件删除，以减少安全隐患。

:::

接下来，就可以打开浏览器，通过`http://<服务器的公网IP>:3000`来访问你的服务器面板。该面板的端口号默认为`3000`，端口可以在OPanel的[配置文件](/docs/configuration)中进行手动修改。

登录面板后，可以在设置中修改访问密钥。

:::warning 注意

云服务商一般会为服务器的端口设置防火墙来提高安全性。若你正在使用云服务器部署Minecraft服务器，那么请设置防火墙和端口映射，放行和转发OPanel所使用的端口。设置完成之后，请使用 **云服务商提供的公网IP地址** + **转发后的OPanel端口号** 来访问OPanel。

:::
