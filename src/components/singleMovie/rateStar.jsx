import {IoStar, IoStarOutline} from "react-icons/io5";
import {Link} from "react-router-dom";


const RateStar = (props) => {

    return(
        <Link
            to=""
            onClick={() => props.handleSelectRating(props.rate)}
            onMouseEnter={() => props.handlerStarHover(props.rate)}
            onMouseLeave={() => props.handlerStarHover(0)}
        >
            {props.whichHover >= props.rate
                || (props.whichRateSelect >= props.rate && props.whichHover === 0) ? (
                    <IoStar/>
                ) : (
                    <IoStarOutline/>
                )
            }
        </Link>
    )
}
export default RateStar
