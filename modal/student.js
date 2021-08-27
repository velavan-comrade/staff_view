const mongoose=require('mongoose')
const studSchema=mongoose.Schema({
_id:mongoose.Schema.ObjectId,
studname:{type:String,unique:true},
id:Number,
age:Number,
mobile:Number,
class:Number,
address:String,
zipcode:String,
gender:{type:String,enum:['MALE','FEMALE']}
});

module.exports=mongoose.model("student",studSchema);