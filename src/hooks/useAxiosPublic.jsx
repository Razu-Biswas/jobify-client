import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://jobify-backend-two.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
