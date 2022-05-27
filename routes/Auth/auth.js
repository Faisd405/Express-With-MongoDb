var express = require('express');
var router = express.Router();
var AuthController = require('../../app/Controllers/Auth/AuthController');
var VerifySignUpController = require('../../app/Controllers/Auth/VerifySignUpController');

router.post('/signup', [VerifySignUpController.checkEmail], AuthController.SignUp);
router.post('/signin', AuthController.SignIn);
router.get('/user', AuthController.User);

module.exports = router;
