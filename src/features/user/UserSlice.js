import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadUser = createAsyncThunk(
    'user/load',
    async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
        };
        const response = await fetch('http://localhost:3000/user', requestOptions);
        return await response.json();
    }
)

const initialState = {
    user: {}
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers(builder) {
        builder.addCase(loadUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export default postsSlice.reducer;