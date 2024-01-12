import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { PiTelevisionBold } from "react-icons/pi";
import { BiNews } from "react-icons/bi";
import { FaRankingStar } from "react-icons/fa6";
import '../../fonts/Roboto-Bold.ttf';
import Logo from "./logo";
import Login from "../logIn/login";
import FormPage from "../logIn/formPage";
import { isLogged } from "../../config/authConfig";
import styles from './navbar.module.css'
import MenuItem from "./menuItem";


const Navbar = () => {
    const location = useLocation()

    const [isHover, setIsHover] = useState(false)
    const [numOfMenu,setNumOfMenu] = useState(0)
    const [whichClicked, setWhichClicked] = useState(1)
    const [colorChange, setColorchange] = useState(false);
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
    const handleMouseLeave = () => setIsHover(false)
    const handleSelectedMenu = (n) => setWhichClicked(n)
    const handleShowingForm = () => setShowForm(true)
    const handleCloseForm = () => setShowForm(false)



    window.addEventListener("scroll", changeNavbarColor);
    return (
      <div
          className=
              {colorChange ? (
                  [styles.container, styles.navbarBgcAfter].join(' ')
                  ) : (
                  [styles.container, styles.navbarBgcBefore].join(' ')
              )}
      >
        <ul className={styles.menu}>
            <li>
                <Link
                    to="/home"
                    onClick={() => handleSelectedMenu(1)}
                >
                    <Logo />
                </Link>
            </li>
            <li>
                <Link
                    to="/home"
                    className=
                        {location.pathname === '/home' ? (
                            [styles.text, styles.clicked].join(' ')
                        ) : (
                            styles.text
                        )}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSelectedMenu(1)}>

                    <span className={styles.icon}>
                        <IoMdHome/>
                    </span>
                    <p className={((numOfMenu===1 && isHover) ? styles.underlineAfter : styles.underline)}>
                        Strona główna
                    </p>
                </Link>

            </li>
            <li>
                <Link
                    to="search"
                    className={location.pathname === '/search' ? (
                        [styles.text, styles.clicked].join(' ')
                    ) : (
                        styles.text
                    )}
                    onMouseEnter={() =>handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSelectedMenu(2)}
                >
                    <span className={styles.icon}>
                        <IoSearch />
                    </span>
                    <p className={(numOfMenu===2 && isHover) ?styles.underlineAfter : styles.underline}>
                        Wyszukaj
                    </p>
                </Link>
            </li>
            <li>
                <Link
                    to="/movies"
                    className=
                        {location.pathname === '/movies' ? (
                        [styles.text, styles.clicked].join(' ')
                            ) : (
                        styles.text
                    )}
                    onMouseEnter={() =>handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSelectedMenu(3)}
                >
                    <span className={styles.icon}>
                        <PiTelevisionBold />
                    </span>
                    <p className={(numOfMenu===3 && isHover) ? styles.underlineAfter : styles.underline}>
                        Filmy
                    </p>
                </Link>
            </li>
            <li>
                <Link
                    to="/ranking"
                    className={styles.text}
                    // className={{...styles.text, ...(whichClicked === 4 ? styles.clicked : null)}}
                    onMouseEnter={() =>handleMouseEnter(4)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSelectedMenu(4)}
                >
                    <span className={styles.icon}>
                        <FaRankingStar />
                    </span>
                    <p className={(numOfMenu===4 && isHover) ? styles.underlineAfter : styles.underline}>
                        Ranking
                    </p>
                </Link>
            </li>
            <li>
                <Link
                    to="/news"
                    className={styles.text}
                    // style={{...styles.text, ...(whichClicked === 5 ? styles.clicked : null)}}
                    onMouseEnter={() =>handleMouseEnter(5)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleSelectedMenu(5)}
                >
                    <span className={styles.icon}>
                        <BiNews />
                    </span>
                    <p className={(numOfMenu===5 && isHover) ? styles.underlineAfter : styles.underline}>
                        Newsy
                    </p>
                </Link>
            </li>
        </ul>
            <div className={styles.settings}>
              <div
                  onClick={() => handleShowingForm()}
                  onMouseEnter={() =>handleMouseEnter(6)}
                  onMouseLeave={handleMouseLeave}
              >
                  <Login className={(numOfMenu === 6 && isHover) ? styles.underlineAfter : styles.underline}/>
              </div>
                {showForm && !isLogged ? <FormPage handleCloseForm={handleCloseForm} /> : null}
            </div>
      </div>
    )

}

export default Navbar;
