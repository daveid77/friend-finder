// Data
var friendsData = require('../data/friends');

// Routing
module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  })

  app.post('/api/friends', function(req, res) {
      console.log('req.body: ', req.body);
      console.log('req.body.name: ', req.body.name);
      console.log('req.body.scores: ', req.body.scores);
      console.log('=========================');
    friendsData.push(req.body);
      console.log(friendsData);

  })

}