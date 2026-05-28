# 重置密钥

我们可能会丢失密钥，此时你就需要看这篇文档
以下图片中使用的服务端均为Bukkit系操作方式，请按照实际情况操作

## 删除配置文件

![resetkey-1](/static/docs/resetkey-1.png)
如图，我们要删除配置文件（图中红色箭头指向部分），请参照[配置文件](./configuration#文件位置)删除对应位置的配置文件
删除后重新启动服务器出现以下提示既为成功
```
===========================OPanel===========================
Initial launching detected,
Check opanel/INITIAL_ACCESS_KEY.txt for the initial access key.
Remember to delete the file for your server security.
============================================================
```

## 获取新的密钥

启动服务器后我们要前往 服务器文件夹/opanel/INITIAL_ACCESS_KEY.txt 获取我们的新密钥
![resetkey-2](/static/docs/resetkey-2.png)
![resetkey-3](/static/docs/resetkey-3.png)

重置完成！可以前往网页控制台(http://<服务器的公网IP>:3000)使用opanel了！