const express = require("express");

require("./models");

const port = 3000;

const app = express();

app.listen(port, () => {
    console.log(`Listening on  port ${3000}...`);
});

