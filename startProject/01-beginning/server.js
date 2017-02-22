/**
 * Description:创建一个web服务器。
 * User: atinosun
 * Date: 2017/2/16
 * Time: 22:37
 */

// 定义常量，加载一个http模块，可以创建一个服务器及处理相关的http任务等。

const http = require('http');

// 定义常量。

const hostname = '127.0.0.1';
const port = 3000;

// 定义常量，使用http的createServer方法创建一个服务器。
// 给createServer传一个匿名的回调函数，目的是告诉Node.js当请求进来时下一步该做什么。
// 同时给这个回调函数传入两个参数，req(request请求体)，res(response响应体)。
// req用来获取这次请求的一些相关信息，比如来源url，请求方式等。
// res用来告诉服务器给这次请求响应一些内容，否则请求将一直挂起。

const server = http.createServer((req, res) => {

    //在返回的请求头里写入响应的状态码。

    res.statusCode = 200;

    //返回的文本类型是重文本(显示在响应头中)。

    res.setHeader('Content-Type', 'text/plain');

    //给请求的客户端(浏览器)返回响应的信息。

    // res.end('Hello World\n');
    res.end('This is my first Node.js file!^_^');

    //如果修改了返回的信息，应该重启服务器。
});

//通过创建好的服务器对象的listen方法，让创建好的服务器监听指定端口号，指定服务器的请求(任何请求？)。

server.listen(port, hostname, () => {

    //在控制台输出信息。(匿名的回调函数)

    console.log(`Server running at http://${hostname}:${port}/`);
});

//上面是普通的调用方式，也可以通过链式调用的方式来创建。(感觉普通方式看起来舒服点^_^)
// http.createServer((req, res) => {}).listen(port,hostname);