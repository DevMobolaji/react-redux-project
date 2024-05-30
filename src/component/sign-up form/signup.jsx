import { useState } from "react"
import { createAuthUserWithEmailAndPassword,createUserDocFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import "./sign-up-form.style.scss"
import Button from "../button/button";


const formField = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUp = () => {
    const [ formFields, setFormFields ] = useState(formField);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name]: value})
    }

    const resetFormField = () => {
        setFormFields(formField)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("password not match")
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocFromAuth(user, { displayName })
            resetFormField()
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user Email in use Already')
            }
        }
    } 

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
        
                <FormInput label="Display Name" type="text" value={displayName} name="displayName" required onChange={handleChange}/>

                <FormInput label="Email" type="email" name="email" value={email} required onChange={handleChange}/>

                <FormInput label="Password" type="password" value={password} name="password" required onChange={handleChange}/>

                <FormInput label="onfirm Password" type="password" required value={confirmPassword } name="confirmPassword" onChange={handleChange}/>

                <Button buttonType="inverted" type='submit'>Sign up</Button>

            </form>

        </div> 
    )
}

export default SignUp