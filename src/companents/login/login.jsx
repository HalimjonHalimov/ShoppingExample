import { useState, useEffect } from 'react';
import { FormInput, Valid } from './../'
import { useSelector, useDispatch } from 'react-redux';
import { signUserFailure, signUserStart, signUserSuccess } from '../../reducers/auth';
import AuthService from '../../service/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isLoading, loggidIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const loginHandle = async(e) => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = { email, password }
        try {
            const response = await AuthService.userLogin(user)
            dispatch(signUserSuccess(response.user))
            navigate('/')
            
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors))
        }
        setEmail('')
        setPassword('')
    }

    useEffect(() => {
        if(loggidIn) {
            navigate('/')
        }
    }, [loggidIn]);

    return (
        <div className='wrapper'>
            <form action="#" onSubmit={loginHandle}>
                <div className="wrapper-header">
                    <i className="fa-solid fa-bag-shopping"></i>Shopping Example
                </div>
                <div className="wrapper-header">
                    Please log in
                </div>
                <Valid />
                <FormInput state={email} setState={setEmail} label={'email'} placeholder={'Email'} id={'email'} name={'email'} />
                <FormInput state={password} setState={setPassword} label={'password'} placeholder={'Password'} id={'password'} name={'password'} />
                <div className="wrapper-items">
                    <input 
                        type="submit" 
                        className='submit-button' 
                        value={isLoading ? 'Loading...' : 'Log In'}

                    />
                </div>
            </form>
        </div>
    );
}

export default Login;
