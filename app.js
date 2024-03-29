var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// Import Cors
var cors = require('cors');
// Import JWT
var jwt = require('jsonwebtoken');
// import Morgan
var morgan = require('morgan');

// Acces Env
require('dotenv').config()

// Connect to Database
var database = require('./config/database')
database.connect()

// Import Routes
var exampleRouter = require('./routes/example');
var authRouter = require('./routes/Auth/auth');
var auth = require("./app/Middleware/auth");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.options('*', cors());

app.use(morgan('dev'));

// Routes
// app.use('/api/example', auth, exampleRouter);
app.use('/api/example', exampleRouter);
app.use('/api/auth', authRouter);

module.exports = app;
