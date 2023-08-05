import axios from "axios";

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN} `,
  },
});

export default client;
