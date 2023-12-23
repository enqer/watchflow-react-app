import React, {useState} from "react";
import {Link} from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiTelevisionBold } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { FaRankingStar } from "react-icons/fa6";
import '../../fonts/Roboto-Bold.ttf';
import Logo from "./logo";
import Login from "../logIn/login";
import SignIn from "../logIn/signIn";
import FormPage from "../logIn/formPage";

const Navbar = () => {
    const [isHover, setIsHover] = useState(false)
    const [numOfMenu,setNumOfMenu] = useState(0)
    const [whichClicked, setWhichClicked] = useState(1)
    const [colorChange, setColorchange] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 70) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };

    const handleMouseEnter = (n) => {
        setIsHover(true)
        setNumOfMenu(n)
    }
    const handleMouseLeave = () => {
        setIsHover(false)
    }
    const handleSelectedMenu = (n) => {
        setWhichClicked(n)
    }

    const handleShowingForm = () => {
        setShowForm(true)
    }

    const handleCloseForm = () => {
        setShowForm(false)
    }

    // TODO do osobnego pliku css
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
            alignItems: 'center',
            cursor: 'pointer'
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
            backgroundColor: colorChange ? 'var(--black)':'#1b1d2a',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
            zIndex: 100,
        },
        underline : {
            borderBottom: '3px solid transparent',
            borderTop: '3px solid transparent',
            transition: 'border-bottom .5s ease',
        },
        underlineAfter : {
            borderTop: '3px solid transparent',
            borderBottom: '3px solid',
            transition: 'border-bottom 1 s ease',
        },
        clicked :{
            color: 'var(--darkBlue)',
            borderColor: 'var(--darkBlue)',
        }

    }

    window.addEventListener("scroll", changeNavbarColor);
  return (
      <div style={{...styles.container,...styles.navbarStyle}}>
        <ul style={styles.menu}>
            <li>
                <Link to="/home"
                      onClick={() => handleSelectedMenu(1)}
                >
                    <Logo />
                </Link>
            </li>
            <li>
                <Link to="/home" style={{...styles.text, ...(whichClicked === 1 ? styles.clicked : null)}}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={handleMouseLeave}
                        onClick={() => handleSelectedMenu(1)}>

                    <span style={styles.icon}><IoMdHome/></span>
                    <p style={((numOfMenu===1 && isHover) ?styles.underlineAfter : styles.underline)}>Strona główna</p>
                </Link>
            </li>
            <li>
              {/*Form??*/}
              {/*  <input type="text" placeholder="Wyszukaj film" />*/}
                <Link style={styles.text} style={{...styles.text, ...(whichClicked === 2 ? styles.clicked : null)}}
                      onMouseEnter={() =>handleMouseEnter(2)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSelectedMenu(2)}
                >
                    <span style={styles.icon}><IoSearch /></span>
                    <p style={(numOfMenu===2 && isHover) ?styles.underlineAfter : styles.underline}>Wyszukaj</p>
                </Link>
            </li>
            <li>
                <Link to="/movies" style={styles.text} style={{...styles.text, ...(whichClicked === 3 ? styles.clicked : null)}}
                      onMouseEnter={() =>handleMouseEnter(3)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSelectedMenu(3)}
                >
                    <span style={styles.icon}><PiTelevisionBold /></span>
                    <p style={(numOfMenu===3 && isHover) ?styles.underlineAfter : styles.underline}>Filmy</p>
                </Link>
            </li>
            <li>
                <Link to="/ranking" style={styles.text} style={{...styles.text, ...(whichClicked === 4 ? styles.clicked : null)}}
                      onMouseEnter={() =>handleMouseEnter(4)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSelectedMenu(4)}
                >
                    <span style={styles.icon}><FaRankingStar /></span>
                    <p style={(numOfMenu===4 && isHover) ?styles.underlineAfter : styles.underline}>Ranking</p>
                </Link>
            </li>
            <li>
                <Link to="/news" style={styles.text} style={{...styles.text, ...(whichClicked === 5 ? styles.clicked : null)}}
                      onMouseEnter={() =>handleMouseEnter(5)}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleSelectedMenu(5)}
                >
                    <span style={styles.icon}><BiNews /></span>
                    <p style={(numOfMenu===5 && isHover) ?styles.underlineAfter : styles.underline}>Newsy</p>
                </Link>
            </li>
        </ul>
            <div style={styles.settings}>
              <div onClick={() => handleShowingForm()} style={styles.text} onMouseEnter={() =>handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
                  <Login style={(numOfMenu===6 && isHover) ? styles.underlineAfter : styles.underline}/>
              </div>
                {showForm && !isLogged ? <FormPage handleCloseForm={handleCloseForm} /> : null}
            </div>
      </div>
  )

}
// tODO settings hover pokazuje prostokąt z opcjami a nie podkreślenie!!! change it


export default Navbar;
