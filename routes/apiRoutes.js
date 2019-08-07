var db = require("../models");

// var surveyController = require("../controllers/survey-controller")
module.exports = function (app) {
  // Get all Survey Data
  app.get("/api/survey", function (req, res) {
    db.Survey.findAll({

    }).then(function (surveys) {
      res.json(surveys);
    })
  });

  // Create a new Survey
  app.post("/api/survey", function (req, res) {
    console.log("API Survey post route hit");
    console.log(req.body);

    db.Survey.create(req.body).then(function(surveys) {
      res.json(surveys);
    })

  });

  // Delete a Survey by id
  // app.delete("/api/survey/:id", function(req, res) {
  //   surveyController.deleteOne(req, res)
  // });
};