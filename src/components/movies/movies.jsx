import styles from './movies.module.css'
import img from '../../img/loki.jpg'
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {useState} from "react";
import MovieCard from "./movieCard";
import {isExpired} from "react-jwt";
const Movies = () => {

    const isLogged = !isExpired(localStorage.getItem('token'))

    const arr = [...Array(20).keys()]
    const [isMoving, setIsMoving] = useState(false)

        // TODO stylizacja select i jego menu i poprawienie wysokości żeby było na równi z filmami
        // TODO dorobić własne menu?? + takie samo do ustawień

    const handlerMovingArrow = () => {
        setIsMoving(!isMoving)
    }

  return(
      <div className={styles.container}>
          <div className={styles.header}>
              <div className={styles.choiceMovie}>
                  <p className={styles.text}>Filmy</p>
                  <select className={styles.select} >
                      {options.map((option) =>(
                          <option className={styles.option} value={option.value}>{option.label}</option>
                      ))}
                  </select>
              </div>
              {isLogged &&
                  <div>
                      <Link to="add" className={styles.addNew} onMouseEnter={handlerMovingArrow}
                            onMouseLeave={handlerMovingArrow}>
                          <p>Dodaj film</p>
                          <div className={styles.arrow}>
                              <FaArrowRight className={isMoving ? styles.arrowMoveAfter : styles.arrowMoveBefore}/>
                          </div>
                      </Link>
                  </div>
              }
          </div>
          <div className={styles.wrapperImages}>
              {arr.map(a => (
                  // <div className={styles.movieCell}>
                  //     {/*<div className="moviesImg">{a+1}</div>*/}
                  //     <img className={styles.moviesImg} src={img}/>
                  // </div>
                  <MovieCard id={Math.floor(Math.random() * 100)} img={img}/>
              ))}
          </div>
      </div>
  )
}



const options = [
    {
        label: "Polecane",
        value: "1",
    },
    {
        label: "Wszystkie filmy",
        value: "2",
    },
    {
        label: "Akcja",
        value: "3",
    },
    {
        label: "Komedie",
        value: "4",
    },
    {
        label: "Dokumentalne",
        value: "5",
    },
    {
        label: "Dramaty",
        value: "6",
    },
    {
        label: "Komedie romantyczne",
        value: "7",
    },
    {
        label: "Science fiction",
        value: "8",
    },
    {
        label: "Thrillery",
        value: "9",
    },
    {
        label: "Dla dzieci",
        value: "10",
    },

];
export default Movies;
