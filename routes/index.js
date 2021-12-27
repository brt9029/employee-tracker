const inquirer = require('inquirer');
const { departmentView, addDepartment } = require('./departments');
const { employeeView } = require('./employees');
const { roleView } = require('./roles');

function initialPrompt() {
    return inquirer
        .prompt({
                type: 'list',
                name: 'choice',
                message: "What would you like to do?",
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            })
        .then(option => {
            return option;
        });
};

function optionSelect(option) {
    if(option.choice === 'View all departments') {
        departmentView();
    }
    if(option.choice === 'View all roles') {
        roleView();
    }
    if(option.choice === 'View all employees') {
        employeeView();
    }
    if(option.choice === 'Add a department') {
        newDepartment();
    }
    if(option.choice === 'Add a role') {
        newRole();
    }
    if(option.choice === 'Add an employee') {
        newEmployee();
    }
    return start();
}

function newDepartment(){
    inquirer
    .prompt({
        type: 'input',
        name: 'department',
        message: 'Enter the name of the new department to add'
    })
    .then(response => {
        addDepartment(response);
    });
};

function newRole() {

}

function newEmployee() {

}

function start() {
    initialPrompt().then((option) => {
        optionSelect(option);
    })
};

module.exports = start;