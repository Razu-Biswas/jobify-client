import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllJobs = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/allJobs");
      return res.data;
    },
  });
  return [data, isLoading, refetch];
};

export default useAllJobs;
