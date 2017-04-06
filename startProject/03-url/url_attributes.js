/**
 * Description:url属性模块
 * User: atinosun
 * Date: 2017/4/06
 * Time: 13:22
 */
const url = require('url');
//var urlObject = url.parse('http://nodejs.cn/api/url.html#url_url_format_urlobject');
var urlObject = url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
console.log(urlObject);
/*标准url组成部分
 Url {
 protocol: 'http:',//底层使用的协议
 slashes: true,//是否有协议的//
 auth: 'user:pass',//用户名:密码
 host: 'host.com:8080',//ip地址，域名
 port: '8080',//端口
 hostname: 'host.com',//主机名
 hash: '#hash',//哈希值，一般用作锚点
 search: '?query=string',//查询字符串参数
 query: 'query=string',//发送给http的数据，即参数串
 pathname: '/p/a/t/h',//访问资源的路径名
 path: '/p/a/t/h?query=string',//路径
 href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'//完整的url
 }

 */
console.log(urlObject.href);
console.log(urlObject.protocol);
console.log(urlObject.slashes);
console.log(urlObject.host);
console.log(urlObject.auth);
console.log(urlObject.hostname);
console.log(urlObject.port);
console.log(urlObject.pathname);
console.log(urlObject.search);
console.log(urlObject.path);
console.log(urlObject.query);
console.log(urlObject.hash);
