const mysql = require('mysql');
config = {
    host:'localhost',
    user:'gangjuaischool',
    password:'gangjuaischoolpath',
    port:3306,
    database: 'world'
}

const connection = mysql.createConnection(config);

connection.connect();
const sql = `SELECT * FROM city WHERE population > 9000000;`;
connection.query(sql, function(err, rows, fields) {
    if (err)
        throw err;
    console.log(rows);
    console.log(fields);
});
connection.end();