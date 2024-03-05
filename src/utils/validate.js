

export const CheckValidateData = (email,password,name) => {

    const isValidemail = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)

    const isValidpassowrd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)

    const isValidname = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name)

    if(!isValidemail) return "Email Id is not Valid";
    if(!isValidpassowrd) return "Password is not valid";
    // if(!isValidname) return "Name does not contains numbers and special Characters"

    
    return null;

}