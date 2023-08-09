const app=require('express').Router();
const {createCategory, getCategories, getCategory}=require('./category.service');
app.post('./',createCategory);
app.get('/',getCategories);
app.get('/:id',getCategory);

module.exports=app;
