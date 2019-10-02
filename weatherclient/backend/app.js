const express = require('express')
const app = express();
const port = 3001;
const cors = require('cors');

let sensor = require('./routes/sensorvalues');

app.use(cors());
app.use('/values', sensor)
app.use('/current', sensor)
app.use('/temperature', sensor)
app.use('/pressure', sensor)
app.use('/humidity', sensor)

app.get('/', (req, res) => res.send('Navigate to "/values" for weatherdata'))

app.listen(port, () => console.log(`API listening on port ${port}!`))

module.exports = app;