

var express = require('express');
var app = express();
var port = 80;
var path = require('path');

app.use(express.static(path.join('../server')));


app.get('/', function(req,res){
  res.sendFile(__dirname + 'index.html')
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'mycss.css')
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'myScript.js')
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'about.html')
});
app.get('/', function (req, res) {
  res.sendFile(__dirname + 'test.js')
});

app.listen(port, function(){
  console.log('listen on port 80')
})