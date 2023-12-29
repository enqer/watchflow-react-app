import CarouselSlider from '../carousel/carouselSlider';
import styles from './home.module.css'
import img from "../../img/background.jpg";
import img2 from "../../img/news.jpg";
import NewsCard from "../news/newsCard";
import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../movies/movieCard";

const Home = () => {
        const arr = [...Array(10).keys()]
        const arr2 = [...Array(3).keys()]
        const [data, setData] = useState([])
        const [newsData, setNewsData] = useState([])


        const getPopularMovies = () => {
                axios
                    .get(`http://localhost:8080/api/movies/popular?last=${5}`)
                    .then((response) => {
                            setData(response.data)
                    })
                    .catch((error) => console.log(error))
        }

        const getNews = () => {
                axios
                    .get(`http://localhost:8080/api/news/lastest?last=${3}`)
                    .then((response) => {
                            setNewsData(response.data)
                    })
                    .catch((error) => console.log(error))
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
                </div>
                <div >
                        <p className={styles.popularText}>Najpopularniejsze</p>
                        <div className={styles.wrapperImages}>
                                {data.map((movie) => (
                                    <MovieCard
                                        id={movie.id}
                                        img={movie.image}
                                        title={movie.title}
                                        key={movie.id}
                                    />
                                ))
                                }
                        </div>
                </div>
            </div>
        )
}
export default Home;
