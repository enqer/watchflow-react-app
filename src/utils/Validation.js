

export const checkPasswordStrength = (inputPassword) => {
    const hasUpperCase = /[A-Z]/.test(inputPassword);
    const hasLowerCase = /[a-z]/.test(inputPassword);
    const hasDigit = /\d/.test(inputPassword);
    const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(inputPassword);
    const isLengthValid = inputPassword.length >= 8;

    return hasUpperCase && hasLowerCase && hasDigit && hasSpecialChar && isLengthValid;
};


export const checkEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};


