const express = require('express');

const rulesController = require('../controllers/rules');

const router = express.Router();


router.get("/v1/rules",
  [
  // do the validation checks here
  ],
  rulesController.getRules);

module.exports = router;
