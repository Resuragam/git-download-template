#! /usr/bin/env node

/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const program = require('commander')
const { create } = require('../lib/create/index')
const { git } = require('../lib/git/index')
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
    .command('git <project-name>')
    .description('Use remote repositories template project')
    .action(async (projectName, option) => {
        await git(projectName)
    })

program
    .option('-l, --List')
    .description('View template projects list in remote repositories')

program.parse(process.argv)

