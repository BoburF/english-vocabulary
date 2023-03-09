import axios from 'axios'

export const baseUrl = 'https://english-vocabulary-blush.vercel.app';
export const path = {
  register: '/auth/register',
  login: '/auth/login',
  vocab: '/user/vocab',
  addVocab: '/user/add/vocab',
  delete: '/user/delete',
  update: '/user/update',
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

export const postVocab = async (body, token) => {
  const response = await fetch(`${baseUrl}${path.addVocab}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization' : JSON.parse(token),
    },
    body: JSON.stringify(body),
  });
  return response;
};
export const getAllVocab = async (token) => {
  const response = await fetch(`${baseUrl}${path.vocab}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(token),
    }
  });
  const car = await response.json();
  return car;
};
export const deleteVocab = async (id, token) => {
  const response = await fetch(`${baseUrl}${path.delete}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(token),
    },
  });
  const car = await response.json();
  return car;
};
export const updateVocab = async (data, token, id) => {
  const response = await fetch(`${baseUrl}${path.update}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': JSON.parse(token),
    },
    body: JSON.stringify(data),
  });
  const car = await response.json();
  return car;
};