const express=require('express');
const path=require('path');

const extrafunctionContolers=require('../controlers/extrafunctions');

const router=express.Router();

router.get('/contactUs', extrafunctionContolers.getContactUs);

router.post('/success', extrafunctionContolers.postSuccess);

module.exports=router;