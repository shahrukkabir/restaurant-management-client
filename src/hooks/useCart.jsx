import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const axiosSecure = useAxiosSecure();

    const { data: cart = [], isLoading, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts');
            return res.data;
        }
    });

    return [cart, isLoading, refetch];
};

export default useCart;
