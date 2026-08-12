# `extension.json`

`extension.json`文件是OPanel扩展的元数据，用于记录扩展插件的一些基本信息，存放在项目源码的`resources`目录下。

## 示例

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

## 字段

|字段|类型|介绍|必填|
|---|:---:|---|:---:|
|`extId`|`string`|扩展的ID，不可与其他扩展重复|√|
|`version`|`string`|扩展版本|√|
|`name`|`string`|扩展名称|√|
|`description`|`string`|扩展简介|√|
|`author`|`string`|作者名称|√|
|`pages`|`object[]`|需要在面板侧边栏中展示的扩展页面||

### `pages`

`pages`中的每一项都会在面板侧边栏的“扩展”分组中显示为一个入口。一个扩展可以注册多个页面；如果扩展不需要在侧边栏中展示页面，可以省略此字段。

|字段|类型|介绍|必填|
|---|:---:|---|:---:|
|`name`|`string`|页面在面板侧边栏中显示的名称，不可为空|√|
|`url`|`string`|页面在扩展的`resources/web`目录中的路径，必须以`/`开头|√|

`url`是扩展内部路径，不是完整的外部网址。它不能包含协议或域名，也不能使用`..`跳出`resources/web`目录。例如：

- `/`对应`resources/web/index.html`
- `/hello/`对应`resources/web/hello/index.html`

有关页面资源和完整示例，请参见[前端页面](./frontend)。
