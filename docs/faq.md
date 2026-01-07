# 常见问题

下面是一些常见问题的解决方法。

## 1. 找不到访问密钥？

参见[快速开始](/docs/quick-start.html#%E9%A6%96%E6%AC%A1%E5%90%AF%E5%8A%A8)文档。

## 2. 密钥丢失了怎么办？

系统会在第二次启动服务器时自动删除初始密钥文件。

如果丢失了初始访问密钥，可以通过以下两种方式重新生成初始密码：
- 直接删除[配置文件](/docs/configuration)，并重启服务器
- 编辑[配置文件](/docs/configuration)，将`accessKey`一项改为空字符串`""`

## 3. 为什么我访问不了面板？

云服务商一般会为服务器的端口设置防火墙来提高安全性。

若你正在使用云服务器部署Minecraft服务器，那么请设置防火墙和端口映射，放行和转发OPanel所使用的端口。设置完成之后，请使用 **云服务商提供的公网IP地址** + **转发后的OPanel端口号** 来访问OPanel。

:::info

比如，云服务商提供的公网IP地址是`12.34.56.78`，你在端口映射中将OPanel使用的`3000`端口转发到`12345`，那么你就需要通过`http://12.34.56.78:12345`来访问OPanel。

:::

## 4. 为什么不支持其他版本的Neoforge服务端？

由于NeoGradle构建工具的一些问题（参见 [neoforged/NeoGradle#282](https://github.com/neoforged/NeoGradle/issues/282)），我们无法同时支持多个不兼容版本的Neoforge服务端。

因为1.21.1版本的游玩人数较多，因此我们优先支持Neoforge 1.21.1。

## 5. 是否计划在未来支持多服务端？

**否。**

由于OPanel的功能定位是以插件 / 模组形式装载、针对**单个**服务端的网页管理面板，我们并不计划支持如Bungeecord、Velocity之类的多服务端反向代理软件。

## 6. 使用安卓手机+Termux搭建服务器时，无法打开OPanel仪表盘？

这可能是因为OPanel使用的oshi库找不到JNA而无法正常工作。首先，你需要从网上下载与你设备架构匹配的`libjnidispatch.so`文件，然后在服务端文件夹下新建一个`jni-libs`文件夹，将你下载的so文件放入这个文件夹。

在启动Minecraft服务器的时候，加上下面的参数：

```
-Djna.boot.library.path=./jni-libs
```

## 7. 如何支持OPanel / 为OPanel做出贡献？

### 普通用户

你可以通过[捐助本项目](https://nocp.space/donate)来支持我们。

### 云服务商

你可以通过[捐助本项目](https://nocp.space/donate)或与OPanel合作来支持我们。

### 开发者

参考[贡献指南](/docs/dev-guide/contributing)和[适配指南](/docs/dev-guide/adaptation)，为本项目贡献代码。

如有意向加入OPanel项目组，请发送邮件至<nriot233@gmail.com>，并附上相关信息。
