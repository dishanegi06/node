const express=require('express');
const router=express.Router();

const Fruit=require('../models/fruit');

//get a list of fruits from the db
router.get('/inventory',function(req,res)
{
   console.log("Getting all the items");
   Fruit.find({})
   .exec(function(err,fruits)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(fruits);
           res.json(fruits);
       }
   })
});

//finding specific fruit passing the specific fruitname
router.get('/inventory/:name',function(req,res)
{
   console.log("Getting one fruit");
   Fruit.findOne({})
   .exec(function(err,fruit)
   {
       if(err)
       {
           res.send('error has occured');
       }else{
           console.log(fruit);
           res.json(fruit);
       }
   })
});
//create new objects
router.post('/inventory',function(req,res)
{
   Fruit.create(req.body).then(function(fruit)
   {
       res.send(fruit);
   });
});
module.exports = router;
