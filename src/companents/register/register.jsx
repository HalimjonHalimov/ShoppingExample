import { useState,useEffect } from 'react';
import { FormInput, Valid }  from './../'
import { useSelector, useDispatch } from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../../reducers/auth';
import AuthService from '../../service/auth';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    
    const { isLoading, loggidIn } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const registerHandle = async(e) => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = {username, password, email}
        try {
            const response = await AuthService.userRegister(user)
            dispatch(signUserSuccess(response.user))
            navigate('/')
        } catch (error) {
            dispatch(signUserFailure(error.response.data.errors))
        }
        setUsername('')
        setPassword('')
        setEmail('')
    }

    useEffect(() => {
        if(loggidIn) {
            navigate('/')
        }
    }, []);


    return (
       <div className='wrapper'>
            <form action="#" onSubmit={registerHandle}>
                <div className="wrapper-header">
                    <i className="fa-solid fa-bag-shopping"></i>Shopping Example
                </div>
                <div className="wrapper-header">
                    Please sign in
                </div>
                <Valid />
                <FormInput state={username} setState={setUsername} label={'text'} placeholder={'Username'} id={'username'} name={'username'} />
                <FormInput state={email} setState={setEmail} label={'email'} placeholder={'Email'} id={'email'} name={'email'} />
                <FormInput state={password} setState={setPassword} label={'password'} placeholder={'Password'} id={'password'} name={'password'} />
                <div className="wrapper-items">
                    <input 
                        type="submit"
                        className='submit-button' 
                        value={isLoading ? 'Loading...' : 'Sign In'}/>
                </div>
               
            </form>
       </div>
    );
}

export default Register;
