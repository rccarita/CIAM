const env = require('env-var');

const envs = {
  DOMAIN: env.get('DOMAIN').required().asString(),
  CLIENTID: env.get('CLIENTID').required().asString(),
  CLIENT_SECRET: env.get('CLIENT_SECRET').required().asString(),
};

module.exports = envs;