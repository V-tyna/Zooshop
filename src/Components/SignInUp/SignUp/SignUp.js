import React, { useState } from 'react';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../../../index';
import './SignUp.css';
import {
	validateEmail,
	validatePassword,
	validateRepeatedPassword,
} from '../../../helpers/Validation';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	let [email, setEmail] = useState(null);
	let [password, setPassword] = useState(null);
	let [, setRepeatPassword] = useState(null);
	let [disableStatus, setDisableStatus] = useState(true);

	const navigation = useNavigate();

	const handlerInputEmail = (e) => {
		setEmail(e.target.value);
		e.target.className = validateEmail(e.target.value)
			? 'enabled'
			: 'disabled';
	};

	const handlerInputPassword = (e) => {
		setPassword(e.target.value);
		e.target.className = validatePassword(e.target.value)
			? 'enabled'
			: 'disabled';
	};

	const handlerInputRepeatPassword = (e) => {
		setRepeatPassword(e.target.value);
		e.target.className = validateRepeatedPassword(password, e.target.value)
			? 'enabled'
			: 'disabled';
		validateEmail(email) &&
		validateRepeatedPassword(password, e.target.value)
			? setDisableStatus(false)
			: setDisableStatus(true);
	};

	const handlerRegister = async (e) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password).then(
				(userCredential) => {
					const user = userCredential.user;

					localStorage.setItem('Token', user.accessToken);
					localStorage.setItem('Email', user.email);
				}
			);
		} catch (error) {
			throw new Error(error.message);
		}

		try {
			signInWithEmailAndPassword(auth, email, password).then(() => {
				navigation('/');
			});
		} catch (error) {
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
					name='email'
					type='text'
					placeholder='Email'
					onChange={handlerInputEmail}
					required
				/>
				<label htmlFor='password'>Password:</label>
				<input
					name='password'
					type='password'
					placeholder='Password'
					onChange={handlerInputPassword}
					required
				/>
				<label htmlFor='repeatPassword'>Repeat password:</label>
				<input
					name='repeatPassword'
					type='password'
					placeholder='Repeat Password'
					onChange={handlerInputRepeatPassword}
					required
				/>
				<button
					id='register-btn'
					type='submit'
					onClick={handlerRegister}
					disabled={disableStatus}
				>
					Register
				</button>
			</form>
		</div>
	);
};

export default SignUp;
