import img from "../../img/zielona.jpg";
import styles from './ranking.module.css'

import BackPage from "../main/backPage";
import MovieRankCard from "./movieRankCard";

const Ranking = () => {
    const arr = [...Array(10).keys()]

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
        <div className={styles.containerFluid}>
            <BackPage backTo={"/home"} title={"Powrót do strony głównej"} />
            <div className={styles.container}>
                <MovieRankCard rank={"10"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
            </div>
        </div>
    )
}

export default Ranking
