const express=require('express');
const path=require('path');

const productControlers=require('../controlers/product');

const router=express.Router();

router.get('/add-product', productControlers.getAddProduct);

router.post('/add-product', productControlers.postAddProduct);

module.exports=router;