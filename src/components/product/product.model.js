const mongoose =require("mongoose");

const schema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name required'],
        trim:true,
        unique:[true,'product name uniqe'],
        minlength:[2,'too short product name']
    },
    image:String,
    slug:{
        type:String,
        lowercaser:true,
    },
    description:{
        type:String,
        required:[true,'product name required'],
        trim:true,
        unique:[true,'product name uniqe'],
        minlength:[2,'too short product name']
    },
    quantity:{
        type:Number,
        required:[true,'product name required'],
        default:0,
    },
    colors:[String],
    price:{
        type:Number,
        required:[true,'product priprice after discountce required'],
    },
    imageCover:String,
    images:[String],
    Category:{
        type:Types.ObjectId,
        ref:'category',
        required:[true,'product Category required'],
    },
    subCategory:{
        type:Types.ObjectId,
        ref:'subcategory',
        required:[true,'product subCategory required'],
    },
    brand:{
        type:Types.ObjectId,
        ref:'brand',
        required:[true,'product brand required'],
    },
    ratingAvg:{
        type:Number,
        min:[1,'reating avarage must be greater than 1'],
        max:[5,'reating avarage must be less than 5'],
    },
    ratingCount:{
        type:Number,
        default:0,
    },
    sold:{
        type:Number,
        default:0,
        required:[true,'product sold required']
    }

},{timesstamps:true});
module.exports=mongoose.model('product',schema);