let express = require('express');
let router = express.Router();
let values = require('../models/sensorvalues');

router.get('/', function(req,res) {
    values.getAllValues(function(err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
});

router.get('/current', function(req,res) {
    values.getCurrentValues(function(err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
});

router.get('/pastday', function(req,res) {
    values.getPastDayValues(function (err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        } 
    })
});

router.get('/hourly', function(req,res) {
    values.getHourlyValues(function (err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        } 
    })
});

router.get('/temperature', function(req,res) {
    values.getTemperature(function(err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
});

router.get('/pressure', function(req,res) {
    values.getPressure(function(err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
});

router.get('/humidity', function(req,res) {
    values.getHumidity(function(err,rows) {
        if (err) {
            res.json(err)
        } else {
            res.json(rows)
        }
    })
});


module.exports = router; 