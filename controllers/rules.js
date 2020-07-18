// Extract validation errors from a request and make them available in a Result object.
const { validationResult } = require("express-validator")


exports.getRules = (req, res, next) => {

  const errors = validationResult(req)

  // temporary for catching errors for now. Make more specific later.
  if (!errors.isEmpty()) {
    // console.log(errors.errors)
    return res.status(400).json({
        success: false,
        message: "parameters missing or incorrect values"
    })
  }

  else {
    // setting up backbone before the actual desired returns
    res.status(200).json({
        success: true,
        message: "Successfully got Rule of Acquisition",
        data: {
          rule: 'A contract is a contract is a contract!'
        }
    })
  }
};
