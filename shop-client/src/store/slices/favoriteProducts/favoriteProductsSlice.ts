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

export const getAllFavoriteProducts = createAsyncThunk(
    'products/getAllFavoriteProducts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IProduct[]>('http://localhost:4200/favorites')
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

export const addFavoriteProducts = createAsyncThunk(
    'favoriteProducts/addFavoriteProducts',
    async (product: IProd, thunkAPI) => {
        try {
            await axios.post('http://localhost:4200/favorites', product)
            thunkAPI.dispatch(getAllFavoriteProducts())
        } catch (error) {
            if (axios.isAxiosError(error)) {                
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('Ошибка');
            }

        }
    },
)

export const deleteFavoriteProducts = createAsyncThunk(
    'favoriteProducts/deleteFavoriteProducts',
    async (id: number, thunkAPI) => {
        try {
            await axios.delete(`http://localhost:4200/favorites/${id}`)
            thunkAPI.dispatch(getAllFavoriteProducts())
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return thunkAPI.rejectWithValue(error.response?.data || error.message);
            } else {
                return thunkAPI.rejectWithValue('Ошибка');
            }

        }
    },
)


interface ProductsState {
    favoriteProducts: IProduct[];
    loading: boolean
    error: string | null;
}

const initialState: ProductsState = {
    favoriteProducts: [],
    loading: false,
    error: null,
};


export const favoriteProductsSlice = createSlice({
    name: 'favoriteProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getAllFavoriteProducts
            .addCase(getAllFavoriteProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllFavoriteProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.favoriteProducts = action.payload;
            })
            .addCase(getAllFavoriteProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // addFavoriteProducts
            .addCase(addFavoriteProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // deleteFavoriteProducts
            .addCase(deleteFavoriteProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteFavoriteProducts.rejected, (state, action) => {
                state.error = action.payload as  string;
            })
    },
});

export default favoriteProductsSlice.reducer;