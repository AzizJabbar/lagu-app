import axios from "axios";
const APIConfig = axios.create({
  baseURL: "https://ws.audioscrobbler.com/2.0/",
});
export default APIConfig;
