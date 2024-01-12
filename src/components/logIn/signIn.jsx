
import {useState} from "react";
import styles from  './formLogReg.module.css'
import axios from "axios";
import {useNavigate} from "react-router";
import TextInput from "../common/textInput";
import {BASE_URL} from "../../config/shared";
import {tokenKey} from "../../config/authConfig";

const SignIn = (props) => {
    let navigate = useNavigate()
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')
    const [alert, setAlert]=useState('')


    const handleChangeRoute = () => {
        navigate('/home')
        window.location.reload()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!validate()) return;

        axios
            .post(`${BASE_URL}/api/auth/authenticate`,{
                login: login,
                password: password
            })
            .then((response) => {
                localStorage.setItem(tokenKey, response.data.token)
                handleChangeRoute()
            })
            .catch((err) => {
                setAlert('Podane dane są złe')
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
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <div>
                        <TextInput
                            state={setLogin}
                            name={"login"}
                            type={"text"}
                        />
                        <TextInput
                            state={setPassword}
                            name={"hasło"}
                            type={"password"}
                        />
                    </div>
                    <div className={styles.forgotPass}>
                        <p>Nie pamiętam hasła</p>
                    </div>
                    <div className={styles.switchForm}>
                        <p onClick={() => props.handleSwitchForm()}>
                            Utwórz nowe konto
                        </p>
                    </div>
                    <div className={styles.submitWrapper}>
                        <input
                            className={styles.submit}
                            type="submit"
                            value="Zaloguj"
                        />
                    </div>
                    <div className={styles.alert}>
                        <p>{alert}</p>
                    </div>
                </form>
            </div>
    )
}
export default SignIn
