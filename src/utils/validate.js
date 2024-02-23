export const checkValidData = (email, password, name, config) => {
    
    const emailValidate  = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordValidate  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const nameValidate  = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    
    if(!name && !nameValidate) return config.nameValidMsg;
    if(!emailValidate) return config.emailvalidMsg;
    if(!passwordValidate) return config.passwordValidMsg;

    return null;
}