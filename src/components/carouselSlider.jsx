import Carousel from "@itseasy21/react-elastic-carousel";
import '../styles/carousel.css'
const CarouselSlider = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 1},
        {width: 768, itemsToShow: 1},
        {width: 1200, itemsToShow: 1},
    ];

    const styles = {
        carosuelCell: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '250px',
            width: '100%',
            backgroundColor: '#00008B',
            color: '#fff',
            margin: '0 15px',
            fontSize: '4em',
        },
        carosuel : {
            color: 'white'
        }
    }
    return (

        <div>
            <div>
                <p>Odkryj nowości</p>
            </div>
            <Carousel style={styles.carosuel} breakPoints={breakPoints} >
                <div style={styles.carosuelCell}>One</div>
                <div style={styles.carosuelCell}>One</div>
                <div style={styles.carosuelCell}>One</div>
                <div style={styles.carosuelCell}>One</div>
                <div style={styles.carosuelCell}>One</div>
            </Carousel>
        </div>
    )

}
export default CarouselSlider
