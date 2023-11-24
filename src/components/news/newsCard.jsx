import './newsCard.css'
const NewsCard = (props) => {



    return (
        <div className="newsCardContainer" >
            <div className="newsCardWrapperImg">
                <img className="newsCardImg" src={props.img}/>
            </div>
            <p className="newsCardHeadline">{props.headline}</p>

        </div>
    )
}
export default NewsCard
