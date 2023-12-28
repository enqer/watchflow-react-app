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


        const getPopularMovies = () => {
                axios
                    .get(`http://localhost:8080/api/movies/popular?last=${5}`)
                    .then((response) => {
                            setData(response.data)
                    })
                    .catch((error) => console.log(error))
        }

        useEffect(() => {
                getPopularMovies()
        }, []);

        return (
            <div className={styles.container}>
                    <p className={styles.popularText}>Odkryj nowości</p>
                <CarouselSlider />
                <div>
                        <p className={styles.popularText}>Newsy tygodnia</p>
                        <div className={styles.news}>
                                {arr2.map(a => (
                                    <NewsCard id={Math.floor(Math.random() * 10)} img={img2} headline={"Marvel nie skasuje Kanga. Jonathan Majors to co innego"} />
                                ))}
                        </div>
                </div>
                <div >
                        <p className={styles.popularText}>Najpopularniejsze</p>
                        <div className={styles.wrapperImages}>
                                {
                                        data.map((movie) => (
                                            <MovieCard id={movie.id} img={movie.image} title={movie.title} />
                                        ))
                                }
                        </div>
                </div>
            </div>
        )
}
export default Home;
