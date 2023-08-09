const mongoose=require("mongoose");

const schema=mongoose.Schema({
    name:{
        Types:String,
        required:[true,'subcategory name required'],
        trim:true,
        unique:[true,'subcategory name uniqe'],
        minlength:[2,'too short subcategory name']
    },
    category:{
        type:Types.ObjectId,
        ref: 'category'
    },
    Slug:{
        type:String,
        lowercase:true,
    }
},{timesstamps:true});
module.exports=mongoose.model('subcategory',schema);