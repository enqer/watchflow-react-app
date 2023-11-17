import { FaStar } from "react-icons/fa6";
const MovieRating = (props) => {


    return (
        <>
            <div style={styles.wrapper}>
                <FaStar />
                <p>{props.rating}</p>
                <div style={{fontSize: '10px'}}>
                    <p>{props.numOfRating}<br/>oceny społeczności</p>
                </div>
            </div>
        </>
    )

}
const styles = {
    wrapper :{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px'
    }
}
export default MovieRating
