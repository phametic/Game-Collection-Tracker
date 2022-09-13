var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");
var connectDB = require('./config/db');

var getGame = require('./routes/GetGame.js')
var getNewestGames = require('./routes/getNewestGames.js');
var getScreenshots = require('./routes/GetScreenshot.js');
var getStores = require('./routes/GetStores.js');
var getSameSeries = require('./routes/GetSameSeries.js');
var getSearchedGames = require('./routes/GetSearchedGames.js');

var app = express();

require('dotenv').config();

connectDB();

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

app.get('/api/get-game/:id', getGame);
app.get('/api/get-newest-games', getNewestGames);
app.get('/api/get-screenshot/:id', getScreenshots);
app.get('/api/get-stores/:id', getStores);
app.get('/api/get-same-series/:id', getSameSeries);
app.get('/api/get-searched-games', getSearchedGames);

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
