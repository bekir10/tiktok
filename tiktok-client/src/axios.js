import axis from "axios";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern--backend.herokuapp.com/",
});

export default instance;
