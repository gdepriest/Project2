var db = require("../models");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("home", {
      // title: "HER COSST"
    });
  })

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
