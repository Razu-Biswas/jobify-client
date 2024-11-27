import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";


const useUserProfile = () => {

    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const {data, isLoading} = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            if (user.email) {
                const res = await axiosSecure.get(`/api/v1/users/${user?.email}`)
                return res.data;
            }
            return null;
        }
    })

    return [data, isLoading];
};

export default useUserProfile;