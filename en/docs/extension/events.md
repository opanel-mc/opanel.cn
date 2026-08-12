# Event Listeners

OPanel allows extensions to register event listeners that listen for events from OPanel or the game and perform actions in response.

> [!info]
> OPanel currently supports only a limited number of event types for extensions. If you are interested, you can [contribute to the project](/en/docs/dev-guide/contributing).

## Register a Listener

You can find the event types supported by OPanel in the `cn.opanel.api.event` package. Every class in this package other than `ExtensionEvent` represents an event type.

OPanel currently supports adding listeners only to the main class—the class annotated with `@Extension`. Register a listener as follows:

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

Listener methods must be annotated with `@EventHandler`. OPanel infers the registered event type from the parameter type you specify—`PlayerJoinEvent` in the example above—and passes the corresponding event object to the method when that event occurs.
