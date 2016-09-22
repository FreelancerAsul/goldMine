var express = require('express');
var app = express();
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));
var port = process.env.PORT || 8000;
app.listen(port);
