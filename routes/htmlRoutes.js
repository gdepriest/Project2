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
      msg: "Keeping this to understand how to use"
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
    res.render("quiz")
  })

  app.get("/resultsAvg", function(req, res) {
    res.render("resultsAvg")
  })

  app.get("/resultsPie", function(req, res) {
    res.render("resultsPie")
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
