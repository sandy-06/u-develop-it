const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MYSQL username,
        user: 'root',
        password: 'root',
        database: 'election'

    },
    console.log('Connected to the election database.')
);




module.exports = db;