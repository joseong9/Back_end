const fs = require('fs');

const buffer = '비동기적으로 파일 쓰기';

fs.writeFile('tmp/async.txt', buffer, error => {
    if(error)
        console.log(error);
});