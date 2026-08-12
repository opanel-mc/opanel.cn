# Backend API

The OPanel API provides a method for registering backend endpoints, allowing extensions to expose custom backend APIs to the frontend.

## Add the Dependency

Before adding a backend endpoint, make sure Javalin 5.6.4 has been added as a dependency in `build.gradle`:

```kts
dependencies {
  // ...
  compileOnly 'io.javalin:javalin:5.6.4'
}
```

## Register an Endpoint

Register an endpoint through the OPanel API as follows:

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

Build the extension, deploy it to the server, and log in to the OPanel dashboard. Then open `http://localhost:3000/api/extension/<extension ID>/test` to receive a `Hello World` response.

For details on writing backend endpoints, see the [Javalin v5.6.x docs](https://javalin.io/archive/docs/v5.6.X.html).
