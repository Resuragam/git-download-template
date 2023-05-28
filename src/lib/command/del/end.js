/**
 * @Description: 结束 del 指令
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const chalk = require('chalk')
const {
    printMessage
} = require('../../../utils/log')

/**
 * @Description: 结束 del 指令操作
 * @author: Haoyu Huang
 * @param: repositoryName { String } 远程仓库名称
 */
function endDel(repositoryName) {
    printMessage(`✨  Successfully delete remote repository ${chalk.yellow(repositoryName)} from repositories list!`)
}

module.exports = {
    endDel,
}