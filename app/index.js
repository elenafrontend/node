// * 1
/* 
то же самое, что и 
const userModuleExport = require('./user.js');
const user = userModuleExport.user;
*/
// * const { user } = require('./user.js');
// * user.sayHi(); // Hi! My name is Ann

// * 2 и 3
const user = require('./user.js');
user.sayHi(); // Hi! My name is Ann

// * примитив
// const answer = require('./a.js');
// console.log(answer); //42