import axios from "axios"

export const api = axios.create({
  baseURL: 'https://api-food-explorer-k28p.onrender.com',
  
});