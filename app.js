const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');

const apiRouter = require('./routes/apiRouter');
const kittiesRouter = require('./routes/kittiesRouter');
const dist = 'angular-frontend/dist/mean-app';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, dist)));

app.use('/api', apiRouter);
app.use('/kitties', kittiesRouter);

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
