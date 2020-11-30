const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const FruitSchema=new Schema({
    name:String,
    quantity:Number
});

const Fruit=mongoose.model('fruit1',FruitSchema);
module.exports=Fruit;