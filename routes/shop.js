const express=require('express');
const path=require('path')

const productControlers=require('../controlers/product.js');

const router=express.Router();


router.get('/', productControlers.getProduct);

module.exports=router;