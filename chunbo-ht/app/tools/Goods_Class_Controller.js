/**
 * 控制器通用模块组
 */
const { parallel } = require('async');
const redis = require('./Redis_Database_config.js');

function get_spClass(that,data) {
	var objDate = JSON.parse(data);
	if (that !=null && that === "classA" || that === "classTop") { delete objDate.classB; delete objDate.classC; }
	if (that !=null && that === "classB") { delete objDate.classB }
	if (that !=null && that === "classC") { delete objDate.classC }
	return objDate;
}

export const GoodsClass = function () {
  redis.get('GoodsClass', function (err, result) {
    if (result) return result;
    parallel({
      classA: function(callback) { spClass.find({_id:/\d+(\-0){2}/}).sort({sort:1}).exec(callback) },
      classB: function(callback) { spClass.find({_id:/^0\-\d+\-0/}).sort({sort:1}).exec(callback) },
      classC: function(callback) { spClass.find({_id:/^(\-0){2}\d+/}).sort({sort:1}).exec(callback) }
    },function(err,result){
      if (err) return next(err)
      redis.set('spClass', JSON.stringify(result));
      callback(result);
    })
  })
}

// var Modular = {
// 	spClass: function(obj,callback) {
// 		redis.get('spClass',function(err, result) {
// 			if (result) return callback(get_spClass(obj,result));
// 			parallel({
// 				classA: function(callback) { spClass.find({_id:/\d+(\-0){2}/}).sort({sort:1}).exec(callback) },
// 				classB: function(callback) { spClass.find({_id:/^0\-\d+\-0/}).sort({sort:1}).exec(callback) },
// 				classC: function(callback) { spClass.find({_id:/^(\-0){2}\d+/}).sort({sort:1}).exec(callback) }
// 			},function(err,result){
// 				if (err) return next(err)
// 				redis.set('spClass', JSON.stringify(result));
// 				callback(result);
// 			})
// 		});
// 	},
// 	spClass_terse: function(obj,callback) {
// 		redis.get('spClass_terse',function(err, result) {
// 			if (result) return callback(get_spClass(obj,result));
// 			parallel({
// 				classTop: function(callback) { spClass.find({"_id":/^\d+$/}).sort({"sort":1}).exec(callback) },
// 				classA: function(callback) { spClass.find({_id:/\d+(\-0){2}/},{'_id':1, 'name':1, 'topId':1}).sort({sort:1}).exec(callback) },
// 				classB: function(callback) { spClass.find({_id:/^0\-\d+\-0/},{'_id':1, 'name':1, 'topId':1}).sort({sort:1}).exec(callback) },
// 				classC: function(callback) { spClass.find({_id:/^(\-0){2}\d+/},{'_id':1, 'name':1, 'topId':1}).sort({sort:1}).exec(callback) }
// 			},function(err,result){
// 				if (err) return next(err)
// 				redis.set('spClass_terse', JSON.stringify(result));
// 				callback(result);
// 			})
// 		})
// 	},
// 	cbClass: function(callback) {
// 		redis.get('cbClass',function(err, result) {
// 			if (result) { return callback(JSON.parse(result))}
// 			parallel({
// 				class: function(callback) { cbClass.find().sort({sort:1}).exec(callback) },
// 				search: function(callback) { cbSearch.find().sort({sort:1}).exec(callback)}
// 			},function(err, result) {
// 				if (err) return next(err)
// 				redis.set('cbClass', JSON.stringify(result));
// 				callback(result);
// 			})
// 		})
// 	}
// }

// module.exports = Modular;