
import styles from './movie.module.css'
import img from "../../img/loki.jpg";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoStar, IoStarOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import {useState} from "react";
import {Link} from "react-router-dom";



const Movie = () => {

    const [arrowMove, setArrowMove]=useState(false)
    const [whichHover, setWhichHover] = useState(0)

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
           <div className={styles.backPage}
           >
               <Link to="/movies"
                     onMouseEnter={handlerArrow}
                     onMouseLeave={handlerArrow}
               >
                   <div className={styles.arrow}>
                       <FaArrowLeftLong className={arrowMove? styles.arrowMoveAfter : styles.arrowMoveBefore} />
                   </div>
                   <p>Title</p>
               </Link>
           </div>
            <div className={styles.container}>
                <div className={styles.displayImg}>
                    <img src={img} alt=""/>
                </div>
                <div className={styles.infoDataWrapper}>
                    <div className={styles.singleInfoWrap}>
                        <p className={styles.preInfoText}>Nazwa:</p>
                        <p className={styles.infoText}>Loki</p>
                    </div>
                    <div className={styles.singleInfoWrap}>
                        <p className={styles.preInfoText}>Reżyser:</p>
                        <p className={styles.infoText}>Mariusz</p>
                    </div>
                    <div className={styles.singleInfoWrap}>
                        <p className={styles.preInfoText}>Data premiery:</p>
                        <p className={styles.infoText}>2023</p>
                    </div>
                    <div className={styles.singleInfoWrap}>
                        <p className={styles.preInfoText}>Gatunek:</p>
                        <p className={styles.infoText}>Biograficzny</p>
                    </div>
                </div>
                <div className={styles.rateWrapper}>
                    <div className={styles.displaySelectedRate}>
                        <div className={styles.ratingValues}>
                            <FaRegUserCircle className={styles.defaultIconNumber} />
                            <div className={whichHover > 0 ?
                                [styles.selectedRateNumber, styles.selectedRateNumberAfter].join(' ')
                                                    :
                                [styles.selectedRateNumber, styles.selectedRateNumberBefore].join(' ')}>{getSelectedRate(whichHover)}</div>
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
                    <div>
                        <p>Już obejrzane?</p>
                    </div>
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
