import axios from "axios";

const baseURL = "http://localhost:8000";

const common = {
  getSites: () =>
    axios({
      url: "/get/sites",
      baseURL: baseURL,
      method: "get",
    }),
  getSiteDetails: (webUrl) =>
    axios({
      url: webUrl,
      baseURL: baseURL,
      method: "get",
    }),
  getHazards: () =>
    axios({
      url: "/get/hazards",
      baseURL: baseURL,
      method: "get",
    }),
  getHazardDetails: (webUrl) =>
    axios({
      url: webUrl,
      baseURL: baseURL,
      method: "get",
    }),
  postHazard: (data) =>
    axios({
      url: "/post/hazard",
      baseURL: baseURL,
      method: "post",
      data,
    }),
};

export default { common };
