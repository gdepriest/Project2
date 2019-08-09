var db = require("../models");

// var surveyController = require("../controllers/survey-controller")
module.exports = function (app) {
  // Get all Survey Data
  app.get("/api/survey", function (req, res) {
    db.Survey.findAll({}).then(function (surveys) {
      res.json(surveys);
    })
  });

  app.get("/api/personalData/:id", function (req, res) {
    id = req.params.id;
    console.log(id);
    db.Survey.findByPk(id).then(function (data) {
      console.log(".get data: ", data);
      res.send(data.dataValues);
    })

  })

  app.get("/api/resultsAvg", function (req, res) {
    db.Survey.findAll({
      attributes: {
        include: [
          [sequelize.fn('AVG', sequelize.col('menstruation'))]
        ]
      },


    }).then(function (data) {
      console.log(data)
      res.send(data)
    })
  })

  // Create a new Survey
  app.post("/api/survey", function (req, res) {
    console.log("API Survey post route hit");
    console.log("API Routes", req.body);
    //do math on backend
    //req.body.total = req.body.menstruation + jsldjfldskjlj

    var menstruationAvg;
    var pregnancyAvg;
    var cosmeticsAvg;
    var garmentAvg;
    var totalTotal;

    db.Survey.create(req.body).then(function (surveys) {
      db.Averages.findAll({}).then(function (data) {
         menstruationAvg = (parseInt(data.menstruation) + parseInt(req.body.menstruation)) / surveys.id,
          pregnancyAvg = (data.pregnancy + req.body.pregnancy) / surveys.id,
          cosmeticsAvg = (data.cosmetics + req.body.cosmetics) / surveys.id,
          garmentAvg = (data.garment + req.body.garment) / surveys.id,
          totalTotal = (data.totalExpense + req.body.totalExpense)

          var newAvg = {
            menstruationAvg: menstruationAvg,
            pregnancyAvg: pregnancyAvg,
            cosmeticsAvg: cosmeticsAvg,
            garmentAvg: garmentAvg,
            totalTotal: totalTotal
          };

          //db.Averages.update here look in 15/14
      })
      res.send(surveys);
    })

  });

  // Delete a Survey by id
  // app.delete("/api/survey/:id", function(req, res) {
  //   surveyController.deleteOne(req, res)
  // });
};