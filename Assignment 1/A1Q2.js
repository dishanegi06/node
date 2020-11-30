var fs=require('fs');

var readMe=fs.readFileSync('readMe.txt','utf-8');

console.log(readMe);