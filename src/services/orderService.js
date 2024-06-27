import axios from 'axios';
import API_BASE_URL from '../global.js';

export const createOrder = async order => {
  try {
    const { data } = axios.post(`${API_BASE_URL}/api/orders/create`, order);
    return data;
  } catch (error) {}
};

export const getNewOrderForCurrentUser = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/api/orders/newOrderForCurrentUser`);
  return data;
};

export const pay = async paymentId => {
  try {
    const { data } = await axios.put(`${API_BASE_URL}/api/orders/pay`, { paymentId });
    return data;
  } catch (error) {}
};

export const trackOrderById = async orderId => {
  const { data } = await axios.get(`${API_BASE_URL}/api/orders/track/` + orderId);
  return data;
};

export const getAll = async state => {
  const { data } = await axios.get(`${API_BASE_URL}/api/orders/${state ?? ''}`);
  return data;
};

export const getAllStatus = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/api/orders/allstatus`);
  return data;
};
