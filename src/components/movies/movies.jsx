import styles from './movies.module.css'
import img from '../../img/loki.jpg'
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {useEffect, useState} from "react";
import MovieCard from "./movieCard";
import {isExpired} from "react-jwt";
import axios from "axios";
const Movies = () => {

    const isLogged = !isExpired(localStorage.getItem('token'))

    const [isMoving, setIsMoving] = useState(false)
    const [data, setData] = useState([])
    const [isNotFound, setIsNotFound] = useState(false)

        // TODO stylizacja select i jego menu i poprawienie wysokości żeby było na równi z filmami
        // TODO dorobić własne menu?? + takie samo do ustawień

    const handlerMovingArrow = () => {
        setIsMoving(!isMoving)
    }

    useEffect(() => {
        getAllMovies();
    }, []);


    const getAllMovies = () => {
        axios
            .get('http://localhost:8080/api/movies')
            .then((response)=>{
                console.log(response.data)
                setData(response.data)
                setIsNotFound(false)
            })
            .catch((err) => {
                console.log(err)
                setIsNotFound(true)
            })
    }
    const getMoviesByGenre = (genre) => {
        console.log(genre)
        axios
            .get(`http://localhost:8080/api/movies/genres/${genre}`)
            .then((response)=>{
                console.log(response.data)
                setData(response.data)
                setIsNotFound(false)
            })
            .catch((err) => {
                console.log(err)
                setIsNotFound(true)
            })

    }

    const handleOptionSelect = (event) => {
        if (event.target.value === 'Wszystkie filmy')
            getAllMovies()
        else
            getMoviesByGenre(event.target.value)
    }

  return(
      <div className={styles.container}>
          <div className={styles.header}>
              <div className={styles.choiceMovie}>
                  <p className={styles.text}>Filmy</p>
                  <select className={styles.select} onChange={handleOptionSelect} >
                      {options.map((option, index) => (
                          <option
                              className={styles.option} 
                              value={option.label}
                              key={index}
                          >
                              {option.label}
                          </option>
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
              {!isNotFound ?
                  data.map(d => (
                      <MovieCard
                          id={d.id}
                          img={d.image}
                          title={d.title}
                          key={d.id}
                      />
                  )) : (
                      <p className={styles.notFound}>Nie znaleziono</p>
                  )
              }
          </div>
      </div>
  )
}



const options = [
    {
        label: "Wszystkie filmy",
        value: "1",
    },
    {
        label: "Akcja",
        value: "2",
    },
    {
        label: "Komedia",
        value: "3",
    },
    {
        label: "Dokumentalne",
        value: "4",
    },
    {
        label: "Dramat",
        value: "5",
    },
    {
        label: "Komedia romantyczna",
        value: "6",
    },
    {
        label: "Science fiction",
        value: "7",
    },
    {
        label: "Thriller",
        value: "8",
    },
    {
        label: "Dla dzieci",
        value: "9",
    },

];
export default Movies;
