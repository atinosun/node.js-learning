/**
 * Description:领导模块
 * User: atinosun
 * Date: 2017/2/22
 * Time: 23:11
 */

//声明对象
var leaders = {};
/**
 * Description:添加领导
 * @param leaderName
 */
leaders.add = function (leaderName) {
    console.log("Add leader:" + leaderName);
};

//通过module.exports暴露leaders模块
module.exports = leaders;
