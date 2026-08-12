# Frontend Pages

OPanel allows extensions to add custom frontend pages and display their entries in the dashboard sidebar. Pages are embedded in the dashboard. Place frontend assets such as HTML, CSS, JavaScript, and images in the `resources/web` directory of your project's source code.

## Register Pages

Register pages in the `pages` field of `extension.json`. Each page needs a `name` to display in the sidebar and a `url` that points to its internal resource path:

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
    },
    {
      "name": "Hello Page",
      "url": "/hello/"
    }
  ]
}
```

After the extension loads, these entries appear in the **Extensions** section of the dashboard sidebar and open the following URLs:

- `http://localhost:3000/panel/ext/example-extension/`
- `http://localhost:3000/panel/ext/example-extension/hello/`

The `url` must start with `/` and can only refer to resources in the current extension's `resources/web` directory. It cannot be a complete external URL or contain `..` path segments. See [`extension.json`](./extension-json) for the full field reference.

## Add Page Assets

Create an `index.html` file in the `resources/web` directory:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Example Page</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./main.js" defer></script>
  </head>
  <body>
    <p>Hello World</p>
  </body>
</html>
```

When a page's `url` is `/`, OPanel loads `resources/web/index.html`. For a nested page such as `/hello/`, it loads `resources/web/hello/index.html`.

Use relative paths such as `./style.css` and `./main.js` for static assets in the same directory. Keep the trailing `/` when registering a directory page so these paths resolve relative to that directory.

## Build and Open the Page

Build the extension and place its JAR file in the server's `opanel/extensions` directory. After the extension loads successfully, log in to the OPanel dashboard and open a registered page from the sidebar.

You can also open `http://localhost:3000/panel/ext/<extension ID>/<page path>` directly. Query parameters and URL fragments are forwarded to the extension page.
