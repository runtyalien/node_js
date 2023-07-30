const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

// /admin/contactus => GET
router.get('/contactus', );

router.get('/success', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'success.html'));
});
module.exports = router;