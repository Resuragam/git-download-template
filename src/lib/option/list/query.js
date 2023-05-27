/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/28
*/

const { remoteRepositoryList } = require('../../../config/remoteRepository.json')

/**
 * @Description:
 * @author: Haoyu Huang
 * @return { Array } remoteRepositoryList 远程仓库名单
*/
function queryRemoteRepository() {
    return remoteRepositoryList
}

module.exports = {
    queryRemoteRepository
}