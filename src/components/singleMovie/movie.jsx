
import styles from './movie.module.css'
import img from "../../img/loki.jpg";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";
import MovieInfo from "./movieInfo";
import BackPage from "../main/backPage";



const Movie = () => {

    const [arrowMove, setArrowMove]=useState(false)
    const [whichHover, setWhichHover] = useState(0)
    const [watched, setWatched] = useState(false)

    const handlerArrow = () => {
      setArrowMove(!arrowMove)
    }
    const handlerStarHover = (num) => {
        setWhichHover(num)
    }
    const getLabelByRate = (rate) => {
        const matchingRates = rates.filter(r => r.value === rate);
        return matchingRates.length > 0 ? matchingRates[0].label : "Widziałem, moja ocena:";
    }
    const getSelectedRate = (rate) => {
        const matchingRates = rates.filter(r => r.value === rate);
        return matchingRates.length > 0 ? matchingRates[0].value : null;
    }

    return (
        <div className={styles.containerFluid}>
            <BackPage backTo={"/movies"} title={"Loki"} />
            <div className={styles.container}>
                <div className={styles.mainContainer}>
                    <div className={styles.displayImg}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={styles.infoDataWrapper}>
                        <MovieInfo />
                    </div>
                    <div className={styles.rateWrapper}>
                        <div className={styles.displaySelectedRate}>
                            <div className={styles.ratingValues}>
                                <FaRegUserCircle className={styles.defaultIconNumber} />
                                <div className={whichHover > 0 ? [styles.selectedRateNumber, styles.selectedRateNumberAfter].join(' ') : [styles.selectedRateNumber, styles.selectedRateNumberBefore].join(' ')}>{getSelectedRate(whichHover)}</div>
                            </div>
                            <div className={styles.ratingLabels}>
                                <p>{getLabelByRate(whichHover)}</p>
                            </div>
                        </div>
                        <div className={styles.selectRateStar}>
                            <Link to="" onMouseEnter={() =>handlerStarHover(1)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 1 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(2)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 2 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(3)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 3 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(4)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 4 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(5)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 5 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(6)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 6 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(7)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 7 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(8)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 8 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(9)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 9 ? <IoStar /> : <IoStarOutline />}</Link>
                            <Link to="" onMouseEnter={() =>handlerStarHover(10)} onMouseLeave={() =>handlerStarHover(0)}>{whichHover >= 10 ? <IoStar /> : <IoStarOutline />}</Link>
                        </div>
                        <div className={styles.selectWatched}>
                            <p>Już obejrzane?</p>
                            <input type="checkbox" checked={watched} onChange={(event) => setWatched(!watched)}/>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionWrapper}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum doloribus maiores natus nisi numquam possimus sequi voluptates. Accusantium aliquam consequatur incidunt, neque possimus quod ratione recusandae voluptatibus? Cumque debitis eaque eos esse iure minus numquam quisquam ut. Accusamus aspernatur autem dicta dignissimos doloribus ducimus facilis, fugit inventore ipsa iste iure mollitia obcaecati praesentium ratione veniam voluptatem voluptatibus? Alias aliquam aut cumque ex facere, fugit impedit inventore placeat quae, recusandae, rem temporibus veritatis voluptatem. Architecto asperiores consequatur dicta eligendi et ex facere id illo in iste magnam modi nesciunt numquam pariatur porro quaerat quas quo ratione reiciendis, rem repellat repudiandae similique tempore voluptate voluptates! Ad aliquam aperiam, consectetur doloremque dolores ea error expedita facilis fugiat iusto labore, laborum, laudantium libero maiores maxime minima modi officia omnis quis sapiente similique soluta suscipit tempora tempore velit. Aliquid cum eos facilis, iusto neque possimus quas quasi quibusdam, quos, repellendus sequi unde voluptate. Amet atque, dolore, dolorem error explicabo fugiat nesciunt numquam officia optio praesentium quam sit soluta tempore ullam voluptatem. Accusantium amet architecto doloremque enim ipsa natus omnis! Accusamus aspernatur debitis dolore, doloremque doloribus eos exercitationem, hic ipsam iste molestiae optio pariatur porro quod reiciendis repellat suscipit tenetur ullam velit. Doloremque eius minima odit.
                    </p>
                </div>
            </div>
        </div>
    )
}

const rates = [
    {
        label: "Nieporozumienie",
        value: 1
    },
    {
        label: "Bardzo słaby",
        value: 2
    },
    {
        label: "Słaby",
        value: 3
    },
    {
        label: "Ujdzie",
        value: 4
    },
    {
        label: "Średni",
        value: 5
    },
    {
        label: "Niezły",
        value: 6
    },
    {
        label: "Dobry",
        value: 7
    },
    {
        label: "Bardzo dobry",
        value: 8
    },
    {
        label: "Rewelacyjny",
        value: 9
    },
    {
        label: "Arcydzieło!",
        value: 10
    }
]
export default Movie;
