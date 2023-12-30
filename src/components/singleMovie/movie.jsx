
import styles from './movie.module.css'
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import MovieInfo from "./movieInfo";
import BackPage from "../common/backPage";
import axios from "axios";
import Comment from "./comment";
import AddComment from "./addComment";
import { config, isLogged, user } from '../../config/authConfig'
import {MdDelete} from "react-icons/md";
import {useNavigate} from "react-router";

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

    const getInfoMovie = () => {
        axios
            .get(`http://localhost:8080/api/movies/${movieId.id}`)
            .then((response)=>{
                setData(response.data)
            })
            .catch((err) => {
                setError(true)
                setErrorMsg('Problem z wyświetleniem filmu')
            })
    }

    const getWatcherInfo = () => {
        axios
            .get(`http://localhost:8080/api/movies/${movieId.id}/watchers/${user.userId}`)
            .then((response) => {
                if (response.data.isWatcher){
                    setWatched(true)
                }
            })
            .catch((error) => {
                setError(true)
                setWatched(false)
                setErrorMsg('Problem z wyświetleniem dodatkowych informacji filmu')
            })
    }

    useEffect(() => {
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
           .delete(`http://localhost:8080/api/ratings/${ratingData.id}`,
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
            .patch(`http://localhost:8080/api/rating/${ratingData.id}`,
                {
                    rate: rate
                },
                config
            )
            .then((response) => {
                setRatingData(response.data)
                setWhichRateSelect(rate)
            })
            .catch((error)=>{
                setError(true)
                setErrorMsg('Problem z zaktualizowaniem oceny')
            })
    }
    const selectRating = (rate) => {
        axios
            .post(`http://localhost:8080/api/rating`,
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

    const getRating = () => {
        axios
            .get(`http://localhost:8080/api/ratings/movies/${movieId.id}/users/${user.userId}`)
            .then((response) => {
                setRatingData(response.data)
                setWhichRateSelect(response.data.rate)
            })
            .catch((error)=>{
                setError(true)
                setErrorMsg('Problem z wyświetleniem oceny filmu')
            })
    }

    const deleteWatcher = () => {
        axios
            .delete(`http://localhost:8080/api/movies/${movieId.id}/watchers/${user.userId}`,
                config)
            .then((response) => {
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
            .post(`http://localhost:8080/api/movies/${movieId.id}/watchers/${user.userId}`,
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
            .delete(`http://localhost:8080/api/movies/${movieId.id}`,
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
                                    className={whichHover > 0 || whichRateSelect > 0 ? [styles.selectedRateNumber, styles.selectedRateNumberAfter].join(' ') : [styles.selectedRateNumber, styles.selectedRateNumberBefore].join(' ')}>{whichRateSelect > 0 && whichHover === 0 ? getSelectedRate(whichRateSelect) : getSelectedRate(whichHover)}</div>
                            </div>
                            <div className={styles.ratingLabels}>
                                <p>{whichRateSelect > 0 && whichHover === 0 ? getLabelByRate(whichRateSelect) : getLabelByRate(whichHover)}</p>
                            </div>
                        </div>
                        <div className={styles.selectRateStar}>
                            <Link to="" onClick={() => handleSelectRating(1)} onMouseEnter={() => handlerStarHover(1)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 1 || (whichRateSelect >= 1 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(2)} onMouseEnter={() => handlerStarHover(2)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 2 || (whichRateSelect >= 2 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(3)} onMouseEnter={() => handlerStarHover(3)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 3 || (whichRateSelect >= 3 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(4)} onMouseEnter={() => handlerStarHover(4)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 4 || (whichRateSelect >= 4 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(5)} onMouseEnter={() => handlerStarHover(5)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 5 || (whichRateSelect >= 5 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(6)} onMouseEnter={() => handlerStarHover(6)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 6 || (whichRateSelect >= 6 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(7)} onMouseEnter={() => handlerStarHover(7)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 7 || (whichRateSelect >= 7 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(8)} onMouseEnter={() => handlerStarHover(8)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 8 || (whichRateSelect >= 8 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(9)} onMouseEnter={() => handlerStarHover(9)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 9 || (whichRateSelect >= 9 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                            <Link to="" onClick={() => handleSelectRating(10)} onMouseEnter={() => handlerStarHover(10)}
                                  onMouseLeave={() => handlerStarHover(0)}>{whichHover >= 10 || (whichRateSelect >= 10 && whichHover === 0) ?
                                <IoStar/> : <IoStarOutline/>}</Link>
                        </div>
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
                    <h2>Komentarze:</h2>
                    {data.comments?.length > 0 ? data.comments.map((comment) =>
                        <Comment
                            id={comment.id}
                            content={comment.content}
                            publishedAt={comment.publishedAt}
                            movieId={comment.movieId}
                            userId={comment.userId}
                            userLogin={comment.userLogin}
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
                    <p className={styles.error}>Problem z wyświetleniem filmu</p>
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
