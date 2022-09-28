const mysql = require('mysql');
const config = require('./mysql.json');

function getConnection() {
    const conn = mysql.createConnection(config);
    conn.connect(err => {
        if (err) {
            console.log('mysql connection error');
            console.log(err);
        }
    });
    return conn;
}

const tableSql = `
    CREATE TABLE if NOT EXISTS tigers (
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        player VARCHAR(10) NOT NULL,
        backNo INT,
        position VARCHAR(10),
        isDeleted INT DEFAULT 0
    );`;
const players = [
    {player:'양현종',backNo:54,position:'투수'},
    {player:'이의리',backNo:48,position:'투수'},
    {player:'박동원',backNo:10,position:'포수'},
    {player:'김선빈',backNo:3,position:'내야수'},
    {player:'박찬호',backNo:1,position:'내야수'},
    {player:'나성범',backNo:47,position:'외야수'},
    {player:'소크라테스',backNo:30,position:'외야수'},
];
const insertSql = `
    INSERT INTO tigers (player, backNo, position)
    VALUES (?, ?, ?);`;

let conn = getConnection();
conn.query(tableSql, (err, fields) => {
    if (err)
        throw err;
    for (let player of players) {
        conn.query(insertSql, [player.player,player.backNo,player.position], (err, fieds) => {
            if (err)
                throw err;
        });
    }
    conn.end();
});