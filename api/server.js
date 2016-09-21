var express = require('express');
var app = express();
var port = 3030;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/items', function (req, res) {
    var data = [
        {id: 1, title: 'test1', description: 'test1 description'},
        {id: 2, title: 'test2', description: 'test2 description'},
        {id: 3, title: 'test3', description: 'test3 description'}
    ];
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});