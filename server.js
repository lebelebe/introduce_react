var express = require('express');
var reactrouter = require('./routes/router');
var app = express();

app.listen(8080, function(){
    console.log('서버정상작동')
});

app.get('/', function(req, res){
    res.send('글자노출해봄');
});

app.use('/myreact', reactrouter);