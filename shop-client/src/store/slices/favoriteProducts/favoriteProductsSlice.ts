import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../../mockData/products'


interface ProductsState {
    favoriteProducts: IProduct[];
}

const initialState: ProductsState = {
    favoriteProducts: []
};


export const favoriteProductsSlice = createSlice({
    name: 'favoriteProducts',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.favoriteProducts.some(prod => prod.id === action.payload.id)) {
                state.favoriteProducts.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter(
                (prod) => prod.id !== action.payload.id
            );
        },
    },
});


export const { addFavorite, removeFavorite } = favoriteProductsSlice.actions;
export default favoriteProductsSlice.reducer;