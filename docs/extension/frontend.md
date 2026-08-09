# 前端页面

OPanel允许扩展插件添加自定义的前端页面。将前端资源（html、css、js）放到项目源码的`resources/web`目录下，OPanel将自动注册扩展的前端页面。

构建扩展并放入服务器中运行，登录OPanel面板，然后访问`http://localhost:3000/panel/ext/<扩展ID>/<前端资源路径>`即可打开扩展注册的前端页面。

## 示例

在`resources/web`目录下创建`index.html`：

```html
<p>Hello World</p>
```

构建扩展后，打开`http://localhost:3000/panel/ext/<扩展ID>/`，即可看到`Hello World`。
