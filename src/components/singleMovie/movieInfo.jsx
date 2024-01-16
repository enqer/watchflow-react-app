import styles from "./movieInfo.module.css";
import MovieRating from "../movies/movieRating";
import InfoText from "./infoText";

const MovieInfo = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.infoDescription}>
                <p>{props.movieData.content?.substring(0, 100) + "..."}</p>
            </div>
            <InfoText
                infoName={"Nazwa:"}
                info={props.movieData.title}
            />
            <InfoText
                infoName={"Reżyser:"}
                info={props.movieData.director}
            />
            <InfoText
                infoName={"Data premiery:"}
                info={props.movieData.productionYear}
            />
            <InfoText
                infoName={"Gatunek:"}
                info={props.movieData.genre}
            />
            <MovieRating
                rating={props.movieData.rating}
                numOfRating={props.movieData.numOfRatings}
            />
        </div>
    )
}
export default MovieInfo
