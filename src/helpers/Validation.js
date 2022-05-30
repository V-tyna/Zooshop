export const validateEmail = (email) => {
	const expression = /^[^@]+@\w+(\.\w+)+\w$/;
	return expression.test(email);
};

export const validatePassword = (password) => {
	if (password) {
		return password.length >= 6;
	}
};

export const validateRepeatedPassword = (password, repeatedPassword) => {
	if (password && repeatedPassword) {
		return password === repeatedPassword;
	}
};
