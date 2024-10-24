var request = require("request");
require("dotenv").config();

const getToken = require("../utils/token");

exports.getToken = (req, res) => {
  var options = {
    method: "POST",
    url: `https://${process.env.DOMAIN}/oauth/token`,
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.CLIENTID,
      client_secret: process.env.CLIENT_SECRET,
      audience: `https://${process.env.DOMAIN}/api/v2/`,
      scope: 'read:branding update:branding delete:branding',
      grant_type: "client_credentials",
    //   scope: "update:clients update:client_keys update:client_credentials"
    }),
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.send(body);
  });
};

exports.setUriLogin = async (req, res) => {
  var axios = require("axios").default;

  const token = await getToken();

  console.log(token);

  var options = {
    method: "PATCH",
    url: `https://${process.env.DOMAIN}/api/v2/clients/${process.env.CLIENTID}`,
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + token,
      "cache-control": "no-cache",
    },
    data: { initiate_login_uri: `https://${process.env.DOMAIN}/login` },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
