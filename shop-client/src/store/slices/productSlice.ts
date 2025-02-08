import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, PRODUCTS } from '../../mockData/products'


interface ProductsState {
    products: IProduct[];
    filteredProducts: IProduct[];
}

const initialState: ProductsState = {
    products: PRODUCTS,
    filteredProducts: PRODUCTS,
};


export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterProducts: (state, action: PayloadAction<string>) => {
            const searchQuery = action.payload.toLowerCase();
            if (searchQuery === '') {
                state.filteredProducts = state.products;
            } else {
                state.filteredProducts = state.products.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery) ||
                    product.brand.toLowerCase().includes(searchQuery) ||
                    product.category.toLowerCase().includes(searchQuery)
                );
            } 
        },
    },
});


export const { filterProducts } = productsSlice.actions;


export default productsSlice.reducer;