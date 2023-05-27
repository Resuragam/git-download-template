/**
 * @Description: 增加模板指令 add 的生命周期
 * @author: Haoyu Huang
 * @date: 2023/5/27
 */

const {
    isRepositoryExist
} = require('./repository')
const {
    initRepository,
    createRepository,
} = require('./init')

async function add(repositoryName) {
    // 判断当前项目是否已经存在远程仓库列表
    isRepositoryExist(repositoryName)
    // 对项目进行初始配置
    const { description, address } = await initRepository(repositoryName)
    // 写入配置文件
    await createRepository(repositoryName, description, address)
}

module.exports = {
    add,
}