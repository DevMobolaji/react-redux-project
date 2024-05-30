import { useState } from "react"
import { signInWithGooglePopup, signInUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import "./sign-in-form.style.scss"
import Button from "../button/button";



const formField = {
    email: '',
    password: '',
}
const SignIn = () => {
    const [ formFields, setFormFields ] = useState(formField);
    const { email, password } = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormField = () => {
        setFormFields(formField)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await signInUserWithEmailAndPassword(email, password)
            resetFormField()
        } catch (error) {
            switch (error.code) {
                case "auth/wroong-password":
                    alert('incorrect password for email')
                    break;
                case "auth/user-not-found":
                    alert('no user associated with this email')
                    break;
                case "auth/invalid-credential":
                    alert('Invalid credentials')
                    break;
            
                default:
                    console.log(error)
            }

        }

    } 

    
    const logGooglUser = async () => {
        await signInWithGooglePopup()
    }

    return (
        <div className="sign-up-container">
            <h2>Alreay have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" name="email" value={email} required onChange={handleChange}/>

                <FormInput label="Password" type="password" value={password} name="password" required onChange={handleChange}/>
            <div className="buttons-container">
                <Button buttonType="inverted" type='submit'>Sign in</Button>
                <Button onClick={logGooglUser} buttonType="google" type='button'>Google sign in</Button>
            </div> 
            </form>
        </div> 
    )
}

export default SignIn