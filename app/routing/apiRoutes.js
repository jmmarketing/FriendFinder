var friendsData = require("../data/friends");


module.exports = function (app) {



    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    })


    // Find total of each friend and push into a new variable. 
    // Get Absolute difference between ReqScore and FriendScore and push into new array
    // Find the index of min value in array.
    // Use Index into FriendsData to send back as response. 

    app.post("/api/friends", function (req, res) {


        var userScore = 0;
        var userInfo = {
            name: req.body.name,
            photo: req.body.photo,
            scores: 
            [
                parseInt(req.body.scores[0]),
                parseInt(req.body.scores[1]),
                parseInt(req.body.scores[2]),
                parseInt(req.body.scores[3]),
                parseInt(req.body.scores[4]),
                parseInt(req.body.scores[5]),
                parseInt(req.body.scores[6]),
                parseInt(req.body.scores[7]),
                parseInt(req.body.scores[8]),
                parseInt(req.body.scores[9])

            ]
        }

        var matchDif = [];

        var bestMatch = {
            name: "",
            photo: ""
        };

        var indexOfMatch;




        // Get Total of Req Score
        for (var i = 0; i < req.body.scores.length; i++) {
            userScore += parseInt(req.body.scores[i]);

        }

        // Finds the Difference between User Score, Friends List Score, and pushes to a new array of Match Dif
        for (var j = 0; j < friendsData.length; j++) {
            var totalScore = friendsData[j].scores.reduce((a, b) => a + b, 0) - userScore;
            matchDif.push(Math.abs(parseInt(totalScore)));
        }

        var closestScore = Math.min.apply(null, matchDif);
        indexOfMatch = matchDif.indexOf(closestScore);
        console.log(closestScore);
        console.log(indexOfMatch);
        console.log(userScore)
        console.log(matchDif)



        bestMatch = {
            name: friendsData[indexOfMatch].name,
            photo: friendsData[indexOfMatch].photo
        }

        console.log(bestMatch)




        res.json(bestMatch)
        friendsData.push(userInfo)
    });
};