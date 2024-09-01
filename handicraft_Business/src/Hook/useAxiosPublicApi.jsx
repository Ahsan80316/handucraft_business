import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:4000/'
})

const useAxiosPublicApi = () => {
    return axiosPublic;
};

export default useAxiosPublicApi;