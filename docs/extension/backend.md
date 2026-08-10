# 后端接口

OPanel API为扩展插件提供了注册后端接口的方法，允许扩展向前端暴露自定义的后端接口。

## 添加依赖

在新增后端接口前，你需要确保已经在`build.gradle`中将Javalin 5.6.4添加为依赖：

```kts
dependencies {
  // ...
  compileOnly 'io.javalin:javalin:5.6.4'
}
```

## 注册新接口

通过OPanel API注册接口，注册方式如下：

```java
import cn.opanel.api.*;
import io.javalin.http.HandlerType;

@Extension
public class Main {
    @ExtensionLoad
    public void load(OPanelAPI api) {
        api.addHandler("/test", HandlerType.GET, ctx -> {
            ctx.result("Hello World");
        });
        // ...
    }
    // ...
}
```

构建扩展并放入服务器中运行，登录OPanel面板，然后访问`http://localhost:3000/api/extension/<扩展ID>/test`，就会得到`Hello World`的响应。

后端接口的写法参见[Javalin v5.6.x 文档](https://javalin.io/archive/docs/v5.6.X.html)。
