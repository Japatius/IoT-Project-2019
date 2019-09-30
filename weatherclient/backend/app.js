const express = require('express')
const app = express();
const port = 3000;

let sensor = require('./routes/sensorvalues');

app.use('/values', sensor)

app.get('/', (req, res) => res.send('Navigate to "/values" for weatherdata'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;