import {Link, useNavigate} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { removeItem } from '../../helpers/persistance-local'
import { signUserOut } from '../../reducers/auth'

const Navbar = () => {
    const { loggidIn, user } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    

    const logOutHandle = () => {
        dispatch(signUserOut())
        removeItem('token')
        navigate('/login')
    }

    return (
        <div className="navbar">
            <div className="container navbar-menu">
                <div className="navbar-menu-logo">
                    <Link to={'/'}>
                        <i className="fa-solid fa-bag-shopping"></i>
                        Shopping Example
                    </Link>
                </div>
                {loggidIn ? (
                    <div className='user-login'>
                       <div className="user-info"> <i className="fa-solid fa-user-tie"></i> {user.username}</div>
                        <button className='logout' onClick={logOutHandle}> Log out </button>
                    </div>
                ) : (
                    <>
                    <ul className="menu-bar">
                        <li>
                            <Link to={'/register'}>Sign in </Link>
                        </li>
                        <li>
                            <Link to={'/login'}><i className="fa-solid fa-user-tie"></i>Log in</Link>
                        </li>
                    </ul>
                    </>
                )}

            </div>
        </div>
    );
}

export default Navbar;
