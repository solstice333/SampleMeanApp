const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/', apiController.index);

router.get('/kitties', apiController.kitties);

module.exports = router;
