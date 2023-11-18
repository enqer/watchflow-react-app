import Carousel from "@itseasy21/react-elastic-carousel";
import './carousel.css'
import img from '../../img/loki.jpg'
const CarouselSlider = () => {


    return (

        <div className="carouselContainer">
            <Carousel enableAutoPlay autoPlaySpeed={5000} >
                <img className="carouselCell" src={img}/>
                <img className="carouselCell" src={img}/>
                <img className="carouselCell" src={img}/>
            </Carousel>
        </div>
    )

}
export default CarouselSlider
