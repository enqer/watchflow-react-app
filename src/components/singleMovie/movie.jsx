import styles from './movie.module.css'
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
import Alert from "../common/alert";
import RateBar from "./rateBar";
import {toast} from "react-hot-toast";
import {BASE_URL} from "../../config/appConfig";

const Movie = () => {

    let navigate = useNavigate()
    const [data,setData]= useState({})
    const movieId = useParams()

    useEffect(() => {
        const getInfoMovie = () => {
            axios
                .get(`${BASE_URL}/api/movies/${movieId.id}`)
                .then((response)=>{
                    setData(response.data)
                })
                .catch((err) => {
                    toast('Problem z wyświetleniem filmu')
                    switchRoute()
                })
        }
        getInfoMovie()
    }, []);

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
                toast('Problem z usunięciem filmu')
            })
    }
    return (
        <div className={styles.containerFluid}>
            <Alert />
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
                        <MovieInfo  movieData={data} />
                    </div>
                    <RateBar movieId={movieId.id} />
                </div>
                <div className={styles.descriptionWrapper}>
                    <p>
                        {data.content}
                    </p>
                </div>
                <div>
                    <h2 className={styles.commentText}>Komentarze:</h2>
                    {data.comments?.length > 0 ? (
                        data.comments.map((comment) =>
                            <Comment
                                commentData={comment}
                                key={comment.id}
                            />
                        )
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
            </div>
        </div>
    )
}
export default Movie;
