const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const timeout = require('connect-timeout');


const routes = require('./src/backend/routes/version');

const {mongoose} = require('./modules/database/index');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(timeout('10s'));

app.use('/api', routes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Your application is listening on port ${PORT}`);
});
