import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IProduct } from '../../../mockData/products'
import axios from 'axios'

interface IProd {
    id?: number;
    title: string;
    category: string;
    brand: string;
    price: number;
    imgUrl: string;
}

export const addFavoriteProducts = createAsyncThunk(
    'favoriteProducts/addFavoriteProducts',
    async (product: IProd, thunkAPI) => {
        try {
            const response = await axios.post('http://localhost:4200/favorites', product)
            return response.data
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }

        }
    },
)

export const deleteFavoriteProducts = createAsyncThunk(
    'favoriteProducts/deleteFavoriteProducts',
    async (id: number, thunkAPI) => {
        try {
            await axios.delete(`http://localhost:4200/favorites/${id}`)
            return id
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }

        }
    },
)


interface ProductsState {
    favoriteProducts: IProduct[];
}

const initialState: ProductsState = {
    favoriteProducts: []
};


export const favoriteProductsSlice = createSlice({
    name: 'favoriteProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addFavoriteProducts.fulfilled, (state, action) => {
                state.favoriteProducts.push(action.payload);
            })
            .addCase(deleteFavoriteProducts.fulfilled, (state, action) => {
                state.favoriteProducts = state.favoriteProducts.filter((prod) => prod.id !== action.payload);
            })
    },
});

export default favoriteProductsSlice.reducer;