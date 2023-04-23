import React, { useState } from 'react';
import '../css/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {

    const [username, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username);
        setUserName('');
        navigate('/home')
    };

    const navigate = useNavigate();


    return (
        <div className='page'>
            <div className='cover'>
                <h1>Login</h1>
                <input type='text' placeholder='username' value={username} onChange={(e) => setUserName(e.target.value)}/>
                <input type='password' placeholder='password'/>

                <button type='submit' className='login-btn' onClick={handleSubmit}>Login</button>
                <p className='text'>Or login using</p>
                <div className='alt-login'>
                    <div className='google'></div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;