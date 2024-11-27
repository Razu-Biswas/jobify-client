import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useAllUsersInfo = () => {
    const axiosSecure = useAxiosSecure();
    const {data, isLoading, refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/allUsers');
            return res.data;
        }
    })
    return [data, isLoading, refetch];
};

export default useAllUsersInfo;