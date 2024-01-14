
import styles from './movie.module.css'
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState} from "react";
import { useParams} from "react-router-dom";
import MovieInfo from "./movieInfo";
import BackPage from "../common/backPage";
import axios from "axios";
import Comment from "./comment";
import AddComment from "./addComment";
import { config, isLogged, user } from '../../config/authConfig'
import {MdDelete} from "react-icons/md";
import {useNavigate} from "react-router";
import Rating from "./rating";
import {BASE_URL} from "../../config/shared";

const Movie = () => {

    let navigate = useNavigate()
    const [whichHover, setWhichHover] = useState(0)
    const [whichRateSelect, setWhichRateSelect] = useState(0)
    const [watched, setWatched] = useState(false)
    const [error, setError] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [data,setData]= useState({})
    const [ratingData, setRatingData] = useState({})
    const movieId = useParams()


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
        // TODO handle errors
        const getInfoMovie = () => {
            axios
                .get(`${BASE_URL}/api/movies/${movieId.id}`)
                .then((response)=>{
                    setData(response.data)
                })
                .catch((err) => {
                    setError(true)
                    setErrorMsg('Problem z wyświetleniem filmu')
                    switchRoute()
                })
        }
        const getWatcherInfo = () => {
            axios
                .get(`${BASE_URL}/api/movies/${movieId.id}/watchers/${user.userId}`)
                .then((response) => {
                    if (response.data.isWatcher){
                        setWatched(true)
                    }
                })
                .catch((error) => {
                    // setError(true)
                    // setWatched(false)
                    // setErrorMsg('Problem z wyświetleniem dodatkowych informacji filmu')
                })
        }
        const getRating = () => {
            axios
                .get(`${BASE_URL}/api/ratings/movies/${movieId.id}/users/${user.userId}`)
                .then((response) => {
                    setRatingData(response.data)
                    setWhichRateSelect(response.data.rate)
                })
                .catch((error)=>{

                })
        }
        getInfoMovie()
        isLogged && getWatcherInfo()
        isLogged && getRating()
    }, []);

    const handleSelectRating = (rate) => {
        if (!isLogged){
            alert("Aby ocenić film, musisz się zalogować!")
            return
        }
        if (whichRateSelect === 0)
            selectRating(rate)
        else if (whichRateSelect === rate)
            deleteRating()
        else
            updateRating(rate)
    }

    const deleteRating = () => {
       axios
           .delete(`${BASE_URL}/api/ratings/${ratingData.id}`,
               config
           )
           .then((response) => {
               setWhichRateSelect(0)
           })
           .catch((error)=>{
               setError(true)
               setErrorMsg('Problem z wyświetleniem dodatkowych informacji filmu')
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
                // console.log(response.data)
                // setRatingData(response.data)

            })
            .catch((error)=>{
                setError(true)
                setErrorMsg('Problem z zaktualizowaniem oceny')
            })
        setWhichRateSelect(rate)
    }
    const selectRating = (rate) => {
        axios
            .post(`${BASE_URL}/api/rating`,
                {
                    rate: rate,
                    movieId: movieId.id,
                    userId: user.userId
                },
                config
            )
            .then((response) => {
                setWhichRateSelect(rate)
            })
            .catch((error)=>{
                setError(true)
                setErrorMsg('Problem z ocenianiem filmu')
            })
    }


    const deleteWatcher = () => {
        axios
            .delete(`${BASE_URL}/api/movies/${movieId.id}/watchers/${user.userId}`,
                config)
            .then((response) => {
                console.log(response)
                setWatched(false)
            })
            .catch((error) => {
                setError(true)
                setErrorMsg('Problem z usunięciem filmu')
                setWatched(true)
            })
    }

    const addWatcher = () => {
        axios
            .post(`${BASE_URL}/api/movies/${movieId.id}/watchers/${user.userId}`,
                {},
                config)
            .then((response) => {
                setWatched(true)
            })
            .catch((error) => {
                setError(true)
                setErrorMsg('Problem z dodaniem obejrzenia')
                setWatched(false)
            })
    }
    const handleIsWatched = () => {
        if (!isLogged){
            alert("Aby zapisać film do obejrzanych, musisz się zalogować!")
            return
        }
        if (watched)
            deleteWatcher()
        else
            addWatcher()
    }



    const switchRoute = () => {
        navigate('/movies')
        window.location.reload()
    }

    const handleDeleteMovie = () => {
        axios
            .delete(`${BASE_URL}/api/movies/${movieId.id}`,
                config
            )
            .then((response) => {
                switchRoute()
            })
            .catch((error) => {
                setError(true)
                setErrorMsg('Problem z usunięciem filmu')
            })
    }
return (
        <div className={styles.containerFluid}>
            <BackPage
                backTo={"/movies"}
                title={data.title}
            />
            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.displayImg}>
                        <img
                            src={data.image}
                            alt="Przedstawia plakat filmu"
                        />
                    </div>
                    <div className={styles.infoDataWrapper}>
                        <MovieInfo
                            firstLine={data.content?.substring(0, 100) + "..."}
                            title={data.title}
                            director={data.director}
                            productionYear={data.productionYear}
                            genre={data.genre}
                            rating={data.rating}
                            numOfRatings={data.numOfRatings}
                            content={data.content}
                        />
                    </div>
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
                        <div className={styles.selectWatched}>
                            <p>Już obejrzane?</p>
                            <input
                                type="checkbox"
                                checked={watched}
                                onChange={(event) => handleIsWatched()}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionWrapper}>
                    <p>
                        {data.content}
                    </p>
                </div>
                <div>
                    <h2 className={styles.commentText}>Komentarze:</h2>
                    {data.comments?.length > 0 ? data.comments.map((comment) =>
                        <Comment
                            id={comment.id}
                            content={comment.content}
                            publishedAt={comment.publishedAt}
                            movieId={comment.movieId}
                            userId={comment.userId}
                            userLogin={comment.userLogin}
                            key={comment.id}
                        />
                    ) : (
                        <p className={styles.missingComment}>Brak komentarzy, aby dodać komentarz musisz być zalogowany.</p>
                    )}
                </div>
                <div>
                    {isLogged && (
                        <AddComment
                            movieId={movieId.id}
                            userId={user.userId}
                        />
                    )}
                </div>
                <div>
                    {isLogged
                        && user.isAdmin
                        && (
                            <div
                                className={styles.deleteMovie}
                                onClick={handleDeleteMovie}
                            >
                                <p>Usuń film</p>
                                <MdDelete />
                            </div>
                        )
                    }
                </div>
                {error && (
                    <p className={styles.error}>{errorMsg}</p>
                )}
            </div>
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
export default Movie;
