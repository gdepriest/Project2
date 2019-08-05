var db = require("../models");
module.exports = {
    findAll: function(req, res){
        db.Survey.findAll()
            .then(function(allSurveyData) {
                res.json(allSurveyData);
            });
    },
    createOne: function(req, res){
        db.Survey.create(req.body)
            .then(function(newSurveyData) {
                res.json(newSurveyData);
            });
    },
    deleteOne: function(req, res){
        db.Survey.destroy({ where: { id: req.params.id } })
            .then(function(deletedSurvey) {
                res.json(deletedSurvey);
            });
    }
}