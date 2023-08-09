const mongoose= require('mongoose');
// module.exports.dbConnection=()=>{
//     mongoose.connect('mongodb://localhost:27017/blog');}
// 
const localUrl=process.env.CONNECTION_STRING
const url="mongodb+srv://mousa:mousa55@cluster0.ixgeo.mongodb.net/saraha";
module.exports.dbConnection=async()=>{
    return await mongoose.connect(process.env.CONNECTION_STRING,{ useNewUrlParser: true , useUnifiedTopology: true })
    .then((result)=>{
        console.log("connect db");
    })
    .catch((error)=>{
        console.log(`Error: ${error}`);
    });
}
