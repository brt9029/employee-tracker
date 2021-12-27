const db = require('../db/connection');

// ADD new role
function addRole(response) {

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
    roleView
};