const getToken = require("../utils/token");
var axios = require("axios").default;
const templateId = "universal-login";

async function updateTemplate() {
  const token = await getToken();
  console.log(token);
  console.log("-------");
  console.log(templateId);

  var options = {
    method: "GET",
    url: `https://banbifpn.us.auth0.com/api/v2/branding/templates/universal-login`,
    headers: { authorization: `Bearer ${token}` },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

updateTemplate();