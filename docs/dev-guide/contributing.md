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
├── core/
├── api/
├── fabric/
│   ├── fabric-config
│   ├── fabric-helper
│   ├── fabric-helper-unmapped
│   ├── fabric-1.19
│   ├── fabric-1.20
│   └── ...
├── forge/
│   ├── forge-helper
│   ├── forge-1.19.4
│   ├── forge-1.20.1
│   └── ...
├── neoforge/
│   ├── neoforge-helper
│   ├── neoforge-1.21.1
│   └── ...
├── paper/
│   ├── paper-helper
│   ├── paper-1.19.4
│   ├── paper-1.20
│   ├── folia-1.20
│   └── ...
├── pumpkin/
│   ├── assets/
│   ├── web/
│   ├── frontend.properties
│   ├── lib.rs
│   └── ...
├── Cargo.toml
├── Cargo.lock
├── platform-modules.json
└── frontend.gradle
```

- `frontend` 文件夹存放前端页面源码，前端使用[vinext](https://github.com/cloudflare/vinext)、[Vite](https://vite.dev)和[Shadcn UI](https://ui.shadcn.com)进行构建。
- `core` 文件夹存放Java平台共用的核心逻辑和功能，如Web服务器和后端API。
- `api` 文件夹存放供Java平台扩展使用的OPanel API。
- `fabric` 文件夹按版本存放所有Fabric相关的适配模块：
  - `fabric-config` 存放Fabric适配模块共用的配置代码。
  - `fabric-helper` 存放Fabric服务端适配模块的共用代码。
  - `fabric-helper-unmapped` 存放未映射（unmapped）环境下Fabric适配所需的共用代码。
  - 以 `fabric-` 开头并附带版本号的文件夹是不同Minecraft版本的Fabric模组实现。
- `forge` 文件夹按版本存放所有Forge相关的适配模块：
  - `forge-helper` 存放Forge服务端（不包括NeoForge）适配模块的共用代码。
  - 以 `forge-` 开头并附带版本号的文件夹是不同Minecraft版本的Forge模组实现。
- `neoforge` 文件夹按版本存放所有NeoForge相关的适配模块：
  - `neoforge-helper` 存放NeoForge服务端适配模块的共用代码。
  - 以 `neoforge-` 开头并附带版本号的文件夹是不同Minecraft版本的NeoForge模组实现。
- `paper` 文件夹按版本存放所有Paper系列（Paper、Folia）的适配模块：
  - `paper-helper` 存放Paper系列服务端适配模块的共用代码。
  - 以 `paper-` 开头的文件夹是不同Minecraft版本的Paper插件实现。
  - 以 `folia-` 开头的文件夹是不同Minecraft版本的Folia插件实现。
- `pumpkin` 文件夹存放基于Rust的Pumpkin插件实现，与Java平台共用前端页面：
  - `lib.rs` 是插件入口，负责加载和卸载插件。
  - `web` 存放Web服务器、后端API和WebSocket相关实现。
  - `assets` 是构建并嵌入前端资源的独立crate。
  - `frontend.properties` 配置Pumpkin前端构建使用的环境变量。
- 根目录的`Cargo.toml`定义Pumpkin插件及其工作区、依赖和构建配置，`Cargo.lock`锁定依赖版本。
- `platform-modules.json` 注册Java平台的版本模块及其依赖的共用模块，供Gradle加载模块和CI生成构建矩阵使用。
- `frontend.gradle` 定义前端准备、按模块构建和资源打包任务。

在插件 / 模组初始化后，程序会在指定端口（默认为`3000`）启动一个Web服务器，该服务器包括前端和后端API。

在开发环境下，前端页面被部署在`3001`端口下，然后它会直接连接一个硬编码的后端API网址`http://localhost:3000`（参见`frontend/lib/api.ts`）。因此，在开发和调试前端页面时，你的后端Web服务器，也就是插件 / 模组所配置的端口应该设置为`3000`。

## 准备工作

在开始之前，你需要安装[VSCode](https://code.visualstudio.com)；开发Java平台时还需要安装[Intellij IDEA](https://jetbrains.com/idea)。下面的指南将假定你使用的是这两款代码编辑器。

然后，你还需要安装[Node.js](https://nodejs.org/zh-cn/download)（CI使用22.x）和[Rust](https://rust-lang.org/learn/get-started)（包含Cargo）；开发Java平台时还需要安装[JDK 25](https://jdk.java.net/archive)。前端准备任务需要使用Rust编译Wasm，因此构建Java插件 / 模组时也需要安装Rust。Pumpkin插件使用Rust/Cargo构建，可使用VSCode配合rust-analyzer进行开发。

准备好开发环境后，即可在Github创建本仓库的fork。

接着，通过下面的命令clone仓库：

```cmd
git clone https://github.com/<your-username>/opanel.git
```

## 安装依赖

在clone完仓库后，需要下载所有依赖才能正确运行源码。

### Gradle 依赖

开发Java平台时需要安装Gradle依赖；仅开发Pumpkin插件时可以跳过这一节。

1. 使用Intellij IDEA打开项目，IDEA会自动启动一个同步任务来下载依赖。

2. 在任务成功结束后，你可以打开右侧边栏中的Gradle图标来查看可以执行的Gradle任务，例如`fabric-1.21`模块的`build`任务。

### Node.js 依赖

1. 进入`frontend`文件夹

```cmd
cd frontend
```

2. 执行下面的命令来下载依赖

```
npm ci
```

即使只修改后端，也需要安装前端依赖，因为Gradle和Cargo都会在构建插件 / 模组时自动构建对应的前端。

### Cargo 依赖

开发Pumpkin插件时，在项目根目录下执行以下命令，按`Cargo.lock`下载依赖：

```cmd
cargo fetch --locked
```

Pumpkin相关依赖来自根目录`Cargo.toml`指定的Git仓库和tag。构建插件时，Cargo会自动编译这些依赖。

## 开发

### 服务端功能 / 后端API

对于Java平台，提前准备一个Fabric / Forge / NeoForge / Paper / Folia的服务端用于测试，然后按照下面的指南来构建一个jar包，接着将要调试的jar包放进对应的`mods`或`plugins`文件夹。在重启服务器后，最新的更改将会应用到你的测试服务器上。

对于Pumpkin，服务端功能和后端API在`pumpkin`目录中实现。准备与根目录`Cargo.toml`中Pumpkin依赖tag匹配的服务端，按照[构建Pumpkin插件](#构建pumpkin插件)中的步骤生成动态库，然后将对应操作系统和CPU架构的产物放入测试服务器的`plugins`文件夹，重启服务器进行测试。

测试前请核对[Pumpkin服务端版本对照表](/docs/versions#pumpkin-versions)；开发分支以其`Cargo.toml`中的依赖版本为准。使用不匹配的Pumpkin版本可能导致服务器panic崩溃。

#### 适配新版本

Java平台参见[适配指南](./adaptation)。Pumpkin使用根目录的Cargo工作区进行开发和构建。

### 前端

在`frontend`文件夹下，将`.env.example`复制为`.env.local`，并根据测试服务器设置：

```dotenv
VITE_OPANEL_VERSION=<OPanel版本>
VITE_OPANEL_TARGET=fabric-1.21
```

将`<OPanel版本>`替换为项目根目录`gradle.properties`中的`version`值，将`VITE_OPANEL_TARGET`替换为测试服务器对应的模块名称。前端会根据此值确定平台类型，开发模式下未设置时默认使用`paper`。

调试Pumpkin前端时，将`VITE_OPANEL_TARGET`设为`pumpkin/frontend.properties`中的值（例如`pumpkin-26.3`），并将`VITE_OPANEL_VERSION`设为根目录`Cargo.toml`中`[workspace.package]`的`version`值。

然后在`frontend`文件夹下执行命令：

```cmd
npm run dev
```

该命令会先准备Minecraft资源和Wasm，再将开发环境下的前端页面部署到`3001`端口。接着就可以使用浏览器打开`http://localhost:3001`来调试前端。

## 构建源码

### 构建Java插件 / 模组

安装依赖后，在项目根目录下执行以下命令，以构建`fabric-1.21`为例：

```cmd
.\gradlew -PbuildTarget=fabric-1.21 :fabric-1.21:build
```

`-PbuildTarget`用于只加载指定的版本模块及其依赖，后面的`:fabric-1.21:build`指定要执行的模块任务。构建其他版本时，请同时替换这两处模块名称；可用名称见`platform-modules.json`。

Gradle会自动完成以下步骤：

1. 执行`prepareFrontend`，准备或校验共用的Minecraft资源和Wasm。
2. 执行目标模块的`buildFrontend`，根据模块`gradle.properties`中的`frontend_env_vite_opanel_target`设置`VITE_OPANEL_TARGET`，并自动注入OPanel版本。
3. 将前端产物生成到该模块的`build/frontend`目录，再通过`processResources`将页面和兼容性标识打包进jar。

因此，无需再手动执行`npm run build:pack`或将前端文件复制到`core/src/main/resources/web`。

若要构建所有Java平台的版本模块，可以在项目根目录下执行：

```cmd
.\gradlew clean build
```

最终构建好的jar包将出现在项目根目录的`build/libs`文件夹下，文件名格式为`opanel-<模块名称>-build-<OPanel版本>.jar`。

### 构建Pumpkin插件

安装前端依赖后，在项目根目录下执行：

```cmd
cargo build --release --locked
```

构建时，`pumpkin/assets/build.rs`会读取`pumpkin/frontend.properties`中的`VITE_OPANEL_TARGET`，注入Cargo包版本，并自动调用`npm run build`准备和构建前端。前端产物写入Cargo的构建输出目录，并嵌入最终的插件动态库。

默认产物位于项目根目录的`target/release`文件夹下，文件名取决于构建目标：

| 操作系统 | 插件文件 |
| --- | --- |
| Windows | `opanel_pumpkin.dll` |
| Linux | `libopanel_pumpkin.so` |
| macOS | `libopanel_pumpkin.dylib` |

默认构建目标为本机平台。若使用`--target <目标三元组>`指定构建目标，产物位于`target/<目标三元组>/release`，并需要提前准备对应的Rust目标和本机构建工具。

修改Rust代码后，可以在项目根目录下执行以下检查：

```cmd
cargo fmt --all -- --check
cargo clippy --workspace --all-targets --all-features --locked -- -D warnings
cargo test --workspace --all-features --locked
```

:::info

在Linux上编译Pumpkin依赖时，若遇到编译器栈空间不足，可以设置`RUST_MIN_STACK=33554432`并重试。

:::

### 单独构建前端

如果只需要检查前端生产构建，可以在`frontend/.env.local`中设置好`VITE_OPANEL_VERSION`和`VITE_OPANEL_TARGET`后，在`frontend`文件夹下执行：

```cmd
npm run build
```

生产构建必须指定`VITE_OPANEL_TARGET`。默认产物位于`frontend/dist`，也可以通过环境变量`OPANEL_FRONTEND_OUTPUT`指定输出目录。构建完整插件 / 模组时，Java平台使用上面的Gradle命令，Pumpkin使用Cargo命令。

## 提交代码

```cmd
git add .
git commit -m "<your-commit-message>"
git push
```

若想将你的代码合并到OPanel官方仓库，可以通过Pull Request进行提交。

:::warning 注意

提交到OPanel官方仓库的Commit消息需遵循[Conventional Commits](https://conventionalcommits.org/zh-hans/v1.0.0)规范。

:::
