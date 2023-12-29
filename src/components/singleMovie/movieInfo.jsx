import styles from "./movieInfo.module.css";
import MovieRating from "../movies/movieRating";
import InfoText from "./infoText";

const MovieInfo = (props) => {

    return (
        <div className={styles.container}>
            <div className={styles.infoDescription}>
                <p>{props.firstLine}</p>
            </div>
            <InfoText infoName={"Nazwa:"} info={props.title} />
            <InfoText infoName={"Reżyser:"} info={props.director} />
            <InfoText infoName={"Data premiery:"} info={props.productionYear} />
            <InfoText infoName={"Gatunek:"} info={props.genre} />
            <MovieRating rating={props.rating} numOfRating={props.numOfRatings}/>
        </div>
    )
}
export default MovieInfo
