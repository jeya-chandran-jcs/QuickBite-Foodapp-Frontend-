import axios from 'axios';
import API_BASE_URL from "./global.js"

axios.defaults.baseURL =API_BASE_URL
  
// process.env.NODE_ENV !== 'production' ? 'http://localhost:5000' : '/';
