import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiTelevisionBold } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { FaRankingStar } from "react-icons/fa6";
import '../fonts/Roboto-Bold.ttf';
import Logo from "./logo";
import Login from "./login";

const Navbar = () => {
    const [isHover, setIsHover] = useState(false)
    const [numOfMenu,setNumOfMenu] = useState(0)

    const handleMouseEnter = (n) => {
        setIsHover(true)
        setNumOfMenu(n)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }

    const styles = {
        container : {
            height: '70px',
            display: 'flex',
            justifyContent: 'space-between'
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
            display: 'flex',
            alignItems: 'center'
        },
        text: {
            padding: '0 10px',
            fontSize: '16px',
            color: 'white',
            textTransform: 'uppercase',
            display: 'flex',
            textUnderlineOffset: '8px',
            fontWeight: 'bold',
            textDecoration: 'none',
        },
        icon :{
            margin: 'auto',
            position: 'relative',
            top: '3px',
            padding: '5px'
        },
        navbarStyle : {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#1b1d2a',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            zIndex: 100,
        },
        underline : {
            borderBottom: '3px solid transparent',
            borderTop: '3px solid transparent',
            transition: 'border-bottom 1.5s ease',
        },
        underlineAfter : {
            borderTop: '3px solid transparent',
            borderBottom: '3px solid white',
            transition: 'border-bottom 1.5s ease',
        }

    }
    // TODO idea: transparent navbar?? after scroll sticky fixed to top with different background??
  return (
      <div style={{...styles.container,...styles.navbarStyle}}>
        <ul style={styles.menu}>
            <li>
                <Link to="/">
                    <Logo />
                </Link>
            </li>
            <li>
                <Link to="/" style={styles.text}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}>

                    <span style={styles.icon}><IoMdHome/></span>
                    <p style={(numOfMenu===1 && isHover) ?styles.underlineAfter : styles.underline}>Strona główna</p>
                </Link>
            </li>
            <li>
              {/*Form??*/}
              {/*  <input type="text" placeholder="Wyszukaj film" />*/}
                <Link style={styles.text} onMouseEnter={() =>handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                    <span style={styles.icon}><IoSearch /></span>
                    <p style={(numOfMenu===2 && isHover) ?styles.underlineAfter : styles.underline}>Wyszukaj</p>
                </Link>
            </li>
            <li>
                <Link to="/movies" style={styles.text} onMouseEnter={() =>handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                    <span style={styles.icon}><PiTelevisionBold /></span>
                    <p style={(numOfMenu===3 && isHover) ?styles.underlineAfter : styles.underline}>Filmy</p>
                </Link>
            </li>
            <li>
                <Link style={styles.text} onMouseEnter={() =>handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
                    <span style={styles.icon}><FaRankingStar /></span>
                    <p style={(numOfMenu===4 && isHover) ?styles.underlineAfter : styles.underline}>Ranking</p>
                </Link>
            </li>
            <li>
                <Link style={styles.text} onMouseEnter={() =>handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
                    <span style={styles.icon}><BiNews /></span>
                    <p style={(numOfMenu===5 && isHover) ?styles.underlineAfter : styles.underline}>Newsy</p>
                </Link>
            </li>
        </ul>
            <div style={styles.settings}>
              <Link style={styles.text} onMouseEnter={() =>handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
                  <Login style={(numOfMenu===6 && isHover) ?styles.underlineAfter : styles.underline}/>
              </Link>
            </div>
      </div>
  )

}



export default Navbar;
