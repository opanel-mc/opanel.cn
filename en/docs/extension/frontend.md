# Frontend Pages

OPanel allows extensions to add custom frontend pages. Place the frontend assets (HTML, CSS, and JavaScript) in the `resources/web` directory of your project's source code. OPanel will automatically register the extension's frontend pages.

Build the extension, deploy it to the server, and log in to the OPanel dashboard. You can then open an extension page at `http://localhost:3000/panel/ext/<extension ID>/<frontend asset path>`.

## Example

Create an `index.html` file in the `resources/web` directory:

```html
<p>Hello World</p>
```

After building the extension, open `http://localhost:3000/panel/ext/<extension ID>/` to see `Hello World`.
