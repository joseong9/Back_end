const spawn = require('child_process').spawn;
var process = spawn('python', ['-v', '221004_1007\\child_process.py']);

process.stdout.on('data', function(data) {
    console.log(data.toString());
});

process.stderr.on('data', function(data) {
    console.log(data.toString());
});