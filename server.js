'use strict';

const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/sdaf', (request, response) => resquest.send('Hello World!'));


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}!`));