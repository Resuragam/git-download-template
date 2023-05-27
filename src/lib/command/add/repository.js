/**
 * @Description: 对项目相关的操作
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const fs = require('fs')
const chalk = require("chalk")
const {
    readJsonFile
} = require('../../../utils/file')
const {
    printMessage
} = require("../../../utils/log")

/**
 * @Description: 判断当前项目是否存在 remoteRepositoryList 当中
 * @author: Haoyu Huang
 * @param: repositoryName { String } 项目名称
 * @return: { Boolean }
*/
function isRepositoryExist(repositoryName){
    const { remoteRepositoryList } = readJsonFile('../../../config/remoteRepository.json')
    remoteRepositoryList.forEach((remoteRepository) => {
        if(remoteRepository.name === repositoryName) {
            printMessage(`‼ ${chalk.red('This project has already exist in remote repositories list !!!')}`)
            process.exit(1)
        }
    })
}

module.exports = {
    isRepositoryExist
}