const db = require('../db/connection');

// Create a new department
function addDepartment(response) {

};

// Get all departments
function departmentView() {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('');
        console.log('View all departments');
        console.table(rows);
    });
};

module.exports = {
    departmentView,
    addDepartment
};