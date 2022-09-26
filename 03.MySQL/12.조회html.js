const fs = require('fs');
const mysql = require('mysql');
const config = require('./mysql.json');
let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Country Code</th>
                <th>District</th>
                <th>Population</th>
            </tr>
`;

const connection = mysql.createConnection(config);

connection.connect();
const sql = `SELECT * FROM city WHERE population > 9000000;`;
connection.query(sql, function(err, rows, fields) {
    if (err)
        throw err;
    // console.log(rows);   rows : 배열 타입
    for (let row of rows) {
        let line = '<tr>';
        line += `<td>${row.ID}</td><td>${row.Name}</td><td>${row.CountryCode}</td><td>${row.District}</td>${row.Population}</td>`
        line += '<tr/>\n';
        html += line;
    }
    html += `
        </table>
    </body>
    </html>
    `
    fs.writeFile('12.table.html', html, err=> {
        
    })
});
connection.end();

