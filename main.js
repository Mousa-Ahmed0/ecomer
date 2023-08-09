// import  express  from "express";
// import * as categ from './src/components/category/category.api.js'
const express =require('express');
const { dbConnection } = require('./src/database/dbConnection');
require('dotenv').config({path:"./config/.env"})
const morgan=require('morgan');  
const app=express()
const port=process.env.PORT
app.use(express.json());
dbConnection(); 
const baseUrl=process.env.BASURL
if(process.env.NODE_ENV=='development'){
    app.use(morgan('dev'));
}
app.use(`${baseUrl}/categories`,require('./src/components/category/category.api'))
app.use(`${baseUrl}/auth`,require('./src/components/auth/auth.api'))
app.listen(port,()=>console.log(`http://localhost:${port}`))
