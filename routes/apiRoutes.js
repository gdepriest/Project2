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
      res.send(data);
    })

  })

  app.get("/api/resultsAvg", function (req, res) {
    db.Average.findByPk(1).then(function (data) {
      console.log(".get results avg data: ", data);
      res.send(data);
    })

  })

  // app.get("/api/resultsAvg", function (req, res) {
  //   db.Survey.findAll({
  //     attributes: {
  //       include: [
  //         [sequelize.fn('AVG', sequelize.col('menstruation'))]
  //       ]
  //     },


  //   }).then(function (data) {
  //     console.log(data)
  //     res.send(data)
  //   })
  // })

  // Create a new Survey
  app.post("/api/survey", function (req, res) {
    console.log("API Survey post route hit");
    console.log("API Routes", req.body);

    var menstruationTotal;
    var pregnancyTotal;
    var cosmeticsTotal;
    var garmentTotal;
    var menstruationAvg;
    var pregnancyAvg;
    var cosmeticsAvg;
    var garmentAvg;
    var totalTotal;

    db.Survey.create(req.body).then(function (surveys) {
      db.Average.findAll({}).then(function (data) {
        console.log("data: ", data[0].dataValues);

        var dataAvg = data[0].dataValues;
        console.log("dataAvg.totalTotal: ", dataAvg.totalTotal);
        console.log("req.body.totalExpense: ", req.body.totalExpense);

        menstruationTotal = (parseFloat(dataAvg.menstruationTotal) + parseFloat(req.body.menstruation)) ;
        pregnancyTotal = (parseFloat(dataAvg.menstruationTotal) + parseFloat(req.body.menstruation));
        cosmeticsTotal = (parseFloat(dataAvg.cosmeticsTotal) + parseFloat(req.body.cosmetics));
        garmentTotal = (parseFloat(dataAvg.garmentTotal) + parseFloat(req.body.garments));
        menstruationAvg =  menstruationTotal / parseFloat(surveys.id),
          pregnancyAvg =  pregnancyTotal / parseFloat(surveys.id),
          cosmeticsAvg =  cosmeticsTotal / parseFloat(surveys.id),
          garmentAvg =  garmentTotal / parseFloat(surveys.id),
          totalTotal = (parseFloat(dataAvg.totalTotal) + parseFloat(req.body.totalExpense))

        var newAvg = {
          menstruationTotal: menstruationTotal,
          menstruationAvg: menstruationAvg,
          pregnancyTotal: pregnancyTotal,
          pregnancyAvg: pregnancyAvg,
          cosmeticsTotal: cosmeticsTotal,
          cosmeticsAvg: cosmeticsAvg,
          garmentTotal: garmentTotal,
          garmentAvg: garmentAvg,
          totalTotal: totalTotal
        };

        console.log("newAvg: ", newAvg);

        //db.Averages.update here look in 15/14

        db.Average.update(newAvg, {
          where: {
            id: dataAvg.id
          }
        }).then(function (dbAverage) {
          console.log(dbAverage);
        });
        res.send(surveys)
      })

    })

  });

};