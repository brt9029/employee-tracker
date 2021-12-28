const db = require('../db/connection');

// ADD new role
function addRole(response) {
    const sql = `INSERT INTO roles (title, salary, department_id)
                  VALUES (?,?,?)`;
    const params = [response.title, response.salary, response.department];
    db.query(sql, params, (err) => {
        if(err){
            console.log(err);
        }
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