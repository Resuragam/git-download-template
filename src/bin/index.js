#! /usr/bin/env node

/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const program = require('commander')
const { create } = require('../lib/create')
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

program.parse(process.argv)

