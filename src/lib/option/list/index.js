/**
 * @Description: 获取远程仓库名单选项 list
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const {
    queryRemoteRepository
} = require('./query')
const {
    printRemoteRepository
} = require('./print')

async function list() {
    // 查询远程仓库的名单
    const remoteRepositoryList = queryRemoteRepository()
    // 输出远程仓库名单
    printRemoteRepository(remoteRepositoryList)
}

module.exports = {
    list,
}