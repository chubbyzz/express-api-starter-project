const express = require('express');
const ENV = require('./config/env');
const app = express();
const port = ENV.PORT || 8000;

app.listen(port, () => {
    console.log(`server up at http://localhost:${port}`)
});