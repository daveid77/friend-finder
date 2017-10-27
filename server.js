// HEROKU APP: https://friendfinder-davidm.herokuapp.com/
// HEROKU GIT: https://git.heroku.com/friendfinder-davidm.git 

// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Express Server
var app = express();
var PORT = process.env.PORT || 8080;

// Display static files in /public/ directory
app.use(express.static('./app/public'));

// Parsing 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routing
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Server Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});