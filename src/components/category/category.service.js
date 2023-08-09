const categoryModel=require('./category.api');
module.exports.createCategory= async(req,res)=>{
    const {name}=req.body;
    let category=new categoryModel({name});
    await category.save();
    res.status(201).json(category)

}
module.exports.getCategories= async(res,req)=>{
    let categories=categoryModel.find({});
    res.status(200).json(categories);
}
module.exports.getCategory= async(res,req)=>{
    const {id}=req.params;
    let category=categoryModel.find({id});
    res.status(200).json(category);
}