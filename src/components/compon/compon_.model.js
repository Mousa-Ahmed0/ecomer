const mongoose =require("mongoose");

const schema=mongoose.Schema({
    code:{
        Types:String,
        required:[true,'compon name required'],
        trim:true,
        unique:[true,'compon  uniqe'],
    },
    expires:{
        type:Date,
    } ,
    discount:{
        type:Number,
    }
},{timesstamps:true});
module.exports=mongoose.model('compon',schema);