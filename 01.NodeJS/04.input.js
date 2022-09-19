const readline = require('readline');
const r1 = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});
r1.setPrompt('숫자를 입력하세요');
r1.prompt()

r1.on('line', buffer => {
    let num = parseInt(buffer);
    let evenOdd = (num % 2 == 0) ? '짝수' : '홀수';
    console.log(`입력한 숫자는 ${num}이고 ${evenOdd}입니다`);

    r1.close()
})
