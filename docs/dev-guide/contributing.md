---
outline: "deep"
---

# 贡献指南

欢迎为OPanel项目贡献你的代码！

:::tip 前置知识

在开始贡献代码之前，请你先了解[如何通过fork和Pull Request贡献代码和提交更改](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

:::

## 项目结构

```
opanel
├── frontend/
│   ├── app
│   ├── components
│   └── ...
├── core
├── fabric-...
├── forge-...
├── neoforge-...
├── spigot-...
├── folia-...
└── ...
```

- `frontend` 文件夹存放前端页面源码，前端使用[Next.js](https://nextjs.org)和[Shadcn UI](https://ui.shadcn.com)进行构建。
- `core` 文件夹是整个项目的核心，包括一系列核心逻辑和功能，如Web服务器和后端API。
- 以 `fabric-` 开头的文件夹是不同Minecraft版本的Fabric模组实现。
- 以 `forge-` 开头的文件夹是不同Minecraft版本的Forge模组实现。
- 以 `neoforge-` 开头的文件夹是不同Minecraft版本的Neoforge模组实现。
- 以 `spigot-` 开头的文件夹是不同Minecraft版本的Bukkit插件实现。
- 以 `folia-` 开头的文件夹是不同Minecraft版本的Folia插件实现。

在插件 / 模组初始化后，程序会在指定端口（默认为`3000`）启动一个Web服务器，该服务器包括前端和后端API。

在开发环境下，前端页面被部署在`3001`端口下，然后它会直接连接一个硬编码的后端API网址`http://localhost:3000`（参见`frontend/lib/api.ts`）。因此，在开发和调试前端页面时，你的后端Web服务器，也就是插件 / 模组所配置的端口应该设置为`3000`。

## 准备工作

在开始之前，你需要安装[VSCode](https://code.visualstudio.com)和[Intellij IDEA](https://jetbrains.com/idea)。下面的指南将假定你使用的是这两款代码编辑器。

然后，你还需要安装[Node.js](https://nodejs.org)和jdk。

准备好开发环境后，即可在Github创建本仓库的fork，**创建fork时应注意取消勾选"Copy the `main` branch only"**，以便后续将代码提交至`dev`分支。

接着，通过下面的命令clone仓库：

```cmd
git clone -b dev https://github.com/<your-username>/opanel.git
```

## 安装依赖

在clone完仓库后，需要下载所有依赖才能正确运行源码。

### Gradle 依赖

1. 使用Intellij IDEA打开项目，IDEA会自动启动一个同步任务来下载依赖。

2. 在任务结束后，你可以打开右侧边栏中的Gradle图标来查看可以执行的Gradle任务。如果你能在菜单中找到如`fabric/runServer`之类的任务，就证明你的Gradle依赖已经正确安装好了。

### Node.js 依赖

1. 进入`frontend`文件夹

```cmd
cd frontend
```

2. 执行下面的命令来下载依赖

```
npm install
```

## 开发

### 服务端功能 / 后端API

#### Fabric

执行Gradle菜单中相应Minecraft版本的Fabric任务`fabric/runServer`。在服务器完全启动后，后端API和生产环境下的前端页面将被部署在`3000`端口上。

:::info

通常情况下，我们不会使用这里生产环境下的前端页面来开发和调试前端。

:::

#### Forge / Neoforge / Bukkit

提前准备一个Forge / Neoforge / Bukkit的服务端用于测试，然后按照下面的指南来构建一个jar包，接着将要调试的jar包放进对应的`mods`或`plugins`文件夹。在重启服务器（Forge / Neoforge服务端）或执行`/reload`指令（Bukkit系服务端）后，最新的更改将会应用到你的测试服务器上。

### 前端

在`frontend`文件夹下执行命令

```cmd
npm run dev
```

然后生产环境下的前端页面将被部署到`3001`端口下，接着就可以开始使用浏览器打开`http://localhost:3001`来调试前端。

## 构建源码

1. 构建前端页面

在`frontend`文件夹下执行命令

```cmd
npm run build
```

这一步会自动将打包好的前端页面复制到`/core/src/main/resources/web`路径下，以备插件 / 模组的构建。

2. 构建服务端插件 / 模组

在项目根目录下执行命令

```cmd
.\gradlew clean build
```

最终构建好的jar包将出现在`/build/libs`文件夹下。

## 提交代码

由于本仓库的开发分支不是主分支，因此在push代码时应手动注明`dev`分支。

```cmd
git push origin dev
```

若想将你的代码合并到OPanel官方仓库，可以通过Pull Request进行提交。
