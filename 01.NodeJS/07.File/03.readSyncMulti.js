const fs = require('fs');

let bufA = fs.readFileSync('tmp/a.text', 'utf8');
let bufB = fs.readFileSync('tmp/b.text', 'utf8');
let bufC = fs.readFileSync('tmp/c.text', 'utf8');

console.log(bufA);
console.log(bufB);
console.log(bufC);