import {FaUserCircle} from "react-icons/fa";
import React from "react";

const Login = (props) => {
    // var to check if logged
    return (
        // checking if logged if not display defalut else display nickname with chosen photo
        // p onClick to navigate to log in or register
        <>
            <p style={props.style}>Zaloguj się</p>
            <span style={{fontSize: '32px', margin: 'auto', padding: '10px'}}><FaUserCircle /></span>
        </>
    )
}
export default Login
