import "./button.styles.scss"


const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted"
} 


const Button = ({ children, buttonType, ...otherProp }) => {
    return (
        <button className={`button-container 
        ${BUTTON_TYPES_CLASSES[buttonType]}`} 
        {...otherProp}>
            {children}
        </button>
    )
}

export default Button