import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ICartProductAdd } from "../../types/products";
import { updateProductCart } from "../../api/cart/cart";

export const useUpdateProductCart = (id: number) => {
    const queryClient = useQueryClient();

    const { mutate, isError, isPending, error } = useMutation({
        mutationKey: ["updateProductCart"],
        mutationFn: (product: ICartProductAdd) => updateProductCart(id, product),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["getAllCartProducts"] });
        },
    });

    return { mutate, isError, isPending, error };
};