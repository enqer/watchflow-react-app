import {FaUserCircle} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import React, {useState} from "react";
import styles from './login.module.css'
import {useNavigate} from "react-router";
import {isLogged, tokenKey, user} from "../../config/authConfig";
import {toast} from "react-hot-toast";
import Alert from "../common/alert";

const Login = () => {
    let navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)

    const handleHover = () => setIsHover(!isHover)
    const handleChangeRoute = () => {
        navigate('/home')
        window.location.reload()
    }
    const handleLogout = () => {
        localStorage.removeItem(tokenKey);
        handleChangeRoute()
    }

    const handleSettings = () => toast('Innych nie będzie')

    return (
        <div
            className=
                {isHover
                    && isLogged ? (
                        [styles.container,styles.containerHover].join(' ')
                    ) : (
                        styles.container
                )}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <Alert />
            <div className={styles.userDetails}>
                <p>{isLogged ? (
                    user.login
                ) : (
                    "Zaloguj się"
                )}
                </p>
                <span><FaUserCircle/></span>
            </div>

            {isLogged
                && isHover
                && (
                    <div>
                        <div
                            className={styles.userDetails}
                            onClick={handleSettings}
                        >
                            <p>Ustawienia</p>
                            <span><IoMdSettings /></span>
                        </div>
                        <div
                            className={styles.userDetails}
                            onClick={handleLogout}
                        >
                            <p>Wyloguj</p>
                            <span><FiLogOut/></span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
export default Login
