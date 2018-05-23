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
    });

////////////////////////////TCP SERVER////////////////////////////

// Load the TCP Library
net = require('net');

// Keep track of the chat clients
var clients = [];

// Start a TCP Server
net.createServer(function (socket) {

    // Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort

    // Put this new client in the list
    clients.push(socket);

    // Send a nice welcome message and announce
    socket.write("Welcome " + socket.name + "\n");
    broadcast(socket.name + " joined the chat\n", socket);

    // Handle incoming messages from clients.
    socket.on('data', function (data) {
        broadcast(socket.name + "> " + data, socket);
    });

    // Remove the client from the list when it leaves
    socket.on('end', function () {
        clients.splice(clients.indexOf(socket), 1);
        broadcast(socket.name + " left the chat.\n");
    });

    // Send a message to all clients
    function broadcast(message, sender) {
        clients.forEach(function (client) {
            // Don't want to send it to sender
            if (client === sender) return;
            client.write(message);
        });
        // Log it to the server output too
        process.stdout.write(message)
    }

}).listen(5000);

// Put a friendly message on the terminal of the server.
console.log("TCP server running at port 5000\n");


////////////////////////////TCP SERVER/////////////////////////////

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
