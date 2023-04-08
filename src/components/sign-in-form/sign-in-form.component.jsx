import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'

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
            const response = await signInAuthUserWithEmailAndPassword(email, password);
            console.log(response)
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
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }
    return(
        <div className='sign-in-container'>
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

        <div className='buttons-container'>
            <Button children='SIGN IN' type='submit' />
            <Button children='GOOGLE SIGN IN' type='button' buttonType='google' onClick={signInWithGoogle} />
        </div>
        </form>
        </div>
    )
}

export default SignInForm