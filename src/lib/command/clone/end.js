/**
 * @Description: 对项目相关的操作
 * @author: Haoyu Huang
 * @date: 2023/5/29
*/

const chalk = require('chalk')
const {
    printMessage
} = require('../../../utils/log')

/**
 * @Description: 结束 clone 指令操作
 * @author: Haoyu Huang
 * @param: repositoryName { String } 远程仓库名称
*/
function endClone(repositoryName) {
    printMessage(`✨  Successfully clone remote repository ${chalk.yellow(repositoryName)} !`)
}

module.exports = {
  endClone,
}
