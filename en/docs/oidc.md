# Logging in via OIDC

## What is OIDC?

OIDC (OpenID Connect) is an identity authentication protocol built on top of OAuth 2.0, allowing users to log into OPanel using accounts from third-party identity providers (such as Auth0, Keycloak, etc.). With OIDC, you can centrally manage user identities without creating separate accounts in OPanel, while also supporting security policies like multi-factor authentication.

## Prerequisites

- Deploy OPanel version `2.1.4` or above (see [Quick Start](/en/docs/quick-start.md) guide)
- Own an OIDC Provider account with an application created (supports Auth0, Keycloak, etc.)
- Configure the callback URL in your OIDC Provider: `https://<your-OPanel-address>/api/auth/oidc/callback`

## Configuration

1. Enable OIDC login in OPanel's `config.yml` and fill in the configuration details

   ```yaml
   oidcEnabled: true
   oidcDiscoveryUrl: https://<your-provider-discovery-url>
   oidcClientId: <client-id>
   oidcClientSecret: <client-secret>
   oidcDisplayName: <display-name>
   ```

![oidc-1](/static/docs/oidc-1.png)

2. Restart the server and open the login page — the OIDC login button will appear

![oidc-2](/static/docs/oidc-2.png)

3. Click the button to be redirected to your OIDC Provider for authorization

4. Enter the `access key` to bind the OIDC user on first login

![oidc-3](/static/docs/oidc-3.png)

5. Once bound, you can access the management panel. Authorized users do not need to bind again on subsequent logins.

## Managing Users Allowed to Log in via OIDC

1. Open the "OIDC Configuration" page in OPanel settings

![oidc-4](/static/docs/oidc-4.png)

2. View authorized users in the "Allowed User IDs" list, where you can add or remove users

![oidc-5](/static/docs/oidc-5.png)
