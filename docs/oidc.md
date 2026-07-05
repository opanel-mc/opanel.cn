# 通过OIDC登录

## 什么是OIDC？

OIDC（OpenID Connect）是建立在 OAuth 2.0 之上的身份认证协议，允许用户使用第三方身份提供商（如 Auth0、Keycloak 等）的账号登录 OPanel。通过 OIDC，你可以集中管理用户身份，无需每次登录在 OPanel 中输入访问密钥，同时也支持多因素认证等安全策略。

## 准备工作

- 部署 OPanel，版本为 `2.1.4` 及以上（参见[快速开始](/docs/quick-start.md)文档）
- 拥有一个 OIDC Provider 账号，并创建好应用（支持 Auth0、Keycloak等）
- 在 OIDC Provider 中配置回调地址为：`https://<你的OPanel地址>/api/auth/oidc/callback`

## 开始配置

1. 在OPanel的`config.yml`中启用OIDC登录并填写配置信息

   ```yaml
   oidcEnabled: true
   oidcDiscoveryUrl: https://<你的Provider服务发现地址>
   oidcClientId: <客户端ID>
   oidcClientSecret: <客户端密钥>
   oidcDisplayName: <显示名称>
   ```
![oidc-1](/static/docs/oidc-1.png)

2. 重启服务器，打开登录页面，出现OIDC登录按钮

![oidc-2](/static/docs/oidc-2.png)

3. 点击按钮，跳转至 OIDC Provider 完成授权

4. 首次登录需输入`访问密钥`绑定OIDC用户

![oidc-3](/static/docs/oidc-3.png)

绑定成功后即可进入管理面板。已授权的用户以后登录无需再次绑定。

## 管理允许通过OIDC登录的用户

1. 在OPanel设置中打开「OIDC配置」页面

![oidc-4](/static/docs/oidc-4.png)

2. 在「允许的用户ID」列表中查看已授权的用户，可添加或移除用户

![oidc-5](/static/docs/oidc-5.png)
