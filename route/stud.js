const express = require('express')
const router=express.Router();

const student=require('../modal/student')
router.get('/',(req,res)=>{
student.find().exec().then((doc)=>{
    if(doc.length>0)
    {
console.log(doc)
res.status(200).json({
    status:"success",
    message:"verified",
    length:doc.length,
    data:doc
})
}
else{

res.status(200).json({
    status:"sucess",
    message:"no data found",
    data:doc,
})
}
}).catch((err)=>{
console.log(err)
res.status(500).json({
    status:"failure",
    message:"unable to fetch",
    error:err
})
})
});
module.exports=router;