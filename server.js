require('dotenv').config()
const inquirer = require('inquirer');
const db = require('./db/connection');
const { departmentView, addDepartment } = require('./routes/departments');
const { employeeView } = require('./routes/employees');
const { roleView } = require('./routes/roles');

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
    switch(option.choice){
        case 'View all departments':
            departmentView();
            return start();
        case 'View all roles':
            roleView();
            return start();
        case 'View all employees':
            employeeView();
            return start();
        case 'Add a department':
            newDepartment();
            break;
    }
}

function newDepartment(){
    return inquirer
    .prompt({
        type: 'input',
        name: 'department',
        message: 'Enter the name of the new department to add'
    })
    .then(response => {
        addDepartment(response);
    });
};

function start() {
    initialPrompt()
    .then(response => {
        optionSelect(response);
    })
}

start();