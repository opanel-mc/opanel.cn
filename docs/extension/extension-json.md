# `extension.json`

`extension.json`文件是OPanel扩展的元数据，用于记录扩展插件的一些基本信息，存放在项目源码的`resources`目录下。

## 示例

```json
{
  "extId": "example-extension",
  "version": "1.0.0",
  "name": "Example Extension",
  "description": "An example OPanel extension.",
  "author": "Norcleeh"
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
