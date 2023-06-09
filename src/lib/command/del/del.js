/**
 * @Description: 删除指定仓库
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const path = require('path')
const {
    readJsonFile,
    writeJsonFile
} = require('../../../utils/file');

/**
 * @Description: 删除指定远程仓库
 * @author: Haoyu Huang
 * @param: repositoryName { String } 项目名称
*/
function deleteRepository(repositoryName) {
    const remoteRepositoryConfig = readJsonFile(path.resolve(__dirname, '../../../config/remoteRepository.json'))
    remoteRepositoryConfig.remoteRepositoryList = remoteRepositoryConfig.remoteRepositoryList.filter((repository) => {
        return repository.name !== repositoryName
    })
    writeJsonFile(path.resolve(__dirname, '../../../config/remoteRepository.json'), remoteRepositoryConfig)
}

module.exports = {
    deleteRepository,
}
