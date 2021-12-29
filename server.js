require('dotenv').config()
const inquirer = require('inquirer');
const db = require('./db/connection');
const { departmentView, addDepartment } = require('./routes/departments');
const { employeeView, addEmployee, updateEmployee } = require('./routes/employees');
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
        case 'Update an employee role':
            getEmployee();
            break;
    }
};

function getEmployee() {
    // GETS current list of employees
    let employeeTable = [];
    db.query(`SELECT * FROM employees`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        rows.forEach(row => employeeTable.push(row.first_name + " " + row.last_name));
    });
    // GETS list of current roles
    let roleTable = [];
    db.query(`SELECT * FROM roles`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        rows.forEach(row => roleTable.push(row.title));
    });
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'placeholder',
                message: "Press enter to retrieve current list of employees"
            },
            {
                type: 'list',
                name: 'employees',
                message: "Which employee's role would you like to update?",
                choices: employeeTable
            },
            {
                type: 'list',
                name: 'roles',
                message: "What is the new role for this employee?",
                choices: roleTable
            }
        ])
        .then(response => {
            updateEmployee(response, employeeTable, roleTable);
            return start();
        })
};

function newEmployee() {
    let roles = [];
    db.query(`SELECT * FROM roles`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        rows.forEach(row => roles.push(row.title));
    });
    let managers = [];
    db.query(`SELECT * FROM employees`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        rows.forEach(row => managers.push(row.first_name + " " + row.last_name));
    });

    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'first',
                message: "What is the employee's first name?"
            },
            {
                type: 'input',
                name: 'last',
                message: "What is the employee's last name?"
            },
            {
                type: 'list',
                name: 'role',
                message: "What is the employee's role?",
                choices: roles
            },
            {
                type: 'list',
                name: 'manager',
                message: "Who is the employee's manager?",
                choices: managers
            }
        ])
        .then(response => {
            addEmployee(response, roles, managers);
            return start();
        })
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
        addRole(response, selection);
        return start();
    });
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
        return start();
    });
};

function start() {
    return initialPrompt()
    .then(response => {
        optionSelect(response);
    })
};

start();