var mongoose=require("mongoose"),Schema=mongoose.Schema;module.exports=mongoose.model("Item",new Schema({name:String,type:String,desc:String,price:Number,image:String,modifiers:[{name:String,color:String,val:Number}],date:{type:Date,default:Date.now}}),"items");