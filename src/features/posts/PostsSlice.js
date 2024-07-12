import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const loadPosts = createAsyncThunk(
    'posts/load',
    async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Accept': 'application/json' },
        };
        const response = await fetch('http://localhost:3000/posts', requestOptions);
        return await response.json();
    }
)

const initialState = {
    items: [],
    loading: 'idle'
}


export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.items = action.payload
        },
        addPost: (state, action) => {
            state.items.push(action.payload)
        },
        removePost: (state, action) => {

            state.items = state.items.filter((item) => {
                item.id != action.payload
            })
        },
    },
    extraReducers(builder) {
        builder.addCase(loadPosts.fulfilled, (state, action) => {
            state.items = action.payload
        })
    }
})

/*
 * Handles sending the new post data to the server
 */
export const addPostAsync = (payload) => (dispatch) => {

    (async () => {
        // POST request using fetch with async/await
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };
        const response = await fetch('http://localhost:3000/posts', requestOptions);
        await response.json();

        dispatch(loadPosts())

    })();
}

/*
 * Handles sending the delete request to the server
 */
export const removePostAsync = (payload) => (dispatch) => {


    (async () => {
        const endpoint = `http://localhost:3000/posts/${payload}`
        // DELETE request using fetch with async/await
        const requestOptions = {
            method: 'DELETE',
        };
        const response = await fetch(endpoint, requestOptions);
        await response.json();

        dispatch(loadPosts())

    })();
}

export const { addPost, removePost, setPosts } = postsSlice.actions;
export default postsSlice.reducer;