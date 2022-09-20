const fs = require('fs');

let buffer = '\n어펜드 모드로 동작합니다\n';

fs.writeFile('tmp/async.txt', buffer, {flag:'a'},err => {
    if(err)
        console.log(err);
});