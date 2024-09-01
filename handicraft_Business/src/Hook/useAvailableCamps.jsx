import { useQuery } from '@tanstack/react-query';
import useAxiosPublicApi from './useAxiosPublicApi';

export function useAvailableCamps() {
  const axiosPublic = useAxiosPublicApi();

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['availableCamp'],
    queryFn: async () => {
      const res = await axiosPublic.get('/availableCamp');
      return res.data;
    },
  });

  return { data, isLoading, refetch };
}
