// import { rulesOfAcquisition } from "../rulesOfAcquisition"
const rules = require("../rulesOfAcquisition");

const express = require('express');
const { check } = require('express-validator');

const rulesController = require('../controllers/rules');

const router = express.Router();

router.get("/v1/rules",
  [
    check("rule_number").custom((value, { req }) => {
      if (!(value in rules.rules)) {
        throw new Error ('Invalid rule number')
      }
      return true
    })
  ],
  rulesController.getRules
)
module.exports = router
