var express = require('express');
var router = express.Router();
var fs = require("fs");

var n=0



/* GET home page. */

router.get('/', function(req, res, next) {
  n++
  fs.writeFile("public/zzl1.txt", "你的页面被访问：" + n + "次", function (err) {
  })
  if(n != 0){
        setTimeout(function(){
          fs.readFile("public/zzl1.txt", "utf-8", function (err, data) {
            res.render('index', {bcd: data});
          })
        },200)
  }else{
        router.get('/', function(req, res, next) {
          fs.readFile("public/zzl.txt", "utf-8", function (err, data) {
            res.render('index', {bcd: data});
          })
        })
  }
})
router.get('/zzl', function(req, res, next) {
  n++
  fs.writeFile("public/zzl1.txt", "你的页面被访问：" + n + "次", function (err) {
  })
  if(n != 0){
    setTimeout(function(){
      fs.readFile("public/zzl1.txt", "utf-8", function (err, data) {
        res.render('zzl', {bcd: data});
      })
    },200)
  }else{
    router.get('/', function(req, res, next) {
      fs.readFile("public/zzl.txt", "utf-8", function (err, data) {
        res.render('zzl', {bcd: data});
      })
    })
  }
})
module.exports = router;
