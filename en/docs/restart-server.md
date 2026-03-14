# Server Restart Configuration

:::warning

The OPanel restart feature is not recommended for servers running inside platforms such as MCSM or Docker.

:::

1. Before using the server restart feature, first find your server launch command, for example:

![restart-server-1](/static/docs/restart-server-1.png)

In this example, the server launch command is `java -Xms8G -Xmx8G -jar paper-1.21.11.jar nogui`.

:::info

The server launch command should contain **only the launch command itself**, and should not include preceding commands such as `cd ~/Desktop/server`.

:::

2. Open the panel and set the launch command used for restart.

![restart-server-2](/static/docs/restart-server-2.png)

![restart-server-3](/static/docs/restart-server-3.png)

3. After saving the launch command, you can use OPanel's server restart feature.

![restart-server-4](/static/docs/restart-server-4.png)

:::info

After clicking restart, the server will shut down and automatically restart after 10s.

:::
