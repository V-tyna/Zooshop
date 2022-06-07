const phrases = {
	'Favorites': 'Item was added to <strong>Favorites</strong>!',
	'Basket': 'Item was added to the <strong>Basket</strong>!',
	'SignOut': '<strong>You\'ve successfully sign out!</strong>',
	'SignIn': '<strong>You\'ve successfully sign in!</strong>',
	'Registered': '<strong>You\'ve successfully registered!</strong>',
};

export const popUpRender = (key) => {
	const phrase = phrases[key];

	const root = document.getElementById('root');
	const popUp = document.createElement('div');
	popUp.className = 'pop-up';
	popUp.innerHTML = `<p>${phrase}</p>`;
	root.appendChild(popUp);
	setTimeout(() => {
		popUp.remove();
	}, 2000);
};
