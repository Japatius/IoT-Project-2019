let db = require('../database');

let values = {

    getAllValues: function(callback) {
        return db.query('select * from raw_values', callback)
    },

    getCurrentValues: function(callback) {
        return db.query('select * from raw_values order by id desc limit 1', callback)
    },

    getPastDayValues: function(callback) {
        return db.query('select * from raw_values order by id desc limit 240',callback)
    },

    getHourlyValues: function(callback) {
        return db.query('select * from (select @row := @row +1 as id, temperature, pressure, humidity, time_of_date from (select @row := 0)r, raw_values) raw_values where id % 6 = 0 order by id desc limit 24', callback)
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