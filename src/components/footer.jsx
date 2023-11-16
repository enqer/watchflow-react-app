import React from 'react';
import Logo from "./logo";
import { FaFacebook, FaGithub, FaGoogle, FaLinkedin, FaInstagram} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    // TODO do poprawy wyśrodkowanie loga
    const styles = {
        container : {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#24242c',
            justifyContent: 'space-between'
            // position: 'fixed',
            // left:0,
            // bottom:0,
            // right:0,
        },
        icons : {
            padding: '10px'
        },
        copyright :{
            flexGrow: '1',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // color: 'black'
        }
    }

    return (
        <div style={styles.container}>


            <div style={styles.copyright}>
                <Logo/>
                <p>© WatchFlow. Wszelkie prawa zastrzeżone.</p>
            </div>
                <div>
                    <FaFacebook style={styles.icons} />
                    <BsTwitterX style={styles.icons} />
                    <FaGoogle style={styles.icons} />
                    <FaInstagram style={styles.icons} />
                    <FaLinkedin style={styles.icons} />
                    <FaGithub style={styles.icons} />
                </div>
        </div>
    );

}
export default Footer
