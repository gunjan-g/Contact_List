const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    return res.render('home', {
        title: "Homepage"
    });
});

app.get('/practice',function(req,res){
    return res.render('practice', {
        title: "Lets Play"
    });
});

app.listen(port,function(err){
    if(err){
        console.log('Error is running on server:',err);
    }
    console.log('My express server is running on port:',port);
}) 