const mysql = require('mysql');
const config = require('./mysql.json');

const con = mysql.createConnection(config);

conn.connect();
const sql = 'SELECT * FROM tigers;';
conn.query(sql, (err, rows, fields) => {
    if (err)
        throw err;
    for (let row of rows) {
        console.log(`${row.id}\t${row.players}\t${row.backnumber}\t${row.position}\t${row.isDeleted}`)
    }
});
conn.end();