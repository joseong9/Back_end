const fs = require('fs');

fs.readFile('tmp/a.txt', 'utf8', (err,bufA) => {
    console.log(bufA);
})
fs.readFile('tmp/b.txt', 'utf8', (err,bufB) => {
    console.log(bufB);
})
fs.readFile('tmp/c.txt', 'utf8', (err,bufC) => {
    console.log(bufC);
})

//순서 보장 방법
console.log('순서 보장 방법')
fs.readFile('tmp/a.txt','utf8',(err,bufA) => {
    console.log(bufA);
    fs.readFile('tmp/b.txt','utf8',(err,bufB) => {
        console.log(bufB);
        fs.readFile('tmp/c.txt','utf8',(err,bufC) => {
            console.log(bufC);
        });
    });
});