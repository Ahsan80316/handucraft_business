import useAuth from "./useAuth";
import useAxiosSecure from "../Hook/useAxiosSecure"
import { useQuery } from "@tanstack/react-query";


const useUserData = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: userData, isLoading, isError,refetch} = useQuery({
        queryKey: [user?.email, 'userData'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    });
    return [userData, isLoading, isError,refetch]
}
export default useUserData;