// 비동기적으로 파일 읽기 - 권장 사항

const fs = require('fs');

fs.readFile('tmp/textfile.txt','utf8', (err, data)=> {
    // if (err)
    //     console.log(err);
    // console.log('파일에서 읽은 데이터:', data);
    //파일 에러는 잘 발생하지 않으므로 error 부분 처리를 생략
    console.log('파일에서 읽은 데이터:', data);
});