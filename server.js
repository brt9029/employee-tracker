require('dotenv').config()
const inquirer = require('inquirer');
const db = require('./db/connection');
const { departmentView, addDepartment } = require('./routes/departments');
const { employeeView, addEmployee } = require('./routes/employees');
const { roleView, addRole } = require('./routes/roles');

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
        case 'Add a role':
            newRole();
            break;
        case 'Add an employee':
            newEmployee();
            break;
    }
};

function newRole() {
    let selection = []
    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        rows.forEach(row => selection.push(row.name));
    });
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title for the new role'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role (numbers only)'
        },
        {
            type: 'list',
            name: 'department',
            message: 'Designate a department for this role',
            choices: selection
        }
    ])
    .then(response => {
        addRole(response);
        return start();
    })
};

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
};

start();