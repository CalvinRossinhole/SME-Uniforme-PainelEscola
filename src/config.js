/* eslint-disable */
let API_URL = process.env.REACT_APP_API_URL;
let JWT_AUTH = `${API_URL}/api-token-auth/`;
// verifica o tempo minimo para refresh do token
// se faltar 300s (5 min) para o token vencer, ele deve ser atualizado
// https://getblimp.github.io/django-rest-framework-jwt/#refresh-token
const REFRESH_TOKEN_TIMEOUT = process.env.REACT_APP_REFRESH_TOKEN_TIMEOUT;

if (process.env.NODE_ENV === "production") {
  // This way we can pass params to static files. see Dockerfile.
  // when build default env is production
  API_URL = "API_URL_REPLACE_ME";
  JWT_AUTH = "API_URL_REPLACE_ME/api-token-auth/";
}

module.exports = {
  API_URL: API_URL,
  JWT_AUTH: JWT_AUTH,
  REFRESH_TOKEN_TIMEOUT: REFRESH_TOKEN_TIMEOUT,
  HOME: ""
};
