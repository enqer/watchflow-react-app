import './signInUp.css'
import {useState} from "react";

const SignIn = (props) => {

    const [isClickedEmail, setIsClickedEmail] = useState(false)
    const [isClickedPassword, setIsClickedPassword] = useState(false)

    const changePositionEmail = () => {document.getElementsByName("email")[0].value === "" ? setIsClickedEmail(!isClickedEmail) : setIsClickedEmail(true)}
    const changePositionPassword = () => {document.getElementsByName("pass")[0].value === "" ? setIsClickedPassword(!isClickedPassword) : setIsClickedPassword(true)}

    return (
            <div className="form">
                <p className="signInTitle">Zaloguj się</p>
                <form >
                    <div className="signInInputWrapper">
                        <input onFocus={() => changePositionEmail()} onBlur={() =>changePositionEmail()}
                               className="signInInput" type="text" name="email"  required />
                        <div className={isClickedEmail ? "inputText changePositionUp" : "inputText changePositionDown"}>Nazwa użytkownika lub e-mail</div>
                    </div>
                    <div className="signInInputWrapper">
                        <input onFocus={() => changePositionPassword()} onBlur={() => changePositionPassword()}
                               className="signInInput" type="password" name="pass"  required />
                        <div className={isClickedPassword ? "inputText changePositionUp" : "inputText changePositionDown"}>Hasło</div>
                    </div>
                    <div className="signInForgotPass">
                        <p>Nie pamiętam hasła</p>
                    </div>
                    <div className="signInNewAccount" onClick={() => props.handleSwitchForm()}>
                        <p>Utwórz nowe konto</p>
                    </div>
                    <div className="signInSubmitWrapper">
                        <input className="signInSubmit" type="submit"  value="Zaloguj" />
                    </div>
                </form>
        </div>
    )
}
// TODO onclick nie pamiętam hasła
// event.preventDefault()
export default SignIn
