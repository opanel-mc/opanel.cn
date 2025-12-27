# Quick Start

OPanel is essentially a plugin / mod, so installing OPanel actually means downloading its plugin / mod jar file and installing it into your server.

## Download

You can get OPanel through the following methods:
- Github Releases: <https://github.com/opanel-mc/opanel/releases>
- OPanel Resource Library: <https://dist.opanel.cn>
- Curseforge: <https://curseforge.com/minecraft/bukkit-plugins/opanel>

Due to the differences of each platform and version, a download list for a single OPanel version usually contains multiple jar files for different versions. The file name format of these jar files is `opanel-<server>-<game version>-build-<OPanel version>.jar`.

:::info

The 'game version' in the jar package name refers to the **minimum version** supported by that jar package.

:::

You can check the server platforms and game versions currently supported by OPanel on the [Platform and Version Support](/en/docs/versions) page.

## Install

Move the downloaded jar file into the corresponding plugins / mods folder, and after starting the server, the installation is done.

- Bukkit server: `plugins` folder
- Forge and Fabric servers: `mods` folder

:::warning

The minimum Fabric Loader version supported by OPanel is `0.16.14`.

The minimum Neoforge version supported by OPanel is `21.1.217`.

The Bukkit 1.16.x version of OPanel requires Java version `>=14` to run properly.

:::

## Usage

After the installation, you can start using OPanel in your browser.

### First launch

When starting OPanel for the first time, the system will automatically generate a random access key and save it in the `INITIAL_ACCESS_KEY.txt` file under the `opanel` folder. The access key can be changed later on the panel's settings page.

:::info

After logging in with the initial password, be sure to properly safeguard the key and delete the system-generated `INITIAL_ACCESS_KEY.txt` file to reduce security risks.

The system will automatically delete the initial key file after your first restarting. If the key is lost, please follow the instructions below to reset it.

:::

:::tip

If the initial access key is lost, the initial password can be regenerated in the following two ways:
- Directly delete the configuration file and restart the server
- Edit the configuration file and set the `accessKey` field to an empty string `""`

:::

Next, you can open your browser and access your server panel via `http://<your_server_public_IP>:3000`. The default port of this panel is `3000`, and the port can be manually modified in OPanel's [configuration file](/docs/configuration).

:::warning

Cloud server providers generally set up firewalls for server ports to enhance security. If you are using a cloud server to run a Minecraft server, **please configure the firewall to allow the ports used by OPanel**, otherwise you will not be able to access OPanel.

:::
