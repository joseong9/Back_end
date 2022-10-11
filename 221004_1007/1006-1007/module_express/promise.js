const promise = new Promise((resolve, reject) => {
    resolve('성공');
    reject('실패');
});

promise
.then((message) => {

})
.catch((error) => {
    console.log(error);
});