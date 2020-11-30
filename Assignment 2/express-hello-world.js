var express=require('express');
var app1=express();
app1.get('/',function(req,res)
{
res.send('Hello, world!!');
});
app1.get('/time',function(req,res)
{
    var d = new Date();
    var n = d.toISOString();
res.send(n);
});

const PORT = process.env.PORT || 8080;

app1.listen(PORT,() =>
{
    console.log(`Server listening on port ${PORT}`)
});
/*let PORT=process.argv[2];
//console.log(PORT);

if(PORT==undefined){
  app.listen(8080);
  console.log("Listening to port 8080");
}
else{
  app.listen(PORT);
  console.log("Listening to port:" +PORT);
} */
