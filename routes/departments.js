const db = require('../db/connection');
const cTable = require('console.table');

// ADD a new department
function addDepartment(response) {
    db.query(`INSERT INTO departments (name) VALUES (?)`, response.department, (err, row) => {
        if (err) {
            console.log(err);
        }
        console.log(`New department was added successfully!`);
    });
};

// GET all departments
async function departmentView() {
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