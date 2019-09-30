let express = require('express');
let router = express.Router();
let values = require('../models/sensorvalues');

router.get('/', function(req,res) {
    values.getAllValues(function(err,rows){
        if (err){
            res.json(err)
        } else {
            res.json(rows)
        }
    })
})

module.exports = router; 