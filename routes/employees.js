const db = require('../db/connection');

// ADD new employee
function addEmployee(response) {

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
}

module.exports = {
    employeeView
};