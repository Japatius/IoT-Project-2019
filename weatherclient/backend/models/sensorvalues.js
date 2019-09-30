let db = require('../database');

let values = {

    getAllValues: function(callback) {
        return db.query('select * from sensorvalues', callback);
    }

};

module.exports = values;