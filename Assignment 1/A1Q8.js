const fs=require('fs');
const myArray=require('./myArray');
fs.readFile('./myArray.js','utf8', function(err, data)
{
if (err) throw error;
var sum=0;
data=myArray;
for(var i=0;i<myArray.length;i++)
{
  sum=sum+myArray[i];
}
console.log(`The sum of the numbers present in other file is : `+sum);
});