const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const todoRoutes = require('./routes/index');
app.use('/', todoRoutes);
app.listen(3000);

app.use(express.static('public'));
