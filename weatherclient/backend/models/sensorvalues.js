let db = require('../database');

let values = {

    getAllValues: function(callback) {
        return db.query('select * from sensorvalues', callback)
    },

    getCurrentValues: function(callback) {
        return db.query('select * from sensorvalues order by id desc limit 1', callback)
    },

    getTemperature: function(callback) {
        return db.query('select id, temperature from sensorvalues', callback)
    },

    getPressure: function(callback) {
        return db.query('select id, pressure from sensorvalues', callback)
    },

    getHumidity: function(callback) {
        return db.query('select id, humidity from sensorvalues', callback)
    }

};

module.exports = values;