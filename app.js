/**
 * Created by eunchul on 2017-04-05.
 */
var express = require('express');
var exphbs  = require('express-handlebars');
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');
var url = require('./url');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
MongoClient.connect(url.mongodb, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    db.close();
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

