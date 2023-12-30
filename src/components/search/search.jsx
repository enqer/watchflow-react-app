import SearchBar from "./searchBar";
import {useState} from "react";
import axios from "axios";
import MovieCard from "../movies/movieCard";
import styles from './search.module.css'
const Search = () => {
    const [data, setData] = useState([])
    const [isNotFound, setIsNotFound] = useState(true)
    const [isFirstSeen, setIsFirstSeen] = useState(false)

    const getSearchedMovie = (title) => {
        axios
            .get(`http://localhost:8080/api/movies/search/${title}`)
            .then((response)=> {
                if (response.data.length > 0){
                    setData(response.data)
                    setIsNotFound(false)
                } else {
                    setIsNotFound(true)
                    setIsFirstSeen(true)
                }
            })
            .catch((error) => {
                setIsNotFound(true)
                setIsFirstSeen(true)
            })

    }

    const handleSearch = (searchedText) => {
        console.log(searchedText)
        if (searchedText === '')
            return
        getSearchedMovie(searchedText)
    }

    return(
        <div className={styles.container}>
            <div className={styles.searchWrapper}>
                <SearchBar handleSearch={handleSearch} />
                <div className={styles.foundWrapper}>
                    {!isNotFound && (
                        <p className={styles.found}>Znalezionych wyników: {data.length}</p>
                    )}
                </div>
            </div>
            <div className={styles.moviesWrapper}>
                {!isNotFound &&
                    data.map((movie, index) =>
                        <MovieCard
                            key={index}
                            id={movie.id}
                            img={movie.image}
                            title={movie.title}
                        />
                    )}
                {(isNotFound && isFirstSeen) && (
                    <p className={styles.notFound}>Nie znaleziono wyników o określonym kryterium</p>
                )}
            </div>
        </div>
    )
}
export default Search
