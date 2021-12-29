const db = require('../db/connection');

// UPDATE existing employee
function updateEmployee() {
    
}

// ADD new employee
function addEmployee(response, roles, managers) {
    const role_id = roles.indexOf(response.role) + 1;
    const manager_id = managers.indexOf(response.manager) + 1;
    const sql = `INSERT INTO employees (first_name, last_name, roles_id, manager_id)
                  VALUES (?,?,?,?)`;
    const params = [response.first, response.last, role_id, manager_id];
    db.query(sql, params, (err) => {
        if(err){
            console.log(err);
        }
        console.log('');
        console.log('New Employee has been added!');
        console.log(response);
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
    addEmployee,
    updateEmployee
};