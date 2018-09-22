const path = require('path');
const express = require('express');
const router = express.Router();
const dist = '../angular-frontend/dist/mean-app';

router.get('/', (req, res, next) => {
   res.sendFile(path.join(__dirname, dist, 'index.html'));
})

module.exports = router;
