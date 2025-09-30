---
outline: "deep"
---

# 适配指南

如果你想为OPanel适配新的游戏版本，那么请仔细阅读本文。

## 准备工作

请按照[贡献指南](./contributing.html)中的步骤fork仓库、下载源码、安装依赖，之后方可进行适配开发。

## 选择待适配的版本

你可以在[平台与版本支持](/docs/versions.html)中查看OPanel目前尚未适配的版本。由于有的游戏版本之间的是可以互相兼容的，所以我们并不是要给每一个版本都单独进行适配，而是对可以向上兼容的最低版本进行适配（如模块`fabric-1.21`支持`1.21~1.21.1`、模块`fabric-1.21.2`支持`1.21.2~1.21.4`），**当且仅当适配代码有差异或无法兼容时才创建新模块单独进行适配**。

因此你可以先选择一个你想适配且OPanel尚未支持的大版本（如`1.19.x`、`1.20.x`等等），然后从大版本的首个版本开始适配（如`1.19`或`1.20`等等），接着再通过实际服务端测试来判断新模块所支持的版本范围。

下面，我们以适配Fabric 1.20.4为例，讲解如何适配其他游戏版本。

## 创建模块

1. 在Intellij IDEA中，右键OPanel项目，创建新模块。

![adaptation-1](/static/docs/adaptation-1.png)

2. 在弹出的窗口中为模块命名，命名格式为`<服务端>-<游戏版本>`，在本例中，模块应命名为`fabric-1.20.4`。

:::warning 注意

如果适配的服务端是Bukkit，那么在服务端一栏应该填`spigot`，如：`spigot-1.20`

:::

![adaptation-2](/static/docs/adaptation-2.png)

由于不同Minecraft版本之间使用的Java版本可能不同，JDK一栏中应该选择相应的JDK版本，在本例中，Minecraft 1.20.4的Java版本为`17`，因此在JDK一栏应选择JDK 17的版本。

:::tip

你可以在[Minecraft Wiki](https://zh.minecraft.wiki/w/Tutorial:%E6%9B%B4%E6%96%B0Java#%E9%80%89%E6%8B%A9Java%E7%89%88%E6%9C%AC)中查询不同Minecraft版本使用的Java版本。

:::

![adaptation-3](/static/docs/adaptation-3.png)

设置完成后，点击`创建(C)`即可创建模块。

3. Intellij IDEA在创建模块后会自动在`settings.gradle`中将模块名称添加到文件末尾，为了保持文件格式整洁，请按照模块的服务端和游戏版本将新模块放到对应的位置。

![adaptation-4](/static/docs/adaptation-4.png)

## 复制文件

由于同一服务端不同游戏版本的适配代码大同小异，因此在开始适配之前可以将较为接近的已适配游戏版本的代码复制到新模块的文件夹下。

1. 选择一个较为接近的游戏版本，在本例中，可以选择`fabric-1.21`进行复制。

2. 删除新模块下的所有文件，然后将刚刚复制的文件粘贴进去。

:::warning 注意

**不要直接将文件粘贴进新模块**，因为这么操作会保留src文件夹下的test目录，而这个目录我们并不需要。

当然，你也可以直接粘贴后，手动删除test目录。

:::

## 安装新模块的依赖

1. 打开新模块下的`gradle.properties`文件，这个文件用于存放服务端版本和游戏版本等有关版本信息，在下载新模块的依赖时将会调用此文件的信息，请仔细对照填写。

在本例中，由于适配的是Fabric端，而Fabric官网提供了所有版本的相关信息，我们只需要从官网查询并将相关信息抄入此文件。

```properties
baseName=opanel-fabric-1.20.4
minecraft_version=1.20.4
yarn_mappings=1.20.4+build.3
fabric_loader_version=0.16.14
fabric_api_version=0.97.3
```

:::info

下面是不同服务端查询版本信息的方式：
- Fabric：<https://fabricmc.net/develop/>
- Forge：<https://files.minecraftforge.net/net/minecraftforge/forge/>
- Neoforge：<https://github.com/NeoForgeMDKs>

:::

2. 修改完`gradle.properties`，即可点击“同步所有Gradle项目”进行依赖的下载安装。

:::tip

Gradle同步耗时较长，期间可以做一点别的事情。

:::

![adaptation-5](/static/docs/adaptation-5.png)

看到`BUILD SUCCESSFUL in ...`即为同步成功。

![adaptation-6](/static/docs/adaptation-6.png)

## 开始适配

### 修改包名

1. 打开新模块，右键包，点击重命名。

![adaptation-7](/static/docs/adaptation-7.png)

2. 选择`仅所选目录(S)`。

![adaptation-8](/static/docs/adaptation-8.png)

3. 将包名按格式修改为对应版本号，点击`重构(R)`即可。

![adaptation-9](/static/docs/adaptation-9.png)

### 修改代码

修改新模块中的代码，对该版本进行适配。不同版本中相同功能的写法可能存在差异，IDE一般会通过报错来提示出现差异的地方。

### 构建代码

通过上述步骤将代码修改直至IDE没有提示报错，即可尝试构建代码。点击右侧边栏的Gradle一栏，找到对应模块的build任务，双击运行即可。

![adaptation-10](/static/docs/adaptation-10.png)

由于服务端可能在不同游戏版本之间也进行了修改，因此可能导致即使IDE中没有报错，构建仍会失败的情况，这时你需要设法解决构建的报错，反复尝试直至代码构建成功。

### 测试

如果代码构建成功，那么你所适配的版本的jar包将会被生成在`/build/libs`文件夹下。接着，你就可以按照[贡献指南](./contributing.html#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8A%9F%E8%83%BD-%E5%90%8E%E7%AB%AFapi)中的步骤对OPanel进行测试。

:::warning 注意

即使IDE没有报错且代码构建成功，测试时仍有可能出现其他问题（如运行时报错、功能无法使用等等），因此应仔细进行测试。

:::
