import CarouselSlider from '../carousel/carouselSlider';
import './home.css'
import img from "../../img/loki.jpg";

const Home = () => {
        const arr = [...Array(10).keys()]

        return (
            <div className="homeContainer">
                    <p className="homePopularText">Odkryj nowości</p>
                <CarouselSlider />
                <div>
                        <p className="homePopularText">Newsy tygodnia</p>
                </div>

                <div className="homePopular">
                        <p className="homePopularText">Najpopularniejsze</p>
                        <div className="moviesWrapperImages">
                                {arr.map(a => (
                                    <div className="moviesImage">
                                            {/*<div className="moviesImg">{a+1}</div>*/}
                                            <img className="moviesImg" src={img}/>
                                    </div>
                                ))}
                        </div>
                </div>
            </div>
        )
}
export default Home;
