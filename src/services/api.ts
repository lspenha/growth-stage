import axios from "axios";

const api = axios.create({
  baseURL: "https://raw.githubusercontent.com/alexanderboliva/test/main/"
});

export { api };
