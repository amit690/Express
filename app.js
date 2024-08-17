const express = require("express");
const path= require('path');
const bodyParser=require("body-parser");

const app = express(); 

const adminRouters=require('./routes/admin.js');

const shopRouters=require('./routes/shop.js');

const contactUsRouters=require('./routes/contactUs.js');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/favicon.ico',(req, res, next) => {
    // Ignore favicon requests
    res.status(204).end(); // No Content
});

app.use('/admin',adminRouters);
app.use('/shop',shopRouters);
app.use(contactUsRouters);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
});




app.listen(3000);
