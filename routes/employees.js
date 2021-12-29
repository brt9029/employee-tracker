const db = require('../db/connection');

// UPDATE existing employee
function updateEmployee(response, employeeTable, roleTable) {
    const employee_id = employeeTable.indexOf(response.employees) + 1;
    const role_id = roleTable.indexOf(response.roles) + 1;
    const sql = `UPDATE employees
                 SET roles_id = ${role_id}
                 WHERE id = ${employee_id}`
    db.query(sql, (err) => {
        if (err){
            console.log(err);
        }
        console.log('');
        console.log('Employee role has been updated!');
    });
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