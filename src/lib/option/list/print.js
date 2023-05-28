/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const chalk = require('chalk')
const { printMessage } = require('../../../utils/log')
/**
 * @Description:
 * @author: Haoyu Huang
 * @param: remoteRepositoryList { Array } 远程仓库名单
*/
function printRemoteRepository(remoteRepositoryList) {
    remoteRepositoryList.forEach((remoteRepository) => {
        printMessage(`⚙  ${chalk.blue(remoteRepository.name)} (${chalk.blue(remoteRepository.description)})`)
    })
}

module.exports = {
    printRemoteRepository,
}