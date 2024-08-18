const path=require('path');

module.exports.getContactUs = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views','contactus.html'));
};

module.exports.postSuccess = (req,res,next)=>{
    console.log(req.body);
    res.sendFile(path.join(__dirname,'..','views', 'success.html'));
};

module.exports.notFound = (req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', 'notfound.html'));
};