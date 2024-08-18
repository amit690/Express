const path = require('path');

module.exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

module.exports.postAddProduct = (req,res,next)=>{
    console.log(req.body);
    res.redirect('/shop');
};

module.exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
};