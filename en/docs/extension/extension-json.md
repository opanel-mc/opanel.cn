# `extension.json`

The `extension.json` file contains the metadata for an OPanel extension, including its basic information. Place it in the `resources` directory of your project's source code.

## Example

```json
{
  "extId": "example-extension",
  "version": "1.0.0",
  "name": "Example Extension",
  "description": "An example OPanel extension.",
  "author": "Norcleeh"
}
```

## Fields

| Field | Type | Description | Required |
|---|:---:|---|:---:|
| `extId` | `string` | The extension ID. It must be unique among all extensions. | Yes |
| `version` | `string` | The extension version | Yes |
| `name` | `string` | The extension name | Yes |
| `description` | `string` | A short description of the extension | Yes |
| `author` | `string` | The author's name | Yes |
