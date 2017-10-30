// Data
var friendsData = require('../data/friends');

var bestMatchData;

// Routing
module.exports = function(app) {

  app.get('/api/friends', function(req, res) {
    res.json(friendsData);
  })

  app.post('/api/friends', function(req, res) {
    var userScores = req.body.scores;
    for(var i = 0; i < userScores.length; i++){
      userScores[i] = +userScores[i];
    }

    // Invoke _findBestMatch() before friendsData.push()
    // to avoid current newUser data matching itself 
    _findBestMatch(userScores, friendsData);

    // add new user data object to friendsData[]
    friendsData.push(req.body);

    // return bestMatchData object to survey.html 
    res.json(bestMatchData);
  })

}

var _findBestMatch = function(userScoresArr, friendsData) { 

  var scoreDiffs = [];

  // Cycle through each friendsData object scores[], run compareScores() for each,
  // and push score difference sums to scoreDiffs[]
  for (var i = 0; i < friendsData.length; i++) {
    currentFriendScoresArr = friendsData[i].scores;
    scoreDiffs.push(compareScores(userScoresArr, currentFriendScoresArr));
  }

  var bestMatchIndex;
  var currentDiffValue = 0;

  // Find index of friendsData[] object with lowest scoreDiff 
  for (var i = 0; i < scoreDiffs.length; i++) {
    if (i === 0) {
      currentDiffValue = scoreDiffs[i];
      bestMatchIndex = i;
    } else {
      if (currentDiffValue > scoreDiffs[i]) {
        currentDiffValue = scoreDiffs[i];
        bestMatchIndex = i;
      }
    }
  }

  bestMatchData = friendsData[bestMatchIndex];

  // Create absolute sums[] of each new user score 
  // and current currentFriendScoresArr[] scores, reduce sums[] to total sum
  function compareScores(userScoresArr, currentFriendScoresArr) {
    var sums = [];
    for (var i = 0; i < userScoresArr.length; i++) {
      sums.push(Math.abs(userScoresArr[i] - currentFriendScoresArr[i]))
    }
    return sums.reduce(function(sum, item) {
      sum += item;
      return sum;
    }, 0 )
  }

}