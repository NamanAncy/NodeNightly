const { Router } = require('express');
var express = require('express');

module.exports = (app)=>{ 
    app.get('/hello', function(req,res, next){
        return res.status(200).json({
            abc: 11,
        })
    })  
};

