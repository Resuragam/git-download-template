/**
 * @Description: 远程仓库基本配置
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const inquirer = require('inquirer')
const chalk = require('chalk')
const path = require('path')
const {
    readJsonFile,
    writeJsonFile,
} = require('../../../utils/file')

/**
 * @Description: 初始化远程仓库数据配置
 * @author: Haoyu Huang
 * @param: repositoryName { String } 远程仓库名称
*/
async function initRepository(repositoryName) {
    const { description, address } = await inquirer
        .prompt([
            {
                name: 'description',
                type: 'input',
                message: 'Please add a description:'
            },
            {
                name: 'address',
                type: 'input',
                message: 'Please enter the address:'
            },
        ])
    return { description, address }
}

/**
 * @Description:
 * @author: Haoyu Huang
 * @param: repositoryName { String } 远程仓库名称
 * @param: description { String } 远程仓库模板描述
 * @param: address { String } 远程仓库模板地址
*/
async function createRepository(repositoryName, description, address) {
    const remoteRepositoryConfig = readJsonFile(path.resolve(__dirname, '../../../config/remoteRepository.json'))
    remoteRepositoryConfig.remoteRepositoryList.push({
        name: repositoryName,
        description,
        address
    })
    writeJsonFile(path.resolve(__dirname, '../../../config/remoteRepository.json'), remoteRepositoryConfig)
}

module.exports = {
    initRepository,
    createRepository
}
