import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.jsx'
import FormInput from '../form-input/form-input.component'
import Button, {BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ButtonContainer, SignInContainer } from './sign-in-form.styles.jsx';

const defaultFormFields = {
    email:'',
    password:''
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch(error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('incorrect password for email');
                    break;
                case 'auth/user-not-found':
                    alert('no users associated with this email');
                    break;
                    default: console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({...formFields, [name]: value})
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        
    }
    return(
        <SignInContainer>
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
        <FormInput label='Email' inputOptions={{
            type:'email',
            onChange:handleChange,
            name:'email',
            value:email
        }} />
        <FormInput label='Password' inputOptions={{
            type:'password',
            onChange:handleChange,
            name:'password',
            value:password
        }} />

        <ButtonContainer>
            <Button children='SIGN IN' type='submit' />
            <Button children='GOOGLE SIGN IN' type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} />
        </ButtonContainer>
        </form>
        </SignInContainer>
    )
}

export default SignInForm