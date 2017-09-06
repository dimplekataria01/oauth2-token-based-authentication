var express = require('express'),
	bodyParser = require('body-parser'),
	oauthserver = require('oauth2-server');
var passport = require('passport');
var router = express.Router();
var parseJson = require('parse-json');
var model= require('./model');


var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.oauth = oauthserver({
	model: require('./model.js'),
	grants: ['password', 'client_credentials'],
	debug: true
});


app.all('/oauth/token', app.oauth.grant());

app.get('/authorised', app.oauth.authorise(), function (req, res) {
	res.send('Congratulations, you are in a secret area!');
});


app.use(app.oauth.errorHandler());

app.listen(3000);


exports.isAuthenticated = passport.authenticate('basic', { session : false });


module.exports = passport;
