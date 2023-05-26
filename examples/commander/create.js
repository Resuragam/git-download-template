/**
 * @Description: commander 测试 create <app-name> 指令
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const { program } = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')

program
    .usage('<command> [options]')
    .command('create <app-name>')
    .description('create a new project')
    .option('-b, --Blue', 'console log project name use blue')
    .action(async (projectName, options) => {
        const cwd = options.cwd || process.cwd() // 获取当前路径
        const inCurrent = projectName === '.' // 是否在当前目录下
        const name = inCurrent ? path.relative('../', cwd) : projectName // 获取项目名称
        const targetDir = path.resolve(cwd, projectName || '.') // 生成当前项目的目录

        if(fs.existsSync(targetDir)) {
            if(inCurrent) {
                const {ok} = await inquirer.prompt([
                    {
                        name: 'ok',
                        type: 'confirm',
                        message: `Generate project in current directory?`
                    }
                ])
                if (!ok) {
                    return
                }
            }else {
                const { action } = await inquirer.prompt([
                    {
                        name: 'action',
                        type: 'list',
                        message: `Target directory ${chalk.cyan(targetDir)} already exists. Pick an action:`,
                        choices: [
                            { name: 'Overwrite', value: 'overwrite' },
                            { name: 'Merge', value: 'merge' },
                            { name: 'Cancel', value: false }
                        ]
                    }
                ])
                
            }
        }

        console.log('create')
    })

program.parse()