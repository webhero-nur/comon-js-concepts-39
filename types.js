// strongly typed Language
// int a = 5;
// string b = 'some string text here';
// bool c = True;
// object student = { name: 'Halim Mia', id: 102}
// int[] numbers = [65, 41, 69, 55]
// string[] friends = ['abul', 'babul']

// JavaScript is a dynamic typed Language

//primitive type
const a = 5;
const b = 'Samsu eknon kola beche';
const d = true;


// non-primitive
const ages = [45, 65, 22]
const student = { id: 25, class: 7 }

// console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: 'web developer' };
let q = p;
q.job = 'front end developer'
console.log(p, q);