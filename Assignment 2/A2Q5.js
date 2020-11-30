var express=require('express');
var bodyParser=require('body-parser');

var app1=express();
var urlencodedParser=bodyParser.urlencoded({extended:false});

app1.set('view engine','ejs');

app1.get('/form',function(req,res)
{
res.render('form',{qs:req.query});
});

app1.post('/form',urlencodedParser,function(req,res)
{
    console.log(req.body.str.split('').reverse().join(''));
    res.render('form',{qs:req.query});
})

app1.listen(3000);

