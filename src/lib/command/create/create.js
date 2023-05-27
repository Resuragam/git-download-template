/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const fs = require('fs')
const chalk = require("chalk")
const shell = require('shelljs')
const inquirer = require('inquirer')
const { featureConfig } = require('../../../config/feature.config')
const {
    printMessage
} = require('../../../utils/log')
const {
    getFilePath
} = require('../../../utils/file')

/**
 * @Description: 验证当前目录下面项目是否存在，如果存在则退出执行
 * @author: Haoyu Huang
 * @param: projectName { String } 项目名称
*/
function isFileExist(projectName) {
    const filePath = getFilePath(projectName)
    console.log(filePath)
    if(fs.existsSync(filePath)) {
        printMessage(chalk.red(`The Project ${projectName} already exists`))
        process.exit(1)
    }
}

/**
 * @Description: 选择当前项目的相关配置
 * @author: Haoyu Huang
 * @return: feature { Array<string>> } 选择的配置项
*/
async function selectFeature() {
    printMessage(chalk.blue(`HHY CLI v${require('../../../../package.json').version}`))
    printMessage('Start initializing the project:')
    printMessage('')

    const { feature } = inquirer.prompt(featureConfig)

    return feature
}

/**
 * @Description: 创建项目目录以及文件
 * @author: Haoyu Huang
 * @param: projectName { Stirng } 项目名称
*/
function initProjectDir(projectName) {
    shell.exec(`mkdir ${projectName}`)
    shell.cd(projectName)
    shell.exec('npm init -y')
}

function changePackageInfo(projectName) {

}


function end(projectName) {

}

module.exports = {
    isFileExist,
    selectFeature,
    initProjectDir,
    changePackageInfo,
    end
}

