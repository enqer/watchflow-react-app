import styles from "./movieCard.module.css";
import img from "../../img/loki.jpg";
import {Link} from "react-router-dom";
import {useState} from "react";


const MovieCard = (props) => {
    const [isHover, setIsHover] = useState(false)

    const handleHover = () => {
        setIsHover(!isHover)
    }

    return(
        <Link to={`/movie/${props.id}`}
                onMouseLeave={handleHover}
                onMouseEnter={handleHover}
        >
            <div className={styles.movieCell}>
                <img
                    className=
                        {isHover ? (
                            [styles.movieImg,styles.movieImgHover].join(' ')
                        ) : (
                            styles.movieImg
                        )}
                    src={props.img}
                    alt="Zdjęcie film"
                />
                {isHover
                    && props.title !== ""
                    && (
                        <p className={styles.title}>{props.title}</p>
                    )
                }
            </div>
        </Link>
    )
}
export default MovieCard
