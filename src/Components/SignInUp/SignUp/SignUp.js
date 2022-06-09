import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../index';
import { store } from '../../../index';
import { renderPopUpAction } from '../../../redux/actions';
import {
	validateEmail,
	validatePassword,
	validateRepeatedPassword,
} from '../../../helpers/Validation';
import './SignUp.css';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [repeatedPassword, setRepeatPassword] = useState('');
	const [disableStatus, setDisableStatus] = useState(true);

	const navigation = useNavigate();

	const handleEmail = (e) => {
		setEmail(e.target.value);
		e.target.className = validateEmail(e.target.value)
			? 'enabled'
			: 'disabled';
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		e.target.className = validatePassword(e.target.value)
			? 'enabled'
			: 'disabled';
	};

	const handleRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
		e.target.className = validateRepeatedPassword(password, e.target.value)
			? 'enabled'
			: 'disabled';
		validateEmail(email) &&
		validateRepeatedPassword(password, e.target.value)
			? setDisableStatus(false)
			: setDisableStatus(true);
	};

	const handleRegister = async (e) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);

			localStorage.setItem('Token', userCredential.user.accessToken);
			localStorage.setItem('Email', email);
			
			store.dispatch(renderPopUpAction('Registered'));
				
			await signInWithEmailAndPassword(auth, email, password);
			navigation('/');
		} catch(error) {
			throw new Error(error.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
	};

	return (
		<div>
			<form className='register-form' onSubmit={handleSubmit}>
				<label htmlFor='email'>Email:</label>
				<input
					value={email}
					name='email'
					type='text'
					placeholder='Email'
					onChange={handleEmail}
					required
				/>
				<label htmlFor='password'>Password:</label>
				<input
					value={password}
					name='password'
					type='password'
					placeholder='Password'
					onChange={handlePassword}
					required
				/>
				<label htmlFor='repeatPassword'>Repeat password:</label>
				<input
					value={repeatedPassword}
					name='repeatPassword'
					type='password'
					placeholder='Repeat Password'
					onChange={handleRepeatPassword}
					required
				/>
				<button
					id='register-btn'
					type='submit'
					onClick={handleRegister}
					disabled={disableStatus}
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default SignUp;
