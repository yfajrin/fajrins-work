import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component'
import './sign-up-form.styles.jsx'
import Button from '../button/button.component';
import { SignUpContainer } from './sign-up-form.styles.jsx';

const defaultFormFields = {
    displayName: '',
    email:'',
    password:'',
    confirmPassword:''
}



const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;
    

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('the password does not match');
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFields();
            if(user){
            await navigate(-1);
        };
        } catch(error) {
            if(error.code === 'auth/email-already-in-use') {
                alert('can not create user, email already in use')
            }
            console.error('user creation encountered an error', error);
        }
         
        
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label='Display Name' 
                inputOptions = {{
                    type:'text',
                    required: true,
                    onChange:handleChange,
                    name:'displayName',
                    value:displayName}} />
                
                <FormInput label='Email' 
                inputOptions = {{
                    type:'email',
                    required: true,
                    onChange:handleChange,
                    name:'email',
                    value:email}} />
                 
                
                <FormInput label='Password' 
                inputOptions = {{
                    type:'password',
                    required: true,
                    onChange:handleChange,
                    name:'password',
                    value:password}} />
                

                <FormInput label='ConfirmPassword' 
                inputOptions = {{
                    type:'password',
                    required: true,
                    onChange:handleChange,
                    name:'confirmPassword',
                    value: confirmPassword}} />
                

                <Button children='Sign Up' type='submit' />
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;