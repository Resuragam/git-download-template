#! /usr/bin/env node

/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const program = require('commander')
const { create } = require('../lib/command/create/index')
const { clone } = require('../lib/command/clone/index')
const { add } = require('../lib/command/add/index')
const { del } = require('../lib/command/del/index')
const { list } = require('../lib/option/list/index')
const { version } = require('../../package.json')

// CLI 基本的版本信息
program
    .version(version)
    .usage('<command> [options]')

program
    .command('create <projectName>')
    .description('Create new project use from hhy-cli')
    .action(async (projectName, option) => {
        await create(projectName)
    })

program
    .command('clone <repositoryName>')
    .description('Use remote repositories template project')
    .action(async (repositoryName, option) => {
        await clone(repositoryName)
    })


program
    .command('add <repositoryName>')
    .description('Add a remote repository template')
    .action(async (repositoryName) => {
        await add(repositoryName)
    })

program
    .command('del <repositoryName>')
    .description('Delete a remote repository template')
    .action(async (repositoryName) => {
        await del(repositoryName)
    })

program
    .option('-l, --list', 'View template projects list in remote repositories')
    .action(async () => {
        await list()
    })

program.parse(process.argv)

