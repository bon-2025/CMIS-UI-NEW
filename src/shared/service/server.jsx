import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:5000/", // JSON Server base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default server;
