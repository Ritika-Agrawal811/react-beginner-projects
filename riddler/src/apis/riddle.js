import axios from "axios";

const BASE_URL = "https://api.api-ninjas.com";
const API_KEY = import.meta.env.VITE_API_KEY;

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "X-Api-Key": `${API_KEY}`,
  },
});
