
import {useState} from "react";
import styles from  './formLogReg.module.css'
import axios from "axios";
import {useNavigate} from "react-router";

const SignIn = (props) => {
    let navigate = useNavigate()

    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')
    const [alert, setAlert]=useState('')

    // Design clicking
    const [isClickedLogin, setIsClickedLogin] = useState(false)
    const [isClickedPassword, setIsClickedPassword] = useState(false)
    const changePositionLogin = () => {document.getElementsByName("login")[0].value === "" ? setIsClickedLogin(!isClickedLogin) : setIsClickedLogin(true)}
    const changePositionPassword = () => {document.getElementsByName("pass")[0].value === "" ? setIsClickedPassword(!isClickedPassword) : setIsClickedPassword(true)}


    const handleChangeRoute = () => {
        navigate('/home')
        window.location.reload()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validate()) return;

        axios
            .post('http://localhost:8080/api/auth/authenticate',{
                login: login,
                password: password
            })
            .then((response) => {
                localStorage.setItem('token', response.data.token)
                console.log(response.data.token)
                handleChangeRoute()
            })
            .catch((err) => {
                setAlert('Podane dane są złe')
                console.log(err)
            })
    }

    const validate = () => {
        if (login.trim() === ''){
            setAlert("Login nie może być pusty")
            return false;
        }
        if (password.trim() === ''){
            setAlert("Hasło nie może być puste")
            return false
        }
        return true
    }

    return (
            <div className={styles.form}>
                <p className={styles.signInTitle}>Zaloguj się</p>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <div className={styles.wrapper}>
                        <input onFocus={() => changePositionLogin()} onBlur={() => changePositionLogin()}
                               onChange={(event) => setLogin(event.target.value)}
                               className={styles.input} type="text" name="login" required/>
                        <div
                            className={isClickedLogin ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText, styles.changePositionDown].join(' ')}>Login
                        </div>
                    </div>
                    <div className={styles.wrapper}>
                        <input onFocus={() => changePositionPassword()} onBlur={() => changePositionPassword()}
                               onChange={(event) => setPassword(event.target.value)}
                               className={styles.input} type="password" name="pass" required/>
                        <div
                            className={isClickedPassword ? [styles.inputText, styles.changePositionUp].join(' ') : [styles.inputText, styles.changePositionDown].join(' ')}>Hasło
                        </div>
                    </div>
                    <div className={styles.forgotPass}>
                        <p>Nie pamiętam hasła</p>
                    </div>
                    <div className={styles.switchForm}>
                        <p onClick={() => props.handleSwitchForm()}>Utwórz nowe konto</p>
                    </div>
                    <div className={styles.submitWrapper}>
                        <input className={styles.submit} type="submit" value="Zaloguj"/>
                    </div>
                    <div className={styles.alert}>
                        <p >{alert}</p>
                    </div>
                </form>
            </div>
    )
}

export default SignIn
