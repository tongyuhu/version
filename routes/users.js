var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456tyh@',
    database : 'awesome'
});
connection.connect();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.end(__filename)
});

router.get('/zen',function (req, res, next) {
    res.end('Half measures are as bad as nothing at all.');
});

router.post('/showUser',function (req, res, next) {
    res.end('showUser');
});

router.post("/createUser",function (req, res, next) {
    var firstName = req.body.first_name;
    var lastName  = req.body.last_name;

    connection.query('insert into user(first_name,last_name) values(?,?)',[firstName,lastName],function (err, result) {
        res.end('inset user')
    });
});
router.post("/updateUser",function (req, res, next) {
    res.end("updateUser")
});

router.post("/showAccounts",function (req, res, next) {
    connection.query('select * from user',function (err, result) {
        if (err){
            res.end(err.toString())
        }
        res.end(transformStr(JSON.stringify(result)))
    });
});

router.post("/deleteUser",function (req, res, next) {
    let id = req.body.id;
    connection.query('delete from user where id=?',[id],function (err, result) {
        res.end('delete user')
    })
});

function transformStr(str){
    var re=/_(\w)/g;
    return str.replace(re,function ($0,$1){
        return $1.toUpperCase();
    });
}

module.exports = router;
