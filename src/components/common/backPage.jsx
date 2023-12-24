import styles from './backPage.module.css'
import {Link} from "react-router-dom";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useState} from "react";
const BackPage = (props) => {

    const [arrowMove, setArrowMove]=useState(false)
    const handlerArrow = () => {
        setArrowMove(!arrowMove)
    }
    return(
        <div className={styles.backPage}>
            <Link
                to={props.backTo}
                onMouseEnter={handlerArrow}
                onMouseLeave={handlerArrow}
            >
                <div className={styles.arrow}>
                    <FaArrowLeftLong className={arrowMove? styles.arrowMoveAfter : styles.arrowMoveBefore} />
                </div>
                <p>{props.title}</p>
            </Link>
        </div>
    )
}
export default BackPage
