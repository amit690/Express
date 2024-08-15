const express=require('express');

const router=express.Router();


router.get('/',(req, res, next) => {
    console.log('Another middleware');
    res.send('<h1>I am so excited to learn Express</h1>');
});

module.exports=router;