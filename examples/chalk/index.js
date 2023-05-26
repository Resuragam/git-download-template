/**
 * @Description: 熟悉chalk的使用
 * @author: Haoyu Huang
 * @date: 2023/5/26
*/

const chalk = require('chalk')
const log = console.log
console.log(chalk.blue('hello world'))

log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))

log(chalk.bgHex('#DEADED').underline('Hello, world!'))