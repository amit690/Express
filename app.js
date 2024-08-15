const express = require("express");
const bodyParser=require("body-parser")

const app = express(); 

const adminRouters=require('./routes/admin.js');

const shopRouters=require('./routes/shop.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/favicon.ico',(req, res, next) => {
    // Ignore favicon requests
    res.status(204).end(); // No Content
});

app.use('/admin',adminRouters);
app.use('/shop',shopRouters);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not found</h1>');
});




app.listen(3000);
