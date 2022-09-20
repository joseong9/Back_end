//promise
//producer
function delayP(ms) {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(()=> {
            resolve('success')  // resolve는 성공했을 때 실행되는 callback 함수
            }, ms);
        } catch(e) {
            reject('fail');  // reject는 실패했을 때 실행되는 callback 함수
        };
    });
};

//Consumer
delayP(1000)
    // .then((val)=>{
    //     console.log(val);
    // })
    .then(console.log)
    .catch(console.log);