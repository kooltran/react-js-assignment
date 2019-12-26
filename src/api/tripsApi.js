import axios from "axios";

const proxyUrl = "http://cors-anywhere.herokuapp.com/";
const targetUrl = "http://35.186.154.66:19110/recruitment-challenge/case3-big";

export const tripsApi = () => {
  console.log(process.env);
  return axios.get(proxyUrl + targetUrl).then(res => res.data);
};
