import CarouselSlider from './carouselSlider';
import MovieCard from "./movies/movieCard";
import img from '../img/zielona.jpg'


const Home = () => {

        return (
            <div>
                <CarouselSlider />

                <div>
                        <MovieCard img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                </div>
            </div>
        )
}
export default Home;
