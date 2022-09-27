const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
    getConnection : function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            console.log('mysql connection error');
            console.log(err);

        })
        return conn;
    },
    getList: function(callback) {
        const conn = this.getConnection();
        const sql = 'SELECT * FROM tigers WHERE isDeleted=0;';
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    }
}