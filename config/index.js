const dotenv = require('dotenv');
const dotenvParseVariables = require('dotenv-parse-variables');

let env = dotenv.config()
if (env.error) throw env.error;

env = dotenvParseVariables(env.parsed);

module.exports = {
    baseUrl: env.BASE_URL,
    wmsBaseUrl: env.REQRES,
    wmsMiniStagingBaseUrl: env.REQRES,
    wmsAuth: env.REQRES_AUTH,
    serviceID: {
        clientApp: env.CLIENT_APP_SERVICE_ID,
        REQRES: env.REQRES_SERVICE_ID,
    },
    serviceSecret: {
        clientApp: env.CLIENT_APP_SERVICE_SECRET,
        REQRES: env.REQRES_SERVICE_SECRET
    },
    authEmail: env.AUTH_EMAIL,
    authEmailPassword: env.AUTH_EMAIL_PASSWORD,
    dbHost: env.DB_HOST,
    dbUser: env.DB_USER,
    dbPassword: env.DB_PASSWORD,
    dbPort: env.DB_PORT,
    dbWmsApi: {
        inventory: env.REQRES,
        auth: env.DB_REQRES,
        product: env.DB_WMSAPI_PRODUCT,
    },
    integratedEnv: env.INTEGRATED_ENV,
    silentLogger: env.SILENT_LOGGER
};