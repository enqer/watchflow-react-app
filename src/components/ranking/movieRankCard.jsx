import MovieTitles from "../movies/movieTitles";
import MovieRating from "../movies/movieRating";
import styles from './movieRankCard.module.css'
import {useState} from "react";
import {Link} from "react-router-dom";
const MovieRankCard = (props) => {

    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(true)
    }

    return (
        <div className={styles.flipCard}
             onMouseEnter={handleFlip}>
            <div className=
                     {isFlipped ? (
                         [styles.flipCardInner, styles.flipped].join(' ')
                     ) : (
                         styles.flipCardInner
                     )}
            >
                <div className={styles.cardFront}>
                    <p>{props.rank}</p>
                </div>
                <Link
                    to={`/movie/${props.id}`}
                    className={styles.cardBack}
                >
                    <div className={styles.triangleDiv}>
                        <p>{props.rank}</p>
                    </div>
                    <div className={styles.dataWrapper}>
                        <div className={styles.titles}>
                            <MovieTitles
                                title={props.title}
                                titleEng={props.titleEng}
                            />
                        </div>
                        <div className={styles.vertical}>
                            <p>Gatunek: {props.genre}</p>
                            <p>Reżyser: {props.director}</p>
                            <MovieRating
                                rating={props.rating}
                                numOfRating={props.numOfRating}
                            />
                        </div>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img
                            src={props.img}
                            alt="Zdjęcie z filmu"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default MovieRankCard
