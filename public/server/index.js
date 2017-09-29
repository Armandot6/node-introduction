/* jshint esversion: 6 */
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

const port = 3000;
app.listen(port, () => {
    console.log("working on port " + port);
});