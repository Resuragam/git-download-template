/**
 * @Description: 对项目相关的操作
 * @author: Haoyu Huang
 * @date: 2023/5/29
*/

const chalk = require('chalk')
const path = require('path')
const {
    readJsonFile
} = require('../../../utils/file')
const {
    printMessage
} = require('../../../utils/log')

/**
 * @Description: 判断当前项目是否存在 remoteRepositoryList 当中
 * @author: Haoyu Huang
 * @param: repositoryName { String } 项目名称
*/
function isRepositoryExist(repositoryName){
    const { remoteRepositoryList } = readJsonFile(path.resolve(__dirname, '../../../config/remoteRepository.json'))
    for (let i = 0; i < remoteRepositoryList.length; i ++) {
        if(remoteRepositoryList[i].name === repositoryName) {
            return
        }
    }
    printMessage(`‼ ${chalk.red('This project is not exist in remote repositories list !!!')}`)
    process.exit(1)
}

module.exports = {
    isRepositoryExist
}
