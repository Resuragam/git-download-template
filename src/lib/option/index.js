/**
* @Description: 选项的操作
* @author: Haoyu Huang
* @date: 2023-05-29
*/

const { exec } = require('shelljs')
const { list } = require('./list/index')

/**
* @Description: 对不同的选项进行操作
* @author: Haoyu Huang
*/
async function options(operator) {
	if(operator === '-l' || operator === '--list') {
		return list()
	}else {
		return exec('hhy-cli -h')
	}
}

module.exports = {
	options,
}
