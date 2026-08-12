# 前端页面

OPanel允许扩展添加自定义前端页面，并将页面入口展示在面板侧边栏中。页面会嵌入面板显示，HTML、CSS、JavaScript和图片等前端资源需要放在项目源码的`resources/web`目录下。

## 注册页面

在`extension.json`的`pages`字段中注册页面。每个页面需要设置在侧边栏中显示的`name`和对应的内部资源路径`url`：

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

扩展加载后，这两个入口会显示在面板侧边栏的“扩展”分组中，并分别打开：

- `http://localhost:3000/panel/ext/example-extension/`
- `http://localhost:3000/panel/ext/example-extension/hello/`

`url`必须以`/`开头，并且只能指向当前扩展`resources/web`目录中的资源，不能填写完整的外部网址或包含`..`的路径。详细字段说明参见[`extension.json`](./extension-json)。

## 添加页面资源

在`resources/web`目录下创建`index.html`：

```html
<!doctype html>
<html lang="zh-CN">
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

当页面的`url`为`/`时，OPanel会加载`resources/web/index.html`。对于`/hello/`这样的子目录页面，则会加载`resources/web/hello/index.html`。

建议在HTML中使用`./style.css`、`./main.js`等相对路径引用同一目录下的静态资源。注册子目录页面时保留结尾的`/`，可以确保这些相对路径以该子目录为基准解析。

## 构建和访问

构建扩展并将JAR文件放入服务器的`opanel/extensions`目录。扩展成功加载后，登录OPanel面板，即可从侧边栏打开已注册的页面。

你也可以直接访问`http://localhost:3000/panel/ext/<扩展ID>/<页面路径>`。查询参数和URL片段会传递给扩展页面。
