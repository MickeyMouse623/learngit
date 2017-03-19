var express = require('express');
var Goods = require('../app/controllers/Goods.js');
var router = express.Router();

router.use(function(req, res, next){
  var _user = req.session.user;
  res.locals.user = _user;
  next();
})

router.get('/goodsnav', Goods.nav);

module.exports = router;