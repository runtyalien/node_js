const path = require('path');

const express = require('express');

const contactController = require('../controllers/contact');

const rootDir = require('../util/path');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

// /admin/contactus => GET
router.get('/contactus', contactController.getContactus);


module.exports = router;