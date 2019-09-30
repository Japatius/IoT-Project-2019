let mysql = require('mysql');
let connection = mysql.createPool({
  host: '172.20.240.118',
  user: 'webuser',
  password: 'admin123',
  database: 'weatherdata'
});
module.exports = connection;