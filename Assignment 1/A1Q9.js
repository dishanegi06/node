var fs = require('fs')
var concat = require('concat-stream')
var arrwrite = concat(function(data) {console.log(data);});

//reading contents from file and writing it to concat method
arrwrite.write(fs.readFileSync('text.txt','utf-8').split(" "))
arrwrite.end()