const fs = require('fs');

// 디렉토리에 있는 파일 목록 알아내기
fs.readdir('tmp', (err,files) => {
    console.log(files);
});

//파일의 정보 알아내기
fs.stat('tmp/a.txt',(err, stats) => {
    console.log(stats.mtime);   //최종 수정 시간
    console.log(stats.size);    //파일의 크기
});

console.clear();

//디렉토리에 있는 파일의 최종 수정 시간 파일의 크기 파일명
fs.readdir('tmp', (err, files) => {
    for (let file of files) {
        fs.stat('tmp/'+file, (err, stats) => {
            console.log(`${stats.mtime}\t${stats.size}\t${file}`)
        });
    }
});

//파일 삭제

fs.unlink('tmp/singles.txt', err => {
    if (err)
        console.log(err);
});

//파일 이름 변경

fs.rename('tmp/single.txt', 'tmp/싱글.txt', err => {
    if (err)
        console.log(err);
});