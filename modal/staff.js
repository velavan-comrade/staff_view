const mongoose=require('mongoose')
const staffSchema=mongoose.Schema({
_id:mongoose.Schema.ObjectId,
staffname:{type:String,unique:true},
id:Number,
age:Number,
mobile:Number,
salary:Number,
address:String,
zipcode:String,
gender:{type:String,enum:['MALE','FEMALE']}
});

module.exports=mongoose.model("staff",staffSchema);