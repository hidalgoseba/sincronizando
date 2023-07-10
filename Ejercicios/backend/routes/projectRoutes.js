const express = require('express');
const ProjectController = require('../controllers/projectController');

const router = express.Router();

router.get('/home', ProjectController.home);
router.post('/test', ProjectController.test);

module.exports = router;
