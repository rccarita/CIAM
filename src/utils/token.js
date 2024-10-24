var request = require("request");
require('dotenv').config();

function getToken() {
  return new Promise((resolve, reject) => {
    var options = {
      method: "POST",
      url: `https://${process.env.DOMAIN}/oauth/token`,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        client_id: process.env.CLIENTID,
        client_secret: process.env.CLIENT_SECRET,
        audience: `https://${process.env.DOMAIN}/api/v2/`,
        grant_type: "client_credentials",
        scope: 'read:branding update:branding delete:branding',
      }),
    };

    // update:clients,update:client_keys,update:client_credentials

    request(options, function (error, response, body) {
      if (error) reject(error);
      else resolve(JSON.parse(body).access_token);
    });
  });
}

module.exports = getToken;