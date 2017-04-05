/**
 * Created by eunchul on 2017-04-05.
 */
var express = require('express');
var exphbs  = require('express-handlebars');
var mongo = require('./custom_module/mongodb');
var url = require('./url');

var app = express();

/* handlebars main 설정 */
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/insert',function () {

})
//mongo.insert('test',[{a:2}],function(result){console.log(result);});
//mongo.find('test',{},function(res){console.log(res);})
/* Express Port Listen */
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

