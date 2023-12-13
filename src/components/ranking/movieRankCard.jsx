import MovieTitles from "../movies/movieTitles";
import MovieRating from "../movies/movieRating";
import styles from './movieRankCard.module.css'
const MovieRankCard = (props) => {



    return (
        <div className={styles.card}>
            <div className={styles.triangleDiv}>
                <p>{props.rank}</p>
            </div>
            <div className={styles.dataWrapper}>
                <div className={styles.titles}>
                    <MovieTitles title={props.title} titleEng={props.titleEng}/>
                </div>
                <div>
                    <p>Gatunek: {props.genre}</p>
                    <p>Reżyser: {props.director}</p>
                </div>
                <MovieRating rating={props.rating} numOfRating={props.numOfRating}/>
            </div>
            <div className={styles.imgWrapper}>
                <img src={props.img}/>
            </div>


        </div>
    )
}
export default MovieRankCard
