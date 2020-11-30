var express=require('express');
var app1=express();
app1.get('/home',function(req,res)
{
res.send('Hello, world!!');
});
app1.listen(process.argv[2]);