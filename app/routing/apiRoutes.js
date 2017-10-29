// Data
var friendsData = require('../data/friends');

var bestMatchData;

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

    _findBestMatch(scores, friendsData);

    friendsData.push(req.body);
       console.log('bestMatchData: ', bestMatchData);
    res.json(bestMatchData);
  })

}

var _findBestMatch = function(userScores, friendsData) { 

  var scoreDiffs = [];

  for (var i=0; i < friendsData.length; i++) {
    var scores = friendsData[i].scores

    scoreDiffs.push( compareScores(userScores, scores) )
  }
  console.log('DIFFS :: ', scoreDiffs)

  var bestMatchIndex;
  var currentDiffValue = 0;

  for (var i=0; i<scoreDiffs.length; i++) {
    if (i === 0) {
      currentDiffValue = scoreDiffs[i]
      bestMatchIndex = i
    } else {
      if (currentDiffValue > scoreDiffs[i]) {
        currentDiffValue = scoreDiffs[i]
        bestMatchIndex = i
      }
    }
  }

  console.log(`Value ${currentDiffValue} at index ${bestMatchIndex} is best match`)
  console.log('New Best Friend: ', friendsData[bestMatchIndex])

  bestMatchData = friendsData[bestMatchIndex];

  function compareScores( userArray, friendsArray ) {
    var sums = [];
    for (var i=0; i < userArray.length; i++) {
      sums.push(Math.abs( userArray[i] - friendsArray[i] ))
    }
    return sums.reduce( function( sum, item ) {
      sum += item
      return sum
    }, 0 )
  }

}