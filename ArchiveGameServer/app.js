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
var QuestionRelation = require('./models/questionRelation');
var Role = require('./models/role');
var User = require('./models/user');
var CurentQuestion = require('./models/currentQuestion');

//ROUTING

var router = express.Router();

app.use('/', router);

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Authorization, content-type, Access-Control-Allow-Origin");
    //console.log("Its ok mongo");
    next();
});

router.route('/user/login')
    .post(function (req, res) { //add code here
        User.findOne({ userEmail: req.body.userEmail, userPassword: req.body.userPassword }, { _id: 0 }, function (err, user) {
            if (err) {
                res.send(err);
            }
            else if (user == null) {
                res.status(203).json(user);
            }
            else
                res.status(202).json(user);
        });
    });

router.route('/user')
    .get(function (req, res) {
        User.find({}, { _id: 0, __v: 0 }, function (err, users) {
            if (err)
                res.send(err);
            res.status(200).json(users);
        });
    })
    .post(function (req, res) {
        var user = new User(req.body);
        console.log('the object:  ' + JSON.stringify(user));
        user.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(user);
        });
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

router.route('/questionFiltered')
    .get(function (req, res) {
        Question.find({ "questionDifficulty": req.query.questionDifficulty }, { _id: 0, __v: 0 }, function (err, questions) {
            if (err)
                res.send(err);
            res.status(200).json(questions);
        });
    })

router.route('/question/:questionID')
    .delete(function (req, res) {
        Question.deleteOne({ "questionID": req.params.questionID }, function (err, bike) {
            if (err)
                res.send(err);
            res.status(200).json(bike);
        });
    });

router.route('/player')
    .get(function (req, res) {
        Player.find({}, { _id: 0, __v: 0 }, function (err, users) {
            if (err)
                res.send(err);
            res.status(200).json(users);
        });
    })
    .post(function (req, res) {
        var player = new Player(req.body);
        console.log('the object:  ' + JSON.stringify(player));
        player.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(player);
        });
    })
    .delete(function (req, res) {
        Player.remove({}, function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    });

router.route('/questionRelation')
    .get(function (req, res) {
        QuestionRelation.find({}, { _id: 0, __v: 0 }, function (err, questionRelations) {
            if (err)
                res.send(err);
            res.status(200).json(questionRelations);
        });
    })
    .post(function (req, res) {
        var questionRelation = new QuestionRelation(req.body);
        console.log('the object:  ' + JSON.stringify(questionRelation));
        questionRelation.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(questionRelation);
        });
    })
    .delete(function (req, res) {
        QuestionRelation.remove({}, function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    });

router.route('/playerRelation')
    .get(function (req, res) {
        PlayerRelation.find({}, { _id: 0, __v: 0 }, function (err, playerRelations) {
            if (err)
                res.send(err);
            res.status(200).json(playerRelations);
        });
    })
    .post(function (req, res) {
        var playerRelation = new PlayerRelation(req.body);
        console.log('the object:  ' + JSON.stringify(playerRelation));
        playerRelation.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(playerRelation);
        });
    })
    .delete(function (req, res) {
        PlayerRelation.remove({}, function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    })
    .delete(function (req, res) {
        PlayerRelation.remove({}, function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    });

router.route('/game')
    .get(function (req, res) {
        Game.find({}, { _id: 0, __v: 0 }, function (err, games) {
            if (err)
                res.send(err);
            res.status(200).json(games);
        });
    })
    .post(function (req, res) {
        var game = new Game(req.body);
        console.log('the object:  ' + JSON.stringify(game));
        game.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(game);
        });
    })
    .delete(function (req, res) {
        Game.remove({},function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    });

router.route('/answerRelation')
    .get(function (req, res) {
        AnswerRelation.find({}, { _id: 0, __v: 0 }, function (err, answerRelations) {
            if (err)
                res.send(err);
            res.status(200).json(answerRelations);
        });
    })
    .post(function (req, res) {
        var answerRelation = new AnswerRelation(req.body);
        console.log('the object:  ' + JSON.stringify(answerRelation));
        answerRelation.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(answerRelation);
        });
    })
    .delete(function (req, res) {
        AnswerRelation.remove({}, function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    });

router.route('/currentQuestion')
    .get(function (req, res) {
        CurentQuestion.find({}, { _id: 0, __v: 0 }, function (err, currentQuestions) {
            if (err)
                res.send(err);
            res.status(200).json(currentQuestions);
        });
    })
    .post(function (req, res) {
        var currentQuestion = new CurentQuestion(req.body);
        console.log('the object:  ' + JSON.stringify(currentQuestion));
        currentQuestion.save(function (err) {
            if (err)
                res.send(err);
            res.status(201).json(currentQuestion);
        });
    })
    .put(function (req, res) {
        var currentQuestion = new CurentQuestion(req.body);
        console.log('the object:  ' + JSON.stringify(currentQuestion));

        CurentQuestion.replaceOne({ "questionID": req.query.questionID }, { "questionID": currentQuestion.questionID, "questionText": currentQuestion.questionText, "questionAnswers": currentQuestion.questionAnswers, "questionDifficulty": currentQuestion.questionDifficulty }, function (err, currentQuestion) {
            if (err)
                res.send(err);
            res.status(200).json(currentQuestion);
        });
    })
    .delete(function (req, res) {
        CurentQuestion.remove({}, function (err, obj) {
            if (err) res.send(err);
            res.status(201).json(obj);
        })
    });

app.listen(3000, () => {
    console.log('App listening on port 3000');
});

//questionID: String,questionText: String,questionAnswers: [{answerID: String,answerText: String,questionID: String, correctAnswer: String questionDifficulty: String