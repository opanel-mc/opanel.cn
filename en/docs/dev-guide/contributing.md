---
outline: "deep"
---

# Contributing Guidelines

Contributions to the OPanel Project are welcome!

:::tip Prerequisites

Before your first contribution, please learn [how to create a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

:::

## Project Structure

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

- The `frontend` folder contains the source code for the frontend pages. The frontend is built using [vinext](https://github.com/cloudflare/vinext), [Vite](https://vite.dev), and [Shadcn UI](https://ui.shadcn.com).
- The `core` folder contains the core logic and functionality shared by Java platforms, such as the web server and backend APIs.
- The `api` folder contains the OPanel API for extensions on Java platforms.
- The `fabric` folder contains all Fabric-related adaptation modules organized by version:
  - `fabric-config` contains the configuration code shared by Fabric adaptation modules.
  - `fabric-helper` contains the shared code of Fabric implementation modules.
  - `fabric-helper-unmapped` contains the shared code required for Fabric adaptation in unmapped environments.
  - Folders starting with `fabric-` followed by a version number are Fabric implementations for different Minecraft versions.
- The `forge` folder contains all Forge-related adaptation modules organized by version:
  - `forge-helper` contains the shared code of Forge (not including NeoForge) implementation modules.
  - Folders starting with `forge-` followed by a version number are Forge implementations for different Minecraft versions.
- The `neoforge` folder contains all NeoForge-related adaptation modules organized by version:
  - `neoforge-helper` contains the shared code of NeoForge implementation modules.
  - Folders starting with `neoforge-` followed by a version number are NeoForge implementations for different Minecraft versions.
- The `paper` folder contains all Paper-series (Paper, Folia) adaptation modules organized by version:
  - `paper-helper` contains the shared code of Paper series implementation modules.
  - Folders starting with `paper-` are Paper implementations for different versions of Minecraft.
  - Folders starting with `folia-` are Folia implementations for different versions of Minecraft.
- The `pumpkin` folder contains the Rust implementation of the Pumpkin plugin, which shares the frontend pages with Java platforms:
  - `lib.rs` is the plugin entry point and handles loading and unloading.
  - `web` contains the web server, backend APIs, and WebSocket implementations.
  - `assets` is a separate crate that builds and embeds frontend resources.
  - `frontend.properties` configures the environment variables used to build the Pumpkin frontend.
- The root `Cargo.toml` defines the Pumpkin plugin, its workspace, dependencies, and build configuration. `Cargo.lock` locks dependency versions.
- `platform-modules.json` registers the version modules for Java platforms and their shared module dependencies. Gradle uses it to load modules, and CI uses it to generate the build matrix.
- `frontend.gradle` defines tasks for frontend preparation, per-module builds, and resource packaging.

After the plugin / mod is initialized, the program will start a web server on the specified port (default is `3000`), which includes both the frontend and backend APIs.

In the development environment, the frontend page is served on port `3001`, and it will directly connect to a hard-coded backend API URL `http://localhost:3000` (see `frontend/lib/api.ts`). Therefore, when developing and debugging the frontend page, your backend web server, that is, the port configured by the plugin / mod, should be set to `3000`.

## Preparations

Before getting started, you need to install [VSCode](https://code.visualstudio.com). For Java platform development, you also need [IntelliJ IDEA](https://jetbrains.com/idea). The following guide assumes that you are using these editors.

You also need to install [Node.js](https://nodejs.org/en/download) (CI uses 22.x) and [Rust](https://rust-lang.org/learn/get-started) (including Cargo). For Java platform development, also install [JDK 25](https://jdk.java.net/archive). Frontend preparation uses Rust to compile Wasm, so Rust is required even when building Java plugins / mods. The Pumpkin plugin is built with Rust/Cargo and can be developed in VSCode with rust-analyzer.

After preparing the development environment, you can create a fork of this repository on GitHub.

Next, clone the repository using the following command:

```cmd
git clone https://github.com/<your-username>/opanel.git
```

## Install dependencies

After cloning the repository, you need to download all the dependencies to run the source code.

### Gradle Dependencies

Gradle dependencies are required for Java platform development. You can skip this section if you are only developing the Pumpkin plugin.

1. Open the project with IntelliJ IDEA, and IDEA will automatically start a sync task to download dependencies.

2. After the task completes successfully, click the Gradle icon in the right sidebar to view the available Gradle tasks, such as the `build` task for the `fabric-1.21` module.

### Node.js Dependencies

1. Enter the `frontend` folder.

```cmd
cd frontend
```

2. Run the following command to install the dependencies.

```
npm ci
```

Frontend dependencies are required even if you only modify the backend, because both Gradle and Cargo automatically build the corresponding frontend when building a plugin / mod.

### Cargo Dependencies

When developing the Pumpkin plugin, run the following command in the project root to download dependencies according to `Cargo.lock`:

```cmd
cargo fetch --locked
```

Pumpkin dependencies come from the Git repository and tag specified in the root `Cargo.toml`. Cargo automatically compiles these dependencies when building the plugin.

## Development

### Server-side functionality / Backend API

For Java platforms, prepare a Fabric / Forge / NeoForge / Paper / Folia server for testing, then follow the guide below to build a jar file. Place the jar file you want to debug into the corresponding `mods` or `plugins` folder. After restarting the server, the latest changes will be applied to your test server.

For Pumpkin, server functionality and backend APIs are implemented in the `pumpkin` directory. Prepare a server that matches the Pumpkin dependency tag in the root `Cargo.toml`, then follow [Build the Pumpkin Plugin](#build-the-pumpkin-plugin) to build a dynamic library. Place the artifact for the server's operating system and CPU architecture in its `plugins` folder, then restart the server to test it.

Before testing, check the [Pumpkin Server Version Compatibility Table](/en/docs/versions#pumpkin-versions). For a development branch, use the dependency version specified in its `Cargo.toml`. Using an incompatible Pumpkin version may cause the server to panic and crash.

#### Adapt the new version

For Java platforms, see [Adaptation Guidelines](./adaptation). Pumpkin development and builds use the Cargo workspace at the project root.

### Frontend

In the `frontend` folder, copy `.env.example` to `.env.local` and configure it for your test server:

```dotenv
VITE_OPANEL_VERSION=<OPanel version>
VITE_OPANEL_TARGET=fabric-1.21
```

Replace `<OPanel version>` with the `version` value from the root `gradle.properties`, and set `VITE_OPANEL_TARGET` to the module name for your test server. The frontend uses this value to determine the platform type. In development mode, it defaults to `paper` if unset.

When debugging the Pumpkin frontend, set `VITE_OPANEL_TARGET` to the value in `pumpkin/frontend.properties` (for example, `pumpkin-26.3`), and set `VITE_OPANEL_VERSION` to the `version` value under `[workspace.package]` in the root `Cargo.toml`.

Then run the following command in the `frontend` folder:

```cmd
npm run dev
```

This command first prepares Minecraft assets and Wasm, then serves the development frontend on port `3001`. Open `http://localhost:3001` in your browser to debug the frontend.

## Build source code

### Build Java Plugins / Mods

After installing dependencies, run the following command in the project root. This example builds `fabric-1.21`:

```cmd
.\gradlew -PbuildTarget=fabric-1.21 :fabric-1.21:build
```

`-PbuildTarget` loads only the specified version module and its dependencies. The following `:fabric-1.21:build` specifies the module task to run. To build another version, replace the module name in both places. Available names are listed in `platform-modules.json`.

Gradle automatically performs the following steps:

1. Runs `prepareFrontend` to prepare or validate shared Minecraft assets and Wasm.
2. Runs the target module's `buildFrontend`, setting `VITE_OPANEL_TARGET` from `frontend_env_vite_opanel_target` in the module's `gradle.properties` and automatically injecting the OPanel version.
3. Generates frontend output in the module's `build/frontend` directory, then uses `processResources` to package the pages and compatibility ID into the jar.

You no longer need to run `npm run build:pack` manually or copy frontend files to `core/src/main/resources/web`.

To build all Java platform version modules, run the following command in the project root:

```cmd
.\gradlew clean build
```

The final jar files are generated in the `build/libs` folder at the project root, with filenames in the format `opanel-<module name>-build-<OPanel version>.jar`.

### Build the Pumpkin Plugin

After installing frontend dependencies, run the following command in the project root:

```cmd
cargo build --release --locked
```

During the build, `pumpkin/assets/build.rs` reads `VITE_OPANEL_TARGET` from `pumpkin/frontend.properties`, injects the Cargo package version, and automatically calls `npm run build` to prepare and build the frontend. The frontend output is written to Cargo's build output directory and embedded in the final plugin dynamic library.

By default, artifacts are generated in the `target/release` folder at the project root. The filename depends on the build target:

| Operating system | Plugin file |
| --- | --- |
| Windows | `opanel_pumpkin.dll` |
| Linux | `libopanel_pumpkin.so` |
| macOS | `libopanel_pumpkin.dylib` |

The build target defaults to your local platform. If you specify a target with `--target <target triple>`, artifacts are generated in `target/<target triple>/release`. You must first install the corresponding Rust target and native build tools.

After modifying Rust code, you can run the following checks in the project root:

```cmd
cargo fmt --all -- --check
cargo clippy --workspace --all-targets --all-features --locked -- -D warnings
cargo test --workspace --all-features --locked
```

:::info

If the compiler runs out of stack space while compiling Pumpkin dependencies on Linux, set `RUST_MIN_STACK=33554432` and try again.

:::

### Build the Frontend Separately

To check the frontend production build on its own, set `VITE_OPANEL_VERSION` and `VITE_OPANEL_TARGET` in `frontend/.env.local`, then run the following command in the `frontend` folder:

```cmd
npm run build
```

Production builds require `VITE_OPANEL_TARGET`. Output defaults to `frontend/dist`; you can specify a different output directory with the `OPANEL_FRONTEND_OUTPUT` environment variable. To build a complete plugin / mod, use the Gradle commands above for Java platforms or the Cargo command for Pumpkin.

## Commit your code

```cmd
git add .
git commit -m "<your-commit-message>"
git push
```

If you want to merge your code into the official OPanel repository, you can submit it through a Pull Request.

:::warning Note

Commit messages submitted to the official OPanel repository must follow the [Conventional Commits](https://conventionalcommits.org/en/v1.0.0) specification.

:::
