const express = require('express');
const bodyParser = require('body-parser');

const requestValidator = require('./routes/requestValidator');

const app = express();

// To use/test api with curl and headers
app.use((req, res, next) => {
    req.headers["content-type"] = "application/json";
    next();
});

// Can also parse body of incoming requests to json
app.use(bodyParser.json());

app.use('/api', requestValidator);


// Production
app.listen(process.env.PORT);

// Dev
// app.listen(8080);