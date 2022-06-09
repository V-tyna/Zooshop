import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './SignIn.css';
import { auth } from '../../../index';
import { store } from '../../../index';
import { renderPopUpAction } from '../../../redux/actions';
import { validateEmail } from '../../../helpers/Validation';
import { validatePassword } from '../../../helpers/Validation';


const SignIn = () => {
	let [email, setEmail] = useState(null);
	let [password, setPassword] = useState(null);

	let [emailErr, setEmailErr] = useState(false);
	let [passwordErr, setPasswordErr] = useState(false);

	const navigate = useNavigate();

	const clearingErrNotification = () => {
		setEmailErr(false);
		setPasswordErr(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleEmail = (e) => {
		clearingErrNotification();
		setEmail((email = e.target.value));
		e.target.className = validateEmail(e.target.value)
			? 'enabled'
			: 'disabled';
	};

	const handlePassword = (e) => {
		clearingErrNotification();
		setPassword((password = e.target.value));
		e.target.className = validatePassword(e.target.value)
			? 'enabled'
			: 'disabled';
	};

	const handleSignIn = async () => {
		try {
			await signInWithEmailAndPassword(auth, email, password);

			localStorage.setItem('Token', auth.currentUser.accessToken);
			localStorage.setItem('Email', email);
			store.dispatch(renderPopUpAction('SignIn'));
			navigate('/');
		} catch (error) {
			const errorCode = error.code;
			if (errorCode === 'auth/wrong-password') {
				setPasswordErr((passwordErr = true));
			}
			if (errorCode === 'auth/user-not-found') {
				setEmailErr("User with such email wasn't registered");
			}
		}
	};

	return (
		<div>
			<h3>Sign in:</h3>
			<form className='register-form' onSubmit={handleSubmit}>
				<div className='email-label-container'>
					<label htmlFor='email'>Email:</label>{' '}
					{emailErr ? <p>{emailErr}</p> : null}
				</div>
				<input
					name='email'
					type='text'
					placeholder='Email'
					onChange={handleEmail}
					required
				/>
				<div className='password-label-container'>
					<label htmlFor='password'>Password:</label>{' '}
					{passwordErr ? <p>Wrong password!</p> : null}
				</div>
				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={handlePassword}
					required
				/>
				<button type='submit' onClick={handleSignIn}>
					Sign in
				</button>
			</form>
		</div>
	);
};

export default SignIn;
