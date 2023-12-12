import styles from "./movieInfo.module.css";
import MovieRating from "../movies/movieRating";
import InfoText from "./infoText";

const MovieInfo = (props) => {

    return (
        <div>
            <div className={styles.infoDescription}>
                <p>Lorem ipsum dolor sit amfugit isdam rem reprehenderit, soluta tempore?rerewrewrwrwepsumewqe dolor sit amet, consectetur adipisicing elit. Eos, veritatis.</p>
            </div>
            <InfoText infoName={"Nazwa:"} info={"Loki"} />
            <InfoText infoName={"Reżyser:"} info={"Mariusz"} />
            <InfoText infoName={"Data premiery:"} info={"2023"} />
            <InfoText infoName={"Gatunek:"} info={"Biograficzny"} />
            <MovieRating rating={"8,6"} numOfRating={"980 321"}/>
        </div>
    )
}
export default MovieInfo
