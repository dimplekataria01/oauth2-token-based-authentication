var express = require('express'),
    app = express();

const credentials = {
  client: {
    id: 'confidentialApplication',
    secret: 'topSecret'
  },
  auth: {
    tokenHost: 'http://localhost:3000'
  }
};

app.get('/', function (req, res) {


    const oauth2 = require('simple-oauth2').create(credentials);
    const tokenConfig = {};

//    // Callbacks
//    // Get the access token object for the client
//    oauth2.clientCredentials.getToken(tokenConfig, (error, result) => {
//      if (error) {
//        return console.log('Access Token Error', error.message);
//      }
//
//     // const accessToken = oauth2.accessToken.create(result);
//    });


    // Promises
    // Get the access token object for the client
    oauth2.clientCredentials
      .getToken(tokenConfig)
      .then((result) => {
        const accessToken = oauth2.accessToken.create(result);

        console.log('Result in express server ::::  '+accessToken.token.access_token);
      })
      .catch((error) => {
        console.log('Access Token error', error.message);
      });

        res.send('hello you are done');

});

app.listen(8081);

console.log('Express server started on port 8081');