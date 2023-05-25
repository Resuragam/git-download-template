module.exports = {
    inquirerConfig: [
        {
            type: 'input',
            name: 'firstName',
            message: 'what‘s your first name',
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'what‘s your last name',
        },
        {
            type: 'list',
            name: 'gender',
            message: 'what‘s your gender',
            choices: [
                'male   ',
                'female'
            ]
        },
        {
            type: 'checkbox',
            name: 'hobby',
            message: 'what‘s your hobby',
            choices: [
                'sign',
                'dance',
                'rap',
                'basketball'
            ]
        }
    ]
}