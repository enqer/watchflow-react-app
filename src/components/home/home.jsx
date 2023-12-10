import CarouselSlider from '../carousel/carouselSlider';
import styles from './home.module.css'
import img from "../../img/background.jpg";
import img2 from "../../img/news.jpg";
import NewsCard from "../news/newsCard";

const Home = () => {
        const arr = [...Array(10).keys()]
        const arr2 = [...Array(3).keys()]
// TODO nowy komponent za te kafelki?? po prawej u góry gwiazdki a na środku tytuł??
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
                                {arr.map(a => (
                                    <div className={styles.movieCell}>
                                            <img className={styles.moviesImg}  src={img}/>
                                    </div>
                                ))}
                        </div>
                </div>
            </div>
        )
}
export default Home;
