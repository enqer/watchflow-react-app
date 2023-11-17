import img from "../img/zielona.jpg";
import MovieCard from "./movies/movieCard";

const Ranking = () => {
    const arr = [...Array(10).keys()]

    return (
        <div style={styles.container}>
            <p>Ranking</p>
            <div>
                {arr.map(a =>
                    <div style={styles.rankCard}>
                        <p style={styles.rankNum}>{a+1}</p>
                        <MovieCard img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                    </div>
                )}
            </div>
        </div>
    )
}
const styles = {
    container:{
        // width: '800px',
        // margin: 'auto',
        display: 'flex',
        justifyContent: 'center'
    },
    rankCard :{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px'
    },
    rankNum : {
        fontSize: '50px',
        padding: '15px'
        // height: '200px',
        // width: '150px',
        // textAlign: 'center'
    }
}
export default Ranking
