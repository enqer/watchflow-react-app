import styles from './newsPage.module.css'
import {useEffect, useState} from "react";
import BackPage from "../common/backPage";
import {useParams} from "react-router-dom";
import axios from "axios";
import {config, isLogged, user} from "../../config/authConfig";
import {MdDelete} from "react-icons/md";
import {useNavigate} from "react-router";

import {BASE_URL} from "../../config/appConfig";

const NewsPage = (props) => {

    let navigate = useNavigate()
    const [newsData, setNewsData] = useState({})
    const [error, setError] = useState(false)
    const newsId = useParams()

    const getNews = () => {
        axios
            .get(`${BASE_URL}/api/news/${newsId.id}`)
            .then((response) => {
                setNewsData(response.data)
                setError(false)
            })
            .catch((error) => setError(true))
    }

    useEffect(() => {
        getNews()
    }, );

    const switchRoute = () => {
        navigate('/news')
        window.location.reload()
    }

    const handleDeleteNews = () => {
        axios
            .delete(`${BASE_URL}/api/news/${newsId.id}`,
                config
            )
            .then((response) => {
                switchRoute()
            })
            .catch((error) => setError(true))
    }

    return(
        <div className={styles.newsContainerFluid}>
            <BackPage
                backTo={"/news"}
                title={"Powrót"}
            />
            <div className={styles.container}>
                <div className={styles.titleWrap}>
                    <p>{newsData.title}</p>
                </div>
                <div className={styles.authorInfo}>
                    <p>
                        <span className={styles.spanColor}>
                            Autor: </span>{`${newsData.author?.firstName} ${newsData.author?.lastName}`}
                        <span className={styles.spanColor}> / </span>{newsData.publishedAt}
                    </p>
                </div>
                <div className={styles.imgWrapper}>
                    <img
                        src={newsData.image}
                        alt=""
                    />
                    <h3>{newsData.content?.substring(0, newsData.content.indexOf('.') + 1)}</h3>
                </div>
                <div className={styles.descriptionWrapper}>
                {/*<h3>{newsData.content?.substring(0, newsData.content.indexOf('.') + 1)}</h3>*/}
                    <p>{newsData.content?.substring(newsData.content.indexOf('.') + 1)}</p>
                </div>
                <div>
                    {isLogged
                        && user.isAdmin
                        && (
                            <div
                                className={styles.deleteMovie}
                                onClick={handleDeleteNews}
                            >
                                <p>Usuń news</p>
                                <MdDelete/>
                            </div>
                        )
                    }
                </div>
                {error && (
                    <p className={styles.error}>Brak newsów</p>
                )}
            </div>
        </div>
    )
}

export default NewsPage
