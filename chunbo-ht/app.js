const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const redisStore = require('connect-redis')(session);

const APIv1 = require('./routes/APIv1');

const app = express();
const server = app.listen(8100, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('chunbo server run in http://%s:%s', host, port);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: '$2a$10$2BTtNe5IryqK/6cS0fQb7eItaWXnM/dqC8V/VF9AiS.nIoTMqYV2e',
  cookie: {maxAge: 604800000},
  store: new redisStore({
    host: '127.0.0.1',
    pass: 'XLZ19930623',
    port: 6379,
    db: 2,
    tll: 86400  // 24小时 单位s
  })
}));

app.use('/api/v1', APIv1);

process.on('uncaughtException', function (err) {
  if (typeof err === 'object') {
    if (err.message) {
      console.error('ERROR: ' + err.message)
    }
    if (err.stack) {
      console.error(err.stack);
    }
  } else {
    console.error('argument is not an object');
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.locals.pretty = true;
  mongoose.set('debug', true);
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
