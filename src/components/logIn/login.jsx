import {FaUserCircle} from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import React, {useState} from "react";
import { isExpired, decodeToken  } from "react-jwt";
import styles from './login.module.css'

const Login = (props) => {
    const user = decodeToken(localStorage.getItem('token'))
    const isLogged = !isExpired(localStorage.getItem('token'))

    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    return (
        // TODO checking if logged if not display defalut else display nickname with chosen photo
        //  TODO p onClick to navigate to log in or register
        <div className={isHover ? [styles.container,styles.containerHover].join(' ') : styles.container}
            onMouseEnter={handleHover}
             onMouseLeave={handleHover}
        >
            <div className={styles.userDetails}>
                <p>{isLogged ? user.name : "Zaloguj się"}</p>
                <span><FaUserCircle/></span>
            </div>

            {isLogged && isHover ?
                <div>
                    <div className={styles.userDetails}>
                        <p>Ustawienia</p>
                        <span><IoMdSettings /></span>
                    </div>
                    <div className={styles.userDetails}>
                        <p>Wyloguj</p>
                        <span><FiLogOut/></span>
                    </div>
                </div>
                : null}

        </div>
    )
}
export default Login
