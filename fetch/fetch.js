import axios from "axios";

const createReview = (param) => {
  return axios.post("http://" + 'venusdental.co.kr' + "/review/create", param);
};

const getReview = async () => {
  let result = await axios.get("http://" + 'venusdental.co.kr' + "/review/list", {});
  return result.data;
};

module.exports = {
  createReview: createReview,
  getReview: getReview,
}