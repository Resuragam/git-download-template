#! /usr/bin/env node
import inquirer from 'inquirer';
import repo from '../repo/index.js';
import { cwd } from 'process';
import download from 'download-git-repo';
import path from 'path';
import { existsSync } from 'fs';
import ora from 'ora';

console.log('hhy-cli started.');

const __dirname = cwd();
const repoNames = Object.keys(repo);

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Your name',
            default: 'hhy-cli-demo',
        },
        {
            type: 'list',
            name: 'template',
            message: 'Choose your template to generate',
            choices: repoNames,
        },
    ])
    .then(async (answers) => {
        try {
            downloadTemplate(answers.template, answers.name);
        } catch (e) {
            console.log('Download failed');
        }
    });

async function downloadTemplate(templateName, projectName) {
    try {
        if (existsSync(path.resolve(__dirname, projectName))) {
            console.log(`The file \`${projectName}\` already exists.`);
            return;
        }

        const repoUrl = `direct:${repo[templateName]}`;
        const spinner = ora(`Downloading \`[${templateName}]${projectName}\``);

        spinner.start();
        download(
            repoUrl,
            projectName,
            {
                clone: true,
            },
            () => {
                spinner.stop();
                console.log(`
You have succeed making project ${projectName}✨✨! Now try to:

cd ${projectName}
pnpm i
pnpm dev
        `);
            }
        );
    } catch {
        console.log('failed');
    }
}