# 在雨云面板中使用OPanel(MCSM同理)
> [!info]
> 雨云的游戏云面板自带多个NAT映射，安装完OPanel插件，配置NAT转发即可。此教程以雨云面板为例。

1. 进入雨云控制台，在`云产品 > 游戏云 > 管理 > 文件管理`页面中找到"plugins/mods"，点击"上传文件"，将服务端对应的OPanel插件上传。

![rainyun-1](/static/docs/rainyun-1.png)

> [!info]
> 如果你使用的是混合端，请优先使用Bukkit版本的OPanel!

2. 切换到"NAT端口映射页面"，点击"新建端口映射"，协议默认"TCP+UDP"即可，内网端口号填"3000"，外网端口号可以自定义/系统随机分配,最后点击"创建映射规则"。

![rainyun-2](/static/docs/rainyun-2.png)

> [!info]
> 配置完NAT，可能需要等一段时间才能生效。

3. 点击"重启"按钮，重启游戏云实例。

4. 重启服务器后，即可使用端口映射中对应的"映射公网地址"来访问OPanel面板。

![rainyun-3](/static/docs/rainyun-3.png)

