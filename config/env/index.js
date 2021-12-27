const dotenv = require('dotenv');
const nodeEnv = process.env.NODE_ENV;

const path = envPath(nodeEnv);

module.exports = dotenv.config({ path: path }).parsed;


function envPath(nodeEnv) {
    let env = `.${nodeEnv}`;
    if( ['',  'production', undefined].includes(nodeEnv) )
        env = '';
    return  `config/env/${env}.env`;
}