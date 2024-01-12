import styles from './formPage.module.css'
import {IoMdClose} from "react-icons/io";
import {useState} from "react";
import SignIn from "./signIn";
import './formPage.module.css'
import SignUp from "./signUp";
import Logo from "../common/logo"


const FormPage = (props) => {
    const [isLoginForm, setIsLoginForm] = useState(true)
    const handleSwitchForm = () => setIsLoginForm(!isLoginForm)

    return(
        <div className={styles.signInContainer} >
            <div className={styles.signInPopup}>
                <div className={styles.signInBar}>
                    <Logo />
                    <IoMdClose
                        className={styles.close}
                        onClick={() => props.handleCloseForm()}
                    />
                </div>
                <div>
                    {isLoginForm ? (
                        <SignIn handleSwitchForm={handleSwitchForm} />
                    ) : (
                        <SignUp  handleSwitchForm={handleSwitchForm} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default FormPage
