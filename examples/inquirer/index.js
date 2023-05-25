/**
 * @Description: 熟悉inquirer
 * @author: Haoyu Huang
 * @date: 2023/5/25
*/

const inquirer = require('inquirer')
const { inquirerConfig } = require('./config')

inquirer
    .prompt(inquirerConfig).then((res) => {
        console.log(res)
})