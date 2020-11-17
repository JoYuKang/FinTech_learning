function aFunc() {
    setTimeout(function () {
        console.log('a');
    },1700)
}

function bFunc() {
    setTimeout(function () {
        console.log('b');
    },1000)
}

function cFunc() {
    setTimeout(function () {
        console.log('c');
    },1200)
}

aFunc();
bFunc();
cFunc();
