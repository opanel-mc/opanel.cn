# Configuration File

OPanel's configuration file is used to manage some global settings for the server panel.

## File Location

The location of the configuration file varies depending on the server type. You can refer to the list below to find it:

- Paper-series servers: `/plugins/OPanel/config.yml`
- Forge-based servers: `/config/opanel-common.toml`
- Fabric servers: `/config/opanel.json` **(Be sure to shut down the Fabric server before modifying the configuration)**

## Configuration Options

|Key|Type|Description|Default|Required|
|---|:---:|---|:---:|:---:|
|`accessKey`|`string`|Hashed value of the panel access key||√ (auto-generated)|
|`salt`|`string`|Salt used when generating tokens||√ (auto-generated)|
|`webServerHost`|`string`|Host address of the panel web server|`0.0.0.0`||
|`webServerPort`|`int`|Port of the panel web server|`3000`|√|
|`mcdrSocketPort`|`int`|Target port for MCDR|`25576`||
|`mapPrerenderConcurrent`|`int`|Number of concurrent map pre-rendering threads|`4`||
|`monitorSnapshotInterval`|`int`|Monitor snapshot refresh interval (ms)|`1000`||
|`monitorHistoryEnabled`|`boolean`|Whether to enable monitor history recording|`true`||
|`monitorHistoryMinuteRetentionDays`|`int`|Retention period for monitor history at 1-minute resolution (1–30 days)|`7`||
|`monitorHistoryQuarterHourRetentionDays`|`int`|Retention period for monitor history at 15-minute resolution (1–365 days)|`90`||
|`monitorHistoryHourlyRetentionDays`|`int`|Retention period for monitor history at 1-hour resolution (1–3650 days)|`365`||
|`serverRestartDelay`|`int`|Wait time before restarting the server (s)|`10`||
|`cookieSecure`|`boolean`|Use HTTPS to transmit cookies securely|`false`||
|`proxyHeaders`|`boolean`|Whether to trust proxy headers|`false`||
|`oidcEnabled`|`boolean`|Whether to enable OIDC login|`false`||
|`oidcDiscoveryUrl`|`string`|Discovery URL of the OIDC provider|||
|`oidcClientId`|`string`|OIDC client ID|||
|`oidcClientSecret`|`string`|OIDC client secret|||
|`oidcDisplayName`|`string`|Display name shown for OIDC login|`OIDC`||

:::warning Note

- `accessKey` stores the hash of the key rather than the key itself. If you lose the key, refer to [Quick Start](./quick-start#usage) for reset instructions.
- For `mcdrSocketPort`, see [Connecting to MCDR](./mcdr-bridge).
- Monitor history retention periods are automatically clamped to the ranges above. The 15-minute retention period must be at least as long as the 1-minute period, and the hourly period must be at least as long as the 15-minute period; smaller values are automatically increased to meet these requirements.
- `cookieSecure` requires additional SSL certificate and reverse proxy configuration before HTTPS communication can be enabled.
- If you are using a reverse proxy, set `proxyHeaders` to `true` so OPanel can obtain the correct IP address.
- For `oidc`-related settings, see [Logging in via OIDC](./oidc#configuration).

:::
