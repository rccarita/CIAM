var axios = require("axios").default;

var options = {
  method: 'PUT',
  url: 'https://banbifpn.us.auth0.com/api/v2/branding/templates/signup',
  headers: {authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlppTmx4ZjhkUVlPS29sMzd3a243ZiJ9.eyJpc3MiOiJodHRwczovL2JhbmJpZnBuLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJoT0dIemZ6QzBiWmJxZnVxYnFHMVdnbjV0M1JSbEN4TUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9iYW5iaWZwbi51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcxODgzNDg2MCwiZXhwIjoxNzE4ODM1MTYwLCJzY29wZSI6InJlYWQ6YnJhbmRpbmcgdXBkYXRlOmJyYW5kaW5nIGRlbGV0ZTpicmFuZGluZyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsImF6cCI6ImhPR0h6ZnpDMGJaYnFmdXFicUcxV2duNXQzUlJsQ3hNIn0.SJrqMHgFguA8tO9155HX599ocYnWMuYofygZwVDxXDzM_FBWGYEQwCYz4C1hAkI0FCa3xGCDTrYLX57Ipkh4lmBtV50Q0nApw23n7sB40clEbbD-0yh5Rzevd2PiWhpqmH2WB6_EenMo_Efs3wXpwV2wrttwc8mYgAgNorUiXeCboeiwFcC4XWTnpTzHydtBogFmhkT9dfQHoSwHeh7YkaWMBmXKcY6LAXjK0nMGkz0OUW7QcAc7cHKHni5F4pvZK7UFiC1bpAuFwT-wDCFbZl8UxaYgXmLv04frOyVn86qidJCVxSi2ykQ08z6uX17waYQ8rcc2PlWilaibTilh2g', 'content-type': 'text/html'},
  data: '<!DOCTYPE html><html><head>{%- auth0:head -%}</head><body>{%- auth0:widget -%}</body></html>'
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});