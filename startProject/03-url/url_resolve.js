/**
 * Description:url.resolve方法
 * User: atinosun
 * Date: 2017/4/06
 * Time: 13:59
 */
const url = require('url');
var sourceUrl = 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash';
var replaceUrl = '/one/two';
console.log(url.resolve(sourceUrl, replaceUrl));

