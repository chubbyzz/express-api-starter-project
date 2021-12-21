const dotenv = require('dotenv');

const env = `.${process.env.NODE_ENV}` || ``;

const path = `/custom/path/to/.env${env}`;

dotenv.config({ path })

module.exports = dotenv;