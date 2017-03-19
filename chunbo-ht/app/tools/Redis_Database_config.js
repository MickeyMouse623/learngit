/**
 *	数据库配置参数
 */
const redis = require("redis");
const RDS_PORT = 6379;
const RDS_HOST = '127.0.0.1';
const RDS_PWD  = 'XLZ19930623';
const RDS_OPTS = {auth_pass:RDS_PWD, detect_buffers: true};
const client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);

client.select('2', function(err) {
  if (err) console.log('redis connect 2 database error')
})

client.on('ready', function(res){
	console.log("redis connect success！")
});
client.on('error', function(err){
	console.log('REDIS ERROR : ' + err);
});

module.exports = client;
