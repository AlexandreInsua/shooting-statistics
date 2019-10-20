var Score = require('../models/score');
var maps = require('../utils/maps')

function getScores(req, res) {
    console.log("Scores request ", new Date());
    Score.find({}).sort('_id').exec((err, scores) => {
        if (err) {
            res.status(500).json({ msg: "Erro inesperados" });
        } else if (!scores) {
            res.status(404).json({ msg: "Non se encontran tiradas" });
        } else {
            var mapedScores = maps.mapScores(scores);
            res.status(200).json({ msg: "Obtendo " +scores.length+" tiradas", data: mapedScores });
        }
    });
};

function getScore(req, res) {
    var scoreId = req.params.id;
    Score.findById(scoreId, (err, scoreGetted) => {
        if (err) {
            res.status(500).json({ exito: false, msg: " Houbo un erro recuperando a tirada", error: err });
        } else if (!scoreGetted) {
            res.status(500).json({ exito: false, msg: " Non se encontrou ningunha a tirada" });
        } else {
            res.status(200).json({ exito: true, msg: "Tirada actualizada", data: scoreGetted });
        }
    });
};

function saveScore(req, res) {
    var params = req.body;
    var score = new Score;
    score.user = params.user;
    score.date = params.date;
    score.discipline = params.discipline;
    score.modality = params.modality;
    score.scores = params.scores;
    score.comments = params.comments;
    score.save((err, scoreStored) => {
        if (err) {
            res.status(500).json({ exito: false, msg: "Houbo un erro gardando a tirada", error: err });
        } else {
            res.status(200).json({ exito: true, msg: "Tirada gardada", score: scoreStored });
        }
    });
};

function updateScore(req, res) {
    var scoreId = req.params.id;
    var params = req.body;
    Score.findByIdAndUpdate(scoreId, params, {'useFindAndModify':false}, (err, scoreUpdated)=>{
        if (err){
            res.status(500).json({ exito: false, msg: "Houbo un erro actualizando a tirada", error: err })
        } else {
            res.status(200).json({ exito: true, msg: "Tirada actualizada", score: scoreUpdated });
        }
    });
};

function deleteScore(req, res) {
    var scoreId = req.params.id;
    Score.findByIdAndDelete(scoreId, {'useFindAndModify':false}, (err, scoreDeleted)=>{
        if (err){
            res.status(500).json({ exito: false, msg: "Houbo un erro eliminando a tirada", error: err })
        } else {
            res.status(200).json({ exito: true, msg: "Tirada eliminada", score: scoreDeleted });
        }
    });
};

module.exports = { getScore, getScores, saveScore, updateScore, deleteScore }