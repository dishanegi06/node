const express=require('express');
const router=express.Router();

const Fruit=require('../models1/fruit1');

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
//update objects
router.put('/inventory',function(req,res)
{
   console.log("updating all the items");
   Fruit.updateMany(req.body).then(function()
   {
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
