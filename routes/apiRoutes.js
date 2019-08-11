var db = require("../models");

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
      res.send(data);
    })

  })

  app.get("/api/resultsAvg", function (req, res) {
    db.Average.findByPk(1).then(function (data) {
      console.log(".get results avg data: ", data);
      res.send(data);
    })

  })

  app.get("/api/resultsPie", function (req, res) {
    db.Average.findByPk(1).then(function (data) {
      console.log(".get results avg data: ", data);
      res.send(data);
    })

  })

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

        menstruationTotal = parseFloat((parseFloat(dataAvg.menstruationTotal) + parseFloat(req.body.menstruation))).toFixed(2);
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

        console.log("newAvg: ", newAvg);

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