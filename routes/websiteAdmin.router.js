var express = require('express');
const RenderController = require('../controllers/renderAdmin.controller')
var router = express.Router();

/* GET users listing. */  
router.get('/', RenderController.sigin);
router.get('/home', RenderController.home);


module.exports = router;
