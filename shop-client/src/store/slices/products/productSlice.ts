import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../../mockData/products'
import axios from 'axios'

interface SearchParams {
    q?: string;
    // title?: string;
    // category?: string;
}

interface ProductsState {
    products: IProduct[];
    loading: boolean
    error: string | null;
}

export const getAllProducts = createAsyncThunk(
    'products/getAllProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>('http://localhost:4200/products')
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

export const searchProducts = createAsyncThunk(
    'products/searchProducts',
    async (params: SearchParams, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:4200/products', {
                params,
            });
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }
        }
    }
);

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
            // searchProducts
            .addCase(searchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(searchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default productsSlice.reducer;