import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, PRODUCTS } from '../../mockData/products'


interface ProductsState {
    products: IProduct[];
    favoriteProducts: IProduct[];


}

const initialState: ProductsState = {
    products: PRODUCTS,
    favoriteProducts: []
};


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProducts: (state, action: PayloadAction<string>) => {
            const searchQuery = action.payload.toLowerCase().trim();
            if (searchQuery === '') {
                state.products = [...PRODUCTS];
            } else {
                state.products = PRODUCTS.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery) ||
                    product.brand.toLowerCase().includes(searchQuery) ||
                    product.category.toLowerCase().includes(searchQuery)
                );
            }
        },
        addFavorite:(state, action) => {
            if (!state.favoriteProducts.some(prod => prod.id === action.payload.id)) {
                state.favoriteProducts.push(action.payload);
            }
        },
        removeFavorite:(state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter(
                (prod) => prod.id !== action.payload.id
            );
        },
    },
});


export const { filterProducts, addFavorite, removeFavorite } = productsSlice.actions;
export default productsSlice.reducer;