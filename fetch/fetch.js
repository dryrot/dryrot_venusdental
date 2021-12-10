import axios from "axios";

let prod = "venusdental.co.kr";
let dev = "localhost:8001";

const createReview = async (param) => {
  let result = await axios.post("http://" + dev + "/review/create", param);
  return result;
};

const getReview = async () => {
  let result = await axios.get("http://" + dev + "/review/list", {});
  return result.data;
};

module.exports = {
  createReview: createReview,
  getReview: getReview,
};
