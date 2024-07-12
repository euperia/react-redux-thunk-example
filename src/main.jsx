import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './store.js'
import { Provider } from 'react-redux'
import { loadPosts } from './features/posts/PostsSlice.js'
import { loadUser } from './features/user/UserSlice.js'


store.dispatch(loadPosts())
store.dispatch(loadUser())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
