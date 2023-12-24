import img from "../../img/zielona.jpg";
import styles from './ranking.module.css'

import BackPage from "../main/backPage";
import MovieRankCard from "./movieRankCard";

const Ranking = () => {
    const arr = [...Array(10).keys()]

    return (
        <div className={styles.containerFluid}>
            <BackPage backTo={"/home"} title={"Powrót do strony głównej"} />
            <div className={styles.titleRanking}>
                <p className={styles.rankingText}>Odkryj ranking</p>
            </div>
            <div className={styles.container}>
            <MovieRankCard rank={"1"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"2"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"3"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"4"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"5"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"6"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"7"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"8"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"9"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
                <MovieRankCard rank={"10"}  img={img} title={"Zielona mila"} titleEng={"The Green Mile 1999"} rating={"8,6"} numOfRating={"980 732"} genre={"Dramat"} director={"Frank Darabont"}/>
            </div>
        </div>
    )
}

export default Ranking
