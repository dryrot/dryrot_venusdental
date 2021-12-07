import axios from "axios";
const host = window.location.host;

export const createReview = (param) => {
  return axios.post("http://" + host + "/review/create", param);
};
