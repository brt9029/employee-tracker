const db = require('../db/connection');

// ADD new employee
function addEmployee(response) {
    const sql = `INSERT INTO employees (first_name, last_name, roles_id, manager_id)
                  VALUES (?,?,?,?)`;
    const params = [response.first, response.last, response.role, response.manager];
    db.query(sql, params, (err) => {
        if(err){
            console.log(err);
        }
        console.log('');
        console.log('New Employee has been added!');
    });
};

// GET all employees
function employeeView() {
    db.query(`SELECT * FROM employees`, (err, rows) => {
        if(err) {
            console.log(err)
        }
        console.log('');
        console.log('Showing all employees');
        console.table(rows);
    });
};

module.exports = {
    employeeView,
    addEmployee
};