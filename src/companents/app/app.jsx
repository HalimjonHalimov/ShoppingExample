import { Routes, Route } from 'react-router-dom';
import AuthService from '../../service/auth';
import { useDispatch, useSelector } from 'react-redux'
import { Login, Register, Navbar, Main } from './../';
import { signUserSuccess } from '../../reducers/auth';
import { useEffect } from 'react';
import { getItem } from '../../helpers/persistance-local';

const App = () => {
    const dispatch = useDispatch()
    // const { loggidIn } = useSelector(state => state.auth)

    const getUser = async() => {
        try {
            const response = await AuthService.userGet()
            dispatch(signUserSuccess(response.user))
        } catch (error) {
            console.log('error');
        }
    }

    useEffect(() => {
        const token = getItem('token')
        if(token) {
            getUser()
        }
    }, [])
    

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/'  element={<Main />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;
