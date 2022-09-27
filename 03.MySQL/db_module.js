const mysql = require('mysql');
const config = require('./mysql.json');
module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            if (err) {
                console.log('mysql connection error');
                console.log(err);
            }
        });
        return conn;
    },
    /* getList: function(callback) {            //1번
        const conn = this.getConnection();
        const sql = `SELECT gid, NAME, DATE_FORMAT(debut, '%Y-%m-%d') AS debut, title 
                    FROM girl_group
                    JOIN song ON girl_group.hit_song_id = song.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                    throw err;
            callback(rows);
        });
        conn.end(); 
    }, */

    /* getsongList: function(callback) {            //2번
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, name
                    FROM song
                    JOIN girl_group ON girl_group.hit_song_id = song.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                    throw err;
            callback(rows);
        });
        conn.end();
    }, */

    /* searchgid: function(params, callback) {      //3번
        const conn = mysql.createConnection(config);
        const sql = `SELECT gid, NAME, DATE_FORMAT(debut, '%Y-%m-%d') AS debut, title 
                    FROM girl_group
                    JOIN song ON girl_group.hit_song_id = song.sid
                    WHERE gid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                    throw err;
                callback(rows);
            });
            conn.end();
    }, */

    /* searchsid: function(params, callback) {     //4번
        const conn = mysql.createConnection(config);
        const sql = `SELECT sid, title, lyrics, name
                    FROM song
                    JOIN girl_group 
                    ON girl_group.hit_song_id = song.sid
                    WHERE sid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                    throw err;
                callback(rows);
            });
            conn.end();
    }, */
    /* insertgirl_group: function(params, callback) {       //5번
        const conn = this.getConnection();
        const sql = `INSERT INTO girl_group (NAME, debut, hit_song_id)
                            VALUES(?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, */

    /* getglist: function(params, callback) {       //6번
        const conn = this.getConnection();
        const sql = `SELECT * FROM girl_group where gid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    }, */

   /*  updategirl_group: function(params, callback) {       //6번
        const conn = this.getConnection();
        const sql = `UPDATE girl_group SET NAME=?, debut=?, hit_song_id=?
                        WHERE gid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, */

    /* getalllist: function (callback) {       //7번
        const conn = this.getConnection();
        const sql = `SELECT * FROM girl_group;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    }, */

    /* deletegirl_group: function(params, callback) {      //7번
        const conn = this.getConnection();
        const sql = `DELETE FROM girl_group WHERE gid=?`;
        conn.query(sql, params, (err, fields)=> {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, */

    /* getsong: function(callback) {            //8번
        const conn = this.getConnection();
        const sql = `SELECT * FROM song;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                    throw err;
            callback(rows);
        });
        conn.end();
    }, 

    insertsong: function(params, callback) {       //8번
        const conn = this.getConnection();
        const sql = `INSERT INTO song (title, lyrics)
                            VALUES(?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, */

    /* getslist: function(params, callback) {       //9번
        const conn = this.getConnection();
        const sql = `SELECT * FROM song where sid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },

    updatesong: function(params, callback) {       //9번
        const conn = this.getConnection();
        const sql = `UPDATE song SET title=?, lyrics=?
                        WHERE sid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }, */

    getallsonglist: function (callback) {       //10번
        const conn = this.getConnection();
        const sql = `SELECT * FROM song;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },

    deletegirl_group: function(params, callback) {      //10번
        const conn = this.getConnection();
        const sql = `DELETE FROM song WHERE sid=?`;
        conn.query(sql, params, (err, fields)=> {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
}