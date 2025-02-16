import { useQuery } from "@tanstack/react-query";
import { getProductCart } from "../../api/cart/cart";

export const useGetProduct = (productId: number) => {
    const { data: product } = useQuery({
        queryKey: ["getProduct", productId],
        queryFn: () => getProductCart(productId),
        enabled: !!productId
    });

    return { product };
};