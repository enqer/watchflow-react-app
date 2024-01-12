import React from 'react';
import Logo from "./logo";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaInstagram} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import styles from './footer.module.css'
import {Link} from "react-router-dom";
const Footer = () => {


    return (
        <div className={styles.container}>
            <div></div>
            <div className={styles.copyright}>
                <Logo/>
                <p>
                    © WatchFlow. Wszelkie prawa zastrzeżone.
                </p>
            </div>
            <div className={styles.contactWrapper}>
                <div className={styles.contact}>
                    <Link
                        to={"https://github.com/enqer"}
                        target={"_blank"}
                        rel="noopener noreferrer"
                        className={styles.links}
                    >
                        <FaGithub  />
                        <p>enqer</p>
                    </Link>
                </div>
            </div>
        </div>
    );

}
export default Footer
