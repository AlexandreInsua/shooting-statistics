var moment = require('moment');
moment.locale('gl');

var maps = {
     mapScores: (scores)=>{
        return scores.map((score)=>{
            var s = {};
            s.id = score.id;
            s.user = score.user;
            s.date = score.date;
            s.discipline = score.discipline;
            s.modality = score.modality;
            s.scores = score.scores;
            s.comments = scores.comments;
            s.dateStr = moment(score.date).format('l');
            s.average = op.getAverage(score.scores);
            s.disciplineStr = op.getDisciplineStr(score.discipline);
            s.modalityStr = op.getModaliyStr(score.modality);
            return s;
        });
    }
}
var op = {
    getAverage: (scores)=>{
        var sum = scores.reduce(function(a, b) { return a + b; });
        return  (sum/scores.length).toFixed(2);
    },
    getDisciplineStr(discipline){
        var d;
        switch (discipline){
            case 0: d =  "Aire comprimido"; break;
            case 1: d =  "Avancarga Mariette"; break;
        }
        return d;
    }, 
    getModaliyStr(modality){
        var m;
        switch (modality){
            case 0: m = "Adestramento"; break;
            case 1: m = "Tirada social"; break;
            case 2: m = "Campionato provincial"; break;
            case 3: m = "Campionato galego"; break;
            case 7: m = "Exercicio controlado"; break;
            case 8: m = "Torneo Cidade de Barcelos"; break;
            case 9: m = "Exhibición"; break;
        }
        return m;
    }
}

module.exports = maps;

/*
disciplinas 
    0: pistola aire comprimido 10m
    1: mariette revolver avancarga .44
modalidades
    0: adestramento
    1: tirada social
    2: campionato provincial
    3: campionato galego
    4:
    8: Torneo Cidade de Barcelos
    9: exhibicións
*/