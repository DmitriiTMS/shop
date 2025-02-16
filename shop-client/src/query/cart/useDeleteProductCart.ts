import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProductCart } from "../../api/cart/cart";

interface IErrorResponse {
    message: string;
    status?: number;
}

export const useDeleteProductCart = () => {
    const queryClient = useQueryClient();

    const { mutate: mutateDelete, isError: isErrorDelete, isPending: isPendingDelete, error } = useMutation({
        mutationKey: ["deleteProductCart"],
        mutationFn: (id: number) => deleteProductCart(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["getAllCartProducts"] });
        },
        onError: (error: IErrorResponse) => {
            console.log(error.message);
        },
    });

    return { mutateDelete, isErrorDelete, isPendingDelete, error };
};