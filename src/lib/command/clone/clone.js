/**
 * @Description: 对项目相关的操作
 * @author: Haoyu Huang
 * @date: 2023/5/29
*/

const child_process = require('child_process')
const ora = require('ora')
const chalk = require('chalk')
const {
    readJsonFile
} = require('../../../utils/file')
const {
    printMessage
} = require('../../../utils/log')

/**
 * @Description: 克隆远程仓库
 * @author: Haoyu Huang
 * @param: repositoryName { String } 项目名称
*/
async function cloneRepository (repositoryName) {
    const remoteRepositoryConfig = await readJsonFile('../../../config/remoteRepository.json')
    remoteRepositoryConfig["remoteRepositoryList"].forEach((repository) => {
        if(repository.name === repositoryName) {
            const spinner = ora('Loading clone project...').start();
            printMessage(`  `)
            new Promise(() => {
                child_process.execSync(`git clone ${repository.address}`)
                spinner.stop()
            })
        }
    })
}

module.exports = {
  cloneRepository,
}
