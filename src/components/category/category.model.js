const mongoose= require('mongoose');

const schema=mongoose.Schema({
    name:{
        Types:String,
        required:[true,'category name required'],
        trim:true,
        unique:[true,'category name uniqe'],
        minlength:[2,'too short category name']
    },
    image:String,
    Slug:{
        type:String,
        lowercase:true,
    }
},{timesstamps:true});
module.exports=mongoose.model('category',schema);