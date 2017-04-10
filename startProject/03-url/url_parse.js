/**
 * Description:url.parse方法
 * User: atinosun
 * Date: 2017/4/10
 * Time: 15:22
 */
const url = require('url');
var sourceUrlString = '//host.com/p/a/t/h?query=string#hash';
//不带参数的url.parse
var withoutArgumets = url.parse(sourceUrlString);
//带参数的url.parse
var withArgumets = url.parse(sourceUrlString, true, true);
console.log('withoutArguments', withoutArgumets);
console.log('withArguments', withArgumets);
