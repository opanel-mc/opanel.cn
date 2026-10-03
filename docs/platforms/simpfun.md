# 在简幻欢中使用OPanel

> [!info]
> 依据[实例端口可用服务清单](https://www.yuque.com/simpfun/sfe/lbsm7hcl10oeg36h#M4kES)，您可以在遵守[简幻欢服务协议](https://www.yuque.com/simpfun/sfe/tos)下合理使用OPanel。

> [!tip]
> 近期经常有用户反馈无法在简幻欢面板服上打开OPanel面板，如果遇到类似问题，可在绑定QQ后加入[简幻欢QQ交流群](https://www.yuque.com/simpfox/simpdoc/joinqqgroup)寻求帮助，**不要**加入疑难解答群寻求帮助。

1. 进入简幻欢面板，在`控制台 > 实例 > 管理`页面中找到“实例端口”选项，点击“新建”。

![simpfun-1](/static/docs/simpfun-1.png)

2. 花费一定量积分创建新端口后，确保任务无出错。

![simpfun-2](/static/docs/simpfun-2.png)

3. 返回`管理`页面记住新建的端口号（如图中红色矩形所示）。

![simpfun-2](/static/docs/simpfun-3.png)

4. 接着，在文件管理中找到OPanel的配置文件。

![simpfun-3](/static/docs/simpfun-4.png)

5. 打开配置文件后，参考[配置文件](/docs/configuration)文档，修改面板端口为刚刚新建的端口号。

![simpfun-4](/static/docs/simpfun-5.png)

6. 重启服务器后，点击复制`服务器IP`所提供的地址，并将端口改为OPanel所配置使用的端口（例如原IP为`play.simpfun.cn:3000`，将`3000`改为`3001`，即可使用`http://play.simpfun.cn:3001`来访问OPanel）。
