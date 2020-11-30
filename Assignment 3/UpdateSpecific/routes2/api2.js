const express=require('express');
const router=express.Router();

const Fruit=require('../models2/fruit2');

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
//update specific objects
router.put('/inventory/:name',function(req,res)
{
   console.log("updating specific items");
   Fruit.findOneAndUpdate({name:req.params.name},req.body).then(function()
   {
    Fruit.findOne({name:req.params.name}).then(function(fruit)
    {
        console.log(req.body);
        res.send(fruit);
    });
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