import React from "react";
import {Link} from "react-router-dom";
import logo from '../img/logo.png'
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiTelevisionBold } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { FaRankingStar } from "react-icons/fa6";
import '../fonts/Roboto-Bold.ttf';

const Navbar = () => {

  return (
      <div style={styles.container}>
        <ul style={styles.menu}>
            <li>
                <Link to="/">
                    <img style={styles.logo} src={logo} alt="Zdjęcie przedstawia logo strony watchFlow"/>
                </Link>
            </li>
            <li>
                <Link to="/" style={styles.text}>
                    <span style={styles.icon}><IoMdHome/></span>
                    <p >Strona główna</p>
                </Link>
            </li>
          <li>
              {/*Form??*/}
              {/*  <input type="text" placeholder="Wyszukaj film" />*/}
              <Link style={styles.text}>
                  <span style={styles.icon}><IoSearch /></span>
                  <p>Wyszukaj</p>
              </Link>
          </li>
          <li>
            <Link to="/movies" style={styles.text}>
                <span style={styles.icon}><PiTelevisionBold /></span>
                <p>Filmy</p>
            </Link>
          </li>
            <li>
                <Link style={styles.text}>
                    <span style={styles.icon}><FaRankingStar /></span>
                    <p>Ranking</p>
                </Link>
            </li>
            <li>
                <Link style={styles.text}>
                    <span style={styles.icon}><BiNews /></span>
                    <p>Newsy</p>
                </Link>
            </li>

        </ul>
          <div style={styles.settings}>
              <p>name</p>
              <p>fota</p>
          </div>
      </div>
  )
}

const styles = {
    container : {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logo : {
        width: '160px'
    },
    menu : {
        margin: 0,
        padding: 0,
        // width: '100%',
        display: 'flex',

        // justifyContent: 'space-between',
        alignItems: 'center',
        listStyle: 'none',
        height: '100%',
        alignContent: 'center'
    },
    settings: {

    },
    text: {
        padding: '0 10px',
        fontSize: '16px',
        color: 'white',
        textTransform: 'uppercase',
        display: 'flex',
        textUnderlineOffset: '8px',
        fontWeight: 'bold'
        // textDecoration: 'none',
    },
    icon :{
        margin: 'auto',
        // fontSize: '24px',
        position: 'relative',
        top: '3px',
        padding: '5px'
    }
}

export default Navbar;
