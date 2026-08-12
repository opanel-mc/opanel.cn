# `extension.json`

The `extension.json` file contains the metadata for an OPanel extension, including its basic information. Place it in the `resources` directory of your project's source code.

## Example

```json
{
  "extId": "example-extension",
  "version": "1.0.0",
  "name": "Example Extension",
  "description": "An example OPanel extension.",
  "author": "Norcleeh",
  "pages": [
    {
      "name": "Example Page",
      "url": "/"
    }
  ]
}
```

## Fields

|Field|Type|Description|Required|
|---|:---:|---|:---:|
|`extId`|`string`|The extension ID. It must be unique among all extensions.|√|
|`version`|`string`|The extension version|√|
|`name`|`string`|The extension name|√|
|`description`|`string`|A short description of the extension|√|
|`author`|`string`|The author's name|√|
|`pages`|`object[]`|Extension pages to display in the dashboard sidebar||

### `pages`

Each item in `pages` is displayed as an entry in the **Extensions** section of the dashboard sidebar. An extension can register multiple pages. Omit this field if the extension does not need any pages in the sidebar.

| Field | Type | Description | Required |
|---|:---:|---|:---:|
| `name` | `string` | The non-empty page name displayed in the dashboard sidebar | Yes |
| `url` | `string` | The page path under the extension's `resources/web` directory; it must start with `/` | Yes |

`url` is an internal extension path, not a complete external URL. It cannot contain a scheme or host, and it cannot use `..` to escape the `resources/web` directory. For example:

- `/` maps to `resources/web/index.html`
- `/hello/` maps to `resources/web/hello/index.html`

See [Frontend Pages](./frontend) for page assets and a complete example.
