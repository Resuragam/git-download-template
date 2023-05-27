/**
 * @Description:
 * @author: Haoyu Huang
 * @date: 2023/5/27
*/

const featureConfig = [
    {
        name: 'feature',
        type: 'checkbox',
        message: 'Check the features needed for your project:',
        choices: [
            {
                name: 'TypeScript',
                value: 'TypeScript'
            },
            {
                name: 'Axios',
                value: 'Axios'
            },
            {
                name: 'Router',
                value: 'Router'
            },
            {
                name: 'Vuex',
                value: 'Vuex'
            },
            {
                name: 'Eslint',
                value: 'Eslint'
            }
        ]
    }
]

module.exports = {
    featureConfig
}