var db = require("../models");

module.exports = function (app) {
  // Get all Survey Data
  app.get("/api/survey", function (req, res) {
    db.Survey.findAll({}).then(function (surveys) {
      res.json(surveys);
    })
  });

  app.get("/api/average", function (req, res) {
    db.Average.findAll({}).then(function (surveys) {
      res.json(surveys);
    })
  });

  app.get("/api/personalData/:id", function (req, res) {
    id = req.params.id;
    db.Survey.findByPk(id).then(function (data) {
      res.send(data);
    })

  })

  app.get("/api/resultsAvg", function (req, res) {
    db.Average.findByPk(1).then(function (data) {
      res.send(data);
    })

  })

  app.get("/api/resultsPie", function (req, res) {
    db.Average.findByPk(1).then(function (data) {
      res.send(data);
    })

  })

  // Create a new Survey
  app.post("/api/survey", function (req, res) {

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

        var dataAvg = data[0].dataValues;

        menstruationTotal = parseFloat((parseFloat(dataAvg.menstruationTotal) + parseFloat(req.body.menstruation)));
        pregnancyTotal = (parseFloat(dataAvg.menstruationTotal) + parseFloat(req.body.menstruation));
        cosmeticsTotal = (parseFloat(dataAvg.cosmeticsTotal) + parseFloat(req.body.cosmetics));
        garmentTotal = (parseFloat(dataAvg.garmentTotal) + parseFloat(req.body.garments));
        menstruationAvg = parseFloat(menstruationTotal / parseFloat(surveys.id)).toFixed(2),
        pregnancyAvg = parseFloat(pregnancyTotal / parseFloat(surveys.id)).toFixed(2),
        cosmeticsAvg = parseFloat(cosmeticsTotal / parseFloat(surveys.id)).toFixed(2),
        garmentAvg = parseFloat(garmentTotal / parseFloat(surveys.id)).toFixed(2),
        totalTotal = parseFloat(parseFloat(dataAvg.totalTotal) + parseFloat(req.body.totalExpense)).toFixed(2)

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

        db.Average.update(newAvg, {
          where: {
            id: dataAvg.id
          }
        }).then(function (dbAverage) {});
        res.send(surveys)
      })

    })

  });

};