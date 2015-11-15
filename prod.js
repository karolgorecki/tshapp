// Simple express server for running the production version
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/build', express.static(__dirname + '/build'));

var server = app.listen(3000, function () {
  console.log('TSH APP - http://localhost:3000');
});
