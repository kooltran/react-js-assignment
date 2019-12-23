const proxyUrl = "http://cors-anywhere.herokuapp.com/";
const targetUrl = "https://api.gigacover.com/recruitment/challenge/";

export const tripsApi = () => {
  return fetch(proxyUrl + targetUrl, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Origin: "*",
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Origin": "*"
    }
  }).then(res => res.json());
};
