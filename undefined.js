/* 
 8 ways to get Undefine
1. vairable that is not initialized will give undefined
2. function with no return will give undefined
3. parameter that is not passed will be undefined
4. if return has nothing on the right side will return undefined
5. property that doesn't exists on an object will give you undefined
6. accessing array elements outside oth the index range will give undefined
7. deleting an element inside an array then accessing that element by the index value will give undefined
8. set a value directly to undefined

*/

let first;
console.log(first);


function second(a, b) {
    const total = a + b;
}
const result = second(5, 10);
console.log(result);


function third(a, b, c, d) {
    const total = a + b + c + d;
    console.log(a, b, c, d);
}
third(2, 5);


function noNegative(a, b) {
    if (a < 0 || b < 0) {
        return
    }
    return a + b;
}
const total = noNegative(2, -5);
console.log(total);


const fifth = { id: 2, name: 'ponchom', age: 40 }
console.log(fifth.age, fifth.salary);


const sixth = [4, 59, 65, 19, 68];
// you should not do it. Insted use splice
delete sixth[1];
console.log(sixth[1], sixth[5], sixth[200]);
console.log(sixth);


const eighth = undefined;
console.log(eighth);

const ninth = null;

const data = { result: [], updated: null }

console.log(typeof undefined);

console.log(typeof null);