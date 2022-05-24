var express = require('express');
var router = express.Router();
var AuthController = require('../../app/Controllers/Auth/AuthController');
var VerifySignUpController = require('../../app/Controllers/Auth/VerifySignUpController');

router.post('/signup', [VerifySignUpController.checkEmail], AuthController.SignUp);

module.exports = router;
