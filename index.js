require('./db');
var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var postMessageRouter=require('./controller/postmessageController');


app.use(bodyParser.json());

app.use('/postMessage',postMessageRouter);


app.listen(4000,function(){
   console.log("App running port "+4000);
})

