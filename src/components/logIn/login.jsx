import {FaUserCircle} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import React, {useState} from "react";
import { isExpired, decodeToken  } from "react-jwt";
import styles from './login.module.css'
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";
import axios from "axios";

const Login = (props) => {
    let navigate = useNavigate()
    const user = decodeToken(localStorage.getItem('token'))
    const isLogged = !isExpired(localStorage.getItem('token'))

    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    const handleChangeRoute = () => {
        navigate('/home')
        window.location.reload()
    }

    const handleLogout = () => {
        localStorage.clear();
        handleChangeRoute()
    }


    return (
        <div className={isHover && isLogged ? [styles.container,styles.containerHover].join(' ') : styles.container}
            onMouseEnter={handleHover}
             onMouseLeave={handleHover}
        >
            <div className={styles.userDetails}>
                <p>{isLogged ? user.login: "Zaloguj się"}</p>
                <span><FaUserCircle/></span>
            </div>

            {isLogged && isHover ?
                <div>
                    <div className={styles.userDetails}>
                        <p>Ustawienia</p>
                        <span><IoMdSettings /></span>
                    </div>
                    <div className={styles.userDetails}
                        onClick={handleLogout}
                    >
                            <p>Wyloguj</p>
                            <span><FiLogOut/></span>
                    </div>
                </div>
                : null}

        </div>
    )
}
export default Login
