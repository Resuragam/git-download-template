/**
 * @Description: 克隆远程仓库 clone 指令生命周期
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const {
    isRepositoryExist
} = require('./repository')
const {
    cloneRepository
} = require('./clone')
const {
    endClone
} = require('./end')

async function clone(repositoryName) {
    // 判断当前远程仓库是否存在
    isRepositoryExist(repositoryName)
    // 克隆远程仓库
    await cloneRepository(repositoryName)
    // 结束 clone 指令
    endClone(repositoryName)
}

module.exports = {
    clone,
}
