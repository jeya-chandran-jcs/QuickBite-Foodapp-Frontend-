import axios from 'axios';
import API_BASE_URL from '../global.js';
export const getUser = () =>
  localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null;

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_BASE_URL}/api/users/login`, { email, password });
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const register = async registerData => {
  const { data } = await axios.post(`${API_BASE_URL}/api/users/register`, registerData);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const logout = () => {
  localStorage.removeItem('user');
};

export const updateProfile = async user => {
  const { data } = await axios.put(`${API_BASE_URL}/api/users/updateProfile`, user);
  localStorage.setItem('user', JSON.stringify(data));
  return data;
};

export const changePassword = async passwords => {
  await axios.put(`${API_BASE_URL}/api/users/changePassword`, passwords);
};

export const getAll = async searchTerm => {
  const { data } = await axios.get(`${API_BASE_URL}/api/users/getAll/` + (searchTerm ?? ''));
  return data;
};

export const toggleBlock = async userId => {
  const { data } = await axios.put(`${API_BASE_URL}/api/users/toggleBlock/` + userId);
  return data;
};

export const getById = async userId => {
  const { data } = await axios.get(`${API_BASE_URL}/api/users/getById/` + userId);
  return data;
};

export const updateUser = async userData => {
  const { data } = await axios.put(`${API_BASE_URL}/api/users/update`, userData);
  return data;
};
