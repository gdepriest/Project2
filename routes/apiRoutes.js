var surveyController = require("../controllers/survey-controller")
module.exports = function(app) {
  // Get all Survey Data
  app.get("/api/survey", function(req, res) {
    surveyController.findAll(req, res)
  });

  // Create a new Survey
  app.post("/api/survey", function(req, res) {
    surveyController.createOne(req, res)
  });

  // Delete a Survey by id
  app.delete("/api/survey/:id", function(req, res) {
    surveyController.deleteOne(req, res)
  });
};
