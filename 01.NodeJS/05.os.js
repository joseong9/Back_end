const os = require('os');

const cpus = os.cpus();
console.log(cpus.length);

console.log(os.totalmem()/Math.pow(2,30)+ 'GB', os.freemem());

console.log(os.networkInterfaces());