const db = require('../db/connection');

// ADD new role
function addRole(response, selection) {
    let index = selection.indexOf(response.department) + 1;
    const sql = `INSERT INTO roles (title, salary, department_id)
                  VALUES (?,?,?)`;
    const params = [response.title, response.salary, index];
    db.query(sql, params, (err) => {
        if(err){
            console.log(err);
        }
        console.log('');
        console.log(index);
        console.log('New Role has been added!');
    });
};

// GET all roles
function roleView() {
    db.query(`SELECT * FROM roles`, (err, rows) => {
        if(err) {
            console.log(err)
        }
        console.log('');
        console.log('View all roles');
        console.table(rows);
    });
};

module.exports = {
    roleView,
    addRole
};