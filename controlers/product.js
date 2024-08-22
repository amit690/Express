const path = require('path');
const Product = require('../modules/product'); // Correct import

exports.getAddProduct = (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
};

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.product, req.body.size); // Create a new product instance
    product.save(); // Save the product
    res.redirect('/shop');
};

exports.getProduct = (req, res, next) => {
    Product.getAllProducts((products)=>{
        console.log(products);  // Log the array of products to the console
        res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    }); // Retrieve all products
    
};
