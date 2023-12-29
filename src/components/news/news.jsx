import NewsCard from "./newsCard";
import img2 from "../../img/news.jpg";
import './news.css'
import axios from "axios";
import {useEffect, useState} from "react";

const News = () => {
    const [newsData, setNewsData] = useState([])
    const getNews = () => {
        axios
            .get(`http://localhost:8080/api/news`)
            .then((response) => {
                setNewsData(response.data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {

        getNews()
    }, []);

    return (
        <div className="newsContainer">
            <p className="newsHeaderText">Newsy</p>
            <div className="newsWrapper">
                {
                    newsData.map((news) => (
                        <NewsCard id={news.id} img={news.image} headline={news.title}/>
                    ))

                }
            </div>
        </div>
    )
}
export default News
