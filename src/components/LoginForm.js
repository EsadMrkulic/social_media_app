import React, { useState } from 'react';
import '../css/LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

    const navigate = useNavigate();

    const [popupStyle, showPopup] = useState('hide');

    const popup = () => {
        showPopup('login-popup');
        setTimeout(() => showPopup('hide'), 3000);
        navigate('/home')
    }

    return (
        <div className='page'>
            <div className='cover'>
                <h1>Login</h1>
                <input type='text' placeholder='username'/>
                <input type='password' placeholder='password'/>

                <div className='login-btn' onClick={popup}>Login</div>
                <p className='text'>Or login using</p>
                <div className='alt-login'>
                    <div className='google'></div>
                </div>
                
                <div className={popupStyle}>
                    <h3>Successful Login!</h3>
                </div>
                    

            </div>
        </div>
    )
}

export default LoginForm;