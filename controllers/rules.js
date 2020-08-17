// Why in God's sweet sweet name is my object under rules.rules instead of just rules?

const rules = require('../rulesOfAcquisition')

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
          script:rules.rules[req.body.rule_number]
        }
    })
  }
}
