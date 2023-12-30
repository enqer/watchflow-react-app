import CarouselSlider from '../carousel/carouselSlider';
import styles from './home.module.css'
import NewsCard from "../news/newsCard";
import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../movies/movieCard";

const Home = () => {
        const [data, setData] = useState([])
        const [newsData, setNewsData] = useState([])


        const getPopularMovies = () => {
                axios
                    .get(`http://localhost:8080/api/movies/popular?last=${5}`)
                    .then((response) => {
                            setData(response.data)
                    })
                    .catch((error) => setData([]))
        }

        const getNews = () => {
                axios
                    .get(`http://localhost:8080/api/news/lastest?last=${3}`)
                    .then((response) => {
                            setNewsData(response.data)
                    })
                    .catch((error) => setNewsData([]))
        }

        useEffect(() => {
                getPopularMovies()
                getNews()
        }, []);

        return (
            <div className={styles.container}>
                    <p className={styles.popularText}>Odkryj nowości</p>
                <CarouselSlider />
                <div>
                        <p className={styles.popularText}>Newsy tygodnia</p>
                        <div className={styles.news}>
                                {Array.isArray(newsData) && (
                                    newsData.map((news) => (
                                        <NewsCard
                                            id={news.id}
                                            img={news.image}
                                            headline={news.title}
                                            key={news.id}
                                        />
                                    ))
                                )}
                        </div>
                </div>
                <div >
                        <p className={styles.popularText}>Najpopularniejsze</p>
                        <div className={styles.wrapperImages}>
                                {Array.isArray(data) && (
                                    data.map((movie) => (
                                        <MovieCard
                                            id={movie.id}
                                            img={movie.image}
                                            title={movie.title}
                                            key={movie.id}
                                        />
                                    ))
                                )}
                        </div>
                </div>
            </div>
        )
}
export default Home;
