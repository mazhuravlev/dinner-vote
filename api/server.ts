import {Item} from "../app/models/item";
var express = require('express');
var app = express();
var port = 3030;

var data = [
    <Item>{id: 1, title: 'test1', description: 'test1 description', members: []},
    <Item>{id: 2, title: 'test2', description: 'test2 description', members: []},
    <Item>{id: 3, title: 'test3', description: 'test3 description', members: []}
];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.get('/items', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.send(JSON.stringify(data));
});

app.post('/items/:item/join', function (req, res) {
    var item = data.filter(i => i.id === Number(req.params.item));
    if (item.length === 0) {
        res.status(404).send(`Item ${req.params.item} not found`);
    }
    res.status(200).send('Joined to item ' + req.params.item);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});