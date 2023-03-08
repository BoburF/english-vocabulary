import axios from 'axios'

export const baseUrl = 'http://localhost:5000';
export const path = {
  register: '/auth/register',
  login: '/auth/login',
  vocab: '/user/vocab',
  addVocab: '/user/add/vocab',
  deleteVocab: '/user/delete',
};
const generateQueryString = (queryParams = []) =>
  queryParams.length
    ? `?${queryParams.map((x) => `${x.key}=${x.number}`).join('&')}`
    : '';

export const getVocab = async (baseUrl, path, queryParams) => {
  const response = await fetch(
    `${baseUrl}${path}${generateQueryString(queryParams)}`
  );
  const data = await response.json();
  return data;
};
export const fetchRegister = async (body) => {
  return await axios.post(`${baseUrl}${path.register}`, body)
  .then((res) => res.data)
  .catch((err) => {
    console.log(err);
  })
};

export const fetchLogin = async (body) => {
  const response = await fetch(`${baseUrl}${path.login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};

export const postVocab = async (body) => {
  const response = await fetch(`${baseUrl}${path.addVocab}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};
export const getAllVocab = async () => {
  const response = await fetch(`${baseUrl}${path.vocab}`);
  const car = await response.json();
  return car;
};
export const deleteVocab = async (id, token) => {
  const response = await fetch(`${baseUrl}${path.deleteVocab}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(token),
    },
  });
  const car = await response.json();
  return car;
};