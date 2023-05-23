#! /usr/bin/env node
const ora = require('ora')
const program = require('commander')
const inquirer = require('inquirer')
const chalk = require('chalk')
const download = require('download-git-repo')

program
    .version(require('../package.json').version)
    .usage('<command> [options]')
    .command('add', 'add a new template')
    .command('delete', 'delete a template')
    .command('list', 'list all the templates')
    .command('init', 'generate a new project from a template')

// 解析命令行参数
program.parse(process.argv)