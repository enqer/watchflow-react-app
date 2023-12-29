import img from "../../img/zielona.jpg";
import styles from './ranking.module.css'

import BackPage from "../common/backPage";
import MovieRankCard from "./movieRankCard";
import {useEffect, useState} from "react";
import axios from "axios";

const Ranking = () => {

    const [data, setData] = useState([])

    const getRankingMovies = () => {
      axios
          .get(`http://localhost:8080/api/movies/ranking?first=5`)
          .then((response)=> setData(response.data))
          .catch((erro) => console.error(erro))
    }

    useEffect(() => {
        getRankingMovies()
    }, []);


    return (
        <div className={styles.containerFluid}>
            {/*<BackPage backTo={"/home"} title={"Powrót do strony głównej"} />*/}
            <div className={styles.titleRanking}>
                <p className={styles.rankingText}>Odkryj ranking</p>
            </div>
            <div className={styles.container}>
                {data.length > 0 ? data.map((movie, index)=>
                        <MovieRankCard rank={index+1}
                                       id={movie.id}
                                       img={movie.image}
                                       title={movie.title}
                                       rating={movie.rating}
                                       numOfRating={movie.numOfRatings}
                                       genre={movie.genre}
                                       director={movie.director}
                        />
                    ) :
                    <p className={styles.missingRanking}>Brak wyników</p>
                }

            </div>
        </div>
    )
}

export default Ranking
