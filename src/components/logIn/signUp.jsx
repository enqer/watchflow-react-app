import {useState} from "react";
import styles from  './formLogReg.module.css'

import * as valid from '../../utils/Validation'
import axios from "axios";
import TextInput from "../common/textInput";
import {tokenKey} from "../../config/authConfig";
import {useNavigate} from "react-router";
import {BASE_URL} from "../../config/appConfig";

const SignUp = (props) => {
    let navigate = useNavigate()
    const [login, setLogin]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [alert, setAlert] = useState('')

    const handleChangeRoute = () => {
        navigate('/home')
        window.location.reload()
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!isFormValid()) return;

        axios({
            method: 'post',
            url: `${BASE_URL}/api/auth/register`,
            data: {
                login: login,
                email: email,
                password: password
            }
        }).then((response) => {
            localStorage.setItem(tokenKey, response.data.token)
            handleChangeRoute()
        }).catch((error) => {
            setAlert("Rejestracja nie powiodła się")
        })
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
            <form
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextInput
                    state={setLogin}
                    name={"login"}
                    type={"text"}
                />
                <TextInput
                    state={setEmail}
                    name={"email"}
                    type={"text"}
                />
                <TextInput
                    state={setPassword}
                    name={"hasło"}
                    type={"password"}
                />
                <div className={styles.switchForm} >
                    <p onClick={() => props.handleSwitchForm()}>
                        Przejdź do logowania
                    </p>
                </div>
                <div className={styles.submitWrapper}>
                    <input
                        className={styles.submit}
                        type="submit"
                        value="Zarejestruj"
                    />
                </div>
                <div className={styles.alert}>
                    <p>{alert}</p>
                </div>
            </form>
        </div>
    )
}

export default SignUp
