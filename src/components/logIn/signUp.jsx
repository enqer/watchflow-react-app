import {useState} from "react";
import './signInUp.css'

const SignUp = (props) => {
    const [isClickedEmail, setIsClickedEmail] = useState(false)
    const [isClickedPassword, setIsClickedPassword] = useState(false)
    const [isClickedLogin, setIsClickedLogin] = useState(false)
    const changePositionEmail = () => {document.getElementsByName("email")[0].value === "" ? setIsClickedEmail(!isClickedEmail) : setIsClickedEmail(true)}
    const changePositionPassword = () => {document.getElementsByName("pass")[0].value === "" ? setIsClickedPassword(!isClickedPassword) : setIsClickedPassword(true)}
    const changePositionLogin = () => {document.getElementsByName("login")[0].value === "" ? setIsClickedLogin(!isClickedLogin) : setIsClickedLogin(true)}


    return (
        <div className="form">
            <p className="signInTitle">Zarejestruj się</p>
            <form >
                <div className="signInInputWrapper">
                    <input onFocus={() => changePositionLogin()} onBlur={() =>changePositionLogin()}
                           className="signInInput" type="text" name="login"  required />
                    <div className={isClickedLogin ? "inputText changePositionUp" : "inputText changePositionDown"}>Login</div>
                </div>
                <div className="signInInputWrapper">
                    <input onFocus={() => changePositionEmail()} onBlur={() =>changePositionEmail()}
                           className="signInInput" type="text" name="email"  required />
                    <div className={isClickedEmail ? "inputText changePositionUp" : "inputText changePositionDown"}>E-mail</div>
                </div>
                <div className="signInInputWrapper">
                    <input onFocus={() => changePositionPassword()} onBlur={() => changePositionPassword()}
                           className="signInInput" type="password" name="pass"  required />
                    <div className={isClickedPassword ? "inputText changePositionUp" : "inputText changePositionDown"}>Hasło</div>
                </div>
                <div className="signInNewAccount" onClick={() => props.handleSwitchForm()}>
                    <p>Przejdź do logowania</p>
                </div>
                <div className="signInSubmitWrapper">
                    <input className="signInSubmit" type="submit"  value="Zarejestruj" />
                </div>
            </form>
        </div>
    )
}

export default SignUp
