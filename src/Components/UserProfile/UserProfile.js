import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
	const email = localStorage.getItem('Email');
	return (
		<div className='user-menu'>
			<h1>User Profile Page</h1>
			<p className='note'>You can see this page because you are logged in!</p>
			<div className='email-section'>
				<p><strong>Your email: </strong></p><p>{email}</p>
			</div>	
		</div>
	);
};

export default UserProfile;
