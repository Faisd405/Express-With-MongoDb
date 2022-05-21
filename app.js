var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Import Cors
var cors = require('cors');

// Acces Env
require('dotenv').config()

// Connect to Database
require('./config/database')

// Import Routes
var exampleRouter = require('./routes/example');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Routes
app.use('/api/example', exampleRouter);

module.exports = app;
