import Carousel from "@itseasy21/react-elastic-carousel";
import styles from './carouselSlider.css'
import {useEffect, useState} from "react";
import axios from "axios";
import NotFoundText from "../common/notFoundText";
import {BASE_URL} from "../../config/shared";
import BannerCard from "./bannerCard";
const CarouselSlider = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, pagination: false },
        { width: 850, itemsToShow: 2 },
        { width: 1150, itemsToShow: 2 },
        { width: 1450, itemsToShow: 2 },
        { width: 1750, itemsToShow: 2 },
    ]
    const getNewestMovie = () => {
        axios
            .get(`${BASE_URL}/api/movies/lastest?last=${14}`)
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
            <Carousel
                breakPoints={breakPoints}
                className={styles.rec}
                enableAutoPlay
                autoPlaySpeed={5000}
                itemsToScroll={1}
                isRTL={false}
            >
                {Array.isArray(data) && (
                    data?.map((movie) => (
                            // <MovieCard
                            //     id={movie.id}
                            //     title={''}
                            //     img={movie.image}
                            //     key={movie.id}
                            // />
                        <BannerCard
                            id={movie.id}
                            title={movie.title}
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
