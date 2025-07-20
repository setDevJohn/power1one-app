import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://752136.commercesuite.com.br/web_api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});