const express=require('express');
const bodyParser=require('body-parser');
const mongoose= require('mongoose');
const router=require('./routes2/api2');
//assigning the poperties of express

const app=express();

//connect to mongodb
mongoose.connect('mongodb://localhost/fruitInventoryUpdateSpecific');
mongoose.Promise=global.Promise;
app.use(bodyParser.json());

//initalize the routes
app.use('/api2',router);

//listen for requests
app.listen(process.env.port||8083,function()
{
    console.log("Listening to port for requests");
});

