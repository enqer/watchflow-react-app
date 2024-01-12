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
import FormPage from "../logIn/formPage";
import { isLogged } from "../../config/authConfig";
import styles from './navbar.module.css'
import MenuItem from "./menuItem";


const Navbar = () => {

    const [colorChange, setColorChange] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const changeNavbarColor = () => {
        if (window.scrollY >= 70) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };

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
                <Link to="/home">
                    <Logo />
                </Link>
            </li>
            <li>
                <MenuItem
                    path={"/home"}
                    icon={<IoMdHome/>}
                    title={"Strona główna"}
                />
            </li>
            <li>
                <MenuItem
                    path={"/search"}
                    icon={<IoSearch />}
                    title={"wyszukaj"}
                />
            </li>
            <li>
                <MenuItem
                    path={"/movies"}
                    icon={<PiTelevisionBold />}
                    title={"filmy"}
                />
            </li>
            <li>
                <MenuItem
                    path={"/ranking"}
                    icon={<FaRankingStar />}
                    title={"ranking"}
                />
            </li>
            <li>
                <MenuItem
                    path={"/news"}
                    icon={<BiNews />}
                    title={"newsy"}
                />
            </li>
        </ul>
            <div className={styles.settings}>
              <div onClick={() => handleShowingForm()}>
                  <Login/>
              </div>
                {showForm
                    && !isLogged
                    && (
                        <FormPage handleCloseForm={handleCloseForm} />
                    )
                }
            </div>
      </div>
    )
}

export default Navbar;
