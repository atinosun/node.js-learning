/**
 * Description:雇员模块
 * User: atinosun
 * Date: 2017/2/22
 * Time: 23:10
 */

/**
 * Description:添加雇员
 * @param employeeName
 */
function add(employeeName) {
    console.log("Add employee:" + employeeName);
}

//通过exports暴露add方法
exports.add = add;

