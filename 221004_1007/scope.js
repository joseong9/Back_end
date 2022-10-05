

// let classEx;
console.log('start');

class Human {
    constructor(param1) {
        this.type = param1;
    }
    static isHuman(param1) {
        let tempVar1 = param1 instanceof Human;
        return tempVar1;
    }
    breath() {
        alert('hahaha');
    }
}

class Zero extends Human {
    constructor(param1, param2, param3) {
        super(param1);
        this.firstname = param2;
        this.lastname = param3;
    }
    
    sayName() {
        super.breath();
        alert(`${this.firstname} ${this.lastname}`);
    }
}

const newZero = new Zero('human', 'Zero', 'Cho');
Human.isHuman(newZero);

function wrapper() {
    let varLet5 = 1;
    const varConst5 = 2;
    var varVar5 = 3;
    varNone5 = 4;
    function inner() {
        let varLet6 = 1;
        const varConst6 = 2;
        var varVar6 = 3;
        varNone6 = 4;
    }
    inner();    // 함수 호출할 땐 최상단에 있는 것처럼... (this = global)
}
wrapper();


var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        var that = this;
        this.friends.forEach(
            (param1) => {console.log(that.name, param1);})
    }
}

relationship1.logFriends();


let varlet4 = 1;
var varvar4 = 2;
{
    {
        console.log(1);
        let varlet2 = 1;
        let varVar2 = 2;
    }
    let varLet = 1;
    var varVar = 2;
}   // let은 블록 안에서만.

console.log('bk');

function func() {
    let varLet2 = 1;
    var varVar2 = 2;
}

func();

