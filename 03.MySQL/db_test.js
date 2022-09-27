const dm = require('./db_module');
/* dm.getList(rows => {             //1번
    for (let row of rows) {
        console.log(row.gid, row.NAME, row.debut, row.title);
    }
}); */

/* dm.getsongList(rows => {            //2번
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics, row.name);
    }
}); */

/* dm.searchgid(1, rows => {            //3번
    for (let row of rows) {
        console.log(row.gid, row.NAME, row.debut, row.title);
    }
}); */

/* dm.searchsid(101, rows => {            //4번
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics, row.name);
    }
}); */

/* dm.insertgirl_group(['테스트', '2009-09-09', 122], () => {
    dm.getList(rows => {                //5번
        for (let row of rows) {
            console.log(row.NAME, row.debut);
        }
    })
}); */

/* dm.updategirl_group(['테스트', '2009-09-09', 122, 12], () => {
    dm.getglist(12, rows => {       //6번
        for (let row of rows) {
            console.log(row.gid, row.name, row.debut, row.hit_song_id);
        }
    });
}); */

/* dm.deletegirl_group(1017, () => {       //7번
    dm.getalllist(rows => {
        for (let row of rows) {
            console.log(row.gid, row.name, row.debut, row.hit_song_id);
        }
    });
}); */

/* dm.insertsong(['테스트1', '가사1'], () => {      //8번
    dm.getsong(rows => {
        for (let row of rows) {
            console.log(row.title, row.lyrics);
        }
    })
}); */

/* dm.updatesong(['테스트2', '가사2', 118], () => {
    dm.getslist(118, rows => {       //9번
        for (let row of rows) {
            console.log(row.sid, row.title, row.lyrics);
        }
    });
}); */

dm.deletegirl_group(118, () => {       //10번
    dm.getallsonglist(rows => {
        for (let row of rows) {
            console.log(row.sid, row.title, row.lyrics);
        }
    });
});