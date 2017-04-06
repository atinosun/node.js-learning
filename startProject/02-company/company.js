/**
 * Description:公司模块
 * User: atinosun
 * Date: 2017/2/22
 * Time: 23:22
 * Updated_date:2017/4/06
 * Time:11:01
 */
//声明局部变量
var employees = require("./employees");
var leaders = require("./leaders");

/*employees.add("employee1");
 leaders.add("leader1");*/

function add(leaderName, employeesNames) {
    leaders.add(leaderName);
    employeesNames.forEach(function (item, index) {
        employees.add(item);
    })
}

exports.add = add;
