var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       examples: dbExamples
  //     });
  //   });
  // });

  app.get("/", function(req, res) {
    res.render("home", {
      title: "Women's Contribution to Sales Tax Revenue in Colorado"
    });
  })

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get("/survey", function(req, res) {
    res.render("quiz", {
      title: "Survey Questionnaire"
    })
  })

  app.get("/resultsAvg", function(req, res) {
    res.render("resultsAvg", {
      title: "Collected Data Summary"
    })
  })

  app.get("/resultsPie", function(req, res) {
    res.render("resultsPie", {
      title: "State Revenue Impact"
    })
  })

  app.get("/personalData/:id", function(req, res) {

      res.render("personal", {
      title: "Personal Data"
    })
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
