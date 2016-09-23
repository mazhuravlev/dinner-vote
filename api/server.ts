import {Item} from "../app/models/item";
import {User} from "../app/models/user";
import * as express from "express";
var app = express();
var port = 3030;
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

var data = [
    <Item>{id: 1, title: 'test1', description: 'test1 description', members: []},
    <Item>{id: 2, title: 'test2', description: 'test2 description', members: []},
    <Item>{id: 3, title: 'test3', description: 'test3 description', members: []}
];

var users = [
    <User>{id: 1, name: 'test', password: 'test'}
];

var secret = 'app_secret_key';

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use(function (req, res, next) {
    var token = req.headers['authorization'] ? req.headers['authorization'].replace(/^Bearer\s*/, '') : null;
    if (token) {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                return res.status(403).json('Failed to authenticate token');
            } else {
                let user = findUserById(Number(decoded));
                if (user) {
                    res.locals.user = user;
                } else {
                    return res.status(403).json('User not found');
                }
                next();
            }
        });
    } else {
        next();
    }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/login', function (req, res) {
    var user = findUserByName(req.body.name);
    if (!user) {
        res.status(403).json('User not found');
    } else if (user.password !== req.body.password) {
        res.status(403).json('Wrong password');
    } else {
        var token = jwt.sign(user.id, secret);
        res.json({token: token});
    }
});

app.get('/items', function (req, res) {
    res.header('Content-Type', 'application/json');
    res.json(data);
});

app.post('/items/:item/join', function (req, res) {
    var user;
    if (!res.locals.user) {
        return res.status(403).json('Access denied');
    } else {
        user = res.locals.user;
    }
    var items = data.filter(i => i.id === Number(req.params.item));
    if (items.length === 0) {
        return res.status(404).json(`Item ${req.params.item} not found`);
    }
    var item = items.pop();
    if (item.members.filter(u => u.id === user.id).length > 0) {
        return res.status(400).json(`User have already joined item ${item.id}`);
    }
    item.members.push(user);
    res.status(200).json('Joined to item ' + item.id);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});

function findUserByName(name) {
    var user = users.filter(u => u.name === name);
    if (1 === user.length) {
        return user.pop();
    } else {
        return null;
    }
}

function findUserById(id) {
    var user = users.filter(u => u.id === id);
    if (1 === user.length) {
        return user.pop();
    } else {
        return null;
    }
}

