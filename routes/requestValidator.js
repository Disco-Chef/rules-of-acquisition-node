// import { rulesOfAcquisition } from "../rulesOfAcquisition"
const rulesFile = require("../data/rulesOfAcquisition");

const express = require('express');
const { check } = require('express-validator');

const rulesController = require('../controllers/rules');

const router = express.Router();

router.get("/v1/rules",
  [
    check("rule_number").custom((value, { req }) => {
      if (!(value in rulesFile.rulesListing)) {
        throw new Error ('Invalid rule number')
      }
      return true
    })
  ],
  rulesController.getRules
)
module.exports = router
