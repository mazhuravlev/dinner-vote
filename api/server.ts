import * as express from "express";
import {Profile} from "../app/models/Profile";
import {Database} from "./database";

var app = express();
var port = 3030;
var jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');

var secret = 'app_secret_key';

var db = new Database();

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
                let user = db.findUserById(Number(decoded));
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
    var user = db.findUserByName(req.body.name);
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
    if (res.locals.user) {
        res.json(db.getItems().map(item => {
            item.isMember = item.members.filter(m => m.id === res.locals.user.id).length === 1;
            return item;
        }));
    } else {
        res.json(db.getItems());
    }
});

app.post('/items/:item/join', function (req, res) {
    if (!res.locals.user) {
        return res.status(403).json('Access denied');
    }
    var user = res.locals.user;
    var items = db.getItems().filter(i => i.id === Number(req.params.item));
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

app.get('/user/:id/profile', function (req, res) {
    var user = db.findUserById(Number(req.params.id));
    if (!user) {
        return res.status(404).json(`User ${req.params.id} not found`);
    }
    var profile = new Profile();
    profile.id = user.id;
    profile.name = user.name;
    return res.json(profile);
});

app.listen(port, function () {
    console.log(`Listening on port ${port}!`);
});
