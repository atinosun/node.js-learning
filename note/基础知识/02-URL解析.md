#### 前言
互联网上的资源都会有唯一的一个地址，我们一般通过URL来访问。
#### URI与URL
URI(统一资源标识符)偏重标识，URL(统一资源定位符)偏重定位。
- URL:比如网址，是一个具体的符号，说明了用哪种协议去访问。
- URI:是一个字符串格式规范，是一种概念上的意义。

URL是URI的子集。
#### URL的命名规则
一般来说，英文字母，阿拉伯数字和某些标点符号，不能使用其他的文字和符号，
如果有文字和符号则需要编码。
#### URL模块
[中文文档](http://nodejs.cn/api/url.html)
[英文文档](https://nodejs.org/dist/latest-v6.x/docs/api/url.html)
#### URL对象的方法
- url.format(urlObject):返回一个从urlObject格式化后的url字符串。
- url.parse(urlString[, parseQueryString[, slashesDenoteHOst]])):解析一个url
字符串并返回一个url对象。根据parseQueryString的不同可将url中的query参数串
转换为未解析、未解码的字符串或是生成一个对象。
- url.resolve(from,to):会以一种Web浏览器解析超链接的方式把一个目标URL
解析成相对于一个基础URL。把两个参数合称为浏览器可以接收的格式(有替换)。
#### 使用方法
见03-url文件夹。
