const db = require('../db/connection');

// ADD a new department
function addDepartment(response) {
    db.query(`INSERT INTO departments (name) VALUES (?)`, response.department, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(`${response.department} was added successfully!`);
        return;
    });
};

// GET all departments
function departmentView() {
    db.query(`SELECT * FROM departments`, (err, rows) => {
        if (err) {
            console.log(err);
        }
        console.log('');
        console.table(rows);
    });
};

module.exports = {
    departmentView,
    addDepartment
};