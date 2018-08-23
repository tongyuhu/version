var express = require('express');
var router = express.Router();

router.use(function timLog(req,res,next) {
    console.log('Time：',Date.now());
    next();
});

router.get('/',function (req, res, next) {
    res.render('tongyuhu',{tong:'chen'});
});



module.exports = router;