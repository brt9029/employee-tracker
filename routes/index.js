const inquirer = require('inquirer');
const db = require('../db/connection');
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
        .then((option) => {
            return option;
        });
};

function optionSelect(option) {
    if(option.choice === 'View all departments') {
        departmentView();
        return start();
    }
    if(option.choice === 'View all roles') {
        roleView();
        return start();
    }
    if(option.choice === 'View all employees') {
        employeeView();
        return start();
    }
    if(option.choice === 'Add a department') {
        newDepartment();
        return start();
    }
    if(option.choice === 'Add a role') {
        newRole();
        return start();
    }
    if(option.choice === 'Add an employee') {
        newEmployee();
        return start();
    }
}

function newDepartment(){
    inquirer
    .prompt({
        type: 'input',
        name: 'department',
        message: 'Enter the name of the new department to add'
    })
    .then(response => {
        addDepartment(response)
    })
}

function newRole() {

}

function newEmployee() {

}

function start() {
    initialPrompt().then((option) => {
        optionSelect(option);
    })
};

// function optionSelect(choice) {
//     if(selection.option === 'View all departments'){
//                 return db.promise().query(`SELECT * FROM department`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//             if(selection.option === 'View all roles'){
//                 return db.promise().query(`SELECT * FROM role`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//             if(selection.option === 'View all employees'){
//                 return db.promise().query(`SELECT * FROM employee`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//             if(selection.option === 'Add a department'){
//                 return db.promise().query(`INSERT * INTO department (name)
//                                             VALUES(?)`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//             if(selection.option === 'Add a role'){
//                 return db.promise().query(`SELECT * FROM department`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//             if(selection.option === 'Add an employee'){
//                 return db.promise().query(`SELECT * FROM department`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//             if(selection.option === 'Update an employee role'){
//                 return db.promise().query(`SELECT * FROM department`)
//                     .then(([rows, fields]) => {
//                         console.table(rows);
//                     })
//                     .catch(console.log)
//                     .then( () => {
//                         db.end()
//                         initialPrompt();
//                     });
//             }
//         })
// }


module.exports = start;