import { API_URL } from "../config";

export const setUsuario = payload => {
  const url = `${API_URL}/cadastro/`;
  let status = 0;
  let values = { ...payload };
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(values),
    headers: { "Content-Type": "application/json" }
  })
    .then(res => {
      status = res.status;
      return res.json();
    })
    .then(data => {
      return { data: data, status: status };
    })
    .catch(error => {
      return console.log(error);
    });
};
