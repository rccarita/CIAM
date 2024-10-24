const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.post('/token', authController.getToken);
router.post('/set-uri', authController.setUriLogin);

module.exports = router;