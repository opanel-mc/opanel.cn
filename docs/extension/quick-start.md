# 快速入门

通过本教程，你可以快速上手OPanel扩展开发，并创建你的第一个OPanel扩展插件。

## 准备工作

- 部署 OPanel，版本为`2.2.0-pre5`及以上（参见[快速开始](/docs/quick-start.md)文档）
- 准备 Java 环境（JDK 14+），安装 [Intellij IDEA](https://jetbrains.com/idea)

## 创建新项目

打开IDEA，点击“新建项目”，选择“Gradle”，点击“创建”。

等待IDEA自动执行Gradle同步，同步成功后，打开`build.gradle`，将OPanel API添加为依赖。

```kts
repositories {
  mavenCentral()
}

dependencies {
  compileOnly ''
}

java {
  toolchain {
    languageVersion = JavaLanguageVersion.of(14)
  }
}
```

如果你后续需要注册后端接口，那么还需要添加Javalin为依赖。

```kts
dependencies {
  compileOnly 'io.javalin:javalin:5.6.4'
  compileOnly ''
}
```

## 扩展元数据

在项目源码的`resources`目录下新建`extension.json`文件存放扩展元数据，具体内容参见[extension.json](./extension-json)。

若缺失元数据文件，扩展就无法被OPanel加载。

## Hello World

创建一个主类`Main.java`作为扩展入口，主类的示例代码如下：

```java
package com.example.extension;

import net.opanel.api.*;

@Extension
public class Main {
    private OPanelAPI api;

    @ExtensionLoad
    public void load(OPanelAPI api) {
        this.api = api;
        api.logInfo("Example extension loaded");
        api.logInfo("Hello World!");
    }

    @ExtensionUnload
    public void unload() {
        api.logInfo("Example extension unloaded");
    }
}
```

其中，`load()`是整个扩展的入口方法，OPanel在启动阶段会执行每一个扩展的`load()`来激活扩展；`unload()`是整个扩展的注销方法，OPanel在退出时会执行每一个扩展的`unload()`来释放资源。

:::warning 注意

添加了`@Extension`注解的类即为扩展的主类，OPanel扩展有且只能有一个主类。

:::

## 构建运行

编写完代码后，在IDEA右侧边栏中打开Gradle，双击运行`build`任务，构建好的jar包将会出现在`build/libs`目录下。

![extension-1](/static/docs/extension-1.png)

准备一个装有OPanel的Minecraft服务器，将构建好的jar包放到服务端的`opanel/extensions`目录下，启动服务器，如果在日志中看到：

```
[OPanel] [Example Extension] Example extension loaded
[OPanel] [Example Extension] Hello World!
```

那么你就成功创建了你的第一个OPanel扩展！
