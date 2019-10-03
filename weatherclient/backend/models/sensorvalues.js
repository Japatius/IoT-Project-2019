let db = require('../database');

let values = {

    getAllValues: function(callback) {
        return db.query('select * from raw_values', callback)
    },

    getCurrentValues: function(callback) {
        return db.query('select * from raw_values order by id desc limit 1', callback)
    },

    getTemperature: function(callback) {
        return db.query('select id, temperature from raw_values', callback)
    },

    getPressure: function(callback) {
        return db.query('select id, pressure from raw_values', callback)
    },

    getHumidity: function(callback) {
        return db.query('select id, humidity from raw_values', callback)
    }

};

module.exports = values;