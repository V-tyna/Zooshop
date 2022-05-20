import React, { useState } from 'react';
import './SignUp.css';
import { validateEmail, validatePassword, validateRepeatedPassword } from '../../../helpers/Validation';

const SignUp = () => {

    let [email, setEmail] = useState(null);
    let [password, setPassword] = useState(null);
    let [repeatPassword, setRepeatPassword] = useState(null);

    const handlerInputEmail = (e) => {
        setEmail(email = e.target.value)
        validateEmail(email) ? e.target.className = 'enabled' : e.target.className = 'disabled'; 
    }

    const handlerInputPassword = (e) => {
        setPassword(password = e.target.value)
        validatePassword(password) ? e.target.className = 'enabled' : e.target.className = 'disabled'; 
    }

    const handlerInputRepeatPassword = (e) => {
        setRepeatPassword(repeatPassword = e.target.value)
        validateRepeatedPassword(password, repeatPassword) ? e.target.className = 'enabled' : e.target.className = 'disabled'; 
    }

    const handlerRegister = () => {
        console.log('Registered', email, password);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
    } 

    return ( 
    <div>
        <form className='register-form' onSubmit={handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input name='email' type='text' placeholder='Email' onChange={handlerInputEmail.bind(this)} required />
            <label htmlFor='password'>Password:</label>
            <input name='password' placeholder='Password' onChange={handlerInputPassword.bind(this)} required />
            <label htmlFor='repeatPassword'>Repeat password:</label>
            <input name='repeatPassword' placeholder='Repeat Password' onChange={handlerInputRepeatPassword.bind(this)} required />
            <button type='submit' onClick={handlerRegister}>Register</button>
        </form>
    </div> 
    );
}
 
export default SignUp;