const bcrypt=require('bcrypt');
const userModel=require('../user/user.model');
const { sendEmail } = require('../../services/user.Email');
const jwt=require('jsonwebtoken');
const signUp=async(req,res)=>{
    try{
        const {name,email,password,phone}=req.body;
        const user= await userModel.findOne({email}).select('email');
        if(user){//chack email if exist
            res.json({massage:"email exist"});
        }
        else{
            bcrypt.hash(password,parseInt(process.env.SALI_ROUND),async(err,hash)=>{
                //creat uesr
                const newUser =new userModel({name,email,password:hash,phone});
                //token
                const token=jwt.sign({id:newUser._id},process.env.EMAILTOKEN,{expiresIn:'1h'});
                //link to verify,massage
                const link=`${req.protocol}://${req.headers.host}${process.env.BASURL}/auth/confirmEmail/${token}`;
                const massage=`<a href='${link}'>Verify your email</a>`;
                //send email
                const info=await sendEmail(email,'Confirm  email',massage);

                if(info.accepted?.length > 0){
                    //save data to database after chake email 
                    const savedUser=await newUser.save();
                    res.json({massage:"success",savedUser:savedUser._id});
                } 
                else{
                    res.json({massage:"Email rejected"});
                }
            });
        }
    } catch (error) {
        res.json({massage:"Catch Error",error});
    }
}
const signIn=async(req,res)=>{
    const {email,password}=req.body;
    let user =await userModel.findOne({email});
    if(user){
        const match=await bcrypt.compare(password,user.password);
        if(match){
            let token =jwt.sign({userId:user._id},process.env.EMAILTOKEN,{expiresIn:60 * 60 * 24});
            if(user.verified==true)
                res.json({massage:'Login',token});
            else
                res.json({mssage:"verify your email"});
        }
        else 
            res.json({massage:'password incorrect'});
    }
    else
        res.json({massage:"Account doesn't exists"});
    
    
}

const confirmEmail=async(req,res)=>{
    try {
        const {token}=req.params;
        const decode=jwt.verify(token,process.env.EMAILTOKEN);
        if(!decode.id){
            res.json({massage:'inaild payload'});
        }
        else{
            const user= await userModel.findOneAndUpdate({
                _id:decode.id,
                verified:false
            },{
                verified:true
            });
            res.redirect(process.env.FURL);
        }
    } catch (error) {
        res.json({massage:"Catch Error",error});
    }
}
module.exports={signUp,confirmEmail,signIn}; 