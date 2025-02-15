import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../../mockData/products'
import axios from 'axios'

interface IParams {
    searchInput?: string;
    sort?: string;
}

interface ProductsState {
    products: IProduct[];
    loading: boolean
    error: string | null;
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (params: IParams, thunkAPI) => {
        const {searchInput = "", sort} = params;
        
        const paramSort = sort ? `_sort=price&_order=${sort}` : '';
        
        try {
            const response = await axios.get<IProduct[]>(`http://localhost:4200/products?q=${searchInput}&${paramSort}`)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('Errrrrror');
            }
        }
    },
)


const initialState: ProductsState = {
    products: [],
    loading: false,
    error: null,
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllProducts
            .addCase(getAllProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(getAllProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
    },
});

export default productsSlice.reducer;