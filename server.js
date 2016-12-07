var express = require('express');
var app = express();
var router = express.Router();
var path = __dirname + '/views/';
var bodyParser = require('body-parser');
var grimorie = require('mtg-grimorie');

//Middlewares
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

app.use('/', router);

router.get('/', function(req, res) {
	res.redirect('/home');
});

router.get('/home', function(req, res) {
	res.sendFile(path + 'home.html');
});

router.get('/index', function(req, res) {
	res.sendFile(path + 'index.html');
});

router.get('/getCard', function(req, res) {
	grimorie.searchName('Doom Blade', function(data) {
		res.send(data);
	});
});

router.post('/searchCard', function(req, res) {
    console.log(req.body.username);
});

// app.use(express.json());       // to support JSON-encoded bodies
// app.use(express.urlencoded()); // to support URL-encoded bodies

//Mapeia os recursos
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/angular', express.static(__dirname + '/node_modules/angular/'));
app.use('/assets', express.static(__dirname + '/assets/'));

app.listen(3000, function(){
	console.log('Server is up');
});