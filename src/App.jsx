import { useSelector } from 'react-redux'
import User from './features/user/User'
import Posts from './features/posts/Posts'
import PostForm from './features/posts/PostForm'
import './App.css'



function App() {

  const user = useSelector((state) => state.user.user)
  
  return (
    <>
      <User />
      <h1>React + Redux + Thunk</h1>
      <p>Or, how to use a REST api with a Redux store.</p>

      { user.authenticated ? 
      <>
      <PostForm />
      <Posts />
      </>
      :
      <p>Not signed in</p>
      }
      
    </>
  )
}

export default App
