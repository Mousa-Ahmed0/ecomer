const  mongoose=require("mongoose");

const schema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'user name required'],
        trim:true,
        minlength:[2,'too short subcategory name']
    },
    email:{
        type:String,
        required:[true,'email name required'],
        trim:true,
        unique:[true,'email must me uniqe'],
    },
    phone:{
        type:String,
        required:[true,'phone required'],
    },
    password :{
        type:String,
        required:[true,'password required'],
        minlength:[6,'too short password']
    },
    profileimg:{
        type:String,
    
    },
    role:{
        type:String,
        enum:['admin','user'],
    },
    isActive:{
        type:Boolean,
        default:true,
    }, 
    verified:{
        type:Boolean,
        default:false,
    },
},{timesstamps:true});
module.exports=mongoose.model('user',schema);