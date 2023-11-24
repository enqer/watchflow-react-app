import NewsCard from "./newsCard";
import img2 from "../../img/news.jpg";
import './news.css'

const News = () => {
    const arr2 = [1,2,3,4,5,6,7,8,9,10]

    return (
        <div className="newsContainer">
            <p className="newsHeaderText">Newsy tygodnia</p>
            <div className="newsWrapper">
                {arr2.map(a => (
                    <NewsCard id={Math.floor(Math.random() * 10)} img={img2} headline={"Marvel nie skasuje Kanga. Jonathan Majors to co innego"} />
                ))}
            </div>
        </div>
    )
}
export default News
