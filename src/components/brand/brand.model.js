import { Schema,model,Types } from "mongoose";

const schema=Schema({
    name:{
        Types:String,
        required:[true,'brand name required'],
        trim:true,
        unique:[true,'brand name uniqe'],
        minlength:[2,'too short brand name']
    },
    image:String,

},{timesstamps:true});
module.exports=model('brand',schema);