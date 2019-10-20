const express = require('express');
const router = express.Router()
const sc = require('../controllers/scores');

router.get('/',(req,res)=> {
    console.log("Testing API ... ", new Date(), "\n... API ok");
    res.status(200).json({msg: 'Api ok'})
}
);
router.get('/tiradas', sc.getScores);
router.get('/tirada/:id', sc.getScore);
router.post('/tirada', sc.saveScore);
router.put('/tirada/:id', sc.updateScore);
router.delete('/tirada/:id', sc.deleteScore);


module.exports = router;