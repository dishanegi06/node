const sum=require('./operations/sum');
sum(3,44);
const subtraction=require('./operations/subtraction');
subtraction(4,2);
const multiplication=require('./operations/multiplication');
multiplication(3,2);
const division=require('./operations/division');
division(4,2);
var moment = require('moment');
console.log("Today is: " + moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));