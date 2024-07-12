import { configureStore } from '@reduxjs/toolkit'

import postsSlice from './features/posts/PostsSlice'
import UserSlice from './features/user/UserSlice'

export default configureStore({
  reducer: {
    posts: postsSlice,
    user: UserSlice
  },
})