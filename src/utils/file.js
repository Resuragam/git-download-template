/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const path = require('path')

/**
 * @Description: 获取当前项目的绝对路径
 * @author: Haoyu Huang
 * @param: projectName { String } 项目名称
 * @return: filePath { String } 当前文件路径
*/
function getFilePath(projectName) {
    return path.resolve(process.cwd(), projectName)
}

module.exports = {
    getFilePath,
}