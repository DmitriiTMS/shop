import { useQuery } from "@tanstack/react-query";
import { getAllProductsCart } from "../../api/cart/cart";



export const useGetAllCartProducts = () => {
    const {
        data: allCartProducts,
        isLoading,
        isError
    } = useQuery({
        queryKey: ["getAllCartProducts"],
        queryFn: () => getAllProductsCart(),
    });

    return { allCartProducts, isLoading, isError };
};