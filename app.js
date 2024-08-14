const express = require("express");
const bodyParser=require("body-parser")

const app = express(); 

app.use(bodyParser.urlencoded({extended: false}));

app.use('/favicon.ico',(req, res, next) => {
    // Ignore favicon requests
    res.status(204).end(); // No Content
});

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="product"><input type="number" name="size"><button type="submit">Submit</button></form>');
});

app.post('/product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

app.use((req, res, next) => {
    console.log('Another middleware');
    res.send('<h1>I am so excited to learn Express</h1>');
});


app.listen(3000);
