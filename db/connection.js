const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: 'company'
    },
    console.log('Connected to the company database.')
);

module.exports = db;