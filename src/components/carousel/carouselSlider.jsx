import Carousel from "@itseasy21/react-elastic-carousel";
import styles from './carousel.css'
import {useEffect, useState} from "react";
import axios from "axios";
import Circle from "./circle";
const CarouselSlider = () => {
    const [data, setData] = useState([])
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
            .get(`http://localhost:8080/api/movies/lastest?last=${3}`)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => console.log(error))
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


                      // renderPagination={({ pages, activePage, onClick }) => {
                      //     return (
                      //         <div className={styles.paginationWrapper}>
                      //             {pages.map(page => {
                      //                 const isActivePage = activePage === page
                      //                 return (
                      //                     <Circle
                      //                         key={page}
                      //                         onClick={() => onClick(page)}
                      //                         active={isActivePage}
                      //                     />
                      //                 )
                      //             })}
                      //         </div>
                      //     )
                      // }}
            >
                {
                    data.map((movie) =>
                        (
                            <div>
                                <img src={movie.image} alt=""/>
                            </div>
                        )
                    )
                }
            </Carousel>
        </div>
    )

}
export default CarouselSlider
