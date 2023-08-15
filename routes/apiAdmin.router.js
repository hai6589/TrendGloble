var express = require('express');
const AuthController = require('../controllers/auth.controller');
var router = express.Router();

router.route('/auth/signin').post(AuthController.singin)

module.exports = router;
