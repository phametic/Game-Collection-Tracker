var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var getGame = require('./routes/GetGame.js')
var getNewestGames = require('./routes/getNewestGames.js');
var getScreenshots = require('./routes/GetScreenshot.js');
var getStores = require('./routes/GetStores.js');
var getSameSeries = require('./routes/GetSameSeries.js');

var app = express();

require('dotenv').config();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Use Cors
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/getGame/:id', getGame);
app.use('/api/getNewestGames', getNewestGames);
app.use('/api/getScreenshot/:id', getScreenshots);
app.use('/api/getStores/:id', getStores);
app.use('/api/getSameSeries/:id', getSameSeries);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
