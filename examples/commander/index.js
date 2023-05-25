/**
 * @Description: 编写一个指令集合进行四则运算
 * @author: Haoyu Huang
 * @date: 2023/5/25
*/

const program = require('commander')
const { version } = require('../../package.json')

function add(p, q) {
    return Number(p) + Number(q)
}

function subtract(p, q) {
    return p - q
}

function multiply(p, q) {
    return p * q
}

function division(p, q) {
    return p / q
}

program
    .version(version)
        .option('-a, --Add <value...>', 'Perform addition')
    .option('-s, --Subtract <value...>', 'Perform subtract')
    .option('-m, --Multiply <value...>', 'Perform multiply')
    .option('-d, --Division <value...>', 'Perform division')
    .parse(process.argv)

const options = program.opts()

if(options.Add) {
    console.log(add(options.Add[0], options.Add[1]))
} else if(options.Subtract) {
    console.log(subtract(options.Subtract[0], options.Subtract[1]))
} else if(options.Multiply) {
    console.log(multiply(options.Multiply[0], options.Multiply[1]))
} else if(options.Division) {
    console.log(division(options.Division[0], options.Division[1]))
}


