import styles from "./movieCard.module.css";
import img from "../../img/loki.jpg";
import {Link} from "react-router-dom";


const MovieCard = (props) => {


    // TODO star rating right corner, middle title absolute
    return(
        <Link to={`/movie/${props.id}`} >
            <div className={styles.movieCell}>
                <img className={styles.movieImg} src={props.img}/>
            </div>
        </Link>


    )
}
export default MovieCard
