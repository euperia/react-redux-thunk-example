import { useSelector, useDispatch } from 'react-redux'
import { removePostAsync } from './PostsSlice'

const Posts = () => {

    const posts = useSelector((state) => state.posts.items)
    const dispatch = useDispatch()

    const removePostHandler = (post) => {
        if (window.confirm('Are you sure you want to delete this post?')) {
          dispatch(removePostAsync(post.id))
        }
      }

    return (
        <>
            <h3>Posts</h3>
            {posts.length === 0 ? <p><strong>No Posts available</strong></p>
                :
                <table>
                    <colgroup>
                        <col width="90%" />
                        <col />
                    </colgroup>
                    <tbody>

                    {posts.map((post) => (
                        <tr key={post.id}>
                            <td>
                                {post.title}
                            </td>
                            <td align="center">
                                <a href="#" className="btn-delete"
                                onClick={() => removePostHandler(post)}
                                >X</a>
                            </td>
                        </tr>
                    ))}                
                    </tbody>
                    </table>
            }
        </>
    )
}


export default Posts