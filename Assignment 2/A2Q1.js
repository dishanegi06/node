var express=require('express');
var app1=express();
app1.get('/',function(req,res)
{
res.send('Hello, world!!');
});
app1.listen(3000);