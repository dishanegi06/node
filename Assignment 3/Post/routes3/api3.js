const express=require('express');
const router=express.Router();

const Fruit=require('../models3/fruit3');

//get a list of ninjas from the db
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

//create new objects
router.post('/inventory',function(req,res)
{
   Fruit.create(req.body).then(function(fruit)
   {
       res.send(fruit);
   });
});
module.exports = router;