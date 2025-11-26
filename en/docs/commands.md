# Command

OPanel has registered the `/opanel` command in the game, and the command format is as follows:

```
/opanel [about|status|start|stop]
```

## `/opanel about`

Enter this command to print the about information of OPanel, including the OPanel version, official website, source repository, and so on.

<<< @/snippets/opanel-about.ansi

## `/opanel status`

Enter this command to print the current status of OPanel.

<<< @/snippets/opanel-status.ansi

## `/opanel start`

This command is used to launch the OPanel web panel.

:::info

The web panel will start automatically when the server starts, so there is no need to manually enter this command.

:::

## `/opanel stop`

This command is used to close the OPanel web panel.
