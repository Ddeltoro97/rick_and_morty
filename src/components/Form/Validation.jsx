
export default function Validation(props){

    const {email, password} = props

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {}

    if(!regexEmail.test(email)){
        errors.email = 'Please provide a valid email address'
    }

    if(password.length < 6 || password.length > 10 || !/\d/.test(password)){
        errors.password = 'Passwords must be between 6-10 characters and must have at least one number'
    }

    return errors;

}