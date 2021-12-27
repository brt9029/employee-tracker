const inquirer = require('inquirer');

async function initialPrompt() {
    return inquirer
        .prompt({
                type: 'list',
                name: 'option',
                message: "What would you like to do?",
                choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
            })
        .then(selection =>{
            const mysql = require('mysql2');
            const db = mysql.createConnection(
                {
                    host: 'localhost',
                    user: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: 'company'
                },
                console.log('Connected to the company database.')
            );
            if(selection.option === 'View all departments'){
                return db.promise().query(`SELECT * FROM department`)
                    .then(([rows, fields]) => {
                        console.log(rows);
                    })
                    .catch(console.log)
                    .then( () => {
                        db.end()
                        initialPrompt();
                    });
            }
            if(selection.option === 'View all roles'){
                return viewRoles();
            }
            if(selection.option === 'View all employees'){
                return viewEmployees();
            }
            if(selection.option === 'Add a department'){
                return addDepartment();
            }
            if(selection.option === 'Add a role'){
                return addRole();
            }
            if(selection.option === 'Add an employee'){
                return addEmployee();
            }
            if(selection.option === 'Update an employee role'){
                return updateEmployee();
            }
        })
}



module.exports = initialPrompt;