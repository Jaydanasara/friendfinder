
var path = require('path');

var friends = require("../data/friends.js");



module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  



app.post("/api/friends", function(req, res) {
    var newfriend = req.body;


		var Responses = newfriend.scores;


		var match = '';

		var matchImage = '';

		var Difference = 500; 

		for (var i = 0; i < friends.length; i++) {

	

			var diff = 0;

			for (var j = 0; j < Responses.length; j++) {

				diff += Math.abs(friends[i].scores[j] - Responses[j]);

			}


			if (diff < Difference) {




				Difference = diff;

				match = friends[i].name;

				matchImage = friends[i].photo;

			}

		}

		friends.push(newfriend);


		res.json({ match: match, matchImage: matchImage});

	});

};

