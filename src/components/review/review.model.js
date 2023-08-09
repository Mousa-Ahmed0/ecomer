const mongoose=require("mongoose");

const schema=mongoose.Schema({
    title:{
        type:String,
        required:[true,'user name required'],
        trim:true,
        minlength:[2,'too short subcategory name']
    },
    user:{
        type:Types.ObjectId,
        ref:'user',
    },
    product:{
        type:Types.ObjectId,
        ref:'product',
    },
    ratingAvg:{
        type:Number,
        min:[1,'reating avarage must be greater than 1'],
        max:[5,'reating avarage must be less than 5'],
    },
   
},{timesstamps:true});
module.exports=mongoose.model('review',schema);