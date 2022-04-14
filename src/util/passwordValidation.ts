const pattern = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/);

function isPassword(password: string) {
    return pattern.test(password);    

}

export default isPassword;