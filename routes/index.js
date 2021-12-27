const inquirer = require('inquirer');
const viewDepartments = require('./departments');

function initialPrompt() {
    return inquirer
        .prompt({
                type: 'list',
                name: 'option',
                message: "What would you like to do?",
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            })
}

module.exports = initialPrompt;