import CarouselSlider from '../carousel/carouselSlider';
import './home.css'
import img from "../../img/background.jpg";
import img2 from "../../img/news.jpg";
import NewsCard from "../news/newsCard";

const Home = () => {
        const arr = [...Array(10).keys()]
        const arr2 = [...Array(3).keys()]
// TODO nowy komponent za te kafelki?? po prawej u góry gwiazdki a na środku tytuł??
        return (
            <div className="homeContainer">
                    <p className="homePopularText">Odkryj nowości</p>
                <CarouselSlider />
                <div>
                        <p className="homePopularText">Newsy tygodnia</p>
                        <div className="homeNews">
                                {arr2.map(a => (
                                    <NewsCard img={img2} headline={"Marvel nie skasuje Kanga. Jonathan Majors to co innego"} />
                                ))}
                        </div>
                </div>
                <div className="homePopular">
                        <p className="homePopularText">Najpopularniejsze</p>
                        <div className="moviesWrapperImages">
                                {arr.map(a => (
                                    <div className="moviesImage">
                                            <img className="moviesImg"  src={img}/>
                                    </div>
                                ))}
                        </div>
                </div>
            </div>
        )
}
export default Home;
