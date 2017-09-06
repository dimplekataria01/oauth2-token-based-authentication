var express = require('express'),
	bodyParser = require('body-parser');
var passport = require('passport');
var router = express.Router();
var parseJson = require('parse-json');


var app = express();

var config = {
	clients: [{
		clientId: 'application',
		clientSecret: 'secret'
	}],
	confidentialClients: [{
		clientId: 'confidentialApplication',
		clientSecret: 'topSecret'
	}],
	tokens: [],
	users: [{
		id: '123',
		username: 'pedroetb',
		password: 'password'
	}]
};

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());




function IsAuthenticated(req,res,next){
//var grantType = model.grantTypeAllowed(grant_type : client_credentials);
actualAuth();
console.log("print my token here :::::   ",token);
      console.log(req.body);
    if(req.isAuthenticated()){
        next();
    }else{
    console.log(" error here");
        next(new Error("this is error modified"));
    }
}





var request = require('request');

var newReq = request({
  url: 'http://localhost:3000/oauth/token',
  method: 'POST',
  auth: {
    username: 'pedroetb',
    password: 'password'
  },
  form: {
    'grant_type': 'client_credentials',
    'client_id': 'confidentialApplication',
    'client_secret': 'topSecret'
  },
  headers: {
                  'Accept': 'application/json, application/x-www-form-urlencoded',
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
}, function(err,res) {
console.log("error here ::11111:: "+err);
var json = JSON.parse(res.body);
console.log("error here ::22222:: "+err);
 console.log("Access Token:", json.access_token);
});


app.get('/authorised', app.oauth.authorise(), function (req, res) {
	res.send('Congratulations, you are in a secret area!');
});

app.get('/welcome',IsAuthenticated, function (req, res) {
console.log("print my token here :::::   ",model.getAccessToken());
	res.send('Congratulations, you are in a welcome page!');
});




module.exports = function(app){
  app.all('/oauth/token', function(req,res,next){
    var request = new Request(req);
    var response = new Response(res);

    oauth
      .token(request,response)
      .then(function(token) {
        // Todo: remove unnecessary values in response
        return res.json(token)
      }).catch(function(err){
        return res.status(500).json(err)
      })
  });

  app.post('/authorise', function(req, res){
  console.log("starting--------------");
    var request = new Request(req);
    var response = new Response(res);

    return oauth.authorize(request, response).then(function(success) {
      //  if (req.body.allow !== 'true') return callback(null, false);
      //  return callback(null, true, req.user);
        res.json(success)
    }).catch(function(err){
      res.status(err.code || 500).json(err)
    })
  });

  app.get('/authorise', function(req, res) {
    return db.OAuthClient.findOne({
        where: {
          client_id: req.query.client_id,
          redirect_uri: req.query.redirect_uri,
        },
        attributes: ['id', 'name'],
      })
      .then(function(model) {
        if (!model) return res.status(404).json({ error: 'Invalid Client' });
        return res.json(model);
      }).catch(function(err){
        return res.status(err.code || 500).json(err)
      });
  });
}





app.use(app.oauth.errorHandler());

app.listen(3000);


exports.isAuthenticated = passport.authenticate('basic', { session : false });


module.exports = passport;
