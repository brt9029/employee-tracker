const db = require('../db/connection');

function viewDepartments(){
    db.query(`SELECT * FROM department`, (err, rows) => {
        return rows;
    });
}

module.exports = viewDepartments;