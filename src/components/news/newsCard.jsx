import styles from './newsCard.module.css'
import {Link} from "react-router-dom";
const NewsCard = (props) => {


    return (
        <Link
            to={`/news/${props.id}`}
            className={styles.cardContainer}
        >
            <div className={styles.cardWrapperImg}>
                <img
                    className={styles.cardImg}
                    src={props.img}
                    alt=""
                />
            </div>
            <p className={styles.cardHeadline}>{props.headline}</p>
        </Link>
    )
}
export default NewsCard
