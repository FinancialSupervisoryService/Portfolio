// javascript is very flexible
// flexible === dangerous
// added ECMAscript 5

'use strict';
// 2. Variable
// let (added in ES6)
let globalName = 'global name'
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name); 
    console.log(globalName);
}
console.log(name);
console.log(globalName);


// var (don't ever use this)
// var hoisting <move declaration from bottom to top)
