# FAQ

The following is the solution to some frequently asked questions.

## 1. Where is my access key?

Please refer to the doc [Quick Start](/en/docs/quick-start.md).

## 2. What should I do if the access key is lost?

The system will automatically delete the initial key file after your first restarting.

If the initial access key is lost, the initial password can be regenerated in the following two ways:
- Directly delete the [configuration file](/en/docs/configuration) and restart the server
- Edit the [configuration file](/en/docs/configuration) and set the `accessKey` field to an empty string `""`

## 3. Why can't I access the panel?

Cloud server providers generally set up firewalls for server ports to enhance security.

If you are using a cloud server to run a Minecraft server, please configure the firewall and port mappings to allow and forward the port that OPanel is running on. Then, please use **the public IP address provided by the cloud server provider** + **the forwarded port used by OPanel** to get access to OPanel.

:::info

e.g. The public IP provided by the cloud server provider is `12.34.56.78`, and you've forwarded the port `3000` used by OPanel to port `12345`, then you should access OPanel via the url `http://12.34.56.78:12345`.

:::

## 4. Why not support other versions of Neoforge?

Due to some issues of NeoGradle build tool (Please refer to [neoforged/NeoGradle#282](https://github.com/neoforged/NeoGradle/issues/282)), we can't support multiple incompatible versions of Neoforge.

There are a lot of people playing 1.21.1, so we just prioritize supporting Neoforge 1.21.1.

## 5. Would OPanel support multi-server in the future?

**No.**

Because the functional positioning of OPanel is a web panel for a **single** server, loaded as a plugin / mod, we don't have any plan for supporting the multi-server reverse proxy software such as Bungeecord and Velocity.

## 6. How to support OPanel / make contribution to OPanel?

### Common Users

You can support us via [donation](https://nocp.space/donate).

### Cloud Server Providers

You can support us via [donation](https://nocp.space/donate) or becoming a partner with us.

### Developers

Refer to [Contributing Guidelines](/docs/dev-guide/contributing) and [Adaptation Guidelines](/docs/dev-guide/adaptation), contribute your code to OPanel.

If you're willing to join OPanel Project, please send an email to <nriot233@gmail.com>, along with some relevant information.
