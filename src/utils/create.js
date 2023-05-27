/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const fs = require('fs')
const {
    getFilePath
} = require('./file')
const chalk = require("chalk");

/**
 * @Description: 验证当前目录下面项目是否存在，如果存在则退出执行
 * @author: Haoyu Huang
 * @param: projectName { String } 项目名称
 * @return: { Boolean } 返回布尔值
*/
function isFileExist(projectName) {
    const filePath = getFilePath(projectName)
    console.log(filePath)
    if(fs.existsSync(filePath)) {
        console.log(chalk.red(`The Project ${projectName} already exists`))
        process.exit(1)
    }
}

async function selectFeature() {

}

function initProjectDir(projectName) {

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

isFileExist('test.js')