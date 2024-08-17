const express=require('express');
const path=require('path');

const router=express.Router();

router.get('/contactUs',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
});

router.post('/success',(req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'..','views', 'success.html'));
});

module.exports=router;