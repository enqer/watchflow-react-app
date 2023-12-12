
import { IoStar } from "react-icons/io5";
const MovieRating = (props) => {


    return (
            <div style={styles.wrapper}>
                <IoStar  style={styles.star}/>
                <p style={styles.rate}>{props.rating}</p>
                <div style={styles.rateSociety}>
                    <p style={styles.numSociety}>{props.numOfRating}</p>
                    <p style={styles.textSociety}>oceny społeczności</p>
                </div>
            </div>
    )

}
const styles = {
    wrapper :{
        display: 'flex',
        alignItems: 'center',
        fontSize: '26px',
        fontWeight: 'bold',
        backgroundColor: 'var(--black)',
        borderRadius: '10px',
        padding: '5px 15px',
        width: '180px'
    },
    rateSociety : {
        marginLeft: '10px',
        fontSize: '11px',
    },
    star : {
        color: 'var(--darkBlue)'
    },
    rate : {
        color: 'var(--white)',
        margin: '0 0 0 5px'
    },
    numSociety : {
        color: 'var(--darkBlue)',
        margin: 0,
    },
    textSociety :{
        color: 'var(--white)',
        margin: 0,
    }
}
export default MovieRating
