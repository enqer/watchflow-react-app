import styles from './movies.module.css'
import {Link} from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import {useEffect, useState} from "react";
import MovieCard from "./movieCard";
import axios from "axios";
import {isLogged} from "../../config/authConfig";
import {BASE_URL} from "../../config/appConfig";
const Movies = () => {

    const [isMoving, setIsMoving] = useState(false)
    const [data, setData] = useState([])
    const [isNotFound, setIsNotFound] = useState(false)


    const handlerMovingArrow = () => {
        setIsMoving(!isMoving)
    }

    useEffect(() => {
        getAllMovies();
    }, []);


    const getAllMovies = () => {
        axios
            .get(`${BASE_URL}/api/movies`)
            .then((response)=>{
                response.status === 200 && setData(response.data)
                setIsNotFound(false)
            })
            .catch((err) => {
                setIsNotFound(true)
            })
    }
    const getMoviesByGenre = (genre) => {
        axios
            .get(`${BASE_URL}/api/movies/genres/${genre}`)
            .then((response)=>{
                setData(response.data)
                setIsNotFound(false)
            })
            .catch((err) => {

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
                  <select
                      className={styles.select}
                      onChange={handleOptionSelect}
                  >
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
              {isLogged && (
                  <div>
                      <Link
                          to="add"
                          className={styles.addNew}
                          onMouseEnter={handlerMovingArrow}
                          onMouseLeave={handlerMovingArrow}
                      >
                          <p>Dodaj film</p>
                          <div className={styles.arrow}>
                              <FaArrowRight
                                  className=
                                      {isMoving ? (
                                          styles.arrowMoveAfter
                                      ) : (
                                          styles.arrowMoveBefore
                                      )}
                              />
                          </div>
                      </Link>
                  </div>
              )}
          </div>
          <div className={styles.wrapperImages}>
              {!isNotFound ? (
                  Array.isArray(data) && (
                      data?.map(d => (
                          <MovieCard
                              id={d.id}
                              img={d.image}
                              title={d.title}
                              key={d.id}
                          />
                      ))
                  )
              ) : (
                      <p className={styles.notFound}>
                          Nie znaleziono
                      </p>
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
        label: "Biograficzne",
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
