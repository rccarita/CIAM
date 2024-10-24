const getToken = require("../utils/token");
const fs = require("fs");
const path = require('path');

var axios = require("axios").default;
require("dotenv").config();

exports.updateTemplate = async (req, res) => {
  const { templateId } = req.params;
  const data = `<!DOCTYPE html>
  <html>
    <head>
      {%- auth0:head -%}
      <style>
      body {
        background-image: url("https://images.unsplash.com/photo-1592450865877-e3a318ec3522?ixlib=rb-1.2.1&auto=format&fit=crop&w=2255&q=80");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .prompt-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        width: 480px;
        height: 100%;
        justify-content: center;
        background-color: rgb(60,60,60);
      }
    </style>
    </head>
    <body>
    <h1>Custom Template</h1>
    {% if prompt.name == "login-id" %}

      <div class="hidden">{%- auth0:widget -%}</div>
   
    {% elsif prompt.name == "sign-up" %}

      <div class="hidden">
        {%- auth0:widget -%}
      </div>

    {% else %}

    //Con la cláusula else logramos que en las ventillas no modificadas se siga viendo el widget original
    {% endif %}
    </body>
  </html>`;

  const token = await getToken();
  console.log(token);
  var options = {
    method: "PUT",
    url: `https://${process.env.DOMAIN}/api/v2/branding/templates/${templateId}`,
    headers: { authorization: `Bearer ${token}`, "content-type": "text/html" },
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send(error);
    });
};

exports.updateTemplateLogin = async (req, res) => {
  const { templateId } = req.params;
  
  // Obtener el template de templates/login.html y convertirlo a texto plano:
  // const filePath = path.join(__dirname, "..", "templates", "login.html");
  const filePath = path.join(__dirname, '..', '..', 'templates', 'login_bxi2.html');

  const token = await getToken();

  console.log(token);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred while reading the file.");
    }

    var options = {
      method: "PUT",
      url: `https://${process.env.DOMAIN}/api/v2/branding/templates/${templateId}`,
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "text/html",
      },
      data: data,
    };

    axios
      .request(options)
      .then(function (response) {
        res.send(response.data);
      })
      .catch(function (error) {
        console.error(error);
        res.status(500).send(error);
      });
  });
};

exports.readTemplate = async (req, res) => {
  const { templateId } = req.params;

  const token = await getToken();
  console.log(token);
  console.log("-------");
  console.log(templateId);

  var options = {
    method: "GET",
    url: `https://${process.env.DOMAIN}/api/v2/branding/templates/${templateId}`,
    headers: { authorization: `Bearer ${token}` },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send(error);
    });
};
