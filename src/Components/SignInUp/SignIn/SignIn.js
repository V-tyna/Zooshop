import React, { useState } from 'react';
import './SignIn.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../index';
import { validateEmail } from '../../../helpers/Validation';
import { validatePassword } from '../../../helpers/Validation';
import { popUpRender } from '../../../helpers/popUpRender';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
	let [email, setEmail] = useState(null);
	let [password, setPassword] = useState(null);

	let [emailErr, setEmailErr] = useState(false);
	let [passwordErr, setPasswordErr] = useState(false);

	const navigate = useNavigate();

	const clearingErrNotification = () => {
		setEmailErr(false);
		setPasswordErr(false);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handlerInputEmail = (e) => {
		clearingErrNotification();
		setEmail((email = e.target.value));
		validateEmail(email)
			? (e.target.className = 'enabled')
			: (e.target.className = 'disabled');
	};

	const handlerInputPassword = (e) => {
		clearingErrNotification();
		setPassword((password = e.target.value));
		validatePassword(password)
			? (e.target.className = 'enabled')
			: (e.target.className = 'disabled');
	};

	const handlerSignIn = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				localStorage.setItem('Token', auth.currentUser.accessToken);
				popUpRender('<strong>You\'ve successfully sign in!</strong>')
				navigate('/');
			})
			.catch((error) => {
				const errorCode = error.code;
				if (errorCode === 'auth/wrong-password') {
					setPasswordErr((passwordErr = true));
				}
				if (errorCode === 'auth/user-not-found') {
					setEmailErr('User with such email wasn\'t registered');
				}
			});
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
					onChange={handlerInputEmail}
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
					onChange={handlerInputPassword}
					required
				/>
				<button type='submit' onClick={handlerSignIn}>
					Sign in
				</button>
			</form>
		</div>
	);
};

export default SignIn;
