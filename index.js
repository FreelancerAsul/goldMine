const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const app = express();

// middleware def
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var port = process.env.PORT || 8000;

mongoose.connect("mongodb://admin:*KKW&93v%bEDwpmz@ds035816.mlab.com:35816/goldmine", function() {
  var server = http.createServer(app);
  server.listen(port)
  if(!!!server) checkDB();
  else console.log("Database Connection Established!");
})

function checkDB(){
 console.log("Not Connected!");
}

const Item = require("./models/item");
const routes = require("./routes/routes");

app.get('/api/get/items', routes.getItems);
app.get('/api/get/item/:id', routes.getItem);

// Item.findOne({name: "Black Coffee: 1"}, function (err, res) {
//   console.log(res);
// })
// app.get('/api/get/items', function(req, res) {
    // res.json({})
// });
module.export = app;
//const Order = require("./schemas/order");
//const Room = require("./schemas/room");


//var routes = require('routes/index');
//var users = require('routes/users');
/*
var app = express();
app.listen(port);

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8000;

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//app.get('/', function(req, res) {
    //res.send('this is a sample!');
//});

app.route('/login')

    // show the form (GET http://localhost:8080/login)
    .get(function(req, res) {
        res.send('this is the login form');
    })

    // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
        console.log('processing');
        res.send('processing the login form!');
    });

var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  //res.render('public/index.html', { title: 'Express' });
  res.send("index?");
});

app.use('/', router);
//module.exports = router;

//app.use('/index', routes);
//app.use('/users', users);

app.listen(port);

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


//module.exports = app;
*/
