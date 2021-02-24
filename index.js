var express = require('express');
var cors = require('cors');
var routes = require('./routes.js');

var app = express();
app.use(cors());
routes(app);

app.listen(80,'localhost', function(){
    console.log('Start at 80 port')
})