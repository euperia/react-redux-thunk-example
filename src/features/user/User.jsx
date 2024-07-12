
import { useSelector } from 'react-redux'

const User = () => {

    const user = useSelector((state) => state.user.user)

    return (
        (
            user.authenticated ? 
            <div className="panel">
                <p><strong>Signed in as: { user.name } ({user.email})</strong></p>
            </div>
        :
        <></>
        )
  )
}

export default User