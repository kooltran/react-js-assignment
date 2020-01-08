import axios from "axios";

const proxyUrl = process.env.REACT_APP_PROXY_URL;
const targetUrl = process.env.REACT_APP_API_URL;
export const tripsApi = () =>
  axios.get(proxyUrl + targetUrl).then(res => res.data);
