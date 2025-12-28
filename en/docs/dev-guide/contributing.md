---
outline: "deep"
---

# Contributing Guidelines

Contributions to the OPanel Project is welcomed!

:::tip Prerequisite knowledges

Before your first contribution, please learn [How to Creating a pull request from a fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

:::

## Project Structure

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

- The `frontend` folder contains the source code for the frontend pages. The frontend is built using [Next.js](https://nextjs.org) and [Shadcn UI](https://ui.shadcn.com).
- The `core` folder is the core of the entire project, including a series of core logic and functionalities, such as the web server and backend APIs.
- Folders starting with `fabric-` are Fabric implementations for different Minecraft versions.
- Folders starting with `forge-` are Forge implementations for different Minecraft versions.
- Folders starting with `neoforge-` are Neoforge implementations for different Minecraft versions.
- Folders starting with `spigot-` are Bukkit implementations for different versions of Minecraft.
- Folders starting with `folia-` are Folia implementations for different versions of Minecraft.

After the plugin / mod is initialized, the program will start a web server on the specified port (default is `3000`), which includes both the frontend and backend APIs.

In the development environment, the frontend page is served on port `3001`, and it will directly connect to a hard-coded backend API URL `http://localhost:3000` (see `frontend/lib/api.ts`). Therefore, when developing and debugging the frontend page, your backend web server, that is, the port configured by the plugin / mod, should be set to `3000`.

## Preparations

Before getting started, you need to install [VSCode](https://code.visualstudio.com) and [IntelliJ IDEA](https://jetbrains.com/idea). The following guide will assume that you are using these two code editors.

Then, you also need to install [Node.js](https://nodejs.org) and jdk.

After preparing the development environment, you can create a fork of this repository on GitHub.

Next, clone the repository using the following command:

```cmd
git clone https://github.com/<your-username>/opanel.git
```

## Install dependencies

After cloning the repository, you need to download all the dependencies to run the source code.

### Gradle Dependencies

1. Open the project with IntelliJ IDEA, and IDEA will automatically start a sync task to download dependencies.

2. After the task is completed, you can open the Gradle icon in the right sidebar to view the executable Gradle tasks. If you can find tasks like `fabric/runServer` in the menu, it means your Gradle dependencies have been correctly installed.

### Node.js Dependencies

1. Enter the `frontend` folder.

```cmd
cd frontend
```

2. Run the following command to install the dependencies.

```
npm install
```

## Development

### Server-side functionality / Backend API

#### Fabric

Execute the Fabric task `fabric/runServer` for the corresponding Minecraft version in the Gradle menu. After the server has fully started, the backend API and the frontend pages in the production environment will be deployed on port `3000`.

:::info

Execute the Fabric task `fabric/runServer` for the corresponding Minecraft version in the 

:::

#### Forge / Neoforge / Bukkit

Prepare a Forge / Neoforge / Bukkit server in advance for testing, then follow the guide below to build a jar file. Next, place the jar file you want to debug into the corresponding `mods` or `plugins` folder. After restarting the server (Forge / Neoforge server) or executing the `/reload` command (Bukkit-based server), the latest changes will be applied to your test server.

#### Adapt the new version

See [Adaptation Guide](./adaptation.html)。

### Frontend

Execute the command in the `frontend` folder

```cmd
npm run dev
```

Then the frontend pages in the production environment will be deployed to port `3001`, and you can open `http://localhost:3001` with your browser to debug the frontend.

## Build source code

1. Build the frontend page

Execute the command in the `frontend` folder

```cmd
npm run build
```

This step will automatically copy the bundled frontend pages to the path `/core/src/main/resources/web` for the build of plugins / mods.

2. Build server-side plugins / mods

Run the command in the project's root directory

```cmd
.\gradlew clean build
```

The final built jar file will appear in the `/build/libs` folder.

## Commit your code

```cmd
git add .
git commit -m "<your-commit-message>"
git push
```

If you want to merge your code into the official OPanel repository, you can submit it through a Pull Request.
