/**
 * @Description: 删除模板指令 del 的生命周期
 * @author: Haoyu Huang
 * @date: 2023/5/27
 */

const {
    isRepositoryExist
} = require('./repository')
const {
    deleteRepository
} = require('./del')
const {
    endDel
} = require('./end')

async function del(repositoryName) {
    // 判断当前项目是否已经存在远程仓库列表
    isRepositoryExist(repositoryName)
    // 删除当前仓库
    await deleteRepository(repositoryName)
    // 结束
    endDel(repositoryName)
}

module.exports = {
    del,
}