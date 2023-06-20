import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../../services/user";

export const login = createAsyncThunk(
    "user/login",
    async (formData, thunkAPI) => {
        try {
            const response = await loginAPI(formData);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const initialState = {
    user: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            state.error = null;
            state.loading = false;
        }
    },
    extraReducers: {
        [login.pending]: (state) => {
            state.loading = true;
        },
        [login.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.error = null;
            state.loading = false;
            localStorage.setItem("user", JSON.stringify(action.payload));
        }
    }
});

export const { logout } = userSlice.actions;
const userReducer = userSlice.reducer;
export default userReducer;
