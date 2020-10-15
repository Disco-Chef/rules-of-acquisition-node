// Why in God's sweet sweet name is my object under rules.rules instead of just rules?

const rulesFile = require('../data/rulesOfAcquisition')

const { validationResult } = require("express-validator")


exports.getRules = (req, res, next) => {

  const errors = validationResult(req)

  // temporary for catching errors for now. Make more specific later.
  if (!errors.isEmpty()) {
    // console.log(errors.errors)
    return res.status(400).json({
        success: false,
        error_title: errors["errors"][0]["msg"],
        user_message: "No such rule number exists. Some have been lost to the ages, but most from '1' to '286' should do",
    })
  }

  else {
    // setting up backbone before the actual desired returns
    res.status(200).json({
        success: true,
        message: "Successfully got Rule of Acquisition",
        data: {
          rule_number: req.body.rule_number,
          scripture: rulesFile.rulesListing[req.body.rule_number]
        }
    })
  }
}

exports.getRandomRule = (req, res, next) => {
  let rule_number = Math.floor(Math.random() * (286 - 1) + 1.).toString()
  res.status(200).json({

    success: true,
    message: "Successfully got Rule of Acquisition",
    data: {
      rule: rule_number,
      scripture: rulesFile.rulesListing[rule_number]
    }
  })
}