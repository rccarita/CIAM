const express = require('express');
const templateController = require('../controllers/template.controller');

const router = express.Router();

router.get('/:templateId', templateController.readTemplate);
router.put('/:templateId', templateController.updateTemplate);
router.put('/login/:templateId', templateController.updateTemplateLogin);

module.exports = router;