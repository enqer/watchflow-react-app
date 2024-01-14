import {Link} from "react-router-dom";
import styles from './bannerCard.module.css'
const BannerCard = (props) => {

    return(
        <Link
            to={`/movie/${props.id}`}
            className={styles.link}
        >
            <img
                src={props.img}
                alt={`filmu ${props.title}`}
                className={styles.img}
            />
            {/*<div style={{background: `url(${props.img})`}}>*/}

            {/*</div>*/}
        </Link>
    )
}
export default BannerCard
