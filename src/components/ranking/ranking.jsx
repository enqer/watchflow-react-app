
import styles from './ranking.module.css'
import MovieRankCard from "./movieRankCard";
import {useEffect, useState} from "react";
import axios from "axios";
import NotFoundText from "../common/notFoundText";

import {BASE_URL} from "../../config/appConfig";

const Ranking = () => {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const getRankingMovies = () => {
      axios
          .get(`${BASE_URL}/api/movies/ranking?first=5`)
          .then((response)=> {
              setData(response.data)
              setError(false)
          })
          .catch((erro) => {
              setData([])
              setError(true)
          })
    }

    useEffect(() => {
        getRankingMovies()
    }, []);


    return (
        <div className={styles.containerFluid}>
            <div className={styles.titleRanking}>
                <p className={styles.rankingText}>
                    Odkryj ranking
                </p>
            </div>
            <div className={styles.container}>
                {!error ? (
                    Array.isArray(data) && (
                        data.map((movie, index) =>
                            <MovieRankCard
                                rank={index+1}
                                id={movie.id}
                                img={movie.image}
                                title={movie.title}
                                rating={movie.rating}
                                numOfRating={movie.numOfRatings}
                                genre={movie.genre}
                                director={movie.director}
                                key={movie.id}
                            />
                        ))
                ) : (
                    <NotFoundText text={"Brak wyników"} />
                )}
            </div>
        </div>
    )
}

export default Ranking
