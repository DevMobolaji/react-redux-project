import SignUp from "../../component/sign-up form/signup"
import SignIn from "../../component/sign-in-form/signin"
import "./authentication.style.scss"
const Authentication = () => {

    return (
        <div className="header">
            <SignUp />
            <SignIn />
        </div>
    )
}

export default Authentication