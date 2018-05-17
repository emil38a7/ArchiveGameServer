var express = require('express');
var app = express();


var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());


//Make connection

//.connect('mongodb://localhost:27017/BikeShop');
mongoose.connect('mongodb://localhost:27017/ArchiveGame');

//ROUTING

var router = express.Router();
app.use('/', router);

//Models

var Answer = require('./models/answer');
var AnswerRelation = require('./models/answerRelation');
var Difficulty = require('./models/difficulty');
var Game = require('./models/game');
var Player = require('./models/player');
var PlayerRelation = require('./models/playerRelation');
var Question = require('./models/question');
var QusetionRelation = require('./models/questionRelation');
var Role = require('./models/role');
var User = require('./models/user');

//ROUTING

var router = express.Router();

app.use('/', router);

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, content-type, Access-Control-Allow-Origin");
    console.log("Its ok mongo");
    next();
});

router.route('/question')
    .get(function (req, res) {
        Question.find({}, { _id: 0, __v: 0 }, function (err, questions) {
            if (err)
                res.send(err);
            res.status(200).json(questions);
        });
    })
    .post(function (req, res) {
        var question = new Question(req.body);
        console.log('the object:  ' + JSON.stringify(question));
        question.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(question);
        });
    });

router.route('/question/:questionID')
    .delete(function (req, res) {
        Question.deleteOne({ "questionID": req.params.questionID }, function (err, bike) {
            if (err)
                res.send(err);
            res.status(200).json(bike);
        });
    });





app.listen(3000, () => {
    console.log('App listening on port 3000');
});
