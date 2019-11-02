var express = require('express');
var path=require('path');
var parser = require('body-parser');
var app=express();
app.use(parser());

app.use(express.static(path.join(__dirname, '../client')));

app.get('/', function (req, res) {
    res.sendFile(__dirname, 'index.html')
})

app.post('/', function(req, res){
  res.end(JSON.stringify(req.body));
})

const PORT=8080;

app.listen(PORT, ()=>console.log(`server started on port ${PORT}`));