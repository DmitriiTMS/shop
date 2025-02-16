import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { ICartProductAdd } from "../../types/products";
import { addProductCart } from "../../api/cart/cart";
import { AxiosError } from "axios";

export const useAddProductCart = () => {
    const [errorStatusCode, setErrorStatusCode] = useState<number | null>(null);

    const queryClient = useQueryClient();

    const { mutate, isError, isPending, error } = useMutation<
        void,
        AxiosError<{ message: string }>,
        ICartProductAdd
    >({
        mutationKey: ["addProductCart"],
        mutationFn: (product: ICartProductAdd) => addProductCart(product),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCartProducts"] });
        },
        onError: (error) => {
            setErrorStatusCode(error.response?.status ?? null);
        },
    });

    return { mutate, isError, isPending, error, errorStatusCode };
};