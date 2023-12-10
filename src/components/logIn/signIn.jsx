
import {useState} from "react";
import styles from  './formLogReg.module.css'

const SignIn = (props) => {

    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')

    // Design clicking
    const [isClickedLogin, setIsClickedLogin] = useState(false)
    const [isClickedPassword, setIsClickedPassword] = useState(false)
    const changePositionLogin = () => {document.getElementsByName("login")[0].value === "" ? setIsClickedLogin(!isClickedLogin) : setIsClickedLogin(true)}
    const changePositionPassword = () => {document.getElementsByName("pass")[0].value === "" ? setIsClickedPassword(!isClickedPassword) : setIsClickedPassword(true)}

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("log")
    }

    return (
            <div className={styles.form}>
                <p className={styles.signInTitle}>Zaloguj się</p>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className={styles.wrapper}>
                        <input onFocus={() => changePositionLogin()} onBlur={() =>changePositionLogin()}
                               onChange={(event) => setLogin(event.target.value)}
                               className={styles.input} type="text" name="login"  required />
                        <div className={isClickedLogin ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Login</div>
                    </div>
                    <div className={styles.wrapper}>
                        <input onFocus={() => changePositionPassword()} onBlur={() => changePositionPassword()}
                               onChange={(event) => setPassword(event.target.value)}
                               className={styles.input} type="password" name="pass"  required />
                        <div className={isClickedPassword ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText,styles.changePositionDown].join(' ')}>Hasło</div>
                    </div>
                    <div className={styles.forgotPass}>
                        <p>Nie pamiętam hasła</p>
                    </div>
                    <div className={styles.switchForm} >
                        <p onClick={() => props.handleSwitchForm()}>Utwórz nowe konto</p>
                    </div>
                    <div className={styles.submitWrapper}>
                        <input className={styles.submit} type="submit"  value="Zaloguj" />
                    </div>
                </form>
        </div>
    )
}
// TODO onclick nie pamiętam hasła
// event.preventDefault()
export default SignIn
