# Configuration

The configuration file of OPanel is used to manage some global settings of the server panel.

## File location

The location of the configuration file varies depending on the server. You can refer to the list below to find the file:

- Bukkit servers: `/plugins/OPanel/config.yml`
- Forge servers: `/config/opanel-common.toml`
- Fabric servers: `/config/opanel.json`

## Configuration Options

|Key Name|Type|Description|Default Value|
|---|:---:|---|:---:|
|`accessKey`|`string`|Hash value of the panel access key||
|`salt`|`string`|Salt used when generating tokens||
|`webServerPort`|`int`|Web panel port|`3000`|

:::warning 

`accessKey` stores the hash of the key, not the key itself. If the key is lost, please refer to the instructions in [Quick Start](./quick-start.html#usage) for key reset.
:::
