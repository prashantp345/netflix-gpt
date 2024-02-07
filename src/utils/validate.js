export const checkValidData = (email, password, name) => {
    
    const emailValidate  = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidate  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameValidate  = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

    if(!name && !nameValidate) return 'Name is not valid';
    if(!emailValidate) return 'Email ID is not valid';
    if(!passwordValidate) return 'Password is not valid';

    return null;
}