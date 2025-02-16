import axios from "axios";
import { ICartProductAdd } from "../../types/products";


export const getAllProductsCart = async () => {
    const response = await axios.get<ICartProductAdd[]>("http://localhost:4200/cart");
    return response.data;
};

export const getProductCart = async (id: number) => {
    const response = await axios.get(`http://localhost:4200/cart/${id}`);
    return response.data;
};

export const addProductCart = async (product: ICartProductAdd) => {
    const response = await axios.post("http://localhost:4200/cart", product);
    return response.data;
};

export const updateProductCart = async (id: number, product: ICartProductAdd) => {
    const response = await axios.patch(`http://localhost:4200/cart/${id}`, product);
    return response.data;
};

export const deleteProductCart = async (id: number) => {
    const response = await axios.delete(`http://localhost:4200/cart/${id}`);
    return response.data;
};