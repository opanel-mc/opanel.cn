# 事件监听

OPanel允许扩展插件注册事件监听器，来监听OPanel或游戏内的一些事件并执行一些操作。

> [!info]
> 目前OPanel支持扩展监听的事件类型还比较少，如果你愿意，可以来[参与贡献](/docs/dev-guide/contributing)。

## 注册监听器

OPanel所支持的事件类型可以在`net.opanel.api.event`包下查看，除`ExtensionEvent`以外的其他类均为事件。

目前OPanel仅支持在主类（即添加了`@Extension`注解的类）中添加监听器，添加方式如下：

```java
@Extension
public class Main {
    // ...

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        api.logInfo("Player joined: "+ event.getPlayer().getName());
    }
}
```

监听器方法需要添加`@EventHandler`，OPanel会根据你所写的参数类型（如上面的`PlayerJoinEvent`）推断你注册的事件类型，并在事件触发时传入相应的事件参数。
