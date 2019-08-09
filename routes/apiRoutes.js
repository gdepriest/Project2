var db = require("../models");

// var surveyController = require("../controllers/survey-controller")
module.exports = function (app) {
  // Get all Survey Data
  app.get("/api/survey", function (req, res) {
    db.Survey.findAll({
      // attributes: {include: [[sequelize.fn('AVG', sequelize.col('menstruation'))]]},
    }).then(function (surveys) {
      res.json(surveys);
    })
  });

  app.get("/api/personalData/:id", function(req, res) {
    id = req.params.id;
    console.log(id);
    db.Survey.findByPk (id).then (function(data) {
      console.log(".get data: ", data);
      res.send(data.dataValues);
    })

  })

  // Create a new Survey
  app.post("/api/survey", function (req, res) {
    console.log("API Survey post route hit");
    console.log("API Routes", req.body);
//do math on backend
//req.body.total = req.body.menstruation + jsldjfldskjlj
    db.Survey.create(req.body).then(function(surveys) {
      res.send(surveys);
    })

  });

  // Delete a Survey by id
  // app.delete("/api/survey/:id", function(req, res) {
  //   surveyController.deleteOne(req, res)
  // });
};