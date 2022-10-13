const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');


if (isMainThread) { // 부모일 때 D
    const worker = new Worker(__filename);

    worker.on('message', message => {
        console.log('worker -> main', message);
        if (message == 'Worker is done') {
            console.log("main's job");
        };
    });
    console.log("main is end");

} else {    //워커일 때
    console.log("worker' job");

    parentPort.postMessage('Worker is done');
    parentPort.close();
}