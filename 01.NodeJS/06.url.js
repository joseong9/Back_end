const url = require('url');

const urlSample = 'https://www.youtube.com/watch?v=U6-qfQxUuqw'
const parsedObject = url.parse(urlSample);

console.log(parsedObject);
console.clear();
console.log(parsedObject.href);
console.log(parsedObject.query);