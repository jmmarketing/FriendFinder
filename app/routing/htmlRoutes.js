
var path = require("path");
var friendsData = require("../data/friends");


module.exports = function(app) {
  

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });


// Catch All for Routes & Home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
