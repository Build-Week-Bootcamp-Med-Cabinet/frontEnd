import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "http://localhost:placeholderdata",
    headers: {
      Authorization: token
    }
  });
};
export default axiosWithAuth;