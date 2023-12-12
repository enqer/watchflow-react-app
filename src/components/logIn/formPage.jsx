import Logo from "../main/logo";
import {IoMdClose} from "react-icons/io";
import {useState} from "react";
import SignIn from "./signIn";
import './formPage.css'
import SignUp from "./signUp";


const FormPage = (props) => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    const handleSwitchForm = () => {
        setIsLoginForm(!isLoginForm)
    }

    return(
        <div className="signInContainer" >
            <div className="signInPopup">
                <div className="signInBar">
                    <Logo />
                    <IoMdClose className="close" onClick={() => props.handleCloseForm()} />
                </div>
                <div>
                    {isLoginForm ? <SignIn handleSwitchForm={handleSwitchForm} /> : <SignUp  handleSwitchForm={handleSwitchForm}/>}
                </div>
        </div>
        </div>
    )
}

export default FormPage
