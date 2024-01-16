import styles from "./movie.module.css";
import {FaRegUserCircle} from "react-icons/fa";
import Rating from "./rating";
import {useEffect, useState} from "react";
import {config, isLogged, user} from "../../config/authConfig";
import {toast} from "react-hot-toast";
import axios from "axios";
import {BASE_URL} from "../../config/shared";
import Watcher from "./watcher";

const RateBar = (props) => {
    const [whichHover, setWhichHover] = useState(0)
    const [whichRateSelect, setWhichRateSelect] = useState(0)
    const [ratingData, setRatingData] = useState({})

    const handlerStarHover = (num) => {
        setWhichHover(num)
    }
    const getLabelByRate = (rate) => {
        const matchingRates = rates.filter(r => r.value === rate);
        return matchingRates.length > 0 ? matchingRates[0].label : "Widziałem, moja ocena:";
    }
    const getSelectedRate = (rate) => {
        const matchingRates = rates.filter(r => r.value === rate);
        return matchingRates.length > 0 ? matchingRates[0].value : null;
    }

    useEffect(() => {
        const getRating = () => {
            axios
                .get(`${BASE_URL}/api/ratings/movies/${props.movieId}/users/${user.userId}`)
                .then((response) => {
                    setRatingData(response.data)
                    setWhichRateSelect(response.data.rate)
                })
                .catch((error)=>{

                })
        }
        isLogged && getRating()
    }, []);

    const deleteRating = () => {
        axios
            .delete(`${BASE_URL}/api/ratings/${ratingData.id}`,
                config
            )
            .then((response) => {
                setWhichRateSelect(0)
            })
            .catch((error)=>{
                props.setError(true)
                props.setErrorMsg('Problem z usunięciem filmu')
            })
    }

    const updateRating = (rate) => {
        axios
            .patch(`${BASE_URL}/api/rating/${ratingData.id}`,
                {
                    rate: rate
                },
                config
            )
            .then((response) => {
                toast("Zaktualizowano ocene!")
                // console.log(response.data)
                // setRatingData(response.data)

            })
            .catch((error)=>{
                props.setError(true)
                props.setErrorMsg('Problem z zaktualizowaniem oceny')
            })
        setWhichRateSelect(rate)
    }
    const selectRating = (rate) => {
        axios
            .post(`${BASE_URL}/api/rating`,
                {
                    rate: rate,
                    movieId: props.movieId,
                    userId: user.userId
                },
                config
            )
            .then((response) => {
                setWhichRateSelect(rate)
            })
            .catch((error)=>{
                props.setError(true)
                props.setErrorMsg('Problem z ocenianiem filmu')
            })
    }
    const handleSelectRating = (rate) => {
        if (!isLogged){
            toast("Aby ocenić film, musisz się zalogować!")
            return
        }
        if (whichRateSelect === 0)
            selectRating(rate)
        else if (whichRateSelect === rate)
            deleteRating()
        else
            updateRating(rate)
    }

    return(
        <div className={styles.rateWrapper}>
            <div className={styles.displaySelectedRate}>
                <div className={styles.ratingValues}>
                    <FaRegUserCircle className={styles.defaultIconNumber}/>
                    <div
                        className=
                            {whichHover > 0
                            || whichRateSelect > 0 ? (
                                [styles.selectedRateNumber, styles.selectedRateNumberAfter].join(' ')
                            ) : (
                                [styles.selectedRateNumber, styles.selectedRateNumberBefore].join(' ')
                            )}
                    >
                        {whichRateSelect > 0
                        && whichHover === 0 ? (
                            getSelectedRate(whichRateSelect)
                        ) : (
                            getSelectedRate(whichHover)
                        )
                        }
                    </div>
                </div>
                <div className={styles.ratingLabels}>
                    <p>
                        {whichRateSelect > 0
                        && whichHover === 0 ? (
                            getLabelByRate(whichRateSelect)
                        ) : (
                            getLabelByRate(whichHover)
                        )
                        }
                    </p>
                </div>
            </div>
            <Rating
                handleSelectRating={handleSelectRating}
                whichHover={whichHover}
                handlerStarHover={handlerStarHover}
                whichRateSelect={whichRateSelect}
            />
            <Watcher
                movieId={props.movieId}
            />
        </div>
    )
}

const rates = [
    {
        label: "Nieporozumienie",
        value: 1
    },
    {
        label: "Bardzo słaby",
        value: 2
    },
    {
        label: "Słaby",
        value: 3
    },
    {
        label: "Ujdzie",
        value: 4
    },
    {
        label: "Średni",
        value: 5
    },
    {
        label: "Niezły",
        value: 6
    },
    {
        label: "Dobry",
        value: 7
    },
    {
        label: "Bardzo dobry",
        value: 8
    },
    {
        label: "Rewelacyjny",
        value: 9
    },
    {
        label: "Arcydzieło!",
        value: 10
    }
]
export default RateBar
