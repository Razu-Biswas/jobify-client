import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useQuery({
    queryKey: ["admin", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/api/v1/admin/${user.email}`);
      return res.data;
    },
  });
  return [data, isLoading];
};

export default useAdmin;
