import Carousel from "@itseasy21/react-elastic-carousel";
import styles from './carousel.css'
import {useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "../movies/movieCard";
import NotFoundText from "../common/notFoundText";
const CarouselSlider = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]
    const getNewestMovie = () => {
        axios
            .get(`http://localhost:8080/api/movies/lastest?last=${10}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                setError(true)
                setData([])
            })
    }

    useEffect(() => {
        getNewestMovie()
    }, []);

    return (

        <div className={styles.carouselContainer}>
            <Carousel breakPoints={breakPoints}
                      enableAutoPlay
                      autoPlaySpeed={5000}
                      itemsToScroll={1}
                      isRTL={false}
            >
                {Array.isArray(data) && (
                    data?.map((movie) => (
                            <MovieCard
                                id={movie.id}
                                title={''}
                                img={movie.image}
                                key={movie.id}
                            />
                    ))
                )}
            </Carousel>
            {error && (
                <NotFoundText text={"Nie znaleziono"} />
            )}
        </div>
    )

}
export default CarouselSlider
