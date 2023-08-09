const { signUp, confirmEmail, signIn } = require('./regiteration');

const router=require('express').Router();

router.post('/singUP',signUp);
router.post('/singIn',signIn);
router.get('/confirmEmail/:token',confirmEmail);
module.exports=router; 