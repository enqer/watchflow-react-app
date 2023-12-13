import img from "../../img/zielona.jpg";
import MovieRankCard from "../movies/movieRankCard";
import styles from './ranking.module.css'
import stylesBackPage from '../main/backPage.module.css'
import {Link} from "react-router-dom";
import {FaArrowLeftLong} from "react-icons/fa6";
import {useState} from "react";
import BackPage from "../main/backPage";

const Ranking = () => {
    const arr = [...Array(10).keys()]
    // const [arrowMove, setArrowMove]=useState(false)
    // const handlerArrow = () => {
    //     setArrowMove(!arrowMove)
    // }
    return (
        // <div className="rankingBackground" >
        //     <div className="rankingContainer">
        //         <div className="rankingTitle">
        //             <p>Ranking najlepszych filmów</p>
        //         </div>
        //         <div>
        //             {arr.map(a =>
        //                 <div className="rankingCard">
        //                     <p className="rankingNum">{a+1}</p>
        //                     <MovieRankCard img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
        //                 </div>
        //             )}
        //         </div>
        //     </div>
        // </div>
        <div>
            <BackPage backTo={"/home"} title={"Powrót do strony głównej"} />
        </div>
    )
}

export default Ranking
