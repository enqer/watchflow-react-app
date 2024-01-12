import styles from "./navbar.module.css";
import {Link, useLocation} from "react-router-dom";
import React, {useState} from "react";

const MenuItem = (props) => {
    const location = useLocation()
    const [isHover, setIsHover] = useState(false)
    const handleHover = () => setIsHover(!isHover)
    return(
        <Link
            to={props.path}
            className=
                {location.pathname.includes(props.path) ? (
                    [styles.text, styles.clicked].join(' ')
                ) : (
                    styles.text
                )}
            // onMouseEnter={() => props.handleMouseEnter(props.value)}
            // onMouseLeave={props.handleMouseLeave}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            // onClick={() => props.handleSelectedMenu(props.value)}
        >

                    <span className={styles.icon}>
                        {props.icon}
                    </span>
            <p className={((isHover) ? styles.underlineAfter : styles.underline)}>
                {props.title}
            </p>
        </Link>
    )
}
export default MenuItem
