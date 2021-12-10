import axios from "axios";
// const host = window.location.host;

const createReview = (param) => {
  return axios.post("http://" + 'localhost:8001' + "/review/create", param);
};

const getReview = async () => {

  let result = await axios.get("http://" + 'localhost:8001' + "/review/list", {});
  console.log('result------>', result);
  return result.data;
};

module.exports = {
  createReview: createReview,
  getReview: getReview,
}