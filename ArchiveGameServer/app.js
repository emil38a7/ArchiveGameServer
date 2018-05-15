var express = require('express');
var app = express();


var mongoose = require('mongoose');
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());

var router = express.Router();
app.use('/', router);

//Make connection

//.connect('mongodb://localhost:27017/BikeShop');
mongoose.connect('mongodb://localhost:27017/BikeShop');

//Models


app.listen(3000, () => {
    console.log('App listening on port 3000');
});
