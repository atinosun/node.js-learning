/**
 * Description:url.format方法
 * User: atinosun
 * Date: 2017/4/06
 * Time: 13:56
 */
const url = require('url');
var urlObject = {
    protocol: 'http:',
    slashes: true,
    auth: 'user:pass',
    host: 'host.com:8080',
    port: '8080',
    hostname: 'host.com',
    hash: '#hash',
    search: '?query=string',
    query: 'query=string',
    pathname: '/p/a/t/h',
    path: '/p/a/t/h?query=string',
    href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
};
var urlString = url.format(urlObject);
console.log(urlString);
