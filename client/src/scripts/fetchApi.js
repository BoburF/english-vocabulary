export const baseUrl = 'http://localhost:5000';
export const path = {
  register: '/auth/register',
  login: '/auth/login',
  vocab: '/vocab',
  addVocab: '/add/vocab',
  deleteVocab: '/delete/:id',
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
  const response = await fetch(`${baseUrl}${path.register}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const car = await response.json();
  return car;
};
export const getUsers = async () => {
  const response = await fetch(`${baseUrl}${path.register}`);
  const car = await response.json();
  return car;
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
