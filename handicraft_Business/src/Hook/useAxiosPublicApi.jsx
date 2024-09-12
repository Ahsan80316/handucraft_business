import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://handicraft-business-server-three.vercel.app/",
});

const useAxiosPublicApi = () => {
  return axiosPublic;
};

export default useAxiosPublicApi;
