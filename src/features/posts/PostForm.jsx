import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPostAsync } from './PostsSlice'

const PostForm = () => {

    const [postTitle, setPostTitle] = useState('')
    const dispatch = useDispatch()

    const addPostHandler = () => {
        if (postTitle.length === 0) return
        dispatch(addPostAsync({title: postTitle}))
        setPostTitle('')
    }

    return (
        <div className="flex flex-column">
            <label htmlFor="postTitle">Title: </label>
            <input type="text" name="title" id="postTitle"
                value={postTitle} 
                onChange={(e) => setPostTitle(e.target.value)} />
            
            <button onClick={() => addPostHandler()} disabled={postTitle.length === 0 }>Add Post</button>
        </div>
    )
}

export default PostForm