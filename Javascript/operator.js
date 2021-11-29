// 1. String concatenation

console.log('my' + 'cat');
console.log('1'+ 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// 2.  Numeric operatiors

console.log(1 + 1); //add
console.log(1 - 1); //substrct
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(1 % 1); //remainder
console.log(1 ** 1); //exponentiation

// 3. Increment and decrement operators

let counter = 2;
const preIncrement = ++counter;

console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);
// counter = counter + 1;
// preIncrement = counter;

const  postIncrement = counter++;
// same as -- //

// 4. Assignment operators

let x = 3;
let y = 6;
x += y; // x= x+y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: ||(or) , && (and), ! (not)

const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value

console.log (`or: ${value1 || value2 || check()}`);
console.log (`or: ${value1 && value2 && check()}`);
  // often used to compress long if-statement
  // nullableObject && nullableObject.something

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('wow');
    }
    return true;
}
// && (and), finds the first falsy value

// ! (not)
console.log(!value1);

// 7. Equality

const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// ===strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { nmae: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);
 
const name = 'df';
console.log(name === 'ellie' ? 'yes' : 'no');
