var fs = require('fs');
var wordToFind ;


fs.readFile('ReadMeQ5.txt', 'utf8', function(err, contentFile) {  
    if (err) throw err;
    var text = contentFile.toLowerCase().split(' ');
    var aFilteredWords = text.filter(function(word){
        return word.includes(wordToFind);
    });
    console.log('The word "' + wordToFind + '" appears ' + aFilteredWords.length + " times in the text.");
});