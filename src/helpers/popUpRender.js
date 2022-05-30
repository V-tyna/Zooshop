export const popUpRender = (phrase) => {
	const root = document.getElementById('root');
	const popUp = document.createElement('div');
	popUp.className = 'pop-up';
	popUp.innerHTML = `
	<p>${phrase}</p>
	`;
	root.appendChild(popUp);
	setTimeout(() => {
		popUp.remove();
	}, 2000);
};