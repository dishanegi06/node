var express=require('express');
var app=express();

app.get('/books', function(req,res)
{
    object =JSON.parse(`{"Name": "DIsha" , "Age":22}`);
    res.json(object);
});
app.listen(3000);