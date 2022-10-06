// class varClass{ 
//     ret() {
//         return new varClass;
//     }
//     on() {
//         return new varClass;
//     }
// }

// let tempVar1 = new varClass();

// let tempVar2 = tempVar1.ret().on();

class varClass{
    constructor(func) {
        this.state = '';
        this.result = '';
    }

    ret() {
        return new varClass;
    }
    on() {
        return new varClass;
    }
    resolve(meg) {
        this.result = meg;
        this,state = 'resolved'
    }
    then(func2) {
        if (this.state == 'resolved'){
            func2(this.result);
        } else if (this.state == 'rejected') {

        }
        return this
    }
}

let tempVar1 = new varClass();
tempVar1.resolve('성공');
tempVar1.then((message)=>{console.log(message);});