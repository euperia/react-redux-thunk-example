
/*
 *   Synchronous action creator
 */
const setPosts = posts => ({
    type: 'setPosts',
    payload: { posts }
})

/*
    Asynchronous thunk action creator
    calls the api, then dispatches the synchronous action creator
*/
export const fetchPosts =  () => {
    return async dispatch => {
        try {
            const requestOptions = {
                method: 'GET',
                headers: { 'Accept': 'application/json' },
            };
            const response = await fetch('http://localhost:3000/posts', requestOptions);
            const posts = await response.json();
            console.log(posts)
            dispatch(setPosts(posts))
        }
        catch(e){
            console.log(e)
        }
    }
}