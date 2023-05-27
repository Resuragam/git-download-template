/**
 * @Description: 文件操作
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const path = require('path')
const fs = require("fs");

/**
 * @Description: 获取当前项目的绝对路径
 * @author: Haoyu Huang
 * @param: projectName { String } 项目名称
 * @return: filePath { String } 当前文件路径
*/
function getFilePath(projectName) {
    return path.resolve(process.cwd(), projectName)
}

/**
 * @Description: 读取指定路径下的 JSON 文件
 * @author: Haoyu Huang
 * @param: path { String } 相对路径
 * @return: content { Object }JSON 文件内容
*/
function readJsonFile(path) {
    return JSON.parse(fs.readFileSync(path, { encoding: 'utf-8', flag: 'r' }))
}

/**
 * @Description: 重写指定路径下的 JSON 文件
 * @author: Haoyu Huang
 * @param: path { String } 相对路径
 * @param: content { Object } 写入 JSON 文件内容
 */
function writeJsonFile(path, content) {
    fs.writeFileSync(path, JSON.stringify(content, null, 2));
}

module.exports = {
    getFilePath,
    readJsonFile,
    writeJsonFile
}