// Data
var friendsData = require('../data/friends');

// Routing
module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  })

  app.post('/api/friends', function(req, res) {
    var scores = req.body.scores;
    for(var i = 0; i < scores.length; i++){
      scores[i] = +scores[i];
    }
    friendsData.push(req.body);
      // console.log(friendsData);
    res.json(true);
  })

}