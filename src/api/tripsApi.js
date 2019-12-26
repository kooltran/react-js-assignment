import axios from "axios";

const proxyUrl = "http://cors-anywhere.herokuapp.com/";
const targetUrl = "https://api.gigacover.com/recruitment/challenge/";

export const tripsApi = () => {
  return axios.get(proxyUrl + targetUrl).then(res => res.data);
};
