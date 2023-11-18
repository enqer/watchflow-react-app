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
            justifyContent: 'center',
            padding: '15px'

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
            fontWeight: 'bold'
            // color: 'black'
        },
        contact :{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            right: 0
        }
    }

    return (
        <div style={styles.container}>
            <div style={styles.copyright}>
                <Logo/>
                <p style={{margin: '0'}}>© WatchFlow. Wszelkie prawa zastrzeżone.</p>
            </div>
                <div style={{position: 'relative'}}>
                    <div style={styles.contact}>
                        <FaFacebook style={styles.icons} />
                        <BsTwitterX style={styles.icons} />
                        <FaGoogle style={styles.icons} />
                        <FaInstagram style={styles.icons} />
                        <FaLinkedin style={styles.icons} />
                        <FaGithub style={styles.icons} />
                    </div>
                </div>
        </div>
    );

}
export default Footer
