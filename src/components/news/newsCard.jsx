import './newsCard.css'
import {Link} from "react-router-dom";
const NewsCard = (props) => {



    return (
        <Link to={`/news/${props.id}`} className="newsCardContainer" >
            <div className="newsCardWrapperImg">
                <img className="newsCardImg" src={props.img}/>
            </div>
            <p className="newsCardHeadline">{props.headline}</p>

        </Link>
    )
}
export default NewsCard
