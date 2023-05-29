/**
 * @Description: add 指令结束操作
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const chalk = require('chalk')
const {
    printMessage
} = require('../../../utils/log')

/**
 * @Description:
 * @author: Haoyu Huang
 * @param: repositoryName { String } 远程仓库名称
*/
function endAdd(repositoryName) {
    printMessage(`✨  Successfully ${chalk.green('add')} remote repository ${chalk.yellow(repositoryName)} into repositories list!`)
}

module.exports = {
    endAdd,
}
