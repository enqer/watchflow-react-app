import styles from "./movie.module.css";
import RateStar from "./rateStar";


const Rating = (props) => {

    const rates = [...Array(10).keys()].map(x => ++x);

    return (
        <div className={styles.selectRateStar}>
            {rates.map((rate) => (
                <RateStar
                    handleSelectRating={props.handleSelectRating}
                    handlerStarHover={props.handlerStarHover}
                    whichRateSelect={props.whichRateSelect}
                    whichHover={props.whichHover}
                    rate={rate}
                    key={rate}
                />
                )
            )}
        </div>
    )
}
export default Rating
