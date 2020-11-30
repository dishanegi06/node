const express=require('express');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const router=require('./routes3/api3');
//assigning the poperties of express

const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/fruitInventoryPost');
mongoose.Promise=global.Promise;
app.use(bodyParser.json());

//initalize the routes
app.use('/api3',router);

//listen for requests
app.listen(process.env.port||8084,function()
{
    console.log("Listening to port for requests");
});

