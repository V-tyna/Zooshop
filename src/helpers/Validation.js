export const validateEmail = (email) => {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

export const validatePassword = (password) => {
    return password.length >= 6;
 }

export const validateRepeatedPassword = (password, repeatedPassword) => {
     return password === repeatedPassword; 
}