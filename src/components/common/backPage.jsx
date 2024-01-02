import styles from './backPage.module.css'
import {Link} from "react-router-dom";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
const BackPage = (props) => {
    const navigate = useNavigate();

    const [arrowMove, setArrowMove]=useState(false)
    const handlerArrow = () => {
        setArrowMove(!arrowMove)
    }
    return(
        <div className={styles.backPage}>
            <Link
                to={""}
                onClick={() => navigate(-1)}
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
