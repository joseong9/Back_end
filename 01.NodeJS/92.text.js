const fs = require('fs');

fs.readFile('07.File/tmp/from.txt', 'utf8', (err, data) => {
    //console.log(data);
    const dataArray = data.split('\n').map(s => s.trim());  // \r 제거
    let output = '';
    dataArray.forEach((item, index) => {
        line = '';
        for (let i=0; i<index+1; i++) {
            line += item;
        }
        if (index != dataArray.length-1)
            output += line + '\n';
        else
            output += line;             // 마지막 줄엔 \n 를 넣지 않는다.
    });
    fs.writeFile('07.File/tmp/to.txt', output, err => {
        if (err)
            console.log(err);
    });
});