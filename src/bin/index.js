#! /usr/bin/env node

/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const program = require('commander')
const { create } = require('../lib/command/create/index')
const { git } = require('../lib/command/git/index')
const { version } = require('../../package.json')

// CLI 基本的版本信息
program
    .version(version)
    .usage('<command> [options]')

program
    .command('create <project-name>')
    .description('Create new project use from hhy-cli')
    .action(async (projectName, option) => {
        await create(projectName)
    })

program
    .command('git <project-name> [option]')
    .description('Use remote repositories template project')
    .action(async (projectName, option) => {
        await git(projectName)
    })

program
    .command('list [option]')
    .description('View template projects list in remote repositories')
    .option('-a, --Add', 'Add a remote repository template')
    .option('-d, --Delete', 'delete a remote repository template')
    .action(async () => {
        console.log('list')
        console.log(process.argv)
        console.log(process.argv.slice(3))
    })

program.parse(process.argv)

