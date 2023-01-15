print2();
console.log(print5);
print5();
for (let i = 0; i < 5; i++) {
    console.log(i);
}
// console.log('outside', i);

function print2() {
    console.log('inside print2:', 2);
}

var print5 = function () {
    console.log(5);
}