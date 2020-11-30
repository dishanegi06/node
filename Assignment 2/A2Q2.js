var express=require('express');
var app1=express();
app1.get('/year/:age',function(req,res)
{let age=req.params.age;
    let ts = Date.now();
    let today = new Date(ts);
    let year = today.getFullYear();
    let birthYear=year-age;
res.send('You were born in '+birthYear);
});
app1.listen(3000);