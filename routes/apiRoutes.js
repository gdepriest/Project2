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
    var {
      name,
      county,
      income,
      menstruation,
      menstruation_monthly,
      pregnancy,
      pregnancy_monthly,
      cosmetics,
      cosmetics_monthly,
      garments,
      garments_monthly,
      feedback
    } = req.body;

    var newSurvey= {
      name,
      county,
      income,
      menstruation,
      menstruation_monthly,
      pregnancy,
      pregnancy_monthly,
      cosmetics,
      cosmetics_monthly,
      garments,
      garments_monthly,
      feedback
    };

  });

  // Delete a Survey by id
  // app.delete("/api/survey/:id", function(req, res) {
  //   surveyController.deleteOne(req, res)
  // });
};