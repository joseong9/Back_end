const path = require('path');
console.log(__dirname);      //프로그램이 있는 위치
console.log(__filename);     //프로그램의 파일 이름

//상대 경로
const relpath = 'tmp/textfile.txt';

//절대 경로
const absPath = path.join(__dirname, 'tmp', 'textfile.txt')
console.log(absPath)