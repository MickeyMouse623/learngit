const { parallel } = require('async');
const MongoDB = require('../tools/Mongo_Database_config.js');
const Redis = require('../tools/Redis_Database_config.js');
// const GoodsClass = require('../tools/Goods_Class_Controller.js')

exports.nav = function (req, res) {
  Redis.get('GoodsClass', function (err, result) {
    if (err) return res.json({ status: 400, msg: err })
    if (result) return res.json({ status: 200, data: JSON.parse(result)});
    parallel({
      classA: function (callback) { MongoDB('cb_GoodsClass').find({_id: /\d+(\-0){2}/}, {'_id':1, 'name':1, 'icon':1, 'isPcMenu':1}).exec(callback) },
      classB: function (callback) { MongoDB('cb_GoodsClass').find({_id: /^0\-\d+\-0/}, {'_id':1, 'name':1, 'icon':1, 'isPcMenu':1}).exec(callback) },
      classC: function (callback) { MongoDB('cb_GoodsClass').find({_id: /^(\-0){2}\d+/}, {'_id':1, 'name':1, 'icon':1, 'isPcMenu':1}).exec(callback) }
    },function(err,result){
      if (err) return res.json({ status: 400, msg: err })
      // Redis.set('GoodsClass', JSON.stringify(result));
      console.log(result)
      res.json({ status: 200, data: result});
    })
  })
}