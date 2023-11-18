import MovieTitles from "./movieTitles";
import MovieRating from "./movieRating";

const MovieCard = (props) => {

    const styles = {
        card :{
            // width: '500px',
            // height: '200px',
            width: '500px',
            height: '200px',
            padding: '15px',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            color: 'white'
        }
    }

    return (
        <div style={styles.card}>
            <div>
                <img src={props.img}/>
            </div>
            <div>
                    <MovieTitles title={props.title} titleEng={props.titleEng}/>
                <div>
                    <MovieRating rating={props.rating} numOfRating={props.numOfRating}/>
                </div>
                <div>
                    <p>Gatunek: {props.genre}</p>
                </div>
            </div>
            <div>
                <p>Reżyser: {props.director}</p>
            </div>
        </div>
    )
}
export default MovieCard
