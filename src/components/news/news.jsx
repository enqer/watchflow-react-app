import NewsCard from "./newsCard";
import styles from './news.module.css'
import axios from "axios";
import {useEffect, useState} from "react";

const News = () => {
    const [newsData, setNewsData] = useState([])
    const [error, setError] = useState(false)
    const getNews = () => {
        axios
            .get(`http://localhost:8080/api/news`)
            .then((response) => {
                setNewsData(response.data)
                setError(false)
            })
            .catch((error) => setError(true))
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.headerText}>Newsy</p>
            <div className={styles.wrapper}>
                {newsData.map((news) => (
                        <NewsCard
                            id={news.id}
                            img={news.image}
                            headline={news.title}
                            key={news.id}
                        />
                    ))
                }
            </div>
            {error && (
                <p className={styles.error}>Brak newsów</p>
            )}
        </div>
    )
}
export default News
