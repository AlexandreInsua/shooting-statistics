const mongoose = require('mongoose');
var Schema = mongoose.Schema;

/*
disciplinas 
    0: pistola aire comprimido 10m
    1: mariette revolver avancarga .44
modalidades
    0: adestramento
    1: tirada social
    2: campionato provincial
    3: campionato galego
    4: oficial, torneos, etc
    5: exhibición
    6: outros
    
*/

var ScoreSchema = Schema (
    {
        user:String,
        date:Date,
        discipline:Number,
        modality:Number,
        scores: Array,
        comments:String
    }
);

module.exports = mongoose.model('Score', ScoreSchema);