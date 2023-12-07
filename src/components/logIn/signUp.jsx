import {useState} from "react";
import styles from  './formLogReg.module.css'

import * as valid from '../../utils/Validation'

const SignUp = (props) => {

    const [login, setLogin]=useState('')
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [alert, setAlert] = useState('')

    // Design clicking
    const [isClickedEmail, setIsClickedEmail] = useState(false)
    const [isClickedPassword, setIsClickedPassword] = useState(false)
    const [isClickedLogin, setIsClickedLogin] = useState(false)
    const [isClickedName, setIsClickedName] = useState(false)
    const changePositionEmail = () => {document.getElementsByName("email")[0].value === "" ? setIsClickedEmail(!isClickedEmail) : setIsClickedEmail(true)}
    const changePositionPassword = () => {document.getElementsByName("pass")[0].value === "" ? setIsClickedPassword(!isClickedPassword) : setIsClickedPassword(true)}
    const changePositionLogin = () => {document.getElementsByName("login")[0].value === "" ? setIsClickedLogin(!isClickedLogin) : setIsClickedLogin(true)}
    const changePositionName = () => {document.getElementsByName("name")[0].value === "" ? setIsClickedName(!isClickedName) : setIsClickedName(true)}


    const handleSubmit = (event) => {
        event.preventDefault()

        if (isFormValid()){
            console.log("register")
        }

    }

    const isFormValid = () => {
        if (!valid.checkEmail(email)){
            setAlert("Nieprawidłowy email")
            return false;
        }
        if (!valid.checkPasswordStrength(password)){
            setAlert("Spróbuj z silniejszym hasłem")
            return false;
        }
        return true;
    }

    return (
        <div className={styles.form}>
            <p className={styles.signInTitle}>Zarejestruj się</p>
            <form onSubmit={handleSubmit}>
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionLogin()} onBlur={() =>changePositionLogin()}
                           onChange={(event) => setLogin(event.target.value)}
                           className={styles.input} type="text" name="login"  required />
                    <div className={isClickedLogin ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Login</div>
                </div>
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionName()} onBlur={() =>changePositionName()}
                           onChange={(event) => setName(event.target.value)}
                           className={styles.input} type="text" name="name"  required />
                    <div className={isClickedName ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Nazwa</div>
                </div>
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionEmail()} onBlur={() =>changePositionEmail()}
                           onChange={(event) => setEmail(event.target.value)}
                           className={styles.input} type="email" name="email"  required />
                    <div className={isClickedEmail ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>E-mail</div>
                </div>
                <div className={styles.wrapper}>
                    <input onFocus={() => changePositionPassword()} onBlur={() => changePositionPassword()}
                           onChange={(event) => setPassword(event.target.value)}
                           className={styles.input} type="password" name="pass"  required />
                    <div className={isClickedPassword ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Hasło</div>
                </div>
                <div className={styles.switchForm} >
                    <p onClick={() => props.handleSwitchForm()}>Przejdź do logowania</p>
                </div>
                <div className={styles.submitWrapper}>
                    <input className={styles.submit} type="submit"  value="Zarejestruj" />

                </div>
                <div className={styles.alert}>
                    <p>{alert}</p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
